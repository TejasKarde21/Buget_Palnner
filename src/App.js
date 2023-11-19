import React from 'react'
import Balance from './component/Balance'
import ExpenseForm from './component/ExpenseForm'
import ExpenseList from './component/ExpenseList'
import { ExpenseProvider } from './ExpenseContext'


function App() {
  return (
    <div className='px-16 md:px-24'>
    <ExpenseProvider>
     <h1 className='text-3xl font-semibold'>My Budget Planner</h1>
       
       <Balance />
       <ExpenseList/>
       <ExpenseForm/>

    </ExpenseProvider>
    </div>
  )
}

export default App

