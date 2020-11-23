import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Categories.css";
import { changeActive } from "../Main/redpostSlice";

export const Categories = () => {
  const dispatch = useDispatch();

  let active = useSelector((state) => state.redposts.active);

  return (
    <div className="categories">
      <p>Subreddits</p>
      <div className="items animated menu">
        {subreddits.map((sub) => {
          return (
            <button
              key={sub}
              className={sub === active ? "selected" : "non"}
              onClick={() => {
                dispatch(changeActive(sub));
              }}
            >
              {sub}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const subreddits = [
  "r/gaming",
  "r/LifeProTips",
  "r/pics",
  "r/scifi",
  "r/sports",
  "r/Music",
  "r/software",
  "r/buildapc",
  "r/coolguides",
  "r/todayilearned",
  "r/MadeMeSmile",
  "r/AskReddit",
];
