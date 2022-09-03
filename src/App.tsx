import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SpacesPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<SpacesPage />} path="/spaces" />
    </Routes>
  );
}

export default App;
