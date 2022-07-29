import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";

const store = configureStore({
    reducer: reducer
  },
  applyMiddleware(thunk)
);

export default store;