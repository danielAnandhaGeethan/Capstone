import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import History from "./History";
import request from "../assets/request.png";
import history from "../assets/history.png";
import search from "../assets/search.png";
import transact from "../assets/transactions.png";
import send from "../assets/send.png";
import ViewData from "./ViewData";
import Transactions from "./Transactions";
import Send from "./Send";
import Request from "./Request";
import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../constants/constants";
import bg from "../assets/bg.jpg";

const Patient = ({ walletAddress, setWalletAddress }) => {
  const [current, setCurrent] = useState(1);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const mediChain = new ethers.Contract(contractAddress, contractAbi, signer);

    return mediChain;
  };

  return (
    <div className="min-h-screen">
      <Navbar
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
      />
      <div className="flex flex-col items-center py-28 gap-7">
        <div className="">
          <div
            style={{
              width: "50%",
              height: "2000px",
              backgroundImage: `url(${bg})`,
              backgroundSize: "100% auto",
              backgroundPosition: "center",
              backgroundRepeat: "repeat-y",
            }}
            className="absolute inset-0 top-0 left-0 z-[-2]"
          ></div>
          <div className="bg-black inset-0 absolute z-[-1] bg-opacity-20 w-[50%] h-[2000px]"></div>
        </div>
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
            src={transact}
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
            <Transactions
              walletAddress={walletAddress}
              transactions={transactions}
            />
          ) : current === 3 ? (
            <ViewData
              walletAddress={walletAddress}
              getContract={getContract}
              designation={1}
            />
          ) : current === 4 ? (
            <Request
              walletAddress={walletAddress}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          ) : (
            <Send
              walletAddress={walletAddress}
              designation="Patient"
              transactions={transactions}
              setTransactions={setTransactions}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Patient;
