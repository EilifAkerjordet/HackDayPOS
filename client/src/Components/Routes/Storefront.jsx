import React, { useContext, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { Context } from '../../App';
import Product from '../Product';
import TransactionBar from '../TransactionBar';

const Storefront = () => {
  const { dispatch, state } = useContext(Context);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'GET_PRODUCTS', payload: data }));
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      { !state.products
        ? <CircularProgress />
        : state.products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            price={product.price}
            dispatch={dispatch}
          />
        ))}
      <TransactionBar currentTransaction={state.currentTransaction} />
    </Grid>
  );
};

export default Storefront;
