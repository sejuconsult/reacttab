import React from 'react';
import {Route, Switch} from 'react-router-dom';
import StartTab from './dashboard/start/StartTab';
import CaseOverview from './dashboard/caseworker/CaseOverview';

export default class App extends React.Component {


    render() {
        return <Switch>
            <Route exact path="/" component={StartTab}/>
            <Route exact path="/caseworker/caseoverview" component={CaseOverview}/>
        </Switch>
    }
}