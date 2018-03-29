import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Layout from './Layout';
import Feature from './Feature';
import Settings from './Settings';
import Posts from './Posts';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Posts} />
            <Route path="posts" component={Posts}></Route>
            <Route path="settings" component={Settings}></Route>
            <Route path="/posts/:slug" component={BlogDetail}></Route>
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
