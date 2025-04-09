import { useState } from "react";
import "./NewFeedback.css";

function NewFeedback() {
  const handleSubmit = () => {
    console.log("hi");
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    detail: ""
  });

  return (
    <>
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
              value={formData.flavor}
              onChange={handleChange}
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Bug</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
            </select>
          </div>
          {/* all ontop of one another */}
          <div className="feedback-field">
            <label htmlFor="phone">Feedback Detail</label>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea id="detail" name="detail" rows="4" cols="50"></textarea>
          </div>
        </fieldset>
        <div className="buttons">
          <button type="submit" className="submit-button" id="submit-button">
            Add Feedback
          </button>
          <button>Cancel</button>
        </div>
      </form>
    </>
  );
}

export default NewFeedback;
