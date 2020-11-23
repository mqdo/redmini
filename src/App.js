import React from "react";

import "./App.css";
import { SearchBar } from "./features/SearchBar/SearchBar";
import { Main } from "./features/Main/Main";

import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <SearchBar />
      <Main />
      <div className="footer">
        <p>
          Redmini by <a href="https://github.com/mqdo">mquan</a>.
        </p>
      </div>
    </Provider>
  );
}

export default App;
