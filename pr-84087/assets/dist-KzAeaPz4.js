import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { n as init_react, t as import_react$1 } from "./react-DVttqL3M.js";
import { n as useRefEffect, t as init_use_ref_effect } from "./use-ref-effect-DguFui9C.js";
//#region ../packages/compose/build-module/hooks/use-copy-to-clipboard/index.mjs
async function copyToClipboard(text, trigger) {
	if (!trigger) return false;
	const { ownerDocument } = trigger;
	if (!ownerDocument) return false;
	const { defaultView } = ownerDocument;
	try {
		if (defaultView?.navigator?.clipboard?.writeText) {
			await defaultView.navigator.clipboard.writeText(text);
			return true;
		}
		const textarea = ownerDocument.createElement("textarea");
		textarea.value = text;
		textarea.setAttribute("readonly", "");
		textarea.style.position = "fixed";
		textarea.style.left = "-9999px";
		textarea.style.top = "-9999px";
		ownerDocument.body.appendChild(textarea);
		textarea.select();
		const success = ownerDocument.execCommand("copy");
		textarea.remove();
		return success;
	} catch {
		return false;
	}
}
function restoreFocus(trigger) {
	if ("focus" in trigger && typeof trigger.focus === "function") trigger.focus();
}
function useUpdatedRef(value) {
	const ref = (0, import_react$1.useRef)(value);
	(0, import_react$1.useLayoutEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref;
}
function useCopyToClipboard(text, onSuccess) {
	const textRef = useUpdatedRef(text);
	const onSuccessRef = useUpdatedRef(onSuccess);
	return useRefEffect((node) => {
		let isActive = true;
		const handleClick = async () => {
			if (await copyToClipboard(typeof textRef.current === "function" ? textRef.current() : textRef.current || "", node)) {
				if (isActive) restoreFocus(node);
				if (onSuccessRef.current) onSuccessRef.current();
			}
		};
		node.addEventListener("click", handleClick);
		return () => {
			isActive = false;
			node.removeEventListener("click", handleClick);
		};
	}, []);
}
function init_use_copy_to_clipboard() {
	return (init_use_copy_to_clipboard = __esmMin((() => {
		init_react();
		init_use_ref_effect();
	})))();
}
//#endregion
//#region ../node_modules/.store/react-colorful@5.8.1-ZlsHdwpPAIiwA4_AEInjJA/node_modules/react-colorful/dist/index.mjs
function l() {
	return (l = Object.assign || function(e) {
		for (var r = 1; r < arguments.length; r++) {
			var n = arguments[r];
			for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
		}
		return e;
	}).apply(this, arguments);
}
function c(e, r) {
	if (null == e) return {};
	var n, t, o = {}, a = Object.keys(e);
	for (t = 0; t < a.length; t++) r.indexOf(n = a[t]) >= 0 || (o[n] = e[n]);
	return o;
}
function i(e) {
	var n = (0, import_react.useRef)(e), t = (0, import_react.useRef)(function(e) {
		n.current && n.current(e);
	});
	return n.current = e, t.current;
}
function X(e, n, u, l) {
	var c = i(u), s = i(l), f = (0, import_react.useState)(function() {
		return e.toHsva(n);
	}), d = f[0], v = f[1], h = (0, import_react.useRef)({
		color: n,
		hsva: d
	}), g = (0, import_react.useRef)(!1);
	(0, import_react.useEffect)(function() {
		if (!e.equal(n, h.current.color)) {
			var r = e.toHsva(n);
			h.current = {
				hsva: r,
				color: n
			}, v(r), g.current = !1;
		}
	}, [n, e]), (0, import_react.useEffect)(function() {
		var r;
		T(d, h.current.hsva) || e.equal(r = e.fromHsva(d), h.current.color) || (h.current = {
			hsva: d,
			color: r
		}, c(r), g.current = !0);
	}, [
		d,
		e,
		c
	]);
	return [
		d,
		(0, import_react.useCallback)(function(e) {
			v(function(r) {
				return Object.assign({}, r, e);
			});
		}, []),
		(0, import_react.useCallback)(function() {
			g.current && (g.current = !1, s(h.current.color));
		}, [s])
	];
}
var import_react, s, f, d, v, h, g, m, p, b, y, k, q, A, R, S, T, U, V, $, G, J, ee, re, de, ve, me, pe;
function init_dist() {
	return (init_dist = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		s = function(e, r, n) {
			return void 0 === r && (r = 0), void 0 === n && (n = 1), e > n ? n : e < r ? r : e;
		};
		f = function(e) {
			return "touches" in e;
		};
		d = function(e) {
			return e && e.ownerDocument.defaultView || self;
		};
		v = function(e, r, n) {
			var t = e.getBoundingClientRect(), o = f(r) ? function(e, r) {
				for (var n = 0; n < e.length; n++) if (e[n].identifier === r) return e[n];
				return e[0];
			}(r.touches, n) : r;
			return {
				left: s((o.pageX - (t.left + d(e).pageXOffset)) / t.width),
				top: s((o.pageY - (t.top + d(e).pageYOffset)) / t.height)
			};
		};
		h = function(e) {
			!f(e) && e.preventDefault();
		};
		g = import_react.memo(function(o) {
			var a = o.onMove, u = o.onKey, s = o.onEnd, g = c(o, [
				"onMove",
				"onKey",
				"onEnd"
			]), m = (0, import_react.useRef)(null), p = i(a), b = i(u), _ = i(s), E = (0, import_react.useRef)(null), C = (0, import_react.useRef)(!1), x = (0, import_react.useMemo)(function() {
				var e = function(e) {
					h(e), (f(e) ? e.touches.length > 0 : e.buttons > 0) && m.current ? p(v(m.current, e, E.current)) : (n(!1), _());
				}, r = function() {
					n(!1), _();
				};
				function n(n) {
					var t = C.current, o = d(m.current), a = n ? o.addEventListener : o.removeEventListener;
					a(t ? "touchmove" : "mousemove", e), a(t ? "touchend" : "mouseup", r);
				}
				return [
					function(e) {
						var r = e.nativeEvent, t = m.current;
						if (t && (h(r), !function(e, r) {
							return r && !f(e);
						}(r, C.current) && t)) {
							if (f(r)) {
								C.current = !0;
								var o = r.changedTouches || [];
								o.length && (E.current = o[0].identifier);
							}
							t.focus(), p(v(t, r, E.current)), n(!0);
						}
					},
					function(e) {
						var r = e.which || e.keyCode;
						r < 37 || r > 40 || (e.preventDefault(), b({
							left: 39 === r ? .05 : 37 === r ? -.05 : 0,
							top: 40 === r ? .05 : 38 === r ? -.05 : 0
						}));
					},
					function(e) {
						var r = e.which || e.keyCode;
						r >= 37 && r <= 40 && _();
					},
					n
				];
			}, [
				b,
				p,
				_
			]), H = x[0], M = x[1], N = x[2], w = x[3];
			return (0, import_react.useEffect)(function() {
				return w;
			}, [w]), import_react.createElement("div", l({}, g, {
				onTouchStart: H,
				onMouseDown: H,
				className: "react-colorful__interactive",
				ref: m,
				onKeyDown: M,
				onKeyUp: N,
				tabIndex: 0,
				role: "slider"
			}));
		});
		m = function(e) {
			return e.filter(Boolean).join(" ");
		};
		p = function(r) {
			var n = r.color, t = r.left, o = r.top, a = void 0 === o ? .5 : o, u = m(["react-colorful__pointer", r.className]);
			return import_react.createElement("div", {
				className: u,
				style: {
					top: 100 * a + "%",
					left: 100 * t + "%"
				}
			}, import_react.createElement("div", {
				className: "react-colorful__pointer-fill",
				style: { backgroundColor: n }
			}));
		};
		b = function(e, r, n) {
			return void 0 === r && (r = 0), void 0 === n && (n = Math.pow(10, r)), Math.round(n * e) / n;
		};
		y = function(e) {
			var r = e.s, n = e.v, t = e.a, o = (200 - r) * n / 100;
			return {
				h: b(e.h),
				s: b(o > 0 && o < 200 ? r * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
				l: b(o / 2),
				a: b(t, 2)
			};
		};
		k = function(e) {
			var r = y(e);
			return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
		};
		q = function(e) {
			var r = y(e);
			return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
		};
		A = function(e) {
			return {
				h: b(e.h),
				s: b(e.s),
				v: b(e.v),
				a: b(e.a, 2)
			};
		};
		R = import_react.memo(function(r) {
			var n = r.hue, t = r.onChange, o = r.onChangeEnd, a = m(["react-colorful__hue", r.className]);
			return import_react.createElement("div", { className: a }, import_react.createElement(g, {
				onMove: function(e) {
					t({ h: 360 * e.left });
				},
				onKey: function(e) {
					t({ h: s(n + 360 * e.left, 0, 360) });
				},
				onEnd: o,
				"aria-label": "Hue",
				"aria-valuenow": b(n),
				"aria-valuemax": "360",
				"aria-valuemin": "0"
			}, import_react.createElement(p, {
				className: "react-colorful__hue-pointer",
				left: n / 360,
				color: k({
					h: n,
					s: 100,
					v: 100,
					a: 1
				})
			})));
		});
		S = import_react.memo(function(r) {
			var n = r.hsva, t = r.onChange, o = r.onChangeEnd, a = { backgroundColor: k({
				h: n.h,
				s: 100,
				v: 100,
				a: 1
			}) };
			return import_react.createElement("div", {
				className: "react-colorful__saturation",
				style: a
			}, import_react.createElement(g, {
				onMove: function(e) {
					t({
						s: 100 * e.left,
						v: 100 - 100 * e.top
					});
				},
				onKey: function(e) {
					t({
						s: s(n.s + 100 * e.left, 0, 100),
						v: s(n.v - 100 * e.top, 0, 100)
					});
				},
				onEnd: o,
				"aria-label": "Color",
				"aria-valuetext": "Saturation " + b(n.s) + "%, Brightness " + b(n.v) + "%"
			}, import_react.createElement(p, {
				className: "react-colorful__saturation-pointer",
				top: 1 - n.v / 100,
				left: n.s / 100,
				color: k(n)
			})));
		});
		T = function(e, r) {
			if (e === r) return !0;
			for (var n in e) if (e[n] !== r[n]) return !1;
			return !0;
		};
		U = "undefined" != typeof window ? import_react.useLayoutEffect : import_react.useEffect;
		V = function() {
			return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
		};
		$ = /* @__PURE__ */ new WeakMap();
		G = function(e) {
			U(function() {
				var r = e.current;
				if ("undefined" != typeof document && r) {
					var n = r.getRootNode ? r.getRootNode() : r.ownerDocument, t = n && ("head" in n || "host" in n) ? n : r.ownerDocument;
					if (!$.has(t)) {
						var o = "head" in t ? t.head : t, a = (o.ownerDocument || document).createElement("style");
						a.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}";
						var u = V();
						u && a.setAttribute("nonce", u), $.set(t, a), o.appendChild(a);
					}
				}
			}, []);
		};
		J = function(n) {
			var t = n.className, o = n.colorModel, a = n.color, u = void 0 === a ? o.defaultColor : a, i = n.onChange, s = n.onChangeEnd, f = c(n, [
				"className",
				"colorModel",
				"color",
				"onChange",
				"onChangeEnd"
			]), d = (0, import_react.useRef)(null);
			G(d);
			var v = X(o, u, i, s), h = v[0], g = v[1], p = v[2], b = m(["react-colorful", t]);
			return import_react.createElement("div", l({}, f, {
				ref: d,
				className: b
			}), import_react.createElement(S, {
				hsva: h,
				onChange: g,
				onChangeEnd: p
			}), import_react.createElement(R, {
				hue: h.h,
				onChange: g,
				onChangeEnd: p,
				className: "react-colorful__last-control"
			}));
		};
		ee = function(r) {
			var n = r.className, t = r.hsva, o = r.onChange, a = r.onChangeEnd, u = { backgroundImage: "linear-gradient(90deg, " + q(Object.assign({}, t, { a: 0 })) + ", " + q(Object.assign({}, t, { a: 1 })) + ")" }, l = m(["react-colorful__alpha", n]), c = b(100 * t.a);
			return import_react.createElement("div", { className: l }, import_react.createElement("div", {
				className: "react-colorful__alpha-gradient",
				style: u
			}), import_react.createElement(g, {
				onMove: function(e) {
					o({ a: e.left });
				},
				onKey: function(e) {
					o({ a: s(t.a + e.left) });
				},
				onEnd: a,
				"aria-label": "Alpha",
				"aria-valuetext": c + "%",
				"aria-valuenow": c,
				"aria-valuemin": "0",
				"aria-valuemax": "100"
			}, import_react.createElement(p, {
				className: "react-colorful__alpha-pointer",
				left: t.a,
				color: q(t)
			})));
		};
		re = function(n) {
			var t = n.className, o = n.colorModel, a = n.color, u = void 0 === a ? o.defaultColor : a, i = n.onChange, s = n.onChangeEnd, f = c(n, [
				"className",
				"colorModel",
				"color",
				"onChange",
				"onChangeEnd"
			]), d = (0, import_react.useRef)(null);
			G(d);
			var v = X(o, u, i, s), h = v[0], g = v[1], p = v[2], b = m(["react-colorful", t]);
			return import_react.createElement("div", l({}, f, {
				ref: d,
				className: b
			}), import_react.createElement(S, {
				hsva: h,
				onChange: g,
				onChangeEnd: p
			}), import_react.createElement(R, {
				hue: h.h,
				onChange: g,
				onChangeEnd: p
			}), import_react.createElement(ee, {
				hsva: h,
				onChange: g,
				onChangeEnd: p,
				className: "react-colorful__last-control"
			}));
		};
		de = {
			defaultColor: {
				h: 0,
				s: 0,
				v: 0,
				a: 1
			},
			toHsva: function(e) {
				return e;
			},
			fromHsva: A,
			equal: T
		};
		ve = function(r) {
			return import_react.createElement(re, l({}, r, { colorModel: de }));
		};
		me = {
			defaultColor: {
				h: 0,
				s: 0,
				v: 0
			},
			toHsva: function(e) {
				return {
					h: e.h,
					s: e.s,
					v: e.v,
					a: 1
				};
			},
			fromHsva: function(e) {
				var r = A(e);
				return {
					h: r.h,
					s: r.s,
					v: r.v
				};
			},
			equal: T
		};
		pe = function(r) {
			return import_react.createElement(J, l({}, r, { colorModel: me }));
		};
	})))();
}
//#endregion
export { useCopyToClipboard as a, init_use_copy_to_clipboard as i, pe as n, ve as r, init_dist as t };
