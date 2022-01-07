import React from "react";

// functions and arrow functions
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} {props.surName}
      </h1>
      <h2>{props.children}</h2>
    </div>
  );
};

export default Greet;
