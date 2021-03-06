import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Radio",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "A Book",
      amount: 24.67 ,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450 ,
      date: new Date(2020, 5, 12),
    }
  ];

function App() {
    const [expenses, setExpenses]= useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
     setExpenses((prevExpenses)=> {
       return [expense, ...prevExpenses];
     });
    
  }
  return (
    <div>
      <NewExpense  onAddExpense = {addExpenseHandler} />
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
