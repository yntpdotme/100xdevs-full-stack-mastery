import mongoose from 'mongoose';

import {Transaction} from '../models/transaction.models.js';
import {ApiResponse, paginateQuery} from '../utils/index.js';

const getAllTransactions = async (req, res) => {
  const {page = 1, limit = 10} = req.query;

  const transactionsQuery = Transaction
    .find({$or: [{senderId: req.user._id}, {recipientId: req.user._id}]})
    .populate('senderId', 'name')
    .populate('recipientId', 'name')
    .select('-__v')
    .sort({createdAt: -1});

  const result = await paginateQuery(transactionsQuery, page, limit);

  const transactionList = result.data.map(transaction => {
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
      {transactions: transactionList, pagination: result.pagination},
      'Transactions fetched successfully'
    )
  );
};

export {getAllTransactions};
