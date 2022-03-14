import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
