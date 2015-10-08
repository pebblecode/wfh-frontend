/* @flow */

import React from 'react';

import './_Status.scss';

export default (props) => {
  return (
    <li className={'item ' + props.status.statusType }>
      <h1> {props.name} </h1>
      <p> {props.status.statusType} </p>
    </li>
  );
};
