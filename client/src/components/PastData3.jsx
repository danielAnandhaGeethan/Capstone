import React from "react";

const PastData3 = ({
  liver,
  setLiver,
  drug,
  setDrug,
  pacemaker,
  setPacemaker,
  implants,
  setImplants,
  smoking,
  setSmoking,
}) => {
  return (
    <div>
      <div className="Liver">
        <h1>Liver Problem : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={liver === "yes"}
            onChange={(e) => setLiver(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={liver === "no"}
            onChange={(e) => setLiver(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Drug">
        <h1>Drug use : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={drug === "yes"}
            onChange={(e) => setDrug(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={drug === "no"}
            onChange={(e) => setDrug(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Pacemaker">
        <h1>Pacemaker : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={pacemaker === "yes"}
            onChange={(e) => setPacemaker(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={pacemaker === "no"}
            onChange={(e) => setPacemaker(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Implants">
        <h1>Electrical Implants : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={implants === "yes"}
            onChange={(e) => setImplants(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={implants === "no"}
            onChange={(e) => setImplants(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Smoking">
        <h1>Smoking : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={smoking === "yes"}
            onChange={(e) => setSmoking(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={smoking === "no"}
            onChange={(e) => setSmoking(e.target.value)}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default PastData3;
