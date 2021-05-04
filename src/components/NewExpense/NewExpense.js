import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm'

import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


  const  SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  const starEditingHandler = () => {
    setIsEditing(true)
  }

    return (
        <div className='new-expense'>
          {!isEditing && <button onClick={starEditingHandler}>Add New Expense</button>}
           {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;