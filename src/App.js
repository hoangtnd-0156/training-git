import React, { Component } from 'react';
import LifecycleComponent from "./components/LifecycleComponent";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="title">
          Hello, ITMentor!
          Hello, DIem Hoang
          <h3 style={{color: "blue"}}>Demo Git</h3>
      </h1>
        <LifecycleComponent />
      </div>
    )
  }
}

export default App;
