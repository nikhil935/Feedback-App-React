import React from "react";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";

const FeedbackList = (props) => {
  if (!props.feedback || props.feedback.length === 0) {
    return <p> No feedback yet </p>;
  }
  return (
    <Card reverse={true}>
      {props.feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={props.handleDelete}
        />
      ))}
    </Card>
  );
};

export default FeedbackList;
