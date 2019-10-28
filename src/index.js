import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState } from './localStorage';

const store = createStore(rootReducer, loadState(), composeWithDevTools());

store.subscribe(() => {
  saveState({
    user: store.getState().user
  })
  console.log(store.getState().user)
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
