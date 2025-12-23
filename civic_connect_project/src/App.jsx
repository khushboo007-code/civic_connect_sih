import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReportIssue from './pages/ReportIssue';
import Explore from './pages/Explore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<ReportIssue />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;
