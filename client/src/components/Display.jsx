import React, { useEffect } from "react";

const Display = ({ data, display }) => {
  return (
    <div className={`${display ? "opacity-100" : "hidden"}`}>
      <div className="flex flex-col gap-7 border px-10 py-2 shadow-2xl rounded-2xl">
        <h1 className="text-center text-xl font-semibold underline text-[#063B4B]">
          Report
        </h1>
        <div className="flex justify-between">
          <h1 className="font-semibold">Gender</h1>
          <h1>{data.Gender}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-lg font-semibold">Present Data</h1>
          <div className="flex justify-between">
            <h1 className="font-semibold">Problem</h1>
            <h1>{data["Present Data"].Problem}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">Duration</h1>
            <h1>{data["Present Data"].Duration}</h1>
          </div>
          <div>
            <h1 className="font-semibold">Symptoms</h1>
            <div>
              {data["Present Data"].Symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">Aggrevating Factor</h1>
            <h1>{data["Present Data"]["Aggrevating Factor"]}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">Relieving Factor</h1>
            <h1>{data["Present Data"]["Relieving Factor"]}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-lg font-semibold">Past Data</h1>
          <div className="flex flex-col gap-1">
            {Object.entries(data["Past Data"]).map(([key, value]) => (
              <h1 key={key} className="flex justify-between">
                <span className="w-[75%]">{key}</span>
                <span>{value}</span>
              </h1>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Surgeries</h1>
          <div>
            {data.Surgeries.map((surgery, index) => (
              <li key={index}>{surgery}</li>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Medications</h1>
          <div>
            {data.Medications.map((medication, index) => (
              <li key={index}>{medication}</li>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Allergies</h1>
          <div>
            {data.Allergies.map((alllergy, index) => (
              <li key={index}>{alllergy}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
