import mongoose from 'mongoose';
//import dotenv from 'dotenv';

//dotenv.config();

const connectDB = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  // eslint-disable-next-line
  db.on('error', (error) => console.log(error));
  // eslint-disable-next-line
  db.once('open', () => console.log('connected to database'))
};

export default connectDB;
