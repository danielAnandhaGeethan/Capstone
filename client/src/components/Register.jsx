import { ethers } from "ethers";
import React, { useState } from "react";
import Web3 from "web3";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { contractAddress, contractAbi } from "../constants/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ walletAddress }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const pushData = async () => {
    /*
    const web3 = new Web3(window.ethereum);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();

    const mediChain = new web3.eth.Contract(
      contractAbi,
      contractAddress,
      signer
    );
    */

    if (name === "" || age === "" || designation === "" || password === "") {
      enqueueSnackbar("Incomplete Data", {
        variant: "error",
        autoHideDuration: 4000,
      });
      return;
    }

    const client = {
      walletAddress,
      name,
      age,
      designation: designation === "patient" ? "1" : "2",
      password,
    };

    axios
      .post("http://localhost:5555/clients", client)
      .then((res) => {
        enqueueSnackbar("Registered", {
          variant: "success",
          autoHideDuration: 4000,
        });

        const x = designation;

        setName("");
        setAge("");
        setDesignation("");
        setPassword("");

        console.log("Final");

        setTimeout(() => {
          navigate(x === "1" ? "/patient" : "/doctor");
        }, 1000);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          if (err.response.data.message === "User Already Exists") {
            enqueueSnackbar(err.response.data.message, {
              variant: "error",
              autoHideDuration: 4000,
            });
          }
        }
      });
  };

  return (
    <div>
      <div>
        <h1>Account Address : </h1>
        <input type="text" value={walletAddress || ""} readOnly={true} />
      </div>
      <div>
        <h1>Name : </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h1>Age : </h1>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <h1>Designation : </h1>
        <label>
          <input
            type="radio"
            value="doctor"
            checked={designation === "doctor"}
            onChange={(e) => setDesignation(e.target.value)}
          />
          Doctor
        </label>
        <label>
          <input
            type="radio"
            value="patient"
            checked={designation === "patient"}
            onChange={(e) => setDesignation(e.target.value)}
          />
          Patient
        </label>
      </div>
      <div>
        <h1>Password : </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => pushData()}>Register</button>
      </div>
    </div>
  );
};

export default Register;
