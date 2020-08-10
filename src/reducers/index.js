import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appReducer";

export default combineReducers({ App: appReducer });
