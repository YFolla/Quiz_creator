import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App /> 
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
