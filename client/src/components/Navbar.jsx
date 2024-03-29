import React from "react";
import Mediblock from "../assets/Mediblock.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ walletAddress, setWalletAddress }) => {
  const navigate = useNavigate();

  const logout = () => {
    setWalletAddress(null);
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="w-full border-b border-gray-300 flex justify-center fixed left-0 top-0">
      <div className="py-4">
        <img
          src={Mediblock}
          alt="MediBlock"
          className="h-[42px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      {walletAddress !== null ? (
        <div className="absolute right-0 cursor-pointer" onClick={logout}>
          <h1 className="font-semibold text-white bg-black px-2 py-1 mr-5 mt-4 rounded-xl">
            Log out
          </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
