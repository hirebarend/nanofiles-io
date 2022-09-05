import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, SpacesPage } from "./pages";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      mixpanel.init("6570fb6b55412e8145762b070dd25c3b");

      mixpanel.track("Page View");
    }
  }, [location]);

  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<SpacesPage />} path="/spaces" />
      <Route element={<SpacesPage />} path="/spaces/:id" />
    </Routes>
  );
}

export default App;
