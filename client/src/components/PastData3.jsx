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
      <div>
        <h1 className="text-[#124559] font-semibold">Liver Problem</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={liver === "yes"}
            onChange={(e) => setLiver(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={liver === "no"}
            onChange={(e) => setLiver(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Drug use</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={drug === "yes"}
            onChange={(e) => setDrug(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={drug === "no"}
            onChange={(e) => setDrug(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Pacemaker</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={pacemaker === "yes"}
            onChange={(e) => setPacemaker(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={pacemaker === "no"}
            onChange={(e) => setPacemaker(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Electrical Implants</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={implants === "yes"}
            onChange={(e) => setImplants(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={implants === "no"}
            onChange={(e) => setImplants(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Smoking</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={smoking === "yes"}
            onChange={(e) => setSmoking(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={smoking === "no"}
            onChange={(e) => setSmoking(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
    </div>
  );
};

export default PastData3;
