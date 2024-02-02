import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ walletAddress, setWalletAddress }) => {
  const connectWallet = async () => {
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

  return walletAddress !== null ? (
    <div>
      <h1>Account Address : {walletAddress}</h1>
      <Link to="/login">
        <button className="bg-black text-white font-bold py-2 px-3 rounded-full">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className="bg-black text-white font-bold py-2 px-3 rounded-full">
          Register
        </button>
      </Link>
      <button
        className="bg-black text-white font-bold py-2 px-3 rounded-full"
        onClick={connectWallet}
      >
        Switch Account
      </button>
    </div>
  ) : (
    <div>
      <h1>!!! Account Not Connected !!!</h1>
      <button
        className="bg-black text-white font-bold py-2 px-3 rounded-full"
        onClick={connectWallet}
      >
        Connect Blockchain Account
      </button>
    </div>
  );
};

export default Home;
