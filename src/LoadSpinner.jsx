import React from 'react';

import { useLoading, Puff } from '@agney/react-loading';

export default function LoadSpinner() {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="155" />,
    });

    return (
        <section
            className="central"
            id="authLoadSpinner"
            {...containerProps}
        >
            {indicatorEl}
        </section>
    );
}
