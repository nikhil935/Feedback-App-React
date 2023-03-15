import React from "react";
import Card from "./shared/Card";

const FeedbackItem = (props) => {
  return (
    <Card>
      <div className="num-display">{props.item.rating}</div>
      <button
        className="close"
        onClick={() => {
          props.handleDelete(props.item.id);
        }}
      >
        x
      </button>
      <div className="text-display">{props.item.text}</div>
      {/* <button onClick={handleOnClick}>Click</button> */}
    </Card>
  );
};

export default FeedbackItem;
