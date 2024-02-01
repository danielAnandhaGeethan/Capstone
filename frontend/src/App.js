import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Home from "./components/Home";

const App = () => {
  const [walletAddress, setWalletAddress] = useState("None");
  const [cid, setCid] = useState("");

  const requestAccount = async () => {
    console.log("Requesting account...");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log(accounts);
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.log("Connection error : ", err);
      }
    } else {
      console.log("Meta Mask not detected");
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);

      console.log(provider);
    }
  };

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
    <div>
      <Home walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
    </div>
  );
};

export default App;
