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

/**
 * Create a nested CSS rule with `$displayName` propagation.
 */
export const nest =
  process.env.NODE_ENV === "production"
    ? (rule: string) => (...styles: Css[]): Css[] => {
        return styles.map(style => ({ [rule]: style }));
      }
    : (rule: string, $displayName: string) => {
        const format = (style: Css): Css => ({
          $displayName: `${$displayName}(${style.$displayName || "style"})`,
          [rule]: style
        });

        return (...styles: Css[]): Css[] => styles.map(format);
      };
