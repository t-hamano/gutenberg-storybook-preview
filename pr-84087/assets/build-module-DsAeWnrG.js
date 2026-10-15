import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as __, t as init_build_module$2 } from "./build-module-v04us4E2.js";
//#region ../packages/dom-ready/build-module/index.mjs
function domReady(callback) {
	if (typeof document === "undefined") return;
	if (document.readyState === "complete" || document.readyState === "interactive") {
		callback();
		return;
	}
	document.addEventListener("DOMContentLoaded", callback);
}
//#endregion
//#region ../packages/a11y/build-module/script/add-container.mjs
function addContainer(ariaLive = "polite") {
	const container = document.createElement("div");
	container.id = `a11y-speak-${ariaLive}`;
	container.className = "a11y-speak-region";
	container.setAttribute("style", "position:absolute;margin:-1px;padding:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);border:0;word-wrap:normal !important;word-break:normal !important;");
	container.setAttribute("aria-live", ariaLive);
	container.setAttribute("aria-relevant", "additions text");
	container.setAttribute("aria-atomic", "true");
	const { body } = document;
	if (body) body.appendChild(container);
	return container;
}
//#endregion
//#region ../packages/a11y/build-module/script/add-intro-text.mjs
function addIntroText() {
	const introText = document.createElement("p");
	introText.id = "a11y-speak-intro-text";
	introText.className = "a11y-speak-intro-text";
	introText.textContent = __("Notifications");
	introText.setAttribute("style", "position:absolute;margin:-1px;padding:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);border:0;word-wrap:normal !important;word-break:normal !important;");
	introText.setAttribute("hidden", "");
	const { body } = document;
	if (body) body.appendChild(introText);
	return introText;
}
function init_add_intro_text() {
	return (init_add_intro_text = __esmMin((() => {
		init_build_module$2();
	})))();
}
//#endregion
//#region ../packages/a11y/build-module/shared/clear.mjs
function clear() {
	const regions = document.getElementsByClassName("a11y-speak-region");
	const introText = document.getElementById("a11y-speak-intro-text");
	for (let i = 0; i < regions.length; i++) regions[i].textContent = "";
	if (introText) introText.setAttribute("hidden", "hidden");
}
//#endregion
//#region ../packages/a11y/build-module/shared/filter-message.mjs
function filterMessage(message) {
	message = message.replace(/<[^<>]+>/g, " ");
	if (previousMessage === message) message += "\xA0";
	previousMessage = message;
	return message;
}
var previousMessage;
function init_filter_message() {
	return (init_filter_message = __esmMin((() => {
		previousMessage = "";
	})))();
}
//#endregion
//#region ../packages/a11y/build-module/shared/index.mjs
function speak(message, ariaLive) {
	clear();
	message = filterMessage(message);
	const introText = document.getElementById("a11y-speak-intro-text");
	const containerAssertive = document.getElementById("a11y-speak-assertive");
	const containerPolite = document.getElementById("a11y-speak-polite");
	if (containerAssertive && ariaLive === "assertive") containerAssertive.textContent = message;
	else if (containerPolite) containerPolite.textContent = message;
	if (introText) introText.removeAttribute("hidden");
}
function init_shared() {
	return (init_shared = __esmMin((() => {
		init_filter_message();
	})))();
}
//#endregion
//#region ../packages/a11y/build-module/index.mjs
function setup() {
	const introText = document.getElementById("a11y-speak-intro-text");
	const containerAssertive = document.getElementById("a11y-speak-assertive");
	const containerPolite = document.getElementById("a11y-speak-polite");
	if (introText === null) addIntroText();
	if (containerAssertive === null) addContainer("assertive");
	if (containerPolite === null) addContainer("polite");
}
function init_build_module$1() {
	return (init_build_module$1 = __esmMin((() => {
		init_add_intro_text();
		init_shared();
		domReady(setup);
	})))();
}
//#endregion
export { init_shared as n, speak as r, init_build_module$1 as t };
