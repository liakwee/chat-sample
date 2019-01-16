import React, { Component } from 'react';
import uuid from 'uuid/v4';
import IFrameWindow from './IFrameWindow';

let chatRef = [];

class ParentChat extends Component {
  constructor() {
    super();
    /* 
      Setting the initial states of parent chat.
      Default always setting up 2 chat window
    */
    this.state = {
      message: [],
      chatID: [uuid(), uuid()]
    };
  }

  /* 
    When component mount, adding event listener to listen to the message post from the different iframe.
    When there is new message receive from any iframe, it will concat all messages and post it back to every chat window to sync up the content
  */
  componentDidMount = () => {
    window.addEventListener('message', e => {
      if (e.data.msg) {
        this.setState({
          message: [...this.state.message, {
            from: e.data.from,
            msg: e.data.msg
          }]
        }, () => {
          chatRef.map(iframe => {
            iframe.contentWindow.postMessage(this.state.message);
          })
        });
      }
    });
  };

  setRef = ref => {
    // console.log('>>>>', ref);
    chatRef.push(ref);
  };

  /* This is to add new chat window and create a new UUID for it */
  addChat = () => {
    this.setState({
      chatID: [...this.state.chatID, uuid()]
    })
  }

  render() {
    // console.log('MESSAGE', this.state.message)
    return (
      <div>
        <h1>Parent Chat</h1>
        <button onClick={this.addChat}>Add</button>
        <div className="chatlist">
          {
            this.state.chatID.map(id => 
              <IFrameWindow
                key={id}
                uuid={id}
                setRef={this.setRef}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default ParentChat;
