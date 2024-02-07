import React, { useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Patient from "./components/Patient";
import Doctor from "./components/Doctor";
//import Web3 from "web3";
//import { ethers } from "ethers";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              walletAddress={walletAddress}
              setWalletAddress={setWalletAddress}
            />
          }
        />
        <Route
          path="/login"
          element={<Login walletAddress={walletAddress} />}
        />
        <Route
          path="/register"
          element={<Register walletAddress={walletAddress} />}
        />
        <Route
          path="/patient"
          element={<Patient walletAddress={walletAddress} />}
        />
        <Route
          path="/doctor"
          element={<Doctor walletAddress={walletAddress} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
