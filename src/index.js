import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import './reset.css'
import loginReducer from './reducers/loginReducer'
import activeTabReducer from './reducers/activeTabReducer'
import userReducer from './reducers/userRedurcer'
import photosReducer from './reducers/photosReducer'
import fullImageReducer from './reducers/fullImageReducer'

const reducer = combineReducers(
  {
  displayLogin: loginReducer,
  activeTab: activeTabReducer,
  user: userReducer,
  photos: photosReducer,
  fullImage: fullImageReducer
}
)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

