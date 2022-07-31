import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
  thunk,
];

const store = configureStore({
    reducer: reducer
  },
  composeWithDevTools(
    applyMiddleware(...middleware),)
);

export default store;