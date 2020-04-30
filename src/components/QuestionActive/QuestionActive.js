import React from "react";
import classes from './ActiveQuestion.module.scss';
import QuestionList from "./QuestionList/QuestionList";

const QuestionActive = (props) => {
  return (
    <div className={classes.Question}>
      <p className={classes.Quiz}>
        <span>
          <strong>1. </strong>
          Сколько звезд на небе
        </span>
        
        <small>1/4</small>
      </p>
      <QuestionList answers={props.answers}/>
    </div>
  )
}

export default QuestionActive;