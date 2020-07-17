import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Context } from '../App';

const ItemInTransaction = ({ name, quantity }) => {
  const { dispatch } = useContext(Context);
  return (
    <Grid container direction="row" justify="center" alignItems="center" space={0}>
      <Grid item xs={2}>
        <AddIcon
          fontSize="small"
          color="secondary"
          onClick={() => dispatch({ type: 'INCREMENT_ITEM', payload: name })}
        />
      </Grid>
      <Grid item xs={8}>
        <p>{`${name} x${quantity}`}</p>
      </Grid>
      <Grid item xs={2}>
        <RemoveIcon
          fontSize="small"
          color="error"
          onClick={() => dispatch({ type: 'DECREMENT_ITEM', payload: name })}
        />
      </Grid>
    </Grid>
  );
};

export default ItemInTransaction;
