import React, { useState } from "react";
const RatingSelect = ({ select }) => {
  const [selected, SetSelected] = useState(10);

  const handleChange = (e) => {
    SetSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      <li>
        <input
          value="1"
          type="radio"
          id="num1"
          name="rating"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          value="2"
          type="radio"
          id="num2"
          name="rating"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          value="3"
          type="radio"
          id="num3"
          name="rating"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          value="4"
          type="radio"
          id="num4"
          name="rating"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          value="5"
          type="radio"
          id="num5"
          name="rating"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          value="6"
          type="radio"
          id="num6"
          name="rating"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          value="7"
          type="radio"
          id="num7"
          name="rating"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          value="8"
          type="radio"
          id="num8"
          name="rating"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          value="9"
          type="radio"
          id="num9"
          name="rating"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          value="10"
          type="radio"
          id="num10"
          name="rating"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
