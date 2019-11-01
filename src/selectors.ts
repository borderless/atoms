import { nest } from "./utilities";

// Media queries.
export const mqSmall = nest("@media (min-width: 640px)", "mqSmall");
export const mqMedium = nest("@media (min-width: 768px)", "mqMedium");
export const mqLarge = nest("@media (min-width: 1024px)", "mqLarge");
export const mqExtraLarge = nest("@media (min-width: 1280px)", "mqExtraLarge");
export const mqPrint = nest("@media print", "mqPrint");
export const mqPortrait = nest("@media (orientation: portrait)", "mqPortrait");
export const mqLandscape = nest(
  "@media (orientation: landscape)",
  "mqLandscape"
);
export const mqDarkMode = nest(
  "@media (prefers-color-scheme: dark)",
  "mqDarkMode"
);
export const mqLightMode = nest(
  "@media (prefers-color-scheme: light)",
  "mqLightMode"
);

// Elements.
export const pseudoBefore = nest("&::before", "pseudoBefore");
export const pseudoAfter = nest("&::after", "pseudoAfter");
export const pseudoPlaceholder = nest("&::placeholder", "pseudoPlaceholder");
export const pseudoSelection = nest("&::selection", "pseudoSelection");
export const pseudoFirstLine = nest("&::first-line", "pseudoFirstLine");
export const pseudoFirstLetter = nest("&::first-letter", "pseudoFirstLetter");

// Selectors.
export const pseudoHover = nest("&:hover:not(:disabled)", "pseudoHover");
export const pseudoActive = nest("&:active:not(:disabled)", "pseudoActive");
export const pseudoFocus = nest("&:focus", "pseudoFocus");
export const pseudoChecked = nest("&:checked", "pseudoChecked");
export const pseudoEnabled = nest("&:enabled", "pseudoEnabled");
export const pseudoDisabled = nest("&:disabled", "pseudoDisabled");
export const pseudoValid = nest("&:valid", "pseudoValid");
export const pseudoInvalid = nest("&:invalid", "pseudoInvalid");
export const pseudoRequired = nest("&:required", "pseudoRequired");
export const pseudoOptional = nest("&:optional", "pseudoOptional");
export const pseudoFirstChild = nest("&:first-child", "pseudoFirstChild");
export const pseudoLastChild = nest("&:last-child", "pseudoLastChild");
