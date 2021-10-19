import React from "react";

function Transaction({ text, amount, id }) {
  return (
    <div>
      {text}, {amount}, {id}
    </div>
  );
}

export default Transaction;
