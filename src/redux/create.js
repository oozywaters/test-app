import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from './modules/reducer';

export default function createStore(history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [
    reduxRouterMiddleware,
  ];
  return _createStore(
    reducer,
    applyMiddleware(...middleware),
  );
}
