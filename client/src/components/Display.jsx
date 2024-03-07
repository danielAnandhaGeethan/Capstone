import React, { useEffect } from "react";

const Display = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });

  return <div>{data}</div>;
};

export default Display;
