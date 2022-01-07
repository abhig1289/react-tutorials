import React, { Component } from "react";
import "./styles.css";
// import Greet from "/components/Greet";
import Welcome from "/components/Welcome";
// import Hello from "/components/Hello";
// import Message from "/components/Message";
// import Counter from "/components/Counter";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="VAISH" surName="PULUSU">
          <p>she is a wandering women </p>
        </Greet>
        <Greet name="HARSH" surName="PONNA">
          <button>Action</button>
        </Greet>
        <Greet name="ABHI" surName="GUJJETI" /> */}
        <Welcome name="VAISH" surName="PULUSU" />
        <Welcome name="HARSH" surName="PONNA" />
        <Welcome name="ABHI" surName="GUJJETI" />
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
