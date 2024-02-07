import React, { useState } from "react";
import PresentData from "./PresentData";
import PastData1 from "./PastData1";
import PastData2 from "./PastData2";
import PastData3 from "./PastData3";
import PastData4 from "./PastData4";
import OtherData from "./OtherData";
import axios from "axios";
import { ethers } from "ethers";
import Web3 from "web3";
import { contractAddress, contractAbi } from "../constants/constants";

const Patient = ({ walletAddress }) => {
  const [gender, setGender] = useState("");
  const [currentSurgery, setCurrentSurgery] = useState("");
  const [currentAllergy, setCurrentAllergy] = useState("");
  const [currentMedication, setCurrentMedication] = useState("");
  const [surgeries, setSurgeries] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [medications, setMedications] = useState([]);
  const [breathing, setBreathing] = useState("");
  const [stroke, setStroke] = useState("");
  const [depression, setDepression] = useState("");
  const [pregnant, setPregnant] = useState("");
  const [boneJoint, setBoneJoint] = useState("");
  const [bowelBladder, setBowelBladder] = useState("");
  const [heart, setHeart] = useState("");
  const [kidney, setKidney] = useState("");
  const [skin, setSkin] = useState("");
  const [alchohol, setAlchohol] = useState("");
  const [liver, setLiver] = useState("");
  const [drug, setDrug] = useState("");
  const [pacemaker, setPacemaker] = useState("");
  const [implants, setImplants] = useState("");
  const [smoking, setSmoking] = useState("");
  const [tumorCancer, setTumorCancer] = useState("");
  const [anxietyAttacks, setAnxietyAttacks] = useState("");
  const [headache, setHeadache] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [sleepApnea, setSleepApnea] = useState("");
  const [currentProblem, setCurrentProblem] = useState("");
  const [duration, setDuration] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [currentSymptom, setCurrentSymptom] = useState("");
  const [aggrevating, setAggrevating] = useState("");
  const [relieving, setRelieving] = useState("");

  const addSurgery = () => {
    setSurgeries([...surgeries, currentSurgery]);
    setCurrentSurgery("");

    console.log(surgeries);
  };

  const addMedication = () => {
    setMedications([...medications, currentMedication]);
    setCurrentMedication("");

    console.log(medications);
  };

  const addAllergy = () => {
    setAllergies([...allergies, currentAllergy]);
    setCurrentAllergy("");

    console.log(allergies);
  };

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const mediChain = new ethers.Contract(contractAddress, contractAbi, signer);

    return mediChain;
  };

  const storeData = async (data) => {
    const cid = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          pinata_api_key: "38690e4d17a7e4820ed6",
          pinata_secret_api_key:
            "d3199a0a493b914fd974ffa0ba7bb38fbbffc4acd83b6cbc927e42dc8c7cb7ad",
        },
      }
    );

    return cid;
  };

  const sendDataToBlockchain = async () => {
    const data = {
      Gender: gender,
      "Present Data": {
        Problem: currentProblem,
        Duration: duration,
        Symptoms: symptoms,
        "Aggrevating Factor": aggrevating,
        "Relieving Factor": relieving,
      },
      "Past Data": {
        Breathing: breathing === "" ? "no" : "yes",
        Stroke: stroke === "" ? "no" : "yes",
        Depression: depression === "" ? "no" : "yes",
        Pregnant: pregnant === "" ? "no" : "yes",
        "Bone/Joint Problem": boneJoint === "" ? "no" : "yes",
        "Bowel/Bladder Problem": bowelBladder === "" ? "no" : "yes",
        "Heart Problem": heart === "" ? "no" : "yes",
        "Kidney Problem": kidney === "" ? "no" : "yes",
        "History of heavy alchohol use": alchohol === "" ? "no" : "yes",
        "Skin Problem": skin === "" ? "no" : "yes",
        "Liver Problem": liver === "" ? "no" : "yes",
        "Drug Use": drug === "" ? "no" : "yes",
        Pacemaker: pacemaker === "" ? "no" : "yes",
        "Electrical Implants": implants === "" ? "no" : "yes",
        Smoking: smoking === "" ? "no" : "yes",
        "Tumor/Cancer": tumorCancer === "" ? "no" : "yes",
        "Anxiety Attacks": anxietyAttacks === "" ? "no" : "yes",
        Headaches: headache === "" ? "no" : "yes",
        Diabetes: diabetes === "" ? "no" : "yes",
        "Sleep Apnea": sleepApnea === "" ? "no" : "yes",
      },
      Surgeries: surgeries,
      Medications: medications,
      Allergies: allergies,
    };

    console.log(data);

    const cid = await storeData(data);

    const mediChain = await getContract();
    console.log(mediChain);

    try {
      console.log();
      const tx = await mediChain.pushData(cid);
      console.log(tx);
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveData = async () => {
    const mediChain = await getContract();
    console.log(mediChain);

    try {
      console.log(walletAddress);
      const info = await mediChain.getPatientInfo(walletAddress);
      console.log(info);
    } catch (err) {
      console.log(err);
    }

    /*
    axios
      .get(`https://gateway.pinata.cloud/ipfs/${cid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  };

  return (
    <div>
      <div>
        <div className="Gender">
          <h1>Gender : </h1>
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
        <PresentData
          currentProblem={currentProblem}
          setCurrentProblem={setCurrentProblem}
          duration={duration}
          setDuration={setDuration}
          symptoms={symptoms}
          setSymptoms={setSymptoms}
          setCurrentSymptom={setCurrentSymptom}
          currentSymptom={currentSymptom}
          aggrevating={aggrevating}
          setAggrevating={setAggrevating}
          relieving={relieving}
          setRelieving={setRelieving}
        />
        <div className="Past Problem">
          <h1>Past Data</h1>
          <div className="flex gap-10">
            <PastData1
              breathing={breathing}
              setBreathing={setBreathing}
              stroke={stroke}
              setStroke={setStroke}
              depression={depression}
              setDepression={setDepression}
              pregnant={pregnant}
              setPregnant={setPregnant}
              boneJoint={boneJoint}
              setBoneJoint={setBoneJoint}
            />
            <PastData2
              bowelBladder={bowelBladder}
              setBowelBladder={setBowelBladder}
              heart={heart}
              setHeart={setHeart}
              kidney={kidney}
              setKidney={setKidney}
              skin={skin}
              setSkin={setSkin}
              alchohol={alchohol}
              setAlchohol={setAlchohol}
            />
            <PastData3
              liver={liver}
              setLiver={setLiver}
              drug={drug}
              setDrug={setDrug}
              pacemaker={pacemaker}
              setPacemaker={setPacemaker}
              implants={implants}
              setImplants={setImplants}
              smoking={smoking}
              setSmoking={setSmoking}
            />
            <PastData4
              tumorCancer={tumorCancer}
              setTumorCancer={setTumorCancer}
              anxietyAttacks={anxietyAttacks}
              setAnxietyAttacks={setAnxietyAttacks}
              headache={headache}
              setHeadache={setHeadache}
              diabetes={diabetes}
              setDiabetes={setDiabetes}
              sleepApnea={sleepApnea}
              setSleepApnea={setSleepApnea}
            />
          </div>
        </div>
        <div>
          <OtherData
            allergies={allergies}
            medications={medications}
            surgeries={surgeries}
            setAllergies={setAllergies}
            setMedications={setMedications}
            setSurgeries={setSurgeries}
            currentAllergy={currentAllergy}
            setCurrentAllergy={setCurrentAllergy}
            currentMedication={currentMedication}
            setCurrentMedication={setCurrentMedication}
            currentSurgery={currentSurgery}
            setCurrentSurgery={setCurrentSurgery}
            addAllergy={addAllergy}
            addMedication={addMedication}
            addSurgery={addSurgery}
          />
        </div>
        <button onClick={() => sendDataToBlockchain()}>Submit</button>
        <button onClick={() => retrieveData()}>Check Retrieval</button>
      </div>
    </div>
  );
};

export default Patient;
