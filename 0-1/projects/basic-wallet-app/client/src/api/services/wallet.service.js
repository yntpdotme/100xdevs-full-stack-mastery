import {clientPrivate as apiClient} from '../client';

const WalletService = {
  getBalance: () => apiClient.get(`/wallet/balance`),

  deposit: formData => apiClient.post('/wallet/deposit', formData),

  transfer: formData => apiClient.post('/wallet/transfer', formData),
};

export default WalletService;
