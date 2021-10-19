import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../actions/index";

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
        {text}, {amount}, {id}
      </p>
    </div>
  );
}

export default Transaction;
