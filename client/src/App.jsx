import React, { useReducer } from 'react';
import { Paper } from '@material-ui/core';
import { reducer, initialState } from './reducer';
import BaseLayout from './Components/Sidebar';

const Context = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Paper style={{ height: '100vh', width: '100%' }}>
        <BaseLayout />
      </Paper>
    </Context.Provider>
  );
}

export { App, Context };
