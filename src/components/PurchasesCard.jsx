import React from "react";
import Card from "./Card";
import purchases from "../assets/purchases.png";

const PurchasesCard = () => {
  return (
    <div className="purchases-card">
      <Card>
        <span>
          <p>purchases</p>
          <img src={purchases} width={20} height={20} alt="" />
        </span>
        <p className="para-1">Creditors (from credit purchases)</p>
        <p className="para-2" style={{ marginBottom: 45 }}>
          Ush 2,400,000
        </p>
        <div className="purchases">
          <div>
            <p className="para-1">Today's cash purchases</p>
            <div>
              <div className="purchases-div-1"></div>
              <p className="para-2">Ush 0</p>
            </div>
          </div>
          <div>
            <p className="para-1">Today's credit purchases</p>
            <div className="credit-purchases">
              <div className="purchases-div-2"></div>
              <p className="para-2">Ush 0</p>
            </div>
          </div>
          <p className="para-1">
            Current stock at buying prices <strong>396,530,000</strong>
          </p>
          <p className="para-1">
            Current stock at selling prices <strong>524,725,000</strong>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PurchasesCard;
