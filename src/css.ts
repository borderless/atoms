import { Css } from "./utilities";
import {
  spacingConfig,
  colorConfig,
  roundingConfig,
  fontSizeConfig,
  borderSizeConfig,
  fontWeightConfig,
  boxShadowConfig,
  lineHeightConfig
} from "./config";
import { pseudoAfter } from "./selectors";

const map = <K extends PropertyKey, T, U>(
  dict: Record<K, T>,
  fn: (value: T, key: K) => U
): Record<K, U> => {
  const result = Object.create(null) as Record<K, U>;
  for (const [key, value] of Object.entries(dict)) {
    result[key as K] = fn(value as T, key as K);
  }
  return result;
};

const css =
  process.env.NODE_ENV === "production"
    ? (style: Css) => style
    : (style: Css, $displayName: string): Css => ({ ...style, $displayName });

export const floatLeft = css({ float: "left" }, "floatLeft");
export const floatRight = css({ float: "right" }, "floatRight");
export const floatNone = css({ float: "none" }, "floatNone");

export const clearFix = pseudoAfter(
  css(
    {
      content: '""',
      display: "table",
      clear: "both"
    },
    "clearFix"
  )
);

export const block = css({ display: "block" }, "block");
export const inline = css({ display: "inline" }, "inline");
export const inlineBlock = css({ display: "inline-block" }, "inlineBlock");
export const flex = css({ display: "flex" }, "flex");
export const inlineFlex = css({ display: "inline-flex" }, "inlineFlex");
export const table = css({ display: "table" }, "table");
export const tableRow = css({ display: "table-row" }, "tableRow");
export const tableCell = css({ display: "table-cell" }, "tableCell");
export const hidden = css({ display: "none" }, "hidden");

export const posStatic = css({ position: "static" }, "posStatic");
export const posFixed = css({ position: "fixed" }, "posFixed");
export const posAbsolute = css({ position: "absolute" }, "posAbsolute");
export const posRelative = css({ position: "relative" }, "posRelative");
export const posSticky = css({ position: "sticky" }, "posSticky");

export const visible = css({ visibility: "visible" }, "visible");
export const invisible = css({ visibility: "hidden" }, "invisible");

export const zIndex = Array.from({ length: 10 }, (_, i) =>
  css({ zIndex: i }, `zIndex.${i}`)
);

export const flexRow = css({ flexDirection: "row" }, "flexRow");
export const flexRowReverse = css(
  { flexDirection: "row-reverse" },
  "flexRowReverse"
);
export const flexColumn = css({ flexDirection: "column" }, "flexColumn");
export const flexColumnReverse = css(
  { flexDirection: "column-reverse" },
  "flexColumnReverse"
);

export const flexNoWrap = css({ flexWrap: "nowrap" }, "flexNoWrap");
export const flexWrap = css({ flexWrap: "wrap" }, "flexWrap");
export const flexWrapReverse = css(
  { flexWrap: "wrap-reverse" },
  "flexWrapReverse"
);

export const justifyStart = css(
  { justifyContent: "flex-start" },
  "justifyStart"
);
export const justifyCenter = css({ justifyContent: "center" }, "justifyCenter");
export const justifyEnd = css({ justifyContent: "flex-end" }, "justifyEnd");
export const justifyBetween = css(
  { justifyContent: "space-between" },
  "justifyBetween"
);
export const justifyAround = css(
  { justifyContent: "space-around" },
  "justifyAround"
);

export const itemsStart = css({ alignItems: "flex-start" }, "itemsStart");
export const itemsCenter = css({ alignItems: "center" }, "itemsCenter");
export const itemsEnd = css({ alignItems: "flex-end" }, "itemsEnd");
export const itemsStretch = css(
  { alignItems: "space-stretch" },
  "itemsStretch"
);
export const itemsBaseline = css(
  { alignItems: "space-baseline" },
  "itemsBaseline"
);

export const selfAuto = css({ alignSelf: "auto" }, "selfAuto");
export const selfStart = css({ alignSelf: "flex-start" }, "selfStart");
export const selfCenter = css({ alignSelf: "center" }, "selfCenter");
export const selfEnd = css({ alignSelf: "flex-end" }, "selfEnd");
export const selfStretch = css({ alignSelf: "stretch" }, "selfStretch");

export const flexInitial = css({ flex: "0 1 auto" }, "flexInitial");
export const flex1 = css({ flex: "1 1 0%" }, "flex1");
export const flexAuto = css({ flex: "1 1 auto" }, "flexAuto");
export const flexNone = css({ flex: "none" }, "flexNone");

export const flexGrow1 = css({ flexGrow: 1 }, "flexGrow1");
export const flexGrow0 = css({ flexGrow: 0 }, "flexGrow0");

export const flexShrink1 = css({ flexShrink: 1 }, "flexShrink1");
export const flexShrink0 = css({ flexShrink: 0 }, "flexShrink0");

export const boxBorder = css({ boxSizing: "border-box" }, "boxBorder");
export const boxContent = css({ boxSizing: "content-box" }, "boxContent");

export const fontNormal = css({ fontStyle: "normal" }, "fontNormal");
export const fontItalic = css({ fontStyle: "italic" }, "fontItalic");

export const uppercase = css({ textTransform: "uppercase" }, "uppercase");
export const lowercase = css({ textTransform: "lowercase" }, "lowercase");
export const capitalize = css({ textTransform: "capitalize" }, "capitalize");
export const normalCase = css({ textTransform: "none" }, "normalCase");

export const w = map(
  { ...spacingConfig, full: "100%", screen: "100vw" },
  (x, key) => css({ width: x }, `w.${key}`)
);
export const h = map(
  { ...spacingConfig, full: "100%", screen: "100vh" },
  (x, key) => css({ height: x }, `h.${key}`)
);

export const p = map(spacingConfig, (x, key) =>
  css({ padding: x }, `p.${key}`)
);
export const pt = map(spacingConfig, (x, key) =>
  css({ paddingTop: x }, `pt.${key}`)
);
export const pr = map(spacingConfig, (x, key) =>
  css({ paddingRight: x }, `pr.${key}`)
);
export const pb = map(spacingConfig, (x, key) =>
  css({ paddingBottom: x }, `pb.${key}`)
);
export const pl = map(spacingConfig, (x, key) =>
  css({ paddingLeft: x }, `pl.${key}`)
);
export const py = map(spacingConfig, (x, key) =>
  css({ paddingTop: x, paddingBottom: x }, `py.${key}`)
);
export const px = map(spacingConfig, (x, key) =>
  css({ paddingLeft: x, paddingRight: x }, `px.${key}`)
);

export const m = map(spacingConfig, (x, key) => css({ margin: x }, `m.${key}`));
export const mt = map(spacingConfig, (x, key) =>
  css({ marginTop: x }, `mt.${key}`)
);
export const mr = map(spacingConfig, (x, key) =>
  css({ marginRight: x }, `mr.${key}`)
);
export const mb = map(spacingConfig, (x, key) =>
  css({ marginBottom: x }, `mb.${key}`)
);
export const ml = map(spacingConfig, (x, key) =>
  css({ marginLeft: x }, `ml.${key}`)
);
export const my = map(
  spacingConfig,
  (x, key): Css => css({ marginTop: x, marginBottom: x }, `my.${key}`)
);
export const mx = map(spacingConfig, (x, key) =>
  css({ marginLeft: x, marginRight: x }, `mx.${key}`)
);

export const textLeft = css({ textAlign: "left" }, "textLeft");
export const textCenter = css({ textAlign: "center" }, "textCenter");
export const textRight = css({ textAlign: "right" }, "textRight");
export const textJustify = css({ textAlign: "justify" }, "textJustify");

export const color = map(colorConfig, (color, key) =>
  css({ color }, `color.${key}`)
);
export const borderColor = map(colorConfig, (borderColor, key) =>
  css({ borderColor }, `borderColor.${key}`)
);
export const backgroundColor = map(colorConfig, (backgroundColor, key) =>
  css({ backgroundColor }, `backgroundColor.${key}`)
);

export const pointerEventsNone = css(
  { pointerEvents: "none" },
  "pointerEventsNone"
);

export const pointerEventsAuto = css(
  { pointerEvents: "auto" },
  "pointerEventsAuto"
);

export const borderSolid = css({ borderStyle: "solid" }, "borderSolid");
export const borderDashed = css({ borderStyle: "dashed" }, "borderDashed");
export const borderDotted = css({ borderStyle: "dotted" }, "borderDotted");
export const borderNone = css({ borderStyle: "none" }, "borderNone");

export const border = map(borderSizeConfig, (borderWidth, key) =>
  css({ borderWidth }, `borderWidth.${key}`)
);
export const borderTop = map(borderSizeConfig, (borderTopWidth, key) =>
  css({ borderTopWidth }, `borderTopWidth.${key}`)
);
export const borderRight = map(borderSizeConfig, (borderRightWidth, key) =>
  css({ borderRightWidth }, `borderRightWidth.${key}`)
);
export const borderBottom = map(borderSizeConfig, (borderBottomWidth, key) =>
  css({ borderBottomWidth }, `borderBottom.${key}`)
);
export const borderLeft = map(borderSizeConfig, (borderLeftWidth, key) =>
  css({ borderLeftWidth }, `borderLeft.${key}`)
);

export const appearanceNone = css(
  {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none"
  },
  "appearanceNone"
);

export const fontSize = map(fontSizeConfig, (fontSize, key) =>
  css({ fontSize }, `fontSize.${key}`)
);

export const fontWeight = map(fontWeightConfig, (fontWeight, key) =>
  css({ fontWeight }, `fontWeight.${key}`)
);

export const rounded = map(roundingConfig, (borderRadius, key) =>
  css({ borderRadius }, `rounded.${key}`)
);
export const roundedTop = map(roundingConfig, (radius, key) =>
  css(
    {
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius
    },
    `roundedTop.${key}`
  )
);
export const roundedBottom = map(roundingConfig, (radius, key) =>
  css(
    {
      borderBottomLeftRadius: radius,
      borderBottomRightRadius: radius
    },
    `roundedBottom.${key}`
  )
);
export const roundedLeft = map(roundingConfig, (radius, key) =>
  css(
    {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius
    },
    `roundedLeft.${key}`
  )
);
export const roundedRight = map(roundingConfig, (radius, key) =>
  css(
    {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius
    },
    `roundedRight.${key}`
  )
);

export const boxShadow = map(boxShadowConfig, (boxShadow, key) =>
  css({ boxShadow }, `boxShadow.${key}`)
);

export const outlineNone = css({ outline: 0 }, "outlineNone");

export const fill = map(colorConfig, (fill, key) =>
  css({ fill }, `fill.${key}`)
);

export const backgroundFixed = css(
  { backgroundAttachment: "fixed" },
  "backgroundFixed"
);
export const backgroundScroll = css(
  { backgroundAttachment: "scroll" },
  "backgroundScroll"
);
export const backgroundLocal = css(
  { backgroundAttachment: "local" },
  "backgroundLocal"
);

export const backgroundAuto = css({ backgroundSize: "auto" }, "backgroundAuto");
export const backgroundCover = css(
  { backgroundSize: "cover" },
  "backgroundCover"
);
export const backgroundContain = css(
  { backgroundSize: "contain" },
  "backgroundContain"
);

export const leading = map(lineHeightConfig, (lineHeight, key) =>
  css({ lineHeight }, `leading.${key}`)
);

export const selectNone = css(
  {
    MozUserSelect: "none",
    msUserSelect: "none",
    WebkitUserSelect: "none",
    userSelect: "none"
  },
  "selectNone"
);

export const selectText = css(
  {
    MozUserSelect: "text",
    msUserSelect: "text",
    WebkitUserSelect: "text",
    userSelect: "text"
  },
  "selectText"
);

export const selectAuto = css(
  {
    MozUserSelect: "auto",
    WebkitUserSelect: "auto",
    userSelect: "auto"
  },
  "selectAuto"
);

export const selectAll = css(
  {
    MozUserSelect: "all",
    WebkitUserSelect: "all",
    userSelect: "all"
  },
  "selectAll"
);

export const selectContain = css(
  {
    MozUserSelect: "contain",
    msUserSelect: "element",
    WebkitUserSelect: "contain",
    userSelect: "contain"
  },
  "selectContain"
);

export const backgroundBorder = css(
  { backgroundClip: "border-box" },
  "backgroundBorder"
);
export const backgroundContent = css(
  { backgroundClip: "content-box" },
  "backgroundContent"
);
export const backgroundPadding = css(
  { backgroundClip: "padding-box" },
  "backgroundPadding"
);

export const cursorAuto = css({ cursor: "auto" }, "cursorAuto");
export const cursorDefault = css({ cursor: "default" }, "cursorDefault");
export const cursorPointer = css({ cursor: "pointer" }, "cursorPointer");
export const cursorWait = css({ cursor: "wait" }, "cursorWait");
export const cursorText = css({ cursor: "text" }, "cursorText");
export const cursorMove = css({ cursor: "move" }, "cursorMove");
export const cursorNotAllowed = css(
  { cursor: "not-allowed" },
  "cursorNotAllowed"
);

export const opacity100 = css({ opacity: 1 }, "opacity100");
export const opacity75 = css({ opacity: 0.75 }, "opacity75");
export const opacity50 = css({ opacity: 0.5 }, "opacity50");
export const opacity25 = css({ opacity: 0.25 }, "opacity25");
export const opacity0 = css({ opacity: 0 }, "opacity0");

export const whitespaceNormal = css(
  { whiteSpace: "normal" },
  "whitespaceNormal"
);
export const whitespaceNoWrap = css(
  { whiteSpace: "nowrap" },
  "whitespaceNoWrap"
);
export const whitespacePre = css({ whiteSpace: "pre" }, "whitespacePre");
export const whitespacePreLine = css(
  { whiteSpace: "pre-line" },
  "whitespacePreLine"
);
export const whitespacePreWrap = css(
  { whiteSpace: "pre-wrap" },
  "whitespacePreWrap"
);

export const alignBaseline = css(
  { verticalAlign: "baseline" },
  "alignBaseline"
);
export const alignTop = css({ verticalAlign: "top" }, "alignTop");
export const alignMiddle = css({ verticalAlign: "middle" }, "alignMiddle");
export const alignBottom = css({ verticalAlign: "bottom" }, "alignBottom");
export const alignTextTop = css({ verticalAlign: "text-top" }, "alignTextTop");
export const alignTextBottom = css(
  { verticalAlign: "text-bottom" },
  "alignTextBottom"
);

export const borderCollapse = css(
  { borderCollapse: "collapse" },
  "borderCollapse"
);
export const borderSeparate = css(
  { borderCollapse: "separate" },
  "borderSeparate"
);
