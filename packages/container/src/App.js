import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

import Header from './components/Header';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress/>}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </ StylesProvider>

    )
}