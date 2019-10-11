import React from 'react';
import { render, cleanup, fireEvent, put } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';

import { configureStore } from 'store';
import { 
    FETCH_PEOPLE_UPDATE_ACTION
} from 'modules/starWars';

import { WrapperProvider } from 'index';
import { locale } from 'config/locale/index';
import theme from 'themes';

import AboutUs from '../';

const store = configureStore();

const renderComponent = (props = {}) => {
    const defaultProps = {
        ...props
    };

    return render(
        <WrapperProvider store={store}>
            <ThemeProvider theme={theme}>
                <AboutUs {...defaultProps} />
            </ThemeProvider>
        </WrapperProvider>
    );
}

const { aboutUs } = locale;

describe('About Us', () => {
    afterEach(cleanup);

    test('render with no issue', async () => {
        const { getByText } = renderComponent();

        getByText(aboutUs.title[0]);
        fireEvent.click(getByText(aboutUs.moveToDashboard[0]));
        fireEvent.click(getByText(aboutUs.fetchPeople[0]));

        const samplePeople = [
            { name: 'Luke SkyWalker' },
            { name: 'C-3PO' },
            { name: 'R2-D2' }
        ]

        store.dispatch(FETCH_PEOPLE_UPDATE_ACTION(samplePeople));
        getByText(samplePeople[0].name);
    });
});
