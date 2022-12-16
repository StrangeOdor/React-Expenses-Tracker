import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  /*
  //const clickHandler = ()=>{
  //  title = 'Updated'
  //This doesn't work - the ExpenseItem elements are like functions 
  //which are called.... and cannot be changed this easily 'after' call.
  }*/

  //Use array destructuring to collect attribute name and it's mutator function
  //const [title, setTitle] = useState(props.title);

  //Event Handler which will mutate title onclick using above^
  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
  //OnClick attribute will call passed function
}
export default ExpenseItem;
