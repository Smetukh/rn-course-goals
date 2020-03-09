import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import Home from './screens/Home';
import { helloSaga } from './sagas'

import todosReducer from './store/reducers/todos';
// Imports: Redux Store
import configureStore from './store/store';

const store = configureStore();

function App () {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
    
  );
}

export default App;
