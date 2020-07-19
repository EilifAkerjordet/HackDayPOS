import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
export default mongoose.model('Transaction', transactionSchema);
