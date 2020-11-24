import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./SearchBar.css";
import logo from "../../logo.png";
import { searchPosts } from "../Main/redpostSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleKeyUp = e => {
    if (value && e.key === "Enter") {
      const val = value.split(" ");
      dispatch(searchPosts(val.join("%20")));
      setValue("");
    }
  }

  const handleClick = (e) => {
    if (value) {
      const val = value.split(" ");
      dispatch(searchPosts(val.join("%20")));
      setValue("");
    }
  };

  return (
    <div className="bar">
      <img title="logo" src={logo} alt="redmini" />
      <div className="search-bar">
        <input
          type="text"
          id="search"
          placeholder="Search..."
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={value}
        />
        <button onClick={handleClick}>
          <label htmlFor="search">
            <i className="material-icons">search</i>
          </label>
        </button>
      </div>
    </div>
  );
};
