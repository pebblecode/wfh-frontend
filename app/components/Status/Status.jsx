/* @flow */

import React from 'react';

import './_Status.scss';

const Status = React.createClass({
  render() {
      console.log('render');
    return (
      <li className={'item ' + this.props.status.statusType }>
        {this.props}
      </li>
    );
  }
})

export default Status;
