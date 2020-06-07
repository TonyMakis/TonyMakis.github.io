import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
let useStyles;
export default useStyles = makeStyles({
  card: {
    flexGrow: 1,
    backgroundColor: '#f7d2ff',
    borderRadius: 12,
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 
                0 6px 20px 0 rgba(0, 0, 0, 0.4)`,
    // transition: 'all .2s ease-in-out',
    // '&:hover': {
    //   transform: 'scale(1.01)',
    // },
  },
  paperBack: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #5edf4d96, #58ccdc)',
    borderRadius: 16,
    padding: '0.8em',
    paddingBottom: '0.5em',
  },
  fancyTitle: {
    color: '#122715',
    fontFamily: 'Segoe UI',
    fontSize: '1.4em',
    fontWeight: 'bold',
  },
  coloredArrowEmoji: {
    color: '#3f51b5',
    fontSize: '0.8em',
  },
  flexing: {
    display: 'flex',
  },
  heading: {
    fontSize: '0.8em',
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '0.8em',
  },
});
