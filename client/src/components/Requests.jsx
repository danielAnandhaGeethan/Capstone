import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import Request from "./Request";

const Requests = ({ walletAddress, transacts, setTransacts }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests();
  }, [walletAddress]);

  const getRequests = async () => {
    if (walletAddress === "") {
      enqueueSnackbar("Not Logged In", {
        variant: "warning",
        autoHideDuration: 4000,
      });
      return;
    }

    const address = [walletAddress];

    try {
      const response = await axios.get(
        `http://localhost:5555/patient/${address}`
      );
      const requested = response.data.communications;

      let temp = [];
      await Promise.all(
        requested.map(async (request) => {
          console.log(request);
          const data = [request, 2];
          const getResponse = await axios.get(
            `http://localhost:5555/usernames/${data}`
          );

          const username = getResponse.data;
          temp.push({ address: request, id: username.staff[0].id });
        })
      );

      setRequests(temp);
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Server Error !!!", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  const addToDoctor = (receiver) => {
    const data = [walletAddress, receiver.address];
    console.log(data);

    axios
      .put(`http://localhost:5555/patient/${data}`)
      .then((res) => {
        removeRequest(receiver);

        enqueueSnackbar(`Approved for ${receiver.address}`, {
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

    axios
      .put("http://localhost:5555/patient", {
        address: walletAddress,
        transactions: [...transacts, receiver.address],
      })
      .then((res) => {
        setTransacts([...transacts, receiver.address]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeRequest = (data) => {
    const x = requests.filter((request) => request !== data);

    let y = [];
    for (const item of x) {
      y.push(item.address);
    }

    setRequests(y);
    axios
      .put(
        `http://localhost:5555/patient/${walletAddress}/${
          y.length === 0 ? "null" : y.join(",")
        }`
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SnackbarProvider />
      <div className="flex flex-col gap-4">
        {requests.length !== 0 ? (
          requests.map((request, index) => (
            <Request
              key={index}
              index={index}
              request={request}
              addToDoctor={addToDoctor}
              removeRequest={removeRequest}
            />
          ))
        ) : (
          <h1 className="text-xl font-semibold">!!! No Pending Requests !!!</h1>
        )}
      </div>
    </div>
  );
};

export default Requests;
