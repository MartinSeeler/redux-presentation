import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(createLogger()))
  );

  return store;
}
