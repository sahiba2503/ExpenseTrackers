

function ExpenseForm() {
  return (
    <div>
       <form className="expense-form">
        <input type="text" placeholder="Expense Title" value="" />
        <input type="number" placeholder="Amount " value="" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm
