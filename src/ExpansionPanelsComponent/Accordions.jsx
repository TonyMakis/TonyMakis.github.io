import React from 'react';
import PropTypes from 'prop-types';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import CodeIcon from '@material-ui/icons/Code';

import { Doughnut } from 'react-chartjs-2';
import { formatCommitsToPieData, formatLangsImgData } from '../dataFormatting';
import useStyles from './AccordionStyles';

export default function Accordions({
  contributors,
  commits,
  languagesUsed,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const barLegendOpts = {
    display: false,
  };
  const barChartOptions = {
    showLines: false,
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.beautifyBackground}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><PeopleAltIcon /></Typography>
          <Typography className={classes.secondaryHeading}>
            <strong>Contributors</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.beautifyBackground} align="left">
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.beautifyBackground}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}><TrackChangesIcon /></Typography>
          <Typography className={classes.secondaryHeading}>
            <strong>Commit Info</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.beautifyBackground} align="center">
          <Doughnut
            styles={{ background: '#f7d2ff' }}
            legend={barLegendOpts}
            options={barChartOptions}
            data={formatCommitsToPieData(commits)}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.beautifyBackground}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}><CodeIcon /></Typography>
          <Typography className={classes.secondaryHeading}>
            <strong>Dev. Languages</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.beautifyBackground} align="left">
          <Typography>
            {formatLangsImgData(languagesUsed).map((langUrl) => (
              <img className={classes.langBadge} alt={langUrl} src={langUrl} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

Accordions.propTypes = {
  contributors: PropTypes.arrayOf(PropTypes.object),
  commits: PropTypes.arrayOf(PropTypes.object),
  languagesUsed: PropTypes.arrayOf(PropTypes.object),
};

Accordions.defaultProps = {
  contributors: [],
  commits: [],
  languagesUsed: [],
};
