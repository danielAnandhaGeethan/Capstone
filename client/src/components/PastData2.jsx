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
      <div className="Bladder">
        <h1>Bowel/Bladder Problem : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={bowelBladder === "yes"}
            onChange={(e) => setBowelBladder(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={bowelBladder === "no"}
            onChange={(e) => setBowelBladder(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Heart">
        <h1>Heart Problem : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={heart === "yes"}
            onChange={(e) => setHeart(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={heart === "no"}
            onChange={(e) => setHeart(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Kidney">
        <h1>Kidney Problem : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={kidney === "yes"}
            onChange={(e) => setKidney(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={kidney === "no"}
            onChange={(e) => setKidney(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Alchohol">
        <h1>History of heavy alchohol use : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={alchohol === "yes"}
            onChange={(e) => setAlchohol(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={alchohol === "no"}
            onChange={(e) => setAlchohol(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Skin">
        <h1>Skin Problem : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={skin === "yes"}
            onChange={(e) => setSkin(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={skin === "no"}
            onChange={(e) => setSkin(e.target.value)}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default PastData2;
