import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Home from './components/Home';


import todosReducer from './store/reducers/todos';

const rootReducer = combineReducers({
  todos: todosReducer
});

const store = createStore(rootReducer);

function App () {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
    
  );
}

export default App;
