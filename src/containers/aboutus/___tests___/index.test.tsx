import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import locale from 'config/locale/index';
import LocalizeProvider from 'config/locale/Provider';

import AboutUs from '../';

const renderComponent = (props = {}) => {
    const defaultProps = {
        history: {
            push: jest.fn()
        },
        ...props
    };

    return render(
        <LocalizeProvider>
            <AboutUs {...defaultProps} />
        </LocalizeProvider>
    );
}

const { aboutus } = locale;

describe('About Us', () => {
    afterEach(cleanup);

    test('render with no issue', async () => {
        const { getByText } = renderComponent();

        getByText(aboutus.title[0]);
        fireEvent.click(getByText(aboutus.moveToDashboard[0]));
    });
});
