// @flow
import React, { Component } from "react";
import Details from "./DetailsRender"
import { connect } from "react-redux";

class DetailsContainer extends Component {
    constructor(props) {
        super(props);

    }
   
   
    render() {
        return (
            <Details />
        );
    }
}



const mapStateToProps = state => {
    return {
        
    };
};



export default connect(mapStateToProps)(DetailsContainer);


