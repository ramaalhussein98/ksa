import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Map from "./map/Map";
import MapTwo from "./map/MapTwo";
import KSAMap from "./KSAMap/KSAMap";
import RotatePhone from "./map/components/RotatePhone";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<KSAMap />} />
          <Route path="/map" element={<MapTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
