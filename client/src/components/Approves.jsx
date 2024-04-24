import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

const Approves = ({ walletAddress, getContract }) => {
  const [approves, setApproves] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [cid, setCid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  useEffect(() => {
    getApproves();
  }, [walletAddress]);

  const getApproves = async () => {
    if (walletAddress === "") {
      enqueueSnackbar("Not Logged In", {
        variant: "warning",
        autoHideDuration: 4000,
      });
      return;
    }

    const data = [walletAddress];

    try {
      const response = await axios.get(`http://localhost:5555/patient/${data}`);
      const approved = response.data.communications;

      let temp = [];
      await Promise.all(
        approved.map(async (approve) => {
          const data = [approve, 1];
          const getResponse = await axios.get(
            `http://localhost:5555/usernames/${data}`
          );

          const username = getResponse.data;
          temp.push({ address: approve, id: username.students[0].id });
        })
      );

      setApproves(temp);
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Server Error !!!", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  const viewCid = async (patient, index) => {
    if (clicked !== "") {
      setClicked("");
      return;
    }

    try {
      const mediChain = await getContract();

      const x = await mediChain.getPatientInfo(patient.address);
      setCid(x);
      setClicked(index);

      axios
        .get(`http://localhost:5555/doctor/${patient.address}`)
        .then((res) => {
          setName(res.data.name);
          setAge(res.data.age);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const removeData = (key) => {
    const x = approves.filter((datum) => datum !== key);

    let y = [];
    for (const item of x) {
      y.push(item.address);
    }

    setApproves(y);

    axios
      .put(
        `http://localhost:5555/doctor/${walletAddress}/${
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
        {approves.length !== 0 ? (
          approves.map((data, index) => (
            <div key={index}>
              <div className="bg-white/40 border border-gray-300 w-[500px] px-10 pt-4 pb-2 rounded-3xl flex flex-col items-center gap-4 shadow-xl">
                <div>
                  <h1 className="text-center">{data.id}</h1>
                </div>
                <div className="flex justify-between gap-48 px-3">
                  <button
                    className="text-blue-600 font-semibold border border-blue-600 rounded-xl px-1"
                    onClick={() => viewCid(data, index)}
                  >
                    View CID
                  </button>
                  <button
                    className="text-red-600 font-semibold border border-red-600 rounded-xl px-1"
                    onClick={() => removeData(data)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div
                className={`${
                  clicked === index ? "opacity-100" : "hidden"
                } bg-white/30 pt-4 pb-2 w-[500px] text-center rounded-2xl`}
              >
                <h1 className="text-black/80 mb-4 font-semibold flex justify-between px-8">
                  <span>Name : {name}</span>
                  <span>Age : {age}</span>
                </h1>
                <h1 className="text-black/80 font-semibold">{cid}</h1>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-2xl font-semibold">!!! No Approves !!!</h1>
        )}
      </div>
    </div>
  );
};

export default Approves;
