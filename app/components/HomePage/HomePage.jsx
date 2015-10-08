/* @flow */

import React from 'react';
import Status from '../Status/Status.jsx';
import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      statuses: [],
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
    UserStore.addChangeListener(this.changeListener)
    setInterval(() => {
      UserActions.getLatestStatuses('test');
    }, 30000);
  }

  componentWillUnmount() {
      UserStore.removeChangeListener(this.changeListener);
  }

  // RENDER

  _renderStatuses() {
    return this.state.statuses.map((status) => {
      console.log(status);
      return <Status {...status} />
    });
  }

  render() {
    return (
      <div className={'page__home'}>
        <ul className='grid'>
          {this._renderStatuses()}
        </ul>
      </div>
    );
  }
}

export default HomePage;
