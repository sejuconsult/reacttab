import React from 'react';
import {Button} from 'react-bootstrap';
import {addCaseOverviewTab} from '../../../actions/tabActions';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import InitTab from '../../InitTab';

@connect((store) => {
    return {}
})
class StartTab extends React.Component {

    componentDidMount() {
        console.log("StartTab componentDidMount");
    }


    constructor() {
        super();
        this.showCaseOverview = this.showCaseOverview.bind(this);

    };

    showCaseOverview() {
        this.props.dispatch(addCaseOverviewTab());
        this.props.history.push('/caseworker/caseoverview');
    }

    render() {
        console.log('startab renders');
        return <div>
            StartTab
            <Button bsStyle="primary" bsSize="large" onClick={this.showCaseOverview}>Vis sagsoversigt</Button>
        </div>
    }
}

export default InitTab(withRouter(StartTab), addCaseOverviewTab);