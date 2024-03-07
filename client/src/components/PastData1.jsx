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
      <div>
        <h1 className="text-[#124559] font-semibold">Breathing Problem</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={breathing === "yes"}
            onChange={(e) => setBreathing(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={breathing === "no"}
            onChange={(e) => setBreathing(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Stroke</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={stroke === "yes"}
            onChange={(e) => setStroke(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={stroke === "no"}
            onChange={(e) => setStroke(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Depression</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={depression === "yes"}
            onChange={(e) => setDepression(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={depression === "no"}
            onChange={(e) => setDepression(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Pregnant</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={pregnant === "yes"}
            onChange={(e) => setPregnant(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={pregnant === "no"}
            onChange={(e) => setPregnant(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Bone/Joint Problem</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={boneJoint === "yes"}
            onChange={(e) => setBoneJoint(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={boneJoint === "no"}
            onChange={(e) => setBoneJoint(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
    </div>
  );
};

export default PastData1;
