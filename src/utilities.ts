import { css, Css } from "react-free-style";

/**
 * Create an animation and return as an atomic CSS object (`{ animationName }`).
 */
export const animationName = (styles: Css) => {
  return css(Style => {
    const animationName = Style.registerKeyframes(styles);

    return { animationName };
  });
};

export type NestedCss = Css | NestedCss[];

/**
 * Create a nested CSS rule with `$displayName` propagation.
 */
export const nest =
  process.env.NODE_ENV === "production"
    ? (rule: string) => {
        const format = (style: NestedCss): NestedCss => {
          return Array.isArray(style) ? format(style) : { [rule]: style };
        };

        return (...styles: NestedCss[]): NestedCss[] => styles.map(format);
      }
    : (rule: string, $displayName: string) => {
        const format = (style: NestedCss): NestedCss =>
          Array.isArray(style)
            ? style.map(format)
            : {
                $displayName: `${$displayName}(${style.$displayName ||
                  "style"})`,
                [rule]: style
              };

        return (...styles: NestedCss[]): NestedCss[] => styles.map(format);
      };
