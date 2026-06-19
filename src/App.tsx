

import  ExpenseForm  from "./ExpenseForm";
import  ExpenseList  from "./ExpenseList";


function App() {
  return (
    <div className="app-container">
      <h1> Expense Tracker</h1>
      <ExpenseForm />
       <h3 className="total">Total Expense:750.00</h3>
      <ExpenseList />
    </div>
  )
}

export default App
