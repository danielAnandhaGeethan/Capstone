import React from "react";

const Additions = ({ props, setProps }) => {
  const filterProps = (data) => {
    const x = props.filter((prop) => prop !== data);
    setProps(x);
  };

  return (
    <div className="flex gap-2">
      {props.map((prop, index) =>
        prop !== "" ? (
          <div
            key={index}
            className="bg-white/60 rounded-xl cursor-pointer"
            onClick={() => filterProps(prop)}
          >
            <h1 className="text-[#444B44] text-sm px-1">{prop}</h1>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Additions;
