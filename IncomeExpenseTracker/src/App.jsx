import TransactionProvider from "./context/TransactionProvider";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

const App = () => (
  <TransactionProvider>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Income & Expense Tracker</h1>
        <Balance />
        <AddTransaction />
        <TransactionList />
      </div>
    </div>
  </TransactionProvider>
);

export default App;
