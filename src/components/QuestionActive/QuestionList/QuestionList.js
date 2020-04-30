import React from "react";
import classes from './QuestionList.module.scss';
import QuestionItem from "./QuestionItem/QuestionItem";

const QuestionList = props => {
  return (
    <ul className={classes.LayoutActiveList}>
      <QuestionItem/>
    </ul>
  )
}

export default QuestionList;