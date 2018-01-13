import React, { Component } from 'react';

class AskAndAnswerApp extends Component {
  constructor(props) {
    super(props);

    this.state = { answer: 'Please ask a question!', imgurl: '' };

    this.fetchAnswer = this.fetchAnswer.bind(this);
  }

  handleInput(e) {
    if (e.target.value.indexOf('?') === -1) {
      this.setState({ answer: 'Questions ends with a questionmark ;)', imgurl: '' });
      return;
    }
    this.setState({ answer: 'Thinking...', imgurl: '' });
    this.fetchAnswer();
  }
  fetchAnswer() {
    fetch('https://yesno.wtf/api')
      .then(answer => {
        if (answer.status === 200) {
          return answer.json();
        }
        this.setState({ answer: 'Ops something went wrong!', imgurl: '' });
      })
      .then(res => {
        console.log(res);
        this.setState({ answer: res.answer, imgurl: res.image });
      });
  }

  render() {
    const imageContent = this.state.imgurl ? <img src={this.state.imgurl} alt="The answer as gif" /> : null;
    return (
      <div>
        Ask away:
        <input onChange={input => this.handleInput(input)} />
        <div>{this.state.answer}</div>
        {imageContent}
      </div>
    );
  }
}

export default AskAndAnswerApp;
