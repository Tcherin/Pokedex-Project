import React from "react";
import NavBar from "../components/NavBar";
import PokedexContainer from "./PokedexContainer";
import TrainerContainer from "./TrainerContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainContainer = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<PokedexContainer />} />
          <Route path="/trainers" element={<TrainerContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainContainer;
