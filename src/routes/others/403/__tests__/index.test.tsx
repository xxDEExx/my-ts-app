import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Forbidden from '../';

const renderComponent = (props = {}) => {
    const defaultProps = {
        ...props
    };

    return render(
        <Forbidden {...defaultProps} />
    );
}

describe('Forbidden Page', () => {
    afterEach(cleanup);

    test('render with no issue', async () => {
        const { getByText } = renderComponent();

        getByText('This page is forbidden!');
    });
});
