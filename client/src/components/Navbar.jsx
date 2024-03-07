import React from "react";
import Mediblock from "../assets/Mediblock.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

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
    </div>
  );
};

export default Navbar;
