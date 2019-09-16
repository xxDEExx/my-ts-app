import React, { SFC } from 'react';
import { LocalizeProvider } from 'react-localize-redux';
import ReactDOMServer from 'react-dom/server';

import { languages, locale } from './';

interface IProps {
    lang?: string
}

const LocalizeProviderWrapper: SFC<IProps> = ({ children, lang }) => (
    <LocalizeProvider
        initialize={{
            languages,
            translation: locale,
            options: {
                defaultLanguage: lang,
                renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup
            }
        }}
    >
        {children}
    </LocalizeProvider>
);

// Default language en
LocalizeProviderWrapper.defaultProps = {
    lang: languages[0].code
};

export default LocalizeProviderWrapper;
