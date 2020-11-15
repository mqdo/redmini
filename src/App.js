import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { Main } from "./Main/Main";

function App() {
  return (
    <div>
      <SearchBar />
      <Main />
      <div className="footer">
        <p>Redmini by <a href="https://github.com/mqdo">mquan</a>.</p>
      </div>
    </div>
  );
}

export default App;
