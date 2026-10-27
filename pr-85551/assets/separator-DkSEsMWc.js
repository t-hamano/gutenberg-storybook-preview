import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { a as init_dist, i as forwardRef, n as createHook, t as createElement } from "./dist-BNTCqa48.js";
//#region ../node_modules/.store/@ariakit/react-components@0.7.1-aGG7Eicir0X5jH9sMy0tHA/node_modules/@ariakit/react-components/dist/separator/separator.js
var TagName, useSeparator, Separator;
function init_separator() {
	return (init_separator = __esmMin((() => {
		init_dist();
		TagName = "hr";
		useSeparator = createHook(function useSeparator({ orientation = "horizontal", ...props }) {
			props = {
				role: "separator",
				"aria-orientation": orientation,
				...props
			};
			return props;
		});
		Separator = forwardRef(function Separator(props) {
			const htmlProps = useSeparator(props);
			return createElement(TagName, htmlProps);
		});
	})))();
}
//#endregion
export { init_separator as n, useSeparator as r, Separator as t };
