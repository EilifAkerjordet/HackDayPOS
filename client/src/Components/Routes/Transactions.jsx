import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import TransactionReport from '../TransactionReport';

const Transactions = () => {
  const [transactions, setTransactions] = useState(false);
  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);
  return (
    <Grid container direction="row" spacing={2}>
      {!transactions
        ? <CircularProgress />
        : transactions.map((transaction) => (
          <TransactionReport
            key={uuidv4()}
            products={transaction.products}
            totalProd={transaction.total}
            transactionDate={transaction.date}
          />
        ))}
    </Grid>
  );
};

export default Transactions;
