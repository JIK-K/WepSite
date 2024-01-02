import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About/AboutPage";
import Home from "../pages/Home/HomePage";
import React from "react";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="GameLand/home" element={<Home />} />
        <Route path="GameLand/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
