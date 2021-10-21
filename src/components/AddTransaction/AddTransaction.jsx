import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTransaction } from "../../actions";
import style from "./AddTransaction.module.css";

function AddTransaction() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [transaction, setTransaction] = useState({
    text: "",
    amount: "",
  });

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    dispatch(addTransaction(transaction));
  };

  return (
    <div className={style.container}>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.text}>
          <label>Text</label>
          <input {...register("text", { required: "Enter a description", maxLength: 28 })} value={transaction.text} onChange={handleChange} type="text" name="text" placeholder="Enter text..." />
        </div>

        <div className={style.amount}>
          <label>Amount</label>
          <input
            {...register("amount", { required: "Enter an amount", maxLength: 12 })}
            value={transaction.amount}
            onChange={handleChange}
            type="number"
            step="0.1"
            name="amount"
            placeholder="Enter Amount..."
          />
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
