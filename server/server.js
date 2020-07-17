import express from 'express';
import bodyParser from 'body-parser';
// eslint-disable-next-line
import dotenv from 'dotenv';
// eslint-disable-next-line
import morgan from 'morgan';
// eslint-disable-next-line
import connectDB from './dbConfig.js'
// eslint-disable-next-line
import Product from './schemas/Product.js'
// eslint-disable-next-line
import Transaction from './schemas/Transaction.js'

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();

app.use(bodyParser.json());

app.use(morgan((tokens, req, res) => [
  tokens.method(req, res),
  tokens.url(req, res),
  tokens.status(req, res),
  tokens.res(req, res, 'content-length'), '-',
  tokens['response-time'](req, res), 'ms',
].join(' ')));

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

app.post('/api/products', async (req, res) => {
  const person = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const newProduct = await person.save();
  res.status(201).json(newProduct);
});

app.get('/api/transactions', async (req, res) => {
  const transactions = await Transaction.find();
  res.status(200).json(transactions);
});

app.post('/api/transactions', async (req, res) => {
  const transaction = new Transaction({
    products: req.body.products,
    total: req.body.total,
    date: Date.now(),
  });
  const newTransaction = await transaction.save();
  res.status(201).json(newTransaction);
});

app.use((err, req, res, next) => {
  // eslint-disable-next-line
  console.log(err.message);
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server is listening on port ${port}`)
});
