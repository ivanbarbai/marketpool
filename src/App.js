import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Items from "./components/Items/Items";
import Transactions from "./components/Transactions/Transactions";
import Statistics from "./components/Reports/Statistics";
import Navbar from "./components/Navbar/Navbar";
import Withdraw from "./components/Withdraw/Withdraw";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useAuth } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useState, useEffect } from 'react';


function App() {

  return (


    <div className='app'>
      <Navbar />
      <div className="Main">
        <Routes>
          <Route index path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="sell" element={
            <ProtectedRoute>
              <Items />
            </ProtectedRoute>
          } />
          <Route path="transactions" element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          } />
          <Route path="statistics" element={
            <ProtectedRoute>
              <Statistics />
            </ProtectedRoute>
          } />
          <Route path="withdraws" element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          } />
          <Route index path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
