import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import todosReducer from './reducers/todos';
import rootSaga from '../sagas';

// Middleware: Redux Saga
const rootReducer = combineReducers({
    todos: todosReducer
  });

// Redux: Store
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    store.dispatch({type: 'SET_GOAL1'})
    return store;
};

export default configureStore;