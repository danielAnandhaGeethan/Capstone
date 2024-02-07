import React from "react";

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
    <div>
      <div className="Surgeries">
        <h1>Surgeries : </h1>
        <input
          type="text"
          value={currentSurgery}
          onChange={(e) => setCurrentSurgery(e.target.value)}
        />
        <button onClick={() => addSurgery()}>Add</button>
      </div>
      <div className="Medications">
        <h1>Medications : </h1>
        <input
          type="text"
          value={currentMedication}
          onChange={(e) => setCurrentMedication(e.target.value)}
        />
        <button onClick={() => addMedication()}>Add</button>
      </div>
      <div className="Allergies">
        <h1>Allergies : </h1>
        <input
          type="text"
          value={currentAllergy}
          onChange={(e) => setCurrentAllergy(e.target.value)}
        />
        <button onClick={() => addAllergy()}>Add</button>
      </div>
    </div>
  );
};

export default OtherData;
