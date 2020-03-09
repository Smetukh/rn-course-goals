import React from 'react';
import { Provider } from 'react-redux';
import Home from './screens/Home';

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
