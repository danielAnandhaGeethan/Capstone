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
      communications: [],
    };

    axios
      .post("http://localhost:5555/clients", client)
      .then((res) => {
        enqueueSnackbar("Registered", {
          variant: "success",
          autoHideDuration: 1000,
        });

        const x = designation === "patient" ? "1" : "2";
        localStorage.setItem("designation", x);

        axios
          .get("http://localhost:5555/usernames", {
            params: { designation: x },
          })
          .then((res) => {
            const lastData = res.data;

            console.log(res);

            const temp = x === "1" ? "P" : "D";
            const id = temp + (parseInt(lastData.id.slice(1)) + 1).toString();

            const data = [walletAddress, id, x];
            axios
              .post(`http://localhost:5555/usernames/${data}`)
              .then(res)
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });

        setName("");
        setAge("");
        setDesignation("");
        setPassword("");
        setRePassword("");

        setTimeout(() => {
          navigate(x === "1" ? "/patient" : "/doctor");
        }, 1000);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          if (err.response.data.message === "User Already Registered") {
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
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none text-sm text-[#152528]"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none text-sm"
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
            <span className="text-sm text-[#152528] ml-1">Doctor</span>
          </label>
          <label>
            <input
              type="radio"
              value="patient"
              checked={designation === "patient"}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <span className="text-sm text-[#152528] ml-1">Patient</span>
          </label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none text-sm"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className="rounded-xl p-1 bg-opacity-70 bg-white focus:outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="bg-green-600 px-2 py-1 rounded-xl text-sm">
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
