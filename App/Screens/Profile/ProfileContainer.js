// @flow
import React, { Component } from "react";
import Profile from "./ProfileRender"
import { connect } from "react-redux";

class ProfileContainer extends Component {
    constructor(props) {
        super(props);

    }
   
   
    render() {
        return (
            <Profile />
        );
    }
}



const mapStateToProps = state => {
    return {
        
    };
};



export default connect(mapStateToProps)(ProfileContainer);


