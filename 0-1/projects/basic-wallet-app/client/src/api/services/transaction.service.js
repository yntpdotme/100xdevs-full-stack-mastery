import {clientPrivate as apiClient} from '../client';

const TransactionService = {
  getAllTransactions: () => apiClient.get(`/transactions`),
};

export default TransactionService;
