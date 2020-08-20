import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <GlobalProvider>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
