import { t as __commonJSMin } from "./rolldown-runtime-CEgmsyvS.js";
//#region ../node_modules/.store/highlight-words-core@1.2.2-V8mfhTd10PD1GySAOmFhHA/node_modules/highlight-words-core/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = (function(modules) {
		var installedModules = {};
		function __webpack_require__(moduleId) {
			if (installedModules[moduleId]) return installedModules[moduleId].exports;
			var module$1 = installedModules[moduleId] = {
				exports: {},
				id: moduleId,
				loaded: false
			};
			modules[moduleId].call(module$1.exports, module$1, module$1.exports, __webpack_require__);
			module$1.loaded = true;
			return module$1.exports;
		}
		__webpack_require__.m = modules;
		__webpack_require__.c = installedModules;
		__webpack_require__.p = "";
		return __webpack_require__(0);
	})([
		(function(module$2, exports$1, __webpack_require__) {
			module$2.exports = __webpack_require__(1);
		}),
		(function(module$3, exports$2, __webpack_require__) {
			"use strict";
			Object.defineProperty(exports$2, "__esModule", { value: true });
			var _utils = __webpack_require__(2);
			Object.defineProperty(exports$2, "combineChunks", {
				enumerable: true,
				get: function get() {
					return _utils.combineChunks;
				}
			});
			Object.defineProperty(exports$2, "fillInChunks", {
				enumerable: true,
				get: function get() {
					return _utils.fillInChunks;
				}
			});
			Object.defineProperty(exports$2, "findAll", {
				enumerable: true,
				get: function get() {
					return _utils.findAll;
				}
			});
			Object.defineProperty(exports$2, "findChunks", {
				enumerable: true,
				get: function get() {
					return _utils.findChunks;
				}
			});
		}),
		(function(module$4, exports$3) {
			"use strict";
			Object.defineProperty(exports$3, "__esModule", { value: true });
			exports$3.findAll = function findAll(_ref) {
				var autoEscape = _ref.autoEscape, _ref$caseSensitive = _ref.caseSensitive, caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive, _ref$findChunks = _ref.findChunks, findChunks = _ref$findChunks === void 0 ? defaultFindChunks : _ref$findChunks, sanitize = _ref.sanitize, searchWords = _ref.searchWords, textToHighlight = _ref.textToHighlight;
				return fillInChunks({
					chunksToHighlight: combineChunks({ chunks: findChunks({
						autoEscape,
						caseSensitive,
						sanitize,
						searchWords,
						textToHighlight
					}) }),
					totalLength: textToHighlight ? textToHighlight.length : 0
				});
			};
			/**
			* Takes an array of {start:number, end:number} objects and combines chunks that overlap into single chunks.
			* @return {start:number, end:number}[]
			*/
			var combineChunks = exports$3.combineChunks = function combineChunks(_ref2) {
				var chunks = _ref2.chunks;
				chunks = chunks.sort(function(first, second) {
					return first.start - second.start;
				}).reduce(function(processedChunks, nextChunk) {
					if (processedChunks.length === 0) return [nextChunk];
					else {
						var prevChunk = processedChunks.pop();
						if (nextChunk.start <= prevChunk.end) {
							var endIndex = Math.max(prevChunk.end, nextChunk.end);
							processedChunks.push({
								highlight: false,
								start: prevChunk.start,
								end: endIndex
							});
						} else processedChunks.push(prevChunk, nextChunk);
						return processedChunks;
					}
				}, []);
				return chunks;
			};
			/**
			* Examine text for any matches.
			* If we find matches, add them to the returned array as a "chunk" object ({start:number, end:number}).
			* @return {start:number, end:number}[]
			*/
			var defaultFindChunks = function defaultFindChunks(_ref3) {
				var autoEscape = _ref3.autoEscape, caseSensitive = _ref3.caseSensitive, _ref3$sanitize = _ref3.sanitize, sanitize = _ref3$sanitize === void 0 ? defaultSanitize : _ref3$sanitize, searchWords = _ref3.searchWords, textToHighlight = _ref3.textToHighlight;
				textToHighlight = sanitize(textToHighlight);
				return searchWords.filter(function(searchWord) {
					return searchWord;
				}).reduce(function(chunks, searchWord) {
					searchWord = sanitize(searchWord);
					if (autoEscape) searchWord = escapeRegExpFn(searchWord);
					var regex = new RegExp(searchWord, caseSensitive ? "g" : "gi");
					var match = void 0;
					while (match = regex.exec(textToHighlight)) {
						var _start = match.index;
						var _end = regex.lastIndex;
						if (_end > _start) chunks.push({
							highlight: false,
							start: _start,
							end: _end
						});
						if (match.index === regex.lastIndex) regex.lastIndex++;
					}
					return chunks;
				}, []);
			};
			exports$3.findChunks = defaultFindChunks;
			/**
			* Given a set of chunks to highlight, create an additional set of chunks
			* to represent the bits of text between the highlighted text.
			* @param chunksToHighlight {start:number, end:number}[]
			* @param totalLength number
			* @return {start:number, end:number, highlight:boolean}[]
			*/
			var fillInChunks = exports$3.fillInChunks = function fillInChunks(_ref4) {
				var chunksToHighlight = _ref4.chunksToHighlight, totalLength = _ref4.totalLength;
				var allChunks = [];
				var append = function append(start, end, highlight) {
					if (end - start > 0) allChunks.push({
						start,
						end,
						highlight
					});
				};
				if (chunksToHighlight.length === 0) append(0, totalLength, false);
				else {
					var lastIndex = 0;
					chunksToHighlight.forEach(function(chunk) {
						append(lastIndex, chunk.start, false);
						append(chunk.start, chunk.end, true);
						lastIndex = chunk.end;
					});
					append(lastIndex, totalLength, false);
				}
				return allChunks;
			};
			function defaultSanitize(string) {
				return string;
			}
			function escapeRegExpFn(string) {
				return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			}
		})
	]);
}));
//#endregion
export { require_dist as t };
