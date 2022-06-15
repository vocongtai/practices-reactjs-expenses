import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem({ epxpense }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={epxpense.date} />
      <div className="expense-item__description">
        <h2>{epxpense.title}</h2>
        <div className="expense-item__price">${epxpense.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
