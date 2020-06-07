import React from 'react';
import PropTypes from 'prop-types';

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import CodeIcon from '@material-ui/icons/Code';

import useStyles from './CustomExpansionPanelsStyles';

export default function CustomExpansionPanels({ contributors }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        className={classes.beautifyBackground}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><PeopleAltIcon /></Typography>
          <Typography className={classes.secondaryHeading}>
            <strong>Contributors</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.beautifyBackground} align="left">
          <ul>
            {contributors.map((contrib) => (
              <li><Typography component="h4"><em>{contrib}</em></Typography></li>
            )) || 'No contributors found!'}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        className={classes.beautifyBackground}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}><TrackChangesIcon /></Typography>
          <Typography className={classes.secondaryHeading}>
            <strong>Commit Info</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.beautifyBackground} align="left">
          <Typography>
            Donec placerat,
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        className={classes.beautifyBackground}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}><CodeIcon /></Typography>
          <Typography className={classes.secondaryHeading}>
            <strong>Dev. Languages</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.beautifyBackground} align="left">
          <Typography>
            Nunc vitae
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

CustomExpansionPanels.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.string),
};

CustomExpansionPanels.defaultProps = {
  contributors: [],
};
