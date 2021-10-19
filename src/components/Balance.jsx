import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  let balance = useSelector((state) => state.balance);

  return (
    <div>
      <h4>Your balance</h4>
      <h1>$ {balance}</h1>
    </div>
  );
}

export default Balance;
