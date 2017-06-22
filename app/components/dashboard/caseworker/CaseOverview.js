import React from 'react';
import {Button} from 'react-bootstrap';
//import {connect} from 'react-redux';



export default class CaseOverview extends React.Component {

    componentWillMount() {
        console.log('CaseOverview componentWillMount');
    }


    render() {
        const {tabs} = this.props;
        return <div>
            Sagsoversigt
        </div>;
    }
}