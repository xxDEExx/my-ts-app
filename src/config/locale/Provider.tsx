import React, { SFC } from 'react';
import { LocalizeProvider } from 'react-localize-redux';
import ReactDOMServer from 'react-dom/server';

import locale, { languages } from './';

const LocalizeProviderWrapper: SFC = ({children, lang = languages[0].code}: any) => (
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

export default LocalizeProviderWrapper;
