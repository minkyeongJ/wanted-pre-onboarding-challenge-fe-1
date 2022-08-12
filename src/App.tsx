import React from "react";
import "./styles/reset.css";
import "./styles/global.css";
import Login from "./pages/auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import ToDoList from "./pages/todoList/ToDoList";
import SignUp from "./pages/auth/signUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <ToDoList />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
