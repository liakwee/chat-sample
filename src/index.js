import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ParentChat from './ParentChat';
import ChildChat from './ChildChat';
import './style.css';

render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ParentChat}/>
      <Route path='/chat' component={ChildChat}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
