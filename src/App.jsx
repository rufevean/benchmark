
import React, { useEffect, useRef, useState } from 'react';
import { Noise } from 'noisejs';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MarkdownPage from './MarkdownPage';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>

        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/resources" element={<MarkdownPage />} />
          {/* Define other routes here as needed */}
        </Routes>
    </Router>
  );
}

export default App;
