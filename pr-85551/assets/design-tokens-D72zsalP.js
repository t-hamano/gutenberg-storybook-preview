import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../packages/theme/src/stories/token-preview-styles.ts
var previewStyle, headingStyle, listStyle, itemStyle, tokenNameStyle, descriptionStyle, textStyle;
function init_token_preview_styles() {
	return (init_token_preview_styles = __esmMin((() => {
		previewStyle = {
			display: "flex",
			flexDirection: "column",
			gap: "var(--wpds-dimension-gap-3xl, 40px)",
			color: "var(--wpds-color-foreground-content-neutral, #1e1e1e)"
		};
		headingStyle = { marginBlockEnd: "var(--wpds-dimension-gap-xs, 4px)" };
		listStyle = {
			display: "flex",
			flexDirection: "column",
			gap: "var(--wpds-dimension-gap-md, 12px)",
			margin: 0,
			padding: 0
		};
		itemStyle = {
			display: "grid",
			gridTemplateColumns: "minmax(96px, 160px) 1fr",
			alignItems: "center",
			gap: "var(--wpds-dimension-gap-lg, 16px)",
			padding: "var(--wpds-dimension-padding-lg, 16px)",
			backgroundColor: "var(--wpds-color-background-surface-neutral-weak, #f4f4f4)",
			border: "var(--wpds-border-width-xs, 1px) solid var(--wpds-color-stroke-surface-neutral-weak, #f0f0f0)",
			borderRadius: "var(--wpds-border-radius-sm, 2px)"
		};
		tokenNameStyle = {
			fontFamily: "var(--wpds-typography-font-family-mono, \"Menlo\", \"Consolas\", monaco, monospace)",
			fontSize: "var(--wpds-typography-font-size-md, 13px)",
			fontStyle: "normal",
			fontWeight: "var(--wpds-typography-font-weight-default, 400)",
			lineHeight: "var(--wpds-typography-line-height-md, 24px)",
			overflowWrap: "anywhere"
		};
		descriptionStyle = {
			margin: 0,
			fontSize: "var(--wpds-typography-font-size-md, 13px)",
			fontStyle: "normal",
			fontWeight: "var(--wpds-typography-font-weight-default, 400)",
			lineHeight: "var(--wpds-typography-line-height-md, 24px)",
			color: "var(--wpds-color-foreground-content-neutral-weak, #707070)"
		};
		textStyle = {
			display: "flex",
			flexDirection: "column",
			gap: "var(--wpds-dimension-gap-xs, 4px)",
			minWidth: 0,
			margin: 0
		};
	})))();
}
//#endregion
//#region ../packages/theme/prebuilt/css/design-tokens.css
function init_design_tokens() {
	return (init_design_tokens = __esmMin((() => {})))();
}
//#endregion
export { itemStyle as a, textStyle as c, init_token_preview_styles as i, tokenNameStyle as l, descriptionStyle as n, listStyle as o, headingStyle as r, previewStyle as s, init_design_tokens as t };
