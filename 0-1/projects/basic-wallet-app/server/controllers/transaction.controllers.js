import mongoose from 'mongoose';

import {Transaction} from '../models/transaction.models.js';
import {ApiResponse} from '../utils/ApiResponse.js';

const getAllTransactions = async (req, res) => {
  const transactions = await Transaction.find({
    $or: [{senderId: req.user._id}, {recipientId: req.user._id}],
  })
    .populate('senderId', 'name')
    .populate('recipientId', 'name')
    .select('-__v')
    .sort({createdAt: -1});

  const transactionList = transactions.map(transaction => {
    const utcDate = new Date(transaction.createdAt);

    return {
      sender: transaction.senderId?.name || 'ADMIN',
      recipient: transaction.recipientId?.name,
      amount: transaction.amountINR,
      date: utcDate.toLocaleDateString('en-GB'),
      time: utcDate.toLocaleTimeString('en-US', {timeZone: 'Asia/Kolkata'}),
    };
  });

  return res.json(
    new ApiResponse(
      200,
      {transactions: transactionList},
      'Transactions fetched successfully'
    )
  );
};

export {getAllTransactions};
