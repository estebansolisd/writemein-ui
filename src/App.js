import React from "react";
import { Provider } from "react-redux";

// Local
import Router from "./containers/router";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
