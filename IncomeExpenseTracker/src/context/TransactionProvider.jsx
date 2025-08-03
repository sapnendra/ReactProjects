import { useReducer } from "react";
import { TransactionContext } from "./TransactionContext";

const initialState = {
  transactions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (txn) => txn.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
