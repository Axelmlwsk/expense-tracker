import React from "react";
import { useSelector } from "react-redux";
import Transaction from "../Transaction/Transaction";
import style from "./TransactionList.module.css";
function TransactionList() {
  const transactions = useSelector((state) => state.transactions);

  return (
    <div className={style.container}>
      <h3 className={style.title}>History</h3>
      <span className={style.advise}>click to delete</span>
      <div className={style.list}>
        {transactions?.map((trans) => {
          return <Transaction key={trans.id} text={trans.text} amount={trans.amount} id={trans.id} />;
        })}
      </div>
    </div>
  );
}

export default TransactionList;
