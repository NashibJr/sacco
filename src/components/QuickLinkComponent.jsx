import React from "react";

const QuickLinkComponent = ({ image, label, handleNavigate }) => {
  return (
    <div className="quick-link-comp" onClick={handleNavigate}>
      <img src={image} alt="" className="quick-img" />
      <p>{label}</p>
    </div>
  );
};

export default QuickLinkComponent;
