import React from "react";

const PastData1 = ({
  breathing,
  setBreathing,
  stroke,
  setStroke,
  depression,
  setDepression,
  pregnant,
  setPregnant,
  boneJoint,
  setBoneJoint,
}) => {
  return (
    <div>
      <div className="Breathing">
        <h1>Breathing Problem : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={breathing === "yes"}
            onChange={(e) => setBreathing(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={breathing === "no"}
            onChange={(e) => setBreathing(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Stroke">
        <h1>Stroke : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={stroke === "yes"}
            onChange={(e) => setStroke(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={stroke === "no"}
            onChange={(e) => setStroke(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Depression">
        <h1>Depression : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={depression === "yes"}
            onChange={(e) => setDepression(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={depression === "no"}
            onChange={(e) => setDepression(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Pregnant">
        <h1>Pregnant : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={pregnant === "yes"}
            onChange={(e) => setPregnant(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={pregnant === "no"}
            onChange={(e) => setPregnant(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Bone / Joint">
        <h1>Bone/Joint Problem : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={boneJoint === "yes"}
            onChange={(e) => setBoneJoint(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={boneJoint === "no"}
            onChange={(e) => setBoneJoint(e.target.value)}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default PastData1;
