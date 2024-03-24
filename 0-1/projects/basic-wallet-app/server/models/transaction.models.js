import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    recipientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
      set: amount => Math.round(amount * 100),
    },
  },
  {timestamps: true}
);

transactionSchema.virtual('amountINR').get(function () {
  // Convert the amount from paisa to rupees
  return (this.amount / 100).toFixed(2);
});

export const Transaction = new mongoose.model('Transaction', transactionSchema);
