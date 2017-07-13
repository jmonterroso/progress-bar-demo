import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import NotFound from 'views/NotFound';
const publicPath = '/';
const accountPath = '/account';

export const routeCodes = {
  DASHBOARD: publicPath
};


export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='Page'>
            <Switch>
              <Route exact path={ publicPath } component={ Dashboard } />
              <Route exact path={ accountPath } component={ Dashboard } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
