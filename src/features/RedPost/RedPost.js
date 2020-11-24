import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./RedPost.css";
import { fetchPosts } from "../Main/redpostSlice";

import { formatTime, formatNum } from "../../formatIndex";

import loading from "../../Ellipsis.svg";
import fail from "../../fail.png";

export const RedPost = () => {
  const dispatch = useDispatch();

  let active = useSelector((state) => state.redposts.active);
  let status = useSelector((state) => state.redposts.status);
  let posts = useSelector((state) => state.redposts.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts(active));
    }
    window.scrollTo(0, 0);
  }, [active, status, dispatch]);

  return (
    <div className="container">
      {(active === "" && (
        <div className="failed">
          <img src={fail} alt="" />
          <h2>Opps! There is no post...</h2>
        </div>
      )) ||
        (status === "succeeded" &&
          posts.map((post) => {
            return (
              <div className="posts" key={posts.indexOf(post)}>
                <div className="votes">
                  <button className="arrow-up">
                    <i className="material-icons">expand_less</i>
                  </button>
                  <p>{formatNum(parseInt(post.data.ups))}</p>
                  <button className="arrow-down">
                    <i className="material-icons">expand_more</i>
                  </button>
                </div>
                <div className="status posted">
                  <p>Posted by r/{post.data.author}</p>
                </div>
                <div className="status time">
                  <p>{formatTime(post.data.created_utc)}</p>
                </div>
                <div className="comment">
                  <button className="cmt">
                    <i className="material-icons">comment</i>
                  </button>
                </div>
                <div className="article">
                  <h2>{post.data.title}</h2>
                  {(post.data.url.search("jpg") > 0 ||
                    post.data.url.search("png") > 0) && (
                    <img src={post.data.url} alt={post.data.title} />
                  )}
                </div>
              </div>
            );
          })) ||
        (status === "loading" && (
          <div className="loading">
            <img src={loading} alt="" />
            <h2>We're bringing posts to you!</h2>
          </div>
        )) ||
        (status === "failed" && (
          <div className="failed">
            <img src={fail} alt="" />
            <h2>Opps! Something went wrong...</h2>
          </div>
        ))}
    </div>
  );
};
