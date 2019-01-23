import React, { Component } from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  constructor(){
    super();
    this.state = {
      formTitle: "Title",
      formDesc: 'Form Description',
      question: [],
      // question: [{ question: 'question', questionDescription: 'qdesc'}]

    }
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
  }

  handleTitleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
 
    })
  }

  newQuestion = (e) => {

    e.preventDefault();
    console.log('hit');
    const addQuestion = {
      question: this.state.question,
      questionDescription: this.state.questionDescription
    };
    const newQuestion = Array.from(this.state.question);
    newQuestion.push(addQuestion);
    this.setState({
      question: newQuestion
    })

  }

  // handleDescChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  render() {
    return (
      <div className="wrapper">
        <div className="left">
          <form action="" className="formCard" onChange={this.handleFormSubmit}>
            <input type="text" onChange={this.handleTitleChange} name="formTitle" placeholder="Title" className="inputTitle"/>
            <input type="text" onChange={this.handleTitleChange} name="formDesc" placeholder="Form Description" className="inputFormDesc"/>
         
            <div className="question">
              {this.state.question.map(q => {
                return <Question />
              })}
            </div>
            {/* <Question /> */}
          </form>

          <button onClick={this.newQuestion}>Add Question</button>
        </div>

        <div className="right">
          <h3 className="title">{this.state.formTitle}</h3>
          <p className="formDesc">{this.state.formDesc}</p>
        </div>
        
      </div>
    );
  }
}

export default App;
