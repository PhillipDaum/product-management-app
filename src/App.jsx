import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Suggestions from "./pages/suggestions/Suggestions";
import NewFeedback from "./pages/newfeedback/NewFeedback";
import "./Reset.css";
import "./App.css";

function App() {
  const [suggestions, setSuggestions] = useState(null);

  // get suggestions
  const getSuggestions = async () => {
    try {
      const response = await fetch("/api/suggestions", {
        method: "GET",
      });
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error retrieving suggestions:", error);
    }
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="app-wrapper">
      {/* Login page */}
      {/* OR */}
      {/* router */}
        <Routes>
          <Route path="/" element={<Suggestions suggestions={suggestions} />} />
          <Route path="/new-feedback" element={<NewFeedback />} />
          {/* Suggestions */}
          {/* Feedback Detail */}
          {/* New Feedback */}
          {/* Edit Feedback */}
        </Routes>
    </div>
  );
}

export default App;
