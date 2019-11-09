import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/another-react-app' component={Main} />
            <Route path='/another-react-app/products/:id' component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;