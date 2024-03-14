import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

const Approves = ({ walletAddress, getContract }) => {
  const [data, setData] = useState();
  const [clicked, setClicked] = useState(false);
  const [cid, setCid] = useState("");

  useEffect(() => {
    getApproves();
  });

  const getApproves = async () => {
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
        const requests = res.data.communications;

        setData(requests);
      })
      .catch((err) => {
        enqueueSnackbar("Server Error !!!", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  const viewCid = async (patient) => {
    if (clicked === true) {
      setClicked(!clicked);
      return;
    }

    const mediChain = await getContract();

    try {
      const x = await mediChain.getPatientInfo(patient);
      setCid(x);
      setClicked(!clicked);
    } catch (err) {
      console.log(err);
    }
  };

  const removeData = (key) => {
    const x = data.filter((datum) => datum !== key);
    setData(x);
  };

  return (
    <div>
      <SnackbarProvider />
      <div className="flex flex-col gap-4">
        {data.length > 0 ? (
          data.map((data, index) => (
            <div
              key={index}
              className="bg-white/20 w-[500px] px-10 pt-4 pb-2 rounded-3xl flex flex-col items-center gap-4 shadow-xl"
            >
              <div>
                <h1 className="font-semibold text-[#344966] text-center">
                  {data}
                </h1>
              </div>
              <div className="flex justify-between gap-48 px-3">
                <button
                  className="text-blue-600 font-semibold border border-blue-600 rounded-xl px-1"
                  onClick={() => viewCid(data)}
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
              <div
                className={`${
                  clicked === true ? "opacity-100" : "hidden"
                } absolute mt-20 bg-white/30 pt-4 pb-2 w-[500px] text-center rounded-2xl`}
              >
                <h1 className="text-black/80 font-semibold">{cid}</h1>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-2xl text-[#344966]">
            !!! No Approves Available !!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Approves;
