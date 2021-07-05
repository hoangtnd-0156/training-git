import React, { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    // Define state
    this.state = {
      name: "Ronaldo"
    }
  }

  render() {
    return (
      <div>
        Example about state
      </div>
    )
  }
}