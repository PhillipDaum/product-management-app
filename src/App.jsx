import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Suggestions from './pages/Suggestions';
import './Reset.css';
import './App.css';

function App() {

  return (
    <>
    {/* Login page */}
    {/* OR */}
    {/* router */}
    <Routes>
    <Route path="/" element={<Suggestions />} />
      {/* Suggestions */}
      {/* Feedback Detail */}
      {/* New Feedback */}
      {/* Edit Feedback */}
    </Routes>

    </>
  )
}

export default App
