import React from "react";

function Heading() {
  let greeting;

  const customStyle = {
    color: ""
  };

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
