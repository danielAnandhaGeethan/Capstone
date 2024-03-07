import React from "react";

const PastData4 = ({
  tumorCancer,
  setTumorCancer,
  anxietyAttacks,
  setAnxietyAttacks,
  headache,
  setHeadache,
  diabetes,
  setDiabetes,
  sleepApnea,
  setSleepApnea,
}) => {
  return (
    <div>
      <div>
        <h1 className="text-[#124559] font-semibold">Tumor/Cancer</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={tumorCancer === "yes"}
            onChange={(e) => setTumorCancer(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={tumorCancer === "no"}
            onChange={(e) => setTumorCancer(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Anxiety Attacks</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={anxietyAttacks === "yes"}
            onChange={(e) => setAnxietyAttacks(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={anxietyAttacks === "no"}
            onChange={(e) => setAnxietyAttacks(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Headaches</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={headache === "yes"}
            onChange={(e) => setHeadache(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={headache === "no"}
            onChange={(e) => setHeadache(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Diabetes</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={diabetes === "yes"}
            onChange={(e) => setDiabetes(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={diabetes === "no"}
            onChange={(e) => setDiabetes(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Sleep Apnea</h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={sleepApnea === "yes"}
            onChange={(e) => setSleepApnea(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">Yes</span>
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={sleepApnea === "no"}
            onChange={(e) => setSleepApnea(e.target.value)}
          />
          <span className="m-1 text-[#444B44]">No</span>
        </label>
      </div>
    </div>
  );
};

export default PastData4;
