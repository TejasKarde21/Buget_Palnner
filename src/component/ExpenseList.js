import React from 'react';
import { useExpense } from '../ExpenseContext';

function ExpenseList() {
  const { state } = useExpense();

  return (
    <div className='mt-12'>
      <h2 className='text-2xl'>ExpenseList</h2>
      <ul>
        {state.transaction.map((expense) => (
          <li key={expense.id} className='border-2 px-8 py-3 rounded-md bg-slate-200 flex justify-between mt-4 mb-4 '>
          <span>{expense.description}</span> <span>Rs {expense.amount}</span>    
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

