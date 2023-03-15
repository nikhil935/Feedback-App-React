import React, { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

const FeedbackForm = ({ handleAdd }) => {
  const [text, SetText] = useState("");
  const [rating, SetRating] = useState(10);
  const [btnDisabled, SetBtnDisabled] = useState(true);
  const [message, SetMessage] = useState("");
  const handleTextChange = (e) => {
    if (text === "") {
      SetBtnDisabled(true);
      SetMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      SetMessage("Text must be Atleast 10 characters");
      SetBtnDisabled(true);
    } else {
      SetMessage(null);
      SetBtnDisabled(false);
    }
    SetText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const feedback = {
        text,
        rating,
      };
      handleAdd(feedback);
      SetText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us? </h2>
        <RatingSelect select={(rating) => SetRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            placeholder="write a review"
            name="review"
            type="text"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message}
      </form>
    </Card>
  );
};

export default FeedbackForm;
