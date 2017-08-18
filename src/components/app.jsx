import React, {Component} from 'react';

import QuestionList from './quiz/QuestionList.jsx';
import Result from './quiz/Result.jsx';
import ScoreBox from './quiz/ScoreBox.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'Javascript is _________ language.',
          choices: [
            {
              id: 'a',
              text: 'Scripting'
            },
            {
              id: 'b',
              text: 'Language'
            },
            {
              id: 'c',
              text: 'Programming'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: 'JavaScript is designed for following purpose -',
          choices: [
            {
              id: 'a',
              text: 'To Style HTML Pages'
            },
            {
              id: 'b',
              text: 'To add interactivity to HTML Pages'
            },
            {
              id: 'c',
              text: 'To Execute Query Related to DB on Server'
            }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'JavaScript is an ________ language.',
          choices: [
            {
              id: 'a',
              text: 'compiled'
            },
            {
              id: 'b',
              text: 'interpreted'
            }
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: 'Why JavaScript is called as Lightweight Programming Language ?',
          choices: [
            {
              id: 'a',
              text: 'because JS is client side scripting'
            },
            {
              id: 'b',
              text: 'because we can add programming functionality inside JS'
            },
            {
              id: 'c',
              text: 'because JS can provide programming functionality inside but up to certain extend.'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    };

    this.setScore = this.setScore.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
  }

  setScore (score) {
    this.setState({score});
  }

  setCurrent (current) {
    this.setState({current});
  }

  render () {
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var result = <Result {...this.state}/>
    } else {
      var scorebox = <ScoreBox {...this.state}/>;
      var result = '';
    }
    return (
      <div>
        {scorebox}
        <QuestionList {...this.state} setScore={this.setScore} setCurrent={this.setCurrent}/>
        {result}
      </div>
    );
  }
}

export default App;
