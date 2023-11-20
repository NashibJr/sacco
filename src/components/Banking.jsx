import React from "react";
import Card from "./Card";
import bank from "../assets/bank.png";

const Banking = () => {
  return (
    <div className="banking-card">
      <Card>
        <div>
          <span>
            <p>banking</p>
            <img src={bank} about="" width={20} height={20} />
          </span>
          <p className="para-1">Current bank balance as of today</p>
          <p className="para-2">Ush 4,630,000</p>
          <p className="para-1">Today's Account's Summary</p>
        </div>
      </Card>
    </div>
  );
};

export default Banking;
