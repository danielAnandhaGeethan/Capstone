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
      <div className="Tumor/Cancer">
        <h1>Tumor/Cancer : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={tumorCancer === "yes"}
            onChange={(e) => setTumorCancer(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={tumorCancer === "no"}
            onChange={(e) => setTumorCancer(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Anxiety Attacks">
        <h1>Anxiety Attacks : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={anxietyAttacks === "yes"}
            onChange={(e) => setAnxietyAttacks(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={anxietyAttacks === "no"}
            onChange={(e) => setAnxietyAttacks(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Headaches">
        <h1>Headaches : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={headache === "yes"}
            onChange={(e) => setHeadache(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={headache === "no"}
            onChange={(e) => setHeadache(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Diabetes">
        <h1>Diabetes : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={diabetes === "yes"}
            onChange={(e) => setDiabetes(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={diabetes === "no"}
            onChange={(e) => setDiabetes(e.target.value)}
          />
          No
        </label>
      </div>
      <div className="Sleep Apnea">
        <h1>Sleep Apnea : </h1>
        <label>
          <input
            type="radio"
            value="yes"
            checked={sleepApnea === "yes"}
            onChange={(e) => setSleepApnea(e.target.value)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={sleepApnea === "no"}
            onChange={(e) => setSleepApnea(e.target.value)}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default PastData4;
