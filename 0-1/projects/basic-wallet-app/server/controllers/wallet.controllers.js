import mongoose from 'mongoose';

import {Wallet} from '../models/wallet.models.js';
import {Transaction} from '../models/transaction.models.js';
import {ApiError, ApiResponse} from '../utils/index.js';
import {
  ValidateDeposit,
  ValidateTransfer,
} from '../validators/wallet.validators.js';

const getBalance = async (req, res) => {
  const wallet = await Wallet.findOne({userId: req.user._id}).populate(
    'userId'
  );

  return res.json(
    new ApiResponse(
      200,
      {
        walletHolder: wallet.userId?.name,
        balance: wallet.balanceINR,
        currency: 'INR',
        gain: wallet.gainInBalance.slice(-1)[0],
      },
      'Balance fetched successfully'
    )
  );
};

const depositAmount = async (req, res) => {
  const {error} = ValidateDeposit(req.body);
  if (error) throw new ApiError(400, error.issues[0].message, []);

  const {amount} = req.body;

  const wallet = await Wallet.findOneAndUpdate(
    {userId: req.user._id},
    {$inc: {balance: amount}},
    {new: true}
  ).populate('userId');

  // Calculate gain
  const gainInBalance = await wallet.depositGain(amount);

  // ADMIN_ID must come from DB. Hardcoding it for testing.
  const ADMIN_ID = '65ffe9ec8d4a1398face07e2';

  // Store deposit data
  await Transaction.create({
    senderId: ADMIN_ID, // system-generated funds
    recipientId: req.user._id,
    amount: amount,
  });

  return res.json(
    new ApiResponse(
      201,
      {
        walletHolder: wallet.userId?.name,
        balance: wallet.balanceINR,
        currency: 'INR',
        gain: gainInBalance,
      },
      'Deposit is successful'
    )
  );
};

const transferAmount = async (req, res, next) => {
  let session;

  try {
    const {error} = ValidateTransfer(req.body);
    if (error) throw new ApiError(400, error.issues[0].message, []);

    // Starting Session
    session = await mongoose.startSession();
    session.startTransaction();

    const {amount, recipientId} = req.body;

    const senderWallet = await Wallet.findOne({userId: req.user._id}).session(
      session
    );

    if (!senderWallet || senderWallet.balanceINR < amount) {
      throw new ApiError(400, 'Insufficient balance');
    }

    const recipientWallet = await Wallet.findOne({
      userId: recipientId,
    }).session(session);

    if (!recipientWallet) {
      throw new ApiError(400, 'Invalid Recipient');
    }

    // Perform the transfer
    await Wallet.updateOne(
      {userId: req.user._id},
      {$inc: {balance: -amount}}
    ).session(session);

    await Wallet.updateOne(
      {userId: recipientId},
      {$inc: {balance: amount}}
    ).session(session);

    // Calculate gain
    await senderWallet.transferGain(-amount, {session});
    await recipientWallet.transferGain(amount, {session});

    // Store tranfer data
    await Transaction.create({
      senderId: req.user._id,
      recipientId: recipientId,
      amount: amount,
    });

    // Commit the transaction
    await session.commitTransaction();

    return res.json(new ApiResponse(200, {}, 'Transaction Successful'));
  } catch (error) {
    await session?.abortTransaction();

    return next(error);
  } finally {
    session?.endSession();
  }
};

export {getBalance, depositAmount, transferAmount};
