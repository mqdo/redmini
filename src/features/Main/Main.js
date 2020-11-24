import React from "react";

import { RedPost } from "../RedPost/RedPost";
import { Categories } from "../Categories/Categories";
import { ScrollButton } from "../ScrollButton/ScrollButton";

export const Main = () => {
  return (
    <div className="main-page">
      <Categories />
      <RedPost />
      <ScrollButton />
    </div>
  );
};
