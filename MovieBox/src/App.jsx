import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MovieGrid from './Components/MovieGrid';

export default function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieGrid filterType="ALL" />} />
        <Route path="/watchlist" element={<MovieGrid filterType="WATCHLIST" />} />
        <Route path="/favorites" element={<MovieGrid filterType="LIKED" />} />
      </Routes>
    </div>
  );
}