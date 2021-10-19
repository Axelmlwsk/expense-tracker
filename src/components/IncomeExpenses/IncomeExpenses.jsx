import React from "react";
import { useSelector } from "react-redux";
import style from "./IncomeExpenses.module.css";

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
    <div className={style.container}>
      <div className={style.income}>
        <p>INCOME</p>
        <span>{currencyFormat(incomeTotal)}</span>
      </div>
      <div className={style.expenses}>
        <p>EXPENSES</p>
        <span>{currencyFormat(expensesTotal)}</span>
      </div>
    </div>
  );
}

export default IncomeExpenses;
