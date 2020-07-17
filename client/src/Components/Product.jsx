import React from 'react';
import {
  Grid, Typography, Button, Card,
} from '@material-ui/core';

const Product = ({
  name, product, price, dispatch,
}) => (
  <>
    <Grid item xs={3}>
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
    <Grid item xs={3} />
  </>

);

export default Product;
