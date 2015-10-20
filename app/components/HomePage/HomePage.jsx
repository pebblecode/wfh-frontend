/* @flow */

import React from 'react';
import Status from '../Status/Status.jsx';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      statuses: []
    };
    this.changeListener = this.changeListener.bind(this);
  }

  // METHODS

  changeListener() {
    this.setState({
      statuses: UserStore.getData()
    });
  }

  // LIFECYCLE

  componentWillMount() {
    UserStore.addChangeListener(this.changeListener);
  }

  componentDidMount() {
    UserActions.getLatestStatuses();
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this.changeListener);
  }

  // RENDER

  _renderStatuses() {
    return this.state.statuses.map((status, i) => {
      return <Status {...status} key={i} />;
    });
  }

  render() {
    return (
      <div className='page__home'>
        <ul className='grid'>
          {this._renderStatuses()}
        </ul>
      </div>
    );
  }
}
