import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, IndexRoute} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/dashboard/Dashboard';
import App from './components/App'

const app = document.getElementById('content');


ReactDOM.render(
    <Provider store={store}>
        <Router >
            <div>
                <Dashboard/>
                <App/>
            </div>
        </Router>

    </Provider>,
    app);



