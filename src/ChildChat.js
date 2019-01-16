import React, { Component } from 'react';
import Nick from 'nick-generator';
import MessageList from './components/MessageList';
import UserInput from './components/UserInput';

class ChildChat extends Component {
  constructor() {
    super();
    // Setting a default fancy name here
    this.state = {
      chatdata: null,
      name: Nick(),
      userInput: ''
    };
  }
  /*
    On component mount, it will post message to the parent window stating that it has join the chat.
    Here also setting up listener to listen to the message posting back from the parent window and set in the chatdata state
  */
  componentDidMount = () => {
    window.parent.postMessage(
      { from: 'System', msg: `${this.state.name} joined!`},
      '*'
    );
    window.addEventListener('message', e => {
      try {
        this.setState({
          chatdata: e.data
        })
      } catch (error) {
        console.log(error)
      }
    });
  };

  /* Storing userInput state when there is any keypress from the input */
  handleKey(value) {
    this.setState({
      userInput: value
    });
  }

  /*
    Posting the message to parent window then user submit the message
  */
  handleSubmit = e => {
    e.preventDefault();
    window.parent.postMessage(
      { from: this.state.name, msg: this.state.userInput },
      '*'
    );
  };

  render() {
    return (
      <div className="chat-window">
        <h1>Name: {this.state.name}</h1>
        <MessageList name={this.state.name} data={this.state.chatdata} />
        <UserInput
          handleSubmit={this.handleSubmit}
          handleKey={this.handleKey.bind(this)}
        />
      </div>
    );
  }
}

export default ChildChat;
