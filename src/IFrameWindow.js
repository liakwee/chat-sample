import React from 'react';

/*
  This is a react dumb component.
  It reduce the over head of extending React component.

  uuid & setRef are props passing in from the parent component
*/

const IFrameWindow = ({ uuid, setRef }) => {
  return (
    <iframe key={uuid} src={`./chat`} width="500" height="400" ref={setRef} />
  );
};

export default IFrameWindow;
