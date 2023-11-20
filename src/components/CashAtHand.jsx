import React from "react";
import Card from "./Card";

const CashAtHand = () => {
  return (
    <div>
      <Card>
        <p className="para-2" style={{ marginTop: 0 }}>
          Today's cash at hand
        </p>
        <p className="para-1">
          Opening & today's cash sales (-) opening & yesterday's expenses and
          purchases
        </p>
        <p className="closing-cash">0</p>
      </Card>
    </div>
  );
};

export default CashAtHand;
