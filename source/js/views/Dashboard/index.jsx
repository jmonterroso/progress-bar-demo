import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction, testAsync } from 'actions/app';
import Progress from 'components/Progress/Progress';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
  }

  render() {

    return (
      <div className='container'>
        <div className='widget-progress'>
          <h4 className='widget-progress-title'>Your Progress</h4>
          <div className='vertical-center'>
            <Progress
              completed={ 56 } target={ 125 }
              color='linear-gradient(to bottom, #6bc061 0%,#60ac58 100%)'
              animation={ 1000 } symbol='$'
            /></div>
        </div>
      </div>
    );
  }
}
