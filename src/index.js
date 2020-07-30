import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterVideo from './pages/register/Video'
import RegisterCategory from './pages/register/Category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={RegisterVideo} exact />
      <Route path="/cadastro/categoria" component={RegisterCategory} exact />
      <Route component={() => (<div>404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
