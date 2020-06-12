import React from 'react';
import PropTypes from 'prop-types';

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Link,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import CodeIcon from '@material-ui/icons/Code';

import { PieChart } from 'react-minimal-pie-chart';
import { formatCommitsToPieData, formatLangsImgData } from '../dataFormatting';
import useStyles from './CustomExpansionPanelsStyles';

export default function CustomExpansionPanels({
  contributors,
  commits,
  languagesUsed,
}) {
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
              <li key={contrib.id}>
                <Link
                  href={`https://github.com/${contrib.user}`}
                  color="inherit"
                  target="_blank"
                >
                  {contrib.user}
                </Link>
              </li>
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
            <strong>Commits By Contributor</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.beautifyBackground} align="center">
          <PieChart
            className={classes.piechart}
            data={formatCommitsToPieData(commits)}
            label={({ dataEntry }) => `${dataEntry.title}, ${dataEntry.value}`}
          />
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
            {formatLangsImgData(languagesUsed).map((langUrl) => (
              <img className={classes.langBadge} alt={langUrl} src={langUrl} />
            ))}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

CustomExpansionPanels.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.object),
  commits: PropTypes.arrayOf(PropTypes.object),
  languagesUsed: PropTypes.arrayOf(PropTypes.object),
};

CustomExpansionPanels.defaultProps = {
  contributors: [],
  commits: [],
  languagesUsed: [],
};
