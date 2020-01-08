import { PropertiesFallback } from "csstype";

/**
 * The CSS type with `$displayName` support.
 */
export interface Css extends PropertiesFallback<string | number> {
  $displayName?: string;
  [selector: string]:
    | undefined
    | null
    | boolean
    | string
    | number
    | (boolean | string | number)[]
    | Css;
}

/**
 * Support re-usable CSS via arrays of CSS objects.
 */
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
