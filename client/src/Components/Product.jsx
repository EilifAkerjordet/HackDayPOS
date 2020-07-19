import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Grid, Typography, Button, Card,
} from '@material-ui/core';

const Product = ({
  name, price, dispatch,
}) => (
  <Grid item xs={12} md={6} lg={4}>
    <Card style={{ backgroundColor: '#646464' }}>
      <Typography variant="h6">{name}</Typography>
      <Grid container directon="row" justify="space-between">
        <Typography paragraph>{`$${price}`}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({
            type: 'ADD_TO_TRANSACTION',
            payload: { name, price, quantity: 1 },
          })}
        >
          Add
        </Button>
      </Grid>
    </Card>
  </Grid>

);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Product;
