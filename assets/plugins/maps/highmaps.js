/*
 Highmaps JS v10.2.0 (2022-07-05)

 (c) 2011-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (Y, H) { "object" === typeof module && module.exports ? (H["default"] = H, module.exports = Y.document ? H(Y) : H) : "function" === typeof define && define.amd ? define("highcharts/highmaps", function () { return H(Y) }) : (Y.Highcharts && Y.Highcharts.error(16, !0), Y.Highcharts = H(Y)) })("undefined" !== typeof window ? window : this, function (Y) {
    function H(c, I, f, D) { c.hasOwnProperty(I) || (c[I] = D.apply(null, f), "function" === typeof CustomEvent && Y.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: I, module: c[I] } }))) } var f =
        {}; H(f, "Core/Globals.js", [], function () {
            var c; (function (c) {
                c.SVG_NS = "http://www.w3.org/2000/svg"; c.product = "Highcharts"; c.version = "10.2.0"; c.win = "undefined" !== typeof Y ? Y : {}; c.doc = c.win.document; c.svg = c.doc && c.doc.createElementNS && !!c.doc.createElementNS(c.SVG_NS, "svg").createSVGRect; c.userAgent = c.win.navigator && c.win.navigator.userAgent || ""; c.isChrome = -1 !== c.userAgent.indexOf("Chrome"); c.isFirefox = -1 !== c.userAgent.indexOf("Firefox"); c.isMS = /(edge|msie|trident)/i.test(c.userAgent) && !c.win.opera; c.isSafari =
                    !c.isChrome && -1 !== c.userAgent.indexOf("Safari"); c.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(c.userAgent); c.isWebKit = -1 !== c.userAgent.indexOf("AppleWebKit"); c.deg2rad = 2 * Math.PI / 360; c.hasBidiBug = c.isFirefox && 4 > parseInt(c.userAgent.split("Firefox/")[1], 10); c.hasTouch = !!c.win.TouchEvent; c.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"]; c.noop = function () { }; c.supportsPassiveEvents = function () {
                        var f = !1; if (!c.isMS) {
                            var I = Object.defineProperty({}, "passive", { get: function () { f = !0 } });
                            c.win.addEventListener && c.win.removeEventListener && (c.win.addEventListener("testPassive", c.noop, I), c.win.removeEventListener("testPassive", c.noop, I))
                        } return f
                    }(); c.charts = []; c.dateFormats = {}; c.seriesTypes = {}; c.symbolSizes = {}; c.chartCount = 0
            })(c || (c = {})); ""; return c
        }); H(f, "Core/Utilities.js", [f["Core/Globals.js"]], function (c) {
            function f(m, x, e, g) {
                var b = x ? "Highcharts error" : "Highcharts warning"; 32 === m && (m = "" + b + ": Deprecated member"); var d = n(m), w = d ? "" + b + " #" + m + ": www.highcharts.com/errors/" + m + "/" : m.toString();
                if ("undefined" !== typeof g) { var q = ""; d && (w += "?"); t(g, function (m, a) { q += "\n - ".concat(a, ": ").concat(m); d && (w += encodeURI(a) + "=" + encodeURI(m)) }); w += q } l(c, "displayError", { chart: e, code: m, message: w, params: g }, function () { if (x) throw Error(w); a.console && -1 === f.messages.indexOf(w) && console.warn(w) }); f.messages.push(w)
            } function v(m, a) { var x = {}; t(m, function (e, g) { if (F(m[g], !0) && !m.nodeType && a[g]) e = v(m[g], a[g]), Object.keys(e).length && (x[g] = e); else if (F(m[g]) || m[g] !== a[g] || g in m && !(g in a)) x[g] = m[g] }); return x }
            function D(m, a) { return parseInt(m, a || 10) } function r(m) { return "string" === typeof m } function C(m) { m = Object.prototype.toString.call(m); return "[object Array]" === m || "[object Array Iterator]" === m } function F(m, a) { return !!m && "object" === typeof m && (!a || !C(m)) } function A(m) { return F(m) && "number" === typeof m.nodeType } function u(m) { var a = m && m.constructor; return !(!F(m, !0) || A(m) || !a || !a.name || "Object" === a.name) } function n(m) { return "number" === typeof m && !isNaN(m) && Infinity > m && -Infinity < m } function k(m) {
                return "undefined" !==
                    typeof m && null !== m
            } function d(m, a, e) { var x = r(a) && !k(e), g, l = function (a, e) { k(a) ? m.setAttribute(e, a) : x ? (g = m.getAttribute(e)) || "class" !== e || (g = m.getAttribute(e + "Name")) : m.removeAttribute(e) }; r(a) ? l(e, a) : t(a, l); return g } function b(m, a) { var x; m || (m = {}); for (x in a) m[x] = a[x]; return m } function h() { for (var m = arguments, a = m.length, e = 0; e < a; e++) { var g = m[e]; if ("undefined" !== typeof g && null !== g) return g } } function p(m, a) {
                c.isMS && !c.svg && a && k(a.opacity) && (a.filter = "alpha(opacity=".concat(100 * a.opacity, ")")); b(m.style,
                    a)
            } function z(m) { return Math.pow(10, Math.floor(Math.log(m) / Math.LN10)) } function E(m, a) { return 1E14 < m ? m : parseFloat(m.toPrecision(a || 14)) } function y(m, e, g) {
                var x = c.getStyle || y; if ("width" === e) return e = Math.min(m.offsetWidth, m.scrollWidth), g = m.getBoundingClientRect && m.getBoundingClientRect().width, g < e && g >= e - 1 && (e = Math.floor(g)), Math.max(0, e - (x(m, "padding-left", !0) || 0) - (x(m, "padding-right", !0) || 0)); if ("height" === e) return Math.max(0, Math.min(m.offsetHeight, m.scrollHeight) - (x(m, "padding-top", !0) || 0) - (x(m,
                    "padding-bottom", !0) || 0)); a.getComputedStyle || f(27, !0); if (m = a.getComputedStyle(m, void 0)) { var l = m.getPropertyValue(e); h(g, "opacity" !== e) && (l = D(l)) } return l
            } function t(m, a, e) { for (var g in m) Object.hasOwnProperty.call(m, g) && a.call(e || m[g], m[g], g, m) } function q(m, a, e) {
                function g(a, e) { var g = m.removeEventListener || c.removeEventListenerPolyfill; g && g.call(m, a, e, !1) } function x(e) { var x; if (m.nodeName) { if (a) { var l = {}; l[a] = !0 } else l = e; t(l, function (m, a) { if (e[a]) for (x = e[a].length; x--;)g(a, e[a][x].fn) }) } } var l =
                    "function" === typeof m && m.prototype || m; if (Object.hasOwnProperty.call(l, "hcEvents")) { var b = l.hcEvents; a ? (l = b[a] || [], e ? (b[a] = l.filter(function (m) { return e !== m.fn }), g(a, e)) : (x(b), b[a] = [])) : (x(b), delete l.hcEvents) }
            } function l(m, a, e, g) {
                e = e || {}; if (w.createEvent && (m.dispatchEvent || m.fireEvent && m !== c)) { var x = w.createEvent("Events"); x.initEvent(a, !0, !0); e = b(x, e); m.dispatchEvent ? m.dispatchEvent(e) : m.fireEvent(a, e) } else if (m.hcEvents) {
                    e.target || b(e, {
                        preventDefault: function () { e.defaultPrevented = !0 }, target: m,
                        type: a
                    }); x = []; for (var l = m, d = !1; l.hcEvents;)Object.hasOwnProperty.call(l, "hcEvents") && l.hcEvents[a] && (x.length && (d = !0), x.unshift.apply(x, l.hcEvents[a])), l = Object.getPrototypeOf(l); d && x.sort(function (a, m) { return a.order - m.order }); x.forEach(function (a) { !1 === a.fn.call(m, e) && e.preventDefault() })
                } g && !e.defaultPrevented && g.call(m, e)
            } var g = c.charts, w = c.doc, a = c.win; (f || (f = {})).messages = []; Math.easeInOutSine = function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) }; var B = Array.prototype.find ? function (a, e) { return a.find(e) } :
                function (a, e) { var m, g = a.length; for (m = 0; m < g; m++)if (e(a[m], m)) return a[m] }; t({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (a, e) { c[e] = function (m) { var g; f(32, !1, void 0, (g = {}, g["Highcharts.".concat(e)] = "use Array.".concat(a), g)); return Array.prototype[a].apply(m, [].slice.call(arguments, 1)) } }); var e, G = function () { var a = Math.random().toString(36).substring(2, 9) + "-", g = 0; return function () { return "highcharts-" + (e ? "" : a) + g++ } }(); a.jQuery && (a.jQuery.fn.highcharts = function () {
                    var a =
                        [].slice.call(arguments); if (this[0]) return a[0] ? (new (c[r(a[0]) ? a.shift() : "Chart"])(this[0], a[0], a[1]), this) : g[d(this[0], "data-highcharts-chart")]
                }); B = {
                    addEvent: function (a, e, g, l) {
                        void 0 === l && (l = {}); var m = "function" === typeof a && a.prototype || a; Object.hasOwnProperty.call(m, "hcEvents") || (m.hcEvents = {}); m = m.hcEvents; c.Point && a instanceof c.Point && a.series && a.series.chart && (a.series.chart.runTrackerClick = !0); var x = a.addEventListener || c.addEventListenerPolyfill; x && x.call(a, e, g, c.supportsPassiveEvents ? {
                            passive: void 0 ===
                                l.passive ? -1 !== e.indexOf("touch") : l.passive, capture: !1
                        } : !1); m[e] || (m[e] = []); m[e].push({ fn: g, order: "number" === typeof l.order ? l.order : Infinity }); m[e].sort(function (a, m) { return a.order - m.order }); return function () { q(a, e, g) }
                    }, arrayMax: function (a) { for (var m = a.length, e = a[0]; m--;)a[m] > e && (e = a[m]); return e }, arrayMin: function (a) { for (var m = a.length, e = a[0]; m--;)a[m] < e && (e = a[m]); return e }, attr: d, clamp: function (a, e, g) { return a > e ? a < g ? a : g : e }, cleanRecursively: v, clearTimeout: function (a) { k(a) && clearTimeout(a) }, correctFloat: E,
                    createElement: function (a, e, g, l, d) { a = w.createElement(a); e && b(a, e); d && p(a, { padding: "0", border: "none", margin: "0" }); g && p(a, g); l && l.appendChild(a); return a }, css: p, defined: k, destroyObjectProperties: function (a, e) { t(a, function (m, g) { m && m !== e && m.destroy && m.destroy(); delete a[g] }) }, discardElement: function (a) { a && a.parentElement && a.parentElement.removeChild(a) }, erase: function (a, e) { for (var m = a.length; m--;)if (a[m] === e) { a.splice(m, 1); break } }, error: f, extend: b, extendClass: function (a, e) {
                        var m = function () { }; m.prototype =
                            new a; b(m.prototype, e); return m
                    }, find: B, fireEvent: l, getMagnitude: z, getNestedProperty: function (m, e) { for (m = m.split("."); m.length && k(e);) { var g = m.shift(); if ("undefined" === typeof g || "__proto__" === g) return; e = e[g]; if (!k(e) || "function" === typeof e || "number" === typeof e.nodeType || e === a) return } return e }, getStyle: y, inArray: function (a, e, g) { f(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }); return e.indexOf(a, g) }, isArray: C, isClass: u, isDOMElement: A, isFunction: function (a) { return "function" === typeof a }, isNumber: n,
                    isObject: F, isString: r, keys: function (a) { f(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }); return Object.keys(a) }, merge: function () { var a, e = arguments, g = {}, l = function (a, e) { "object" !== typeof a && (a = {}); t(e, function (m, g) { "__proto__" !== g && "constructor" !== g && (!F(m, !0) || u(m) || A(m) ? a[g] = e[g] : a[g] = l(a[g] || {}, m)) }); return a }; !0 === e[0] && (g = e[1], e = Array.prototype.slice.call(e, 2)); var b = e.length; for (a = 0; a < b; a++)g = l(g, e[a]); return g }, normalizeTickInterval: function (a, e, g, l, b) {
                        var m = a; g = h(g, z(a)); var x = a / g; e || (e =
                            b ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === l && (1 === g ? e = e.filter(function (a) { return 0 === a % 1 }) : .1 >= g && (e = [1 / g]))); for (l = 0; l < e.length && !(m = e[l], b && m * g >= a || !b && x <= (e[l] + (e[l + 1] || e[l])) / 2); l++); return m = E(m * g, -Math.round(Math.log(.001) / Math.LN10))
                    }, objectEach: t, offset: function (e) {
                        var m = w.documentElement; e = e.parentElement || e.parentNode ? e.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 }; return {
                            top: e.top + (a.pageYOffset || m.scrollTop) - (m.clientTop || 0), left: e.left + (a.pageXOffset || m.scrollLeft) -
                                (m.clientLeft || 0), width: e.width, height: e.height
                        }
                    }, pad: function (a, e, g) { return Array((e || 2) + 1 - String(a).replace("-", "").length).join(g || "0") + a }, pick: h, pInt: D, relativeLength: function (a, e, g) { return /%$/.test(a) ? e * parseFloat(a) / 100 + (g || 0) : parseFloat(a) }, removeEvent: q, splat: function (a) { return C(a) ? a : [a] }, stableSort: function (a, e) { var g = a.length, m, l; for (l = 0; l < g; l++)a[l].safeI = l; a.sort(function (a, g) { m = e(a, g); return 0 === m ? a.safeI - g.safeI : m }); for (l = 0; l < g; l++)delete a[l].safeI }, syncTimeout: function (a, e, g) {
                        if (0 <
                            e) return setTimeout(a, e, g); a.call(0, g); return -1
                    }, timeUnits: { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }, uniqueKey: G, useSerialIds: function (a) { return e = h(a, e) }, wrap: function (a, e, g) { var m = a[e]; a[e] = function () { var a = Array.prototype.slice.call(arguments), e = arguments, l = this; l.proceed = function () { m.apply(l, arguments.length ? arguments : e) }; a.unshift(m); a = g.apply(this, a); l.proceed = null; return a } }
                }; ""; return B
        }); H(f, "Core/Chart/ChartDefaults.js", [], function () {
            return {
                alignThresholds: !1,
                panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: !1, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
            }
        }); H(f, "Core/Color/Color.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f) {
            var I = f.isNumber, D = f.merge, r = f.pInt; f = function () {
                function f(F) {
                    this.rgba =
                        [NaN, NaN, NaN, NaN]; this.input = F; var A = c.Color; if (A && A !== f) return new A(F); if (!(this instanceof f)) return new f(F); this.init(F)
                } f.parse = function (c) { return c ? new f(c) : f.None }; f.prototype.init = function (c) {
                    var A; if ("object" === typeof c && "undefined" !== typeof c.stops) this.stops = c.stops.map(function (d) { return new f(d[1]) }); else if ("string" === typeof c) {
                        this.input = c = f.names[c.toLowerCase()] || c; if ("#" === c.charAt(0)) {
                            var u = c.length; var n = parseInt(c.substr(1), 16); 7 === u ? A = [(n & 16711680) >> 16, (n & 65280) >> 8, n & 255, 1] :
                                4 === u && (A = [(n & 3840) >> 4 | (n & 3840) >> 8, (n & 240) >> 4 | n & 240, (n & 15) << 4 | n & 15, 1])
                        } if (!A) for (n = f.parsers.length; n-- && !A;) { var k = f.parsers[n]; (u = k.regex.exec(c)) && (A = k.parse(u)) }
                    } A && (this.rgba = A)
                }; f.prototype.get = function (c) {
                    var A = this.input, u = this.rgba; if ("object" === typeof A && "undefined" !== typeof this.stops) { var n = D(A); n.stops = [].slice.call(n.stops); this.stops.forEach(function (k, d) { n.stops[d] = [n.stops[d][0], k.get(c)] }); return n } return u && I(u[0]) ? "rgb" === c || !c && 1 === u[3] ? "rgb(" + u[0] + "," + u[1] + "," + u[2] + ")" : "a" ===
                        c ? "".concat(u[3]) : "rgba(" + u.join(",") + ")" : A
                }; f.prototype.brighten = function (c) { var A = this.rgba; if (this.stops) this.stops.forEach(function (n) { n.brighten(c) }); else if (I(c) && 0 !== c) for (var u = 0; 3 > u; u++)A[u] += r(255 * c), 0 > A[u] && (A[u] = 0), 255 < A[u] && (A[u] = 255); return this }; f.prototype.setOpacity = function (c) { this.rgba[3] = c; return this }; f.prototype.tweenTo = function (c, A) {
                    var u = this.rgba, n = c.rgba; if (!I(u[0]) || !I(n[0])) return c.input || "none"; c = 1 !== n[3] || 1 !== u[3]; return (c ? "rgba(" : "rgb(") + Math.round(n[0] + (u[0] - n[0]) *
                        (1 - A)) + "," + Math.round(n[1] + (u[1] - n[1]) * (1 - A)) + "," + Math.round(n[2] + (u[2] - n[2]) * (1 - A)) + (c ? "," + (n[3] + (u[3] - n[3]) * (1 - A)) : "") + ")"
                }; f.names = { white: "#ffffff", black: "#000000" }; f.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (c) { return [r(c[1]), r(c[2]), r(c[3]), parseFloat(c[4], 10)] } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (c) { return [r(c[1]), r(c[2]), r(c[3]), 1] } }]; f.None = new f(""); return f
            }();
            ""; return f
        }); H(f, "Core/Color/Palettes.js", [], function () { return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") } }); H(f, "Core/Time.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f) {
            var I = c.win, D = f.defined, r = f.error, C = f.extend, F = f.isObject, A = f.merge, u = f.objectEach, n = f.pad, k = f.pick, d = f.splat, b = f.timeUnits, h = c.isSafari && I.Intl && I.Intl.DateTimeFormat.prototype.formatRange, p = c.isSafari && I.Intl && !I.Intl.DateTimeFormat.prototype.formatRange;
            f = function () {
                function z(b) { this.options = {}; this.variableTimezone = this.useUTC = !1; this.Date = I.Date; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.update(b) } z.prototype.get = function (b, d) { if (this.variableTimezone || this.timezoneOffset) { var h = d.getTime(), q = h - this.getTimezoneOffset(d); d.setTime(q); b = d["getUTC" + b](); d.setTime(h); return b } return this.useUTC ? d["getUTC" + b]() : d["get" + b]() }; z.prototype.set = function (b, d, t) {
                    if (this.variableTimezone || this.timezoneOffset) {
                        if ("Milliseconds" === b || "Seconds" ===
                            b || "Minutes" === b && 0 === this.getTimezoneOffset(d) % 36E5) return d["setUTC" + b](t); var q = this.getTimezoneOffset(d); q = d.getTime() - q; d.setTime(q); d["setUTC" + b](t); b = this.getTimezoneOffset(d); q = d.getTime() + b; return d.setTime(q)
                    } return this.useUTC || h && "FullYear" === b ? d["setUTC" + b](t) : d["set" + b](t)
                }; z.prototype.update = function (b) {
                    var d = k(b && b.useUTC, !0); this.options = b = A(!0, this.options || {}, b); this.Date = b.Date || I.Date || Date; this.timezoneOffset = (this.useUTC = d) && b.timezoneOffset || void 0; this.getTimezoneOffset = this.timezoneOffsetFunction();
                    this.variableTimezone = d && !(!b.getTimezoneOffset && !b.timezone)
                }; z.prototype.makeTime = function (b, d, h, q, l, g) { if (this.useUTC) { var w = this.Date.UTC.apply(0, arguments); var a = this.getTimezoneOffset(w); w += a; var B = this.getTimezoneOffset(w); a !== B ? w += B - a : a - 36E5 !== this.getTimezoneOffset(w - 36E5) || p || (w -= 36E5) } else w = (new this.Date(b, d, k(h, 1), k(q, 0), k(l, 0), k(g, 0))).getTime(); return w }; z.prototype.timezoneOffsetFunction = function () {
                    var b = this, d = this.options, h = d.getTimezoneOffset, q = d.moment || I.moment; if (!this.useUTC) return function (l) {
                        return 6E4 *
                            (new Date(l.toString())).getTimezoneOffset()
                    }; if (d.timezone) { if (q) return function (l) { return 6E4 * -q.tz(l, d.timezone).utcOffset() }; r(25) } return this.useUTC && h ? function (l) { return 6E4 * h(l.valueOf()) } : function () { return 6E4 * (b.timezoneOffset || 0) }
                }; z.prototype.dateFormat = function (b, d, h) {
                    if (!D(d) || isNaN(d)) return c.defaultOptions.lang && c.defaultOptions.lang.invalidDate || ""; b = k(b, "%Y-%m-%d %H:%M:%S"); var q = this, l = new this.Date(d), g = this.get("Hours", l), w = this.get("Day", l), a = this.get("Date", l), B = this.get("Month",
                        l), e = this.get("FullYear", l), t = c.defaultOptions.lang, m = t && t.weekdays, x = t && t.shortWeekdays; l = C({ a: x ? x[w] : m[w].substr(0, 3), A: m[w], d: n(a), e: n(a, 2, " "), w: w, b: t.shortMonths[B], B: t.months[B], m: n(B + 1), o: B + 1, y: e.toString().substr(2, 2), Y: e, H: n(g), k: g, I: n(g % 12 || 12), l: g % 12 || 12, M: n(this.get("Minutes", l)), p: 12 > g ? "AM" : "PM", P: 12 > g ? "am" : "pm", S: n(l.getSeconds()), L: n(Math.floor(d % 1E3), 3) }, c.dateFormats); u(l, function (a, e) { for (; -1 !== b.indexOf("%" + e);)b = b.replace("%" + e, "function" === typeof a ? a.call(q, d) : a) }); return h ? b.substr(0,
                            1).toUpperCase() + b.substr(1) : b
                }; z.prototype.resolveDTLFormat = function (b) { return F(b, !0) ? b : (b = d(b), { main: b[0], from: b[1], to: b[2] }) }; z.prototype.getTimeTicks = function (d, h, t, q) {
                    var l = this, g = [], w = {}, a = new l.Date(h), B = d.unitRange, e = d.count || 1, p; q = k(q, 1); if (D(h)) {
                        l.set("Milliseconds", a, B >= b.second ? 0 : e * Math.floor(l.get("Milliseconds", a) / e)); B >= b.second && l.set("Seconds", a, B >= b.minute ? 0 : e * Math.floor(l.get("Seconds", a) / e)); B >= b.minute && l.set("Minutes", a, B >= b.hour ? 0 : e * Math.floor(l.get("Minutes", a) / e)); B >= b.hour &&
                            l.set("Hours", a, B >= b.day ? 0 : e * Math.floor(l.get("Hours", a) / e)); B >= b.day && l.set("Date", a, B >= b.month ? 1 : Math.max(1, e * Math.floor(l.get("Date", a) / e))); if (B >= b.month) { l.set("Month", a, B >= b.year ? 0 : e * Math.floor(l.get("Month", a) / e)); var m = l.get("FullYear", a) } B >= b.year && l.set("FullYear", a, m - m % e); B === b.week && (m = l.get("Day", a), l.set("Date", a, l.get("Date", a) - m + q + (m < q ? -7 : 0))); m = l.get("FullYear", a); q = l.get("Month", a); var x = l.get("Date", a), z = l.get("Hours", a); h = a.getTime(); !l.variableTimezone && l.useUTC || !D(t) || (p = t -
                                h > 4 * b.month || l.getTimezoneOffset(h) !== l.getTimezoneOffset(t)); h = a.getTime(); for (a = 1; h < t;)g.push(h), h = B === b.year ? l.makeTime(m + a * e, 0) : B === b.month ? l.makeTime(m, q + a * e) : !p || B !== b.day && B !== b.week ? p && B === b.hour && 1 < e ? l.makeTime(m, q, x, z + a * e) : h + B * e : l.makeTime(m, q, x + a * e * (B === b.day ? 1 : 7)), a++; g.push(h); B <= b.hour && 1E4 > g.length && g.forEach(function (a) { 0 === a % 18E5 && "000000000" === l.dateFormat("%H%M%S%L", a) && (w[a] = "day") })
                    } g.info = C(d, { higherRanks: w, totalRange: B * e }); return g
                }; z.prototype.getDateFormat = function (d, h, t,
                    q) { var l = this.dateFormat("%m-%d %H:%M:%S.%L", h), g = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, w = "millisecond"; for (a in b) { if (d === b.week && +this.dateFormat("%w", h) === t && "00:00:00.000" === l.substr(6)) { var a = "week"; break } if (b[a] > d) { a = w; break } if (g[a] && l.substr(g[a]) !== "01-01 00:00:00.000".substr(g[a])) break; "week" !== a && (w = a) } return this.resolveDTLFormat(q[a]).main }; return z
            }(); ""; return f
        }); H(f, "Core/DefaultOptions.js", [f["Core/Chart/ChartDefaults.js"], f["Core/Color/Color.js"], f["Core/Globals.js"],
        f["Core/Color/Palettes.js"], f["Core/Time.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C) {
            f = f.parse; var I = C.merge, A = {
                colors: D.colors, symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
                    loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".",
                    numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "
                }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: !0 }, chart: c, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                    enabled: !0, align: "center",
                    alignColumns: !0, className: "highcharts-no-tooltip", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom",
                    x: 0, y: 0, title: { style: { fontWeight: "bold" } }
                }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: {
                    enabled: !0, animation: v.svg, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", headerShape: "callout",
                    hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: v.isTouchDevice ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: f("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }, useHTML: !1
                }, credits: {
                    enabled: !0, href: "https://www.highcharts.com?credits", position: {
                        align: "right",
                        x: -10, verticalAlign: "bottom", y: -5
                    }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com"
                }
            }; A.chart.styledMode = !1; ""; var u = new r(I(A.global, A.time)); c = { defaultOptions: A, defaultTime: u, getOptions: function () { return A }, setOptions: function (n) { I(!0, A, n); if (n.time || n.global) v.time ? v.time.update(I(A.global, A.time, n.global, n.time)) : v.time = u; return A } }; ""; return c
        }); H(f, "Core/Animation/Fx.js", [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f, v) {
            var I =
                c.parse, r = f.win, C = v.isNumber, F = v.objectEach; return function () {
                    function c(c, n, k) { this.pos = NaN; this.options = n; this.elem = c; this.prop = k } c.prototype.dSetter = function () { var c = this.paths, n = c && c[0]; c = c && c[1]; var k = this.now || 0, d = []; if (1 !== k && n && c) if (n.length === c.length && 1 > k) for (var b = 0; b < c.length; b++) { for (var h = n[b], p = c[b], z = [], E = 0; E < p.length; E++) { var y = h[E], t = p[E]; C(y) && C(t) && ("A" !== p[0] || 4 !== E && 5 !== E) ? z[E] = y + k * (t - y) : z[E] = t } d.push(z) } else d = c; else d = this.toD || []; this.elem.attr("d", d, void 0, !0) }; c.prototype.update =
                        function () { var c = this.elem, n = this.prop, k = this.now, d = this.options.step; if (this[n + "Setter"]) this[n + "Setter"](); else c.attr ? c.element && c.attr(n, k, null, !0) : c.style[n] = k + this.unit; d && d.call(c, k, this) }; c.prototype.run = function (u, n, k) {
                            var d = this, b = d.options, h = function (b) { return h.stopped ? !1 : d.step(b) }, p = r.requestAnimationFrame || function (b) { setTimeout(b, 13) }, z = function () { for (var b = 0; b < c.timers.length; b++)c.timers[b]() || c.timers.splice(b--, 1); c.timers.length && p(z) }; u !== n || this.elem["forceAnimate:" + this.prop] ?
                                (this.startTime = +new Date, this.start = u, this.end = n, this.unit = k, this.now = this.start, this.pos = 0, h.elem = this.elem, h.prop = this.prop, h() && 1 === c.timers.push(h) && p(z)) : (delete b.curAnim[this.prop], b.complete && 0 === Object.keys(b.curAnim).length && b.complete.call(this.elem))
                        }; c.prototype.step = function (c) {
                            var n = +new Date, k = this.options, d = this.elem, b = k.complete, h = k.duration, p = k.curAnim; if (d.attr && !d.element) c = !1; else if (c || n >= h + this.startTime) {
                                this.now = this.end; this.pos = 1; this.update(); var z = p[this.prop] = !0; F(p,
                                    function (b) { !0 !== b && (z = !1) }); z && b && b.call(d); c = !1
                            } else this.pos = k.easing((n - this.startTime) / h), this.now = this.start + (this.end - this.start) * this.pos, this.update(), c = !0; return c
                        }; c.prototype.initPath = function (c, n, k) {
                            function d(b, g) { for (; b.length < q;) { var l = b[0], a = g[q - b.length]; a && "M" === l[0] && (b[0] = "C" === a[0] ? ["C", l[1], l[2], l[1], l[2], l[1], l[2]] : ["L", l[1], l[2]]); b.unshift(l); z && (l = b.pop(), b.push(b[b.length - 1], l)) } } function b(b, g) {
                                for (; b.length < q;)if (g = b[Math.floor(b.length / E) - 1].slice(), "C" === g[0] && (g[1] =
                                    g[5], g[2] = g[6]), z) { var l = b[Math.floor(b.length / E)].slice(); b.splice(b.length / 2, 0, g, l) } else b.push(g)
                            } var h = c.startX, p = c.endX; k = k.slice(); var z = c.isArea, E = z ? 2 : 1; n = n && n.slice(); if (!n) return [k, k]; if (h && p && p.length) { for (c = 0; c < h.length; c++)if (h[c] === p[0]) { var y = c; break } else if (h[0] === p[p.length - h.length + c]) { y = c; var t = !0; break } else if (h[h.length - 1] === p[p.length - h.length + c]) { y = h.length - c; break } "undefined" === typeof y && (n = []) } if (n.length && C(y)) { var q = k.length + y * E; t ? (d(n, k), b(k, n)) : (d(k, n), b(n, k)) } return [n,
                                k]
                        }; c.prototype.fillSetter = function () { c.prototype.strokeSetter.apply(this, arguments) }; c.prototype.strokeSetter = function () { this.elem.attr(this.prop, I(this.start).tweenTo(I(this.end), this.pos), void 0, !0) }; c.timers = []; return c
                }()
        }); H(f, "Core/Animation/AnimationUtilities.js", [f["Core/Animation/Fx.js"], f["Core/Utilities.js"]], function (c, f) {
            function I(b) { return u(b) ? n({ duration: 500, defer: 0 }, b) : { duration: b ? 500 : 0, defer: 0 } } function D(b, d) {
                for (var h = c.timers.length; h--;)c.timers[h].elem !== b || d && d !== c.timers[h].prop ||
                    (c.timers[h].stopped = !0)
            } var r = f.defined, C = f.getStyle, F = f.isArray, A = f.isNumber, u = f.isObject, n = f.merge, k = f.objectEach, d = f.pick; return {
                animate: function (b, d, p) {
                    var h, E = "", y, t; if (!u(p)) { var q = arguments; p = { duration: q[2], easing: q[3], complete: q[4] } } A(p.duration) || (p.duration = 400); p.easing = "function" === typeof p.easing ? p.easing : Math[p.easing] || Math.easeInOutSine; p.curAnim = n(d); k(d, function (l, g) {
                        D(b, g); t = new c(b, p, g); y = void 0; "d" === g && F(d.d) ? (t.paths = t.initPath(b, b.pathArray, d.d), t.toD = d.d, h = 0, y = 1) : b.attr ?
                            h = b.attr(g) : (h = parseFloat(C(b, g)) || 0, "opacity" !== g && (E = "px")); y || (y = l); "string" === typeof y && y.match("px") && (y = y.replace(/px/g, "")); t.run(h, y, E)
                    })
                }, animObject: I, getDeferredAnimation: function (b, d, p) { var h = I(d), k = 0, y = 0; (p ? [p] : b.series).forEach(function (b) { b = I(b.options.animation); k = d && r(d.defer) ? h.defer : Math.max(k, b.duration + b.defer); y = Math.min(h.duration, b.duration) }); b.renderer.forExport && (k = 0); return { defer: Math.max(0, k - y), duration: Math.min(k, y) } }, setAnimation: function (b, h) {
                    h.renderer.globalAnimation =
                        d(b, h.options.chart.animation, !0)
                }, stop: D
            }
        }); H(f, "Core/Renderer/HTML/AST.js", [f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f) {
            var I = c.SVG_NS, D = f.attr, r = f.createElement, C = f.css, F = f.error, A = f.isFunction, u = f.isString, n = f.objectEach, k = f.splat, d = (f = c.win.trustedTypes) && A(f.createPolicy) && f.createPolicy("highcharts", { createHTML: function (b) { return b } }), b = d ? d.createHTML("") : ""; try { var h = !!(new DOMParser).parseFromString(b, "text/html") } catch (p) { h = !1 } A = function () {
                function p(b) {
                    this.nodes = "string" ===
                        typeof b ? this.parseMarkup(b) : b
                } p.filterUserAttributes = function (b) { n(b, function (d, h) { var t = !0; -1 === p.allowedAttributes.indexOf(h) && (t = !1); -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(h) && (t = u(d) && p.allowedReferences.some(function (b) { return 0 === d.indexOf(b) })); t || (F(33, !1, void 0, { "Invalid attribute in config": "".concat(h) }), delete b[h]) }); return b }; p.parseStyle = function (b) {
                    return b.split(";").reduce(function (b, d) {
                        d = d.split(":").map(function (b) { return b.trim() }); var h = d.shift(); h && d.length &&
                            (b[h.replace(/-([a-z])/g, function (b) { return b[1].toUpperCase() })] = d.join(":")); return b
                    }, {})
                }; p.setElementHTML = function (b, d) { b.innerHTML = p.emptyHTML; d && (new p(d)).addToDOM(b) }; p.prototype.addToDOM = function (b) {
                    function d(b, h) {
                        var q; k(b).forEach(function (b) {
                            var g = b.tagName, l = b.textContent ? c.doc.createTextNode(b.textContent) : void 0, a = p.bypassHTMLFiltering; if (g) if ("#text" === g) var B = l; else if (-1 !== p.allowedTags.indexOf(g) || a) {
                                g = c.doc.createElementNS("svg" === g ? I : h.namespaceURI || I, g); var e = b.attributes ||
                                    {}; n(b, function (a, g) { "tagName" !== g && "attributes" !== g && "children" !== g && "style" !== g && "textContent" !== g && (e[g] = a) }); D(g, a ? e : p.filterUserAttributes(e)); b.style && C(g, b.style); l && g.appendChild(l); d(b.children || [], g); B = g
                            } else F(33, !1, void 0, { "Invalid tagName in config": g }); B && h.appendChild(B); q = B
                        }); return q
                    } return d(this.nodes, b)
                }; p.prototype.parseMarkup = function (b) {
                    var k = []; b = b.trim().replace(/ style="/g, ' data-style="'); if (h) b = (new DOMParser).parseFromString(d ? d.createHTML(b) : b, "text/html"); else {
                        var z =
                            r("div"); z.innerHTML = b; b = { body: z }
                    } var t = function (b, d) { var g = b.nodeName.toLowerCase(), l = { tagName: g }; "#text" === g && (l.textContent = b.textContent || ""); if (g = b.attributes) { var a = {};[].forEach.call(g, function (e) { "data-style" === e.name ? l.style = p.parseStyle(e.value) : a[e.name] = e.value }); l.attributes = a } if (b.childNodes.length) { var h = [];[].forEach.call(b.childNodes, function (a) { t(a, h) }); h.length && (l.children = h) } d.push(l) };[].forEach.call(b.body.childNodes, function (b) { return t(b, k) }); return k
                }; p.allowedAttributes =
                    "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength title type valign width x x1 x2 y y1 y2 zIndex".split(" ");
                p.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "); p.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" "); p.emptyHTML = b; p.bypassHTMLFiltering = !1; return p
            }(); ""; return A
        });
    H(f, "Core/FormatUtilities.js", [f["Core/DefaultOptions.js"], f["Core/Utilities.js"]], function (c, f) {
        function I(n, k, d, b) {
            n = +n || 0; k = +k; var h = D.lang, p = (n.toString().split(".")[1] || "").split("e")[0].length, z = n.toString().split("e"), E = k; if (-1 === k) k = Math.min(p, 20); else if (!F(k)) k = 2; else if (k && z[1] && 0 > z[1]) { var y = k + +z[1]; 0 <= y ? (z[0] = (+z[0]).toExponential(y).split("e")[0], k = y) : (z[0] = z[0].split(".")[0] || 0, n = 20 > k ? (z[0] * Math.pow(10, z[1])).toFixed(k) : 0, z[1] = 0) } y = (Math.abs(z[1] ? z[0] : n) + Math.pow(10, -Math.max(k, p) -
                1)).toFixed(k); p = String(u(y)); var t = 3 < p.length ? p.length % 3 : 0; d = A(d, h.decimalPoint); b = A(b, h.thousandsSep); n = (0 > n ? "-" : "") + (t ? p.substr(0, t) + b : ""); n = 0 > +z[1] && !E ? "0" : n + p.substr(t).replace(/(\d{3})(?=\d)/g, "$1" + b); k && (n += d + y.slice(-k)); z[1] && 0 !== +n && (n += "e" + z[1]); return n
        } var D = c.defaultOptions, r = c.defaultTime, C = f.getNestedProperty, F = f.isNumber, A = f.pick, u = f.pInt; return {
            dateFormat: function (n, k, d) { return r.dateFormat(n, k, d) }, format: function (n, k, d) {
                var b = "{", h = !1, p = /f$/, z = /\.([0-9])/, E = D.lang, y = d && d.time ||
                    r; d = d && d.numberFormatter || I; for (var t = []; n;) { var q = n.indexOf(b); if (-1 === q) break; var l = n.slice(0, q); if (h) { l = l.split(":"); b = C(l.shift() || "", k); if (l.length && "number" === typeof b) if (l = l.join(":"), p.test(l)) { var g = parseInt((l.match(z) || ["", "-1"])[1], 10); null !== b && (b = d(b, g, E.decimalPoint, -1 < l.indexOf(",") ? E.thousandsSep : "")) } else b = y.dateFormat(l, b); t.push(b) } else t.push(l); n = n.slice(q + 1); b = (h = !h) ? "}" : "{" } t.push(n); return t.join("")
            }, numberFormat: I
        }
    }); H(f, "Core/Renderer/RendererUtilities.js", [f["Core/Utilities.js"]],
        function (c) {
            var f = c.clamp, v = c.pick, D = c.stableSort, r; (function (c) {
                function r(c, u, n) {
                    var k = c, d = k.reducedLen || u, b = function (b, d) { return (d.rank || 0) - (b.rank || 0) }, h = function (b, d) { return b.target - d.target }, p, z = !0, E = [], y = 0; for (p = c.length; p--;)y += c[p].size; if (y > d) { D(c, b); for (y = p = 0; y <= d;)y += c[p].size, p++; E = c.splice(p - 1, c.length) } D(c, h); for (c = c.map(function (b) { return { size: b.size, targets: [b.target], align: v(b.align, .5) } }); z;) {
                        for (p = c.length; p--;)d = c[p], b = (Math.min.apply(0, d.targets) + Math.max.apply(0, d.targets)) /
                            2, d.pos = f(b - d.size * d.align, 0, u - d.size); p = c.length; for (z = !1; p--;)0 < p && c[p - 1].pos + c[p - 1].size > c[p].pos && (c[p - 1].size += c[p].size, c[p - 1].targets = c[p - 1].targets.concat(c[p].targets), c[p - 1].align = .5, c[p - 1].pos + c[p - 1].size > u && (c[p - 1].pos = u - c[p - 1].size), c.splice(p, 1), z = !0)
                    } k.push.apply(k, E); p = 0; c.some(function (b) {
                        var d = 0; return (b.targets || []).some(function () {
                            k[p].pos = b.pos + d; if ("undefined" !== typeof n && Math.abs(k[p].pos - k[p].target) > n) return k.slice(0, p + 1).forEach(function (b) { return delete b.pos }), k.reducedLen =
                                (k.reducedLen || u) - .1 * u, k.reducedLen > .1 * u && r(k, u, n), !0; d += k[p].size; p++; return !1
                        })
                    }); D(k, h); return k
                } c.distribute = r
            })(r || (r = {})); return r
        }); H(f, "Core/Renderer/SVG/SVGElement.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Renderer/HTML/AST.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f, v, D, r) {
            var I = c.animate, F = c.animObject, A = c.stop, u = D.deg2rad, n = D.doc, k = D.noop, d = D.svg, b = D.SVG_NS, h = D.win, p = r.addEvent, z = r.attr, E = r.createElement, y = r.css, t = r.defined, q = r.erase,
                l = r.extend, g = r.fireEvent, w = r.isArray, a = r.isFunction, B = r.isNumber, e = r.isString, G = r.merge, m = r.objectEach, x = r.pick, J = r.pInt, M = r.syncTimeout, P = r.uniqueKey; c = function () {
                    function c() { this.element = void 0; this.onEvents = {}; this.opacity = 1; this.renderer = void 0; this.SVG_NS = b; this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ") } c.prototype._defaultGetter = function (a) {
                        a = x(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) &&
                            (a = parseFloat(a)); return a
                    }; c.prototype._defaultSetter = function (a, e, b) { b.setAttribute(e, a) }; c.prototype.add = function (a) { var e = this.renderer, b = this.element; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; "undefined" !== typeof this.textStr && "text" === this.element.nodeName && e.buildText(this); this.added = !0; if (!a || a.handleZ || this.zIndex) var g = this.zIndexSetter(); g || (a ? a.element : e.box).appendChild(b); if (this.onAdd) this.onAdd(); return this }; c.prototype.addClass = function (a, e) {
                        var b = e ? "" : this.attr("class") ||
                            ""; a = (a || "").split(/ /g).reduce(function (a, e) { -1 === b.indexOf(e) && a.push(e); return a }, b ? [b] : []).join(" "); a !== b && this.attr("class", a); return this
                    }; c.prototype.afterSetters = function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }; c.prototype.align = function (a, b, g) {
                        var m = {}, d = this.renderer, l = d.alignedObjects, h, w, V; if (a) { if (this.alignOptions = a, this.alignByTranslate = b, !g || e(g)) this.alignTo = h = g || "renderer", q(l, this), l.push(this), g = void 0 } else a = this.alignOptions, b = this.alignByTranslate,
                            h = this.alignTo; g = x(g, d[h], "scrollablePlotBox" === h ? d.plotBox : void 0, d); h = a.align; var B = a.verticalAlign; d = (g.x || 0) + (a.x || 0); l = (g.y || 0) + (a.y || 0); "right" === h ? w = 1 : "center" === h && (w = 2); w && (d += (g.width - (a.width || 0)) / w); m[b ? "translateX" : "x"] = Math.round(d); "bottom" === B ? V = 1 : "middle" === B && (V = 2); V && (l += (g.height - (a.height || 0)) / V); m[b ? "translateY" : "y"] = Math.round(l); this[this.placed ? "animate" : "attr"](m); this.placed = !0; this.alignAttr = m; return this
                    }; c.prototype.alignSetter = function (a) {
                        var e = {
                            left: "start", center: "middle",
                            right: "end"
                        }; e[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", e[a]))
                    }; c.prototype.animate = function (a, e, b) { var g = this, d = F(x(e, this.renderer.globalAnimation, !0)); e = d.defer; x(n.hidden, n.msHidden, n.webkitHidden, !1) && (d.duration = 0); 0 !== d.duration ? (b && (d.complete = b), M(function () { g.element && I(g, a, d) }, e)) : (this.attr(a, void 0, b || d.complete), m(a, function (a, e) { d.step && d.step.call(this, a, { prop: e, pos: 1, elem: this }) }, this)); return this }; c.prototype.applyTextOutline = function (a) {
                        var e = this.element;
                        -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(e.style.fill))); var g = a.split(" "); a = g[g.length - 1]; if ((g = g[0]) && "none" !== g && D.svg) {
                            this.fakeTS = !0; this.ySetter = this.xSetter; g = g.replace(/(^[\d\.]+)(.*?)$/g, function (a, e, g) { return 2 * Number(e) + g }); this.removeTextOutline(); var m = n.createElementNS(b, "tspan"); z(m, { "class": "highcharts-text-outline", fill: a, stroke: a, "stroke-width": g, "stroke-linejoin": "round" });[].forEach.call(e.childNodes, function (a) {
                                var e = a.cloneNode(!0); e.removeAttribute &&
                                    ["fill", "stroke", "stroke-width", "stroke"].forEach(function (a) { return e.removeAttribute(a) }); m.appendChild(e)
                            }); var d = n.createElementNS(b, "tspan"); d.textContent = "\u200b";["x", "y"].forEach(function (a) { var g = e.getAttribute(a); g && d.setAttribute(a, g) }); m.appendChild(d); e.insertBefore(m, e.firstChild)
                        }
                    }; c.prototype.attr = function (a, e, g, b) {
                        var d = this.element, l = this.symbolCustomAttribs, x, h = this, w, q; if ("string" === typeof a && "undefined" !== typeof e) { var B = a; a = {}; a[B] = e } "string" === typeof a ? h = (this[a + "Getter"] ||
                            this._defaultGetter).call(this, a, d) : (m(a, function (e, g) { w = !1; b || A(this, g); this.symbolName && -1 !== l.indexOf(g) && (x || (this.symbolAttr(a), x = !0), w = !0); !this.rotation || "x" !== g && "y" !== g || (this.doTransform = !0); w || (q = this[g + "Setter"] || this._defaultSetter, q.call(this, e, g, d), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g) && this.updateShadows(g, e, q)) }, this), this.afterSetters()); g && g.call(this); return h
                    }; c.prototype.clip = function (a) {
                        return this.attr("clip-path", a ? "url(" +
                            this.renderer.url + "#" + a.id + ")" : "none")
                    }; c.prototype.crisp = function (a, e) { e = e || a.strokeWidth || 0; var g = Math.round(e) % 2 / 2; a.x = Math.floor(a.x || this.x || 0) + g; a.y = Math.floor(a.y || this.y || 0) + g; a.width = Math.floor((a.width || this.width || 0) - 2 * g); a.height = Math.floor((a.height || this.height || 0) - 2 * g); t(a.strokeWidth) && (a.strokeWidth = e); return a }; c.prototype.complexColor = function (a, e, b) {
                        var d = this.renderer, l, x, h, q, B, V, p, c, k, z, y = [], E; g(this.renderer, "complexColor", { args: arguments }, function () {
                            a.radialGradient ? x = "radialGradient" :
                                a.linearGradient && (x = "linearGradient"); if (x) {
                                    h = a[x]; B = d.gradients; V = a.stops; k = b.radialReference; w(h) && (a[x] = h = { x1: h[0], y1: h[1], x2: h[2], y2: h[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === x && k && !t(h.gradientUnits) && (q = h, h = G(h, d.getRadialAttr(k, q), { gradientUnits: "userSpaceOnUse" })); m(h, function (a, e) { "id" !== e && y.push(e, a) }); m(V, function (a) { y.push(a) }); y = y.join(","); if (B[y]) z = B[y].attr("id"); else {
                                        h.id = z = P(); var g = B[y] = d.createElement(x).attr(h).add(d.defs); g.radAttr = q; g.stops = []; V.forEach(function (a) {
                                            0 ===
                                                a[1].indexOf("rgba") ? (l = v.parse(a[1]), p = l.get("rgb"), c = l.get("a")) : (p = a[1], c = 1); a = d.createElement("stop").attr({ offset: a[0], "stop-color": p, "stop-opacity": c }).add(g); g.stops.push(a)
                                        })
                                    } E = "url(" + d.url + "#" + z + ")"; b.setAttribute(e, E); b.gradient = y; a.toString = function () { return E }
                                }
                        })
                    }; c.prototype.css = function (a) {
                        var e = this.styles, g = {}, b = this.element, h = !e; a.color && (a.fill = a.color); e && m(a, function (a, b) { e && e[b] !== a && (g[b] = a, h = !0) }); if (h) {
                            e && (a = l(e, g)); if (null === a.width || "auto" === a.width) delete this.textWidth;
                            else if ("text" === b.nodeName.toLowerCase() && a.width) var x = this.textWidth = J(a.width); this.styles = a; x && !d && this.renderer.forExport && delete a.width; var w = G(a); b.namespaceURI === this.SVG_NS && ["textOutline", "textOverflow", "width"].forEach(function (a) { return w && delete w[a] }); y(b, w); this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a.textOutline && this.applyTextOutline(a.textOutline))
                        } return this
                    }; c.prototype.dashstyleSetter = function (a) {
                        var e = this["stroke-width"]; "inherit" === e && (e =
                            1); if (a = a && a.toLowerCase()) { var g = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (a = g.length; a--;)g[a] = "" + J(g[a]) * x(e, NaN); a = g.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a) }
                    }; c.prototype.destroy = function () {
                        var a = this, e = a.element || {}, g = a.renderer, b = e.ownerSVGElement, d = g.isSVG &&
                            "SPAN" === e.nodeName && a.parentGroup || void 0; e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null; A(a); if (a.clipPath && b) { var l = a.clipPath;[].forEach.call(b.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) { -1 < a.getAttribute("clip-path").indexOf(l.element.id) && a.removeAttribute("clip-path") }); a.clipPath = l.destroy() } if (a.stops) { for (b = 0; b < a.stops.length; b++)a.stops[b].destroy(); a.stops.length = 0; a.stops = void 0 } a.safeRemoveChild(e); for (g.styledMode || a.destroyShadows(); d && d.div && 0 === d.div.childNodes.length;)e =
                                d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = e; a.alignTo && q(g.alignedObjects, a); m(a, function (e, g) { a[g] && a[g].parentGroup === a && a[g].destroy && a[g].destroy(); delete a[g] })
                    }; c.prototype.destroyShadows = function () { (this.shadows || []).forEach(function (a) { this.safeRemoveChild(a) }, this); this.shadows = void 0 }; c.prototype.destroyTextPath = function (a, e) {
                        var g = a.getElementsByTagName("text")[0]; if (g) {
                            if (g.removeAttribute("dx"), g.removeAttribute("dy"), e.element.setAttribute("id", ""), this.textPathWrapper &&
                                g.getElementsByTagName("textPath").length) { for (a = this.textPathWrapper.element.childNodes; a.length;)g.appendChild(a[0]); g.removeChild(this.textPathWrapper.element) }
                        } else if (a.getAttribute("dx") || a.getAttribute("dy")) a.removeAttribute("dx"), a.removeAttribute("dy"); this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy())
                    }; c.prototype.dSetter = function (a, e, g) {
                        w(a) && ("string" === typeof a[0] && (a = this.renderer.pathToSegments(a)), this.pathArray = a, a = a.reduce(function (a, e, g) {
                            return e && e.join ?
                                (g ? a + " " : "") + e.join(" ") : (e || "").toString()
                        }, "")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); this[e] !== a && (g.setAttribute(e, a), this[e] = a)
                    }; c.prototype.fadeOut = function (a) { var e = this; e.animate({ opacity: 0 }, { duration: x(a, 150), complete: function () { e.hide() } }) }; c.prototype.fillSetter = function (a, e, g) { "string" === typeof a ? g.setAttribute(e, a) : a && this.complexColor(a, e, g) }; c.prototype.getBBox = function (e, g) {
                        var b = this.alignValue, m = this.element, d = this.renderer, h = this.styles, w = this.textStr, q = d.cache, B = d.cacheKeys, p = m.namespaceURI ===
                            this.SVG_NS; g = x(g, this.rotation, 0); var k = d.styledMode ? m && c.prototype.getStyle.call(m, "font-size") : h && h.fontSize, z; if (t(w)) { var G = w.toString(); -1 === G.indexOf("<") && (G = G.replace(/[0-9]/g, "0")); G += ["", g, k, this.textWidth, b, h && h.textOverflow, h && h.fontWeight].join() } G && !e && (z = q[G]); if (!z) {
                                if (p || d.forExport) {
                                    try {
                                        var E = this.fakeTS && function (a) { var e = m.querySelector(".highcharts-text-outline"); e && y(e, { display: a }) }; a(E) && E("none"); z = m.getBBox ? l({}, m.getBBox()) : { width: m.offsetWidth, height: m.offsetHeight }; a(E) &&
                                            E("")
                                    } catch (ca) { "" } if (!z || 0 > z.width) z = { x: 0, y: 0, width: 0, height: 0 }
                                } else z = this.htmlGetBBox(); if (d.isSVG && (d = z.width, e = z.height, p && (z.height = e = { "11px,17": 14, "13px,20": 16 }["" + (k || "") + ",".concat(Math.round(e))] || e), g)) {
                                    p = Number(m.getAttribute("y") || 0) - z.y; b = { right: 1, center: .5 }[b || 0] || 0; h = g * u; k = (g - 90) * u; var n = d * Math.cos(h); g = d * Math.sin(h); E = Math.cos(k); h = Math.sin(k); d = z.x + b * (d - n) + p * E; k = d + n; E = k - e * E; n = E - n; p = z.y + p - b * g + p * h; b = p + g; e = b - e * h; g = e - g; z.x = Math.min(d, k, E, n); z.y = Math.min(p, b, e, g); z.width = Math.max(d, k,
                                        E, n) - z.x; z.height = Math.max(p, b, e, g) - z.y
                                } if (G && ("" === w || 0 < z.height)) { for (; 250 < B.length;)delete q[B.shift()]; q[G] || B.push(G); q[G] = z }
                            } return z
                    }; c.prototype.getStyle = function (a) { return h.getComputedStyle(this.element || this, "").getPropertyValue(a) }; c.prototype.hasClass = function (a) { return -1 !== ("" + this.attr("class")).split(" ").indexOf(a) }; c.prototype.hide = function () { return this.attr({ visibility: "hidden" }) }; c.prototype.htmlGetBBox = function () { return { height: 0, width: 0, x: 0, y: 0 } }; c.prototype.init = function (a,
                        e) { this.element = "span" === e ? E(e) : n.createElementNS(this.SVG_NS, e); this.renderer = a; g(this, "afterInit") }; c.prototype.invert = function (a) { this.inverted = a; this.updateTransform(); return this }; c.prototype.on = function (a, e) { var g = this.onEvents; if (g[a]) g[a](); g[a] = p(this.element, a, e); return this }; c.prototype.opacitySetter = function (a, e, g) { this.opacity = a = Number(Number(a).toFixed(3)); g.setAttribute(e, a) }; c.prototype.removeClass = function (a) {
                            return this.attr("class", ("" + this.attr("class")).replace(e(a) ? new RegExp("(^| )".concat(a,
                                "( |$)")) : a, " ").replace(/ +/g, " ").trim())
                        }; c.prototype.removeTextOutline = function () { var a = this.element.querySelector("tspan.highcharts-text-outline"); a && this.safeRemoveChild(a) }; c.prototype.safeRemoveChild = function (a) { var e = a.parentNode; e && e.removeChild(a) }; c.prototype.setRadialReference = function (a) { var e = this.element.gradient && this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; e && e.radAttr && e.animate(this.renderer.getRadialAttr(a, e.radAttr)); return this }; c.prototype.setTextPath =
                            function (a, e) {
                                var g = this.element, b = this.text ? this.text.element : g, d = { textAnchor: "text-anchor" }, l = !1, x = this.textPathWrapper, w = !x; e = G(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, e); var q = f.filterUserAttributes(e.attributes); if (a && e && e.enabled) {
                                    x && null === x.element.parentNode ? (w = !0, x = x.destroy()) : x && this.removeTextOutline.call(x.parentGroup); this.options && this.options.padding && (q.dx = -this.options.padding); x || (this.textPathWrapper = x = this.renderer.createElement("textPath"), l =
                                        !0); var p = x.element; (e = a.element.getAttribute("id")) || a.element.setAttribute("id", e = P()); if (w) for (b.setAttribute("y", 0), B(q.dx) && b.setAttribute("x", -q.dx), a = [].slice.call(b.childNodes), w = 0; w < a.length; w++) { var z = a[w]; z.nodeType !== h.Node.TEXT_NODE && "tspan" !== z.nodeName || p.appendChild(z) } l && x && x.add({ element: b }); p.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + e); t(q.dy) && (p.parentNode.setAttribute("dy", q.dy), delete q.dy); t(q.dx) && (p.parentNode.setAttribute("dx", q.dx), delete q.dx);
                                    m(q, function (a, e) { p.setAttribute(d[e] || e, a) }); g.removeAttribute("transform"); this.removeTextOutline.call(x); this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 }); this.applyTextOutline = this.updateTransform = k
                                } else x && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(g, a), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline)); return this
                            }; c.prototype.shadow = function (a, e, g) {
                                var b = [], d = this.element,
                                    h = this.oldShadowOptions, x = { color: "#000000", offsetX: this.parentInverted ? -1 : 1, offsetY: this.parentInverted ? -1 : 1, opacity: .15, width: 3 }, w = !1, q; !0 === a ? q = x : "object" === typeof a && (q = l(x, a)); q && (q && h && m(q, function (a, e) { a !== h[e] && (w = !0) }), w && this.destroyShadows(), this.oldShadowOptions = q); if (!q) this.destroyShadows(); else if (!this.shadows) {
                                        var B = q.opacity / q.width; var p = this.parentInverted ? "translate(".concat(q.offsetY, ", ").concat(q.offsetX, ")") : "translate(".concat(q.offsetX, ", ").concat(q.offsetY, ")"); for (x = 1; x <=
                                            q.width; x++) { var t = d.cloneNode(!1); var c = 2 * q.width + 1 - 2 * x; z(t, { stroke: a.color || "#000000", "stroke-opacity": B * x, "stroke-width": c, transform: p, fill: "none" }); t.setAttribute("class", (t.getAttribute("class") || "") + " highcharts-shadow"); g && (z(t, "height", Math.max(z(t, "height") - c, 0)), t.cutHeight = c); e ? e.element.appendChild(t) : d.parentNode && d.parentNode.insertBefore(t, d); b.push(t) } this.shadows = b
                                    } return this
                            }; c.prototype.show = function (a) { void 0 === a && (a = !0); return this.attr({ visibility: a ? "inherit" : "visible" }) }; c.prototype.strokeSetter =
                                function (a, e, g) { this[e] = a; this.stroke && this["stroke-width"] ? (c.prototype.fillSetter.call(this, this.stroke, "stroke", g), g.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === a && this.hasStroke ? (g.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (g.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) }; c.prototype.strokeWidth = function () {
                                    if (!this.renderer.styledMode) return this["stroke-width"] || 0; var a =
                                        this.getStyle("stroke-width"), e = 0; if (a.indexOf("px") === a.length - 2) e = J(a); else if ("" !== a) { var g = n.createElementNS(b, "rect"); z(g, { width: a, "stroke-width": 0 }); this.element.parentNode.appendChild(g); e = g.getBBox().width; g.parentNode.removeChild(g) } return e
                                }; c.prototype.symbolAttr = function (a) { var e = this; "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (g) { e[g] = x(a[g], e[g]) }); e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) }) }; c.prototype.textSetter =
                                    function (a) { a !== this.textStr && (delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this)) }; c.prototype.titleSetter = function (a) { var e = this.element, g = e.getElementsByTagName("title")[0] || n.createElementNS(this.SVG_NS, "title"); e.insertBefore ? e.insertBefore(g, e.firstChild) : e.appendChild(g); g.textContent = String(x(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">") }; c.prototype.toFront = function () { var a = this.element; a.parentNode.appendChild(a); return this }; c.prototype.translate =
                                        function (a, e) { return this.attr({ translateX: a, translateY: e }) }; c.prototype.updateShadows = function (a, e, g) { var b = this.shadows; if (b) for (var m = b.length; m--;)g.call(b[m], "height" === a ? Math.max(e - (b[m].cutHeight || 0), 0) : "d" === a ? this.d : e, a, b[m]) }; c.prototype.updateTransform = function () {
                                            var a = this.scaleX, e = this.scaleY, g = this.inverted, b = this.rotation, m = this.matrix, d = this.element, l = this.translateX || 0, h = this.translateY || 0; g && (l += this.width, h += this.height); l = ["translate(" + l + "," + h + ")"]; t(m) && l.push("matrix(" + m.join(",") +
                                                ")"); g ? l.push("rotate(90) scale(-1,1)") : b && l.push("rotate(" + b + " " + x(this.rotationOriginX, d.getAttribute("x"), 0) + " " + x(this.rotationOriginY, d.getAttribute("y") || 0) + ")"); (t(a) || t(e)) && l.push("scale(" + x(a, 1) + " " + x(e, 1) + ")"); l.length && d.setAttribute("transform", l.join(" "))
                                        }; c.prototype.visibilitySetter = function (a, e, g) { "inherit" === a ? g.removeAttribute(e) : this[e] !== a && g.setAttribute(e, a); this[e] = a }; c.prototype.xGetter = function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) };
                    c.prototype.zIndexSetter = function (a, e) {
                        var g = this.renderer, b = this.parentGroup, m = (b || g).element || g.box, d = this.element; g = m === g.box; var l = !1; var h = this.added; var x; t(a) ? (d.setAttribute("data-z-index", a), a = +a, this[e] === a && (h = !1)) : t(this[e]) && d.removeAttribute("data-z-index"); this[e] = a; if (h) {
                            (a = this.zIndex) && b && (b.handleZ = !0); e = m.childNodes; for (x = e.length - 1; 0 <= x && !l; x--) {
                                b = e[x]; h = b.getAttribute("data-z-index"); var q = !t(h); if (b !== d) if (0 > a && q && !g && !x) m.insertBefore(d, e[x]), l = !0; else if (J(h) <= a || q && (!t(a) ||
                                    0 <= a)) m.insertBefore(d, e[x + 1] || null), l = !0
                            } l || (m.insertBefore(d, e[g ? 3 : 0] || null), l = !0)
                        } return l
                    }; return c
                }(); c.prototype["stroke-widthSetter"] = c.prototype.strokeSetter; c.prototype.yGetter = c.prototype.xGetter; c.prototype.matrixSetter = c.prototype.rotationOriginXSetter = c.prototype.rotationOriginYSetter = c.prototype.rotationSetter = c.prototype.scaleXSetter = c.prototype.scaleYSetter = c.prototype.translateXSetter = c.prototype.translateYSetter = c.prototype.verticalAlignSetter = function (a, e) {
                    this[e] = a; this.doTransform =
                        !0
                }; ""; return c
        }); H(f, "Core/Renderer/RendererRegistry.js", [f["Core/Globals.js"]], function (c) { var f; (function (f) { f.rendererTypes = {}; var I; f.getRendererType = function (c) { void 0 === c && (c = I); return f.rendererTypes[c] || f.rendererTypes[I] }; f.registerRendererType = function (r, C, F) { f.rendererTypes[r] = C; if (!I || F) I = r, c.Renderer = C } })(f || (f = {})); return f }); H(f, "Core/Renderer/SVG/SVGLabel.js", [f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (c, f) {
            var I = this && this.__extends || function () {
                var c = function (k,
                    d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var h in d) d.hasOwnProperty(h) && (b[h] = d[h]) }; return c(k, d) }; return function (k, d) { function b() { this.constructor = k } c(k, d); k.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) }
            }(), D = f.defined, r = f.extend, C = f.isNumber, F = f.merge, A = f.pick, u = f.removeEvent; return function (n) {
                function k(d, b, h, p, c, E, y, t, q, l) {
                    var g = n.call(this) || this; g.paddingLeftSetter = g.paddingSetter; g.paddingRightSetter =
                        g.paddingSetter; g.init(d, "g"); g.textStr = b; g.x = h; g.y = p; g.anchorX = E; g.anchorY = y; g.baseline = q; g.className = l; g.addClass("button" === l ? "highcharts-no-tooltip" : "highcharts-label"); l && g.addClass("highcharts-" + l); g.text = d.text(void 0, 0, 0, t).attr({ zIndex: 1 }); var w; "string" === typeof c && ((w = /^url\((.*?)\)$/.test(c)) || g.renderer.symbols[c]) && (g.symbolKey = c); g.bBox = k.emptyBBox; g.padding = 3; g.baselineOffset = 0; g.needsBox = d.styledMode || w; g.deferredAttr = {}; g.alignFactor = 0; return g
                } I(k, n); k.prototype.alignSetter = function (d) {
                    d =
                        { left: 0, center: .5, right: 1 }[d]; d !== this.alignFactor && (this.alignFactor = d, this.bBox && C(this.xSetting) && this.attr({ x: this.xSetting }))
                }; k.prototype.anchorXSetter = function (d, b) { this.anchorX = d; this.boxAttr(b, Math.round(d) - this.getCrispAdjust() - this.xSetting) }; k.prototype.anchorYSetter = function (d, b) { this.anchorY = d; this.boxAttr(b, d - this.ySetting) }; k.prototype.boxAttr = function (d, b) { this.box ? this.box.attr(d, b) : this.deferredAttr[d] = b }; k.prototype.css = function (d) {
                    if (d) {
                        var b = {}; d = F(d); k.textProps.forEach(function (h) {
                            "undefined" !==
                                typeof d[h] && (b[h] = d[h], delete d[h])
                        }); this.text.css(b); var h = "width" in b; "fontSize" in b || "fontWeight" in b ? this.updateTextPadding() : h && this.updateBoxSize()
                    } return c.prototype.css.call(this, d)
                }; k.prototype.destroy = function () { u(this.element, "mouseenter"); u(this.element, "mouseleave"); this.text && this.text.destroy(); this.box && (this.box = this.box.destroy()); c.prototype.destroy.call(this) }; k.prototype.fillSetter = function (d, b) { d && (this.needsBox = !0); this.fill = d; this.boxAttr(b, d) }; k.prototype.getBBox = function () {
                    this.textStr &&
                        0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize(); var d = this.padding, b = A(this.paddingLeft, d); return { width: this.width, height: this.height, x: this.bBox.x - b, y: this.bBox.y - d }
                }; k.prototype.getCrispAdjust = function () { return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2 }; k.prototype.heightSetter = function (d) { this.heightSetting = d }; k.prototype.onAdd = function () {
                    var d = this.textStr; this.text.add(this); this.attr({
                        text: D(d) ?
                            d : "", x: this.x, y: this.y
                    }); this.box && D(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY })
                }; k.prototype.paddingSetter = function (d, b) { C(d) ? d !== this[b] && (this[b] = d, this.updateTextPadding()) : this[b] = void 0 }; k.prototype.rSetter = function (d, b) { this.boxAttr(b, d) }; k.prototype.shadow = function (d) { d && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(d)); return this }; k.prototype.strokeSetter = function (d, b) { this.stroke = d; this.boxAttr(b, d) }; k.prototype["stroke-widthSetter"] =
                    function (d, b) { d && (this.needsBox = !0); this["stroke-width"] = d; this.boxAttr(b, d) }; k.prototype["text-alignSetter"] = function (d) { this.textAlign = d }; k.prototype.textSetter = function (d) { "undefined" !== typeof d && this.text.attr({ text: d }); this.updateTextPadding() }; k.prototype.updateBoxSize = function () {
                        var d = this.text.element.style, b = {}, h = this.padding, p = this.bBox = C(this.widthSetting) && C(this.heightSetting) && !this.textAlign || !D(this.text.textStr) ? k.emptyBBox : this.text.getBBox(); this.width = this.getPaddedWidth(); this.height =
                            (this.heightSetting || p.height || 0) + 2 * h; d = this.renderer.fontMetrics(d && d.fontSize, this.text); this.baselineOffset = h + Math.min((this.text.firstLineMetrics || d).b, p.height || Infinity); this.heightSetting && (this.baselineOffset += (this.heightSetting - d.h) / 2); this.needsBox && (this.box || (h = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), h.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), h.add(this)), h = this.getCrispAdjust(),
                                b.x = h, b.y = (this.baseline ? -this.baselineOffset : 0) + h, b.width = Math.round(this.width), b.height = Math.round(this.height), this.box.attr(r(b, this.deferredAttr)), this.deferredAttr = {})
                    }; k.prototype.updateTextPadding = function () {
                        var d = this.text; this.updateBoxSize(); var b = this.baseline ? 0 : this.baselineOffset, h = A(this.paddingLeft, this.padding); D(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (h += { center: .5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)); if (h !==
                            d.x || b !== d.y) d.attr("x", h), d.hasBoxWidthChanged && (this.bBox = d.getBBox(!0)), "undefined" !== typeof b && d.attr("y", b); d.x = h; d.y = b
                    }; k.prototype.widthSetter = function (d) { this.widthSetting = C(d) ? d : void 0 }; k.prototype.getPaddedWidth = function () { var d = this.padding, b = A(this.paddingLeft, d); d = A(this.paddingRight, d); return (this.widthSetting || this.bBox.width || 0) + b + d }; k.prototype.xSetter = function (d) {
                        this.x = d; this.alignFactor && (d -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0); this.xSetting = Math.round(d);
                        this.attr("translateX", this.xSetting)
                    }; k.prototype.ySetter = function (d) { this.ySetting = this.y = Math.round(d); this.attr("translateY", this.ySetting) }; k.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }; k.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "); return k
            }(c)
        }); H(f, "Core/Renderer/SVG/Symbols.js", [f["Core/Utilities.js"]], function (c) {
            function f(c, f, n, k, d) {
                var b = []; if (d) {
                    var h = d.start || 0, p = F(d.r, n); n = F(d.r, k || n); var z =
                        (d.end || 0) - .001; k = d.innerR; var E = F(d.open, .001 > Math.abs((d.end || 0) - h - 2 * Math.PI)), y = Math.cos(h), t = Math.sin(h), q = Math.cos(z), l = Math.sin(z); h = F(d.longArc, .001 > z - h - Math.PI ? 0 : 1); b.push(["M", c + p * y, f + n * t], ["A", p, n, 0, h, F(d.clockwise, 1), c + p * q, f + n * l]); r(k) && b.push(E ? ["M", c + k * q, f + k * l] : ["L", c + k * q, f + k * l], ["A", k, k, 0, h, r(d.clockwise) ? 1 - d.clockwise : 0, c + k * y, f + k * t]); E || b.push(["Z"])
                } return b
            } function v(c, f, n, k, d) { return d && d.r ? D(c, f, n, k, d) : [["M", c, f], ["L", c + n, f], ["L", c + n, f + k], ["L", c, f + k], ["Z"]] } function D(c, f, n, k,
                d) { d = d && d.r || 0; return [["M", c + d, f], ["L", c + n - d, f], ["C", c + n, f, c + n, f, c + n, f + d], ["L", c + n, f + k - d], ["C", c + n, f + k, c + n, f + k, c + n - d, f + k], ["L", c + d, f + k], ["C", c, f + k, c, f + k, c, f + k - d], ["L", c, f + d], ["C", c, f, c, f, c + d, f]] } var r = c.defined, C = c.isNumber, F = c.pick; return {
                    arc: f, callout: function (c, f, n, k, d) {
                        var b = Math.min(d && d.r || 0, n, k), h = b + 6, p = d && d.anchorX; d = d && d.anchorY || 0; var z = D(c, f, n, k, { r: b }); if (!C(p)) return z; c + p >= n ? d > f + h && d < f + k - h ? z.splice(3, 1, ["L", c + n, d - 6], ["L", c + n + 6, d], ["L", c + n, d + 6], ["L", c + n, f + k - b]) : z.splice(3, 1, ["L", c + n, k /
                            2], ["L", p, d], ["L", c + n, k / 2], ["L", c + n, f + k - b]) : 0 >= c + p ? d > f + h && d < f + k - h ? z.splice(7, 1, ["L", c, d + 6], ["L", c - 6, d], ["L", c, d - 6], ["L", c, f + b]) : z.splice(7, 1, ["L", c, k / 2], ["L", p, d], ["L", c, k / 2], ["L", c, f + b]) : d && d > k && p > c + h && p < c + n - h ? z.splice(5, 1, ["L", p + 6, f + k], ["L", p, f + k + 6], ["L", p - 6, f + k], ["L", c + b, f + k]) : d && 0 > d && p > c + h && p < c + n - h && z.splice(1, 1, ["L", p - 6, f], ["L", p, f - 6], ["L", p + 6, f], ["L", n - b, f]); return z
                    }, circle: function (c, u, n, k) { return f(c + n / 2, u + k / 2, n / 2, k / 2, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }) }, diamond: function (c, f, n, k) {
                        return [["M",
                            c + n / 2, f], ["L", c + n, f + k / 2], ["L", c + n / 2, f + k], ["L", c, f + k / 2], ["Z"]]
                    }, rect: v, roundedRect: D, square: v, triangle: function (c, f, n, k) { return [["M", c + n / 2, f], ["L", c + n, f + k], ["L", c, f + k], ["Z"]] }, "triangle-down": function (c, f, n, k) { return [["M", c, f], ["L", c + n, f], ["L", c + n / 2, f + k], ["Z"]] }
                }
        }); H(f, "Core/Renderer/SVG/TextBuilder.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f, v) {
            var I = f.doc, r = f.SVG_NS, C = f.win, F = v.attr, A = v.extend, u = v.isString, n = v.objectEach, k = v.pick; return function () {
                function d(b) {
                    var d =
                        b.styles; this.renderer = b.renderer; this.svgElement = b; this.width = b.textWidth; this.textLineHeight = d && d.lineHeight; this.textOutline = d && d.textOutline; this.ellipsis = !(!d || "ellipsis" !== d.textOverflow); this.noWrap = !(!d || "nowrap" !== d.whiteSpace); this.fontSize = d && d.fontSize
                } d.prototype.buildSVG = function () {
                    var b = this.svgElement, d = b.element, p = b.renderer, z = k(b.textStr, "").toString(), E = -1 !== z.indexOf("<"), y = d.childNodes; p = this.width && !b.added && p.box; var t = /<br.*?>/g, q = [z, this.ellipsis, this.noWrap, this.textLineHeight,
                        this.textOutline, this.fontSize, this.width].join(); if (q !== b.textCache) {
                            b.textCache = q; delete b.actualWidth; for (q = y.length; q--;)d.removeChild(y[q]); E || this.ellipsis || this.width || -1 !== z.indexOf(" ") && (!this.noWrap || t.test(z)) ? "" !== z && (p && p.appendChild(d), z = new c(z), this.modifyTree(z.nodes), z.addToDOM(b.element), this.modifyDOM(), this.ellipsis && -1 !== (d.textContent || "").indexOf("\u2026") && b.attr("title", this.unescapeEntities(b.textStr || "", ["&lt;", "&gt;"])), p && p.removeChild(d)) : d.appendChild(I.createTextNode(this.unescapeEntities(z)));
                            u(this.textOutline) && b.applyTextOutline && b.applyTextOutline(this.textOutline)
                        }
                }; d.prototype.modifyDOM = function () {
                    var b = this, d = this.svgElement, c = F(d.element, "x"); d.firstLineMetrics = void 0; for (var z; z = d.element.firstChild;)if (/^[\s\u200B]*$/.test(z.textContent || " ")) d.element.removeChild(z); else break;[].forEach.call(d.element.querySelectorAll("tspan.highcharts-br"), function (h, l) {
                        h.nextSibling && h.previousSibling && (0 === l && 1 === h.previousSibling.nodeType && (d.firstLineMetrics = d.renderer.fontMetrics(void 0,
                            h.previousSibling)), F(h, { dy: b.getLineHeight(h.nextSibling), x: c }))
                    }); var k = this.width || 0; if (k) {
                        var y = function (h, l) {
                            var g = h.textContent || "", w = g.replace(/([^\^])-/g, "$1- ").split(" "), a = !b.noWrap && (1 < w.length || 1 < d.element.childNodes.length), q = b.getLineHeight(l), e = 0, p = d.actualWidth; if (b.ellipsis) g && b.truncate(h, g, void 0, 0, Math.max(0, k - parseInt(b.fontSize || 12, 10)), function (a, e) { return a.substring(0, e) + "\u2026" }); else if (a) {
                                g = []; for (a = []; l.firstChild && l.firstChild !== h;)a.push(l.firstChild), l.removeChild(l.firstChild);
                                for (; w.length;)w.length && !b.noWrap && 0 < e && (g.push(h.textContent || ""), h.textContent = w.join(" ").replace(/- /g, "-")), b.truncate(h, void 0, w, 0 === e ? p || 0 : 0, k, function (a, e) { return w.slice(0, e).join(" ").replace(/- /g, "-") }), p = d.actualWidth, e++; a.forEach(function (a) { l.insertBefore(a, h) }); g.forEach(function (a) { l.insertBefore(I.createTextNode(a), h); a = I.createElementNS(r, "tspan"); a.textContent = "\u200b"; F(a, { dy: q, x: c }); l.insertBefore(a, h) })
                            }
                        }, t = function (b) {
                            [].slice.call(b.childNodes).forEach(function (l) {
                                l.nodeType ===
                                    C.Node.TEXT_NODE ? y(l, b) : (-1 !== l.className.baseVal.indexOf("highcharts-br") && (d.actualWidth = 0), t(l))
                            })
                        }; t(d.element)
                    }
                }; d.prototype.getLineHeight = function (b) { var d; b = b.nodeType === C.Node.TEXT_NODE ? b.parentElement : b; this.renderer.styledMode || (d = b && /(px|em)$/.test(b.style.fontSize) ? b.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12); return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(d, b || this.svgElement.element).h }; d.prototype.modifyTree = function (b) {
                    var d =
                        this, c = function (h, p) {
                            var k = h.attributes; k = void 0 === k ? {} : k; var t = h.children, q = h.style; q = void 0 === q ? {} : q; var l = h.tagName, g = d.renderer.styledMode; if ("b" === l || "strong" === l) g ? k["class"] = "highcharts-strong" : q.fontWeight = "bold"; else if ("i" === l || "em" === l) g ? k["class"] = "highcharts-emphasized" : q.fontStyle = "italic"; q && q.color && (q.fill = q.color); "br" === l ? (k["class"] = "highcharts-br", h.textContent = "\u200b", (p = b[p + 1]) && p.textContent && (p.textContent = p.textContent.replace(/^ +/gm, ""))) : "a" === l && t && t.some(function (g) {
                                return "#text" ===
                                    g.tagName
                            }) && (h.children = [{ children: t, tagName: "tspan" }]); "#text" !== l && "a" !== l && (h.tagName = "tspan"); A(h, { attributes: k, style: q }); t && t.filter(function (g) { return "#text" !== g.tagName }).forEach(c)
                        }; b.forEach(c)
                }; d.prototype.truncate = function (b, d, c, k, E, y) {
                    var h = this.svgElement, q = h.renderer, l = h.rotation, g = [], w = c ? 1 : 0, a = (d || c || "").length, B = a, e, p = function (a, e) {
                        e = e || a; var m = b.parentNode; if (m && "undefined" === typeof g[e]) if (m.getSubStringLength) try { g[e] = k + m.getSubStringLength(0, c ? e + 1 : e) } catch (P) { "" } else q.getSpanWidth &&
                            (b.textContent = y(d || c, a), g[e] = k + q.getSpanWidth(h, b)); return g[e]
                    }; h.rotation = 0; var m = p(b.textContent.length); if (k + m > E) { for (; w <= a;)B = Math.ceil((w + a) / 2), c && (e = y(c, B)), m = p(B, e && e.length - 1), w === a ? w = a + 1 : m > E ? a = B - 1 : w = B; 0 === a ? b.textContent = "" : d && a === d.length - 1 || (b.textContent = e || y(d || c, B)) } c && c.splice(0, B); h.actualWidth = m; h.rotation = l
                }; d.prototype.unescapeEntities = function (b, d) { n(this.renderer.escapes, function (h, c) { d && -1 !== d.indexOf(h) || (b = b.toString().replace(new RegExp(h, "g"), c)) }); return b }; return d
            }()
        });
    H(f, "Core/Renderer/SVG/SVGRenderer.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGLabel.js"], f["Core/Renderer/SVG/Symbols.js"], f["Core/Renderer/SVG/TextBuilder.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F, A, u) {
        var n = v.charts, k = v.deg2rad, d = v.doc, b = v.isFirefox, h = v.isMS, p = v.isWebKit, z = v.noop, E = v.SVG_NS, y = v.symbolSizes, t = v.win, q = u.addEvent, l = u.attr, g = u.createElement,
            w = u.css, a = u.defined, B = u.destroyObjectProperties, e = u.extend, G = u.isArray, m = u.isNumber, x = u.isObject, J = u.isString, M = u.merge, P = u.pick, L = u.pInt, I = u.uniqueKey, X; v = function () {
                function z(a, e, g, b, d, m, l) { this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0; this.init(a, e, g, b, d, m, l) } z.prototype.init = function (a, e, g, m, h, x, c) {
                    var B = this.createElement("svg").attr({
                        version: "1.1",
                        "class": "highcharts-root"
                    }), p = B.element; c || B.css(this.getStyle(m)); a.appendChild(p); l(a, "dir", "ltr"); -1 === a.innerHTML.indexOf("xmlns") && l(p, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = p; this.boxWrapper = B; this.alignedObjects = []; this.url = this.getReferenceURL(); this.createElement("desc").add().element.appendChild(d.createTextNode("Created with Highcharts 10.2.0")); this.defs = this.createElement("defs").add(); this.allowHTML = x; this.forExport = h; this.styledMode = c; this.gradients = {}; this.cache = {}; this.cacheKeys =
                        []; this.imgCount = 0; this.setSize(e, g, !1); var z; b && a.getBoundingClientRect && (e = function () { w(a, { left: 0, top: 0 }); z = a.getBoundingClientRect(); w(a, { left: Math.ceil(z.left) - z.left + "px", top: Math.ceil(z.top) - z.top + "px" }) }, e(), this.unSubPixelFix = q(t, "resize", e))
                }; z.prototype.definition = function (a) { return (new c([a])).addToDOM(this.defs.element) }; z.prototype.getReferenceURL = function () {
                    if ((b || p) && d.getElementsByTagName("base").length) {
                        if (!a(X)) {
                            var e = I(); e = (new c([{
                                tagName: "svg", attributes: { width: 8, height: 8 }, children: [{
                                    tagName: "defs",
                                    children: [{ tagName: "clipPath", attributes: { id: e }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }]
                                }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#".concat(e, ")"), fill: "rgba(0,0,0,0.001)" } }]
                            }])).addToDOM(d.body); w(e, { position: "fixed", top: 0, left: 0, zIndex: 9E5 }); var g = d.elementFromPoint(6, 6); X = "hitme" === (g && g.id); d.body.removeChild(e)
                        } if (X) return t.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20")
                    } return ""
                }; z.prototype.getStyle =
                    function (a) { return this.style = e({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a) }; z.prototype.setStyle = function (a) { this.boxWrapper.css(this.getStyle(a)) }; z.prototype.isHidden = function () { return !this.boxWrapper.getBBox().width }; z.prototype.destroy = function () {
                        var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); B(this.gradients || {}); this.gradients = null; a && (this.defs = a.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects =
                            null
                    }; z.prototype.createElement = function (a) { var e = new this.Element; e.init(this, a); return e }; z.prototype.getRadialAttr = function (a, e) { return { cx: a[0] - a[2] / 2 + (e.cx || 0) * a[2], cy: a[1] - a[2] / 2 + (e.cy || 0) * a[2], r: (e.r || 0) * a[2] } }; z.prototype.buildText = function (a) { (new A(a)).buildSVG() }; z.prototype.getContrast = function (a) { a = f.parse(a).rgba.map(function (a) { a /= 255; return .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4) }); a = .2126 * a[0] + .7152 * a[1] + .0722 * a[2]; return 1.05 / (a + .05) > (a + .05) / .05 ? "#FFFFFF" : "#000000" }; z.prototype.button =
                        function (a, g, b, d, m, l, w, B, p, z) {
                            void 0 === m && (m = {}); var t = this.label(a, g, b, p, void 0, void 0, z, void 0, "button"), k = this.styledMode; a = m.states || {}; var G = 0; m = M(m); delete m.states; var y = M({ color: "#333333", cursor: "pointer", fontWeight: "normal" }, m.style); delete m.style; var E = c.filterUserAttributes(m); t.attr(M({ padding: 8, r: 2 }, E)); if (!k) {
                                E = M({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, E); l = M(E, { fill: "#e6e6e6" }, c.filterUserAttributes(l || a.hover || {})); var n = l.style; delete l.style; w = M(E, {
                                    fill: "#e6ebf5", style: {
                                        color: "#000000",
                                        fontWeight: "bold"
                                    }
                                }, c.filterUserAttributes(w || a.select || {})); var f = w.style; delete w.style; B = M(E, { style: { color: "#cccccc" } }, c.filterUserAttributes(B || a.disabled || {})); var V = B.style; delete B.style
                            } q(t.element, h ? "mouseover" : "mouseenter", function () { 3 !== G && t.setState(1) }); q(t.element, h ? "mouseout" : "mouseleave", function () { 3 !== G && t.setState(G) }); t.setState = function (a) {
                                1 !== a && (t.state = G = a); t.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed",
                                    "disabled"][a || 0]); k || (t.attr([E, l, w, B][a || 0]), a = [y, n, f, V][a || 0], x(a) && t.css(a))
                            }; k || t.attr(E).css(e({ cursor: "default" }, y)); return t.on("touchstart", function (a) { return a.stopPropagation() }).on("click", function (a) { 3 !== G && d.call(t, a) })
                        }; z.prototype.crispLine = function (e, g, b) { void 0 === b && (b = "round"); var d = e[0], m = e[1]; a(d[1]) && d[1] === m[1] && (d[1] = m[1] = Math[b](d[1]) - g % 2 / 2); a(d[2]) && d[2] === m[2] && (d[2] = m[2] = Math[b](d[2]) + g % 2 / 2); return e }; z.prototype.path = function (a) {
                            var g = this.styledMode ? {} : { fill: "none" };
                            G(a) ? g.d = a : x(a) && e(g, a); return this.createElement("path").attr(g)
                        }; z.prototype.circle = function (a, e, g) { a = x(a) ? a : "undefined" === typeof a ? {} : { x: a, y: e, r: g }; e = this.createElement("circle"); e.xSetter = e.ySetter = function (a, e, g) { g.setAttribute("c" + e, a) }; return e.attr(a) }; z.prototype.arc = function (a, e, g, b, d, m) { x(a) ? (b = a, e = b.y, g = b.r, a = b.x) : b = { innerR: b, start: d, end: m }; a = this.symbol("arc", a, e, g, g, b); a.r = g; return a }; z.prototype.rect = function (a, e, g, b, d, m) {
                            d = x(a) ? a.r : d; var h = this.createElement("rect"); a = x(a) ? a : "undefined" ===
                                typeof a ? {} : { x: a, y: e, width: Math.max(g, 0), height: Math.max(b, 0) }; this.styledMode || ("undefined" !== typeof m && (a["stroke-width"] = m, a = h.crisp(a)), a.fill = "none"); d && (a.r = d); h.rSetter = function (a, e, g) { h.r = a; l(g, { rx: a, ry: a }) }; h.rGetter = function () { return h.r || 0 }; return h.attr(a)
                        }; z.prototype.setSize = function (a, e, g) { this.width = a; this.height = e; this.boxWrapper.animate({ width: a, height: e }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: P(g, !0) ? void 0 : 0 }); this.alignElements() };
                z.prototype.g = function (a) { var e = this.createElement("g"); return a ? e.attr({ "class": "highcharts-" + a }) : e }; z.prototype.image = function (a, e, g, b, d, l) {
                    var h = { preserveAspectRatio: "none" }, x = function (a, e) { a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : a.setAttribute("hc-svg-href", e) }; m(e) && (h.x = e); m(g) && (h.y = g); m(b) && (h.width = b); m(d) && (h.height = d); var c = this.createElement("image").attr(h); e = function (e) { x(c.element, a); l.call(c, e) }; l ? (x(c.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                        g = new t.Image, q(g, "load", e), g.src = a, g.complete && e({})) : x(c.element, a); return c
                }; z.prototype.symbol = function (b, m, l, h, x, c) {
                    var q = this, B = /^url\((.*?)\)$/, t = B.test(b), p = !t && (this.symbols[b] ? b : "circle"), z = p && this.symbols[p], k; if (z) { "number" === typeof m && (k = z.call(this.symbols, Math.round(m || 0), Math.round(l || 0), h || 0, x || 0, c)); var G = this.path(k); q.styledMode || G.attr("fill", "none"); e(G, { symbolName: p || void 0, x: m, y: l, width: h, height: x }); c && e(G, c) } else if (t) {
                        var E = b.match(B)[1]; var f = G = this.image(E); f.imgwidth =
                            P(y[E] && y[E].width, c && c.width); f.imgheight = P(y[E] && y[E].height, c && c.height); var V = function (a) { return a.attr({ width: a.width, height: a.height }) };["width", "height"].forEach(function (e) {
                                f[e + "Setter"] = function (e, g) {
                                    var b = this["img" + g]; this[g] = e; a(b) && (c && "within" === c.backgroundSize && this.width && this.height && (b = Math.round(b * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(g, b), this.alignByTranslate || (e = ((this[g] || 0) - b) / 2, this.attr("width" === g ? { translateX: e } :
                                        { translateY: e })))
                                }
                            }); a(m) && f.attr({ x: m, y: l }); f.isImg = !0; a(f.imgwidth) && a(f.imgheight) ? V(f) : (f.attr({ width: 0, height: 0 }), g("img", { onload: function () { var a = n[q.chartIndex]; 0 === this.width && (w(this, { position: "absolute", top: "-999em" }), d.body.appendChild(this)); y[E] = { width: this.width, height: this.height }; f.imgwidth = this.width; f.imgheight = this.height; f.element && V(f); this.parentNode && this.parentNode.removeChild(this); q.imgCount--; if (!q.imgCount && a && !a.hasLoaded) a.onload() }, src: E }), this.imgCount++)
                    } return G
                };
                z.prototype.clipRect = function (a, e, g, b) { var d = I() + "-", m = this.createElement("clipPath").attr({ id: d }).add(this.defs); a = this.rect(a, e, g, b, 0).add(m); a.id = d; a.clipPath = m; a.count = 0; return a }; z.prototype.text = function (e, g, b, d) {
                    var m = {}; if (d && (this.allowHTML || !this.forExport)) return this.html(e, g, b); m.x = Math.round(g || 0); b && (m.y = Math.round(b)); a(e) && (m.text = e); e = this.createElement("text").attr(m); if (!d || this.forExport && !this.allowHTML) e.xSetter = function (a, e, g) {
                        for (var b = g.getElementsByTagName("tspan"), d = g.getAttribute(e),
                            m = 0, l; m < b.length; m++)l = b[m], l.getAttribute(e) === d && l.setAttribute(e, a); g.setAttribute(e, a)
                    }; return e
                }; z.prototype.fontMetrics = function (a, e) { a = !this.styledMode && /px/.test(a) || !t.getComputedStyle ? a || e && e.style && e.style.fontSize || this.style && this.style.fontSize : e && r.prototype.getStyle.call(e, "font-size"); a = /px/.test(a) ? L(a) : 12; e = 24 > a ? a + 3 : Math.round(1.2 * a); return { h: e, b: Math.round(.8 * e), f: a } }; z.prototype.rotCorr = function (a, e, g) {
                    var b = a; e && g && (b = Math.max(b * Math.cos(e * k), 4)); return {
                        x: -a / 3 * Math.sin(e * k),
                        y: b
                    }
                }; z.prototype.pathToSegments = function (a) { for (var e = [], g = [], b = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, d = 0; d < a.length; d++)J(g[0]) && m(a[d]) && g.length === b[g[0].toUpperCase()] && a.splice(d, 0, g[0].replace("M", "L").replace("m", "l")), "string" === typeof a[d] && (g.length && e.push(g.slice(0)), g.length = 0), g.push(a[d]); e.push(g.slice(0)); return e }; z.prototype.label = function (a, e, g, b, d, m, l, h, x) { return new C(this, a, e, g, b, d, m, l, h, x) }; z.prototype.alignElements = function () { this.alignedObjects.forEach(function (a) { return a.align() }) };
                return z
            }(); e(v.prototype, { Element: r, SVG_NS: E, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: F, draw: z }); D.registerRendererType("svg", v, !0); ""; return v
    }); H(f, "Core/Renderer/HTML/HTMLElement.js", [f["Core/Globals.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (c, f, v) {
        var I = this && this.__extends || function () {
            var b = function (d, h) {
                b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) {
                    for (var h in d) d.hasOwnProperty(h) &&
                        (b[h] = d[h])
                }; return b(d, h)
            }; return function (d, h) { function c() { this.constructor = d } b(d, h); d.prototype = null === h ? Object.create(h) : (c.prototype = h.prototype, new c) }
        }(), r = c.isFirefox, C = c.isMS, F = c.isWebKit, A = c.win, u = v.css, n = v.defined, k = v.extend, d = v.pick, b = v.pInt; return function (h) {
            function c() { return null !== h && h.apply(this, arguments) || this } I(c, h); c.compose = function (b) {
                if (-1 === c.composedClasses.indexOf(b)) {
                    c.composedClasses.push(b); var d = c.prototype, h = b.prototype; h.getSpanCorrection = d.getSpanCorrection; h.htmlCss =
                        d.htmlCss; h.htmlGetBBox = d.htmlGetBBox; h.htmlUpdateTransform = d.htmlUpdateTransform; h.setSpanRotation = d.setSpanRotation
                } return b
            }; c.prototype.getSpanCorrection = function (b, d, h) { this.xCorr = -b * h; this.yCorr = -d }; c.prototype.htmlCss = function (b) {
                var h = "SPAN" === this.element.tagName && b && "width" in b, c = d(h && b.width, void 0); if (h) { delete b.width; this.textWidth = c; var t = !0 } b && "ellipsis" === b.textOverflow && (b.whiteSpace = "nowrap", b.overflow = "hidden"); this.styles = k(this.styles, b); u(this.element, b); t && this.htmlUpdateTransform();
                return this
            }; c.prototype.htmlGetBBox = function () { var b = this.element; return { x: b.offsetLeft, y: b.offsetTop, width: b.offsetWidth, height: b.offsetHeight } }; c.prototype.htmlUpdateTransform = function () {
                if (this.added) {
                    var d = this.renderer, h = this.element, c = this.translateX || 0, t = this.translateY || 0, q = this.x || 0, l = this.y || 0, g = this.textAlign || "left", w = { left: 0, center: .5, right: 1 }[g], a = this.styles; a = a && a.whiteSpace; u(h, { marginLeft: c, marginTop: t }); !d.styledMode && this.shadows && this.shadows.forEach(function (a) {
                        u(a, {
                            marginLeft: c +
                                1, marginTop: t + 1
                        })
                    }); this.inverted && [].forEach.call(h.childNodes, function (a) { d.invertChild(a, h) }); if ("SPAN" === h.tagName) {
                        var B = this.rotation, e = this.textWidth && b(this.textWidth), k = [B, g, h.innerHTML, this.textWidth, this.textAlign].join(), m = void 0; m = !1; if (e !== this.oldTextWidth) {
                            if (this.textPxLength) var x = this.textPxLength; else u(h, { width: "", whiteSpace: a || "nowrap" }), x = h.offsetWidth; (e > this.oldTextWidth || x > e) && (/[ \-]/.test(h.textContent || h.innerText) || "ellipsis" === h.style.textOverflow) && (u(h, {
                                width: x > e ||
                                    B ? e + "px" : "auto", display: "block", whiteSpace: a || "normal"
                            }), this.oldTextWidth = e, m = !0)
                        } this.hasBoxWidthChanged = m; k !== this.cTT && (m = d.fontMetrics(h.style.fontSize, h).b, !n(B) || B === (this.oldRotation || 0) && g === this.oldAlign || this.setSpanRotation(B, w, m), this.getSpanCorrection(!n(B) && this.textPxLength || h.offsetWidth, m, w, B, g)); u(h, { left: q + (this.xCorr || 0) + "px", top: l + (this.yCorr || 0) + "px" }); this.cTT = k; this.oldRotation = B; this.oldAlign = g
                    }
                } else this.alignOnAdd = !0
            }; c.prototype.setSpanRotation = function (b, d, h) {
                var c = {},
                    q = C && !/Edge/.test(A.navigator.userAgent) ? "-ms-transform" : F ? "-webkit-transform" : r ? "MozTransform" : A.opera ? "-o-transform" : void 0; q && (c[q] = c.transform = "rotate(" + b + "deg)", c[q + (r ? "Origin" : "-origin")] = c.transformOrigin = 100 * d + "% " + h + "px", u(this.element, c))
            }; c.composedClasses = []; return c
        }(f)
    }); H(f, "Core/Renderer/HTML/HTMLRenderer.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
        var r = this && this.__extends ||
            function () { var c = function (k, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var h in d) d.hasOwnProperty(h) && (b[h] = d[h]) }; return c(k, d) }; return function (k, d) { function b() { this.constructor = k } c(k, d); k.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) } }(), I = D.attr, F = D.createElement, A = D.extend, u = D.pick; return function (n) {
                function k() { return null !== n && n.apply(this, arguments) || this } r(k, n); k.compose = function (d) {
                    -1 === k.composedClasses.indexOf(d) &&
                        (k.composedClasses.push(d), d.prototype.html = k.prototype.html); return d
                }; k.prototype.html = function (d, b, h) {
                    var k = this.createElement("span"), z = k.element, n = k.renderer, y = n.isSVG, t = function (b, d) { ["opacity", "visibility"].forEach(function (g) { b[g + "Setter"] = function (l, a, h) { var e = b.div ? b.div.style : d; f.prototype[g + "Setter"].call(this, l, a, h); e && (e[a] = l) } }); b.addedSetters = !0 }; k.textSetter = function (b) {
                        b !== this.textStr && (delete this.bBox, delete this.oldTextWidth, c.setElementHTML(this.element, u(b, "")), this.textStr =
                            b, k.doTransform = !0)
                    }; y && t(k, k.element.style); k.xSetter = k.ySetter = k.alignSetter = k.rotationSetter = function (b, d) { "align" === d ? k.alignValue = k.textAlign = b : k[d] = b; k.doTransform = !0 }; k.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; k.attr({ text: d, x: Math.round(b), y: Math.round(h) }).css({ position: "absolute" }); n.styledMode || k.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }); z.style.whiteSpace = "nowrap"; k.css = k.htmlCss; y && (k.add = function (b) {
                        var d =
                            n.box.parentNode, g = []; if (this.parentGroup = b) {
                                var h = b.div; if (!h) {
                                    for (; b;)g.push(b), b = b.parentGroup; g.reverse().forEach(function (a) {
                                        function b(e, g) { a[g] = e; "translateX" === g ? m.left = e + "px" : m.top = e + "px"; a.doTransform = !0 } var e = I(a.element, "class"), l = a.styles || {}; h = a.div = a.div || F("div", e ? { className: e } : void 0, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, cursor: l.cursor, pointerEvents: l.pointerEvents, visibility: a.visibility }, h || d); var m = h.style;
                                        A(a, { classSetter: function (a) { return function (e) { this.element.setAttribute("class", e); a.className = e } }(h), on: function () { g[0].div && k.on.apply({ element: g[0].div, onEvents: a.onEvents }, arguments); return a }, translateXSetter: b, translateYSetter: b }); a.addedSetters || t(a)
                                    })
                                }
                            } else h = d; h.appendChild(z); k.added = !0; k.alignOnAdd && k.htmlUpdateTransform(); return k
                    }); return k
                }; k.composedClasses = []; return k
            }(v)
    }); H(f, "Core/Axis/AxisDefaults.js", [], function () {
        var c; (function (c) {
            c.defaultXAxisOptions = {
                alignTicks: !0, allowDecimals: void 0,
                panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 }, minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: {
                    autoRotation: void 0, autoRotationLimit: 80, distance: void 0, enabled: !0, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0,
                    step: 0, useHTML: !1, x: 0, zIndex: 7, style: { color: "#666666", cursor: "default", fontSize: "11px" }
                }, maxPadding: .01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, offset: void 0, opposite: !1, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", rotation: 0, useHTML: !1, x: 0, y: 0, style: { color: "#666666" } }, type: "linear",
                uniqueNames: !0, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#ccd6eb"
            }; c.defaultYAxisOptions = {
                reversedStacks: !0, endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: {
                    animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function () {
                        var c = this.axis.chart.numberFormatter;
                        return c(this.total, -1)
                    }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" }
                }, gridLineWidth: 1, lineWidth: 0
            }; c.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } }; c.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } }; c.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; c.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }
        })(c || (c = {})); return c
    }); H(f, "Core/Foundation.js", [f["Core/Utilities.js"]],
        function (c) { var f = c.addEvent, v = c.isFunction, D = c.objectEach, r = c.removeEvent, C; (function (c) { c.registerEventOptions = function (c, u) { c.eventOptions = c.eventOptions || {}; D(u.events, function (n, k) { c.eventOptions[k] !== n && (c.eventOptions[k] && (r(c, k, c.eventOptions[k]), delete c.eventOptions[k]), v(n) && (c.eventOptions[k] = n, f(c, k, n))) }) } })(C || (C = {})); return C }); H(f, "Core/Axis/Tick.js", [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f, v) {
            var I = f.deg2rad, r = v.clamp, C = v.correctFloat,
                F = v.defined, A = v.destroyObjectProperties, u = v.extend, n = v.fireEvent, k = v.isNumber, d = v.merge, b = v.objectEach, h = v.pick; f = function () {
                    function p(b, d, h, c, q) { this.isNewLabel = this.isNew = !0; this.axis = b; this.pos = d; this.type = h || ""; this.parameters = q || {}; this.tickmarkOffset = this.parameters.tickmarkOffset; this.options = this.parameters.options; n(this, "init"); h || c || this.addLabel() } p.prototype.addLabel = function () {
                        var b = this, d = b.axis, p = d.options, t = d.chart, q = d.categories, l = d.logarithmic, g = d.names, w = b.pos, a = h(b.options &&
                            b.options.labels, p.labels), B = d.tickPositions, e = w === B[0], G = w === B[B.length - 1], m = (!a.step || 1 === a.step) && 1 === d.tickInterval; B = B.info; var x = b.label, f; q = this.parameters.category || (q ? h(q[w], g[w], w) : w); l && k(q) && (q = C(l.lin2log(q))); if (d.dateTime) if (B) { var M = t.time.resolveDTLFormat(p.dateTimeLabelFormats[!p.grid && B.higherRanks[w] || B.unitName]); var P = M.main } else k(q) && (P = d.dateTime.getXDateFormat(q, p.dateTimeLabelFormats || {})); b.isFirst = e; b.isLast = G; var L = {
                                axis: d, chart: t, dateTimeLabelFormat: P, isFirst: e, isLast: G,
                                pos: w, tick: b, tickPositionInfo: B, value: q
                            }; n(this, "labelFormat", L); var r = function (e) { return a.formatter ? a.formatter.call(e, e) : a.format ? (e.text = d.defaultLabelFormatter.call(e), c.format(a.format, e, t)) : d.defaultLabelFormatter.call(e, e) }; p = r.call(L, L); var A = M && M.list; b.shortenLabel = A ? function () { for (f = 0; f < A.length; f++)if (u(L, { dateTimeLabelFormat: A[f] }), x.attr({ text: r.call(L, L) }), x.getBBox().width < d.getSlotWidth(b) - 2 * a.padding) return; x.attr({ text: "" }) } : void 0; m && d._addedPlotLB && b.moveLabel(p, a); F(x) || b.movedLabel ?
                                x && x.textStr !== p && !m && (!x.textWidth || a.style.width || x.styles.width || x.css({ width: null }), x.attr({ text: p }), x.textPxLength = x.getBBox().width) : (b.label = x = b.createLabel({ x: 0, y: 0 }, p, a), b.rotation = 0)
                    }; p.prototype.createLabel = function (b, h, c) { var k = this.axis, q = k.chart; if (b = F(h) && c.enabled ? q.renderer.text(h, b.x, b.y, c.useHTML).add(k.labelGroup) : null) q.styledMode || b.css(d(c.style)), b.textPxLength = b.getBBox().width; return b }; p.prototype.destroy = function () { A(this, this.axis) }; p.prototype.getPosition = function (b,
                        d, h, c) { var q = this.axis, l = q.chart, g = c && l.oldChartHeight || l.chartHeight; b = { x: b ? C(q.translate(d + h, void 0, void 0, c) + q.transB) : q.left + q.offset + (q.opposite ? (c && l.oldChartWidth || l.chartWidth) - q.right - q.left : 0), y: b ? g - q.bottom + q.offset - (q.opposite ? q.height : 0) : C(g - q.translate(d + h, void 0, void 0, c) - q.transB) }; b.y = r(b.y, -1E5, 1E5); n(this, "afterGetPosition", { pos: b }); return b }; p.prototype.getLabelPosition = function (b, d, h, c, q, l, g, w) {
                            var a = this.axis, B = a.transA, e = a.isLinked && a.linkedParent ? a.linkedParent.reversed : a.reversed,
                                k = a.staggerLines, m = a.tickRotCorr || { x: 0, y: 0 }, x = c || a.reserveSpaceDefault ? 0 : -a.labelOffset * ("center" === a.labelAlign ? .5 : 1), t = {}; h = 0 === a.side ? h.rotation ? -8 : -h.getBBox().height : 2 === a.side ? m.y + 8 : Math.cos(h.rotation * I) * (m.y - h.getBBox(!1, 0).height / 2); F(q.y) && (h = 0 === a.side && a.horiz ? q.y + h : q.y); b = b + q.x + x + m.x - (l && c ? l * B * (e ? -1 : 1) : 0); d = d + h - (l && !c ? l * B * (e ? 1 : -1) : 0); k && (c = g / (w || 1) % k, a.opposite && (c = k - c - 1), d += a.labelOffset / k * c); t.x = b; t.y = Math.round(d); n(this, "afterGetLabelPosition", { pos: t, tickmarkOffset: l, index: g }); return t
                        };
                    p.prototype.getLabelSize = function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }; p.prototype.getMarkPath = function (b, d, h, c, q, l) { return l.crispLine([["M", b, d], ["L", b + (q ? 0 : -h), d + (q ? h : 0)]], c) }; p.prototype.handleOverflow = function (b) {
                        var d = this.axis, c = d.options.labels, k = b.x, q = d.chart.chartWidth, l = d.chart.spacing, g = h(d.labelLeft, Math.min(d.pos, l[3])); l = h(d.labelRight, Math.max(d.isRadial ? 0 : d.pos + d.len, q - l[1])); var w = this.label, a = this.rotation, B = { left: 0, center: .5, right: 1 }[d.labelAlign ||
                            w.attr("align")], e = w.getBBox().width, p = d.getSlotWidth(this), m = {}, x = p, f = 1, z; if (a || "justify" !== c.overflow) 0 > a && k - B * e < g ? z = Math.round(k / Math.cos(a * I) - g) : 0 < a && k + B * e > l && (z = Math.round((q - k) / Math.cos(a * I))); else if (q = k + (1 - B) * e, k - B * e < g ? x = b.x + x * (1 - B) - g : q > l && (x = l - b.x + x * B, f = -1), x = Math.min(p, x), x < p && "center" === d.labelAlign && (b.x += f * (p - x - B * (p - Math.min(e, x)))), e > x || d.autoRotation && (w.styles || {}).width) z = x; z && (this.shortenLabel ? this.shortenLabel() : (m.width = Math.floor(z) + "px", (c.style || {}).textOverflow || (m.textOverflow =
                                "ellipsis"), w.css(m)))
                    }; p.prototype.moveLabel = function (d, h) { var c = this, k = c.label, q = c.axis, l = q.reversed, g = !1; k && k.textStr === d ? (c.movedLabel = k, g = !0, delete c.label) : b(q.ticks, function (a) { g || a.isNew || a === c || !a.label || a.label.textStr !== d || (c.movedLabel = a.label, g = !0, a.labelPos = c.movedLabel.xy, delete a.label) }); if (!g && (c.labelPos || k)) { var w = c.labelPos || k.xy; k = q.horiz ? l ? 0 : q.width + q.left : w.x; q = q.horiz ? w.y : l ? q.width + q.left : 0; c.movedLabel = c.createLabel({ x: k, y: q }, d, h); c.movedLabel && c.movedLabel.attr({ opacity: 0 }) } };
                    p.prototype.render = function (b, d, c) { var k = this.axis, q = k.horiz, l = this.pos, g = h(this.tickmarkOffset, k.tickmarkOffset); l = this.getPosition(q, l, g, d); g = l.x; var w = l.y; k = q && g === k.pos + k.len || !q && w === k.pos ? -1 : 1; q = h(c, this.label && this.label.newOpacity, 1); c = h(c, 1); this.isActive = !0; this.renderGridLine(d, c, k); this.renderMark(l, c, k); this.renderLabel(l, d, q, b); this.isNew = !1; n(this, "afterRender") }; p.prototype.renderGridLine = function (b, d, c) {
                        var k = this.axis, q = k.options, l = {}, g = this.pos, w = this.type, a = h(this.tickmarkOffset,
                            k.tickmarkOffset), B = k.chart.renderer, e = this.gridLine, p = q.gridLineWidth, m = q.gridLineColor, x = q.gridLineDashStyle; "minor" === this.type && (p = q.minorGridLineWidth, m = q.minorGridLineColor, x = q.minorGridLineDashStyle); e || (k.chart.styledMode || (l.stroke = m, l["stroke-width"] = p || 0, l.dashstyle = x), w || (l.zIndex = 1), b && (d = 0), this.gridLine = e = B.path().attr(l).addClass("highcharts-" + (w ? w + "-" : "") + "grid-line").add(k.gridGroup)); if (e && (c = k.getPlotLinePath({ value: g + a, lineWidth: e.strokeWidth() * c, force: "pass", old: b }))) e[b || this.isNew ?
                                "attr" : "animate"]({ d: c, opacity: d })
                    }; p.prototype.renderMark = function (b, d, c) {
                        var k = this.axis, q = k.options, l = k.chart.renderer, g = this.type, w = k.tickSize(g ? g + "Tick" : "tick"), a = b.x; b = b.y; var B = h(q["minor" !== g ? "tickWidth" : "minorTickWidth"], !g && k.isXAxis ? 1 : 0); q = q["minor" !== g ? "tickColor" : "minorTickColor"]; var e = this.mark, p = !e; w && (k.opposite && (w[0] = -w[0]), e || (this.mark = e = l.path().addClass("highcharts-" + (g ? g + "-" : "") + "tick").add(k.axisGroup), k.chart.styledMode || e.attr({ stroke: q, "stroke-width": B })), e[p ? "attr" : "animate"]({
                            d: this.getMarkPath(a,
                                b, w[0], e.strokeWidth() * c, k.horiz, l), opacity: d
                        }))
                    }; p.prototype.renderLabel = function (b, d, c, p) {
                        var q = this.axis, l = q.horiz, g = q.options, w = this.label, a = g.labels, B = a.step; q = h(this.tickmarkOffset, q.tickmarkOffset); var e = b.x; b = b.y; var G = !0; w && k(e) && (w.xy = b = this.getLabelPosition(e, b, w, l, a, q, p, B), this.isFirst && !this.isLast && !g.showFirstLabel || this.isLast && !this.isFirst && !g.showLastLabel ? G = !1 : !l || a.step || a.rotation || d || 0 === c || this.handleOverflow(b), B && p % B && (G = !1), G && k(b.y) ? (b.opacity = c, w[this.isNewLabel ? "attr" :
                            "animate"](b).show(!0), this.isNewLabel = !1) : (w.hide(), this.isNewLabel = !0))
                    }; p.prototype.replaceMovedLabel = function () { var b = this.label, d = this.axis, h = d.reversed; if (b && !this.isNew) { var c = d.horiz ? h ? d.left : d.width + d.left : b.xy.x; h = d.horiz ? b.xy.y : h ? d.width + d.top : d.top; b.animate({ x: c, y: h, opacity: 0 }, void 0, b.destroy); delete this.label } d.isDirty = !0; this.label = this.movedLabel; delete this.movedLabel }; return p
                }(); ""; return f
        }); H(f, "Core/Axis/Axis.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/AxisDefaults.js"],
        f["Core/Color/Color.js"], f["Core/DefaultOptions.js"], f["Core/Foundation.js"], f["Core/Globals.js"], f["Core/Axis/Tick.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F, A) {
            var u = c.animObject, n = D.defaultOptions, k = r.registerEventOptions, d = C.deg2rad, b = A.arrayMax, h = A.arrayMin, p = A.clamp, z = A.correctFloat, E = A.defined, y = A.destroyObjectProperties, t = A.erase, q = A.error, l = A.extend, g = A.fireEvent, w = A.isArray, a = A.isNumber, B = A.isString, e = A.merge, G = A.normalizeTickInterval, m = A.objectEach, x = A.pick, J = A.relativeLength,
                M = A.removeEvent, P = A.splat, L = A.syncTimeout, I = function (a, e) { return G(e, void 0, void 0, x(a.options.allowDecimals, .5 > e || void 0 !== a.tickAmount), !!a.tickAmount) }; c = function () {
                    function c(a, e) {
                        this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange =
                            this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0; this.init(a, e)
                    } c.prototype.init = function (e, b) {
                        var d = b.isX; this.chart =
                            e; this.horiz = e.inverted && !this.isZAxis ? !d : d; this.isXAxis = d; this.coll = this.coll || (d ? "xAxis" : "yAxis"); g(this, "init", { userOptions: b }); this.opposite = x(b.opposite, this.opposite); this.side = x(b.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(b); var m = this.options, c = m.labels, h = m.type; this.userOptions = b; this.minPixelPadding = 0; this.reversed = x(m.reversed, this.reversed); this.visible = m.visible; this.zoomEnabled = m.zoomEnabled; this.hasNames = "category" === h || !0 === m.categories; this.categories =
                                m.categories || (this.hasNames ? [] : void 0); this.names || (this.names = [], this.names.keys = {}); this.plotLinesAndBandsGroups = {}; this.positiveValuesOnly = !!this.logarithmic; this.isLinked = E(m.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = m.minRange || m.maxZoom; this.range = m.range; this.offset = m.offset || 0; this.min = this.max = null; b = x(m.crosshair, P(e.options.tooltip.crosshairs)[d ? 0 : 1]); this.crosshair = !0 === b ? {} :
                                    b; -1 === e.axes.indexOf(this) && (d ? e.axes.splice(e.xAxis.length, 0, this) : e.axes.push(this), e[this.coll].push(this)); this.series = this.series || []; e.inverted && !this.isZAxis && d && "undefined" === typeof this.reversed && (this.reversed = !0); this.labelRotation = a(c.rotation) ? c.rotation : void 0; k(this, m); g(this, "afterInit")
                    }; c.prototype.setOptions = function (a) {
                        this.options = e(f.defaultXAxisOptions, "yAxis" === this.coll && f.defaultYAxisOptions, [f.defaultTopAxisOptions, f.defaultRightAxisOptions, f.defaultBottomAxisOptions, f.defaultLeftAxisOptions][this.side],
                            e(n[this.coll], a)); g(this, "afterSetOptions", { userOptions: a })
                    }; c.prototype.defaultLabelFormatter = function (e) {
                        var b = this.axis; e = this.chart.numberFormatter; var g = a(this.value) ? this.value : NaN, d = b.chart.time, m = this.dateTimeLabelFormat, c = n.lang, h = c.numericSymbols; c = c.numericSymbolMagnitude || 1E3; var l = b.logarithmic ? Math.abs(g) : b.tickInterval, x = h && h.length; if (b.categories) var k = "".concat(this.value); else if (m) k = d.dateFormat(m, g); else if (x && 1E3 <= l) for (; x-- && "undefined" === typeof k;)b = Math.pow(c, x + 1), l >= b &&
                            0 === 10 * g % b && null !== h[x] && 0 !== g && (k = e(g / b, -1) + h[x]); "undefined" === typeof k && (k = 1E4 <= Math.abs(g) ? e(g, -1) : e(g, -1, void 0, "")); return k
                    }; c.prototype.getSeriesExtremes = function () {
                        var e = this, b = e.chart, d; g(this, "getSeriesExtremes", null, function () {
                            e.hasVisibleSeries = !1; e.dataMin = e.dataMax = e.threshold = null; e.softThreshold = !e.isXAxis; e.stacking && e.stacking.buildStacks(); e.series.forEach(function (g) {
                                if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                                    var m = g.options, c = m.threshold; e.hasVisibleSeries = !0; e.positiveValuesOnly &&
                                        0 >= c && (c = null); if (e.isXAxis) { if (m = g.xData, m.length) { m = e.logarithmic ? m.filter(e.validatePositiveValue) : m; d = g.getXExtremes(m); var h = d.min; var l = d.max; a(h) || h instanceof Date || (m = m.filter(a), d = g.getXExtremes(m), h = d.min, l = d.max); m.length && (e.dataMin = Math.min(x(e.dataMin, h), h), e.dataMax = Math.max(x(e.dataMax, l), l)) } } else if (g = g.applyExtremes(), a(g.dataMin) && (h = g.dataMin, e.dataMin = Math.min(x(e.dataMin, h), h)), a(g.dataMax) && (l = g.dataMax, e.dataMax = Math.max(x(e.dataMax, l), l)), E(c) && (e.threshold = c), !m.softThreshold ||
                                            e.positiveValuesOnly) e.softThreshold = !1
                                }
                            })
                        }); g(this, "afterGetSeriesExtremes")
                    }; c.prototype.translate = function (e, b, g, d, m, c) {
                        var h = this.linkedParent || this, l = d && h.old ? h.old.min : h.min; if (!a(l)) return NaN; var x = h.minPixelPadding; m = (h.isOrdinal || h.brokenAxis && h.brokenAxis.hasBreaks || h.logarithmic && m) && h.lin2val; var k = 1, w = 0; d = d && h.old ? h.old.transA : h.transA; d || (d = h.transA); g && (k *= -1, w = h.len); h.reversed && (k *= -1, w -= k * (h.sector || h.len)); b ? (c = (e * k + w - x) / d + l, m && (c = h.lin2val(c))) : (m && (e = h.val2lin(e)), e = k * (e - l) *
                            d, c = (h.isRadial ? e : z(e)) + w + k * x + (a(c) ? d * c : 0)); return c
                    }; c.prototype.toPixels = function (a, e) { return this.translate(a, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos) }; c.prototype.toValue = function (a, e) { return this.translate(a - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0) }; c.prototype.getPlotLinePath = function (e) {
                        function b(a, e, b) { if ("pass" !== t && a < e || a > b) t ? a = p(a, e, b) : E = !0; return a } var d = this, m = d.chart, c = d.left, h = d.top, l = e.old, k = e.value, w = e.lineWidth, q = l && m.oldChartHeight || m.chartHeight, B = l && m.oldChartWidth || m.chartWidth,
                            G = d.transB, f = e.translatedValue, t = e.force, n, z, J, y, E; e = { value: k, lineWidth: w, old: l, force: t, acrossPanes: e.acrossPanes, translatedValue: f }; g(this, "getPlotLinePath", e, function (e) { f = x(f, d.translate(k, void 0, void 0, l)); f = p(f, -1E5, 1E5); n = J = Math.round(f + G); z = y = Math.round(q - f - G); a(f) ? d.horiz ? (z = h, y = q - d.bottom, n = J = b(n, c, c + d.width)) : (n = c, J = B - d.right, z = y = b(z, h, h + d.height)) : (E = !0, t = !1); e.path = E && !t ? null : m.renderer.crispLine([["M", n, z], ["L", J, y]], w || 1) }); return e.path
                    }; c.prototype.getLinearTickPositions = function (a,
                        e, b) { var g = z(Math.floor(e / a) * a); b = z(Math.ceil(b / a) * a); var d = [], m; z(g + a) === g && (m = 20); if (this.single) return [e]; for (e = g; e <= b;) { d.push(e); e = z(e + a, m); if (e === c) break; var c = e } return d }; c.prototype.getMinorTickInterval = function () { var a = this.options; return !0 === a.minorTicks ? x(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval }; c.prototype.getMinorTickPositions = function () {
                            var a = this.options, e = this.tickPositions, b = this.minorTickInterval, g = this.pointRangePadding || 0, d = this.min - g; g = this.max +
                                g; var m = g - d, c = []; if (m && m / b < this.len / 3) { var h = this.logarithmic; if (h) this.paddedTicks.forEach(function (a, e, g) { e && c.push.apply(c, h.getLogTickPositions(b, g[e - 1], g[e], !0)) }); else if (this.dateTime && "auto" === this.getMinorTickInterval()) c = c.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(b), d, g, a.startOfWeek)); else for (a = d + (e[0] - d) % b; a <= g && a !== c[0]; a += b)c.push(a) } 0 !== c.length && this.trimTicks(c); return c
                        }; c.prototype.adjustForMinRange = function () {
                            var a = this.options, e = this.logarithmic, g = this.min,
                                d = this.max, m = 0, c, l, k, w; this.isXAxis && "undefined" === typeof this.minRange && !e && (E(a.min) || E(a.max) || E(a.floor) || E(a.ceiling) ? this.minRange = null : (this.series.forEach(function (a) { k = a.xData; w = a.xIncrement ? 1 : k.length - 1; if (1 < k.length) for (c = w; 0 < c; c--)if (l = k[c] - k[c - 1], !m || l < m) m = l }), this.minRange = Math.min(5 * m, this.dataMax - this.dataMin))); if (d - g < this.minRange) {
                                    var q = this.dataMax - this.dataMin >= this.minRange; var B = this.minRange; var p = (B - d + g) / 2; p = [g - p, x(a.min, g - p)]; q && (p[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) :
                                        this.dataMin); g = b(p); d = [g + B, x(a.max, g + B)]; q && (d[2] = e ? e.log2lin(this.dataMax) : this.dataMax); d = h(d); d - g < B && (p[0] = d - B, p[1] = x(a.min, d - B), g = b(p))
                                } this.min = g; this.max = d
                        }; c.prototype.getClosest = function () { var a; this.categories ? a = 1 : this.series.forEach(function (e) { var b = e.closestPointRange, g = e.visible || !e.chart.options.chart.ignoreHiddenSeries; !e.noSharedTooltip && E(b) && g && (a = E(a) ? Math.min(a, b) : b) }); return a }; c.prototype.nameToX = function (a) {
                            var e = w(this.options.categories), b = e ? this.categories : this.names, g =
                                a.options.x; a.series.requireSorting = !1; E(g) || (g = this.options.uniqueNames && b ? e ? b.indexOf(a.name) : x(b.keys[a.name], -1) : a.series.autoIncrement()); if (-1 === g) { if (!e && b) var d = b.length } else d = g; "undefined" !== typeof d && (this.names[d] = a.name, this.names.keys[a.name] = d); return d
                        }; c.prototype.updateNames = function () {
                            var a = this, e = this.names; 0 < e.length && (Object.keys(e.keys).forEach(function (a) { delete e.keys[a] }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (e) {
                                e.xIncrement = null; if (!e.points ||
                                    e.isDirtyData) a.max = Math.max(a.max, e.xData.length - 1), e.processData(), e.generatePoints(); e.data.forEach(function (b, g) { if (b && b.options && "undefined" !== typeof b.name) { var d = a.nameToX(b); "undefined" !== typeof d && d !== b.x && (b.x = d, e.xData[g] = d) } })
                            }))
                        }; c.prototype.setAxisTranslation = function () {
                            var a = this, e = a.max - a.min, b = a.linkedParent, d = !!a.categories, m = a.isXAxis, c = a.axisPointRange || 0, h = 0, l = 0, k = a.transA; if (m || d || c) {
                                var w = a.getClosest(); b ? (h = b.minPointOffset, l = b.pointRangePadding) : a.series.forEach(function (e) {
                                    var b =
                                        d ? 1 : m ? x(e.options.pointRange, w, 0) : a.axisPointRange || 0, g = e.options.pointPlacement; c = Math.max(c, b); if (!a.single || d) e = e.is("xrange") ? !m : m, h = Math.max(h, e && B(g) ? 0 : b / 2), l = Math.max(l, e && "on" === g ? 0 : b)
                                }); b = a.ordinal && a.ordinal.slope && w ? a.ordinal.slope / w : 1; a.minPointOffset = h *= b; a.pointRangePadding = l *= b; a.pointRange = Math.min(c, a.single && d ? 1 : e); m && (a.closestPointRange = w)
                            } a.translationSlope = a.transA = k = a.staticScale || a.len / (e + l || 1); a.transB = a.horiz ? a.left : a.bottom; a.minPixelPadding = k * h; g(this, "afterSetAxisTranslation")
                        };
                    c.prototype.minFromRange = function () { return this.max - this.range }; c.prototype.setTickInterval = function (e) {
                        var b = this.chart, d = this.logarithmic, m = this.options, c = this.isXAxis, h = this.isLinked, l = m.tickPixelInterval, k = this.categories, w = this.softThreshold, B = m.maxPadding, p = m.minPadding, G = a(m.tickInterval) && 0 <= m.tickInterval ? m.tickInterval : void 0, f = a(this.threshold) ? this.threshold : null; this.dateTime || k || h || this.getTickAmount(); var t = x(this.userMin, m.min); var n = x(this.userMax, m.max); if (h) {
                            this.linkedParent = b[this.coll][m.linkedTo];
                            var J = this.linkedParent.getExtremes(); this.min = x(J.min, J.dataMin); this.max = x(J.max, J.dataMax); m.type !== this.linkedParent.options.type && q(11, 1, b)
                        } else { if (w && E(f)) if (this.dataMin >= f) J = f, p = 0; else if (this.dataMax <= f) { var y = f; B = 0 } this.min = x(t, J, this.dataMin); this.max = x(n, y, this.dataMax) } d && (this.positiveValuesOnly && !e && 0 >= Math.min(this.min, x(this.dataMin, this.min)) && q(10, 1, b), this.min = z(d.log2lin(this.min), 16), this.max = z(d.log2lin(this.max), 16)); this.range && E(this.max) && (this.userMin = this.min = t = Math.max(this.dataMin,
                            this.minFromRange()), this.userMax = n = this.max, this.range = null); g(this, "foundExtremes"); this.beforePadding && this.beforePadding(); this.adjustForMinRange(); !(k || this.axisPointRange || this.stacking && this.stacking.usePercentage || h) && E(this.min) && E(this.max) && (b = this.max - this.min) && (!E(t) && p && (this.min -= b * p), !E(n) && B && (this.max += b * B)); a(this.userMin) || (a(m.softMin) && m.softMin < this.min && (this.min = t = m.softMin), a(m.floor) && (this.min = Math.max(this.min, m.floor))); a(this.userMax) || (a(m.softMax) && m.softMax > this.max &&
                                (this.max = n = m.softMax), a(m.ceiling) && (this.max = Math.min(this.max, m.ceiling))); w && E(this.dataMin) && (f = f || 0, !E(t) && this.min < f && this.dataMin >= f ? this.min = this.options.minRange ? Math.min(f, this.max - this.minRange) : f : !E(n) && this.max > f && this.dataMax <= f && (this.max = this.options.minRange ? Math.max(f, this.min + this.minRange) : f)); a(this.min) && a(this.max) && !this.chart.polar && this.min > this.max && (E(this.options.min) ? this.max = this.min : E(this.options.max) && (this.min = this.max)); this.tickInterval = this.min === this.max || "undefined" ===
                                    typeof this.min || "undefined" === typeof this.max ? 1 : h && this.linkedParent && !G && l === this.linkedParent.options.tickPixelInterval ? G = this.linkedParent.tickInterval : x(G, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, k ? 1 : (this.max - this.min) * l / Math.max(this.len, l)); if (c && !e) { var M = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max); this.series.forEach(function (a) { a.forceCrop = a.forceCropping && a.forceCropping(); a.processData(M) }); g(this, "postProcessData", { hasExtemesChanged: M }) } this.setAxisTranslation();
                        g(this, "initialAxisTranslation"); this.pointRange && !G && (this.tickInterval = Math.max(this.pointRange, this.tickInterval)); e = x(m.minTickInterval, this.dateTime && !this.series.some(function (a) { return a.noSharedTooltip }) ? this.closestPointRange : 0); !G && this.tickInterval < e && (this.tickInterval = e); this.dateTime || this.logarithmic || G || (this.tickInterval = I(this, this.tickInterval)); this.tickAmount || (this.tickInterval = this.unsquish()); this.setTickPositions()
                    }; c.prototype.setTickPositions = function () {
                        var a = this.options,
                            e = a.tickPositions, b = this.getMinorTickInterval(), d = this.hasVerticalPanning(), m = "colorAxis" === this.coll, c = (m || !d) && a.startOnTick; d = (m || !d) && a.endOnTick; m = a.tickPositioner; this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b; this.single = this.min === this.max && E(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals); this.tickPositions = b = e && e.slice(); if (!b) {
                                if (this.ordinal &&
                                    this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))) if (this.dateTime) b = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0); else if (this.logarithmic) b = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max); else for (var h = a = this.tickInterval; h <= 2 * a;)if (b = this.getLinearTickPositions(this.tickInterval, this.min, this.max),
                                        this.tickAmount && b.length > this.tickAmount) this.tickInterval = I(this, h *= 1.1); else break; else b = [this.min, this.max], q(19, !1, this.chart); b.length > this.len && (b = [b[0], b.pop()], b[0] === b[1] && (b.length = 1)); this.tickPositions = b; m && (m = m.apply(this, [this.min, this.max])) && (this.tickPositions = b = m)
                            } this.paddedTicks = b.slice(0); this.trimTicks(b, c, d); this.isLinked || (this.single && 2 > b.length && !this.categories && !this.series.some(function (a) { return a.is("heatmap") && "between" === a.options.pointPlacement }) && (this.min -= .5,
                                this.max += .5), e || m || this.adjustTickAmount()); g(this, "afterSetTickPositions")
                    }; c.prototype.trimTicks = function (a, e, b) { var d = a[0], m = a[a.length - 1], c = !this.isOrdinal && this.minPointOffset || 0; g(this, "trimTicks"); if (!this.isLinked) { if (e && -Infinity !== d) this.min = d; else for (; this.min - c > a[0];)a.shift(); if (b) this.max = m; else for (; this.max + c < a[a.length - 1];)a.pop(); 0 === a.length && E(d) && !this.options.tickPositions && a.push((m + d) / 2) } }; c.prototype.alignToOthers = function () {
                        var e = this, b = [this], g = e.options, d = "yAxis" === this.coll &&
                            this.chart.options.chart.alignThresholds, m = [], c; e.thresholdAlignment = void 0; if ((!1 !== this.chart.options.chart.alignTicks && g.alignTicks || d) && !1 !== g.startOnTick && !1 !== g.endOnTick && !e.logarithmic) { var h = function (a) { var e = a.options; return [a.horiz ? e.left : e.top, e.width, e.height, e.pane].join() }, l = h(this); this.chart[this.coll].forEach(function (a) { var g = a.series; g.length && g.some(function (a) { return a.visible }) && a !== e && h(a) === l && (c = !0, b.push(a)) }) } if (c && d) {
                                b.forEach(function (b) {
                                    b = b.getThresholdAlignment(e);
                                    a(b) && m.push(b)
                                }); var x = 1 < m.length ? m.reduce(function (a, e) { return a + e }, 0) / m.length : void 0; b.forEach(function (a) { a.thresholdAlignment = x })
                            } return c
                    }; c.prototype.getThresholdAlignment = function (e) { (!a(this.dataMin) || this !== e && this.series.some(function (a) { return a.isDirty || a.isDirtyData })) && this.getSeriesExtremes(); if (a(this.threshold)) return e = p((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (e = 1 - e), e }; c.prototype.getTickAmount = function () {
                        var a = this.options,
                            e = a.tickPixelInterval, b = a.tickAmount; !E(a.tickInterval) && !b && this.len < e && !this.isRadial && !this.logarithmic && a.startOnTick && a.endOnTick && (b = 2); !b && this.alignToOthers() && (b = Math.ceil(this.len / e) + 1); 4 > b && (this.finalTickAmt = b, b = 5); this.tickAmount = b
                    }; c.prototype.adjustTickAmount = function () {
                        var e = this, b = e.finalTickAmt, g = e.max, d = e.min, m = e.options, c = e.tickPositions, h = e.tickAmount, l = e.thresholdAlignment, k = c && c.length, w = x(e.threshold, e.softThreshold ? 0 : null); var B = e.tickInterval; if (a(l)) {
                            var q = .5 > l ? Math.ceil(l *
                                (h - 1)) : Math.floor(l * (h - 1)); m.reversed && (q = h - 1 - q)
                        } if (e.hasData() && a(d) && a(g)) {
                            l = function () { e.transA *= (k - 1) / (h - 1); e.min = m.startOnTick ? c[0] : Math.min(d, c[0]); e.max = m.endOnTick ? c[c.length - 1] : Math.max(g, c[c.length - 1]) }; if (a(q) && a(e.threshold)) { for (; c[q] !== w || c.length !== h || c[0] > d || c[c.length - 1] < g;) { c.length = 0; for (c.push(e.threshold); c.length < h;)void 0 === c[q] || c[q] > e.threshold ? c.unshift(z(c[0] - B)) : c.push(z(c[c.length - 1] + B)); if (B > 8 * e.tickInterval) break; B *= 2 } l() } else if (k < h) {
                                for (; c.length < h;)c.length % 2 || d ===
                                    w ? c.push(z(c[c.length - 1] + B)) : c.unshift(z(c[0] - B)); l()
                            } if (E(b)) { for (B = w = c.length; B--;)(3 === b && 1 === B % 2 || 2 >= b && 0 < B && B < w - 1) && c.splice(B, 1); e.finalTickAmt = void 0 }
                        }
                    }; c.prototype.setScale = function () {
                        var a = !1, e = !1; this.series.forEach(function (b) { a = a || b.isDirtyData || b.isDirty; e = e || b.xAxis && b.xAxis.isDirty || !1 }); this.setAxisSize(); var b = this.len !== (this.old && this.old.len); b || a || e || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ?
                            (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = b || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(); a && this.panningState && (this.panningState.isDirty = !0); g(this, "afterSetScale")
                    }; c.prototype.setExtremes = function (a, e, b, d, m) {
                        var c = this, h = c.chart; b = x(b, !0); c.series.forEach(function (a) { delete a.kdTree }); m = l(m, { min: a, max: e }); g(c, "setExtremes", m,
                            function () { c.userMin = a; c.userMax = e; c.eventArgs = m; b && h.redraw(d) })
                    }; c.prototype.zoom = function (a, e) {
                        var b = this, d = this.dataMin, m = this.dataMax, c = this.options, h = Math.min(d, x(c.min, d)), l = Math.max(m, x(c.max, m)); a = { newMin: a, newMax: e }; g(this, "zoom", a, function (a) {
                            var e = a.newMin, g = a.newMax; if (e !== b.min || g !== b.max) b.allowZoomOutside || (E(d) && (e < h && (e = h), e > l && (e = l)), E(m) && (g < h && (g = h), g > l && (g = l))), b.displayBtn = "undefined" !== typeof e || "undefined" !== typeof g, b.setExtremes(e, g, !1, void 0, { trigger: "zoom" }); a.zoomed =
                                !0
                        }); return a.zoomed
                    }; c.prototype.setAxisSize = function () {
                        var a = this.chart, e = this.options, b = e.offsets || [0, 0, 0, 0], g = this.horiz, d = this.width = Math.round(J(x(e.width, a.plotWidth - b[3] + b[1]), a.plotWidth)), m = this.height = Math.round(J(x(e.height, a.plotHeight - b[0] + b[2]), a.plotHeight)), c = this.top = Math.round(J(x(e.top, a.plotTop + b[0]), a.plotHeight, a.plotTop)); e = this.left = Math.round(J(x(e.left, a.plotLeft + b[3]), a.plotWidth, a.plotLeft)); this.bottom = a.chartHeight - m - c; this.right = a.chartWidth - d - e; this.len = Math.max(g ?
                            d : m, 0); this.pos = g ? e : c
                    }; c.prototype.getExtremes = function () { var a = this.logarithmic; return { min: a ? z(a.lin2log(this.min)) : this.min, max: a ? z(a.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }; c.prototype.getThreshold = function (a) { var e = this.logarithmic, b = e ? e.lin2log(this.min) : this.min; e = e ? e.lin2log(this.max) : this.max; null === a || -Infinity === a ? a = b : Infinity === a ? a = e : b > a ? a = b : e < a && (a = e); return this.translate(a, 0, 1, 0, 1) }; c.prototype.autoLabelAlign =
                        function (a) { var e = (x(a, 0) - 90 * this.side + 720) % 360; a = { align: "center" }; g(this, "autoLabelAlign", a, function (a) { 15 < e && 165 > e ? a.align = "right" : 195 < e && 345 > e && (a.align = "left") }); return a.align }; c.prototype.tickSize = function (a) { var e = this.options, b = x(e["tick" === a ? "tickWidth" : "minorTickWidth"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0), d = e["tick" === a ? "tickLength" : "minorTickLength"]; if (b && d) { "inside" === e[a + "Position"] && (d = -d); var m = [d, b] } a = { tickSize: m }; g(this, "afterTickSize", a); return a.tickSize }; c.prototype.labelMetrics =
                            function () { var a = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label) }; c.prototype.unsquish = function () {
                                var e = this.options.labels, b = this.horiz, g = this.tickInterval, m = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / g), c = e.rotation, h = this.labelMetrics(), l = Math.max(this.max - this.min, 0), k = function (a) {
                                    var e = a / (m || 1); e = 1 < e ? Math.ceil(e) : 1; e * g > l && Infinity !== a && Infinity !== m && l && (e = Math.ceil(l / g)); return z(e *
                                        g)
                                }, w = g, B, q, p = Number.MAX_VALUE; if (b) { if (!e.staggerLines && !e.step) if (a(c)) var f = [c]; else m < e.autoRotationLimit && (f = e.autoRotation); f && f.forEach(function (a) { if (a === c || a && -90 <= a && 90 >= a) { q = k(Math.abs(h.h / Math.sin(d * a))); var e = q + Math.abs(a / 360); e < p && (p = e, B = a, w = q) } }) } else e.step || (w = k(h.h)); this.autoRotation = f; this.labelRotation = x(B, a(c) ? c : 0); return w
                            }; c.prototype.getSlotWidth = function (e) {
                                var b = this.chart, g = this.horiz, d = this.options.labels, m = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), c =
                                    b.margin[3]; if (e && a(e.slotWidth)) return e.slotWidth; if (g && 2 > d.step) return d.rotation ? 0 : (this.staggerLines || 1) * this.len / m; if (!g) { e = d.style.width; if (void 0 !== e) return parseInt(String(e), 10); if (c) return c - b.spacing[3] } return .33 * b.chartWidth
                            }; c.prototype.renderUnsquish = function () {
                                var a = this.chart, e = a.renderer, b = this.tickPositions, g = this.ticks, d = this.options.labels, m = d.style, c = this.horiz, h = this.getSlotWidth(), l = Math.max(1, Math.round(h - 2 * d.padding)), x = {}, k = this.labelMetrics(), w = m.textOverflow, q = 0; B(d.rotation) ||
                                    (x.rotation = d.rotation || 0); b.forEach(function (a) { a = g[a]; a.movedLabel && a.replaceMovedLabel(); a && a.label && a.label.textPxLength > q && (q = a.label.textPxLength) }); this.maxLabelLength = q; if (this.autoRotation) q > l && q > k.h ? x.rotation = this.labelRotation : this.labelRotation = 0; else if (h) {
                                        var p = l; if (!w) {
                                            var f = "clip"; for (l = b.length; !c && l--;) {
                                                var G = b[l]; if (G = g[G].label) G.styles && "ellipsis" === G.styles.textOverflow ? G.css({ textOverflow: "clip" }) : G.textPxLength > h && G.css({ width: h + "px" }), G.getBBox().height > this.len / b.length -
                                                    (k.h - k.f) && (G.specificTextOverflow = "ellipsis")
                                            }
                                        }
                                    } x.rotation && (p = q > .5 * a.chartHeight ? .33 * a.chartHeight : q, w || (f = "ellipsis")); if (this.labelAlign = d.align || this.autoLabelAlign(this.labelRotation)) x.align = this.labelAlign; b.forEach(function (a) {
                                        var e = (a = g[a]) && a.label, b = m.width, d = {}; e && (e.attr(x), a.shortenLabel ? a.shortenLabel() : p && !b && "nowrap" !== m.whiteSpace && (p < e.textPxLength || "SPAN" === e.element.tagName) ? (d.width = p + "px", w || (d.textOverflow = e.specificTextOverflow || f), e.css(d)) : e.styles && e.styles.width && !d.width &&
                                            !b && e.css({ width: null }), delete e.specificTextOverflow, a.rotation = x.rotation)
                                    }, this); this.tickRotCorr = e.rotCorr(k.b, this.labelRotation || 0, 0 !== this.side)
                            }; c.prototype.hasData = function () { return this.series.some(function (a) { return a.hasData() }) || this.options.showEmpty && E(this.min) && E(this.max) }; c.prototype.addTitle = function (a) {
                                var b = this.chart.renderer, g = this.horiz, d = this.opposite, m = this.options.title, c = this.chart.styledMode, h; this.axisTitle || ((h = m.textAlign) || (h = (g ? { low: "left", middle: "center", high: "right" } :
                                    { low: d ? "right" : "left", middle: "center", high: d ? "left" : "right" })[m.align]), this.axisTitle = b.text(m.text || "", 0, 0, m.useHTML).attr({ zIndex: 7, rotation: m.rotation, align: h }).addClass("highcharts-axis-title"), c || this.axisTitle.css(e(m.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0); c || m.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }); this.axisTitle[a ? "show" : "hide"](a)
                            }; c.prototype.generateTick = function (a) { var e = this.ticks; e[a] ? e[a].addLabel() : e[a] = new F(this, a) }; c.prototype.getOffset =
                                function () {
                                    var a = this, e = this, b = e.chart, d = e.horiz, c = e.options, h = e.side, l = e.ticks, k = e.tickPositions, w = e.coll, B = e.axisParent, q = b.renderer, p = b.inverted && !e.isZAxis ? [1, 0, 3, 2][h] : h, G = e.hasData(), f = c.title, t = c.labels, n = b.axisOffset; b = b.clipOffset; var z = [-1, 1, 1, -1][h], J = c.className, y, M = 0, u = 0, P = 0; e.showAxis = y = G || c.showEmpty; e.staggerLines = e.horiz && t.staggerLines || void 0; if (!e.axisGroup) {
                                        var L = function (e, b, d) {
                                            return q.g(e).attr({ zIndex: d }).addClass("highcharts-".concat(w.toLowerCase()).concat(b, " ") + (a.isRadial ?
                                                "highcharts-radial-axis".concat(b, " ") : "") + (J || "")).add(B)
                                        }; e.gridGroup = L("grid", "-grid", c.gridZIndex); e.axisGroup = L("axis", "", c.zIndex); e.labelGroup = L("axis-labels", "-labels", t.zIndex)
                                    } G || e.isLinked ? (k.forEach(function (a) { e.generateTick(a) }), e.renderUnsquish(), e.reserveSpaceDefault = 0 === h || 2 === h || { 1: "left", 3: "right" }[h] === e.labelAlign, x(t.reserveSpace, "center" === e.labelAlign ? !0 : null, e.reserveSpaceDefault) && k.forEach(function (a) { P = Math.max(l[a].getLabelSize(), P) }), e.staggerLines && (P *= e.staggerLines),
                                        e.labelOffset = P * (e.opposite ? -1 : 1)) : m(l, function (a, e) { a.destroy(); delete l[e] }); if (f && f.text && !1 !== f.enabled && (e.addTitle(y), y && !1 !== f.reserveSpace)) { e.titleOffset = M = e.axisTitle.getBBox()[d ? "height" : "width"]; var r = f.offset; u = E(r) ? 0 : x(f.margin, d ? 5 : 10) } e.renderLine(); e.offset = z * x(c.offset, n[h] ? n[h] + (c.margin || 0) : 0); e.tickRotCorr = e.tickRotCorr || { x: 0, y: 0 }; f = 0 === h ? -e.labelMetrics().h : 2 === h ? e.tickRotCorr.y : 0; G = Math.abs(P) + u; P && (G = G - f + z * (d ? x(t.y, e.tickRotCorr.y + 8 * z) : t.x)); e.axisTitleMargin = x(r, G); e.getMaxLabelDimensions &&
                                            (e.maxLabelDimensions = e.getMaxLabelDimensions(l, k)); "colorAxis" !== w && (d = this.tickSize("tick"), n[h] = Math.max(n[h], (e.axisTitleMargin || 0) + M + z * e.offset, G, k && k.length && d ? d[0] + z * e.offset : 0), c = !e.axisLine || c.offset ? 0 : 2 * Math.floor(e.axisLine.strokeWidth() / 2), b[p] = Math.max(b[p], c)); g(this, "afterGetOffset")
                                }; c.prototype.getLinePath = function (a) {
                                    var e = this.chart, b = this.opposite, d = this.offset, g = this.horiz, m = this.left + (b ? this.width : 0) + d; d = e.chartHeight - this.bottom - (b ? this.height : 0) + d; b && (a *= -1); return e.renderer.crispLine([["M",
                                        g ? this.left : m, g ? d : this.top], ["L", g ? e.chartWidth - this.right : m, g ? d : e.chartHeight - this.bottom]], a)
                                }; c.prototype.renderLine = function () { this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 })) }; c.prototype.getTitlePosition = function () {
                                    var a = this.horiz, e = this.left, b = this.top, d = this.len, m = this.options.title, c = a ? e : b, h = this.opposite,
                                        l = this.offset, x = m.x, k = m.y, w = this.axisTitle, B = this.chart.renderer.fontMetrics(m.style.fontSize, w); w = w ? Math.max(w.getBBox(!1, 0).height - B.h - 1, 0) : 0; d = { low: c + (a ? 0 : d), middle: c + d / 2, high: c + (a ? d : 0) }[m.align]; e = (a ? b + this.height : e) + (a ? 1 : -1) * (h ? -1 : 1) * (this.axisTitleMargin || 0) + [-w, w, B.f, -w][this.side]; a = { x: a ? d + x : e + (h ? this.width : 0) + l + x, y: a ? e + k - (h ? this.height : 0) + l : d + k }; g(this, "afterGetTitlePosition", { titlePosition: a }); return a
                                }; c.prototype.renderMinorTick = function (a, e) {
                                    var b = this.minorTicks; b[a] || (b[a] = new F(this,
                                        a, "minor")); e && b[a].isNew && b[a].render(null, !0); b[a].render(null, !1, 1)
                                }; c.prototype.renderTick = function (a, e, b) { var d = this.ticks; if (!this.isLinked || a >= this.min && a <= this.max || this.grid && this.grid.isColumn) d[a] || (d[a] = new F(this, a)), b && d[a].isNew && d[a].render(e, !0, -1), d[a].render(e) }; c.prototype.render = function () {
                                    var e = this, b = e.chart, d = e.logarithmic, c = e.options, h = e.isLinked, l = e.tickPositions, x = e.axisTitle, k = e.ticks, w = e.minorTicks, B = e.alternateBands, q = c.stackLabels, p = c.alternateGridColor, f = e.tickmarkOffset,
                                        G = e.axisLine, t = e.showAxis, n = u(b.renderer.globalAnimation), z, J; e.labelEdge.length = 0; e.overlap = !1;[k, w, B].forEach(function (a) { m(a, function (a) { a.isActive = !1 }) }); if (e.hasData() || h) {
                                            var y = e.chart.hasRendered && e.old && a(e.old.min); e.minorTickInterval && !e.categories && e.getMinorTickPositions().forEach(function (a) { e.renderMinorTick(a, y) }); l.length && (l.forEach(function (a, b) { e.renderTick(a, b, y) }), f && (0 === e.min || e.single) && (k[-1] || (k[-1] = new F(e, -1, null, !0)), k[-1].render(-1))); p && l.forEach(function (a, g) {
                                                J = "undefined" !==
                                                    typeof l[g + 1] ? l[g + 1] + f : e.max - f; 0 === g % 2 && a < e.max && J <= e.max + (b.polar ? -f : f) && (B[a] || (B[a] = new C.PlotLineOrBand(e)), z = a + f, B[a].options = { from: d ? d.lin2log(z) : z, to: d ? d.lin2log(J) : J, color: p, className: "highcharts-alternate-grid" }, B[a].render(), B[a].isActive = !0)
                                            }); e._addedPlotLB || (e._addedPlotLB = !0, (c.plotLines || []).concat(c.plotBands || []).forEach(function (a) { e.addPlotBandOrLine(a) }))
                                        } [k, w, B].forEach(function (a) {
                                            var e = [], d = n.duration; m(a, function (a, b) { a.isActive || (a.render(b, !1, 0), a.isActive = !1, e.push(b)) });
                                            L(function () { for (var b = e.length; b--;)a[e[b]] && !a[e[b]].isActive && (a[e[b]].destroy(), delete a[e[b]]) }, a !== B && b.hasRendered && d ? d : 0)
                                        }); G && (G[G.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(G.strokeWidth()) }), G.isPlaced = !0, G[t ? "show" : "hide"](t)); x && t && (c = e.getTitlePosition(), x[x.isNew ? "attr" : "animate"](c), x.isNew = !1); q && q.enabled && e.stacking && e.stacking.renderStackTotals(); e.old = { len: e.len, max: e.max, min: e.min, transA: e.transA, userMax: e.userMax, userMin: e.userMin }; e.isDirty = !1; g(this, "afterRender")
                                }; c.prototype.redraw =
                                    function () { this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) { a.render() })); this.series.forEach(function (a) { a.isDirty = !0 }) }; c.prototype.getKeepProps = function () { return this.keepProps || c.keepProps }; c.prototype.destroy = function (a) {
                                        var e = this, b = e.plotLinesAndBands, d = this.eventOptions; g(this, "destroy", { keepEvents: a }); a || M(e);[e.ticks, e.minorTicks, e.alternateBands].forEach(function (a) { y(a) }); if (b) for (a = b.length; a--;)b[a].destroy(); "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
                                            e[a] &&
                                                (e[a] = e[a].destroy())
                                        }); for (var c in e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[c] = e.plotLinesAndBandsGroups[c].destroy(); m(e, function (a, b) { -1 === e.getKeepProps().indexOf(b) && delete e[b] }); this.eventOptions = d
                                    }; c.prototype.drawCrosshair = function (a, e) {
                                        var b = this.crosshair, d = x(b && b.snap, !0), m = this.chart, c, h = this.cross; g(this, "drawCrosshair", { e: a, point: e }); a || (a = this.cross && this.cross.e); if (b && !1 !== (E(e) || !d)) {
                                            d ? E(e) && (c = x("colorAxis" !== this.coll ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len -
                                                e.plotY)) : c = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos); if (E(c)) { var k = { value: e && (this.isXAxis ? e.x : x(e.stackY, e.y)), translatedValue: c }; m.polar && l(k, { isCrosshair: !0, chartX: a && a.chartX, chartY: a && a.chartY, point: e }); k = this.getPlotLinePath(k) || null } if (!E(k)) { this.hideCrosshair(); return } d = this.categories && !this.isRadial; h || (this.cross = h = m.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (d ? "category " : "thin ") + (b.className || "")).attr({ zIndex: x(b.zIndex, 2) }).add(), m.styledMode ||
                                                    (h.attr({ stroke: b.color || (d ? v.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": x(b.width, 1) }).css({ "pointer-events": "none" }), b.dashStyle && h.attr({ dashstyle: b.dashStyle }))); h.show().attr({ d: k }); d && !b.width && h.attr({ "stroke-width": this.transA }); this.cross.e = a
                                        } else this.hideCrosshair(); g(this, "afterDrawCrosshair", { e: a, point: e })
                                    }; c.prototype.hideCrosshair = function () { this.cross && this.cross.hide(); g(this, "afterHideCrosshair") }; c.prototype.hasVerticalPanning = function () {
                                        var a = this.chart.options.chart.panning;
                                        return !!(a && a.enabled && /y/.test(a.type))
                                    }; c.prototype.validatePositiveValue = function (e) { return a(e) && 0 < e }; c.prototype.update = function (a, b) { var d = this.chart; a = e(this.userOptions, a); this.destroy(!0); this.init(d, a); d.isDirtyBox = !0; x(b, !0) && d.redraw() }; c.prototype.remove = function (a) { for (var e = this.chart, b = this.coll, d = this.series, g = d.length; g--;)d[g] && d[g].remove(!1); t(e.axes, this); t(e[b], this); e[b].forEach(function (a, e) { a.options.index = a.userOptions.index = e }); this.destroy(); e.isDirtyBox = !0; x(a, !0) && e.redraw() };
                    c.prototype.setTitle = function (a, e) { this.update({ title: a }, e) }; c.prototype.setCategories = function (a, e) { this.update({ categories: a }, e) }; c.defaultOptions = f.defaultXAxisOptions; c.keepProps = "extKey hcEvents names series userMax userMin".split(" "); return c
                }(); ""; return c
        }); H(f, "Core/Axis/DateTimeAxis.js", [f["Core/Utilities.js"]], function (c) {
            var f = c.addEvent, v = c.getMagnitude, D = c.normalizeTickInterval, r = c.timeUnits, C; (function (c) {
                function A() { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) }
                function u(d) { "datetime" !== d.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new k(this)) } var n = []; c.compose = function (d) { -1 === n.indexOf(d) && (n.push(d), d.keepProps.push("dateTime"), d.prototype.getTimeTicks = A, f(d, "init", u)); return d }; var k = function () {
                    function d(b) { this.axis = b } d.prototype.normalizeTimeTickInterval = function (b, d) {
                        var c = d || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]],
                        ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; d = c[c.length - 1]; var h = r[d[0]], k = d[1], f; for (f = 0; f < c.length && !(d = c[f], h = r[d[0]], k = d[1], c[f + 1] && b <= (h * k[k.length - 1] + r[c[f + 1][0]]) / 2); f++); h === r.year && b < 5 * h && (k = [1, 2, 5]); b = D(b / h, k, "year" === d[0] ? Math.max(v(b / h), 1) : 1); return { unitRange: h, count: b, unitName: d[0] }
                    }; d.prototype.getXDateFormat = function (b, d) {
                        var c = this.axis, h = c.chart.time; return c.closestPointRange ? h.getDateFormat(c.closestPointRange, b, c.options.startOfWeek, d) || h.resolveDTLFormat(d.year).main :
                            h.resolveDTLFormat(d.day).main
                    }; return d
                }(); c.Additions = k
            })(C || (C = {})); return C
        }); H(f, "Core/Axis/LogarithmicAxis.js", [f["Core/Utilities.js"]], function (c) {
            var f = c.addEvent, v = c.normalizeTickInterval, D = c.pick, r; (function (c) {
                function r(c) { var d = this.logarithmic; "logarithmic" !== c.userOptions.type ? this.logarithmic = void 0 : d || (this.logarithmic = new n(this)) } function A() { var c = this.logarithmic; c && (this.lin2val = function (d) { return c.lin2log(d) }, this.val2lin = function (d) { return c.log2lin(d) }) } var u = []; c.compose =
                    function (c) { -1 === u.indexOf(c) && (u.push(c), c.keepProps.push("logarithmic"), f(c, "init", r), f(c, "afterInit", A)); return c }; var n = function () {
                        function c(d) { this.axis = d } c.prototype.getLogTickPositions = function (d, b, c, k) {
                            var h = this.axis, f = h.len, p = h.options, t = []; k || (this.minorAutoInterval = void 0); if (.5 <= d) d = Math.round(d), t = h.getLinearTickPositions(d, b, c); else if (.08 <= d) {
                                var q = Math.floor(b), l, g = p = void 0; for (f = .3 < d ? [1, 2, 4] : .15 < d ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; q < c + 1 && !g; q++) {
                                    var w = f.length; for (l = 0; l < w && !g; l++) {
                                        var a =
                                            this.log2lin(this.lin2log(q) * f[l]); a > b && (!k || p <= c) && "undefined" !== typeof p && t.push(p); p > c && (g = !0); p = a
                                    }
                                }
                            } else b = this.lin2log(b), c = this.lin2log(c), d = k ? h.getMinorTickInterval() : p.tickInterval, d = D("auto" === d ? null : d, this.minorAutoInterval, p.tickPixelInterval / (k ? 5 : 1) * (c - b) / ((k ? f / h.tickPositions.length : f) || 1)), d = v(d), t = h.getLinearTickPositions(d, b, c).map(this.log2lin), k || (this.minorAutoInterval = d / 5); k || (h.tickInterval = d); return t
                        }; c.prototype.lin2log = function (d) { return Math.pow(10, d) }; c.prototype.log2lin =
                            function (d) { return Math.log(d) / Math.LN10 }; return c
                    }(); c.Additions = n
            })(r || (r = {})); return r
        }); H(f, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [f["Core/Utilities.js"]], function (c) {
            var f = c.erase, v = c.extend, D = c.isNumber, r; (function (c) {
                var r = [], A; c.compose = function (c, k) { A || (A = c); -1 === r.indexOf(k) && (r.push(k), v(k.prototype, u.prototype)); return k }; var u = function () {
                    function c() { } c.prototype.getPlotBandPath = function (c, d, b) {
                        void 0 === b && (b = this.options); var h = this.getPlotLinePath({ value: d, force: !0, acrossPanes: b.acrossPanes }),
                            k = [], f = this.horiz; d = !D(this.min) || !D(this.max) || c < this.min && d < this.min || c > this.max && d > this.max; c = this.getPlotLinePath({ value: c, force: !0, acrossPanes: b.acrossPanes }); b = 1; if (c && h) {
                                if (d) { var n = c.toString() === h.toString(); b = 0 } for (d = 0; d < c.length; d += 2) {
                                    var y = c[d], t = c[d + 1], q = h[d], l = h[d + 1]; "M" !== y[0] && "L" !== y[0] || "M" !== t[0] && "L" !== t[0] || "M" !== q[0] && "L" !== q[0] || "M" !== l[0] && "L" !== l[0] || (f && q[1] === y[1] ? (q[1] += b, l[1] += b) : f || q[2] !== y[2] || (q[2] += b, l[2] += b), k.push(["M", y[1], y[2]], ["L", t[1], t[2]], ["L", l[1], l[2]],
                                        ["L", q[1], q[2]], ["Z"])); k.isFlat = n
                                }
                            } return k
                    }; c.prototype.addPlotBand = function (c) { return this.addPlotBandOrLine(c, "plotBands") }; c.prototype.addPlotLine = function (c) { return this.addPlotBandOrLine(c, "plotLines") }; c.prototype.addPlotBandOrLine = function (c, d) { var b = this, h = this.userOptions, k = new A(this, c); this.visible && (k = k.render()); if (k) { this._addedPlotLB || (this._addedPlotLB = !0, (h.plotLines || []).concat(h.plotBands || []).forEach(function (d) { b.addPlotBandOrLine(d) })); if (d) { var f = h[d] || []; f.push(c); h[d] = f } this.plotLinesAndBands.push(k) } return k };
                    c.prototype.removePlotBandOrLine = function (c) { var d = this.plotLinesAndBands, b = this.options, h = this.userOptions; if (d) { for (var k = d.length; k--;)d[k].id === c && d[k].destroy();[b.plotLines || [], h.plotLines || [], b.plotBands || [], h.plotBands || []].forEach(function (b) { for (k = b.length; k--;)(b[k] || {}).id === c && f(b, b[k]) }) } }; c.prototype.removePlotBand = function (c) { this.removePlotBandOrLine(c) }; c.prototype.removePlotLine = function (c) { this.removePlotBandOrLine(c) }; return c
                }()
            })(r || (r = {})); return r
        }); H(f, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
            [f["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], f["Core/Utilities.js"]], function (c, f) {
                var v = f.arrayMax, I = f.arrayMin, r = f.defined, C = f.destroyObjectProperties, F = f.erase, A = f.fireEvent, u = f.merge, n = f.objectEach, k = f.pick; f = function () {
                    function d(b, d) { this.axis = b; d && (this.options = d, this.id = d.id) } d.compose = function (b) { return c.compose(d, b) }; d.prototype.render = function () {
                        A(this, "render"); var b = this, d = b.axis, c = d.horiz, f = d.logarithmic, E = b.options, y = E.color, t = k(E.zIndex, 0), q = E.events, l = {}, g = d.chart.renderer,
                            w = E.label, a = b.label, B = E.to, e = E.from, G = E.value, m = b.svgElem, x = [], J = r(e) && r(B); x = r(G); var M = !m, P = { "class": "highcharts-plot-" + (J ? "band " : "line ") + (E.className || "") }, L = J ? "bands" : "lines"; f && (e = f.log2lin(e), B = f.log2lin(B), G = f.log2lin(G)); d.chart.styledMode || (x ? (P.stroke = y || "#999999", P["stroke-width"] = k(E.width, 1), E.dashStyle && (P.dashstyle = E.dashStyle)) : J && (P.fill = y || "#e6ebf5", E.borderWidth && (P.stroke = E.borderColor, P["stroke-width"] = E.borderWidth))); l.zIndex = t; L += "-" + t; (f = d.plotLinesAndBandsGroups[L]) || (d.plotLinesAndBandsGroups[L] =
                                f = g.g("plot-" + L).attr(l).add()); M && (b.svgElem = m = g.path().attr(P).add(f)); if (x) x = d.getPlotLinePath({ value: G, lineWidth: m.strokeWidth(), acrossPanes: E.acrossPanes }); else if (J) x = d.getPlotBandPath(e, B, E); else return; !b.eventsAdded && q && (n(q, function (a, e) { m.on(e, function (a) { q[e].apply(b, [a]) }) }), b.eventsAdded = !0); (M || !m.d) && x && x.length ? m.attr({ d: x }) : m && (x ? (m.show(), m.animate({ d: x })) : m.d && (m.hide(), a && (b.label = a = a.destroy()))); w && (r(w.text) || r(w.formatter)) && x && x.length && 0 < d.width && 0 < d.height && !x.isFlat ? (w =
                                    u({ align: c && J && "center", x: c ? !J && 4 : 10, verticalAlign: !c && J && "middle", y: c ? J ? 16 : 10 : J ? 6 : -4, rotation: c && !J && 90 }, w), this.renderLabel(w, x, J, t)) : a && a.hide(); return b
                    }; d.prototype.renderLabel = function (b, d, c, k) {
                        var h = this.axis, f = h.chart.renderer, p = this.label; p || (this.label = p = f.text(this.getLabelText(b), 0, 0, b.useHTML).attr({ align: b.textAlign || b.align, rotation: b.rotation, "class": "highcharts-plot-" + (c ? "band" : "line") + "-label " + (b.className || ""), zIndex: k }).add(), h.chart.styledMode || p.css(u({ textOverflow: "ellipsis" },
                            b.style))); k = d.xBounds || [d[0][1], d[1][1], c ? d[2][1] : d[0][1]]; d = d.yBounds || [d[0][2], d[1][2], c ? d[2][2] : d[0][2]]; c = I(k); f = I(d); p.align(b, !1, { x: c, y: f, width: v(k) - c, height: v(d) - f }); p.alignValue && "left" !== p.alignValue || p.css({ width: (90 === p.rotation ? h.height - (p.alignAttr.y - h.top) : h.width - (p.alignAttr.x - h.left)) + "px" }); p.show(!0)
                    }; d.prototype.getLabelText = function (b) { return r(b.formatter) ? b.formatter.call(this) : b.text }; d.prototype.destroy = function () { F(this.axis.plotLinesAndBands, this); delete this.axis; C(this) };
                    return d
                }(); ""; ""; return f
            }); H(f, "Core/Tooltip.js", [f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D, r) {
                var C = c.format, F = f.doc, A = v.distribute, u = r.addEvent, n = r.clamp, k = r.css, d = r.defined, b = r.discardElement, h = r.extend, p = r.fireEvent, z = r.isArray, E = r.isNumber, y = r.isString, t = r.merge, q = r.pick, l = r.splat, g = r.syncTimeout; c = function () {
                    function c(a, b) {
                        this.allowShared = !0; this.container = void 0;
                        this.crosshairs = []; this.distance = 0; this.isHidden = !0; this.isSticky = !1; this.now = {}; this.options = {}; this.outside = !1; this.chart = a; this.init(a, b)
                    } c.prototype.applyFilter = function () {
                        var a = this.chart; a.renderer.definition({
                            tagName: "filter", attributes: { id: "drop-shadow-" + a.index, opacity: .5 }, children: [{ tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } }, { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: .3 } }] },
                            { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }]
                        })
                    }; c.prototype.bodyFormatter = function (a) { return a.map(function (a) { var e = a.series.tooltipOptions; return (e[(a.point.formatPrefix || "point") + "Formatter"] || a.point.tooltipFormatter).call(a.point, e[(a.point.formatPrefix || "point") + "Format"] || "") }) }; c.prototype.cleanSplit = function (a) { this.chart.series.forEach(function (b) { var e = b && b.tt; e && (!e.isActive || a ? b.tt = e.destroy() : e.isActive = !1) }) }; c.prototype.defaultFormatter =
                        function (a) { var b = this.points || l(this); var e = [a.tooltipFooterHeaderFormatter(b[0])]; e = e.concat(a.bodyFormatter(b)); e.push(a.tooltipFooterHeaderFormatter(b[0], !0)); return e }; c.prototype.destroy = function () { this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(!0), this.tt = this.tt.destroy()); this.renderer && (this.renderer = this.renderer.destroy(), b(this.container)); r.clearTimeout(this.hideTimer); r.clearTimeout(this.tooltipTimeout) }; c.prototype.getAnchor = function (a, b) {
                            var e =
                                this.chart, d = e.pointer, g = e.inverted, c = e.plotTop, h = e.plotLeft, k, w, q = 0, B = 0; a = l(a); this.followPointer && b ? ("undefined" === typeof b.chartX && (b = d.normalize(b)), d = [b.chartX - h, b.chartY - c]) : a[0].tooltipPos ? d = a[0].tooltipPos : (a.forEach(function (a) { k = a.series.yAxis; w = a.series.xAxis; q += a.plotX || 0; B += a.plotLow ? (a.plotLow + (a.plotHigh || 0)) / 2 : a.plotY || 0; w && k && (g ? (q += c + e.plotHeight - w.len - w.pos, B += h + e.plotWidth - k.len - k.pos) : (q += w.pos - h, B += k.pos - c)) }), q /= a.length, B /= a.length, d = [g ? e.plotWidth - B : q, g ? e.plotHeight - q : B],
                                    this.shared && 1 < a.length && b && (g ? d[0] = b.chartX - h : d[1] = b.chartY - c)); return d.map(Math.round)
                        }; c.prototype.getLabel = function () {
                            var a = this, b = this.chart.styledMode, e = this.options, g = this.split && this.allowShared, c = "tooltip" + (d(e.className) ? " " + e.className : ""), h = e.style.pointerEvents || (!this.followPointer && e.stickOnContact ? "auto" : "none"), l = function () { a.inContact = !0 }, w = function (e) {
                                var b = a.chart.hoverSeries; a.inContact = a.shouldStickOnContact() && a.chart.pointer.inClass(e.relatedTarget, "highcharts-tooltip"); if (!a.inContact &&
                                    b && b.onMouseOut) b.onMouseOut()
                            }, q, p = this.chart.renderer; if (a.label) { var t = !a.label.hasClass("highcharts-label"); (g && !t || !g && t) && a.destroy() } if (!this.label) {
                                if (this.outside) {
                                    t = this.chart.options.chart.style; var n = D.getRendererType(); this.container = q = f.doc.createElement("div"); q.className = "highcharts-tooltip-container"; k(q, { position: "absolute", top: "1px", pointerEvents: h, zIndex: Math.max(this.options.style.zIndex || 0, (t && t.zIndex || 0) + 3) }); u(q, "mouseenter", l); u(q, "mouseleave", w); f.doc.body.appendChild(q);
                                    this.renderer = p = new n(q, 0, 0, t, void 0, void 0, p.styledMode)
                                } g ? this.label = p.g(c) : (this.label = p.label("", 0, 0, e.shape, void 0, void 0, e.useHTML, void 0, c).attr({ padding: e.padding, r: e.borderRadius }), b || this.label.attr({ fill: e.backgroundColor, "stroke-width": e.borderWidth }).css(e.style).css({ pointerEvents: h }).shadow(e.shadow)); b && e.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" })); if (a.outside && !a.split) {
                                    var z = this.label, y = z.xSetter, E = z.ySetter; z.xSetter = function (e) {
                                        y.call(z,
                                            a.distance); q.style.left = e + "px"
                                    }; z.ySetter = function (e) { E.call(z, a.distance); q.style.top = e + "px" }
                                } this.label.on("mouseenter", l).on("mouseleave", w).attr({ zIndex: 8 }).add()
                            } return this.label
                        }; c.prototype.getPosition = function (a, b, e) {
                            var d = this.chart, g = this.distance, c = {}, h = d.inverted && e.h || 0, l = this.outside, k = l ? F.documentElement.clientWidth - 2 * g : d.chartWidth, w = l ? Math.max(F.body.scrollHeight, F.documentElement.scrollHeight, F.body.offsetHeight, F.documentElement.offsetHeight, F.documentElement.clientHeight) : d.chartHeight,
                                B = d.pointer.getChartPosition(), f = function (c) { var m = "x" === c; return [c, m ? k : w, m ? a : b].concat(l ? [m ? a * B.scaleX : b * B.scaleY, m ? B.left - g + (e.plotX + d.plotLeft) * B.scaleX : B.top - g + (e.plotY + d.plotTop) * B.scaleY, 0, m ? k : w] : [m ? a : b, m ? e.plotX + d.plotLeft : e.plotY + d.plotTop, m ? d.plotLeft : d.plotTop, m ? d.plotLeft + d.plotWidth : d.plotTop + d.plotHeight]) }, p = f("y"), t = f("x"), n; f = !!e.negative; !d.polar && d.hoverSeries && d.hoverSeries.yAxis && d.hoverSeries.yAxis.reversed && (f = !f); var z = !this.followPointer && q(e.ttBelow, !d.inverted === f), y = function (a,
                                    e, b, d, m, x, k) { var w = l ? "y" === a ? g * B.scaleY : g * B.scaleX : g, q = (b - d) / 2, f = d < m - g, p = m + g + d < e, t = m - w - b + q; m = m + w - q; if (z && p) c[a] = m; else if (!z && f) c[a] = t; else if (f) c[a] = Math.min(k - d, 0 > t - h ? t : t - h); else if (p) c[a] = Math.max(x, m + h + b > e ? m : m + h); else return !1 }, E = function (a, e, b, d, m) { var h; m < g || m > e - g ? h = !1 : c[a] = m < b / 2 ? 1 : m > e - d / 2 ? e - d - 2 : m - b / 2; return h }, u = function (a) { var e = p; p = t; t = e; n = a }, r = function () { !1 !== y.apply(0, p) ? !1 !== E.apply(0, t) || n || (u(!0), r()) : n ? c.x = c.y = 0 : (u(!0), r()) }; (d.inverted || 1 < this.len) && u(); r(); return c
                        }; c.prototype.hide =
                            function (a) { var b = this; r.clearTimeout(this.hideTimer); a = q(a, this.options.hideDelay); this.isHidden || (this.hideTimer = g(function () { b.getLabel().fadeOut(a ? void 0 : a); b.isHidden = !0 }, a)) }; c.prototype.init = function (a, b) { this.chart = a; this.options = b; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = b.split && !a.inverted && !a.polar; this.shared = b.shared || this.split; this.outside = q(b.outside, !(!a.scrollablePixelsX && !a.scrollablePixelsY)) }; c.prototype.shouldStickOnContact = function () {
                                return !(this.followPointer ||
                                    !this.options.stickOnContact)
                            }; c.prototype.isStickyOnContact = function () { return !(!this.shouldStickOnContact() || !this.inContact) }; c.prototype.move = function (a, b, e, d) {
                                var g = this, c = g.now, l = !1 !== g.options.animation && !g.isHidden && (1 < Math.abs(a - c.x) || 1 < Math.abs(b - c.y)), k = g.followPointer || 1 < g.len; h(c, { x: l ? (2 * c.x + a) / 3 : a, y: l ? (c.y + b) / 2 : b, anchorX: k ? void 0 : l ? (2 * c.anchorX + e) / 3 : e, anchorY: k ? void 0 : l ? (c.anchorY + d) / 2 : d }); g.getLabel().attr(c); g.drawTracker(); l && (r.clearTimeout(this.tooltipTimeout), this.tooltipTimeout =
                                    setTimeout(function () { g && g.move(a, b, e, d) }, 32))
                            }; c.prototype.refresh = function (a, b) {
                                var e = this.chart, d = this.options, g = l(a), c = g[0], h = [], k = d.formatter || this.defaultFormatter, w = this.shared, f = e.styledMode, B = {}; if (d.enabled && c.series) {
                                    r.clearTimeout(this.hideTimer); this.allowShared = !(!z(a) && a.series && a.series.noSharedTooltip); this.followPointer = !this.split && c.series.tooltipOptions.followPointer; a = this.getAnchor(a, b); var t = a[0], n = a[1]; w && this.allowShared ? (e.pointer.applyInactiveState(g), g.forEach(function (a) {
                                        a.setState("hover");
                                        h.push(a.getLabelConfig())
                                    }), B = { x: c.category, y: c.y }, B.points = h) : B = c.getLabelConfig(); this.len = h.length; k = k.call(B, this); w = c.series; this.distance = q(w.tooltipOptions.distance, 16); if (!1 === k) this.hide(); else {
                                        if (this.split && this.allowShared) this.renderSplit(k, g); else {
                                            var y = t, E = n; b && e.pointer.isDirectTouch && (y = b.chartX - e.plotLeft, E = b.chartY - e.plotTop); if (e.polar || !1 === w.options.clip || g.some(function (a) { return a.series.shouldShowTooltip(y, E) })) b = this.getLabel(), d.style.width && !f || b.css({
                                                width: this.chart.spacingBox.width +
                                                    "px"
                                            }), b.attr({ text: k && k.join ? k.join("") : k }), b.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + q(c.colorIndex, w.colorIndex)), f || b.attr({ stroke: d.borderColor || c.color || w.color || "#666666" }), this.updatePosition({ plotX: t, plotY: n, negative: c.negative, ttBelow: c.ttBelow, h: a[2] || 0 }); else { this.hide(); return }
                                        } this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(); this.isHidden = !1
                                    } p(this, "refresh")
                                }
                            }; c.prototype.renderSplit = function (a, b) {
                                function e(a, e, b, g, c) {
                                    void 0 === c && (c = !0); b ?
                                        (e = W ? 0 : H, a = n(a - g / 2, Q.left, Q.right - g - (d.outside ? O : 0))) : (e -= ca, a = c ? a - g - C : a + C, a = n(a, c ? a : Q.left, Q.right)); return { x: a, y: e }
                                } var d = this, g = d.chart, c = d.chart, l = c.chartWidth, k = c.chartHeight, w = c.plotHeight, f = c.plotLeft, B = c.plotTop, p = c.pointer, t = c.scrollablePixelsY; t = void 0 === t ? 0 : t; var z = c.scrollablePixelsX, E = c.scrollingContainer; E = void 0 === E ? { scrollLeft: 0, scrollTop: 0 } : E; var u = E.scrollLeft; E = E.scrollTop; var r = c.styledMode, C = d.distance, R = d.options, v = d.options.positioner, Q = d.outside && "number" !== typeof z ? F.documentElement.getBoundingClientRect() :
                                    { left: u, right: u + l, top: E, bottom: E + k }, I = d.getLabel(), D = this.renderer || g.renderer, W = !(!g.xAxis[0] || !g.xAxis[0].opposite); g = p.getChartPosition(); var O = g.left; g = g.top; var ca = B + E, da = 0, H = w - t; y(a) && (a = [!1, a]); a = a.slice(0, b.length + 1).reduce(function (a, g, c) {
                                        if (!1 !== g && "" !== g) {
                                            c = b[c - 1] || { isHeader: !0, plotX: b[0].plotX, plotY: w, series: {} }; var m = c.isHeader, h = m ? d : c.series; g = g.toString(); var l = h.tt, k = c.isHeader; var x = c.series; var p = "highcharts-color-" + q(c.colorIndex, x.colorIndex, "none"); l || (l = { padding: R.padding, r: R.borderRadius },
                                                r || (l.fill = R.backgroundColor, l["stroke-width"] = R.borderWidth), l = D.label("", 0, 0, R[k ? "headerShape" : "shape"], void 0, void 0, R.useHTML).addClass((k ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + p).attr(l).add(I)); l.isActive = !0; l.attr({ text: g }); r || l.css(R.style).shadow(R.shadow).attr({ stroke: R.borderColor || c.color || x.color || "#333333" }); h = h.tt = l; k = h.getBBox(); g = k.width + h.strokeWidth(); m && (da = k.height, H += da, W && (ca -= da)); x = c.plotX; x = void 0 === x ? 0 : x; p = c.plotY; p = void 0 === p ? 0 : p; l = c.series; if (c.isHeader) {
                                                    x =
                                                        f + x; var t = B + w / 2
                                                } else { var G = l.xAxis, z = l.yAxis; x = G.pos + n(x, -C, G.len + C); l.shouldShowTooltip(0, z.pos - B + p, { ignoreX: !0 }) && (t = z.pos + p) } x = n(x, Q.left - C, Q.right + C); "number" === typeof t ? (k = k.height + 1, p = v ? v.call(d, g, k, c) : e(x, t, m, g), a.push({ align: v ? 0 : void 0, anchorX: x, anchorY: t, boxWidth: g, point: c, rank: q(p.rank, m ? 1 : 0), size: k, target: p.y, tt: h, x: p.x })) : h.isActive = !1
                                        } return a
                                    }, []); !v && a.some(function (a) { var e = (d.outside ? O : 0) + a.anchorX; return e < Q.left && e + a.boxWidth < Q.right ? !0 : e < O - Q.left + a.boxWidth && Q.right - e > e }) && (a =
                                        a.map(function (a) { var b = e(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1); return h(a, { target: b.y, x: b.x }) })); d.cleanSplit(); A(a, H); var aa = O, ea = O; a.forEach(function (a) { var e = a.x, b = a.boxWidth; a = a.isHeader; a || (d.outside && O + e < aa && (aa = O + e), !a && d.outside && aa + b > ea && (ea = O + e)) }); a.forEach(function (a) {
                                            var e = a.x, b = a.anchorX, g = a.pos, c = a.point.isHeader; g = { visibility: "undefined" === typeof g ? "hidden" : "inherit", x: e, y: g + ca, anchorX: b, anchorY: a.anchorY }; if (d.outside && e < b) {
                                                var m = O - aa; 0 < m && (c || (g.x = e + m, g.anchorX = b +
                                                    m), c && (g.x = (ea - aa) / 2, g.anchorX = b + m))
                                            } a.tt.attr(g)
                                        }); a = d.container; t = d.renderer; d.outside && a && t && (c = I.getBBox(), t.setSize(c.width + c.x, c.height + c.y, !1), a.style.left = aa + "px", a.style.top = g + "px")
                            }; c.prototype.drawTracker = function () {
                                if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy(); else {
                                    var a = this.chart, b = this.label, e = this.shared ? a.hoverPoints : a.hoverPoint; if (b && e) {
                                        var d = { x: 0, y: 0, width: 0, height: 0 }; e = this.getAnchor(e); var g = b.getBBox(); e[0] += a.plotLeft - b.translateX;
                                        e[1] += a.plotTop - b.translateY; d.x = Math.min(0, e[0]); d.y = Math.min(0, e[1]); d.width = 0 > e[0] ? Math.max(Math.abs(e[0]), g.width - e[0]) : Math.max(Math.abs(e[0]), g.width); d.height = 0 > e[1] ? Math.max(Math.abs(e[1]), g.height - Math.abs(e[1])) : Math.max(Math.abs(e[1]), g.height); this.tracker ? this.tracker.attr(d) : (this.tracker = b.renderer.rect(d).addClass("highcharts-tracker").add(b), a.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }))
                                    }
                                }
                            }; c.prototype.styledModeFormat = function (a) {
                                return a.replace('style="font-size: 10px"',
                                    'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"')
                            }; c.prototype.tooltipFooterHeaderFormatter = function (a, b) {
                                var e = a.series, d = e.tooltipOptions, g = e.xAxis, c = g && g.dateTime; g = { isFooter: b, labelConfig: a }; var h = d.xDateFormat, l = d[b ? "footerFormat" : "headerFormat"]; p(this, "headerFormatter", g, function (b) {
                                    c && !h && E(a.key) && (h = c.getXDateFormat(a.key, d.dateTimeLabelFormats)); c && h && (a.point && a.point.tooltipDateKeys || ["key"]).forEach(function (a) {
                                        l =
                                            l.replace("{point." + a + "}", "{point." + a + ":" + h + "}")
                                    }); e.chart.styledMode && (l = this.styledModeFormat(l)); b.text = C(l, { point: a, series: e }, this.chart)
                                }); return g.text
                            }; c.prototype.update = function (a) { this.destroy(); t(!0, this.chart.options.tooltip.userOptions, a); this.init(this.chart, t(!0, this.options, a)) }; c.prototype.updatePosition = function (a) {
                                var b = this.chart, e = this.options, d = b.pointer, g = this.getLabel(); d = d.getChartPosition(); var c = (e.positioner || this.getPosition).call(this, g.width, g.height, a), h = a.plotX + b.plotLeft;
                                a = a.plotY + b.plotTop; if (this.outside) { e = e.borderWidth + 2 * this.distance; this.renderer.setSize(g.width + e, g.height + e, !1); if (1 !== d.scaleX || 1 !== d.scaleY) k(this.container, { transform: "scale(".concat(d.scaleX, ", ").concat(d.scaleY, ")") }), h *= d.scaleX, a *= d.scaleY; h += d.left - c.x; a += d.top - c.y } this.move(Math.round(c.x), Math.round(c.y || 0), h, a)
                            }; return c
                }(); ""; return c
            }); H(f, "Core/Series/Point.js", [f["Core/Renderer/HTML/AST.js"], f["Core/Animation/AnimationUtilities.js"], f["Core/DefaultOptions.js"], f["Core/FormatUtilities.js"],
            f["Core/Utilities.js"]], function (c, f, v, D, r) {
                var C = f.animObject, F = v.defaultOptions, A = D.format, u = r.addEvent, n = r.defined, k = r.erase, d = r.extend, b = r.fireEvent, h = r.getNestedProperty, p = r.isArray, z = r.isFunction, E = r.isNumber, y = r.isObject, t = r.merge, q = r.objectEach, l = r.pick, g = r.syncTimeout, w = r.removeEvent, a = r.uniqueKey; f = function () {
                    function f() {
                        this.colorIndex = this.category = void 0; this.formatPrefix = "point"; this.id = void 0; this.isNull = !1; this.percentage = this.options = this.name = void 0; this.selected = !1; this.total =
                            this.shapeArgs = this.series = void 0; this.visible = !0; this.x = void 0
                    } f.prototype.animateBeforeDestroy = function () { var a = this, b = { x: a.startXPos, opacity: 0 }, g = a.getGraphicalProps(); g.singular.forEach(function (e) { a[e] = a[e].animate("dataLabel" === e ? { x: a[e].startXPos, y: a[e].startYPos, opacity: 0 } : b) }); g.plural.forEach(function (e) { a[e].forEach(function (e) { e.element && e.animate(d({ x: a.startXPos }, e.startYPos ? { x: e.startXPos, y: e.startYPos } : {})) }) }) }; f.prototype.applyOptions = function (a, b) {
                        var e = this.series, g = e.options.pointValKey ||
                            e.pointValKey; a = f.prototype.optionsToObject.call(this, a); d(this, a); this.options = this.options ? d(this.options, a) : a; a.group && delete this.group; a.dataLabels && delete this.dataLabels; g && (this.y = f.prototype.getNestedProperty.call(this, g)); this.formatPrefix = (this.isNull = l(this.isValid && !this.isValid(), null === this.x || !E(this.y))) ? "null" : "point"; this.selected && (this.state = "select"); "name" in this && "undefined" === typeof b && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)); "undefined" === typeof this.x &&
                                e ? this.x = "undefined" === typeof b ? e.autoIncrement() : b : E(a.x) && e.options.relativeXValue && (this.x = e.autoIncrement(a.x)); return this
                    }; f.prototype.destroy = function () {
                        function a() { if (b.graphic || b.dataLabel || b.dataLabels) w(b), b.destroyElements(); for (f in b) b[f] = null } var b = this, d = b.series, c = d.chart; d = d.options.dataSorting; var h = c.hoverPoints, l = C(b.series.chart.renderer.globalAnimation), f; b.legendItem && c.legend.destroyItem(b); h && (b.setState(), k(h, b), h.length || (c.hoverPoints = null)); if (b === c.hoverPoint) b.onMouseOut();
                        d && d.enabled ? (this.animateBeforeDestroy(), g(a, l.duration)) : a(); c.pointCount--
                    }; f.prototype.destroyElements = function (a) { var e = this; a = e.getGraphicalProps(a); a.singular.forEach(function (a) { e[a] = e[a].destroy() }); a.plural.forEach(function (a) { e[a].forEach(function (a) { a.element && a.destroy() }); delete e[a] }) }; f.prototype.firePointEvent = function (a, d, g) {
                        var e = this, c = this.series.options; (c.point.events[a] || e.options && e.options.events && e.options.events[a]) && e.importEvents(); "click" === a && c.allowPointSelect && (g =
                            function (a) { e.select && e.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); b(e, a, d, g)
                    }; f.prototype.getClassName = function () { return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "") };
                    f.prototype.getGraphicalProps = function (a) { var e = this, b = [], d = { singular: [], plural: [] }, g; a = a || { graphic: 1, dataLabel: 1 }; a.graphic && b.push("graphic", "upperGraphic", "shadowGroup"); a.dataLabel && b.push("dataLabel", "dataLabelUpper", "connector"); for (g = b.length; g--;) { var c = b[g]; e[c] && d.singular.push(c) } ["dataLabel", "connector"].forEach(function (b) { var g = b + "s"; a[b] && e[g] && d.plural.push(g) }); return d }; f.prototype.getLabelConfig = function () {
                        return {
                            x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex,
                            key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal
                        }
                    }; f.prototype.getNestedProperty = function (a) { if (a) return 0 === a.indexOf("custom.") ? h(a, this.options) : this[a] }; f.prototype.getZone = function () { var a = this.series, b = a.zones; a = a.zoneAxis || "y"; var d, g = 0; for (d = b[g]; this[a] >= d.value;)d = b[++g]; this.nonZonedColor || (this.nonZonedColor = this.color); this.color = d && d.color && !this.options.color ? d.color : this.nonZonedColor; return d }; f.prototype.hasNewShapeType =
                        function () { return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType }; f.prototype.init = function (e, d, g) { this.series = e; this.applyOptions(d, g); this.id = n(this.id) ? this.id : a(); this.resolveColor(); e.chart.pointCount++; b(this, "afterInit"); return this }; f.prototype.optionsToObject = function (a) {
                            var e = this.series, b = e.options.keys, d = b || e.pointArrayMap || ["y"], g = d.length, c = {}, h = 0, l = 0; if (E(a) || null === a) c[d[0]] = a; else if (p(a)) for (!b && a.length > g && (e = typeof a[0], "string" === e ? c.name =
                                a[0] : "number" === e && (c.x = a[0]), h++); l < g;)b && "undefined" === typeof a[h] || (0 < d[l].indexOf(".") ? f.prototype.setNestedProperty(c, a[h], d[l]) : c[d[l]] = a[h]), h++, l++; else "object" === typeof a && (c = a, a.dataLabels && (e._hasPointLabels = !0), a.marker && (e._hasPointMarkers = !0)); return c
                        }; f.prototype.resolveColor = function () {
                            var a = this.series, b = a.chart.styledMode; var d = a.chart.options.chart.colorCount; delete this.nonZonedColor; if (a.options.colorByPoint) {
                                if (!b) {
                                    d = a.options.colors || a.chart.options.colors; var g = d[a.colorCounter];
                                    d = d.length
                                } b = a.colorCounter; a.colorCounter++; a.colorCounter === d && (a.colorCounter = 0)
                            } else b || (g = a.color), b = a.colorIndex; this.colorIndex = l(this.options.colorIndex, b); this.color = l(this.options.color, g)
                        }; f.prototype.setNestedProperty = function (a, b, d) { d.split(".").reduce(function (a, e, d, g) { a[e] = g.length - 1 === d ? b : y(a[e], !0) ? a[e] : {}; return a[e] }, a); return a }; f.prototype.tooltipFormatter = function (a) {
                            var e = this.series, b = e.tooltipOptions, d = l(b.valueDecimals, ""), g = b.valuePrefix || "", c = b.valueSuffix || ""; e.chart.styledMode &&
                                (a = e.chart.tooltip.styledModeFormat(a)); (e.pointArrayMap || ["y"]).forEach(function (e) { e = "{point." + e; if (g || c) a = a.replace(RegExp(e + "}", "g"), g + e + "}" + c); a = a.replace(RegExp(e + "}", "g"), e + ":,." + d + "f}") }); return A(a, { point: this, series: this.series }, e.chart)
                        }; f.prototype.update = function (a, b, d, g) {
                            function e() {
                                c.applyOptions(a); var e = h && c.hasDummyGraphic; e = null === c.y ? !e : e; h && e && (c.graphic = h.destroy(), delete c.hasDummyGraphic); y(a, !0) && (h && h.element && a && a.marker && "undefined" !== typeof a.marker.symbol && (c.graphic =
                                    h.destroy()), a && a.dataLabels && c.dataLabel && (c.dataLabel = c.dataLabel.destroy()), c.connector && (c.connector = c.connector.destroy())); f = c.index; m.updateParallelArrays(c, f); w.data[f] = y(w.data[f], !0) || y(a, !0) ? c.options : l(a, w.data[f]); m.isDirty = m.isDirtyData = !0; !m.fixedBox && m.hasCartesianSeries && (k.isDirtyBox = !0); "point" === w.legendType && (k.isDirtyLegend = !0); b && k.redraw(d)
                            } var c = this, m = c.series, h = c.graphic, k = m.chart, w = m.options, f; b = l(b, !0); !1 === g ? e() : c.firePointEvent("update", { options: a }, e)
                        }; f.prototype.remove =
                            function (a, b) { this.series.removePoint(this.series.data.indexOf(this), a, b) }; f.prototype.select = function (a, b) {
                                var e = this, d = e.series, g = d.chart; this.selectedStaging = a = l(a, !e.selected); e.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
                                    e.selected = e.options.selected = a; d.options.data[d.data.indexOf(e)] = e.options; e.setState(a && "select"); b || g.getSelectedPoints().forEach(function (a) {
                                        var b = a.series; a.selected && a !== e && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options,
                                            a.setState(g.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"))
                                    })
                                }); delete this.selectedStaging
                            }; f.prototype.onMouseOver = function (a) { var e = this.series.chart, b = e.pointer; a = a ? b.normalize(a) : b.getChartCoordinatesFromPoint(this, e.inverted); b.runPointActions(a, this) }; f.prototype.onMouseOut = function () {
                                var a = this.series.chart; this.firePointEvent("mouseOut"); this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) { a.setState() }); a.hoverPoints = a.hoverPoint =
                                    null
                            }; f.prototype.importEvents = function () { if (!this.hasImportedEvents) { var a = this, b = t(a.series.options.point, a.options).events; a.events = b; q(b, function (e, b) { z(e) && u(a, b, e) }); this.hasImportedEvents = !0 } }; f.prototype.setState = function (a, g) {
                                var e = this.series, h = this.state, k = e.options.states[a || "normal"] || {}, w = F.plotOptions[e.type].marker && e.options.marker, f = w && !1 === w.enabled, q = w && w.states && w.states[a || "normal"] || {}, p = !1 === q.enabled, B = this.marker || {}, t = e.chart, n = w && e.markerAttribs, z = e.halo, y, G = e.stateMarkerGraphic;
                                a = a || ""; if (!(a === this.state && !g || this.selected && "select" !== a || !1 === k.enabled || a && (p || f && !1 === q.enabled) || a && B.states && B.states[a] && !1 === B.states[a].enabled)) {
                                    this.state = a; n && (y = e.markerAttribs(this, a)); if (this.graphic && !this.hasDummyGraphic) {
                                        h && this.graphic.removeClass("highcharts-point-" + h); a && this.graphic.addClass("highcharts-point-" + a); if (!t.styledMode) {
                                            var u = e.pointAttribs(this, a); var R = l(t.options.chart.animation, k.animation); e.options.inactiveOtherPoints && E(u.opacity) && ((this.dataLabels || []).forEach(function (a) {
                                                a &&
                                                    a.animate({ opacity: u.opacity }, R)
                                            }), this.connector && this.connector.animate({ opacity: u.opacity }, R)); this.graphic.animate(u, R)
                                        } y && this.graphic.animate(y, l(t.options.chart.animation, q.animation, w.animation)); G && G.hide()
                                    } else {
                                        if (a && q) {
                                            h = B.symbol || e.symbol; G && G.currentSymbol !== h && (G = G.destroy()); if (y) if (G) G[g ? "animate" : "attr"]({ x: y.x, y: y.y }); else h && (e.stateMarkerGraphic = G = t.renderer.symbol(h, y.x, y.y, y.width, y.height).add(e.markerGroup), G.currentSymbol = h); !t.styledMode && G && "inactive" !== this.state && G.attr(e.pointAttribs(this,
                                                a))
                                        } G && (G[a && this.isInside ? "show" : "hide"](), G.element.point = this, G.addClass(this.getClassName(), !0))
                                    } k = k.halo; y = (G = this.graphic || G) && G.visibility || "inherit"; k && k.size && G && "hidden" !== y && !this.isCluster ? (z || (e.halo = z = t.renderer.path().add(G.parentGroup)), z.show()[g ? "animate" : "attr"]({ d: this.haloPath(k.size) }), z.attr({ "class": "highcharts-halo highcharts-color-" + l(this.colorIndex, e.colorIndex) + (this.className ? " " + this.className : ""), visibility: y, zIndex: -1 }), z.point = this, t.styledMode || z.attr(d({
                                        fill: this.color ||
                                            e.color, "fill-opacity": k.opacity
                                    }, c.filterUserAttributes(k.attributes || {})))) : z && z.point && z.point.haloPath && z.animate({ d: z.point.haloPath(0) }, null, z.hide); b(this, "afterSetState", { state: a })
                                }
                            }; f.prototype.haloPath = function (a) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a) }; return f
                }(); ""; return f
            }); H(f, "Core/Pointer.js", [f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Tooltip.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
                var r = c.parse, C = f.charts,
                    F = f.noop, A = D.addEvent, u = D.attr, n = D.css, k = D.defined, d = D.extend, b = D.find, h = D.fireEvent, p = D.isNumber, z = D.isObject, E = D.objectEach, y = D.offset, t = D.pick, q = D.splat; c = function () {
                        function c(b, d) { this.lastValidTouch = {}; this.pinchDown = []; this.runChartClick = !1; this.eventsToUnbind = []; this.chart = b; this.hasDragged = !1; this.options = d; this.init(b, d) } c.prototype.applyInactiveState = function (b) {
                            var d = [], a; (b || []).forEach(function (b) {
                                a = b.series; d.push(a); a.linkedParent && d.push(a.linkedParent); a.linkedSeries && (d = d.concat(a.linkedSeries));
                                a.navigatorSeries && d.push(a.navigatorSeries)
                            }); this.chart.series.forEach(function (a) { -1 === d.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive") })
                        }; c.prototype.destroy = function () {
                            var b = this; this.eventsToUnbind.forEach(function (b) { return b() }); this.eventsToUnbind = []; f.chartCount || (c.unbindDocumentMouseUp && (c.unbindDocumentMouseUp = c.unbindDocumentMouseUp()), c.unbindDocumentTouchEnd && (c.unbindDocumentTouchEnd = c.unbindDocumentTouchEnd())); clearInterval(b.tooltipTimeout);
                            E(b, function (d, a) { b[a] = void 0 })
                        }; c.prototype.drag = function (b) {
                            var d = this.chart, a = d.options.chart, c = this.zoomHor, e = this.zoomVert, g = d.plotLeft, h = d.plotTop, l = d.plotWidth, k = d.plotHeight, f = this.mouseDownX || 0, q = this.mouseDownY || 0, p = z(a.panning) ? a.panning && a.panning.enabled : a.panning, t = a.panKey && b[a.panKey + "Key"], n = b.chartX, y = b.chartY, E = this.selectionMarker; if (!E || !E.touch) if (n < g ? n = g : n > g + l && (n = g + l), y < h ? y = h : y > h + k && (y = h + k), this.hasDragged = Math.sqrt(Math.pow(f - n, 2) + Math.pow(q - y, 2)), 10 < this.hasDragged) {
                                var u =
                                    d.isInsidePlot(f - g, q - h, { visiblePlotOnly: !0 }); !d.hasCartesianSeries && !d.mapView || !this.zoomX && !this.zoomY || !u || t || E || (this.selectionMarker = E = d.renderer.rect(g, h, c ? 1 : l, e ? 1 : k, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), d.styledMode || E.attr({ fill: a.selectionMarkerFill || r("#335cad").setOpacity(.25).get() })); E && c && (c = n - f, E.attr({ width: Math.abs(c), x: (0 < c ? 0 : c) + f })); E && e && (c = y - q, E.attr({ height: Math.abs(c), y: (0 < c ? 0 : c) + q })); u && !E && p && d.pan(b, a.panning)
                            }
                        }; c.prototype.dragStart = function (b) {
                            var d =
                                this.chart; d.mouseIsDown = b.type; d.cancelClick = !1; d.mouseDownX = this.mouseDownX = b.chartX; d.mouseDownY = this.mouseDownY = b.chartY
                        }; c.prototype.drop = function (b) {
                            var c = this, a = this.chart, g = this.hasPinched; if (this.selectionMarker) {
                                var e = this.selectionMarker, l = e.attr ? e.attr("x") : e.x, m = e.attr ? e.attr("y") : e.y, f = e.attr ? e.attr("width") : e.width, q = e.attr ? e.attr("height") : e.height, t = { originalEvent: b, xAxis: [], yAxis: [], x: l, y: m, width: f, height: q }, z = !!a.mapView; if (this.hasDragged || g) a.axes.forEach(function (a) {
                                    if (a.zoomEnabled &&
                                        k(a.min) && (g || c[{ xAxis: "zoomX", yAxis: "zoomY" }[a.coll]]) && p(l) && p(m)) { var e = a.horiz, d = "touchend" === b.type ? a.minPixelPadding : 0, h = a.toValue((e ? l : m) + d); e = a.toValue((e ? l + f : m + q) - d); t[a.coll].push({ axis: a, min: Math.min(h, e), max: Math.max(h, e) }); z = !0 }
                                }), z && h(a, "selection", t, function (e) { a.zoom(d(e, g ? { animation: !1 } : null)) }); p(a.index) && (this.selectionMarker = this.selectionMarker.destroy()); g && this.scaleGroups()
                            } a && p(a.index) && (n(a.container, { cursor: a._cursor }), a.cancelClick = 10 < this.hasDragged, a.mouseIsDown = this.hasDragged =
                                this.hasPinched = !1, this.pinchDown = [])
                        }; c.prototype.findNearestKDPoint = function (b, d, a) {
                            var c = this.chart, e = c.hoverPoint; c = c.tooltip; if (e && c && c.isStickyOnContact()) return e; var g; b.forEach(function (e) {
                                var b = !(e.noSharedTooltip && d) && 0 > e.options.findNearestPointBy.indexOf("y"); e = e.searchPoint(a, b); if ((b = z(e, !0) && e.series) && !(b = !z(g, !0))) {
                                    b = g.distX - e.distX; var c = g.dist - e.dist, h = (e.series.group && e.series.group.zIndex) - (g.series.group && g.series.group.zIndex); b = 0 < (0 !== b && d ? b : 0 !== c ? c : 0 !== h ? h : g.series.index >
                                        e.series.index ? -1 : 1)
                                } b && (g = e)
                            }); return g
                        }; c.prototype.getChartCoordinatesFromPoint = function (b, d) { var a = b.series, c = a.xAxis; a = a.yAxis; var e = b.shapeArgs; if (c && a) { var g = t(b.clientX, b.plotX), h = b.plotY || 0; b.isNode && e && p(e.x) && p(e.y) && (g = e.x, h = e.y); return d ? { chartX: a.len + a.pos - h, chartY: c.len + c.pos - g } : { chartX: g + c.pos, chartY: h + a.pos } } if (e && e.x && e.y) return { chartX: e.x, chartY: e.y } }; c.prototype.getChartPosition = function () {
                            if (this.chartPosition) return this.chartPosition; var b = this.chart.container, d = y(b); this.chartPosition =
                                { left: d.left, top: d.top, scaleX: 1, scaleY: 1 }; var a = b.offsetWidth; b = b.offsetHeight; 2 < a && 2 < b && (this.chartPosition.scaleX = d.width / a, this.chartPosition.scaleY = d.height / b); return this.chartPosition
                        }; c.prototype.getCoordinates = function (b) { var d = { xAxis: [], yAxis: [] }; this.chart.axes.forEach(function (a) { d[a.isXAxis ? "xAxis" : "yAxis"].push({ axis: a, value: a.toValue(b[a.horiz ? "chartX" : "chartY"]) }) }); return d }; c.prototype.getHoverData = function (d, c, a, l, e, k) {
                            var g = []; l = !(!l || !d); var f = {
                                chartX: k ? k.chartX : void 0, chartY: k ?
                                    k.chartY : void 0, shared: e
                            }; h(this, "beforeGetHoverData", f); var q = c && !c.stickyTracking ? [c] : a.filter(function (a) { return f.filter ? f.filter(a) : a.visible && !(!e && a.directTouch) && t(a.options.enableMouseTracking, !0) && a.stickyTracking }); var w = l || !k ? d : this.findNearestKDPoint(q, e, k); c = w && w.series; w && (e && !c.noSharedTooltip ? (q = a.filter(function (a) { return f.filter ? f.filter(a) : a.visible && !(!e && a.directTouch) && t(a.options.enableMouseTracking, !0) && !a.noSharedTooltip }), q.forEach(function (a) {
                                var e = b(a.points, function (a) {
                                    return a.x ===
                                        w.x && !a.isNull
                                }); z(e) && (a.chart.isBoosting && (e = a.getPoint(e)), g.push(e))
                            })) : g.push(w)); f = { hoverPoint: w }; h(this, "afterGetHoverData", f); return { hoverPoint: f.hoverPoint, hoverSeries: c, hoverPoints: g }
                        }; c.prototype.getPointFromEvent = function (b) { b = b.target; for (var d; b && !d;)d = b.point, b = b.parentNode; return d }; c.prototype.onTrackerMouseOut = function (b) {
                            b = b.relatedTarget || b.toElement; var d = this.chart.hoverSeries; this.isDirectTouch = !1; if (!(!d || !b || d.stickyTracking || this.inClass(b, "highcharts-tooltip") || this.inClass(b,
                                "highcharts-series-" + d.index) && this.inClass(b, "highcharts-tracker"))) d.onMouseOut()
                        }; c.prototype.inClass = function (b, d) { for (var a; b;) { if (a = u(b, "class")) { if (-1 !== a.indexOf(d)) return !0; if (-1 !== a.indexOf("highcharts-container")) return !1 } b = b.parentElement } }; c.prototype.init = function (b, d) {
                            this.options = d; this.chart = b; this.runChartClick = !(!d.chart.events || !d.chart.events.click); this.pinchDown = []; this.lastValidTouch = {}; v && (b.tooltip = new v(b, d.tooltip), this.followTouchMove = t(d.tooltip.followTouchMove, !0));
                            this.setDOMEvents()
                        }; c.prototype.normalize = function (b, c) { var a = b.touches, g = a ? a.length ? a.item(0) : t(a.changedTouches, b.changedTouches)[0] : b; c || (c = this.getChartPosition()); a = g.pageX - c.left; g = g.pageY - c.top; a /= c.scaleX; g /= c.scaleY; return d(b, { chartX: Math.round(a), chartY: Math.round(g) }) }; c.prototype.onContainerClick = function (b) {
                            var c = this.chart, a = c.hoverPoint; b = this.normalize(b); var g = c.plotLeft, e = c.plotTop; c.cancelClick || (a && this.inClass(b.target, "highcharts-tracker") ? (h(a.series, "click", d(b, { point: a })),
                                c.hoverPoint && a.firePointEvent("click", b)) : (d(b, this.getCoordinates(b)), c.isInsidePlot(b.chartX - g, b.chartY - e, { visiblePlotOnly: !0 }) && h(c, "click", b)))
                        }; c.prototype.onContainerMouseDown = function (b) { var d = 1 === ((b.buttons || b.button) & 1); b = this.normalize(b); if (f.isFirefox && 0 !== b.button) this.onContainerMouseMove(b); if ("undefined" === typeof b.button || d) this.zoomOption(b), d && b.preventDefault && b.preventDefault(), this.dragStart(b) }; c.prototype.onContainerMouseLeave = function (b) {
                            var d = C[t(c.hoverChartIndex, -1)],
                                a = this.chart.tooltip; a && a.shouldStickOnContact() && this.inClass(b.relatedTarget, "highcharts-tooltip-container") || (b = this.normalize(b), d && (b.relatedTarget || b.toElement) && (d.pointer.reset(), d.pointer.chartPosition = void 0), a && !a.isHidden && this.reset())
                        }; c.prototype.onContainerMouseEnter = function (b) { delete this.chartPosition }; c.prototype.onContainerMouseMove = function (b) {
                            var d = this.chart; b = this.normalize(b); this.setHoverChartIndex(); b.preventDefault || (b.returnValue = !1); ("mousedown" === d.mouseIsDown || this.touchSelect(b)) &&
                                this.drag(b); d.openMenu || !this.inClass(b.target, "highcharts-tracker") && !d.isInsidePlot(b.chartX - d.plotLeft, b.chartY - d.plotTop, { visiblePlotOnly: !0 }) || (this.inClass(b.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(b))
                        }; c.prototype.onDocumentTouchEnd = function (b) { var d = C[t(c.hoverChartIndex, -1)]; d && d.pointer.drop(b) }; c.prototype.onContainerTouchMove = function (b) { if (this.touchSelect(b)) this.onContainerMouseMove(b); else this.touch(b) }; c.prototype.onContainerTouchStart = function (b) {
                            if (this.touchSelect(b)) this.onContainerMouseDown(b);
                            else this.zoomOption(b), this.touch(b, !0)
                        }; c.prototype.onDocumentMouseMove = function (b) { var d = this.chart, a = this.chartPosition; b = this.normalize(b, a); var c = d.tooltip; !a || c && c.isStickyOnContact() || d.isInsidePlot(b.chartX - d.plotLeft, b.chartY - d.plotTop, { visiblePlotOnly: !0 }) || this.inClass(b.target, "highcharts-tracker") || this.reset() }; c.prototype.onDocumentMouseUp = function (b) { var d = C[t(c.hoverChartIndex, -1)]; d && d.pointer.drop(b) }; c.prototype.pinch = function (b) {
                            var c = this, a = c.chart, g = c.pinchDown, e = b.touches ||
                                [], l = e.length, m = c.lastValidTouch, k = c.hasZoom, f = {}, q = 1 === l && (c.inClass(b.target, "highcharts-tracker") && a.runTrackerClick || c.runChartClick), p = {}, n = c.selectionMarker; 1 < l ? c.initiated = !0 : 1 === l && this.followTouchMove && (c.initiated = !1); k && c.initiated && !q && !1 !== b.cancelable && b.preventDefault();[].map.call(e, function (a) { return c.normalize(a) }); "touchstart" === b.type ? ([].forEach.call(e, function (a, e) { g[e] = { chartX: a.chartX, chartY: a.chartY } }), m.x = [g[0].chartX, g[1] && g[1].chartX], m.y = [g[0].chartY, g[1] && g[1].chartY],
                                    a.axes.forEach(function (e) { if (e.zoomEnabled) { var b = a.bounds[e.horiz ? "h" : "v"], d = e.minPixelPadding, c = e.toPixels(Math.min(t(e.options.min, e.dataMin), e.dataMin)), g = e.toPixels(Math.max(t(e.options.max, e.dataMax), e.dataMax)), h = Math.max(c, g); b.min = Math.min(e.pos, Math.min(c, g) - d); b.max = Math.max(e.pos + e.len, h + d) } }), c.res = !0) : c.followTouchMove && 1 === l ? this.runPointActions(c.normalize(b)) : g.length && (h(a, "touchpan", { originalEvent: b }, function () {
                                        n || (c.selectionMarker = n = d({ destroy: F, touch: !0 }, a.plotBox)); c.pinchTranslate(g,
                                            e, f, n, p, m); c.hasPinched = k; c.scaleGroups(f, p)
                                    }), c.res && (c.res = !1, this.reset(!1, 0)))
                        }; c.prototype.pinchTranslate = function (b, d, a, c, e, h) { this.zoomHor && this.pinchTranslateDirection(!0, b, d, a, c, e, h); this.zoomVert && this.pinchTranslateDirection(!1, b, d, a, c, e, h) }; c.prototype.pinchTranslateDirection = function (b, d, a, c, e, h, m, l) {
                            var g = this.chart, k = b ? "x" : "y", f = b ? "X" : "Y", q = "chart" + f, x = b ? "width" : "height", p = g["plot" + (b ? "Left" : "Top")], t = g.inverted, w = g.bounds[b ? "h" : "v"], B = 1 === d.length, n = d[0][q], z = !B && d[1][q]; d = function () {
                                "number" ===
                                    typeof r && 20 < Math.abs(n - z) && (G = l || Math.abs(u - r) / Math.abs(n - z)); E = (p - u) / G + n; y = g["plot" + (b ? "Width" : "Height")] / G
                            }; var y, E, G = l || 1, u = a[0][q], r = !B && a[1][q]; d(); a = E; if (a < w.min) { a = w.min; var A = !0 } else a + y > w.max && (a = w.max - y, A = !0); A ? (u -= .8 * (u - m[k][0]), "number" === typeof r && (r -= .8 * (r - m[k][1])), d()) : m[k] = [u, r]; t || (h[k] = E - p, h[x] = y); h = t ? 1 / G : G; e[x] = y; e[k] = a; c[t ? b ? "scaleY" : "scaleX" : "scale" + f] = G; c["translate" + f] = h * p + (u - h * n)
                        }; c.prototype.reset = function (b, d) {
                            var a = this.chart, c = a.hoverSeries, e = a.hoverPoint, g = a.hoverPoints,
                                h = a.tooltip, l = h && h.shared ? g : e; b && l && q(l).forEach(function (a) { a.series.isCartesian && "undefined" === typeof a.plotX && (b = !1) }); if (b) h && l && q(l).length && (h.refresh(l), h.shared && g ? g.forEach(function (a) { a.setState(a.state, !0); a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a)) }) : e && (e.setState(e.state, !0), a.axes.forEach(function (a) { a.crosshair && e.series[a.coll] === a && a.drawCrosshair(null, e) }))); else {
                                    if (e) e.onMouseOut();
                                    g && g.forEach(function (a) { a.setState() }); if (c) c.onMouseOut(); h && h.hide(d); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); a.axes.forEach(function (a) { a.hideCrosshair() }); this.hoverX = a.hoverPoints = a.hoverPoint = null
                                }
                        }; c.prototype.runPointActions = function (d, h) {
                            var a = this.chart, g = a.tooltip && a.tooltip.options.enabled ? a.tooltip : void 0, e = g ? g.shared : !1, l = h || a.hoverPoint, m = l && l.series || a.hoverSeries; h = this.getHoverData(l, m, a.series, (!d || "touchmove" !== d.type) && (!!h || m && m.directTouch && this.isDirectTouch),
                                e, d); l = h.hoverPoint; m = h.hoverSeries; var k = h.hoverPoints; h = m && m.tooltipOptions.followPointer && !m.tooltipOptions.split; var f = e && m && !m.noSharedTooltip; if (l && (l !== a.hoverPoint || g && g.isHidden)) {
                                    (a.hoverPoints || []).forEach(function (a) { -1 === k.indexOf(a) && a.setState() }); if (a.hoverSeries !== m) m.onMouseOver(); this.applyInactiveState(k); (k || []).forEach(function (a) { a.setState("hover") }); a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut"); if (!l.series) return; a.hoverPoints = k; a.hoverPoint = l; l.firePointEvent("mouseOver",
                                        void 0, function () { g && l && g.refresh(f ? k : l, d) })
                                } else h && g && !g.isHidden && (e = g.getAnchor([{}], d), a.isInsidePlot(e[0], e[1], { visiblePlotOnly: !0 }) && g.updatePosition({ plotX: e[0], plotY: e[1] })); this.unDocMouseMove || (this.unDocMouseMove = A(a.container.ownerDocument, "mousemove", function (a) { var e = C[c.hoverChartIndex]; if (e) e.pointer.onDocumentMouseMove(a) }), this.eventsToUnbind.push(this.unDocMouseMove)); a.axes.forEach(function (e) {
                                    var c = t((e.crosshair || {}).snap, !0), g; c && ((g = a.hoverPoint) && g.series[e.coll] === e || (g =
                                        b(k, function (a) { return a.series && a.series[e.coll] === e }))); g || !c ? e.drawCrosshair(d, g) : e.hideCrosshair()
                                })
                        }; c.prototype.scaleGroups = function (b, d) { var a = this.chart; a.series.forEach(function (c) { var e = b || c.getPlotBox(); c.group && (c.xAxis && c.xAxis.zoomEnabled || a.mapView) && (c.group.attr(e), c.markerGroup && (c.markerGroup.attr(e), c.markerGroup.clip(d ? a.clipRect : null)), c.dataLabelsGroup && c.dataLabelsGroup.attr(e)) }); a.clipRect.attr(d || a.clipBox) }; c.prototype.setDOMEvents = function () {
                            var b = this, d = this.chart.container,
                                a = d.ownerDocument; d.onmousedown = this.onContainerMouseDown.bind(this); d.onmousemove = this.onContainerMouseMove.bind(this); d.onclick = this.onContainerClick.bind(this); this.eventsToUnbind.push(A(d, "mouseenter", this.onContainerMouseEnter.bind(this))); this.eventsToUnbind.push(A(d, "mouseleave", this.onContainerMouseLeave.bind(this))); c.unbindDocumentMouseUp || (c.unbindDocumentMouseUp = A(a, "mouseup", this.onDocumentMouseUp.bind(this))); for (var h = this.chart.renderTo.parentElement; h && "BODY" !== h.tagName;)this.eventsToUnbind.push(A(h,
                                    "scroll", function () { delete b.chartPosition })), h = h.parentElement; f.hasTouch && (this.eventsToUnbind.push(A(d, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 })), this.eventsToUnbind.push(A(d, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), c.unbindDocumentTouchEnd || (c.unbindDocumentTouchEnd = A(a, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })))
                        }; c.prototype.setHoverChartIndex = function () {
                            var b = this.chart, d = f.charts[t(c.hoverChartIndex, -1)]; if (d && d !== b) d.pointer.onContainerMouseLeave({ relatedTarget: b.container });
                            d && d.mouseIsDown || (c.hoverChartIndex = b.index)
                        }; c.prototype.touch = function (b, d) { var a = this.chart, c; this.setHoverChartIndex(); if (1 === b.touches.length) if (b = this.normalize(b), (c = a.isInsidePlot(b.chartX - a.plotLeft, b.chartY - a.plotTop, { visiblePlotOnly: !0 })) && !a.openMenu) { d && this.runPointActions(b); if ("touchmove" === b.type) { d = this.pinchDown; var e = d[0] ? 4 <= Math.sqrt(Math.pow(d[0].chartX - b.chartX, 2) + Math.pow(d[0].chartY - b.chartY, 2)) : !1 } t(e, !0) && this.pinch(b) } else d && this.reset(); else 2 === b.touches.length && this.pinch(b) };
                        c.prototype.touchSelect = function (b) { return !(!this.chart.options.chart.zoomBySingleTouch || !b.touches || 1 !== b.touches.length) }; c.prototype.zoomOption = function (b) { var d = this.chart, a = d.options.chart; d = d.inverted; var c = a.zoomType || ""; /touch/.test(b.type) && (c = t(a.pinchType, c)); this.zoomX = b = /x/.test(c); this.zoomY = a = /y/.test(c); this.zoomHor = b && !d || a && d; this.zoomVert = a && !d || b && d; this.hasZoom = b || a }; return c
                    }(); ""; return c
            }); H(f, "Core/MSPointer.js", [f["Core/Globals.js"], f["Core/Pointer.js"], f["Core/Utilities.js"]],
                function (c, f, v) {
                    function D() { var d = []; d.item = function (b) { return this[b] }; b(p, function (b) { d.push({ pageX: b.pageX, pageY: b.pageY, target: b.target }) }); return d } function r(b, d, c, h) { var l = F[f.hoverChartIndex || NaN]; "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !l || (l = l.pointer, h(b), l[d]({ type: c, target: b.currentTarget, preventDefault: u, touches: D() })) } var C = this && this.__extends || function () {
                        var b = function (d, c) {
                            b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) {
                                b.__proto__ =
                                    d
                            } || function (b, d) { for (var c in d) d.hasOwnProperty(c) && (b[c] = d[c]) }; return b(d, c)
                        }; return function (d, c) { function h() { this.constructor = d } b(d, c); d.prototype = null === c ? Object.create(c) : (h.prototype = c.prototype, new h) }
                    }(), F = c.charts, A = c.doc, u = c.noop, n = c.win, k = v.addEvent, d = v.css, b = v.objectEach, h = v.removeEvent, p = {}, z = !!n.PointerEvent; return function (b) {
                        function f() { return null !== b && b.apply(this, arguments) || this } C(f, b); f.isRequired = function () { return !(c.hasTouch || !n.PointerEvent && !n.MSPointerEvent) }; f.prototype.batchMSEvents =
                            function (b) { b(this.chart.container, z ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); b(this.chart.container, z ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); b(A, z ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp) }; f.prototype.destroy = function () { this.batchMSEvents(h); b.prototype.destroy.call(this) }; f.prototype.init = function (c, h) { b.prototype.init.call(this, c, h); this.hasZoom && d(c.container, { "-ms-touch-action": "none", "touch-action": "none" }) }; f.prototype.onContainerPointerDown =
                                function (b) { r(b, "onContainerTouchStart", "touchstart", function (b) { p[b.pointerId] = { pageX: b.pageX, pageY: b.pageY, target: b.currentTarget } }) }; f.prototype.onContainerPointerMove = function (b) { r(b, "onContainerTouchMove", "touchmove", function (b) { p[b.pointerId] = { pageX: b.pageX, pageY: b.pageY }; p[b.pointerId].target || (p[b.pointerId].target = b.currentTarget) }) }; f.prototype.onDocumentPointerUp = function (b) { r(b, "onDocumentTouchEnd", "touchend", function (b) { delete p[b.pointerId] }) }; f.prototype.setDOMEvents = function () {
                                    b.prototype.setDOMEvents.call(this);
                                    (this.hasZoom || this.followTouchMove) && this.batchMSEvents(k)
                                }; return f
                    }(f)
                }); H(f, "Core/Legend/Legend.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Series/Point.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C) {
                    var F = c.animObject, A = c.setAnimation, u = f.format; c = v.isFirefox; var n = v.marginNames; v = v.win; var k = r.distribute, d = C.addEvent, b = C.createElement, h = C.css, p = C.defined, z = C.discardElement, E = C.find, y = C.fireEvent,
                        t = C.isNumber, q = C.merge, l = C.pick, g = C.relativeLength, w = C.stableSort, a = C.syncTimeout; r = C.wrap; C = function () {
                            function c(a, b) {
                                this.allItems = []; this.contentGroup = this.box = void 0; this.display = !1; this.group = void 0; this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0; this.options = void 0; this.padding = 0; this.pages = []; this.proximate = !1; this.scrollGroup =
                                    void 0; this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0; this.chart = a; this.init(a, b)
                            } c.prototype.init = function (a, b) { this.chart = a; this.setOptions(b); b.enabled && (this.render(), d(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = d(this.chart, "render", function () { this.legend.proximatePositions(); this.legend.positionItems() }) : this.unchartrender && this.unchartrender()) }; c.prototype.setOptions = function (a) {
                                var b = l(a.padding,
                                    8); this.options = a; this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = q(this.itemStyle, a.itemHiddenStyle)); this.itemMarginTop = a.itemMarginTop || 0; this.itemMarginBottom = a.itemMarginBottom || 0; this.padding = b; this.initialItemY = b - 5; this.symbolWidth = l(a.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === a.layout && !this.chart.inverted; this.baseline = void 0
                            }; c.prototype.update = function (a, b) {
                                var e = this.chart; this.setOptions(q(!0, this.options, a)); this.destroy(); e.isDirtyLegend = e.isDirtyBox =
                                    !0; l(b, !0) && e.redraw(); y(this, "afterUpdate")
                            }; c.prototype.colorizeItem = function (a, b) {
                                a.legendGroup[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"); if (!this.chart.styledMode) { var e = this.options, d = a.legendItem, c = a.legendLine, g = a.legendSymbol, h = this.itemHiddenStyle.color; e = b ? e.itemStyle.color : h; var l = b ? a.color || h : h, k = a.options && a.options.marker, f = { fill: l }; d && d.css({ fill: e, color: e }); c && c.attr({ stroke: l }); g && (k && g.isMarker && (f = a.pointAttribs(), b || (f.stroke = f.fill = h)), g.attr(f)) } y(this, "afterColorizeItem",
                                    { item: a, visible: b })
                            }; c.prototype.positionItems = function () { this.allItems.forEach(this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() }; c.prototype.positionItem = function (a) { var b = this, e = this.options, d = e.symbolPadding, c = !e.rtl, g = a._legendItemPos; e = g[0]; g = g[1]; var h = a.checkbox, l = a.legendGroup; l && l.element && (d = { translateX: c ? e : this.legendWidth - e - 2 * d - 4, translateY: g }, c = function () { y(b, "afterPositionItem", { item: a }) }, p(l.translateY) ? l.animate(d, void 0, c) : (l.attr(d), c())); h && (h.x = e, h.y = g) };
                            c.prototype.destroyItem = function (a) { var b = a.checkbox;["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (b) { a[b] && (a[b] = a[b].destroy()) }); b && z(a.checkbox) }; c.prototype.destroy = function () { function a(a) { this[a] && (this[a] = this[a].destroy()) } this.getAllItems().forEach(function (b) { ["legendItem", "legendGroup"].forEach(a, b) }); "clipRect up down pager nav box title group".split(" ").forEach(a, this); this.display = null }; c.prototype.positionCheckboxes = function () {
                                var a = this.group && this.group.alignAttr,
                                    b = this.clipHeight || this.legendHeight, d = this.titleHeight; if (a) { var c = a.translateY; this.allItems.forEach(function (e) { var g = e.checkbox; if (g) { var l = c + d + g.y + (this.scrollOffset || 0) + 3; h(g, { left: a.translateX + e.checkboxOffset + g.x - 20 + "px", top: l + "px", display: this.proximate || l > c - 6 && l < c + b - 6 ? "" : "none" }) } }, this) }
                            }; c.prototype.renderTitle = function () {
                                var a = this.options, b = this.padding, d = a.title, c = 0; d.text && (this.title || (this.title = this.chart.renderer.label(d.text, b - 3, b - 4, void 0, void 0, void 0, a.useHTML, void 0, "legend-title").attr({ zIndex: 1 }),
                                    this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({ width: this.maxLegendWidth + "px" }), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: c })); this.titleHeight = c
                            }; c.prototype.setText = function (a) { var b = this.options; a.legendItem.attr({ text: b.labelFormat ? u(b.labelFormat, a, this.chart) : b.labelFormatter.call(a) }) }; c.prototype.renderItem = function (a) {
                                var b = this.chart, e = b.renderer, d = this.options, c = this.symbolWidth, g = d.symbolPadding ||
                                    0, h = this.itemStyle, k = this.itemHiddenStyle, f = "horizontal" === d.layout ? l(d.itemDistance, 20) : 0, p = !d.rtl, t = !a.series, w = !t && a.series.drawLegendSymbol ? a.series : a, n = w.options, z = this.createCheckboxForItem && n && n.showCheckbox, B = d.useHTML, y = a.options.className, E = a.legendItem; n = c + g + f + (z ? 20 : 0); E || (a.legendGroup = e.g("legend-item").addClass("highcharts-" + w.type + "-series highcharts-color-" + a.colorIndex + (y ? " " + y : "") + (t ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = E = e.text("",
                                        p ? c + g : -g, this.baseline || 0, B), b.styledMode || E.css(q(a.visible ? h : k)), E.attr({ align: p ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (this.fontMetrics = e.fontMetrics(b.styledMode ? 12 : h.fontSize, E), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, E.attr("y", this.baseline), this.symbolHeight = d.symbolHeight || this.fontMetrics.f, d.squareSymbol && (this.symbolWidth = l(d.symbolWidth, Math.max(this.symbolHeight, 16)), n = this.symbolWidth + g + f + (z ? 20 : 0), p && E.attr("x", this.symbolWidth + g))), w.drawLegendSymbol(this,
                                            a), this.setItemEvents && this.setItemEvents(a, E, B)); z && !a.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a); this.colorizeItem(a, a.visible); !b.styledMode && h.width || E.css({ width: (d.itemWidth || this.widthOption || b.spacingBox.width) - n + "px" }); this.setText(a); b = E.getBBox(); e = this.fontMetrics && this.fontMetrics.h || 0; a.itemWidth = a.checkboxOffset = d.itemWidth || a.legendItemWidth || b.width + n; this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth); this.totalItemWidth += a.itemWidth; this.itemHeight =
                                                a.itemHeight = Math.round(a.legendItemHeight || (b.height > 1.5 * e ? b.height : e))
                            }; c.prototype.layoutItem = function (a) {
                                var b = this.options, e = this.padding, d = "horizontal" === b.layout, c = a.itemHeight, g = this.itemMarginBottom, h = this.itemMarginTop, k = d ? l(b.itemDistance, 20) : 0, f = this.maxLegendWidth; b = b.alignColumns && this.totalItemWidth > f ? this.maxItemWidth : a.itemWidth; d && this.itemX - e + b > f && (this.itemX = e, this.lastLineHeight && (this.itemY += h + this.lastLineHeight + g), this.lastLineHeight = 0); this.lastItemY = h + this.itemY + g; this.lastLineHeight =
                                    Math.max(c, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; d ? this.itemX += b : (this.itemY += h + c + g, this.lastLineHeight = c); this.offsetWidth = this.widthOption || Math.max((d ? this.itemX - e - (a.checkbox ? 0 : k) : b) + e, this.offsetWidth)
                            }; c.prototype.getAllItems = function () { var a = []; this.chart.series.forEach(function (b) { var e = b && b.options; b && l(e.showInLegend, p(e.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === e.legendType ? b.data : b))) }); y(this, "afterGetAllItems", { allItems: a }); return a }; c.prototype.getAlignment =
                                function () { var a = this.options; return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0) }; c.prototype.adjustMargins = function (a, b) { var e = this.chart, d = this.options, c = this.getAlignment(); c && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g, h) { g.test(c) && !p(a[h]) && (e[n[h]] = Math.max(e[n[h]], e.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h] * d[h % 2 ? "x" : "y"] + l(d.margin, 12) + b[h] + (e.titleOffset[h] || 0))) }) };
                            c.prototype.proximatePositions = function () {
                                var a = this.chart, b = [], d = "left" === this.options.align; this.allItems.forEach(function (e) { var c; var g = d; if (e.yAxis) { e.xAxis.options.reversed && (g = !g); e.points && (c = E(g ? e.points : e.points.slice(0).reverse(), function (a) { return t(a.plotY) })); g = this.itemMarginTop + e.legendItem.getBBox().height + this.itemMarginBottom; var h = e.yAxis.top - a.plotTop; e.visible ? (c = c ? c.plotY : e.yAxis.height, c += h - .3 * g) : c = h + e.yAxis.height; b.push({ target: c, size: g, item: e }) } }, this); k(b, a.plotHeight).forEach(function (b) {
                                    b.item._legendItemPos &&
                                        b.pos && (b.item._legendItemPos[1] = a.plotTop - a.spacing[0] + b.pos)
                                })
                            }; c.prototype.render = function () {
                                var a = this.chart, b = a.renderer, d = this.options, c = this.padding, h = this.getAllItems(), l = this.group, k = this.box; this.itemX = c; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0; this.widthOption = g(d.width, a.spacingBox.width - c); var f = a.spacingBox.width - 2 * c - d.x; -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (f /= 2); this.maxLegendWidth = this.widthOption || f; l || (this.group = l = b.g("legend").addClass(d.className ||
                                    "").attr({ zIndex: 7 }).add(), this.contentGroup = b.g().attr({ zIndex: 1 }).add(l), this.scrollGroup = b.g().add(this.contentGroup)); this.renderTitle(); w(h, function (a, b) { return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); d.reversed && h.reverse(); this.allItems = h; this.display = f = !!h.length; this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; h.forEach(this.renderItem, this); h.forEach(this.layoutItem, this); h = (this.widthOption || this.offsetWidth) + c; var q = this.lastItemY +
                                        this.lastLineHeight + this.titleHeight; q = this.handleOverflow(q); q += c; k || (this.box = k = b.rect().addClass("highcharts-legend-box").attr({ r: d.borderRadius }).add(l)); a.styledMode || k.attr({ stroke: d.borderColor, "stroke-width": d.borderWidth || 0, fill: d.backgroundColor || "none" }).shadow(d.shadow); if (0 < h && 0 < q) k[k.placed ? "animate" : "attr"](k.crisp.call({}, { x: 0, y: 0, width: h, height: q }, k.strokeWidth())); l[f ? "show" : "hide"](); a.styledMode && "none" === l.getStyle("display") && (h = q = 0); this.legendWidth = h; this.legendHeight = q; f &&
                                            this.align(); this.proximate || this.positionItems(); y(this, "afterRender")
                            }; c.prototype.align = function (a) {
                                void 0 === a && (a = this.chart.spacingBox); var b = this.chart, e = this.options, d = a.y; /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? d += b.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b.titleOffset[2] && (d -= b.titleOffset[2]); d !== a.y && (a = q(a, { y: d })); b.hasRendered || (this.group.placed = !1); this.group.align(q(e, {
                                    width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ?
                                        "top" : e.verticalAlign
                                }), !0, a)
                            }; c.prototype.handleOverflow = function (a) {
                                var b = this, e = this.chart, d = e.renderer, c = this.options, g = c.y, h = "top" === c.verticalAlign, k = this.padding, f = c.maxHeight, q = c.navigation, p = l(q.animation, !0), t = q.arrowSize || 12, n = this.pages, w = this.allItems, z = function (a) { "number" === typeof a ? r.attr({ height: a }) : r && (b.clipRect = r.destroy(), b.contentGroup.clip()); b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + k + "px,9999px," + (k + a) + "px,0)" : "auto") }, B = function (a) {
                                    b[a] = d.circle(0, 0, 1.3 *
                                        t).translate(t / 2, t / 2).add(u); e.styledMode || b[a].attr("fill", "rgba(0,0,0,0.0001)"); return b[a]
                                }, y, E; g = e.spacingBox.height + (h ? -g : g) - k; var u = this.nav, r = this.clipRect; "horizontal" !== c.layout || "middle" === c.verticalAlign || c.floating || (g /= 2); f && (g = Math.min(g, f)); n.length = 0; a && 0 < g && a > g && !1 !== q.enabled ? (this.clipHeight = y = Math.max(g - 20 - this.titleHeight - k, 0), this.currentPage = l(this.currentPage, 1), this.fullHeight = a, w.forEach(function (a, b) {
                                    var e = a._legendItemPos[1], d = Math.round(a.legendItem.getBBox().height),
                                        c = n.length; if (!c || e - n[c - 1] > y && (E || e) !== n[c - 1]) n.push(E || e), c++; a.pageIx = c - 1; E && (w[b - 1].pageIx = c - 1); b === w.length - 1 && e + d - n[c - 1] > y && d <= y && (n.push(e), a.pageIx = c); e !== E && (E = e)
                                }), r || (r = b.clipRect = d.clipRect(0, k, 9999, 0), b.contentGroup.clip(r)), z(y), u || (this.nav = u = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, t, t).add(u), B("upTracker").on("click", function () { b.scroll(-1, p) }), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation"), !e.styledMode && q.style && this.pager.css(q.style),
                                    this.pager.add(u), this.down = d.symbol("triangle-down", 0, 0, t, t).add(u), B("downTracker").on("click", function () { b.scroll(1, p) })), b.scroll(0), a = g) : u && (z(), this.nav = u.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
                            }; c.prototype.scroll = function (b, d) {
                                var e = this, c = this.chart, g = this.pages, h = g.length, k = this.clipHeight, f = this.options.navigation, q = this.pager, p = this.padding, t = this.currentPage + b; t > h && (t = h); 0 < t && ("undefined" !== typeof d && A(d, c), this.nav.attr({
                                    translateX: p, translateY: k +
                                        this.padding + 7 + this.titleHeight, visibility: "inherit"
                                }), [this.up, this.upTracker].forEach(function (a) { a.attr({ "class": 1 === t ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }), q.attr({ text: t + "/" + h }), [this.down, this.downTracker].forEach(function (a) { a.attr({ x: 18 + this.pager.getBBox().width, "class": t === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }, this), c.styledMode || (this.up.attr({ fill: 1 === t ? f.inactiveColor : f.activeColor }), this.upTracker.css({
                                    cursor: 1 === t ? "default" :
                                        "pointer"
                                }), this.down.attr({ fill: t === h ? f.inactiveColor : f.activeColor }), this.downTracker.css({ cursor: t === h ? "default" : "pointer" })), this.scrollOffset = -g[t - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = t, this.positionCheckboxes(), b = F(l(d, c.renderer.globalAnimation, !0)), a(function () { y(e, "afterScroll", { currentPage: t }) }, b.duration))
                            }; c.prototype.setItemEvents = function (a, b, d) {
                                var e = this, c = e.chart.renderer.boxWrapper, g = a instanceof D, h = "highcharts-legend-" +
                                    (g ? "point" : "series") + "-active", l = e.chart.styledMode, m = function (b) { e.allItems.forEach(function (e) { a !== e && [e].concat(e.linkedSeries || []).forEach(function (a) { a.setState(b, !g) }) }) }; (d ? [b, a.legendSymbol] : [a.legendGroup]).forEach(function (d) {
                                        if (d) d.on("mouseover", function () { a.visible && m("inactive"); a.setState("hover"); a.visible && c.addClass(h); l || b.css(e.options.itemHoverStyle) }).on("mouseout", function () { e.chart.styledMode || b.css(q(a.visible ? e.itemStyle : e.itemHiddenStyle)); m(""); c.removeClass(h); a.setState() }).on("click",
                                            function (b) { var e = function () { a.setVisible && a.setVisible(); m(a.visible ? "inactive" : "") }; c.removeClass(h); b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, e) : y(a, "legendItemClick", b, e) })
                                    })
                            }; c.prototype.createCheckboxForItem = function (a) {
                                a.checkbox = b("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); d(a.checkbox, "click", function (b) {
                                    y(a.series || a, "checkboxClick", {
                                        checked: b.target.checked,
                                        item: a
                                    }, function () { a.select() })
                                })
                            }; return c
                        }(); (/Trident\/7\.0/.test(v.navigator && v.navigator.userAgent) || c) && r(C.prototype, "positionItem", function (a, b) { var d = this, e = function () { b._legendItemPos && a.call(d, b) }; e(); d.bubbleLegend || setTimeout(e) }); ""; return C
                }); H(f, "Core/Series/SeriesRegistry.js", [f["Core/Globals.js"], f["Core/DefaultOptions.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
                    var r = f.defaultOptions, C = D.error, F = D.extendClass, A = D.merge, u; (function (f) {
                        function k(d, b) {
                            var c =
                                r.plotOptions || {}, k = b.defaultOptions; b.prototype.pointClass || (b.prototype.pointClass = v); b.prototype.type = d; k && (c[d] = k); f.seriesTypes[d] = b
                        } f.seriesTypes = c.seriesTypes; f.getSeries = function (d, b) { void 0 === b && (b = {}); var c = d.options.chart; c = b.type || c.type || c.defaultSeriesType || ""; var k = f.seriesTypes[c]; f || C(17, !0, d, { missingModuleFor: c }); c = new k; "function" === typeof c.init && c.init(d, b); return c }; f.registerSeriesType = k; f.seriesType = function (d, b, c, p, n) {
                            var h = r.plotOptions || {}; b = b || ""; h[d] = A(h[b], c); k(d, F(f.seriesTypes[b] ||
                                function () { }, p)); f.seriesTypes[d].prototype.type = d; n && (f.seriesTypes[d].prototype.pointClass = F(v, n)); return f.seriesTypes[d]
                        }
                    })(u || (u = {})); return u
                }); H(f, "Core/Chart/Chart.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/FormatUtilities.js"], f["Core/Foundation.js"], f["Core/Globals.js"], f["Core/Legend/Legend.js"], f["Core/MSPointer.js"], f["Core/DefaultOptions.js"], f["Core/Pointer.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGRenderer.js"],
                f["Core/Time.js"], f["Core/Utilities.js"], f["Core/Renderer/HTML/AST.js"]], function (c, f, v, D, r, C, F, A, u, n, k, d, b, h, p) {
                    var z = c.animate, E = c.animObject, y = c.setAnimation, t = v.numberFormat, q = D.registerEventOptions, l = r.charts, g = r.doc, w = r.marginNames, a = r.svg, B = r.win, e = A.defaultOptions, G = A.defaultTime, m = k.seriesTypes, x = h.addEvent, J = h.attr, M = h.cleanRecursively, I = h.createElement, L = h.css, U = h.defined, X = h.discardElement, H = h.erase, K = h.error, ba = h.extend, fa = h.find, N = h.fireEvent, ha = h.getStyle, R = h.isArray, Z = h.isNumber, Q =
                        h.isObject, T = h.isString, S = h.merge, W = h.objectEach, O = h.pick, ca = h.pInt, da = h.relativeLength, ia = h.removeEvent, aa = h.splat, ea = h.syncTimeout, ja = h.uniqueKey; c = function () {
                            function c(a, b, d) {
                                this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth =
                                    this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0; this.sharedClips = {}; this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0; this.getArgs(a, b, d)
                            } c.chart = function (a, b, d) { return new c(a, b, d) }; c.prototype.getArgs = function (a, b, d) { T(a) || a.nodeName ? (this.renderTo = a, this.init(b, d)) : this.init(a, b) }; c.prototype.init = function (a, d) {
                                var c = a.plotOptions || {}; N(this, "init", { args: arguments }, function () {
                                    var g = S(e, a), h = g.chart; W(g.plotOptions,
                                        function (a, b) { Q(a) && (a.tooltip = c[b] && S(c[b].tooltip) || void 0) }); g.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip; this.userOptions = a; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors = []; this.callback = d; this.isResizing = 0; this.options = g; this.axes = []; this.series = []; this.time = a.time && Object.keys(a.time).length ? new b(a.time) : r.time; this.numberFormatter = h.numberFormatter || t; this.styledMode = h.styledMode; this.hasCartesianSeries = h.showAxes; this.index =
                                            l.length; l.push(this); r.chartCount++; q(this, h); this.xAxis = []; this.yAxis = []; this.pointCount = this.colorCounter = this.symbolCounter = 0; N(this, "afterInit"); this.firstRender()
                                })
                            }; c.prototype.initSeries = function (a) { var b = this.options.chart; b = a.type || b.type || b.defaultSeriesType; var d = m[b]; d || K(17, !0, this, { missingModuleFor: b }); b = new d; "function" === typeof b.init && b.init(this, a); return b }; c.prototype.setSeriesData = function () {
                                this.getSeriesOrderByLinks().forEach(function (a) {
                                    a.points || a.data || !a.enabledDataSorting ||
                                        a.setData(a.options.data, !1)
                                })
                            }; c.prototype.getSeriesOrderByLinks = function () { return this.series.concat().sort(function (a, b) { return a.linkedSeries.length || b.linkedSeries.length ? b.linkedSeries.length - a.linkedSeries.length : 0 }) }; c.prototype.orderSeries = function (a) { var b = this.series; a = a || 0; for (var d = b.length; a < d; ++a)b[a] && (b[a].index = a, b[a].name = b[a].getName()) }; c.prototype.isInsidePlot = function (a, b, d) {
                                void 0 === d && (d = {}); var e = this.inverted, c = this.plotBox, g = this.plotLeft, h = this.plotTop, l = this.scrollablePlotBox,
                                    k = 0; var m = 0; d.visiblePlotOnly && this.scrollingContainer && (m = this.scrollingContainer, k = m.scrollLeft, m = m.scrollTop); var f = d.series; c = d.visiblePlotOnly && l || c; l = d.inverted ? b : a; b = d.inverted ? a : b; a = { x: l, y: b, isInsidePlot: !0 }; if (!d.ignoreX) { var q = f && (e ? f.yAxis : f.xAxis) || { pos: g, len: Infinity }; l = d.paneCoordinates ? q.pos + l : g + l; l >= Math.max(k + g, q.pos) && l <= Math.min(k + g + c.width, q.pos + q.len) || (a.isInsidePlot = !1) } !d.ignoreY && a.isInsidePlot && (e = f && (e ? f.xAxis : f.yAxis) || { pos: h, len: Infinity }, d = d.paneCoordinates ? e.pos + b : h +
                                        b, d >= Math.max(m + h, e.pos) && d <= Math.min(m + h + c.height, e.pos + e.len) || (a.isInsidePlot = !1)); N(this, "afterIsInsidePlot", a); return a.isInsidePlot
                            }; c.prototype.redraw = function (a) {
                                N(this, "beforeRedraw"); var b = this.hasCartesianSeries ? this.axes : this.colorAxis || [], d = this.series, e = this.pointer, c = this.legend, g = this.userOptions.legend, h = this.renderer, l = h.isHidden(), m = [], k = this.isDirtyBox, f = this.isDirtyLegend; this.setResponsive && this.setResponsive(!1); y(this.hasRendered ? a : !1, this); l && this.temporaryDisplay(); this.layOutTitles();
                                for (a = d.length; a--;) { var q = d[a]; if (q.options.stacking || q.options.centerInCategory) { var p = !0; if (q.isDirty) { var t = !0; break } } } if (t) for (a = d.length; a--;)q = d[a], q.options.stacking && (q.isDirty = !0); d.forEach(function (a) { a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), f = !0) : g && (g.labelFormatter || g.labelFormat) && (f = !0)); a.isDirtyData && N(a, "updatedData") }); f && c && c.options.enabled && (c.render(), this.isDirtyLegend = !1); p && this.getStacks(); b.forEach(function (a) {
                                    a.updateNames();
                                    a.setScale()
                                }); this.getMargins(); b.forEach(function (a) { a.isDirty && (k = !0) }); b.forEach(function (a) { var b = a.min + "," + a.max; a.extKey !== b && (a.extKey = b, m.push(function () { N(a, "afterSetExtremes", ba(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (k || p) && a.redraw() }); k && this.drawChartBox(); N(this, "predraw"); d.forEach(function (a) { (k || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); e && e.reset(!0); h.draw(); N(this, "redraw"); N(this, "render"); l && this.temporaryDisplay(!0); m.forEach(function (a) { a.call() })
                            };
                            c.prototype.get = function (a) { function b(b) { return b.id === a || b.options && b.options.id === a } for (var d = this.series, e = fa(this.axes, b) || fa(this.series, b), c = 0; !e && c < d.length; c++)e = fa(d[c].points || [], b); return e }; c.prototype.getAxes = function () { var a = this, b = this.options, d = b.xAxis = aa(b.xAxis || {}); b = b.yAxis = aa(b.yAxis || {}); N(this, "getAxes"); d.forEach(function (a, b) { a.index = b; a.isX = !0 }); b.forEach(function (a, b) { a.index = b }); d.concat(b).forEach(function (b) { new f(a, b) }); N(this, "afterGetAxes") }; c.prototype.getSelectedPoints =
                                function () { return this.series.reduce(function (a, b) { b.getPointsCollection().forEach(function (b) { O(b.selectedStaging, b.selected) && a.push(b) }); return a }, []) }; c.prototype.getSelectedSeries = function () { return this.series.filter(function (a) { return a.selected }) }; c.prototype.setTitle = function (a, b, d) { this.applyDescription("title", a); this.applyDescription("subtitle", b); this.applyDescription("caption", void 0); this.layOutTitles(d) }; c.prototype.applyDescription = function (a, b) {
                                    var d = this, e = "title" === a ? {
                                        color: "#333333",
                                        fontSize: this.options.isStock ? "16px" : "18px"
                                    } : { color: "#666666" }; e = this.options[a] = S(!this.styledMode && { style: e }, this.options[a], b); var c = this[a]; c && b && (this[a] = c = c.destroy()); e && !c && (c = this.renderer.text(e.text, 0, 0, e.useHTML).attr({ align: e.align, "class": "highcharts-" + a, zIndex: e.zIndex || 4 }).add(), c.update = function (b) { d[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[a]](b) }, this.styledMode || c.css(e.style), this[a] = c)
                                }; c.prototype.layOutTitles = function (a) {
                                    var b = [0, 0, 0], d = this.renderer,
                                        e = this.spacingBox;["title", "subtitle", "caption"].forEach(function (a) {
                                            var c = this[a], g = this.options[a], h = g.verticalAlign || "top"; a = "title" === a ? "top" === h ? -3 : 0 : "top" === h ? b[0] + 2 : 0; var l; if (c) {
                                                this.styledMode || (l = g.style && g.style.fontSize); l = d.fontMetrics(l, c).b; c.css({ width: (g.width || e.width + (g.widthAdjust || 0)) + "px" }); var k = Math.round(c.getBBox(g.useHTML).height); c.align(ba({ y: "bottom" === h ? l : a + l, height: k }, g), !1, "spacingBox"); g.floating || ("top" === h ? b[0] = Math.ceil(b[0] + k) : "bottom" === h && (b[2] = Math.ceil(b[2] +
                                                    k)))
                                            }
                                        }, this); b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin); b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin); var c = !this.titleOffset || this.titleOffset.join(",") !== b.join(","); this.titleOffset = b; N(this, "afterLayOutTitles"); !this.isDirtyBox && c && (this.isDirtyBox = this.isDirtyLegend = c, this.hasRendered && O(a, !0) && this.isDirtyBox && this.redraw())
                                }; c.prototype.getChartSize = function () {
                                    var a = this.options.chart, b = a.width; a = a.height;
                                    var d = this.renderTo; U(b) || (this.containerWidth = ha(d, "width")); U(a) || (this.containerHeight = ha(d, "height")); this.chartWidth = Math.max(0, b || this.containerWidth || 600); this.chartHeight = Math.max(0, da(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                                }; c.prototype.temporaryDisplay = function (a) {
                                    var b = this.renderTo; if (a) for (; b && b.style;)b.hcOrigStyle && (L(b, b.hcOrigStyle), delete b.hcOrigStyle), b.hcOrigDetached && (g.body.removeChild(b), b.hcOrigDetached = !1), b = b.parentNode; else for (; b && b.style;) {
                                        g.body.contains(b) ||
                                            b.parentNode || (b.hcOrigDetached = !0, g.body.appendChild(b)); if ("none" === ha(b, "display", !1) || b.hcOricDetached) b.hcOrigStyle = { display: b.style.display, height: b.style.height, overflow: b.style.overflow }, a = { display: "block", overflow: "hidden" }, b !== this.renderTo && (a.height = 0), L(b, a), b.offsetWidth || b.style.setProperty("display", "block", "important"); b = b.parentNode; if (b === g.body) break
                                    }
                                }; c.prototype.setClassName = function (a) { this.container.className = "highcharts-container " + (a || "") }; c.prototype.getContainer = function () {
                                    var b =
                                        this.options, e = b.chart, c = ja(), h, k = this.renderTo; k || (this.renderTo = k = e.renderTo); T(k) && (this.renderTo = k = g.getElementById(k)); k || K(13, !0, this); var m = ca(J(k, "data-highcharts-chart")); Z(m) && l[m] && l[m].hasRendered && l[m].destroy(); J(k, "data-highcharts-chart", this.index); k.innerHTML = p.emptyHTML; e.skipClone || k.offsetWidth || this.temporaryDisplay(); this.getChartSize(); m = this.chartWidth; var f = this.chartHeight; L(k, { overflow: "hidden" }); this.styledMode || (h = ba({
                                            position: "relative", overflow: "hidden", width: m + "px",
                                            height: f + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none"
                                        }, e.style || {})); this.container = c = I("div", { id: c }, h, k); this._cursor = c.style.cursor; this.renderer = new (e.renderer || !a ? n.getRendererType(e.renderer) : d)(c, m, f, void 0, e.forExport, b.exporting && b.exporting.allowHTML, this.styledMode); y(void 0, this); this.setClassName(e.className); if (this.styledMode) for (var q in b.defs) this.renderer.definition(b.defs[q]);
                                    else this.renderer.setStyle(e.style); this.renderer.chartIndex = this.index; N(this, "afterGetContainer")
                                }; c.prototype.getMargins = function (a) { var b = this.spacing, d = this.margin, e = this.titleOffset; this.resetMargins(); e[0] && !U(d[0]) && (this.plotTop = Math.max(this.plotTop, e[0] + b[0])); e[2] && !U(d[2]) && (this.marginBottom = Math.max(this.marginBottom, e[2] + b[2])); this.legend && this.legend.display && this.legend.adjustMargins(d, b); N(this, "getMargins"); a || this.getAxisMargins() }; c.prototype.getAxisMargins = function () {
                                    var a =
                                        this, b = a.axisOffset = [0, 0, 0, 0], d = a.colorAxis, e = a.margin, c = function (a) { a.forEach(function (a) { a.visible && a.getOffset() }) }; a.hasCartesianSeries ? c(a.axes) : d && d.length && c(d); w.forEach(function (d, c) { U(e[c]) || (a[d] += b[c]) }); a.setChartSize()
                                }; c.prototype.reflow = function (a) {
                                    var b = this, d = b.options.chart, e = b.renderTo, c = U(d.width) && U(d.height), l = d.width || ha(e, "width"); d = d.height || ha(e, "height"); e = a ? a.target : B; delete b.pointer.chartPosition; if (!c && !b.isPrinting && l && d && (e === B || e === g)) {
                                        if (l !== b.containerWidth || d !==
                                            b.containerHeight) h.clearTimeout(b.reflowTimeout), b.reflowTimeout = ea(function () { b.container && b.setSize(void 0, void 0, !1) }, a ? 100 : 0); b.containerWidth = l; b.containerHeight = d
                                    }
                                }; c.prototype.setReflow = function (a) { var b = this; !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = x(B, "resize", function (a) { b.options && b.reflow(a) }), x(this, "destroy", this.unbindReflow)) }; c.prototype.setSize = function (a, b, d) {
                                    var e = this, c = e.renderer; e.isResizing += 1; y(d, e); d =
                                        c.globalAnimation; e.oldChartHeight = e.chartHeight; e.oldChartWidth = e.chartWidth; "undefined" !== typeof a && (e.options.chart.width = a); "undefined" !== typeof b && (e.options.chart.height = b); e.getChartSize(); e.styledMode || (d ? z : L)(e.container, { width: e.chartWidth + "px", height: e.chartHeight + "px" }, d); e.setChartSize(!0); c.setSize(e.chartWidth, e.chartHeight, d); e.axes.forEach(function (a) { a.isDirty = !0; a.setScale() }); e.isDirtyLegend = !0; e.isDirtyBox = !0; e.layOutTitles(); e.getMargins(); e.redraw(d); e.oldChartHeight = null; N(e,
                                            "resize"); ea(function () { e && N(e, "endResize", null, function () { --e.isResizing }) }, E(d).duration)
                                }; c.prototype.setChartSize = function (a) {
                                    var b = this.inverted, d = this.renderer, e = this.chartWidth, c = this.chartHeight, g = this.options.chart, h = this.spacing, l = this.clipOffset, k, m, f, q; this.plotLeft = k = Math.round(this.plotLeft); this.plotTop = m = Math.round(this.plotTop); this.plotWidth = f = Math.max(0, Math.round(e - k - this.marginRight)); this.plotHeight = q = Math.max(0, Math.round(c - m - this.marginBottom)); this.plotSizeX = b ? q : f; this.plotSizeY =
                                        b ? f : q; this.plotBorderWidth = g.plotBorderWidth || 0; this.spacingBox = d.spacingBox = { x: h[3], y: h[0], width: e - h[3] - h[1], height: c - h[0] - h[2] }; this.plotBox = d.plotBox = { x: k, y: m, width: f, height: q }; b = 2 * Math.floor(this.plotBorderWidth / 2); e = Math.ceil(Math.max(b, l[3]) / 2); c = Math.ceil(Math.max(b, l[0]) / 2); this.clipBox = { x: e, y: c, width: Math.floor(this.plotSizeX - Math.max(b, l[1]) / 2 - e), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(b, l[2]) / 2 - c)) }; a || (this.axes.forEach(function (a) { a.setAxisSize(); a.setAxisTranslation() }),
                                            d.alignElements()); N(this, "afterSetChartSize", { skipAxes: a })
                                }; c.prototype.resetMargins = function () { N(this, "resetMargins"); var a = this, b = a.options.chart;["margin", "spacing"].forEach(function (d) { var e = b[d], c = Q(e) ? e : [e, e, e, e];["Top", "Right", "Bottom", "Left"].forEach(function (e, g) { a[d][g] = O(b[d + e], c[g]) }) }); w.forEach(function (b, e) { a[b] = O(a.margin[e], a.spacing[e]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0] }; c.prototype.drawChartBox = function () {
                                    var a = this.options.chart, b = this.renderer, e = this.chartWidth,
                                        d = this.chartHeight, c = this.styledMode, g = this.plotBGImage, h = a.backgroundColor, l = a.plotBackgroundColor, k = a.plotBackgroundImage, m = this.plotLeft, f = this.plotTop, q = this.plotWidth, p = this.plotHeight, t = this.plotBox, w = this.clipRect, n = this.clipBox, x = this.chartBackground, z = this.plotBackground, B = this.plotBorder, y, E = "animate"; x || (this.chartBackground = x = b.rect().addClass("highcharts-background").add(), E = "attr"); if (c) var u = y = x.strokeWidth(); else {
                                            u = a.borderWidth || 0; y = u + (a.shadow ? 8 : 0); h = { fill: h || "none" }; if (u || x["stroke-width"]) h.stroke =
                                                a.borderColor, h["stroke-width"] = u; x.attr(h).shadow(a.shadow)
                                        } x[E]({ x: y / 2, y: y / 2, width: e - y - u % 2, height: d - y - u % 2, r: a.borderRadius }); E = "animate"; z || (E = "attr", this.plotBackground = z = b.rect().addClass("highcharts-plot-background").add()); z[E](t); c || (z.attr({ fill: l || "none" }).shadow(a.plotShadow), k && (g ? (k !== g.attr("href") && g.attr("href", k), g.animate(t)) : this.plotBGImage = b.image(k, m, f, q, p).add())); w ? w.animate({ width: n.width, height: n.height }) : this.clipRect = b.clipRect(n); E = "animate"; B || (E = "attr", this.plotBorder =
                                            B = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); c || B.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" }); B[E](B.crisp({ x: m, y: f, width: q, height: p }, -B.strokeWidth())); this.isDirtyBox = !1; N(this, "afterDrawChartBox")
                                }; c.prototype.propFromSeries = function () {
                                    var a = this, b = a.options.chart, e = a.options.series, d, c, g;["inverted", "angular", "polar"].forEach(function (h) {
                                        c = m[b.type || b.defaultSeriesType]; g = b[h] || c && c.prototype[h]; for (d = e && e.length; !g && d--;)(c = m[e[d].type]) &&
                                            c.prototype[h] && (g = !0); a[h] = g
                                    })
                                }; c.prototype.linkSeries = function () { var a = this, b = a.series; b.forEach(function (a) { a.linkedSeries.length = 0 }); b.forEach(function (b) { var e = b.options.linkedTo; T(e) && (e = ":previous" === e ? a.series[b.index - 1] : a.get(e)) && e.linkedParent !== b && (e.linkedSeries.push(b), b.linkedParent = e, e.enabledDataSorting && b.setDataSortingOptions(), b.visible = O(b.options.visible, e.options.visible, b.visible)) }); N(this, "afterLinkSeries") }; c.prototype.renderSeries = function () {
                                    this.series.forEach(function (a) {
                                        a.translate();
                                        a.render()
                                    })
                                }; c.prototype.renderLabels = function () { var a = this, b = a.options.labels; b.items && b.items.forEach(function (e) { var d = ba(b.style, e.style), c = ca(d.left) + a.plotLeft, g = ca(d.top) + a.plotTop + 12; delete d.left; delete d.top; a.renderer.text(e.html, c, g).attr({ zIndex: 2 }).css(d).add() }) }; c.prototype.render = function () {
                                    var a = this.axes, b = this.colorAxis, e = this.renderer, d = this.options, c = function (a) { a.forEach(function (a) { a.visible && a.render() }) }, g = 0; this.setTitle(); this.legend = new C(this, d.legend); this.getStacks &&
                                        this.getStacks(); this.getMargins(!0); this.setChartSize(); d = this.plotWidth; a.some(function (a) { if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return g = 21, !0 }); var h = this.plotHeight = Math.max(this.plotHeight - g, 0); a.forEach(function (a) { a.setScale() }); this.getAxisMargins(); var l = 1.1 < d / this.plotWidth, k = 1.05 < h / this.plotHeight; if (l || k) a.forEach(function (a) { (a.horiz && l || !a.horiz && k) && a.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries ? c(a) : b && b.length && c(b);
                                    this.seriesGroup || (this.seriesGroup = e.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
                                }; c.prototype.destroy = function () {
                                    var a = this, b = a.axes, e = a.series, d = a.container, c = d && d.parentNode, g; N(a, "destroy"); a.renderer.forExport ? H(l, a) : l[a.index] = void 0; r.chartCount--; a.renderTo.removeAttribute("data-highcharts-chart"); ia(a); for (g = b.length; g--;)b[g] = b[g].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (g = e.length; g--;)e[g] =
                                        e[g].destroy(); "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) { var e = a[b]; e && e.destroy && (a[b] = e.destroy()) }); d && (d.innerHTML = p.emptyHTML, ia(d), c && X(d)); W(a, function (b, e) { delete a[e] })
                                }; c.prototype.firstRender = function () {
                                    var a = this, b = a.options; if (!a.isReadyToRender || a.isReadyToRender()) {
                                        a.getContainer(); a.resetMargins(); a.setChartSize(); a.propFromSeries();
                                        a.getAxes(); (R(b.series) ? b.series : []).forEach(function (b) { a.initSeries(b) }); a.linkSeries(); a.setSeriesData(); N(a, "beforeRender"); u && (F.isRequired() ? a.pointer = new F(a, b) : a.pointer = new u(a, b)); a.render(); a.pointer.getChartPosition(); if (!a.renderer.imgCount && !a.hasLoaded) a.onload(); a.temporaryDisplay(!0)
                                    }
                                }; c.prototype.onload = function () {
                                    this.callbacks.concat([this.callback]).forEach(function (a) { a && "undefined" !== typeof this.index && a.apply(this, [this]) }, this); N(this, "load"); N(this, "render"); U(this.index) &&
                                        this.setReflow(this.options.chart.reflow); this.warnIfA11yModuleNotLoaded(); this.hasLoaded = !0
                                }; c.prototype.warnIfA11yModuleNotLoaded = function () {
                                    var a = this.options, b = this.title; a && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": b && b.element.textContent || "" }), a.accessibility && !1 === a.accessibility.enabled || K('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                                        !1, this))
                                }; c.prototype.addSeries = function (a, b, e) { var d = this, c; a && (b = O(b, !0), N(d, "addSeries", { options: a }, function () { c = d.initSeries(a); d.isDirtyLegend = !0; d.linkSeries(); c.enabledDataSorting && c.setData(a.data, !1); N(d, "afterAddSeries", { series: c }); b && d.redraw(e) })); return c }; c.prototype.addAxis = function (a, b, e, d) { return this.createAxis(b ? "xAxis" : "yAxis", { axis: a, redraw: e, animation: d }) }; c.prototype.addColorAxis = function (a, b, e) { return this.createAxis("colorAxis", { axis: a, redraw: b, animation: e }) }; c.prototype.createAxis =
                                    function (a, b) { a = new f(this, S(b.axis, { index: this[a].length, isX: "xAxis" === a })); O(b.redraw, !0) && this.redraw(b.animation); return a }; c.prototype.showLoading = function (a) {
                                        var b = this, e = b.options, d = e.loading, c = function () { g && L(g, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }, g = b.loadingDiv, h = b.loadingSpan; g || (b.loadingDiv = g = I("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container)); h || (b.loadingSpan = h = I("span", { className: "highcharts-loading-inner" },
                                            null, g), x(b, "redraw", c)); g.className = "highcharts-loading"; p.setElementHTML(h, O(a, e.lang.loading, "")); b.styledMode || (L(g, ba(d.style, { zIndex: 10 })), L(h, d.labelStyle), b.loadingShown || (L(g, { opacity: 0, display: "" }), z(g, { opacity: d.style.opacity || .5 }, { duration: d.showDuration || 0 }))); b.loadingShown = !0; c()
                                    }; c.prototype.hideLoading = function () {
                                        var a = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || z(b, { opacity: 0 }, {
                                            duration: a.loading.hideDuration || 100,
                                            complete: function () { L(b, { display: "none" }) }
                                        })); this.loadingShown = !1
                                    }; c.prototype.update = function (a, e, d, c) {
                                        var g = this, h = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, l = a.isResponsiveOptions, k = [], m, f; N(g, "update", { options: a }); l || g.setResponsive(!1, !0); a = M(a, g.options); g.userOptions = S(g.userOptions, a); var p = a.chart; if (p) {
                                            S(!0, g.options.chart, p); "className" in p && g.setClassName(p.className); "reflow" in p && g.setReflow(p.reflow); if ("inverted" in p || "polar" in p || "type" in
                                                p) { g.propFromSeries(); var t = !0 } "alignTicks" in p && (t = !0); "events" in p && q(this, p); W(p, function (a, b) { -1 !== g.propsRequireUpdateSeries.indexOf("chart." + b) && (m = !0); -1 !== g.propsRequireDirtyBox.indexOf(b) && (g.isDirtyBox = !0); -1 !== g.propsRequireReflow.indexOf(b) && (l ? g.isDirtyBox = !0 : f = !0) }); !g.styledMode && p.style && g.renderer.setStyle(g.options.chart.style || {})
                                        } !g.styledMode && a.colors && (this.options.colors = a.colors); a.time && (this.time === G && (this.time = new b(a.time)), S(!0, g.options.time, a.time)); W(a, function (b,
                                            e) { if (g[e] && "function" === typeof g[e].update) g[e].update(b, !1); else if ("function" === typeof g[h[e]]) g[h[e]](b); else "colors" !== e && -1 === g.collectionsWithUpdate.indexOf(e) && S(!0, g.options[e], a[e]); "chart" !== e && -1 !== g.propsRequireUpdateSeries.indexOf(e) && (m = !0) }); this.collectionsWithUpdate.forEach(function (b) {
                                                if (a[b]) {
                                                    var e = []; g[b].forEach(function (a, b) { a.options.isInternal || e.push(O(a.options.index, b)) }); aa(a[b]).forEach(function (a, c) {
                                                        var h = U(a.id), l; h && (l = g.get(a.id)); !l && g[b] && (l = g[b][e ? e[c] : c]) && h &&
                                                            U(l.options.id) && (l = void 0); l && l.coll === b && (l.update(a, !1), d && (l.touched = !0)); !l && d && g.collectionsWithInit[b] && (g.collectionsWithInit[b][0].apply(g, [a].concat(g.collectionsWithInit[b][1] || []).concat([!1])).touched = !0)
                                                    }); d && g[b].forEach(function (a) { a.touched || a.options.isInternal ? delete a.touched : k.push(a) })
                                                }
                                            }); k.forEach(function (a) { a.chart && a.remove && a.remove(!1) }); t && g.axes.forEach(function (a) { a.update({}, !1) }); m && g.getSeriesOrderByLinks().forEach(function (a) { a.chart && a.update({}, !1) }, this); t = p &&
                                                p.width; p = p && (T(p.height) ? da(p.height, t || g.chartWidth) : p.height); f || Z(t) && t !== g.chartWidth || Z(p) && p !== g.chartHeight ? g.setSize(t, p, c) : O(e, !0) && g.redraw(c); N(g, "afterUpdate", { options: a, redraw: e, animation: c })
                                    }; c.prototype.setSubtitle = function (a, b) { this.applyDescription("subtitle", a); this.layOutTitles(b) }; c.prototype.setCaption = function (a, b) { this.applyDescription("caption", a); this.layOutTitles(b) }; c.prototype.showResetZoom = function () {
                                        function a() { b.zoomOut() } var b = this, d = e.lang, c = b.options.chart.resetZoomButton,
                                            g = c.theme, h = "chart" === c.relativeTo || "spacingBox" === c.relativeTo ? null : "scrollablePlotBox"; N(this, "beforeShowResetZoom", null, function () { b.resetZoomButton = b.renderer.button(d.resetZoom, null, null, a, g).attr({ align: c.position.align, title: d.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c.position, !1, h) }); N(this, "afterShowResetZoom")
                                    }; c.prototype.zoomOut = function () { N(this, "selection", { resetSelection: !0 }, this.zoom) }; c.prototype.zoom = function (a) {
                                        var b = this, e = b.pointer, d = b.inverted ? e.mouseDownX :
                                            e.mouseDownY, c = !1, g; !a || a.resetSelection ? (b.axes.forEach(function (a) { g = a.zoom() }), e.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) { var h = a.axis, l = b.inverted ? h.left : h.top, k = b.inverted ? l + h.width : l + h.height, m = h.isXAxis, f = !1; if (!m && d >= l && d <= k || m || !U(d)) f = !0; e[m ? "zoomX" : "zoomY"] && f && (g = h.zoom(a.min, a.max), h.displayBtn && (c = !0)) }); var h = b.resetZoomButton; c && !h ? b.showResetZoom() : !c && Q(h) && (b.resetZoomButton = h.destroy()); g && b.redraw(O(b.options.chart.animation, a && a.animation, 100 > b.pointCount))
                                    };
                            c.prototype.pan = function (a, b) {
                                var e = this, d = e.hoverPoints; b = "object" === typeof b ? b : { enabled: b, type: "x" }; var c = e.options.chart; c && c.panning && (c.panning = b); var g = b.type, h; N(this, "pan", { originalEvent: a }, function () {
                                    d && d.forEach(function (a) { a.setState() }); var b = e.xAxis; "xy" === g ? b = b.concat(e.yAxis) : "y" === g && (b = e.yAxis); var c = {}; b.forEach(function (b) {
                                        if (b.options.panningEnabled && !b.options.isInternal) {
                                            var d = b.horiz, l = a[d ? "chartX" : "chartY"]; d = d ? "mouseDownX" : "mouseDownY"; var k = e[d], m = b.minPointOffset || 0, f = b.reversed &&
                                                !e.inverted || !b.reversed && e.inverted ? -1 : 1, q = b.getExtremes(), p = b.toValue(k - l, !0) + m * f, t = b.toValue(k + b.len - l, !0) - (m * f || b.isXAxis && b.pointRangePadding || 0), w = t < p; f = b.hasVerticalPanning(); k = w ? t : p; p = w ? p : t; var n = b.panningState; !f || b.isXAxis || n && !n.isDirty || b.series.forEach(function (a) {
                                                    var b = a.getProcessedData(!0); b = a.getExtremes(b.yData, !0); n || (n = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }); Z(b.dataMin) && Z(b.dataMax) && (n.startMin = Math.min(O(a.options.threshold, Infinity), b.dataMin, n.startMin), n.startMax =
                                                        Math.max(O(a.options.threshold, -Infinity), b.dataMax, n.startMax))
                                                }); f = Math.min(O(n && n.startMin, q.dataMin), m ? q.min : b.toValue(b.toPixels(q.min) - b.minPixelPadding)); t = Math.max(O(n && n.startMax, q.dataMax), m ? q.max : b.toValue(b.toPixels(q.max) + b.minPixelPadding)); b.panningState = n; b.isOrdinal || (m = f - k, 0 < m && (p += m, k = f), m = p - t, 0 < m && (p = t, k -= m), b.series.length && k !== q.min && p !== q.max && k >= f && p <= t && (b.setExtremes(k, p, !1, !1, { trigger: "pan" }), !e.resetZoomButton && k !== f && p !== t && g.match("y") && (e.showResetZoom(), b.displayBtn =
                                                    !1), h = !0), c[d] = l)
                                        }
                                    }); W(c, function (a, b) { e[b] = a }); h && e.redraw(!1); L(e.container, { cursor: "move" })
                                })
                            }; return c
                        }(); ba(c.prototype, {
                            callbacks: [], collectionsWithInit: { xAxis: [c.prototype.addAxis, [!0]], yAxis: [c.prototype.addAxis, [!1]], series: [c.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
                            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
                        }); ""; return c
                }); H(f, "Core/Legend/LegendSymbol.js", [f["Core/Utilities.js"]], function (c) {
                    var f = c.merge, v = c.pick, D; (function (c) {
                        c.drawLineMarker = function (c) {
                            var r = this.options, A = c.symbolWidth, u = c.symbolHeight, n = u / 2, k = this.chart.renderer, d = this.legendGroup; c = c.baseline - Math.round(.3 * c.fontMetrics.b); var b = {}, h = r.marker; this.chart.styledMode || (b = {
                                "stroke-width": r.lineWidth ||
                                    0
                            }, r.dashStyle && (b.dashstyle = r.dashStyle)); this.legendLine = k.path([["M", 0, c], ["L", A, c]]).addClass("highcharts-graph").attr(b).add(d); h && !1 !== h.enabled && A && (r = Math.min(v(h.radius, n), n), 0 === this.symbol.indexOf("url") && (h = f(h, { width: u, height: u }), r = 0), this.legendSymbol = A = k.symbol(this.symbol, A / 2 - r, c - r, 2 * r, 2 * r, h).addClass("highcharts-point").add(d), A.isMarker = !0)
                        }; c.drawRectangle = function (c, f) {
                            var r = c.symbolHeight, u = c.options.squareSymbol; f.legendSymbol = this.chart.renderer.rect(u ? (c.symbolWidth - r) / 2 : 0,
                                c.baseline - r + 1, u ? r : c.symbolWidth, r, v(c.options.symbolRadius, r / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(f.legendGroup)
                        }
                    })(D || (D = {})); return D
                }); H(f, "Core/Series/SeriesDefaults.js", [], function () {
                    return {
                        lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                            enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: {
                                normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: {
                                    fillColor: "#cccccc",
                                    lineColor: "#000000", lineWidth: 2
                                }
                            }
                        }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: !0, formatter: function () { var c = this.series.chart.numberFormatter; return "number" !== typeof this.y ? "" : c(this.y, -1) }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: {
                            normal: { animation: !0 }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } },
                            select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: .2 }
                        }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
                    }
                }); H(f, "Core/Series/Series.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/DefaultOptions.js"], f["Core/Foundation.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/Point.js"], f["Core/Series/SeriesDefaults.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F, A,
                    u, n) {
                    var k = c.animObject, d = c.setAnimation, b = f.defaultOptions, h = v.registerEventOptions, p = D.hasTouch, z = D.svg, E = D.win, y = A.seriesTypes, t = n.addEvent, q = n.arrayMax, l = n.arrayMin, g = n.clamp, w = n.cleanRecursively, a = n.correctFloat, B = n.defined, e = n.erase, G = n.error, m = n.extend, x = n.find, J = n.fireEvent, M = n.getNestedProperty, I = n.isArray, L = n.isNumber, U = n.isString, X = n.merge, H = n.objectEach, K = n.pick, ba = n.removeEvent, fa = n.splat, N = n.syncTimeout; c = function () {
                        function c() {
                            this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions =
                                this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0
                        } c.prototype.init = function (a, b) {
                            J(this, "init", { options: b }); var e = this, c = a.series; this.eventsToUnbind = []; e.chart = a; e.options = e.setOptions(b); b = e.options; e.linkedSeries = []; e.bindAxes(); m(e, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); h(this, b); var d = b.events; if (d && d.click || b.point && b.point.events && b.point.events.click ||
                                b.allowPointSelect) a.runTrackerClick = !0; e.getColor(); e.getSymbol(); e.parallelArrays.forEach(function (a) { e[a + "Data"] || (e[a + "Data"] = []) }); e.isCartesian && (a.hasCartesianSeries = !0); var g; c.length && (g = c[c.length - 1]); e._i = K(g && g._i, -1) + 1; e.opacity = e.options.opacity; a.orderSeries(this.insert(c)); b.dataSorting && b.dataSorting.enabled ? e.setDataSortingOptions() : e.points || e.data || e.setData(b.data, !1); J(this, "afterInit")
                        }; c.prototype.is = function (a) { return y[a] && this instanceof y[a] }; c.prototype.insert = function (a) {
                            var b =
                                this.options.index, e; if (L(b)) { for (e = a.length; e--;)if (b >= K(a[e].options.index, a[e]._i)) { a.splice(e + 1, 0, this); break } -1 === e && a.unshift(this); e += 1 } else a.push(this); return K(e, a.length - 1)
                        }; c.prototype.bindAxes = function () {
                            var a = this, b = a.options, e = a.chart, c; J(this, "bindAxes", null, function () {
                                (a.axisTypes || []).forEach(function (d) {
                                    var g = 0; e[d].forEach(function (e) {
                                        c = e.options; if (b[d] === g && !c.isInternal || "undefined" !== typeof b[d] && b[d] === c.id || "undefined" === typeof b[d] && 0 === c.index) a.insert(e.series), a[d] = e,
                                            e.isDirty = !0; c.isInternal || g++
                                    }); a[d] || a.optionalAxis === d || G(18, !0, e)
                                })
                            }); J(this, "afterBindAxes")
                        }; c.prototype.updateParallelArrays = function (a, b) { var e = a.series, c = arguments, d = L(b) ? function (c) { var d = "y" === c && e.toYData ? e.toYData(a) : a[c]; e[c + "Data"][b] = d } : function (a) { Array.prototype[b].apply(e[a + "Data"], Array.prototype.slice.call(c, 2)) }; e.parallelArrays.forEach(d) }; c.prototype.hasData = function () {
                            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible &&
                                this.yData && 0 < this.yData.length
                        }; c.prototype.autoIncrement = function (a) { var b = this.options, e = b.pointIntervalUnit, c = b.relativeXValue, d = this.chart.time, g = this.xIncrement, h; g = K(g, b.pointStart, 0); this.pointInterval = h = K(this.pointInterval, b.pointInterval, 1); c && L(a) && (h *= a); e && (b = new d.Date(g), "day" === e ? d.set("Date", b, d.get("Date", b) + h) : "month" === e ? d.set("Month", b, d.get("Month", b) + h) : "year" === e && d.set("FullYear", b, d.get("FullYear", b) + h), h = b.getTime() - g); if (c && L(a)) return g + h; this.xIncrement = g + h; return g };
                        c.prototype.setDataSortingOptions = function () { var a = this.options; m(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }); B(a.pointRange) || (a.pointRange = 1) }; c.prototype.setOptions = function (a) {
                            var e = this.chart, c = e.options, d = c.plotOptions, g = e.userOptions || {}; a = X(a); e = e.styledMode; var h = { plotOptions: d, userOptions: a }; J(this, "setOptions", h); var l = h.plotOptions[this.type], k = g.plotOptions || {}; this.userOptions = h.userOptions; g = X(l, d.series, g.plotOptions && g.plotOptions[this.type], a); this.tooltipOptions =
                                X(b.tooltip, b.plotOptions.series && b.plotOptions.series.tooltip, b.plotOptions[this.type].tooltip, c.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip); this.stickyTracking = K(a.stickyTracking, k[this.type] && k[this.type].stickyTracking, k.series && k.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : g.stickyTracking); null === l.marker && delete g.marker; this.zoneAxis = g.zoneAxis; d = this.zones = (g.zones || []).slice(); !g.negativeColor && !g.negativeFillColor || g.zones ||
                                    (c = { value: g[this.zoneAxis + "Threshold"] || g.threshold || 0, className: "highcharts-negative" }, e || (c.color = g.negativeColor, c.fillColor = g.negativeFillColor), d.push(c)); d.length && B(d[d.length - 1].value) && d.push(e ? {} : { color: this.color, fillColor: this.fillColor }); J(this, "afterSetOptions", { options: g }); return g
                        }; c.prototype.getName = function () { return K(this.options.name, "Series " + (this.index + 1)) }; c.prototype.getCyclic = function (a, b, e) {
                            var c = this.chart, d = this.userOptions, g = a + "Index", h = a + "Counter", l = e ? e.length : K(c.options.chart[a +
                                "Count"], c[a + "Count"]); if (!b) { var k = K(d[g], d["_" + g]); B(k) || (c.series.length || (c[h] = 0), d["_" + g] = k = c[h] % l, c[h] += 1); e && (b = e[k]) } "undefined" !== typeof k && (this[g] = k); this[a] = b
                        }; c.prototype.getColor = function () { this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || b.plotOptions[this.type].color, this.chart.options.colors) }; c.prototype.getPointsCollection = function () { return (this.hasGroupedData ? this.points : this.data) || [] }; c.prototype.getSymbol =
                            function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }; c.prototype.findPointIndex = function (a, b) {
                                var e = a.id, c = a.x, d = this.points, g = this.options.dataSorting, h, l; if (e) g = this.chart.get(e), g instanceof C && (h = g); else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) if (h = function (b) { return !b.touched && b.index === a.index }, g && g.matchByName ? h = function (b) { return !b.touched && b.name === a.name } : this.options.relativeXValue && (h = function (b) {
                                    return !b.touched &&
                                        b.options.x === a.x
                                }), h = x(d, h), !h) return; if (h) { var k = h && h.index; "undefined" !== typeof k && (l = !0) } "undefined" === typeof k && L(c) && (k = this.xData.indexOf(c, b)); -1 !== k && "undefined" !== typeof k && this.cropped && (k = k >= this.cropStart ? k - this.cropStart : k); !l && L(k) && d[k] && d[k].touched && (k = void 0); return k
                            }; c.prototype.updateData = function (a, b) {
                                var e = this.options, c = e.dataSorting, d = this.points, g = [], h = this.requireSorting, l = a.length === d.length, k, m, f, p = !0; this.xIncrement = null; a.forEach(function (a, b) {
                                    var m = B(a) && this.pointClass.prototype.optionsToObject.call({ series: this },
                                        a) || {}, q = m.x; if (m.id || L(q)) { if (m = this.findPointIndex(m, f), -1 === m || "undefined" === typeof m ? g.push(a) : d[m] && a !== e.data[m] ? (d[m].update(a, !1, null, !1), d[m].touched = !0, h && (f = m + 1)) : d[m] && (d[m].touched = !0), !l || b !== m || c && c.enabled || this.hasDerivedData) k = !0 } else g.push(a)
                                }, this); if (k) for (a = d.length; a--;)(m = d[a]) && !m.touched && m.remove && m.remove(!1, b); else !l || c && c.enabled ? p = !1 : (a.forEach(function (a, b) { a !== d[b].y && d[b].update && d[b].update(a, !1, null, !1) }), g.length = 0); d.forEach(function (a) { a && (a.touched = !1) }); if (!p) return !1;
                                g.forEach(function (a) { this.addPoint(a, !1, null, null, !1) }, this); null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = q(this.xData), this.autoIncrement()); return !0
                            }; c.prototype.setData = function (a, b, e, c) {
                                var d = this, g = d.points, h = g && g.length || 0, l = d.options, k = d.chart, m = l.dataSorting, f = d.xAxis, q = l.turboThreshold, p = this.xData, t = this.yData, n = d.pointArrayMap; n = n && n.length; var w = l.keys, x, z = 0, B = 1, y = null; if (!k.options.chart.allowMutatingData) {
                                    l.data && delete d.options.data; d.userOptions.data &&
                                        delete d.userOptions.data; var E = X(!0, a)
                                } a = E || a || []; E = a.length; b = K(b, !0); m && m.enabled && (a = this.sortData(a)); k.options.chart.allowMutatingData && !1 !== c && E && h && !d.cropped && !d.hasGroupedData && d.visible && !d.isSeriesBoosting && (x = this.updateData(a, e)); if (!x) {
                                    d.xIncrement = null; d.colorCounter = 0; this.parallelArrays.forEach(function (a) { d[a + "Data"].length = 0 }); if (q && E > q) if (y = d.getFirstValidPoint(a), L(y)) for (e = 0; e < E; e++)p[e] = this.autoIncrement(), t[e] = a[e]; else if (I(y)) if (n) if (y.length === n) for (e = 0; e < E; e++)p[e] = this.autoIncrement(),
                                        t[e] = a[e]; else for (e = 0; e < E; e++)c = a[e], p[e] = c[0], t[e] = c.slice(1, n + 1); else if (w && (z = w.indexOf("x"), B = w.indexOf("y"), z = 0 <= z ? z : 0, B = 0 <= B ? B : 1), 1 === y.length && (B = 0), z === B) for (e = 0; e < E; e++)p[e] = this.autoIncrement(), t[e] = a[e][B]; else for (e = 0; e < E; e++)c = a[e], p[e] = c[z], t[e] = c[B]; else G(12, !1, k); else for (e = 0; e < E; e++)"undefined" !== typeof a[e] && (c = { series: d }, d.pointClass.prototype.applyOptions.apply(c, [a[e]]), d.updateParallelArrays(c, e)); t && U(t[0]) && G(14, !0, k); d.data = []; d.options.data = d.userOptions.data = a; for (e = h; e--;)g[e] &&
                                            g[e].destroy && g[e].destroy(); f && (f.minRange = f.userMinRange); d.isDirty = k.isDirtyBox = !0; d.isDirtyData = !!g; e = !1
                                } "point" === l.legendType && (this.processData(), this.generatePoints()); b && k.redraw(e)
                            }; c.prototype.sortData = function (a) {
                                var b = this, e = b.options.dataSorting.sortKey || "y", d = function (a, b) { return B(b) && a.pointClass.prototype.optionsToObject.call({ series: a }, b) || {} }; a.forEach(function (e, c) { a[c] = d(b, e); a[c].index = c }, this); a.concat().sort(function (a, b) { a = M(e, a); b = M(e, b); return b < a ? -1 : b > a ? 1 : 0 }).forEach(function (a,
                                    b) { a.x = b }, this); b.linkedSeries && b.linkedSeries.forEach(function (b) { var e = b.options, c = e.data; e.dataSorting && e.dataSorting.enabled || !c || (c.forEach(function (e, g) { c[g] = d(b, e); a[g] && (c[g].x = a[g].x, c[g].index = g) }), b.setData(c, !1)) }); return a
                            }; c.prototype.getProcessedData = function (a) {
                                var b = this.xAxis, e = this.options, d = e.cropThreshold, c = a || this.getExtremesFromAll || e.getExtremesFromAll, g = this.isCartesian; a = b && b.val2lin; e = !(!b || !b.logarithmic); var h = 0, l = this.xData, k = this.yData, m = this.requireSorting; var f = !1;
                                var q = l.length; if (b) { f = b.getExtremes(); var p = f.min; var t = f.max; f = !(!b.categories || b.names.length) } if (g && this.sorted && !c && (!d || q > d || this.forceCrop)) if (l[q - 1] < p || l[0] > t) l = [], k = []; else if (this.yData && (l[0] < p || l[q - 1] > t)) { var n = this.cropData(this.xData, this.yData, p, t); l = n.xData; k = n.yData; h = n.start; n = !0 } for (d = l.length || 1; --d;)if (b = e ? a(l[d]) - a(l[d - 1]) : l[d] - l[d - 1], 0 < b && ("undefined" === typeof w || b < w)) var w = b; else 0 > b && m && !f && (G(15, !1, this.chart), m = !1); return { xData: l, yData: k, cropped: n, cropStart: h, closestPointRange: w }
                            };
                        c.prototype.processData = function (a) { var b = this.xAxis; if (this.isCartesian && !this.isDirty && !b.isDirty && !this.yAxis.isDirty && !a) return !1; a = this.getProcessedData(); this.cropped = a.cropped; this.cropStart = a.cropStart; this.processedXData = a.xData; this.processedYData = a.yData; this.closestPointRange = this.basePointRange = a.closestPointRange; J(this, "afterProcessData") }; c.prototype.cropData = function (a, b, e, d, c) {
                            var g = a.length, h, l = 0, k = g; c = K(c, this.cropShoulder); for (h = 0; h < g; h++)if (a[h] >= e) { l = Math.max(0, h - c); break } for (e =
                                h; e < g; e++)if (a[e] > d) { k = e + c; break } return { xData: a.slice(l, k), yData: b.slice(l, k), start: l, end: k }
                        }; c.prototype.generatePoints = function () {
                            var a = this.options, b = this.processedData || a.data, e = this.processedXData, d = this.processedYData, c = this.pointClass, g = e.length, h = this.cropStart || 0, l = this.hasGroupedData, k = a.keys, f = []; a = a.dataGrouping && a.dataGrouping.groupAll ? h : 0; var q, p, t = this.data; if (!t && !l) { var n = []; n.length = b.length; t = this.data = n } k && l && (this.options.keys = !1); for (p = 0; p < g; p++) {
                                n = h + p; if (l) {
                                    var w = (new c).init(this,
                                        [e[p]].concat(fa(d[p]))); w.dataGroup = this.groupMap[a + p]; w.dataGroup.options && (w.options = w.dataGroup.options, m(w, w.dataGroup.options), delete w.dataLabels)
                                } else (w = t[n]) || "undefined" === typeof b[n] || (t[n] = w = (new c).init(this, b[n], e[p])); w && (w.index = l ? a + p : n, f[p] = w)
                            } this.options.keys = k; if (t && (g !== (q = t.length) || l)) for (p = 0; p < q; p++)p !== h || l || (p += g), t[p] && (t[p].destroyElements(), t[p].plotX = void 0); this.data = t; this.points = f; J(this, "afterGeneratePoints")
                        }; c.prototype.getXExtremes = function (a) {
                            return {
                                min: l(a),
                                max: q(a)
                            }
                        }; c.prototype.getExtremes = function (a, b) {
                            var e = this.xAxis, d = this.yAxis, c = this.processedXData || this.xData, g = [], h = this.requireSorting ? this.cropShoulder : 0; d = d ? d.positiveValuesOnly : !1; var k, m = 0, f = 0, p = 0; a = a || this.stackedYData || this.processedYData || []; var t = a.length; if (e) { var n = e.getExtremes(); m = n.min; f = n.max } for (k = 0; k < t; k++) {
                                var w = c[k]; n = a[k]; var x = (L(n) || I(n)) && (n.length || 0 < n || !d); w = b || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !e || (c[k + h] || w) >= m && (c[k - h] || w) <= f; if (x &&
                                    w) if (x = n.length) for (; x--;)L(n[x]) && (g[p++] = n[x]); else g[p++] = n
                            } a = { activeYData: g, dataMin: l(g), dataMax: q(g) }; J(this, "afterGetExtremes", { dataExtremes: a }); return a
                        }; c.prototype.applyExtremes = function () { var a = this.getExtremes(); this.dataMin = a.dataMin; this.dataMax = a.dataMax; return a }; c.prototype.getFirstValidPoint = function (a) { for (var b = a.length, e = 0, d = null; null === d && e < b;)d = a[e], e++; return d }; c.prototype.translate = function () {
                            this.processedXData || this.processData(); this.generatePoints(); var b = this.options,
                                e = b.stacking, d = this.xAxis, c = d.categories, h = this.enabledDataSorting, l = this.yAxis, k = this.points, m = k.length, f = this.pointPlacementToXValue(), q = !!f, p = b.threshold, t = b.startFromThreshold ? p : 0, n = this.zoneAxis || "y", w, x, z = Number.MAX_VALUE; for (w = 0; w < m; w++) {
                                    var y = k[w], E = y.x, u = void 0, r = void 0, G = y.y, A = y.low, M = e && l.stacking && l.stacking.stacks[(this.negStacks && G < (t ? 0 : p) ? "-" : "") + this.stackKey]; if (l.positiveValuesOnly && !l.validatePositiveValue(G) || d.positiveValuesOnly && !d.validatePositiveValue(E)) y.isNull = !0; y.plotX =
                                        x = a(g(d.translate(E, 0, 0, 0, 1, f, "flags" === this.type), -1E5, 1E5)); if (e && this.visible && M && M[E]) { var v = this.getStackIndicator(v, E, this.index); y.isNull || (u = M[E], r = u.points[v.key]) } I(r) && (A = r[0], G = r[1], A === t && v.key === M[E].base && (A = K(L(p) && p, l.min)), l.positiveValuesOnly && 0 >= A && (A = null), y.total = y.stackTotal = u.total, y.percentage = u.total && y.y / u.total * 100, y.stackY = G, this.irregularWidths || u.setOffset(this.pointXOffset || 0, this.barW || 0)); y.yBottom = B(A) ? g(l.translate(A, 0, 1, 0, 1), -1E5, 1E5) : null; this.dataModify && (G =
                                            this.dataModify.modifyValue(G, w)); y.plotY = void 0; L(G) && (u = l.translate(G, !1, !0, !1, !0), "undefined" !== typeof u && (y.plotY = g(u, -1E5, 1E5))); y.isInside = this.isPointInside(y); y.clientX = q ? a(d.translate(E, 0, 0, 0, 1, f)) : x; y.negative = y[n] < (b[n + "Threshold"] || p || 0); y.category = K(c && c[y.x], y.x); if (!y.isNull && !1 !== y.visible) { "undefined" !== typeof F && (z = Math.min(z, Math.abs(x - F))); var F = x } y.zone = this.zones.length ? y.getZone() : void 0; !y.graphic && this.group && h && (y.isNew = !0)
                                } this.closestPointRangePx = z; J(this, "afterTranslate")
                        };
                        c.prototype.getValidPoints = function (a, b, e) { var d = this.chart; return (a || this.points || []).filter(function (a) { return b && !d.isInsidePlot(a.plotX, a.plotY, { inverted: d.inverted }) ? !1 : !1 !== a.visible && (e || !a.isNull) }) }; c.prototype.getClipBox = function () { var a = this.chart, b = this.xAxis, e = this.yAxis, d = X(a.clipBox); b && b.len !== a.plotSizeX && (d.width = b.len); e && e.len !== a.plotSizeY && (d.height = e.len); return d }; c.prototype.getSharedClipKey = function () {
                            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis ||
                                0)
                        }; c.prototype.setClip = function () { var a = this.chart, b = this.group, e = this.markerGroup, d = a.sharedClips; a = a.renderer; var c = this.getClipBox(), g = this.getSharedClipKey(), h = d[g]; h ? h.animate(c) : d[g] = h = a.clipRect(c); b && b.clip(!1 === this.options.clip ? void 0 : h); e && e.clip() }; c.prototype.animate = function (a) {
                            var b = this.chart, e = this.group, d = this.markerGroup, c = b.inverted, g = k(this.options.animation), h = [this.getSharedClipKey(), g.duration, g.easing, g.defer].join(), l = b.sharedClips[h], m = b.sharedClips[h + "m"]; if (a && e) g = this.getClipBox(),
                                l ? l.attr("height", g.height) : (g.width = 0, c && (g.x = b.plotHeight), l = b.renderer.clipRect(g), b.sharedClips[h] = l, m = b.renderer.clipRect({ x: c ? (b.plotSizeX || 0) + 99 : -99, y: c ? -b.plotLeft : -b.plotTop, width: 99, height: c ? b.chartWidth : b.chartHeight }), b.sharedClips[h + "m"] = m), e.clip(l), d && d.clip(m); else if (l && !l.hasClass("highcharts-animating")) {
                                    b = this.getClipBox(); var f = g.step; d && d.element.childNodes.length && (g.step = function (a, b) { f && f.apply(b, arguments); m && m.element && m.attr(b.prop, "width" === b.prop ? a + 99 : a) }); l.addClass("highcharts-animating").animate(b,
                                        g)
                                }
                        }; c.prototype.afterAnimate = function () { var a = this; this.setClip(); H(this.chart.sharedClips, function (b, e, d) { b && !a.chart.container.querySelector('[clip-path="url(#'.concat(b.id, ')"]')) && (b.destroy(), delete d[e]) }); this.finishedAnimating = !0; J(this, "afterAnimate") }; c.prototype.drawPoints = function () {
                            var a = this.points, b = this.chart, e = this.options.marker, d = this[this.specialGroup] || this.markerGroup, c = this.xAxis, g = K(e.enabled, !c || c.isRadial ? !0 : null, this.closestPointRangePx >= e.enabledThreshold * e.radius), h,
                                l; if (!1 !== e.enabled || this._hasPointMarkers) for (h = 0; h < a.length; h++) {
                                    var k = a[h]; var m = (l = k.graphic) ? "animate" : "attr"; var f = k.marker || {}; var q = !!k.marker; if ((g && "undefined" === typeof f.enabled || f.enabled) && !k.isNull && !1 !== k.visible) {
                                        var p = K(f.symbol, this.symbol, "rect"); var t = this.markerAttribs(k, k.selected && "select"); this.enabledDataSorting && (k.startXPos = c.reversed ? -(t.width || 0) : c.width); var n = !1 !== k.isInside; l ? l[n ? "show" : "hide"](n).animate(t) : n && (0 < (t.width || 0) || k.hasImage) && (k.graphic = l = b.renderer.symbol(p,
                                            t.x, t.y, t.width, t.height, q ? f : e).add(d), this.enabledDataSorting && b.hasRendered && (l.attr({ x: k.startXPos }), m = "animate")); l && "animate" === m && l[n ? "show" : "hide"](n).animate(t); if (l && !b.styledMode) l[m](this.pointAttribs(k, k.selected && "select")); l && l.addClass(k.getClassName(), !0)
                                    } else l && (k.graphic = l.destroy())
                                }
                        }; c.prototype.markerAttribs = function (a, b) {
                            var e = this.options, d = e.marker, c = a.marker || {}, g = c.symbol || d.symbol, h = K(c.radius, d && d.radius); b && (d = d.states[b], b = c.states && c.states[b], h = K(b && b.radius, d && d.radius,
                                h && h + (d && d.radiusPlus || 0))); a.hasImage = g && 0 === g.indexOf("url"); a.hasImage && (h = 0); a = L(h) ? { x: e.crisp ? Math.floor(a.plotX - h) : a.plotX - h, y: a.plotY - h } : {}; h && (a.width = a.height = 2 * h); return a
                        }; c.prototype.pointAttribs = function (a, b) {
                            var e = this.options.marker, d = a && a.options, c = d && d.marker || {}, g = d && d.color, h = a && a.color, l = a && a.zone && a.zone.color, k = this.color; a = K(c.lineWidth, e.lineWidth); d = 1; k = g || l || h || k; g = c.fillColor || e.fillColor || k; h = c.lineColor || e.lineColor || k; b = b || "normal"; e = e.states[b] || {}; b = c.states && c.states[b] ||
                                {}; a = K(b.lineWidth, e.lineWidth, a + K(b.lineWidthPlus, e.lineWidthPlus, 0)); g = b.fillColor || e.fillColor || g; h = b.lineColor || e.lineColor || h; d = K(b.opacity, e.opacity, d); return { stroke: h, "stroke-width": a, fill: g, opacity: d }
                        }; c.prototype.destroy = function (a) {
                            var b = this, d = b.chart, c = /AppleWebKit\/533/.test(E.navigator.userAgent), g = b.data || [], h, l, k, m; J(b, "destroy", { keepEventsForUpdate: a }); this.removeEvents(a); (b.axisTypes || []).forEach(function (a) { (m = b[a]) && m.series && (e(m.series, b), m.isDirty = m.forceRedraw = !0) }); b.legendItem &&
                                b.chart.legend.destroyItem(b); for (l = g.length; l--;)(k = g[l]) && k.destroy && k.destroy(); b.clips && b.clips.forEach(function (a) { return a.destroy() }); n.clearTimeout(b.animationTimeout); H(b, function (a, b) { a instanceof u && !a.survive && (h = c && "group" === b ? "hide" : "destroy", a[h]()) }); d.hoverSeries === b && (d.hoverSeries = void 0); e(d.series, b); d.orderSeries(); H(b, function (e, d) { a && "hcEvents" === d || delete b[d] })
                        }; c.prototype.applyZones = function () {
                            var a = this, b = this.chart, e = b.renderer, d = this.zones, c = this.clips || [], h = this.graph,
                                l = this.area, k = Math.max(b.chartWidth, b.chartHeight), m = this[(this.zoneAxis || "y") + "Axis"], f = b.inverted, q, p, t, n, w, x, z, B, y = !1; if (d.length && (h || l) && m && "undefined" !== typeof m.min) {
                                    var E = m.reversed; var u = m.horiz; h && !this.showLine && h.hide(); l && l.hide(); var r = m.getExtremes(); d.forEach(function (d, J) {
                                        q = E ? u ? b.plotWidth : 0 : u ? 0 : m.toPixels(r.min) || 0; q = g(K(p, q), 0, k); p = g(Math.round(m.toPixels(K(d.value, r.max), !0) || 0), 0, k); y && (q = p = m.toPixels(r.max)); n = Math.abs(q - p); w = Math.min(q, p); x = Math.max(q, p); m.isXAxis ? (t = {
                                            x: f ? x :
                                                w, y: 0, width: n, height: k
                                        }, u || (t.x = b.plotHeight - t.x)) : (t = { x: 0, y: f ? x : w, width: k, height: n }, u && (t.y = b.plotWidth - t.y)); f && e.isVML && (t = m.isXAxis ? { x: 0, y: E ? w : x, height: t.width, width: b.chartWidth } : { x: t.y - b.plotLeft - b.spacingBox.x, y: 0, width: t.height, height: b.chartHeight }); c[J] ? c[J].animate(t) : c[J] = e.clipRect(t); z = a["zone-area-" + J]; B = a["zone-graph-" + J]; h && B && B.clip(c[J]); l && z && z.clip(c[J]); y = d.value > r.max; a.resetZones && 0 === p && (p = void 0)
                                    }); this.clips = c
                                } else a.visible && (h && h.show(), l && l.show())
                        }; c.prototype.invertGroups =
                            function (a) { function b() { ["group", "markerGroup"].forEach(function (b) { e[b] && (d.renderer.isVML && e[b].attr({ width: e.yAxis.len, height: e.xAxis.len }), e[b].width = e.yAxis.len, e[b].height = e.xAxis.len, e[b].invert(e.isRadialSeries ? !1 : a)) }) } var e = this, d = e.chart; e.xAxis && (e.eventsToUnbind.push(t(d, "resize", b)), b(), e.invertGroups = b) }; c.prototype.plotGroup = function (a, b, e, d, c) {
                                var g = this[a], h = !g; e = { visibility: e, zIndex: d || .1 }; "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (e.opacity =
                                    this.opacity); h && (this[a] = g = this.chart.renderer.g().add(c)); g.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (B(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0); g.attr(e)[h ? "attr" : "animate"](this.getPlotBox()); return g
                            }; c.prototype.getPlotBox = function () {
                                var a = this.chart, b = this.xAxis, e = this.yAxis; a.inverted && (b = e, e = this.xAxis); return {
                                    translateX: b ? b.left :
                                        a.plotLeft, translateY: e ? e.top : a.plotTop, scaleX: 1, scaleY: 1
                                }
                            }; c.prototype.removeEvents = function (a) { a || ba(this); this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) { a() }), this.eventsToUnbind.length = 0) }; c.prototype.render = function () {
                                var a = this, b = a.chart, e = a.options, d = k(e.animation), c = a.visible ? "inherit" : "hidden", g = e.zIndex, h = a.hasRendered, l = b.seriesGroup, m = b.inverted; b = !a.finishedAnimating && b.renderer.isSVG ? d.duration : 0; J(this, "render"); var f = a.plotGroup("group", "series", c, g, l); a.markerGroup =
                                    a.plotGroup("markerGroup", "markers", c, g, l); !1 !== e.clip && a.setClip(); a.animate && b && a.animate(!0); f.inverted = K(a.invertible, a.isCartesian) ? m : !1; a.drawGraph && (a.drawGraph(), a.applyZones()); a.visible && a.drawPoints(); a.drawDataLabels && a.drawDataLabels(); a.redrawPoints && a.redrawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.invertGroups(m); a.animate && b && a.animate(); h || (b && d.defer && (b += d.defer), a.animationTimeout = N(function () { a.afterAnimate() }, b || 0)); a.isDirty = !1; a.hasRendered =
                                        !0; J(a, "afterRender")
                            }; c.prototype.redraw = function () { var a = this.chart, b = this.isDirty || this.isDirtyData, e = this.group, d = this.xAxis, c = this.yAxis; e && (a.inverted && e.attr({ width: a.plotWidth, height: a.plotHeight }), e.animate({ translateX: K(d && d.left, a.plotLeft), translateY: K(c && c.top, a.plotTop) })); this.translate(); this.render(); b && delete this.kdTree }; c.prototype.searchPoint = function (a, b) {
                                var e = this.xAxis, d = this.yAxis, c = this.chart.inverted; return this.searchKDTree({
                                    clientX: c ? e.len - a.chartY + e.pos : a.chartX - e.pos,
                                    plotY: c ? d.len - a.chartX + d.pos : a.chartY - d.pos
                                }, b, a)
                            }; c.prototype.buildKDTree = function (a) {
                                function b(a, d, c) { var g = a && a.length; if (g) { var h = e.kdAxisArray[d % c]; a.sort(function (a, b) { return a[h] - b[h] }); g = Math.floor(g / 2); return { point: a[g], left: b(a.slice(0, g), d + 1, c), right: b(a.slice(g + 1), d + 1, c) } } } this.buildingKdTree = !0; var e = this, d = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete e.kdTree; N(function () { e.kdTree = b(e.getValidPoints(null, !e.directTouch), d, d); e.buildingKdTree = !1 }, e.options.kdNow || a && "touchstart" ===
                                    a.type ? 0 : 1)
                            }; c.prototype.searchKDTree = function (a, b, e) {
                                function d(a, b, e, k) { var m = b.point, f = c.kdAxisArray[e % k], q = m, p = B(a[g]) && B(m[g]) ? Math.pow(a[g] - m[g], 2) : null; var t = B(a[h]) && B(m[h]) ? Math.pow(a[h] - m[h], 2) : null; t = (p || 0) + (t || 0); m.dist = B(t) ? Math.sqrt(t) : Number.MAX_VALUE; m.distX = B(p) ? Math.sqrt(p) : Number.MAX_VALUE; f = a[f] - m[f]; t = 0 > f ? "left" : "right"; p = 0 > f ? "right" : "left"; b[t] && (t = d(a, b[t], e + 1, k), q = t[l] < q[l] ? t : m); b[p] && Math.sqrt(f * f) < q[l] && (a = d(a, b[p], e + 1, k), q = a[l] < q[l] ? a : q); return q } var c = this, g = this.kdAxisArray[0],
                                    h = this.kdAxisArray[1], l = b ? "distX" : "dist"; b = -1 < c.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(e); if (this.kdTree) return d(a, this.kdTree, b, b)
                            }; c.prototype.pointPlacementToXValue = function () { var a = this.options, b = a.pointRange, e = this.xAxis; a = a.pointPlacement; "between" === a && (a = e.reversed ? -.5 : .5); return L(a) ? a * (b || e.pointRange) : 0 }; c.prototype.isPointInside = function (a) {
                                var b = this.chart, e = this.xAxis, d = this.yAxis; return "undefined" !== typeof a.plotY && "undefined" !==
                                    typeof a.plotX && 0 <= a.plotY && a.plotY <= (d ? d.len : b.plotHeight) && 0 <= a.plotX && a.plotX <= (e ? e.len : b.plotWidth)
                            }; c.prototype.drawTracker = function () {
                                var a = this, b = a.options, e = b.trackByArea, d = [].concat(e ? a.areaPath : a.graphPath), c = a.chart, g = c.pointer, h = c.renderer, l = c.options.tooltip.snap, k = a.tracker, m = function (b) { if (c.hoverSeries !== a) a.onMouseOver() }, f = "rgba(192,192,192," + (z ? .0001 : .002) + ")"; k ? k.attr({ d: d }) : a.graph && (a.tracker = h.path(d).attr({ visibility: a.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(e ? "highcharts-tracker-area" :
                                    "highcharts-tracker-line").add(a.group), c.styledMode || a.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: f, fill: e ? f : "none", "stroke-width": a.graph.strokeWidth() + (e ? 0 : 2 * l) }), [a.tracker, a.markerGroup, a.dataLabelsGroup].forEach(function (a) { if (a && (a.addClass("highcharts-tracker").on("mouseover", m).on("mouseout", function (a) { g.onTrackerMouseOut(a) }), b.cursor && !c.styledMode && a.css({ cursor: b.cursor }), p)) a.on("touchstart", m) })); J(this, "afterDrawTracker")
                            }; c.prototype.addPoint = function (a,
                                b, e, d, c) {
                                var g = this.options, h = this.data, l = this.chart, k = this.xAxis; k = k && k.hasNames && k.names; var m = g.data, f = this.xData, q; b = K(b, !0); var p = { series: this }; this.pointClass.prototype.applyOptions.apply(p, [a]); var t = p.x; var n = f.length; if (this.requireSorting && t < f[n - 1]) for (q = !0; n && f[n - 1] > t;)n--; this.updateParallelArrays(p, "splice", n, 0, 0); this.updateParallelArrays(p, n); k && p.name && (k[t] = p.name); m.splice(n, 0, a); if (q || this.processedData) this.data.splice(n, 0, null), this.processData(); "point" === g.legendType && this.generatePoints();
                                e && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), this.updateParallelArrays(p, "shift"), m.shift())); !1 !== c && J(this, "addPoint", { point: p }); this.isDirtyData = this.isDirty = !0; b && l.redraw(d)
                            }; c.prototype.removePoint = function (a, b, e) {
                                var c = this, g = c.data, h = g[a], l = c.points, k = c.chart, m = function () { l && l.length === g.length && l.splice(a, 1); g.splice(a, 1); c.options.data.splice(a, 1); c.updateParallelArrays(h || { series: c }, "splice", a, 1); h && h.destroy(); c.isDirty = !0; c.isDirtyData = !0; b && k.redraw() }; d(e, k); b = K(b, !0); h ? h.firePointEvent("remove",
                                    null, m) : m()
                            }; c.prototype.remove = function (a, b, e, d) { function c() { g.destroy(d); h.isDirtyLegend = h.isDirtyBox = !0; h.linkSeries(); K(a, !0) && h.redraw(b) } var g = this, h = g.chart; !1 !== e ? J(g, "remove", null, c) : c() }; c.prototype.update = function (a, b) {
                                a = w(a, this.userOptions); J(this, "update", { options: a }); var e = this, d = e.chart, c = e.userOptions, g = e.initialType || e.type, h = d.options.plotOptions, l = y[g].prototype, k = e.finishedAnimating && { animation: !1 }, f = {}, q, p = ["eventOptions", "navigatorSeries", "baseSeries"], t = a.type || c.type || d.options.chart.type,
                                    n = !(this.hasDerivedData || t && t !== this.type || "undefined" !== typeof a.pointStart || "undefined" !== typeof a.pointInterval || "undefined" !== typeof a.relativeXValue || a.joinBy || a.mapData || e.hasOptionChanged("dataGrouping") || e.hasOptionChanged("pointStart") || e.hasOptionChanged("pointInterval") || e.hasOptionChanged("pointIntervalUnit") || e.hasOptionChanged("keys")); t = t || g; n && (p.push("data", "isDirtyData", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels",
                                        "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== a.visible && p.push("area", "graph"), e.parallelArrays.forEach(function (a) { p.push(a + "Data") }), a.data && (a.dataSorting && m(e.options.dataSorting, a.dataSorting), this.setData(a.data, !1))); a = X(c, k, { index: "undefined" === typeof c.index ? e.index : c.index, pointStart: K(h && h.series && h.series.pointStart, c.pointStart, e.xData[0]) }, !n && { data: e.options.data }, a); n && a.data && (a.data = e.options.data); p = ["group", "markerGroup", "dataLabelsGroup",
                                            "transformGroup"].concat(p); p.forEach(function (a) { p[a] = e[a]; delete e[a] }); h = !1; if (y[t]) { if (h = t !== e.type, e.remove(!1, !1, !1, !0), h) if (Object.setPrototypeOf) Object.setPrototypeOf(e, y[t].prototype); else { k = Object.hasOwnProperty.call(e, "hcEvents") && e.hcEvents; for (q in l) e[q] = void 0; m(e, y[t].prototype); k ? e.hcEvents = k : delete e.hcEvents } } else G(17, !0, d, { missingModuleFor: t }); p.forEach(function (a) { e[a] = p[a] }); e.init(d, a); if (n && this.points) {
                                                var x = e.options; !1 === x.visible ? (f.graphic = 1, f.dataLabel = 1) : e._hasPointLabels ||
                                                    (a = x.marker, l = x.dataLabels, !a || !1 !== a.enabled && (c.marker && c.marker.symbol) === a.symbol || (f.graphic = 1), l && !1 === l.enabled && (f.dataLabel = 1)); this.points.forEach(function (a) { a && a.series && (a.resolveColor(), Object.keys(f).length && a.destroyElements(f), !1 === x.showInLegend && a.legendItem && d.legend.destroyItem(a)) }, this)
                                            } e.initialType = g; d.linkSeries(); h && e.linkedSeries.length && (e.isDirtyData = !0); J(this, "afterUpdate"); K(b, !0) && d.redraw(n ? void 0 : !1)
                            }; c.prototype.setName = function (a) {
                                this.name = this.options.name =
                                    this.userOptions.name = a; this.chart.isDirtyLegend = !0
                            }; c.prototype.hasOptionChanged = function (a) { var b = this.options[a], e = this.chart.options.plotOptions, d = this.userOptions[a]; return d ? b !== d : b !== K(e && e[this.type] && e[this.type][a], e && e.series && e.series[a], b) }; c.prototype.onMouseOver = function () { var a = this.chart, b = a.hoverSeries; a.pointer.setHoverChartIndex(); if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && J(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this }; c.prototype.onMouseOut = function () {
                                var a =
                                    this.options, b = this.chart, e = b.tooltip, d = b.hoverPoint; b.hoverSeries = null; if (d) d.onMouseOut(); this && a.events.mouseOut && J(this, "mouseOut"); !e || this.stickyTracking || e.shared && !this.noSharedTooltip || e.hide(); b.series.forEach(function (a) { a.setState("", !0) })
                            }; c.prototype.setState = function (a, b) {
                                var e = this, d = e.options, c = e.graph, g = d.inactiveOtherPoints, h = d.states, l = K(h[a || "normal"] && h[a || "normal"].animation, e.chart.options.chart.animation), k = d.lineWidth, m = 0, f = d.opacity; a = a || ""; if (e.state !== a && ([e.group, e.markerGroup,
                                e.dataLabelsGroup].forEach(function (b) { b && (e.state && b.removeClass("highcharts-series-" + e.state), a && b.addClass("highcharts-series-" + a)) }), e.state = a, !e.chart.styledMode)) { if (h[a] && !1 === h[a].enabled) return; a && (k = h[a].lineWidth || k + (h[a].lineWidthPlus || 0), f = K(h[a].opacity, f)); if (c && !c.dashstyle) for (d = { "stroke-width": k }, c.animate(d, l); e["zone-graph-" + m];)e["zone-graph-" + m].animate(d, l), m += 1; g || [e.group, e.markerGroup, e.dataLabelsGroup, e.labelBySeries].forEach(function (a) { a && a.animate({ opacity: f }, l) }) } b &&
                                    g && e.points && e.setAllPointsToState(a || void 0)
                            }; c.prototype.setAllPointsToState = function (a) { this.points.forEach(function (b) { b.setState && b.setState(a) }) }; c.prototype.setVisible = function (a, b) {
                                var e = this, d = e.chart, c = e.legendItem, g = d.options.chart.ignoreHiddenSeries, h = e.visible, l = (e.visible = a = e.options.visible = e.userOptions.visible = "undefined" === typeof a ? !h : a) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) { if (e[a]) e[a][l]() }); if (d.hoverSeries === e || (d.hoverPoint &&
                                    d.hoverPoint.series) === e) e.onMouseOut(); c && d.legend.colorizeItem(e, a); e.isDirty = !0; e.options.stacking && d.series.forEach(function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); e.linkedSeries.forEach(function (b) { b.setVisible(a, !1) }); g && (d.isDirtyBox = !0); J(e, l); !1 !== b && d.redraw()
                            }; c.prototype.show = function () { this.setVisible(!0) }; c.prototype.hide = function () { this.setVisible(!1) }; c.prototype.select = function (a) {
                                this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a; this.checkbox &&
                                    (this.checkbox.checked = a); J(this, a ? "select" : "unselect")
                            }; c.prototype.shouldShowTooltip = function (a, b, e) { void 0 === e && (e = {}); e.series = this; e.visiblePlotOnly = !0; return this.chart.isInsidePlot(a, b, e) }; c.defaultOptions = F; return c
                    }(); m(c.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: !1, drawLegendSymbol: r.drawLineMarker, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: C, requireSorting: !0, sorted: !0 }); A.series = c; ""; ""; return c
                });
    H(f, "Extensions/ScrollablePlotArea.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/Chart/Chart.js"], f["Core/Series/Series.js"], f["Core/Renderer/RendererRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C) {
        var F = c.stop, A = C.addEvent, u = C.createElement, n = C.defined, k = C.merge, d = C.pick; A(v, "afterSetChartSize", function (b) {
            var d = this.options.chart.scrollablePlotArea, c = d && d.minWidth; d = d && d.minHeight; if (!this.renderer.forExport) {
                if (c) {
                    if (this.scrollablePixelsX = c = Math.max(0,
                        c - this.chartWidth)) { this.scrollablePlotBox = this.renderer.scrollablePlotBox = k(this.plotBox); this.plotBox.width = this.plotWidth += c; this.inverted ? this.clipBox.height += c : this.clipBox.width += c; var z = { 1: { name: "right", value: c } } }
                } else d && (this.scrollablePixelsY = c = Math.max(0, d - this.chartHeight), n(c) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = k(this.plotBox), this.plotBox.height = this.plotHeight += c, this.inverted ? this.clipBox.width += c : this.clipBox.height += c, z = { 2: { name: "bottom", value: c } })); z && !b.skipAxes &&
                    this.axes.forEach(function (b) { z[b.side] ? b.getPlotLinePath = function () { var d = z[b.side].name, c = this[d]; this[d] = c - z[b.side].value; var h = f.prototype.getPlotLinePath.apply(this, arguments); this[d] = c; return h } : (b.setAxisSize(), b.setAxisTranslation()) })
            }
        }); A(v, "render", function () { this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed() }); v.prototype.setUpScrolling = function () {
            var b = this, d = {
                WebkitOverflowScrolling: "touch",
                overflowX: "hidden", overflowY: "hidden"
            }; this.scrollablePixelsX && (d.overflowX = "auto"); this.scrollablePixelsY && (d.overflowY = "auto"); this.scrollingParent = u("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo); this.scrollingContainer = u("div", { className: "highcharts-scrolling" }, d, this.scrollingParent); A(this.scrollingContainer, "scroll", function () { b.pointer && delete b.pointer.chartPosition }); this.innerContainer = u("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer);
            this.innerContainer.appendChild(this.container); this.setUpScrolling = null
        }; v.prototype.applyFixed =
            function () {
                var b = !this.fixedDiv, c = this.options.chart, k = c.scrollablePlotArea, f = r.getRendererType(); b ? (this.fixedDiv = u("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (c.style && c.style.zIndex || 0) + 2, top: 0 }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = c = new f(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style),
                    this.scrollableMask = c.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": d(k.opacity, .85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), A(this, "afterShowResetZoom", this.moveFixedElements), A(this, "afterApplyDrilldown", this.moveFixedElements), A(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); if (this.scrollableDirty || b) this.scrollableDirty = !1, this.moveFixedElements(); c = this.chartWidth + (this.scrollablePixelsX ||
                        0); f = this.chartHeight + (this.scrollablePixelsY || 0); F(this.container); this.container.style.width = c + "px"; this.container.style.height = f + "px"; this.renderer.boxWrapper.attr({ width: c, height: f, viewBox: [0, 0, c, f].join(" ") }); this.chartBackground.attr({ width: c, height: f }); this.scrollingContainer.style.height = this.chartHeight + "px"; b && (k.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * k.scrollPositionX), k.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * k.scrollPositionY));
                f = this.axisOffset; b = this.plotTop - f[0] - 1; k = this.plotLeft - f[3] - 1; c = this.plotTop + this.plotHeight + f[2] + 1; f = this.plotLeft + this.plotWidth + f[1] + 1; var n = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), y = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0); b = this.scrollablePixelsX ? [["M", 0, b], ["L", this.plotLeft - 1, b], ["L", this.plotLeft - 1, c], ["L", 0, c], ["Z"], ["M", n, b], ["L", this.chartWidth, b], ["L", this.chartWidth, c], ["L", n, c], ["Z"]] : this.scrollablePixelsY ? [["M", k, 0], ["L", k, this.plotTop - 1], ["L", f, this.plotTop -
                    1], ["L", f, 0], ["Z"], ["M", k, y], ["L", k, this.chartHeight], ["L", f, this.chartHeight], ["L", f, y], ["Z"]] : [["M", 0, 0]]; "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: b })
            }; A(f, "afterInit", function () { this.chart.scrollableDirty = !0 }); A(D, "show", function () { this.chart.scrollableDirty = !0 }); ""
    }); H(f, "Core/Axis/StackingAxis.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Axis/Axis.js"], f["Core/Utilities.js"]], function (c, f, v) {
        var D = c.getDeferredAnimation, r = v.addEvent, C = v.destroyObjectProperties,
            F = v.fireEvent, A = v.isNumber, u = v.objectEach, n; (function (c) {
                function d() { var b = this.stacking; if (b) { var d = b.stacks; u(d, function (b, c) { C(b); d[c] = null }); b && b.stackTotalGroup && b.stackTotalGroup.destroy() } } function b() { this.stacking || (this.stacking = new k(this)) } var h = []; c.compose = function (c) { -1 === h.indexOf(c) && (h.push(c), r(c, "init", b), r(c, "destroy", d)); return c }; var k = function () {
                    function b(b) { this.oldStacks = {}; this.stacks = {}; this.stacksTouched = 0; this.axis = b } b.prototype.buildStacks = function () {
                        var b = this.axis,
                            d = b.series, c = b.options.reversedStacks, h = d.length, l; if (!b.isXAxis) { this.usePercentage = !1; for (l = h; l--;) { var g = d[c ? l : h - l - 1]; g.setStackedPoints(); g.setGroupedPoints() } for (l = 0; l < h; l++)d[l].modifyStacks(); F(b, "afterBuildStacks") }
                    }; b.prototype.cleanStacks = function () { if (!this.axis.isXAxis) { if (this.oldStacks) var b = this.stacks = this.oldStacks; u(b, function (b) { u(b, function (b) { b.cumulative = b.total }) }) } }; b.prototype.resetStacks = function () {
                        var b = this, d = b.stacks; b.axis.isXAxis || u(d, function (d) {
                            u(d, function (c, h) {
                                A(c.touched) &&
                                    c.touched < b.stacksTouched ? (c.destroy(), delete d[h]) : (c.total = null, c.cumulative = null)
                            })
                        })
                    }; b.prototype.renderStackTotals = function () { var b = this.axis, d = b.chart, c = d.renderer, h = this.stacks; b = D(d, b.options.stackLabels && b.options.stackLabels.animation || !1); var l = this.stackTotalGroup = this.stackTotalGroup || c.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add(); l.translate(d.plotLeft, d.plotTop); u(h, function (b) { u(b, function (b) { b.render(l) }) }); l.animate({ opacity: 1 }, b) }; return b
                }(); c.Additions = k
            })(n || (n = {})); return n
    });
    H(f, "Extensions/Stacking.js", [f["Core/Axis/Axis.js"], f["Core/Chart/Chart.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Axis/StackingAxis.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F) {
        var A = v.format, u = F.correctFloat, n = F.defined, k = F.destroyObjectProperties, d = F.isArray, b = F.isNumber, h = F.objectEach, p = F.pick, z = function () {
            function d(b, d, c, h, g) {
                var l = b.chart.inverted; this.axis = b; this.isNegative = c; this.options = d = d || {}; this.x = h; this.total = null; this.points =
                    {}; this.hasValidPoints = !1; this.stack = g; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: d.align || (l ? c ? "left" : "right" : "center"), verticalAlign: d.verticalAlign || (l ? "middle" : c ? "bottom" : "top"), y: d.y, x: d.x }; this.textAlign = d.textAlign || (l ? c ? "right" : "left" : "center")
            } d.prototype.destroy = function () { k(this, this.axis) }; d.prototype.render = function (b) {
                var d = this.axis.chart, c = this.options, h = c.format; h = h ? A(h, this, d) : c.formatter.call(this); this.label ? this.label.attr({ text: h, visibility: "hidden" }) : (this.label =
                    d.renderer.label(h, null, null, c.shape, null, null, c.useHTML, !1, "stack-labels"), h = { r: c.borderRadius || 0, text: h, rotation: c.rotation, padding: p(c.padding, 5), visibility: "hidden" }, d.styledMode || (h.fill = c.backgroundColor, h.stroke = c.borderColor, h["stroke-width"] = c.borderWidth, this.label.css(c.style)), this.label.attr(h), this.label.added || this.label.add(b)); this.label.labelrank = d.plotSizeY
            }; d.prototype.setOffset = function (d, c, h, l, g) {
                var k = this.axis, a = k.chart; l = k.translate(k.stacking.usePercentage ? 100 : l ? l : this.total,
                    0, 0, 0, 1); h = k.translate(h ? h : 0); h = n(l) && Math.abs(l - h); d = p(g, a.xAxis[0].translate(this.x)) + d; k = n(l) && this.getStackBox(a, this, d, l, c, h, k); c = this.label; h = this.isNegative; d = "justify" === p(this.options.overflow, "justify"); var f = this.textAlign; c && k && (g = c.getBBox(), l = c.padding, f = "left" === f ? a.inverted ? -l : l : "right" === f ? g.width : a.inverted && "center" === f ? g.width / 2 : a.inverted ? h ? g.width + l : -l : g.width / 2, h = a.inverted ? g.height / 2 : h ? -l : g.height, this.alignOptions.x = p(this.options.x, 0), this.alignOptions.y = p(this.options.y,
                        0), k.x -= f, k.y -= h, c.align(this.alignOptions, null, k), a.isInsidePlot(c.alignAttr.x + f - this.alignOptions.x, c.alignAttr.y + h - this.alignOptions.y) ? c.show() : (c.hide(), d = !1), d && r.prototype.justifyDataLabel.call(this.axis, c, this.alignOptions, c.alignAttr, g, k), c.attr({ x: c.alignAttr.x, y: c.alignAttr.y }), p(!d && this.options.crop, !0) && ((a = b(c.x) && b(c.y) && a.isInsidePlot(c.x - l + c.width, c.y) && a.isInsidePlot(c.x + l, c.y)) || c.hide()))
            }; d.prototype.getStackBox = function (b, d, c, h, g, k, a) {
                var l = d.axis.reversed, e = b.inverted, f = a.height +
                    a.pos - (e ? b.plotLeft : b.plotTop); d = d.isNegative && !l || !d.isNegative && l; return { x: e ? d ? h - a.right : h - k + a.pos - b.plotLeft : c + b.xAxis[0].transB - b.plotLeft, y: e ? a.height - c - g : d ? f - h - k : f - h, width: e ? k : g, height: e ? g : k }
            }; return d
        }(); f.prototype.getStacks = function () {
            var b = this, d = b.inverted; b.yAxis.forEach(function (b) { b.stacking && b.stacking.stacks && b.hasVisibleSeries && (b.stacking.oldStacks = b.stacking.stacks) }); b.series.forEach(function (c) {
                var h = c.xAxis && c.xAxis.options || {}; !c.options.stacking || !0 !== c.visible && !1 !== b.options.chart.ignoreHiddenSeries ||
                    (c.stackKey = [c.type, p(c.options.stack, ""), d ? h.top : h.left, d ? h.height : h.width].join())
            })
        }; C.compose(c); r.prototype.setGroupedPoints = function () { var b = this.yAxis.stacking; this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? r.prototype.setStackedPoints.call(this, "group") : b && h(b.stacks, function (d, c) { "group" === c.slice(-5) && (h(d, function (b) { return b.destroy() }), delete b.stacks[c]) }) }; r.prototype.setStackedPoints = function (b) {
            var c =
                b || this.options.stacking; if (c && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                    var h = this.processedXData, k = this.processedYData, l = [], g = k.length, f = this.options, a = f.threshold, B = p(f.startFromThreshold && a, 0); f = f.stack; b = b ? "" + this.type + ",".concat(c) : this.stackKey; var e = "-" + b, E = this.negStacks, m = this.yAxis, x = m.stacking.stacks, r = m.stacking.oldStacks, A, v; m.stacking.stacksTouched += 1; for (v = 0; v < g; v++) {
                        var F = h[v]; var C = k[v]; var D = this.getStackIndicator(D, F, this.index); var I = D.key; var K = (A =
                            E && C < (B ? 0 : a)) ? e : b; x[K] || (x[K] = {}); x[K][F] || (r[K] && r[K][F] ? (x[K][F] = r[K][F], x[K][F].total = null) : x[K][F] = new z(m, m.options.stackLabels, A, F, f)); K = x[K][F]; null !== C ? (K.points[I] = K.points[this.index] = [p(K.cumulative, B)], n(K.cumulative) || (K.base = I), K.touched = m.stacking.stacksTouched, 0 < D.index && !1 === this.singleStacks && (K.points[I][0] = K.points[this.index + "," + F + ",0"][0])) : K.points[I] = K.points[this.index] = null; "percent" === c ? (A = A ? b : e, E && x[A] && x[A][F] ? (A = x[A][F], K.total = A.total = Math.max(A.total, K.total) + Math.abs(C) ||
                                0) : K.total = u(K.total + (Math.abs(C) || 0))) : "group" === c ? (d(C) && (C = C[0]), null !== C && (K.total = (K.total || 0) + 1)) : K.total = u(K.total + (C || 0)); K.cumulative = "group" === c ? (K.total || 1) - 1 : p(K.cumulative, B) + (C || 0); null !== C && (K.points[I].push(K.cumulative), l[v] = K.cumulative, K.hasValidPoints = !0)
                    } "percent" === c && (m.stacking.usePercentage = !0); "group" !== c && (this.stackedYData = l); m.stacking.oldStacks = {}
                }
        }; r.prototype.modifyStacks = function () {
            var b = this, d = b.stackKey, c = b.yAxis.stacking.stacks, h = b.processedXData, l, g = b.options.stacking;
            b[g + "Stacker"] && [d, "-" + d].forEach(function (d) { for (var a = h.length, k, e; a--;)if (k = h[a], l = b.getStackIndicator(l, k, b.index, d), e = (k = c[d] && c[d][k]) && k.points[l.key]) b[g + "Stacker"](e, k, a) })
        }; r.prototype.percentStacker = function (b, d, c) { d = d.total ? 100 / d.total : 0; b[0] = u(b[0] * d); b[1] = u(b[1] * d); this.stackedYData[c] = b[1] }; r.prototype.getStackIndicator = function (b, d, c, h) { !n(b) || b.x !== d || h && b.stackKey !== h ? b = { x: d, index: 0, key: h, stackKey: h } : b.index++; b.key = [c, d, b.index].join(); return b }; D.StackItem = z; ""; return D.StackItem
    });
    H(f, "Series/Line/LineSeries.js", [f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v) {
        var D = this && this.__extends || function () { var c = function (f, u) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, k) { c.__proto__ = k } || function (c, k) { for (var d in k) k.hasOwnProperty(d) && (c[d] = k[d]) }; return c(f, u) }; return function (f, u) { function n() { this.constructor = f } c(f, u); f.prototype = null === u ? Object.create(u) : (n.prototype = u.prototype, new n) } }(), r = v.defined,
            C = v.merge; v = function (f) {
                function A() { var c = null !== f && f.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; return c } D(A, f); A.prototype.drawGraph = function () {
                    var c = this, f = this.options, k = (this.gappedPath || this.getGraphPath).call(this), d = this.chart.styledMode, b = [["graph", "highcharts-graph"]]; d || b[0].push(f.lineColor || this.color || "#cccccc", f.dashStyle); b = c.getZonesGraphs(b); b.forEach(function (b, p) {
                        var h = b[0], n = c[h], y = n ? "animate" : "attr"; n ? (n.endX = c.preventGraphAnimation ? null : k.xMap,
                            n.animate({ d: k })) : k.length && (c[h] = n = c.chart.renderer.path(k).addClass(b[1]).attr({ zIndex: 1 }).add(c.group)); n && !d && (h = { stroke: b[2], "stroke-width": f.lineWidth, fill: c.fillGraph && c.color || "none" }, b[3] ? h.dashstyle = b[3] : "square" !== f.linecap && (h["stroke-linecap"] = h["stroke-linejoin"] = "round"), n[y](h).shadow(2 > p && f.shadow)); n && (n.startX = k.xMap, n.isArea = k.isArea)
                    })
                }; A.prototype.getGraphPath = function (c, f, k) {
                    var d = this, b = d.options, h = [], p = [], n, u = b.step; c = c || d.points; var y = c.reversed; y && c.reverse(); (u = {
                        right: 1,
                        center: 2
                    }[u] || u && 3) && y && (u = 4 - u); c = this.getValidPoints(c, !1, !(b.connectNulls && !f && !k)); c.forEach(function (t, q) {
                        var l = t.plotX, g = t.plotY, w = c[q - 1]; (t.leftCliff || w && w.rightCliff) && !k && (n = !0); t.isNull && !r(f) && 0 < q ? n = !b.connectNulls : t.isNull && !f ? n = !0 : (0 === q || n ? q = [["M", t.plotX, t.plotY]] : d.getPointSpline ? q = [d.getPointSpline(c, t, q)] : u ? (q = 1 === u ? [["L", w.plotX, g]] : 2 === u ? [["L", (w.plotX + l) / 2, w.plotY], ["L", (w.plotX + l) / 2, g]] : [["L", l, w.plotY]], q.push(["L", l, g])) : q = [["L", l, g]], p.push(t.x), u && (p.push(t.x), 2 === u && p.push(t.x)),
                            h.push.apply(h, q), n = !1)
                    }); h.xMap = p; return d.graphPath = h
                }; A.prototype.getZonesGraphs = function (c) { this.zones.forEach(function (f, k) { k = ["zone-graph-" + k, "highcharts-graph highcharts-zone-graph-" + k + " " + (f.className || "")]; this.chart.styledMode || k.push(f.color || this.color, f.dashStyle || this.options.dashStyle); c.push(k) }, this); return c }; A.defaultOptions = C(c.defaultOptions, {}); return A
            }(c); f.registerSeriesType("line", v); ""; return v
    }); H(f, "Series/Area/AreaSeries.js", [f["Core/Color/Color.js"], f["Core/Legend/LegendSymbol.js"],
    f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
        var r = this && this.__extends || function () { var c = function (d, b) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return c(d, b) }; return function (d, b) { function h() { this.constructor = d } c(d, b); d.prototype = null === b ? Object.create(b) : (h.prototype = b.prototype, new h) } }(), C = c.parse, F = v.seriesTypes.line; c = D.extend; var A = D.merge, u = D.objectEach,
            n = D.pick; D = function (c) {
                function d() { var b = null !== c && c.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b } r(d, c); d.prototype.drawGraph = function () {
                    this.areaPath = []; c.prototype.drawGraph.apply(this); var b = this, d = this.areaPath, k = this.options, f = [["area", "highcharts-area", this.color, k.fillColor]]; this.zones.forEach(function (c, d) { f.push(["zone-area-" + d, "highcharts-area highcharts-zone-area-" + d + " " + c.className, c.color || b.color, c.fillColor || k.fillColor]) }); f.forEach(function (c) {
                        var h =
                            c[0], f = {}, q = b[h], l = q ? "animate" : "attr"; q ? (q.endX = b.preventGraphAnimation ? null : d.xMap, q.animate({ d: d })) : (f.zIndex = 0, q = b[h] = b.chart.renderer.path(d).addClass(c[1]).add(b.group), q.isArea = !0); b.chart.styledMode || (f.fill = n(c[3], C(c[2]).setOpacity(n(k.fillOpacity, .75)).get())); q[l](f); q.startX = d.xMap; q.shiftUnit = k.step ? 2 : 1
                    })
                }; d.prototype.getGraphPath = function (b) {
                    var c = F.prototype.getGraphPath, d = this.options, k = d.stacking, f = this.yAxis, y = [], t = [], q = this.index, l = f.stacking.stacks[this.stackKey], g = d.threshold,
                        w = Math.round(f.getThreshold(d.threshold)); d = n(d.connectNulls, "percent" === k); var a = function (a, e, c) { var d = b[a]; a = k && l[d.x].points[q]; var h = d[c + "Null"] || 0; c = d[c + "Cliff"] || 0; d = !0; if (c || h) { var p = (h ? a[0] : a[1]) + c; var n = a[0] + c; d = !!h } else !k && b[e] && b[e].isNull && (p = n = g); "undefined" !== typeof p && (t.push({ plotX: m, plotY: null === p ? w : f.getThreshold(p), isNull: d, isCliff: !0 }), y.push({ plotX: m, plotY: null === n ? w : f.getThreshold(n), doCurve: !1 })) }; b = b || this.points; k && (b = this.getStackPoints(b)); for (var B = 0, e = b.length; B < e; ++B) {
                            k ||
                                (b[B].leftCliff = b[B].rightCliff = b[B].leftNull = b[B].rightNull = void 0); var u = b[B].isNull; var m = n(b[B].rectPlotX, b[B].plotX); var x = k ? n(b[B].yBottom, w) : w; if (!u || d) d || a(B, B - 1, "left"), u && !k && d || (t.push(b[B]), y.push({ x: B, plotX: m, plotY: x })), d || a(B, B + 1, "right")
                        } a = c.call(this, t, !0, !0); y.reversed = !0; u = c.call(this, y, !0, !0); (x = u[0]) && "M" === x[0] && (u[0] = ["L", x[1], x[2]]); u = a.concat(u); u.length && u.push(["Z"]); c = c.call(this, t, !1, d); u.xMap = a.xMap; this.areaPath = u; return c
                }; d.prototype.getStackPoints = function (b) {
                    var c =
                        this, d = [], k = [], f = this.xAxis, y = this.yAxis, t = y.stacking.stacks[this.stackKey], q = {}, l = y.series, g = l.length, w = y.options.reversedStacks ? 1 : -1, a = l.indexOf(c); b = b || this.points; if (this.options.stacking) {
                            for (var B = 0; B < b.length; B++)b[B].leftNull = b[B].rightNull = void 0, q[b[B].x] = b[B]; u(t, function (a, b) { null !== a.total && k.push(b) }); k.sort(function (a, b) { return a - b }); var e = l.map(function (a) { return a.visible }); k.forEach(function (b, h) {
                                var m = 0, p, B; if (q[b] && !q[b].isNull) d.push(q[b]), [-1, 1].forEach(function (d) {
                                    var f = 1 ===
                                        d ? "rightNull" : "leftNull", m = t[k[h + d]], n = 0; if (m) for (var x = a; 0 <= x && x < g;) { var z = l[x].index; p = m.points[z]; p || (z === c.index ? q[b][f] = !0 : e[x] && (B = t[b].points[z]) && (n -= B[1] - B[0])); x += w } q[b][1 === d ? "rightCliff" : "leftCliff"] = n
                                }); else { for (var z = a; 0 <= z && z < g;) { if (p = t[b].points[l[z].index]) { m = p[1]; break } z += w } m = n(m, 0); m = y.translate(m, 0, 1, 0, 1); d.push({ isNull: !0, plotX: f.translate(b, 0, 0, 0, 1), x: b, plotY: m, yBottom: m }) }
                            })
                        } return d
                }; d.defaultOptions = A(F.defaultOptions, { threshold: 0 }); return d
            }(F); c(D.prototype, {
                singleStacks: !1,
                drawLegendSymbol: f.drawRectangle
            }); v.registerSeriesType("area", D); ""; return D
    }); H(f, "Series/Spline/SplineSeries.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f) {
        var v = this && this.__extends || function () {
            var c = function (f, u) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, k) { c.__proto__ = k } || function (c, k) { for (var d in k) k.hasOwnProperty(d) && (c[d] = k[d]) }; return c(f, u) }; return function (f, u) {
                function n() { this.constructor = f } c(f, u); f.prototype = null === u ? Object.create(u) :
                    (n.prototype = u.prototype, new n)
            }
        }(), D = c.seriesTypes.line, r = f.merge, C = f.pick; f = function (c) {
            function f() { var f = null !== c && c.apply(this, arguments) || this; f.data = void 0; f.options = void 0; f.points = void 0; return f } v(f, c); f.prototype.getPointSpline = function (c, f, k) {
                var d = f.plotX || 0, b = f.plotY || 0, h = c[k - 1]; k = c[k + 1]; if (h && !h.isNull && !1 !== h.doCurve && !f.isCliff && k && !k.isNull && !1 !== k.doCurve && !f.isCliff) {
                    c = h.plotY || 0; var p = k.plotX || 0; k = k.plotY || 0; var n = 0; var u = (1.5 * d + (h.plotX || 0)) / 2.5; var y = (1.5 * b + c) / 2.5; p = (1.5 * d +
                        p) / 2.5; var t = (1.5 * b + k) / 2.5; p !== u && (n = (t - y) * (p - d) / (p - u) + b - t); y += n; t += n; y > c && y > b ? (y = Math.max(c, b), t = 2 * b - y) : y < c && y < b && (y = Math.min(c, b), t = 2 * b - y); t > k && t > b ? (t = Math.max(k, b), y = 2 * b - t) : t < k && t < b && (t = Math.min(k, b), y = 2 * b - t); f.rightContX = p; f.rightContY = t
                } f = ["C", C(h.rightContX, h.plotX, 0), C(h.rightContY, h.plotY, 0), C(u, d, 0), C(y, b, 0), d, b]; h.rightContX = h.rightContY = void 0; return f
            }; f.defaultOptions = r(D.defaultOptions); return f
        }(D); c.registerSeriesType("spline", f); ""; return f
    }); H(f, "Series/AreaSpline/AreaSplineSeries.js",
        [f["Series/Spline/SplineSeries.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
            var r = this && this.__extends || function () { var c = function (k, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return c(k, d) }; return function (k, d) { function b() { this.constructor = k } c(k, d); k.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) } }(),
                C = v.seriesTypes, F = C.area; C = C.area.prototype; var A = D.extend, u = D.merge; D = function (f) { function k() { var c = null !== f && f.apply(this, arguments) || this; c.data = void 0; c.points = void 0; c.options = void 0; return c } r(k, f); k.defaultOptions = u(c.defaultOptions, F.defaultOptions); return k }(c); A(D.prototype, { getGraphPath: C.getGraphPath, getStackPoints: C.getStackPoints, drawGraph: C.drawGraph, drawLegendSymbol: f.drawRectangle }); v.registerSeriesType("areaspline", D); ""; return D
        }); H(f, "Series/Column/ColumnSeries.js", [f["Core/Animation/AnimationUtilities.js"],
        f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F) {
            var A = this && this.__extends || function () {
                var b = function (c, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return b(c, a) }; return function (c, a) {
                    function d() { this.constructor = c } b(c, a); c.prototype = null === a ? Object.create(a) :
                        (d.prototype = a.prototype, new d)
                }
            }(), u = c.animObject, n = f.parse, k = v.hasTouch; c = v.noop; var d = F.clamp, b = F.css, h = F.defined, p = F.extend, z = F.fireEvent, E = F.isArray, y = F.isNumber, t = F.merge, q = F.pick, l = F.objectEach; F = function (c) {
                function g() { var a = null !== c && c.apply(this, arguments) || this; a.borderWidth = void 0; a.data = void 0; a.group = void 0; a.options = void 0; a.points = void 0; return a } A(g, c); g.prototype.animate = function (a) {
                    var b = this, c = this.yAxis, g = b.options, h = this.chart.inverted, l = {}, k = h ? "translateX" : "translateY"; if (a) l.scaleY =
                        .001, a = d(c.toPixels(g.threshold), c.pos, c.pos + c.len), h ? l.translateX = a - c.len : l.translateY = a, b.clipBox && b.setClip(), b.group.attr(l); else { var f = Number(b.group.attr(k)); b.group.animate({ scaleY: 1 }, p(u(b.options.animation), { step: function (a, e) { b.group && (l[k] = f + e.pos * (c.pos - f), b.group.attr(l)) } })) }
                }; g.prototype.init = function (a, b) { c.prototype.init.apply(this, arguments); var e = this; a = e.chart; a.hasRendered && a.series.forEach(function (a) { a.type === e.type && (a.isDirty = !0) }) }; g.prototype.getColumnMetrics = function () {
                    var a =
                        this, b = a.options, c = a.xAxis, d = a.yAxis, g = c.options.reversedStacks; g = c.reversed && !g || !c.reversed && g; var h = {}, l, k = 0; !1 === b.grouping ? k = 1 : a.chart.series.forEach(function (b) { var c = b.yAxis, e = b.options; if (b.type === a.type && (b.visible || !a.chart.options.chart.ignoreHiddenSeries) && d.len === c.len && d.pos === c.pos) { if (e.stacking && "group" !== e.stacking) { l = b.stackKey; "undefined" === typeof h[l] && (h[l] = k++); var g = h[l] } else !1 !== e.grouping && (g = k++); b.columnIndex = g } }); var f = Math.min(Math.abs(c.transA) * (c.ordinal && c.ordinal.slope ||
                            b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), p = f * b.groupPadding, n = (f - 2 * p) / (k || 1); b = Math.min(b.maxPointWidth || c.len, q(b.pointWidth, n * (1 - 2 * b.pointPadding))); a.columnMetrics = { width: b, offset: (n - b) / 2 + (p + ((a.columnIndex || 0) + (g ? 1 : 0)) * n - f / 2) * (g ? -1 : 1), paddedWidth: n, columnCount: k }; return a.columnMetrics
                }; g.prototype.crispCol = function (a, b, c, d) {
                    var e = this.chart, g = this.borderWidth, h = -(g % 2 ? .5 : 0); g = g % 2 ? .5 : 1; e.inverted && e.renderer.isVML && (g += 1); this.options.crisp && (c = Math.round(a + c) + h, a = Math.round(a) +
                        h, c -= a); d = Math.round(b + d) + g; h = .5 >= Math.abs(b) && .5 < d; b = Math.round(b) + g; d -= b; h && d && (--b, d += 1); return { x: a, y: b, width: c, height: d }
                }; g.prototype.adjustForMissingColumns = function (a, b, c, d) {
                    var e = this, g = this.options.stacking; if (!c.isNull && 1 < d.columnCount) {
                        var h = this.yAxis.options.reversedStacks, k = 0, f = h ? 0 : -d.columnCount; l(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) {
                            if ("number" === typeof c.x && (a = a[c.x.toString()])) {
                                var b = a.points[e.index], d = a.total; g ? (b && (k = f), a.hasValidPoints && (h ? f++ : f--)) : E(b) &&
                                    (k = b[1], f = d || 0)
                            }
                        }); a = (c.plotX || 0) + ((f - 1) * d.paddedWidth + b) / 2 - b - k * d.paddedWidth
                    } return a
                }; g.prototype.translate = function () {
                    var a = this, b = a.chart, c = a.options, g = a.dense = 2 > a.closestPointRange * a.xAxis.transA; g = a.borderWidth = q(c.borderWidth, g ? 0 : 1); var l = a.xAxis, k = a.yAxis, f = c.threshold, p = a.translatedThreshold = k.getThreshold(f), n = q(c.minPointLength, 5), t = a.getColumnMetrics(), w = t.width, z = a.pointXOffset = t.offset, u = a.dataMin, E = a.dataMax, A = a.barW = Math.max(w, 1 + 2 * g); b.inverted && (p -= .5); c.pointPadding && (A = Math.ceil(A));
                    r.prototype.translate.apply(a); a.points.forEach(function (e) {
                        var g = q(e.yBottom, p), m = 999 + Math.abs(g), x = e.plotX || 0; m = d(e.plotY, -m, k.len + m); var B = Math.min(m, g), r = Math.max(m, g) - B, J = w, v = x + z, C = A; n && Math.abs(r) < n && (r = n, x = !k.reversed && !e.negative || k.reversed && e.negative, y(f) && y(E) && e.y === f && E <= f && (k.min || 0) < f && (u !== E || (k.max || 0) <= f) && (x = !x), B = Math.abs(B - p) > n ? g - n : p - (x ? n : 0)); h(e.options.pointWidth) && (J = C = Math.ceil(e.options.pointWidth), v -= Math.round((J - w) / 2)); c.centerInCategory && (v = a.adjustForMissingColumns(v,
                            J, e, t)); e.barX = v; e.pointWidth = J; e.tooltipPos = b.inverted ? [d(k.len + k.pos - b.plotLeft - m, k.pos - b.plotLeft, k.len + k.pos - b.plotLeft), l.len + l.pos - b.plotTop - v - C / 2, r] : [l.left - b.plotLeft + v + C / 2, d(m + k.pos - b.plotTop, k.pos - b.plotTop, k.len + k.pos - b.plotTop), r]; e.shapeType = a.pointClass.prototype.shapeType || "rect"; e.shapeArgs = a.crispCol.apply(a, e.isNull ? [v, p, C, 0] : [v, B, C, r])
                    })
                }; g.prototype.drawGraph = function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }; g.prototype.pointAttribs = function (a,
                    b) {
                    var c = this.options, d = this.pointAttrToOptions || {}, g = d.stroke || "borderColor", h = d["stroke-width"] || "borderWidth", l = a && a.color || this.color, k = a && a[g] || c[g] || l; d = a && a.options.dashStyle || c.dashStyle; var f = a && a[h] || c[h] || this[h] || 0, p = q(a && a.opacity, c.opacity, 1); if (a && this.zones.length) { var w = a.getZone(); l = a.options.color || w && (w.color || a.nonZonedColor) || this.color; w && (k = w.borderColor || k, d = w.dashStyle || d, f = w.borderWidth || f) } b && a && (a = t(c.states[b], a.options.states && a.options.states[b] || {}), b = a.brightness,
                        l = a.color || "undefined" !== typeof b && n(l).brighten(a.brightness).get() || l, k = a[g] || k, f = a[h] || f, d = a.dashStyle || d, p = q(a.opacity, p)); g = { fill: l, stroke: k, "stroke-width": f, opacity: p }; d && (g.dashstyle = d); return g
                }; g.prototype.drawPoints = function () {
                    var a = this, b = this.chart, c = a.options, d = b.renderer, g = c.animationLimit || 250, h; a.points.forEach(function (e) {
                        var l = e.graphic, k = !!l, f = l && b.pointCount < g ? "animate" : "attr"; if (y(e.plotY) && null !== e.y) {
                            h = e.shapeArgs; l && e.hasNewShapeType() && (l = l.destroy()); a.enabledDataSorting &&
                                (e.startXPos = a.xAxis.reversed ? -(h ? h.width || 0 : 0) : a.xAxis.width); l || (e.graphic = l = d[e.shapeType](h).add(e.group || a.group)) && a.enabledDataSorting && b.hasRendered && b.pointCount < g && (l.attr({ x: e.startXPos }), k = !0, f = "animate"); if (l && k) l[f](t(h)); if (c.borderRadius) l[f]({ r: c.borderRadius }); b.styledMode || l[f](a.pointAttribs(e, e.selected && "select")).shadow(!1 !== e.allowShadow && c.shadow, null, c.stacking && !c.borderRadius); l && (l.addClass(e.getClassName(), !0), l.attr({ visibility: e.visible ? "inherit" : "hidden" }))
                        } else l &&
                            (e.graphic = l.destroy())
                    })
                }; g.prototype.drawTracker = function () {
                    var a = this, c = a.chart, d = c.pointer, g = function (a) { var b = d.getPointFromEvent(a); "undefined" !== typeof b && (d.isDirectTouch = !0, b.onMouseOver(a)) }, h; a.points.forEach(function (a) { h = E(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : []; a.graphic && (a.graphic.element.point = a); h.forEach(function (b) { b.div ? b.div.point = a : b.element.point = a }) }); a._hasTracking || (a.trackerGroups.forEach(function (e) {
                        if (a[e]) {
                            a[e].addClass("highcharts-tracker").on("mouseover",
                                g).on("mouseout", function (a) { d.onTrackerMouseOut(a) }); if (k) a[e].on("touchstart", g); !c.styledMode && a.options.cursor && a[e].css(b).css({ cursor: a.options.cursor })
                        }
                    }), a._hasTracking = !0); z(this, "afterDrawTracker")
                }; g.prototype.remove = function () { var a = this, b = a.chart; b.hasRendered && b.series.forEach(function (b) { b.type === a.type && (b.isDirty = !0) }); r.prototype.remove.apply(a, arguments) }; g.defaultOptions = t(r.defaultOptions, {
                    borderRadius: 0, centerInCategory: !1, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0,
                    cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff"
                }); return g
            }(r); p(F.prototype, { cropShoulder: 0, directTouch: !0, drawLegendSymbol: D.drawRectangle, getSymbol: c, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }); C.registerSeriesType("column", F); ""; ""; return F
        }); H(f, "Core/Series/DataLabel.js",
            [f["Core/Animation/AnimationUtilities.js"], f["Core/FormatUtilities.js"], f["Core/Utilities.js"]], function (c, f, v) {
                var D = c.getDeferredAnimation, r = f.format, C = v.defined, F = v.extend, A = v.fireEvent, u = v.isArray, n = v.merge, k = v.objectEach, d = v.pick, b = v.splat, h; (function (c) {
                    function h(b, a, c, e, g) {
                        var h = this, l = this.chart, k = this.isCartesian && l.inverted, f = this.enabledDataSorting, q = d(b.dlBox && b.dlBox.centerX, b.plotX), p = b.plotY, n = c.rotation, t = c.align, w = C(q) && C(p) && l.isInsidePlot(q, Math.round(p), {
                            inverted: k, paneCoordinates: !0,
                            series: h
                        }), z = function (c) { f && h.xAxis && !B && h.setDataLabelStartPos(b, a, g, w, c) }, B = "justify" === d(c.overflow, f ? "none" : "justify"), y = this.visible && !1 !== b.visible && (b.series.forceDL || f && !B || w || d(c.inside, !!this.options.stacking) && e && l.isInsidePlot(q, k ? e.x + 1 : e.y + e.height - 1, { inverted: k, paneCoordinates: !0, series: h })); if (y && C(q) && C(p)) {
                            n && a.attr({ align: t }); t = a.getBBox(!0); var u = [0, 0]; var r = l.renderer.fontMetrics(l.styledMode ? void 0 : c.style.fontSize, a).b; e = F({
                                x: k ? this.yAxis.len - p : q, y: Math.round(k ? this.xAxis.len -
                                    q : p), width: 0, height: 0
                            }, e); F(c, { width: t.width, height: t.height }); n ? (B = !1, u = l.renderer.rotCorr(r, n), q = { x: e.x + (c.x || 0) + e.width / 2 + u.x, y: e.y + (c.y || 0) + { top: 0, middle: .5, bottom: 1 }[c.verticalAlign] * e.height }, u = [t.x - Number(a.attr("x")), t.y - Number(a.attr("y"))], z(q), a[g ? "attr" : "animate"](q)) : (z(e), a.align(c, void 0, e), q = a.alignAttr); B && 0 <= e.height ? this.justifyDataLabel(a, c, q, t, e, g) : d(c.crop, !0) && (e = q.x, z = q.y, e += u[0], z += u[1], y = l.isInsidePlot(e, z, { paneCoordinates: !0, series: h }) && l.isInsidePlot(e + t.width, z + t.height,
                                { paneCoordinates: !0, series: h })); if (c.shape && !n) a[g ? "attr" : "animate"]({ anchorX: k ? l.plotWidth - b.plotY : b.plotX, anchorY: k ? l.plotHeight - b.plotX : b.plotY })
                        } g && f && (a.placed = !1); y || f && !B ? a.show() : (a.hide(), a.placed = !1)
                    } function f(b, a) { var c = a.filter; return c ? (a = c.operator, b = b[c.property], c = c.value, ">" === a && b > c || "<" === a && b < c || ">=" === a && b >= c || "<=" === a && b <= c || "==" === a && b == c || "===" === a && b === c ? !0 : !1) : !0 } function p() {
                        var c = this, a = c.chart, g = c.options, e = c.points, h = c.hasRendered || 0, l = a.renderer, p = g.dataLabels, n, t =
                            p.animation; t = p.defer ? D(a, t, c) : { defer: 0, duration: 0 }; p = q(q(a.options.plotOptions && a.options.plotOptions.series && a.options.plotOptions.series.dataLabels, a.options.plotOptions && a.options.plotOptions[c.type] && a.options.plotOptions[c.type].dataLabels), p); A(this, "drawDataLabels"); if (u(p) || p.enabled || c._hasPointLabels) {
                                var z = c.plotGroup("dataLabelsGroup", "data-labels", h ? "inherit" : "hidden", p.zIndex || 6); z.attr({ opacity: +h }); !h && (h = c.dataLabelsGroup) && (c.visible && z.show(), h[g.animation ? "animate" : "attr"]({ opacity: 1 },
                                    t)); e.forEach(function (e) {
                                        n = b(q(p, e.dlOptions || e.options && e.options.dataLabels)); n.forEach(function (b, h) {
                                            var m = b.enabled && (!e.isNull || e.dataLabelOnNull) && f(e, b), q = e.connectors ? e.connectors[h] : e.connector, p = e.dataLabels ? e.dataLabels[h] : e.dataLabel, n = !p, t = d(b.distance, e.labelDistance); if (m) {
                                                var w = e.getLabelConfig(); var x = d(b[e.formatPrefix + "Format"], b.format); w = C(x) ? r(x, w, a) : (b[e.formatPrefix + "Formatter"] || b.formatter).call(w, b); x = b.style; var y = b.rotation; a.styledMode || (x.color = d(b.color, x.color, c.color,
                                                    "#000000"), "contrast" === x.color ? (e.contrastColor = l.getContrast(e.color || c.color), x.color = !C(t) && b.inside || 0 > t || g.stacking ? e.contrastColor : "#000000") : delete e.contrastColor, g.cursor && (x.cursor = g.cursor)); var B = { r: b.borderRadius || 0, rotation: y, padding: b.padding, zIndex: 1 }; a.styledMode || (B.fill = b.backgroundColor, B.stroke = b.borderColor, B["stroke-width"] = b.borderWidth); k(B, function (a, b) { "undefined" === typeof a && delete B[b] })
                                            } !p || m && C(w) && !!p.div === !!b.useHTML && (p.rotation && b.rotation || p.rotation === b.rotation) ||
                                                (n = !0, e.dataLabel = p = e.dataLabel && e.dataLabel.destroy(), e.dataLabels && (1 === e.dataLabels.length ? delete e.dataLabels : delete e.dataLabels[h]), h || delete e.dataLabel, q && (e.connector = e.connector.destroy(), e.connectors && (1 === e.connectors.length ? delete e.connectors : delete e.connectors[h]))); m && C(w) ? (p ? B.text = w : (e.dataLabels = e.dataLabels || [], p = e.dataLabels[h] = y ? l.text(w, 0, 0, b.useHTML).addClass("highcharts-data-label") : l.label(w, 0, 0, b.shape, null, null, b.useHTML, null, "data-label"), h || (e.dataLabel = p), p.addClass(" highcharts-data-label-color-" +
                                                    e.colorIndex + " " + (b.className || "") + (b.useHTML ? " highcharts-tracker" : ""))), p.options = b, p.attr(B), a.styledMode || p.css(x).shadow(b.shadow), p.added || p.add(z), b.textPath && !b.useHTML && (p.setTextPath(e.getDataLabelPath && e.getDataLabelPath(p) || e.graphic, b.textPath), e.dataLabelPath && !b.textPath.enabled && (e.dataLabelPath = e.dataLabelPath.destroy())), c.alignDataLabel(e, p, b, null, n)) : p && p.hide()
                                        })
                                    })
                            } A(this, "afterDrawDataLabels")
                    } function t(b, a, c, e, d, g) {
                        var h = this.chart, l = a.align, k = a.verticalAlign, f = b.box ? 0 : b.padding ||
                            0, m = a.x; m = void 0 === m ? 0 : m; var p = a.y; p = void 0 === p ? 0 : p; var q = (c.x || 0) + f; if (0 > q) { "right" === l && 0 <= m ? (a.align = "left", a.inside = !0) : m -= q; var n = !0 } q = (c.x || 0) + e.width - f; q > h.plotWidth && ("left" === l && 0 >= m ? (a.align = "right", a.inside = !0) : m += h.plotWidth - q, n = !0); q = c.y + f; 0 > q && ("bottom" === k && 0 <= p ? (a.verticalAlign = "top", a.inside = !0) : p -= q, n = !0); q = (c.y || 0) + e.height - f; q > h.plotHeight && ("top" === k && 0 >= p ? (a.verticalAlign = "bottom", a.inside = !0) : p += h.plotHeight - q, n = !0); n && (a.x = m, a.y = p, b.placed = !g, b.align(a, void 0, d)); return n
                    }
                    function q(b, a) { var c = [], e; if (u(b) && !u(a)) c = b.map(function (b) { return n(b, a) }); else if (u(a) && !u(b)) c = a.map(function (a) { return n(b, a) }); else if (u(b) || u(a)) for (e = Math.max(b.length, a.length); e--;)c[e] = n(b[e], a[e]); else c = n(b, a); return c } function l(b, a, c, e, d) {
                        var g = this.chart, h = g.inverted, l = this.xAxis, k = l.reversed, f = h ? a.height / 2 : a.width / 2; b = (b = b.pointWidth) ? b / 2 : 0; a.startXPos = h ? d.x : k ? -f - b : l.width - f + b; a.startYPos = h ? k ? this.yAxis.height - f + b : -f - b : d.y; e ? "hidden" === a.visibility && (a.show(), a.attr({ opacity: 0 }).animate({ opacity: 1 })) :
                            a.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, a.hide); g.hasRendered && (c && a.attr({ x: a.startXPos, y: a.startYPos }), a.placed = !0)
                    } var g = []; c.compose = function (b) { if (-1 === g.indexOf(b)) { var a = b.prototype; g.push(b); a.alignDataLabel = h; a.drawDataLabels = p; a.justifyDataLabel = t; a.setDataLabelStartPos = l } }
                })(h || (h = {})); ""; return h
            }); H(f, "Series/Column/ColumnDataLabel.js", [f["Core/Series/DataLabel.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v) {
                var D = f.series, r = v.merge, C = v.pick, F; (function (f) {
                    function u(c,
                        d, b, h, f) {
                        var k = this.chart.inverted, p = c.series, n = (p.xAxis ? p.xAxis.len : this.chart.plotSizeX) || 0; p = (p.yAxis ? p.yAxis.len : this.chart.plotSizeY) || 0; var t = c.dlBox || c.shapeArgs, q = C(c.below, c.plotY > C(this.translatedThreshold, p)), l = C(b.inside, !!this.options.stacking); t && (h = r(t), 0 > h.y && (h.height += h.y, h.y = 0), t = h.y + h.height - p, 0 < t && t < h.height && (h.height -= t), k && (h = { x: p - h.y - h.height, y: n - h.x - h.width, width: h.height, height: h.width }), l || (k ? (h.x += q ? 0 : h.width, h.width = 0) : (h.y += q ? h.height : 0, h.height = 0))); b.align = C(b.align,
                            !k || l ? "center" : q ? "right" : "left"); b.verticalAlign = C(b.verticalAlign, k || l ? "middle" : q ? "top" : "bottom"); D.prototype.alignDataLabel.call(this, c, d, b, h, f); b.inside && c.contrastColor && d.css({ color: c.contrastColor })
                    } var n = []; f.compose = function (k) { c.compose(D); -1 === n.indexOf(k) && (n.push(k), k.prototype.alignDataLabel = u) }
                })(F || (F = {})); return F
            }); H(f, "Series/Bar/BarSeries.js", [f["Series/Column/ColumnSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v) {
                var D = this && this.__extends ||
                    function () { var c = function (f, u) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, k) { c.__proto__ = k } || function (c, k) { for (var d in k) k.hasOwnProperty(d) && (c[d] = k[d]) }; return c(f, u) }; return function (f, u) { function n() { this.constructor = f } c(f, u); f.prototype = null === u ? Object.create(u) : (n.prototype = u.prototype, new n) } }(), r = v.extend, C = v.merge; v = function (f) {
                        function r() { var c = null !== f && f.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; return c } D(r, f); r.defaultOptions =
                            C(c.defaultOptions, {}); return r
                    }(c); r(v.prototype, { inverted: !0 }); f.registerSeriesType("bar", v); ""; return v
            }); H(f, "Series/Scatter/ScatterSeries.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f) {
                var v = this && this.__extends || function () {
                    var c = function (f, k) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, b) { c.__proto__ = b } || function (c, b) { for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]) }; return c(f, k) }; return function (f, k) {
                        function d() { this.constructor = f } c(f,
                            k); f.prototype = null === k ? Object.create(k) : (d.prototype = k.prototype, new d)
                    }
                }(), D = c.seriesTypes, r = D.column, C = D.line; D = f.addEvent; var F = f.extend, A = f.merge; f = function (c) {
                    function f() { var f = null !== c && c.apply(this, arguments) || this; f.data = void 0; f.options = void 0; f.points = void 0; return f } v(f, c); f.prototype.applyJitter = function () {
                        var c = this, d = this.options.jitter, b = this.points.length; d && this.points.forEach(function (h, f) {
                            ["x", "y"].forEach(function (k, p) {
                                var n = "plot" + k.toUpperCase(); if (d[k] && !h.isNull) {
                                    var t = c[k +
                                        "Axis"]; var q = d[k] * t.transA; if (t && !t.isLog) { var l = Math.max(0, h[n] - q); t = Math.min(t.len, h[n] + q); p = 1E4 * Math.sin(f + p * b); h[n] = l + (t - l) * (p - Math.floor(p)); "x" === k && (h.clientX = h.plotX) }
                                }
                            })
                        })
                    }; f.prototype.drawGraph = function () { this.options.lineWidth ? c.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy()) }; f.defaultOptions = A(C.defaultOptions, {
                        lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: {
                            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                        }
                    }); return f
                }(C); F(f.prototype, { drawTracker: r.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1 }); D(f, "afterTranslate", function () { this.applyJitter() }); c.registerSeriesType("scatter", f); ""; return f
            }); H(f, "Series/CenteredUtilities.js", [f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Utilities.js"]], function (c, f, v) {
                var D = c.deg2rad, r = v.fireEvent,
                    C = v.isNumber, F = v.pick, A = v.relativeLength, u; (function (c) {
                        c.getCenter = function () {
                            var c = this.options, d = this.chart, b = 2 * (c.slicedOffset || 0), h = d.plotWidth - 2 * b, p = d.plotHeight - 2 * b, n = c.center, u = Math.min(h, p), y = c.thickness, t = c.size, q = c.innerSize || 0; "string" === typeof t && (t = parseFloat(t)); "string" === typeof q && (q = parseFloat(q)); c = [F(n[0], "50%"), F(n[1], "50%"), F(t && 0 > t ? void 0 : c.size, "100%"), F(q && 0 > q ? void 0 : c.innerSize || 0, "0%")]; !d.angular || this instanceof f || (c[3] = 0); for (n = 0; 4 > n; ++n)t = c[n], d = 2 > n || 2 === n && /%$/.test(t),
                                c[n] = A(t, [h, p, u, c[2]][n]) + (d ? b : 0); c[3] > c[2] && (c[3] = c[2]); C(y) && 2 * y < c[2] && 0 < y && (c[3] = c[2] - 2 * y); r(this, "afterGetCenter", { positions: c }); return c
                        }; c.getStartAndEndRadians = function (c, d) { c = C(c) ? c : 0; d = C(d) && d > c && 360 > d - c ? d : c + 360; return { start: D * (c + -90), end: D * (d + -90) } }
                    })(u || (u = {})); ""; return u
            }); H(f, "Series/Pie/PiePoint.js", [f["Core/Animation/AnimationUtilities.js"], f["Core/Series/Point.js"], f["Core/Utilities.js"]], function (c, f, v) {
                var D = this && this.__extends || function () {
                    var c = function (d, b) {
                        c = Object.setPrototypeOf ||
                            { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return c(d, b)
                    }; return function (d, b) { function h() { this.constructor = d } c(d, b); d.prototype = null === b ? Object.create(b) : (h.prototype = b.prototype, new h) }
                }(), r = c.setAnimation, C = v.addEvent, F = v.defined; c = v.extend; var A = v.isNumber, u = v.pick, n = v.relativeLength; f = function (c) {
                    function d() {
                        var b = null !== c && c.apply(this, arguments) || this; b.labelDistance = void 0; b.options = void 0; b.series = void 0;
                        return b
                    } D(d, c); d.prototype.getConnectorPath = function () { var b = this.labelPosition, c = this.series.options.dataLabels, d = this.connectorShapes, f = c.connectorShape; d[f] && (f = d[f]); return f.call(this, { x: b.final.x, y: b.final.y, alignment: b.alignment }, b.connectorPosition, c) }; d.prototype.getTranslate = function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }; d.prototype.haloPath = function (b) {
                        var c = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x,
                            c.y, c.r + b, c.r + b, { innerR: c.r - 1, start: c.start, end: c.end })
                    }; d.prototype.init = function () { var b = this; c.prototype.init.apply(this, arguments); this.name = u(this.name, "Slice"); var d = function (c) { b.slice("select" === c.type) }; C(this, "select", d); C(this, "unselect", d); return this }; d.prototype.isValid = function () { return A(this.y) && 0 <= this.y }; d.prototype.setVisible = function (b, c) {
                        var d = this, h = this.series, f = h.chart, k = h.options.ignoreHiddenPoint; c = u(c, k); b !== this.visible && (this.visible = this.options.visible = b = "undefined" ===
                            typeof b ? !this.visible : b, h.options.data[h.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (c) { if (d[c]) d[c][b ? "show" : "hide"](b) }), this.legendItem && f.legend.colorizeItem(this, b), b || "hover" !== this.state || this.setState(""), k && (h.isDirty = !0), c && f.redraw())
                    }; d.prototype.slice = function (b, c, d) {
                        var h = this.series; r(d, h.chart); u(c, !0); this.sliced = this.options.sliced = F(b) ? b : !this.sliced; h.options.data[h.data.indexOf(this)] = this.options; this.graphic && this.graphic.animate(this.getTranslate());
                        this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                    }; return d
                }(f); c(f.prototype, {
                    connectorShapes: {
                        fixedOffset: function (c, d, b) { var h = d.breakAt; d = d.touchingSliceAt; return [["M", c.x, c.y], b.softConnector ? ["C", c.x + ("left" === c.alignment ? -5 : 5), c.y, 2 * h.x - d.x, 2 * h.y - d.y, h.x, h.y] : ["L", h.x, h.y], ["L", d.x, d.y]] }, straight: function (c, d) { d = d.touchingSliceAt; return [["M", c.x, c.y], ["L", d.x, d.y]] }, crookedLine: function (c, d, b) {
                            d = d.touchingSliceAt; var h = this.series, f = h.center[0], k = h.chart.plotWidth, u = h.chart.plotLeft;
                            h = c.alignment; var y = this.shapeArgs.r; b = n(b.crookDistance, 1); k = "left" === h ? f + y + (k + u - f - y) * (1 - b) : u + (f - y) * b; b = ["L", k, c.y]; f = !0; if ("left" === h ? k > c.x || k < d.x : k < c.x || k > d.x) f = !1; c = [["M", c.x, c.y]]; f && c.push(b); c.push(["L", d.x, d.y]); return c
                        }
                    }
                }); return f
            }); H(f, "Series/Pie/PieSeries.js", [f["Series/CenteredUtilities.js"], f["Series/Column/ColumnSeries.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Series/Pie/PiePoint.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/Symbols.js"],
            f["Core/Utilities.js"]], function (c, f, v, D, r, C, F, A, u) {
                var n = this && this.__extends || function () { var b = function (c, d) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return b(c, d) }; return function (c, d) { function h() { this.constructor = c } b(c, d); c.prototype = null === d ? Object.create(d) : (h.prototype = d.prototype, new h) } }(), k = c.getStartAndEndRadians; v = v.noop; var d = u.clamp, b = u.extend, h = u.fireEvent, p = u.merge, z = u.pick,
                    E = u.relativeLength; u = function (b) {
                        function c() { var c = null !== b && b.apply(this, arguments) || this; c.center = void 0; c.data = void 0; c.maxLabelDistance = void 0; c.options = void 0; c.points = void 0; return c } n(c, b); c.prototype.animate = function (b) { var c = this, d = c.points, h = c.startAngleRad; b || d.forEach(function (a) { var b = a.graphic, d = a.shapeArgs; b && d && (b.attr({ r: z(a.startR, c.center && c.center[3] / 2), start: h, end: h }), b.animate({ r: d.r, start: d.start, end: d.end }, c.options.animation)) }) }; c.prototype.drawEmpty = function () {
                            var b = this.startAngleRad,
                                c = this.endAngleRad, d = this.options; if (0 === this.total && this.center) { var h = this.center[0]; var a = this.center[1]; this.graph || (this.graph = this.chart.renderer.arc(h, a, this.center[1] / 2, 0, b, c).addClass("highcharts-empty-series").add(this.group)); this.graph.attr({ d: A.arc(h, a, this.center[2] / 2, 0, { start: b, end: c, innerR: this.center[3] / 2 }) }); this.chart.styledMode || this.graph.attr({ "stroke-width": d.borderWidth, fill: d.fillColor || "none", stroke: d.color || "#cccccc" }) } else this.graph && (this.graph = this.graph.destroy())
                        };
                        c.prototype.drawPoints = function () { var b = this.chart.renderer; this.points.forEach(function (c) { c.graphic && c.hasNewShapeType() && (c.graphic = c.graphic.destroy()); c.graphic || (c.graphic = b[c.shapeType](c.shapeArgs).add(c.series.group), c.delayedRendering = !0) }) }; c.prototype.generatePoints = function () { b.prototype.generatePoints.call(this); this.updateTotals() }; c.prototype.getX = function (b, c, g) {
                            var h = this.center, a = this.radii ? this.radii[g.index] || 0 : h[2] / 2; b = Math.asin(d((b - h[1]) / (a + g.labelDistance), -1, 1)); return h[0] +
                                (c ? -1 : 1) * Math.cos(b) * (a + g.labelDistance) + (0 < g.labelDistance ? (c ? -1 : 1) * this.options.dataLabels.padding : 0)
                        }; c.prototype.hasData = function () { return !!this.processedXData.length }; c.prototype.redrawPoints = function () {
                            var b = this, c = b.chart, d = c.renderer, h = b.options.shadow, a, f, e, k; this.drawEmpty(); !h || b.shadowGroup || c.styledMode || (b.shadowGroup = d.g("shadow").attr({ zIndex: -1 }).add(b.group)); b.points.forEach(function (g) {
                                var l = {}; f = g.graphic; if (!g.isNull && f) {
                                    var m = void 0; k = g.shapeArgs; a = g.getTranslate(); c.styledMode ||
                                        (m = g.shadowGroup, h && !m && (m = g.shadowGroup = d.g("shadow").add(b.shadowGroup)), m && m.attr(a), e = b.pointAttribs(g, g.selected && "select")); g.delayedRendering ? (f.setRadialReference(b.center).attr(k).attr(a), c.styledMode || f.attr(e).attr({ "stroke-linejoin": "round" }).shadow(h, m), g.delayedRendering = !1) : (f.setRadialReference(b.center), c.styledMode || p(!0, l, e), p(!0, l, k, a), f.animate(l)); f.attr({ visibility: g.visible ? "inherit" : "hidden" }); f.addClass(g.getClassName(), !0)
                                } else f && (g.graphic = f.destroy())
                            })
                        }; c.prototype.sortByAngle =
                            function (b, c) { b.sort(function (b, d) { return "undefined" !== typeof b.angle && (d.angle - b.angle) * c }) }; c.prototype.translate = function (b) {
                                h(this, "translate"); this.generatePoints(); var c = this.options, d = c.slicedOffset, f = d + (c.borderWidth || 0), a = k(c.startAngle, c.endAngle), p = this.startAngleRad = a.start; a = (this.endAngleRad = a.end) - p; var e = this.points, q = c.dataLabels.distance; c = c.ignoreHiddenPoint; var m = e.length, n, t = 0; b || (this.center = b = this.getCenter()); for (n = 0; n < m; n++) {
                                    var y = e[n]; var u = p + t * a; !y.isValid() || c && !y.visible ||
                                        (t += y.percentage / 100); var r = p + t * a; var A = { x: b[0], y: b[1], r: b[2] / 2, innerR: b[3] / 2, start: Math.round(1E3 * u) / 1E3, end: Math.round(1E3 * r) / 1E3 }; y.shapeType = "arc"; y.shapeArgs = A; y.labelDistance = z(y.options.dataLabels && y.options.dataLabels.distance, q); y.labelDistance = E(y.labelDistance, A.r); this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, y.labelDistance); r = (r + u) / 2; r > 1.5 * Math.PI ? r -= 2 * Math.PI : r < -Math.PI / 2 && (r += 2 * Math.PI); y.slicedTranslation = {
                                            translateX: Math.round(Math.cos(r) * d), translateY: Math.round(Math.sin(r) *
                                                d)
                                        }; A = Math.cos(r) * b[2] / 2; var v = Math.sin(r) * b[2] / 2; y.tooltipPos = [b[0] + .7 * A, b[1] + .7 * v]; y.half = r < -Math.PI / 2 || r > Math.PI / 2 ? 1 : 0; y.angle = r; u = Math.min(f, y.labelDistance / 5); y.labelPosition = { natural: { x: b[0] + A + Math.cos(r) * y.labelDistance, y: b[1] + v + Math.sin(r) * y.labelDistance }, "final": {}, alignment: 0 > y.labelDistance ? "center" : y.half ? "right" : "left", connectorPosition: { breakAt: { x: b[0] + A + Math.cos(r) * u, y: b[1] + v + Math.sin(r) * u }, touchingSliceAt: { x: b[0] + A, y: b[1] + v } } }
                                } h(this, "afterTranslate")
                            }; c.prototype.updateTotals = function () {
                                var b =
                                    this.points, c = b.length, d = this.options.ignoreHiddenPoint, h, a = 0; for (h = 0; h < c; h++) { var f = b[h]; !f.isValid() || d && !f.visible || (a += f.y) } this.total = a; for (h = 0; h < c; h++)f = b[h], f.percentage = 0 < a && (f.visible || !d) ? f.y / a * 100 : 0, f.total = a
                            }; c.defaultOptions = p(C.defaultOptions, {
                                center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {
                                    allowOverlap: !0, connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, softConnector: !0,
                                    x: 0
                                }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: .1 } }
                            }); return c
                    }(C); b(u.prototype, {
                        axisTypes: [], directTouch: !0, drawGraph: void 0, drawLegendSymbol: D.drawRectangle, drawTracker: f.prototype.drawTracker, getCenter: c.getCenter, getSymbol: v, isCartesian: !1, noSharedTooltip: !0, pointAttribs: f.prototype.pointAttribs,
                        pointClass: r, requireSorting: !1, searchPoint: v, trackerGroups: ["group", "dataLabelsGroup"]
                    }); F.registerSeriesType("pie", u); ""; return u
            }); H(f, "Series/Pie/PieDataLabel.js", [f["Core/Series/DataLabel.js"], f["Core/Globals.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D, r) {
                var C = f.noop, F = v.distribute, A = D.series, u = r.arrayMax, n = r.clamp, k = r.defined, d = r.merge, b = r.pick, h = r.relativeLength, p; (function (f) {
                    function p() {
                        var c = this, h = c.data, a = c.chart,
                            f = c.options.dataLabels || {}, e = f.connectorPadding, l = a.plotWidth, m = a.plotHeight, p = a.plotLeft, q = Math.round(a.chartWidth / 3), n = c.center, t = n[2] / 2, y = n[1], z = [[], []], r = [0, 0, 0, 0], E = c.dataLabelPositioners, v, C, D, I, H, R, Z, Q, T, S, W, O; c.visible && (f.enabled || c._hasPointLabels) && (h.forEach(function (a) { a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1) }), A.prototype.drawDataLabels.apply(c), h.forEach(function (a) {
                                a.dataLabel &&
                                    (a.visible ? (z[a.half].push(a), a.dataLabel._pos = null, !k(f.style.width) && !k(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > q && (a.dataLabel.css({ width: Math.round(.7 * q) + "px" }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels))
                            }), z.forEach(function (d, g) {
                                var h = d.length, q = [], w; if (h) {
                                    c.sortByAngle(d, g - .5); if (0 < c.maxLabelDistance) {
                                        var x = Math.max(0, y - t - c.maxLabelDistance);
                                        var z = Math.min(y + t + c.maxLabelDistance, a.plotHeight); d.forEach(function (b) { 0 < b.labelDistance && b.dataLabel && (b.top = Math.max(0, y - t - b.labelDistance), b.bottom = Math.min(y + t + b.labelDistance, a.plotHeight), w = b.dataLabel.getBBox().height || 21, b.distributeBox = { target: b.labelPosition.natural.y - b.top + w / 2, size: w, rank: b.y }, q.push(b.distributeBox)) }); x = z + w - x; F(q, x, x / 5)
                                    } for (W = 0; W < h; W++) {
                                        v = d[W]; R = v.labelPosition; I = v.dataLabel; S = !1 === v.visible ? "hidden" : "inherit"; T = x = R.natural.y; q && k(v.distributeBox) && ("undefined" ===
                                            typeof v.distributeBox.pos ? S = "hidden" : (Z = v.distributeBox.size, T = E.radialDistributionY(v))); delete v.positionIndex; if (f.justify) Q = E.justify(v, t, n); else switch (f.alignTo) { case "connectors": Q = E.alignToConnectors(d, g, l, p); break; case "plotEdges": Q = E.alignToPlotEdges(I, g, l, p); break; default: Q = E.radialDistributionX(c, v, T, x) }I._attr = { visibility: S, align: R.alignment }; O = v.options.dataLabels || {}; I._pos = { x: Q + b(O.x, f.x) + ({ left: e, right: -e }[R.alignment] || 0), y: T + b(O.y, f.y) - 10 }; R.final.x = Q; R.final.y = T; b(f.crop, !0) &&
                                                (H = I.getBBox().width, x = null, Q - H < e && 1 === g ? (x = Math.round(H - Q + e), r[3] = Math.max(x, r[3])) : Q + H > l - e && 0 === g && (x = Math.round(Q + H - l + e), r[1] = Math.max(x, r[1])), 0 > T - Z / 2 ? r[0] = Math.max(Math.round(-T + Z / 2), r[0]) : T + Z / 2 > m && (r[2] = Math.max(Math.round(T + Z / 2 - m), r[2])), I.sideOverflow = x)
                                    }
                                }
                            }), 0 === u(r) || this.verifyDataLabelOverflow(r)) && (this.placeDataLabels(), this.points.forEach(function (e) {
                                O = d(f, e.options.dataLabels); if (C = b(O.connectorWidth, 1)) {
                                    var g; D = e.connector; if ((I = e.dataLabel) && I._pos && e.visible && 0 < e.labelDistance) {
                                        S =
                                            I._attr.visibility; if (g = !D) e.connector = D = a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e.colorIndex + (e.className ? " " + e.className : "")).add(c.dataLabelsGroup), a.styledMode || D.attr({ "stroke-width": C, stroke: O.connectorColor || e.color || "#666666" }); D[g ? "attr" : "animate"]({ d: e.getConnectorPath() }); D.attr("visibility", S)
                                    } else D && (e.connector = D.destroy())
                                }
                            }))
                    } function y() {
                        this.points.forEach(function (b) {
                            var c = b.dataLabel, a; c && b.visible && ((a = c._pos) ? (c.sideOverflow && (c._attr.width =
                                Math.max(c.getBBox().width - c.sideOverflow, 0), c.css({ width: c._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), c.shortened = !0), c.attr(c._attr), c[c.moved ? "animate" : "attr"](a), c.moved = !0) : c && c.attr({ y: -9999 })); delete b.distributeBox
                        }, this)
                    } function t(b) {
                        var c = this.center, a = this.options, d = a.center, e = a.minSize || 80, g = null !== a.size; if (!g) {
                            if (null !== d[0]) var f = Math.max(c[2] - Math.max(b[1], b[3]), e); else f = Math.max(c[2] - b[1] - b[3], e), c[0] += (b[3] - b[1]) / 2; null !== d[1] ?
                                f = n(f, e, c[2] - Math.max(b[0], b[2])) : (f = n(f, e, c[2] - b[0] - b[2]), c[1] += (b[0] - b[2]) / 2); f < c[2] ? (c[2] = f, c[3] = Math.min(a.thickness ? Math.max(0, f - 2 * a.thickness) : Math.max(0, h(a.innerSize || 0, f)), f), this.translate(c), this.drawDataLabels && this.drawDataLabels()) : g = !0
                        } return g
                    } var q = [], l = {
                        radialDistributionY: function (b) { return b.top + b.distributeBox.pos }, radialDistributionX: function (b, c, a, d) { return b.getX(a < c.top + 2 || a > c.bottom - 2 ? d : a, c.half, c) }, justify: function (b, c, a) { return a[0] + (b.half ? -1 : 1) * (c + b.labelDistance) }, alignToPlotEdges: function (b,
                            c, a, d) { b = b.getBBox().width; return c ? b + d : a - b - d }, alignToConnectors: function (b, c, a, d) { var e = 0, g; b.forEach(function (a) { g = a.dataLabel.getBBox().width; g > e && (e = g) }); return c ? e + d : a - e - d }
                    }; f.compose = function (b) { c.compose(A); -1 === q.indexOf(b) && (q.push(b), b = b.prototype, b.dataLabelPositioners = l, b.alignDataLabel = C, b.drawDataLabels = p, b.placeDataLabels = y, b.verifyDataLabelOverflow = t) }
                })(p || (p = {})); return p
            }); H(f, "Extensions/OverlappingDataLabels.js", [f["Core/Chart/Chart.js"], f["Core/Utilities.js"]], function (c, f) {
                function v(c,
                    f) { var d = !1; if (c) { var b = c.newOpacity; c.oldOpacity !== b && (c.alignAttr && c.placed ? (c[b ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), d = !0, c.alignAttr.opacity = b, c[c.isOld ? "animate" : "attr"](c.alignAttr, null, function () { f.styledMode || c.css({ pointerEvents: b ? "auto" : "none" }) }), r(f, "afterHideOverlappingLabel")) : c.attr({ opacity: b })); c.isOld = !0 } return d } var D = f.addEvent, r = f.fireEvent, C = f.isArray, F = f.isNumber, A = f.objectEach, u = f.pick; D(c, "render", function () {
                        var c = this, f = []; (this.labelCollectors || []).forEach(function (c) {
                            f =
                                f.concat(c())
                        }); (this.yAxis || []).forEach(function (c) { c.stacking && c.options.stackLabels && !c.options.stackLabels.allowOverlap && A(c.stacking.stacks, function (b) { A(b, function (b) { b.label && f.push(b.label) }) }) }); (this.series || []).forEach(function (d) {
                            var b = d.options.dataLabels; d.visible && (!1 !== b.enabled || d._hasPointLabels) && (b = function (b) {
                                return b.forEach(function (b) {
                                    b.visible && (C(b.dataLabels) ? b.dataLabels : b.dataLabel ? [b.dataLabel] : []).forEach(function (d) {
                                        var h = d.options; d.labelrank = u(h.labelrank, b.labelrank,
                                            b.shapeArgs && b.shapeArgs.height); h.allowOverlap ? (d.oldOpacity = d.opacity, d.newOpacity = 1, v(d, c)) : f.push(d)
                                    })
                                })
                            }, b(d.nodes || []), b(d.points))
                        }); this.hideOverlappingLabels(f)
                    }); c.prototype.hideOverlappingLabels = function (c) {
                        var f = this, d = c.length, b = f.renderer, h, p, n, u = !1; var y = function (c) {
                            var d, h = c.box ? 0 : c.padding || 0, a = d = 0, f; if (c && (!c.alignAttr || c.placed)) {
                                var e = c.alignAttr || { x: c.attr("x"), y: c.attr("y") }; var l = c.parentGroup; c.width || (d = c.getBBox(), c.width = d.width, c.height = d.height, d = b.fontMetrics(null, c.element).h);
                                var k = c.width - 2 * h; (f = { left: "0", center: "0.5", right: "1" }[c.alignValue]) ? a = +f * k : F(c.x) && Math.round(c.x) !== c.translateX && (a = c.x - c.translateX); return { x: e.x + (l.translateX || 0) + h - (a || 0), y: e.y + (l.translateY || 0) + h - d, width: c.width - 2 * h, height: c.height - 2 * h }
                            }
                        }; for (p = 0; p < d; p++)if (h = c[p]) h.oldOpacity = h.opacity, h.newOpacity = 1, h.absoluteBox = y(h); c.sort(function (b, c) { return (c.labelrank || 0) - (b.labelrank || 0) }); for (p = 0; p < d; p++) {
                            var t = (y = c[p]) && y.absoluteBox; for (h = p + 1; h < d; ++h) {
                                var q = (n = c[h]) && n.absoluteBox; !t || !q || y ===
                                    n || 0 === y.newOpacity || 0 === n.newOpacity || "hidden" === y.visibility || "hidden" === n.visibility || q.x >= t.x + t.width || q.x + q.width <= t.x || q.y >= t.y + t.height || q.y + q.height <= t.y || ((y.labelrank < n.labelrank ? y : n).newOpacity = 0)
                            }
                        } c.forEach(function (b) { v(b, f) && (u = !0) }); u && r(f, "afterHideAllOverlappingLabels")
                    }
            }); H(f, "Core/Responsive.js", [f["Core/Utilities.js"]], function (c) {
                var f = c.extend, v = c.find, D = c.isArray, r = c.isObject, C = c.merge, F = c.objectEach, A = c.pick, u = c.splat, n = c.uniqueKey, k; (function (c) {
                    var b = []; c.compose = function (c) {
                        -1 ===
                            b.indexOf(c) && (b.push(c), f(c.prototype, d.prototype)); return c
                    }; var d = function () {
                        function b() { } b.prototype.currentOptions = function (b) {
                            function c(b, h, g, f) { var a; F(b, function (b, e) { if (!f && -1 < d.collectionsWithUpdate.indexOf(e) && h[e]) for (b = u(b), g[e] = [], a = 0; a < Math.max(b.length, h[e].length); a++)h[e][a] && (void 0 === b[a] ? g[e][a] = h[e][a] : (g[e][a] = {}, c(b[a], h[e][a], g[e][a], f + 1))); else r(b) ? (g[e] = D(b) ? [] : {}, c(b, h[e] || {}, g[e], f + 1)) : g[e] = "undefined" === typeof h[e] ? null : h[e] }) } var d = this, h = {}; c(b, this.options, h, 0);
                            return h
                        }; b.prototype.matchResponsiveRule = function (b, c) { var d = b.condition; (d.callback || function () { return this.chartWidth <= A(d.maxWidth, Number.MAX_VALUE) && this.chartHeight <= A(d.maxHeight, Number.MAX_VALUE) && this.chartWidth >= A(d.minWidth, 0) && this.chartHeight >= A(d.minHeight, 0) }).call(this) && c.push(b._id) }; b.prototype.setResponsive = function (b, c) {
                            var d = this, h = this.options.responsive, f = this.currentResponsive, l = []; !c && h && h.rules && h.rules.forEach(function (b) {
                                "undefined" === typeof b._id && (b._id = n()); d.matchResponsiveRule(b,
                                    l)
                            }, this); c = C.apply(void 0, l.map(function (b) { return v((h || {}).rules || [], function (c) { return c._id === b }) }).map(function (b) { return b && b.chartOptions })); c.isResponsiveOptions = !0; l = l.toString() || void 0; l !== (f && f.ruleIds) && (f && this.update(f.undoOptions, b, !0), l ? (f = this.currentOptions(c), f.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: l, mergedOptions: c, undoOptions: f }, this.update(c, b, !0)) : this.currentResponsive = void 0)
                        }; return b
                    }()
                })(k || (k = {})); ""; ""; return k
            }); H(f, "masters/highcharts.src.js", [f["Core/Globals.js"],
            f["Core/Utilities.js"], f["Core/DefaultOptions.js"], f["Core/Animation/Fx.js"], f["Core/Animation/AnimationUtilities.js"], f["Core/Renderer/HTML/AST.js"], f["Core/FormatUtilities.js"], f["Core/Renderer/RendererUtilities.js"], f["Core/Renderer/SVG/SVGElement.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Renderer/HTML/HTMLElement.js"], f["Core/Renderer/HTML/HTMLRenderer.js"], f["Core/Axis/Axis.js"], f["Core/Axis/DateTimeAxis.js"], f["Core/Axis/LogarithmicAxis.js"], f["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
            f["Core/Axis/Tick.js"], f["Core/Tooltip.js"], f["Core/Series/Point.js"], f["Core/Pointer.js"], f["Core/MSPointer.js"], f["Core/Legend/Legend.js"], f["Core/Chart/Chart.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Series/Column/ColumnSeries.js"], f["Series/Column/ColumnDataLabel.js"], f["Series/Pie/PieSeries.js"], f["Series/Pie/PieDataLabel.js"], f["Core/Series/DataLabel.js"], f["Core/Responsive.js"], f["Core/Color/Color.js"], f["Core/Time.js"]], function (c, f, v, D, r, C, F, A, u, n, k, d, b, h, p, z,
                E, y, t, q, l, g, w, a, B, e, G, m, x, J, M, P, L) {
                c.animate = r.animate; c.animObject = r.animObject; c.getDeferredAnimation = r.getDeferredAnimation; c.setAnimation = r.setAnimation; c.stop = r.stop; c.timers = D.timers; c.AST = C; c.Axis = b; c.Chart = w; c.chart = w.chart; c.Fx = D; c.Legend = g; c.PlotLineOrBand = z; c.Point = t; c.Pointer = l.isRequired() ? l : q; c.Series = a; c.SVGElement = u; c.SVGRenderer = n; c.Tick = E; c.Time = L; c.Tooltip = y; c.Color = P; c.color = P.parse; d.compose(n); k.compose(u); c.defaultOptions = v.defaultOptions; c.getOptions = v.getOptions; c.time = v.defaultTime;
                c.setOptions = v.setOptions; c.dateFormat = F.dateFormat; c.format = F.format; c.numberFormat = F.numberFormat; c.addEvent = f.addEvent; c.arrayMax = f.arrayMax; c.arrayMin = f.arrayMin; c.attr = f.attr; c.clearTimeout = f.clearTimeout; c.correctFloat = f.correctFloat; c.createElement = f.createElement; c.css = f.css; c.defined = f.defined; c.destroyObjectProperties = f.destroyObjectProperties; c.discardElement = f.discardElement; c.distribute = A.distribute; c.erase = f.erase; c.error = f.error; c.extend = f.extend; c.extendClass = f.extendClass; c.find =
                    f.find; c.fireEvent = f.fireEvent; c.getMagnitude = f.getMagnitude; c.getStyle = f.getStyle; c.inArray = f.inArray; c.isArray = f.isArray; c.isClass = f.isClass; c.isDOMElement = f.isDOMElement; c.isFunction = f.isFunction; c.isNumber = f.isNumber; c.isObject = f.isObject; c.isString = f.isString; c.keys = f.keys; c.merge = f.merge; c.normalizeTickInterval = f.normalizeTickInterval; c.objectEach = f.objectEach; c.offset = f.offset; c.pad = f.pad; c.pick = f.pick; c.pInt = f.pInt; c.relativeLength = f.relativeLength; c.removeEvent = f.removeEvent; c.seriesType =
                        B.seriesType; c.splat = f.splat; c.stableSort = f.stableSort; c.syncTimeout = f.syncTimeout; c.timeUnits = f.timeUnits; c.uniqueKey = f.uniqueKey; c.useSerialIds = f.useSerialIds; c.wrap = f.wrap; G.compose(e); J.compose(a); h.compose(b); p.compose(b); x.compose(m); z.compose(b); M.compose(w); return c
            }); H(f, "Core/Axis/Color/ColorAxisComposition.js", [f["Core/Color/Color.js"], f["Core/Utilities.js"]], function (c, f) {
                var v = c.parse, D = f.addEvent, r = f.extend, C = f.merge, F = f.pick, A = f.splat, u; (function (c) {
                    function f() {
                        var a = this, b = this.options;
                        this.colorAxis = []; b.colorAxis && (b.colorAxis = A(b.colorAxis), b.colorAxis.forEach(function (b, c) { b.index = c; new w(a, b) }))
                    } function d(a) {
                        var b = this, c = function (c) { c = a.allItems.indexOf(c); -1 !== c && (b.destroyItem(a.allItems[c]), a.allItems.splice(c, 1)) }, d = [], g, h; (this.chart.colorAxis || []).forEach(function (a) {
                            (g = a.options) && g.showInLegend && (g.dataClasses && g.visible ? d = d.concat(a.getDataClassLegendSymbols()) : g.visible && d.push(a), a.series.forEach(function (a) {
                                if (!a.options.showInLegend || g.dataClasses) "point" === a.options.legendType ?
                                    a.points.forEach(function (a) { c(a) }) : c(a)
                            }))
                        }); for (h = d.length; h--;)a.allItems.unshift(d[h])
                    } function b(a) { a.visible && a.item.legendColor && a.item.legendSymbol.attr({ fill: a.item.legendColor }) } function h() { var a = this.chart.colorAxis; a && a.forEach(function (a, b, c) { a.update({}, c) }) } function p() { (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors() } function n() { var a = this.axisTypes; a ? -1 === a.indexOf("colorAxis") && a.push("colorAxis") : this.axisTypes = ["colorAxis"] } function u(a) {
                        var b =
                            this, c = a ? "show" : "hide"; b.visible = b.options.visible = !!a;["graphic", "dataLabel"].forEach(function (a) { if (b[a]) b[a][c]() }); this.series.buildKDTree()
                    } function y() {
                        var a = this, b = this.options.nullColor, c = this.colorAxis, d = this.colorKey; (this.data.length ? this.data : this.points).forEach(function (e) {
                            var g = e.getNestedProperty(d); (g = e.options.color || (e.isNull || null === e.value ? b : c && "undefined" !== typeof g ? c.toColor(g, e) : e.color || a.color)) && e.color !== g && (e.color = g, "point" === a.options.legendType && e.legendItem && a.chart.legend.colorizeItem(e,
                                e.visible))
                        })
                    } function t(a) { var b = a.prototype.createAxis; a.prototype.createAxis = function (a, c) { if ("colorAxis" !== a) return b.apply(this, arguments); var d = new w(this, C(c.axis, { index: this[a].length, isX: !1 })); this.isDirtyLegend = !0; this.axes.forEach(function (a) { a.series = [] }); this.series.forEach(function (a) { a.bindAxes(); a.isDirtyData = !0 }); F(c.redraw, !0) && this.redraw(c.animation); return d } } function q() { this.elem.attr("fill", v(this.start).tweenTo(v(this.end), this.pos), void 0, !0) } function l() {
                        this.elem.attr("stroke",
                            v(this.start).tweenTo(v(this.end), this.pos), void 0, !0)
                    } var g = [], w; c.compose = function (a, c, e, k, m) {
                        w || (w = a); -1 === g.indexOf(c) && (g.push(c), a = c.prototype, a.collectionsWithUpdate.push("colorAxis"), a.collectionsWithInit.colorAxis = [a.addColorAxis], D(c, "afterGetAxes", f), t(c)); -1 === g.indexOf(e) && (g.push(e), c = e.prototype, c.fillSetter = q, c.strokeSetter = l); -1 === g.indexOf(k) && (g.push(k), D(k, "afterGetAllItems", d), D(k, "afterColorizeItem", b), D(k, "afterUpdate", h)); -1 === g.indexOf(m) && (g.push(m), r(m.prototype, {
                            optionalAxis: "colorAxis",
                            translateColors: y
                        }), r(m.prototype.pointClass.prototype, { setVisible: u }), D(m, "afterTranslate", p), D(m, "bindAxes", n))
                    }; c.pointSetVisible = u
                })(u || (u = {})); return u
            }); H(f, "Core/Axis/Color/ColorAxisDefaults.js", [], function () { return { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: { animation: { duration: 50 }, width: .01, color: "#999999" }, labels: { overflow: "justify", rotation: 0 }, minColor: "#e6ebf5", maxColor: "#003399", tickLength: 5, showInLegend: !0 } });
    H(f, "Core/Axis/Color/ColorAxis.js", [f["Core/Axis/Axis.js"], f["Core/Color/Color.js"], f["Core/Axis/Color/ColorAxisComposition.js"], f["Core/Axis/Color/ColorAxisDefaults.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F, A) {
        var u = this && this.__extends || function () {
            var b = function (c, d) {
                b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) {
                    for (var d in c) c.hasOwnProperty(d) &&
                        (b[d] = c[d])
                }; return b(c, d)
            }; return function (c, d) { function h() { this.constructor = c } b(c, d); c.prototype = null === d ? Object.create(d) : (h.prototype = d.prototype, new h) }
        }(), n = f.parse, k = r.noop, d = F.series, b = A.extend, h = A.isNumber, p = A.merge, z = A.pick; f = function (c) {
            function f(b, d) { var h = c.call(this, b, d) || this; h.beforePadding = !1; h.chart = void 0; h.coll = "colorAxis"; h.dataClasses = void 0; h.legendItem = void 0; h.legendItems = void 0; h.name = ""; h.options = void 0; h.stops = void 0; h.visible = !0; h.init(b, d); return h } u(f, c); f.compose =
                function (b, c, d, g) { v.compose(f, b, c, d, g) }; f.prototype.init = function (b, d) { var h = b.options.legend || {}, g = d.layout ? "vertical" !== d.layout : "vertical" !== h.layout, k = d.visible; h = p(f.defaultColorAxisOptions, d, { showEmpty: !1, title: null, visible: h.enabled && !1 !== k }); this.coll = "colorAxis"; this.side = d.side || g ? 2 : 1; this.reversed = d.reversed || !g; this.opposite = !g; c.prototype.init.call(this, b, h); this.userOptions.visible = k; d.dataClasses && this.initDataClasses(d); this.initStops(); this.horiz = g; this.zoomEnabled = !1 }; f.prototype.initDataClasses =
                    function (b) { var c = this.chart, d = this.options, g = b.dataClasses.length, h, a = 0, f = c.options.chart.colorCount; this.dataClasses = h = []; this.legendItems = []; (b.dataClasses || []).forEach(function (b, k) { b = p(b); h.push(b); if (c.styledMode || !b.color) "category" === d.dataClassColor ? (c.styledMode || (k = c.options.colors, f = k.length, b.color = k[a]), b.colorIndex = a, a++, a === f && (a = 0)) : b.color = n(d.minColor).tweenTo(n(d.maxColor), 2 > g ? .5 : k / (g - 1)) }) }; f.prototype.hasData = function () { return !!(this.tickPositions || []).length }; f.prototype.setTickPositions =
                        function () { if (!this.dataClasses) return c.prototype.setTickPositions.call(this) }; f.prototype.initStops = function () { this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]]; this.stops.forEach(function (b) { b.color = n(b[1]) }) }; f.prototype.setOptions = function (b) { c.prototype.setOptions.call(this, b); this.options.crosshair = this.options.marker }; f.prototype.setAxisSize = function () {
                            var b = this.legendSymbol, c = this.chart, d = c.options.legend || {}, g, h; b ? (this.left = d = b.attr("x"), this.top = g = b.attr("y"),
                                this.width = h = b.attr("width"), this.height = b = b.attr("height"), this.right = c.chartWidth - d - h, this.bottom = c.chartHeight - g - b, this.len = this.horiz ? h : b, this.pos = this.horiz ? d : g) : this.len = (this.horiz ? d.symbolWidth : d.symbolHeight) || f.defaultLegendLength
                        }; f.prototype.normalizedValue = function (b) { this.logarithmic && (b = this.logarithmic.log2lin(b)); return 1 - (this.max - b) / (this.max - this.min || 1) }; f.prototype.toColor = function (b, c) {
                            var d = this.dataClasses, g = this.stops, h; if (d) for (h = d.length; h--;) {
                                var a = d[h]; var f = a.from; g =
                                    a.to; if (("undefined" === typeof f || b >= f) && ("undefined" === typeof g || b <= g)) { var e = a.color; c && (c.dataClass = h, c.colorIndex = a.colorIndex); break }
                            } else { b = this.normalizedValue(b); for (h = g.length; h-- && !(b > g[h][0]);); f = g[h] || g[h + 1]; g = g[h + 1] || f; b = 1 - (g[0] - b) / (g[0] - f[0] || 1); e = f.color.tweenTo(g.color, b) } return e
                        }; f.prototype.getOffset = function () {
                            var b = this.legendGroup, d = this.chart.axisOffset[this.side]; if (b) {
                                this.axisParent = b; c.prototype.getOffset.call(this); var h = this.chart.legend; h.allItems.forEach(function (b) {
                                    b instanceof
                                        f && b.drawLegendSymbol(h, b)
                                }); h.render(); this.chart.getMargins(!0); this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width); this.chart.axisOffset[this.side] = d
                            }
                        }; f.prototype.setLegendColor = function () { var b = this.reversed, c = b ? 1 : 0; b = b ? 0 : 1; c = this.horiz ? [c, 0, b, 0] : [0, b, 0, c]; this.legendColor = { linearGradient: { x1: c[0], y1: c[1], x2: c[2], y2: c[3] }, stops: this.stops } }; f.prototype.drawLegendSymbol = function (b, c) {
                            var d = b.padding, g = b.options, h = this.horiz, a = z(g.symbolWidth, h ? f.defaultLegendLength : 12), k = z(g.symbolHeight,
                                h ? 12 : f.defaultLegendLength), e = z(g.labelPadding, h ? 16 : 30); g = z(g.itemDistance, 10); this.setLegendColor(); c.legendSymbol || (c.legendSymbol = this.chart.renderer.rect(0, b.baseline - 11, a, k).attr({ zIndex: 1 }).add(c.legendGroup)); this.legendItemWidth = a + d + (h ? g : this.options.labels.x + this.maxLabelLength); this.legendItemHeight = k + d + (h ? e : 0)
                        }; f.prototype.setState = function (b) { this.series.forEach(function (c) { c.setState(b) }) }; f.prototype.setVisible = function () { }; f.prototype.getSeriesExtremes = function () {
                            var b = this.series,
                                c = b.length, h; this.dataMin = Infinity; for (this.dataMax = -Infinity; c--;) {
                                    var g = b[c]; var f = g.colorKey = z(g.options.colorKey, g.colorKey, g.pointValKey, g.zoneAxis, "y"); var a = g.pointArrayMap; var k = g[f + "Min"] && g[f + "Max"]; if (g[f + "Data"]) var e = g[f + "Data"]; else if (a) { e = []; a = a.indexOf(f); var p = g.yData; if (0 <= a && p) for (h = 0; h < p.length; h++)e.push(z(p[h][a], p[h])) } else e = g.yData; k ? (g.minColorValue = g[f + "Min"], g.maxColorValue = g[f + "Max"]) : (e = d.prototype.getExtremes.call(g, e), g.minColorValue = e.dataMin, g.maxColorValue = e.dataMax);
                                    "undefined" !== typeof g.minColorValue && (this.dataMin = Math.min(this.dataMin, g.minColorValue), this.dataMax = Math.max(this.dataMax, g.maxColorValue)); k || d.prototype.applyExtremes.call(g)
                                }
                        }; f.prototype.drawCrosshair = function (b, d) {
                            var h = d && d.plotX, g = d && d.plotY, f = this.pos, a = this.len; if (d) {
                                var k = this.toPixels(d.getNestedProperty(d.series.colorKey)); k < f ? k = f - 2 : k > f + a && (k = f + a + 2); d.plotX = k; d.plotY = this.len - k; c.prototype.drawCrosshair.call(this, b, d); d.plotX = h; d.plotY = g; this.cross && !this.cross.addedToColorAxis && this.legendGroup &&
                                    (this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup), this.cross.addedToColorAxis = !0, this.chart.styledMode || "object" !== typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color }))
                            }
                        }; f.prototype.getPlotLinePath = function (b) { var d = this.left, f = b.translatedValue, g = this.top; return h(f) ? this.horiz ? [["M", f - 4, g - 6], ["L", f + 4, g - 6], ["L", f, g], ["Z"]] : [["M", d, f], ["L", d - 6, f + 6], ["L", d - 6, f - 6], ["Z"]] : c.prototype.getPlotLinePath.call(this, b) }; f.prototype.update = function (b, d) {
                            var h = this.chart.legend;
                            this.series.forEach(function (b) { b.isDirtyData = !0 }); (b.dataClasses && h.allItems || this.dataClasses) && this.destroyItems(); c.prototype.update.call(this, b, d); this.legendItem && (this.setLegendColor(), h.colorizeItem(this, !0))
                        }; f.prototype.destroyItems = function () { var b = this.chart; this.legendItem ? b.legend.destroyItem(this) : this.legendItems && this.legendItems.forEach(function (c) { b.legend.destroyItem(c) }); b.isDirtyLegend = !0 }; f.prototype.destroy = function () {
                            this.chart.isDirtyLegend = !0; this.destroyItems(); c.prototype.destroy.apply(this,
                                [].slice.call(arguments))
                        }; f.prototype.remove = function (b) { this.destroyItems(); c.prototype.remove.call(this, b) }; f.prototype.getDataClassLegendSymbols = function () {
                            var c = this, d = c.chart, h = c.legendItems, g = d.options.legend, f = g.valueDecimals, a = g.valueSuffix || "", p; h.length || c.dataClasses.forEach(function (e, g) {
                                var l = e.from, n = e.to, q = d.numberFormatter, t = !0; p = ""; "undefined" === typeof l ? p = "< " : "undefined" === typeof n && (p = "> "); "undefined" !== typeof l && (p += q(l, f) + a); "undefined" !== typeof l && "undefined" !== typeof n &&
                                    (p += " - "); "undefined" !== typeof n && (p += q(n, f) + a); h.push(b({ chart: d, name: p, options: {}, drawLegendSymbol: C.drawRectangle, visible: !0, setState: k, isDataClass: !0, setVisible: function () { this.visible = t = c.visible = !t; c.series.forEach(function (a) { a.points.forEach(function (a) { a.dataClass === g && a.setVisible(t) }) }); d.legend.colorizeItem(this, t) } }, e))
                            }); return h
                        }; f.defaultColorAxisOptions = D; f.defaultLegendLength = 200; f.keepProps = ["legendGroup", "legendItemHeight", "legendItemWidth", "legendItem", "legendSymbol"]; return f
        }(c);
        Array.prototype.push.apply(c.keepProps, f.keepProps); ""; return f
    }); H(f, "Maps/MapNavigationOptionsDefault.js", [f["Core/DefaultOptions.js"], f["Core/Utilities.js"]], function (c, f) {
        f = f.extend; var v = {
            buttonOptions: { alignTo: "plotBox", align: "left", verticalAlign: "top", x: 0, width: 18, height: 18, padding: 5, style: { fontSize: "15px", fontWeight: "bold" }, theme: { "stroke-width": 1, "text-align": "center" } }, buttons: {
                zoomIn: { onclick: function () { this.mapZoom(.5) }, text: "+", y: 0 }, zoomOut: {
                    onclick: function () { this.mapZoom(2) }, text: "-",
                    y: 28
                }
            }, mouseWheelSensitivity: 1.1
        }; f(c.defaultOptions.lang, { zoomIn: "Zoom in", zoomOut: "Zoom out" }); return c.defaultOptions.mapNavigation = v
    }); H(f, "Maps/MapNavigation.js", [f["Core/Chart/Chart.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f, v) {
        function D(b) { b && (b.preventDefault && b.preventDefault(), b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0) } function r(b) { this.navButtons = []; this.init(b) } var C = f.doc, F = v.addEvent, A = v.extend, u = v.isNumber, n = v.merge, k = v.objectEach, d = v.pick; r.prototype.init =
            function (b) { this.chart = b }; r.prototype.update = function (b) {
                var c = this, f = this.chart, u = f.options.mapNavigation, r, y = function (b) { this.handler.call(f, b); D(b) }, t = c.navButtons; b && (u = f.options.mapNavigation = n(f.options.mapNavigation, b)); for (; t.length;)t.pop().destroy(); d(u.enableButtons, u.enabled) && !f.renderer.forExport && (c.navButtonsGroup || (c.navButtonsGroup = f.renderer.g().attr({ zIndex: 4 }).add()), k(u.buttons, function (b, d) {
                    b = n(u.buttonOptions, b); !f.styledMode && b.theme && (r = b.theme, r.style = n(b.theme.style, b.style));
                    var g = f.renderer.button(b.text || "", 0, 0, y, r, void 0, void 0, void 0, "zoomIn" === d ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + { zoomIn: "zoom-in", zoomOut: "zoom-out" }[d]).attr({ width: b.width, height: b.height, title: f.options.lang[d], padding: b.padding, zIndex: 5 }).add(c.navButtonsGroup); g.handler = b.onclick; F(g.element, "dblclick", D); t.push(g); A(b, { width: g.width, height: 2 * g.height }); if (f.hasLoaded) g.align(b, !1, b.alignTo); else var h = F(f, "load", function () {
                        g.element && g.align(b, !1, b.alignTo);
                        h()
                    })
                }), b = function () { var b = f.exportingGroup && f.exportingGroup.getBBox(); if (b) { var d = c.navButtonsGroup.getBBox(); if (!(d.x >= b.x + b.width || d.x + d.width <= b.x || d.y >= b.y + b.height || d.y + d.height <= b.y)) { var g = -d.y - d.height + b.y - 5; b = b.y + b.height - d.y + 5; c.navButtonsGroup.attr({ translateY: "bottom" === (u.buttonOptions && u.buttonOptions.verticalAlign) ? g : b }) } } }, f.hasLoaded || F(f, "render", b)); this.updateEvents(u)
            }; r.prototype.updateEvents = function (b) {
                var c = this.chart; d(b.enableDoubleClickZoom, b.enabled) || b.enableDoubleClickZoomTo ?
                    this.unbindDblClick = this.unbindDblClick || F(c.container, "dblclick", function (b) { c.pointer.onContainerDblClick(b) }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick()); d(b.enableMouseWheelZoom, b.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || F(c.container, void 0 !== C.onwheel ? "wheel" : void 0 !== C.onmousewheel ? "mousewheel" : "DOMMouseScroll", function (b) { c.pointer.inClass(b.target, "highcharts-no-mousewheel") || (c.pointer.onContainerMouseWheel(b), D(b)); return !1 }) : this.unbindMouseWheel && (this.unbindMouseWheel =
                        this.unbindMouseWheel())
            }; A(c.prototype, { fitToBox: function (b, c) { [["x", "width"], ["y", "height"]].forEach(function (d) { var h = d[0]; d = d[1]; b[h] + b[d] > c[h] + c[d] && (b[d] > c[d] ? (b[d] = c[d], b[h] = c[h]) : b[h] = c[h] + c[d] - b[d]); b[d] > c[d] && (b[d] = c[d]); b[h] < c[h] && (b[h] = c[h]) }); return b }, mapZoom: function (b, c, d, f, k) { this.mapView && (u(b) && (b = Math.log(b) / Math.log(.5)), this.mapView.zoomBy(b, u(c) && u(d) ? this.mapView.projection.inverse([c, d]) : void 0, u(f) && u(k) ? [f, k] : void 0)) } }); F(c, "beforeRender", function () {
                this.mapNavigation =
                    new r(this); this.mapNavigation.update()
            }); f.MapNavigation = r
    }); H(f, "Maps/MapPointer.js", [f["Core/Pointer.js"], f["Core/Utilities.js"]], function (c, f) {
        var v = f.defined, D = f.extend, r = f.pick; f = f.wrap; var C = c.prototype.normalize, F = 0, A; D(c.prototype, {
            normalize: function (c, f) { var k = this.chart; c = C.call(this, c, f); k && k.mapView && (f = k.mapView.pixelsToLonLat({ x: c.chartX - k.plotLeft, y: c.chartY - k.plotTop })) && D(c, f); return c }, onContainerDblClick: function (c) {
                var f = this.chart; c = this.normalize(c); f.options.mapNavigation.enableDoubleClickZoomTo ?
                    f.pointer.inClass(c.target, "highcharts-tracker") && f.hoverPoint && f.hoverPoint.zoomTo() : f.isInsidePlot(c.chartX - f.plotLeft, c.chartY - f.plotTop) && f.mapZoom(.5, void 0, void 0, c.chartX, c.chartY)
            }, onContainerMouseWheel: function (c) {
                var f = this.chart; c = this.normalize(c); var k = v(c.wheelDelta) && -c.wheelDelta / 120 || c.deltaY || c.detail; 1 <= Math.abs(k) && (F += Math.abs(k), A && clearTimeout(A), A = setTimeout(function () { F = 0 }, 50)); 10 > F && f.isInsidePlot(c.chartX - f.plotLeft, c.chartY - f.plotTop) && f.mapView && f.mapView.zoomBy((f.options.mapNavigation.mouseWheelSensitivity -
                    1) * -k, void 0, [c.chartX, c.chartY], 1 > Math.abs(k) ? !1 : void 0)
            }
        }); f(c.prototype, "zoomOption", function (c) { var f = this.chart.options.mapNavigation; r(f.enableTouchZoom, f.enabled) && (this.chart.options.chart.pinchType = "xy"); c.apply(this, [].slice.call(arguments, 1)) }); f(c.prototype, "pinchTranslate", function (c, f, k, d, b, h, p) { c.call(this, f, k, d, b, h, p); "map" === this.chart.options.chart.type && this.hasZoom && (c = d.scaleX > d.scaleY, this.pinchTranslateDirection(!c, f, k, d, b, h, p, c ? d.scaleX : d.scaleY)) })
    }); H(f, "Series/ColorMapComposition.js",
        [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f) {
            var v = c.seriesTypes.column.prototype, D = f.addEvent, r = f.defined, C; (function (c) {
                function f(c) { this.moveToTopOnHover && this.graphic && this.graphic.attr({ zIndex: c && "hover" === c.state ? 1 : 0 }) } var u = []; c.pointMembers = { dataLabelOnNull: !0, moveToTopOnHover: !0, isValid: function () { return null !== this.value && Infinity !== this.value && -Infinity !== this.value && (void 0 === this.value || !isNaN(this.value)) } }; c.seriesMembers = {
                    colorKey: "value", axisTypes: ["xAxis",
                        "yAxis", "colorAxis"], parallelArrays: ["x", "y", "value"], pointArrayMap: ["value"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], colorAttribs: function (c) { var f = {}; !r(c.color) || c.state && "normal" !== c.state || (f[this.colorProp || "fill"] = c.color); return f }, pointAttribs: v.pointAttribs
                }; c.compose = function (c) { var k = c.prototype.pointClass; -1 === u.indexOf(k) && (u.push(k), D(k, "afterSetState", f)); return c }
            })(C || (C = {})); return C
        }); H(f, "Maps/MapSymbols.js", [f["Core/Renderer/SVG/SVGRenderer.js"]], function (c) {
            function f(c,
                f, r, C, F, A, u, n) { return [["M", c + F, f], ["L", c + r - A, f], ["C", c + r - A / 2, f, c + r, f + A / 2, c + r, f + A], ["L", c + r, f + C - u], ["C", c + r, f + C - u / 2, c + r - u / 2, f + C, c + r - u, f + C], ["L", c + n, f + C], ["C", c + n / 2, f + C, c, f + C - n / 2, c, f + C - n], ["L", c, f + F], ["C", c, f + F / 2, c + F / 2, f, c + F, f], ["Z"]] } c = c.prototype.symbols; c.bottombutton = function (c, D, r, C, F) { F = F && F.r || 0; return f(c - 1, D - 1, r, C, 0, 0, F, F) }; c.topbutton = function (c, D, r, C, F) { F = F && F.r || 0; return f(c - 1, D - 1, r, C, F, F, 0, 0) }; return c
        }); H(f, "Core/Chart/MapChart.js", [f["Core/Chart/Chart.js"], f["Core/DefaultOptions.js"],
        f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
            var r = this && this.__extends || function () { var c = function (f, k) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, b) { c.__proto__ = b } || function (c, b) { for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]) }; return c(f, k) }; return function (f, k) { function d() { this.constructor = f } c(f, k); f.prototype = null === k ? Object.create(k) : (d.prototype = k.prototype, new d) } }(), C = f.getOptions, F = D.merge, A = D.pick; c = function (c) {
                function f() {
                    return null !==
                        c && c.apply(this, arguments) || this
                } r(f, c); f.prototype.init = function (f, d) { var b = C().credits; f = F({ chart: { panning: { enabled: !0, type: "xy" }, type: "map" }, credits: { mapText: A(b.mapText, ' \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'), mapTextFull: A(b.mapTextFull, "{geojson.copyright}") }, mapView: {}, tooltip: { followTouchMove: !1 } }, f); c.prototype.init.call(this, f, d) }; return f
            }(c); (function (c) {
                c.maps = {}; c.mapChart = function (f, k, d) { return new c(f, k, d) }; c.splitPath = function (c) {
                    "string" === typeof c &&
                        (c = c.replace(/([A-Za-z])/g, " $1 ").replace(/^\s*/, "").replace(/\s*$/, ""), c = c.split(/[ ,;]+/).map(function (c) { return /[A-za-z]/.test(c) ? c : parseFloat(c) })); return v.prototype.pathToSegments(c)
                }
            })(c || (c = {})); return c
        }); H(f, "Maps/MapUtilities.js", [], function () {
            return {
                boundsFromPath: function (c) {
                    var f = -Number.MAX_VALUE, v = Number.MAX_VALUE, D = -Number.MAX_VALUE, r = Number.MAX_VALUE, C; c.forEach(function (c) {
                        var A = c[c.length - 2]; c = c[c.length - 1]; "number" === typeof A && "number" === typeof c && (v = Math.min(v, A), f = Math.max(f,
                            A), r = Math.min(r, c), D = Math.max(D, c), C = !0)
                    }); if (C) return { x1: v, y1: r, x2: f, y2: D }
                }, pointInPolygon: function (c, f) { var v, D = !1, r = c.x, C = c.y; c = 0; for (v = f.length - 1; c < f.length; v = c++) { var F = f[c][1] > C; var A = f[v][1] > C; F !== A && r < (f[v][0] - f[c][0]) * (C - f[c][1]) / (f[v][1] - f[c][1]) + f[c][0] && (D = !D) } return D }
            }
        }); H(f, "Series/Map/MapPoint.js", [f["Series/ColorMapComposition.js"], f["Maps/MapUtilities.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
            var r = this && this.__extends || function () {
                var c = function (f,
                    d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return c(f, d) }; return function (f, d) { function b() { this.constructor = f } c(f, d); f.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) }
            }(), C = f.boundsFromPath, F = D.extend, A = D.isNumber, u = D.pick; f = function (c) {
                function f() { var d = null !== c && c.apply(this, arguments) || this; d.options = void 0; d.path = void 0; d.series = void 0; return d } r(f, c); f.getProjectedPath =
                    function (c, b) { c.projectedPath || (b && c.geometry ? (b.hasCoordinates = !0, c.projectedPath = b.path(c.geometry)) : c.projectedPath = c.path); return c.projectedPath || [] }; f.prototype.applyOptions = function (d, b) { var f = this.series; d = c.prototype.applyOptions.call(this, d, b); b = f.joinBy; f.mapData && f.mapMap && (b = c.prototype.getNestedProperty.call(d, b[1]), (f = "undefined" !== typeof b && f.mapMap[b]) ? F(d, f) : d.value = d.value || null); return d }; f.prototype.getProjectedBounds = function (c) {
                        c = f.getProjectedPath(this, c); c = C(c); var b = this.properties;
                        if (c) { var d = b && b["hc-middle-x"]; b = b && b["hc-middle-y"]; c.midX = c.x1 + (c.x2 - c.x1) * u(this.middleX, A(d) ? d : .5); d = u(this.middleY, A(b) ? b : .5); this.geometry || (d = 1 - d); c.midY = c.y2 - (c.y2 - c.y1) * d; return c }
                    }; f.prototype.onMouseOver = function (d) { D.clearTimeout(this.colorInterval); if (!this.isNull || this.series.options.nullInteraction) c.prototype.onMouseOver.call(this, d); else this.series.onMouseOut(d) }; f.prototype.zoomTo = function () {
                        var c = this.series.chart; c.mapView && this.bounds && (c.mapView.fitToBounds(this.bounds, void 0,
                            !1), this.series.isDirty = !0, c.redraw())
                    }; return f
            }(v.seriesTypes.scatter.prototype.pointClass); F(f.prototype, { dataLabelOnNull: c.pointMembers.dataLabelOnNull, moveToTopOnHover: c.pointMembers.moveToTopOnHover, isValid: c.pointMembers.isValid }); return f
        }); H(f, "Maps/MapViewOptionsDefault.js", [], function () { return { center: [0, 0], maxZoom: void 0, padding: 0, projection: { name: void 0, parallels: void 0, rotation: void 0 }, zoom: void 0 } }); H(f, "Maps/MapViewInsetsOptionsDefault.js", [], function () {
            return {
                borderColor: "#cccccc",
                borderWidth: 1, center: [0, 0], padding: "10%", relativeTo: "mapBoundingBox", units: "percent"
            }
        }); H(f, "Extensions/GeoJSON.js", [f["Core/Chart/Chart.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
            function r(c, b) {
                b || (b = Object.keys(c.objects)[0]); b = c.objects[b]; if (b["hc-decoded-geojson"]) return b["hc-decoded-geojson"]; var d = c.arcs; if (c.transform) {
                    var f = c.transform, k = f.scale, n = f.translate; d = c.arcs.map(function (b) {
                        var c = 0, d = 0; return b.map(function (b) {
                            b = b.slice();
                            b[0] = (c += b[0]) * k[0] + n[0]; b[1] = (d += b[1]) * k[1] + n[1]; return b
                        })
                    })
                } var r = function (b) { return "number" === typeof b[0] ? b.reduce(function (b, c, f) { var g = 0 > c ? d[~c] : d[c]; 0 > c ? (g = g.slice(0, 0 === f ? g.length : g.length - 1), g.reverse()) : f && (g = g.slice(1)); return b.concat(g) }, []) : b.map(r) }; f = b.geometries.map(function (b) { return { type: "Feature", properties: b.properties, geometry: { type: b.type, coordinates: b.coordinates || r(b.arcs) } } }); c = {
                    type: "FeatureCollection", copyright: c.copyright, copyrightShort: c.copyrightShort, copyrightUrl: c.copyrightUrl,
                    features: f, "hc-recommended-mapview": b["hc-recommended-mapview"], bbox: c.bbox, title: c.title
                }; return b["hc-decoded-geojson"] = c
            } function C(c, b, f) {
                void 0 === b && (b = "map"); var d = []; c = "Topology" === c.type ? r(c) : c; c.features.forEach(function (c) {
                    var f = c.geometry || {}, h = f.type; f = f.coordinates; c = c.properties; var k; "map" !== b && "mapbubble" !== b || "Polygon" !== h && "MultiPolygon" !== h ? "mapline" !== b || "LineString" !== h && "MultiLineString" !== h ? "mappoint" === b && "Point" === h && f.length && (k = { geometry: { coordinates: f, type: h } }) : f.length &&
                        (k = { geometry: { coordinates: f, type: h } }) : f.length && (k = { geometry: { coordinates: f, type: h } }); k && (h = c && (c.name || c.NAME), d.push(n(k, { name: "string" === typeof h ? h : void 0, properties: c })))
                }); f && c.copyrightShort && (f.chart.mapCredits = F(f.chart.options.credits.mapText, { geojson: c }), f.chart.mapCreditsFull = F(f.chart.options.credits.mapTextFull, { geojson: c })); return d
            } var F = f.format, A = v.win, u = D.error, n = D.extend, k = D.merge; f = D.wrap; ""; c.prototype.transformFromLatLon = function (c, b) {
                var d = this.options.chart.proj4 || A.proj4;
                if (d) { var f = b.jsonmarginX; f = void 0 === f ? 0 : f; var k = b.jsonmarginY; k = void 0 === k ? 0 : k; var n = b.jsonres; n = void 0 === n ? 1 : n; var r = b.scale; r = void 0 === r ? 1 : r; var t = b.xoffset; t = void 0 === t ? 0 : t; var q = b.xpan; q = void 0 === q ? 0 : q; var l = b.yoffset; l = void 0 === l ? 0 : l; var g = b.ypan; g = void 0 === g ? 0 : g; c = d(b.crs, [c.lon, c.lat]); d = b.cosAngle || b.rotation && Math.cos(b.rotation); var w = b.sinAngle || b.rotation && Math.sin(b.rotation); b = b.rotation ? [c[0] * d + c[1] * w, -c[0] * w + c[1] * d] : c; return { x: ((b[0] - t) * r + q) * n + f, y: -(((l - b[1]) * r + g) * n - k) } } u(21, !1, this)
            };
            c.prototype.transformToLatLon = function (c, b) {
                var d = this.options.chart.proj4 || A.proj4; if (!d) u(21, !1, this); else if (null !== c.y) {
                    var f = b.jsonmarginX, k = b.jsonmarginY, n = b.jsonres; n = void 0 === n ? 1 : n; var r = b.scale; r = void 0 === r ? 1 : r; var t = b.xoffset, q = b.xpan, l = b.yoffset, g = b.ypan; c = { x: ((c.x - (void 0 === f ? 0 : f)) / n - (void 0 === q ? 0 : q)) / r + (void 0 === t ? 0 : t), y: ((c.y - (void 0 === k ? 0 : k)) / n + (void 0 === g ? 0 : g)) / r + (void 0 === l ? 0 : l) }; f = b.cosAngle || b.rotation && Math.cos(b.rotation); k = b.sinAngle || b.rotation && Math.sin(b.rotation); b = d(b.crs,
                        "WGS84", b.rotation ? { x: c.x * f + c.y * -k, y: c.x * k + c.y * f } : c); return { lat: b.y, lon: b.x }
                }
            }; c.prototype.fromPointToLatLon = function (c) { return this.mapView && this.mapView.projectedUnitsToLonLat(c) }; c.prototype.fromLatLonToPoint = function (c) { return this.mapView && this.mapView.lonLatToProjectedUnits(c) }; f(c.prototype, "addCredits", function (c, b) { b = k(!0, this.options.credits, b); this.mapCredits && (b.href = null); c.call(this, b); this.credits && this.mapCreditsFull && this.credits.attr({ title: this.mapCreditsFull }) }); v.geojson = C; return {
                geojson: C,
                topo2geo: r
            }
        }); H(f, "Core/Geometry/PolygonClip.js", [], function () {
            var c = function (c, f, C) { return (f[0] - c[0]) * (C[1] - c[1]) > (f[1] - c[1]) * (C[0] - c[0]) }, f = function (c, f, C, v) { var r = [c[0] - f[0], c[1] - f[1]], u = [C[0] - v[0], C[1] - v[1]]; c = c[0] * f[1] - c[1] * f[0]; C = C[0] * v[1] - C[1] * v[0]; v = 1 / (r[0] * u[1] - r[1] * u[0]); r = [(c * u[0] - C * r[0]) * v, (c * u[1] - C * r[1]) * v]; r.isIntersection = !0; return r }, v; (function (v) {
                v.clipLineString = function (c, f) {
                    var r = []; c = v.clipPolygon(c, f, !1); for (f = 1; f < c.length; f++)c[f].isIntersection && c[f - 1].isIntersection && (r.push(c.splice(0,
                        f)), f = 0), f === c.length - 1 && r.push(c); return r
                }; v.clipPolygon = function (r, v, D) { void 0 === D && (D = !0); for (var A = v[v.length - 1], u, n, k = r, d = 0; d < v.length; d++) { var b = k; r = v[d]; k = []; u = D ? b[b.length - 1] : b[0]; for (var h = 0; h < b.length; h++)n = b[h], c(A, r, n) ? (c(A, r, u) || k.push(f(A, r, u, n)), k.push(n)) : c(A, r, u) && k.push(f(A, r, u, n)), u = n; A = r } return k }
            })(v || (v = {})); return v
        }); H(f, "Maps/Projections/LambertConformalConic.js", [], function () {
            var c = Math.sign || function (c) { return 0 === c ? 0 : 0 < c ? 1 : -1 }, f = Math.PI / 180, v = Math.PI / 2; return function () {
                function D(r) {
                    var C,
                        D = (r.parallels || []).map(function (c) { return c * f }), A = D[0] || 0; D = null !== (C = D[1]) && void 0 !== C ? C : A; C = Math.cos(A); "object" === typeof r.projectedBounds && (this.projectedBounds = r.projectedBounds); r = A === D ? Math.sin(A) : Math.log(C / Math.cos(D)) / Math.log(Math.tan((v + D) / 2) / Math.tan((v + A) / 2)); 1e-10 > Math.abs(r) && (r = 1e-10 * (c(r) || 1)); this.n = r; this.c = C * Math.pow(Math.tan((v + A) / 2), r) / r
                } D.prototype.forward = function (c) {
                    var r = c[0] * f, D = this.c, A = this.n, u = this.projectedBounds; c = c[1] * f; 0 < D ? c < -v + .000001 && (c = -v + .000001) : c > v - .000001 &&
                        (c = v - .000001); var n = D / Math.pow(Math.tan((v + c) / 2), A); c = n * Math.sin(A * r) * 63.78137; r = 63.78137 * (D - n * Math.cos(A * r)); D = [c, r]; u && (c < u.x1 || c > u.x2 || r < u.y1 || r > u.y2) && (D.outside = !0); return D
                }; D.prototype.inverse = function (r) { var C = r[0] / 63.78137, D = this.c, A = this.n; r = D - r[1] / 63.78137; var u = c(A) * Math.sqrt(C * C + r * r), n = Math.atan2(C, Math.abs(r)) * c(r); 0 > r * A && (n -= Math.PI * c(C) * c(r)); return [n / A / f, (2 * Math.atan(Math.pow(D / u, 1 / A)) - v) / f] }; return D
            }()
        }); H(f, "Maps/Projections/EqualEarth.js", [], function () {
            var c = Math.sqrt(3) / 2; return function () {
                function f() {
                    this.bounds =
                        { x1: -200.37508342789243, x2: 200.37508342789243, y1: -97.52595454902263, y2: 97.52595454902263 }
                } f.prototype.forward = function (f) { var v = Math.PI / 180, r = Math.asin(c * Math.sin(f[1] * v)), C = r * r, F = C * C * C; return [f[0] * v * Math.cos(r) * 74.03120656864502 / (c * (1.340264 + 3 * -.081106 * C + F * (7 * .000893 + .034164 * C))), 74.03120656864502 * r * (1.340264 + -.081106 * C + F * (.000893 + .003796 * C))] }; f.prototype.inverse = function (f) {
                    var v = f[0] / 74.03120656864502; f = f[1] / 74.03120656864502; var r = 180 / Math.PI, C = f, F; for (F = 0; 12 > F; ++F) {
                        var A = C * C; var u = A * A * A; var n =
                            C * (1.340264 + -.081106 * A + u * (.000893 + .003796 * A)) - f; A = 1.340264 + 3 * -.081106 * A + u * (7 * .000893 + .034164 * A); C -= n /= A; if (1e-9 > Math.abs(n)) break
                    } A = C * C; return [r * c * v * (1.340264 + 3 * -.081106 * A + A * A * A * (7 * .000893 + .034164 * A)) / Math.cos(C), r * Math.asin(Math.sin(C) / c)]
                }; return f
            }()
        }); H(f, "Maps/Projections/Miller.js", [], function () {
            var c = Math.PI / 4, f = Math.PI / 180; return function () {
                function v() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -146.91480769173063, y2: 146.91480769173063 } } v.prototype.forward = function (v) {
                    return [v[0] *
                        f * 63.78137, 79.7267125 * Math.log(Math.tan(c + .4 * v[1] * f))]
                }; v.prototype.inverse = function (v) { return [v[0] / 63.78137 / f, 2.5 * (Math.atan(Math.exp(v[1] / 63.78137 * .8)) - c) / f] }; return v
            }()
        }); H(f, "Maps/Projections/Orthographic.js", [], function () {
            var c = Math.PI / 180; return function () {
                function f() { this.antimeridianCutting = !1; this.bounds = { x1: -63.78460826781007, x2: 63.78460826781007, y1: -63.78460826781007, y2: 63.78460826781007 } } f.prototype.forward = function (f) {
                    var v = f[0]; f = f[1] * c; f = [Math.cos(f) * Math.sin(v * c) * 63.78460826781007,
                    63.78460826781007 * Math.sin(f)]; if (-90 > v || 90 < v) f.outside = !0; return f
                }; f.prototype.inverse = function (f) { var v = f[0] / 63.78460826781007; f = f[1] / 63.78460826781007; var r = Math.sqrt(v * v + f * f), C = Math.asin(r), F = Math.sin(C); return [Math.atan2(v * F, r * Math.cos(C)) / c, Math.asin(r && f * F / r) / c] }; return f
            }()
        }); H(f, "Maps/Projections/WebMercator.js", [], function () {
            var c = Math.PI / 180; return function () {
                function f() {
                    this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -200.3750834278071, y2: 200.3750834278071 }; this.maxLatitude =
                        85.0511287798
                } f.prototype.forward = function (f) { var v = Math.sin(f[1] * c); v = [63.78137 * f[0] * c, 63.78137 * Math.log((1 + v) / (1 - v)) / 2]; 85.0511287798 < Math.abs(f[1]) && (v.outside = !0); return v }; f.prototype.inverse = function (f) { return [f[0] / (63.78137 * c), (2 * Math.atan(Math.exp(f[1] / 63.78137)) - Math.PI / 2) / c] }; return f
            }()
        }); H(f, "Maps/Projections/ProjectionRegistry.js", [f["Maps/Projections/LambertConformalConic.js"], f["Maps/Projections/EqualEarth.js"], f["Maps/Projections/Miller.js"], f["Maps/Projections/Orthographic.js"], f["Maps/Projections/WebMercator.js"]],
            function (c, f, v, D, r) { return { EqualEarth: f, LambertConformalConic: c, Miller: v, Orthographic: D, WebMercator: r } }); H(f, "Maps/Projection.js", [f["Core/Geometry/PolygonClip.js"], f["Maps/Projections/ProjectionRegistry.js"], f["Core/Utilities.js"]], function (c, f, v) {
                var D = this && this.__spreadArray || function (c, d, b) { if (b || 2 === arguments.length) for (var f = 0, k = d.length, n; f < k; f++)!n && f in d || (n || (n = Array.prototype.slice.call(d, 0, f)), n[f] = d[f]); return c.concat(n || Array.prototype.slice.call(d)) }, r = c.clipLineString, C = c.clipPolygon,
                    F = v.clamp, A = v.erase, u = 2 * Math.PI / 360, n = function (c) { -180 > c && (c += 360); 180 < c && (c -= 360); return c }; return function () {
                        function c(d) {
                            void 0 === d && (d = {}); this.hasGeoProjection = this.hasCoordinates = !1; this.maxLatitude = 90; this.options = d; var b = d.name, f = d.projectedBounds, k = d.rotation; this.rotator = k ? this.getRotator(k) : void 0; if (b = b ? c.registry[b] : void 0) this.def = new b(d); var n = this.def, r = this.rotator; n && (this.maxLatitude = n.maxLatitude || 90, this.hasGeoProjection = !0); r && n ? (this.forward = function (b) { return n.forward(r.forward(b)) },
                                this.inverse = function (b) { return r.inverse(n.inverse(b)) }) : n ? (this.forward = function (b) { return n.forward(b) }, this.inverse = function (b) { return n.inverse(b) }) : r && (this.forward = r.forward, this.inverse = r.inverse); this.bounds = "world" === f ? n && n.bounds : f
                        } c.add = function (d, b) { c.registry[d] = b }; c.greatCircle = function (c, b, f) {
                            var d = Math.atan2, h = Math.cos, k = Math.sin, n = Math.sqrt, t = c[1] * u, q = c[0] * u, l = b[1] * u, g = b[0] * u, r = l - t, a = g - q; r = k(r / 2) * k(r / 2) + h(t) * h(l) * k(a / 2) * k(a / 2); r = 2 * d(n(r), n(1 - r)); var B = Math.round(6371E3 * r / 5E5); a =
                                []; f && a.push(c); if (1 < B) for (B = c = 1 / B; .999 > B; B += c) { var e = k((1 - B) * r) / k(r), v = k(B * r) / k(r), m = e * h(t) * h(q) + v * h(l) * h(g), x = e * h(t) * k(q) + v * h(l) * k(g); e = e * k(t) + v * k(l); e = d(e, n(m * m + x * x)); m = d(x, m); a.push([m / u, e / u]) } f && a.push(b); return a
                        }; c.insertGreatCircles = function (d) { for (var b = d.length - 1; b--;)if (10 < Math.max(Math.abs(d[b][0] - d[b + 1][0]), Math.abs(d[b][1] - d[b + 1][1]))) { var f = c.greatCircle(d[b], d[b + 1]); f.length && d.splice.apply(d, D([b + 1, 0], f, !1)) } }; c.toString = function (c) { c = c || {}; var b = c.rotation; return [c.name, b && b.join(",")].join(";") };
                        c.prototype.lineIntersectsBounds = function (c) { var b = this.bounds || {}, d = b.x2, f = b.y1, k = b.y2, n = function (b, c, d) { var f = b[0]; b = b[1]; var h = c ? 0 : 1; if ("number" === typeof d && f[c] >= d !== b[c] >= d) return f = f[h] + (d - f[c]) / (b[c] - f[c]) * (b[h] - f[h]), c ? [f, d] : [d, f] }, r = c[0]; if (b = n(c, 0, b.x1)) r = b, c[1] = b; else if (b = n(c, 0, d)) r = b, c[1] = b; if (b = n(c, 1, f)) r = b; else if (b = n(c, 1, k)) r = b; return r }; c.prototype.getRotator = function (c) {
                            var b = c[0] * u, d = (c[1] || 0) * u; c = (c[2] || 0) * u; var f = Math.cos(d), k = Math.sin(d), n = Math.cos(c), r = Math.sin(c); if (0 !== b ||
                                0 !== d || 0 !== c) return { forward: function (c) { var d = c[0] * u + b, h = c[1] * u, g = Math.cos(h); c = Math.cos(d) * g; d = Math.sin(d) * g; h = Math.sin(h); g = h * f + c * k; return [Math.atan2(d * n - g * r, c * f - h * k) / u, Math.asin(g * n + d * r) / u] }, inverse: function (c) { var d = c[0] * u, h = c[1] * u, g = Math.cos(h); c = Math.cos(d) * g; d = Math.sin(d) * g; h = Math.sin(h); g = h * n - d * r; return [(Math.atan2(d * n + h * r, c * f + g * k) - b) / u, Math.asin(g * f - c * k) / u] } }
                        }; c.prototype.forward = function (c) { return c }; c.prototype.inverse = function (c) { return c }; c.prototype.cutOnAntimeridian = function (d, b) {
                            var f =
                                [], k = [d]; d.forEach(function (a, c) { var e = d[c - 1]; if (!c) { if (!b) return; e = d[d.length - 1] } var g = e[0], h = a[0]; (-90 > g || 90 < g) && (-90 > h || 90 < h) && 0 < g !== 0 < h && (h = F((180 - (g + 360) % 360) / ((h + 360) % 360 - (g + 360) % 360), 0, 1), f.push({ i: c, lat: e[1] + h * (a[1] - e[1]), direction: 0 > g ? 1 : -1, previousLonLat: e, lonLat: a })) }); if (f.length) if (b) {
                                    if (1 === f.length % 2) { var r = f.slice().sort(function (a, b) { return Math.abs(b.lat) - Math.abs(a.lat) })[0]; A(f, r) } for (var u = f.length - 2; 0 <= u;) {
                                        var y = f[u].i, t = n(180 + .000001 * f[u].direction), q = n(180 - .000001 * f[u].direction);
                                        y = d.splice.apply(d, D([y, f[u + 1].i - y], c.greatCircle([t, f[u].lat], [t, f[u + 1].lat], !0), !1)); y.push.apply(y, c.greatCircle([q, f[u + 1].lat], [q, f[u].lat], !0)); k.push(y); u -= 2
                                    } if (r) for (t = 0; t < k.length; t++) { u = r.direction; var l = r.lat; q = k[t]; y = q.indexOf(r.lonLat); if (-1 < y) { t = (0 > l ? -1 : 1) * this.maxLatitude; var g = n(180 + .000001 * u), w = n(180 - .000001 * u); l = c.greatCircle([g, l], [g, t], !0); for (g += 120 * u; -180 < g && 180 > g; g += 120 * u)l.push([g, t]); l.push.apply(l, c.greatCircle([w, t], [w, r.lat], !0)); q.splice.apply(q, D([y, 0], l, !1)); break } }
                                } else for (u =
                                    f.length; u--;)y = f[u].i, y = d.splice(y, d.length, [n(180 + .000001 * f[u].direction), f[u].lat]), y.unshift([n(180 - .000001 * f[u].direction), f[u].lat]), k.push(y); return k
                        }; c.prototype.path = function (d) {
                            var b = this, f = this.bounds, k = this.def, n = this.rotator, u = [], y = "Polygon" === d.type || "MultiPolygon" === d.type, t = this.hasGeoProjection, q = !k || !1 !== k.antimeridianCutting, l = q ? n : void 0, g = q ? k || this : this, w; f && (w = [[f.x1, f.y1], [f.x2, f.y1], [f.x2, f.y2], [f.x1, f.y2]]); var a = function (a) {
                                a = a.map(function (a) {
                                    if (q) {
                                        l && (a = l.forward(a)); var b =
                                            a[0]; .000001 > Math.abs(b - 180) && (b = 180 > b ? 179.999999 : 180.000001); a = [b, a[1]]
                                    } return a
                                }); var d = [a]; t && (c.insertGreatCircles(a), q && (d = b.cutOnAntimeridian(a, y))); d.forEach(function (a) {
                                    if (!(2 > a.length)) {
                                        var b = !1, d = !1, e = function (a) { b ? u.push(["L", a[0], a[1]]) : (u.push(["M", a[0], a[1]]), b = !0) }, h = !1, k = !1, l = a.map(function (a) { a = g.forward(a); a.outside ? h = !0 : k = !0; Infinity === a[1] ? a[1] = 1E10 : -Infinity === a[1] && (a[1] = -1E10); return a }); if (q) {
                                            y && l.push(l[0]); if (h) {
                                                if (!k) return; if (w) if (y) l = C(l, w); else if (f) {
                                                    r(l, w).forEach(function (a) {
                                                        b =
                                                            !1; a.forEach(e)
                                                    }); return
                                                }
                                            } l.forEach(e)
                                        } else for (var p = 0; p < l.length; p++) { var n = a[p], z = l[p]; if (z.outside) d = !0; else { if (y && !B) { var B = n; a.push(n); l.push(z) } d && v && (y && t ? c.greatCircle(v, n).forEach(function (a) { return e(g.forward(a)) }) : b = !1); e(z); var v = n; d = !1 } }
                                    }
                                })
                            }; "LineString" === d.type ? a(d.coordinates) : "MultiLineString" === d.type ? d.coordinates.forEach(function (b) { return a(b) }) : "Polygon" === d.type ? (d.coordinates.forEach(function (b) { return a(b) }), u.length && u.push(["Z"])) : "MultiPolygon" === d.type && (d.coordinates.forEach(function (b) { b.forEach(function (b) { return a(b) }) }),
                                u.length && u.push(["Z"])); return u
                        }; c.registry = f; return c
                    }()
            }); H(f, "Maps/MapView.js", [f["Maps/MapViewOptionsDefault.js"], f["Maps/MapViewInsetsOptionsDefault.js"], f["Extensions/GeoJSON.js"], f["Core/Chart/MapChart.js"], f["Maps/MapUtilities.js"], f["Maps/Projection.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F) {
                var A = this && this.__extends || function () {
                    var a = function (b, c) {
                        a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) {
                            for (var c in b) b.hasOwnProperty(c) &&
                                (a[c] = b[c])
                        }; return a(b, c)
                    }; return function (b, c) { function d() { this.constructor = b } a(b, c); b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) }
                }(), u = this && this.__spreadArray || function (a, b, c) { if (c || 2 === arguments.length) for (var d = 0, e = b.length, f; d < e; d++)!f && d in b || (f || (f = Array.prototype.slice.call(b, 0, d)), f[d] = b[d]); return a.concat(f || Array.prototype.slice.call(b)) }, n = v.topo2geo, k = D.maps, d = r.boundsFromPath, b = r.pointInPolygon, h = F.addEvent, p = F.clamp, z = F.fireEvent, E = F.isArray, y = F.isNumber,
                    t = F.isObject, q = F.isString, l = F.merge, g = F.pick, w = F.relativeLength, a = function (a, b) { return Math.log(400.979322 / Math.max((a.x2 - a.x1) / (b.width / 256), (a.y2 - a.y1) / (b.height / 256))) / Math.log(2) }, B = function () {
                        function d(a, b) {
                            var f = this; this.insets = []; this.padding = [0, 0, 0, 0]; this.eventsToUnbind = []; var g; if (!(this instanceof e)) {
                                var k = u([a.options.chart.map], (a.options.series || []).map(function (a) { return a.mapData }), !0).map(function (a) { return f.getGeoMap(a) }), m = []; k.forEach(function (a) {
                                    a && (g || (g = a["hc-recommended-mapview"]),
                                        a.bbox && (a = a.bbox, m.push({ x1: a[0], y1: a[1], x2: a[2], y2: a[3] })))
                                }); var p = m.length && d.compositeBounds(m); if (p) { var n = p.x1; var q = p.y1, t = p.x2; p = p.y2; n = 180 < t - n && 90 < p - q ? { name: "EqualEarth" } : { name: "LambertConformalConic", parallels: [q, p], rotation: [-(n + t) / 2] } } this.geoMap = k[0]
                            } this.userOptions = b || {}; k = l(c, { projection: n }, g, b); p = g && g.insets; b = b && b.insets; p && b && (k.insets = d.mergeInsets(p, b)); this.chart = a; this.center = k.center; this.options = k; this.projection = new C(k.projection); this.playingField = a.plotBox; this.zoom =
                                k.zoom || 0; this.createInsets(); this.eventsToUnbind.push(h(a, "afterSetChartSize", function () { f.playingField = f.getField(); if (void 0 === f.minZoom || f.minZoom === f.zoom) f.fitToBounds(void 0, void 0, !1), !f.chart.hasRendered && y(f.userOptions.zoom) && (f.zoom = f.userOptions.zoom), f.userOptions.center && l(!0, f.center, f.userOptions.center) })); this.setUpEvents()
                        } d.mergeInsets = function (a, b) { var c = function (a) { var b = {}; a.forEach(function (a, c) { b[a && a.id || "i".concat(c)] = a }); return b }, d = l(c(a), c(b)); return Object.keys(d).map(function (a) { return d[a] }) };
                        d.prototype.createInsets = function () { var a = this, b = this.options, c = b.insets; c && c.forEach(function (c) { c = new e(a, l(b.insetOptions, c)); a.insets.push(c) }) }; d.prototype.fitToBounds = function (b, c, d, e) {
                            void 0 === d && (d = !0); var f = b || this.getProjectedBounds(); if (f) {
                                var h = g(c, b ? 0 : this.options.padding); c = this.getField(!1); h = E(h) ? h : [h, h, h, h]; this.padding = [w(h[0], c.height), w(h[1], c.width), w(h[2], c.height), w(h[3], c.width)]; this.playingField = this.getField(); c = a(f, this.playingField); b || (this.minZoom = c); b = this.projection.inverse([(f.x2 +
                                    f.x1) / 2, (f.y2 + f.y1) / 2]); this.setView(b, c, d, e)
                            }
                        }; d.prototype.getField = function (a) { void 0 === a && (a = !0); a = a ? this.padding : [0, 0, 0, 0]; return { x: a[3], y: a[0], width: this.chart.plotWidth - a[1] - a[3], height: this.chart.plotHeight - a[0] - a[2] } }; d.prototype.getGeoMap = function (a) { if (q(a)) return k[a]; if (t(a, !0)) { if ("FeatureCollection" === a.type) return a; if ("Topology" === a.type) return n(a) } }; d.prototype.getMapBBox = function () {
                            var a = this.getProjectedBounds(), b = this.getScale(); if (a) {
                                var c = this.padding, d = this.projectedUnitsToPixels({
                                    x: a.x1,
                                    y: a.y2
                                }); return { width: (a.x2 - a.x1) * b + c[1] + c[3], height: (a.y2 - a.y1) * b + c[0] + c[2], x: d.x - c[3], y: d.y - c[0] }
                            }
                        }; d.prototype.getProjectedBounds = function () { var a = this.chart.series.reduce(function (a, b) { var c = b.getProjectedBounds && b.getProjectedBounds(); c && !1 !== b.options.affectsMapView && a.push(c); return a }, []); return this.projection.bounds || d.compositeBounds(a) }; d.prototype.getScale = function () { return 256 / 400.979322 * Math.pow(2, this.zoom) }; d.prototype.getSVGTransform = function () {
                            var a = this.playingField, b = a.x, c = a.y,
                                d = a.width; a = a.height; var e = this.projection.forward(this.center), f = this.projection.hasCoordinates ? -1 : 1, g = this.getScale(); f *= g; return { scaleX: g, scaleY: f, translateX: b + d / 2 - e[0] * g, translateY: c + a / 2 - e[1] * f }
                        }; d.prototype.lonLatToPixels = function (a) { if (a = this.lonLatToProjectedUnits(a)) return this.projectedUnitsToPixels(a) }; d.prototype.lonLatToProjectedUnits = function (a) {
                            var c = this.chart, d = c.mapTransforms; if (d) {
                                for (var e in d) if (Object.hasOwnProperty.call(d, e) && d[e].hitZone) {
                                    var f = c.transformFromLatLon(a, d[e]);
                                    if (f && b(f, d[e].hitZone.coordinates[0])) return f
                                } return c.transformFromLatLon(a, d["default"])
                            } d = 0; for (e = this.insets; d < e.length; d++)if (c = e[d], c.options.geoBounds && b({ x: a.lon, y: a.lat }, c.options.geoBounds.coordinates[0])) return a = c.projection.forward([a.lon, a.lat]), a = c.projectedUnitsToPixels({ x: a[0], y: a[1] }), this.pixelsToProjectedUnits(a); a = this.projection.forward([a.lon, a.lat]); if (!a.outside) return { x: a[0], y: a[1] }
                        }; d.prototype.projectedUnitsToLonLat = function (a) {
                            var c = this.chart, d = c.mapTransforms; if (d) {
                                for (var e in d) if (Object.hasOwnProperty.call(d,
                                    e) && d[e].hitZone && b(a, d[e].hitZone.coordinates[0])) return c.transformToLatLon(a, d[e]); return c.transformToLatLon(a, d["default"])
                            } d = this.projectedUnitsToPixels(a); e = 0; for (var f = this.insets; e < f.length; e++)if (c = f[e], c.hitZone && b(d, c.hitZone.coordinates[0])) return a = c.pixelsToProjectedUnits(d), a = c.projection.inverse([a.x, a.y]), { lon: a[0], lat: a[1] }; a = this.projection.inverse([a.x, a.y]); return { lon: a[0], lat: a[1] }
                        }; d.prototype.redraw = function (a) {
                            this.chart.series.forEach(function (a) {
                                a.useMapGeometry && (a.isDirty =
                                    !0)
                            }); this.chart.redraw(a)
                        }; d.prototype.setView = function (a, b, c, d) {
                            void 0 === c && (c = !0); a && (this.center = a); "number" === typeof b && ("number" === typeof this.minZoom && (b = Math.max(b, this.minZoom)), "number" === typeof this.options.maxZoom && (b = Math.min(b, this.options.maxZoom)), y(b) && (this.zoom = b)); var e = this.getProjectedBounds(); if (e) {
                                a = this.projection.forward(this.center); var f = this.playingField; b = f.x; var g = f.y, h = f.width; f = f.height; var k = this.getScale(), l = this.projectedUnitsToPixels({ x: e.x1, y: e.y1 }), m = this.projectedUnitsToPixels({
                                    x: e.x2,
                                    y: e.y2
                                }); e = [(e.x1 + e.x2) / 2, (e.y1 + e.y2) / 2]; var p = l.x, n = m.y; m = m.x; l = l.y; m - p < h ? a[0] = e[0] : p < b && m < b + h ? a[0] += Math.max(p - b, m - h - b) / k : m > b + h && p > b && (a[0] += Math.min(m - h - b, p - b) / k); l - n < f ? a[1] = e[1] : n < g && l < g + f ? a[1] -= Math.max(n - g, l - f - g) / k : l > g + f && n > g && (a[1] -= Math.min(l - f - g, n - g) / k); this.center = this.projection.inverse(a); this.insets.forEach(function (a) { a.options.field && (a.hitZone = a.getHitZone(), a.playingField = a.getField()) }); this.render()
                            } z(this, "afterSetView"); c && this.redraw(d)
                        }; d.prototype.projectedUnitsToPixels = function (a) {
                            var b =
                                this.getScale(), c = this.projection.forward(this.center), d = this.playingField; return { x: d.x + d.width / 2 - b * (c[0] - a.x), y: d.y + d.height / 2 + b * (c[1] - a.y) }
                        }; d.prototype.pixelsToLonLat = function (a) { return this.projectedUnitsToLonLat(this.pixelsToProjectedUnits(a)) }; d.prototype.pixelsToProjectedUnits = function (a) { var b = a.x; a = a.y; var c = this.getScale(), d = this.projection.forward(this.center), e = this.playingField; return { x: d[0] + (b - (e.x + e.width / 2)) / c, y: d[1] - (a - (e.y + e.height / 2)) / c } }; d.prototype.setUpEvents = function () {
                            var b =
                                this, c = this.chart, d, e, f, g = function (g) {
                                    var h = c.pointer.pinchDown, k = b.projection, l = c.mouseDownX, m = c.mouseDownY; 1 === h.length && (l = h[0].chartX, m = h[0].chartY); if ("number" === typeof l && "number" === typeof m) {
                                        var n = "" + l + ",".concat(m), q = g.originalEvent; h = q.chartX; q = q.chartY; n !== e && (e = n, d = b.projection.forward(b.center), f = (b.projection.options.rotation || [0, 0]).slice()); n = (n = k.def && k.def.bounds) && a(n, b.playingField) || -Infinity; "Orthographic" === k.options.name && (b.minZoom || Infinity) < 1.1 * n ? (k = 440 / (b.getScale() * Math.min(c.plotWidth,
                                            c.plotHeight)), f && (l = (l - h) * k - f[0], m = p(-f[1] - (m - q) * k, -80, 80), h = b.zoom, b.update({ projection: { rotation: [-l, -m] } }, !1), b.zoom = h, c.redraw(!1))) : (k = b.getScale(), m = b.projection.inverse([d[0] + (l - h) / k, d[1] - (m - q) / k]), b.setView(m, void 0, !0, !1)); g.preventDefault()
                                    }
                                }; h(c, "pan", g); h(c, "touchpan", g); h(c, "selection", function (a) {
                                    if (a.resetSelection) b.zoomBy(); else {
                                        var d = a.x - c.plotLeft, e = a.y - c.plotTop, f = b.pixelsToProjectedUnits({ x: d, y: e }), g = f.y; f = f.x; d = b.pixelsToProjectedUnits({ x: d + a.width, y: e + a.height }); b.fitToBounds({
                                            x1: f,
                                            y1: g, x2: d.x, y2: d.y
                                        }, void 0, !0, a.originalEvent.touches ? !1 : void 0); /^touch/.test(a.originalEvent.type) || c.showResetZoom(); a.preventDefault()
                                    }
                                })
                        }; d.prototype.render = function () { this.group || (this.group = this.chart.renderer.g("map-view").attr({ zIndex: 4 }).add()) }; d.prototype.update = function (a, b, c) {
                            void 0 === b && (b = !0); var d = a.projection; d = d && C.toString(d) !== C.toString(this.options.projection); var e = !1; l(!0, this.userOptions, a); l(!0, this.options, a); "insets" in a && (this.insets.forEach(function (a) { return a.destroy() }),
                                this.insets.length = 0, e = !0); if (d || e) this.chart.series.forEach(function (a) { var b = a.transformGroups; a.clearBounds && a.clearBounds(); a.isDirty = !0; a.isDirtyData = !0; if (e && b) for (; 1 < b.length;)(a = b.pop()) && a.destroy() }), d && (this.projection = new C(this.options.projection)), e && this.createInsets(), a.center || y(a.zoom) || this.fitToBounds(void 0, void 0, !1); (a.center || y(a.zoom)) && this.setView(this.options.center, a.zoom, !1); b && this.chart.redraw(c)
                        }; d.prototype.zoomBy = function (a, b, c, d) {
                            var e = this.chart, f = this.projection.forward(this.center);
                            b = b ? this.projection.forward(b) : []; var g = b[0], h = b[1]; "number" === typeof a ? (a = this.zoom + a, b = void 0, c && (g = c[0], h = c[1], c = this.getScale(), g = g - e.plotLeft - e.plotWidth / 2, e = h - e.plotTop - e.plotHeight / 2, g = f[0] + g / c, h = f[1] + e / c), "number" === typeof g && "number" === typeof h && (c = 1 - Math.pow(2, this.zoom) / Math.pow(2, a), g = f[0] - g, e = f[1] - h, f[0] -= g * c, f[1] += e * c, b = this.projection.inverse(f)), this.setView(b, a, void 0, d)) : this.fitToBounds(void 0, void 0, void 0, d)
                        }; d.compositeBounds = function (a) {
                            if (a.length) return a.slice(1).reduce(function (a,
                                b) { a.x1 = Math.min(a.x1, b.x1); a.y1 = Math.min(a.y1, b.y1); a.x2 = Math.max(a.x2, b.x2); a.y2 = Math.max(a.y2, b.y2); return a }, l(a[0]))
                        }; return d
                    }(), e = function (a) {
                        function c(b, c) { var e = a.call(this, b.chart, c) || this; e.id = c.id; e.mapView = b; e.options = l(f, c); e.allBounds = []; e.options.geoBounds && (b = b.projection.path(e.options.geoBounds), e.geoBoundsProjectedBox = d(b), e.geoBoundsProjectedPolygon = b.map(function (a) { return [a[1] || 0, a[2] || 0] })); return e } A(c, a); c.prototype.getField = function (b) {
                            void 0 === b && (b = !0); var c = this.hitZone;
                            if (c) { var d = b ? this.padding : [0, 0, 0, 0]; c = c.coordinates[0]; var e = c.map(function (a) { return a[0] }), f = c.map(function (a) { return a[1] }); c = Math.min.apply(0, e) + d[3]; e = Math.max.apply(0, e) - d[1]; var g = Math.min.apply(0, f) + d[0]; d = Math.max.apply(0, f) - d[2]; if (y(c) && y(g)) return { x: c, y: g, width: e - c, height: d - g } } return a.prototype.getField.call(this, b)
                        }; c.prototype.getHitZone = function () {
                            var a = this.chart, b = this.mapView, c = this.options, d = (c.field || {}).coordinates; if (d) {
                                d = d[0]; if ("percent" === c.units) {
                                    var e = "mapBoundingBox" ===
                                        c.relativeTo && b.getMapBBox() || l(a.plotBox, { x: 0, y: 0 }); d = d.map(function (a) { return [w("" + a[0] + "%", e.width, e.x), w("" + a[1] + "%", e.height, e.y)] })
                                } return { type: "Polygon", coordinates: [d] }
                            }
                        }; c.prototype.getProjectedBounds = function () { return B.compositeBounds(this.allBounds) }; c.prototype.isInside = function (a) { var c = this.geoBoundsProjectedBox, d = this.geoBoundsProjectedPolygon; return !!(c && a.x >= c.x1 && a.x <= c.x2 && a.y >= c.y1 && a.y <= c.y2 && d && b(a, d)) }; c.prototype.render = function () {
                            var a = this.chart, b = this.mapView, c = this.options,
                                d = c.borderPath || c.field; if (d && b.group) {
                                    var e = !0; this.border || (this.border = a.renderer.path().addClass("highcharts-mapview-inset-border").add(b.group), e = !1); a.styledMode || this.border.attr({ stroke: c.borderColor, "stroke-width": c.borderWidth }); var f = Math.round(this.border.strokeWidth()) % 2 / 2, g = "mapBoundingBox" === c.relativeTo && b.getMapBBox() || b.playingField; b = (d.coordinates || []).reduce(function (b, d) {
                                        return d.reduce(function (b, d, e) {
                                            var h = d[0]; d = d[1]; "percent" === c.units && (h = a.plotLeft + w("" + h + "%", g.width, g.x),
                                                d = a.plotTop + w("" + d + "%", g.height, g.y)); h = Math.floor(h) + f; d = Math.floor(d) + f; b.push(0 === e ? ["M", h, d] : ["L", h, d]); return b
                                        }, b)
                                    }, []); this.border[e ? "animate" : "attr"]({ d: b })
                                }
                        }; c.prototype.destroy = function () { this.border && (this.border = this.border.destroy()); this.eventsToUnbind.forEach(function (a) { return a() }) }; c.prototype.setUpEvents = function () { }; return c
                    }(B); h(D, "afterInit", function () { this.mapView = new B(this, this.options.mapView) }); return B
            }); H(f, "Series/Map/MapSeries.js", [f["Core/Animation/AnimationUtilities.js"],
            f["Series/ColorMapComposition.js"], f["Series/CenteredUtilities.js"], f["Core/Globals.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Chart/MapChart.js"], f["Series/Map/MapPoint.js"], f["Maps/MapView.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F, A, u, n, k, d) {
                var b = this && this.__extends || function () {
                    var a = function (b, c) {
                        a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } ||
                            function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return a(b, c)
                    }; return function (b, c) { function d() { this.constructor = b } a(b, c); b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) }
                }(), h = c.animObject; c = D.noop; var p = C.splitPath; C = n.seriesTypes; var z = C.column, E = C.scatter; C = d.extend; var y = d.find, t = d.fireEvent, q = d.getNestedProperty, l = d.isArray, g = d.isNumber, w = d.isObject, a = d.merge, B = d.objectEach, e = d.pick, G = d.splat; d = function (c) {
                    function d() {
                        var a = null !== c && c.apply(this, arguments) ||
                            this; a.chart = void 0; a.data = void 0; a.group = void 0; a.joinBy = void 0; a.options = void 0; a.points = void 0; a.processedData = []; return a
                    } b(d, c); d.prototype.animate = function (a) { var b = this.chart, c = this.group, d = h(this.options.animation); b.renderer.isSVG && (a ? c.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .001, scaleY: .001 }) : c.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1 }, d)) }; d.prototype.animateDrilldown = function (a) {
                        var b = this.chart, c = this.group; b.renderer.isSVG &&
                            (a ? c.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .1, scaleY: .1, opacity: .01 }) : (c.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1, opacity: 1 }, this.chart.options.drilldown.animation), b.drilldown && b.drilldown.fadeInGroup(this.dataLabelsGroup)))
                    }; d.prototype.animateDrillupFrom = function () { var a = this.chart; a.renderer.isSVG && this.group.animate({ translateX: a.plotLeft + a.plotWidth / 2, translateY: a.plotTop + a.plotHeight / 2, scaleX: .1, scaleY: .1, opacity: .01 }) };
                    d.prototype.animateDrillupTo = function (a) { z.prototype.animateDrillupTo.call(this, a) }; d.prototype.clearBounds = function () { this.points.forEach(function (a) { delete a.bounds; delete a.insetIndex; delete a.projectedPath }); delete this.bounds }; d.prototype.doFullTranslate = function () { return !(!(this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML) && this.hasRendered) }; d.prototype.drawMapDataLabels = function () { u.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) };
                    d.prototype.drawPoints = function () {
                        var a = this, b = this, c = this.chart, d = this.group, f = this.transformGroups, g = void 0 === f ? [] : f, h = c.mapView, k = c.renderer; h && (this.transformGroups = g, g[0] || (g[0] = k.g().add(d)), h.insets.forEach(function (a, b) { g[b + 1] || g.push(k.g().add(d)) }), this.doFullTranslate() && (this.points.forEach(function (b) {
                            var d = b.graphic, e = b.shapeArgs; b.group = g["number" === typeof b.insetIndex ? b.insetIndex + 1 : 0]; d && d.parentGroup !== b.group && d.add(b.group); e && c.hasRendered && !c.styledMode && (e.fill = a.pointAttribs(b,
                                b.state).fill)
                        }), z.prototype.drawPoints.apply(this), this.points.forEach(function (d) {
                            var f = d.graphic; if (f) {
                                var g = f.animate, h = ""; d.name && (h += "highcharts-name-" + d.name.replace(/ /g, "-").toLowerCase()); d.properties && d.properties["hc-key"] && (h += " highcharts-key-" + d.properties["hc-key"].toString().toLowerCase()); h && f.addClass(h); c.styledMode && f.css(a.pointAttribs(d, d.selected && "select" || void 0)); f.animate = function (a, d, h) {
                                    var k = !1; if (a["stroke-width"]) {
                                        var l = e(b.getStrokeWidth(b.options), 1) / (c.mapView &&
                                            c.mapView.getScale() || 1); "inherit" === f["stroke-width"] && (f["stroke-width"] = l); "inherit" === a["stroke-width"] && (a["stroke-width"] = l, k = !0)
                                    } return g.call(f, a, d, k ? function () { f.attr({ "stroke-width": "inherit" }); h && h.apply(this, arguments) } : h)
                                }
                            }
                        })), g.forEach(function (b, d) {
                            var f = (0 === d ? h : h.insets[d - 1]).getSVGTransform(), g = e(a.getStrokeWidth(a.options), 1), l = f.scaleX, m = 0 < f.scaleY ? 1 : -1; if (k.globalAnimation && c.hasRendered) {
                                var p = Number(b.attr("translateX")), n = Number(b.attr("translateY")), q = Number(b.attr("scaleX"));
                                b.attr({ animator: 0 }).animate({ animator: 1 }, { step: function (a, c) { a = q + (l - q) * c.pos; b.attr({ translateX: p + (f.translateX - p) * c.pos, translateY: n + (f.translateY - n) * c.pos, scaleX: a, scaleY: a * m }); b.element.setAttribute("stroke-width", g / a) } })
                            } else b.attr(f), b.element.setAttribute("stroke-width", g / l)
                        }), this.drawMapDataLabels())
                    }; d.prototype.getProjectedBounds = function () {
                        if (!this.bounds && this.chart.mapView) {
                            var a = this.chart.mapView, b = a.insets, c = a.projection, d = []; (this.points || []).forEach(function (a) {
                                if (a.path || a.geometry) {
                                    "string" ===
                                        typeof a.path ? a.path = p(a.path) : l(a.path) && "M" === a.path[0] && (a.path = k.prototype.pathToSegments(a.path)); if (!a.bounds) { var f = a.getProjectedBounds(c); if (f) { a.labelrank = e(a.labelrank, (f.x2 - f.x1) * (f.y2 - f.y1)); var h = f.midX, m = f.midY; if (b && g(h) && g(m)) { var n = y(b, function (a) { return a.isInside({ x: h, y: m }) }); n && (delete a.projectedPath, (f = a.getProjectedBounds(n.projection)) && n.allBounds.push(f), a.insetIndex = b.indexOf(n)) } a.bounds = f } } a.bounds && void 0 === a.insetIndex && d.push(a.bounds)
                                }
                            }); this.bounds = A.compositeBounds(d)
                        } return this.bounds
                    };
                    d.prototype.getStrokeWidth = function (a) { var b = this.pointAttrToOptions; return a[b && b["stroke-width"] || "borderWidth"] }; d.prototype.hasData = function () { return !!this.processedXData.length }; d.prototype.pointAttribs = function (b, c) {
                        var d = b.series.chart, f = d.mapView; d = d.styledMode ? this.colorAttribs(b) : z.prototype.pointAttribs.call(this, b, c); var h = this.getStrokeWidth(b.options); c && (b = a(this.options.states[c], b.options.states && b.options.states[c] || {}), h = this.getStrokeWidth(b)); h && f && (h /= f.getScale()); b = this.getStrokeWidth(this.options);
                        d.dashstyle && f && g(b) && (h = b / f.getScale()); d["stroke-width"] = e(h, "inherit"); return d
                    }; d.prototype.updateData = function () { return this.processedData ? !1 : c.prototype.updateData.apply(this, arguments) }; d.prototype.setData = function (a, b, d, e) { void 0 === b && (b = !0); delete this.bounds; c.prototype.setData.call(this, a, !1, void 0, e); this.processData(); this.generatePoints(); b && this.chart.redraw(d) }; d.prototype.processData = function () {
                        var b = this.options, c = b.data, d = this.chart.options.chart, e = this.joinBy, f = b.keys || this.pointArrayMap,
                            h = [], k = {}, m = this.chart.mapView; m = m && (w(b.mapData, !0) ? m.getGeoMap(b.mapData) : m.geoMap); var p = this.chart.mapTransforms; (this.chart.mapTransforms = p = d.mapTransforms || m && m["hc-transform"] || p) && B(p, function (a) { a.rotation && (a.cosAngle = Math.cos(a.rotation), a.sinAngle = Math.sin(a.rotation)) }); if (l(b.mapData)) var n = b.mapData; else m && "FeatureCollection" === m.type && (this.mapTitle = m.title, n = D.geojson(m, this.type, this)); var t = this.processedData = []; c && c.forEach(function (a, d) {
                                var h = 0; if (g(a)) t[d] = { value: a }; else if (l(a)) {
                                    t[d] =
                                        {}; !b.keys && a.length > f.length && "string" === typeof a[0] && (t[d]["hc-key"] = a[0], ++h); for (var k = 0; k < f.length; ++k, ++h)f[k] && "undefined" !== typeof a[h] && (0 < f[k].indexOf(".") ? F.prototype.setNestedProperty(t[d], a[h], f[k]) : t[d][f[k]] = a[h])
                                } else t[d] = c[d]; e && "_i" === e[0] && (t[d]._i = d)
                            }); if (n) {
                                this.mapData = n; this.mapMap = {}; for (p = 0; p < n.length; p++)d = n[p], m = d.properties, d._i = p, e[0] && m && m[e[0]] && (d[e[0]] = m[e[0]]), k[d[e[0]]] = d; this.mapMap = k; if (e[1]) { var r = e[1]; t.forEach(function (a) { a = q(r, a); k[a] && h.push(k[a]) }) } if (b.allAreas) {
                                    if (e[1]) {
                                        var u =
                                            e[1]; t.forEach(function (a) { h.push(q(u, a)) })
                                    } var y = "|" + h.map(function (a) { return a && a[e[0]] }).join("|") + "|"; n.forEach(function (b) { e[0] && -1 !== y.indexOf("|" + b[e[0]] + "|") || t.push(a(b, { value: null })) })
                                }
                            } this.processedXData = Array(t.length)
                    }; d.prototype.setOptions = function (a) { a = u.prototype.setOptions.call(this, a); var b = a.joinBy; null === b && (b = "_i"); b = this.joinBy = G(b); b[1] || (b[1] = b[0]); return a }; d.prototype.translate = function () {
                        var a = this.doFullTranslate(), b = this.chart.mapView, c = b && b.projection; !this.chart.hasRendered ||
                            !this.isDirtyData && this.hasRendered || (this.processData(), this.generatePoints(), delete this.bounds, !b || b.userOptions.center || g(b.userOptions.zoom) ? this.getProjectedBounds() : b.fitToBounds(void 0, void 0, !1)); if (b) {
                                var d = b.getSVGTransform(); this.points.forEach(function (e) {
                                    var f = g(e.insetIndex) && b.insets[e.insetIndex].getSVGTransform() || d; f && e.bounds && g(e.bounds.midX) && g(e.bounds.midY) && (e.plotX = e.bounds.midX * f.scaleX + f.translateX, e.plotY = e.bounds.midY * f.scaleY + f.translateY); a && (e.shapeType = "path", e.shapeArgs =
                                        { d: F.getProjectedPath(e, c) })
                                })
                            } t(this, "afterTranslate")
                    }; d.defaultOptions = a(E.defaultOptions, {
                        affectsMapView: !0, animation: !1, dataLabels: { crop: !1, formatter: function () { var a = this.series.chart.numberFormatter, b = this.point.value; return g(b) ? a(b, -1) : "" }, inside: !0, overflow: !1, padding: 0, verticalAlign: "middle" }, marker: null, nullColor: "#f7f7f7", stickyTracking: !1, tooltip: { followPointer: !0, pointFormat: "{point.name}: {point.value}<br/>" }, turboThreshold: 0, allAreas: !0, borderColor: "#cccccc", borderWidth: 1, joinBy: "hc-key",
                        states: { hover: { halo: null, brightness: .2 }, normal: { animation: !0 }, select: { color: "#cccccc" }, inactive: { opacity: 1 } }
                    }); return d
                }(E); C(d.prototype, {
                    type: "map", axisTypes: f.seriesMembers.axisTypes, colorAttribs: f.seriesMembers.colorAttribs, colorKey: f.seriesMembers.colorKey, directTouch: !0, drawDataLabels: c, drawGraph: c, drawLegendSymbol: r.drawRectangle, forceDL: !0, getCenter: v.getCenter, getExtremesFromAll: !0, getSymbol: c, isCartesian: !1, parallelArrays: f.seriesMembers.parallelArrays, pointArrayMap: f.seriesMembers.pointArrayMap,
                    pointClass: F, preserveAspectRatio: !0, searchPoint: c, trackerGroups: f.seriesMembers.trackerGroups, useMapGeometry: !0
                }); f.compose(d); n.registerSeriesType("map", d); ""; return d
            }); H(f, "Series/MapLine/MapLineSeries.js", [f["Series/Map/MapSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v) {
                var D = this && this.__extends || function () {
                    var c = function (f, n) {
                        c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, d) { c.__proto__ = d } || function (c, d) {
                            for (var b in d) d.hasOwnProperty(b) &&
                                (c[b] = d[b])
                        }; return c(f, n)
                    }; return function (f, n) { function k() { this.constructor = f } c(f, n); f.prototype = null === n ? Object.create(n) : (k.prototype = n.prototype, new k) }
                }(), r = f.series, C = v.extend, F = v.merge; v = function (f) {
                    function r() { var c = null !== f && f.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; return c } D(r, f); r.prototype.pointAttribs = function (f, k) { f = c.prototype.pointAttribs.call(this, f, k); f.fill = this.options.fillColor; return f }; r.defaultOptions = F(c.defaultOptions, { lineWidth: 1, fillColor: "none" });
                    return r
                }(c); C(v.prototype, { type: "mapline", colorProp: "stroke", drawLegendSymbol: r.prototype.drawLegendSymbol, pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" } }); f.registerSeriesType("mapline", v); ""; return v
            }); H(f, "Series/MapPoint/MapPointPoint.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f) {
                var v = this && this.__extends || function () {
                    var c = function (f, r) {
                        c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, f) { c.__proto__ = f } || function (c, f) {
                            for (var n in f) f.hasOwnProperty(n) &&
                                (c[n] = f[n])
                        }; return c(f, r)
                    }; return function (f, r) { function v() { this.constructor = f } c(f, r); f.prototype = null === r ? Object.create(r) : (v.prototype = r.prototype, new v) }
                }(), D = f.isNumber; return function (c) { function f() { var f = null !== c && c.apply(this, arguments) || this; f.options = void 0; f.series = void 0; return f } v(f, c); f.prototype.isValid = function () { return !!(this.options.geometry || D(this.x) && D(this.y) || D(this.options.lon) && D(this.options.lat)) }; return f }(c.seriesTypes.scatter.prototype.pointClass)
            }); H(f, "Series/MapPoint/MapPointSeries.js",
                [f["Core/Globals.js"], f["Series/MapPoint/MapPointPoint.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
                    var r = this && this.__extends || function () { var c = function (d, b) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return c(d, b) }; return function (d, b) { function f() { this.constructor = d } c(d, b); d.prototype = null === b ? Object.create(b) : (f.prototype = b.prototype, new f) } }(); c = c.noop;
                    var C = v.seriesTypes.scatter, F = D.extend, A = D.fireEvent, u = D.isNumber, n = D.merge; D = function (c) {
                        function d() { var b = null !== c && c.apply(this, arguments) || this; b.chart = void 0; b.data = void 0; b.options = void 0; b.points = void 0; return b } r(d, c); d.prototype.drawDataLabels = function () { c.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) }; d.prototype.projectPoint = function (b) {
                            var c = this.chart.mapView; if (c) {
                                var d = b.geometry, f = b.lon; b = b.lat; d = d && "Point" === d.type && d.coordinates;
                                u(f) && u(b) && (d = [f, b]); if (d) return c.lonLatToProjectedUnits({ lon: d[0], lat: d[1] })
                            }
                        }; d.prototype.translate = function () {
                            var b = this, c = this.chart.mapView; this.processedXData || this.processData(); this.generatePoints(); this.getProjectedBounds && this.isDirtyData && (delete this.bounds, this.getProjectedBounds()); if (c) {
                                var d = c.projection.hasCoordinates; this.points.forEach(function (f) {
                                    var h = f.x; h = void 0 === h ? void 0 : h; var k = f.y; k = void 0 === k ? void 0 : k; var p = b.projectPoint(f.options); p ? (h = p.x, k = p.y) : f.bounds && (h = f.bounds.midX,
                                        k = f.bounds.midY); u(h) && u(k) ? (h = c.projectedUnitsToPixels({ x: h, y: k }), f.plotX = h.x, f.plotY = d ? h.y : b.chart.plotHeight - h.y) : f.y = f.plotX = f.plotY = void 0; f.isInside = b.isPointInside(f); f.zone = b.zones.length ? f.getZone() : void 0
                                })
                            } A(this, "afterTranslate")
                        }; d.defaultOptions = n(C.defaultOptions, { dataLabels: { crop: !1, defer: !1, enabled: !0, formatter: function () { return this.point.name }, overflow: !1, style: { color: "#000000" } } }); return d
                    }(C); F(D.prototype, {
                        type: "mappoint", axisTypes: ["colorAxis"], forceDL: !0, isCartesian: !1, pointClass: f,
                        searchPoint: c, useMapGeometry: !0
                    }); v.registerSeriesType("mappoint", D); ""; return D
                }); H(f, "Series/Bubble/BubbleLegendDefaults.js", [], function () {
                    return {
                        borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: !1, labels: { className: void 0, allowOverlap: !1, format: "", formatter: void 0, align: "right", style: { fontSize: "10px", color: "#000000" }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: {
                            value: void 0, borderColor: void 0,
                            color: void 0, connectorColor: void 0
                        }, sizeBy: "area", sizeByAbsoluteValue: !1, zIndex: 1, zThreshold: 0
                    }
                }); H(f, "Series/Bubble/BubbleLegendItem.js", [f["Core/Color/Color.js"], f["Core/FormatUtilities.js"], f["Core/Globals.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
                    var r = c.parse, C = v.noop, F = D.arrayMax, A = D.arrayMin, u = D.isNumber, n = D.merge, k = D.pick, d = D.stableSort; ""; return function () {
                        function b(b, c) {
                            this.options = this.symbols = this.visible = this.selected = this.ranges = this.movementX = this.maxLabel = this.legendSymbol =
                                this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0; this.setState = C; this.init(b, c)
                        } b.prototype.init = function (b, c) { this.options = b; this.visible = !0; this.chart = c.chart; this.legend = c }; b.prototype.addToLegend = function (b) { b.splice(this.options.legendIndex, 0, this) }; b.prototype.drawLegendSymbol = function (b) {
                            var c = this.chart, f = this.options, h = k(b.options.itemDistance, 20), n = f.ranges, t = f.connectorDistance; this.fontMetrics = c.renderer.fontMetrics(f.labels.style.fontSize);
                            n && n.length && u(n[0].value) ? (d(n, function (b, c) { return c.value - b.value }), this.ranges = n, this.setOptions(), this.render(), b = this.getMaxLabelSize(), n = this.ranges[0].radius, c = 2 * n, t = t - n + b.width, t = 0 < t ? t : 0, this.maxLabel = b, this.movementX = "left" === f.labels.align ? t : 0, this.legendItemWidth = c + t + h, this.legendItemHeight = c + this.fontMetrics.h / 2) : b.options.bubbleLegend.autoRanges = !0
                        }; b.prototype.setOptions = function () {
                            var b = this.ranges, c = this.options, d = this.chart.series[c.seriesIndex], f = this.legend.baseline, u = {
                                zIndex: c.zIndex,
                                "stroke-width": c.borderWidth
                            }, t = { zIndex: c.zIndex, "stroke-width": c.connectorWidth }, q = { align: this.legend.options.rtl || "left" === c.labels.align ? "right" : "left", zIndex: c.zIndex }, l = d.options.marker.fillOpacity, g = this.chart.styledMode; b.forEach(function (h, a) {
                                g || (u.stroke = k(h.borderColor, c.borderColor, d.color), u.fill = k(h.color, c.color, 1 !== l ? r(d.color).setOpacity(l).get("rgba") : d.color), t.stroke = k(h.connectorColor, c.connectorColor, d.color)); b[a].radius = this.getRangeRadius(h.value); b[a] = n(b[a], {
                                    center: b[0].radius -
                                        b[a].radius + f
                                }); g || n(!0, b[a], { bubbleAttribs: n(u), connectorAttribs: n(t), labelAttribs: q })
                            }, this)
                        }; b.prototype.getRangeRadius = function (b) { var c = this.options; return this.chart.series[this.options.seriesIndex].getRadius.call(this, c.ranges[c.ranges.length - 1].value, c.ranges[0].value, c.minSize, c.maxSize, b) }; b.prototype.render = function () {
                            var b = this.chart.renderer, c = this.options.zThreshold; this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }); this.legendSymbol = b.g("bubble-legend"); this.legendItem =
                                b.g("bubble-legend-item"); this.legendSymbol.translateX = 0; this.legendSymbol.translateY = 0; this.ranges.forEach(function (b) { b.value >= c && this.renderRange(b) }, this); this.legendSymbol.add(this.legendItem); this.legendItem.add(this.legendGroup); this.hideOverlappingLabels()
                        }; b.prototype.renderRange = function (b) {
                            var c = this.options, d = c.labels, f = this.chart, h = f.series[c.seriesIndex], k = f.renderer, n = this.symbols; f = n.labels; var l = b.center, g = Math.abs(b.radius), r = c.connectorDistance || 0, a = d.align, u = c.connectorWidth, e =
                                this.ranges[0].radius || 0, v = l - g - c.borderWidth / 2 + u / 2, m = this.fontMetrics; m = m.f / 2 - (m.h - m.f) / 2; var x = k.styledMode; r = this.legend.options.rtl || "left" === a ? -r : r; "center" === a && (r = 0, c.connectorDistance = 0, b.labelAttribs.align = "center"); a = v + c.labels.y; var A = e + r + c.labels.x; n.bubbleItems.push(k.circle(e, l + ((v % 1 ? 1 : .5) - (u % 2 ? 0 : .5)), g).attr(x ? {} : b.bubbleAttribs).addClass((x ? "highcharts-color-" + h.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (c.className || "")).add(this.legendSymbol)); n.connectors.push(k.path(k.crispLine([["M",
                                    e, v], ["L", e + r, v]], c.connectorWidth)).attr(x ? {} : b.connectorAttribs).addClass((x ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (c.connectorClassName || "")).add(this.legendSymbol)); b = k.text(this.formatLabel(b), A, a + m).attr(x ? {} : b.labelAttribs).css(x ? {} : d.style).addClass("highcharts-bubble-legend-labels " + (c.labels.className || "")).add(this.legendSymbol); f.push(b); b.placed = !0; b.alignAttr = { x: A, y: a + m }
                        }; b.prototype.getMaxLabelSize = function () {
                            var b, c; this.symbols.labels.forEach(function (d) {
                                c =
                                    d.getBBox(!0); b = b ? c.width > b.width ? c : b : c
                            }); return b || {}
                        }; b.prototype.formatLabel = function (b) { var c = this.options, d = c.labels.formatter; c = c.labels.format; var h = this.chart.numberFormatter; return c ? f.format(c, b) : d ? d.call(b) : h(b.value, 1) }; b.prototype.hideOverlappingLabels = function () { var b = this.chart, c = this.symbols; !this.options.labels.allowOverlap && c && (b.hideOverlappingLabels(c.labels), c.labels.forEach(function (b, d) { b.newOpacity ? b.newOpacity !== b.oldOpacity && c.connectors[d].show() : c.connectors[d].hide() })) };
                        b.prototype.getRanges = function () {
                            var b = this.legend.bubbleLegend, c = b.options.ranges, d, f = Number.MAX_VALUE, r = -Number.MAX_VALUE; b.chart.series.forEach(function (b) { b.isBubble && !b.ignoreSeries && (d = b.zData.filter(u), d.length && (f = k(b.options.zMin, Math.min(f, Math.max(A(d), !1 === b.options.displayNegative ? b.options.zThreshold : -Number.MAX_VALUE))), r = k(b.options.zMax, Math.max(r, F(d))))) }); var t = f === r ? [{ value: r }] : [{ value: f }, { value: (f + r) / 2 }, { value: r, autoRanges: !0 }]; c.length && c[0].radius && t.reverse(); t.forEach(function (b,
                                d) { c && c[d] && (t[d] = n(c[d], b)) }); return t
                        }; b.prototype.predictBubbleSizes = function () { var b = this.chart, c = this.fontMetrics, d = b.legend.options, f = d.floating, k = (d = "horizontal" === d.layout) ? b.legend.lastLineHeight : 0, n = b.plotSizeX, q = b.plotSizeY, l = b.series[this.options.seriesIndex], g = l.getPxExtremes(); b = Math.ceil(g.minPxSize); g = Math.ceil(g.maxPxSize); var r = Math.min(q, n); l = l.options.maxSize; if (f || !/%$/.test(l)) c = g; else if (l = parseFloat(l), c = (r + k - c.h / 2) * l / 100 / (l / 100 + 1), d && q - c >= n || !d && n - c >= q) c = g; return [b, Math.ceil(c)] };
                        b.prototype.updateRanges = function (b, c) { var d = this.legend.options.bubbleLegend; d.minSize = b; d.maxSize = c; d.ranges = this.getRanges() }; b.prototype.correctSizes = function () { var b = this.legend, c = this.chart.series[this.options.seriesIndex].getPxExtremes(); 1 < Math.abs(Math.ceil(c.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, c.maxPxSize), b.render()) }; return b
                    }()
                }); H(f, "Series/Bubble/BubbleLegendComposition.js", [f["Series/Bubble/BubbleLegendDefaults.js"], f["Series/Bubble/BubbleLegendItem.js"],
                f["Core/DefaultOptions.js"], f["Core/Utilities.js"]], function (c, f, v, D) {
                    var r = v.setOptions, C = D.addEvent, F = D.objectEach, A = D.wrap, u; (function (n) {
                        function k(c, f, h) {
                            var k = this.legend, g = 0 <= d(this); if (k && k.options.enabled && k.bubbleLegend && k.options.bubbleLegend.autoRanges && g) {
                                var n = k.bubbleLegend.options; g = k.bubbleLegend.predictBubbleSizes(); k.bubbleLegend.updateRanges(g[0], g[1]); n.placed || (k.group.placed = !1, k.allItems.forEach(function (a) { a.legendGroup.translateY = null })); k.render(); this.getMargins(); this.axes.forEach(function (a) {
                                    a.visible &&
                                        a.render(); n.placed || (a.setScale(), a.updateNames(), F(a.ticks, function (a) { a.isNew = !0; a.isNewLabel = !0 }))
                                }); n.placed = !0; this.getMargins(); c.call(this, f, h); k.bubbleLegend.correctSizes(); u(k, b(k))
                            } else c.call(this, f, h), k && k.options.enabled && k.bubbleLegend && (k.render(), u(k, b(k)))
                        } function d(b) { b = b.series; for (var c = 0; c < b.length;) { if (b[c] && b[c].isBubble && b[c].visible && b[c].zData.length) return c; c++ } return -1 } function b(b) {
                            b = b.allItems; var c = [], d = b.length, f, g = 0; for (f = 0; f < d; f++)if (b[f].legendItemHeight && (b[f].itemHeight =
                                b[f].legendItemHeight), b[f] === b[d - 1] || b[f + 1] && b[f]._legendItemPos[1] !== b[f + 1]._legendItemPos[1]) { c.push({ height: 0 }); var h = c[c.length - 1]; for (g; g <= f; g++)b[g].itemHeight > h.height && (h.height = b[g].itemHeight); h.step = f } return c
                        } function h(b) { var c = this.bubbleLegend, h = this.options, k = h.bubbleLegend, g = d(this.chart); c && c.ranges && c.ranges.length && (k.ranges.length && (k.autoRanges = !!k.ranges[0].autoRanges), this.destroyItem(c)); 0 <= g && h.enabled && k.enabled && (k.seriesIndex = g, this.bubbleLegend = new f(k, this), this.bubbleLegend.addToLegend(b.allItems)) }
                        function p() { var b = this.chart, c = this.visible, f = this.chart.legend; f && f.bubbleLegend && (this.visible = !c, this.ignoreSeries = c, b = 0 <= d(b), f.bubbleLegend.visible !== b && (f.update({ bubbleLegend: { enabled: b } }), f.bubbleLegend.visible = b), this.visible = c) } function u(b, c) {
                            var d = b.options.rtl, f, g, h, a = 0; b.allItems.forEach(function (b, e) {
                                f = b.legendGroup.translateX; g = b._legendItemPos[1]; if ((h = b.movementX) || d && b.ranges) h = d ? f - b.options.maxSize / 2 : f + h, b.legendGroup.attr({ translateX: h }); e > c[a].step && a++; b.legendGroup.attr({
                                    translateY: Math.round(g +
                                        c[a].height / 2)
                                }); b._legendItemPos[1] = g + c[a].height / 2
                            })
                        } var v = []; n.compose = function (b, d, f) { -1 === v.indexOf(b) && (v.push(b), r({ legend: { bubbleLegend: c } }), A(b.prototype, "drawChartBox", k)); -1 === v.indexOf(d) && (v.push(d), C(d, "afterGetAllItems", h)); -1 === v.indexOf(f) && (v.push(f), C(f, "legendItemClick", p)) }
                    })(u || (u = {})); return u
                }); H(f, "Series/Bubble/BubblePoint.js", [f["Core/Series/Point.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v) {
                    var D = this && this.__extends || function () {
                        var c =
                            function (f, r) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, f) { c.__proto__ = f } || function (c, f) { for (var n in f) f.hasOwnProperty(n) && (c[n] = f[n]) }; return c(f, r) }; return function (f, r) { function v() { this.constructor = f } c(f, r); f.prototype = null === r ? Object.create(r) : (v.prototype = r.prototype, new v) }
                    }(); v = v.extend; f = function (f) {
                        function r() { var c = null !== f && f.apply(this, arguments) || this; c.options = void 0; c.series = void 0; return c } D(r, f); r.prototype.haloPath = function (f) {
                            return c.prototype.haloPath.call(this,
                                0 === f ? 0 : (this.marker ? this.marker.radius || 0 : 0) + f)
                        }; return r
                    }(f.seriesTypes.scatter.prototype.pointClass); v(f.prototype, { ttBelow: !1 }); return f
                }); H(f, "Series/Bubble/BubbleSeries.js", [f["Core/Axis/Axis.js"], f["Series/Bubble/BubbleLegendComposition.js"], f["Series/Bubble/BubblePoint.js"], f["Core/Color/Color.js"], f["Core/Globals.js"], f["Core/Series/Series.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F, A) {
                    var u = this && this.__extends || function () {
                        var b = function (c, d) {
                            b =
                                Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]) }; return b(c, d)
                        }; return function (c, d) { function f() { this.constructor = c } b(c, d); c.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f) }
                    }(), n = D.parse; D = r.noop; var k = F.seriesTypes; r = k.column; var d = k.scatter; k = A.addEvent; var b = A.arrayMax, h = A.arrayMin, p = A.clamp, z = A.extend, E = A.isNumber, y = A.merge, t = A.pick; A = function (c) {
                        function k() {
                            var b = null !== c &&
                                c.apply(this, arguments) || this; b.data = void 0; b.maxPxSize = void 0; b.minPxSize = void 0; b.options = void 0; b.points = void 0; b.radii = void 0; b.yData = void 0; b.zData = void 0; return b
                        } u(k, c); k.prototype.animate = function (b) { !b && this.points.length < this.options.animationLimit && this.points.forEach(function (b) { var a = b.graphic; a && a.width && (this.hasRendered || a.attr({ x: b.plotX, y: b.plotY, width: 1, height: 1 }), a.animate(this.markerAttribs(b), this.options.animation)) }, this) }; k.prototype.getRadii = function () {
                            var b = this, c = this.zData,
                                a = this.yData, d = [], e = this.chart.bubbleZExtremes; var f = this.getPxExtremes(); var h = f.minPxSize, k = f.maxPxSize; if (!e) { var l = Number.MAX_VALUE, n = -Number.MAX_VALUE, p; this.chart.series.forEach(function (a) { a.bubblePadding && (a.visible || !b.chart.options.chart.ignoreHiddenSeries) && (a = (a.onPoint || a).getZExtremes()) && (l = Math.min(l || a.zMin, a.zMin), n = Math.max(n || a.zMax, a.zMax), p = !0) }); p ? (e = { zMin: l, zMax: n }, this.chart.bubbleZExtremes = e) : e = { zMin: 0, zMax: 0 } } var q = 0; for (f = c.length; q < f; q++) {
                                    var t = c[q]; d.push(this.getRadius(e.zMin,
                                        e.zMax, h, k, t, a && a[q]))
                                } this.radii = d
                        }; k.prototype.getRadius = function (b, c, a, d, e, f) { var g = this.options, h = "width" !== g.sizeBy, k = g.zThreshold, l = c - b, n = .5; if (null === f || null === e) return null; if (E(e)) { g.sizeByAbsoluteValue && (e = Math.abs(e - k), l = Math.max(c - k, Math.abs(b - k)), b = 0); if (e < b) return a / 2 - 1; 0 < l && (n = (e - b) / l) } h && 0 <= n && (n = Math.sqrt(n)); return Math.ceil(a + n * (d - a)) / 2 }; k.prototype.hasData = function () { return !!this.processedXData.length }; k.prototype.pointAttribs = function (b, c) {
                            var a = this.options.marker.fillOpacity;
                            b = C.prototype.pointAttribs.call(this, b, c); 1 !== a && (b.fill = n(b.fill).setOpacity(a).get("rgba")); return b
                        }; k.prototype.translate = function () { c.prototype.translate.call(this); this.getRadii(); this.translateBubble() }; k.prototype.translateBubble = function () {
                            for (var b = this.data, c = this.radii, a = this.getPxExtremes().minPxSize, d = b.length; d--;) {
                                var e = b[d], f = c ? c[d] : 0; E(f) && f >= a / 2 ? (e.marker = z(e.marker, { radius: f, width: 2 * f, height: 2 * f }), e.dlBox = { x: e.plotX - f, y: e.plotY - f, width: 2 * f, height: 2 * f }) : (e.shapeArgs = e.dlBox = void 0,
                                    e.plotY = 0, e.marker = { width: 0, height: 0 })
                            }
                        }; k.prototype.getPxExtremes = function () { var b = Math.min(this.chart.plotWidth, this.chart.plotHeight), c = function (a) { if ("string" === typeof a) { var c = /%$/.test(a); a = parseInt(a, 10) } return c ? b * a / 100 : a }, a = c(t(this.options.minSize, 8)); c = Math.max(c(t(this.options.maxSize, "20%")), a); return { minPxSize: a, maxPxSize: c } }; k.prototype.getZExtremes = function () {
                            var c = this.options, d = (this.zData || []).filter(E); if (d.length) {
                                var a = t(c.zMin, p(h(d), !1 === c.displayNegative ? c.zThreshold || 0 : -Number.MAX_VALUE,
                                    Number.MAX_VALUE)); c = t(c.zMax, b(d)); if (E(a) && E(c)) return { zMin: a, zMax: c }
                            }
                        }; k.compose = f.compose; k.defaultOptions = y(d.defaultOptions, {
                            dataLabels: { formatter: function () { var b = this.series.chart.numberFormatter, c = this.point.z; return E(c) ? b(c, -1) : "" }, inside: !0, verticalAlign: "middle" }, animationLimit: 250, marker: { lineColor: null, lineWidth: 1, fillOpacity: .5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle" }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" },
                            turboThreshold: 0, zThreshold: 0, zoneAxis: "z"
                        }); return k
                    }(d); z(A.prototype, { alignDataLabel: r.prototype.alignDataLabel, applyZones: D, bubblePadding: !0, buildKDTree: D, directTouch: !0, isBubble: !0, pointArrayMap: ["y", "z"], pointClass: v, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group", zoneAxis: "z" }); k(A, "updatedData", function (b) { delete b.target.chart.bubbleZExtremes }); c.prototype.beforePadding = function () {
                        var b = this, c = this.len, d = this.chart, f = 0, a = c, h = this.isXAxis, e = h ? "xData" :
                            "yData", k = this.min, m = this.max - k, n = c / m, p; this.series.forEach(function (c) { if (c.bubblePadding && (c.visible || !d.options.chart.ignoreHiddenSeries)) { p = b.allowZoomOutside = !0; var g = c[e]; h && ((c.onPoint || c).getRadii(0, 0, c), c.onPoint && (c.radii = c.onPoint.radii)); if (0 < m) for (var l = g.length; l--;)if (E(g[l]) && b.dataMin <= g[l] && g[l] <= b.max) { var q = c.radii && c.radii[l] || 0; f = Math.min((g[l] - k) * n - q, f); a = Math.max((g[l] - k) * n + q, a) } } }); p && 0 < m && !this.logarithmic && (a -= c, n *= (c + Math.max(0, f) - Math.min(a, c)) / c, [["min", "userMin", f],
                            ["max", "userMax", a]].forEach(function (a) { "undefined" === typeof t(b.options[a[0]], b[a[1]]) && (b[a[0]] += a[2] / n) }))
                    }; F.registerSeriesType("bubble", A); ""; ""; return A
                }); H(f, "Series/MapBubble/MapBubblePoint.js", [f["Series/Map/MapPoint.js"], f["Core/Series/SeriesRegistry.js"]], function (c, f) {
                    var v = this && this.__extends || function () {
                        var c = function (f, r) {
                            c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, f) { c.__proto__ = f } || function (c, f) { for (var n in f) f.hasOwnProperty(n) && (c[n] = f[n]) }; return c(f,
                                r)
                        }; return function (f, r) { function v() { this.constructor = f } c(f, r); f.prototype = null === r ? Object.create(r) : (v.prototype = r.prototype, new v) }
                    }(); f = f.seriesTypes; var D = f.map; return function (f) { function r() { var r = null !== f && f.apply(this, arguments) || this; r.applyOptions = D.prototype.pointClass.prototype.applyOptions; r.getProjectedBounds = c.prototype.getProjectedBounds; return r } v(r, f); r.prototype.isValid = function () { return "number" === typeof this.z }; return r }(f.bubble.prototype.pointClass)
                }); H(f, "Series/MapBubble/MapBubbleSeries.js",
                    [f["Series/Bubble/BubbleSeries.js"], f["Series/MapBubble/MapBubblePoint.js"], f["Series/Map/MapSeries.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f, v, D, r) {
                        var C = this && this.__extends || function () {
                            var c = function (f, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return c(f, d) }; return function (f, d) {
                                function b() { this.constructor = f } c(f, d); f.prototype = null === d ? Object.create(d) :
                                    (b.prototype = d.prototype, new b)
                            }
                        }(), F = D.seriesTypes.mappoint, A = r.extend, u = r.merge; r = function (f) {
                            function k() { var c = null !== f && f.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; return c } C(k, f); k.prototype.searchPoint = function (c, b) { return this.searchKDTree({ clientX: c.chartX - this.chart.plotLeft, plotY: c.chartY - this.chart.plotTop }, b, c) }; k.prototype.translate = function () { F.prototype.translate.call(this); this.getRadii(); this.translateBubble() }; k.compose = c.compose; k.defaultOptions =
                                u(c.defaultOptions, { lineWidth: 0, animationLimit: 500, joinBy: "hc-key", tooltip: { pointFormat: "{point.name}: {point.z}" } }); return k
                        }(c); A(r.prototype, { type: "mapbubble", axisTypes: ["colorAxis"], getProjectedBounds: v.prototype.getProjectedBounds, isCartesian: !1, pointArrayMap: ["z"], pointClass: f, processData: v.prototype.processData, projectPoint: F.prototype.projectPoint, setData: v.prototype.setData, setOptions: v.prototype.setOptions, updateData: v.prototype.updateData, useMapGeometry: !0, xyFromShape: !0 }); D.registerSeriesType("mapbubble",
                            r); ""; return r
                    }); H(f, "Series/Heatmap/HeatmapPoint.js", [f["Core/Series/SeriesRegistry.js"], f["Core/Utilities.js"]], function (c, f) {
                        var v = this && this.__extends || function () { var c = function (f, n) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, d) { c.__proto__ = d } || function (c, d) { for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]) }; return c(f, n) }; return function (f, n) { function k() { this.constructor = f } c(f, n); f.prototype = null === n ? Object.create(n) : (k.prototype = n.prototype, new k) } }(), D = f.clamp, r = f.defined,
                            C = f.extend, F = f.pick; c = function (c) {
                                function f() { var f = null !== c && c.apply(this, arguments) || this; f.options = void 0; f.series = void 0; f.value = void 0; f.x = void 0; f.y = void 0; return f } v(f, c); f.prototype.applyOptions = function (f, k) { f = c.prototype.applyOptions.call(this, f, k); f.formatPrefix = f.isNull || null === f.value ? "null" : "point"; return f }; f.prototype.getCellAttributes = function () {
                                    var c = this.series, f = c.options, d = (f.colsize || 1) / 2, b = (f.rowsize || 1) / 2, h = c.xAxis, p = c.yAxis, u = this.options.marker || c.options.marker; c = c.pointPlacementToXValue();
                                    var v = F(this.pointPadding, f.pointPadding, 0), y = { x1: D(Math.round(h.len - h.translate(this.x - d, !1, !0, !1, !0, -c)), -h.len, 2 * h.len), x2: D(Math.round(h.len - h.translate(this.x + d, !1, !0, !1, !0, -c)), -h.len, 2 * h.len), y1: D(Math.round(p.translate(this.y - b, !1, !0, !1, !0)), -p.len, 2 * p.len), y2: D(Math.round(p.translate(this.y + b, !1, !0, !1, !0)), -p.len, 2 * p.len) };[["width", "x"], ["height", "y"]].forEach(function (b) {
                                        var c = b[0]; b = b[1]; var d = b + "1", f = b + "2", h = Math.abs(y[d] - y[f]), a = u && u.lineWidth || 0, k = Math.abs(y[d] + y[f]) / 2; c = u && u[c]; r(c) &&
                                            c < h && (c = c / 2 + a / 2, y[d] = k - c, y[f] = k + c); v && ("y" === b && (d = f, f = b + "1"), y[d] += v, y[f] -= v)
                                    }); return y
                                }; f.prototype.haloPath = function (c) { if (!c) return []; var f = this.shapeArgs; return ["M", f.x - c, f.y - c, "L", f.x - c, f.y + f.height + c, f.x + f.width + c, f.y + f.height + c, f.x + f.width + c, f.y - c, "Z"] }; f.prototype.isValid = function () { return Infinity !== this.value && -Infinity !== this.value }; return f
                            }(c.seriesTypes.scatter.prototype.pointClass); C(c.prototype, { dataLabelOnNull: !0, moveToTopOnHover: !0, ttBelow: !1 }); return c
                    }); H(f, "Series/Heatmap/HeatmapSeries.js",
                        [f["Core/Color/Color.js"], f["Series/ColorMapComposition.js"], f["Series/Heatmap/HeatmapPoint.js"], f["Core/Legend/LegendSymbol.js"], f["Core/Series/SeriesRegistry.js"], f["Core/Renderer/SVG/SVGRenderer.js"], f["Core/Utilities.js"]], function (c, f, v, D, r, C, F) {
                            var A = this && this.__extends || function () {
                                var b = function (c, d) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]) }; return b(c, d) }; return function (c, d) {
                                    function f() {
                                        this.constructor =
                                            c
                                    } b(c, d); c.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f)
                                }
                            }(), u = r.series, n = r.seriesTypes, k = n.column, d = n.scatter, b = C.prototype.symbols, h = F.extend, p = F.fireEvent, z = F.isNumber, E = F.merge, y = F.pick; C = function (f) {
                                function k() { var b = null !== f && f.apply(this, arguments) || this; b.colorAxis = void 0; b.data = void 0; b.options = void 0; b.points = void 0; b.valueMax = NaN; b.valueMin = NaN; return b } A(k, f); k.prototype.drawPoints = function () {
                                    var b = this; if ((this.options.marker || {}).enabled || this._hasPointMarkers) u.prototype.drawPoints.call(this),
                                        this.points.forEach(function (c) { c.graphic && (c.gl̥raphic[b.chart.styledMode ? "css" : "animate"](b.colorAttribs(c)), null === c.value && c.graphic.addClass("highcharts-null-point")) })
                                }; k.prototype.getExtremes = function () { var b = u.prototype.getExtremes.call(this, this.valueData), c = b.dataMin; b = b.dataMax; z(c) && (this.valueMin = c); z(b) && (this.valueMax = b); return u.prototype.getExtremes.call(this) }; k.prototype.getValidPoints = function (b, c) { return u.prototype.getValidPoints.call(this, b, c, !0) }; k.prototype.hasData = function () { return !!this.processedXData.length };
                                k.prototype.init = function () { u.prototype.init.apply(this, arguments); var c = this.options; c.pointRange = y(c.pointRange, c.colsize || 1); this.yAxis.axisPointRange = c.rowsize || 1; b.ellipse = b.circle; c.marker && (c.marker.r = c.borderRadius) }; k.prototype.markerAttribs = function (b, c) {
                                    var d = b.marker || {}, a = this.options.marker || {}, f = b.shapeArgs || {}, e = {}; if (b.hasImage) return { x: b.plotX, y: b.plotY }; if (c) {
                                        var g = a.states[c] || {}; var h = d.states && d.states[c] || {};[["width", "x"], ["height", "y"]].forEach(function (a) {
                                            e[a[0]] = (h[a[0]] ||
                                                g[a[0]] || f[a[0]]) + (h[a[0] + "Plus"] || g[a[0] + "Plus"] || 0); e[a[1]] = f[a[1]] + (f[a[0]] - e[a[0]]) / 2
                                        })
                                    } return c ? e : f
                                }; k.prototype.pointAttribs = function (b, d) {
                                    var f = u.prototype.pointAttribs.call(this, b, d), a = this.options || {}, g = this.chart.options.plotOptions || {}, e = g.series || {}, h = g.heatmap || {}; g = b && b.options.borderColor || a.borderColor || h.borderColor || e.borderColor; e = b && b.options.borderWidth || a.borderWidth || h.borderWidth || e.borderWidth || f["stroke-width"]; f.stroke = b && b.marker && b.marker.lineColor || a.marker && a.marker.lineColor ||
                                        g || this.color; f["stroke-width"] = e; d && (b = E(a.states[d], a.marker && a.marker.states[d], b && b.options.states && b.options.states[d] || {}), d = b.brightness, f.fill = b.color || c.parse(f.fill).brighten(d || 0).get(), f.stroke = b.lineColor); return f
                                }; k.prototype.setClip = function (b) { var c = this.chart; u.prototype.setClip.apply(this, arguments); (!1 !== this.options.clip || b) && this.markerGroup.clip((b || this.clipBox) && this.sharedClipKey ? c.sharedClips[this.sharedClipKey] : c.clipRect) }; k.prototype.translate = function () {
                                    var c = this.options,
                                        d = c.marker && c.marker.symbol || "rect", f = b[d] ? d : "rect", a = -1 !== ["circle", "square"].indexOf(f); this.generatePoints(); this.points.forEach(function (g) {
                                            var e = g.getCellAttributes(), k = {}; k.x = Math.min(e.x1, e.x2); k.y = Math.min(e.y1, e.y2); k.width = Math.max(Math.abs(e.x2 - e.x1), 0); k.height = Math.max(Math.abs(e.y2 - e.y1), 0); var l = g.hasImage = 0 === (g.marker && g.marker.symbol || d || "").indexOf("url"); if (a) {
                                                var n = Math.abs(k.width - k.height); k.x = Math.min(e.x1, e.x2) + (k.width < k.height ? 0 : n / 2); k.y = Math.min(e.y1, e.y2) + (k.width < k.height ?
                                                    n / 2 : 0); k.width = k.height = Math.min(k.width, k.height)
                                            } n = { plotX: (e.x1 + e.x2) / 2, plotY: (e.y1 + e.y2) / 2, clientX: (e.x1 + e.x2) / 2, shapeType: "path", shapeArgs: E(!0, k, { d: b[f](k.x, k.y, k.width, k.height, { r: c.borderRadius }) }) }; l && (g.marker = { width: k.width, height: k.height }); h(g, n)
                                        }); p(this, "afterTranslate")
                                }; k.defaultOptions = E(d.defaultOptions, {
                                    animation: !1, borderRadius: 0, borderWidth: 0, nullColor: "#f7f7f7", dataLabels: {
                                        formatter: function () { var b = this.series.chart.numberFormatter, c = this.point.value; return z(c) ? b(c, -1) : "" },
                                        inside: !0, verticalAlign: "middle", crop: !1, overflow: !1, padding: 0
                                    }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: !0, pointRange: null, tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" }, states: { hover: { halo: !1, brightness: .2 } }
                                }); return k
                            }(d); h(C.prototype, {
                                axisTypes: f.seriesMembers.axisTypes, colorKey: f.seriesMembers.colorKey, directTouch: !0, getExtremesFromAll: !0, parallelArrays: f.seriesMembers.parallelArrays, pointArrayMap: ["y", "value"], pointClass: v,
                                trackerGroups: f.seriesMembers.trackerGroups, alignDataLabel: k.prototype.alignDataLabel, colorAttribs: f.seriesMembers.colorAttribs, drawLegendSymbol: D.drawRectangle, getSymbol: u.prototype.getSymbol
                            }); f.compose(C); r.registerSeriesType("heatmap", C); ""; ""; return C
                        }); H(f, "masters/modules/map.src.js", [f["Core/Globals.js"], f["Core/Axis/Color/ColorAxis.js"], f["Series/MapBubble/MapBubbleSeries.js"], f["Core/Chart/MapChart.js"], f["Maps/MapView.js"], f["Maps/Projection.js"]], function (c, f, v, D, r, C) {
                            c.ColorAxis = f; c.MapChart =
                                D; c.mapChart = c.Map = D.mapChart; c.MapView = r; c.maps = D.maps; c.Projection = C; f.compose(c.Chart, c.Fx, c.Legend, c.Series); v.compose(c.Chart, c.Legend, c.Series)
                        }); H(f, "masters/highmaps.src.js", [f["masters/highcharts.src.js"]], function (c) { c.product = "Highmaps"; return c }); f["masters/highmaps.src.js"]._modules = f; return f["masters/highmaps.src.js"]
});
//# sourceMappingURL=highmaps.js.map