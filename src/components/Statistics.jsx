import React from "react";
import SalesCard from "./SalesCard";
import PurchasesCard from "./PurchasesCard";
import Banking from "./Banking";
import CashAtHand from "./CashAtHand";
import Stock from "./Stock";

const Statistics = () => {
  return (
    <>
      <div className="statistics">
        <SalesCard />
        <PurchasesCard />
        <Banking />
      </div>
      <div className="cash-at-hand">
        <CashAtHand />
        <Stock />
      </div>
    </>
  );
};

export default Statistics;
