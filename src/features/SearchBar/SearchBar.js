import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SearchBar.css";
import logo from "../../logo.png";
import { searchPosts, fetchPosts } from "../Main/redpostSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleKeyUp = (e) => {
    if (value && e.key === "Enter") {
      const val = value.split(" ");
      dispatch(searchPosts(val.join("%20")));
      setValue("");
    }
  };

  const handleClick = (e) => {
    if (value) {
      const val = value.split(" ");
      dispatch(searchPosts(val.join("%20")));
      setValue("");
    }
  };

  let active = useSelector((state) => state.redposts.active);

  return (
    <header>
      <img
        title="logo"
        src={logo}
        alt="redmini"
        onClick={() => dispatch(fetchPosts(active))}
      />
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
    </header>
  );
};
