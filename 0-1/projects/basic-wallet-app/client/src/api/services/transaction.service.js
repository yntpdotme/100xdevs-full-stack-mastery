import {clientPrivate as apiClient} from '../client';

const TransactionService = {
  getAllTransactions: page =>
    apiClient.get(`/transactions?page=${page}&limit=5`),
};

export default TransactionService;
