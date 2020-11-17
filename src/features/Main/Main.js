import React from "react";

import { RedPost } from "../RedPost/RedPost";
import { Categories } from "../Categories/Categories";

export const Main = () => {
  return (
    <div className="main-page">
      <Categories />
      <RedPost />
    </div>
  );
};
