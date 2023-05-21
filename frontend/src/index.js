import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Feedpage from "./pages/feedpage";
import BucketList from "./pages/Bucket";
import TimelineDisplay from "./pages/TimelineDisplay";
import Forgot from "./pages/ResetPage";
import Eventpage from "./pages/Eventpage";
import Travelpage from "./pages/Travelpage";
import Setting from "./pages/Setting";
import Facerec from "./pages/facerec";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event" element={<Eventpage />} />
        <Route path="/travel" element={<Travelpage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/feedpage" element={<Feedpage />} />
        <Route path="/bucket" element={<BucketList />} />
        <Route path="/timeline" element={<TimelineDisplay />} />
        <Route path="/reset-password" element={<Forgot />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/facerec" element={<Facerec />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);