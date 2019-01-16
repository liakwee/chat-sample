import React, { Component } from 'react';

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    const { data } = this.props;
    console.log('data: ', data);
    return (
      <div className="message-list" ref={el => this.scrollList = el}>
        {
          data ? 
          data.map((list, i) => {
            console.log('>>>>>', list)
            return(
              <div key={`key-${i}`}>
              [{list.from}] - {list.msg}
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