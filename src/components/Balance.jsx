import React from "react";
import { useSelector } from "react-redux";
import { currencyFormat } from "./IncomeExpenses";
function Balance() {
  let getBalance = useSelector((state) => state.transactions);
  const amounts = getBalance.map((balance) => parseFloat(balance.amount));
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h4>Your balance</h4>
      <h1>{currencyFormat(total)}</h1>
    </div>
  );
}

export default Balance;
