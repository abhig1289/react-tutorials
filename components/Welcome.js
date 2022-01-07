import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, surName } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <h1>
        {/* Welcome to {this.props.name} {this.props.surName} */}
        Welcome to {name} {surName}
      </h1>
    );
  }
}

export default Welcome;
