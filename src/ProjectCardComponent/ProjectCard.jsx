import React from 'react';
import PropTypes from 'prop-types';

import ComputerIcon from '@material-ui/icons/Computer';
import GitHubIcon from '@material-ui/icons/GitHub';

import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  // CardMedia,
  Paper,
  Typography,
} from '@material-ui/core';

import useStyles from './ProjectCardStyles';

import Accordions from '../ExpansionPanelsComponent/Accordions';

export default function ProjectCard({
  title, description, projectUrl, languagesUsed, contributors, commits, created,
}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
    >
      <CardContent>
        <Typography
          className={classes.fancyTitle}
          gutterBottom
        >
          {title || 'Title TBD . . .'}
        </Typography>
        <Paper elevation={3} className={classes.paperBack}>
          <Typography>
            {description || 'Description TBD . . .'}
          </Typography>
          <br />
          <Typography component="h3">
            {'📅 '}
            <strong>
              <em>
                {`
                  ${created.toLocaleString('default', { month: 'long' })}
                  ${created.getDate()},
                  ${created.getFullYear()}
                `}
              </em>
            </strong>
            {/* &emsp;
            {'⌛ '}
            <strong>
              <em>
                {`${created.toLocaleString('en-US', { hour: 'numeric', hour12: true })}`}
              </em>
            </strong> */}
          </Typography>
          <br />
          <CardActionArea className={classes.flexing}>
            <CardActions>
              <Button
                href={`${projectUrl}/tree/master`}
                target="_blank"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<GitHubIcon />}
              >
                SOURCE
              </Button>
              <Button
                href={`https://TonyMakis.github.io/${title}`}
                target="_blank"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ComputerIcon />}
              >
                DEMO
              </Button>
            </CardActions>
          </CardActionArea>
        </Paper>
      </CardContent>
      {/* TODO: PICTURE GENERATION FOR THUMBNAIL (htmltocavas???) */}
      {/* <CardMedia
        component="img"
        alt={name}
        image={imageUrl}
      /> */}
      {/* <TabPanelsGroup contributors={contributors} /> */}
      <Accordions
        contributors={contributors}
        commits={commits}
        languagesUsed={languagesUsed}
      />
    </Card>
  );
}

// Validation of props passed to @UserCard
//  -> Including Some Default Values:

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  projectUrl: PropTypes.string,
  languagesUsed: PropTypes.arrayOf(PropTypes.object),
  contributors: PropTypes.arrayOf(PropTypes.object),
  commits: PropTypes.arrayOf(PropTypes.object),
  created: PropTypes.instanceOf(Date),
};

ProjectCard.defaultProps = {
  title: '',
  description: '',
  projectUrl: '',
  languagesUsed: [],
  contributors: [],
  commits: [],
  created: new Date(),
};
