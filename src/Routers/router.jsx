import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../view/home';
import LoginPage from '../view/login';
import CadasterPage from '../view/cadaster';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cadaster" element={<CadasterPage />} />
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </Router>
  );
};

export default Routers;
