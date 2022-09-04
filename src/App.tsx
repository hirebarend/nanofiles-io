import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { Routes, Route } from "react-router-dom";
import { HomePage, SpacesPage } from "./pages";

function App() {
  useEffect(() => {
    mixpanel.init("6570fb6b55412e8145762b070dd25c3b");

    mixpanel.track("Page View");
  }, []);

  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<SpacesPage />} path="/spaces" />
      <Route element={<SpacesPage />} path="/spaces/:id" />
    </Routes>
  );
}

export default App;
