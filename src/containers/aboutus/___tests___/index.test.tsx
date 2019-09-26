import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { store } from 'store';
import { 
    FETCH_PEOPLE_UPDATE_ACTION
} from 'modules/starWars';

import { WrapperProvider } from 'index';
import { locale } from 'config/locale/index';

import AboutUs from '../';

const renderComponent = (props = {}) => {
    const defaultProps = {
        ...props
    };

    return render(
        <WrapperProvider>
            <AboutUs {...defaultProps} />
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
