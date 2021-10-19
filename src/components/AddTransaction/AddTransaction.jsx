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
    setTransaction({ ...transaction, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTransaction(transaction));
  };

  return (
    <>
      <h3>Add a new transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>Text</label>
        <input value={transaction.text} onChange={handleChange} type="text" name="text" placeholder="Enter text..." />
        <label>Amount</label>
        <input value={transaction.amount} onChange={handleChange} type="number" step="0.1" name="amount" placeholder="Enter Amount..." />
        <button type="submit">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
