import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  // const [expenseItem,setExpenseItem]= useState()
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterExpenseData,
      
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
const [showExpenseForm,setShowExpenseForm]=useState(false);

const showExpensesFormHandler =()=>{
  setShowExpenseForm (true);
}

const cancelClickHandler=(cancel)=>{
  setShowExpenseForm(cancel);
}

let expensesFormContent;
if(showExpenseForm){
    expensesFormContent =(
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
        onCancelAddExpense={cancelClickHandler} />
    )
}
else{
  expensesFormContent = (
    <button onClick={showExpensesFormHandler}>Add New Expense</button>
  )
}
  return (
    <div className="new-expense">
      
      {expensesFormContent}
    </div>
  );
};
export default NewExpense;
