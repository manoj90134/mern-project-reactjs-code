import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import AboutPage from "./Pages/AboutPage";

import SignUp from "./Pages/SignUp";
import LoginForm from "./Pages/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
