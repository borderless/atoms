import { nest } from "./utilities";
import { styled } from "react-free-style";

describe("utilities", () => {
  describe("nest", () => {
    it("should nest styles", () => {
      const hover = nest("&:hover", "hover");
      const style = hover({ color: "red" }, hover({ color: "blue" }));
      const Test = styled("div", style);

      expect(Test.style.Style.getStyles()).toMatchInlineSnapshot(
        `".hover\\\\(style\\\\)_f6labcb:hover{color:red}.hover\\\\(hover\\\\(style\\\\)\\\\)_f1ik0fzw:hover:hover{color:blue}"`
      );
    });
  });
});
