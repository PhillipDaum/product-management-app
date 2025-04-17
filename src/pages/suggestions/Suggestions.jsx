import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import FeedbackCard from "../components/FeedbackCard/FeedbackCard.jsx";
import "./Suggestions.css";
import { GiWrappedHeart } from "react-icons/gi";

function Suggestions({ suggestions }) {
  const [userSelectedSuggestions, setUserSelectedSuggestions] = useState(null);
  const navigate = useNavigate();

  const selectByCategory = (e) => {
    if (e === "All") {
      setUserSelectedSuggestions(suggestions);
    } else {
      console.log(e.target.value);
      const selected = suggestions.filter(
        (item) => item.category === e.target.value
      );
      setUserSelectedSuggestions(selected);
    }
  };

  useEffect(() => {
    if (suggestions) {
      setUserSelectedSuggestions(suggestions);
    }
  }, [suggestions]);

  return (
    <div>
      <Nav selectByCategory={selectByCategory} />
      <div className="suggestions-header header-hidden-medium">
          {/* some icon */}
          {/* make number dynamic */}
          <h3>{suggestions ? suggestions.length : "0"} Suggestions</h3>
          <button onClick={() => navigate("/new-feedback")}>
            + Add Feedback
          </button>
        </div>
      <div className="main-content-wrapper">
        {/* SortByAndFeedback */}
        <div className="suggestions-header header-hidden-small">
          {/* some icon */}
          {/* make number dynamic */}
          <h3>{suggestions ? suggestions.length : "0"} Suggestions</h3>
          <button onClick={() => navigate("/new-feedback")}>
            + Add Feedback
          </button>
        </div>

        {userSelectedSuggestions ? (
          userSelectedSuggestions.map((item, index) => (
            <FeedbackCard key={index} item={item} />
          ))
        ) : (
          <div className="no-feedback-yet-card">
            <img src="./detective.svg" alt="detective illustration" />
            <h1>There is no feedback yet.</h1>
            <p>Got a suggestion? Found a bug that needs to be squashed?</p>
            <p>We love hearing about new ideas to imrove our app.</p>
            <button>+ Add Feedback</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
