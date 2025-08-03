import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((txn) => txn.type === "income")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const expense = transactions
    .filter((txn) => txn.type === "expense")
    .reduce((sum, txn) => sum + txn.amount, 0);

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Current Balance</h2>
      <div className="text-2xl mb-2">₹{(income - expense).toFixed(2)}</div>
      <div className="flex space-x-4">
        <div className="text-green-600 font-semibold">
          Income: ₹{income.toFixed(2)}
        </div>
        <div className="text-red-500 font-semibold">
          Expense: ₹{expense.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Balance;
