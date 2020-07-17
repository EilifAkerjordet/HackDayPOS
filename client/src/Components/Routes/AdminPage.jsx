import React, { useState } from 'react';
import {
  Grid, Button, FormControl, Input, InputLabel,
} from '@material-ui/core';

const AdminPage = () => {
  const [inputs, setInputs] = useState({ name: '', price: '' });
  return (
    <Grid container direction="column" space={4} justify="center" alignItems="center">
      <h1>ADD AN ITEM!</h1>
      <Grid item xs={6}>
        <FormControl>
          <InputLabel htmlFor="name">Product Name:</InputLabel>
          <Input
            id="name"
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <InputLabel htmlFor="price">Price:</InputLabel>
          <Input
            id="price"
            onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: '10px' }}
          onClick={() => {
            if (inputs.name && inputs.price) {
              fetch('/api/products', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
              });
            }
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AdminPage;
