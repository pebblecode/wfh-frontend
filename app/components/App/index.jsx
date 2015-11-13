/* @flow */

import './_App.scss';

import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import Status from '../Status';
// import UserStore from '../../stores/UserStore';
import {getLatestStatuses} from '../../actions';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getLatestStatuses());
  }

  // RENDER
  _renderStatuses() {

    return this.props.users.map((status, i) => {
      return <Status {...status} key={i} />;
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


