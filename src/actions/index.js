export let ADD_TRANSACTION = "ADD_TRANSACTION";
export let DELETE_TRANSACTION = "DELETE_TRANSACTION";

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
}

export function deleteTransaction(id) {
  return {
    type: DELETE_TRANSACTION,
    payload: id,
  };
}
