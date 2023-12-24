import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../view/home';
import LoginPage from '../view/login';
import CadasterPage from '../view/cadaster';
import ErrorPage from '../view/errorPage';
import Member from '../Layout/member/member';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cadaster" element={<CadasterPage />} />
        <Route path="/member/:id" element={<Member />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
};

export default Routers;
