import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="mb-6">
      <h3 className="font-bold mb-2">History</h3>
      <ul>
        {transactions.map((txn) => (
          <li
            key={txn.id}
            className={`flex justify-between items-center p-2 mb-1 shadow rounded
              ${txn.type === "income" ? "bg-green-100" : "bg-red-100"}`}
          >
            <span>{txn.text}</span>
            <span
              className={`font-bold ${
                txn.type === "income" ? "text-green-600" : "text-red-500"
              }`}
            >
              {txn.type === "income" ? "+" : "-"}₹{txn.amount.toFixed(2)}
            </span>
            <button
              className="ml-4 text-gray-400 hover:text-black cursor-pointer"
              onClick={() => deleteTransaction(txn.id)}
              title="Delete"
            >
              &#x2715;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
