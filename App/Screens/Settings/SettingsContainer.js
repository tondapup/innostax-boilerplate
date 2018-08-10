// @flow
import React, { Component } from "react";
import Settings from "./SettingsRender"
import { connect } from "react-redux";

class SettingsContainer extends Component {
    constructor(props) {
        super(props);

    }
   
   
    render() {
        return (
            <Settings />
        );
    }
}



const mapStateToProps = state => {
    return {
        
    };
};



export default connect(mapStateToProps)(SettingsContainer);


