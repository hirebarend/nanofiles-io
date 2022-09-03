import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  );
}

export default App;
