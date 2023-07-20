import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Redux
import { Provider } from "react-redux";
import logger from "redux-logger";
import { put, takeLatest } from "@redux-saga/core/effects";
// Saga middleware
import createSagaMiddleware from "@redux-saga/core";

const giphyList = (state = [], action) => {
  switch (action.type) {
    case "SET_GIPHY":
      return action.payload;
    default:
      return state;
  }
};
// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('UPDATE_GIPHY',updateElementGiphy);
    
}


// UPDATE - Getting the image they select
function* updateElementGiphy(action){
    try {
        // Get the action and Id in 
        yield axios.put(`/api/favorite/${action.payload}`);
        // Get the Search GET
        yield put({ type: "SET_GIPHY" });
        // Catch any Errors
      }catch(err){
          console.log('ERRORS in updating Giphy:',err);
      }
}
const sagaMiddleware = createSagaMiddleware();
// Store
const store = createStore(
  combineReducers({
    giphyList,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
