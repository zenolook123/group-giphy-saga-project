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
    case "SET_GIPHYLIST":
      return action.payload;
    default:
      return state;
  }
};

const favoriteList = (state = [], action) => {
    switch (action.type) {
        // Case to handle adding a single GIF to the favorites list
        case "ADD_FAVORITE":
            return [...state, action.payload];
        // Case to handle setting the entire favorite list fetched from the API
        case "SET_FAVORITES":
            return [action.payload];
        default:
            return state;
    }
};

// Create the rootSaga generator function
function* rootSaga() {
    yield takeLatest('FETCH_GIFS', fetchGifs);

    yield takeLatest('ADD_FAVORITE', addFavorite);

    yield takeLatest("FETCH_FAVORITES", fetchFavorites);
}

function* addFavorite(action) {
    try {
        yield axios.post("/api/favorite", action.payload);
        yield put ({ type: "FETCH_FAVORITES" });
    } catch (error) {
        console.log("Error with POSTing new favorite gif: ", error);
    }
}

function* fetchFavorites(action) {
    console.log("Fetch favorites was dispatched with the action: ", action)
    try {
        // Make API call to get the list of favorites
        const favoriteResponse = yield axios.get("/api/favorite");
        console.log("Favorite GIF data: ", favoriteResponse.data);
        // Dispatch an action to set the fetched favorites in the store
        yield put({ type: "SET_FAVORITES", payload: favoriteResponse.data});
    } catch (error) {
        console.log("Error fetching favorites: ", error);
    }
}

// Fetch gifs from search DB
function* fetchGifs(action) {
    try {
      const fetchresponse = yield axios.get('/api/category')
      // put = dispatch
      yield put ({ type: 'SET_GIPHYLIST', payload: fetchresponse.data })
    } catch (error) {
      console.log('Error fetching gifs')
    }
  }

// UPDATE - 

const sagaMiddleware = createSagaMiddleware();

// Store
const store = createStore(
  combineReducers({
    giphyList,
    favoriteList
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
