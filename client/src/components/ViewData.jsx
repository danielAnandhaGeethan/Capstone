import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import Display from "./Display";

const ViewData = ({ walletAddress, getContract }) => {
  const [cid, setCid] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);

  const getCid = async () => {
    if (password.length === 0) {
      enqueueSnackbar("Incomplete Data", {
        variant: "warning",
        autoHideDuration: 2000,
      });
      return;
    }

    const data = [walletAddress, password];

    axios
      .get(`http://localhost:5555/clients/${data}`)
      .then(async (res) => {
        const mediChain = await getContract();

        try {
          const x = await mediChain.getPatientInfo(walletAddress);
          setCid(x);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        enqueueSnackbar("Incorrect Credentials", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  const getData = () => {
    axios
      .get(`https://gateway.pinata.cloud/ipfs/${key}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData([response.data]);
      })
      .catch((error) => {
        enqueueSnackbar("Server Error !!!", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  return (
    <div className="flex flex-col gap-7 items-center">
      <SnackbarProvider />
      <div className="flex gap-3">
        <input
          type="password"
          placeholder="Enter Password . . . "
          className="focus:outline-none px-2 py-1 rounded-2xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 px-2 rounded-2xl text-black/90"
          onClick={getCid}
        >
          Get CID
        </button>
      </div>
      <div>
        <h1 className="font-semibold text-[#344966] text-lg">{cid}</h1>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter CID . . ."
          className="px-5 py-1 rounded-2xl focus:outline-none w-[450px] text-center"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button
          className="bg-blue-500 px-2 rounded-2xl text-black/90"
          onClick={getData}
        >
          Display
        </button>
      </div>
      {data.length === 0 ? "" : <Display data={data} />}
    </div>
  );
};

export default ViewData;
