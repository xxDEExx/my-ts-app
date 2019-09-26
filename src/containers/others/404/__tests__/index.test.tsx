import React from 'react';
import { render, cleanup } from '@testing-library/react';

import NotFound from '../';

const renderComponent = (props = {}) => {
    const defaultProps = {
        ...props
    };

    return render(
        <NotFound {...defaultProps} />
    );
}

describe('NotFound Page', () => {
    afterEach(cleanup);

    test('render with no issue', async () => {
        const { getByText } = renderComponent();

        getByText('Page not found!');
    });
});
