import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { IAppDispatch } from './core/mainReducer';
import { configureStore } from './core/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

export const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
export const { store, persistor } = configureStore();
export const dispatch: IAppDispatch = store.dispatch;

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
