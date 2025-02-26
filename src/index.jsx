import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './components/App'
import { store, persistor } from './components/redux/store';



ReactDOM.render(
  
  
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


