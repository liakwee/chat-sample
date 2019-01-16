import React, { Component } from 'react';

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    /* 
      Forcing the message list to always scroll to the bottom so that user can see the latest message.
      Default behavious is always scroll top
    */
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    const { data } = this.props;
    return (
      <div className="message-list" ref={el => this.scrollList = el}>
        {
          data ? 
          data.map((list, i) => {
            return(
              <div className="clearfix" key={`key-${i}`}>
              <span className={list.from === this.props.name ? 'self' : ''}><strong>[{list.from}]</strong> - {list.msg}</span>
              </div>
            )
          })
          :
          null
        }
      </div>)
  }
}

export default MessageList