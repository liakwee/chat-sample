import React, { Component } from 'react';

class IFrameWindow extends Component {
  render() {
    const uuid = this.props.uuid
    console.log('uuid: ', uuid);
    return(
      <iframe key={uuid} src={`./chat?id=${uuid}`} width="500" height="400" ref={this.props.setRef} />
    )
  }
}

export default IFrameWindow;