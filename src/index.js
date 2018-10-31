import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AmpleApp from './AmpleApp';
import { IntlProvider, addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import te from 'react-intl/locale-data/te';
import registerServiceWorker from './registerServiceWorker';
import localeData from './resources/locale/messages.json';
addLocaleData(en);
addLocaleData(te);
const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
    localeData[languageWithoutRegionCode] ||
    localeData[language] ||
    localeData.en;


ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <AmpleApp />
    </IntlProvider>,
    document.getElementById('root'));
registerServiceWorker();
