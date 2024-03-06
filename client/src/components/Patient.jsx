import React, { useState } from "react";
import Navbar from "./Navbar";
import History from "./History";
import history from "../assets/history.png";
import transactions from "../assets/transactions.png";
import send from "../assets/send.png";
import Transactions from "./Transactions";
import Send from "./Send";

const Patient = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center gap-4 py-5">
        <img
          src={history}
          alt="Enter"
          className={`${
            current === 1 ? "opacity-100" : "opacity-30"
          } h-8 w-8 cursor-pointer`}
          onClick={() => setCurrent(1)}
        />
        <img
          src={transactions}
          alt="Transations"
          className={`${
            current === 2 ? "opacity-100" : "opacity-30"
          } h-8 w-8 cursor-pointer`}
          onClick={() => setCurrent(2)}
        />
        <img
          src={send}
          alt="Send"
          className={`${
            current === 3 ? "opacity-100" : "opacity-30"
          } h-8 w-8 cursor-pointer`}
          onClick={() => setCurrent(3)}
        />
      </div>
      {current === 1 ? (
        <History />
      ) : current === 2 ? (
        <Transactions />
      ) : (
        <Send />
      )}
    </div>
  );
};

export default Patient;
