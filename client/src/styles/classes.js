import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 190;
const drawerWidthTransaction = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerTransaction: {
    width: drawerWidthTransaction,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerPaperTransaction: {
    width: drawerWidthTransaction,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default useStyles;
