import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ walletAddress }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getData = () => {
    if (password === "") {
      enqueueSnackbar("Incomplete Data", {
        variant: "error",
        autoHideDuration: 4000,
      });
      return;
    }

    const data = [walletAddress, password];

    axios
      .get(`http://localhost:5555/clients/${data}`)
      .then((res) => {
        const designation = res.data.designation;

        enqueueSnackbar("Logged In successfully", {
          variant: "success",
          autoHideDuration: 1000,
        });

        setTimeout(() => {
          navigate(designation === 1 ? "/patient" : "/doctor");
        }, 1000);
      })
      .catch((err) => {
        enqueueSnackbar("Incorrect Credentials", {
          variant: "error",
          autoHideDuration: 3000,
        });
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
          <h1>Password : </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => getData()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
