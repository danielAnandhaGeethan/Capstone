import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Web3 from "web3";
import { ethers } from "ethers";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [cid, setCid] = useState("");

  const storeData = (data) => {
    axios
      .post("https://api.pinata.cloud/pinning/pinJSONToIPFS", data, {
        headers: {
          "Content-Type": "application/json",
          pinata_api_key: "38690e4d17a7e4820ed6",
          pinata_secret_api_key:
            "d3199a0a493b914fd974ffa0ba7bb38fbbffc4acd83b6cbc927e42dc8c7cb7ad",
        },
      })
      .then(function (response) {
        setCid(response.data.IpfsHash);
        console.log(response.data.IpfsHash);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const retrieveData = () => {
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
  };

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
