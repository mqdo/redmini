import React from "react";
import { useDispatch } from "react-redux";

import "./Categories.css";
import { changeActivate } from "./categorySlice";

export const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <p>Subreddits</p>
      <div className="items animated menu">
        {subreddits.map((sub) => {
          return (
            <button
              key={subreddits.indexOf(sub)}
              onClick={() => dispatch(changeActivate({ sub }))}
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
