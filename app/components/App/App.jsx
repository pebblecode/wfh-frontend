/* @flow */

import './_App.scss';

import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
