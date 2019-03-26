import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppRegistry } from 'react-native'

// register the app
AppRegistry.registerComponent("App", () => App)

// run the app
AppRegistry.runApplication("App", {
    initialProps: {},
    rootTag:  document.getElementById("root")
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
