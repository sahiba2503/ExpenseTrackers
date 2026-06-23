

import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      return alert("please fill all fields");
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputField"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          className="inputField"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;