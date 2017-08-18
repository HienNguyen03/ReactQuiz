import React, {Component} from 'react';

class ScoreBox extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let {questions, current, score} = this.props;

    return (
      <div className="well">
          Question {current} out of {questions.length}
          <span className="pull-right"><strong>Score: {score}</strong></span>
      </div>
    );
  }
}

export default ScoreBox;
