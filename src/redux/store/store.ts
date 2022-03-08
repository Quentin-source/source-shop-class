import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';

import rootReducer from '../root-reducer';

declare global {
    interface Window {
     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
 }

// const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(),
);

const store = createStore(rootReducer, enhancers);

export default store;
