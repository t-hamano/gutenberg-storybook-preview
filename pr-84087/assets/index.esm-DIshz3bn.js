import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/tabbable@6.4.0-49g9Jwl_jIng6IFnC6-0hg/node_modules/tabbable/dist/index.esm.js
var candidateSelectors, candidateSelector, NoElement, matches, getRootNode, _isInert, isContentEditable, getCandidates, _getCandidatesIteratively, hasTabIndex, getTabIndex, getSortOrderTabIndex, sortOrderedTabbables, isInput, isHiddenInput, isDetailsWithSummary, getCheckedRadio, isTabbableRadio, isRadio, isNonTabbableRadio, isNodeAttached, isZeroArea, isHidden, isDisabledFromFieldset, isNodeMatchingSelectorFocusable, isNodeMatchingSelectorTabbable, isShadowRootTabbable, _sortByOrder, tabbable;
function init_index_esm() {
	return (init_index_esm = __esmMin((() => {
		candidateSelectors = [
			"input:not([inert]):not([inert] *)",
			"select:not([inert]):not([inert] *)",
			"textarea:not([inert]):not([inert] *)",
			"a[href]:not([inert]):not([inert] *)",
			"button:not([inert]):not([inert] *)",
			"[tabindex]:not(slot):not([inert]):not([inert] *)",
			"audio[controls]:not([inert]):not([inert] *)",
			"video[controls]:not([inert]):not([inert] *)",
			"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
			"details>summary:first-of-type:not([inert]):not([inert] *)",
			"details:not([inert]):not([inert] *)"
		];
		candidateSelector = /* #__PURE__ */ candidateSelectors.join(",");
		NoElement = typeof Element === "undefined";
		matches = NoElement ? function() {
			/*!
			* tabbable 6.4.0
			* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
			*/
		} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
		getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
			var _element$getRootNode;
			return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
		} : function(element) {
			return element === null || element === void 0 ? void 0 : element.ownerDocument;
		};
		_isInert = function isInert(node, lookUp) {
			var _node$getAttribute;
			if (lookUp === void 0) lookUp = true;
			var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
			return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
		};
		isContentEditable = function isContentEditable(node) {
			var _node$getAttribute2;
			var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
			return attValue === "" || attValue === "true";
		};
		getCandidates = function getCandidates(el, includeContainer, filter) {
			if (_isInert(el)) return [];
			var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
			if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
			candidates = candidates.filter(filter);
			return candidates;
		};
		_getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
			var candidates = [];
			var elementsToCheck = Array.from(elements);
			while (elementsToCheck.length) {
				var element = elementsToCheck.shift();
				if (_isInert(element, false)) continue;
				if (element.tagName === "SLOT") {
					var assigned = element.assignedElements();
					var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
					if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
					else candidates.push({
						scopeParent: element,
						candidates: nestedCandidates
					});
				} else {
					if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
					var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
					var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
					if (shadowRoot && validShadowRoot) {
						var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
						if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
						else candidates.push({
							scopeParent: element,
							candidates: _nestedCandidates
						});
					} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
				}
			}
			return candidates;
		};
		hasTabIndex = function hasTabIndex(node) {
			return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
		};
		getTabIndex = function getTabIndex(node) {
			if (!node) throw new Error("No node provided");
			if (node.tabIndex < 0) {
				if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
			}
			return node.tabIndex;
		};
		getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
			var tabIndex = getTabIndex(node);
			if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
			return tabIndex;
		};
		sortOrderedTabbables = function sortOrderedTabbables(a, b) {
			return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
		};
		isInput = function isInput(node) {
			return node.tagName === "INPUT";
		};
		isHiddenInput = function isHiddenInput(node) {
			return isInput(node) && node.type === "hidden";
		};
		isDetailsWithSummary = function isDetailsWithSummary(node) {
			return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
				return child.tagName === "SUMMARY";
			});
		};
		getCheckedRadio = function getCheckedRadio(nodes, form) {
			for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
		};
		isTabbableRadio = function isTabbableRadio(node) {
			if (!node.name) return true;
			var radioScope = node.form || getRootNode(node);
			var queryRadios = function queryRadios(name) {
				return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
			};
			var radioSet;
			if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
			else try {
				radioSet = queryRadios(node.name);
			} catch (err) {
				console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
				return false;
			}
			var checked = getCheckedRadio(radioSet, node.form);
			return !checked || checked === node;
		};
		isRadio = function isRadio(node) {
			return isInput(node) && node.type === "radio";
		};
		isNonTabbableRadio = function isNonTabbableRadio(node) {
			return isRadio(node) && !isTabbableRadio(node);
		};
		isNodeAttached = function isNodeAttached(node) {
			var _nodeRoot;
			var nodeRoot = node && getRootNode(node);
			var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
			var attached = false;
			if (nodeRoot && nodeRoot !== node) {
				var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
				attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
				while (!attached && nodeRootHost) {
					var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
					nodeRoot = getRootNode(nodeRootHost);
					nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
					attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
				}
			}
			return attached;
		};
		isZeroArea = function isZeroArea(node) {
			var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
			return width === 0 && height === 0;
		};
		isHidden = function isHidden(node, _ref) {
			var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
			if (displayCheck === "full-native") {
				if ("checkVisibility" in node) return !node.checkVisibility({
					checkOpacity: false,
					opacityProperty: false,
					contentVisibilityAuto: true,
					visibilityProperty: true,
					checkVisibilityCSS: true
				});
			}
			if (getComputedStyle(node).visibility === "hidden") return true;
			var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
			if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
			if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
				if (typeof getShadowRoot === "function") {
					var originalNode = node;
					while (node) {
						var parentElement = node.parentElement;
						var rootNode = getRootNode(node);
						if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
						else if (node.assignedSlot) node = node.assignedSlot;
						else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
						else node = parentElement;
					}
					node = originalNode;
				}
				if (isNodeAttached(node)) return !node.getClientRects().length;
				if (displayCheck !== "legacy-full") return true;
			} else if (displayCheck === "non-zero-area") return isZeroArea(node);
			return false;
		};
		isDisabledFromFieldset = function isDisabledFromFieldset(node) {
			if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
				var parentNode = node.parentElement;
				while (parentNode) {
					if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
						for (var i = 0; i < parentNode.children.length; i++) {
							var child = parentNode.children.item(i);
							if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
						}
						return true;
					}
					parentNode = parentNode.parentElement;
				}
			}
			return false;
		};
		isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
			if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
			return true;
		};
		isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
			if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
			return true;
		};
		isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
			var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
			if (isNaN(tabIndex) || tabIndex >= 0) return true;
			return false;
		};
		_sortByOrder = function sortByOrder(candidates) {
			var regularTabbables = [];
			var orderedTabbables = [];
			candidates.forEach(function(item, i) {
				var isScope = !!item.scopeParent;
				var element = isScope ? item.scopeParent : item;
				var candidateTabindex = getSortOrderTabIndex(element, isScope);
				var elements = isScope ? _sortByOrder(item.candidates) : element;
				if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
				else orderedTabbables.push({
					documentOrder: i,
					tabIndex: candidateTabindex,
					item,
					isScope,
					content: elements
				});
			});
			return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
				sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
				return acc;
			}, []).concat(regularTabbables);
		};
		tabbable = function tabbable(container, options) {
			options = options || {};
			var candidates;
			if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
				filter: isNodeMatchingSelectorTabbable.bind(null, options),
				flatten: false,
				getShadowRoot: options.getShadowRoot,
				shadowRootFilter: isShadowRootTabbable
			});
			else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
			return _sortByOrder(candidates);
		};
	})))();
}
//#endregion
export { tabbable as n, init_index_esm as t };
