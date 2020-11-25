import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./RedPost.css";
import { fetchPosts, fetchComments, changeActive } from "../Main/redpostSlice";

import { formatTime, formatNum } from "../../formatIndex";
import { scrollToTop } from "../../scrollToTop";

import loading from "../../Ellipsis.svg";
import fail from "../../fail.png";

export const RedPost = () => {
  const dispatch = useDispatch();

  let active = useSelector((state) => state.redposts.active);
  let status = useSelector((state) => state.redposts.status);
  let posts = useSelector((state) => state.redposts.posts);
  let comments = useSelector((state) => state.redposts.comments);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts(active));
    }
    scrollToTop();
  }, [active, status, dispatch]);

  return (
    <div className="container">
      {(status === "succeeded" &&
        posts.length === 0 &&
        comments.length === 0 && (
          <div className="failed">
            <img src={fail} alt="" />
            <h2>Opps! There is no post... :'( </h2>
          </div>
        )) ||
        (comments.length > 0 && status === "succeeded" && (
          <div className="posts" key={comments[0].data.children[0].data.title}>
            <div className="votes">
              <button className="arrow up">
                <i className="material-icons">expand_less</i>
              </button>
              <p>
                {comments[0].data.children[0].data.ups === 0
                  ? formatNum(-parseInt(comments[0].data.children[0].data.downs))
                  : formatNum(parseInt(comments[0].data.children[0].data.ups))}
              </p>
              <button className="arrow down">
                <i className="material-icons">expand_more</i>
              </button>
            </div>
            <div className="status posted">
              <p>
                Posted by{" "}
                <span className="author">
                  r/{comments[0].data.children[0].data.author}
                </span>
              </p>
            </div>
            <div className="status time">
              <p>{formatTime(comments[0].data.children[0].data.created_utc)}</p>
            </div>
            <div className="article">
              <h2>{comments[0].data.children[0].data.title}</h2>
              {(comments[0].data.children[0].data.url.search("jpg") > 0 ||
                comments[0].data.children[0].data.url.search("png") > 0) && (
                <img
                  src={comments[0].data.children[0].data.url}
                  alt={comments[0].data.children[0].data.title}
                />
              )}
              {comments[1].data.children.length === 0 ? (
                <div className="article">
                  <em>Opps. Seems like there is no comment!</em>
                </div>
              ) : (
                comments[1].data.children.map((comment, i) => {
                  if (comments[1].data.children.length !== i + 1)
                    return (
                      <div className="comments posts" key={comment.data.body}>
                        <div className="votes">
                          <button className="arrow up">
                            <i className="material-icons">expand_less</i>
                          </button>
                          <p>{formatNum(parseInt(comment.data.ups))}</p>
                          <button className="arrow down">
                            <i className="material-icons">expand_more</i>
                          </button>
                        </div>
                        <div className="status posted">
                          <p>
                            Posted by{" "}
                            <span className="author">
                              r/{comment.data.author}
                            </span>
                          </p>
                        </div>
                        <div className="status time">
                          <p>{formatTime(comment.data.created_utc)}</p>
                        </div>
                        <div className="article">
                          <h2>{comment.data.body}</h2>
                        </div>
                      </div>
                    );
                })
              )}
            </div>
          </div>
        )) ||
        (posts.length > 0 &&
          status === "succeeded" &&
          posts.map((post) => {
            return (
              <div className="posts" key={posts.indexOf(post)}>
                <div className="votes">
                  <button className="arrow up">
                    <i className="material-icons">expand_less</i>
                  </button>
                  <p>{formatNum(parseInt(post.data.ups))}</p>
                  <button className="arrow down">
                    <i className="material-icons">expand_more</i>
                  </button>
                </div>
                <div className="status posted">
                  <p>
                    Posted by{" "}
                    <span className="author">r/{post.data.author}</span>
                  </p>
                </div>
                <div className="status time">
                  <p>{formatTime(post.data.created_utc)}</p>
                </div>
                <div className="comment">
                  <button
                    className="cmt"
                    onClick={() => {
                      if (post.data.id.length > 0) {
                        const sub = post.data.subreddit_name_prefixed;
                        const id = post.data.id;
                        dispatch(changeActive(sub));
                        dispatch(
                          fetchComments(
                            `https://www.reddit.com/${sub}/comments/${id}.json?sort=confidence`
                          )
                        );
                      }
                    }}
                  >
                    <i className="material-icons">comment</i>
                  </button>
                  <span>{formatNum(post.data.num_comments)}</span>
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
            <h2>We're bringing posts to you...</h2>
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
