import * as css from "./css";

describe("css", () => {
  it("should come with css utilities", () => {
    expect(css.appearanceNone).toEqual({
      $displayName: "appearanceNone",
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none"
    });
  });
});
