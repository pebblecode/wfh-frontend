/* @flow */

import './_App.scss';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    );
  }
};

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default App;
