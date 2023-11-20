import React from "react";
import Card from "./Card";
import sales from "../assets/salse.png";

const SalesCard = () => {
  return (
    <div className="sales-card">
      <Card>
        <span>
          <p>sales</p>
          <img src={sales} alt="" width={15} height={15} />
        </span>
        <p className="para-1">Debtors (from credit salse)</p>
        <p className="para-2">Ush 505,000</p>
        <div className="grap-1">
          <div className="div-1"></div>
          <div>
            <p className="para-1">Today's cash sales</p>
            <p className="para-2">Ush 0</p>
          </div>
        </div>
        <div className="grap-1">
          <div className="graph-2-div"></div>
          <div>
            <p className="para-1">Today's credit sales</p>
            <p className="para-2">Ush 0</p>
          </div>
        </div>
        <p className="para-1">
          Yesterday's closing cash from sales without expenses
        </p>
        <p className="closing-cash">Ush 0</p>
      </Card>
    </div>
  );
};

export default SalesCard;
