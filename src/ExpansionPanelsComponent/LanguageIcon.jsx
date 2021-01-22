import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

export default function LanguageIcon({ lang }) {
  let langIcon;

  if (lang === 'C') {
    langIcon = (<i style={{ fontSize: '3.5em', paddingRight: '0.5em' }} className="devicon-c-plain" />);
  } else if (lang === 'C++') {
    langIcon = (<i style={{ fontSize: '3.5em', paddingRight: '0.5em' }} className="devicon-cplusplus-plain" />);
  } else if (lang === 'Java') {
    langIcon = (<i style={{ fontSize: '3.5em', paddingRight: '0.5em' }} className="devicon-java-plain-wordmark" />);
  } else if (lang === 'JavaScript') {
    langIcon = (<i style={{ fontSize: '3.5em', paddingRight: '0.5em' }} className="devicon-javascript-plain" />);
  } else if (lang === 'HTML') {
    langIcon = (<i style={{ fontSize: '3.5em', paddingRight: '0.5em' }} className="devicon-html5-plain-wordmark" />);
  } else if (lang === 'CSS') {
    langIcon = (<i style={{ fontSize: '3.5em', paddingRight: '0.5em' }} className="devicon-css3-plain-wordmark" />);
  } else if (lang === 'Empty') {
    langIcon = (<Typography>Github doesn&apos;t have any recorded!</Typography>);
  }

  return (
    <>{ langIcon }</>
  );
}

LanguageIcon.propTypes = {
  lang: PropTypes.string,
};

LanguageIcon.defaultProps = {
  lang: '',
};
