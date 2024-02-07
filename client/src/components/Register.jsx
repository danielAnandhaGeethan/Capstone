import React, { useState } from "react";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ walletAddress }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const pushData = async () => {
    if (
      name === "" ||
      age === "" ||
      designation === "" ||
      password === "" ||
      rePassword === ""
    ) {
      enqueueSnackbar("Incomplete Data", {
        variant: "error",
        autoHideDuration: 1000,
      });
      return;
    }

    if (rePassword !== password) {
      enqueueSnackbar("Passwords doesn't match", {
        variant: "error",
        autoHideDuration: 1000,
      });
      return;
    }

    const client = {
      address: walletAddress,
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
          autoHideDuration: 1000,
        });

        const x = designation;

        setName("");
        setAge("");
        setDesignation("");
        setPassword("");

        setTimeout(() => {
          navigate(x === "patient" ? "/patient" : "/doctor");
        }, 1000);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          if (err.response.data.message === "User Already Exists") {
            enqueueSnackbar(err.response.data.message, {
              variant: "error",
              autoHideDuration: 1000,
            });
          }
        }
      });
  };

  return (
    <div className="flex justify-center h-screen py-10">
      <div className="flex flex-col items-center w-[60%] gap-5 py-10 bg-yellow-400">
        <SnackbarProvider />
        <div>
          <h1>Account Address : </h1>
          <h1>{walletAddress || ""}</h1>
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
          <h1>Confirm Password : </h1>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => pushData()}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
