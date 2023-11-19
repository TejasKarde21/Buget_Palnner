import React from 'react'
import { useExpense } from '../ExpenseContext';

function Balance() {
  const {state} = useExpense();
  return (
    <div className='flex mt-12 justify-around'>
    
 
    <h3 className='border-2 p-2 text-xl font-medium text-gray-600 bg-gray-100 rounded-lg border-gray-300'>Total Money : Rs {state.totalMoney }</h3>
    <h3 className='border-2 p-2 text-xl font-medium text-green-700 bg-gray-100 rounded-lg border-gray-300'>Total Spent : Rs {state.spent}</h3>
    <h3 className='border-2 p-2 text-xl font-medium text-gray-600 bg-blue-200 rounded-lg border-gray-300'>Money Left : Rs {state.saving}</h3>


    </div>
  )
}

export default Balance;
