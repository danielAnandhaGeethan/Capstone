import React, { useState } from "react";
import Navbar from "./Navbar";
import History from "./History";
import request from "../assets/request.png";
import history from "../assets/history.png";
import search from "../assets/search.png";
import transactions from "../assets/transactions.png";
import send from "../assets/send.png";
import ViewData from "./ViewData";
import Transactions from "./Transactions";
import Send from "./Send";
import Request from "./Request";
import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../constants/constants";

const Patient = ({ walletAddress }) => {
  const [current, setCurrent] = useState(1);

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const mediChain = new ethers.Contract(contractAddress, contractAbi, signer);

    return mediChain;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F9E9] to-[#869798]">
      <Navbar />
      <div className="flex flex-col items-center py-28 gap-7">
        <div className="flex justify-center items-center gap-5 fixed">
          <img
            src={history}
            alt="Enter"
            className={`${
              current === 1 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(1)}
          />
          <img
            src={transactions}
            alt="Transations"
            className={`${
              current === 2 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(2)}
          />
          <img
            src={search}
            alt="View"
            className={`${
              current === 3 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(3)}
          />
          <img
            src={request}
            alt="Requests"
            className={`${
              current === 4 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(4)}
          />
          <img
            src={send}
            alt="Send"
            className={`${
              current === 5 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(5)}
          />
        </div>
        <div className="mt-20">
          {current === 1 ? (
            <History walletAddress={walletAddress} getContract={getContract} />
          ) : current === 2 ? (
            <Transactions />
          ) : current === 3 ? (
            <ViewData walletAddress={walletAddress} getContract={getContract} />
          ) : current === 4 ? (
            <Request walletAddress={walletAddress} />
          ) : (
            <Send walletAddress={walletAddress} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Patient;
