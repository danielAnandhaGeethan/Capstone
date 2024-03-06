import React, { useState } from "react";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ walletAddress, setCurrent }) => {
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
    <div className="flex flex-col items-center gap-10 py-5 px-8">
      <SnackbarProvider />
      <div className="flex flex-col gap-4 items-center">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none placeholder:text-sm text-[#152528]"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none placeholder:text-sm"
          />
        </div>
        <div className="flex gap-5">
          <label>
            <input
              type="radio"
              value="doctor"
              checked={designation === "doctor"}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <span className="text-sm text-[#152528]">Doctor</span>
          </label>
          <label>
            <input
              type="radio"
              value="patient"
              checked={designation === "patient"}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <span className="text-sm text-[#152528]">Patient</span>
          </label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none placeholder:text-sm"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none placeholder:text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="bg-green-600 px-2 py-1 rounded-xl">
          <button onClick={() => pushData()}>Register</button>
        </div>
        <div>
          <h1
            className="text-sm text-blue-700 underline cursor-pointer"
            onClick={() => setCurrent("Login")}
          >
            Already Registered? Login
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
