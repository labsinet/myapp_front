import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;