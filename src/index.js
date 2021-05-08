import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import HomeScreen from "./screens/HomeScreen";
import "react-placeholder/lib/reactPlaceholder.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HomeScreen />
  </Provider>,
  document.getElementById("root")
);
