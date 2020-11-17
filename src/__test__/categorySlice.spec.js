import { changeActivate } from "../features/Categories/categorySlice";

describe("action", () => {
  it("should activate the subreddit", () => {
    const subreddit = "pics";
    const expectedAction = {
      type: "categories/changeActivate",
      payload: subreddit,
    };
    const act = () => changeActivate(subreddit);
    expect(act()).toEqual(expectedAction);
  });
});
