import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Pottery from './views/Pottery';
import Lifestyle from './views/Lifestyle';
import Bio from './views/Bio';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pottery' component={Pottery} />
        <Route path='/lifestyle' component={Lifestyle} />
        <Route path='/bio' component={Bio} />
    </Switch>
)