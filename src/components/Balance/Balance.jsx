import React from "react";
import { useSelector } from "react-redux";
import { currencyFormat } from "../IncomeExpenses/IncomeExpenses";
import style from "./Balance.module.css";

function Balance() {
  let getBalance = useSelector((state) => state.transactions);
  const amounts = getBalance.map((balance) => parseFloat(balance.amount));
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className={style.balanceContainer}>
      <h1 className={style.title}>{currencyFormat(total)}</h1>
      <h4 className={style.description}>Balance</h4>
    </div>
  );
}

export default Balance;
