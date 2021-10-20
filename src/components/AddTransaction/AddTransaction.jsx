import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../actions";
import style from "./AddTransaction.module.css";

function AddTransaction() {
  const dispatch = useDispatch();

  const [transaction, setTransaction] = useState({
    text: "",
    amount: 0,
  });

  const handleChange = (event) => {
    if (transaction.amount.length > 10) {
      alert("asdasda");
    }
    setTransaction({ ...transaction, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTransaction(transaction));
  };

  return (
    <div className={style.container}>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className={style.text}>
          <label>Text</label>
          <input value={transaction.text} onChange={handleChange} type="text" name="text" placeholder="Enter text..." />
        </div>

        <div className={style.amount}>
          <label>Amount</label>
          <input value={transaction.amount} onChange={handleChange} type="number" step="0.1" name="amount" placeholder="Enter Amount..." />
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
