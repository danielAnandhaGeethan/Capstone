import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { contractAddress, contractAbi } from "../constants/constants";
import Navbar from "./Navbar";
import search from "../assets/search.png";
import request from "../assets/request.png";
import send from "../assets/send.png";
import ViewData from "./ViewData";
import Send from "./Send";
import Approves from "./Approves";
import bg from "../assets/bg.jpg";
import axios from "axios";

const Doctor = ({ walletAddress, setWalletAddress }) => {
  const [current, setCurrent] = useState(1);
  const designation = localStorage.getItem("designation");
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getId();
  });

  const getId = async () => {
    const data = [walletAddress, designation];

    axios
      .get(`http://localhost:5555/usernames/${data}`)
      .then((res) => {
        const username = res.data;

        setId(username.doctors[0].id);
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
        id={id}
        name={name}
        age={age}
      />
      <div className="flex flex-col items-center py-28 gap-7">
        <div className="flex justify-center items-center gap-5 fixed">
          <img
            src={search}
            alt="View"
            className={`${
              current === 1 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(1)}
          />
          <img
            src={request}
            alt="Requests"
            className={`${
              current === 2 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(2)}
          />
          <img
            src={send}
            alt="Send"
            className={`${
              current === 3 ? "opacity-100 scale-125" : "opacity-30"
            } h-8 w-8 cursor-pointer`}
            onClick={() => setCurrent(3)}
          />
        </div>
        <div className="mt-20">
          {current === 1 ? (
            <ViewData
              walletAddress={walletAddress}
              getContract={getContract}
              designation={2}
            />
          ) : current === 2 ? (
            <Approves walletAddress={walletAddress} getContract={getContract} />
          ) : (
            <Send walletAddress={walletAddress} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
