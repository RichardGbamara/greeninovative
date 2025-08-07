import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<MultiStepForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
