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
      <footer>
        <p>
          Redmini by{" "}
          <a href="https://github.com/mqdo" target="_blank" rel="noreferrer">
            mquan
          </a>
          .
        </p>
      </footer>
    </Provider>
  );
}

export default App;
