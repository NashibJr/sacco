import React from "react";

const Link = ({ route, label }) => {
  return (
    <li>
      <a href={route}>{label}</a>
    </li>
  );
};

export default Link;
