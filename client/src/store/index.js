import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga/index";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers)
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);