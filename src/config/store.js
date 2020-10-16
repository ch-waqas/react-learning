import { AsyncStorage } from "react-native";

import {createStore, applyMiddleware} from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import reducers from "../reducers"

//Reducer to persist and non persist data
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist: ["authReducer"]
  }

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, {},applyMiddleware());
  let persistor = persistStore(store)
  return { store, persistor }
}

//store stores data locally but we can save full stoe or specify a redux to be stored separately
