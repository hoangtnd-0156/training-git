import React, { Component } from "react";

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Ronaldo"
        }
    }
    handleClick = () =>{
        console.log("You click the button!");
        this.setState({
            name:"Messi"
        })
    }
    render(){
        return(
            <div>
                Name: {this.state.name}
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}