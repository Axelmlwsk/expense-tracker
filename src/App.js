import "./App.css";
import "./normalize.css";
import Header from "./components/Header/Header.jsx";
import Balance from "./components/Balance/Balance.jsx";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses.jsx";
import TransactionList from "./components/TransactionList/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction/AddTransaction.jsx";
function App() {
  return (
    <div className="container-app">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
