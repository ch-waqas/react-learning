import React from 'react';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import Main from "./src/Main";
import persist from "./src/config/store";
const persistStore = persist();
export default class App extends React.Component{
render(){
  return(
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
      
         <Main/>
         </PersistGate>
    </Provider>
 );
  }
    }