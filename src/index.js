import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import ViewList from './components/ViewList';
import Pokemon from './components/Pokemon';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/ViewList' component={ViewList} />
                <Route path='/Pokemon' component={Pokemon} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();


