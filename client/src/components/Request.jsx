import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

const Request = ({ walletAddress, transactions, setTransactions }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests();
  });

  const getRequests = async () => {
    if (walletAddress === "") {
      enqueueSnackbar("Not Logged In", {
        variant: "warning",
        autoHideDuration: 4000,
      });
      return;
    }

    const data = [walletAddress];

    axios
      .get(`http://localhost:5555/patient/${data}`)
      .then((res) => {
        const data = res.data.communications;

        setRequests(data);
      })
      .catch((err) => {
        enqueueSnackbar("Server Error !!!", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  const addToDoctor = (receiver) => {
    const data = [walletAddress, receiver];

    setTransactions([...transactions, receiver]);

    axios
      .put(`http://localhost:5555/patient/${data}`)
      .then((res) => {
        removeRequest(receiver);

        enqueueSnackbar(`Approved for ${receiver}`, {
          variant: "success",
          autoHideDuration: 3000,
        });
      })
      .catch((err) => {
        enqueueSnackbar("Server Error !!!", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  const removeRequest = (data) => {
    const x = requests.filter((request) => request !== data);
    setRequests(x);
  };

  return (
    <div>
      <SnackbarProvider />
      <div className="flex flex-col gap-4">
        {requests.length !== 0 ? (
          requests.map((request, index) => (
            <div
              key={index}
              className="bg-white/20 px-10 pt-4 pb-2 rounded-3xl flex flex-col gap-3 shadow-xl"
            >
              <div>
                <h1 className="font-semibold text-[#344966]">{request}</h1>
              </div>
              <div className="flex justify-between px-3">
                <button
                  className="text-green-600 font-semibold border border-green-600 rounded-xl px-1"
                  onClick={() => addToDoctor(request)}
                >
                  Approve
                </button>
                <button
                  className="text-red-600 font-semibold border border-red-600 rounded-xl px-1"
                  onClick={() => removeRequest(request)}
                >
                  Deny
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-2xl text-[#344966]">
            !!! No Pending Requests !!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Request;
