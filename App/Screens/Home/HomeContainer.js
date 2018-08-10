// @flow
import React, { Component } from "react";
import Home from "./HomeRender"
import { connect } from "react-redux";

class HomeContainer extends Component {
    constructor(props) {
        super(props);

    }
   
   
    render() {
        return (
            <Home />
        );
    }
}



const mapStateToProps = state => {
    return {
        
    };
};



export default connect(mapStateToProps)(HomeContainer);


