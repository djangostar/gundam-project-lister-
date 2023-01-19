import React from 'react';
import { UserProvider } from './context/user';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
