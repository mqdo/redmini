import "./ScrollButton.css";

import { scrollToTop } from "../../scrollToTop";

export const ScrollButton = () => {
  return (
    <button className="scroll" onClick={scrollToTop}>
      <span className="material-icons">arrow_circle_up</span>
      <p>To top</p>
    </button>
  );
};
