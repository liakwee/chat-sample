import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      userInput: ''
    };
  }

  handleKey(evt) {
    this.setState({
      userInput: evt.target.value
    });
    this.props.handleKey(evt.target.value);
  }

  handleSubmit = evt => {
    this.props.handleSubmit(evt);
    this.setState({
      userInput: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="msg-input"
          type="text"
          id="message"
          name="message"
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          value={this.state.userInput}
          required
          ref={e => {
            this.userInput = e;
          }}
          onChange={this.handleKey.bind(this)}
        />
        <button className="msg-send">Send</button>
      </form>
    );
  }
}

export default UserInput;
