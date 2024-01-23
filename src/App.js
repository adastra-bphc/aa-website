import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Events from './routes/Events';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
