import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Signup from "./components/Signup/index.js"
import Login from "./components/Login/index.js"
import Homepage from "./components/Homepage/index.js"

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
