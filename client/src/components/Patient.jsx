import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import History from "./History";
import request from "../assets/request.png";
import entry from "../assets/history.png";
import search from "../assets/search.png";
import transact from "../assets/transactions.png";
import send from "../assets/send.png";
import ViewData from "./ViewData";
import Transactions from "./Transactions";
import Send from "./Send";
import Requests from "./Requests";
import { ethers } from "ethers";
import { contractAddress, contractAbi } from "../constants/constants";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Patient = ({ walletAddress, setWalletAddress }) => {
  const [current, setCurrent] = useState(1);
  const [transacts, setTransacts] = useState([]);
  const designation = localStorage.getItem("designation");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getTransactions();
    getId();
  });

  const getId = async () => {
    const data = [walletAddress, designation];

    axios
      .get(`http://localhost:5555/usernames/${data}`)
      .then((res) => {
        const username = res.data;

        setId(username.patients[0].id);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:5555/clients/${walletAddress}`)
      .then((res) => {
        const client = res.data;

        setName(client.name);
        setAge(client.age);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTransactions = async () => {
    const data = [walletAddress];

    axios
      .get(`http://localhost:5555/patient/${data}`)
      .then((res) => {
        const data = res.data.transactions;

        setTransacts(data);
      })
      .catch((err) => {
        enqueueSnackbar("Server Error !!!", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const mediChain = new ethers.Contract(contractAddress, contractAbi, signer);

    return mediChain;
  };

  return (
    <div className="min-h-screen">
      <SnackbarProvider />
      <Navbar
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
        id={id}
        name={name}
        age={age}
      />
      <div className="flex flex-col items-center py-28 gap-7">
        <div className="flex justify-center items-center gap-5 fixed">
          <img
            src={entry}
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
            <Transactions transacts={transacts} />
          ) : current === 3 ? (
            <ViewData walletAddress={walletAddress} getContract={getContract} />
          ) : current === 4 ? (
            <Requests
              walletAddress={walletAddress}
              transacts={transacts}
              setTransacts={setTransacts}
            />
          ) : (
            <Send
              walletAddress={walletAddress}
              transacts={transacts}
              setTransacts={setTransacts}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Patient;
