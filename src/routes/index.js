import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BrasilApi from '../pages/BrasilApi';
import ViaCep from '../pages/ViaCep';
import Home from '../pages/Home';
import './styles.css'

const RouteList = () => (
  <BrowserRouter>
    <nav className="w-100 h-100 bg-dark text-light d-flex justify-content-center">
      <Link className="mx-3" to="/">Ir para a Home</Link><br />
      <Link className="mx-3" to="/brasilapi">Brasil API</Link>
      <Link className="mx-3" to="/viacep">Via CEP</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brasilapi" element={<BrasilApi />} />
      <Route path="/viacep" element={<ViaCep />} />
      <Route path="*" element={<h1>404: Página não encontrada</h1>} />
      {/* <Route path=":repositoryOwner/:repositoryName" element={<Repository />} /> */}
    </Routes>
  </BrowserRouter>
);

export default RouteList;
