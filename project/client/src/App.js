import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Alert, Button } from '@mui/material';
// Import Components
import Signup from "./components/Signup/index.js"
import Login from "./components/Login/index.js"
import Homepage from "./components/Homepage/index.js";
import Navbar from './components/Navbar/index.js';
import UserNavbar from './components/Navbar/UserNavbar/index.js';
import Dashboard from './components/Dashboard/index.js';
import DetailedView from './components/DetailedView/index.js'

import { checkIsLoggedIn, } from './api.js';

function App() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("")
  const [showMessage, setShowMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleShowMessage = (message, type) => {
    setMessage(message);
    setMessageType(type);
    setShowMessage(true);
    setTimeout(() => {
      handleClearMessage();
  }, 5000);
  }

  const handleClearMessage = () => {
    setMessage("");
    setMessageType("");
    setShowMessage(false);
  }

  const checkAuthStatus = async () => {
    let isLoggedIn = false;
    try {
      isLoggedIn = await checkIsLoggedIn();
      setIsLoggedIn(isLoggedIn);
      return isLoggedIn;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <div>
      <Router>
        {isLoggedIn ? <UserNavbar setIsLoggedIn={setIsLoggedIn}/> : <Navbar />}
        {showMessage && 
        <Alert 
          severity={messageType}
          action={
          <Button color="inherit" size="small" onClick={handleClearMessage}>
                      Close
          </Button>
          }>
            {message}
        </Alert>}
        <Routes>
          <Route exact path="/" element={<Homepage checkAuthStatus={checkAuthStatus}/>} />
          <Route exact path="/signup" element={<Signup handleShowMessage={handleShowMessage} handleClearMessage={handleClearMessage} checkAuthStatus={checkAuthStatus} />} />
          <Route exact path="/login" element={<Login handleShowMessage={handleShowMessage} handleClearMessage={handleClearMessage} checkAuthStatus={checkAuthStatus} />} />
          <Route exact path="/dashboard" element={<Dashboard handleShowMessage={handleShowMessage} handleClearMessage={handleClearMessage} checkAuthStatus={checkAuthStatus}/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
