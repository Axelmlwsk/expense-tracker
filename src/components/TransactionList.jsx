import React from "react";
import { useSelector } from "react-redux";
import Transaction from "./Transaction";
function TransactionList() {
  const transactions = useSelector((state) => state.transactions);

  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trans) => {
          return (
            <li key={trans.id}>
              <Transaction text={trans.text} amount={trans.amount} id={trans.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
