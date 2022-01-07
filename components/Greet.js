import React from "react";

// functions and destructuring
// const Greet = ({name,surName}) => {
const Greet = (props) => {
  // console.log(props);
  const { name, surName } = props;
  return (
    <div>
      <h1>
        {/* Hello {props.name} {props.surName} */}
        Hello {name} {surName}
      </h1>
      {/* <h2>{props.children}</h2> */}
    </div>
  );
};

export default Greet;
