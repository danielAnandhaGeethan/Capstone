import React from "react";

const PastData2 = ({
  bowelBladder,
  setBowelBladder,
  heart,
  setHeart,
  kidney,
  setKidney,
  skin,
  setSkin,
  alchohol,
  setAlchohol,
}) => {
  return (
    <div>
      <div>
        <h1 className="text-[#124559] font-semibold">Bowel/Bladder Problem</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={bowelBladder === "yes"}
            onChange={(e) => setBowelBladder(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={bowelBladder === "no"}
            onChange={(e) => setBowelBladder(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Heart Problem</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={heart === "yes"}
            onChange={(e) => setHeart(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={heart === "no"}
            onChange={(e) => setHeart(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Kidney Problem</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={kidney === "yes"}
            onChange={(e) => setKidney(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={kidney === "no"}
            onChange={(e) => setKidney(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">
          History of heavy alchohol use
        </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={alchohol === "yes"}
            onChange={(e) => setAlchohol(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={alchohol === "no"}
            onChange={(e) => setAlchohol(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Skin Problem</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={skin === "yes"}
            onChange={(e) => setSkin(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={skin === "no"}
            onChange={(e) => setSkin(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
    </div>
  );
};

export default PastData2;
