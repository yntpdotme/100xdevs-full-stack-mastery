import mongoose from 'mongoose';

// Define Schema
const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Store the balance as an integer representing the smallest monetary unit (e.g., paisa)
  // For INR, multiply the balance by 100 to store it as paisa
  balance: {
    type: Number,
    required: true,
    min: 0, 
    set: amount => Math.round(amount * 100),
  },
});

walletSchema.virtual('balanceINR').get(function () {
  // Convert the balance from paisa to rupees
  return (this.balance / 100).toFixed(2);
});

// Create and Export Model
export const Wallet = mongoose.model('Wallet', walletSchema);
