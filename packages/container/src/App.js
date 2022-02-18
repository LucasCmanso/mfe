import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </ StylesProvider>

    )
}