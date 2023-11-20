import React from "react";

const Filters = () => {
  return (
    <div className="filters">
      <select>
        <option disabled>Place</option>
        <option disabled selected>
          Bat valley
        </option>
        <option disabled>Jinja road</option>
        <option disabled>Kampala</option>
      </select>
      <select>
        <option disabled>Date</option>
        <option disabled selected>
          Today's
        </option>
        <option disabled>Yesterday</option>
        <option disabled>Tomorrow</option>
      </select>
    </div>
  );
};

export default Filters;
