import React, {Component} from 'react';
import Question from './Question.jsx';

class QuestionList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let {questions, current} = this.props;

    return (
      <div className="questions">
        {questions.map((question) => {
          if (question.id == current) {
              return (<Question question={question} key={question.id} {...this.props}/>);
          }        
        })}
      </div>
    );
  }
}

export default QuestionList;
