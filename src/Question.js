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
    e.preventDefault();
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
      <div className="wrapper2">
        <div className="questionCard">
          <form className="questionHeader" autoComplete="off" >
            <input type="text" placeholder="Question" onChange={this.handleTitleChange} name="answerTitle"/>
            <input type="text" placeholder="Question Description" onChange={this.handleTitleChange} name="answerDesc"/>
          </form>
            {this.state.answer.map((a, index) => {
              return <div className="optionList">
                       <ul key={index} className="option">
                         <li key={index}>{a.value}</li>
                          <button onClick={(e) => this.removeAnswer(a.value)}>
                            <i className="fas fa-trash"></i>
                          </button>
                       </ul>
                     </div>
            })}
          <form className="addOption" autoComplete="off" onSubmit={this.handleFormSubmit}>
            <input type="text" placeholder="Add Option" onChange={this.handleTitleChange} name="answerOption" value={this.state.answerOption} />
          </form>
          <div className="addRemove"> 
            <button type="submit" className="add" onClick={this.handleFormSubmit}>ADD OPTION</button>
            <button type="submit" className="delete" onClick={() => this.props.remove(this.props.i)} >DELETE QUESTION</button>
          </div>
        </div>
  
        <div className="answerDisplay">
          <h4>{this.state.answerTitle}</h4>
          <p>{this.state.answerDesc}</p>
          {this.state.answer.map((a, index) => {
            return <ul>
              <li key={index}><i className="far fa-square"></i>{a.value}</li>
            </ul>
          })}
        </div>
      </div>
    )
  }
}