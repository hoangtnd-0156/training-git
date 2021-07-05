import React, { Component } from 'react';
import LifecycleComponent from "./components/LifecycleComponent";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="title">
          Hello, ITMentor!
      </h1>
        <LifecycleComponent />
      </div>
    )
  }
}

export default App;