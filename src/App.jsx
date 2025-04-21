import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Suggestions from "./pages/Suggestions/Suggestions";
import NewFeedback from "./pages/NewFeedback/NewFeedback.jsx";
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
      <div className="route-width">
        <Routes>
          <Route path="/" element={<Suggestions suggestions={suggestions} />} />
          <Route
            path="/new-feedback"
            element={<NewFeedback setSuggestions={setSuggestions} />}
          />
          {/* Feedback Detail */}
          {/* Edit Feedback */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
