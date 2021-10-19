import React from "react";
import { useSelector } from "react-redux";

function IncomeExpenses() {
  let income = useSelector((state) => state.income);
  let expenses = useSelector((state) => state.expenses);

  return (
    <div className="inc-exp-container">
      <div className="income">
        <p>income</p>
        <p>{income}</p>
      </div>
      <div className="expenses">
        <p>expenses</p>
        <p>{expenses}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
