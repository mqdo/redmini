import "./RedPost.css";

import pic from "../pic.jpg";

export const RedPost = () => {
  return (
    <div className="post-container">
      <div className="posts" key="1">
        <div className="votes">
          <button className="arrow-up">
            <i className="material-icons">expand_less</i>
          </button>
          <p>169</p>
          <button className="arrow-down">
            <i className="material-icons">expand_more</i>
          </button>
        </div>
        <div className="status posted">
          <p>Posted by r/dragoneyes</p>
        </div>
        <div className="status time">
          <p>1 month ago</p>
        </div>
        <div className="comment">
          <button className="cmt">
            <i className="material-icons">comment</i>
          </button>
        </div>
        <div className="post">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            urna elit, commodo ac turpis vitae, eleifend pharetra metus.
            Suspendisse sit amet euismod sapien, sit amet eleifend orci. Nullam
            egestas, urna id convallis interdum, dolor diam tempus erat, a
            imperdiet turpis diam a libero. Phasellus et scelerisque mauris,
            vitae commodo velit. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean sed consequat orci.
          </h2>
        </div>
      </div>
      <div className="posts" key="2">
        <div className="votes">
          <button className="arrow-up">
            <i className="material-icons">expand_less</i>
          </button>
          <p>696</p>
          <button className="arrow-down">
            <i className="material-icons">expand_more</i>
          </button>
        </div>
        <div className="status posted">
          <p>Posted by r/meatball</p>
        </div>
        <div className="status time">
          <p>1 month ago</p>
        </div>
        <div className="comment">
          <button className="cmt">
            <i className="material-icons">comment</i>
          </button>
        </div>
        <div className="post">
          <h2>Vacation</h2>
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="posts" key="3">
        <div className="votes">
          <button className="arrow-up">
            <i className="material-icons">expand_less</i>
          </button>
          <p>6</p>
          <button className="arrow-down">
            <i className="material-icons">expand_more</i>
          </button>
        </div>
        <div className="status posted">
          <p>Posted by r/meatball</p>
        </div>
        <div className="status time">
          <p>1 month ago</p>
        </div>
        <div className="comment">
          <button className="cmt">
            <i className="material-icons">comment</i>
          </button>
        </div>
        <div className="post">
          <h2>How are you?</h2>
        </div>
      </div>
    </div>
  );
};
