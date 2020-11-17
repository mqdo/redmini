import React, { useState, useEffect } from "react";

import "./App.css";
import { SearchBar } from "./features/SearchBar/SearchBar";
import { Main } from "./features/Main/Main";

import { formatTime } from "./formatTime";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  const [time, setTime] = useState("just now");

  const fet = async () => {
    try {
      const response = await fetch(
        "https://www.reddit.com/r/Genshin_Impact.json"
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const timeDiff = formatTime(
        jsonResponse.data.children[0].data.created_utc
      );
      console.log(timeDiff);
      setTime(timeDiff);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fet();
  }, []);

  return (
    <Provider store={store}>
      <SearchBar />
      <Main />
      <div className="footer">
        <p>
          Redmini by <a href="https://github.com/mqdo">mquan</a> {time}.
        </p>
      </div>
    </Provider>
  );
}

export default App;
