import React from "react";

const Home = ({ walletAdress, setWalletAddress }) => {
  return walletAdress === "None" ? (
    <div>
      <button className="bg-black text-white font-bold py-2 px-3 rounded-full">
        Login
      </button>
      <button className="bg-black text-white font-bold py-2 px-3 rounded-full">
        Register
      </button>
    </div>
  ) : (
    <div>
      <button className="bg-black text-white font-bold py-2 px-3 rounded-full">
        Connect Blockchain Account
      </button>
    </div>
  );
};

export default Home;
