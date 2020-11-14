import "./SearchBar.css";
import logo from "../logo.png";

export const SearchBar = () => {
  return (
    <div className="bar">
      <img title="logo" src={logo} alt="redmini" />
      <div>
        <input type="text" id="search" />
        <label htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </div>
    </div>
  );
};
