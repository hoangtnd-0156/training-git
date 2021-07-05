import React, { Component } from "react";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true

    }
  }

  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
   return (
      <div>
        <p>This is demo for lifecycle methods</p>
        {this.state.isShow && <Child />}
        <button onClick={this.handleClick}>{this.state.isShow ? "Hide" : "Show"} Component</button>
      </div>
    )
  }
}

class Child extends Component {
 constructor(props) {
   super(props)
   console.log("CONSTRUCTOR CALLED");

    this.state = {
      number: 0
    }
  }

  componentDidMount() {
    console.log('Component DID MOUNT')
  }

 static getDerivedStateFromProps(newProps) {
    console.log('Component GET DERIVED STATE FROM PROPS');
    return newProps;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("Component SHOULE UPDATE")
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('Component GET SNAPSHOT BEFORE UPDATE');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component DID UPDATE')
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT')
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    console.log("Component RENDER");
    return (
      <div style={{ marginBottom: 20 }}>
        <p>number: {this.state.number}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}