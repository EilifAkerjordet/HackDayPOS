import React from 'react';
import PropTypes from 'prop-types';
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

TransactionReport.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  totalProd: PropTypes.number.isRequired,
  transactionDate: PropTypes.string.isRequired,
};

export default TransactionReport;
