import React, { Component } from 'react';
import uuid from 'uuid/v4';
import IFrameWindow from './IFrameWindow';

let chatRef = [];

class ParentChat extends Component {
  constructor() {
    super();
    this.state = {
      message: [],
      chatID: [uuid(), uuid()]
    };
  }


  componentDidMount = () => {
    window.addEventListener('message', e => {
      if (e.data.msg) {
        console.log('e.data: ', e.data);
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
    console.log('>>>>', ref);
    chatRef.push(ref);
  };

  addChat = () => {
    this.setState({
      chatID: [...this.state.chatID, uuid()]
    })
  }

  render() {
    console.log('MESSAGE', this.state.message)
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
