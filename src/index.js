import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.min.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
