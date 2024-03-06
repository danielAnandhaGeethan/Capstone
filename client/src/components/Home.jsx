import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";

const Home = ({ walletAddress, setWalletAddress }) => {
  const [current, setCurrent] = useState("Login");
  const display = "Your Health, Your Data, Securely Stored.";

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
    <div className="flex flex-col justify-center items-center gap-7">
      <Navbar />
      <div className="flex items-center gap-4 mb-5">
        <div className="-mb-3">
          <h1 className="font-serif text-lg">Account Address : </h1>
          <h1>{walletAddress || ""}</h1>
        </div>
        <div className="mt-4">
          <button
            className="bg-black text-white font-bold py-1 px-2 rounded-full"
            onClick={connectWallet}
          >
            Switch Account
          </button>
        </div>
      </div>
      <div className="border border-gray-300 bg-white flex justify-center shadow-xl rounded-xl h-[385px]">
        <div className="transition-colors duration-400 bg-[#B4CFC9] flex flex-col justify-center rounded-xl">
          {current === "Login" ? (
            <Login walletAddress={walletAddress} setCurrent={setCurrent} />
          ) : (
            <h1 className="h-[385px] bg-white flex justify-center items-center rounded-xl">
              <span className="w-[70%] text-center font-serif">{display}</span>
            </h1>
          )}
        </div>
        <div className="transition-colors duration-400 bg-[#B4CFC9] relative flex flex-col justify-center rounded-xl">
          {current === "Register" ? (
            <Register walletAddress={walletAddress} setCurrent={setCurrent} />
          ) : (
            <h1 className="h-[385px] bg-white flex justify-center items-center rounded-xl">
              <span className="w-[70%] text-center font-serif">{display}</span>
            </h1>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center gap-44">
        <Navbar />
        <div className="flex flex-col items-center gap-10">
          <h1 className="bg-red-600 bg-opacity-40 border border-red-400 p-4 text-gray-700 rounded-xl">
            !!! Account Not Connected !!!
          </h1>
          <button
            className="bg-black text-white p-3 rounded-full hover:scale-105"
            onClick={connectWallet}
          >
            Connect Blockchain Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
