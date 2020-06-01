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

import useStyles from './UserCardStyles';

export default function UserCard({
  title, description, projectUrl, contributors, created,
}) {
  const classes = useStyles();
  // eslint-disable-next-line no-console
  console.log(contributors);
  return (
    <Card className={classes.card}>
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
        </Paper>
        <br />
        <Typography component="h3">
          <strong className={classes.coloredArrowEmoji}>{'⮞ '}</strong>
          {'📅 '}
          <em>
            {`${created.toLocaleString('default', { month: 'long' })}
              ${created.getDate()},
              ${created.getFullYear()}`}
          </em>
          &emsp;
          {'⌛ '}
          <em>
            {`${created.toLocaleString('en-US', { hour: 'numeric', hour12: true })}`}
          </em>
        </Typography>
        <br />
        <Typography component="h3">
          <strong className={classes.coloredArrowEmoji}>{'⮞ '}</strong>
          Contributors:
          {contributors.map((contrib) => (
            <Typography component="h4">
              <em>{contrib}</em>
              <br />
            </Typography>
          )) || 'No contributors found!'}
        </Typography>
      </CardContent>
      {/* <CardMedia
        component="img"
        alt={name}
        image={imageUrl}
      /> */}
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
    </Card>
  );
}

// Validation of props passed to @UserCard
//  -> Including Some Default Values:

UserCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  projectUrl: PropTypes.string,
  contributors: PropTypes.arrayOf(PropTypes.string),
  created: PropTypes.instanceOf(Date),
};

UserCard.defaultProps = {
  title: '',
  description: '',
  projectUrl: '',
  contributors: [],
  created: new Date(),
};
