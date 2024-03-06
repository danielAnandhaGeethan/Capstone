import React from "react";

const PresentData = ({
  currentProblem,
  setCurrentProblem,
  duration,
  setDuration,
  symptoms,
  setSymptoms,
  aggrevating,
  setAggrevating,
  relieving,
  setRelieving,
  setCurrentSymptom,
  currentSymptom,
}) => {
  const addSymptom = () => {
    setSymptoms([...symptoms, currentSymptom]);
    setCurrentSymptom("");

    console.log(symptoms);
  };

  return (
    <div>
      <div className="Present Problem flex flex-col gap-1">
        <h1 className="text-[#468655] font-bold underline">Present Data</h1>
        <div className="Current Problem">
          <h1 className="text-[#124559] font-bold">Current Problem</h1>
          <input
            type="text"
            value={currentProblem}
            onChange={(e) => setCurrentProblem(e.target.value)}
            className="focus:outline-none rounded-xl bg-white bg-opacity-40 px-2 text-gray-600"
          />
        </div>
        <div className="Duration of Current Problem">
          <h1>Duration of Current Problem : </h1>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="Current Problem">
          <h1>Symptoms for Current Problem : </h1>
          <input
            type="text"
            value={currentSymptom}
            onChange={(e) => setCurrentSymptom(e.target.value)}
          />
          <button onClick={() => addSymptom()}>Add</button>
        </div>
        <div className="Aggrevating Factor">
          <h1>Aggrevating Factor : </h1>
          <input
            type="text"
            value={aggrevating}
            onChange={(e) => setAggrevating(e.target.value)}
          />
        </div>
        <div className="Current Problem">
          <h1>Relieving Factor : </h1>
          <input
            type="text"
            value={relieving}
            onChange={(e) => setRelieving(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PresentData;
