import React from "react";
import classes from './QuestionList.module.scss';
import QuestionItem from "./QuestionItem/QuestionItem";

const QuestionList = props => {
  return (
    <ul className={classes.LayoutActiveList}>
        {props.answers.map((answer, index) => {
          return (
            <QuestionItem
              key={index}
              answer={answer}/>
          )
        })}
    </ul>
  )
}

export default QuestionList;