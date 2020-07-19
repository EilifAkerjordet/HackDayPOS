import React, { useContext } from 'react';
import {
  Grid, Typography, Drawer, Divider, List, ListItem, Button,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import ItemInTransaction from './ItemInTransaction';
import useStyles from '../styles/classes';
import { Context } from '../App';

const TransactionBar = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Context);

  return (
    <Drawer
      className={classes.drawerTransaction}
      variant="permanent"
      classes={{
        paper: classes.drawerPaperTransaction,
      }}
      anchor="right"
    >
      <List style={{ marginTop: '60px' }}>
        {state.currentTransaction.products.map((product) => (
          <ListItem key={uuidv4()}>
            <ItemInTransaction name={product.name} quantity={product.quantity} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Grid container justify="flex-end">
        <Grid item xs={9}>
          <Typography paragraph>{`Total: $${state.currentTransaction.total}`}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => dispatch({ type: 'COMPLETE_TRANSACTION' })}
          >
            Pay
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default TransactionBar;
