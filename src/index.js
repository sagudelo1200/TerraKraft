import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// Importing Styles
import './assets/css/bootstrap.min.css';
import './assets/scss/now-ui-kit.scss?v=1.5.0';
import './assets/demo/demo.css?v=1.5.0';
import './assets/demo/nucleo-icons-page-styles.css?v=1.5.0';

// Importing Pages
import Index from './views/Index.js';

ReactDOM.render(
    <Router>
        <Switch>
            <Switch>
                <Route exact path='/' render={(props) => <Index {...props} />} />
                <Redirect to='/' />
            </Switch>
        </Switch>
    </Router>,
    document.getElementById('root')
);
