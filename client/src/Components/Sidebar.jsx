import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import ReceiptIcon from '@material-ui/icons/Receipt';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {
  Route, Link, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import useStyles from '../styles/classes';
import Storefront from './Routes/Storefront';
import Transactions from './Routes/Transactions';
import AdminPage from './Routes/AdminPage';
import Settings from './Routes/Settings';
import NotFound from './Routes/NotFound';

const BaseLayout = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              POS System v1.0.0
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {['Storefront', 'Transactions'].map((text, index) => (
                <Link
                  key={text}
                  to={`/${text}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItem button>
                    <ListItemIcon>{index % 2 === 0 ? <StorefrontIcon /> : <ReceiptIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <List>
              {['AdminPage', 'Settings'].map((text, index) => (
                <Link
                  key={text}
                  to={`/${text}`}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ListItem button>
                    <ListItemIcon>{index % 2 === 0 ? <SupervisorAccountIcon /> : <SettingsIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Redirect exact from="/" to="Storefront" />
          <Route path="/Storefront" component={Storefront} />
          <Route path="/Transactions" component={Transactions} />
          <Route path="/AdminPage" component={AdminPage} />
          <Route path="/Settings" component={Settings} />
          <Route path="/404" component={NotFound} />
          <Redirect exact from="*" to="/404" />
        </main>
      </div>
    </Router>
  );
};

export default BaseLayout;
