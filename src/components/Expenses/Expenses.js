import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css';

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
    return (
        <div className="expenses">
          <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler} />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpenseList items={filteredExpenses} />
         
       
        </div>
    )
}
export default Expenses;