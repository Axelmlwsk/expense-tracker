import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../actions/index";
import { currencyFormat } from "../IncomeExpenses/IncomeExpenses";
import style from "./Transaction.module.css";

function Transaction({ text, amount, id }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(deleteTransaction(id));
  };

  // se usa onMouseLeave y onMouseOver para setear al estado a true o false, y hacer un renderizado condicional del boton delete.

  return (
    <>
      <div onClick={handleClick} className={style.transactionContainer}>
        <span className={style.text}>{text}</span>
        <span className={style.amount}>{currencyFormat(parseFloat(amount))}</span>
        <div className={amount > 0 ? style.green : style.red}></div>
      </div>
    </>
  );
}

export default Transaction;
