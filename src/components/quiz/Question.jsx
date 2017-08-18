import React, {Component} from 'react';

class Question extends Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    e.preventDefault();
    const {setScore, setCurrent, question, score, current} = this.props;
    const selected = e.target.value;

    if (selected == question.correct) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  }

  render () {
    const {question} = this.props;

    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr></hr>

        <ul className="list-group">
           {question.choices.map((choice) => {
             return (
               <li className="list-group-item" key={choice.id}>
                 <input type="radio" name={question} value={choice.id} onChange={this.onChange}/> {choice.id}. {choice.text}
               </li>
             );
           })}
        </ul>
      </div>
    );
  }
}

export default Question;
