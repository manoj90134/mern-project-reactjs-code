import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import SignUp from "./Pages/SignUp";
import LoginForm from "./Pages/LoginForm";

import { useAuthcontext } from "../src/hooks/useAuthContext";

function App() {
  const { user } = useAuthcontext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/login"
            element={!user ? <LoginForm /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />

          <Route path="/logout" element={<logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
