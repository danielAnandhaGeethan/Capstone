import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Patient from "./components/Patient";
import Doctor from "./components/Doctor";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              walletAddress={walletAddress}
              setWalletAddress={setWalletAddress}
            />
          }
        />
        <Route
          path="/patient"
          element={<Patient walletAddress={walletAddress} />}
        />
        <Route
          path="/doctor"
          element={<Doctor walletAddress={walletAddress} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
