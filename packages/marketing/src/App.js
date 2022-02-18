import React from "react";
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default () => {
    return (
    <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <switch>
                <Route exact path="/" component={Landing}></Route>
                <Route exact path="/pricing" component={Pricing}></Route>
            </switch>
        </BrowserRouter>
    </StylesProvider>
    );
}