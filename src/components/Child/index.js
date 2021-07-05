import React, { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <h1>This is Class Child</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
export default Child;