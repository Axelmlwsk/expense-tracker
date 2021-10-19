import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../actions/index";
import { currencyFormat } from "../IncomeExpenses/IncomeExpenses";
import style from "./Transaction.module.css";
import { RiDeleteBackLine } from "react-icons/ri";

function Transaction({ text, amount, id }) {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(deleteTransaction(id));
  };

  // se usa onMouseLeave y onMouseOver para setear al estado a true o false, y hacer un renderizado condicional del boton delete.

  return (
    <div onMouseOver={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)} className={style.transactionContainer}>
      {hover ? (
        <button className={style.button} onClick={handleClick}>
          <RiDeleteBackLine />
        </button>
      ) : null}
      <span>{text}</span>
      <span className={style.amount}>{currencyFormat(parseFloat(amount))}</span>
      <div className={amount > 0 ? style.green : style.red}></div>
    </div>
  );
}

export default Transaction;
