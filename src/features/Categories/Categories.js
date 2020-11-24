import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Categories.css";
import { changeActive } from "../Main/redpostSlice";
import { fetchCats } from "./categoriesSlice";

import loading from "../../Ellipsis.svg";

export const Categories = () => {
  const dispatch = useDispatch();

  let active = useSelector((state) => state.redposts.active);
  const category = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCats());
    }
  }, [status, dispatch]);

  return (
    <div className="categories">
      <p>Subreddits</p>
      <div className="items animated menu">
        {(status === "succeeded" &&
          category.map((sub) => {
            return (
              <button
                key={sub.data.display_name_prefixed}
                className={
                  sub.data.display_name_prefixed === active ? "selected" : "non"
                }
                onClick={() => {
                  if (sub.data.display_name_prefixed !== active) {
                    dispatch(changeActive(sub.data.display_name_prefixed));
                  }
                }}
              >
                <img src={sub.data.icon_img} alt="" />
                <span>{sub.data.display_name_prefixed}</span>
              </button>
            );
          })) ||
          (status === "loading" && (
            <img src={loading} alt="loading" className="loading" />
          ))}
      </div>
    </div>
  );
};
