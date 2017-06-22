import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {selectTab} from '../../actions/tabActions';
@connect((store) => {
    return {
        tabs: store.tabs.tabs,
        selectedTab: store.tabs.selectedTab
    }
})
class Dashboard extends React.Component {

    constructor() {
        super();
    };

    selectTab(tab) {
        this.props.dispatch(selectTab(tab));
    }

    render() {
        const {tabs, selectedTab} = this.props;
        const navItems = tabs.map((tab, i) => {
                let activeClass = selectedTab === tab ? 'active' : '';
                return <LinkContainer key={i} to={tab.baseUrl} activeClassName={activeClass} onClick={this.selectTab.bind(this,tab)}>
                    <NavItem eventKey={i}>{tab.title}</NavItem>
                </LinkContainer>
            }
        );


        return (
            <div>

                <br/>
                <br/>
                <Nav bsStyle="tabs" activeKey={1}>
                    {navItems}
                </Nav>
            </div>
        );
    }
}

export default withRouter(Dashboard);