import React from 'react';
export default function InitTab(WrappedComponent, initTabAction) {
    return class extends React.Component {

        componentDidMount() {
            console.log("HOC INITTAB");
            initTabAction();
        }

        render() {
            return <WrappedComponent/>;
        }
    }
}