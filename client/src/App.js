import React from 'react';
import { UserProvider } from './context/user';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation/NavBar'
import Home from './components/HomePage/Home'
import Signup from './components/Authentication/Signup'
import Login from './components/Authentication/Login'
import GundamForm from './components/Forms/GundamForm'
import PurchaseForm from './components/Forms/PurchaseGundam'
import GundamList from './components/Gundams/GundamList'
import GundamDetails from './components/Gundams/GundamDetails';
import MyGundams from './components/Gundams/MyGundams';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/purchases/new' element={<PurchaseForm />} />
          <Route path='/gundams/:gundam_id/purchases' element={<MyGundams />} />
          <Route path='/gundams/new' element={<GundamForm />} />
          <Route path='/gundams' element={<GundamList />} />
          <Route path='/gundams/:id' element={<GundamDetails />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
