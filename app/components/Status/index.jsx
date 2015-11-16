/* @flow */

import React from 'react';
import gravatar from 'gravatar';

export default (props) => {
  let imgUrl = gravatar.url(props.email, { s: '400', r: 'pg', d: 'retro'}, true);
  const cacheBuster = Date.now();
  imgUrl += `&v=${cacheBuster}`;
  return (
    <li className={'item ' + props.status.statusType }>
      <img className={'mugshot'} src={imgUrl}/>
      <div className={'meta'}>
			<span className={'name'}>{props.name}</span>
        <span className={'status'}>{props.status.statusType}</span>
      </div>
    </li>
  );
};
