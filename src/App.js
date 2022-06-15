import { useState } from "react";
import "./Component/Expenses/Expense.css";
import Expenses from "./Component/Expenses/Expenses.js";
import NewExpense from "./Component/NewExpense/NewExpense.js";

function App() {
  const initializeExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenseItem] = useState(initializeExpenses);
  const addExepenseHandler = (expense) => {
    setExpenseItem((prevStase)=>{
      return [expense,...prevStase]
    });
  };

  // console.log(expenseItem);
  return (
    <div>
      <NewExpense onAddExpense={addExepenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
