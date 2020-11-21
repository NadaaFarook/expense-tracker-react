import './App.css';
import Header from './components/header'
import Balance from './components/balance'
import IncomeExpenses from './components/incomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import GlobalStateProvider from './context/GlobalState';

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      
      </GlobalStateProvider>
  );
}

export default App;
