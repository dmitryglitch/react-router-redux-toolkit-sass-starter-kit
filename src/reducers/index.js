import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "./newsReducer";

export default combineReducers({ News: newsReducer });
