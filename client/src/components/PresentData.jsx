import React from "react";
import Additions from "./Additions";

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
      <div className="flex flex-col gap-1">
        <h1 className="text-green-900 font-semibold underline">Present Data</h1>
        <div>
          <h1 className="text-[#124559] font-semibold">Current Problem</h1>
          <input
            type="text"
            value={currentProblem}
            onChange={(e) => setCurrentProblem(e.target.value)}
            className="focus:outline-none rounded-xl bg-white bg-opacity-70 px-2 text-[#444B44] text-md"
          />
        </div>
        <div>
          <h1 className="text-[#124559] font-semibold">
            Duration of Current Problem
          </h1>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="focus:outline-none rounded-xl bg-white bg-opacity-70 px-2 text-[#444B44] text-md"
          />
        </div>
        <div>
          <h1 className="text-[#124559] font-semibold">
            Symptoms for Current Problem
          </h1>
          <input
            type="text"
            value={currentSymptom}
            onChange={(e) => setCurrentSymptom(e.target.value)}
            className="focus:outline-none rounded-xl bg-white bg-opacity-70 px-2 text-[#444B44] text-md"
          />
          <button
            className="ml-3 bg-white/40 px-2 py-1 text-[#444B44] rounded-xl hover:scale-105"
            onClick={() => addSymptom()}
          >
            Add
          </button>
          <Additions props={symptoms} setProps={setSymptoms} />
        </div>
        <div>
          <h1 className="text-[#124559] font-semibold">Aggrevating Factor</h1>
          <input
            type="text"
            value={aggrevating}
            onChange={(e) => setAggrevating(e.target.value)}
            className="focus:outline-none rounded-xl bg-white bg-opacity-70 px-2 text-[#444B44] text-md"
          />
        </div>
        <div>
          <h1 className="text-[#124559] font-semibold">Relieving Factor</h1>
          <input
            type="text"
            value={relieving}
            onChange={(e) => setRelieving(e.target.value)}
            className="focus:outline-none rounded-xl bg-white bg-opacity-70 px-2 text-[#444B44] text-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PresentData;
