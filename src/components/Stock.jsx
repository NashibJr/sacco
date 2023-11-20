import React from "react";
import Card from "./Card";
import purchases from "../assets/purchases.png";

const Stock = () => {
  return (
    <div className="stock">
      <Card>
        <span>
          <p>closing & opening stock</p>
          <img src={purchases} alt="" width={20} height={20} />
        </span>
        <div className="label">
          <label>
            Branch{" "}
            <select>
              <option selected></option>
              <option>Branch 1</option>
              <option>Branch 2</option>
            </select>
          </label>
          <label>
            From Date
            <input
              type="date"
              value={`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}
            />
          </label>
          <label>
            To Date
            <input
              type="date"
              value={`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}
            />
          </label>
          <button className="go-btn">go</button>
        </div>
      </Card>
    </div>
  );
};

export default Stock;
