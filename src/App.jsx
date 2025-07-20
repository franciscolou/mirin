import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhatMirin from './pages/WhatMirin';
import Committees from './pages/Committees';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oquemirin" element={<WhatMirin />} />
        <Route path="/comites" element={<Committees />} />
        <Route path="/faq" element={<FAQ />} />

        
      </Routes>
    </Router>
  );
}

export default App;