import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useState } from "react";

const Send = ({ walletAddress, designation, transacts, setTransacts }) => {
  const [receiver, setReceiver] = useState("");

  const addToDoctor = () => {
    if (receiver.length === 0) {
      enqueueSnackbar("Incomplete Data", {
        variant: "warning",
        autoHideDuration: 2000,
      });
      return;
    }

    const data = [walletAddress, receiver];

    axios
      .put(`http://localhost:5555/patient/${data}`)
      .then((res) => {
        enqueueSnackbar(
          `${
            designation === 1 ? "Approved for " : "Request sent to "
          } ${receiver}`,
          {
            variant: "success",
            autoHideDuration: 3000,
          }
        );
        setReceiver("");
      })
      .catch((err) => {
        enqueueSnackbar("No Such Doctor Exists !!!", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });

    if (designation === 1) {
      if (!transacts.includes(receiver)) {
        axios
          .put("http://localhost:5555/patient", {
            address: walletAddress,
            transactions: [...transacts, receiver],
          })
          .then((res) => {
            setTransacts([...transacts, receiver]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div className="flex flex-col gap-7">
      <SnackbarProvider />
      <input
        type="text"
        placeholder={`Enter ${
          designation === "Doctor" ? "Patient" : "Doctor"
        }'s Address . . .`}
        className="px-5 py-1 focus:outline-none rounded-2xl w-[450px] text-center border border-gray-300"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <button onClick={addToDoctor}>
        <span className="bg-blue-500 px-2 py-1 rounded-xl text-black">
          Send
        </span>
      </button>
    </div>
  );
};

export default Send;
