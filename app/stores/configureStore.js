import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
