import React from "react";

const Hello = () => {
  // jsx
  // return (
  //   <div className:'dummyclasss'>
  //    <h1>Hello abhii</h1>
  //   </div>
  // )
  // React create element
  return React.createElement(
    "div",
    { id: "hello", className: "dummyclasss" },
    React.createElement("h1", null, "Oh yess Abhi!!!")
  );
};
export default Hello;
