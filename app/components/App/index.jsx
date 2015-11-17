/* @flow */

import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import Status from '../Status';

import {fetchStatusesOnInterval} from '../../actions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchStatusesOnInterval);
  }

  // RENDER
  _renderStatuses() {

    return this.props.users.map((status) => {
      return <Status {...status} key={status.email} />;
    });
  }

  render() {
    return (
      <div className={'page__home'}>
        <ul className={'grid'}>
          {this._renderStatuses()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const {users, isFetching} = state;

  return {
    users,
    isFetching
  };
}

export default connect(mapStateToProps)(App);


