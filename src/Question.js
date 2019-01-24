import React from 'react';

export default class Question extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      answerTitle: "",
      answerDesc: "",
      answer: [],
      answerOption: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  

  handleFormSubmit = (e) => {
    e.preventDefault();
    const addAnswer = {
      value: this.state.answerOption,
    };
    const newAddAnswer = Array.from(this.state.answer);
    newAddAnswer.push(addAnswer);

    this.setState({
      answer: newAddAnswer,
      answerOption: ""
    })
  }

  handleTitleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  removeAnswer = (item, index) => {
    const newAnswerOption = this.state.answer.filter(answerOption => {
      return answerOption.value !== item;
    })

    this.setState({
      answer: [...newAnswerOption]
    })
  }

  render(){
    return(
      <div>
        <div className="questionCard">
          <form onSubmit={this.handleFormSubmit}>
            <input type="text" placeholder="question" onChange={this.handleTitleChange} name="answerTitle"/>
            <input type="text" placeholder="question" onChange={this.handleTitleChange} name="answerDesc"/>
            <input type="text" placeholder="question description" onChange={this.handleTitleChange} name="answerOption" value={this.state.answerOption}/>
            <input type="submit" value="Add Option"/>

            
            {/* <Answers titleChange={this.props.answerTitle}  /> */}
         </form>
            {this.state.answer.map((a, index) => {
              return <ul>
                <li key={index}>{a.value}</li>
                <button onClick={(e) => this.removeAnswer(a.value)}></button>
              </ul>
            })}
        </div>
  

          <div>
            <h3>{this.state.answerTitle}</h3>
            <p>{this.state.answerDesc}</p>
            {this.state.answer.map((a, index) => {
              return <ul>
                <li key={index}>{a.value}</li>
              </ul>
            })}

          </div>
      </div>
    )
  }
}