import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewFeedback.css";

function NewFeedback({ setSuggestions }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    detail: "",
  });

  // get suggestions
  const sendFeedback = async () => {
    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error retrieving suggestions:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFeedback();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // save to local variable
  // then send to backend, make sure you got it

  return (
    <div className="main-content-wrapper">
      {/* add arrow */}
      <button onClick={() => navigate("/")}>Back</button>
      <form id="form" onSubmit={handleSubmit}>
        <fieldset className="new-feedback-field">
          <legend>Create New Feedback</legend>
          <div className="feedback-field">
            <label htmlFor="title">Feedback Title</label>
            <p>Add a short, descriptive headline</p>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="feedback-field">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className=""
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>
          {/* all ontop of one another */}
          <div className="feedback-field">
            <label htmlFor="detail">Feedback Detail</label>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              id="detail"
              name="detail"
              rows="4"
              cols="50"
              value={formData.detail}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <div className="buttons">
          <button type="submit" className="submit-button" id="submit-button">
            Add Feedback
          </button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default NewFeedback;
