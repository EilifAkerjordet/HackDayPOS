import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    name: String,
    price: true,
  },
});
export default mongoose.model('Person', productSchema);
