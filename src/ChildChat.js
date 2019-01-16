import React, { Component } from 'react';
import Nick from 'nick-generator';
import MessageList from './components/MessageList';
import UserInput from './components/UserInput';

class ChildChat extends Component {
  constructor() {
    super();
    this.state = {
      chatdata: '',
      name: Nick(),
      userInput: ''
    };
  }

  componentDidMount = () => {
    window.parent.postMessage(
      { from: 'System', msg: `${this.state.name} joined`},
      '*'
    );
    window.addEventListener('message', e => {
      this.setState({
        chatdata: e.data
      });
    });
  };

  handleKey(value) {
    // console.log('value: ', value);
    this.setState({
      userInput: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(
    //   'this.state.userInput: ',
    //   this.state.name,
    //   this.state.userInput
    // );
    window.parent.postMessage(
      { from: this.state.name, msg: this.state.userInput },
      '*'
    );
  };

  render() {
    return (
      <div className="chat-window">
        <h1>Chat name: {this.state.name}</h1>
        <MessageList data={this.state.chatdata} />
        <UserInput
          handleSubmit={this.handleSubmit}
          handleKey={this.handleKey.bind(this)}
        />
      </div>
    );
  }
}

export default ChildChat;
