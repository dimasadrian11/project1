import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './'
import './Celana';
import './about';
import './API';

const Home = lazy(() => import('./Home'));
const Kaos = lazy(() => import('./Kaos'));
const Celana = lazy(() => import('./Celana'));
const About = lazy(() => import('./about'));
const API = lazy(() => import('./API'));




const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kaos" element={<Kaos />} />
        <Route path="/Celana" element={<Celana />} />
        <Route path="/about" element={<About />} />
        <Route path="/API" element={<API />} />
      
      </Routes>
    </Suspense>
  </Router>
);
export default App;