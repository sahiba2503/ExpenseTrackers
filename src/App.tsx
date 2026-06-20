
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [expense, setExpense] = useState([]);

  const addExpense = (expense) => {
    setExpense((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpense((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  const totalExpense = expense.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <h3 className="total">
        Total Expense: ₹{totalExpense.toFixed(2)}
      </h3>

      <ExpenseList
        expenses={expense}
        onDelete={deleteExpense}
      />
    </div>
  );
}

export default App;