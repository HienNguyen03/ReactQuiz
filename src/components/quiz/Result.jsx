import React, {Component} from 'react';

class Result extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let {score, questions} = this.props;
    var percent = (score / questions.length * 100);

    if (percent >= 80) {
      var message = 'Awesome Job!';
    } else if (percent < 80 && percent >= 60) {
      var message = 'You did OK!';
    } else {
      var message = 'Not good';
    }
    return (
      <div className="well">
        <h4>You got {score} out of {questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Take again</a>
      </div>
    );
  }
}

export default Result;
