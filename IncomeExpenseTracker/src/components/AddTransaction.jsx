import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";


const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const { addTransaction } = useContext(TransactionContext);

  function submitHandler(e) {
    e.preventDefault();
    if (!text || !amount) return;

    addTransaction({
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      type,
    });
    setText("");
    setAmount("");
  }

  return (
    <form onSubmit={submitHandler} className="mb-6">
      <h3 className="font-bold mb-2">Add New Transaction</h3>
      <input
        type="text"
        className="border rounded p-2 w-full mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        className="border rounded p-2 w-full mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        min="0"
        step="0.01"
      />
      <div className="flex gap-4 mb-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === "income"}
            onChange={() => setType("income")}
            className="mr-1"
          />
          <span className="text-green-600">Income</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === "expense"}
            onChange={() => setType("expense")}
            className="mr-1"
          />
          <span className="text-red-500">Expense</span>
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 w-full cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default AddTransaction;
