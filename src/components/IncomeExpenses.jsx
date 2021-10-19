import React from "react";
import { useSelector } from "react-redux";

export function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function IncomeExpenses() {
  let getBalance = useSelector((state) => state.transactions);

  let incomeTransactions = getBalance.filter((trans) => trans.amount > 0);
  let expensesTransactions = getBalance.filter((trans) => trans.amount < 0);

  let incomeTotal = incomeTransactions.reduce((acc, item) => (acc += parseFloat(item.amount)), 0);
  let expensesTotal = expensesTransactions.reduce((acc, item) => (acc += parseFloat(item.amount)), 0);

  return (
    <div className="inc-exp-container">
      <div className="income">
        <p>income</p>
        <p>{currencyFormat(incomeTotal)}</p>
      </div>
      <div className="expenses">
        <p>expenses</p>
        <p>{currencyFormat(expensesTotal)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
