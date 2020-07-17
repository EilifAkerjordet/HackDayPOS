import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    error: {
      main: '#ff0000',
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export default theme;
