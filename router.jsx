import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import Report from "./pages/Report";
import Guardians from "./pages/Guardians";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Team from "./pages/Team";
import AiDemo from "./pages/AiDemo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/report" element={<Report />} />
      <Route path="/guardians" element={<Guardians />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ai" element={<AiDemo />} />
    </Routes>
  );
}
