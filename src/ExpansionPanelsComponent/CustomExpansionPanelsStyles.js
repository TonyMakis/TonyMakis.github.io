import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
let useStyles;
export default useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1em',
    width: '93%',
  },
  beautifyBackground: {
    color: 'white',
    backgroundColor: '#3f51b5',
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 
                0 6px 20px 0 rgba(0, 0, 0, 0.4)`,
  },
  langBadge: {
    marginTop: '0.5em',
    marginLeft: '0.5em',
    background: 'linear-gradient(45deg, #69ff5596, #8af1ff)',
    borderRadius: 4,
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 
    0 6px 20px 0 rgba(0, 0, 0, 0.4)`,
  },
  heading: {
    textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: 'white',
  },
  secondaryHeading: {
    textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
    fontSize: theme.typography.pxToRem(15),
    color: 'white',
  },
}));
