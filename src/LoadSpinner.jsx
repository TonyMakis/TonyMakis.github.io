import React from 'react';

import { useLoading, Circles } from '@agney/react-loading';

export default function LoadSpinner() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Circles width="155" />,
  });

  return (
    <section
      id="authLoadSpinner"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...containerProps}
    >
      {indicatorEl}
    </section>
  );
}
