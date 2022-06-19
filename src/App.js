import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './'
import './Celana';
import './about';

const Home = lazy(() => import('./Home'));
const Kaos = lazy(() => import('./Kaos'));
const Celana = lazy(() => import('./Celana'));
const About = lazy(() => import('./about'));




const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kaos" element={<Kaos />} />
        <Route path="/Celana" element={<Celana />} />
        <Route path="/about" element={<About />} />
      
      </Routes>
    </Suspense>
  </Router>
);
export default App;