import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        {" "}
        Welcome to {this.props.name} {this.props.surName}
      </h1>
    );
  }
}

export default Welcome;
