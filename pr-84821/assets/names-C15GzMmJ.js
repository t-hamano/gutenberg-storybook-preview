import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/colord@2.10.0-Qx66Amv6c9C3nDPQDizV6Q/node_modules/colord/index.mjs
var r, t, n, u, e$1, o, a, i, s, d, h, b, f, g, c, v, l, p, m, y, N, x, M, H, $, j, w, S, k, E, R, q, A, C, D;
function init_colord() {
	return (init_colord = __esmMin((() => {
		for (r = {
			grad: .9,
			turn: 360,
			rad: 360 / (2 * Math.PI)
		}, t = function(r) {
			return "string" == typeof r ? r.length > 0 : "number" == typeof r;
		}, n = function(r, t, n) {
			return void 0 === t && (t = 0), void 0 === n && (n = Math.pow(10, t)), Math.round(n * r) / n + 0;
		}, u = function(r, t, n) {
			return void 0 === t && (t = 0), void 0 === n && (n = 1), r > n ? n : r > t ? r : t;
		}, e$1 = function(r) {
			return (r = isFinite(r) ? r % 360 : 0) < 0 ? r + 360 : r;
		}, o = function(r, t) {
			return void 0 === t && (t = 0), n(r, t) % 360;
		}, a = function(r) {
			return {
				r: u(r.r, 0, 255),
				g: u(r.g, 0, 255),
				b: u(r.b, 0, 255),
				a: u(r.a)
			};
		}, i = function(r) {
			return {
				r: n(r.r),
				g: n(r.g),
				b: n(r.b),
				a: n(r.a, 3)
			};
		}, s = /^#([0-9a-f]{3,8})$/i, d = function(r, t) {
			var n = r.charCodeAt(t);
			return (15 & n) + 9 * (n >> 6);
		}, h = function(r, t) {
			return d(r, t) << 4 | d(r, t + 1);
		}, b = [], f = 0; f < 256; f++) b.push((f < 16 ? "0" : "") + f.toString(16));
		g = function(r) {
			return b[u(r, 0, 255)];
		};
		c = function(r) {
			var t = r.r, n = r.g, u = r.b, e = r.a, o = Math.max(t, n, u), a = o - Math.min(t, n, u), i = a ? o === t ? (n - u) / a : o === n ? 2 + (u - t) / a : 4 + (t - n) / a : 0;
			return {
				h: 60 * (i < 0 ? i + 6 : i),
				s: o ? a / o * 100 : 0,
				v: o / 255 * 100,
				a: e
			};
		};
		v = function(r) {
			var t = r.h, n = r.s, u = r.v, e = r.a;
			t = t / 360 * 6, n /= 100, u /= 100;
			var o = Math.floor(t), a = u * (1 - n), i = u * (1 - (t - o) * n), s = u * (1 - (1 - t + o) * n), d = o % 6;
			return {
				r: 255 * [
					u,
					i,
					a,
					a,
					s,
					u
				][d],
				g: 255 * [
					s,
					u,
					u,
					i,
					a,
					a
				][d],
				b: 255 * [
					a,
					a,
					s,
					u,
					u,
					i
				][d],
				a: e
			};
		};
		l = function(r) {
			return {
				h: e$1(r.h),
				s: u(r.s, 0, 100),
				l: u(r.l, 0, 100),
				a: u(r.a)
			};
		};
		p = function(r) {
			return {
				h: o(r.h),
				s: n(r.s),
				l: n(r.l),
				a: n(r.a, 3)
			};
		};
		m = function(r) {
			return v((n = (t = r).s, {
				h: t.h,
				s: (n *= ((u = t.l) < 50 ? u : 100 - u) / 100) > 0 ? 2 * n / (u + n) * 100 : 0,
				v: u + n,
				a: t.a
			}));
			var t, n, u;
		};
		y = function(r) {
			return {
				h: (t = c(r)).h,
				s: (e = (200 - (n = t.s)) * (u = t.v) / 100) > 0 && e < 200 ? n * u / 100 / (e <= 100 ? e : 200 - e) * 100 : 0,
				l: e / 2,
				a: t.a
			};
			var t, n, u, e;
		};
		N = /^hsla?\(\s*([+-]?(?:\d*\.\d+|\d+))(deg|rad|grad|turn)?\s*,\s*([+-]?(?:\d*\.\d+|\d+))%\s*,\s*([+-]?(?:\d*\.\d+|\d+))%\s*(?:,\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s*)?\)$/i;
		x = /^hsla?\(\s*([+-]?(?:\d*\.\d+|\d+))(deg|rad|grad|turn)?\s+([+-]?(?:\d*\.\d+|\d+))%\s+([+-]?(?:\d*\.\d+|\d+))%\s*(?:\/\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s*)?\)$/i;
		M = /^rgba?\(\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s*,\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s*,\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s*(?:,\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s*)?\)$/i;
		H = /^rgba?\(\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s+([+-]?(?:\d*\.\d+|\d+))(%)?\s+([+-]?(?:\d*\.\d+|\d+))(%)?\s*(?:\/\s*([+-]?(?:\d*\.\d+|\d+))(%)?\s*)?\)$/i;
		$ = {
			string: [
				[function(r) {
					if (!s.test(r)) return null;
					var t = r.length;
					return t <= 5 ? {
						r: 17 * d(r, 1),
						g: 17 * d(r, 2),
						b: 17 * d(r, 3),
						a: 5 === t ? n(17 * d(r, 4) / 255, 2) : 1
					} : 7 === t || 9 === t ? {
						r: h(r, 1),
						g: h(r, 3),
						b: h(r, 5),
						a: 9 === t ? n(h(r, 7) / 255, 2) : 1
					} : null;
				}, "hex"],
				[function(r) {
					var t = M.exec(r) || H.exec(r);
					return t ? t[2] !== t[4] || t[4] !== t[6] ? null : a({
						r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
						g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
						b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
						a: void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
					}) : null;
				}, "rgb"],
				[function(t) {
					var n = N.exec(t) || x.exec(t);
					if (!n) return null;
					var u, e;
					return m(l({
						h: (u = n[1], e = n[2], void 0 === e && (e = "deg"), Number(u) * (r[e] || 1)),
						s: Number(n[3]),
						l: Number(n[4]),
						a: void 0 === n[5] ? 1 : Number(n[5]) / (n[6] ? 100 : 1)
					}));
				}, "hsl"]
			],
			object: [
				[function(r) {
					var n = r.r, u = r.g, e = r.b, o = r.a, i = void 0 === o ? 1 : o;
					return t(n) && t(u) && t(e) ? a({
						r: Number(n),
						g: Number(u),
						b: Number(e),
						a: Number(i)
					}) : null;
				}, "rgb"],
				[function(r) {
					var n = r.h, u = r.s, e = r.l, o = r.a, a = void 0 === o ? 1 : o;
					if (!t(n) || !t(u) || !t(e)) return null;
					return m(l({
						h: Number(n),
						s: Number(u),
						l: Number(e),
						a: Number(a)
					}));
				}, "hsl"],
				[function(r) {
					var n = r.h, o = r.s, a = r.v, i = r.a, s = void 0 === i ? 1 : i;
					if (!t(n) || !t(o) || !t(a)) return null;
					return v(function(r) {
						return {
							h: e$1(r.h),
							s: u(r.s, 0, 100),
							v: u(r.v, 0, 100),
							a: u(r.a)
						};
					}({
						h: Number(n),
						s: Number(o),
						v: Number(a),
						a: Number(s)
					}));
				}, "hsv"]
			]
		};
		j = function(r, t) {
			for (var n = 0; n < t.length; n++) {
				var u = t[n][0](r);
				if (u) return [u, t[n][1]];
			}
			return [null, void 0];
		};
		w = function(r) {
			return "string" == typeof r ? j(r.trim(), $.string) : "object" == typeof r && null !== r ? j(r, $.object) : [null, void 0];
		};
		S = function(r) {
			return w(r)[1];
		};
		k = function(r, t) {
			var n = y(r);
			return {
				h: n.h,
				s: u(n.s + 100 * t, 0, 100),
				l: n.l,
				a: n.a
			};
		};
		E = function(r) {
			return (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 / 255;
		};
		R = function(r, t) {
			var n = y(r);
			return {
				h: n.h,
				s: n.s,
				l: u(n.l + 100 * t, 0, 100),
				a: n.a
			};
		};
		q = function() {
			function r(r) {
				this.parsed = w(r)[0], this.rgba = this.parsed || {
					r: 0,
					g: 0,
					b: 0,
					a: 1
				};
			}
			return r.prototype.isValid = function() {
				return null !== this.parsed;
			}, r.prototype.brightness = function() {
				return n(E(this.rgba), 2);
			}, r.prototype.isDark = function() {
				return E(this.rgba) < .5;
			}, r.prototype.isLight = function() {
				return E(this.rgba) >= .5;
			}, r.prototype.toHex = function() {
				return r = i(this.rgba), t = r.r, u = r.g, e = r.b, a = (o = r.a) < 1 ? g(n(255 * o)) : "", "#" + g(t) + g(u) + g(e) + a;
				var r, t, u, e, o, a;
			}, r.prototype.toRgb = function() {
				return i(this.rgba);
			}, r.prototype.toRgbString = function() {
				return r = i(this.rgba), t = r.r, n = r.g, u = r.b, (e = r.a) < 1 ? "rgba(" + t + ", " + n + ", " + u + ", " + e + ")" : "rgb(" + t + ", " + n + ", " + u + ")";
				var r, t, n, u, e;
			}, r.prototype.toHsl = function() {
				return p(y(this.rgba));
			}, r.prototype.toHslString = function() {
				return r = p(y(this.rgba)), t = r.h, n = r.s, u = r.l, (e = r.a) < 1 ? "hsla(" + t + ", " + n + "%, " + u + "%, " + e + ")" : "hsl(" + t + ", " + n + "%, " + u + "%)";
				var r, t, n, u, e;
			}, r.prototype.toHsv = function() {
				return r = c(this.rgba), {
					h: o(r.h),
					s: n(r.s),
					v: n(r.v),
					a: n(r.a, 3)
				};
				var r;
			}, r.prototype.invert = function() {
				return A({
					r: 255 - (r = this.rgba).r,
					g: 255 - r.g,
					b: 255 - r.b,
					a: r.a
				});
				var r;
			}, r.prototype.saturate = function(r) {
				return void 0 === r && (r = .1), A(k(this.rgba, r));
			}, r.prototype.desaturate = function(r) {
				return void 0 === r && (r = .1), A(k(this.rgba, -r));
			}, r.prototype.grayscale = function() {
				return A(k(this.rgba, -1));
			}, r.prototype.lighten = function(r) {
				return void 0 === r && (r = .1), A(R(this.rgba, r));
			}, r.prototype.darken = function(r) {
				return void 0 === r && (r = .1), A(R(this.rgba, -r));
			}, r.prototype.rotate = function(r) {
				return void 0 === r && (r = 15), this.hue(y(this.rgba).h + r);
			}, r.prototype.alpha = function(r) {
				return "number" == typeof r ? A({
					r: (t = this.rgba).r,
					g: t.g,
					b: t.b,
					a: r
				}) : n(this.rgba.a, 3);
				var t;
			}, r.prototype.hue = function(r) {
				var t = y(this.rgba);
				return "number" == typeof r ? A({
					h: r,
					s: t.s,
					l: t.l,
					a: t.a
				}) : o(t.h);
			}, r.prototype.isEqual = function(r) {
				return this.toHex() === A(r).toHex();
			}, r;
		}();
		A = function(r) {
			return r instanceof q ? r : new q(r);
		};
		C = [];
		D = function(r) {
			r.forEach(function(r) {
				C.indexOf(r) < 0 && (r(q, $), C.push(r));
			});
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/colord@2.10.0-Qx66Amv6c9C3nDPQDizV6Q/node_modules/colord/plugins/names.mjs
var e;
function init_names() {
	return (init_names = __esmMin((() => {
		e = function(e, f) {
			var a = {
				white: "#ffffff",
				bisque: "#ffe4c4",
				blue: "#0000ff",
				cadetblue: "#5f9ea0",
				chartreuse: "#7fff00",
				chocolate: "#d2691e",
				coral: "#ff7f50",
				antiquewhite: "#faebd7",
				aqua: "#00ffff",
				azure: "#f0ffff",
				whitesmoke: "#f5f5f5",
				papayawhip: "#ffefd5",
				plum: "#dda0dd",
				blanchedalmond: "#ffebcd",
				black: "#000000",
				gold: "#ffd700",
				goldenrod: "#daa520",
				gainsboro: "#dcdcdc",
				cornsilk: "#fff8dc",
				cornflowerblue: "#6495ed",
				burlywood: "#deb887",
				aquamarine: "#7fffd4",
				beige: "#f5f5dc",
				crimson: "#dc143c",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgoldenrod: "#b8860b",
				darkkhaki: "#bdb76b",
				darkgray: "#a9a9a9",
				darkgreen: "#006400",
				darkgrey: "#a9a9a9",
				peachpuff: "#ffdab9",
				darkmagenta: "#8b008b",
				darkred: "#8b0000",
				darkorchid: "#9932cc",
				darkorange: "#ff8c00",
				darkslateblue: "#483d8b",
				gray: "#808080",
				darkslategray: "#2f4f4f",
				darkslategrey: "#2f4f4f",
				deeppink: "#ff1493",
				deepskyblue: "#00bfff",
				wheat: "#f5deb3",
				firebrick: "#b22222",
				floralwhite: "#fffaf0",
				ghostwhite: "#f8f8ff",
				darkviolet: "#9400d3",
				magenta: "#ff00ff",
				green: "#008000",
				dodgerblue: "#1e90ff",
				grey: "#808080",
				honeydew: "#f0fff0",
				hotpink: "#ff69b4",
				blueviolet: "#8a2be2",
				forestgreen: "#228b22",
				lawngreen: "#7cfc00",
				indianred: "#cd5c5c",
				indigo: "#4b0082",
				fuchsia: "#ff00ff",
				brown: "#a52a2a",
				maroon: "#800000",
				mediumblue: "#0000cd",
				lightcoral: "#f08080",
				darkturquoise: "#00ced1",
				lightcyan: "#e0ffff",
				ivory: "#fffff0",
				lightyellow: "#ffffe0",
				lightsalmon: "#ffa07a",
				lightseagreen: "#20b2aa",
				linen: "#faf0e6",
				mediumaquamarine: "#66cdaa",
				lemonchiffon: "#fffacd",
				lime: "#00ff00",
				khaki: "#f0e68c",
				mediumseagreen: "#3cb371",
				limegreen: "#32cd32",
				mediumspringgreen: "#00fa9a",
				lightskyblue: "#87cefa",
				lightblue: "#add8e6",
				midnightblue: "#191970",
				lightpink: "#ffb6c1",
				mistyrose: "#ffe4e1",
				moccasin: "#ffe4b5",
				mintcream: "#f5fffa",
				lightslategray: "#778899",
				lightslategrey: "#778899",
				navajowhite: "#ffdead",
				navy: "#000080",
				mediumvioletred: "#c71585",
				powderblue: "#b0e0e6",
				palegoldenrod: "#eee8aa",
				oldlace: "#fdf5e6",
				paleturquoise: "#afeeee",
				mediumturquoise: "#48d1cc",
				mediumorchid: "#ba55d3",
				rebeccapurple: "#663399",
				lightsteelblue: "#b0c4de",
				mediumslateblue: "#7b68ee",
				thistle: "#d8bfd8",
				tan: "#d2b48c",
				orchid: "#da70d6",
				mediumpurple: "#9370db",
				purple: "#800080",
				pink: "#ffc0cb",
				skyblue: "#87ceeb",
				springgreen: "#00ff7f",
				palegreen: "#98fb98",
				red: "#ff0000",
				yellow: "#ffff00",
				slateblue: "#6a5acd",
				lavenderblush: "#fff0f5",
				peru: "#cd853f",
				palevioletred: "#db7093",
				violet: "#ee82ee",
				teal: "#008080",
				slategray: "#708090",
				slategrey: "#708090",
				aliceblue: "#f0f8ff",
				darkseagreen: "#8fbc8f",
				darkolivegreen: "#556b2f",
				greenyellow: "#adff2f",
				seagreen: "#2e8b57",
				seashell: "#fff5ee",
				tomato: "#ff6347",
				silver: "#c0c0c0",
				sienna: "#a0522d",
				lavender: "#e6e6fa",
				lightgreen: "#90ee90",
				orange: "#ffa500",
				orangered: "#ff4500",
				steelblue: "#4682b4",
				royalblue: "#4169e1",
				turquoise: "#40e0d0",
				yellowgreen: "#9acd32",
				salmon: "#fa8072",
				saddlebrown: "#8b4513",
				sandybrown: "#f4a460",
				rosybrown: "#bc8f8f",
				darksalmon: "#e9967a",
				lightgoldenrodyellow: "#fafad2",
				snow: "#fffafa",
				lightgrey: "#d3d3d3",
				lightgray: "#d3d3d3",
				dimgray: "#696969",
				dimgrey: "#696969",
				olivedrab: "#6b8e23",
				olive: "#808000"
			}, r = {};
			for (var d in a) r[a[d]] = d;
			var l = {};
			e.prototype.toName = function(f) {
				if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
				var d, i, n = r[this.toHex()];
				if (n) return n;
				if (null == f ? void 0 : f.closest) {
					var o = this.toRgb(), t = 1 / 0, b = "black";
					if (!l.length) for (var c in a) l[c] = new e(a[c]).toRgb();
					for (var g in a) {
						var u = (d = o, i = l[g], Math.pow(d.r - i.r, 2) + Math.pow(d.g - i.g, 2) + Math.pow(d.b - i.b, 2));
						u < t && (t = u, b = g);
					}
					return b;
				}
			};
			f.string.push([function(f) {
				var r = f.toLowerCase(), d = "transparent" === r ? "#0000" : a[r];
				return d ? new e(d).toRgb() : null;
			}, "name"]);
		};
	})))();
}
//#endregion
export { S as a, D as i, init_names as n, init_colord as o, A as r, e as t };
