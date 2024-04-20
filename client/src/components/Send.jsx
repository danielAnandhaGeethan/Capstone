import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useState } from "react";

const Send = ({ walletAddress, transacts, setTransacts }) => {
  const [id, setId] = useState("");
  const designation = localStorage.getItem("designation");

  const addToCommunications = async () => {
    if (id.length === 0) {
      enqueueSnackbar("Incomplete Data", {
        variant: "warning",
        autoHideDuration: 2000,
      });
      return;
    }

    if (designation === "1" && id.includes("P")) {
      enqueueSnackbar("You've entered a Patient's ID !!!", {
        variant: "warning",
        autoHideDuration: 3000,
      });
      return;
    } else if (designation === "2" && id.includes("D")) {
      enqueueSnackbar("You've entered a Doctor's ID !!!", {
        variant: "warning",
        autoHideDuration: 3000,
      });
      return;
    }

    try {
      const temp = designation === "1" ? "2" : "1";
      const response = await axios.get(
        `http://localhost:5555/usernames/${id}/${temp}`
      );
      const username = response.data;
      let receiver = "";

      if (designation === "1") {
        receiver = username.doctors[0].address;
      } else {
        receiver = username.patients[0].address;
      }

      const data = [walletAddress, receiver];

      await axios.put(`http://localhost:5555/patient/${data}`);

      if (designation === "1") {
        if (!transacts.includes(receiver)) {
          axios
            .put("http://localhost:5555/student", {
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

      setId("");

      enqueueSnackbar(
        `${
          designation === "1" ? "Approved for " : "Request sent to "
        } ${receiver}`,
        {
          variant: "success",
          autoHideDuration: 3000,
        }
      );
    } catch (err) {
      console.log(err);
      enqueueSnackbar(
        designation === "1"
          ? "No such doctor exists !!!"
          : "No such patient exists !!!",
        {
          variant: "warning",
          autoHideDuration: 3000,
        }
      );
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-10 md:mt-20">
      <SnackbarProvider />
      <input
        type="text"
        placeholder={`Enter ${
          designation === "1" ? "Doctor" : "Patient"
        }'s ID . . .`}
        className="px-5 py-1 text-sm focus:outline-none rounded-2xl text-center border border-gray-300"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={addToCommunications}>
        <span className="bg-blue-500 px-2 py-1 text-sm rounded-full text-black">
          Send
        </span>
      </button>
    </div>
  );
};

export default Send;
