import React, {Component} from "react";
import classes from './Question.module.scss';
import QuestionActive from "../../components/QuestionActive/QuestionActive";

class Question extends Component {
  state = {
    questions: [
      {
        answers: [
          {text: 'Миллион', id: 1},
          {text: 'Миллиард', id: 2},
          {text: 'Бесконечность', id: 3},
          {text: 'Тысячи', id: 4}
        ]
      }
    ]
  }

  render() {
    return (
      <div className={classes.Question}>
        <div className={classes.QuestionWrapper}>
          <h1>Пройдите тест</h1>
          <QuestionActive/>
        </div>
      </div>
    )
  }
}

export default Question;