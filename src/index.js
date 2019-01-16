import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ParentChat from './ParentChat';
import ChildChat from './ChildChat';
import './style.css';

render((
  <BrowserRouter>
    <Switch>
      {
        /* this is react router checking which URL route to mount the different components
           default, it will mount the ParentChat component and when is http://localhost:3000/chat, it will mount the ChildChat.
           This is used for the iframe src
        */
      }
      <Route exact path='/' component={ParentChat}/>
      <Route path='/chat' component={ChildChat}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
