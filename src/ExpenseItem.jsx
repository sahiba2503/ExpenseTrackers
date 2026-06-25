

function ExpenseItem({ item,onDelete}) {
  return (
    
      <div className="expenseitemContainer">
        <span  className="expenseItems">{item.title}</span>
        <span>{item.amount}</span>
       <button onClick={()=> onDelete(item.id)}>X</button>
       </div>
    
  )
}

export default ExpenseItem
