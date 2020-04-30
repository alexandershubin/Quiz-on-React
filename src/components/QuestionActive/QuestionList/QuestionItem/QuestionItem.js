import React from "react";
import classes from './QuestionItem.module.scss';

const QuestionItem = (props) => {
  return (
    <li className={classes.LayoutItem}>{props.answer.text}</li>
  )
}

export default QuestionItem;