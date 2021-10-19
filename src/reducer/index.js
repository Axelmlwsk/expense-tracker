import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/index.js";

let ID = 0;

const initialState = {
  transactions: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, transactions: [...state.transactions, { ...action.payload, id: ++ID }] };
    case DELETE_TRANSACTION:
      return { ...state, transactions: state.transactions.filter((trans) => trans.id !== action.payload) };
    default:
      return state;
  }
}

export default rootReducer;
