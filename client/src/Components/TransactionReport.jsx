import React from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const TransactionReport = ({ products, totalProd, transactionDate }) => (
  <Grid item xs={4}>
    <Card style={{ height: '200px', backgroundColor: '#646464' }}>
      <h3>{`Transaction date: ${transactionDate}`}</h3>
      {products.map((product) => (
        <Typography key={uuidv4()} paragraph>
          {`${product.name} x${product.quantity}`}
        </Typography>
      ))}
      <p>{`Total transaction value: $${totalProd}`}</p>
    </Card>
  </Grid>
);

export default TransactionReport;
