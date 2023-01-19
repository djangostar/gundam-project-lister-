import React from 'react';
import { UserProvider } from './context/user';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation/NavBar'
import Home from './components/HomePage/Home'
import Signup from './components/Authentication/Signup'
import Login from './components/Authentication/Login'

function App() {
  return (
    <div className="App">
      <UserProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
