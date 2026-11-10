import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// Render Backend URL
const API = import.meta.env.VITE_API_URL;

function App() {
  const [feedback, setFeedback] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!API) {
        throw new Error("Backend API URL is missing");
      }

      const response = await axios.post(
        `${API.replace(/\/$/, "")}/api/feedback`,
        feedback
      );

      alert(response.data.message || "Feedback submitted successfully!");

      setFeedback({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
      });

    } catch (error) {
      console.error(
        "Error submitting feedback:",
        error.response?.data || error.message
      );

      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Feedback Form</h1>

      <form onSubmit={handleSubmit} className="feedback-form">

        <label>Name:</label>
        <input
          type="text"
          name="q1"
          value={feedback.q1}
          onChange={handleChange}
          required
        />

        <label>Department:</label>
        <input
          type="text"
          name="q2"
          value={feedback.q2}
          onChange={handleChange}
          required
        />

        <label>Session Title:</label>
        <input
          type="text"
          name="q3"
          value={feedback.q3}
          onChange={handleChange}
          required
        />

        <label>Feedback:</label>
        <input
          type="text"
          name="q4"
          value={feedback.q4}
          onChange={handleChange}
          required
        />

        <label>Suggestions:</label>
        <input
          type="text"
          name="q5"
          value={feedback.q5}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;