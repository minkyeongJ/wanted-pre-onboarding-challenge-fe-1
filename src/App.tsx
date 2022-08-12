import React from "react";
import "./styles/reset.css";
import "./styles/global.css";
import Login from "./pages/auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
