/**
 * The CSS type with `$displayName` support.
 */
export interface Css {
  $global?: boolean;
  $displayName?: string;
  [selector: string]:
    | boolean
    | string
    | number
    | (boolean | string | number)[]
    | Css
    | undefined
    | null;
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
    ? (rule: string, $displayName: string, $global?: boolean) => {
        const format = (style: NestedCss): NestedCss => {
          if (Array.isArray(style)) return style.map(format);
          return { $global, [rule]: style };
        };

        return (...styles: NestedCss[]): NestedCss[] => styles.map(format);
      }
    : (rule: string, $displayName: string, $global?: boolean) => {
        const format = (style: NestedCss): NestedCss =>
          Array.isArray(style)
            ? style.map(format)
            : {
                $global,
                $displayName: `${$displayName}(${
                  style.$displayName || "style"
                })`,
                [rule]: style,
              };

        return (...styles: NestedCss[]): NestedCss[] => styles.map(format);
      };
