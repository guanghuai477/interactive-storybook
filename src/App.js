import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import SelectBookPage from './components/SelectBookPage';
import Story1_1 from './components/Story1_1';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/select-book" element={<SelectBookPage />} />
        <Route path="/story/1/1" element={<Story1_1 />} />
        {/* 其他故事路由将在实现相应组件后添加 */}
      </Routes>
    </Router>
  );
}

export default App; 