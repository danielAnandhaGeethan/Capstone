import React from "react";
import Additions from "./Additions";

const OtherData = ({
  allergies,
  medications,
  surgeries,
  setAllergies,
  setMedications,
  setSurgeries,
  addAllergy,
  addMedication,
  addSurgery,
  currentSurgery,
  setCurrentSurgery,
  currentMedication,
  setCurrentMedication,
  currentAllergy,
  setCurrentAllergy,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-[#124559] font-semibold">Surgeries</h1>
        <input
          type="text"
          value={currentSurgery}
          onChange={(e) => setCurrentSurgery(e.target.value)}
          className="focus:outline-none rounded-xl bg-gray-300 bg-opacity-70 px-2 text-[#444B44] text-md"
        />
        <button
          className="ml-3 bg-gray-300/40 px-2 py-1 text-[#444B44] rounded-xl hover:scale-105"
          onClick={() => addSurgery()}
        >
          Add
        </button>
        <Additions props={surgeries} setProps={setSurgeries} />
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Medications</h1>
        <input
          type="text"
          value={currentMedication}
          onChange={(e) => setCurrentMedication(e.target.value)}
          className="focus:outline-none rounded-xl bg-gray-300 bg-opacity-70 px-2 text-[#444B44] text-md"
        />
        <button
          className="ml-3 bg-gray-300/40 px-2 py-1 text-[#444B44] rounded-xl hover:scale-105"
          onClick={() => addMedication()}
        >
          Add
        </button>
        <Additions props={medications} setProps={setMedications} />
      </div>
      <div>
        <h1 className="text-[#124559] font-semibold">Allergies</h1>
        <input
          type="text"
          value={currentAllergy}
          onChange={(e) => setCurrentAllergy(e.target.value)}
          className="focus:outline-none rounded-xl bg-gray-300 bg-opacity-70 px-2 text-[#444B44] text-md"
        />
        <button
          className="ml-3 bg-gray-300/40 px-2 py-1 text-[#444B44] rounded-xl hover:scale-105"
          onClick={() => addAllergy()}
        >
          Add
        </button>
        <Additions props={allergies} setProps={setAllergies} />
      </div>
    </div>
  );
};

export default OtherData;
