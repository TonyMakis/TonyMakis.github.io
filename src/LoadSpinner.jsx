import React from 'react';

import { useLoading, BallTriangle } from '@agney/react-loading';

export default function LoadSpinner() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <BallTriangle width="155" />,
  });

  return (
    <section
      id="LoadSpinner"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...containerProps}
    >
      {indicatorEl}
    </section>
  );
}
