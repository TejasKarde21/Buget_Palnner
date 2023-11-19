import React, { useState } from 'react';
import { useExpense } from '../ExpenseContext';

function ExpenseForm() {
  const { dispatch } = useExpense();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if description and amount are not empty
    if (description.trim() === '' || isNaN(amount) || amount <= 0) {
      return;
    }

    // Dispatch the ADD_EXPENSE action
    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        description: description,
        amount: parseFloat(amount),
      },
    });

    // Clear the form fields
    setDescription('');
    setAmount('');
  };

  return (
    <div className='mt-9'>
      
      <form onSubmit={handleSubmit}>
        <label>
        <span>  Name:</span> 
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         className='border-2 w-[30ch] ml-2 md:ml-5 px-2 py-2 rounded-md'  />
        </label>
        <label>
         <span className='ml-2'>Cost:</span> 
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='border-2 w-[30ch] ml-2 md:ml-5 px-2 py-2 rounded-md'/>
        </label>
        <br/>
        <button className='bg-blue-500 px-4 text-white font-semibold rounded-md mt-5 py-2' type="submit">Save</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
