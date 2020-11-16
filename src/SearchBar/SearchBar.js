import "./SearchBar.css";
import logo from "../logo.png";

export const SearchBar = () => {
  return (
    <div className="bar">
      <img title="logo" src={logo} alt="redmini" />
      <div className="search-bar">
        <input type="text" id="search" placeholder="     Search..." />
        <label htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </div>
    </div>
  );
};
