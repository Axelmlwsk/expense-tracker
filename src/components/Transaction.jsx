import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../actions/index";
import { currencyFormat } from "./IncomeExpenses";

function Transaction({ text, amount, id }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(deleteTransaction(id));
  };

  return (
    <div>
      <button onClick={handleClick}>x</button>
      <p>
        {text} {currencyFormat(parseFloat(amount))}
      </p>
    </div>
  );
}

export default Transaction;
