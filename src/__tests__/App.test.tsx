import React from "react";
import { render, cleanup } from '@testing-library/react';

import { WrapperProvider } from 'index';

import App from 'App';

const renderComponent = () => {
    return render(
        <WrapperProvider>
            <App />
        </WrapperProvider>
    )
}

describe('APP', () => {
    afterEach(cleanup);

    it("render with no issue", () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    })
});
