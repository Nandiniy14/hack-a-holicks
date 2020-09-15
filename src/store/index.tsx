import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { history } from '../browser-history';
import createRootReducer from './rootReducer';
import { saga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware)

export const store = createStore(
    createRootReducer(history), // root reducer with router state
    {},
    compose(middleware),
);

sagaMiddleware.run(saga);

