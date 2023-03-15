import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [feedback, SetFeedback] = useState(FeedbackData);

  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    SetFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      SetFeedback(feedback.filter((item) => item.id !== id));
    }
    console.log(id);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={handleAdd} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
