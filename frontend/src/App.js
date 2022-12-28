import './App.css';
import React from "react";
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

function App() {

  return (
    <div className="App">
      {/* <div>
        <Home />
        <Signup />
        <Login />
        <Dashboard />
      </div>       */}
      <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<h1>Not found!</h1>} path="*" />
          </Routes>
          {/*<Footer />*/}
      </BrowserRouter>      
    </div>
  );
}

export default App;