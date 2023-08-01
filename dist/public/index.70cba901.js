"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function t(t, e, i, n) { Object.defineProperty(t, e, { get: i, set: n, enumerable: !0, configurable: !0 }); }
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, i = {}, n = {}, r = e.parcelRequire6e9e;
null == r && ((r = function (t) { if (t in i)
    return i[t].exports; if (t in n) {
    var e = n[t];
    delete n[t];
    var r = { id: t, exports: {} };
    return i[t] = r, e.call(r.exports, r, r.exports), r.exports;
} var s = new Error("Cannot find module '" + t + "'"); throw s.code = "MODULE_NOT_FOUND", s; }).register = function (t, e) { n[t] = e; }, e.parcelRequire6e9e = r), r.register("8VC01", (function (t, e) { Object.defineProperty(t.exports, "__esModule", { value: !0 }); var i = r("eNign"); r("a3Sd4"); t.exports.default = class {
    constructor() { this.bindMethods(), this.dom = { el: document.querySelector("[data-scroll]"), content: document.querySelector("[data-scroll-content]") }, this.init(); }
    bindMethods() { ["scroll", "run", "resize"].forEach((t => this[t] = this[t].bind(this))); }
    setStyles() { var t; Object.assign(null === (t = this.dom.el) || void 0 === t ? void 0 : t.style, { position: "fixed", top: 0, left: 0, height: "100%", width: "100%", overflow: "hidden" }); }
    setHeight() { document.body.style.height = `${this.dom.content.offsetHeight}px`; }
    resize() { this.setHeight(); }
    scroll() { this.data.current = window.scrollY; }
    run({ current: t, target: e }) { window.innerWidth; this.dom.content.style.transform = `translate3d(0, -${t}px, 0)`; }
    on() { this.setStyles(), this.setHeight(), i.Events.on("tick", this.run), i.Events.on("resize", this.resize); }
    off() { i.Events.off("tick", this.run), i.Events.off("resize", this.resize); }
    destroy() { document.body.style.height = "", this.data = null, this.removeEvents(), this.cancelAnimationFrame(); }
    resize() { this.setHeight(); }
    init() { this.on(); }
}; })), r.register("eNign", (function (t, e) { var i = t.exports && t.exports.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; }; Object.defineProperty(t.exports, "__esModule", { value: !0 }), t.exports.GlobalResize = t.exports.GlobalScroll = t.exports.GlobalRaf = t.exports.Events = void 0; const n = i(r("eRGm8")); t.exports.Events = n.default; const s = i(r("frf4N")); t.exports.GlobalRaf = s.default; const a = i(r("leSiX")); t.exports.GlobalScroll = a.default; const o = i(r("hkWoT")); t.exports.GlobalResize = o.default; })), r.register("eRGm8", (function (t, e) { var i = t.exports && t.exports.__createBinding || (Object.create ? function (t, e, i, n) { void 0 === n && (n = i); var r = Object.getOwnPropertyDescriptor(e, i); r && !("get" in r ? !e.__esModule : r.writable || r.configurable) || (r = { enumerable: !0, get: function () { return e[i]; } }), Object.defineProperty(t, n, r); } : function (t, e, i, n) { void 0 === n && (n = i), t[n] = e[i]; }), n = t.exports && t.exports.__setModuleDefault || (Object.create ? function (t, e) { Object.defineProperty(t, "default", { enumerable: !0, value: e }); } : function (t, e) { t.default = e; }), s = t.exports && t.exports.__importStar || function (t) { if (t && t.__esModule)
    return t; var e = {}; if (null != t)
    for (var r in t)
        "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && i(e, t, r); return n(e, t), e; }; Object.defineProperty(t.exports, "__esModule", { value: !0 }); const a = s(r("g4FDH")); t.exports.default = new a.TinyEmitter; })), r.register("g4FDH", (function (t, e) { function i() { } i.prototype = { on: function (t, e, i) { var n = this.e || (this.e = {}); return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this; }, once: function (t, e, i) { var n = this; function r() { n.off(t, r), e.apply(i, arguments); } return r._ = e, this.on(t, r, i); }, emit: function (t) { for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++)
        i[n].fn.apply(i[n].ctx, e); return this; }, off: function (t, e) { var i = this.e || (this.e = {}), n = i[t], r = []; if (n && e)
        for (var s = 0, a = n.length; s < a; s++)
            n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]); return r.length ? i[t] = r : delete i[t], this; } }, t.exports = i, t.exports.TinyEmitter = i; })), r.register("frf4N", (function (t, e) { var i = t.exports && t.exports.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; }; Object.defineProperty(t.exports, "__esModule", { value: !0 }); const n = i(r("4AGbv")); var s = r("a3Sd4"); const a = i(r("eRGm8")); t.exports.default = new class {
    constructor() { this.target = 0, this.current = 0, this.currentRounded = 0, this.ease = .095, this.init(); }
    tick() { this.current = (0, s.lerp)(this.current, this.target, this.ease), this.currentRounded = Math.round(100 * this.current) / 100, a.default.emit("tick", { target: this.target, current: this.currentRounded }); }
    onScroll({ y: t }) { this.target = t; }
    on() { n.default.ticker.add(this.tick.bind(this)), a.default.on("scroll", this.onScroll.bind(this)); }
    init() { this.on(); }
}; })), r.register("4AGbv", (function (e, i) { var n; n = e.exports, Object.defineProperty(n, "__esModule", { value: !0, configurable: !0 }), t(e.exports, "gsap", (() => o)), t(e.exports, "TweenMax", (() => l)), t(e.exports, "default", (() => o)), t(e.exports, "CSSPlugin", (() => r("16wL1").CSSPlugin)), t(e.exports, "TweenLite", (() => r("2Tywo").TweenLite)), t(e.exports, "TimelineMax", (() => r("2Tywo").TimelineMax)), t(e.exports, "TimelineLite", (() => r("2Tywo").TimelineLite)), t(e.exports, "Power0", (() => r("2Tywo").Power0)), t(e.exports, "Power1", (() => r("2Tywo").Power1)), t(e.exports, "Power2", (() => r("2Tywo").Power2)), t(e.exports, "Power3", (() => r("2Tywo").Power3)), t(e.exports, "Power4", (() => r("2Tywo").Power4)), t(e.exports, "Linear", (() => r("2Tywo").Linear)), t(e.exports, "Quad", (() => r("2Tywo").Quad)), t(e.exports, "Cubic", (() => r("2Tywo").Cubic)), t(e.exports, "Quart", (() => r("2Tywo").Quart)), t(e.exports, "Quint", (() => r("2Tywo").Quint)), t(e.exports, "Strong", (() => r("2Tywo").Strong)), t(e.exports, "Elastic", (() => r("2Tywo").Elastic)), t(e.exports, "Back", (() => r("2Tywo").Back)), t(e.exports, "SteppedEase", (() => r("2Tywo").SteppedEase)), t(e.exports, "Bounce", (() => r("2Tywo").Bounce)), t(e.exports, "Sine", (() => r("2Tywo").Sine)), t(e.exports, "Expo", (() => r("2Tywo").Expo)), t(e.exports, "Circ", (() => r("2Tywo").Circ)); var s = r("2Tywo"), a = r("16wL1"), o = s.gsap.registerPlugin(a.CSSPlugin) || s.gsap, l = o.core.Tween; })), r.register("2Tywo", (function (e, i) {
    function n(t) { if (void 0 === t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t; }
    function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e; }
    /*!
     * GSAP 3.11.5
     * https://greensock.com
     *
     * @license Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */ t(e.exports, "_config", (() => z)), t(e.exports, "_isString", (() => j)), t(e.exports, "_isUndefined", (() => Y)), t(e.exports, "_numExp", (() => it)), t(e.exports, "_numWithUnitExp", (() => nt)), t(e.exports, "_relExp", (() => st)), t(e.exports, "gsap", (() => Bi)), t(e.exports, "_missingPlugin", (() => ut)), t(e.exports, "_plugins", (() => bt)), t(e.exports, "GSCache", (() => ti)), t(e.exports, "_getCache", (() => At)), t(e.exports, "_getProperty", (() => Ct)), t(e.exports, "_forEachName", (() => Lt)), t(e.exports, "_round", (() => Pt)), t(e.exports, "_parseRelative", (() => Dt)), t(e.exports, "_ticker", (() => Ge)), t(e.exports, "getUnit", (() => fe)), t(e.exports, "_replaceRandom", (() => Te)), t(e.exports, "_getSetter", (() => xi)), t(e.exports, "PropTween", (() => Ai)), t(e.exports, "_colorExp", (() => ke)), t(e.exports, "_colorStringFilter", (() => Fe)), t(e.exports, "_renderComplexString", (() => bi)), t(e.exports, "_checkPlugin", (() => oi)), t(e.exports, "_sortPropTweensByPriority", (() => Ei)), t(e.exports, "Power0", (() => Fi)), t(e.exports, "Power1", (() => Gi)), t(e.exports, "Power2", (() => Vi)), t(e.exports, "Power3", (() => Hi)), t(e.exports, "Power4", (() => Wi)), t(e.exports, "Linear", (() => ji)), t(e.exports, "Quad", (() => qi)), t(e.exports, "Cubic", (() => Xi)), t(e.exports, "Quart", (() => Yi)), t(e.exports, "Quint", (() => Zi)), t(e.exports, "Strong", (() => Ji)), t(e.exports, "Elastic", (() => Ki)), t(e.exports, "Back", (() => $i)), t(e.exports, "SteppedEase", (() => Qi)), t(e.exports, "Bounce", (() => tn)), t(e.exports, "Sine", (() => en)), t(e.exports, "Expo", (() => nn)), t(e.exports, "Circ", (() => rn)), t(e.exports, "TweenLite", (() => pi)), t(e.exports, "TimelineMax", (() => ii)), t(e.exports, "TimelineLite", (() => ii));
    var s, a, o, l, c, h, u, d, p, f, m, g, v, x, _, y, b, M, w, S, T, E, A, C, L, P, R, D, I, O, z = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, N = { duration: .5, overwrite: !1, delay: 0 }, U = 1e8, k = 1e-8, B = 2 * Math.PI, F = B / 4, G = 0, V = Math.sqrt, H = Math.cos, W = Math.sin, j = function (t) { return "string" == typeof t; }, q = function (t) { return "function" == typeof t; }, X = function (t) { return "number" == typeof t; }, Y = function (t) { return void 0 === t; }, Z = function (t) { return "object" == typeof t; }, J = function (t) { return !1 !== t; }, K = function () { return "undefined" != typeof window; }, $ = function (t) { return q(t) || j(t); }, Q = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () { }, tt = Array.isArray, et = /(?:-?\.?\d|\.)+/gi, it = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, st = /[+-]=-?[.\d]+/, at = /[^,'"\[\]\s]+/gi, ot = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, lt = {}, ct = {}, ht = function (t) { return (ct = Bt(t, lt)) && Bi; }, ut = function (t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()"); }, dt = function (t, e) { return !e && console.warn(t); }, pt = function (t, e) { return t && (lt[t] = e) && ct && (ct[t] = e) || lt; }, ft = function () { return 0; }, mt = { suppressEvents: !0, isStart: !0, kill: !1 }, gt = { suppressEvents: !0, kill: !1 }, vt = { suppressEvents: !0 }, xt = {}, _t = [], yt = {}, bt = {}, Mt = {}, wt = 30, St = [], Tt = "", Et = function (t) { var e, i, n = t[0]; if (Z(n) || q(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
        for (i = St.length; i-- && !St[i].targetTest(n);)
            ;
        e = St[i];
    } for (i = t.length; i--;)
        t[i] && (t[i]._gsap || (t[i]._gsap = new ti(t[i], e))) || t.splice(i, 1); return t; }, At = function (t) { return t._gsap || Et(ve(t))[0]._gsap; }, Ct = function (t, e, i) { return (i = t[e]) && q(i) ? t[e]() : Y(i) && t.getAttribute && t.getAttribute(e) || i; }, Lt = function (t, e) { return (t = t.split(",")).forEach(e) || t; }, Pt = function (t) { return Math.round(1e5 * t) / 1e5 || 0; }, Rt = function (t) { return Math.round(1e7 * t) / 1e7 || 0; }, Dt = function (t, e) { var i = e.charAt(0), n = parseFloat(e.substr(2)); return t = parseFloat(t), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n; }, It = function (t, e) { for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;)
        ; return n < i; }, Ot = function () { var t, e, i = _t.length, n = _t.slice(0); for (yt = {}, _t.length = 0, t = 0; t < i; t++)
        (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0); }, zt = function (t, e, i, n) { _t.length && !a && Ot(), t.render(e, i, n || a && e < 0 && (t._initted || t._startAt)), _t.length && !a && Ot(); }, Nt = function (t) { var e = parseFloat(t); return (e || 0 === e) && (t + "").match(at).length < 2 ? e : j(t) ? t.trim() : t; }, Ut = function (t) { return t; }, kt = function (t, e) { for (var i in e)
        i in t || (t[i] = e[i]); return t; }, Bt = function (t, e) { for (var i in e)
        t[i] = e[i]; return t; }, Ft = function t(e, i) { for (var n in i)
        "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = Z(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]); return e; }, Gt = function (t, e) { var i, n = {}; for (i in t)
        i in e || (n[i] = t[i]); return n; }, Vt = function (t) { var e, i = t.parent || l, n = t.keyframes ? (e = tt(t.keyframes), function (t, i) { for (var n in i)
        n in t || "duration" === n && e || "ease" === n || (t[n] = i[n]); }) : kt; if (J(t.inherit))
        for (; i;)
            n(t, i.vars.defaults), i = i.parent || i._dp; return t; }, Ht = function (t, e, i, n, r) { void 0 === i && (i = "_first"), void 0 === n && (n = "_last"); var s, a = t[n]; if (r)
        for (s = e[r]; a && a[r] > s;)
            a = a._prev; return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t, e; }, Wt = function (t, e, i, n) { void 0 === i && (i = "_first"), void 0 === n && (n = "_last"); var r = e._prev, s = e._next; r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null; }, jt = function (t, e) { t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0; }, qt = function (t, e) { if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i;)
            i._dirty = 1, i = i.parent; return t; }, Xt = function (t) { for (var e = t.parent; e && e.parent;)
        e._dirty = 1, e.totalDuration(), e = e.parent; return t; }, Yt = function (t, e, i, n) { return t._startAt && (a ? t._startAt.revert(gt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n)); }, Zt = function t(e) { return !e || e._ts && t(e.parent); }, Jt = function (t) { return t._repeat ? Kt(t._tTime, t = t.duration() + t._rDelay) * t : 0; }, Kt = function (t, e) { var i = Math.floor(t /= e); return t && i === t ? i - 1 : i; }, $t = function (t, e) { return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur); }, Qt = function (t) { return t._end = Rt(t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0)); }, te = function (t, e) { var i = t._dp; return i && i.smoothChildTiming && t._ts && (t._start = Rt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Qt(t), i._dirty || qt(i, t)), t; }, ee = function (t, e) { var i; if ((e._time || e._initted && !e._dur) && (i = $t(t.rawTime(), e), (!e._dur || pe(0, e.totalDuration(), i) - e._tTime > k) && e.render(i, !0)), qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (i = t; i._dp;)
                i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
        t._zTime = -1e-8;
    } }, ie = function (t, e, i, n) { return e.parent && jt(e), e._start = Rt((X(i) ? i : i || t !== l ? he(t, i, e) : t._time) + e._delay), e._end = Rt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ht(t, e, "_first", "_last", t._sort ? "_start" : 0), ae(e) || (t._recent = e), n || ee(t, e), t._ts < 0 && te(t, t._tTime), t; }, ne = function (t, e) { return (lt.ScrollTrigger || ut("scrollTrigger", e)) && lt.ScrollTrigger.create(e, t); }, re = function (t, e, i, n, r) { return li(t, e, r), t._initted ? !i && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Ge.frame ? (_t.push(t), t._lazy = [r, n], 1) : void 0 : 1; }, se = function t(e) { var i = e.parent; return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i)); }, ae = function (t) { var e = t.data; return "isFromStart" === e || "isStart" === e; }, oe = function (t, e, i, n) { var r = t._repeat, s = Rt(e) || 0, a = t._tTime / t._tDur; return a && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : Rt(s * (r + 1) + t._rDelay * r) : s, a > 0 && !n && te(t, t._tTime = t._tDur * a), t.parent && Qt(t), i || qt(t.parent, t), t; }, le = function (t) { return t instanceof ii ? qt(t) : oe(t, t._dur); }, ce = { _start: 0, endTime: ft, totalDuration: ft }, he = function t(e, i, n) { var r, s, a, o = e.labels, l = e._recent || ce, c = e.duration() >= U ? l.endTime(!1) : e._dur; return j(i) && (isNaN(i) || i in o) ? (s = i.charAt(0), a = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (r < 0 ? l : n).totalDuration() / 100 : 1)) : r < 0 ? (i in o || (o[i] = c), o[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), a && n && (s = s / 100 * (tt(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : c + s)) : null == i ? c : +i; }, ue = function (t, e, i) { var n, r, s = X(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a]; if (s && (o.duration = e[1]), o.parent = i, t) {
        for (n = o, r = i; r && !("immediateRender" in n);)
            n = r.vars.defaults || {}, r = J(r.vars.inherit) && r.parent;
        o.immediateRender = J(n.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1];
    } return new pi(e[0], o, e[a + 1]); }, de = function (t, e) { return t || 0 === t ? e(t) : e; }, pe = function (t, e, i) { return i < t ? t : i > e ? e : i; }, fe = function (t, e) { return j(t) && (e = ot.exec(t)) ? e[1] : ""; }, me = [].slice, ge = function (t, e) { return t && Z(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Z(t[0])) && !t.nodeType && t !== c; }, ve = function (t, e, i) { return o && !e && o.selector ? o.selector(t) : !j(t) || i || !h && Ve() ? tt(t) ? function (t, e, i) { return void 0 === i && (i = []), t.forEach((function (t) { var n; return j(t) && !e || ge(t, 1) ? (n = i).push.apply(n, ve(t)) : i.push(t); })) || i; }(t, i) : ge(t) ? me.call(t, 0) : t ? [t] : [] : me.call((e || u).querySelectorAll(t), 0); }, xe = function (t) { return t = ve(t)[0] || dt("Invalid scope") || {}, function (e) { var i = t.current || t.nativeElement || t; return ve(e, i.querySelectorAll ? i : i === t ? dt("Invalid scope") || u.createElement("div") : t); }; }, _e = function (t) { return t.sort((function () { return .5 - Math.random(); })); }, ye = function (t) { if (q(t))
        return t; var e = Z(t) ? t : { each: t }, i = Ze(e.ease), n = e.from || 0, r = parseFloat(e.base) || 0, s = {}, a = n > 0 && n < 1, o = isNaN(n) || a, l = e.axis, c = n, h = n; return j(n) ? c = h = { center: .5, edges: .5, end: 1 }[n] || 0 : !a && o && (c = n[0], h = n[1]), function (t, a, u) { var d, p, f, m, g, v, x, _, y, b = (u || e).length, M = s[b]; if (!M) {
        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, U])[1])) {
            for (x = -1e8; x < (x = u[y++].getBoundingClientRect().left) && y < b;)
                ;
            y--;
        }
        for (M = s[b] = [], d = o ? Math.min(y, b) * c - .5 : n % y, p = y === U ? 0 : o ? b * h / y - .5 : n / y | 0, x = 0, _ = U, v = 0; v < b; v++)
            f = v % y - d, m = p - (v / y | 0), M[v] = g = l ? Math.abs("y" === l ? m : f) : V(f * f + m * m), g > x && (x = g), g < _ && (_ = g);
        "random" === n && _e(M), M.max = x - _, M.min = _, M.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (y > b ? b - 1 : l ? "y" === l ? b / y : y : Math.max(y, b / y)) || 0) * ("edges" === n ? -1 : 1), M.b = b < 0 ? r - b : r, M.u = fe(e.amount || e.each) || 0, i = i && b < 0 ? Xe(i) : i;
    } return b = (M[t] - M.min) / M.max || 0, Rt(M.b + (i ? i(b) : b) * M.v) + M.u; }; }, be = function (t) { var e = Math.pow(10, ((t + "").split(".")[1] || "").length); return function (i) { var n = Rt(Math.round(parseFloat(i) / t) * t * e); return (n - n % 1) / e + (X(i) ? 0 : fe(i)); }; }, Me = function (t, e) { var i, n, r = tt(t); return !r && Z(t) && (i = r = t.radius || U, t.values ? (t = ve(t.values), (n = !X(t[0])) && (i *= i)) : t = be(t.increment)), de(e, r ? q(t) ? function (e) { return n = t(e), Math.abs(n - e) <= i ? n : e; } : function (e) { for (var r, s, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), l = U, c = 0, h = t.length; h--;)
        (r = n ? (r = t[h].x - a) * r + (s = t[h].y - o) * s : Math.abs(t[h] - a)) < l && (l = r, c = h); return c = !i || l <= i ? t[c] : e, n || c === e || X(e) ? c : c + fe(e); } : be(t)); }, we = function (t, e, i, n) { return de(tt(t) ? !e : !0 === i ? (i = 0, !1) : !n, (function () { return tt(t) ? t[~~(Math.random() * t.length)] : (n = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n; })); }, Se = function (t, e, i) { return de(i, (function (i) { return t[~~e(i)]; })); }, Te = function (t) { for (var e, i, n, r, s = 0, a = ""; ~(e = t.indexOf("random(", s));)
        n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? at : et), a += t.substr(s, e - s) + we(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1; return a + t.substr(s, t.length - s); }, Ee = function (t, e, i, n, r) { var s = e - t, a = n - i; return de(r, (function (e) { return i + ((e - t) / s * a || 0); })); }, Ae = function (t, e, i) { var n, r, s, a = t.labels, o = U; for (n in a)
        (r = a[n] - e) < 0 == !!i && r && o > (r = Math.abs(r)) && (s = n, o = r); return s; }, Ce = function (t, e, i) { var n, r, s, a = t.vars, l = a[e], c = o, h = t._ctx; if (l)
        return n = a[e + "Params"], r = a.callbackScope || t, i && _t.length && Ot(), h && (o = h), s = n ? l.apply(r, n) : l.call(r), o = c, s; }, Le = function (t) { return jt(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && Ce(t, "onInterrupt"), t; }, Pe = [], Re = function (t) { if (K()) {
        var e = (t = !t.name && t.default || t).name, i = q(t), n = e && !i && t.init ? function () { this._props = []; } : t, r = { init: ft, render: Mi, add: ai, kill: Si, modifier: wi, rawVars: 0 }, s = { targetTest: 0, get: 0, getSetter: xi, aliases: {}, register: 0 };
        if (Ve(), t !== n) {
            if (bt[e])
                return;
            kt(n, kt(Gt(t, r), s)), Bt(n.prototype, Bt(r, Gt(t, s))), bt[n.prop = e] = n, t.targetTest && (St.push(n), xt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
        }
        pt(e, n), t.register && t.register(Bi, n, Ai);
    }
    else
        Pe.push(t); }, De = 255, Ie = { aqua: [0, De, De], lime: [0, De, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, De], navy: [0, 0, 128], white: [De, De, De], olive: [128, 128, 0], yellow: [De, De, 0], orange: [De, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [De, 0, 0], pink: [De, 192, 203], cyan: [0, De, De], transparent: [De, De, De, 0] }, Oe = function (t, e, i) { return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * De + .5 | 0; }, ze = function (t, e, i) { var n, r, s, a, o, l, c, h, u, d, p = t ? X(t) ? [t >> 16, t >> 8 & De, t & De] : 0 : Ie.black; if (!p) {
        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ie[t])
            p = Ie[t];
        else if ("#" === t.charAt(0)) {
            if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length)
                return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & De, p & De, parseInt(t.substr(7), 16) / 255];
            p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & De, t & De];
        }
        else if ("hsl" === t.substr(0, 3))
            if (p = d = t.match(et), e) {
                if (~t.indexOf("="))
                    return p = t.match(it), i && p.length < 4 && (p[3] = 1), p;
            }
            else
                a = +p[0] % 360 / 360, o = +p[1] / 100, n = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), p.length > 3 && (p[3] *= 1), p[0] = Oe(a + 1 / 3, n, r), p[1] = Oe(a, n, r), p[2] = Oe(a - 1 / 3, n, r);
        else
            p = t.match(et) || Ie.transparent;
        p = p.map(Number);
    } return e && !d && (n = p[0] / De, r = p[1] / De, s = p[2] / De, l = ((c = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2, c === h ? a = o = 0 : (u = c - h, o = l > .5 ? u / (2 - c - h) : u / (c + h), a = c === n ? (r - s) / u + (r < s ? 6 : 0) : c === r ? (s - n) / u + 2 : (n - r) / u + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * l + .5)), i && p.length < 4 && (p[3] = 1), p; }, Ne = function (t) { var e = [], i = [], n = -1; return t.split(ke).forEach((function (t) { var r = t.match(nt) || []; e.push.apply(e, r), i.push(n += r.length + 1); })), e.c = i, e; }, Ue = function (t, e, i) { var n, r, s, a, o = "", l = (t + o).match(ke), c = e ? "hsla(" : "rgba(", h = 0; if (!l)
        return t; if (l = l.map((function (t) { return (t = ze(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"; })), i && (s = Ne(t), (n = i.c).join(o) !== s.c.join(o)))
        for (a = (r = t.replace(ke, "1").split(nt)).length - 1; h < a; h++)
            o += r[h] + (~n.indexOf(h) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift()); if (!r)
        for (a = (r = t.split(ke)).length - 1; h < a; h++)
            o += r[h] + l[h]; return o + r[a]; }, ke = function () { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b"; for (t in Ie)
        e += "|" + t + "\\b"; return new RegExp(e + ")", "gi"); }(), Be = /hsl[a]?\(/, Fe = function (t) { var e, i = t.join(" "); if (ke.lastIndex = 0, ke.test(i))
        return e = Be.test(i), t[1] = Ue(t[1], e), t[0] = Ue(t[0], e, Ne(t[1])), !0; }, Ge = (M = Date.now, w = 500, S = 33, T = M(), E = T, C = A = 1e3 / 240, P = function t(e) { var i, n, r, s, a = M() - E, o = !0 === e; if (a > w && (T += a - S), ((i = (r = (E += a) - T) - C) > 0 || o) && (s = ++_.frame, y = r - 1e3 * _.time, _.time = r /= 1e3, C += i + (i >= A ? 4 : A - i), n = 1), o || (g = v(t)), n)
        for (b = 0; b < L.length; b++)
            L[b](r, y, s, e); }, _ = { time: 0, frame: 0, tick: function () { P(!0); }, deltaRatio: function (t) { return y / (1e3 / (t || 60)); }, wake: function () { d && (!h && K() && (c = h = window, u = c.document || {}, lt.gsap = Bi, (c.gsapVersions || (c.gsapVersions = [])).push(Bi.version), ht(ct || c.GreenSockGlobals || !c.gsap && c || {}), x = c.requestAnimationFrame, Pe.forEach(Re)), g && _.sleep(), v = x || function (t) { return setTimeout(t, C - 1e3 * _.time + 1 | 0); }, m = 1, P(2)); }, sleep: function () { (x ? c.cancelAnimationFrame : clearTimeout)(g), m = 0, v = ft; }, lagSmoothing: function (t, e) { w = t || 1 / 0, S = Math.min(e || 33, w); }, fps: function (t) { A = 1e3 / (t || 240), C = 1e3 * _.time + A; }, add: function (t, e, i) { var n = e ? function (e, i, r, s) { t(e, i, r, s), _.remove(n); } : t; return _.remove(t), L[i ? "unshift" : "push"](n), Ve(), n; }, remove: function (t, e) { ~(e = L.indexOf(t)) && L.splice(e, 1) && b >= e && b--; }, _listeners: L = [] }), Ve = function () { return !m && Ge.wake(); }, He = {}, We = /^[\d.\-M][\d.\-,\s]/, je = /["']/g, qe = function (t) { for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++)
        i = s[o], e = o !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[a] = isNaN(n) ? n.replace(je, "").trim() : +n, a = i.substr(e + 1).trim(); return r; }, Xe = function (t) { return function (e) { return 1 - t(1 - e); }; }, Ye = function t(e, i) { for (var n, r = e._first; r;)
        r instanceof ii ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next; }, Ze = function (t, e) { return t && (q(t) ? t : He[t] || function (t) { var e, i, n, r, s = (t + "").split("("), a = He[s[0]]; return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [qe(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(Nt)) : He._CE && We.test(t) ? He._CE("", t) : a; }(t)) || e; }, Je = function (t, e, i, n) { void 0 === i && (i = function (t) { return 1 - e(1 - t); }), void 0 === n && (n = function (t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2; }); var r, s = { easeIn: e, easeOut: i, easeInOut: n }; return Lt(t, (function (t) { for (var e in He[t] = lt[t] = s, He[r = t.toLowerCase()] = i, s)
        He[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = He[t + "." + e] = s[e]; })), s; }, Ke = function (t) { return function (e) { return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2; }; }, $e = function t(e, i, n) { var r = i >= 1 ? i : 1, s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1), a = s / B * (Math.asin(1 / r) || 0), o = function (t) { return 1 === t ? 1 : r * Math.pow(2, -10 * t) * W((t - a) * s) + 1; }, l = "out" === e ? o : "in" === e ? function (t) { return 1 - o(1 - t); } : Ke(o); return s = B / s, l.config = function (i, n) { return t(e, i, n); }, l; }, Qe = function t(e, i) { void 0 === i && (i = 1.70158); var n = function (t) { return t ? --t * t * ((i + 1) * t + i) + 1 : 0; }, r = "out" === e ? n : "in" === e ? function (t) { return 1 - n(1 - t); } : Ke(n); return r.config = function (i) { return t(e, i); }, r; };
    Lt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) { var i = e < 5 ? e + 1 : e; Je(t + ",Power" + (i - 1), e ? function (t) { return Math.pow(t, i); } : function (t) { return t; }, (function (t) { return 1 - Math.pow(1 - t, i); }), (function (t) { return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2; })); })), He.Linear.easeNone = He.none = He.Linear.easeIn, Je("Elastic", $e("in"), $e("out"), $e()), R = 7.5625, I = 1 / (D = 2.75), Je("Bounce", (function (t) { return 1 - O(1 - t); }), O = function (t) { return t < I ? R * t * t : t < .7272727272727273 ? R * Math.pow(t - 1.5 / D, 2) + .75 : t < .9090909090909092 ? R * (t -= 2.25 / D) * t + .9375 : R * Math.pow(t - 2.625 / D, 2) + .984375; }), Je("Expo", (function (t) { return t ? Math.pow(2, 10 * (t - 1)) : 0; })), Je("Circ", (function (t) { return -(V(1 - t * t) - 1); })), Je("Sine", (function (t) { return 1 === t ? 1 : 1 - H(t * F); })), Je("Back", Qe("in"), Qe("out"), Qe()), He.SteppedEase = He.steps = lt.SteppedEase = { config: function (t, e) { void 0 === t && (t = 1); var i = 1 / t, n = t + (e ? 0 : 1), r = e ? 1 : 0; return function (t) { return ((n * pe(0, .99999999, t) | 0) + r) * i; }; } }, N.ease = He["quad.out"], Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) { return Tt += t + "," + t + "Params,"; }));
    var ti = function (t, e) { this.id = G++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ct, this.set = e ? e.getSetter : xi; }, ei = function () { function t(t) { this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, oe(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), m || Ge.wake(); } var e = t.prototype; return e.delay = function (t) { return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay; }, e.duration = function (t) { return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur; }, e.totalDuration = function (t) { return arguments.length ? (this._dirty = 0, oe(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur; }, e.totalTime = function (t, e) { if (Ve(), !arguments.length)
        return this._tTime; var i = this._dp; if (i && i.smoothChildTiming && this._ts) {
        for (te(this, t), !i._dp || i.parent || ee(i, this); i && i.parent;)
            i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && ie(this._dp, this, this._start - this._delay);
    } return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === k || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), zt(this, t, e)), this; }, e.time = function (t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Jt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time; }, e.totalProgress = function (t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio; }, e.progress = function (t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Jt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio; }, e.iteration = function (t, e) { var i = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Kt(this._tTime, i) + 1 : 1; }, e.timeScale = function (t) { if (!arguments.length)
        return -1e-8 === this._rts ? 0 : this._rts; if (this._rts === t)
        return this; var e = this.parent && this._ts ? $t(this.parent._time, this) : this._tTime; return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(pe(-Math.abs(this._delay), this._tDur, e), !0), Qt(this), Xt(this); }, e.paused = function (t) { return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ve(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)))), this) : this._ps; }, e.startTime = function (t) { if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return e && (e._sort || !this.parent) && ie(e, this, t - this._delay), this;
    } return this._start; }, e.endTime = function (t) { return this._start + (J(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1); }, e.rawTime = function (t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $t(e.rawTime(t), this) : this._tTime : this._tTime; }, e.revert = function (t) { void 0 === t && (t = vt); var e = a; return a = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this; }, e.globalTime = function (t) { for (var e = this, i = arguments.length ? t : e.rawTime(); e;)
        i = e._start + i / (e._ts || 1), e = e._dp; return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : i; }, e.repeat = function (t) { return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, le(this)) : -2 === this._repeat ? 1 / 0 : this._repeat; }, e.repeatDelay = function (t) { if (arguments.length) {
        var e = this._time;
        return this._rDelay = t, le(this), e ? this.time(e) : this;
    } return this._rDelay; }, e.yoyo = function (t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo; }, e.seek = function (t, e) { return this.totalTime(he(this, t), J(e)); }, e.restart = function (t, e) { return this.play().totalTime(t ? -this._delay : 0, J(e)); }, e.play = function (t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1); }, e.reverse = function (t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1); }, e.pause = function (t, e) { return null != t && this.seek(t, e), this.paused(!0); }, e.resume = function () { return this.paused(!1); }, e.reversed = function (t) { return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0; }, e.invalidate = function () { return this._initted = this._act = 0, this._zTime = -1e-8, this; }, e.isActive = function () { var t, e = this.parent || this._dp, i = this._start; return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - k)); }, e.eventCallback = function (t, e, i) { var n = this.vars; return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]; }, e.then = function (t) { var e = this; return new Promise((function (i) { var n = q(t) ? t : Ut, r = function () { var t = e.then; e.then = null, q(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t; }; e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r; })); }, e.kill = function () { Le(this); }, t; }();
    kt(ei.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
    var ii = function (t) { function e(e, i) { var r; return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = J(e.sortChildren), l && ie(e.parent || l, n(r), i), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && ne(n(r), e.scrollTrigger), r; } r(e, t); var i = e.prototype; return i.to = function (t, e, i) { return ue(0, arguments, this), this; }, i.from = function (t, e, i) { return ue(1, arguments, this), this; }, i.fromTo = function (t, e, i, n) { return ue(2, arguments, this), this; }, i.set = function (t, e, i) { return e.duration = 0, e.parent = this, Vt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new pi(t, e, he(this, i), 1), this; }, i.call = function (t, e, i) { return ie(this, pi.delayedCall(0, t, e), i); }, i.staggerTo = function (t, e, i, n, r, s, a) { return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = a, i.parent = this, new pi(t, i, he(this, r)), this; }, i.staggerFrom = function (t, e, i, n, r, s, a) { return i.runBackwards = 1, Vt(i).immediateRender = J(i.immediateRender), this.staggerTo(t, e, i, n, r, s, a); }, i.staggerFromTo = function (t, e, i, n, r, s, a, o) { return n.startAt = i, Vt(n).immediateRender = J(n.immediateRender), this.staggerTo(t, e, n, r, s, a, o); }, i.render = function (t, e, i) { var n, r, s, o, c, h, u, d, p, f, m, g, v = this._time, x = this._dirty ? this.totalDuration() : this._tDur, _ = this._dur, y = t <= 0 ? 0 : Rt(t), b = this._zTime < 0 != t < 0 && (this._initted || !_); if (this !== l && y > x && t >= 0 && (y = x), y !== this._tTime || i || b) {
        if (v !== this._time && _ && (y += this._time - v, t += this._time - v), n = y, p = this._start, h = !(d = this._ts), b && (_ || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
            if (m = this._yoyo, c = _ + this._rDelay, this._repeat < -1 && t < 0)
                return this.totalTime(100 * c + t, e, i);
            if (n = Rt(y % c), y === x ? (o = this._repeat, n = _) : ((o = ~~(y / c)) && o === y / c && (n = _, o--), n > _ && (n = _)), f = Kt(this._tTime, c), !v && this._tTime && f !== o && this._tTime - f * c - this._dur <= 0 && (f = o), m && 1 & o && (n = _ - n, g = 1), o !== f && !this._lock) {
                var M = m && 1 & f, w = M === (m && 1 & o);
                if (o < f && (M = !M), v = M ? 0 : _, this._lock = 1, this.render(v || (g ? 0 : Rt(o * c)), e, !_)._lock = 0, this._tTime = y, !e && this.parent && Ce(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                    return this;
                if (_ = this._dur, x = this._tDur, w && (this._lock = 2, v = M ? _ : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !h)
                    return this;
                Ye(this, g);
            }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (u = function (t, e, i) { var n; if (i > e)
            for (n = t._first; n && n._start <= i;) {
                if ("isPause" === n.data && n._start > e)
                    return n;
                n = n._next;
            }
        else
            for (n = t._last; n && n._start >= i;) {
                if ("isPause" === n.data && n._start < e)
                    return n;
                n = n._prev;
            } }(this, Rt(v), Rt(n)), u && (y -= n - (n = u._start))), this._tTime = y, this._time = n, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && n && !e && !o && (Ce(this, "onStart"), this._tTime !== y))
            return this;
        if (n >= v && t >= 0)
            for (r = this._first; r;) {
                if (s = r._next, (r._act || n >= r._start) && r._ts && u !== r) {
                    if (r.parent !== this)
                        return this.render(t, e, i);
                    if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !h) {
                        u = 0, s && (y += this._zTime = -1e-8);
                        break;
                    }
                }
                r = s;
            }
        else {
            r = this._last;
            for (var S = t < 0 ? t : n; r;) {
                if (s = r._prev, (r._act || S <= r._end) && r._ts && u !== r) {
                    if (r.parent !== this)
                        return this.render(t, e, i);
                    if (r.render(r._ts > 0 ? (S - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (S - r._start) * r._ts, e, i || a && (r._initted || r._startAt)), n !== this._time || !this._ts && !h) {
                        u = 0, s && (y += this._zTime = S ? -1e-8 : k);
                        break;
                    }
                }
                r = s;
            }
        }
        if (u && !e && (this.pause(), u.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1, this._ts))
            return this._start = p, Qt(this), this.render(t, e, i);
        this._onUpdate && !e && Ce(this, "onUpdate", !0), (y === x && this._tTime >= this.totalDuration() || !y && v) && (p !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((t || !_) && (y === x && this._ts > 0 || !y && this._ts < 0) && jt(this, 1), e || t < 0 && !v || !y && !v && x || (Ce(this, y === x && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < x && this.timeScale() > 0) && this._prom())));
    } return this; }, i.add = function (t, e) { var i = this; if (X(e) || (e = he(this, e, t)), !(t instanceof ei)) {
        if (tt(t))
            return t.forEach((function (t) { return i.add(t, e); })), this;
        if (j(t))
            return this.addLabel(t, e);
        if (!q(t))
            return this;
        t = pi.delayedCall(0, t);
    } return this !== t ? ie(this, t, e) : this; }, i.getChildren = function (t, e, i, n) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -1e8); for (var r = [], s = this._first; s;)
        s._start >= n && (s instanceof pi ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next; return r; }, i.getById = function (t) { for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
        if (e[i].vars.id === t)
            return e[i]; }, i.remove = function (t) { return j(t) ? this.removeLabel(t) : q(t) ? this.killTweensOf(t) : (Wt(this, t), t === this._recent && (this._recent = this._last), qt(this)); }, i.totalTime = function (e, i) { return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Rt(Ge.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime; }, i.addLabel = function (t, e) { return this.labels[t] = he(this, e), this; }, i.removeLabel = function (t) { return delete this.labels[t], this; }, i.addPause = function (t, e, i) { var n = pi.delayedCall(0, e || ft, i); return n.data = "isPause", this._hasPause = 1, ie(this, n, he(this, t)); }, i.removePause = function (t) { var e = this._first; for (t = he(this, t); e;)
        e._start === t && "isPause" === e.data && jt(e), e = e._next; }, i.killTweensOf = function (t, e, i) { for (var n = this.getTweensOf(t, i), r = n.length; r--;)
        ni !== n[r] && n[r].kill(t, e); return this; }, i.getTweensOf = function (t, e) { for (var i, n = [], r = ve(t), s = this._first, a = X(e); s;)
        s instanceof pi ? It(s._targets, r) && (a ? (!ni || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next; return n; }, i.tweenTo = function (t, e) { e = e || {}; var i, n = this, r = he(n, t), s = e, a = s.startAt, o = s.onStart, l = s.onStartParams, c = s.immediateRender, h = pi.to(n, kt({ ease: e.ease || "none", lazy: !1, immediateRender: !1, time: r, overwrite: "auto", duration: e.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || k, onStart: function () { if (n.pause(), !i) {
            var t = e.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale());
            h._dur !== t && oe(h, t, 0, 1).render(h._time, !0, !0), i = 1;
        } o && o.apply(h, l || []); } }, e)); return c ? h.render(0) : h; }, i.tweenFromTo = function (t, e, i) { return this.tweenTo(e, kt({ startAt: { time: he(this, t) } }, i)); }, i.recent = function () { return this._recent; }, i.nextLabel = function (t) { return void 0 === t && (t = this._time), Ae(this, he(this, t)); }, i.previousLabel = function (t) { return void 0 === t && (t = this._time), Ae(this, he(this, t), 1); }, i.currentLabel = function (t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + k); }, i.shiftChildren = function (t, e, i) { void 0 === i && (i = 0); for (var n, r = this._first, s = this.labels; r;)
        r._start >= i && (r._start += t, r._end += t), r = r._next; if (e)
        for (n in s)
            s[n] >= i && (s[n] += t); return qt(this); }, i.invalidate = function (e) { var i = this._first; for (this._lock = 0; i;)
        i.invalidate(e), i = i._next; return t.prototype.invalidate.call(this, e); }, i.clear = function (t) { void 0 === t && (t = !0); for (var e, i = this._first; i;)
        e = i._next, this.remove(i), i = e; return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), qt(this); }, i.totalDuration = function (t) { var e, i, n, r = 0, s = this, a = s._last, o = U; if (arguments.length)
        return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t)); if (s._dirty) {
        for (n = s.parent; a;)
            e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, ie(s, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1 / 0), o = 0), a._end > r && a._ts && (r = a._end), a = e;
        oe(s, s === l && s._time > r ? s._time : r, 1, 1), s._dirty = 0;
    } return s._tDur; }, e.updateRoot = function (t) { if (l._ts && (zt(l, $t(t, l)), p = Ge.frame), Ge.frame >= wt) {
        wt += z.autoSleep || 120;
        var e = l._first;
        if ((!e || !e._ts) && z.autoSleep && Ge._listeners.length < 2) {
            for (; e && !e._ts;)
                e = e._next;
            e || Ge.sleep();
        }
    } }, e; }(ei);
    kt(ii.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var ni, ri, si = function (t, e, i, n, r, s, a) { var o, l, c, h, u, d, p, f, m = new Ai(this._pt, t, e, 0, 1, bi, null, r), g = 0, v = 0; for (m.b = i, m.e = n, i += "", (p = ~(n += "").indexOf("random(")) && (n = Te(n)), s && (s(f = [i, n], t, e), i = f[0], n = f[1]), l = i.match(rt) || []; o = rt.exec(n);)
        h = o[0], u = n.substring(g, o.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), h !== l[v++] && (d = parseFloat(l[v - 1]) || 0, m._pt = { _next: m._pt, p: u || 1 === v ? u : ",", s: d, c: "=" === h.charAt(1) ? Dt(d, h) - d : parseFloat(h) - d, m: c && c < 4 ? Math.round : 0 }, g = rt.lastIndex); return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = a, (st.test(n) || p) && (m.e = 0), this._pt = m, m; }, ai = function (t, e, i, n, r, s, a, o, l, c) { q(n) && (n = n(r || 0, t, s)); var h, u = t[e], d = "get" !== i ? i : q(u) ? l ? t[e.indexOf("set") || !q(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u, p = q(u) ? l ? gi : mi : fi; if (j(n) && (~n.indexOf("random(") && (n = Te(n)), "=" === n.charAt(1) && ((h = Dt(d, n) + (fe(d) || 0)) || 0 === h) && (n = h)), !c || d !== n || ri)
        return isNaN(d * n) || "" === n ? (!u && !(e in t) && ut(e, n), si.call(this, t, e, d, n, p, o || z.stringFilter, l)) : (h = new Ai(this._pt, t, e, +d || 0, n - (d || 0), "boolean" == typeof u ? yi : _i, 0, p), l && (h.fp = l), a && h.modifier(a, this, t), this._pt = h); }, oi = function (t, e, i, n, r, s) { var a, o, l, c; if (bt[t] && !1 !== (a = new bt[t]).init(r, a.rawVars ? e[t] : function (t, e, i, n, r) { if (q(t) && (t = hi(t, r, e, i, n)), !Z(t) || t.style && t.nodeType || tt(t) || Q(t))
        return j(t) ? hi(t, r, e, i, n) : t; var s, a = {}; for (s in t)
        a[s] = hi(t[s], r, e, i, n); return a; }(e[t], n, r, s, i), i, n, s) && (i._pt = o = new Ai(i._pt, r, t, 0, 1, a.render, a, 0, a.priority), i !== f))
        for (l = i._ptLookup[i._targets.indexOf(r)], c = a._props.length; c--;)
            l[a._props[c]] = o; return a; }, li = function t(e, i, n) { var r, o, c, h, u, d, p, f, m, g, v, x, _, y = e.vars, b = y.ease, M = y.startAt, w = y.immediateRender, S = y.lazy, T = y.onUpdate, E = y.onUpdateParams, A = y.callbackScope, C = y.runBackwards, L = y.yoyoEase, P = y.keyframes, R = y.autoRevert, D = e._dur, I = e._startAt, O = e._targets, z = e.parent, B = z && "nested" === z.data ? z.vars.targets : O, F = "auto" === e._overwrite && !s, G = e.timeline; if (G && (!P || !b) && (b = "none"), e._ease = Ze(b, N.ease), e._yEase = L ? Xe(Ze(!0 === L ? b : L, N.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !G && !!y.runBackwards, !G || P && !y.stagger) {
        if (x = (f = O[0] ? At(O[0]).harness : 0) && y[f.prop], r = Gt(y, xt), I && (I._zTime < 0 && I.progress(1), i < 0 && C && w && !R ? I.render(-1, !0) : I.revert(C && D ? gt : mt), I._lazy = 0), M) {
            if (jt(e._startAt = pi.set(O, kt({ data: "isStart", overwrite: !1, parent: z, immediateRender: !0, lazy: !I && J(S), startAt: null, delay: 0, onUpdate: T, onUpdateParams: E, callbackScope: A, stagger: 0 }, M))), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a || !w && !R) && e._startAt.revert(gt), w && D && i <= 0 && n <= 0)
                return void (i && (e._zTime = i));
        }
        else if (C && D && !I)
            if (i && (w = !1), c = kt({ overwrite: !1, data: "isFromStart", lazy: w && !I && J(S), immediateRender: w, stagger: 0, parent: z }, r), x && (c[f.prop] = x), jt(e._startAt = pi.set(O, c)), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a ? e._startAt.revert(gt) : e._startAt.render(-1, !0)), e._zTime = i, w) {
                if (!i)
                    return;
            }
            else
                t(e._startAt, k, k);
        for (e._pt = e._ptCache = 0, S = D && J(S) || S && !D, o = 0; o < O.length; o++) {
            if (p = (u = O[o])._gsap || Et(O)[o]._gsap, e._ptLookup[o] = g = {}, yt[p.id] && _t.length && Ot(), v = B === O ? o : B.indexOf(u), f && !1 !== (m = new f).init(u, x || r, e, v, B) && (e._pt = h = new Ai(e._pt, u, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function (t) { g[t] = h; })), m.priority && (d = 1)), !f || x)
                for (c in r)
                    bt[c] && (m = oi(c, r, e, v, u, B)) ? m.priority && (d = 1) : g[c] = h = ai.call(e, u, c, "get", r[c], v, B, 0, y.stringFilter);
            e._op && e._op[o] && e.kill(u, e._op[o]), F && e._pt && (ni = e, l.killTweensOf(u, g, e.globalTime(i)), _ = !e.parent, ni = 0), e._pt && S && (yt[p.id] = 1);
        }
        d && Ei(e), e._onInit && e._onInit(e);
    } e._onUpdate = T, e._initted = (!e._op || e._pt) && !_, P && i <= 0 && G.render(U, !0, !0); }, ci = function (t, e, i, n) { var r, s, a = e.ease || n || "power1.inOut"; if (tt(e))
        s = i[t] || (i[t] = []), e.forEach((function (t, i) { return s.push({ t: i / (e.length - 1) * 100, v: t, e: a }); }));
    else
        for (r in e)
            s = i[r] || (i[r] = []), "ease" === r || s.push({ t: parseFloat(t), v: e[r], e: a }); }, hi = function (t, e, i, n, r) { return q(t) ? t.call(e, i, n, r) : j(t) && ~t.indexOf("random(") ? Te(t) : t; }, ui = Tt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", di = {};
    Lt(ui + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) { return di[t] = 1; }));
    var pi = function (t) { function e(e, i, r, a) { var o; "number" == typeof i && (r.duration = i, i = r, r = null); var c, h, u, d, p, f, m, g, v = (o = t.call(this, a ? i : Vt(i)) || this).vars, x = v.duration, _ = v.delay, y = v.immediateRender, b = v.stagger, M = v.overwrite, w = v.keyframes, S = v.defaults, T = v.scrollTrigger, E = v.yoyoEase, A = i.parent || l, C = (tt(e) || Q(e) ? X(e[0]) : "length" in i) ? [e] : ve(e); if (o._targets = C.length ? Et(C) : dt("GSAP target " + e + " not found. https://greensock.com", !z.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = M, w || b || $(x) || $(_)) {
        if (i = o.vars, (c = o.timeline = new ii({ data: "nested", defaults: S || {}, targets: A && "nested" === A.data ? A.vars.targets : C })).kill(), c.parent = c._dp = n(o), c._start = 0, b || $(x) || $(_)) {
            if (d = C.length, m = b && ye(b), Z(b))
                for (p in b)
                    ~ui.indexOf(p) && (g || (g = {}), g[p] = b[p]);
            for (h = 0; h < d; h++)
                (u = Gt(i, di)).stagger = 0, E && (u.yoyoEase = E), g && Bt(u, g), f = C[h], u.duration = +hi(x, n(o), h, f, C), u.delay = (+hi(_, n(o), h, f, C) || 0) - o._delay, !b && 1 === d && u.delay && (o._delay = _ = u.delay, o._start += _, u.delay = 0), c.to(f, u, m ? m(h, f, C) : 0), c._ease = He.none;
            c.duration() ? x = _ = 0 : o.timeline = 0;
        }
        else if (w) {
            Vt(kt(c.vars.defaults, { ease: "none" })), c._ease = Ze(w.ease || i.ease || "none");
            var L, P, R, D = 0;
            if (tt(w))
                w.forEach((function (t) { return c.to(C, t, ">"); })), c.duration();
            else {
                for (p in u = {}, w)
                    "ease" === p || "easeEach" === p || ci(p, w[p], u, w.easeEach);
                for (p in u)
                    for (L = u[p].sort((function (t, e) { return t.t - e.t; })), D = 0, h = 0; h < L.length; h++)
                        (R = { ease: (P = L[h]).e, duration: (P.t - (h ? L[h - 1].t : 0)) / 100 * x })[p] = P.v, c.to(C, R, D), D += R.duration;
                c.duration() < x && c.to({}, { duration: x - c.duration() });
            }
        }
        x || o.duration(x = c.duration());
    }
    else
        o.timeline = 0; return !0 !== M || s || (ni = n(o), l.killTweensOf(C), ni = 0), ie(A, n(o), r), i.reversed && o.reverse(), i.paused && o.paused(!0), (y || !x && !w && o._start === Rt(A._time) && J(y) && Zt(n(o)) && "nested" !== A.data) && (o._tTime = -1e-8, o.render(Math.max(0, -_) || 0)), T && ne(n(o), T), o; } r(e, t); var i = e.prototype; return i.render = function (t, e, i) { var n, r, s, o, l, c, h, u, d, p = this._time, f = this._tDur, m = this._dur, g = t < 0, v = t > f - k && !g ? f : t < k ? 0 : t; if (m) {
        if (v !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
            if (n = v, u = this.timeline, this._repeat) {
                if (o = m + this._rDelay, this._repeat < -1 && g)
                    return this.totalTime(100 * o + t, e, i);
                if (n = Rt(v % o), v === f ? (s = this._repeat, n = m) : ((s = ~~(v / o)) && s === v / o && (n = m, s--), n > m && (n = m)), (c = this._yoyo && 1 & s) && (d = this._yEase, n = m - n), l = Kt(this._tTime, o), n === p && !i && this._initted)
                    return this._tTime = v, this;
                s !== l && (u && this._yEase && Ye(u, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = i = 1, this.render(Rt(o * s), !0).invalidate()._lock = 0));
            }
            if (!this._initted) {
                if (re(this, g ? t : n, i, e, v))
                    return this._tTime = 0, this;
                if (p !== this._time)
                    return this;
                if (m !== this._dur)
                    return this.render(t, e, i);
            }
            if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (d || this._ease)(n / m), this._from && (this.ratio = h = 1 - h), n && !p && !e && !s && (Ce(this, "onStart"), this._tTime !== v))
                return this;
            for (r = this._pt; r;)
                r.r(h, r.d), r = r._next;
            u && u.render(t < 0 ? t : !n && c ? -1e-8 : u._dur * u._ease(n / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && Yt(this, t, 0, i), Ce(this, "onUpdate")), this._repeat && s !== l && this.vars.onRepeat && !e && this.parent && Ce(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && Yt(this, t, 0, !0), (t || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && jt(this, 1), e || g && !p || !(v || p || c) || (Ce(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()));
        }
    }
    else
        !function (t, e, i, n) { var r, s, o, l = t.ratio, c = e < 0 || !e && (!t._start && se(t) && (t._initted || !ae(t)) || (t._ts < 0 || t._dp._ts < 0) && !ae(t)) ? 0 : 1, h = t._rDelay, u = 0; if (h && t._repeat && (u = pe(0, t._tDur, e), s = Kt(u, h), t._yoyo && 1 & s && (c = 1 - c), s !== Kt(t._tTime, h) && (l = 1 - c, t.vars.repeatRefresh && t._initted && t.invalidate())), c !== l || a || n || t._zTime === k || !e && t._zTime) {
            if (!t._initted && re(t, e, n, i, u))
                return;
            for (o = t._zTime, t._zTime = e || (i ? k : 0), i || (i = e && !o), t.ratio = c, t._from && (c = 1 - c), t._time = 0, t._tTime = u, r = t._pt; r;)
                r.r(c, r.d), r = r._next;
            e < 0 && Yt(t, e, 0, !0), t._onUpdate && !i && Ce(t, "onUpdate"), u && t._repeat && !i && t.parent && Ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === c && (c && jt(t, 1), i || a || (Ce(t, c ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        }
        else
            t._zTime || (t._zTime = e); }(this, t, e, i); return this; }, i.targets = function () { return this._targets; }, i.invalidate = function (e) { return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e); }, i.resetTo = function (t, e, i, n) { m || Ge.wake(), this._ts || this.play(); var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts); return this._initted || li(this, r), function (t, e, i, n, r, s, a) { var o, l, c, h, u = (t._pt && t._ptCache || (t._ptCache = {}))[e]; if (!u)
        for (u = t._ptCache[e] = [], c = t._ptLookup, h = t._targets.length; h--;) {
            if ((o = c[h][e]) && o.d && o.d._pt)
                for (o = o.d._pt; o && o.p !== e && o.fp !== e;)
                    o = o._next;
            if (!o)
                return ri = 1, t.vars[e] = "+=0", li(t, a), ri = 0, 1;
            u.push(o);
        } for (h = u.length; h--;)
        (o = (l = u[h])._pt || l).s = !n && 0 !== n || r ? o.s + (n || 0) + s * o.c : n, o.c = i - o.s, l.e && (l.e = Pt(i) + fe(l.e)), l.b && (l.b = o.s + fe(l.b)); }(this, t, e, i, n, this._ease(r / this._dur), r) ? this.resetTo(t, e, i, n) : (te(this, 0), this.parent || Ht(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0)); }, i.kill = function (t, e) { if (void 0 === e && (e = "all"), !(t || e && "all" !== e))
        return this._lazy = this._pt = 0, this.parent ? Le(this) : this; if (this.timeline) {
        var i = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, ni && !0 !== ni.vars.overwrite)._first || Le(this), this.parent && i !== this.timeline.totalDuration() && oe(this, this._dur * this.timeline._tDur / i, 0, 1), this;
    } var n, r, s, a, o, l, c, h = this._targets, u = t ? ve(t) : h, d = this._ptLookup, p = this._pt; if ((!e || "all" === e) && function (t, e) { for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];)
        ; return i < 0; }(h, u))
        return "all" === e && (this._pt = 0), Le(this); for (n = this._op = this._op || [], "all" !== e && (j(e) && (o = {}, Lt(e, (function (t) { return o[t] = 1; })), e = o), e = function (t, e) { var i, n, r, s, a = t[0] ? At(t[0]).harness : 0, o = a && a.aliases; if (!o)
        return e; for (n in i = Bt({}, e), o)
        if (n in i)
            for (r = (s = o[n].split(",")).length; r--;)
                i[s[r]] = i[n]; return i; }(h, e)), c = h.length; c--;)
        if (~u.indexOf(h[c]))
            for (o in r = d[c], "all" === e ? (n[c] = e, a = r, s = {}) : (s = n[c] = n[c] || {}, a = e), a)
                (l = r && r[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Wt(this, l, "_pt"), delete r[o]), "all" !== s && (s[o] = 1); return this._initted && !this._pt && p && Le(this), this; }, e.to = function (t, i) { return new e(t, i, arguments[2]); }, e.from = function (t, e) { return ue(1, arguments); }, e.delayedCall = function (t, i, n, r) { return new e(i, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: i, onReverseComplete: i, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: r }); }, e.fromTo = function (t, e, i) { return ue(2, arguments); }, e.set = function (t, i) { return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i); }, e.killTweensOf = function (t, e, i) { return l.killTweensOf(t, e, i); }, e; }(ei);
    kt(pi.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), Lt("staggerTo,staggerFrom,staggerFromTo", (function (t) { pi[t] = function () { var e = new ii, i = me.call(arguments, 0); return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i); }; }));
    var fi = function (t, e, i) { return t[e] = i; }, mi = function (t, e, i) { return t[e](i); }, gi = function (t, e, i, n) { return t[e](n.fp, i); }, vi = function (t, e, i) { return t.setAttribute(e, i); }, xi = function (t, e) { return q(t[e]) ? mi : Y(t[e]) && t.setAttribute ? vi : fi; }, _i = function (t, e) { return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e); }, yi = function (t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e); }, bi = function (t, e) { var i = e._pt, n = ""; if (!t && e.b)
        n = e.b;
    else if (1 === t && e.e)
        n = e.e;
    else {
        for (; i;)
            n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
        n += e.c;
    } e.set(e.t, e.p, n, e); }, Mi = function (t, e) { for (var i = e._pt; i;)
        i.r(t, i.d), i = i._next; }, wi = function (t, e, i, n) { for (var r, s = this._pt; s;)
        r = s._next, s.p === n && s.modifier(t, e, i), s = r; }, Si = function (t) { for (var e, i, n = this._pt; n;)
        i = n._next, n.p === t && !n.op || n.op === t ? Wt(this, n, "_pt") : n.dep || (e = 1), n = i; return !e; }, Ti = function (t, e, i, n) { n.mSet(t, e, n.m.call(n.tween, i, n.mt), n); }, Ei = function (t) { for (var e, i, n, r, s = t._pt; s;) {
        for (e = s._next, i = n; i && i.pr > s.pr;)
            i = i._next;
        (s._prev = i ? i._prev : r) ? s._prev._next = s : n = s, (s._next = i) ? i._prev = s : r = s, s = e;
    } t._pt = n; }, Ai = function () { function t(t, e, i, n, r, s, a, o, l) { this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || _i, this.d = a || this, this.set = o || fi, this.pr = l || 0, this._next = t, t && (t._prev = this); } return t.prototype.modifier = function (t, e, i) { this.mSet = this.mSet || this.set, this.set = Ti, this.m = t, this.mt = i, this.tween = e; }, t; }();
    Lt(Tt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) { return xt[t] = 1; })), lt.TweenMax = lt.TweenLite = pi, lt.TimelineLite = lt.TimelineMax = ii, l = new ii({ sortChildren: !1, defaults: N, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), z.stringFilter = Fe;
    var Ci = [], Li = {}, Pi = [], Ri = 0, Di = function (t) { return (Li[t] || Pi).map((function (t) { return t(); })); }, Ii = function () { var t = Date.now(), e = []; t - Ri > 2 && (Di("matchMediaInit"), Ci.forEach((function (t) { var i, n, r, s, a = t.queries, o = t.conditions; for (n in a)
        (i = c.matchMedia(a[n]).matches) && (r = 1), i !== o[n] && (o[n] = i, s = 1); s && (t.revert(), r && e.push(t)); })), Di("matchMediaRevert"), e.forEach((function (t) { return t.onMatch(t); })), Ri = t, Di("matchMedia")); }, Oi = function () { function t(t, e) { this.selector = e && xe(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t); } var e = t.prototype; return e.add = function (t, e, i) { q(t) && (i = e, e = t, t = q); var n = this, r = function () { var t, r = o, s = n.selector; return r && r !== n && r.data.push(n), i && (n.selector = xe(i)), o = n, t = e.apply(n, arguments), q(t) && n._r.push(t), o = r, n.selector = s, n.isReverted = !1, t; }; return n.last = r, t === q ? r(n) : t ? n[t] = r : r; }, e.ignore = function (t) { var e = o; o = null, t(this), o = e; }, e.getTweens = function () { var e = []; return this.data.forEach((function (i) { return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof pi && !(i.parent && "nested" === i.parent.data) && e.push(i); })), e; }, e.clear = function () { this._r.length = this.data.length = 0; }, e.kill = function (t, e) { var i = this; if (t) {
        var n = this.getTweens();
        this.data.forEach((function (t) { "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function (t) { return n.splice(n.indexOf(t), 1); }))); })), n.map((function (t) { return { g: t.globalTime(0), t: t }; })).sort((function (t, e) { return e.g - t.g || -1; })).forEach((function (e) { return e.t.revert(t); })), this.data.forEach((function (e) { return !(e instanceof ei) && e.revert && e.revert(t); })), this._r.forEach((function (e) { return e(t, i); })), this.isReverted = !0;
    }
    else
        this.data.forEach((function (t) { return t.kill && t.kill(); })); if (this.clear(), e) {
        var r = Ci.indexOf(this);
        ~r && Ci.splice(r, 1);
    } }, e.revert = function (t) { this.kill(t || {}); }, t; }(), zi = function () { function t(t) { this.contexts = [], this.scope = t; } var e = t.prototype; return e.add = function (t, e, i) { Z(t) || (t = { matches: t }); var n, r, s, a = new Oi(0, i || this.scope), o = a.conditions = {}; for (r in this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t)
        "all" === r ? s = 1 : (n = c.matchMedia(t[r])) && (Ci.indexOf(a) < 0 && Ci.push(a), (o[r] = n.matches) && (s = 1), n.addListener ? n.addListener(Ii) : n.addEventListener("change", Ii)); return s && e(a), this; }, e.revert = function (t) { this.kill(t || {}); }, e.kill = function (t) { this.contexts.forEach((function (e) { return e.kill(t, !0); })); }, t; }(), Ni = { registerPlugin: function () { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i]; e.forEach((function (t) { return Re(t); })); }, timeline: function (t) { return new ii(t); }, getTweensOf: function (t, e) { return l.getTweensOf(t, e); }, getProperty: function (t, e, i, n) { j(t) && (t = ve(t)[0]); var r = At(t || {}).get, s = i ? Ut : Nt; return "native" === i && (i = ""), t ? e ? s((bt[e] && bt[e].get || r)(t, e, i, n)) : function (e, i, n) { return s((bt[e] && bt[e].get || r)(t, e, i, n)); } : t; }, quickSetter: function (t, e, i) { if ((t = ve(t)).length > 1) {
            var n = t.map((function (t) { return Bi.quickSetter(t, e, i); })), r = n.length;
            return function (t) { for (var e = r; e--;)
                n[e](t); };
        } t = t[0] || {}; var s = bt[e], a = At(t), o = a.harness && (a.harness.aliases || {})[e] || e, l = s ? function (e) { var n = new s; f._pt = 0, n.init(t, i ? e + i : e, f, 0, [t]), n.render(1, n), f._pt && Mi(1, f); } : a.set(t, o); return s ? l : function (e) { return l(t, o, i ? e + i : e, a, 1); }; }, quickTo: function (t, e, i) { var n, r = Bi.to(t, Bt(((n = {})[e] = "+=0.1", n.paused = !0, n), i || {})), s = function (t, i, n) { return r.resetTo(e, t, i, n); }; return s.tween = r, s; }, isTweening: function (t) { return l.getTweensOf(t, !0).length > 0; }, defaults: function (t) { return t && t.ease && (t.ease = Ze(t.ease, N.ease)), Ft(N, t || {}); }, config: function (t) { return Ft(z, t || {}); }, registerEffect: function (t) { var e = t.name, i = t.effect, n = t.plugins, r = t.defaults, s = t.extendTimeline; (n || "").split(",").forEach((function (t) { return t && !bt[t] && !lt[t] && dt(e + " effect requires " + t + " plugin."); })), Mt[e] = function (t, e, n) { return i(ve(t), kt(e || {}, r), n); }, s && (ii.prototype[e] = function (t, i, n) { return this.add(Mt[e](t, Z(i) ? i : (n = i) && {}, this), n); }); }, registerEase: function (t, e) { He[t] = Ze(e); }, parseEase: function (t, e) { return arguments.length ? Ze(t, e) : He; }, getById: function (t) { return l.getById(t); }, exportRoot: function (t, e) { void 0 === t && (t = {}); var i, n, r = new ii(t); for (r.smoothChildTiming = J(t.smoothChildTiming), l.remove(r), r._dp = 0, r._time = r._tTime = l._time, i = l._first; i;)
            n = i._next, !e && !i._dur && i instanceof pi && i.vars.onComplete === i._targets[0] || ie(r, i, i._start - i._delay), i = n; return ie(l, r, 0), r; }, context: function (t, e) { return t ? new Oi(t, e) : o; }, matchMedia: function (t) { return new zi(t); }, matchMediaRefresh: function () { return Ci.forEach((function (t) { var e, i, n = t.conditions; for (i in n)
            n[i] && (n[i] = !1, e = 1); e && t.revert(); })) || Ii(); }, addEventListener: function (t, e) { var i = Li[t] || (Li[t] = []); ~i.indexOf(e) || i.push(e); }, removeEventListener: function (t, e) { var i = Li[t], n = i && i.indexOf(e); n >= 0 && i.splice(n, 1); }, utils: { wrap: function t(e, i, n) { var r = i - e; return tt(e) ? Se(e, t(0, e.length), i) : de(n, (function (t) { return (r + (t - e) % r) % r + e; })); }, wrapYoyo: function t(e, i, n) { var r = i - e, s = 2 * r; return tt(e) ? Se(e, t(0, e.length - 1), i) : de(n, (function (t) { return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t); })); }, distribute: ye, random: we, snap: Me, normalize: function (t, e, i) { return Ee(t, e, 0, 1, i); }, getUnit: fe, clamp: function (t, e, i) { return de(i, (function (i) { return pe(t, e, i); })); }, splitColor: ze, toArray: ve, selector: xe, mapRange: Ee, pipe: function () { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i]; return function (t) { return e.reduce((function (t, e) { return e(t); }), t); }; }, unitize: function (t, e) { return function (i) { return t(parseFloat(i)) + (e || fe(i)); }; }, interpolate: function t(e, i, n, r) { var s = isNaN(e + i) ? 0 : function (t) { return (1 - t) * e + t * i; }; if (!s) {
                var a, o, l, c, h, u = j(e), d = {};
                if (!0 === n && (r = 1) && (n = null), u)
                    e = { p: e }, i = { p: i };
                else if (tt(e) && !tt(i)) {
                    for (l = [], c = e.length, h = c - 2, o = 1; o < c; o++)
                        l.push(t(e[o - 1], e[o]));
                    c--, s = function (t) { t *= c; var e = Math.min(h, ~~t); return l[e](t - e); }, n = i;
                }
                else
                    r || (e = Bt(tt(e) ? [] : {}, e));
                if (!l) {
                    for (a in i)
                        ai.call(d, e, a, "get", i[a]);
                    s = function (t) { return Mi(t, d) || (u ? e.p : e); };
                }
            } return de(n, s); }, shuffle: _e }, install: ht, effects: Mt, ticker: Ge, updateRoot: ii.updateRoot, plugins: bt, globalTimeline: l, core: { PropTween: Ai, globals: pt, Tween: pi, Timeline: ii, Animation: ei, getCache: At, _removeLinkedListItem: Wt, reverting: function () { return a; }, context: function (t) { return t && o && (o.data.push(t), t._ctx = o), o; }, suppressOverwrites: function (t) { return s = t; } } };
    Lt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) { return Ni[t] = pi[t]; })), Ge.add(ii.updateRoot), f = Ni.to({}, { duration: 0 });
    var Ui = function (t, e) { for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;)
        i = i._next; return i; }, ki = function (t, e) { return { name: t, rawVars: 1, init: function (t, i, n) { n._onInit = function (t) { var n, r; if (j(i) && (n = {}, Lt(i, (function (t) { return n[t] = 1; })), i = n), e) {
            for (r in n = {}, i)
                n[r] = e(i[r]);
            i = n;
        } !function (t, e) { var i, n, r, s = t._targets; for (i in e)
            for (n = s.length; n--;)
                (r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = Ui(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i)); }(t, i); }; } }; }, Bi = Ni.registerPlugin({ name: "attr", init: function (t, e, i, n, r) { var s, a, o; for (s in this.tween = i, e)
            o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], n, r, 0, 0, s)).op = s, a.b = o, this._props.push(s); }, render: function (t, e) { for (var i = e._pt; i;)
            a ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next; } }, { name: "endArray", init: function (t, e) { for (var i = e.length; i--;)
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1); } }, ki("roundProps", be), ki("modifiers"), ki("snap", Me)) || Ni;
    pi.version = ii.version = Bi.version = "3.11.5", d = 1, K() && Ve();
    var Fi = He.Power0, Gi = He.Power1, Vi = He.Power2, Hi = He.Power3, Wi = He.Power4, ji = He.Linear, qi = He.Quad, Xi = He.Cubic, Yi = He.Quart, Zi = He.Quint, Ji = He.Strong, Ki = He.Elastic, $i = He.Back, Qi = He.SteppedEase, tn = He.Bounce, en = He.Sine, nn = He.Expo, rn = He.Circ;
})), r.register("16wL1", (function (e, i) {
    t(e.exports, "CSSPlugin", (() => Tt));
    /*!
     * CSSPlugin 3.11.5
     * https://greensock.com
     *
     * Copyright 2008-2023, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */
    var n, s, a, o, l, c, h, u, d = r("2Tywo"), p = {}, f = 180 / Math.PI, m = Math.PI / 180, g = Math.atan2, v = /([A-Z])/g, x = /(left|right|width|margin|padding|x)/i, _ = /[\s,\(]\S/, y = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, b = function (t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e); }, M = function (t, e) { return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e); }, w = function (t, e) { return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e); }, S = function (t, e) { var i = e.s + e.c * t; e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e); }, T = function (t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e); }, E = function (t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e); }, A = function (t, e, i) { return t.style[e] = i; }, C = function (t, e, i) { return t.style.setProperty(e, i); }, L = function (t, e, i) { return t._gsap[e] = i; }, P = function (t, e, i) { return t._gsap.scaleX = t._gsap.scaleY = i; }, R = function (t, e, i, n, r) { var s = t._gsap; s.scaleX = s.scaleY = i, s.renderTransform(r, s); }, D = function (t, e, i, n, r) { var s = t._gsap; s[e] = i, s.renderTransform(r, s); }, I = "transform", O = I + "Origin", z = function t(e, i) { var n = this, r = this.target, s = r.style; if (e in p) {
        if (this.tfm = this.tfm || {}, "transform" === e)
            return y.transform.split(",").forEach((function (e) { return t.call(n, e, i); }));
        if (~(e = y[e] || e).indexOf(",") ? e.split(",").forEach((function (t) { return n.tfm[t] = Q(r, t); })) : this.tfm[e] = r._gsap.x ? r._gsap[e] : Q(r, e), this.props.indexOf(I) >= 0)
            return;
        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(O, i, "")), e = I;
    } (s || i) && this.props.push(e, i, s[e]); }, N = function (t) { t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate")); }, U = function () { var t, e, i = this.props, n = this.target, r = n.style, s = n._gsap; for (t = 0; t < i.length; t += 3)
        i[t + 1] ? n[i[t]] = i[t + 2] : i[t + 2] ? r[i[t]] = i[t + 2] : r.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(v, "-$1").toLowerCase()); if (this.tfm) {
        for (e in this.tfm)
            s[e] = this.tfm[e];
        s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = h()) && t.isStart || r[I] || (N(r), s.uncache = 1);
    } }, k = function (t, e) { var i = { target: t, props: [], revert: U, save: z }; return t._gsap || d.gsap.core.getCache(t), e && e.split(",").forEach((function (t) { return i.save(t); })), i; }, B = function (t, e) { var i = s.createElementNS ? s.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : s.createElement(t); return i.style ? i : s.createElement(t); }, F = function t(e, i, n) { var r = getComputedStyle(e); return r[i] || r.getPropertyValue(i.replace(v, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, V(i) || i, 1) || ""; }, G = "O,Moz,ms,Ms,Webkit".split(","), V = function (t, e, i) { var n = (e || l).style, r = 5; if (t in n && !i)
        return t; for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(G[r] + t in n);)
        ; return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? G[r] : "") + t; }, H = function () { "undefined" != typeof window && window.document && (n = window, s = n.document, a = s.documentElement, l = B("div") || { style: {} }, B("div"), I = V(I), O = I + "Origin", l.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", u = !!V("perspective"), h = d.gsap.core.reverting, o = 1); }, W = function t(e) { var i, n = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, o = this.style.cssText; if (a.appendChild(n), n.appendChild(this), this.style.display = "block", e)
        try {
            i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
        }
        catch (t) { }
    else
        this._gsapBBox && (i = this._gsapBBox()); return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), a.removeChild(n), this.style.cssText = o, i; }, j = function (t, e) { for (var i = e.length; i--;)
        if (t.hasAttribute(e[i]))
            return t.getAttribute(e[i]); }, q = function (t) { var e; try {
        e = t.getBBox();
    }
    catch (i) {
        e = W.call(t, !0);
    } return e && (e.width || e.height) || t.getBBox === W || (e = W.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +j(t, ["x", "cx", "x1"]) || 0, y: +j(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 }; }, X = function (t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !q(t)); }, Y = function (t, e) { if (e) {
        var i = t.style;
        e in p && e !== O && (e = I), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(v, "-$1").toLowerCase())) : i.removeAttribute(e);
    } }, Z = function (t, e, i, n, r, s) { var a = new (0, d.PropTween)(t._pt, e, i, 0, 1, s ? E : T); return t._pt = a, a.b = n, a.e = r, t._props.push(i), a; }, J = { deg: 1, rad: 1, turn: 1 }, K = { grid: 1, flex: 1 }, $ = function t(e, i, n, r) { var a, o, c, h, u = parseFloat(n) || 0, f = (n + "").trim().substr((u + "").length) || "px", m = l.style, g = x.test(i), v = "svg" === e.tagName.toLowerCase(), _ = (v ? "client" : "offset") + (g ? "Width" : "Height"), y = 100, b = "px" === r, M = "%" === r; return r === f || !u || J[r] || J[f] ? u : ("px" !== f && !b && (u = t(e, i, n, "px")), h = e.getCTM && X(e), !M && "%" !== f || !p[i] && !~i.indexOf("adius") ? (m[g ? "width" : "height"] = y + (b ? f : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !v ? e : e.parentNode, h && (o = (e.ownerSVGElement || {}).parentNode), o && o !== s && o.appendChild || (o = s.body), (c = o._gsap) && M && c.width && g && c.time === d._ticker.time && !c.uncache ? (0, d._round)(u / c.width * y) : ((M || "%" === f) && !K[F(o, "display")] && (m.position = F(e, "position")), o === e && (m.position = "static"), o.appendChild(l), a = l[_], o.removeChild(l), m.position = "absolute", g && M && ((c = (0, d._getCache)(o)).time = d._ticker.time, c.width = o[_]), (0, d._round)(b ? a * u / y : a && u ? y / a * u : 0))) : (a = h ? e.getBBox()[g ? "width" : "height"] : e[_], (0, d._round)(M ? u / a * y : u / 100 * a))); }, Q = function (t, e, i, n) { var r; return o || H(), e in y && "transform" !== e && ~(e = y[e]).indexOf(",") && (e = e.split(",")[0]), p[e] && "transform" !== e ? (r = ht(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : ut(F(t, O)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = nt[e] && nt[e](t, e, i) || F(t, e) || (0, d._getProperty)(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? $(t, e, r, i) + i : r; }, tt = function (t, e, i, n) { if (!i || "none" === i) {
        var r = V(e, t, 1), s = r && F(t, r, 1);
        s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = F(t, "borderTopColor"));
    } var a, o, l, c, h, u, p, f, m, g, v, x = new (0, d.PropTween)(this._pt, t.style, e, 0, 1, d._renderComplexString), _ = 0, y = 0; if (x.b = i, x.e = n, i += "", "auto" === (n += "") && (t.style[e] = n, n = F(t, e) || n, t.style[e] = i), a = [i, n], (0, d._colorStringFilter)(a), n = a[1], l = (i = a[0]).match(d._numWithUnitExp) || [], (n.match(d._numWithUnitExp) || []).length) {
        for (; o = d._numWithUnitExp.exec(n);)
            p = o[0], m = n.substring(_, o.index), h ? h = (h + 1) % 5 : "rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5) || (h = 1), p !== (u = l[y++] || "") && (c = parseFloat(u) || 0, v = u.substr((c + "").length), "=" === p.charAt(1) && (p = (0, d._parseRelative)(c, p) + v), f = parseFloat(p), g = p.substr((f + "").length), _ = d._numWithUnitExp.lastIndex - g.length, g || (g = g || d._config.units[e] || v, _ === n.length && (n += g, x.e += g)), v !== g && (c = $(t, e, u, g) || 0), x._pt = { _next: x._pt, p: m || 1 === y ? m : ",", s: c, c: f - c, m: h && h < 4 || "zIndex" === e ? Math.round : 0 });
        x.c = _ < n.length ? n.substring(_, n.length) : "";
    }
    else
        x.r = "display" === e && "none" === n ? E : T; return d._relExp.test(n) && (x.e = 0), this._pt = x, x; }, et = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, it = function (t, e) { if (e.tween && e.tween._time === e.tween._dur) {
        var i, n, r, s = e.t, a = s.style, o = e.u, l = s._gsap;
        if ("all" === o || !0 === o)
            a.cssText = "", n = 1;
        else
            for (r = (o = o.split(",")).length; --r > -1;)
                i = o[r], p[i] && (n = 1, i = "transformOrigin" === i ? O : I), Y(s, i);
        n && (Y(s, I), l && (l.svg && s.removeAttribute("transform"), ht(s, 1), l.uncache = 1, N(a)));
    } }, nt = { clearProps: function (t, e, i, n, r) { if ("isFromStart" !== r.data) {
            var s = t._pt = new (0, d.PropTween)(t._pt, e, i, 0, 0, it);
            return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1;
        } } }, rt = [1, 0, 0, 1, 0, 0], st = {}, at = function (t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t; }, ot = function (t) { var e = F(t, I); return at(e) ? rt : e.substr(7).match(d._numExp).map(d._round); }, lt = function (t, e) { var i, n, r, s, o = t._gsap || (0, d._getCache)(t), l = t.style, c = ot(t); return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (c = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? rt : c : (c !== rt || t.offsetParent || t === a || o.svg || (r = l.display, l.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextElementSibling, a.appendChild(t)), c = ot(t), r ? l.display = r : Y(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : a.removeChild(t))), e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c); }, ct = function (t, e, i, n, r, s) { var a, o, l, c = t._gsap, h = r || lt(t, !0), u = c.xOrigin || 0, d = c.yOrigin || 0, p = c.xOffset || 0, f = c.yOffset || 0, m = h[0], g = h[1], v = h[2], x = h[3], _ = h[4], y = h[5], b = e.split(" "), M = parseFloat(b[0]) || 0, w = parseFloat(b[1]) || 0; i ? h !== rt && (o = m * x - g * v) && (l = M * (-g / o) + w * (m / o) - (m * y - g * _) / o, M = M * (x / o) + w * (-v / o) + (v * y - x * _) / o, w = l) : (M = (a = q(t)).x + (~b[0].indexOf("%") ? M / 100 * a.width : M), w = a.y + (~(b[1] || b[0]).indexOf("%") ? w / 100 * a.height : w)), n || !1 !== n && c.smooth ? (_ = M - u, y = w - d, c.xOffset = p + (_ * m + y * v) - _, c.yOffset = f + (_ * g + y * x) - y) : c.xOffset = c.yOffset = 0, c.xOrigin = M, c.yOrigin = w, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[O] = "0px 0px", s && (Z(s, c, "xOrigin", u, M), Z(s, c, "yOrigin", d, w), Z(s, c, "xOffset", p, c.xOffset), Z(s, c, "yOffset", f, c.yOffset)), t.setAttribute("data-svg-origin", M + " " + w); }, ht = function (t, e) { var i = t._gsap || new (0, d.GSCache)(t); if ("x" in i && !e && !i.uncache)
        return i; var n, r, s, a, o, l, c, h, p, v, x, _, y, b, M, w, S, T, E, A, C, L, P, R, D, z, N, U, k, B, G, V, H = t.style, W = i.scaleX < 0, j = "px", q = "deg", Y = getComputedStyle(t), Z = F(t, O) || "0"; return n = r = s = l = c = h = p = v = x = 0, a = o = 1, i.svg = !(!t.getCTM || !X(t)), Y.translate && ("none" === Y.translate && "none" === Y.scale && "none" === Y.rotate || (H[I] = ("none" !== Y.translate ? "translate3d(" + (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") + ("none" !== Y.scale ? "scale(" + Y.scale.split(" ").join(",") + ") " : "") + ("none" !== Y[I] ? Y[I] : "")), H.scale = H.rotate = H.translate = "none"), b = lt(t, i.svg), i.svg && (i.uncache ? (D = t.getBBox(), Z = i.xOrigin - D.x + "px " + (i.yOrigin - D.y) + "px", R = "") : R = !e && t.getAttribute("data-svg-origin"), ct(t, R || Z, !!R || i.originIsAbsolute, !1 !== i.smooth, b)), _ = i.xOrigin || 0, y = i.yOrigin || 0, b !== rt && (T = b[0], E = b[1], A = b[2], C = b[3], n = L = b[4], r = P = b[5], 6 === b.length ? (a = Math.sqrt(T * T + E * E), o = Math.sqrt(C * C + A * A), l = T || E ? g(E, T) * f : 0, (p = A || C ? g(A, C) * f + l : 0) && (o *= Math.abs(Math.cos(p * m))), i.svg && (n -= _ - (_ * T + y * A), r -= y - (_ * E + y * C))) : (V = b[6], B = b[7], N = b[8], U = b[9], k = b[10], G = b[11], n = b[12], r = b[13], s = b[14], c = (M = g(V, k)) * f, M && (R = L * (w = Math.cos(-M)) + N * (S = Math.sin(-M)), D = P * w + U * S, z = V * w + k * S, N = L * -S + N * w, U = P * -S + U * w, k = V * -S + k * w, G = B * -S + G * w, L = R, P = D, V = z), h = (M = g(-A, k)) * f, M && (w = Math.cos(-M), G = C * (S = Math.sin(-M)) + G * w, T = R = T * w - N * S, E = D = E * w - U * S, A = z = A * w - k * S), l = (M = g(E, T)) * f, M && (R = T * (w = Math.cos(M)) + E * (S = Math.sin(M)), D = L * w + P * S, E = E * w - T * S, P = P * w - L * S, T = R, L = D), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, h = 180 - h), a = (0, d._round)(Math.sqrt(T * T + E * E + A * A)), o = (0, d._round)(Math.sqrt(P * P + V * V)), M = g(L, P), p = Math.abs(M) > 2e-4 ? M * f : 0, x = G ? 1 / (G < 0 ? -G : G) : 0), i.svg && (R = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !at(F(t, I)), R && t.setAttribute("transform", R))), Math.abs(p) > 90 && Math.abs(p) < 270 && (W ? (a *= -1, p += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, p += p <= 0 ? 180 : -180)), e = e || i.uncache, i.x = n - ((i.xPercent = n && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + j, i.y = r - ((i.yPercent = r && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + j, i.z = s + j, i.scaleX = (0, d._round)(a), i.scaleY = (0, d._round)(o), i.rotation = (0, d._round)(l) + q, i.rotationX = (0, d._round)(c) + q, i.rotationY = (0, d._round)(h) + q, i.skewX = p + q, i.skewY = v + q, i.transformPerspective = x + j, (i.zOrigin = parseFloat(Z.split(" ")[2]) || 0) && (H[O] = ut(Z)), i.xOffset = i.yOffset = 0, i.force3D = d._config.force3D, i.renderTransform = i.svg ? xt : u ? vt : pt, i.uncache = 0, i; }, ut = function (t) { return (t = t.split(" "))[0] + " " + t[1]; }, dt = function (t, e, i) { var n = (0, d.getUnit)(e); return (0, d._round)(parseFloat(e) + parseFloat($(t, "x", i + "px", n))) + n; }, pt = function (t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, vt(t, e); }, ft = "0deg", mt = "0px", gt = ") ", vt = function (t, e) { var i = e || this, n = i.xPercent, r = i.yPercent, s = i.x, a = i.y, o = i.z, l = i.rotation, c = i.rotationY, h = i.rotationX, u = i.skewX, d = i.skewY, p = i.scaleX, f = i.scaleY, g = i.transformPerspective, v = i.force3D, x = i.target, _ = i.zOrigin, y = "", b = "auto" === v && t && 1 !== t || !0 === v; if (_ && (h !== ft || c !== ft)) {
        var M, w = parseFloat(c) * m, S = Math.sin(w), T = Math.cos(w);
        w = parseFloat(h) * m, M = Math.cos(w), s = dt(x, s, S * M * -_), a = dt(x, a, -Math.sin(w) * -_), o = dt(x, o, T * M * -_ + _);
    } g !== mt && (y += "perspective(" + g + gt), (n || r) && (y += "translate(" + n + "%, " + r + "%) "), (b || s !== mt || a !== mt || o !== mt) && (y += o !== mt || b ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + gt), l !== ft && (y += "rotate(" + l + gt), c !== ft && (y += "rotateY(" + c + gt), h !== ft && (y += "rotateX(" + h + gt), u === ft && d === ft || (y += "skew(" + u + ", " + d + gt), 1 === p && 1 === f || (y += "scale(" + p + ", " + f + gt), x.style[I] = y || "translate(0, 0)"; }, xt = function (t, e) { var i, n, r, s, a, o = e || this, l = o.xPercent, c = o.yPercent, h = o.x, u = o.y, p = o.rotation, f = o.skewX, g = o.skewY, v = o.scaleX, x = o.scaleY, _ = o.target, y = o.xOrigin, b = o.yOrigin, M = o.xOffset, w = o.yOffset, S = o.forceCSS, T = parseFloat(h), E = parseFloat(u); p = parseFloat(p), f = parseFloat(f), (g = parseFloat(g)) && (f += g = parseFloat(g), p += g), p || f ? (p *= m, f *= m, i = Math.cos(p) * v, n = Math.sin(p) * v, r = Math.sin(p - f) * -x, s = Math.cos(p - f) * x, f && (g *= m, a = Math.tan(f - g), r *= a = Math.sqrt(1 + a * a), s *= a, g && (a = Math.tan(g), i *= a = Math.sqrt(1 + a * a), n *= a)), i = (0, d._round)(i), n = (0, d._round)(n), r = (0, d._round)(r), s = (0, d._round)(s)) : (i = v, s = x, n = r = 0), (T && !~(h + "").indexOf("px") || E && !~(u + "").indexOf("px")) && (T = $(_, "x", h, "px"), E = $(_, "y", u, "px")), (y || b || M || w) && (T = (0, d._round)(T + y - (y * i + b * r) + M), E = (0, d._round)(E + b - (y * n + b * s) + w)), (l || c) && (a = _.getBBox(), T = (0, d._round)(T + l / 100 * a.width), E = (0, d._round)(E + c / 100 * a.height)), a = "matrix(" + i + "," + n + "," + r + "," + s + "," + T + "," + E + ")", _.setAttribute("transform", a), S && (_.style[I] = a); }, _t = function (t, e, i, n, r) { var s, a, o = 360, l = (0, d._isString)(r), c = parseFloat(r) * (l && ~r.indexOf("rad") ? f : 1) - n, h = n + c + "deg"; return l && ("short" === (s = r.split("_")[1]) && (c %= o) !== c % 180 && (c += c < 0 ? o : -360), "cw" === s && c < 0 ? c = (c + 36e9) % o - ~~(c / o) * o : "ccw" === s && c > 0 && (c = (c - 36e9) % o - ~~(c / o) * o)), t._pt = a = new (0, d.PropTween)(t._pt, e, i, n, c, M), a.e = h, a.u = "deg", t._props.push(i), a; }, yt = function (t, e) { for (var i in e)
        t[i] = e[i]; return t; }, bt = function (t, e, i) { var n, r, s, a, o, l, c, h = yt({}, i._gsap), u = i.style; for (r in h.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), u[I] = e, n = ht(i, 1), Y(i, I), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[I], u[I] = e, n = ht(i, 1), u[I] = s), p)
        (s = h[r]) !== (a = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = (0, d.getUnit)(s) !== (c = (0, d.getUnit)(a)) ? $(i, r, s, c) : parseFloat(s), l = parseFloat(a), t._pt = new (0, d.PropTween)(t._pt, n, r, o, l - o, b), t._pt.u = c || 0, t._props.push(r)); yt(n, h); };
    (0, d._forEachName)("padding,margin,Width,Radius", (function (t, e) { var i = "Top", n = "Right", r = "Bottom", s = "Left", a = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function (i) { return e < 2 ? t + i : "border" + i + t; })); nt[e > 1 ? "border" + t : t] = function (t, e, i, n, r) { var s, o; if (arguments.length < 4)
        return s = a.map((function (e) { return Q(t, e, i); })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o; s = (n + "").split(" "), o = {}, a.forEach((function (t, e) { return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]; })), t.init(e, o, r); }; }));
    var Mt, wt, St, Tt = { name: "css", register: H, targetTest: function (t) { return t.style && t.nodeType; }, init: function (t, e, i, n, r) { var s, a, l, c, h, u, f, m, g, v, x, M, T, E, A, C, L, P, R, D, z = this._props, N = t.style, U = i.vars.startAt; for (f in o || H(), this.styles = this.styles || k(t), C = this.styles.props, this.tween = i, e)
            if ("autoRound" !== f && (a = e[f], !d._plugins[f] || !(0, d._checkPlugin)(f, e, i, n, t, r)))
                if (h = typeof a, u = nt[f], "function" === h && (h = typeof (a = a.call(i, n, t, r))), "string" === h && ~a.indexOf("random(") && (a = (0, d._replaceRandom)(a)), u)
                    u(this, t, f, a, i) && (A = 1);
                else if ("--" === f.substr(0, 2))
                    s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", d._colorExp.lastIndex = 0, d._colorExp.test(s) || (m = (0, d.getUnit)(s), g = (0, d.getUnit)(a)), g ? m !== g && (s = $(t, f, s, g) + g) : m && (a += m), this.add(N, "setProperty", s, a, n, r, 0, 0, f), z.push(f), C.push(f, 0, N[f]);
                else if ("undefined" !== h) {
                    if (U && f in U ? (s = "function" == typeof U[f] ? U[f].call(i, n, t, r) : U[f], (0, d._isString)(s) && ~s.indexOf("random(") && (s = (0, d._replaceRandom)(s)), (0, d.getUnit)(s + "") || (s += d._config.units[f] || (0, d.getUnit)(Q(t, f)) || ""), "=" === (s + "").charAt(1) && (s = Q(t, f))) : s = Q(t, f), c = parseFloat(s), (v = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), l = parseFloat(a), f in y && ("autoAlpha" === f && (1 === c && "hidden" === Q(t, "visibility") && l && (c = 0), C.push("visibility", 0, N.visibility), Z(this, N, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), "scale" !== f && "transform" !== f && ~(f = y[f]).indexOf(",") && (f = f.split(",")[0])), x = f in p)
                        if (this.styles.save(f), M || ((T = t._gsap).renderTransform && !e.parseTransform || ht(t, e.parseTransform), E = !1 !== e.smoothOrigin && T.smooth, (M = this._pt = new (0, d.PropTween)(this._pt, N, I, 0, 1, T.renderTransform, T, 0, -1)).dep = 1), "scale" === f)
                            this._pt = new (0, d.PropTween)(this._pt, T, "scaleY", T.scaleY, (v ? (0, d._parseRelative)(T.scaleY, v + l) : l) - T.scaleY || 0, b), this._pt.u = 0, z.push("scaleY", f), f += "X";
                        else {
                            if ("transformOrigin" === f) {
                                C.push(O, 0, N[O]), P = void 0, R = void 0, D = void 0, P = (L = a).split(" "), R = P[0], D = P[1] || "50%", "top" !== R && "bottom" !== R && "left" !== D && "right" !== D || (L = R, R = D, D = L), P[0] = et[R] || R, P[1] = et[D] || D, a = P.join(" "), T.svg ? ct(t, a, 0, E, 0, this) : ((g = parseFloat(a.split(" ")[2]) || 0) !== T.zOrigin && Z(this, T, "zOrigin", T.zOrigin, g), Z(this, N, f, ut(s), ut(a)));
                                continue;
                            }
                            if ("svgOrigin" === f) {
                                ct(t, a, 1, E, 0, this);
                                continue;
                            }
                            if (f in st) {
                                _t(this, T, f, c, v ? (0, d._parseRelative)(c, v + a) : a);
                                continue;
                            }
                            if ("smoothOrigin" === f) {
                                Z(this, T, "smooth", T.smooth, a);
                                continue;
                            }
                            if ("force3D" === f) {
                                T[f] = a;
                                continue;
                            }
                            if ("transform" === f) {
                                bt(this, a, t);
                                continue;
                            }
                        }
                    else
                        f in N || (f = V(f) || f);
                    if (x || (l || 0 === l) && (c || 0 === c) && !_.test(a) && f in N)
                        l || (l = 0), (m = (s + "").substr((c + "").length)) !== (g = (0, d.getUnit)(a) || (f in d._config.units ? d._config.units[f] : m)) && (c = $(t, f, s, g)), this._pt = new (0, d.PropTween)(this._pt, x ? T : N, f, c, (v ? (0, d._parseRelative)(c, v + l) : l) - c, x || "px" !== g && "zIndex" !== f || !1 === e.autoRound ? b : S), this._pt.u = g || 0, m !== g && "%" !== g && (this._pt.b = s, this._pt.r = w);
                    else if (f in N)
                        tt.call(this, t, f, s, v ? v + a : a);
                    else if (f in t)
                        this.add(t, f, s || t[f], v ? v + a : a, n, r);
                    else if ("parseTransform" !== f) {
                        (0, d._missingPlugin)(f, a);
                        continue;
                    }
                    x || (f in N ? C.push(f, 0, N[f]) : C.push(f, 1, s || t[f])), z.push(f);
                } A && (0, d._sortPropTweensByPriority)(this); }, render: function (t, e) { if (e.tween._time || !h())
            for (var i = e._pt; i;)
                i.r(t, i.d), i = i._next;
        else
            e.styles.revert(); }, get: Q, aliases: y, getSetter: function (t, e, i) { var n = y[e]; return n && n.indexOf(",") < 0 && (e = n), e in p && e !== O && (t._gsap.x || Q(t, "x")) ? i && c === i ? "scale" === e ? P : L : (c = i || {}, "scale" === e ? R : D) : t.style && !(0, d._isUndefined)(t.style[e]) ? A : ~e.indexOf("-") ? C : (0, d._getSetter)(t, e); }, core: { _removeProperty: Y, _getMatrix: lt } };
    d.gsap.utils.checkPrefix = V, d.gsap.core.getStyleSaver = k, Mt = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent", wt = "rotation,rotationX,rotationY,skewX,skewY", St = (0, d._forEachName)(Mt + "," + wt + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) { p[t] = 1; })), (0, d._forEachName)(wt, (function (t) { d._config.units[t] = "deg", st[t] = 1; })), y[St[13]] = Mt + "," + wt, (0, d._forEachName)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) { var e = t.split(":"); y[e[1]] = St[e[0]]; })), (0, d._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) { d._config.units[t] = "px"; })), d.gsap.registerPlugin(Tt);
})), r.register("a3Sd4", (function (t, e) { var i = t.exports && t.exports.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; }; Object.defineProperty(t.exports, "__esModule", { value: !0 }), t.exports.wrapElements = t.exports.map = t.exports.getRandomFloat = t.exports.distance = t.exports.getMousePos = t.exports.getViewport = t.exports.calcWinsize = t.exports.lineEquation = t.exports.dist = t.exports.lerp = t.exports.sin = t.exports.cos = t.exports.HALF_PI = t.exports.angle = t.exports.fadeInOut = t.exports.fadeOut = t.exports.fadeIn = t.exports.randRange = t.exports.randIn = t.exports.rand = t.exports.floor = t.exports.preloadImages = t.exports.preloadFonts = void 0; const n = i(r("50i7i")), s = i(r("gWrO8")); t.exports.preloadFonts = () => new Promise((t => { n.default.load({ custom: { families: ["SFUIDisplay"] } }); })); t.exports.preloadImages = t => new Promise((e => { (0, s.default)(document.querySelectorAll(t), { background: !0 }, e); })); const { PI: a, cos: o, sin: l, abs: c, sqrt: h, pow: u, round: d, random: p, atan2: f } = Math; t.exports.cos = o, t.exports.sin = l; const m = .5 * a; t.exports.HALF_PI = m; t.exports.floor = t => 0 | t; const g = t => t * p(); t.exports.rand = g; t.exports.randIn = (t, e) => g(e - t) + t; t.exports.randRange = t => t - g(2 * t); t.exports.fadeIn = (t, e) => t / e; t.exports.fadeOut = (t, e) => (e - t) / e; t.exports.fadeInOut = (t, e) => { let i = .5 * e; return c((t + i) % e - i) / i; }; t.exports.dist = (t, e, i, n) => h(u(i - t, 2) + u(n - e, 2)); t.exports.angle = (t, e, i, n) => f(n - e, i - t); t.exports.lerp = (t, e, i) => (1 - i) * t + i * e; t.exports.lineEquation = (t, e, i, n, r) => { var s = (t - e) / (i - n); return s * r + (e - s * n); }; t.exports.calcWinsize = () => ({ width: window.innerWidth, height: window.innerHeight }); t.exports.getViewport = () => ({ width: window.innerWidth, height: window.innerHeight, aspectRatio: window.innerWidth / window.innerHeight }); t.exports.getMousePos = t => ({ x: t.clientX, y: t.clientY }); t.exports.distance = (t, e, i, n) => { var r = t - i, s = e - n; return Math.hypot(r, s); }; t.exports.getRandomFloat = (t, e) => (Math.random() * (e - t) + t).toFixed(2); t.exports.map = (t, e, i, n, r) => { return s = (t - e) * (r - n) / (i - e) + n, a = Math.min(n, r), o = Math.max(n, r), s <= a ? a : s >= o ? o : s; var s, a, o; }; t.exports.wrapElements = (t, e, i) => { t.forEach((t => { const n = document.createElement(e); n.classList.value = i, t.parentNode && t.parentNode.appendChild(n), n.appendChild(t); })); }; })), r.register("50i7i", (function (t, e) { !function () { function e(t, e, i) { return t.call.apply(t.bind, arguments); } function i(t, e, i) { if (!t)
    throw Error(); if (2 < arguments.length) {
    var n = Array.prototype.slice.call(arguments, 2);
    return function () { var i = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(i, n), t.apply(e, i); };
} return function () { return t.apply(e, arguments); }; } function n(t, r, s) { return (n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : i).apply(null, arguments); } var r = Date.now || function () { return +new Date; }; function s(t, e) { this.a = t, this.o = e || t, this.c = this.o.document; } var a = !!window.FontFace; function o(t, e, i, n) { if (e = t.c.createElement(e), i)
    for (var r in i)
        i.hasOwnProperty(r) && ("style" == r ? e.style.cssText = i[r] : e.setAttribute(r, i[r])); return n && e.appendChild(t.c.createTextNode(n)), e; } function l(t, e, i) { (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(i, t.lastChild); } function c(t) { t.parentNode && t.parentNode.removeChild(t); } function h(t, e, i) { e = e || [], i = i || []; for (var n = t.className.split(/\s+/), r = 0; r < e.length; r += 1) {
    for (var s = !1, a = 0; a < n.length; a += 1)
        if (e[r] === n[a]) {
            s = !0;
            break;
        }
    s || n.push(e[r]);
} for (e = [], r = 0; r < n.length; r += 1) {
    for (s = !1, a = 0; a < i.length; a += 1)
        if (n[r] === i[a]) {
            s = !0;
            break;
        }
    s || e.push(n[r]);
} t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, ""); } function u(t, e) { for (var i = t.className.split(/\s+/), n = 0, r = i.length; n < r; n++)
    if (i[n] == e)
        return !0; return !1; } function d(t, e, i) { function n() { h && r && s && (h(c), h = null); } e = o(t, "link", { rel: "stylesheet", href: e, media: "all" }); var r = !1, s = !0, c = null, h = i || null; a ? (e.onload = function () { r = !0, n(); }, e.onerror = function () { r = !0, c = Error("Stylesheet failed to load"), n(); }) : setTimeout((function () { r = !0, n(); }), 0), l(t, "head", e); } function p(t, e, i, n) { var r = t.c.getElementsByTagName("head")[0]; if (r) {
    var s = o(t, "script", { src: e }), a = !1;
    return s.onload = s.onreadystatechange = function () { a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, i && i(null), s.onload = s.onreadystatechange = null, "HEAD" == s.parentNode.tagName && r.removeChild(s)); }, r.appendChild(s), setTimeout((function () { a || (a = !0, i && i(Error("Script load timeout"))); }), n || 5e3), s;
} return null; } function f() { this.a = 0, this.c = null; } function m(t) { return t.a++, function () { t.a--, v(t); }; } function g(t, e) { t.c = e, v(t); } function v(t) { 0 == t.a && t.c && (t.c(), t.c = null); } function x(t) { this.a = t || "-"; } function _(t, e) { this.c = t, this.f = 4, this.a = "n"; var i = (e || "n4").match(/^([nio])([1-9])$/i); i && (this.a = i[1], this.f = parseInt(i[2], 10)); } function y(t) { var e = []; t = t.split(/,\s*/); for (var i = 0; i < t.length; i++) {
    var n = t[i].replace(/['"]/g, "");
    -1 != n.indexOf(" ") || /^\d/.test(n) ? e.push("'" + n + "'") : e.push(n);
} return e.join(","); } function b(t) { return t.a + t.f; } function M(t) { var e = "normal"; return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e; } function w(t) { var e = 4, i = "n", n = null; return t && ((n = t.match(/(normal|oblique|italic)/i)) && n[1] && (i = n[1].substr(0, 1).toLowerCase()), (n = t.match(/([1-9]00|normal|bold)/i)) && n[1] && (/bold/i.test(n[1]) ? e = 7 : /[1-9]00/.test(n[1]) && (e = parseInt(n[1].substr(0, 1), 10)))), i + e; } function S(t, e) { this.c = t, this.f = t.o.document.documentElement, this.h = e, this.a = new x("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes; } function T(t) { if (t.g) {
    var e = u(t.f, t.a.c("wf", "active")), i = [], n = [t.a.c("wf", "loading")];
    e || i.push(t.a.c("wf", "inactive")), h(t.f, i, n);
} E(t, "inactive"); } function E(t, e, i) { t.j && t.h[e] && (i ? t.h[e](i.c, b(i)) : t.h[e]()); } function A() { this.c = {}; } function C(t, e) { this.c = t, this.f = e, this.a = o(this.c, "span", { "aria-hidden": "true" }, this.f); } function L(t) { l(t.c, "body", t.a); } function P(t) { return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + y(t.c) + ";font-style:" + M(t) + ";font-weight:" + t.f + "00;"; } function R(t, e, i, n, r, s) { this.g = t, this.j = e, this.a = n, this.c = i, this.f = r || 3e3, this.h = s || void 0; } function D(t, e, i, n, r, s, a) { this.v = t, this.B = e, this.c = i, this.a = n, this.s = a || "BESbswy", this.f = {}, this.w = r || 3e3, this.u = s || null, this.m = this.j = this.h = this.g = null, this.g = new C(this.c, this.s), this.h = new C(this.c, this.s), this.j = new C(this.c, this.s), this.m = new C(this.c, this.s), t = P(t = new _(this.a.c + ",serif", b(this.a))), this.g.a.style.cssText = t, t = P(t = new _(this.a.c + ",sans-serif", b(this.a))), this.h.a.style.cssText = t, t = P(t = new _("serif", b(this.a))), this.j.a.style.cssText = t, t = P(t = new _("sans-serif", b(this.a))), this.m.a.style.cssText = t, L(this.g), L(this.h), L(this.j), L(this.m); } x.prototype.c = function (t) { for (var e = [], i = 0; i < arguments.length; i++)
    e.push(arguments[i].replace(/[\W_]+/g, "").toLowerCase()); return e.join(this.a); }, R.prototype.start = function () { var t = this.c.o.document, e = this, i = r(), n = new Promise((function (n, s) { !function a() { r() - i >= e.f ? s() : t.fonts.load(function (t) { return M(t) + " " + t.f + "00 300px " + y(t.c); }(e.a), e.h).then((function (t) { 1 <= t.length ? n() : setTimeout(a, 25); }), (function () { s(); })); }(); })), s = null, a = new Promise((function (t, i) { s = setTimeout(i, e.f); })); Promise.race([a, n]).then((function () { s && (clearTimeout(s), s = null), e.g(e.a); }), (function () { e.j(e.a); })); }; var I = { D: "serif", C: "sans-serif" }, O = null; function z() { if (null === O) {
    var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
    O = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10));
} return O; } function N(t, e, i) { for (var n in I)
    if (I.hasOwnProperty(n) && e === t.f[I[n]] && i === t.f[I[n]])
        return !0; return !1; } function U(t) { var e, i = t.g.a.offsetWidth, s = t.h.a.offsetWidth; (e = i === t.f.serif && s === t.f["sans-serif"]) || (e = z() && N(t, i, s)), e ? r() - t.A >= t.w ? z() && N(t, i, s) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? k(t, t.v) : k(t, t.B) : function (t) { setTimeout(n((function () { U(this); }), t), 50); }(t) : k(t, t.v); } function k(t, e) { setTimeout(n((function () { c(this.g.a), c(this.h.a), c(this.j.a), c(this.m.a), e(this.a); }), t), 0); } function B(t, e, i) { this.c = t, this.a = e, this.f = 0, this.m = this.j = !1, this.s = i; } D.prototype.start = function () { this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = r(), U(this); }; var F = null; function G(t) { 0 == --t.f && t.j && (t.m ? ((t = t.a).g && h(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), E(t, "active")) : T(t.a)); } function V(t) { this.j = t, this.a = new A, this.h = 0, this.f = this.g = !0; } function H(t, e, i, r, s) { var a = 0 == --t.h; (t.f || t.g) && setTimeout((function () { var t = s || null, o = r || {}; if (0 === i.length && a)
    T(e.a);
else {
    e.f += i.length, a && (e.j = a);
    var l, c = [];
    for (l = 0; l < i.length; l++) {
        var u = i[l], d = o[u.c], p = e.a, f = u;
        if (p.g && h(p.f, [p.a.c("wf", f.c, b(f).toString(), "loading")]), E(p, "fontloading", f), p = null, null === F)
            if (window.FontFace) {
                f = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                var m = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                F = f ? 42 < parseInt(f[1], 10) : !m;
            }
            else
                F = !1;
        p = F ? new R(n(e.g, e), n(e.h, e), e.c, u, e.s, d) : new D(n(e.g, e), n(e.h, e), e.c, u, e.s, t, d), c.push(p);
    }
    for (l = 0; l < c.length; l++)
        c[l].start();
} }), 0); } function W(t, e) { this.c = t, this.a = e; } function j(t, e) { this.c = t, this.a = e; } function q(t, e) { this.c = t || X, this.a = [], this.f = [], this.g = e || ""; } B.prototype.g = function (t) { var e = this.a; e.g && h(e.f, [e.a.c("wf", t.c, b(t).toString(), "active")], [e.a.c("wf", t.c, b(t).toString(), "loading"), e.a.c("wf", t.c, b(t).toString(), "inactive")]), E(e, "fontactive", t), this.m = !0, G(this); }, B.prototype.h = function (t) { var e = this.a; if (e.g) {
    var i = u(e.f, e.a.c("wf", t.c, b(t).toString(), "active")), n = [], r = [e.a.c("wf", t.c, b(t).toString(), "loading")];
    i || n.push(e.a.c("wf", t.c, b(t).toString(), "inactive")), h(e.f, n, r);
} E(e, "fontinactive", t), G(this); }, V.prototype.load = function (t) { this.c = new s(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes, function (t, e, i) { var n = [], r = i.timeout; !function (t) { t.g && h(t.f, [t.a.c("wf", "loading")]), E(t, "loading"); }(e); n = function (t, e, i) { var n, r = []; for (n in e)
    if (e.hasOwnProperty(n)) {
        var s = t.c[n];
        s && r.push(s(e[n], i));
    } return r; }(t.a, i, t.c); var s = new B(t.c, e, r); for (t.h = n.length, e = 0, i = n.length; e < i; e++)
    n[e].load((function (e, i, n) { H(t, s, e, i, n); })); }(this, new S(this.c, t), t); }, W.prototype.load = function (t) { function e() { if (s["__mti_fntLst" + n]) {
    var i, r = s["__mti_fntLst" + n](), a = [];
    if (r)
        for (var o = 0; o < r.length; o++) {
            var l = r[o].fontfamily;
            null != r[o].fontStyle && null != r[o].fontWeight ? (i = r[o].fontStyle + r[o].fontWeight, a.push(new _(l, i))) : a.push(new _(l));
        }
    t(a);
}
else
    setTimeout((function () { e(); }), 50); } var i = this, n = i.a.projectId, r = i.a.version; if (n) {
    var s = i.c.o;
    p(this.c, (i.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (r ? "?v=" + r : ""), (function (r) { r ? t([]) : (s["__MonotypeConfiguration__" + n] = function () { return i.a; }, e()); })).id = "__MonotypeAPIScript__" + n;
}
else
    t([]); }, j.prototype.load = function (t) { var e, i, n = this.a.urls || [], r = this.a.families || [], s = this.a.testStrings || {}, a = new f; for (e = 0, i = n.length; e < i; e++)
    d(this.c, n[e], m(a)); var o = []; for (e = 0, i = r.length; e < i; e++)
    if ((n = r[e].split(":"))[1])
        for (var l = n[1].split(","), c = 0; c < l.length; c += 1)
            o.push(new _(n[0], l[c]));
    else
        o.push(new _(n[0])); g(a, (function () { t(o, s); })); }; var X = "https://fonts.googleapis.com/css"; function Y(t) { this.f = t, this.a = [], this.c = {}; } var Z = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" }, J = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, K = { i: "i", italic: "i", n: "n", normal: "n" }, $ = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/; function Q(t, e) { this.c = t, this.a = e; } var tt = { Arimo: !0, Cousine: !0, Tinos: !0 }; function et(t, e) { this.c = t, this.a = e; } function it(t, e) { this.c = t, this.f = e, this.a = []; } Q.prototype.load = function (t) { var e = new f, i = this.c, n = new q(this.a.api, this.a.text), r = this.a.families; !function (t, e) { for (var i = e.length, n = 0; n < i; n++) {
    var r = e[n].split(":");
    3 == r.length && t.f.push(r.pop());
    var s = "";
    2 == r.length && "" != r[1] && (s = ":"), t.a.push(r.join(s));
} }(n, r); var s = new Y(r); !function (t) { for (var e = t.f.length, i = 0; i < e; i++) {
    var n = t.f[i].split(":"), r = n[0].replace(/\+/g, " "), s = ["n4"];
    if (2 <= n.length) {
        var a;
        if (a = [], o = n[1])
            for (var o, l = (o = o.split(",")).length, c = 0; c < l; c++) {
                var h;
                if ((h = o[c]).match(/^[\w-]+$/))
                    if (null == (u = $.exec(h.toLowerCase())))
                        h = "";
                    else {
                        if (h = null == (h = u[2]) || "" == h ? "n" : K[h], null == (u = u[1]) || "" == u)
                            u = "4";
                        else
                            var u = J[u] || (isNaN(u) ? "4" : u.substr(0, 1));
                        h = [h, u].join("");
                    }
                else
                    h = "";
                h && a.push(h);
            }
        0 < a.length && (s = a), 3 == n.length && (a = [], 0 < (n = (n = n[2]) ? n.split(",") : a).length && (n = Z[n[0]]) && (t.c[r] = n));
    }
    for (t.c[r] || (n = Z[r]) && (t.c[r] = n), n = 0; n < s.length; n += 1)
        t.a.push(new _(r, s[n]));
} }(s), d(i, function (t) { if (0 == t.a.length)
    throw Error("No fonts to load!"); if (-1 != t.c.indexOf("kit="))
    return t.c; for (var e = t.a.length, i = [], n = 0; n < e; n++)
    i.push(t.a[n].replace(/ /g, "+")); return e = t.c + "?family=" + i.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e; }(n), m(e)), g(e, (function () { t(s.a, s.c, tt); })); }, et.prototype.load = function (t) { var e = this.a.id, i = this.c.o; e ? p(this.c, (this.a.api || "https://use.typekit.net") + "/" + e + ".js", (function (e) { if (e)
    t([]);
else if (i.Typekit && i.Typekit.config && i.Typekit.config.fn) {
    e = i.Typekit.config.fn;
    for (var n = [], r = 0; r < e.length; r += 2)
        for (var s = e[r], a = e[r + 1], o = 0; o < a.length; o++)
            n.push(new _(s, a[o]));
    try {
        i.Typekit.load({ events: !1, classes: !1, async: !0 });
    }
    catch (t) { }
    t(n);
} }), 2e3) : t([]); }, it.prototype.load = function (t) { var e = this.f.id, i = this.c.o, n = this; e ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}), i.__webfontfontdeckmodule__[e] = function (e, i) { for (var r = 0, s = i.fonts.length; r < s; ++r) {
    var a = i.fonts[r];
    n.a.push(new _(a.name, w("font-weight:" + a.weight + ";font-style:" + a.style)));
} t(n.a); }, p(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function (t) { return t.o.location.hostname || t.a.location.hostname; }(this.c) + "/" + e + ".js", (function (e) { e && t([]); }))) : t([]); }; var nt = new V(window); nt.a.c.custom = function (t, e) { return new j(e, t); }, nt.a.c.fontdeck = function (t, e) { return new it(e, t); }, nt.a.c.monotype = function (t, e) { return new W(e, t); }, nt.a.c.typekit = function (t, e) { return new et(e, t); }, nt.a.c.google = function (t, e) { return new Q(e, t); }; var rt = { load: n(nt.load, nt) }; "function" == typeof define && define.amd ? define((function () { return rt; })) : t.exports ? t.exports = rt : (window.WebFont = rt, window.WebFontConfig && nt.load(window.WebFontConfig)); }(); })), r.register("gWrO8", (function (t, e) {
    /*!
     * imagesLoaded v5.0.0
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    var i, n;
    i = "undefined" != typeof window ? window : t.exports, n = function (t, e) { let i = t.jQuery, n = t.console; function r(t, e, s) { if (!(this instanceof r))
        return new r(t, e, s); let a = t; var o; "string" == typeof t && (a = document.querySelectorAll(t)), a ? (this.elements = (o = a, Array.isArray(o) ? o : "object" == typeof o && "number" == typeof o.length ? [...o] : [o]), this.options = {}, "function" == typeof e ? s = e : Object.assign(this.options, e), s && this.on("always", s), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error(`Bad element for imagesLoaded ${a || t}`); } r.prototype = Object.create(e.prototype), r.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this); }; const s = [1, 9, 11]; r.prototype.addElementImages = function (t) { "IMG" === t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t); let { nodeType: e } = t; if (!e || !s.includes(e))
        return; let i = t.querySelectorAll("img"); for (let t of i)
        this.addImage(t); if ("string" == typeof this.options.background) {
        let e = t.querySelectorAll(this.options.background);
        for (let t of e)
            this.addElementBackgroundImages(t);
    } }; const a = /url\((['"])?(.*?)\1\)/gi; function o(t) { this.img = t; } function l(t, e) { this.url = t, this.element = e, this.img = new Image; } return r.prototype.addElementBackgroundImages = function (t) { let e = getComputedStyle(t); if (!e)
        return; let i = a.exec(e.backgroundImage); for (; null !== i;) {
        let n = i && i[2];
        n && this.addBackground(n, t), i = a.exec(e.backgroundImage);
    } }, r.prototype.addImage = function (t) { let e = new o(t); this.images.push(e); }, r.prototype.addBackground = function (t, e) { let i = new l(t, e); this.images.push(i); }, r.prototype.check = function () { if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length)
        return void this.complete(); let t = (t, e, i) => { setTimeout((() => { this.progress(t, e, i); })); }; this.images.forEach((function (e) { e.once("progress", t), e.check(); })); }, r.prototype.progress = function (t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && n && n.log(`progress: ${i}`, t, e); }, r.prototype.complete = function () { let t = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
        let t = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[t](this);
    } }, o.prototype = Object.create(e.prototype), o.prototype.check = function () { this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src); }, o.prototype.getIsImageComplete = function () { return this.img.complete && this.img.naturalWidth; }, o.prototype.confirm = function (t, e) { this.isLoaded = t; let { parentNode: i } = this.img, n = "PICTURE" === i.nodeName ? i : this.img; this.emitEvent("progress", [this, n, e]); }, o.prototype.handleEvent = function (t) { let e = "on" + t.type; this[e] && this[e](t); }, o.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents(); }, o.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents(); }, o.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this); }, l.prototype = Object.create(o.prototype), l.prototype.check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()); }, l.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this); }, l.prototype.confirm = function (t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]); }, r.makeJQueryPlugin = function (e) { (e = e || t.jQuery) && (i = e, i.fn.imagesLoaded = function (t, e) { return new r(this, t, e).jqDeferred.promise(i(this)); }); }, r.makeJQueryPlugin(), r; }, t.exports ? t.exports = n(i, r("Vqjah")) : i.imagesLoaded = n(i, i.EvEmitter);
})), r.register("Vqjah", (function (t, e) { !function (e, i) { t.exports ? t.exports = i() : e.EvEmitter = i(); }("undefined" != typeof window ? window : t.exports, (function () { function t() { } let e = t.prototype; return e.on = function (t, e) { if (!t || !e)
    return this; let i = this._events = this._events || {}, n = i[t] = i[t] || []; return n.includes(e) || n.push(e), this; }, e.once = function (t, e) { if (!t || !e)
    return this; this.on(t, e); let i = this._onceEvents = this._onceEvents || {}; return (i[t] = i[t] || {})[e] = !0, this; }, e.off = function (t, e) { let i = this._events && this._events[t]; if (!i || !i.length)
    return this; let n = i.indexOf(e); return -1 != n && i.splice(n, 1), this; }, e.emitEvent = function (t, e) { let i = this._events && this._events[t]; if (!i || !i.length)
    return this; i = i.slice(0), e = e || []; let n = this._onceEvents && this._onceEvents[t]; for (let r of i) {
    n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e);
} return this; }, e.allOff = function () { return delete this._events, delete this._onceEvents, this; }, t; })); })), r.register("leSiX", (function (t, e) { var i = t.exports && t.exports.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; }; Object.defineProperty(t.exports, "__esModule", { value: !0 }); const n = i(r("eRGm8")); t.exports.default = new class {
    constructor() { this.init(); }
    onScroll() { n.default.emit("scroll", { y: window.scrollY }); }
    on() { window.addEventListener("scroll", this.onScroll); }
    init() { this.on(); }
}; })), r.register("hkWoT", (function (t, e) { var i = t.exports && t.exports.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; }; Object.defineProperty(t.exports, "__esModule", { value: !0 }); const n = i(r("eRGm8")); t.exports.default = new class {
    constructor() { this.init(); }
    onResize() { n.default.emit("resize"); }
    on() { window.addEventListener("resize", this.onResize); }
    init() { this.on(); }
}; })), r.register("8Yt84", (function (t, e) { t.exports, t.exports = function () { var t = document, e = t.createTextNode.bind(t); function i(t, e, i) { t.style.setProperty(e, i); } function n(t, e) { return t.appendChild(e); } function r(e, i, r, s) { var a = t.createElement("span"); return i && (a.className = i), r && (!s && a.setAttribute("data-" + i, r), a.textContent = r), e && n(e, a) || a; } function s(t, e) { return t.getAttribute("data-" + e); } function a(e, i) { return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (i || t).querySelectorAll(e)) : []; } function o(t) { for (var e = []; t--;)
    e[t] = []; return e; } function l(t, e) { t && t.some(e); } function c(t) { return function (e) { return t[e]; }; } function h(t, e, n) { var r = "--" + e, s = r + "-index"; l(n, (function (t, e) { Array.isArray(t) ? l(t, (function (t) { i(t, s, e); })) : i(t, s, e); })), i(t, r + "-total", n.length); } var u = {}; function d(t, e, i) { var n = i.indexOf(t); if (-1 == n)
    i.unshift(t), l(u[t].depends, (function (e) { d(e, t, i); }));
else {
    var r = i.indexOf(e);
    i.splice(n, 1), i.splice(r, 0, t);
} return i; } function p(t, e, i, n) { return { by: t, depends: e, key: i, split: n }; } function f(t) { return d(t, 0, []).map(c(u)); } function m(t) { u[t.by] = t; } function g(t, i, s, o, c) { t.normalize(); var h = [], u = document.createDocumentFragment(); o && h.push(t.previousSibling); var d = []; return a(t.childNodes).some((function (t) { if (!t.tagName || t.hasChildNodes()) {
    if (t.childNodes && t.childNodes.length)
        return d.push(t), void h.push.apply(h, g(t, i, s, o, c));
    var n = t.wholeText || "", a = n.trim();
    a.length && (" " === n[0] && d.push(e(" ")), l(a.split(s), (function (t, e) { e && c && d.push(r(u, "whitespace", " ", c)); var n = r(u, i, t); h.push(n), d.push(n); })), " " === n[n.length - 1] && d.push(e(" ")));
}
else
    d.push(t); })), l(d, (function (t) { n(u, t); })), t.innerHTML = "", n(t, u), h; } var v = 0; function x(t, e) { for (var i in e)
    t[i] = e[i]; return t; } var _ = "words", y = p(_, v, "word", (function (t) { return g(t, "word", /\s+/, 0, 1); })), b = "chars", M = p(b, [_], "char", (function (t, e, i) { var n = []; return l(i[_], (function (t, i) { n.push.apply(n, g(t, "char", "", e.whitespace && i)); })), n; })); function w(t) { var e = (t = t || {}).key; return a(t.target || "[data-splitting]").map((function (i) { var n = i["🍌"]; if (!t.force && n)
    return n; n = i["🍌"] = { el: i }; var r = f(t.by || s(i, "splitting") || b), a = x({}, t); return l(r, (function (t) { if (t.split) {
    var r = t.by, s = (e ? "-" + e : "") + t.key, o = t.split(i, a, n);
    s && h(i, s, o), n[r] = o, i.classList.add(r);
} })), i.classList.add("splitting"), n; })); } function S(t) { var e = (t = t || {}).target = r(); return e.innerHTML = t.content, w(t), e.outerHTML; } function T(t, e, i) { var n = a(e.matching || t.children, t), r = {}; return l(n, (function (t) { var e = Math.round(t[i]); (r[e] || (r[e] = [])).push(t); })), Object.keys(r).map(Number).sort(E).map(c(r)); } function E(t, e) { return t - e; } w.html = S, w.add = m; var A = p("lines", [_], "line", (function (t, e, i) { return T(t, { matching: i[_] }, "offsetTop"); })), C = p("items", v, "item", (function (t, e) { return a(e.matching || t.children, t); })), L = p("rows", v, "row", (function (t, e) { return T(t, e, "offsetTop"); })), P = p("cols", v, "col", (function (t, e) { return T(t, e, "offsetLeft"); })), R = p("grid", ["rows", "cols"]), D = "layout", I = p(D, v, v, (function (t, e) { var o = e.rows = +(e.rows || s(t, "rows") || 1), l = e.columns = +(e.columns || s(t, "columns") || 1); if (e.image = e.image || s(t, "image") || t.currentSrc || t.src, e.image) {
    var c = a("img", t)[0];
    e.image = c && (c.currentSrc || c.src);
} e.image && i(t, "background-image", "url(" + e.image + ")"); for (var h = o * l, u = [], d = r(v, "cell-grid"); h--;) {
    var p = r(d, "cell");
    r(p, "cell-inner"), u.push(p);
} return n(t, d), u; })), O = p("cellRows", [D], "row", (function (t, e, i) { var n = e.rows, r = o(n); return l(i[D], (function (t, e, i) { r[Math.floor(e / (i.length / n))].push(t); })), r; })), z = p("cellColumns", [D], "col", (function (t, e, i) { var n = e.columns, r = o(n); return l(i[D], (function (t, e) { r[e % n].push(t); })), r; })), N = p("cells", ["cellRows", "cellColumns"], "cell", (function (t, e, i) { return i[D]; })); return m(y), m(M), m(A), m(C), m(L), m(P), m(R), m(I), m(O), m(z), m(N), w; }(); })), r.register("ixATP", (function (t, e) { Object.defineProperty(t.exports, "__esModule", { value: !0 }); t.exports.default = class {
    constructor() { this.didScroll = !1, this.lastScrollTop = 0, this.delta = 5, this.navbar = document.querySelector(".home-nav-top-container"), this.navbarItems = [...document.querySelectorAll(".home-nav-top-item")], this.navbarHeight = this.navbar.offsetHeight, this.navLinks = document.querySelector(".home-nav-top-nav"), this.navBurger = document.querySelector(".home-nav-burger"), this.initEvents(), setInterval((() => { this.checkScroll(); }), 150); }
    initEvents() { window.addEventListener("scroll", (() => { this.didScroll = !0, this.navLinks.classList.remove("open"); })), this.navBurger.addEventListener("click", (t => { this.navLinks.classList.toggle("open"); })); document.querySelectorAll(".home-nav-top-item a").forEach((t => { t.addEventListener("click", (t => { t.stopPropagation(), this.navLinks.classList.remove("open"); })); })), window.addEventListener("click", (t => { this.navBurger.contains(t.target) || this.navLinks.contains(t.target) || this.navLinks.classList.remove("open"); })); }
    checkScroll() { this.didScroll && (this.hasScrolled(), this.didScroll = !1); }
    hasScrolled() { let t = window.pageYOffset; if (!(Math.abs(this.lastScrollTop - t) <= this.delta)) {
        if (t > this.lastScrollTop && t > this.navbarHeight)
            this.navAnim(), this.navbar.classList.add("home-nav-up"), this.navbarItems.forEach((t => { t.classList.add("home-nav-up"); })), this.navbar.classList.remove("home-nav-down"), this.navbarItems.forEach((t => { t.classList.remove("home-nav-down"); }));
        else {
            const e = Math.max(document.body.getBoundingClientRect().height, document.querySelector("html").getBoundingClientRect().height);
            t + window.innerHeight < e && (this.navAnim(), this.navbar.classList.remove("home-nav-up"), this.navbarItems.forEach((t => { t.classList.remove("home-nav-up"); })), this.navbar.classList.add("home-nav-down"), this.navbarItems.forEach((t => { t.classList.add("home-nav-down"); }))), t <= 150 && (this.navAnim(), this.navbar.classList.add("home-nav-up"), this.navbarItems.forEach((t => { t.classList.add("home-nav-up"); })), this.navbar.classList.remove("home-nav-down"), this.navbarItems.forEach((t => { t.classList.remove("home-nav-down"); })));
        }
        this.lastScrollTop = t;
    } }
    navAnim() { this.navbarItems.forEach(((t, e) => { t.classList.add(`home-nav-delay-${e}`); })); }
}; })), r.register("ilwiq", (function (e, i) {
    t(e.exports, "REVISION", (() => n)), t(e.exports, "MOUSE", (() => r)), t(e.exports, "TOUCH", (() => s)), t(e.exports, "CullFaceNone", (() => a)), t(e.exports, "CullFaceBack", (() => o)), t(e.exports, "CullFaceFront", (() => l)), t(e.exports, "CullFaceFrontBack", (() => c)), t(e.exports, "BasicShadowMap", (() => h)), t(e.exports, "PCFShadowMap", (() => u)), t(e.exports, "PCFSoftShadowMap", (() => d)), t(e.exports, "VSMShadowMap", (() => p)), t(e.exports, "FrontSide", (() => f)), t(e.exports, "BackSide", (() => m)), t(e.exports, "DoubleSide", (() => g)), t(e.exports, "TwoPassDoubleSide", (() => v)), t(e.exports, "NoBlending", (() => x)), t(e.exports, "NormalBlending", (() => _)), t(e.exports, "AdditiveBlending", (() => y)), t(e.exports, "SubtractiveBlending", (() => b)), t(e.exports, "MultiplyBlending", (() => M)), t(e.exports, "CustomBlending", (() => w)), t(e.exports, "AddEquation", (() => S)), t(e.exports, "SubtractEquation", (() => T)), t(e.exports, "ReverseSubtractEquation", (() => E)), t(e.exports, "MinEquation", (() => A)), t(e.exports, "MaxEquation", (() => C)), t(e.exports, "ZeroFactor", (() => L)), t(e.exports, "OneFactor", (() => P)), t(e.exports, "SrcColorFactor", (() => R)), t(e.exports, "OneMinusSrcColorFactor", (() => D)), t(e.exports, "SrcAlphaFactor", (() => I)), t(e.exports, "OneMinusSrcAlphaFactor", (() => O)), t(e.exports, "DstAlphaFactor", (() => z)), t(e.exports, "OneMinusDstAlphaFactor", (() => N)), t(e.exports, "DstColorFactor", (() => U)), t(e.exports, "OneMinusDstColorFactor", (() => k)), t(e.exports, "SrcAlphaSaturateFactor", (() => B)), t(e.exports, "NeverDepth", (() => F)), t(e.exports, "AlwaysDepth", (() => G)), t(e.exports, "LessDepth", (() => V)), t(e.exports, "LessEqualDepth", (() => H)), t(e.exports, "EqualDepth", (() => W)), t(e.exports, "GreaterEqualDepth", (() => j)), t(e.exports, "GreaterDepth", (() => q)), t(e.exports, "NotEqualDepth", (() => X)), t(e.exports, "MultiplyOperation", (() => Y)), t(e.exports, "MixOperation", (() => Z)), t(e.exports, "AddOperation", (() => J)), t(e.exports, "NoToneMapping", (() => K)), t(e.exports, "LinearToneMapping", (() => $)), t(e.exports, "ReinhardToneMapping", (() => Q)), t(e.exports, "CineonToneMapping", (() => tt)), t(e.exports, "ACESFilmicToneMapping", (() => et)), t(e.exports, "CustomToneMapping", (() => it)), t(e.exports, "UVMapping", (() => nt)), t(e.exports, "CubeReflectionMapping", (() => rt)), t(e.exports, "CubeRefractionMapping", (() => st)), t(e.exports, "EquirectangularReflectionMapping", (() => at)), t(e.exports, "EquirectangularRefractionMapping", (() => ot)), t(e.exports, "CubeUVReflectionMapping", (() => lt)), t(e.exports, "RepeatWrapping", (() => ct)), t(e.exports, "ClampToEdgeWrapping", (() => ht)), t(e.exports, "MirroredRepeatWrapping", (() => ut)), t(e.exports, "NearestFilter", (() => dt)), t(e.exports, "NearestMipmapNearestFilter", (() => pt)), t(e.exports, "NearestMipMapNearestFilter", (() => ft)), t(e.exports, "NearestMipmapLinearFilter", (() => mt)), t(e.exports, "NearestMipMapLinearFilter", (() => gt)), t(e.exports, "LinearFilter", (() => vt)), t(e.exports, "LinearMipmapNearestFilter", (() => xt)), t(e.exports, "LinearMipMapNearestFilter", (() => _t)), t(e.exports, "LinearMipmapLinearFilter", (() => yt)), t(e.exports, "LinearMipMapLinearFilter", (() => bt)), t(e.exports, "UnsignedByteType", (() => Mt)), t(e.exports, "ByteType", (() => wt)), t(e.exports, "ShortType", (() => St)), t(e.exports, "UnsignedShortType", (() => Tt)), t(e.exports, "IntType", (() => Et)), t(e.exports, "UnsignedIntType", (() => At)), t(e.exports, "FloatType", (() => Ct)), t(e.exports, "HalfFloatType", (() => Lt)), t(e.exports, "UnsignedShort4444Type", (() => Pt)), t(e.exports, "UnsignedShort5551Type", (() => Rt)), t(e.exports, "UnsignedInt248Type", (() => Dt)), t(e.exports, "AlphaFormat", (() => It)), t(e.exports, "RGBAFormat", (() => Ot)), t(e.exports, "LuminanceFormat", (() => zt)), t(e.exports, "LuminanceAlphaFormat", (() => Nt)), t(e.exports, "DepthFormat", (() => Ut)), t(e.exports, "DepthStencilFormat", (() => kt)), t(e.exports, "RedFormat", (() => Bt)), t(e.exports, "RedIntegerFormat", (() => Ft)), t(e.exports, "RGFormat", (() => Gt)), t(e.exports, "RGIntegerFormat", (() => Vt)), t(e.exports, "RGBAIntegerFormat", (() => Ht)), t(e.exports, "RGB_S3TC_DXT1_Format", (() => Wt)), t(e.exports, "RGBA_S3TC_DXT1_Format", (() => jt)), t(e.exports, "RGBA_S3TC_DXT3_Format", (() => qt)), t(e.exports, "RGBA_S3TC_DXT5_Format", (() => Xt)), t(e.exports, "RGB_PVRTC_4BPPV1_Format", (() => Yt)), t(e.exports, "RGB_PVRTC_2BPPV1_Format", (() => Zt)), t(e.exports, "RGBA_PVRTC_4BPPV1_Format", (() => Jt)), t(e.exports, "RGBA_PVRTC_2BPPV1_Format", (() => Kt)), t(e.exports, "RGB_ETC1_Format", (() => $t)), t(e.exports, "RGB_ETC2_Format", (() => Qt)), t(e.exports, "RGBA_ETC2_EAC_Format", (() => te)), t(e.exports, "RGBA_ASTC_4x4_Format", (() => ee)), t(e.exports, "RGBA_ASTC_5x4_Format", (() => ie)), t(e.exports, "RGBA_ASTC_5x5_Format", (() => ne)), t(e.exports, "RGBA_ASTC_6x5_Format", (() => re)), t(e.exports, "RGBA_ASTC_6x6_Format", (() => se)), t(e.exports, "RGBA_ASTC_8x5_Format", (() => ae)), t(e.exports, "RGBA_ASTC_8x6_Format", (() => oe)), t(e.exports, "RGBA_ASTC_8x8_Format", (() => le)), t(e.exports, "RGBA_ASTC_10x5_Format", (() => ce)), t(e.exports, "RGBA_ASTC_10x6_Format", (() => he)), t(e.exports, "RGBA_ASTC_10x8_Format", (() => ue)), t(e.exports, "RGBA_ASTC_10x10_Format", (() => de)), t(e.exports, "RGBA_ASTC_12x10_Format", (() => pe)), t(e.exports, "RGBA_ASTC_12x12_Format", (() => fe)), t(e.exports, "RGBA_BPTC_Format", (() => me)), t(e.exports, "RED_RGTC1_Format", (() => ge)), t(e.exports, "SIGNED_RED_RGTC1_Format", (() => ve)), t(e.exports, "RED_GREEN_RGTC2_Format", (() => xe)), t(e.exports, "SIGNED_RED_GREEN_RGTC2_Format", (() => _e)), t(e.exports, "LoopOnce", (() => ye)), t(e.exports, "LoopRepeat", (() => be)), t(e.exports, "LoopPingPong", (() => Me)), t(e.exports, "InterpolateDiscrete", (() => we)), t(e.exports, "InterpolateLinear", (() => Se)), t(e.exports, "InterpolateSmooth", (() => Te)), t(e.exports, "ZeroCurvatureEnding", (() => Ee)), t(e.exports, "ZeroSlopeEnding", (() => Ae)), t(e.exports, "WrapAroundEnding", (() => Ce)), t(e.exports, "NormalAnimationBlendMode", (() => Le)), t(e.exports, "AdditiveAnimationBlendMode", (() => Pe)), t(e.exports, "TrianglesDrawMode", (() => Re)), t(e.exports, "TriangleStripDrawMode", (() => De)), t(e.exports, "TriangleFanDrawMode", (() => Ie)), t(e.exports, "LinearEncoding", (() => Oe)), t(e.exports, "sRGBEncoding", (() => ze)), t(e.exports, "BasicDepthPacking", (() => Ne)), t(e.exports, "RGBADepthPacking", (() => Ue)), t(e.exports, "TangentSpaceNormalMap", (() => ke)), t(e.exports, "ObjectSpaceNormalMap", (() => Be)), t(e.exports, "NoColorSpace", (() => Fe)), t(e.exports, "SRGBColorSpace", (() => Ge)), t(e.exports, "LinearSRGBColorSpace", (() => Ve)), t(e.exports, "ZeroStencilOp", (() => He)), t(e.exports, "KeepStencilOp", (() => We)), t(e.exports, "ReplaceStencilOp", (() => je)), t(e.exports, "IncrementStencilOp", (() => qe)), t(e.exports, "DecrementStencilOp", (() => Xe)), t(e.exports, "IncrementWrapStencilOp", (() => Ye)), t(e.exports, "DecrementWrapStencilOp", (() => Ze)), t(e.exports, "InvertStencilOp", (() => Je)), t(e.exports, "NeverStencilFunc", (() => Ke)), t(e.exports, "LessStencilFunc", (() => $e)), t(e.exports, "EqualStencilFunc", (() => Qe)), t(e.exports, "LessEqualStencilFunc", (() => ti)), t(e.exports, "GreaterStencilFunc", (() => ei)), t(e.exports, "NotEqualStencilFunc", (() => ii)), t(e.exports, "GreaterEqualStencilFunc", (() => ni)), t(e.exports, "AlwaysStencilFunc", (() => ri)), t(e.exports, "StaticDrawUsage", (() => si)), t(e.exports, "DynamicDrawUsage", (() => ai)), t(e.exports, "StreamDrawUsage", (() => oi)), t(e.exports, "StaticReadUsage", (() => li)), t(e.exports, "DynamicReadUsage", (() => ci)), t(e.exports, "StreamReadUsage", (() => hi)), t(e.exports, "StaticCopyUsage", (() => ui)), t(e.exports, "DynamicCopyUsage", (() => di)), t(e.exports, "StreamCopyUsage", (() => pi)), t(e.exports, "GLSL1", (() => fi)), t(e.exports, "GLSL3", (() => mi)), t(e.exports, "_SRGBAFormat", (() => gi)), t(e.exports, "EventDispatcher", (() => vi)), t(e.exports, "MathUtils", (() => Ri)), t(e.exports, "Vector2", (() => Di)), t(e.exports, "Matrix3", (() => Ii)), t(e.exports, "ColorManagement", (() => Vi)), t(e.exports, "Color", (() => Zi)), t(e.exports, "ImageUtils", (() => Ki)), t(e.exports, "Source", (() => $i)), t(e.exports, "Texture", (() => en)), t(e.exports, "Vector4", (() => nn)), t(e.exports, "WebGLRenderTarget", (() => rn)), t(e.exports, "DataArrayTexture", (() => sn)), t(e.exports, "WebGLArrayRenderTarget", (() => an)), t(e.exports, "Data3DTexture", (() => on)), t(e.exports, "WebGL3DRenderTarget", (() => ln)), t(e.exports, "WebGLMultipleRenderTargets", (() => cn)), t(e.exports, "Quaternion", (() => hn)), t(e.exports, "Vector3", (() => un)), t(e.exports, "Box3", (() => fn)), t(e.exports, "Sphere", (() => Dn)), t(e.exports, "Ray", (() => Fn)), t(e.exports, "Matrix4", (() => Gn)), t(e.exports, "Euler", (() => Kn)), t(e.exports, "Layers", (() => $n)), t(e.exports, "Object3D", (() => dr)), t(e.exports, "Triangle", (() => wr)), t(e.exports, "Material", (() => Tr)), t(e.exports, "MeshBasicMaterial", (() => Er)), t(e.exports, "BufferAttribute", (() => Lr)), t(e.exports, "Int8BufferAttribute", (() => Pr)), t(e.exports, "Uint8BufferAttribute", (() => Rr)), t(e.exports, "Uint8ClampedBufferAttribute", (() => Dr)), t(e.exports, "Int16BufferAttribute", (() => Ir)), t(e.exports, "Uint16BufferAttribute", (() => Or)), t(e.exports, "Int32BufferAttribute", (() => zr)), t(e.exports, "Uint32BufferAttribute", (() => Nr)), t(e.exports, "Float16BufferAttribute", (() => Ur)), t(e.exports, "Float32BufferAttribute", (() => kr)), t(e.exports, "Float64BufferAttribute", (() => Br)), t(e.exports, "BufferGeometry", (() => Xr)), t(e.exports, "Mesh", (() => os)), t(e.exports, "BoxGeometry", (() => cs)), t(e.exports, "UniformsUtils", (() => ps)), t(e.exports, "ShaderMaterial", (() => fs)), t(e.exports, "Camera", (() => ms)), t(e.exports, "PerspectiveCamera", (() => gs)), t(e.exports, "CubeCamera", (() => xs)), t(e.exports, "CubeTexture", (() => _s)), t(e.exports, "WebGLCubeRenderTarget", (() => ys)), t(e.exports, "Plane", (() => Ss)), t(e.exports, "Frustum", (() => As)), t(e.exports, "PlaneGeometry", (() => Ps)), t(e.exports, "ShaderChunk", (() => Rs)), t(e.exports, "UniformsLib", (() => Ds)), t(e.exports, "ShaderLib", (() => Is)), t(e.exports, "OrthographicCamera", (() => Gs)), t(e.exports, "PMREMGenerator", (() => Js)), t(e.exports, "MeshDepthMaterial", (() => Xo)), t(e.exports, "MeshDistanceMaterial", (() => Yo)), t(e.exports, "WebGLUtils", (() => $o)), t(e.exports, "ArrayCamera", (() => Qo)), t(e.exports, "Group", (() => tl)), t(e.exports, "DepthTexture", (() => nl)), t(e.exports, "WebGLRenderer", (() => ol)), t(e.exports, "WebGL1Renderer", (() => ll)), t(e.exports, "FogExp2", (() => cl)), t(e.exports, "Fog", (() => hl)), t(e.exports, "Scene", (() => ul)), t(e.exports, "InterleavedBuffer", (() => dl)), t(e.exports, "InterleavedBufferAttribute", (() => fl)), t(e.exports, "SpriteMaterial", (() => ml)), t(e.exports, "Sprite", (() => Ll)), t(e.exports, "LOD", (() => Il)), t(e.exports, "SkinnedMesh", (() => Bl)), t(e.exports, "Bone", (() => Fl)), t(e.exports, "DataTexture", (() => Gl)), t(e.exports, "Skeleton", (() => Wl)), t(e.exports, "InstancedBufferAttribute", (() => jl)), t(e.exports, "InstancedMesh", (() => Kl)), t(e.exports, "LineBasicMaterial", (() => $l)), t(e.exports, "Line", (() => rc)), t(e.exports, "LineSegments", (() => oc)), t(e.exports, "LineLoop", (() => lc)), t(e.exports, "PointsMaterial", (() => cc)), t(e.exports, "Points", (() => fc)), t(e.exports, "VideoTexture", (() => gc)), t(e.exports, "FramebufferTexture", (() => vc)), t(e.exports, "CompressedTexture", (() => xc)), t(e.exports, "CompressedArrayTexture", (() => _c)), t(e.exports, "CanvasTexture", (() => yc)), t(e.exports, "Curve", (() => bc)), t(e.exports, "EllipseCurve", (() => Mc)), t(e.exports, "ArcCurve", (() => wc)), t(e.exports, "CatmullRomCurve3", (() => Lc)), t(e.exports, "CubicBezierCurve", (() => Ic)), t(e.exports, "CubicBezierCurve3", (() => Oc)), t(e.exports, "LineCurve", (() => zc)), t(e.exports, "LineCurve3", (() => Nc)), t(e.exports, "QuadraticBezierCurve", (() => Uc)), t(e.exports, "QuadraticBezierCurve3", (() => kc)), t(e.exports, "SplineCurve", (() => Bc)), t(e.exports, "CurvePath", (() => Gc)), t(e.exports, "Path", (() => Vc)), t(e.exports, "LatheGeometry", (() => Hc)), t(e.exports, "CapsuleGeometry", (() => Wc)), t(e.exports, "CircleGeometry", (() => jc)), t(e.exports, "CylinderGeometry", (() => qc)), t(e.exports, "ConeGeometry", (() => Xc)), t(e.exports, "PolyhedronGeometry", (() => Yc)), t(e.exports, "DodecahedronGeometry", (() => Zc)), t(e.exports, "EdgesGeometry", (() => th)), t(e.exports, "Shape", (() => eh)), t(e.exports, "ShapeUtils", (() => Ah)), t(e.exports, "ExtrudeGeometry", (() => Ph)), t(e.exports, "IcosahedronGeometry", (() => Dh)), t(e.exports, "OctahedronGeometry", (() => Ih)), t(e.exports, "RingGeometry", (() => Oh)), t(e.exports, "ShapeGeometry", (() => zh)), t(e.exports, "SphereGeometry", (() => Nh)), t(e.exports, "TetrahedronGeometry", (() => Uh)), t(e.exports, "TorusGeometry", (() => kh)), t(e.exports, "TorusKnotGeometry", (() => Bh)), t(e.exports, "TubeGeometry", (() => Fh)), t(e.exports, "WireframeGeometry", (() => Gh)), t(e.exports, "ShadowMaterial", (() => Wh)), t(e.exports, "RawShaderMaterial", (() => jh)), t(e.exports, "MeshStandardMaterial", (() => qh)), t(e.exports, "MeshPhysicalMaterial", (() => Xh)), t(e.exports, "MeshPhongMaterial", (() => Yh)), t(e.exports, "MeshToonMaterial", (() => Zh)), t(e.exports, "MeshNormalMaterial", (() => Jh)), t(e.exports, "MeshLambertMaterial", (() => Kh)), t(e.exports, "MeshMatcapMaterial", (() => $h)), t(e.exports, "LineDashedMaterial", (() => Qh)), t(e.exports, "AnimationUtils", (() => au)), t(e.exports, "Interpolant", (() => ou)), t(e.exports, "CubicInterpolant", (() => lu)), t(e.exports, "LinearInterpolant", (() => cu)), t(e.exports, "DiscreteInterpolant", (() => hu)), t(e.exports, "KeyframeTrack", (() => uu)), t(e.exports, "BooleanKeyframeTrack", (() => du)), t(e.exports, "ColorKeyframeTrack", (() => pu)), t(e.exports, "NumberKeyframeTrack", (() => fu)), t(e.exports, "QuaternionLinearInterpolant", (() => mu)), t(e.exports, "QuaternionKeyframeTrack", (() => gu)), t(e.exports, "StringKeyframeTrack", (() => vu)), t(e.exports, "VectorKeyframeTrack", (() => xu)), t(e.exports, "AnimationClip", (() => _u)), t(e.exports, "Cache", (() => bu)), t(e.exports, "LoadingManager", (() => Mu)), t(e.exports, "DefaultLoadingManager", (() => wu)), t(e.exports, "Loader", (() => Su)), t(e.exports, "FileLoader", (() => Au)), t(e.exports, "AnimationLoader", (() => Cu)), t(e.exports, "CompressedTextureLoader", (() => Lu)), t(e.exports, "ImageLoader", (() => Pu)), t(e.exports, "CubeTextureLoader", (() => Ru)), t(e.exports, "DataTextureLoader", (() => Du)), t(e.exports, "TextureLoader", (() => Iu)), t(e.exports, "Light", (() => Ou)), t(e.exports, "HemisphereLight", (() => zu)), t(e.exports, "SpotLight", (() => Gu)), t(e.exports, "PointLight", (() => qu)), t(e.exports, "DirectionalLight", (() => Yu)), t(e.exports, "AmbientLight", (() => Zu)), t(e.exports, "RectAreaLight", (() => Ju)), t(e.exports, "SphericalHarmonics3", (() => Ku)), t(e.exports, "LightProbe", (() => $u)), t(e.exports, "MaterialLoader", (() => Qu)), t(e.exports, "LoaderUtils", (() => td)), t(e.exports, "InstancedBufferGeometry", (() => ed)), t(e.exports, "BufferGeometryLoader", (() => id)), t(e.exports, "ObjectLoader", (() => nd)), t(e.exports, "ImageBitmapLoader", (() => od)), t(e.exports, "AudioContext", (() => cd)), t(e.exports, "AudioLoader", (() => hd)), t(e.exports, "HemisphereLightProbe", (() => ud)), t(e.exports, "AmbientLightProbe", (() => dd)), t(e.exports, "StereoCamera", (() => gd)), t(e.exports, "Clock", (() => vd)), t(e.exports, "AudioListener", (() => wd)), t(e.exports, "Audio", (() => Sd)), t(e.exports, "PositionalAudio", (() => Ld)), t(e.exports, "AudioAnalyser", (() => Pd)), t(e.exports, "PropertyMixer", (() => Rd)), t(e.exports, "PropertyBinding", (() => kd)), t(e.exports, "AnimationObjectGroup", (() => Bd)), t(e.exports, "AnimationMixer", (() => Vd)), t(e.exports, "Uniform", (() => Hd)), t(e.exports, "UniformsGroup", (() => jd)), t(e.exports, "InstancedInterleavedBuffer", (() => qd)), t(e.exports, "GLBufferAttribute", (() => Xd)), t(e.exports, "Raycaster", (() => Yd)), t(e.exports, "Spherical", (() => Kd)), t(e.exports, "Cylindrical", (() => $d)), t(e.exports, "Box2", (() => tp)), t(e.exports, "Line3", (() => np)), t(e.exports, "SpotLightHelper", (() => sp)), t(e.exports, "SkeletonHelper", (() => cp)), t(e.exports, "PointLightHelper", (() => up)), t(e.exports, "HemisphereLightHelper", (() => mp)), t(e.exports, "GridHelper", (() => gp)), t(e.exports, "PolarGridHelper", (() => vp)), t(e.exports, "DirectionalLightHelper", (() => bp)), t(e.exports, "CameraHelper", (() => Sp)), t(e.exports, "BoxHelper", (() => Ap)), t(e.exports, "Box3Helper", (() => Cp)), t(e.exports, "PlaneHelper", (() => Lp)), t(e.exports, "ArrowHelper", (() => Ip)), t(e.exports, "AxesHelper", (() => Op)), t(e.exports, "ShapePath", (() => zp)), t(e.exports, "DataUtils", (() => kp)), t(e.exports, "BoxBufferGeometry", (() => Bp)), t(e.exports, "CapsuleBufferGeometry", (() => Fp)), t(e.exports, "CircleBufferGeometry", (() => Gp)), t(e.exports, "ConeBufferGeometry", (() => Vp)), t(e.exports, "CylinderBufferGeometry", (() => Hp)), t(e.exports, "DodecahedronBufferGeometry", (() => Wp)), t(e.exports, "ExtrudeBufferGeometry", (() => jp)), t(e.exports, "IcosahedronBufferGeometry", (() => qp)), t(e.exports, "LatheBufferGeometry", (() => Xp)), t(e.exports, "OctahedronBufferGeometry", (() => Yp)), t(e.exports, "PlaneBufferGeometry", (() => Zp)), t(e.exports, "PolyhedronBufferGeometry", (() => Jp)), t(e.exports, "RingBufferGeometry", (() => Kp)), t(e.exports, "ShapeBufferGeometry", (() => $p)), t(e.exports, "SphereBufferGeometry", (() => Qp)), t(e.exports, "TetrahedronBufferGeometry", (() => tf)), t(e.exports, "TorusBufferGeometry", (() => ef)), t(e.exports, "TorusKnotBufferGeometry", (() => nf)), t(e.exports, "TubeBufferGeometry", (() => rf));
    /**
     * @license
     * Copyright 2010-2023 Three.js Authors
     * SPDX-License-Identifier: MIT
     */
    const n = "149", r = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, s = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, a = 0, o = 1, l = 2, c = 3, h = 0, u = 1, d = 2, p = 3, f = 0, m = 1, g = 2, v = 2, x = 0, _ = 1, y = 2, b = 3, M = 4, w = 5, S = 100, T = 101, E = 102, A = 103, C = 104, L = 200, P = 201, R = 202, D = 203, I = 204, O = 205, z = 206, N = 207, U = 208, k = 209, B = 210, F = 0, G = 1, V = 2, H = 3, W = 4, j = 5, q = 6, X = 7, Y = 0, Z = 1, J = 2, K = 0, $ = 1, Q = 2, tt = 3, et = 4, it = 5, nt = 300, rt = 301, st = 302, at = 303, ot = 304, lt = 306, ct = 1e3, ht = 1001, ut = 1002, dt = 1003, pt = 1004, ft = 1004, mt = 1005, gt = 1005, vt = 1006, xt = 1007, _t = 1007, yt = 1008, bt = 1008, Mt = 1009, wt = 1010, St = 1011, Tt = 1012, Et = 1013, At = 1014, Ct = 1015, Lt = 1016, Pt = 1017, Rt = 1018, Dt = 1020, It = 1021, Ot = 1023, zt = 1024, Nt = 1025, Ut = 1026, kt = 1027, Bt = 1028, Ft = 1029, Gt = 1030, Vt = 1031, Ht = 1033, Wt = 33776, jt = 33777, qt = 33778, Xt = 33779, Yt = 35840, Zt = 35841, Jt = 35842, Kt = 35843, $t = 36196, Qt = 37492, te = 37496, ee = 37808, ie = 37809, ne = 37810, re = 37811, se = 37812, ae = 37813, oe = 37814, le = 37815, ce = 37816, he = 37817, ue = 37818, de = 37819, pe = 37820, fe = 37821, me = 36492, ge = 36283, ve = 36284, xe = 36285, _e = 36286, ye = 2200, be = 2201, Me = 2202, we = 2300, Se = 2301, Te = 2302, Ee = 2400, Ae = 2401, Ce = 2402, Le = 2500, Pe = 2501, Re = 0, De = 1, Ie = 2, Oe = 3e3, ze = 3001, Ne = 3200, Ue = 3201, ke = 0, Be = 1, Fe = "", Ge = "srgb", Ve = "srgb-linear", He = 0, We = 7680, je = 7681, qe = 7682, Xe = 7683, Ye = 34055, Ze = 34056, Je = 5386, Ke = 512, $e = 513, Qe = 514, ti = 515, ei = 516, ii = 517, ni = 518, ri = 519, si = 35044, ai = 35048, oi = 35040, li = 35045, ci = 35049, hi = 35041, ui = 35046, di = 35050, pi = 35042, fi = "100", mi = "300 es", gi = 1035;
    class vi {
        addEventListener(t, e) { void 0 === this._listeners && (this._listeners = {}); const i = this._listeners; void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e); }
        hasEventListener(t, e) { if (void 0 === this._listeners)
            return !1; const i = this._listeners; return void 0 !== i[t] && -1 !== i[t].indexOf(e); }
        removeEventListener(t, e) { if (void 0 === this._listeners)
            return; const i = this._listeners[t]; if (void 0 !== i) {
            const t = i.indexOf(e);
            -1 !== t && i.splice(t, 1);
        } }
        dispatchEvent(t) { if (void 0 === this._listeners)
            return; const e = this._listeners[t.type]; if (void 0 !== e) {
            t.target = this;
            const i = e.slice(0);
            for (let e = 0, n = i.length; e < n; e++)
                i[e].call(this, t);
            t.target = null;
        } }
    }
    const xi = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
    let _i = 1234567;
    const yi = Math.PI / 180, bi = 180 / Math.PI;
    function Mi() { const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0; return (xi[255 & t] + xi[t >> 8 & 255] + xi[t >> 16 & 255] + xi[t >> 24 & 255] + "-" + xi[255 & e] + xi[e >> 8 & 255] + "-" + xi[e >> 16 & 15 | 64] + xi[e >> 24 & 255] + "-" + xi[63 & i | 128] + xi[i >> 8 & 255] + "-" + xi[i >> 16 & 255] + xi[i >> 24 & 255] + xi[255 & n] + xi[n >> 8 & 255] + xi[n >> 16 & 255] + xi[n >> 24 & 255]).toLowerCase(); }
    function wi(t, e, i) { return Math.max(e, Math.min(i, t)); }
    function Si(t, e) { return (t % e + e) % e; }
    function Ti(t, e, i) { return (1 - i) * t + i * e; }
    function Ei(t) { return 0 == (t & t - 1) && 0 !== t; }
    function Ai(t) { return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2)); }
    function Ci(t) { return Math.pow(2, Math.floor(Math.log(t) / Math.LN2)); }
    function Li(t, e) { switch (e.constructor) {
        case Float32Array: return t;
        case Uint16Array: return t / 65535;
        case Uint8Array: return t / 255;
        case Int16Array: return Math.max(t / 32767, -1);
        case Int8Array: return Math.max(t / 127, -1);
        default: throw new Error("Invalid component type.");
    } }
    function Pi(t, e) { switch (e.constructor) {
        case Float32Array: return t;
        case Uint16Array: return Math.round(65535 * t);
        case Uint8Array: return Math.round(255 * t);
        case Int16Array: return Math.round(32767 * t);
        case Int8Array: return Math.round(127 * t);
        default: throw new Error("Invalid component type.");
    } }
    var Ri = Object.freeze({ __proto__: null, DEG2RAD: yi, RAD2DEG: bi, ceilPowerOfTwo: Ai, clamp: wi, damp: function (t, e, i, n) { return Ti(t, e, 1 - Math.exp(-i * n)); }, degToRad: function (t) { return t * yi; }, denormalize: Li, euclideanModulo: Si, floorPowerOfTwo: Ci, generateUUID: Mi, inverseLerp: function (t, e, i) { return t !== e ? (i - t) / (e - t) : 0; }, isPowerOfTwo: Ei, lerp: Ti, mapLinear: function (t, e, i, n, r) { return n + (t - e) * (r - n) / (i - e); }, normalize: Pi, pingpong: function (t, e = 1) { return e - Math.abs(Si(t, 2 * e) - e); }, radToDeg: function (t) { return t * bi; }, randFloat: function (t, e) { return t + Math.random() * (e - t); }, randFloatSpread: function (t) { return t * (.5 - Math.random()); }, randInt: function (t, e) { return t + Math.floor(Math.random() * (e - t + 1)); }, seededRandom: function (t) { void 0 !== t && (_i = t); let e = _i += 1831565813; return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296; }, setQuaternionFromProperEuler: function (t, e, i, n, r) { const s = Math.cos, a = Math.sin, o = s(i / 2), l = a(i / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), f = a((n - e) / 2); switch (r) {
            case "XYX":
                t.set(o * h, l * u, l * d, o * c);
                break;
            case "YZY":
                t.set(l * d, o * h, l * u, o * c);
                break;
            case "ZXZ":
                t.set(l * u, l * d, o * h, o * c);
                break;
            case "XZX":
                t.set(o * h, l * f, l * p, o * c);
                break;
            case "YXY":
                t.set(l * p, o * h, l * f, o * c);
                break;
            case "ZYZ":
                t.set(l * f, l * p, o * h, o * c);
                break;
            default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
        } }, smootherstep: function (t, e, i) { return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10); }, smoothstep: function (t, e, i) { return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t); } });
    class Di {
        constructor(t = 0, e = 0) { Di.prototype.isVector2 = !0, this.x = t, this.y = e; }
        get width() { return this.x; }
        set width(t) { this.x = t; }
        get height() { return this.y; }
        set height(t) { this.y = t; }
        set(t, e) { return this.x = t, this.y = e, this; }
        setScalar(t) { return this.x = t, this.y = t, this; }
        setX(t) { return this.x = t, this; }
        setY(t) { return this.y = t, this; }
        setComponent(t, e) { switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default: throw new Error("index is out of range: " + t);
        } return this; }
        getComponent(t) { switch (t) {
            case 0: return this.x;
            case 1: return this.y;
            default: throw new Error("index is out of range: " + t);
        } }
        clone() { return new this.constructor(this.x, this.y); }
        copy(t) { return this.x = t.x, this.y = t.y, this; }
        add(t) { return this.x += t.x, this.y += t.y, this; }
        addScalar(t) { return this.x += t, this.y += t, this; }
        addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this; }
        addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this; }
        sub(t) { return this.x -= t.x, this.y -= t.y, this; }
        subScalar(t) { return this.x -= t, this.y -= t, this; }
        subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this; }
        multiply(t) { return this.x *= t.x, this.y *= t.y, this; }
        multiplyScalar(t) { return this.x *= t, this.y *= t, this; }
        divide(t) { return this.x /= t.x, this.y /= t.y, this; }
        divideScalar(t) { return this.multiplyScalar(1 / t); }
        applyMatrix3(t) { const e = this.x, i = this.y, n = t.elements; return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this; }
        min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this; }
        max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this; }
        clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this; }
        clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this; }
        clampLength(t, e) { const i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))); }
        floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this; }
        ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this; }
        round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this; }
        roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this; }
        negate() { return this.x = -this.x, this.y = -this.y, this; }
        dot(t) { return this.x * t.x + this.y * t.y; }
        cross(t) { return this.x * t.y - this.y * t.x; }
        lengthSq() { return this.x * this.x + this.y * this.y; }
        length() { return Math.sqrt(this.x * this.x + this.y * this.y); }
        manhattanLength() { return Math.abs(this.x) + Math.abs(this.y); }
        normalize() { return this.divideScalar(this.length() || 1); }
        angle() { return Math.atan2(-this.y, -this.x) + Math.PI; }
        distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)); }
        distanceToSquared(t) { const e = this.x - t.x, i = this.y - t.y; return e * e + i * i; }
        manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y); }
        setLength(t) { return this.normalize().multiplyScalar(t); }
        lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this; }
        lerpVectors(t, e, i) { return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this; }
        equals(t) { return t.x === this.x && t.y === this.y; }
        fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this; }
        toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t; }
        fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this; }
        rotateAround(t, e) { const i = Math.cos(e), n = Math.sin(e), r = this.x - t.x, s = this.y - t.y; return this.x = r * i - s * n + t.x, this.y = r * n + s * i + t.y, this; }
        random() { return this.x = Math.random(), this.y = Math.random(), this; }
        *[Symbol.iterator]() { yield this.x, yield this.y; }
    }
    class Ii {
        constructor() { Ii.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]; }
        set(t, e, i, n, r, s, a, o, l) { const c = this.elements; return c[0] = t, c[1] = n, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = i, c[7] = s, c[8] = l, this; }
        identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this; }
        copy(t) { const e = this.elements, i = t.elements; return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this; }
        extractBasis(t, e, i) { return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this; }
        setFromMatrix4(t) { const e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this; }
        multiply(t) { return this.multiplyMatrices(this, t); }
        premultiply(t) { return this.multiplyMatrices(t, this); }
        multiplyMatrices(t, e) { const i = t.elements, n = e.elements, r = this.elements, s = i[0], a = i[3], o = i[6], l = i[1], c = i[4], h = i[7], u = i[2], d = i[5], p = i[8], f = n[0], m = n[3], g = n[6], v = n[1], x = n[4], _ = n[7], y = n[2], b = n[5], M = n[8]; return r[0] = s * f + a * v + o * y, r[3] = s * m + a * x + o * b, r[6] = s * g + a * _ + o * M, r[1] = l * f + c * v + h * y, r[4] = l * m + c * x + h * b, r[7] = l * g + c * _ + h * M, r[2] = u * f + d * v + p * y, r[5] = u * m + d * x + p * b, r[8] = u * g + d * _ + p * M, this; }
        multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this; }
        determinant() { const t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8]; return e * s * c - e * a * l - i * r * c + i * a * o + n * r * l - n * s * o; }
        invert() { const t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + i * u + n * d; if (0 === p)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const f = 1 / p; return t[0] = h * f, t[1] = (n * l - c * i) * f, t[2] = (a * i - n * s) * f, t[3] = u * f, t[4] = (c * e - n * o) * f, t[5] = (n * r - a * e) * f, t[6] = d * f, t[7] = (i * o - l * e) * f, t[8] = (s * e - i * r) * f, this; }
        transpose() { let t; const e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this; }
        getNormalMatrix(t) { return this.setFromMatrix4(t).invert().transpose(); }
        transposeIntoArray(t) { const e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this; }
        setUvTransform(t, e, i, n, r, s, a) { const o = Math.cos(r), l = Math.sin(r); return this.set(i * o, i * l, -i * (o * s + l * a) + s + t, -n * l, n * o, -n * (-l * s + o * a) + a + e, 0, 0, 1), this; }
        scale(t, e) { return this.premultiply(Oi.makeScale(t, e)), this; }
        rotate(t) { return this.premultiply(Oi.makeRotation(-t)), this; }
        translate(t, e) { return this.premultiply(Oi.makeTranslation(t, e)), this; }
        makeTranslation(t, e) { return this.set(1, 0, t, 0, 1, e, 0, 0, 1), this; }
        makeRotation(t) { const e = Math.cos(t), i = Math.sin(t); return this.set(e, -i, 0, i, e, 0, 0, 0, 1), this; }
        makeScale(t, e) { return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this; }
        equals(t) { const e = this.elements, i = t.elements; for (let t = 0; t < 9; t++)
            if (e[t] !== i[t])
                return !1; return !0; }
        fromArray(t, e = 0) { for (let i = 0; i < 9; i++)
            this.elements[i] = t[i + e]; return this; }
        toArray(t = [], e = 0) { const i = this.elements; return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t; }
        clone() { return (new this.constructor).fromArray(this.elements); }
    }
    const Oi = new Ii;
    function zi(t) { for (let e = t.length - 1; e >= 0; --e)
        if (t[e] >= 65535)
            return !0; return !1; }
    const Ni = { Int8Array: Int8Array, Uint8Array: Uint8Array, Uint8ClampedArray: Uint8ClampedArray, Int16Array: Int16Array, Uint16Array: Uint16Array, Int32Array: Int32Array, Uint32Array: Uint32Array, Float32Array: Float32Array, Float64Array: Float64Array };
    function Ui(t, e) { return new Ni[t](e); }
    function ki(t) { return document.createElementNS("http://www.w3.org/1999/xhtml", t); }
    function Bi(t) { return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4); }
    function Fi(t) { return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055; }
    const Gi = { [Ge]: { [Ve]: Bi }, [Ve]: { [Ge]: Fi } }, Vi = { legacyMode: !0, get workingColorSpace() { return Ve; }, set workingColorSpace(t) { console.warn("THREE.ColorManagement: .workingColorSpace is readonly."); }, convert: function (t, e, i) { if (this.legacyMode || e === i || !e || !i)
            return t; if (Gi[e] && void 0 !== Gi[e][i]) {
            const n = Gi[e][i];
            return t.r = n(t.r), t.g = n(t.g), t.b = n(t.b), t;
        } throw new Error("Unsupported color space conversion."); }, fromWorkingColorSpace: function (t, e) { return this.convert(t, this.workingColorSpace, e); }, toWorkingColorSpace: function (t, e) { return this.convert(t, e, this.workingColorSpace); } }, Hi = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Wi = { r: 0, g: 0, b: 0 }, ji = { h: 0, s: 0, l: 0 }, qi = { h: 0, s: 0, l: 0 };
    function Xi(t, e, i) { return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t; }
    function Yi(t, e) { return e.r = t.r, e.g = t.g, e.b = t.b, e; }
    class Zi {
        constructor(t, e, i) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i); }
        set(t) { return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this; }
        setScalar(t) { return this.r = t, this.g = t, this.b = t, this; }
        setHex(t, e = Ge) { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, Vi.toWorkingColorSpace(this, e), this; }
        setRGB(t, e, i, n = Vi.workingColorSpace) { return this.r = t, this.g = e, this.b = i, Vi.toWorkingColorSpace(this, n), this; }
        setHSL(t, e, i, n = Vi.workingColorSpace) { if (t = Si(t, 1), e = wi(e, 0, 1), i = wi(i, 0, 1), 0 === e)
            this.r = this.g = this.b = i;
        else {
            const n = i <= .5 ? i * (1 + e) : i + e - i * e, r = 2 * i - n;
            this.r = Xi(r, n, t + 1 / 3), this.g = Xi(r, n, t), this.b = Xi(r, n, t - 1 / 3);
        } return Vi.toWorkingColorSpace(this, n), this; }
        setStyle(t, e = Ge) { function i(e) { void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored."); } let n; if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            let t;
            const r = n[1], s = n[2];
            switch (r) {
                case "rgb":
                case "rgba":
                    if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
                        return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, Vi.toWorkingColorSpace(this, e), i(t[4]), this;
                    if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
                        return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, Vi.toWorkingColorSpace(this, e), i(t[4]), this;
                    break;
                case "hsl":
                case "hsla": if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                    const n = parseFloat(t[1]) / 360, r = parseFloat(t[2]) / 100, s = parseFloat(t[3]) / 100;
                    return i(t[4]), this.setHSL(n, r, s, e);
                }
            }
        }
        else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const t = n[1], i = t.length;
            if (3 === i)
                return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, Vi.toWorkingColorSpace(this, e), this;
            if (6 === i)
                return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, Vi.toWorkingColorSpace(this, e), this;
        } return t && t.length > 0 ? this.setColorName(t, e) : this; }
        setColorName(t, e = Ge) { const i = Hi[t.toLowerCase()]; return void 0 !== i ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this; }
        clone() { return new this.constructor(this.r, this.g, this.b); }
        copy(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this; }
        copySRGBToLinear(t) { return this.r = Bi(t.r), this.g = Bi(t.g), this.b = Bi(t.b), this; }
        copyLinearToSRGB(t) { return this.r = Fi(t.r), this.g = Fi(t.g), this.b = Fi(t.b), this; }
        convertSRGBToLinear() { return this.copySRGBToLinear(this), this; }
        convertLinearToSRGB() { return this.copyLinearToSRGB(this), this; }
        getHex(t = Ge) { return Vi.fromWorkingColorSpace(Yi(this, Wi), t), wi(255 * Wi.r, 0, 255) << 16 ^ wi(255 * Wi.g, 0, 255) << 8 ^ wi(255 * Wi.b, 0, 255) << 0; }
        getHexString(t = Ge) { return ("000000" + this.getHex(t).toString(16)).slice(-6); }
        getHSL(t, e = Vi.workingColorSpace) { Vi.fromWorkingColorSpace(Yi(this, Wi), e); const i = Wi.r, n = Wi.g, r = Wi.b, s = Math.max(i, n, r), a = Math.min(i, n, r); let o, l; const c = (a + s) / 2; if (a === s)
            o = 0, l = 0;
        else {
            const t = s - a;
            switch (l = c <= .5 ? t / (s + a) : t / (2 - s - a), s) {
                case i:
                    o = (n - r) / t + (n < r ? 6 : 0);
                    break;
                case n:
                    o = (r - i) / t + 2;
                    break;
                case r: o = (i - n) / t + 4;
            }
            o /= 6;
        } return t.h = o, t.s = l, t.l = c, t; }
        getRGB(t, e = Vi.workingColorSpace) { return Vi.fromWorkingColorSpace(Yi(this, Wi), e), t.r = Wi.r, t.g = Wi.g, t.b = Wi.b, t; }
        getStyle(t = Ge) { return Vi.fromWorkingColorSpace(Yi(this, Wi), t), t !== Ge ? `color(${t} ${Wi.r} ${Wi.g} ${Wi.b})` : `rgb(${255 * Wi.r | 0},${255 * Wi.g | 0},${255 * Wi.b | 0})`; }
        offsetHSL(t, e, i) { return this.getHSL(ji), ji.h += t, ji.s += e, ji.l += i, this.setHSL(ji.h, ji.s, ji.l), this; }
        add(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this; }
        addColors(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this; }
        addScalar(t) { return this.r += t, this.g += t, this.b += t, this; }
        sub(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this; }
        multiply(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this; }
        multiplyScalar(t) { return this.r *= t, this.g *= t, this.b *= t, this; }
        lerp(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this; }
        lerpColors(t, e, i) { return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this; }
        lerpHSL(t, e) { this.getHSL(ji), t.getHSL(qi); const i = Ti(ji.h, qi.h, e), n = Ti(ji.s, qi.s, e), r = Ti(ji.l, qi.l, e); return this.setHSL(i, n, r), this; }
        equals(t) { return t.r === this.r && t.g === this.g && t.b === this.b; }
        fromArray(t, e = 0) { return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this; }
        toArray(t = [], e = 0) { return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t; }
        fromBufferAttribute(t, e) { return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this; }
        toJSON() { return this.getHex(); }
        *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b; }
    }
    let Ji;
    Zi.NAMES = Hi;
    class Ki {
        static getDataURL(t) { if (/^data:/i.test(t.src))
            return t.src; if ("undefined" == typeof HTMLCanvasElement)
            return t.src; let e; if (t instanceof HTMLCanvasElement)
            e = t;
        else {
            void 0 === Ji && (Ji = ki("canvas")), Ji.width = t.width, Ji.height = t.height;
            const i = Ji.getContext("2d");
            t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = Ji;
        } return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png"); }
        static sRGBToLinear(t) { if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
            const e = ki("canvas");
            e.width = t.width, e.height = t.height;
            const i = e.getContext("2d");
            i.drawImage(t, 0, 0, t.width, t.height);
            const n = i.getImageData(0, 0, t.width, t.height), r = n.data;
            for (let t = 0; t < r.length; t++)
                r[t] = 255 * Bi(r[t] / 255);
            return i.putImageData(n, 0, 0), e;
        } if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++)
                e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * Bi(e[t] / 255)) : e[t] = Bi(e[t]);
            return { data: e, width: t.width, height: t.height };
        } return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t; }
    }
    class $i {
        constructor(t = null) { this.isSource = !0, this.uuid = Mi(), this.data = t, this.version = 0; }
        set needsUpdate(t) { !0 === t && this.version++; }
        toJSON(t) { const e = void 0 === t || "string" == typeof t; if (!e && void 0 !== t.images[this.uuid])
            return t.images[this.uuid]; const i = { uuid: this.uuid, url: "" }, n = this.data; if (null !== n) {
            let t;
            if (Array.isArray(n)) {
                t = [];
                for (let e = 0, i = n.length; e < i; e++)
                    n[e].isDataTexture ? t.push(Qi(n[e].image)) : t.push(Qi(n[e]));
            }
            else
                t = Qi(n);
            i.url = t;
        } return e || (t.images[this.uuid] = i), i; }
    }
    function Qi(t) { return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Ki.getDataURL(t) : t.data ? { data: Array.from(t.data), width: t.width, height: t.height, type: t.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}); }
    let tn = 0;
    class en extends vi {
        constructor(t = en.DEFAULT_IMAGE, e = en.DEFAULT_MAPPING, i = ht, n = ht, r = vt, s = yt, a = Ot, o = Mt, l = en.DEFAULT_ANISOTROPY, c = Oe) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: tn++ }), this.uuid = Mi(), this.name = "", this.source = new $i(t), this.mipmaps = [], this.mapping = e, this.wrapS = i, this.wrapT = n, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Di(0, 0), this.repeat = new Di(1, 1), this.center = new Di(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ii, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1; }
        get image() { return this.source.data; }
        set image(t) { this.source.data = t; }
        updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y); }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this; }
        toJSON(t) { const e = void 0 === t || "string" == typeof t; if (!e && void 0 !== t.textures[this.uuid])
            return t.textures[this.uuid]; const i = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i; }
        dispose() { this.dispatchEvent({ type: "dispose" }); }
        transformUv(t) { if (this.mapping !== nt)
            return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
            switch (this.wrapS) {
                case ct:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case ht:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case ut: 1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
            } if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
                case ct:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case ht:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case ut: 1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
            } return this.flipY && (t.y = 1 - t.y), t; }
        set needsUpdate(t) { !0 === t && (this.version++, this.source.needsUpdate = !0); }
    }
    en.DEFAULT_IMAGE = null, en.DEFAULT_MAPPING = nt, en.DEFAULT_ANISOTROPY = 1;
    class nn {
        constructor(t = 0, e = 0, i = 0, n = 1) { nn.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = n; }
        get width() { return this.z; }
        set width(t) { this.z = t; }
        get height() { return this.w; }
        set height(t) { this.w = t; }
        set(t, e, i, n) { return this.x = t, this.y = e, this.z = i, this.w = n, this; }
        setScalar(t) { return this.x = t, this.y = t, this.z = t, this.w = t, this; }
        setX(t) { return this.x = t, this; }
        setY(t) { return this.y = t, this; }
        setZ(t) { return this.z = t, this; }
        setW(t) { return this.w = t, this; }
        setComponent(t, e) { switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default: throw new Error("index is out of range: " + t);
        } return this; }
        getComponent(t) { switch (t) {
            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            case 3: return this.w;
            default: throw new Error("index is out of range: " + t);
        } }
        clone() { return new this.constructor(this.x, this.y, this.z, this.w); }
        copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this; }
        add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this; }
        addScalar(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this; }
        addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this; }
        addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this; }
        sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this; }
        subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this; }
        subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this; }
        multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this; }
        multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this; }
        applyMatrix4(t) { const e = this.x, i = this.y, n = this.z, r = this.w, s = t.elements; return this.x = s[0] * e + s[4] * i + s[8] * n + s[12] * r, this.y = s[1] * e + s[5] * i + s[9] * n + s[13] * r, this.z = s[2] * e + s[6] * i + s[10] * n + s[14] * r, this.w = s[3] * e + s[7] * i + s[11] * n + s[15] * r, this; }
        divideScalar(t) { return this.multiplyScalar(1 / t); }
        setAxisAngleFromQuaternion(t) { this.w = 2 * Math.acos(t.w); const e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this; }
        setAxisAngleFromRotationMatrix(t) { let e, i, n, r; const s = .01, a = .1, o = t.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], f = o[2], m = o[6], g = o[10]; if (Math.abs(c - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
            if (Math.abs(c + u) < a && Math.abs(h + f) < a && Math.abs(p + m) < a && Math.abs(l + d + g - 3) < a)
                return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, x = (c + u) / 4, _ = (h + f) / 4, y = (p + m) / 4;
            return t > o && t > v ? t < s ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(t), n = x / i, r = _ / i) : o > v ? o < s ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(o), i = x / n, r = y / n) : v < s ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(v), i = _ / r, n = y / r), this.set(i, n, r, e), this;
        } let v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)); return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this; }
        min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this; }
        max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this; }
        clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this; }
        clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this; }
        clampLength(t, e) { const i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))); }
        floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this; }
        ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this; }
        round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this; }
        roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this; }
        negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this; }
        dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w; }
        lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w; }
        length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); }
        manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w); }
        normalize() { return this.divideScalar(this.length() || 1); }
        setLength(t) { return this.normalize().multiplyScalar(t); }
        lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this; }
        lerpVectors(t, e, i) { return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this; }
        equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w; }
        fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this; }
        toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t; }
        fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this; }
        random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this; }
        *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w; }
    }
    class rn extends vi {
        constructor(t = 1, e = 1, i = {}) { super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new nn(0, 0, t, e), this.scissorTest = !1, this.viewport = new nn(0, 0, t, e); const n = { width: t, height: e, depth: 1 }; this.texture = new en(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : vt, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null, this.samples = void 0 !== i.samples ? i.samples : 0; }
        setSize(t, e, i = 1) { this.width === t && this.height === e && this.depth === i || (this.width = t, this.height = e, this.depth = i, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e); }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0; const e = Object.assign({}, t.texture.image); return this.texture.source = new $i(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this; }
        dispose() { this.dispatchEvent({ type: "dispose" }); }
    }
    class sn extends en {
        constructor(t = null, e = 1, i = 1, n = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: i, depth: n }, this.magFilter = dt, this.minFilter = dt, this.wrapR = ht, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1; }
    }
    class an extends rn {
        constructor(t = 1, e = 1, i = 1) { super(t, e), this.isWebGLArrayRenderTarget = !0, this.depth = i, this.texture = new sn(null, t, e, i), this.texture.isRenderTargetTexture = !0; }
    }
    class on extends en {
        constructor(t = null, e = 1, i = 1, n = 1) { super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: i, depth: n }, this.magFilter = dt, this.minFilter = dt, this.wrapR = ht, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1; }
    }
    class ln extends rn {
        constructor(t = 1, e = 1, i = 1) { super(t, e), this.isWebGL3DRenderTarget = !0, this.depth = i, this.texture = new on(null, t, e, i), this.texture.isRenderTargetTexture = !0; }
    }
    class cn extends rn {
        constructor(t = 1, e = 1, i = 1, n = {}) { super(t, e, n), this.isWebGLMultipleRenderTargets = !0; const r = this.texture; this.texture = []; for (let t = 0; t < i; t++)
            this.texture[t] = r.clone(), this.texture[t].isRenderTargetTexture = !0; }
        setSize(t, e, i = 1) { if (this.width !== t || this.height !== e || this.depth !== i) {
            this.width = t, this.height = e, this.depth = i;
            for (let n = 0, r = this.texture.length; n < r; n++)
                this.texture[n].image.width = t, this.texture[n].image.height = e, this.texture[n].image.depth = i;
            this.dispose();
        } return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this; }
        copy(t) { this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.texture.length = 0; for (let e = 0, i = t.texture.length; e < i; e++)
            this.texture[e] = t.texture[e].clone(), this.texture[e].isRenderTargetTexture = !0; return this; }
    }
    class hn {
        constructor(t = 0, e = 0, i = 0, n = 1) { this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = n; }
        static slerpFlat(t, e, i, n, r, s, a) { let o = i[n + 0], l = i[n + 1], c = i[n + 2], h = i[n + 3]; const u = r[s + 0], d = r[s + 1], p = r[s + 2], f = r[s + 3]; if (0 === a)
            return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h); if (1 === a)
            return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = f); if (h !== f || o !== u || l !== d || c !== p) {
            let t = 1 - a;
            const e = o * u + l * d + c * p + h * f, i = e >= 0 ? 1 : -1, n = 1 - e * e;
            if (n > Number.EPSILON) {
                const r = Math.sqrt(n), s = Math.atan2(r, e * i);
                t = Math.sin(t * s) / r, a = Math.sin(a * s) / r;
            }
            const r = a * i;
            if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + f * r, t === 1 - a) {
                const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                o *= t, l *= t, c *= t, h *= t;
            }
        } t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h; }
        static multiplyQuaternionsFlat(t, e, i, n, r, s) { const a = i[n], o = i[n + 1], l = i[n + 2], c = i[n + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3]; return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t; }
        get x() { return this._x; }
        set x(t) { this._x = t, this._onChangeCallback(); }
        get y() { return this._y; }
        set y(t) { this._y = t, this._onChangeCallback(); }
        get z() { return this._z; }
        set z(t) { this._z = t, this._onChangeCallback(); }
        get w() { return this._w; }
        set w(t) { this._w = t, this._onChangeCallback(); }
        set(t, e, i, n) { return this._x = t, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this; }
        clone() { return new this.constructor(this._x, this._y, this._z, this._w); }
        copy(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this; }
        setFromEuler(t, e) { const i = t._x, n = t._y, r = t._z, s = t._order, a = Math.cos, o = Math.sin, l = a(i / 2), c = a(n / 2), h = a(r / 2), u = o(i / 2), d = o(n / 2), p = o(r / 2); switch (s) {
            case "XYZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "YXZ":
                this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "ZXY":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "ZYX":
                this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                break;
            case "YZX":
                this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                break;
            case "XZY":
                this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                break;
            default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
        } return !1 !== e && this._onChangeCallback(), this; }
        setFromAxisAngle(t, e) { const i = e / 2, n = Math.sin(i); return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this._onChangeCallback(), this; }
        setFromRotationMatrix(t) { const e = t.elements, i = e[0], n = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = i + a + h; if (u > 0) {
            const t = .5 / Math.sqrt(u + 1);
            this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (s - n) * t;
        }
        else if (i > a && i > h) {
            const t = 2 * Math.sqrt(1 + i - a - h);
            this._w = (c - o) / t, this._x = .25 * t, this._y = (n + s) / t, this._z = (r + l) / t;
        }
        else if (a > h) {
            const t = 2 * Math.sqrt(1 + a - i - h);
            this._w = (r - l) / t, this._x = (n + s) / t, this._y = .25 * t, this._z = (o + c) / t;
        }
        else {
            const t = 2 * Math.sqrt(1 + h - i - a);
            this._w = (s - n) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t;
        } return this._onChangeCallback(), this; }
        setFromUnitVectors(t, e) { let i = t.dot(e) + 1; return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize(); }
        angleTo(t) { return 2 * Math.acos(Math.abs(wi(this.dot(t), -1, 1))); }
        rotateTowards(t, e) { const i = this.angleTo(t); if (0 === i)
            return this; const n = Math.min(1, e / i); return this.slerp(t, n), this; }
        identity() { return this.set(0, 0, 0, 1); }
        invert() { return this.conjugate(); }
        conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this; }
        dot(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w; }
        lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; }
        length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); }
        normalize() { let t = this.length(); return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this; }
        multiply(t) { return this.multiplyQuaternions(this, t); }
        premultiply(t) { return this.multiplyQuaternions(t, this); }
        multiplyQuaternions(t, e) { const i = t._x, n = t._y, r = t._z, s = t._w, a = e._x, o = e._y, l = e._z, c = e._w; return this._x = i * c + s * a + n * l - r * o, this._y = n * c + s * o + r * a - i * l, this._z = r * c + s * l + i * o - n * a, this._w = s * c - i * a - n * o - r * l, this._onChangeCallback(), this; }
        slerp(t, e) { if (0 === e)
            return this; if (1 === e)
            return this.copy(t); const i = this._x, n = this._y, r = this._z, s = this._w; let a = s * t._w + i * t._x + n * t._y + r * t._z; if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1)
            return this._w = s, this._x = i, this._y = n, this._z = r, this; const o = 1 - a * a; if (o <= Number.EPSILON) {
            const t = 1 - e;
            return this._w = t * s + e * this._w, this._x = t * i + e * this._x, this._y = t * n + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
        } const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l; return this._w = s * h + this._w * u, this._x = i * h + this._x * u, this._y = n * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this; }
        slerpQuaternions(t, e, i) { return this.copy(t).slerp(e, i); }
        random() { const t = Math.random(), e = Math.sqrt(1 - t), i = Math.sqrt(t), n = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random(); return this.set(e * Math.cos(n), i * Math.sin(r), i * Math.cos(r), e * Math.sin(n)); }
        equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w; }
        fromArray(t, e = 0) { return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this; }
        toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t; }
        fromBufferAttribute(t, e) { return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this; }
        _onChange(t) { return this._onChangeCallback = t, this; }
        _onChangeCallback() { }
        *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w; }
    }
    class un {
        constructor(t = 0, e = 0, i = 0) { un.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = i; }
        set(t, e, i) { return void 0 === i && (i = this.z), this.x = t, this.y = e, this.z = i, this; }
        setScalar(t) { return this.x = t, this.y = t, this.z = t, this; }
        setX(t) { return this.x = t, this; }
        setY(t) { return this.y = t, this; }
        setZ(t) { return this.z = t, this; }
        setComponent(t, e) { switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default: throw new Error("index is out of range: " + t);
        } return this; }
        getComponent(t) { switch (t) {
            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            default: throw new Error("index is out of range: " + t);
        } }
        clone() { return new this.constructor(this.x, this.y, this.z); }
        copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this; }
        add(t) { return this.x += t.x, this.y += t.y, this.z += t.z, this; }
        addScalar(t) { return this.x += t, this.y += t, this.z += t, this; }
        addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this; }
        addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this; }
        sub(t) { return this.x -= t.x, this.y -= t.y, this.z -= t.z, this; }
        subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this; }
        subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this; }
        multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this; }
        multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this; }
        multiplyVectors(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this; }
        applyEuler(t) { return this.applyQuaternion(pn.setFromEuler(t)); }
        applyAxisAngle(t, e) { return this.applyQuaternion(pn.setFromAxisAngle(t, e)); }
        applyMatrix3(t) { const e = this.x, i = this.y, n = this.z, r = t.elements; return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this; }
        applyNormalMatrix(t) { return this.applyMatrix3(t).normalize(); }
        applyMatrix4(t) { const e = this.x, i = this.y, n = this.z, r = t.elements, s = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]); return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * s, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * s, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * s, this; }
        applyQuaternion(t) { const e = this.x, i = this.y, n = this.z, r = t.x, s = t.y, a = t.z, o = t.w, l = o * e + s * n - a * i, c = o * i + a * e - r * n, h = o * n + r * i - s * e, u = -r * e - s * i - a * n; return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this; }
        project(t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix); }
        unproject(t) { return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld); }
        transformDirection(t) { const e = this.x, i = this.y, n = this.z, r = t.elements; return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize(); }
        divide(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this; }
        divideScalar(t) { return this.multiplyScalar(1 / t); }
        min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this; }
        max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this; }
        clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this; }
        clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this; }
        clampLength(t, e) { const i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i))); }
        floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this; }
        ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this; }
        round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this; }
        roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this; }
        negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this; }
        dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z; }
        lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z; }
        length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); }
        manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z); }
        normalize() { return this.divideScalar(this.length() || 1); }
        setLength(t) { return this.normalize().multiplyScalar(t); }
        lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this; }
        lerpVectors(t, e, i) { return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this; }
        cross(t) { return this.crossVectors(this, t); }
        crossVectors(t, e) { const i = t.x, n = t.y, r = t.z, s = e.x, a = e.y, o = e.z; return this.x = n * o - r * a, this.y = r * s - i * o, this.z = i * a - n * s, this; }
        projectOnVector(t) { const e = t.lengthSq(); if (0 === e)
            return this.set(0, 0, 0); const i = t.dot(this) / e; return this.copy(t).multiplyScalar(i); }
        projectOnPlane(t) { return dn.copy(this).projectOnVector(t), this.sub(dn); }
        reflect(t) { return this.sub(dn.copy(t).multiplyScalar(2 * this.dot(t))); }
        angleTo(t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (0 === e)
            return Math.PI / 2; const i = this.dot(t) / e; return Math.acos(wi(i, -1, 1)); }
        distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)); }
        distanceToSquared(t) { const e = this.x - t.x, i = this.y - t.y, n = this.z - t.z; return e * e + i * i + n * n; }
        manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z); }
        setFromSpherical(t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta); }
        setFromSphericalCoords(t, e, i) { const n = Math.sin(e) * t; return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this; }
        setFromCylindrical(t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y); }
        setFromCylindricalCoords(t, e, i) { return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this; }
        setFromMatrixPosition(t) { const e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this; }
        setFromMatrixScale(t) { const e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), n = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = i, this.z = n, this; }
        setFromMatrixColumn(t, e) { return this.fromArray(t.elements, 4 * e); }
        setFromMatrix3Column(t, e) { return this.fromArray(t.elements, 3 * e); }
        setFromEuler(t) { return this.x = t._x, this.y = t._y, this.z = t._z, this; }
        equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z; }
        fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this; }
        toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t; }
        fromBufferAttribute(t, e) { return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this; }
        random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this; }
        randomDirection() { const t = 2 * (Math.random() - .5), e = Math.random() * Math.PI * 2, i = Math.sqrt(1 - t ** 2); return this.x = i * Math.cos(e), this.y = i * Math.sin(e), this.z = t, this; }
        *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z; }
    }
    const dn = new un, pn = new hn;
    class fn {
        constructor(t = new un(1 / 0, 1 / 0, 1 / 0), e = new un(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = t, this.max = e; }
        set(t, e) { return this.min.copy(t), this.max.copy(e), this; }
        setFromArray(t) { let e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0; for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o], c = t[o + 1], h = t[o + 2];
            l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
        } return this.min.set(e, i, n), this.max.set(r, s, a), this; }
        setFromBufferAttribute(t) { let e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0; for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o), c = t.getY(o), h = t.getZ(o);
            l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
        } return this.min.set(e, i, n), this.max.set(r, s, a), this; }
        setFromPoints(t) { this.makeEmpty(); for (let e = 0, i = t.length; e < i; e++)
            this.expandByPoint(t[e]); return this; }
        setFromCenterAndSize(t, e) { const i = gn.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(i), this.max.copy(t).add(i), this; }
        setFromObject(t, e = !1) { return this.makeEmpty(), this.expandByObject(t, e); }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { return this.min.copy(t.min), this.max.copy(t.max), this; }
        makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this; }
        isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z; }
        getCenter(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5); }
        getSize(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min); }
        expandByPoint(t) { return this.min.min(t), this.max.max(t), this; }
        expandByVector(t) { return this.min.sub(t), this.max.add(t), this; }
        expandByScalar(t) { return this.min.addScalar(-t), this.max.addScalar(t), this; }
        expandByObject(t, e = !1) { t.updateWorldMatrix(!1, !1); const i = t.geometry; if (void 0 !== i)
            if (e && null != i.attributes && void 0 !== i.attributes.position) {
                const e = i.attributes.position;
                for (let i = 0, n = e.count; i < n; i++)
                    gn.fromBufferAttribute(e, i).applyMatrix4(t.matrixWorld), this.expandByPoint(gn);
            }
            else
                null === i.boundingBox && i.computeBoundingBox(), vn.copy(i.boundingBox), vn.applyMatrix4(t.matrixWorld), this.union(vn); const n = t.children; for (let t = 0, i = n.length; t < i; t++)
            this.expandByObject(n[t], e); return this; }
        containsPoint(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z); }
        containsBox(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z; }
        getParameter(t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)); }
        intersectsBox(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z); }
        intersectsSphere(t) { return this.clampPoint(t.center, gn), gn.distanceToSquared(t.center) <= t.radius * t.radius; }
        intersectsPlane(t) { let e, i; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant; }
        intersectsTriangle(t) { if (this.isEmpty())
            return !1; this.getCenter(Sn), Tn.subVectors(this.max, Sn), xn.subVectors(t.a, Sn), _n.subVectors(t.b, Sn), yn.subVectors(t.c, Sn), bn.subVectors(_n, xn), Mn.subVectors(yn, _n), wn.subVectors(xn, yn); let e = [0, -bn.z, bn.y, 0, -Mn.z, Mn.y, 0, -wn.z, wn.y, bn.z, 0, -bn.x, Mn.z, 0, -Mn.x, wn.z, 0, -wn.x, -bn.y, bn.x, 0, -Mn.y, Mn.x, 0, -wn.y, wn.x, 0]; return !!Cn(e, xn, _n, yn, Tn) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Cn(e, xn, _n, yn, Tn) && (En.crossVectors(bn, Mn), e = [En.x, En.y, En.z], Cn(e, xn, _n, yn, Tn))); }
        clampPoint(t, e) { return e.copy(t).clamp(this.min, this.max); }
        distanceToPoint(t) { return gn.copy(t).clamp(this.min, this.max).sub(t).length(); }
        getBoundingSphere(t) { return this.getCenter(t.center), t.radius = .5 * this.getSize(gn).length(), t; }
        intersect(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this; }
        union(t) { return this.min.min(t.min), this.max.max(t.max), this; }
        applyMatrix4(t) { return this.isEmpty() || (mn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), mn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), mn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), mn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), mn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), mn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), mn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), mn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(mn)), this; }
        translate(t) { return this.min.add(t), this.max.add(t), this; }
        equals(t) { return t.min.equals(this.min) && t.max.equals(this.max); }
    }
    const mn = [new un, new un, new un, new un, new un, new un, new un, new un], gn = new un, vn = new fn, xn = new un, _n = new un, yn = new un, bn = new un, Mn = new un, wn = new un, Sn = new un, Tn = new un, En = new un, An = new un;
    function Cn(t, e, i, n, r) { for (let s = 0, a = t.length - 3; s <= a; s += 3) {
        An.fromArray(t, s);
        const a = r.x * Math.abs(An.x) + r.y * Math.abs(An.y) + r.z * Math.abs(An.z), o = e.dot(An), l = i.dot(An), c = n.dot(An);
        if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a)
            return !1;
    } return !0; }
    const Ln = new fn, Pn = new un, Rn = new un;
    class Dn {
        constructor(t = new un, e = -1) { this.center = t, this.radius = e; }
        set(t, e) { return this.center.copy(t), this.radius = e, this; }
        setFromPoints(t, e) { const i = this.center; void 0 !== e ? i.copy(e) : Ln.setFromPoints(t).getCenter(i); let n = 0; for (let e = 0, r = t.length; e < r; e++)
            n = Math.max(n, i.distanceToSquared(t[e])); return this.radius = Math.sqrt(n), this; }
        copy(t) { return this.center.copy(t.center), this.radius = t.radius, this; }
        isEmpty() { return this.radius < 0; }
        makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this; }
        containsPoint(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius; }
        distanceToPoint(t) { return t.distanceTo(this.center) - this.radius; }
        intersectsSphere(t) { const e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e; }
        intersectsBox(t) { return t.intersectsSphere(this); }
        intersectsPlane(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius; }
        clampPoint(t, e) { const i = this.center.distanceToSquared(t); return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e; }
        getBoundingBox(t) { return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t); }
        applyMatrix4(t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this; }
        translate(t) { return this.center.add(t), this; }
        expandByPoint(t) { if (this.isEmpty())
            return this.center.copy(t), this.radius = 0, this; Pn.subVectors(t, this.center); const e = Pn.lengthSq(); if (e > this.radius * this.radius) {
            const t = Math.sqrt(e), i = .5 * (t - this.radius);
            this.center.addScaledVector(Pn, i / t), this.radius += i;
        } return this; }
        union(t) { return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? this.radius = Math.max(this.radius, t.radius) : (Rn.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Pn.copy(t.center).add(Rn)), this.expandByPoint(Pn.copy(t.center).sub(Rn))), this); }
        equals(t) { return t.center.equals(this.center) && t.radius === this.radius; }
        clone() { return (new this.constructor).copy(this); }
    }
    const In = new un, On = new un, zn = new un, Nn = new un, Un = new un, kn = new un, Bn = new un;
    class Fn {
        constructor(t = new un, e = new un(0, 0, -1)) { this.origin = t, this.direction = e; }
        set(t, e) { return this.origin.copy(t), this.direction.copy(e), this; }
        copy(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this; }
        at(t, e) { return e.copy(this.direction).multiplyScalar(t).add(this.origin); }
        lookAt(t) { return this.direction.copy(t).sub(this.origin).normalize(), this; }
        recast(t) { return this.origin.copy(this.at(t, In)), this; }
        closestPointToPoint(t, e) { e.subVectors(t, this.origin); const i = e.dot(this.direction); return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin); }
        distanceToPoint(t) { return Math.sqrt(this.distanceSqToPoint(t)); }
        distanceSqToPoint(t) { const e = In.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (In.copy(this.direction).multiplyScalar(e).add(this.origin), In.distanceToSquared(t)); }
        distanceSqToSegment(t, e, i, n) { On.copy(t).add(e).multiplyScalar(.5), zn.copy(e).sub(t).normalize(), Nn.copy(this.origin).sub(On); const r = .5 * t.distanceTo(e), s = -this.direction.dot(zn), a = Nn.dot(this.direction), o = -Nn.dot(zn), l = Nn.lengthSq(), c = Math.abs(1 - s * s); let h, u, d, p; if (c > 0)
            if (h = s * o - a, u = s * a - o, p = r * c, h >= 0)
                if (u >= -p)
                    if (u <= p) {
                        const t = 1 / c;
                        h *= t, u *= t, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
                    }
                    else
                        u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                else
                    u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            else
                u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
        else
            u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l; return i && i.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(zn).multiplyScalar(u).add(On), d; }
        intersectSphere(t, e) { In.subVectors(t.center, this.origin); const i = In.dot(this.direction), n = In.dot(In) - i * i, r = t.radius * t.radius; if (n > r)
            return null; const s = Math.sqrt(r - n), a = i - s, o = i + s; return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e); }
        intersectsSphere(t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius; }
        distanceToPlane(t) { const e = t.normal.dot(this.direction); if (0 === e)
            return 0 === t.distanceToPoint(this.origin) ? 0 : null; const i = -(this.origin.dot(t.normal) + t.constant) / e; return i >= 0 ? i : null; }
        intersectPlane(t, e) { const i = this.distanceToPlane(t); return null === i ? null : this.at(i, e); }
        intersectsPlane(t) { const e = t.distanceToPoint(this.origin); if (0 === e)
            return !0; return t.normal.dot(this.direction) * e < 0; }
        intersectBox(t, e) { let i, n, r, s, a, o; const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin; return l >= 0 ? (i = (t.min.x - u.x) * l, n = (t.max.x - u.x) * l) : (i = (t.max.x - u.x) * l, n = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), i > s || r > n ? null : ((r > i || isNaN(i)) && (i = r), (s < n || isNaN(n)) && (n = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), i > o || a > n ? null : ((a > i || i != i) && (i = a), (o < n || n != n) && (n = o), n < 0 ? null : this.at(i >= 0 ? i : n, e))); }
        intersectsBox(t) { return null !== this.intersectBox(t, In); }
        intersectTriangle(t, e, i, n, r) { Un.subVectors(e, t), kn.subVectors(i, t), Bn.crossVectors(Un, kn); let s, a = this.direction.dot(Bn); if (a > 0) {
            if (n)
                return null;
            s = 1;
        }
        else {
            if (!(a < 0))
                return null;
            s = -1, a = -a;
        } Nn.subVectors(this.origin, t); const o = s * this.direction.dot(kn.crossVectors(Nn, kn)); if (o < 0)
            return null; const l = s * this.direction.dot(Un.cross(Nn)); if (l < 0)
            return null; if (o + l > a)
            return null; const c = -s * Nn.dot(Bn); return c < 0 ? null : this.at(c / a, r); }
        applyMatrix4(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this; }
        equals(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction); }
        clone() { return (new this.constructor).copy(this); }
    }
    class Gn {
        constructor() { Gn.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; }
        set(t, e, i, n, r, s, a, o, l, c, h, u, d, p, f, m) { const g = this.elements; return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this; }
        identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; }
        clone() { return (new Gn).fromArray(this.elements); }
        copy(t) { const e = this.elements, i = t.elements; return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this; }
        copyPosition(t) { const e = this.elements, i = t.elements; return e[12] = i[12], e[13] = i[13], e[14] = i[14], this; }
        setFromMatrix3(t) { const e = t.elements; return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this; }
        extractBasis(t, e, i) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this; }
        makeBasis(t, e, i) { return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this; }
        extractRotation(t) { const e = this.elements, i = t.elements, n = 1 / Vn.setFromMatrixColumn(t, 0).length(), r = 1 / Vn.setFromMatrixColumn(t, 1).length(), s = 1 / Vn.setFromMatrixColumn(t, 2).length(); return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * s, e[9] = i[9] * s, e[10] = i[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this; }
        makeRotationFromEuler(t) { const e = this.elements, i = t.x, n = t.y, r = t.z, s = Math.cos(i), a = Math.sin(i), o = Math.cos(n), l = Math.sin(n), c = Math.cos(r), h = Math.sin(r); if ("XYZ" === t.order) {
            const t = s * c, i = s * h, n = a * c, r = a * h;
            e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = i + n * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = n + i * l, e[10] = s * o;
        }
        else if ("YXZ" === t.order) {
            const t = o * c, i = o * h, n = l * c, r = l * h;
            e[0] = t + r * a, e[4] = n * a - i, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = i * a - n, e[6] = r + t * a, e[10] = s * o;
        }
        else if ("ZXY" === t.order) {
            const t = o * c, i = o * h, n = l * c, r = l * h;
            e[0] = t - r * a, e[4] = -s * h, e[8] = n + i * a, e[1] = i + n * a, e[5] = s * c, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
        }
        else if ("ZYX" === t.order) {
            const t = s * c, i = s * h, n = a * c, r = a * h;
            e[0] = o * c, e[4] = n * l - i, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = i * l - n, e[2] = -l, e[6] = a * o, e[10] = s * o;
        }
        else if ("YZX" === t.order) {
            const t = s * o, i = s * l, n = a * o, r = a * l;
            e[0] = o * c, e[4] = r - t * h, e[8] = n * h + i, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = i * h + n, e[10] = t - r * h;
        }
        else if ("XZY" === t.order) {
            const t = s * o, i = s * l, n = a * o, r = a * l;
            e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = s * c, e[9] = i * h - n, e[2] = n * h - i, e[6] = a * c, e[10] = r * h + t;
        } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this; }
        makeRotationFromQuaternion(t) { return this.compose(Wn, t, jn); }
        lookAt(t, e, i) { const n = this.elements; return Yn.subVectors(t, e), 0 === Yn.lengthSq() && (Yn.z = 1), Yn.normalize(), qn.crossVectors(i, Yn), 0 === qn.lengthSq() && (1 === Math.abs(i.z) ? Yn.x += 1e-4 : Yn.z += 1e-4, Yn.normalize(), qn.crossVectors(i, Yn)), qn.normalize(), Xn.crossVectors(Yn, qn), n[0] = qn.x, n[4] = Xn.x, n[8] = Yn.x, n[1] = qn.y, n[5] = Xn.y, n[9] = Yn.y, n[2] = qn.z, n[6] = Xn.z, n[10] = Yn.z, this; }
        multiply(t) { return this.multiplyMatrices(this, t); }
        premultiply(t) { return this.multiplyMatrices(t, this); }
        multiplyMatrices(t, e) { const i = t.elements, n = e.elements, r = this.elements, s = i[0], a = i[4], o = i[8], l = i[12], c = i[1], h = i[5], u = i[9], d = i[13], p = i[2], f = i[6], m = i[10], g = i[14], v = i[3], x = i[7], _ = i[11], y = i[15], b = n[0], M = n[4], w = n[8], S = n[12], T = n[1], E = n[5], A = n[9], C = n[13], L = n[2], P = n[6], R = n[10], D = n[14], I = n[3], O = n[7], z = n[11], N = n[15]; return r[0] = s * b + a * T + o * L + l * I, r[4] = s * M + a * E + o * P + l * O, r[8] = s * w + a * A + o * R + l * z, r[12] = s * S + a * C + o * D + l * N, r[1] = c * b + h * T + u * L + d * I, r[5] = c * M + h * E + u * P + d * O, r[9] = c * w + h * A + u * R + d * z, r[13] = c * S + h * C + u * D + d * N, r[2] = p * b + f * T + m * L + g * I, r[6] = p * M + f * E + m * P + g * O, r[10] = p * w + f * A + m * R + g * z, r[14] = p * S + f * C + m * D + g * N, r[3] = v * b + x * T + _ * L + y * I, r[7] = v * M + x * E + _ * P + y * O, r[11] = v * w + x * A + _ * R + y * z, r[15] = v * S + x * C + _ * D + y * N, this; }
        multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this; }
        determinant() { const t = this.elements, e = t[0], i = t[4], n = t[8], r = t[12], s = t[1], a = t[5], o = t[9], l = t[13], c = t[2], h = t[6], u = t[10], d = t[14]; return t[3] * (+r * o * h - n * l * h - r * a * u + i * l * u + n * a * d - i * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - n * s * d + n * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + i * s * d + r * a * c - i * l * c) + t[15] * (-n * a * c - e * o * h + e * a * u + n * s * h - i * s * u + i * o * c); }
        transpose() { const t = this.elements; let e; return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this; }
        setPosition(t, e, i) { const n = this.elements; return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = i), this; }
        invert() { const t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = t[9], u = t[10], d = t[11], p = t[12], f = t[13], m = t[14], g = t[15], v = h * m * l - f * u * l + f * o * d - a * m * d - h * o * g + a * u * g, x = p * u * l - c * m * l - p * o * d + s * m * d + c * o * g - s * u * g, _ = c * f * l - p * h * l + p * a * d - s * f * d - c * a * g + s * h * g, y = p * h * o - c * f * o - p * a * u + s * f * u + c * a * m - s * h * m, b = e * v + i * x + n * _ + r * y; if (0 === b)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const M = 1 / b; return t[0] = v * M, t[1] = (f * u * r - h * m * r - f * n * d + i * m * d + h * n * g - i * u * g) * M, t[2] = (a * m * r - f * o * r + f * n * l - i * m * l - a * n * g + i * o * g) * M, t[3] = (h * o * r - a * u * r - h * n * l + i * u * l + a * n * d - i * o * d) * M, t[4] = x * M, t[5] = (c * m * r - p * u * r + p * n * d - e * m * d - c * n * g + e * u * g) * M, t[6] = (p * o * r - s * m * r - p * n * l + e * m * l + s * n * g - e * o * g) * M, t[7] = (s * u * r - c * o * r + c * n * l - e * u * l - s * n * d + e * o * d) * M, t[8] = _ * M, t[9] = (p * h * r - c * f * r - p * i * d + e * f * d + c * i * g - e * h * g) * M, t[10] = (s * f * r - p * a * r + p * i * l - e * f * l - s * i * g + e * a * g) * M, t[11] = (c * a * r - s * h * r - c * i * l + e * h * l + s * i * d - e * a * d) * M, t[12] = y * M, t[13] = (c * f * n - p * h * n + p * i * u - e * f * u - c * i * m + e * h * m) * M, t[14] = (p * a * n - s * f * n - p * i * o + e * f * o + s * i * m - e * a * m) * M, t[15] = (s * h * n - c * a * n + c * i * o - e * h * o - s * i * u + e * a * u) * M, this; }
        scale(t) { const e = this.elements, i = t.x, n = t.y, r = t.z; return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this; }
        getMaxScaleOnAxis() { const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, i, n)); }
        makeTranslation(t, e, i) { return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this; }
        makeRotationX(t) { const e = Math.cos(t), i = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this; }
        makeRotationY(t) { const e = Math.cos(t), i = Math.sin(t); return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this; }
        makeRotationZ(t) { const e = Math.cos(t), i = Math.sin(t); return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; }
        makeRotationAxis(t, e) { const i = Math.cos(e), n = Math.sin(e), r = 1 - i, s = t.x, a = t.y, o = t.z, l = r * s, c = r * a; return this.set(l * s + i, l * a - n * o, l * o + n * a, 0, l * a + n * o, c * a + i, c * o - n * s, 0, l * o - n * a, c * o + n * s, r * o * o + i, 0, 0, 0, 0, 1), this; }
        makeScale(t, e, i) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this; }
        makeShear(t, e, i, n, r, s) { return this.set(1, i, r, 0, t, 1, s, 0, e, n, 1, 0, 0, 0, 0, 1), this; }
        compose(t, e, i) { const n = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l, d = r * c, p = r * h, f = s * c, m = s * h, g = a * h, v = o * l, x = o * c, _ = o * h, y = i.x, b = i.y, M = i.z; return n[0] = (1 - (f + g)) * y, n[1] = (d + _) * y, n[2] = (p - x) * y, n[3] = 0, n[4] = (d - _) * b, n[5] = (1 - (u + g)) * b, n[6] = (m + v) * b, n[7] = 0, n[8] = (p + x) * M, n[9] = (m - v) * M, n[10] = (1 - (u + f)) * M, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this; }
        decompose(t, e, i) { const n = this.elements; let r = Vn.set(n[0], n[1], n[2]).length(); const s = Vn.set(n[4], n[5], n[6]).length(), a = Vn.set(n[8], n[9], n[10]).length(); this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], Hn.copy(this); const o = 1 / r, l = 1 / s, c = 1 / a; return Hn.elements[0] *= o, Hn.elements[1] *= o, Hn.elements[2] *= o, Hn.elements[4] *= l, Hn.elements[5] *= l, Hn.elements[6] *= l, Hn.elements[8] *= c, Hn.elements[9] *= c, Hn.elements[10] *= c, e.setFromRotationMatrix(Hn), i.x = r, i.y = s, i.z = a, this; }
        makePerspective(t, e, i, n, r, s) { const a = this.elements, o = 2 * r / (e - t), l = 2 * r / (i - n), c = (e + t) / (e - t), h = (i + n) / (i - n), u = -(s + r) / (s - r), d = -2 * s * r / (s - r); return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this; }
        makeOrthographic(t, e, i, n, r, s) { const a = this.elements, o = 1 / (e - t), l = 1 / (i - n), c = 1 / (s - r), h = (e + t) * o, u = (i + n) * l, d = (s + r) * c; return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this; }
        equals(t) { const e = this.elements, i = t.elements; for (let t = 0; t < 16; t++)
            if (e[t] !== i[t])
                return !1; return !0; }
        fromArray(t, e = 0) { for (let i = 0; i < 16; i++)
            this.elements[i] = t[i + e]; return this; }
        toArray(t = [], e = 0) { const i = this.elements; return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t; }
    }
    const Vn = new un, Hn = new Gn, Wn = new un(0, 0, 0), jn = new un(1, 1, 1), qn = new un, Xn = new un, Yn = new un, Zn = new Gn, Jn = new hn;
    class Kn {
        constructor(t = 0, e = 0, i = 0, n = Kn.DEFAULT_ORDER) { this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = n; }
        get x() { return this._x; }
        set x(t) { this._x = t, this._onChangeCallback(); }
        get y() { return this._y; }
        set y(t) { this._y = t, this._onChangeCallback(); }
        get z() { return this._z; }
        set z(t) { this._z = t, this._onChangeCallback(); }
        get order() { return this._order; }
        set order(t) { this._order = t, this._onChangeCallback(); }
        set(t, e, i, n = this._order) { return this._x = t, this._y = e, this._z = i, this._order = n, this._onChangeCallback(), this; }
        clone() { return new this.constructor(this._x, this._y, this._z, this._order); }
        copy(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this; }
        setFromRotationMatrix(t, e = this._order, i = !0) { const n = t.elements, r = n[0], s = n[4], a = n[8], o = n[1], l = n[5], c = n[9], h = n[2], u = n[6], d = n[10]; switch (e) {
            case "XYZ":
                this._y = Math.asin(wi(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-wi(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(wi(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                break;
            case "ZYX":
                this._y = Math.asin(-wi(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                break;
            case "YZX":
                this._z = Math.asin(wi(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                break;
            case "XZY":
                this._z = Math.asin(-wi(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                break;
            default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
        } return this._order = e, !0 === i && this._onChangeCallback(), this; }
        setFromQuaternion(t, e, i) { return Zn.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Zn, e, i); }
        setFromVector3(t, e = this._order) { return this.set(t.x, t.y, t.z, e); }
        reorder(t) { return Jn.setFromEuler(this), this.setFromQuaternion(Jn, t); }
        equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order; }
        fromArray(t) { return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this; }
        toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t; }
        _onChange(t) { return this._onChangeCallback = t, this; }
        _onChangeCallback() { }
        *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order; }
    }
    Kn.DEFAULT_ORDER = "XYZ";
    class $n {
        constructor() { this.mask = 1; }
        set(t) { this.mask = (1 << t | 0) >>> 0; }
        enable(t) { this.mask |= 1 << t | 0; }
        enableAll() { this.mask = -1; }
        toggle(t) { this.mask ^= 1 << t | 0; }
        disable(t) { this.mask &= ~(1 << t | 0); }
        disableAll() { this.mask = 0; }
        test(t) { return 0 != (this.mask & t.mask); }
        isEnabled(t) { return 0 != (this.mask & (1 << t | 0)); }
    }
    let Qn = 0;
    const tr = new un, er = new hn, ir = new Gn, nr = new un, rr = new un, sr = new un, ar = new hn, or = new un(1, 0, 0), lr = new un(0, 1, 0), cr = new un(0, 0, 1), hr = { type: "added" }, ur = { type: "removed" };
    class dr extends vi {
        constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Qn++ }), this.uuid = Mi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = dr.DEFAULT_UP.clone(); const t = new un, e = new Kn, i = new hn, n = new un(1, 1, 1); e._onChange((function () { i.setFromEuler(e, !1); })), i._onChange((function () { e.setFromQuaternion(i, void 0, !1); })), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: i }, scale: { configurable: !0, enumerable: !0, value: n }, modelViewMatrix: { value: new Gn }, normalMatrix: { value: new Ii } }), this.matrix = new Gn, this.matrixWorld = new Gn, this.matrixAutoUpdate = dr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new $n, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}; }
        onBeforeRender() { }
        onAfterRender() { }
        applyMatrix4(t) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale); }
        applyQuaternion(t) { return this.quaternion.premultiply(t), this; }
        setRotationFromAxisAngle(t, e) { this.quaternion.setFromAxisAngle(t, e); }
        setRotationFromEuler(t) { this.quaternion.setFromEuler(t, !0); }
        setRotationFromMatrix(t) { this.quaternion.setFromRotationMatrix(t); }
        setRotationFromQuaternion(t) { this.quaternion.copy(t); }
        rotateOnAxis(t, e) { return er.setFromAxisAngle(t, e), this.quaternion.multiply(er), this; }
        rotateOnWorldAxis(t, e) { return er.setFromAxisAngle(t, e), this.quaternion.premultiply(er), this; }
        rotateX(t) { return this.rotateOnAxis(or, t); }
        rotateY(t) { return this.rotateOnAxis(lr, t); }
        rotateZ(t) { return this.rotateOnAxis(cr, t); }
        translateOnAxis(t, e) { return tr.copy(t).applyQuaternion(this.quaternion), this.position.add(tr.multiplyScalar(e)), this; }
        translateX(t) { return this.translateOnAxis(or, t); }
        translateY(t) { return this.translateOnAxis(lr, t); }
        translateZ(t) { return this.translateOnAxis(cr, t); }
        localToWorld(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld); }
        worldToLocal(t) { return this.updateWorldMatrix(!0, !1), t.applyMatrix4(ir.copy(this.matrixWorld).invert()); }
        lookAt(t, e, i) { t.isVector3 ? nr.copy(t) : nr.set(t, e, i); const n = this.parent; this.updateWorldMatrix(!0, !1), rr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ir.lookAt(rr, nr, this.up) : ir.lookAt(nr, rr, this.up), this.quaternion.setFromRotationMatrix(ir), n && (ir.extractRotation(n.matrixWorld), er.setFromRotationMatrix(ir), this.quaternion.premultiply(er.invert())); }
        add(t) { if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this;
        } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(hr)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this); }
        remove(t) { if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.remove(arguments[t]);
            return this;
        } const e = this.children.indexOf(t); return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(ur)), this; }
        removeFromParent() { const t = this.parent; return null !== t && t.remove(this), this; }
        clear() { for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            e.parent = null, e.dispatchEvent(ur);
        } return this.children.length = 0, this; }
        attach(t) { return this.updateWorldMatrix(!0, !1), ir.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), ir.multiply(t.parent.matrixWorld)), t.applyMatrix4(ir), this.add(t), t.updateWorldMatrix(!1, !0), this; }
        getObjectById(t) { return this.getObjectByProperty("id", t); }
        getObjectByName(t) { return this.getObjectByProperty("name", t); }
        getObjectByProperty(t, e) { if (this[t] === e)
            return this; for (let i = 0, n = this.children.length; i < n; i++) {
            const n = this.children[i].getObjectByProperty(t, e);
            if (void 0 !== n)
                return n;
        } }
        getObjectsByProperty(t, e) { let i = []; this[t] === e && i.push(this); for (let n = 0, r = this.children.length; n < r; n++) {
            const r = this.children[n].getObjectsByProperty(t, e);
            r.length > 0 && (i = i.concat(r));
        } return i; }
        getWorldPosition(t) { return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld); }
        getWorldQuaternion(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rr, t, sr), t; }
        getWorldScale(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rr, ar, t), t; }
        getWorldDirection(t) { this.updateWorldMatrix(!0, !1); const e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize(); }
        raycast() { }
        traverse(t) { t(this); const e = this.children; for (let i = 0, n = e.length; i < n; i++)
            e[i].traverse(t); }
        traverseVisible(t) { if (!1 === this.visible)
            return; t(this); const e = this.children; for (let i = 0, n = e.length; i < n; i++)
            e[i].traverseVisible(t); }
        traverseAncestors(t) { const e = this.parent; null !== e && (t(e), e.traverseAncestors(t)); }
        updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0; }
        updateMatrixWorld(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0); const e = this.children; for (let i = 0, n = e.length; i < n; i++) {
            const n = e[i];
            !0 !== n.matrixWorldAutoUpdate && !0 !== t || n.updateMatrixWorld(t);
        } }
        updateWorldMatrix(t, e) { const i = this.parent; if (!0 === t && null !== i && !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
            const t = this.children;
            for (let e = 0, i = t.length; e < i; e++) {
                const i = t[e];
                !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!1, !0);
            }
        } }
        toJSON(t) { const e = void 0 === t || "string" == typeof t, i = {}; e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); const n = {}; function r(e, i) { return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid; } if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())), this.isScene)
            this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (n.environment = this.environment.toJSON(t).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            n.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
                const i = e.shapes;
                if (Array.isArray(i))
                    for (let e = 0, n = i.length; e < n; e++) {
                        const n = i[e];
                        r(t.shapes, n);
                    }
                else
                    r(t.shapes, i);
            }
        } if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), void 0 !== this.material)
            if (Array.isArray(this.material)) {
                const e = [];
                for (let i = 0, n = this.material.length; i < n; i++)
                    e.push(r(t.materials, this.material[i]));
                n.material = e;
            }
            else
                n.material = r(t.materials, this.material); if (this.children.length > 0) {
            n.children = [];
            for (let e = 0; e < this.children.length; e++)
                n.children.push(this.children[e].toJSON(t).object);
        } if (this.animations.length > 0) {
            n.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
                const i = this.animations[e];
                n.animations.push(r(t.animations, i));
            }
        } if (e) {
            const e = s(t.geometries), n = s(t.materials), r = s(t.textures), a = s(t.images), o = s(t.shapes), l = s(t.skeletons), c = s(t.animations), h = s(t.nodes);
            e.length > 0 && (i.geometries = e), n.length > 0 && (i.materials = n), r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a), o.length > 0 && (i.shapes = o), l.length > 0 && (i.skeletons = l), c.length > 0 && (i.animations = c), h.length > 0 && (i.nodes = h);
        } return i.object = n, i; function s(t) { const e = []; for (const i in t) {
            const n = t[i];
            delete n.metadata, e.push(n);
        } return e; } }
        clone(t) { return (new this.constructor).copy(this, t); }
        copy(t, e = !0) { if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
            for (let e = 0; e < t.children.length; e++) {
                const i = t.children[e];
                this.add(i.clone());
            } return this; }
    }
    dr.DEFAULT_UP = new un(0, 1, 0), dr.DEFAULT_MATRIX_AUTO_UPDATE = !0, dr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const pr = new un, fr = new un, mr = new un, gr = new un, vr = new un, xr = new un, _r = new un, yr = new un, br = new un, Mr = new un;
    class wr {
        constructor(t = new un, e = new un, i = new un) { this.a = t, this.b = e, this.c = i; }
        static getNormal(t, e, i, n) { n.subVectors(i, e), pr.subVectors(t, e), n.cross(pr); const r = n.lengthSq(); return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0); }
        static getBarycoord(t, e, i, n, r) { pr.subVectors(n, e), fr.subVectors(i, e), mr.subVectors(t, e); const s = pr.dot(pr), a = pr.dot(fr), o = pr.dot(mr), l = fr.dot(fr), c = fr.dot(mr), h = s * l - a * a; if (0 === h)
            return r.set(-2, -1, -1); const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u; return r.set(1 - d - p, p, d); }
        static containsPoint(t, e, i, n) { return this.getBarycoord(t, e, i, n, gr), gr.x >= 0 && gr.y >= 0 && gr.x + gr.y <= 1; }
        static getUV(t, e, i, n, r, s, a, o) { return this.getBarycoord(t, e, i, n, gr), o.set(0, 0), o.addScaledVector(r, gr.x), o.addScaledVector(s, gr.y), o.addScaledVector(a, gr.z), o; }
        static isFrontFacing(t, e, i, n) { return pr.subVectors(i, e), fr.subVectors(t, e), pr.cross(fr).dot(n) < 0; }
        set(t, e, i) { return this.a.copy(t), this.b.copy(e), this.c.copy(i), this; }
        setFromPointsAndIndices(t, e, i, n) { return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this; }
        setFromAttributeAndIndices(t, e, i, n) { return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, n), this; }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this; }
        getArea() { return pr.subVectors(this.c, this.b), fr.subVectors(this.a, this.b), .5 * pr.cross(fr).length(); }
        getMidpoint(t) { return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3); }
        getNormal(t) { return wr.getNormal(this.a, this.b, this.c, t); }
        getPlane(t) { return t.setFromCoplanarPoints(this.a, this.b, this.c); }
        getBarycoord(t, e) { return wr.getBarycoord(t, this.a, this.b, this.c, e); }
        getUV(t, e, i, n, r) { return wr.getUV(t, this.a, this.b, this.c, e, i, n, r); }
        containsPoint(t) { return wr.containsPoint(t, this.a, this.b, this.c); }
        isFrontFacing(t) { return wr.isFrontFacing(this.a, this.b, this.c, t); }
        intersectsBox(t) { return t.intersectsTriangle(this); }
        closestPointToPoint(t, e) { const i = this.a, n = this.b, r = this.c; let s, a; vr.subVectors(n, i), xr.subVectors(r, i), yr.subVectors(t, i); const o = vr.dot(yr), l = xr.dot(yr); if (o <= 0 && l <= 0)
            return e.copy(i); br.subVectors(t, n); const c = vr.dot(br), h = xr.dot(br); if (c >= 0 && h <= c)
            return e.copy(n); const u = o * h - c * l; if (u <= 0 && o >= 0 && c <= 0)
            return s = o / (o - c), e.copy(i).addScaledVector(vr, s); Mr.subVectors(t, r); const d = vr.dot(Mr), p = xr.dot(Mr); if (p >= 0 && d <= p)
            return e.copy(r); const f = d * l - o * p; if (f <= 0 && l >= 0 && p <= 0)
            return a = l / (l - p), e.copy(i).addScaledVector(xr, a); const m = c * p - d * h; if (m <= 0 && h - c >= 0 && d - p >= 0)
            return _r.subVectors(r, n), a = (h - c) / (h - c + (d - p)), e.copy(n).addScaledVector(_r, a); const g = 1 / (m + f + u); return s = f * g, a = u * g, e.copy(i).addScaledVector(vr, s).addScaledVector(xr, a); }
        equals(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c); }
    }
    let Sr = 0;
    class Tr extends vi {
        constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Sr++ }), this.uuid = Mi(), this.name = "", this.type = "Material", this.blending = _, this.side = f, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = I, this.blendDst = O, this.blendEquation = S, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = H, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ri, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = We, this.stencilZFail = We, this.stencilZPass = We, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0; }
        get alphaTest() { return this._alphaTest; }
        set alphaTest(t) { this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t; }
        onBuild() { }
        onBeforeRender() { }
        onBeforeCompile() { }
        customProgramCacheKey() { return this.onBeforeCompile.toString(); }
        setValues(t) { if (void 0 !== t)
            for (const e in t) {
                const i = t[e];
                if (void 0 === i) {
                    console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    continue;
                }
                const n = this[e];
                void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
            } }
        toJSON(t) { const e = void 0 === t || "string" == typeof t; e && (t = { textures: {}, images: {} }); const i = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } }; function n(t) { const e = []; for (const i in t) {
            const n = t[i];
            delete n.metadata, e.push(n);
        } return e; } if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), void 0 !== this.sheen && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (i.combine = this.combine)), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== _ && (i.blending = this.blending), this.side !== f && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.forceSinglePass && (i.forceSinglePass = this.forceSinglePass), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), !1 === this.fog && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData), e) {
            const e = n(t.textures), r = n(t.images);
            e.length > 0 && (i.textures = e), r.length > 0 && (i.images = r);
        } return i; }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite; const e = t.clippingPlanes; let i = null; if (null !== e) {
            const t = e.length;
            i = new Array(t);
            for (let n = 0; n !== t; ++n)
                i[n] = e[n].clone();
        } return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this; }
        dispose() { this.dispatchEvent({ type: "dispose" }); }
        set needsUpdate(t) { !0 === t && this.version++; }
    }
    class Er extends Tr {
        constructor(t) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Zi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this; }
    }
    const Ar = new un, Cr = new Di;
    class Lr {
        constructor(t, e, i = !1) { if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = i, this.usage = si, this.updateRange = { offset: 0, count: -1 }, this.version = 0; }
        onUploadCallback() { }
        set needsUpdate(t) { !0 === t && this.version++; }
        setUsage(t) { return this.usage = t, this; }
        copy(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this; }
        copyAt(t, e, i) { t *= this.itemSize, i *= e.itemSize; for (let n = 0, r = this.itemSize; n < r; n++)
            this.array[t + n] = e.array[i + n]; return this; }
        copyArray(t) { return this.array.set(t), this; }
        applyMatrix3(t) { if (2 === this.itemSize)
            for (let e = 0, i = this.count; e < i; e++)
                Cr.fromBufferAttribute(this, e), Cr.applyMatrix3(t), this.setXY(e, Cr.x, Cr.y);
        else if (3 === this.itemSize)
            for (let e = 0, i = this.count; e < i; e++)
                Ar.fromBufferAttribute(this, e), Ar.applyMatrix3(t), this.setXYZ(e, Ar.x, Ar.y, Ar.z); return this; }
        applyMatrix4(t) { for (let e = 0, i = this.count; e < i; e++)
            Ar.fromBufferAttribute(this, e), Ar.applyMatrix4(t), this.setXYZ(e, Ar.x, Ar.y, Ar.z); return this; }
        applyNormalMatrix(t) { for (let e = 0, i = this.count; e < i; e++)
            Ar.fromBufferAttribute(this, e), Ar.applyNormalMatrix(t), this.setXYZ(e, Ar.x, Ar.y, Ar.z); return this; }
        transformDirection(t) { for (let e = 0, i = this.count; e < i; e++)
            Ar.fromBufferAttribute(this, e), Ar.transformDirection(t), this.setXYZ(e, Ar.x, Ar.y, Ar.z); return this; }
        set(t, e = 0) { return this.array.set(t, e), this; }
        getX(t) { let e = this.array[t * this.itemSize]; return this.normalized && (e = Li(e, this.array)), e; }
        setX(t, e) { return this.normalized && (e = Pi(e, this.array)), this.array[t * this.itemSize] = e, this; }
        getY(t) { let e = this.array[t * this.itemSize + 1]; return this.normalized && (e = Li(e, this.array)), e; }
        setY(t, e) { return this.normalized && (e = Pi(e, this.array)), this.array[t * this.itemSize + 1] = e, this; }
        getZ(t) { let e = this.array[t * this.itemSize + 2]; return this.normalized && (e = Li(e, this.array)), e; }
        setZ(t, e) { return this.normalized && (e = Pi(e, this.array)), this.array[t * this.itemSize + 2] = e, this; }
        getW(t) { let e = this.array[t * this.itemSize + 3]; return this.normalized && (e = Li(e, this.array)), e; }
        setW(t, e) { return this.normalized && (e = Pi(e, this.array)), this.array[t * this.itemSize + 3] = e, this; }
        setXY(t, e, i) { return t *= this.itemSize, this.normalized && (e = Pi(e, this.array), i = Pi(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this; }
        setXYZ(t, e, i, n) { return t *= this.itemSize, this.normalized && (e = Pi(e, this.array), i = Pi(i, this.array), n = Pi(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this; }
        setXYZW(t, e, i, n, r) { return t *= this.itemSize, this.normalized && (e = Pi(e, this.array), i = Pi(i, this.array), n = Pi(n, this.array), r = Pi(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this; }
        onUpload(t) { return this.onUploadCallback = t, this; }
        clone() { return new this.constructor(this.array, this.itemSize).copy(this); }
        toJSON() { const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return "" !== this.name && (t.name = this.name), this.usage !== si && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t; }
        copyColorsArray() { console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144."); }
        copyVector2sArray() { console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144."); }
        copyVector3sArray() { console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144."); }
        copyVector4sArray() { console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144."); }
    }
    class Pr extends Lr {
        constructor(t, e, i) { super(new Int8Array(t), e, i); }
    }
    class Rr extends Lr {
        constructor(t, e, i) { super(new Uint8Array(t), e, i); }
    }
    class Dr extends Lr {
        constructor(t, e, i) { super(new Uint8ClampedArray(t), e, i); }
    }
    class Ir extends Lr {
        constructor(t, e, i) { super(new Int16Array(t), e, i); }
    }
    class Or extends Lr {
        constructor(t, e, i) { super(new Uint16Array(t), e, i); }
    }
    class zr extends Lr {
        constructor(t, e, i) { super(new Int32Array(t), e, i); }
    }
    class Nr extends Lr {
        constructor(t, e, i) { super(new Uint32Array(t), e, i); }
    }
    class Ur extends Lr {
        constructor(t, e, i) { super(new Uint16Array(t), e, i), this.isFloat16BufferAttribute = !0; }
    }
    class kr extends Lr {
        constructor(t, e, i) { super(new Float32Array(t), e, i); }
    }
    class Br extends Lr {
        constructor(t, e, i) { super(new Float64Array(t), e, i); }
    }
    let Fr = 0;
    const Gr = new Gn, Vr = new dr, Hr = new un, Wr = new fn, jr = new fn, qr = new un;
    class Xr extends vi {
        constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Fr++ }), this.uuid = Mi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}; }
        getIndex() { return this.index; }
        setIndex(t) { return Array.isArray(t) ? this.index = new (zi(t) ? Nr : Or)(t, 1) : this.index = t, this; }
        getAttribute(t) { return this.attributes[t]; }
        setAttribute(t, e) { return this.attributes[t] = e, this; }
        deleteAttribute(t) { return delete this.attributes[t], this; }
        hasAttribute(t) { return void 0 !== this.attributes[t]; }
        addGroup(t, e, i = 0) { this.groups.push({ start: t, count: e, materialIndex: i }); }
        clearGroups() { this.groups = []; }
        setDrawRange(t, e) { this.drawRange.start = t, this.drawRange.count = e; }
        applyMatrix4(t) { const e = this.attributes.position; void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0); const i = this.attributes.normal; if (void 0 !== i) {
            const e = (new Ii).getNormalMatrix(t);
            i.applyNormalMatrix(e), i.needsUpdate = !0;
        } const n = this.attributes.tangent; return void 0 !== n && (n.transformDirection(t), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this; }
        applyQuaternion(t) { return Gr.makeRotationFromQuaternion(t), this.applyMatrix4(Gr), this; }
        rotateX(t) { return Gr.makeRotationX(t), this.applyMatrix4(Gr), this; }
        rotateY(t) { return Gr.makeRotationY(t), this.applyMatrix4(Gr), this; }
        rotateZ(t) { return Gr.makeRotationZ(t), this.applyMatrix4(Gr), this; }
        translate(t, e, i) { return Gr.makeTranslation(t, e, i), this.applyMatrix4(Gr), this; }
        scale(t, e, i) { return Gr.makeScale(t, e, i), this.applyMatrix4(Gr), this; }
        lookAt(t) { return Vr.lookAt(t), Vr.updateMatrix(), this.applyMatrix4(Vr.matrix), this; }
        center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Hr).negate(), this.translate(Hr.x, Hr.y, Hr.z), this; }
        setFromPoints(t) { const e = []; for (let i = 0, n = t.length; i < n; i++) {
            const n = t[i];
            e.push(n.x, n.y, n.z || 0);
        } return this.setAttribute("position", new kr(e, 3)), this; }
        computeBoundingBox() { null === this.boundingBox && (this.boundingBox = new fn); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new un(-1 / 0, -1 / 0, -1 / 0), new un(1 / 0, 1 / 0, 1 / 0)); if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t), e)
                for (let t = 0, i = e.length; t < i; t++) {
                    const i = e[t];
                    Wr.setFromBufferAttribute(i), this.morphTargetsRelative ? (qr.addVectors(this.boundingBox.min, Wr.min), this.boundingBox.expandByPoint(qr), qr.addVectors(this.boundingBox.max, Wr.max), this.boundingBox.expandByPoint(qr)) : (this.boundingBox.expandByPoint(Wr.min), this.boundingBox.expandByPoint(Wr.max));
                }
        }
        else
            this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this); }
        computeBoundingSphere() { null === this.boundingSphere && (this.boundingSphere = new Dn); const t = this.attributes.position, e = this.morphAttributes.position; if (t && t.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new un, 1 / 0); if (t) {
            const i = this.boundingSphere.center;
            if (Wr.setFromBufferAttribute(t), e)
                for (let t = 0, i = e.length; t < i; t++) {
                    const i = e[t];
                    jr.setFromBufferAttribute(i), this.morphTargetsRelative ? (qr.addVectors(Wr.min, jr.min), Wr.expandByPoint(qr), qr.addVectors(Wr.max, jr.max), Wr.expandByPoint(qr)) : (Wr.expandByPoint(jr.min), Wr.expandByPoint(jr.max));
                }
            Wr.getCenter(i);
            let n = 0;
            for (let e = 0, r = t.count; e < r; e++)
                qr.fromBufferAttribute(t, e), n = Math.max(n, i.distanceToSquared(qr));
            if (e)
                for (let r = 0, s = e.length; r < s; r++) {
                    const s = e[r], a = this.morphTargetsRelative;
                    for (let e = 0, r = s.count; e < r; e++)
                        qr.fromBufferAttribute(s, e), a && (Hr.fromBufferAttribute(t, e), qr.add(Hr)), n = Math.max(n, i.distanceToSquared(qr));
                }
            this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        } }
        computeTangents() { const t = this.index, e = this.attributes; if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
            return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); const i = t.array, n = e.position.array, r = e.normal.array, s = e.uv.array, a = n.length / 3; !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Lr(new Float32Array(4 * a), 4)); const o = this.getAttribute("tangent").array, l = [], c = []; for (let t = 0; t < a; t++)
            l[t] = new un, c[t] = new un; const h = new un, u = new un, d = new un, p = new Di, f = new Di, m = new Di, g = new un, v = new un; function x(t, e, i) { h.fromArray(n, 3 * t), u.fromArray(n, 3 * e), d.fromArray(n, 3 * i), p.fromArray(s, 2 * t), f.fromArray(s, 2 * e), m.fromArray(s, 2 * i), u.sub(h), d.sub(h), f.sub(p), m.sub(p); const r = 1 / (f.x * m.y - m.x * f.y); isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[i].add(g), c[t].add(v), c[e].add(v), c[i].add(v)); } let _ = this.groups; 0 === _.length && (_ = [{ start: 0, count: i.length }]); for (let t = 0, e = _.length; t < e; ++t) {
            const e = _[t], n = e.start;
            for (let t = n, r = n + e.count; t < r; t += 3)
                x(i[t + 0], i[t + 1], i[t + 2]);
        } const y = new un, b = new un, M = new un, w = new un; function S(t) { M.fromArray(r, 3 * t), w.copy(M); const e = l[t]; y.copy(e), y.sub(M.multiplyScalar(M.dot(e))).normalize(), b.crossVectors(w, e); const i = b.dot(c[t]) < 0 ? -1 : 1; o[4 * t] = y.x, o[4 * t + 1] = y.y, o[4 * t + 2] = y.z, o[4 * t + 3] = i; } for (let t = 0, e = _.length; t < e; ++t) {
            const e = _[t], n = e.start;
            for (let t = n, r = n + e.count; t < r; t += 3)
                S(i[t + 0]), S(i[t + 1]), S(i[t + 2]);
        } }
        computeVertexNormals() { const t = this.index, e = this.getAttribute("position"); if (void 0 !== e) {
            let i = this.getAttribute("normal");
            if (void 0 === i)
                i = new Lr(new Float32Array(3 * e.count), 3), this.setAttribute("normal", i);
            else
                for (let t = 0, e = i.count; t < e; t++)
                    i.setXYZ(t, 0, 0, 0);
            const n = new un, r = new un, s = new un, a = new un, o = new un, l = new un, c = new un, h = new un;
            if (t)
                for (let u = 0, d = t.count; u < d; u += 3) {
                    const d = t.getX(u + 0), p = t.getX(u + 1), f = t.getX(u + 2);
                    n.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, f), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), a.fromBufferAttribute(i, d), o.fromBufferAttribute(i, p), l.fromBufferAttribute(i, f), a.add(c), o.add(c), l.add(c), i.setXYZ(d, a.x, a.y, a.z), i.setXYZ(p, o.x, o.y, o.z), i.setXYZ(f, l.x, l.y, l.z);
                }
            else
                for (let t = 0, a = e.count; t < a; t += 3)
                    n.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), i.setXYZ(t + 0, c.x, c.y, c.z), i.setXYZ(t + 1, c.x, c.y, c.z), i.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(), i.needsUpdate = !0;
        } }
        merge() { return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this; }
        normalizeNormals() { const t = this.attributes.normal; for (let e = 0, i = t.count; e < i; e++)
            qr.fromBufferAttribute(t, e), qr.normalize(), t.setXYZ(e, qr.x, qr.y, qr.z); }
        toNonIndexed() { function t(t, e) { const i = t.array, n = t.itemSize, r = t.normalized, s = new i.constructor(e.length * n); let a = 0, o = 0; for (let r = 0, l = e.length; r < l; r++) {
            a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * n;
            for (let t = 0; t < n; t++)
                s[o++] = i[a++];
        } return new Lr(s, n, r); } if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const e = new Xr, i = this.index.array, n = this.attributes; for (const r in n) {
            const s = t(n[r], i);
            e.setAttribute(r, s);
        } const r = this.morphAttributes; for (const n in r) {
            const s = [], a = r[n];
            for (let e = 0, n = a.length; e < n; e++) {
                const n = t(a[e], i);
                s.push(n);
            }
            e.morphAttributes[n] = s;
        } e.morphTargetsRelative = this.morphTargetsRelative; const s = this.groups; for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t];
            e.addGroup(i.start, i.count, i.materialIndex);
        } return e; }
        toJSON() { const t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
            const e = this.parameters;
            for (const i in e)
                void 0 !== e[i] && (t[i] = e[i]);
            return t;
        } t.data = { attributes: {} }; const e = this.index; null !== e && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) }); const i = this.attributes; for (const e in i) {
            const n = i[e];
            t.data.attributes[e] = n.toJSON(t.data);
        } const n = {}; let r = !1; for (const e in this.morphAttributes) {
            const i = this.morphAttributes[e], s = [];
            for (let e = 0, n = i.length; e < n; e++) {
                const n = i[e];
                s.push(n.toJSON(t.data));
            }
            s.length > 0 && (n[e] = s, r = !0);
        } r && (t.data.morphAttributes = n, t.data.morphTargetsRelative = this.morphTargetsRelative); const s = this.groups; s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s))); const a = this.boundingSphere; return null !== a && (t.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t; }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const e = {}; this.name = t.name; const i = t.index; null !== i && this.setIndex(i.clone(e)); const n = t.attributes; for (const t in n) {
            const i = n[t];
            this.setAttribute(t, i.clone(e));
        } const r = t.morphAttributes; for (const t in r) {
            const i = [], n = r[t];
            for (let t = 0, r = n.length; t < r; t++)
                i.push(n[t].clone(e));
            this.morphAttributes[t] = i;
        } this.morphTargetsRelative = t.morphTargetsRelative; const s = t.groups; for (let t = 0, e = s.length; t < e; t++) {
            const e = s[t];
            this.addGroup(e.start, e.count, e.materialIndex);
        } const a = t.boundingBox; null !== a && (this.boundingBox = a.clone()); const o = t.boundingSphere; return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this; }
        dispose() { this.dispatchEvent({ type: "dispose" }); }
    }
    const Yr = new Gn, Zr = new Fn, Jr = new Dn, Kr = new un, $r = new un, Qr = new un, ts = new un, es = new un, is = new Di, ns = new Di, rs = new Di, ss = new un, as = new un;
    class os extends dr {
        constructor(t = new Xr, e = new Er) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets(); }
        copy(t, e) { return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this; }
        updateMorphTargets() { const t = this.geometry.morphAttributes, e = Object.keys(t); if (e.length > 0) {
            const i = t[e[0]];
            if (void 0 !== i) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = i.length; t < e; t++) {
                    const e = i[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                }
            }
        } }
        getVertexPosition(t, e) { const i = this.geometry, n = i.attributes.position, r = i.morphAttributes.position, s = i.morphTargetsRelative; e.fromBufferAttribute(n, t); const a = this.morphTargetInfluences; if (r && a) {
            es.set(0, 0, 0);
            for (let i = 0, n = r.length; i < n; i++) {
                const n = a[i], o = r[i];
                0 !== n && (ts.fromBufferAttribute(o, t), s ? es.addScaledVector(ts, n) : es.addScaledVector(ts.sub(e), n));
            }
            e.add(es);
        } return this.isSkinnedMesh && this.boneTransform(t, e), e; }
        raycast(t, e) { const i = this.geometry, n = this.material, r = this.matrixWorld; if (void 0 === n)
            return; if (null === i.boundingSphere && i.computeBoundingSphere(), Jr.copy(i.boundingSphere), Jr.applyMatrix4(r), !1 === t.ray.intersectsSphere(Jr))
            return; if (Yr.copy(r).invert(), Zr.copy(t.ray).applyMatrix4(Yr), null !== i.boundingBox && !1 === Zr.intersectsBox(i.boundingBox))
            return; let s; const a = i.index, o = i.attributes.position, l = i.attributes.uv, c = i.attributes.uv2, h = i.groups, u = i.drawRange; if (null !== a)
            if (Array.isArray(n))
                for (let i = 0, r = h.length; i < r; i++) {
                    const r = h[i], o = n[r.materialIndex];
                    for (let i = Math.max(r.start, u.start), n = Math.min(a.count, Math.min(r.start + r.count, u.start + u.count)); i < n; i += 3) {
                        const n = a.getX(i), h = a.getX(i + 1), u = a.getX(i + 2);
                        s = ls(this, o, t, Zr, l, c, n, h, u), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                    }
                }
            else {
                for (let i = Math.max(0, u.start), r = Math.min(a.count, u.start + u.count); i < r; i += 3) {
                    const r = a.getX(i), o = a.getX(i + 1), h = a.getX(i + 2);
                    s = ls(this, n, t, Zr, l, c, r, o, h), s && (s.faceIndex = Math.floor(i / 3), e.push(s));
                }
            }
        else if (void 0 !== o)
            if (Array.isArray(n))
                for (let i = 0, r = h.length; i < r; i++) {
                    const r = h[i], a = n[r.materialIndex];
                    for (let i = Math.max(r.start, u.start), n = Math.min(o.count, Math.min(r.start + r.count, u.start + u.count)); i < n; i += 3) {
                        s = ls(this, a, t, Zr, l, c, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                    }
                }
            else {
                for (let i = Math.max(0, u.start), r = Math.min(o.count, u.start + u.count); i < r; i += 3) {
                    s = ls(this, n, t, Zr, l, c, i, i + 1, i + 2), s && (s.faceIndex = Math.floor(i / 3), e.push(s));
                }
            } }
    }
    function ls(t, e, i, n, r, s, a, o, l) { t.getVertexPosition(a, Kr), t.getVertexPosition(o, $r), t.getVertexPosition(l, Qr); const c = function (t, e, i, n, r, s, a, o) { let l; if (l = e.side === m ? n.intersectTriangle(a, s, r, !0, o) : n.intersectTriangle(r, s, a, e.side === f, o), null === l)
        return null; as.copy(o), as.applyMatrix4(t.matrixWorld); const c = i.ray.origin.distanceTo(as); return c < i.near || c > i.far ? null : { distance: c, point: as.clone(), object: t }; }(t, e, i, n, Kr, $r, Qr, ss); if (c) {
        r && (is.fromBufferAttribute(r, a), ns.fromBufferAttribute(r, o), rs.fromBufferAttribute(r, l), c.uv = wr.getUV(ss, Kr, $r, Qr, is, ns, rs, new Di)), s && (is.fromBufferAttribute(s, a), ns.fromBufferAttribute(s, o), rs.fromBufferAttribute(s, l), c.uv2 = wr.getUV(ss, Kr, $r, Qr, is, ns, rs, new Di));
        const t = { a: a, b: o, c: l, normal: new un, materialIndex: 0 };
        wr.getNormal(Kr, $r, Qr, t.normal), c.face = t;
    } return c; }
    class cs extends Xr {
        constructor(t = 1, e = 1, i = 1, n = 1, r = 1, s = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: i, widthSegments: n, heightSegments: r, depthSegments: s }; const a = this; n = Math.floor(n), r = Math.floor(r), s = Math.floor(s); const o = [], l = [], c = [], h = []; let u = 0, d = 0; function p(t, e, i, n, r, s, p, f, m, g, v) { const x = s / m, _ = p / g, y = s / 2, b = p / 2, M = f / 2, w = m + 1, S = g + 1; let T = 0, E = 0; const A = new un; for (let s = 0; s < S; s++) {
            const a = s * _ - b;
            for (let o = 0; o < w; o++) {
                const u = o * x - y;
                A[t] = u * n, A[e] = a * r, A[i] = M, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[i] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / m), h.push(1 - s / g), T += 1;
            }
        } for (let t = 0; t < g; t++)
            for (let e = 0; e < m; e++) {
                const i = u + e + w * t, n = u + e + w * (t + 1), r = u + (e + 1) + w * (t + 1), s = u + (e + 1) + w * t;
                o.push(i, n, s), o.push(n, r, s), E += 6;
            } a.addGroup(d, E, v), d += E, u += T; } p("z", "y", "x", -1, -1, i, e, t, s, r, 0), p("z", "y", "x", 1, -1, i, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, i, e, n, s, 2), p("x", "z", "y", 1, -1, t, i, -e, n, s, 3), p("x", "y", "z", 1, -1, t, e, i, n, r, 4), p("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(o), this.setAttribute("position", new kr(l, 3)), this.setAttribute("normal", new kr(c, 3)), this.setAttribute("uv", new kr(h, 2)); }
        static fromJSON(t) { return new cs(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments); }
    }
    function hs(t) { const e = {}; for (const i in t) {
        e[i] = {};
        for (const n in t[i]) {
            const r = t[i][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r;
        }
    } return e; }
    function us(t) { const e = {}; for (let i = 0; i < t.length; i++) {
        const n = hs(t[i]);
        for (const t in n)
            e[t] = n[t];
    } return e; }
    function ds(t) { return null === t.getRenderTarget() && t.outputEncoding === ze ? Ge : Ve; }
    const ps = { clone: hs, merge: us };
    class fs extends Tr {
        constructor(t) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && this.setValues(t); }
        copy(t) { return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = hs(t.uniforms), this.uniformsGroups = function (t) { const e = []; for (let i = 0; i < t.length; i++)
            e.push(t[i].clone()); return e; }(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this; }
        toJSON(t) { const e = super.toJSON(t); e.glslVersion = this.glslVersion, e.uniforms = {}; for (const i in this.uniforms) {
            const n = this.uniforms[i].value;
            n && n.isTexture ? e.uniforms[i] = { type: "t", value: n.toJSON(t).uuid } : n && n.isColor ? e.uniforms[i] = { type: "c", value: n.getHex() } : n && n.isVector2 ? e.uniforms[i] = { type: "v2", value: n.toArray() } : n && n.isVector3 ? e.uniforms[i] = { type: "v3", value: n.toArray() } : n && n.isVector4 ? e.uniforms[i] = { type: "v4", value: n.toArray() } : n && n.isMatrix3 ? e.uniforms[i] = { type: "m3", value: n.toArray() } : n && n.isMatrix4 ? e.uniforms[i] = { type: "m4", value: n.toArray() } : e.uniforms[i] = { value: n };
        } Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader; const i = {}; for (const t in this.extensions)
            !0 === this.extensions[t] && (i[t] = !0); return Object.keys(i).length > 0 && (e.extensions = i), e; }
    }
    class ms extends dr {
        constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Gn, this.projectionMatrix = new Gn, this.projectionMatrixInverse = new Gn; }
        copy(t, e) { return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this; }
        getWorldDirection(t) { this.updateWorldMatrix(!0, !1); const e = this.matrixWorld.elements; return t.set(-e[8], -e[9], -e[10]).normalize(); }
        updateMatrixWorld(t) { super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert(); }
        updateWorldMatrix(t, e) { super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert(); }
        clone() { return (new this.constructor).copy(this); }
    }
    class gs extends ms {
        constructor(t = 50, e = 1, i = .1, n = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix(); }
        copy(t, e) { return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this; }
        setFocalLength(t) { const e = .5 * this.getFilmHeight() / t; this.fov = 2 * bi * Math.atan(e), this.updateProjectionMatrix(); }
        getFocalLength() { const t = Math.tan(.5 * yi * this.fov); return .5 * this.getFilmHeight() / t; }
        getEffectiveFOV() { return 2 * bi * Math.atan(Math.tan(.5 * yi * this.fov) / this.zoom); }
        getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1); }
        getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1); }
        setViewOffset(t, e, i, n, r, s) { this.aspect = t / e, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix(); }
        clearViewOffset() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix(); }
        updateProjectionMatrix() { const t = this.near; let e = t * Math.tan(.5 * yi * this.fov) / this.zoom, i = 2 * e, n = this.aspect * i, r = -.5 * n; const s = this.view; if (null !== this.view && this.view.enabled) {
            const t = s.fullWidth, a = s.fullHeight;
            r += s.offsetX * n / t, e -= s.offsetY * i / a, n *= s.width / t, i *= s.height / a;
        } const a = this.filmOffset; 0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert(); }
        toJSON(t) { const e = super.toJSON(t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e; }
    }
    const vs = -90;
    class xs extends dr {
        constructor(t, e, i) { super(), this.type = "CubeCamera", this.renderTarget = i; const n = new gs(vs, 1, t, e); n.layers = this.layers, n.up.set(0, 1, 0), n.lookAt(1, 0, 0), this.add(n); const r = new gs(vs, 1, t, e); r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r); const s = new gs(vs, 1, t, e); s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(0, 1, 0), this.add(s); const a = new gs(vs, 1, t, e); a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a); const o = new gs(vs, 1, t, e); o.layers = this.layers, o.up.set(0, 1, 0), o.lookAt(0, 0, 1), this.add(o); const l = new gs(vs, 1, t, e); l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l); }
        update(t, e) { null === this.parent && this.updateMatrixWorld(); const i = this.renderTarget, [n, r, s, a, o, l] = this.children, c = t.getRenderTarget(), h = t.toneMapping, u = t.xr.enabled; t.toneMapping = K, t.xr.enabled = !1; const d = i.texture.generateMipmaps; i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, n), t.setRenderTarget(i, 1), t.render(e, r), t.setRenderTarget(i, 2), t.render(e, s), t.setRenderTarget(i, 3), t.render(e, a), t.setRenderTarget(i, 4), t.render(e, o), i.texture.generateMipmaps = d, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(c), t.toneMapping = h, t.xr.enabled = u, i.texture.needsPMREMUpdate = !0; }
    }
    class _s extends en {
        constructor(t, e, i, n, r, s, a, o, l, c) { super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : rt, i, n, r, s, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1; }
        get images() { return this.image; }
        set images(t) { this.image = t; }
    }
    class ys extends rn {
        constructor(t = 1, e = {}) { super(t, t, e), this.isWebGLCubeRenderTarget = !0; const i = { width: t, height: t, depth: 1 }, n = [i, i, i, i, i, i]; this.texture = new _s(n, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : vt; }
        fromEquirectangularTexture(t, e) { this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter; const i = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t", fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t" }, n = new cs(5, 5, 5), r = new fs({ name: "CubemapFromEquirect", uniforms: hs(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: m, blending: x }); r.uniforms.tEquirect.value = e; const s = new os(n, r), a = e.minFilter; e.minFilter === yt && (e.minFilter = vt); return new xs(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this; }
        clear(t, e, i, n) { const r = t.getRenderTarget(); for (let r = 0; r < 6; r++)
            t.setRenderTarget(this, r), t.clear(e, i, n); t.setRenderTarget(r); }
    }
    const bs = new un, Ms = new un, ws = new Ii;
    class Ss {
        constructor(t = new un(1, 0, 0), e = 0) { this.isPlane = !0, this.normal = t, this.constant = e; }
        set(t, e) { return this.normal.copy(t), this.constant = e, this; }
        setComponents(t, e, i, n) { return this.normal.set(t, e, i), this.constant = n, this; }
        setFromNormalAndCoplanarPoint(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this; }
        setFromCoplanarPoints(t, e, i) { const n = bs.subVectors(i, e).cross(Ms.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(n, t), this; }
        copy(t) { return this.normal.copy(t.normal), this.constant = t.constant, this; }
        normalize() { const t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this; }
        negate() { return this.constant *= -1, this.normal.negate(), this; }
        distanceToPoint(t) { return this.normal.dot(t) + this.constant; }
        distanceToSphere(t) { return this.distanceToPoint(t.center) - t.radius; }
        projectPoint(t, e) { return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t); }
        intersectLine(t, e) { const i = t.delta(bs), n = this.normal.dot(i); if (0 === n)
            return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null; const r = -(t.start.dot(this.normal) + this.constant) / n; return r < 0 || r > 1 ? null : e.copy(i).multiplyScalar(r).add(t.start); }
        intersectsLine(t) { const e = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end); return e < 0 && i > 0 || i < 0 && e > 0; }
        intersectsBox(t) { return t.intersectsPlane(this); }
        intersectsSphere(t) { return t.intersectsPlane(this); }
        coplanarPoint(t) { return t.copy(this.normal).multiplyScalar(-this.constant); }
        applyMatrix4(t, e) { const i = e || ws.getNormalMatrix(t), n = this.coplanarPoint(bs).applyMatrix4(t), r = this.normal.applyMatrix3(i).normalize(); return this.constant = -n.dot(r), this; }
        translate(t) { return this.constant -= t.dot(this.normal), this; }
        equals(t) { return t.normal.equals(this.normal) && t.constant === this.constant; }
        clone() { return (new this.constructor).copy(this); }
    }
    const Ts = new Dn, Es = new un;
    class As {
        constructor(t = new Ss, e = new Ss, i = new Ss, n = new Ss, r = new Ss, s = new Ss) { this.planes = [t, e, i, n, r, s]; }
        set(t, e, i, n, r, s) { const a = this.planes; return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(s), this; }
        copy(t) { const e = this.planes; for (let i = 0; i < 6; i++)
            e[i].copy(t.planes[i]); return this; }
        setFromProjectionMatrix(t) { const e = this.planes, i = t.elements, n = i[0], r = i[1], s = i[2], a = i[3], o = i[4], l = i[5], c = i[6], h = i[7], u = i[8], d = i[9], p = i[10], f = i[11], m = i[12], g = i[13], v = i[14], x = i[15]; return e[0].setComponents(a - n, h - o, f - u, x - m).normalize(), e[1].setComponents(a + n, h + o, f + u, x + m).normalize(), e[2].setComponents(a + r, h + l, f + d, x + g).normalize(), e[3].setComponents(a - r, h - l, f - d, x - g).normalize(), e[4].setComponents(a - s, h - c, f - p, x - v).normalize(), e[5].setComponents(a + s, h + c, f + p, x + v).normalize(), this; }
        intersectsObject(t) { const e = t.geometry; return null === e.boundingSphere && e.computeBoundingSphere(), Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(Ts); }
        intersectsSprite(t) { return Ts.center.set(0, 0, 0), Ts.radius = .7071067811865476, Ts.applyMatrix4(t.matrixWorld), this.intersectsSphere(Ts); }
        intersectsSphere(t) { const e = this.planes, i = t.center, n = -t.radius; for (let t = 0; t < 6; t++) {
            if (e[t].distanceToPoint(i) < n)
                return !1;
        } return !0; }
        intersectsBox(t) { const e = this.planes; for (let i = 0; i < 6; i++) {
            const n = e[i];
            if (Es.x = n.normal.x > 0 ? t.max.x : t.min.x, Es.y = n.normal.y > 0 ? t.max.y : t.min.y, Es.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(Es) < 0)
                return !1;
        } return !0; }
        containsPoint(t) { const e = this.planes; for (let i = 0; i < 6; i++)
            if (e[i].distanceToPoint(t) < 0)
                return !1; return !0; }
        clone() { return (new this.constructor).copy(this); }
    }
    function Cs() { let t = null, e = !1, i = null, n = null; function r(e, s) { i(e, s), n = t.requestAnimationFrame(r); } return { start: function () { !0 !== e && null !== i && (n = t.requestAnimationFrame(r), e = !0); }, stop: function () { t.cancelAnimationFrame(n), e = !1; }, setAnimationLoop: function (t) { i = t; }, setContext: function (e) { t = e; } }; }
    function Ls(t, e) { const i = e.isWebGL2, n = new WeakMap; return { get: function (t) { return t.isInterleavedBufferAttribute && (t = t.data), n.get(t); }, remove: function (e) { e.isInterleavedBufferAttribute && (e = e.data); const i = n.get(e); i && (t.deleteBuffer(i.buffer), n.delete(e)); }, update: function (e, r) { if (e.isGLBufferAttribute) {
            const t = n.get(e);
            return void ((!t || t.version < e.version) && n.set(e, { buffer: e.buffer, type: e.type, bytesPerElement: e.elementSize, version: e.version }));
        } e.isInterleavedBufferAttribute && (e = e.data); const s = n.get(e); void 0 === s ? n.set(e, function (e, n) { const r = e.array, s = e.usage, a = t.createBuffer(); let o; if (t.bindBuffer(n, a), t.bufferData(n, r, s), e.onUploadCallback(), r instanceof Float32Array)
            o = 5126;
        else if (r instanceof Uint16Array)
            if (e.isFloat16BufferAttribute) {
                if (!i)
                    throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                o = 5131;
            }
            else
                o = 5123;
        else if (r instanceof Int16Array)
            o = 5122;
        else if (r instanceof Uint32Array)
            o = 5125;
        else if (r instanceof Int32Array)
            o = 5124;
        else if (r instanceof Int8Array)
            o = 5120;
        else if (r instanceof Uint8Array)
            o = 5121;
        else {
            if (!(r instanceof Uint8ClampedArray))
                throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
            o = 5121;
        } return { buffer: a, type: o, bytesPerElement: r.BYTES_PER_ELEMENT, version: e.version }; }(e, r)) : s.version < e.version && (!function (e, n, r) { const s = n.array, a = n.updateRange; t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (i ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1), n.onUploadCallback(); }(s.buffer, e, r), s.version = e.version); } }; }
    class Ps extends Xr {
        constructor(t = 1, e = 1, i = 1, n = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: i, heightSegments: n }; const r = t / 2, s = e / 2, a = Math.floor(i), o = Math.floor(n), l = a + 1, c = o + 1, h = t / a, u = e / o, d = [], p = [], f = [], m = []; for (let t = 0; t < c; t++) {
            const e = t * u - s;
            for (let i = 0; i < l; i++) {
                const n = i * h - r;
                p.push(n, -e, 0), f.push(0, 0, 1), m.push(i / a), m.push(1 - t / o);
            }
        } for (let t = 0; t < o; t++)
            for (let e = 0; e < a; e++) {
                const i = e + l * t, n = e + l * (t + 1), r = e + 1 + l * (t + 1), s = e + 1 + l * t;
                d.push(i, n, s), d.push(n, r, s);
            } this.setIndex(d), this.setAttribute("position", new kr(p, 3)), this.setAttribute("normal", new kr(f, 3)), this.setAttribute("uv", new kr(m, 2)); }
        static fromJSON(t) { return new Ps(t.width, t.height, t.widthSegments, t.heightSegments); }
    }
    const Rs = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif", map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif", output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif", uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif", uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}" }, Ds = { common: { diffuse: { value: new Zi(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new Ii }, uv2Transform: { value: new Ii }, alphaMap: { value: null }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new Di(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Zi(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Zi(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Ii } }, sprite: { diffuse: { value: new Zi(16777215) }, opacity: { value: 1 }, center: { value: new Di(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Ii } } }, Is = { basic: { uniforms: us([Ds.common, Ds.specularmap, Ds.envmap, Ds.aomap, Ds.lightmap, Ds.fog]), vertexShader: Rs.meshbasic_vert, fragmentShader: Rs.meshbasic_frag }, lambert: { uniforms: us([Ds.common, Ds.specularmap, Ds.envmap, Ds.aomap, Ds.lightmap, Ds.emissivemap, Ds.bumpmap, Ds.normalmap, Ds.displacementmap, Ds.fog, Ds.lights, { emissive: { value: new Zi(0) } }]), vertexShader: Rs.meshlambert_vert, fragmentShader: Rs.meshlambert_frag }, phong: { uniforms: us([Ds.common, Ds.specularmap, Ds.envmap, Ds.aomap, Ds.lightmap, Ds.emissivemap, Ds.bumpmap, Ds.normalmap, Ds.displacementmap, Ds.fog, Ds.lights, { emissive: { value: new Zi(0) }, specular: { value: new Zi(1118481) }, shininess: { value: 30 } }]), vertexShader: Rs.meshphong_vert, fragmentShader: Rs.meshphong_frag }, standard: { uniforms: us([Ds.common, Ds.envmap, Ds.aomap, Ds.lightmap, Ds.emissivemap, Ds.bumpmap, Ds.normalmap, Ds.displacementmap, Ds.roughnessmap, Ds.metalnessmap, Ds.fog, Ds.lights, { emissive: { value: new Zi(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Rs.meshphysical_vert, fragmentShader: Rs.meshphysical_frag }, toon: { uniforms: us([Ds.common, Ds.aomap, Ds.lightmap, Ds.emissivemap, Ds.bumpmap, Ds.normalmap, Ds.displacementmap, Ds.gradientmap, Ds.fog, Ds.lights, { emissive: { value: new Zi(0) } }]), vertexShader: Rs.meshtoon_vert, fragmentShader: Rs.meshtoon_frag }, matcap: { uniforms: us([Ds.common, Ds.bumpmap, Ds.normalmap, Ds.displacementmap, Ds.fog, { matcap: { value: null } }]), vertexShader: Rs.meshmatcap_vert, fragmentShader: Rs.meshmatcap_frag }, points: { uniforms: us([Ds.points, Ds.fog]), vertexShader: Rs.points_vert, fragmentShader: Rs.points_frag }, dashed: { uniforms: us([Ds.common, Ds.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Rs.linedashed_vert, fragmentShader: Rs.linedashed_frag }, depth: { uniforms: us([Ds.common, Ds.displacementmap]), vertexShader: Rs.depth_vert, fragmentShader: Rs.depth_frag }, normal: { uniforms: us([Ds.common, Ds.bumpmap, Ds.normalmap, Ds.displacementmap, { opacity: { value: 1 } }]), vertexShader: Rs.meshnormal_vert, fragmentShader: Rs.meshnormal_frag }, sprite: { uniforms: us([Ds.sprite, Ds.fog]), vertexShader: Rs.sprite_vert, fragmentShader: Rs.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ii }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Rs.background_vert, fragmentShader: Rs.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: Rs.backgroundCube_vert, fragmentShader: Rs.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Rs.cube_vert, fragmentShader: Rs.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Rs.equirect_vert, fragmentShader: Rs.equirect_frag }, distanceRGBA: { uniforms: us([Ds.common, Ds.displacementmap, { referencePosition: { value: new un }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Rs.distanceRGBA_vert, fragmentShader: Rs.distanceRGBA_frag }, shadow: { uniforms: us([Ds.lights, Ds.fog, { color: { value: new Zi(0) }, opacity: { value: 1 } }]), vertexShader: Rs.shadow_vert, fragmentShader: Rs.shadow_frag } };
    Is.physical = { uniforms: us([Is.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new Di(1, 1) }, clearcoatNormalMap: { value: null }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, sheen: { value: 0 }, sheenColor: { value: new Zi(0) }, sheenColorMap: { value: null }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionSamplerSize: { value: new Di }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Zi(0) }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularColor: { value: new Zi(1, 1, 1) }, specularColorMap: { value: null } }]), vertexShader: Rs.meshphysical_vert, fragmentShader: Rs.meshphysical_frag };
    const Os = { r: 0, b: 0, g: 0 };
    function zs(t, e, i, n, r, s, a) { const o = new Zi(0); let l, c, h = !0 === s ? 0 : 1, u = null, d = 0, p = null; function g(e, i) { e.getRGB(Os, ds(t)), n.buffers.color.setClear(Os.r, Os.g, Os.b, i, a); } return { getClearColor: function () { return o; }, setClearColor: function (t, e = 1) { o.set(t), h = e, g(o, h); }, getClearAlpha: function () { return h; }, setClearAlpha: function (t) { h = t, g(o, h); }, render: function (n, s) { let a = !1, v = !0 === s.isScene ? s.background : null; if (v && v.isTexture) {
            v = (s.backgroundBlurriness > 0 ? i : e).get(v);
        } const x = t.xr, _ = x.getSession && x.getSession(); _ && "additive" === _.environmentBlendMode && (v = null), null === v ? g(o, h) : v && v.isColor && (g(v, 1), a = !0), (t.autoClear || a) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), v && (v.isCubeTexture || v.mapping === lt) ? (void 0 === c && (c = new os(new cs(1, 1, 1), new fs({ name: "BackgroundCubeMaterial", uniforms: hs(Is.backgroundCube.uniforms), vertexShader: Is.backgroundCube.vertexShader, fragmentShader: Is.backgroundCube.fragmentShader, side: m, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function (t, e, i) { this.matrixWorld.copyPosition(i.matrixWorld); }, Object.defineProperty(c.material, "envMap", { get: function () { return this.uniforms.envMap.value; } }), r.update(c)), c.material.uniforms.envMap.value = v, c.material.uniforms.flipEnvMap.value = v.isCubeTexture && !1 === v.isRenderTargetTexture ? -1 : 1, c.material.uniforms.backgroundBlurriness.value = s.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = s.backgroundIntensity, c.material.toneMapped = v.encoding !== ze, u === v && d === v.version && p === t.toneMapping || (c.material.needsUpdate = !0, u = v, d = v.version, p = t.toneMapping), c.layers.enableAll(), n.unshift(c, c.geometry, c.material, 0, 0, null)) : v && v.isTexture && (void 0 === l && (l = new os(new Ps(2, 2), new fs({ name: "BackgroundMaterial", uniforms: hs(Is.background.uniforms), vertexShader: Is.background.vertexShader, fragmentShader: Is.background.fragmentShader, side: f, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function () { return this.uniforms.t2D.value; } }), r.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = s.backgroundIntensity, l.material.toneMapped = v.encoding !== ze, !0 === v.matrixAutoUpdate && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), u === v && d === v.version && p === t.toneMapping || (l.material.needsUpdate = !0, u = v, d = v.version, p = t.toneMapping), l.layers.enableAll(), n.unshift(l, l.geometry, l.material, 0, 0, null)); } }; }
    function Ns(t, e, i, n) { const r = t.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || null !== s, o = {}, l = p(null); let c = l, h = !1; function u(e) { return n.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e); } function d(e) { return n.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e); } function p(t) { const e = [], i = [], n = []; for (let t = 0; t < r; t++)
        e[t] = 0, i[t] = 0, n[t] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: e, enabledAttributes: i, attributeDivisors: n, object: t, attributes: {}, index: null }; } function f() { const t = c.newAttributes; for (let e = 0, i = t.length; e < i; e++)
        t[e] = 0; } function m(t) { g(t, 0); } function g(i, r) { const s = c.newAttributes, a = c.enabledAttributes, o = c.attributeDivisors; if (s[i] = 1, 0 === a[i] && (t.enableVertexAttribArray(i), a[i] = 1), o[i] !== r) {
        (n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), o[i] = r;
    } } function v() { const e = c.newAttributes, i = c.enabledAttributes; for (let n = 0, r = i.length; n < r; n++)
        i[n] !== e[n] && (t.disableVertexAttribArray(n), i[n] = 0); } function x(e, i, r, s, a, o) { !0 !== n.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, i, r, s, a, o) : t.vertexAttribIPointer(e, i, r, a, o); } function _() { y(), h = !0, c !== l && (c = l, u(c.object)); } function y() { l.geometry = null, l.program = null, l.wireframe = !1; } return { setup: function (r, l, d, _, y) { let b = !1; if (a) {
            const e = function (e, i, r) { const a = !0 === r.wireframe; let l = o[e.id]; void 0 === l && (l = {}, o[e.id] = l); let c = l[i.id]; void 0 === c && (c = {}, l[i.id] = c); let h = c[a]; void 0 === h && (h = p(n.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), c[a] = h); return h; }(_, d, l);
            c !== e && (c = e, u(c.object)), b = function (t, e, i, n) { const r = c.attributes, s = e.attributes; let a = 0; const o = i.getAttributes(); for (const e in o) {
                if (o[e].location >= 0) {
                    const i = r[e];
                    let n = s[e];
                    if (void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (n = t.instanceColor)), void 0 === i)
                        return !0;
                    if (i.attribute !== n)
                        return !0;
                    if (n && i.data !== n.data)
                        return !0;
                    a++;
                }
            } return c.attributesNum !== a || c.index !== n; }(r, _, d, y), b && function (t, e, i, n) { const r = {}, s = e.attributes; let a = 0; const o = i.getAttributes(); for (const e in o) {
                if (o[e].location >= 0) {
                    let i = s[e];
                    void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (i = t.instanceColor));
                    const n = {};
                    n.attribute = i, i && i.data && (n.data = i.data), r[e] = n, a++;
                }
            } c.attributes = r, c.attributesNum = a, c.index = n; }(r, _, d, y);
        }
        else {
            const t = !0 === l.wireframe;
            c.geometry === _.id && c.program === d.id && c.wireframe === t || (c.geometry = _.id, c.program = d.id, c.wireframe = t, b = !0);
        } null !== y && i.update(y, 34963), (b || h) && (h = !1, function (r, s, a, o) { if (!1 === n.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays"))
            return; f(); const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues; for (const e in c) {
            const n = c[e];
            if (n.location >= 0) {
                let s = l[e];
                if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                    const e = s.normalized, a = s.itemSize, l = i.get(s);
                    if (void 0 === l)
                        continue;
                    const c = l.buffer, h = l.type, u = l.bytesPerElement;
                    if (s.isInterleavedBufferAttribute) {
                        const i = s.data, l = i.stride, d = s.offset;
                        if (i.isInstancedInterleavedBuffer) {
                            for (let t = 0; t < n.locationSize; t++)
                                g(n.location + t, i.meshPerAttribute);
                            !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count);
                        }
                        else
                            for (let t = 0; t < n.locationSize; t++)
                                m(n.location + t);
                        t.bindBuffer(34962, c);
                        for (let t = 0; t < n.locationSize; t++)
                            x(n.location + t, a / n.locationSize, h, e, l * u, (d + a / n.locationSize * t) * u);
                    }
                    else {
                        if (s.isInstancedBufferAttribute) {
                            for (let t = 0; t < n.locationSize; t++)
                                g(n.location + t, s.meshPerAttribute);
                            !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count);
                        }
                        else
                            for (let t = 0; t < n.locationSize; t++)
                                m(n.location + t);
                        t.bindBuffer(34962, c);
                        for (let t = 0; t < n.locationSize; t++)
                            x(n.location + t, a / n.locationSize, h, e, a * u, a / n.locationSize * t * u);
                    }
                }
                else if (void 0 !== h) {
                    const i = h[e];
                    if (void 0 !== i)
                        switch (i.length) {
                            case 2:
                                t.vertexAttrib2fv(n.location, i);
                                break;
                            case 3:
                                t.vertexAttrib3fv(n.location, i);
                                break;
                            case 4:
                                t.vertexAttrib4fv(n.location, i);
                                break;
                            default: t.vertexAttrib1fv(n.location, i);
                        }
                }
            }
        } v(); }(r, l, d, _), null !== y && t.bindBuffer(34963, i.get(y).buffer)); }, reset: _, resetDefaultState: y, dispose: function () { _(); for (const t in o) {
            const e = o[t];
            for (const t in e) {
                const i = e[t];
                for (const t in i)
                    d(i[t].object), delete i[t];
                delete e[t];
            }
            delete o[t];
        } }, releaseStatesOfGeometry: function (t) { if (void 0 === o[t.id])
            return; const e = o[t.id]; for (const t in e) {
            const i = e[t];
            for (const t in i)
                d(i[t].object), delete i[t];
            delete e[t];
        } delete o[t.id]; }, releaseStatesOfProgram: function (t) { for (const e in o) {
            const i = o[e];
            if (void 0 === i[t.id])
                continue;
            const n = i[t.id];
            for (const t in n)
                d(n[t].object), delete n[t];
            delete i[t.id];
        } }, initAttributes: f, enableAttribute: m, disableUnusedAttributes: v }; }
    function Us(t, e, i, n) { const r = n.isWebGL2; let s; this.setMode = function (t) { s = t; }, this.render = function (e, n) { t.drawArrays(s, e, n), i.update(n, s, 1); }, this.renderInstances = function (n, a, o) { if (0 === o)
        return; let l, c; if (r)
        l = t, c = "drawArraysInstanced";
    else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l)
        return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); l[c](s, n, a, o), i.update(a, s, o); }; }
    function ks(t, e, i) { let n; function r(e) { if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0)
            return "highp";
        e = "mediump";
    } return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"; } const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext; let a = void 0 !== i.precision ? i.precision : "highp"; const o = r(a); o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o); const l = s || e.has("WEBGL_draw_buffers"), c = !0 === i.logarithmicDepthBuffer, h = t.getParameter(34930), u = t.getParameter(35660), d = t.getParameter(3379), p = t.getParameter(34076), f = t.getParameter(34921), m = t.getParameter(36347), g = t.getParameter(36348), v = t.getParameter(36349), x = u > 0, _ = s || e.has("OES_texture_float"); return { isWebGL2: s, drawBuffers: l, getMaxAnisotropy: function () { if (void 0 !== n)
            return n; if (!0 === e.has("EXT_texture_filter_anisotropic")) {
            const i = e.get("EXT_texture_filter_anisotropic");
            n = t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        }
        else
            n = 0; return n; }, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: c, maxTextures: h, maxVertexTextures: u, maxTextureSize: d, maxCubemapSize: p, maxAttributes: f, maxVertexUniforms: m, maxVaryings: g, maxFragmentUniforms: v, vertexTextures: x, floatFragmentTextures: _, floatVertexTextures: x && _, maxSamples: s ? t.getParameter(36183) : 0 }; }
    function Bs(t) { const e = this; let i = null, n = 0, r = !1, s = !1; const a = new Ss, o = new Ii, l = { value: null, needsUpdate: !1 }; function c(t, i, n, r) { const s = null !== t ? t.length : 0; let c = null; if (0 !== s) {
        if (c = l.value, !0 !== r || null === c) {
            const e = n + 4 * s, r = i.matrixWorldInverse;
            o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
            for (let e = 0, i = n; e !== s; ++e, i += 4)
                a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(c, i), c[i + 3] = a.constant;
        }
        l.value = c, l.needsUpdate = !0;
    } return e.numPlanes = s, e.numIntersection = 0, c; } this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e) { const i = 0 !== t.length || e || 0 !== n || r; return r = e, n = t.length, i; }, this.beginShadows = function () { s = !0, c(null); }, this.endShadows = function () { s = !1; }, this.setGlobalState = function (t, e) { i = c(t, e, 0); }, this.setState = function (a, o, h) { const u = a.clippingPlanes, d = a.clipIntersection, p = a.clipShadows, f = t.get(a); if (!r || null === u || 0 === u.length || s && !p)
        s ? c(null) : function () { l.value !== i && (l.value = i, l.needsUpdate = n > 0); e.numPlanes = n, e.numIntersection = 0; }();
    else {
        const t = s ? 0 : n, e = 4 * t;
        let r = f.clippingState || null;
        l.value = r, r = c(u, o, e, h);
        for (let t = 0; t !== e; ++t)
            r[t] = i[t];
        f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t;
    } }; }
    function Fs(t) { let e = new WeakMap; function i(t, e) { return e === at ? t.mapping = rt : e === ot && (t.mapping = st), t; } function n(t) { const i = t.target; i.removeEventListener("dispose", n); const r = e.get(i); void 0 !== r && (e.delete(i), r.dispose()); } return { get: function (r) { if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
            const s = r.mapping;
            if (s === at || s === ot) {
                if (e.has(r)) {
                    return i(e.get(r).texture, r.mapping);
                }
                {
                    const s = r.image;
                    if (s && s.height > 0) {
                        const a = new ys(s.height / 2);
                        return a.fromEquirectangularTexture(t, r), e.set(r, a), r.addEventListener("dispose", n), i(a.texture, r.mapping);
                    }
                    return null;
                }
            }
        } return r; }, dispose: function () { e = new WeakMap; } }; }
    class Gs extends ms {
        constructor(t = -1, e = 1, i = 1, n = -1, r = .1, s = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = r, this.far = s, this.updateProjectionMatrix(); }
        copy(t, e) { return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this; }
        setViewOffset(t, e, i, n, r, s) { null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix(); }
        clearViewOffset() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix(); }
        updateProjectionMatrix() { const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2; let r = i - t, s = i + t, a = n + e, o = n - e; if (null !== this.view && this.view.enabled) {
            const t = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height;
        } this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert(); }
        toJSON(t) { const e = super.toJSON(t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e; }
    }
    const Vs = [.125, .215, .35, .446, .526, .582], Hs = 20, Ws = new Gs, js = new Zi;
    let qs = null;
    const Xs = (1 + Math.sqrt(5)) / 2, Ys = 1 / Xs, Zs = [new un(1, 1, 1), new un(-1, 1, 1), new un(1, 1, -1), new un(-1, 1, -1), new un(0, Xs, Ys), new un(0, Xs, -Ys), new un(Ys, 0, Xs), new un(-Ys, 0, Xs), new un(Xs, Ys, 0), new un(-Xs, Ys, 0)];
    class Js {
        constructor(t) { this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial); }
        fromScene(t, e = 0, i = .1, n = 100) { qs = this._renderer.getRenderTarget(), this._setSize(256); const r = this._allocateTargets(); return r.depthBuffer = !0, this._sceneToCubeUV(t, i, n, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r; }
        fromEquirectangular(t, e = null) { return this._fromTexture(t, e); }
        fromCubemap(t, e = null) { return this._fromTexture(t, e); }
        compileCubemapShader() { null === this._cubemapMaterial && (this._cubemapMaterial = ta(), this._compileMaterial(this._cubemapMaterial)); }
        compileEquirectangularShader() { null === this._equirectMaterial && (this._equirectMaterial = Qs(), this._compileMaterial(this._equirectMaterial)); }
        dispose() { this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose(); }
        _setSize(t) { this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax); }
        _dispose() { null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose(); for (let t = 0; t < this._lodPlanes.length; t++)
            this._lodPlanes[t].dispose(); }
        _cleanup(t) { this._renderer.setRenderTarget(qs), t.scissorTest = !1, $s(t, 0, 0, t.width, t.height); }
        _fromTexture(t, e) { t.mapping === rt || t.mapping === st ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), qs = this._renderer.getRenderTarget(); const i = e || this._allocateTargets(); return this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i; }
        _allocateTargets() { const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, i = { magFilter: vt, minFilter: vt, generateMipmaps: !1, type: Lt, format: Ot, encoding: Oe, depthBuffer: !1 }, n = Ks(t, e, i); if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
            null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Ks(t, e, i);
            const { _lodMax: n } = this;
            ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function (t) { const e = [], i = [], n = []; let r = t; const s = t - 4 + 1 + Vs.length; for (let a = 0; a < s; a++) {
                const s = Math.pow(2, r);
                i.push(s);
                let o = 1 / s;
                a > t - 4 ? o = Vs[a - t + 4 - 1] : 0 === a && (o = 0), n.push(o);
                const l = 1 / (s - 2), c = -l, h = 1 + l, u = [c, c, h, c, h, h, c, c, h, h, c, h], d = 6, p = 6, f = 3, m = 2, g = 1, v = new Float32Array(f * p * d), x = new Float32Array(m * p * d), _ = new Float32Array(g * p * d);
                for (let t = 0; t < d; t++) {
                    const e = t % 3 * 2 / 3 - 1, i = t > 2 ? 0 : -1, n = [e, i, 0, e + 2 / 3, i, 0, e + 2 / 3, i + 1, 0, e, i, 0, e + 2 / 3, i + 1, 0, e, i + 1, 0];
                    v.set(n, f * p * t), x.set(u, m * p * t);
                    const r = [t, t, t, t, t, t];
                    _.set(r, g * p * t);
                }
                const y = new Xr;
                y.setAttribute("position", new Lr(v, f)), y.setAttribute("uv", new Lr(x, m)), y.setAttribute("faceIndex", new Lr(_, g)), e.push(y), r > 4 && r--;
            } return { lodPlanes: e, sizeLods: i, sigmas: n }; }(n)), this._blurMaterial = function (t, e, i) { const n = new Float32Array(Hs), r = new un(0, 1, 0), s = new fs({ name: "SphericalGaussianBlur", defines: { n: Hs, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / i, CUBEUV_MAX_MIP: `${t}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ea(), fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t", blending: x, depthTest: !1, depthWrite: !1 }); return s; }(n, t, e);
        } return n; }
        _compileMaterial(t) { const e = new os(this._lodPlanes[0], t); this._renderer.compile(e, Ws); }
        _sceneToCubeUV(t, e, i, n) { const r = new gs(90, 1, e, i), s = [1, -1, 1, 1, 1, 1], a = [1, 1, 1, -1, -1, -1], o = this._renderer, l = o.autoClear, c = o.toneMapping; o.getClearColor(js), o.toneMapping = K, o.autoClear = !1; const h = new Er({ name: "PMREM.Background", side: m, depthWrite: !1, depthTest: !1 }), u = new os(new cs, h); let d = !1; const p = t.background; p ? p.isColor && (h.color.copy(p), t.background = null, d = !0) : (h.color.copy(js), d = !0); for (let e = 0; e < 6; e++) {
            const i = e % 3;
            0 === i ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 === i ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e]));
            const l = this._cubeSize;
            $s(n, i * l, e > 2 ? l : 0, l, l), o.setRenderTarget(n), d && o.render(u, r), o.render(t, r);
        } u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t.background = p; }
        _textureToCubeUV(t, e) { const i = this._renderer, n = t.mapping === rt || t.mapping === st; n ? (null === this._cubemapMaterial && (this._cubemapMaterial = ta()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Qs()); const r = n ? this._cubemapMaterial : this._equirectMaterial, s = new os(this._lodPlanes[0], r); r.uniforms.envMap.value = t; const a = this._cubeSize; $s(e, 0, 0, 3 * a, 2 * a), i.setRenderTarget(e), i.render(s, Ws); }
        _applyPMREM(t) { const e = this._renderer, i = e.autoClear; e.autoClear = !1; for (let e = 1; e < this._lodPlanes.length; e++) {
            const i = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]), n = Zs[(e - 1) % Zs.length];
            this._blur(t, e - 1, e, i, n);
        } e.autoClear = i; }
        _blur(t, e, i, n, r) { const s = this._pingPongRenderTarget; this._halfBlur(t, s, e, i, n, "latitudinal", r), this._halfBlur(s, t, i, i, n, "longitudinal", r); }
        _halfBlur(t, e, i, n, r, s, a) { const o = this._renderer, l = this._blurMaterial; "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!"); const c = new os(this._lodPlanes[n], l), h = l.uniforms, u = this._sizeLods[i] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, f = isFinite(r) ? 1 + Math.floor(3 * p) : Hs; f > Hs && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`); const m = []; let g = 0; for (let t = 0; t < Hs; ++t) {
            const e = t / p, i = Math.exp(-e * e / 2);
            m.push(i), 0 === t ? g += i : t < f && (g += 2 * i);
        } for (let t = 0; t < m.length; t++)
            m[t] = m[t] / g; h.envMap.value = t.texture, h.samples.value = f, h.weights.value = m, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a); const { _lodMax: v } = this; h.dTheta.value = d, h.mipInt.value = v - i; const x = this._sizeLods[n]; $s(e, 3 * x * (n > v - 4 ? n - v + 4 : 0), 4 * (this._cubeSize - x), 3 * x, 2 * x), o.setRenderTarget(e), o.render(c, Ws); }
    }
    function Ks(t, e, i) { const n = new rn(t, e, i); return n.texture.mapping = lt, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n; }
    function $s(t, e, i, n, r) { t.viewport.set(e, i, n, r), t.scissor.set(e, i, n, r); }
    function Qs() { return new fs({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ea(), fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t", blending: x, depthTest: !1, depthWrite: !1 }); }
    function ta() { return new fs({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ea(), fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t", blending: x, depthTest: !1, depthWrite: !1 }); }
    function ea() { return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"; }
    function ia(t) { let e = new WeakMap, i = null; function n(t) { const i = t.target; i.removeEventListener("dispose", n); const r = e.get(i); void 0 !== r && (e.delete(i), r.dispose()); } return { get: function (r) { if (r && r.isTexture) {
            const s = r.mapping, a = s === at || s === ot, o = s === rt || s === st;
            if (a || o) {
                if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                    r.needsPMREMUpdate = !1;
                    let n = e.get(r);
                    return null === i && (i = new Js(t)), n = a ? i.fromEquirectangular(r, n) : i.fromCubemap(r, n), e.set(r, n), n.texture;
                }
                if (e.has(r))
                    return e.get(r).texture;
                {
                    const s = r.image;
                    if (a && s && s.height > 0 || o && s && function (t) { let e = 0; const i = 6; for (let n = 0; n < i; n++)
                        void 0 !== t[n] && e++; return e === i; }(s)) {
                        null === i && (i = new Js(t));
                        const s = a ? i.fromEquirectangular(r) : i.fromCubemap(r);
                        return e.set(r, s), r.addEventListener("dispose", n), s.texture;
                    }
                    return null;
                }
            }
        } return r; }, dispose: function () { e = new WeakMap, null !== i && (i.dispose(), i = null); } }; }
    function na(t) { const e = {}; function i(i) { if (void 0 !== e[i])
        return e[i]; let n; switch (i) {
        case "WEBGL_depth_texture":
            n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default: n = t.getExtension(i);
    } return e[i] = n, n; } return { has: function (t) { return null !== i(t); }, init: function (t) { t.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture"); }, get: function (t) { const e = i(t); return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e; } }; }
    function ra(t, e, i, n) { const r = {}, s = new WeakMap; function a(t) { const o = t.target; null !== o.index && e.remove(o.index); for (const t in o.attributes)
        e.remove(o.attributes[t]); o.removeEventListener("dispose", a), delete r[o.id]; const l = s.get(o); l && (e.remove(l), s.delete(o)), n.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i.memory.geometries--; } function o(t) { const i = [], n = t.index, r = t.attributes.position; let a = 0; if (null !== n) {
        const t = n.array;
        a = n.version;
        for (let e = 0, n = t.length; e < n; e += 3) {
            const n = t[e + 0], r = t[e + 1], s = t[e + 2];
            i.push(n, r, r, s, s, n);
        }
    }
    else {
        const t = r.array;
        a = r.version;
        for (let e = 0, n = t.length / 3 - 1; e < n; e += 3) {
            const t = e + 0, n = e + 1, r = e + 2;
            i.push(t, n, n, r, r, t);
        }
    } const o = new (zi(i) ? Nr : Or)(i, 1); o.version = a; const l = s.get(t); l && e.remove(l), s.set(t, o); } return { get: function (t, e) { return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, i.memory.geometries++), e; }, update: function (t) { const i = t.attributes; for (const t in i)
            e.update(i[t], 34962); const n = t.morphAttributes; for (const t in n) {
            const i = n[t];
            for (let t = 0, n = i.length; t < n; t++)
                e.update(i[t], 34962);
        } }, getWireframeAttribute: function (t) { const e = s.get(t); if (e) {
            const i = t.index;
            null !== i && e.version < i.version && o(t);
        }
        else
            o(t); return s.get(t); } }; }
    function sa(t, e, i, n) { const r = n.isWebGL2; let s, a, o; this.setMode = function (t) { s = t; }, this.setIndex = function (t) { a = t.type, o = t.bytesPerElement; }, this.render = function (e, n) { t.drawElements(s, n, a, e * o), i.update(n, s, 1); }, this.renderInstances = function (n, l, c) { if (0 === c)
        return; let h, u; if (r)
        h = t, u = "drawElementsInstanced";
    else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h)
        return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); h[u](s, l, a, n * o, c), i.update(l, s, c); }; }
    function aa(t) { const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: !0, reset: function () { e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0; }, update: function (t, i, n) { switch (e.calls++, i) {
            case 4:
                e.triangles += n * (t / 3);
                break;
            case 1:
                e.lines += n * (t / 2);
                break;
            case 3:
                e.lines += n * (t - 1);
                break;
            case 2:
                e.lines += n * t;
                break;
            case 0:
                e.points += n * t;
                break;
            default: console.error("THREE.WebGLInfo: Unknown draw mode:", i);
        } } }; }
    function oa(t, e) { return t[0] - e[0]; }
    function la(t, e) { return Math.abs(e[1]) - Math.abs(t[1]); }
    function ca(t, e, i) { const n = {}, r = new Float32Array(8), s = new WeakMap, a = new nn, o = []; for (let t = 0; t < 8; t++)
        o[t] = [t, 0]; return { update: function (l, c, h, u) { const d = l.morphTargetInfluences; if (!0 === e.isWebGL2) {
            const n = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, r = void 0 !== n ? n.length : 0;
            let o = s.get(c);
            if (void 0 === o || o.count !== r) {
                void 0 !== o && o.texture.dispose();
                const t = void 0 !== c.morphAttributes.position, i = void 0 !== c.morphAttributes.normal, n = void 0 !== c.morphAttributes.color, l = c.morphAttributes.position || [], h = c.morphAttributes.normal || [], u = c.morphAttributes.color || [];
                let d = 0;
                !0 === t && (d = 1), !0 === i && (d = 2), !0 === n && (d = 3);
                let p = c.attributes.position.count * d, f = 1;
                p > e.maxTextureSize && (f = Math.ceil(p / e.maxTextureSize), p = e.maxTextureSize);
                const m = new Float32Array(p * f * 4 * r), g = new sn(m, p, f, r);
                g.type = Ct, g.needsUpdate = !0;
                const v = 4 * d;
                for (let e = 0; e < r; e++) {
                    const r = l[e], s = h[e], o = u[e], c = p * f * 4 * e;
                    for (let e = 0; e < r.count; e++) {
                        const l = e * v;
                        !0 === t && (a.fromBufferAttribute(r, e), m[c + l + 0] = a.x, m[c + l + 1] = a.y, m[c + l + 2] = a.z, m[c + l + 3] = 0), !0 === i && (a.fromBufferAttribute(s, e), m[c + l + 4] = a.x, m[c + l + 5] = a.y, m[c + l + 6] = a.z, m[c + l + 7] = 0), !0 === n && (a.fromBufferAttribute(o, e), m[c + l + 8] = a.x, m[c + l + 9] = a.y, m[c + l + 10] = a.z, m[c + l + 11] = 4 === o.itemSize ? a.w : 1);
                    }
                }
                o = { count: r, texture: g, size: new Di(p, f) }, s.set(c, o), c.addEventListener("dispose", (function t() { g.dispose(), s.delete(c), c.removeEventListener("dispose", t); }));
            }
            let l = 0;
            for (let t = 0; t < d.length; t++)
                l += d[t];
            const h = c.morphTargetsRelative ? 1 : 1 - l;
            u.getUniforms().setValue(t, "morphTargetBaseInfluence", h), u.getUniforms().setValue(t, "morphTargetInfluences", d), u.getUniforms().setValue(t, "morphTargetsTexture", o.texture, i), u.getUniforms().setValue(t, "morphTargetsTextureSize", o.size);
        }
        else {
            const e = void 0 === d ? 0 : d.length;
            let i = n[c.id];
            if (void 0 === i || i.length !== e) {
                i = [];
                for (let t = 0; t < e; t++)
                    i[t] = [t, 0];
                n[c.id] = i;
            }
            for (let t = 0; t < e; t++) {
                const e = i[t];
                e[0] = t, e[1] = d[t];
            }
            i.sort(la);
            for (let t = 0; t < 8; t++)
                t < e && i[t][1] ? (o[t][0] = i[t][0], o[t][1] = i[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER, o[t][1] = 0);
            o.sort(oa);
            const s = c.morphAttributes.position, a = c.morphAttributes.normal;
            let l = 0;
            for (let t = 0; t < 8; t++) {
                const e = o[t], i = e[0], n = e[1];
                i !== Number.MAX_SAFE_INTEGER && n ? (s && c.getAttribute("morphTarget" + t) !== s[i] && c.setAttribute("morphTarget" + t, s[i]), a && c.getAttribute("morphNormal" + t) !== a[i] && c.setAttribute("morphNormal" + t, a[i]), r[t] = n, l += n) : (s && !0 === c.hasAttribute("morphTarget" + t) && c.deleteAttribute("morphTarget" + t), a && !0 === c.hasAttribute("morphNormal" + t) && c.deleteAttribute("morphNormal" + t), r[t] = 0);
            }
            const h = c.morphTargetsRelative ? 1 : 1 - l;
            u.getUniforms().setValue(t, "morphTargetBaseInfluence", h), u.getUniforms().setValue(t, "morphTargetInfluences", r);
        } } }; }
    function ha(t, e, i, n) { let r = new WeakMap; function s(t) { const e = t.target; e.removeEventListener("dispose", s), i.remove(e.instanceMatrix), null !== e.instanceColor && i.remove(e.instanceColor); } return { update: function (t) { const a = n.render.frame, o = t.geometry, l = e.get(t, o); return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), i.update(t.instanceMatrix, 34962), null !== t.instanceColor && i.update(t.instanceColor, 34962)), l; }, dispose: function () { r = new WeakMap; } }; }
    const ua = new en, da = new sn, pa = new on, fa = new _s, ma = [], ga = [], va = new Float32Array(16), xa = new Float32Array(9), _a = new Float32Array(4);
    function ya(t, e, i) { const n = t[0]; if (n <= 0 || n > 0)
        return t; const r = e * i; let s = ma[r]; if (void 0 === s && (s = new Float32Array(r), ma[r] = s), 0 !== e) {
        n.toArray(s, 0);
        for (let n = 1, r = 0; n !== e; ++n)
            r += i, t[n].toArray(s, r);
    } return s; }
    function ba(t, e) { if (t.length !== e.length)
        return !1; for (let i = 0, n = t.length; i < n; i++)
        if (t[i] !== e[i])
            return !1; return !0; }
    function Ma(t, e) { for (let i = 0, n = e.length; i < n; i++)
        t[i] = e[i]; }
    function wa(t, e) { let i = ga[e]; void 0 === i && (i = new Int32Array(e), ga[e] = i); for (let n = 0; n !== e; ++n)
        i[n] = t.allocateTextureUnit(); return i; }
    function Sa(t, e) { const i = this.cache; i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e); }
    function Ta(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
    else {
        if (ba(i, e))
            return;
        t.uniform2fv(this.addr, e), Ma(i, e);
    } }
    function Ea(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
    else if (void 0 !== e.r)
        i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
    else {
        if (ba(i, e))
            return;
        t.uniform3fv(this.addr, e), Ma(i, e);
    } }
    function Aa(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
    else {
        if (ba(i, e))
            return;
        t.uniform4fv(this.addr, e), Ma(i, e);
    } }
    function Ca(t, e) { const i = this.cache, n = e.elements; if (void 0 === n) {
        if (ba(i, e))
            return;
        t.uniformMatrix2fv(this.addr, !1, e), Ma(i, e);
    }
    else {
        if (ba(i, n))
            return;
        _a.set(n), t.uniformMatrix2fv(this.addr, !1, _a), Ma(i, n);
    } }
    function La(t, e) { const i = this.cache, n = e.elements; if (void 0 === n) {
        if (ba(i, e))
            return;
        t.uniformMatrix3fv(this.addr, !1, e), Ma(i, e);
    }
    else {
        if (ba(i, n))
            return;
        xa.set(n), t.uniformMatrix3fv(this.addr, !1, xa), Ma(i, n);
    } }
    function Pa(t, e) { const i = this.cache, n = e.elements; if (void 0 === n) {
        if (ba(i, e))
            return;
        t.uniformMatrix4fv(this.addr, !1, e), Ma(i, e);
    }
    else {
        if (ba(i, n))
            return;
        va.set(n), t.uniformMatrix4fv(this.addr, !1, va), Ma(i, n);
    } }
    function Ra(t, e) { const i = this.cache; i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e); }
    function Da(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y || (t.uniform2i(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
    else {
        if (ba(i, e))
            return;
        t.uniform2iv(this.addr, e), Ma(i, e);
    } }
    function Ia(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3i(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
    else {
        if (ba(i, e))
            return;
        t.uniform3iv(this.addr, e), Ma(i, e);
    } }
    function Oa(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4i(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
    else {
        if (ba(i, e))
            return;
        t.uniform4iv(this.addr, e), Ma(i, e);
    } }
    function za(t, e) { const i = this.cache; i[0] !== e && (t.uniform1ui(this.addr, e), i[0] = e); }
    function Na(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y || (t.uniform2ui(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
    else {
        if (ba(i, e))
            return;
        t.uniform2uiv(this.addr, e), Ma(i, e);
    } }
    function Ua(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3ui(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
    else {
        if (ba(i, e))
            return;
        t.uniform3uiv(this.addr, e), Ma(i, e);
    } }
    function ka(t, e) { const i = this.cache; if (void 0 !== e.x)
        i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
    else {
        if (ba(i, e))
            return;
        t.uniform4uiv(this.addr, e), Ma(i, e);
    } }
    function Ba(t, e, i) { const n = this.cache, r = i.allocateTextureUnit(); n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || ua, r); }
    function Fa(t, e, i) { const n = this.cache, r = i.allocateTextureUnit(); n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || pa, r); }
    function Ga(t, e, i) { const n = this.cache, r = i.allocateTextureUnit(); n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || fa, r); }
    function Va(t, e, i) { const n = this.cache, r = i.allocateTextureUnit(); n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(e || da, r); }
    function Ha(t, e) { t.uniform1fv(this.addr, e); }
    function Wa(t, e) { const i = ya(e, this.size, 2); t.uniform2fv(this.addr, i); }
    function ja(t, e) { const i = ya(e, this.size, 3); t.uniform3fv(this.addr, i); }
    function qa(t, e) { const i = ya(e, this.size, 4); t.uniform4fv(this.addr, i); }
    function Xa(t, e) { const i = ya(e, this.size, 4); t.uniformMatrix2fv(this.addr, !1, i); }
    function Ya(t, e) { const i = ya(e, this.size, 9); t.uniformMatrix3fv(this.addr, !1, i); }
    function Za(t, e) { const i = ya(e, this.size, 16); t.uniformMatrix4fv(this.addr, !1, i); }
    function Ja(t, e) { t.uniform1iv(this.addr, e); }
    function Ka(t, e) { t.uniform2iv(this.addr, e); }
    function $a(t, e) { t.uniform3iv(this.addr, e); }
    function Qa(t, e) { t.uniform4iv(this.addr, e); }
    function to(t, e) { t.uniform1uiv(this.addr, e); }
    function eo(t, e) { t.uniform2uiv(this.addr, e); }
    function io(t, e) { t.uniform3uiv(this.addr, e); }
    function no(t, e) { t.uniform4uiv(this.addr, e); }
    function ro(t, e, i) { const n = this.cache, r = e.length, s = wa(i, r); ba(n, s) || (t.uniform1iv(this.addr, s), Ma(n, s)); for (let t = 0; t !== r; ++t)
        i.setTexture2D(e[t] || ua, s[t]); }
    function so(t, e, i) { const n = this.cache, r = e.length, s = wa(i, r); ba(n, s) || (t.uniform1iv(this.addr, s), Ma(n, s)); for (let t = 0; t !== r; ++t)
        i.setTexture3D(e[t] || pa, s[t]); }
    function ao(t, e, i) { const n = this.cache, r = e.length, s = wa(i, r); ba(n, s) || (t.uniform1iv(this.addr, s), Ma(n, s)); for (let t = 0; t !== r; ++t)
        i.setTextureCube(e[t] || fa, s[t]); }
    function oo(t, e, i) { const n = this.cache, r = e.length, s = wa(i, r); ba(n, s) || (t.uniform1iv(this.addr, s), Ma(n, s)); for (let t = 0; t !== r; ++t)
        i.setTexture2DArray(e[t] || da, s[t]); }
    class lo {
        constructor(t, e, i) { this.id = t, this.addr = i, this.cache = [], this.setValue = function (t) { switch (t) {
            case 5126: return Sa;
            case 35664: return Ta;
            case 35665: return Ea;
            case 35666: return Aa;
            case 35674: return Ca;
            case 35675: return La;
            case 35676: return Pa;
            case 5124:
            case 35670: return Ra;
            case 35667:
            case 35671: return Da;
            case 35668:
            case 35672: return Ia;
            case 35669:
            case 35673: return Oa;
            case 5125: return za;
            case 36294: return Na;
            case 36295: return Ua;
            case 36296: return ka;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682: return Ba;
            case 35679:
            case 36299:
            case 36307: return Fa;
            case 35680:
            case 36300:
            case 36308:
            case 36293: return Ga;
            case 36289:
            case 36303:
            case 36311:
            case 36292: return Va;
        } }(e.type); }
    }
    class co {
        constructor(t, e, i) { this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function (t) { switch (t) {
            case 5126: return Ha;
            case 35664: return Wa;
            case 35665: return ja;
            case 35666: return qa;
            case 35674: return Xa;
            case 35675: return Ya;
            case 35676: return Za;
            case 5124:
            case 35670: return Ja;
            case 35667:
            case 35671: return Ka;
            case 35668:
            case 35672: return $a;
            case 35669:
            case 35673: return Qa;
            case 5125: return to;
            case 36294: return eo;
            case 36295: return io;
            case 36296: return no;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682: return ro;
            case 35679:
            case 36299:
            case 36307: return so;
            case 35680:
            case 36300:
            case 36308:
            case 36293: return ao;
            case 36289:
            case 36303:
            case 36311:
            case 36292: return oo;
        } }(e.type); }
    }
    class ho {
        constructor(t) { this.id = t, this.seq = [], this.map = {}; }
        setValue(t, e, i) { const n = this.seq; for (let r = 0, s = n.length; r !== s; ++r) {
            const s = n[r];
            s.setValue(t, e[s.id], i);
        } }
    }
    const uo = /(\w+)(\])?(\[|\.)?/g;
    function po(t, e) { t.seq.push(e), t.map[e.id] = e; }
    function fo(t, e, i) { const n = t.name, r = n.length; for (uo.lastIndex = 0;;) {
        const s = uo.exec(n), a = uo.lastIndex;
        let o = s[1];
        const l = "]" === s[2], c = s[3];
        if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
            po(i, void 0 === c ? new lo(o, t, e) : new co(o, t, e));
            break;
        }
        {
            let t = i.map[o];
            void 0 === t && (t = new ho(o), po(i, t)), i = t;
        }
    } }
    class mo {
        constructor(t, e) { this.seq = [], this.map = {}; const i = t.getProgramParameter(e, 35718); for (let n = 0; n < i; ++n) {
            const i = t.getActiveUniform(e, n);
            fo(i, t.getUniformLocation(e, i.name), this);
        } }
        setValue(t, e, i, n) { const r = this.map[e]; void 0 !== r && r.setValue(t, i, n); }
        setOptional(t, e, i) { const n = e[i]; void 0 !== n && this.setValue(t, i, n); }
        static upload(t, e, i, n) { for (let r = 0, s = e.length; r !== s; ++r) {
            const s = e[r], a = i[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, n);
        } }
        static seqWithValue(t, e) { const i = []; for (let n = 0, r = t.length; n !== r; ++n) {
            const r = t[n];
            r.id in e && i.push(r);
        } return i; }
    }
    function go(t, e, i) { const n = t.createShader(e); return t.shaderSource(n, i), t.compileShader(n), n; }
    let vo = 0;
    function xo(t, e, i) { const n = t.getShaderParameter(e, 35713), r = t.getShaderInfoLog(e).trim(); if (n && "" === r)
        return ""; const s = /ERROR: 0:(\d+)/.exec(r); if (s) {
        const n = parseInt(s[1]);
        return i.toUpperCase() + "\n\n" + r + "\n\n" + function (t, e) { const i = t.split("\n"), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, i.length); for (let t = r; t < s; t++) {
            const r = t + 1;
            n.push(`${r === e ? ">" : " "} ${r}: ${i[t]}`);
        } return n.join("\n"); }(t.getShaderSource(e), n);
    } return r; }
    function _o(t, e) { const i = function (t) { switch (t) {
        case Oe: return ["Linear", "( value )"];
        case ze: return ["sRGB", "( value )"];
        default: return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
    } }(e); return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"; }
    function yo(t, e) { let i; switch (e) {
        case $:
            i = "Linear";
            break;
        case Q:
            i = "Reinhard";
            break;
        case tt:
            i = "OptimizedCineon";
            break;
        case et:
            i = "ACESFilmic";
            break;
        case it:
            i = "Custom";
            break;
        default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), i = "Linear";
    } return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"; }
    function bo(t) { return "" !== t; }
    function Mo(t, e) { const i = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows); }
    function wo(t, e) { return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection); }
    const So = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function To(t) { return t.replace(So, Eo); }
    function Eo(t, e) { const i = Rs[e]; if (void 0 === i)
        throw new Error("Can not resolve #include <" + e + ">"); return To(i); }
    const Ao = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function Co(t) { return t.replace(Ao, Lo); }
    function Lo(t, e, i, n) { let r = ""; for (let t = parseInt(e); t < parseInt(i); t++)
        r += n.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t); return r; }
    function Po(t) { let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;"; return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e; }
    function Ro(t, e, i, n) { const r = t.getContext(), s = i.defines; let a = i.vertexShader, o = i.fragmentShader; const l = function (t) { let e = "SHADOWMAP_TYPE_BASIC"; return t.shadowMapType === u ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === d ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === p && (e = "SHADOWMAP_TYPE_VSM"), e; }(i), c = function (t) { let e = "ENVMAP_TYPE_CUBE"; if (t.envMap)
        switch (t.envMapMode) {
            case rt:
            case st:
                e = "ENVMAP_TYPE_CUBE";
                break;
            case lt: e = "ENVMAP_TYPE_CUBE_UV";
        } return e; }(i), h = function (t) { let e = "ENVMAP_MODE_REFLECTION"; t.envMap && t.envMapMode === st && (e = "ENVMAP_MODE_REFRACTION"); return e; }(i), f = function (t) { let e = "ENVMAP_BLENDING_NONE"; if (t.envMap)
        switch (t.combine) {
            case Y:
                e = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case Z:
                e = "ENVMAP_BLENDING_MIX";
                break;
            case J: e = "ENVMAP_BLENDING_ADD";
        } return e; }(i), m = function (t) { const e = t.envMapCubeUVHeight; if (null === e)
        return null; const i = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)), texelHeight: n, maxMip: i }; }(i), g = i.isWebGL2 ? "" : function (t) { return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(bo).join("\n"); }(i), v = function (t) { const e = []; for (const i in t) {
        const n = t[i];
        !1 !== n && e.push("#define " + i + " " + n);
    } return e.join("\n"); }(s), x = r.createProgram(); let _, y, b = i.glslVersion ? "#version " + i.glslVersion + "\n" : ""; i.isRawShaderMaterial ? (_ = [v].filter(bo).join("\n"), _.length > 0 && (_ += "\n"), y = [g, v].filter(bo).join("\n"), y.length > 0 && (y += "\n")) : (_ = [Po(i), "#define SHADER_NAME " + i.shaderName, v, i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + h : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.morphColors && i.isWebGL2 ? "#define USE_MORPHCOLORS" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(bo).join("\n"), y = [g, Po(i), "#define SHADER_NAME " + i.shaderName, v, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + c : "", i.envMap ? "#define " + h : "", i.envMap ? "#define " + f : "", m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "", m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "", m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoat ? "#define USE_CLEARCOAT" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescence ? "#define USE_IRIDESCENCE" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.alphaTest ? "#define USE_ALPHATEST" : "", i.sheen ? "#define USE_SHEEN" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", i.toneMapping !== K ? "#define TONE_MAPPING" : "", i.toneMapping !== K ? Rs.tonemapping_pars_fragment : "", i.toneMapping !== K ? yo("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", i.opaque ? "#define OPAQUE" : "", Rs.encodings_pars_fragment, _o("linearToOutputTexel", i.outputEncoding), i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(bo).join("\n")), a = To(a), a = Mo(a, i), a = wo(a, i), o = To(o), o = Mo(o, i), o = wo(o, i), a = Co(a), o = Co(o), i.isWebGL2 && !0 !== i.isRawShaderMaterial && (b = "#version 300 es\n", _ = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _, y = ["#define varying in", i.glslVersion === mi ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", i.glslVersion === mi ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y); const M = b + y + o, w = go(r, 35633, b + _ + a), S = go(r, 35632, M); if (r.attachShader(x, w), r.attachShader(x, S), void 0 !== i.index0AttributeName ? r.bindAttribLocation(x, 0, i.index0AttributeName) : !0 === i.morphTargets && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), t.debug.checkShaderErrors) {
        const t = r.getProgramInfoLog(x).trim(), e = r.getShaderInfoLog(w).trim(), i = r.getShaderInfoLog(S).trim();
        let n = !0, s = !0;
        if (!1 === r.getProgramParameter(x, 35714)) {
            n = !1;
            const e = xo(r, w, "vertex"), i = xo(r, S, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + i);
        }
        else
            "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== i || (s = !1);
        s && (this.diagnostics = { runnable: n, programLog: t, vertexShader: { log: e, prefix: _ }, fragmentShader: { log: i, prefix: y } });
    } let T, E; return r.deleteShader(w), r.deleteShader(S), this.getUniforms = function () { return void 0 === T && (T = new mo(r, x)), T; }, this.getAttributes = function () { return void 0 === E && (E = function (t, e) { const i = {}, n = t.getProgramParameter(e, 35721); for (let r = 0; r < n; r++) {
        const n = t.getActiveAttrib(e, r), s = n.name;
        let a = 1;
        35674 === n.type && (a = 2), 35675 === n.type && (a = 3), 35676 === n.type && (a = 4), i[s] = { type: n.type, location: t.getAttribLocation(e, s), locationSize: a };
    } return i; }(r, x)), E; }, this.destroy = function () { n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0; }, this.name = i.shaderName, this.id = vo++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = w, this.fragmentShader = S, this; }
    let Do = 0;
    class Io {
        constructor() { this.shaderCache = new Map, this.materialCache = new Map; }
        update(t) { const e = t.vertexShader, i = t.fragmentShader, n = this._getShaderStage(e), r = this._getShaderStage(i), s = this._getShaderCacheForMaterial(t); return !1 === s.has(n) && (s.add(n), n.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this; }
        remove(t) { const e = this.materialCache.get(t); for (const t of e)
            t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code); return this.materialCache.delete(t), this; }
        getVertexShaderID(t) { return this._getShaderStage(t.vertexShader).id; }
        getFragmentShaderID(t) { return this._getShaderStage(t.fragmentShader).id; }
        dispose() { this.shaderCache.clear(), this.materialCache.clear(); }
        _getShaderCacheForMaterial(t) { const e = this.materialCache; let i = e.get(t); return void 0 === i && (i = new Set, e.set(t, i)), i; }
        _getShaderStage(t) { const e = this.shaderCache; let i = e.get(t); return void 0 === i && (i = new Oo(t), e.set(t, i)), i; }
    }
    class Oo {
        constructor(t) { this.id = Do++, this.code = t, this.usedTimes = 0; }
    }
    function zo(t, e, i, n, r, s, a) { const o = new $n, l = new Io, c = [], h = r.isWebGL2, u = r.logarithmicDepthBuffer, d = r.vertexTextures; let p = r.precision; const f = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; return { getParameters: function (s, o, c, v, x) { const y = v.fog, b = x.geometry, M = s.isMeshStandardMaterial ? v.environment : null, w = (s.isMeshStandardMaterial ? i : e).get(s.envMap || M), S = w && w.mapping === lt ? w.image.height : null, T = f[s.type]; null !== s.precision && (p = r.getMaxPrecision(s.precision), p !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", p, "instead.")); const E = b.morphAttributes.position || b.morphAttributes.normal || b.morphAttributes.color, A = void 0 !== E ? E.length : 0; let C, L, P, R, D = 0; if (void 0 !== b.morphAttributes.position && (D = 1), void 0 !== b.morphAttributes.normal && (D = 2), void 0 !== b.morphAttributes.color && (D = 3), T) {
            const t = Is[T];
            C = t.vertexShader, L = t.fragmentShader;
        }
        else
            C = s.vertexShader, L = s.fragmentShader, l.update(s), P = l.getVertexShaderID(s), R = l.getFragmentShaderID(s); const I = t.getRenderTarget(), O = s.alphaTest > 0, z = s.clearcoat > 0, N = s.iridescence > 0; return { isWebGL2: h, shaderID: T, shaderName: s.type, vertexShader: C, fragmentShader: L, defines: s.defines, customVertexShaderID: P, customFragmentShaderID: R, isRawShaderMaterial: !0 === s.isRawShaderMaterial, glslVersion: s.glslVersion, precision: p, instancing: !0 === x.isInstancedMesh, instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor, supportsVertexTextures: d, outputEncoding: null === I ? t.outputEncoding : !0 === I.isXRRenderTarget ? I.texture.encoding : Oe, map: !!s.map, matcap: !!s.matcap, envMap: !!w, envMapMode: w && w.mapping, envMapCubeUVHeight: S, lightMap: !!s.lightMap, aoMap: !!s.aoMap, emissiveMap: !!s.emissiveMap, bumpMap: !!s.bumpMap, normalMap: !!s.normalMap, objectSpaceNormalMap: s.normalMapType === Be, tangentSpaceNormalMap: s.normalMapType === ke, decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === ze, clearcoat: z, clearcoatMap: z && !!s.clearcoatMap, clearcoatRoughnessMap: z && !!s.clearcoatRoughnessMap, clearcoatNormalMap: z && !!s.clearcoatNormalMap, iridescence: N, iridescenceMap: N && !!s.iridescenceMap, iridescenceThicknessMap: N && !!s.iridescenceThicknessMap, displacementMap: !!s.displacementMap, roughnessMap: !!s.roughnessMap, metalnessMap: !!s.metalnessMap, specularMap: !!s.specularMap, specularIntensityMap: !!s.specularIntensityMap, specularColorMap: !!s.specularColorMap, opaque: !1 === s.transparent && s.blending === _, alphaMap: !!s.alphaMap, alphaTest: O, gradientMap: !!s.gradientMap, sheen: s.sheen > 0, sheenColorMap: !!s.sheenColorMap, sheenRoughnessMap: !!s.sheenRoughnessMap, transmission: s.transmission > 0, transmissionMap: !!s.transmissionMap, thicknessMap: !!s.thicknessMap, combine: s.combine, vertexTangents: !!s.normalMap && !!b.attributes.tangent, vertexColors: s.vertexColors, vertexAlphas: !0 === s.vertexColors && !!b.attributes.color && 4 === b.attributes.color.itemSize, vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap), uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap), fog: !!y, useFog: !0 === s.fog, fogExp2: y && y.isFogExp2, flatShading: !!s.flatShading, sizeAttenuation: s.sizeAttenuation, logarithmicDepthBuffer: u, skinning: !0 === x.isSkinnedMesh, morphTargets: void 0 !== b.morphAttributes.position, morphNormals: void 0 !== b.morphAttributes.normal, morphColors: void 0 !== b.morphAttributes.color, morphTargetsCount: A, morphTextureStride: D, numDirLights: o.directional.length, numPointLights: o.point.length, numSpotLights: o.spot.length, numSpotLightMaps: o.spotLightMap.length, numRectAreaLights: o.rectArea.length, numHemiLights: o.hemi.length, numDirLightShadows: o.directionalShadowMap.length, numPointLightShadows: o.pointShadowMap.length, numSpotLightShadows: o.spotShadowMap.length, numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: s.dithering, shadowMapEnabled: t.shadowMap.enabled && c.length > 0, shadowMapType: t.shadowMap.type, toneMapping: s.toneMapped ? t.toneMapping : K, physicallyCorrectLights: t.physicallyCorrectLights, premultipliedAlpha: s.premultipliedAlpha, doubleSided: s.side === g, flipSided: s.side === m, useDepthPacking: !!s.depthPacking, depthPacking: s.depthPacking || 0, index0AttributeName: s.index0AttributeName, extensionDerivatives: s.extensions && s.extensions.derivatives, extensionFragDepth: s.extensions && s.extensions.fragDepth, extensionDrawBuffers: s.extensions && s.extensions.drawBuffers, extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD, rendererExtensionFragDepth: h || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"), customProgramCacheKey: s.customProgramCacheKey() }; }, getProgramCacheKey: function (e) { const i = []; if (e.shaderID ? i.push(e.shaderID) : (i.push(e.customVertexShaderID), i.push(e.customFragmentShaderID)), void 0 !== e.defines)
            for (const t in e.defines)
                i.push(t), i.push(e.defines[t]); return !1 === e.isRawShaderMaterial && (!function (t, e) { t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numSpotLightMaps), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.numSpotLightShadowsWithMaps), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking); }(i, e), function (t, e) { o.disableAll(), e.isWebGL2 && o.enable(0); e.supportsVertexTextures && o.enable(1); e.instancing && o.enable(2); e.instancingColor && o.enable(3); e.map && o.enable(4); e.matcap && o.enable(5); e.envMap && o.enable(6); e.lightMap && o.enable(7); e.aoMap && o.enable(8); e.emissiveMap && o.enable(9); e.bumpMap && o.enable(10); e.normalMap && o.enable(11); e.objectSpaceNormalMap && o.enable(12); e.tangentSpaceNormalMap && o.enable(13); e.clearcoat && o.enable(14); e.clearcoatMap && o.enable(15); e.clearcoatRoughnessMap && o.enable(16); e.clearcoatNormalMap && o.enable(17); e.iridescence && o.enable(18); e.iridescenceMap && o.enable(19); e.iridescenceThicknessMap && o.enable(20); e.displacementMap && o.enable(21); e.specularMap && o.enable(22); e.roughnessMap && o.enable(23); e.metalnessMap && o.enable(24); e.gradientMap && o.enable(25); e.alphaMap && o.enable(26); e.alphaTest && o.enable(27); e.vertexColors && o.enable(28); e.vertexAlphas && o.enable(29); e.vertexUvs && o.enable(30); e.vertexTangents && o.enable(31); e.uvsVertexOnly && o.enable(32); t.push(o.mask), o.disableAll(), e.fog && o.enable(0); e.useFog && o.enable(1); e.flatShading && o.enable(2); e.logarithmicDepthBuffer && o.enable(3); e.skinning && o.enable(4); e.morphTargets && o.enable(5); e.morphNormals && o.enable(6); e.morphColors && o.enable(7); e.premultipliedAlpha && o.enable(8); e.shadowMapEnabled && o.enable(9); e.physicallyCorrectLights && o.enable(10); e.doubleSided && o.enable(11); e.flipSided && o.enable(12); e.useDepthPacking && o.enable(13); e.dithering && o.enable(14); e.specularIntensityMap && o.enable(15); e.specularColorMap && o.enable(16); e.transmission && o.enable(17); e.transmissionMap && o.enable(18); e.thicknessMap && o.enable(19); e.sheen && o.enable(20); e.sheenColorMap && o.enable(21); e.sheenRoughnessMap && o.enable(22); e.decodeVideoTexture && o.enable(23); e.opaque && o.enable(24); t.push(o.mask); }(i, e), i.push(t.outputEncoding)), i.push(e.customProgramCacheKey), i.join(); }, getUniforms: function (t) { const e = f[t.type]; let i; if (e) {
            const t = Is[e];
            i = ps.clone(t.uniforms);
        }
        else
            i = t.uniforms; return i; }, acquireProgram: function (e, i) { let n; for (let t = 0, e = c.length; t < e; t++) {
            const e = c[t];
            if (e.cacheKey === i) {
                n = e, ++n.usedTimes;
                break;
            }
        } return void 0 === n && (n = new Ro(t, i, e, s), c.push(n)), n; }, releaseProgram: function (t) { if (0 == --t.usedTimes) {
            const e = c.indexOf(t);
            c[e] = c[c.length - 1], c.pop(), t.destroy();
        } }, releaseShaderCache: function (t) { l.remove(t); }, programs: c, dispose: function () { l.dispose(); } }; }
    function No() { let t = new WeakMap; return { get: function (e) { let i = t.get(e); return void 0 === i && (i = {}, t.set(e, i)), i; }, remove: function (e) { t.delete(e); }, update: function (e, i, n) { t.get(e)[i] = n; }, dispose: function () { t = new WeakMap; } }; }
    function Uo(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id; }
    function ko(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id; }
    function Bo() { const t = []; let e = 0; const i = [], n = [], r = []; function s(i, n, r, s, a, o) { let l = t[e]; return void 0 === l ? (l = { id: i.id, object: i, geometry: n, material: r, groupOrder: s, renderOrder: i.renderOrder, z: a, group: o }, t[e] = l) : (l.id = i.id, l.object = i, l.geometry = n, l.material = r, l.groupOrder = s, l.renderOrder = i.renderOrder, l.z = a, l.group = o), e++, l; } return { opaque: i, transmissive: n, transparent: r, init: function () { e = 0, i.length = 0, n.length = 0, r.length = 0; }, push: function (t, e, a, o, l, c) { const h = s(t, e, a, o, l, c); a.transmission > 0 ? n.push(h) : !0 === a.transparent ? r.push(h) : i.push(h); }, unshift: function (t, e, a, o, l, c) { const h = s(t, e, a, o, l, c); a.transmission > 0 ? n.unshift(h) : !0 === a.transparent ? r.unshift(h) : i.unshift(h); }, finish: function () { for (let i = e, n = t.length; i < n; i++) {
            const e = t[i];
            if (null === e.id)
                break;
            e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null;
        } }, sort: function (t, e) { i.length > 1 && i.sort(t || Uo), n.length > 1 && n.sort(e || ko), r.length > 1 && r.sort(e || ko); } }; }
    function Fo() { let t = new WeakMap; return { get: function (e, i) { const n = t.get(e); let r; return void 0 === n ? (r = new Bo, t.set(e, [r])) : i >= n.length ? (r = new Bo, n.push(r)) : r = n[i], r; }, dispose: function () { t = new WeakMap; } }; }
    function Go() { const t = {}; return { get: function (e) { if (void 0 !== t[e.id])
            return t[e.id]; let i; switch (e.type) {
            case "DirectionalLight":
                i = { direction: new un, color: new Zi };
                break;
            case "SpotLight":
                i = { position: new un, direction: new un, color: new Zi, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
                break;
            case "PointLight":
                i = { position: new un, color: new Zi, distance: 0, decay: 0 };
                break;
            case "HemisphereLight":
                i = { direction: new un, skyColor: new Zi, groundColor: new Zi };
                break;
            case "RectAreaLight": i = { color: new Zi, position: new un, halfWidth: new un, halfHeight: new un };
        } return t[e.id] = i, i; } }; }
    let Vo = 0;
    function Ho(t, e) { return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0); }
    function Wo(t, e) { const i = new Go, n = function () { const t = {}; return { get: function (e) { if (void 0 !== t[e.id])
            return t[e.id]; let i; switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
                i = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Di };
                break;
            case "PointLight": i = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Di, shadowCameraNear: 1, shadowCameraFar: 1e3 };
        } return t[e.id] = i, i; } }; }(), r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0 }; for (let t = 0; t < 9; t++)
        r.probe.push(new un); const s = new un, a = new Gn, o = new Gn; return { setup: function (s, a) { let o = 0, l = 0, c = 0; for (let t = 0; t < 9; t++)
            r.probe[t].set(0, 0, 0); let h = 0, u = 0, d = 0, p = 0, f = 0, m = 0, g = 0, v = 0, x = 0, _ = 0; s.sort(Ho); const y = !0 !== a ? Math.PI : 1; for (let t = 0, e = s.length; t < e; t++) {
            const e = s[t], a = e.color, b = e.intensity, M = e.distance, w = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
            if (e.isAmbientLight)
                o += a.r * b * y, l += a.g * b * y, c += a.b * b * y;
            else if (e.isLightProbe)
                for (let t = 0; t < 9; t++)
                    r.probe[t].addScaledVector(e.sh.coefficients[t], b);
            else if (e.isDirectionalLight) {
                const t = i.get(e);
                if (t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                    const t = e.shadow, i = n.get(e);
                    i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, r.directionalShadow[h] = i, r.directionalShadowMap[h] = w, r.directionalShadowMatrix[h] = e.shadow.matrix, m++;
                }
                r.directional[h] = t, h++;
            }
            else if (e.isSpotLight) {
                const t = i.get(e);
                t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(b * y), t.distance = M, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, r.spot[d] = t;
                const s = e.shadow;
                if (e.map && (r.spotLightMap[x] = e.map, x++, s.updateMatrices(e), e.castShadow && _++), r.spotLightMatrix[d] = s.matrix, e.castShadow) {
                    const t = n.get(e);
                    t.shadowBias = s.bias, t.shadowNormalBias = s.normalBias, t.shadowRadius = s.radius, t.shadowMapSize = s.mapSize, r.spotShadow[d] = t, r.spotShadowMap[d] = w, v++;
                }
                d++;
            }
            else if (e.isRectAreaLight) {
                const t = i.get(e);
                t.color.copy(a).multiplyScalar(b), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++;
            }
            else if (e.isPointLight) {
                const t = i.get(e);
                if (t.color.copy(e.color).multiplyScalar(e.intensity * y), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                    const t = e.shadow, i = n.get(e);
                    i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, i.shadowCameraNear = t.camera.near, i.shadowCameraFar = t.camera.far, r.pointShadow[u] = i, r.pointShadowMap[u] = w, r.pointShadowMatrix[u] = e.shadow.matrix, g++;
                }
                r.point[u] = t, u++;
            }
            else if (e.isHemisphereLight) {
                const t = i.get(e);
                t.skyColor.copy(e.color).multiplyScalar(b * y), t.groundColor.copy(e.groundColor).multiplyScalar(b * y), r.hemi[f] = t, f++;
            }
        } p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Ds.LTC_FLOAT_1, r.rectAreaLTC2 = Ds.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Ds.LTC_HALF_1, r.rectAreaLTC2 = Ds.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c; const b = r.hash; b.directionalLength === h && b.pointLength === u && b.spotLength === d && b.rectAreaLength === p && b.hemiLength === f && b.numDirectionalShadows === m && b.numPointShadows === g && b.numSpotShadows === v && b.numSpotMaps === x || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = f, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = v + x - _, r.spotLightMap.length = x, r.numSpotLightShadowsWithMaps = _, b.directionalLength = h, b.pointLength = u, b.spotLength = d, b.rectAreaLength = p, b.hemiLength = f, b.numDirectionalShadows = m, b.numPointShadows = g, b.numSpotShadows = v, b.numSpotMaps = x, r.version = Vo++); }, setupView: function (t, e) { let i = 0, n = 0, l = 0, c = 0, h = 0; const u = e.matrixWorldInverse; for (let e = 0, d = t.length; e < d; e++) {
            const d = t[e];
            if (d.isDirectionalLight) {
                const t = r.directional[i];
                t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), i++;
            }
            else if (d.isSpotLight) {
                const t = r.spot[l];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++;
            }
            else if (d.isRectAreaLight) {
                const t = r.rectArea[c];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++;
            }
            else if (d.isPointLight) {
                const t = r.point[n];
                t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), n++;
            }
            else if (d.isHemisphereLight) {
                const t = r.hemi[h];
                t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), h++;
            }
        } }, state: r }; }
    function jo(t, e) { const i = new Wo(t, e), n = [], r = []; return { init: function () { n.length = 0, r.length = 0; }, state: { lightsArray: n, shadowsArray: r, lights: i }, setupLights: function (t) { i.setup(n, t); }, setupLightsView: function (t) { i.setupView(n, t); }, pushLight: function (t) { n.push(t); }, pushShadow: function (t) { r.push(t); } }; }
    function qo(t, e) { let i = new WeakMap; return { get: function (n, r = 0) { const s = i.get(n); let a; return void 0 === s ? (a = new jo(t, e), i.set(n, [a])) : r >= s.length ? (a = new jo(t, e), s.push(a)) : a = s[r], a; }, dispose: function () { i = new WeakMap; } }; }
    class Xo extends Tr {
        constructor(t) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ne, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t); }
        copy(t) { return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this; }
    }
    class Yo extends Tr {
        constructor(t) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new un, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t); }
        copy(t) { return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this; }
    }
    function Zo(t, e, i) { let n = new As; const r = new Di, s = new Di, a = new nn, o = new Xo({ depthPacking: Ue }), l = new Yo, c = {}, h = i.maxTextureSize, d = { [f]: m, [m]: f, [g]: g }, v = new fs({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Di }, radius: { value: 4 } }, vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), _ = v.clone(); _.defines.HORIZONTAL_PASS = 1; const y = new Xr; y.setAttribute("position", new Lr(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const b = new os(y, v), M = this; function w(i, n) { const s = e.update(b); v.defines.VSM_SAMPLES !== i.blurSamples && (v.defines.VSM_SAMPLES = i.blurSamples, _.defines.VSM_SAMPLES = i.blurSamples, v.needsUpdate = !0, _.needsUpdate = !0), null === i.mapPass && (i.mapPass = new rn(r.x, r.y)), v.uniforms.shadow_pass.value = i.map.texture, v.uniforms.resolution.value = i.mapSize, v.uniforms.radius.value = i.radius, t.setRenderTarget(i.mapPass), t.clear(), t.renderBufferDirect(n, null, s, v, b, null), _.uniforms.shadow_pass.value = i.mapPass.texture, _.uniforms.resolution.value = i.mapSize, _.uniforms.radius.value = i.radius, t.setRenderTarget(i.map), t.clear(), t.renderBufferDirect(n, null, s, _, b, null); } function S(e, i, n, r, s, a) { let h = null; const u = !0 === n.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial; if (void 0 !== u)
        h = u;
    else if (h = !0 === n.isPointLight ? l : o, t.localClippingEnabled && !0 === i.clipShadows && Array.isArray(i.clippingPlanes) && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0 || i.map && i.alphaTest > 0) {
        const t = h.uuid, e = i.uuid;
        let n = c[t];
        void 0 === n && (n = {}, c[t] = n);
        let r = n[e];
        void 0 === r && (r = h.clone(), n[e] = r), h = r;
    } return h.visible = i.visible, h.wireframe = i.wireframe, h.side = a === p ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : d[i.side], h.alphaMap = i.alphaMap, h.alphaTest = i.alphaTest, h.map = i.map, h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.displacementMap = i.displacementMap, h.displacementScale = i.displacementScale, h.displacementBias = i.displacementBias, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, !0 === n.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(n.matrixWorld), h.nearDistance = r, h.farDistance = s), h; } function T(i, r, s, a, o) { if (!1 === i.visible)
        return; if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && o === p) && (!i.frustumCulled || n.intersectsObject(i))) {
        i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, i.matrixWorld);
        const n = e.update(i), r = i.material;
        if (Array.isArray(r)) {
            const e = n.groups;
            for (let l = 0, c = e.length; l < c; l++) {
                const c = e[l], h = r[c.materialIndex];
                if (h && h.visible) {
                    const e = S(i, h, a, s.near, s.far, o);
                    t.renderBufferDirect(s, null, n, e, i, c);
                }
            }
        }
        else if (r.visible) {
            const e = S(i, r, a, s.near, s.far, o);
            t.renderBufferDirect(s, null, n, e, i, null);
        }
    } const l = i.children; for (let t = 0, e = l.length; t < e; t++)
        T(l[t], r, s, a, o); } this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = u, this.render = function (e, i, o) { if (!1 === M.enabled)
        return; if (!1 === M.autoUpdate && !1 === M.needsUpdate)
        return; if (0 === e.length)
        return; const l = t.getRenderTarget(), c = t.getActiveCubeFace(), u = t.getActiveMipmapLevel(), d = t.state; d.setBlending(x), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1); for (let l = 0, c = e.length; l < c; l++) {
        const c = e[l], u = c.shadow;
        if (void 0 === u) {
            console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
            continue;
        }
        if (!1 === u.autoUpdate && !1 === u.needsUpdate)
            continue;
        r.copy(u.mapSize);
        const f = u.getFrameExtents();
        if (r.multiply(f), s.copy(u.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / f.x), r.x = s.x * f.x, u.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / f.y), r.y = s.y * f.y, u.mapSize.y = s.y)), null === u.map) {
            const t = this.type !== p ? { minFilter: dt, magFilter: dt } : {};
            u.map = new rn(r.x, r.y, t), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
        }
        t.setRenderTarget(u.map), t.clear();
        const m = u.getViewportCount();
        for (let t = 0; t < m; t++) {
            const e = u.getViewport(t);
            a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), d.viewport(a), u.updateMatrices(c, t), n = u.getFrustum(), T(i, o, u.camera, c, this.type);
        }
        !0 !== u.isPointLightShadow && this.type === p && w(u, o), u.needsUpdate = !1;
    } M.needsUpdate = !1, t.setRenderTarget(l, c, u); }; }
    function Jo(t, e, i) { const n = i.isWebGL2; const r = new function () { let e = !1; const i = new nn; let n = null; const r = new nn(0, 0, 0, 0); return { setMask: function (i) { n === i || e || (t.colorMask(i, i, i, i), n = i); }, setLocked: function (t) { e = t; }, setClear: function (e, n, s, a, o) { !0 === o && (e *= a, n *= a, s *= a), i.set(e, n, s, a), !1 === r.equals(i) && (t.clearColor(e, n, s, a), r.copy(i)); }, reset: function () { e = !1, n = null, r.set(-1, 0, 0, 0); } }; }, s = new function () { let e = !1, i = null, n = null, r = null; return { setTest: function (t) { t ? bt(2929) : Mt(2929); }, setMask: function (n) { i === n || e || (t.depthMask(n), i = n); }, setFunc: function (e) { if (n !== e) {
            switch (e) {
                case F:
                    t.depthFunc(512);
                    break;
                case G:
                    t.depthFunc(519);
                    break;
                case V:
                    t.depthFunc(513);
                    break;
                case H:
                    t.depthFunc(515);
                    break;
                case W:
                    t.depthFunc(514);
                    break;
                case j:
                    t.depthFunc(518);
                    break;
                case q:
                    t.depthFunc(516);
                    break;
                case X:
                    t.depthFunc(517);
                    break;
                default: t.depthFunc(515);
            }
            n = e;
        } }, setLocked: function (t) { e = t; }, setClear: function (e) { r !== e && (t.clearDepth(e), r = e); }, reset: function () { e = !1, i = null, n = null, r = null; } }; }, c = new function () { let e = !1, i = null, n = null, r = null, s = null, a = null, o = null, l = null, c = null; return { setTest: function (t) { e || (t ? bt(2960) : Mt(2960)); }, setMask: function (n) { i === n || e || (t.stencilMask(n), i = n); }, setFunc: function (e, i, a) { n === e && r === i && s === a || (t.stencilFunc(e, i, a), n = e, r = i, s = a); }, setOp: function (e, i, n) { a === e && o === i && l === n || (t.stencilOp(e, i, n), a = e, o = i, l = n); }, setLocked: function (t) { e = t; }, setClear: function (e) { c !== e && (t.clearStencil(e), c = e); }, reset: function () { e = !1, i = null, n = null, r = null, s = null, a = null, o = null, l = null, c = null; } }; }, h = new WeakMap, u = new WeakMap; let d = {}, p = {}, f = new WeakMap, v = [], Y = null, Z = !1, J = null, K = null, $ = null, Q = null, tt = null, et = null, it = null, nt = !1, rt = null, st = null, at = null, ot = null, lt = null; const ct = t.getParameter(35661); let ht = !1, ut = 0; const dt = t.getParameter(7938); -1 !== dt.indexOf("WebGL") ? (ut = parseFloat(/^WebGL (\d)/.exec(dt)[1]), ht = ut >= 1) : -1 !== dt.indexOf("OpenGL ES") && (ut = parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]), ht = ut >= 2); let pt = null, ft = {}; const mt = t.getParameter(3088), gt = t.getParameter(2978), vt = (new nn).fromArray(mt), xt = (new nn).fromArray(gt); function _t(e, i, n) { const r = new Uint8Array(4), s = t.createTexture(); t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728); for (let e = 0; e < n; e++)
        t.texImage2D(i + e, 0, 6408, 1, 1, 0, 6408, 5121, r); return s; } const yt = {}; function bt(e) { !0 !== d[e] && (t.enable(e), d[e] = !0); } function Mt(e) { !1 !== d[e] && (t.disable(e), d[e] = !1); } yt[3553] = _t(3553, 3553, 1), yt[34067] = _t(34067, 34069, 6), r.setClear(0, 0, 0, 1), s.setClear(1), c.setClear(0), bt(2929), s.setFunc(H), Et(!1), At(o), bt(2884), Tt(x); const wt = { [S]: 32774, [T]: 32778, [E]: 32779 }; if (n)
        wt[A] = 32775, wt[C] = 32776;
    else {
        const t = e.get("EXT_blend_minmax");
        null !== t && (wt[A] = t.MIN_EXT, wt[C] = t.MAX_EXT);
    } const St = { [L]: 0, [P]: 1, [R]: 768, [I]: 770, [B]: 776, [U]: 774, [z]: 772, [D]: 769, [O]: 771, [k]: 775, [N]: 773 }; function Tt(e, i, n, r, s, a, o, l) { if (e !== x) {
        if (!1 === Z && (bt(3042), Z = !0), e === w)
            s = s || i, a = a || n, o = o || r, i === K && s === tt || (t.blendEquationSeparate(wt[i], wt[s]), K = i, tt = s), n === $ && r === Q && a === et && o === it || (t.blendFuncSeparate(St[n], St[r], St[a], St[o]), $ = n, Q = r, et = a, it = o), J = e, nt = !1;
        else if (e !== J || l !== nt) {
            if (K === S && tt === S || (t.blendEquation(32774), K = S, tt = S), l)
                switch (e) {
                    case _:
                        t.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case y:
                        t.blendFunc(1, 1);
                        break;
                    case b:
                        t.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case M:
                        t.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default: console.error("THREE.WebGLState: Invalid blending: ", e);
                }
            else
                switch (e) {
                    case _:
                        t.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case y:
                        t.blendFunc(770, 1);
                        break;
                    case b:
                        t.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case M:
                        t.blendFunc(0, 768);
                        break;
                    default: console.error("THREE.WebGLState: Invalid blending: ", e);
                }
            $ = null, Q = null, et = null, it = null, J = e, nt = l;
        }
    }
    else
        !0 === Z && (Mt(3042), Z = !1); } function Et(e) { rt !== e && (e ? t.frontFace(2304) : t.frontFace(2305), rt = e); } function At(e) { e !== a ? (bt(2884), e !== st && (e === o ? t.cullFace(1029) : e === l ? t.cullFace(1028) : t.cullFace(1032))) : Mt(2884), st = e; } function Ct(e, i, n) { e ? (bt(32823), ot === i && lt === n || (t.polygonOffset(i, n), ot = i, lt = n)) : Mt(32823); } return { buffers: { color: r, depth: s, stencil: c }, enable: bt, disable: Mt, bindFramebuffer: function (e, i) { return p[e] !== i && (t.bindFramebuffer(e, i), p[e] = i, n && (36009 === e && (p[36160] = i), 36160 === e && (p[36009] = i)), !0); }, drawBuffers: function (n, r) { let s = v, a = !1; if (n)
            if (s = f.get(r), void 0 === s && (s = [], f.set(r, s)), n.isWebGLMultipleRenderTargets) {
                const t = n.texture;
                if (s.length !== t.length || 36064 !== s[0]) {
                    for (let e = 0, i = t.length; e < i; e++)
                        s[e] = 36064 + e;
                    s.length = t.length, a = !0;
                }
            }
            else
                36064 !== s[0] && (s[0] = 36064, a = !0);
        else
            1029 !== s[0] && (s[0] = 1029, a = !0); a && (i.isWebGL2 ? t.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s)); }, useProgram: function (e) { return Y !== e && (t.useProgram(e), Y = e, !0); }, setBlending: Tt, setMaterial: function (t, e) { t.side === g ? Mt(2884) : bt(2884); let i = t.side === m; e && (i = !i), Et(i), t.blending === _ && !1 === t.transparent ? Tt(x) : Tt(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), r.setMask(t.colorWrite); const n = t.stencilWrite; c.setTest(n), n && (c.setMask(t.stencilWriteMask), c.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), c.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), Ct(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? bt(32926) : Mt(32926); }, setFlipSided: Et, setCullFace: At, setLineWidth: function (e) { e !== at && (ht && t.lineWidth(e), at = e); }, setPolygonOffset: Ct, setScissorTest: function (t) { t ? bt(3089) : Mt(3089); }, activeTexture: function (e) { void 0 === e && (e = 33984 + ct - 1), pt !== e && (t.activeTexture(e), pt = e); }, bindTexture: function (e, i, n) { void 0 === n && (n = null === pt ? 33984 + ct - 1 : pt); let r = ft[n]; void 0 === r && (r = { type: void 0, texture: void 0 }, ft[n] = r), r.type === e && r.texture === i || (pt !== n && (t.activeTexture(n), pt = n), t.bindTexture(e, i || yt[e]), r.type = e, r.texture = i); }, unbindTexture: function () { const e = ft[pt]; void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0); }, compressedTexImage2D: function () { try {
            t.compressedTexImage2D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, compressedTexImage3D: function () { try {
            t.compressedTexImage3D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, texImage2D: function () { try {
            t.texImage2D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, texImage3D: function () { try {
            t.texImage3D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, updateUBOMapping: function (e, i) { let n = u.get(i); void 0 === n && (n = new WeakMap, u.set(i, n)); let r = n.get(e); void 0 === r && (r = t.getUniformBlockIndex(i, e.name), n.set(e, r)); }, uniformBlockBinding: function (e, i) { const n = u.get(i).get(e); h.get(i) !== n && (t.uniformBlockBinding(i, n, e.__bindingPointIndex), h.set(i, n)); }, texStorage2D: function () { try {
            t.texStorage2D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, texStorage3D: function () { try {
            t.texStorage3D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, texSubImage2D: function () { try {
            t.texSubImage2D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, texSubImage3D: function () { try {
            t.texSubImage3D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, compressedTexSubImage2D: function () { try {
            t.compressedTexSubImage2D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, compressedTexSubImage3D: function () { try {
            t.compressedTexSubImage3D.apply(t, arguments);
        }
        catch (t) {
            console.error("THREE.WebGLState:", t);
        } }, scissor: function (e) { !1 === vt.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), vt.copy(e)); }, viewport: function (e) { !1 === xt.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), xt.copy(e)); }, reset: function () { t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === n && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), d = {}, pt = null, ft = {}, p = {}, f = new WeakMap, v = [], Y = null, Z = !1, J = null, K = null, $ = null, Q = null, tt = null, et = null, it = null, nt = !1, rt = null, st = null, at = null, ot = null, lt = null, vt.set(0, 0, t.canvas.width, t.canvas.height), xt.set(0, 0, t.canvas.width, t.canvas.height), r.reset(), s.reset(), c.reset(); } }; }
    function Ko(t, e, i, n, r, s, a) { const o = r.isWebGL2, l = r.maxTextures, c = r.maxCubemapSize, h = r.maxTextureSize, u = r.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), f = new WeakMap; let m; const g = new WeakMap; let v = !1; try {
        v = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    }
    catch (t) { } function x(t, e) { return v ? new OffscreenCanvas(t, e) : ki("canvas"); } function _(t, e, i, n) { let r = 1; if ((t.width > n || t.height > n) && (r = n / Math.max(t.width, t.height)), r < 1 || !0 === e) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
            const n = e ? Ci : Math.floor, s = n(r * t.width), a = n(r * t.height);
            void 0 === m && (m = x(s, a));
            const o = i ? x(s, a) : m;
            o.width = s, o.height = a;
            return o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o;
        }
        return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
    } return t; } function y(t) { return Ei(t.width) && Ei(t.height); } function b(t, e) { return t.generateMipmaps && e && t.minFilter !== dt && t.minFilter !== vt; } function M(e) { t.generateMipmap(e); } function w(i, n, r, s, a = !1) { if (!1 === o)
        return n; if (null !== i) {
        if (void 0 !== t[i])
            return t[i];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'");
    } let l = n; return 6403 === n && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === n && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === n && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === ze && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l; } function S(t, e, i) { return !0 === b(t, i) || t.isFramebufferTexture && t.minFilter !== dt && t.minFilter !== vt ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1; } function T(t) { return t === dt || t === pt || t === mt ? 9728 : 9729; } function E(t) { const e = t.target; e.removeEventListener("dispose", E), function (t) { const e = n.get(t); if (void 0 === e.__webglInit)
        return; const i = t.source, r = g.get(i); if (r) {
        const n = r[e.__cacheKey];
        n.usedTimes--, 0 === n.usedTimes && C(t), 0 === Object.keys(r).length && g.delete(i);
    } n.remove(t); }(e), e.isVideoTexture && f.delete(e); } function A(e) { const i = e.target; i.removeEventListener("dispose", A), function (e) { const i = e.texture, r = n.get(e), s = n.get(i); void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--); e.depthTexture && e.depthTexture.dispose(); if (e.isWebGLCubeRenderTarget)
        for (let e = 0; e < 6; e++)
            t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
    else {
        if (t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
            for (let e = 0; e < r.__webglColorRenderbuffer.length; e++)
                r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
        r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
    } if (e.isWebGLMultipleRenderTargets)
        for (let e = 0, r = i.length; e < r; e++) {
            const r = n.get(i[e]);
            r.__webglTexture && (t.deleteTexture(r.__webglTexture), a.memory.textures--), n.remove(i[e]);
        } n.remove(i), n.remove(e); }(i); } function C(e) { const i = n.get(e); t.deleteTexture(i.__webglTexture); const r = e.source; delete g.get(r)[i.__cacheKey], a.memory.textures--; } let L = 0; function P(t, e) { const r = n.get(t); if (t.isVideoTexture && function (t) { const e = a.render.frame; f.get(t) !== e && (f.set(t, e), t.update()); }(t), !1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version) {
        const i = t.image;
        if (null === i)
            console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else {
            if (!1 !== i.complete)
                return void z(r, t, e);
            console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
    } i.bindTexture(3553, r.__webglTexture, 33984 + e); } const R = { [ct]: 10497, [ht]: 33071, [ut]: 33648 }, D = { [dt]: 9728, [pt]: 9984, [mt]: 9986, [vt]: 9729, [xt]: 9985, [yt]: 9987 }; function I(i, s, a) { if (a ? (t.texParameteri(i, 10242, R[s.wrapS]), t.texParameteri(i, 10243, R[s.wrapT]), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, R[s.wrapR]), t.texParameteri(i, 10240, D[s.magFilter]), t.texParameteri(i, 10241, D[s.minFilter])) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, 33071), s.wrapS === ht && s.wrapT === ht || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, 10240, T(s.magFilter)), t.texParameteri(i, 10241, T(s.minFilter)), s.minFilter !== dt && s.minFilter !== vt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
        const a = e.get("EXT_texture_filter_anisotropic");
        if (s.magFilter === dt)
            return;
        if (s.minFilter !== mt && s.minFilter !== yt)
            return;
        if (s.type === Ct && !1 === e.has("OES_texture_float_linear"))
            return;
        if (!1 === o && s.type === Lt && !1 === e.has("OES_texture_half_float_linear"))
            return;
        (s.anisotropy > 1 || n.get(s).__currentAnisotropy) && (t.texParameterf(i, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), n.get(s).__currentAnisotropy = s.anisotropy);
    } } function O(e, i) { let n = !1; void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", E)); const r = i.source; let s = g.get(r); void 0 === s && (s = {}, g.set(r, s)); const o = function (t) { const e = []; return e.push(t.wrapS), e.push(t.wrapT), e.push(t.wrapR || 0), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join(); }(i); if (o !== e.__cacheKey) {
        void 0 === s[o] && (s[o] = { texture: t.createTexture(), usedTimes: 0 }, a.memory.textures++, n = !0), s[o].usedTimes++;
        const r = s[e.__cacheKey];
        void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && C(i)), e.__cacheKey = o, e.__webglTexture = s[o].texture;
    } return n; } function z(e, r, a) { let l = 3553; (r.isDataArrayTexture || r.isCompressedArrayTexture) && (l = 35866), r.isData3DTexture && (l = 32879); const c = O(e, r), u = r.source; i.bindTexture(l, e.__webglTexture, 33984 + a); const d = n.get(u); if (u.version !== d.__version || !0 === c) {
        i.activeTexture(33984 + a), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
        const e = function (t) { return !o && (t.wrapS !== ht || t.wrapT !== ht || t.minFilter !== dt && t.minFilter !== vt); }(r) && !1 === y(r.image);
        let n = _(r.image, e, !1, h);
        n = G(r, n);
        const p = y(n) || o, f = s.convert(r.format, r.encoding);
        let m, g = s.convert(r.type), v = w(r.internalFormat, f, g, r.encoding, r.isVideoTexture);
        I(l, r, p);
        const x = r.mipmaps, T = o && !0 !== r.isVideoTexture, E = void 0 === d.__version || !0 === c, A = S(r, n, p);
        if (r.isDepthTexture)
            v = 6402, o ? v = r.type === Ct ? 36012 : r.type === At ? 33190 : r.type === Dt ? 35056 : 33189 : r.type === Ct && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r.format === Ut && 6402 === v && r.type !== Tt && r.type !== At && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = At, g = s.convert(r.type)), r.format === kt && 6402 === v && (v = 34041, r.type !== Dt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = Dt, g = s.convert(r.type))), E && (T ? i.texStorage2D(3553, 1, v, n.width, n.height) : i.texImage2D(3553, 0, v, n.width, n.height, 0, f, g, null));
        else if (r.isDataTexture)
            if (x.length > 0 && p) {
                T && E && i.texStorage2D(3553, A, v, x[0].width, x[0].height);
                for (let t = 0, e = x.length; t < e; t++)
                    m = x[t], T ? i.texSubImage2D(3553, t, 0, 0, m.width, m.height, f, g, m.data) : i.texImage2D(3553, t, v, m.width, m.height, 0, f, g, m.data);
                r.generateMipmaps = !1;
            }
            else
                T ? (E && i.texStorage2D(3553, A, v, n.width, n.height), i.texSubImage2D(3553, 0, 0, 0, n.width, n.height, f, g, n.data)) : i.texImage2D(3553, 0, v, n.width, n.height, 0, f, g, n.data);
        else if (r.isCompressedTexture)
            if (r.isCompressedArrayTexture) {
                T && E && i.texStorage3D(35866, A, v, x[0].width, x[0].height, n.depth);
                for (let t = 0, e = x.length; t < e; t++)
                    m = x[t], r.format !== Ot ? null !== f ? T ? i.compressedTexSubImage3D(35866, t, 0, 0, 0, m.width, m.height, n.depth, f, m.data, 0, 0) : i.compressedTexImage3D(35866, t, v, m.width, m.height, n.depth, 0, m.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? i.texSubImage3D(35866, t, 0, 0, 0, m.width, m.height, n.depth, f, g, m.data) : i.texImage3D(35866, t, v, m.width, m.height, n.depth, 0, f, g, m.data);
            }
            else {
                T && E && i.texStorage2D(3553, A, v, x[0].width, x[0].height);
                for (let t = 0, e = x.length; t < e; t++)
                    m = x[t], r.format !== Ot ? null !== f ? T ? i.compressedTexSubImage2D(3553, t, 0, 0, m.width, m.height, f, m.data) : i.compressedTexImage2D(3553, t, v, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? i.texSubImage2D(3553, t, 0, 0, m.width, m.height, f, g, m.data) : i.texImage2D(3553, t, v, m.width, m.height, 0, f, g, m.data);
            }
        else if (r.isDataArrayTexture)
            T ? (E && i.texStorage3D(35866, A, v, n.width, n.height, n.depth), i.texSubImage3D(35866, 0, 0, 0, 0, n.width, n.height, n.depth, f, g, n.data)) : i.texImage3D(35866, 0, v, n.width, n.height, n.depth, 0, f, g, n.data);
        else if (r.isData3DTexture)
            T ? (E && i.texStorage3D(32879, A, v, n.width, n.height, n.depth), i.texSubImage3D(32879, 0, 0, 0, 0, n.width, n.height, n.depth, f, g, n.data)) : i.texImage3D(32879, 0, v, n.width, n.height, n.depth, 0, f, g, n.data);
        else if (r.isFramebufferTexture) {
            if (E)
                if (T)
                    i.texStorage2D(3553, A, v, n.width, n.height);
                else {
                    let t = n.width, e = n.height;
                    for (let n = 0; n < A; n++)
                        i.texImage2D(3553, n, v, t, e, 0, f, g, null), t >>= 1, e >>= 1;
                }
        }
        else if (x.length > 0 && p) {
            T && E && i.texStorage2D(3553, A, v, x[0].width, x[0].height);
            for (let t = 0, e = x.length; t < e; t++)
                m = x[t], T ? i.texSubImage2D(3553, t, 0, 0, f, g, m) : i.texImage2D(3553, t, v, f, g, m);
            r.generateMipmaps = !1;
        }
        else
            T ? (E && i.texStorage2D(3553, A, v, n.width, n.height), i.texSubImage2D(3553, 0, 0, 0, f, g, n)) : i.texImage2D(3553, 0, v, f, g, n);
        b(r, p) && M(l), d.__version = u.version, r.onUpdate && r.onUpdate(r);
    } e.__version = r.version; } function N(e, r, a, o, l) { const c = s.convert(a.format, a.encoding), h = s.convert(a.type), u = w(a.internalFormat, c, h, a.encoding); n.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? i.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : i.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), i.bindFramebuffer(36160, e), F(r) ? d.framebufferTexture2DMultisampleEXT(36160, o, l, n.get(a).__webglTexture, 0, B(r)) : (3553 === l || l >= 34069 && l <= 34074) && t.framebufferTexture2D(36160, o, l, n.get(a).__webglTexture, 0), i.bindFramebuffer(36160, null); } function U(e, i, n) { if (t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
        let r = 33189;
        if (n || F(i)) {
            const e = i.depthTexture;
            e && e.isDepthTexture && (e.type === Ct ? r = 36012 : e.type === At && (r = 33190));
            const n = B(i);
            F(i) ? d.renderbufferStorageMultisampleEXT(36161, n, r, i.width, i.height) : t.renderbufferStorageMultisample(36161, n, r, i.width, i.height);
        }
        else
            t.renderbufferStorage(36161, r, i.width, i.height);
        t.framebufferRenderbuffer(36160, 36096, 36161, e);
    }
    else if (i.depthBuffer && i.stencilBuffer) {
        const r = B(i);
        n && !1 === F(i) ? t.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height) : F(i) ? d.renderbufferStorageMultisampleEXT(36161, r, 35056, i.width, i.height) : t.renderbufferStorage(36161, 34041, i.width, i.height), t.framebufferRenderbuffer(36160, 33306, 36161, e);
    }
    else {
        const e = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [i.texture];
        for (let r = 0; r < e.length; r++) {
            const a = e[r], o = s.convert(a.format, a.encoding), l = s.convert(a.type), c = w(a.internalFormat, o, l, a.encoding), h = B(i);
            n && !1 === F(i) ? t.renderbufferStorageMultisample(36161, h, c, i.width, i.height) : F(i) ? d.renderbufferStorageMultisampleEXT(36161, h, c, i.width, i.height) : t.renderbufferStorage(36161, c, i.width, i.height);
        }
    } t.bindRenderbuffer(36161, null); } function k(e) { const r = n.get(e), s = !0 === e.isWebGLCubeRenderTarget; if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
        if (s)
            throw new Error("target.depthTexture not supported in Cube render targets");
        !function (e, r) { if (r && r.isWebGLCubeRenderTarget)
            throw new Error("Depth Texture with cube render targets is not supported"); if (i.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture)
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), P(r.depthTexture, 0); const s = n.get(r.depthTexture).__webglTexture, a = B(r); if (r.depthTexture.format === Ut)
            F(r) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t.framebufferTexture2D(36160, 36096, 3553, s, 0);
        else {
            if (r.depthTexture.format !== kt)
                throw new Error("Unknown depthTexture format");
            F(r) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t.framebufferTexture2D(36160, 33306, 3553, s, 0);
        } }(r.__webglFramebuffer, e);
    }
    else if (s) {
        r.__webglDepthbuffer = [];
        for (let n = 0; n < 6; n++)
            i.bindFramebuffer(36160, r.__webglFramebuffer[n]), r.__webglDepthbuffer[n] = t.createRenderbuffer(), U(r.__webglDepthbuffer[n], e, !1);
    }
    else
        i.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), U(r.__webglDepthbuffer, e, !1); i.bindFramebuffer(36160, null); } function B(t) { return Math.min(u, t.samples); } function F(t) { const i = n.get(t); return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== i.__useRenderToTexture; } function G(t, i) { const n = t.encoding, r = t.format, s = t.type; return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === gi || n !== Oe && (n === ze ? !1 === o ? !0 === e.has("EXT_sRGB") && r === Ot ? (t.format = gi, t.minFilter = vt, t.generateMipmaps = !1) : i = Ki.sRGBToLinear(i) : r === Ot && s === Mt || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n)), i; } this.allocateTextureUnit = function () { const t = L; return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), L += 1, t; }, this.resetTextureUnits = function () { L = 0; }, this.setTexture2D = P, this.setTexture2DArray = function (t, e) { const r = n.get(t); t.version > 0 && r.__version !== t.version ? z(r, t, e) : i.bindTexture(35866, r.__webglTexture, 33984 + e); }, this.setTexture3D = function (t, e) { const r = n.get(t); t.version > 0 && r.__version !== t.version ? z(r, t, e) : i.bindTexture(32879, r.__webglTexture, 33984 + e); }, this.setTextureCube = function (e, r) { const a = n.get(e); e.version > 0 && a.__version !== e.version ? function (e, r, a) { if (6 !== r.image.length)
        return; const l = O(e, r), h = r.source; i.bindTexture(34067, e.__webglTexture, 33984 + a); const u = n.get(h); if (h.version !== u.__version || !0 === l) {
        i.activeTexture(33984 + a), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
        const e = r.isCompressedTexture || r.image[0].isCompressedTexture, n = r.image[0] && r.image[0].isDataTexture, d = [];
        for (let t = 0; t < 6; t++)
            d[t] = e || n ? n ? r.image[t].image : r.image[t] : _(r.image[t], !1, !0, c), d[t] = G(r, d[t]);
        const p = d[0], f = y(p) || o, m = s.convert(r.format, r.encoding), g = s.convert(r.type), v = w(r.internalFormat, m, g, r.encoding), x = o && !0 !== r.isVideoTexture, T = void 0 === u.__version || !0 === l;
        let E, A = S(r, p, f);
        if (I(34067, r, f), e) {
            x && T && i.texStorage2D(34067, A, v, p.width, p.height);
            for (let t = 0; t < 6; t++) {
                E = d[t].mipmaps;
                for (let e = 0; e < E.length; e++) {
                    const n = E[e];
                    r.format !== Ot ? null !== m ? x ? i.compressedTexSubImage2D(34069 + t, e, 0, 0, n.width, n.height, m, n.data) : i.compressedTexImage2D(34069 + t, e, v, n.width, n.height, 0, n.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : x ? i.texSubImage2D(34069 + t, e, 0, 0, n.width, n.height, m, g, n.data) : i.texImage2D(34069 + t, e, v, n.width, n.height, 0, m, g, n.data);
                }
            }
        }
        else {
            E = r.mipmaps, x && T && (E.length > 0 && A++, i.texStorage2D(34067, A, v, d[0].width, d[0].height));
            for (let t = 0; t < 6; t++)
                if (n) {
                    x ? i.texSubImage2D(34069 + t, 0, 0, 0, d[t].width, d[t].height, m, g, d[t].data) : i.texImage2D(34069 + t, 0, v, d[t].width, d[t].height, 0, m, g, d[t].data);
                    for (let e = 0; e < E.length; e++) {
                        const n = E[e].image[t].image;
                        x ? i.texSubImage2D(34069 + t, e + 1, 0, 0, n.width, n.height, m, g, n.data) : i.texImage2D(34069 + t, e + 1, v, n.width, n.height, 0, m, g, n.data);
                    }
                }
                else {
                    x ? i.texSubImage2D(34069 + t, 0, 0, 0, m, g, d[t]) : i.texImage2D(34069 + t, 0, v, m, g, d[t]);
                    for (let e = 0; e < E.length; e++) {
                        const n = E[e];
                        x ? i.texSubImage2D(34069 + t, e + 1, 0, 0, m, g, n.image[t]) : i.texImage2D(34069 + t, e + 1, v, m, g, n.image[t]);
                    }
                }
        }
        b(r, f) && M(34067), u.__version = h.version, r.onUpdate && r.onUpdate(r);
    } e.__version = r.version; }(a, e, r) : i.bindTexture(34067, a.__webglTexture, 33984 + r); }, this.rebindTextures = function (t, e, i) { const r = n.get(t); void 0 !== e && N(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== i && k(t); }, this.setupRenderTarget = function (e) { const l = e.texture, c = n.get(e), h = n.get(l); e.addEventListener("dispose", A), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t.createTexture()), h.__version = l.version, a.memory.textures++); const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = y(e) || o; if (u) {
        c.__webglFramebuffer = [];
        for (let e = 0; e < 6; e++)
            c.__webglFramebuffer[e] = t.createFramebuffer();
    }
    else {
        if (c.__webglFramebuffer = t.createFramebuffer(), d)
            if (r.drawBuffers) {
                const i = e.texture;
                for (let e = 0, r = i.length; e < r; e++) {
                    const r = n.get(i[e]);
                    void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), a.memory.textures++);
                }
            }
            else
                console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        if (o && e.samples > 0 && !1 === F(e)) {
            const n = d ? l : [l];
            c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = [], i.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
            for (let i = 0; i < n.length; i++) {
                const r = n[i];
                c.__webglColorRenderbuffer[i] = t.createRenderbuffer(), t.bindRenderbuffer(36161, c.__webglColorRenderbuffer[i]);
                const a = s.convert(r.format, r.encoding), o = s.convert(r.type), l = w(r.internalFormat, a, o, r.encoding, !0 === e.isXRRenderTarget), h = B(e);
                t.renderbufferStorageMultisample(36161, h, l, e.width, e.height), t.framebufferRenderbuffer(36160, 36064 + i, 36161, c.__webglColorRenderbuffer[i]);
            }
            t.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), U(c.__webglDepthRenderbuffer, e, !0)), i.bindFramebuffer(36160, null);
        }
    } if (u) {
        i.bindTexture(34067, h.__webglTexture), I(34067, l, p);
        for (let t = 0; t < 6; t++)
            N(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
        b(l, p) && M(34067), i.unbindTexture();
    }
    else if (d) {
        const t = e.texture;
        for (let r = 0, s = t.length; r < s; r++) {
            const s = t[r], a = n.get(s);
            i.bindTexture(3553, a.__webglTexture), I(3553, s, p), N(c.__webglFramebuffer, e, s, 36064 + r, 3553), b(s, p) && M(3553);
        }
        i.unbindTexture();
    }
    else {
        let t = 3553;
        (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), i.bindTexture(t, h.__webglTexture), I(t, l, p), N(c.__webglFramebuffer, e, l, 36064, t), b(l, p) && M(t), i.unbindTexture();
    } e.depthBuffer && k(e); }, this.updateRenderTargetMipmap = function (t) { const e = y(t) || o, r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture]; for (let s = 0, a = r.length; s < a; s++) {
        const a = r[s];
        if (b(a, e)) {
            const e = t.isWebGLCubeRenderTarget ? 34067 : 3553, r = n.get(a).__webglTexture;
            i.bindTexture(e, r), M(e), i.unbindTexture();
        }
    } }, this.updateMultisampleRenderTarget = function (e) { if (o && e.samples > 0 && !1 === F(e)) {
        const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture], s = e.width, a = e.height;
        let o = 16384;
        const l = [], c = e.stencilBuffer ? 33306 : 36096, h = n.get(e), u = !0 === e.isWebGLMultipleRenderTargets;
        if (u)
            for (let e = 0; e < r.length; e++)
                i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, null), i.bindFramebuffer(36160, h.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
        i.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, h.__webglFramebuffer);
        for (let i = 0; i < r.length; i++) {
            l.push(36064 + i), e.depthBuffer && l.push(c);
            const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
            if (!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[i]), !0 === d && (t.invalidateFramebuffer(36008, [c]), t.invalidateFramebuffer(36009, [c])), u) {
                const e = n.get(r[i]).__webglTexture;
                t.framebufferTexture2D(36009, 36064, 3553, e, 0);
            }
            t.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728), p && t.invalidateFramebuffer(36008, l);
        }
        if (i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, null), u)
            for (let e = 0; e < r.length; e++) {
                i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, h.__webglColorRenderbuffer[e]);
                const s = n.get(r[e]).__webglTexture;
                i.bindFramebuffer(36160, h.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, s, 0);
            }
        i.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
    } }, this.setupDepthRenderbuffer = k, this.setupFrameBufferTexture = N, this.useMultisampledRTT = F; }
    function $o(t, e, i) { const n = i.isWebGL2; return { convert: function (i, r = null) { let s; if (i === Mt)
            return 5121; if (i === Pt)
            return 32819; if (i === Rt)
            return 32820; if (i === wt)
            return 5120; if (i === St)
            return 5122; if (i === Tt)
            return 5123; if (i === Et)
            return 5124; if (i === At)
            return 5125; if (i === Ct)
            return 5126; if (i === Lt)
            return n ? 5131 : (s = e.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null); if (i === It)
            return 6406; if (i === Ot)
            return 6408; if (i === zt)
            return 6409; if (i === Nt)
            return 6410; if (i === Ut)
            return 6402; if (i === kt)
            return 34041; if (i === gi)
            return s = e.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null; if (i === Bt)
            return 6403; if (i === Ft)
            return 36244; if (i === Gt)
            return 33319; if (i === Vt)
            return 33320; if (i === Ht)
            return 36249; if (i === Wt || i === jt || i === qt || i === Xt)
            if (r === ze) {
                if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === s)
                    return null;
                if (i === Wt)
                    return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (i === jt)
                    return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (i === qt)
                    return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (i === Xt)
                    return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
            }
            else {
                if (s = e.get("WEBGL_compressed_texture_s3tc"), null === s)
                    return null;
                if (i === Wt)
                    return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (i === jt)
                    return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (i === qt)
                    return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (i === Xt)
                    return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            } if (i === Yt || i === Zt || i === Jt || i === Kt) {
            if (s = e.get("WEBGL_compressed_texture_pvrtc"), null === s)
                return null;
            if (i === Yt)
                return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (i === Zt)
                return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (i === Jt)
                return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (i === Kt)
                return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        } if (i === $t)
            return s = e.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null; if (i === Qt || i === te) {
            if (s = e.get("WEBGL_compressed_texture_etc"), null === s)
                return null;
            if (i === Qt)
                return r === ze ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
            if (i === te)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        } if (i === ee || i === ie || i === ne || i === re || i === se || i === ae || i === oe || i === le || i === ce || i === he || i === ue || i === de || i === pe || i === fe) {
            if (s = e.get("WEBGL_compressed_texture_astc"), null === s)
                return null;
            if (i === ee)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
            if (i === ie)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
            if (i === ne)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
            if (i === re)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
            if (i === se)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
            if (i === ae)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
            if (i === oe)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
            if (i === le)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
            if (i === ce)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
            if (i === he)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
            if (i === ue)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
            if (i === de)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
            if (i === pe)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
            if (i === fe)
                return r === ze ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
        } if (i === me) {
            if (s = e.get("EXT_texture_compression_bptc"), null === s)
                return null;
            if (i === me)
                return r === ze ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        } if (i === ge || i === ve || i === xe || i === _e) {
            if (s = e.get("EXT_texture_compression_rgtc"), null === s)
                return null;
            if (i === me)
                return s.COMPRESSED_RED_RGTC1_EXT;
            if (i === ve)
                return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
            if (i === xe)
                return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
            if (i === _e)
                return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
        } return i === Dt ? n ? 34042 : (s = e.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[i] ? t[i] : null; } }; }
    class Qo extends gs {
        constructor(t = []) { super(), this.isArrayCamera = !0, this.cameras = t; }
    }
    class tl extends dr {
        constructor() { super(), this.isGroup = !0, this.type = "Group"; }
    }
    const el = { type: "move" };
    class il {
        constructor() { this._targetRay = null, this._grip = null, this._hand = null; }
        getHandSpace() { return null === this._hand && (this._hand = new tl, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand; }
        getTargetRaySpace() { return null === this._targetRay && (this._targetRay = new tl, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new un, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new un), this._targetRay; }
        getGripSpace() { return null === this._grip && (this._grip = new tl, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new un, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new un), this._grip; }
        dispatchEvent(t) { return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this; }
        connect(t) { if (t && t.hand) {
            const e = this._hand;
            if (e)
                for (const i of t.hand.values())
                    this._getHandJoint(e, i);
        } return this.dispatchEvent({ type: "connected", data: t }), this; }
        disconnect(t) { return this.dispatchEvent({ type: "disconnected", data: t }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this; }
        update(t, e, i) { let n = null, r = null, s = null; const a = this._targetRay, o = this._grip, l = this._hand; if (t && "visible-blurred" !== e.session.visibilityState) {
            if (l && t.hand) {
                s = !0;
                for (const n of t.hand.values()) {
                    const t = e.getJointPose(n, i), r = this._getHandJoint(l, n);
                    null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t;
                }
                const n = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = n.position.distanceTo(r.position), o = .02, c = .005;
                l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
            }
            else
                null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, i), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            null !== a && (n = e.getPose(t.targetRaySpace, i), null === n && null !== r && (n = r), null !== n && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), n.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(n.linearVelocity)) : a.hasLinearVelocity = !1, n.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(n.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(el)));
        } return null !== a && (a.visible = null !== n), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this; }
        _getHandJoint(t, e) { if (void 0 === t.joints[e.jointName]) {
            const i = new tl;
            i.matrixAutoUpdate = !1, i.visible = !1, t.joints[e.jointName] = i, t.add(i);
        } return t.joints[e.jointName]; }
    }
    class nl extends en {
        constructor(t, e, i, n, r, s, a, o, l, c) { if ((c = void 0 !== c ? c : Ut) !== Ut && c !== kt)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); void 0 === i && c === Ut && (i = At), void 0 === i && c === kt && (i = Dt), super(null, n, r, s, a, o, c, i, l), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = void 0 !== a ? a : dt, this.minFilter = void 0 !== o ? o : dt, this.flipY = !1, this.generateMipmaps = !1; }
    }
    class rl extends vi {
        constructor(t, e) { super(); const i = this; let n = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, h = null, u = null, d = null, p = null; const f = e.getContextAttributes(); let m = null, g = null; const v = [], x = [], _ = new Set, y = new Map, b = new gs; b.layers.enable(1), b.viewport = new nn; const M = new gs; M.layers.enable(2), M.viewport = new nn; const w = [b, M], S = new Qo; S.layers.enable(1), S.layers.enable(2); let T = null, E = null; function A(t) { const e = x.indexOf(t.inputSource); if (-1 === e)
            return; const i = v[e]; void 0 !== i && i.dispatchEvent({ type: t.type, data: t.inputSource }); } function C() { n.removeEventListener("select", A), n.removeEventListener("selectstart", A), n.removeEventListener("selectend", A), n.removeEventListener("squeeze", A), n.removeEventListener("squeezestart", A), n.removeEventListener("squeezeend", A), n.removeEventListener("end", C), n.removeEventListener("inputsourceschange", L); for (let t = 0; t < v.length; t++) {
            const e = x[t];
            null !== e && (x[t] = null, v[t].disconnect(e));
        } T = null, E = null, t.setRenderTarget(m), d = null, u = null, h = null, n = null, g = null, O.stop(), i.isPresenting = !1, i.dispatchEvent({ type: "sessionend" }); } function L(t) { for (let e = 0; e < t.removed.length; e++) {
            const i = t.removed[e], n = x.indexOf(i);
            n >= 0 && (x[n] = null, v[n].disconnect(i));
        } for (let e = 0; e < t.added.length; e++) {
            const i = t.added[e];
            let n = x.indexOf(i);
            if (-1 === n) {
                for (let t = 0; t < v.length; t++) {
                    if (t >= x.length) {
                        x.push(i), n = t;
                        break;
                    }
                    if (null === x[t]) {
                        x[t] = i, n = t;
                        break;
                    }
                }
                if (-1 === n)
                    break;
            }
            const r = v[n];
            r && r.connect(i);
        } } this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (t) { let e = v[t]; return void 0 === e && (e = new il, v[t] = e), e.getTargetRaySpace(); }, this.getControllerGrip = function (t) { let e = v[t]; return void 0 === e && (e = new il, v[t] = e), e.getGripSpace(); }, this.getHand = function (t) { let e = v[t]; return void 0 === e && (e = new il, v[t] = e), e.getHandSpace(); }, this.setFramebufferScaleFactor = function (t) { r = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting."); }, this.setReferenceSpaceType = function (t) { a = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting."); }, this.getReferenceSpace = function () { return l || s; }, this.setReferenceSpace = function (t) { l = t; }, this.getBaseLayer = function () { return null !== u ? u : d; }, this.getBinding = function () { return h; }, this.getFrame = function () { return p; }, this.getSession = function () { return n; }, this.setSession = function (c) {
            return __awaiter(this, void 0, void 0, function* () { if (n = c, null !== n) {
                if (m = t.getRenderTarget(), n.addEventListener("select", A), n.addEventListener("selectstart", A), n.addEventListener("selectend", A), n.addEventListener("squeeze", A), n.addEventListener("squeezestart", A), n.addEventListener("squeezeend", A), n.addEventListener("end", C), n.addEventListener("inputsourceschange", L), !0 !== f.xrCompatible && (yield e.makeXRCompatible()), void 0 === n.renderState.layers || !1 === t.capabilities.isWebGL2) {
                    const i = { antialias: void 0 !== n.renderState.layers || f.antialias, alpha: f.alpha, depth: f.depth, stencil: f.stencil, framebufferScaleFactor: r };
                    d = new XRWebGLLayer(n, e, i), n.updateRenderState({ baseLayer: d }), g = new rn(d.framebufferWidth, d.framebufferHeight, { format: Ot, type: Mt, encoding: t.outputEncoding, stencilBuffer: f.stencil });
                }
                else {
                    let i = null, s = null, a = null;
                    f.depth && (a = f.stencil ? 35056 : 33190, i = f.stencil ? kt : Ut, s = f.stencil ? Dt : At);
                    const o = { colorFormat: 32856, depthFormat: a, scaleFactor: r };
                    h = new XRWebGLBinding(n, e), u = h.createProjectionLayer(o), n.updateRenderState({ layers: [u] }), g = new rn(u.textureWidth, u.textureHeight, { format: Ot, type: Mt, depthTexture: new nl(u.textureWidth, u.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, i), stencilBuffer: f.stencil, encoding: t.outputEncoding, samples: f.antialias ? 4 : 0 });
                    t.properties.get(g).__ignoreDepthValues = u.ignoreDepthValues;
                }
                g.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = yield n.requestReferenceSpace(a), O.setContext(n), O.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
            } });
        }; const P = new un, R = new un; function D(t, e) { null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert(); } this.updateCamera = function (t) { if (null === n)
            return; S.near = M.near = b.near = t.near, S.far = M.far = b.far = t.far, T === S.near && E === S.far || (n.updateRenderState({ depthNear: S.near, depthFar: S.far }), T = S.near, E = S.far); const e = t.parent, i = S.cameras; D(S, e); for (let t = 0; t < i.length; t++)
            D(i[t], e); S.matrixWorld.decompose(S.position, S.quaternion, S.scale), t.matrix.copy(S.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale); const r = t.children; for (let t = 0, e = r.length; t < e; t++)
            r[t].updateMatrixWorld(!0); 2 === i.length ? function (t, e, i) { P.setFromMatrixPosition(e.matrixWorld), R.setFromMatrixPosition(i.matrixWorld); const n = P.distanceTo(R), r = e.projectionMatrix.elements, s = i.projectionMatrix.elements, a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, f = n / (-h + u), m = f * -h; e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert(); const g = a + f, v = o + f, x = d - m, _ = p + (n - m), y = l * o / v * g, b = c * o / v * g; t.projectionMatrix.makePerspective(x, _, y, b, g, v); }(S, b, M) : S.projectionMatrix.copy(b.projectionMatrix); }, this.getCamera = function () { return S; }, this.getFoveation = function () { if (null !== u || null !== d)
            return o; }, this.setFoveation = function (t) { o = t, null !== u && (u.fixedFoveation = t), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t); }, this.getPlanes = function () { return _; }; let I = null; const O = new Cs; O.setAnimationLoop((function (e, n) { if (c = n.getViewerPose(l || s), p = n, null !== c) {
            const e = c.views;
            null !== d && (t.setRenderTargetFramebuffer(g, d.framebuffer), t.setRenderTarget(g));
            let i = !1;
            e.length !== S.cameras.length && (S.cameras.length = 0, i = !0);
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                let s = null;
                if (null !== d)
                    s = d.getViewport(r);
                else {
                    const e = h.getViewSubImage(u, r);
                    s = e.viewport, 0 === n && (t.setRenderTargetTextures(g, e.colorTexture, u.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(g));
                }
                let a = w[n];
                void 0 === a && (a = new gs, a.layers.enable(n), a.viewport = new nn, w[n] = a), a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === n && S.matrix.copy(a.matrix), !0 === i && S.cameras.push(a);
            }
        } for (let t = 0; t < v.length; t++) {
            const e = x[t], i = v[t];
            null !== e && void 0 !== i && i.update(e, n, l || s);
        } if (I && I(e, n), n.detectedPlanes) {
            i.dispatchEvent({ type: "planesdetected", data: n.detectedPlanes });
            let t = null;
            for (const e of _)
                n.detectedPlanes.has(e) || (null === t && (t = []), t.push(e));
            if (null !== t)
                for (const e of t)
                    _.delete(e), y.delete(e), i.dispatchEvent({ type: "planeremoved", data: e });
            for (const t of n.detectedPlanes)
                if (_.has(t)) {
                    const e = y.get(t);
                    t.lastChangedTime > e && (y.set(t, t.lastChangedTime), i.dispatchEvent({ type: "planechanged", data: t }));
                }
                else
                    _.add(t), y.set(t, n.lastChangedTime), i.dispatchEvent({ type: "planeadded", data: t });
        } p = null; })), this.setAnimationLoop = function (t) { I = t; }, this.dispose = function () { }; }
    }
    function sl(t, e) { function i(i, n) { i.opacity.value = n.opacity, n.color && i.diffuse.value.copy(n.color), n.emissive && i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (i.map.value = n.map), n.alphaMap && (i.alphaMap.value = n.alphaMap), n.bumpMap && (i.bumpMap.value = n.bumpMap, i.bumpScale.value = n.bumpScale, n.side === m && (i.bumpScale.value *= -1)), n.displacementMap && (i.displacementMap.value = n.displacementMap, i.displacementScale.value = n.displacementScale, i.displacementBias.value = n.displacementBias), n.emissiveMap && (i.emissiveMap.value = n.emissiveMap), n.normalMap && (i.normalMap.value = n.normalMap, i.normalScale.value.copy(n.normalScale), n.side === m && i.normalScale.value.negate()), n.specularMap && (i.specularMap.value = n.specularMap), n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest); const r = e.get(n).envMap; if (r && (i.envMap.value = r, i.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = n.reflectivity, i.ior.value = n.ior, i.refractionRatio.value = n.refractionRatio), n.lightMap) {
        i.lightMap.value = n.lightMap;
        const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
        i.lightMapIntensity.value = n.lightMapIntensity * e;
    } let s, a; n.aoMap && (i.aoMap.value = n.aoMap, i.aoMapIntensity.value = n.aoMapIntensity), n.map ? s = n.map : n.specularMap ? s = n.specularMap : n.displacementMap ? s = n.displacementMap : n.normalMap ? s = n.normalMap : n.bumpMap ? s = n.bumpMap : n.roughnessMap ? s = n.roughnessMap : n.metalnessMap ? s = n.metalnessMap : n.alphaMap ? s = n.alphaMap : n.emissiveMap ? s = n.emissiveMap : n.clearcoatMap ? s = n.clearcoatMap : n.clearcoatNormalMap ? s = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? s = n.clearcoatRoughnessMap : n.iridescenceMap ? s = n.iridescenceMap : n.iridescenceThicknessMap ? s = n.iridescenceThicknessMap : n.specularIntensityMap ? s = n.specularIntensityMap : n.specularColorMap ? s = n.specularColorMap : n.transmissionMap ? s = n.transmissionMap : n.thicknessMap ? s = n.thicknessMap : n.sheenColorMap ? s = n.sheenColorMap : n.sheenRoughnessMap && (s = n.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), i.uvTransform.value.copy(s.matrix)), n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), i.uv2Transform.value.copy(a.matrix)); } return { refreshFogUniforms: function (e, i) { i.color.getRGB(e.fogColor.value, ds(t)), i.isFog ? (e.fogNear.value = i.near, e.fogFar.value = i.far) : i.isFogExp2 && (e.fogDensity.value = i.density); }, refreshMaterialUniforms: function (t, n, r, s, a) { n.isMeshBasicMaterial || n.isMeshLambertMaterial ? i(t, n) : n.isMeshToonMaterial ? (i(t, n), function (t, e) { e.gradientMap && (t.gradientMap.value = e.gradientMap); }(t, n)) : n.isMeshPhongMaterial ? (i(t, n), function (t, e) { t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4); }(t, n)) : n.isMeshStandardMaterial ? (i(t, n), function (t, i) { t.roughness.value = i.roughness, t.metalness.value = i.metalness, i.roughnessMap && (t.roughnessMap.value = i.roughnessMap); i.metalnessMap && (t.metalnessMap.value = i.metalnessMap); const n = e.get(i).envMap; n && (t.envMapIntensity.value = i.envMapIntensity); }(t, n), n.isMeshPhysicalMaterial && function (t, e, i) { t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)); e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, e.side === m && t.clearcoatNormalScale.value.negate())); e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap)); e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor)); t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap); e.specularColorMap && (t.specularColorMap.value = e.specularColorMap); }(t, n, a)) : n.isMeshMatcapMaterial ? (i(t, n), function (t, e) { e.matcap && (t.matcap.value = e.matcap); }(t, n)) : n.isMeshDepthMaterial ? i(t, n) : n.isMeshDistanceMaterial ? (i(t, n), function (t, e) { t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance; }(t, n)) : n.isMeshNormalMaterial ? i(t, n) : n.isLineBasicMaterial ? (function (t, e) { t.diffuse.value.copy(e.color), t.opacity.value = e.opacity; }(t, n), n.isLineDashedMaterial && function (t, e) { t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale; }(t, n)) : n.isPointsMaterial ? function (t, e, i, n) { t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * i, t.scale.value = .5 * n, e.map && (t.map.value = e.map); e.alphaMap && (t.alphaMap.value = e.alphaMap); e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest); let r; e.map ? r = e.map : e.alphaMap && (r = e.alphaMap); void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix)); }(t, n, r, s) : n.isSpriteMaterial ? function (t, e) { t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map); e.alphaMap && (t.alphaMap.value = e.alphaMap); e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest); let i; e.map ? i = e.map : e.alphaMap && (i = e.alphaMap); void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix)); }(t, n) : n.isShadowMaterial ? (t.color.value.copy(n.color), t.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1); } }; }
    function al(t, e, i, n) { let r = {}, s = {}, a = []; const o = i.isWebGL2 ? t.getParameter(35375) : 0; function l(t, e, i) { const n = t.value; if (void 0 === i[e]) {
        if ("number" == typeof n)
            i[e] = n;
        else {
            const t = Array.isArray(n) ? n : [n], r = [];
            for (let e = 0; e < t.length; e++)
                r.push(t[e].clone());
            i[e] = r;
        }
        return !0;
    } if ("number" == typeof n) {
        if (i[e] !== n)
            return i[e] = n, !0;
    }
    else {
        const t = Array.isArray(i[e]) ? i[e] : [i[e]], r = Array.isArray(n) ? n : [n];
        for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!1 === i.equals(r[e]))
                return i.copy(r[e]), !0;
        }
    } return !1; } function c(t) { const e = { boundary: 0, storage: 0 }; return "number" == typeof t ? (e.boundary = 4, e.storage = 4) : t.isVector2 ? (e.boundary = 8, e.storage = 8) : t.isVector3 || t.isColor ? (e.boundary = 16, e.storage = 12) : t.isVector4 ? (e.boundary = 16, e.storage = 16) : t.isMatrix3 ? (e.boundary = 48, e.storage = 48) : t.isMatrix4 ? (e.boundary = 64, e.storage = 64) : t.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t), e; } function h(e) { const i = e.target; i.removeEventListener("dispose", h); const n = a.indexOf(i.__bindingPointIndex); a.splice(n, 1), t.deleteBuffer(r[i.id]), delete r[i.id], delete s[i.id]; } return { bind: function (t, e) { const i = e.program; n.uniformBlockBinding(t, i); }, update: function (i, u) { let d = r[i.id]; void 0 === d && (!function (t) { const e = t.uniforms; let i = 0; const n = 16; let r = 0; for (let t = 0, s = e.length; t < s; t++) {
            const s = e[t], a = { boundary: 0, storage: 0 }, o = Array.isArray(s.value) ? s.value : [s.value];
            for (let t = 0, e = o.length; t < e; t++) {
                const e = c(o[t]);
                a.boundary += e.boundary, a.storage += e.storage;
            }
            if (s.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), s.__offset = i, t > 0) {
                r = i % n;
                0 !== r && n - r - a.boundary < 0 && (i += n - r, s.__offset = i);
            }
            i += a.storage;
        } r = i % n, r > 0 && (i += n - r); t.__size = i, t.__cache = {}; }(i), d = function (e) { const i = function () { for (let t = 0; t < o; t++)
            if (-1 === a.indexOf(t))
                return a.push(t), t; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0; }(); e.__bindingPointIndex = i; const n = t.createBuffer(), r = e.__size, s = e.usage; return t.bindBuffer(35345, n), t.bufferData(35345, r, s), t.bindBuffer(35345, null), t.bindBufferBase(35345, i, n), n; }(i), r[i.id] = d, i.addEventListener("dispose", h)); const p = u.program; n.updateUBOMapping(i, p); const f = e.render.frame; s[i.id] !== f && (!function (e) { const i = r[e.id], n = e.uniforms, s = e.__cache; t.bindBuffer(35345, i); for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            if (!0 === l(i, e, s)) {
                const e = i.__offset, n = Array.isArray(i.value) ? i.value : [i.value];
                let r = 0;
                for (let s = 0; s < n.length; s++) {
                    const a = n[s], o = c(a);
                    "number" == typeof a ? (i.__data[0] = a, t.bufferSubData(35345, e + r, i.__data)) : a.isMatrix3 ? (i.__data[0] = a.elements[0], i.__data[1] = a.elements[1], i.__data[2] = a.elements[2], i.__data[3] = a.elements[0], i.__data[4] = a.elements[3], i.__data[5] = a.elements[4], i.__data[6] = a.elements[5], i.__data[7] = a.elements[0], i.__data[8] = a.elements[6], i.__data[9] = a.elements[7], i.__data[10] = a.elements[8], i.__data[11] = a.elements[0]) : (a.toArray(i.__data, r), r += o.storage / Float32Array.BYTES_PER_ELEMENT);
                }
                t.bufferSubData(35345, e, i.__data);
            }
        } t.bindBuffer(35345, null); }(i), s[i.id] = f); }, dispose: function () { for (const e in r)
            t.deleteBuffer(r[e]); a = [], r = {}, s = {}; } }; }
    function ol(t = {}) { this.isWebGLRenderer = !0; const e = void 0 !== t.canvas ? t.canvas : function () { const t = ki("canvas"); return t.style.display = "block", t; }(), i = void 0 !== t.context ? t.context : null, r = void 0 === t.depth || t.depth, s = void 0 === t.stencil || t.stencil, a = void 0 !== t.antialias && t.antialias, o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha, l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer, c = void 0 !== t.powerPreference ? t.powerPreference : "default", h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat; let u; u = null !== i ? i.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha; let d = null, p = null; const v = [], x = []; this.domElement = e, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Oe, this.physicallyCorrectLights = !1, this.toneMapping = K, this.toneMappingExposure = 1; const _ = this; let y = !1, b = 0, M = 0, w = null, S = -1, T = null; const E = new nn, A = new nn; let C = null, L = e.width, P = e.height, R = 1, D = null, I = null; const O = new nn(0, 0, L, P), z = new nn(0, 0, L, P); let N = !1; const U = new As; let k = !1, B = !1, F = null; const G = new Gn, V = new Di, H = new un, W = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; function j() { return null === w ? R : 1; } let q, X, Y, Z, J, $, Q, tt, et, it, nt, rt, st, at, ot, lt, ct, ht, ut, dt, pt, ft, mt, gt, vt = i; function xt(t, i) { for (let n = 0; n < t.length; n++) {
        const r = t[n], s = e.getContext(r, i);
        if (null !== s)
            return s;
    } return null; } try {
        const t = { alpha: !0, depth: r, stencil: s, antialias: a, premultipliedAlpha: o, preserveDrawingBuffer: l, powerPreference: c, failIfMajorPerformanceCaveat: h };
        if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${n}`), e.addEventListener("webglcontextlost", wt, !1), e.addEventListener("webglcontextrestored", St, !1), e.addEventListener("webglcontextcreationerror", Tt, !1), null === vt) {
            const e = ["webgl2", "webgl", "experimental-webgl"];
            if (!0 === _.isWebGL1Renderer && e.shift(), vt = xt(e, t), null === vt)
                throw xt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        void 0 === vt.getShaderPrecisionFormat && (vt.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 }; });
    }
    catch (t) {
        throw console.error("THREE.WebGLRenderer: " + t.message), t;
    } function _t() { q = new na(vt), X = new ks(vt, q, t), q.init(X), ft = new $o(vt, q, X), Y = new Jo(vt, q, X), Z = new aa, J = new No, $ = new Ko(vt, q, Y, J, X, ft, Z), Q = new Fs(_), tt = new ia(_), et = new Ls(vt, X), mt = new Ns(vt, q, et, X), it = new ra(vt, et, Z, mt), nt = new ha(vt, it, et, Z), ut = new ca(vt, X, $), lt = new Bs(J), rt = new zo(_, Q, tt, q, X, mt, lt), st = new sl(_, J), at = new Fo, ot = new qo(q, X), ht = new zs(_, Q, tt, Y, nt, u, o), ct = new Zo(_, nt, X), gt = new al(vt, Z, X, Y), dt = new Us(vt, q, Z, X), pt = new sa(vt, q, Z, X), Z.programs = rt.programs, _.capabilities = X, _.extensions = q, _.properties = J, _.renderLists = at, _.shadowMap = ct, _.state = Y, _.info = Z; } _t(); const bt = new rl(_, vt); function wt(t) { t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0; } function St() { console.log("THREE.WebGLRenderer: Context Restored."), y = !1; const t = Z.autoReset, e = ct.enabled, i = ct.autoUpdate, n = ct.needsUpdate, r = ct.type; _t(), Z.autoReset = t, ct.enabled = e, ct.autoUpdate = i, ct.needsUpdate = n, ct.type = r; } function Tt(t) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage); } function Et(t) { const e = t.target; e.removeEventListener("dispose", Et), function (t) { (function (t) { const e = J.get(t).programs; void 0 !== e && (e.forEach((function (t) { rt.releaseProgram(t); })), t.isShaderMaterial && rt.releaseShaderCache(t)); })(t), J.remove(t); }(e); } this.xr = bt, this.getContext = function () { return vt; }, this.getContextAttributes = function () { return vt.getContextAttributes(); }, this.forceContextLoss = function () { const t = q.get("WEBGL_lose_context"); t && t.loseContext(); }, this.forceContextRestore = function () { const t = q.get("WEBGL_lose_context"); t && t.restoreContext(); }, this.getPixelRatio = function () { return R; }, this.setPixelRatio = function (t) { void 0 !== t && (R = t, this.setSize(L, P, !1)); }, this.getSize = function (t) { return t.set(L, P); }, this.setSize = function (t, i, n) { bt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L = t, P = i, e.width = Math.floor(t * R), e.height = Math.floor(i * R), !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i)); }, this.getDrawingBufferSize = function (t) { return t.set(L * R, P * R).floor(); }, this.setDrawingBufferSize = function (t, i, n) { L = t, P = i, R = n, e.width = Math.floor(t * n), e.height = Math.floor(i * n), this.setViewport(0, 0, t, i); }, this.getCurrentViewport = function (t) { return t.copy(E); }, this.getViewport = function (t) { return t.copy(O); }, this.setViewport = function (t, e, i, n) { t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, i, n), Y.viewport(E.copy(O).multiplyScalar(R).floor()); }, this.getScissor = function (t) { return t.copy(z); }, this.setScissor = function (t, e, i, n) { t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, i, n), Y.scissor(A.copy(z).multiplyScalar(R).floor()); }, this.getScissorTest = function () { return N; }, this.setScissorTest = function (t) { Y.setScissorTest(N = t); }, this.setOpaqueSort = function (t) { D = t; }, this.setTransparentSort = function (t) { I = t; }, this.getClearColor = function (t) { return t.copy(ht.getClearColor()); }, this.setClearColor = function () { ht.setClearColor.apply(ht, arguments); }, this.getClearAlpha = function () { return ht.getClearAlpha(); }, this.setClearAlpha = function () { ht.setClearAlpha.apply(ht, arguments); }, this.clear = function (t = !0, e = !0, i = !0) { let n = 0; t && (n |= 16384), e && (n |= 256), i && (n |= 1024), vt.clear(n); }, this.clearColor = function () { this.clear(!0, !1, !1); }, this.clearDepth = function () { this.clear(!1, !0, !1); }, this.clearStencil = function () { this.clear(!1, !1, !0); }, this.dispose = function () { e.removeEventListener("webglcontextlost", wt, !1), e.removeEventListener("webglcontextrestored", St, !1), e.removeEventListener("webglcontextcreationerror", Tt, !1), at.dispose(), ot.dispose(), J.dispose(), Q.dispose(), tt.dispose(), nt.dispose(), mt.dispose(), gt.dispose(), rt.dispose(), bt.dispose(), bt.removeEventListener("sessionstart", Pt), bt.removeEventListener("sessionend", Rt), F && (F.dispose(), F = null), Dt.stop(); }, this.renderBufferDirect = function (t, e, i, n, r, s) { null === e && (e = W); const a = r.isMesh && r.matrixWorld.determinant() < 0, o = function (t, e, i, n, r) { !0 !== e.isScene && (e = W); $.resetTextureUnits(); const s = e.fog, a = n.isMeshStandardMaterial ? e.environment : null, o = null === w ? _.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : Oe, l = (n.isMeshStandardMaterial ? tt : Q).get(n.envMap || a), c = !0 === n.vertexColors && !!i.attributes.color && 4 === i.attributes.color.itemSize, h = !!n.normalMap && !!i.attributes.tangent, u = !!i.morphAttributes.position, d = !!i.morphAttributes.normal, f = !!i.morphAttributes.color, m = n.toneMapped ? _.toneMapping : K, g = i.morphAttributes.position || i.morphAttributes.normal || i.morphAttributes.color, v = void 0 !== g ? g.length : 0, x = J.get(n), y = p.state.lights; if (!0 === k && (!0 === B || t !== T)) {
        const e = t === T && n.id === S;
        lt.setState(n, t, e);
    } let b = !1; n.version === x.__version ? x.needsLights && x.lightsStateVersion !== y.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? b = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? b = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || !0 === n.fog && x.fog !== s ? b = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === lt.numPlanes && x.numIntersection === lt.numIntersection ? (x.vertexAlphas !== c || x.vertexTangents !== h || x.morphTargets !== u || x.morphNormals !== d || x.morphColors !== f || x.toneMapping !== m || !0 === X.isWebGL2 && x.morphTargetsCount !== v) && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, x.__version = n.version); let M = x.currentProgram; !0 === b && (M = kt(n, e, r)); let E = !1, A = !1, C = !1; const L = M.getUniforms(), D = x.uniforms; Y.useProgram(M.program) && (E = !0, A = !0, C = !0); n.id !== S && (S = n.id, A = !0); if (E || T !== t) {
        if (L.setValue(vt, "projectionMatrix", t.projectionMatrix), X.logarithmicDepthBuffer && L.setValue(vt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), T !== t && (T = t, A = !0, C = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
            const e = L.map.cameraPosition;
            void 0 !== e && e.setValue(vt, H.setFromMatrixPosition(t.matrixWorld));
        }
        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && L.setValue(vt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || r.isSkinnedMesh) && L.setValue(vt, "viewMatrix", t.matrixWorldInverse);
    } if (r.isSkinnedMesh) {
        L.setOptional(vt, r, "bindMatrix"), L.setOptional(vt, r, "bindMatrixInverse");
        const t = r.skeleton;
        t && (X.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), L.setValue(vt, "boneTexture", t.boneTexture, $), L.setValue(vt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    } const I = i.morphAttributes; (void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === X.isWebGL2) && ut.update(r, i, n, M); (A || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow, L.setValue(vt, "receiveShadow", r.receiveShadow)); n.isMeshGouraudMaterial && null !== n.envMap && (D.envMap.value = l, D.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1); A && (L.setValue(vt, "toneMappingExposure", _.toneMappingExposure), x.needsLights && (z = C, (O = D).ambientLightColor.needsUpdate = z, O.lightProbe.needsUpdate = z, O.directionalLights.needsUpdate = z, O.directionalLightShadows.needsUpdate = z, O.pointLights.needsUpdate = z, O.pointLightShadows.needsUpdate = z, O.spotLights.needsUpdate = z, O.spotLightShadows.needsUpdate = z, O.rectAreaLights.needsUpdate = z, O.hemisphereLights.needsUpdate = z), s && !0 === n.fog && st.refreshFogUniforms(D, s), st.refreshMaterialUniforms(D, n, R, P, F), mo.upload(vt, x.uniformsList, D, $)); var O, z; n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (mo.upload(vt, x.uniformsList, D, $), n.uniformsNeedUpdate = !1); n.isSpriteMaterial && L.setValue(vt, "center", r.center); if (L.setValue(vt, "modelViewMatrix", r.modelViewMatrix), L.setValue(vt, "normalMatrix", r.normalMatrix), L.setValue(vt, "modelMatrix", r.matrixWorld), n.isShaderMaterial || n.isRawShaderMaterial) {
        const t = n.uniformsGroups;
        for (let e = 0, i = t.length; e < i; e++)
            if (X.isWebGL2) {
                const i = t[e];
                gt.update(i, M), gt.bind(i, M);
            }
            else
                console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    } return M; }(t, e, i, n, r); Y.setMaterial(n, a); let l = i.index, c = 1; !0 === n.wireframe && (l = it.getWireframeAttribute(i), c = 2); const h = i.drawRange, u = i.attributes.position; let d = h.start * c, f = (h.start + h.count) * c; null !== s && (d = Math.max(d, s.start * c), f = Math.min(f, (s.start + s.count) * c)), null !== l ? (d = Math.max(d, 0), f = Math.min(f, l.count)) : null != u && (d = Math.max(d, 0), f = Math.min(f, u.count)); const m = f - d; if (m < 0 || m === 1 / 0)
        return; let g; mt.setup(r, n, o, i, l); let v = dt; if (null !== l && (g = et.get(l), v = pt, v.setIndex(g)), r.isMesh)
        !0 === n.wireframe ? (Y.setLineWidth(n.wireframeLinewidth * j()), v.setMode(1)) : v.setMode(4);
    else if (r.isLine) {
        let t = n.linewidth;
        void 0 === t && (t = 1), Y.setLineWidth(t * j()), r.isLineSegments ? v.setMode(1) : r.isLineLoop ? v.setMode(2) : v.setMode(3);
    }
    else
        r.isPoints ? v.setMode(0) : r.isSprite && v.setMode(4); if (r.isInstancedMesh)
        v.renderInstances(d, m, r.count);
    else if (i.isInstancedBufferGeometry) {
        const t = void 0 !== i._maxInstanceCount ? i._maxInstanceCount : 1 / 0, e = Math.min(i.instanceCount, t);
        v.renderInstances(d, m, e);
    }
    else
        v.render(d, m); }, this.compile = function (t, e) { function i(t, e, i) { !0 === t.transparent && t.side === g && !1 === t.forceSinglePass ? (t.side = m, t.needsUpdate = !0, kt(t, e, i), t.side = f, t.needsUpdate = !0, kt(t, e, i), t.side = g) : kt(t, e, i); } p = ot.get(t), p.init(), x.push(p), t.traverseVisible((function (t) { t.isLight && t.layers.test(e.layers) && (p.pushLight(t), t.castShadow && p.pushShadow(t)); })), p.setupLights(_.physicallyCorrectLights), t.traverse((function (e) { const n = e.material; if (n)
        if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
                i(n[r], t, e);
            }
        else
            i(n, t, e); })), x.pop(), p = null; }; let At = null; function Pt() { Dt.stop(); } function Rt() { Dt.start(); } const Dt = new Cs; function It(t, e, i, n) { if (!1 === t.visible)
        return; if (t.layers.test(e.layers))
        if (t.isGroup)
            i = t.renderOrder;
        else if (t.isLOD)
            !0 === t.autoUpdate && t.update(e);
        else if (t.isLight)
            p.pushLight(t), t.castShadow && p.pushShadow(t);
        else if (t.isSprite) {
            if (!t.frustumCulled || U.intersectsSprite(t)) {
                n && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
                const e = nt.update(t), r = t.material;
                r.visible && d.push(t, e, r, i, H.z, null);
            }
        }
        else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Z.render.frame && (t.skeleton.update(), t.skeleton.frame = Z.render.frame), !t.frustumCulled || U.intersectsObject(t))) {
            n && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
            const e = nt.update(t), r = t.material;
            if (Array.isArray(r)) {
                const n = e.groups;
                for (let s = 0, a = n.length; s < a; s++) {
                    const a = n[s], o = r[a.materialIndex];
                    o && o.visible && d.push(t, e, o, i, H.z, a);
                }
            }
            else
                r.visible && d.push(t, e, r, i, H.z, null);
        } const r = t.children; for (let t = 0, s = r.length; t < s; t++)
        It(r[t], e, i, n); } function zt(t, e, i, n) { const r = t.opaque, s = t.transmissive, o = t.transparent; p.setupLightsView(i), !0 === k && lt.setGlobalState(_.clippingPlanes, i), s.length > 0 && function (t, e, i) { const n = X.isWebGL2; null === F && (F = new rn(1, 1, { generateMipmaps: !0, type: q.has("EXT_color_buffer_half_float") ? Lt : Mt, minFilter: yt, samples: n && !0 === a ? 4 : 0 })); _.getDrawingBufferSize(V), n ? F.setSize(V.x, V.y) : F.setSize(Ci(V.x), Ci(V.y)); const r = _.getRenderTarget(); _.setRenderTarget(F), _.clear(); const s = _.toneMapping; _.toneMapping = K, Nt(t, e, i), _.toneMapping = s, $.updateMultisampleRenderTarget(F), $.updateRenderTargetMipmap(F), _.setRenderTarget(r); }(r, e, i), n && Y.viewport(E.copy(n)), r.length > 0 && Nt(r, e, i), s.length > 0 && Nt(s, e, i), o.length > 0 && Nt(o, e, i), Y.buffers.depth.setTest(!0), Y.buffers.depth.setMask(!0), Y.buffers.color.setMask(!0), Y.setPolygonOffset(!1); } function Nt(t, e, i) { const n = !0 === e.isScene ? e.overrideMaterial : null; for (let r = 0, s = t.length; r < s; r++) {
        const s = t[r], a = s.object, o = s.geometry, l = null === n ? s.material : n, c = s.group;
        a.layers.test(i.layers) && Ut(a, e, i, o, l, c);
    } } function Ut(t, e, i, n, r, s) { t.onBeforeRender(_, e, i, n, r, s), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(_, e, i, n, t, s), !0 === r.transparent && r.side === g && !1 === r.forceSinglePass ? (r.side = m, r.needsUpdate = !0, _.renderBufferDirect(i, e, n, r, t, s), r.side = f, r.needsUpdate = !0, _.renderBufferDirect(i, e, n, r, t, s), r.side = g) : _.renderBufferDirect(i, e, n, r, t, s), t.onAfterRender(_, e, i, n, r, s); } function kt(t, e, i) { !0 !== e.isScene && (e = W); const n = J.get(t), r = p.state.lights, s = p.state.shadowsArray, a = r.state.version, o = rt.getParameters(t, r.state, s, e, i), l = rt.getProgramCacheKey(o); let c = n.programs; n.environment = t.isMeshStandardMaterial ? e.environment : null, n.fog = e.fog, n.envMap = (t.isMeshStandardMaterial ? tt : Q).get(t.envMap || n.environment), void 0 === c && (t.addEventListener("dispose", Et), c = new Map, n.programs = c); let h = c.get(l); if (void 0 !== h) {
        if (n.currentProgram === h && n.lightsStateVersion === a)
            return Bt(t, o), h;
    }
    else
        o.uniforms = rt.getUniforms(t), t.onBuild(i, o, _), t.onBeforeCompile(o, _), h = rt.acquireProgram(o, l), c.set(l, h), n.uniforms = o.uniforms; const u = n.uniforms; (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = lt.uniform), Bt(t, o), n.needsLights = function (t) { return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights; }(t), n.lightsStateVersion = a, n.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotLightMatrix.value = r.state.spotLightMatrix, u.spotLightMap.value = r.state.spotLightMap, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix); const d = h.getUniforms(), f = mo.seqWithValue(d.seq, u); return n.currentProgram = h, n.uniformsList = f, h; } function Bt(t, e) { const i = J.get(t); i.outputEncoding = e.outputEncoding, i.instancing = e.instancing, i.skinning = e.skinning, i.morphTargets = e.morphTargets, i.morphNormals = e.morphNormals, i.morphColors = e.morphColors, i.morphTargetsCount = e.morphTargetsCount, i.numClippingPlanes = e.numClippingPlanes, i.numIntersection = e.numClipIntersection, i.vertexAlphas = e.vertexAlphas, i.vertexTangents = e.vertexTangents, i.toneMapping = e.toneMapping; } Dt.setAnimationLoop((function (t) { At && At(t); })), "undefined" != typeof self && Dt.setContext(self), this.setAnimationLoop = function (t) { At = t, bt.setAnimationLoop(t), null === t ? Dt.stop() : Dt.start(); }, bt.addEventListener("sessionstart", Pt), bt.addEventListener("sessionend", Rt), this.render = function (t, e) { if (void 0 !== e && !0 !== e.isCamera)
        return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); if (!0 === y)
        return; !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === bt.enabled && !0 === bt.isPresenting && (!0 === bt.cameraAutoUpdate && bt.updateCamera(e), e = bt.getCamera()), !0 === t.isScene && t.onBeforeRender(_, t, e, w), p = ot.get(t, x.length), p.init(), x.push(p), G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), U.setFromProjectionMatrix(G), B = this.localClippingEnabled, k = lt.init(this.clippingPlanes, B), d = at.get(t, v.length), d.init(), v.push(d), It(t, e, 0, _.sortObjects), d.finish(), !0 === _.sortObjects && d.sort(D, I), !0 === k && lt.beginShadows(); const i = p.state.shadowsArray; if (ct.render(i, t, e), !0 === k && lt.endShadows(), !0 === this.info.autoReset && this.info.reset(), ht.render(d, t), p.setupLights(_.physicallyCorrectLights), e.isArrayCamera) {
        const i = e.cameras;
        for (let e = 0, n = i.length; e < n; e++) {
            const n = i[e];
            zt(d, t, n, n.viewport);
        }
    }
    else
        zt(d, t, e); null !== w && ($.updateMultisampleRenderTarget(w), $.updateRenderTargetMipmap(w)), !0 === t.isScene && t.onAfterRender(_, t, e), mt.resetDefaultState(), S = -1, T = null, x.pop(), p = x.length > 0 ? x[x.length - 1] : null, v.pop(), d = v.length > 0 ? v[v.length - 1] : null; }, this.getActiveCubeFace = function () { return b; }, this.getActiveMipmapLevel = function () { return M; }, this.getRenderTarget = function () { return w; }, this.setRenderTargetTextures = function (t, e, i) { J.get(t.texture).__webglTexture = e, J.get(t.depthTexture).__webglTexture = i; const n = J.get(t); n.__hasExternalTextures = !0, n.__hasExternalTextures && (n.__autoAllocateDepthBuffer = void 0 === i, n.__autoAllocateDepthBuffer || !0 === q.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), n.__useRenderToTexture = !1)); }, this.setRenderTargetFramebuffer = function (t, e) { const i = J.get(t); i.__webglFramebuffer = e, i.__useDefaultFramebuffer = void 0 === e; }, this.setRenderTarget = function (t, e = 0, i = 0) { w = t, b = e, M = i; let n = !0, r = null, s = !1, a = !1; if (t) {
        const i = J.get(t);
        void 0 !== i.__useDefaultFramebuffer ? (Y.bindFramebuffer(36160, null), n = !1) : void 0 === i.__webglFramebuffer ? $.setupRenderTarget(t) : i.__hasExternalTextures && $.rebindTextures(t, J.get(t.texture).__webglTexture, J.get(t.depthTexture).__webglTexture);
        const o = t.texture;
        (o.isData3DTexture || o.isDataArrayTexture || o.isCompressedArrayTexture) && (a = !0);
        const l = J.get(t).__webglFramebuffer;
        t.isWebGLCubeRenderTarget ? (r = l[e], s = !0) : r = X.isWebGL2 && t.samples > 0 && !1 === $.useMultisampledRTT(t) ? J.get(t).__webglMultisampledFramebuffer : l, E.copy(t.viewport), A.copy(t.scissor), C = t.scissorTest;
    }
    else
        E.copy(O).multiplyScalar(R).floor(), A.copy(z).multiplyScalar(R).floor(), C = N; if (Y.bindFramebuffer(36160, r) && X.drawBuffers && n && Y.drawBuffers(t, r), Y.viewport(E), Y.scissor(A), Y.setScissorTest(C), s) {
        const n = J.get(t.texture);
        vt.framebufferTexture2D(36160, 36064, 34069 + e, n.__webglTexture, i);
    }
    else if (a) {
        const n = J.get(t.texture), r = e || 0;
        vt.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, r);
    } S = -1; }, this.readRenderTargetPixels = function (t, e, i, n, r, s, a) { if (!t || !t.isWebGLRenderTarget)
        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let o = J.get(t).__webglFramebuffer; if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
        Y.bindFramebuffer(36160, o);
        try {
            const a = t.texture, o = a.format, l = a.type;
            if (o !== Ot && ft.convert(o) !== vt.getParameter(35739))
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            const c = l === Lt && (q.has("EXT_color_buffer_half_float") || X.isWebGL2 && q.has("EXT_color_buffer_float"));
            if (!(l === Mt || ft.convert(l) === vt.getParameter(35738) || l === Ct && (X.isWebGL2 || q.has("OES_texture_float") || q.has("WEBGL_color_buffer_float")) || c))
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && vt.readPixels(e, i, n, r, ft.convert(o), ft.convert(l), s);
        }
        finally {
            const t = null !== w ? J.get(w).__webglFramebuffer : null;
            Y.bindFramebuffer(36160, t);
        }
    } }, this.copyFramebufferToTexture = function (t, e, i = 0) { const n = Math.pow(2, -i), r = Math.floor(e.image.width * n), s = Math.floor(e.image.height * n); $.setTexture2D(e, 0), vt.copyTexSubImage2D(3553, i, 0, 0, t.x, t.y, r, s), Y.unbindTexture(); }, this.copyTextureToTexture = function (t, e, i, n = 0) { const r = e.image.width, s = e.image.height, a = ft.convert(i.format), o = ft.convert(i.type); $.setTexture2D(i, 0), vt.pixelStorei(37440, i.flipY), vt.pixelStorei(37441, i.premultiplyAlpha), vt.pixelStorei(3317, i.unpackAlignment), e.isDataTexture ? vt.texSubImage2D(3553, n, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? vt.compressedTexSubImage2D(3553, n, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : vt.texSubImage2D(3553, n, t.x, t.y, a, o, e.image), 0 === n && i.generateMipmaps && vt.generateMipmap(3553), Y.unbindTexture(); }, this.copyTextureToTexture3D = function (t, e, i, n, r = 0) { if (_.isWebGL1Renderer)
        return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); const s = t.max.x - t.min.x + 1, a = t.max.y - t.min.y + 1, o = t.max.z - t.min.z + 1, l = ft.convert(n.format), c = ft.convert(n.type); let h; if (n.isData3DTexture)
        $.setTexture3D(n, 0), h = 32879;
    else {
        if (!n.isDataArrayTexture)
            return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        $.setTexture2DArray(n, 0), h = 35866;
    } vt.pixelStorei(37440, n.flipY), vt.pixelStorei(37441, n.premultiplyAlpha), vt.pixelStorei(3317, n.unpackAlignment); const u = vt.getParameter(3314), d = vt.getParameter(32878), p = vt.getParameter(3316), f = vt.getParameter(3315), m = vt.getParameter(32877), g = i.isCompressedTexture ? i.mipmaps[0] : i.image; vt.pixelStorei(3314, g.width), vt.pixelStorei(32878, g.height), vt.pixelStorei(3316, t.min.x), vt.pixelStorei(3315, t.min.y), vt.pixelStorei(32877, t.min.z), i.isDataTexture || i.isData3DTexture ? vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g.data) : i.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), vt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, g.data)) : vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g), vt.pixelStorei(3314, u), vt.pixelStorei(32878, d), vt.pixelStorei(3316, p), vt.pixelStorei(3315, f), vt.pixelStorei(32877, m), 0 === r && n.generateMipmaps && vt.generateMipmap(h), Y.unbindTexture(); }, this.initTexture = function (t) { t.isCubeTexture ? $.setTextureCube(t, 0) : t.isData3DTexture ? $.setTexture3D(t, 0) : t.isDataArrayTexture || t.isCompressedArrayTexture ? $.setTexture2DArray(t, 0) : $.setTexture2D(t, 0), Y.unbindTexture(); }, this.resetState = function () { b = 0, M = 0, w = null, Y.reset(), mt.reset(); }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })); }
    class ll extends ol {
    }
    ll.prototype.isWebGL1Renderer = !0;
    class cl {
        constructor(t, e = 25e-5) { this.isFogExp2 = !0, this.name = "", this.color = new Zi(t), this.density = e; }
        clone() { return new cl(this.color, this.density); }
        toJSON() { return { type: "FogExp2", color: this.color.getHex(), density: this.density }; }
    }
    class hl {
        constructor(t, e = 1, i = 1e3) { this.isFog = !0, this.name = "", this.color = new Zi(t), this.near = e, this.far = i; }
        clone() { return new hl(this.color, this.near, this.far); }
        toJSON() { return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far }; }
    }
    class ul extends dr {
        constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })); }
        copy(t, e) { return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this; }
        toJSON(t) { const e = super.toJSON(t); return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e; }
        get autoUpdate() { return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate; }
        set autoUpdate(t) { console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t; }
    }
    class dl {
        constructor(t, e) { this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = si, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Mi(); }
        onUploadCallback() { }
        set needsUpdate(t) { !0 === t && this.version++; }
        setUsage(t) { return this.usage = t, this; }
        copy(t) { return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this; }
        copyAt(t, e, i) { t *= this.stride, i *= e.stride; for (let n = 0, r = this.stride; n < r; n++)
            this.array[t + n] = e.array[i + n]; return this; }
        set(t, e = 0) { return this.array.set(t, e), this; }
        clone(t) { void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Mi()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(e, this.stride); return i.setUsage(this.usage), i; }
        onUpload(t) { return this.onUploadCallback = t, this; }
        toJSON(t) { return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Mi()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride }; }
    }
    const pl = new un;
    class fl {
        constructor(t, e, i, n = !1) { this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = i, this.normalized = n; }
        get count() { return this.data.count; }
        get array() { return this.data.array; }
        set needsUpdate(t) { this.data.needsUpdate = t; }
        applyMatrix4(t) { for (let e = 0, i = this.data.count; e < i; e++)
            pl.fromBufferAttribute(this, e), pl.applyMatrix4(t), this.setXYZ(e, pl.x, pl.y, pl.z); return this; }
        applyNormalMatrix(t) { for (let e = 0, i = this.count; e < i; e++)
            pl.fromBufferAttribute(this, e), pl.applyNormalMatrix(t), this.setXYZ(e, pl.x, pl.y, pl.z); return this; }
        transformDirection(t) { for (let e = 0, i = this.count; e < i; e++)
            pl.fromBufferAttribute(this, e), pl.transformDirection(t), this.setXYZ(e, pl.x, pl.y, pl.z); return this; }
        setX(t, e) { return this.normalized && (e = Pi(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this; }
        setY(t, e) { return this.normalized && (e = Pi(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this; }
        setZ(t, e) { return this.normalized && (e = Pi(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this; }
        setW(t, e) { return this.normalized && (e = Pi(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this; }
        getX(t) { let e = this.data.array[t * this.data.stride + this.offset]; return this.normalized && (e = Li(e, this.array)), e; }
        getY(t) { let e = this.data.array[t * this.data.stride + this.offset + 1]; return this.normalized && (e = Li(e, this.array)), e; }
        getZ(t) { let e = this.data.array[t * this.data.stride + this.offset + 2]; return this.normalized && (e = Li(e, this.array)), e; }
        getW(t) { let e = this.data.array[t * this.data.stride + this.offset + 3]; return this.normalized && (e = Li(e, this.array)), e; }
        setXY(t, e, i) { return t = t * this.data.stride + this.offset, this.normalized && (e = Pi(e, this.array), i = Pi(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this; }
        setXYZ(t, e, i, n) { return t = t * this.data.stride + this.offset, this.normalized && (e = Pi(e, this.array), i = Pi(i, this.array), n = Pi(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this; }
        setXYZW(t, e, i, n, r) { return t = t * this.data.stride + this.offset, this.normalized && (e = Pi(e, this.array), i = Pi(i, this.array), n = Pi(n, this.array), r = Pi(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this; }
        clone(t) { if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const i = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++)
                    t.push(this.data.array[i + e]);
            }
            return new Lr(new this.array.constructor(t), this.itemSize, this.normalized);
        } return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new fl(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized); }
        toJSON(t) { if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const i = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++)
                    t.push(this.data.array[i + e]);
            }
            return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
        } return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized }; }
    }
    class ml extends Tr {
        constructor(t) { super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Zi(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this; }
    }
    let gl;
    const vl = new un, xl = new un, _l = new un, yl = new Di, bl = new Di, Ml = new Gn, wl = new un, Sl = new un, Tl = new un, El = new Di, Al = new Di, Cl = new Di;
    class Ll extends dr {
        constructor(t) { if (super(), this.isSprite = !0, this.type = "Sprite", void 0 === gl) {
            gl = new Xr;
            const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), e = new dl(t, 5);
            gl.setIndex([0, 1, 2, 0, 2, 3]), gl.setAttribute("position", new fl(e, 3, 0, !1)), gl.setAttribute("uv", new fl(e, 2, 3, !1));
        } this.geometry = gl, this.material = void 0 !== t ? t : new ml, this.center = new Di(.5, .5); }
        raycast(t, e) { null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), xl.setFromMatrixScale(this.matrixWorld), Ml.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), _l.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && xl.multiplyScalar(-_l.z); const i = this.material.rotation; let n, r; 0 !== i && (r = Math.cos(i), n = Math.sin(i)); const s = this.center; Pl(wl.set(-.5, -.5, 0), _l, s, xl, n, r), Pl(Sl.set(.5, -.5, 0), _l, s, xl, n, r), Pl(Tl.set(.5, .5, 0), _l, s, xl, n, r), El.set(0, 0), Al.set(1, 0), Cl.set(1, 1); let a = t.ray.intersectTriangle(wl, Sl, Tl, !1, vl); if (null === a && (Pl(Sl.set(-.5, .5, 0), _l, s, xl, n, r), Al.set(0, 1), a = t.ray.intersectTriangle(wl, Tl, Sl, !1, vl), null === a))
            return; const o = t.ray.origin.distanceTo(vl); o < t.near || o > t.far || e.push({ distance: o, point: vl.clone(), uv: wr.getUV(vl, wl, Sl, Tl, El, Al, Cl, new Di), face: null, object: this }); }
        copy(t, e) { return super.copy(t, e), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this; }
    }
    function Pl(t, e, i, n, r, s) { yl.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (bl.x = s * yl.x - r * yl.y, bl.y = r * yl.x + s * yl.y) : bl.copy(yl), t.copy(e), t.x += bl.x, t.y += bl.y, t.applyMatrix4(Ml); }
    const Rl = new un, Dl = new un;
    class Il extends dr {
        constructor() { super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] }, isLOD: { value: !0 } }), this.autoUpdate = !0; }
        copy(t) { super.copy(t, !1); const e = t.levels; for (let t = 0, i = e.length; t < i; t++) {
            const i = e[t];
            this.addLevel(i.object.clone(), i.distance, i.hysteresis);
        } return this.autoUpdate = t.autoUpdate, this; }
        addLevel(t, e = 0, i = 0) { e = Math.abs(e); const n = this.levels; let r; for (r = 0; r < n.length && !(e < n[r].distance); r++)
            ; return n.splice(r, 0, { distance: e, hysteresis: i, object: t }), this.add(t), this; }
        getCurrentLevel() { return this._currentLevel; }
        getObjectForDistance(t) { const e = this.levels; if (e.length > 0) {
            let i, n;
            for (i = 1, n = e.length; i < n; i++) {
                let n = e[i].distance;
                if (e[i].object.visible && (n -= n * e[i].hysteresis), t < n)
                    break;
            }
            return e[i - 1].object;
        } return null; }
        raycast(t, e) { if (this.levels.length > 0) {
            Rl.setFromMatrixPosition(this.matrixWorld);
            const i = t.ray.origin.distanceTo(Rl);
            this.getObjectForDistance(i).raycast(t, e);
        } }
        update(t) { const e = this.levels; if (e.length > 1) {
            Rl.setFromMatrixPosition(t.matrixWorld), Dl.setFromMatrixPosition(this.matrixWorld);
            const i = Rl.distanceTo(Dl) / t.zoom;
            let n, r;
            for (e[0].object.visible = !0, n = 1, r = e.length; n < r; n++) {
                let t = e[n].distance;
                if (e[n].object.visible && (t -= t * e[n].hysteresis), !(i >= t))
                    break;
                e[n - 1].object.visible = !1, e[n].object.visible = !0;
            }
            for (this._currentLevel = n - 1; n < r; n++)
                e[n].object.visible = !1;
        } }
        toJSON(t) { const e = super.toJSON(t); !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = []; const i = this.levels; for (let t = 0, n = i.length; t < n; t++) {
            const n = i[t];
            e.object.levels.push({ object: n.object.uuid, distance: n.distance, hysteresis: n.hysteresis });
        } return e; }
    }
    const Ol = new un, zl = new nn, Nl = new nn, Ul = new un, kl = new Gn;
    class Bl extends os {
        constructor(t, e) { super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Gn, this.bindMatrixInverse = new Gn; }
        copy(t, e) { return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this; }
        bind(t, e) { this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert(); }
        pose() { this.skeleton.pose(); }
        normalizeSkinWeights() { const t = new nn, e = this.geometry.attributes.skinWeight; for (let i = 0, n = e.count; i < n; i++) {
            t.fromBufferAttribute(e, i);
            const n = 1 / t.manhattanLength();
            n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w);
        } }
        updateMatrixWorld(t) { super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode); }
        boneTransform(t, e) { const i = this.skeleton, n = this.geometry; zl.fromBufferAttribute(n.attributes.skinIndex, t), Nl.fromBufferAttribute(n.attributes.skinWeight, t), Ol.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0); for (let t = 0; t < 4; t++) {
            const n = Nl.getComponent(t);
            if (0 !== n) {
                const r = zl.getComponent(t);
                kl.multiplyMatrices(i.bones[r].matrixWorld, i.boneInverses[r]), e.addScaledVector(Ul.copy(Ol).applyMatrix4(kl), n);
            }
        } return e.applyMatrix4(this.bindMatrixInverse); }
    }
    class Fl extends dr {
        constructor() { super(), this.isBone = !0, this.type = "Bone"; }
    }
    class Gl extends en {
        constructor(t = null, e = 1, i = 1, n, r, s, a, o, l = dt, c = dt, h, u) { super(null, s, a, o, l, c, n, r, h, u), this.isDataTexture = !0, this.image = { data: t, width: e, height: i }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1; }
    }
    const Vl = new Gn, Hl = new Gn;
    class Wl {
        constructor(t = [], e = []) { this.uuid = Mi(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init(); }
        init() { const t = this.bones, e = this.boneInverses; if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length)
            this.calculateInverses();
        else if (t.length !== e.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for (let t = 0, e = this.bones.length; t < e; t++)
                this.boneInverses.push(new Gn);
        } }
        calculateInverses() { this.boneInverses.length = 0; for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = new Gn;
            this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e);
        } }
        pose() { for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && e.matrixWorld.copy(this.boneInverses[t]).invert();
        } for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
        } }
        update() { const t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture; for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n] ? t[n].matrixWorld : Hl;
            Vl.multiplyMatrices(r, e[n]), Vl.toArray(i, 16 * n);
        } null !== n && (n.needsUpdate = !0); }
        clone() { return new Wl(this.bones, this.boneInverses); }
        computeBoneTexture() { let t = Math.sqrt(4 * this.bones.length); t = Ai(t), t = Math.max(t, 4); const e = new Float32Array(t * t * 4); e.set(this.boneMatrices); const i = new Gl(e, t, t, Ot, Ct); return i.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = i, this.boneTextureSize = t, this; }
        getBoneByName(t) { for (let e = 0, i = this.bones.length; e < i; e++) {
            const i = this.bones[e];
            if (i.name === t)
                return i;
        } }
        dispose() { null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null); }
        fromJSON(t, e) { this.uuid = t.uuid; for (let i = 0, n = t.bones.length; i < n; i++) {
            const n = t.bones[i];
            let r = e[n];
            void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", n), r = new Fl), this.bones.push(r), this.boneInverses.push((new Gn).fromArray(t.boneInverses[i]));
        } return this.init(), this; }
        toJSON() { const t = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] }; t.uuid = this.uuid; const e = this.bones, i = this.boneInverses; for (let n = 0, r = e.length; n < r; n++) {
            const r = e[n];
            t.bones.push(r.uuid);
            const s = i[n];
            t.boneInverses.push(s.toArray());
        } return t; }
    }
    class jl extends Lr {
        constructor(t, e, i, n = 1) { super(t, e, i), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = n; }
        copy(t) { return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this; }
        toJSON() { const t = super.toJSON(); return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t; }
    }
    const ql = new Gn, Xl = new Gn, Yl = [], Zl = new Gn, Jl = new os;
    class Kl extends os {
        constructor(t, e, i) { super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new jl(new Float32Array(16 * i), 16), this.instanceColor = null, this.count = i, this.frustumCulled = !1; for (let t = 0; t < i; t++)
            this.setMatrixAt(t, Zl); }
        copy(t, e) { return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this; }
        getColorAt(t, e) { e.fromArray(this.instanceColor.array, 3 * t); }
        getMatrixAt(t, e) { e.fromArray(this.instanceMatrix.array, 16 * t); }
        raycast(t, e) { const i = this.matrixWorld, n = this.count; if (Jl.geometry = this.geometry, Jl.material = this.material, void 0 !== Jl.material)
            for (let r = 0; r < n; r++) {
                this.getMatrixAt(r, ql), Xl.multiplyMatrices(i, ql), Jl.matrixWorld = Xl, Jl.raycast(t, Yl);
                for (let t = 0, i = Yl.length; t < i; t++) {
                    const i = Yl[t];
                    i.instanceId = r, i.object = this, e.push(i);
                }
                Yl.length = 0;
            } }
        setColorAt(t, e) { null === this.instanceColor && (this.instanceColor = new jl(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t); }
        setMatrixAt(t, e) { e.toArray(this.instanceMatrix.array, 16 * t); }
        updateMorphTargets() { }
        dispose() { this.dispatchEvent({ type: "dispose" }); }
    }
    class $l extends Tr {
        constructor(t) { super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Zi(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this; }
    }
    const Ql = new un, tc = new un, ec = new Gn, ic = new Fn, nc = new Dn;
    class rc extends dr {
        constructor(t = new Xr, e = new $l) { super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets(); }
        copy(t, e) { return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this; }
        computeLineDistances() { const t = this.geometry; if (null === t.index) {
            const e = t.attributes.position, i = [0];
            for (let t = 1, n = e.count; t < n; t++)
                Ql.fromBufferAttribute(e, t - 1), tc.fromBufferAttribute(e, t), i[t] = i[t - 1], i[t] += Ql.distanceTo(tc);
            t.setAttribute("lineDistance", new kr(i, 1));
        }
        else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this; }
        raycast(t, e) { const i = this.geometry, n = this.matrixWorld, r = t.params.Line.threshold, s = i.drawRange; if (null === i.boundingSphere && i.computeBoundingSphere(), nc.copy(i.boundingSphere), nc.applyMatrix4(n), nc.radius += r, !1 === t.ray.intersectsSphere(nc))
            return; ec.copy(n).invert(), ic.copy(t.ray).applyMatrix4(ec); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new un, c = new un, h = new un, u = new un, d = this.isLineSegments ? 2 : 1, p = i.index, f = i.attributes.position; if (null !== p) {
            for (let i = Math.max(0, s.start), n = Math.min(p.count, s.start + s.count) - 1; i < n; i += d) {
                const n = p.getX(i), r = p.getX(i + 1);
                l.fromBufferAttribute(f, n), c.fromBufferAttribute(f, r);
                if (ic.distanceSqToSegment(l, c, u, h) > o)
                    continue;
                u.applyMatrix4(this.matrixWorld);
                const s = t.ray.origin.distanceTo(u);
                s < t.near || s > t.far || e.push({ distance: s, point: h.clone().applyMatrix4(this.matrixWorld), index: i, face: null, faceIndex: null, object: this });
            }
        }
        else {
            for (let i = Math.max(0, s.start), n = Math.min(f.count, s.start + s.count) - 1; i < n; i += d) {
                l.fromBufferAttribute(f, i), c.fromBufferAttribute(f, i + 1);
                if (ic.distanceSqToSegment(l, c, u, h) > o)
                    continue;
                u.applyMatrix4(this.matrixWorld);
                const n = t.ray.origin.distanceTo(u);
                n < t.near || n > t.far || e.push({ distance: n, point: h.clone().applyMatrix4(this.matrixWorld), index: i, face: null, faceIndex: null, object: this });
            }
        } }
        updateMorphTargets() { const t = this.geometry.morphAttributes, e = Object.keys(t); if (e.length > 0) {
            const i = t[e[0]];
            if (void 0 !== i) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = i.length; t < e; t++) {
                    const e = i[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                }
            }
        } }
    }
    const sc = new un, ac = new un;
    class oc extends rc {
        constructor(t, e) { super(t, e), this.isLineSegments = !0, this.type = "LineSegments"; }
        computeLineDistances() { const t = this.geometry; if (null === t.index) {
            const e = t.attributes.position, i = [];
            for (let t = 0, n = e.count; t < n; t += 2)
                sc.fromBufferAttribute(e, t), ac.fromBufferAttribute(e, t + 1), i[t] = 0 === t ? 0 : i[t - 1], i[t + 1] = i[t] + sc.distanceTo(ac);
            t.setAttribute("lineDistance", new kr(i, 1));
        }
        else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this; }
    }
    class lc extends rc {
        constructor(t, e) { super(t, e), this.isLineLoop = !0, this.type = "LineLoop"; }
    }
    class cc extends Tr {
        constructor(t) { super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Zi(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this; }
    }
    const hc = new Gn, uc = new Fn, dc = new Dn, pc = new un;
    class fc extends dr {
        constructor(t = new Xr, e = new cc) { super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets(); }
        copy(t, e) { return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this; }
        raycast(t, e) { const i = this.geometry, n = this.matrixWorld, r = t.params.Points.threshold, s = i.drawRange; if (null === i.boundingSphere && i.computeBoundingSphere(), dc.copy(i.boundingSphere), dc.applyMatrix4(n), dc.radius += r, !1 === t.ray.intersectsSphere(dc))
            return; hc.copy(n).invert(), uc.copy(t.ray).applyMatrix4(hc); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = i.index, c = i.attributes.position; if (null !== l) {
            for (let i = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count); i < r; i++) {
                const r = l.getX(i);
                pc.fromBufferAttribute(c, r), mc(pc, r, o, n, t, e, this);
            }
        }
        else {
            for (let i = Math.max(0, s.start), r = Math.min(c.count, s.start + s.count); i < r; i++)
                pc.fromBufferAttribute(c, i), mc(pc, i, o, n, t, e, this);
        } }
        updateMorphTargets() { const t = this.geometry.morphAttributes, e = Object.keys(t); if (e.length > 0) {
            const i = t[e[0]];
            if (void 0 !== i) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = i.length; t < e; t++) {
                    const e = i[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                }
            }
        } }
    }
    function mc(t, e, i, n, r, s, a) { const o = uc.distanceSqToPoint(t); if (o < i) {
        const i = new un;
        uc.closestPointToPoint(t, i), i.applyMatrix4(n);
        const l = r.ray.origin.distanceTo(i);
        if (l < r.near || l > r.far)
            return;
        s.push({ distance: l, distanceToRay: Math.sqrt(o), point: i, index: e, face: null, object: a });
    } }
    class gc extends en {
        constructor(t, e, i, n, r, s, a, o, l) { super(t, e, i, n, r, s, a, o, l), this.isVideoTexture = !0, this.minFilter = void 0 !== s ? s : vt, this.magFilter = void 0 !== r ? r : vt, this.generateMipmaps = !1; const c = this; "requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() { c.needsUpdate = !0, t.requestVideoFrameCallback(e); })); }
        clone() { return new this.constructor(this.image).copy(this); }
        update() { const t = this.image; !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0); }
    }
    class vc extends en {
        constructor(t, e, i) { super({ width: t, height: e }), this.isFramebufferTexture = !0, this.format = i, this.magFilter = dt, this.minFilter = dt, this.generateMipmaps = !1, this.needsUpdate = !0; }
    }
    class xc extends en {
        constructor(t, e, i, n, r, s, a, o, l, c, h, u) { super(null, s, a, o, l, c, n, r, h, u), this.isCompressedTexture = !0, this.image = { width: e, height: i }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1; }
    }
    class _c extends xc {
        constructor(t, e, i, n, r, s) { super(t, e, i, r, s), this.isCompressedArrayTexture = !0, this.image.depth = n, this.wrapR = ht; }
    }
    class yc extends en {
        constructor(t, e, i, n, r, s, a, o, l) { super(t, e, i, n, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0; }
    }
    class bc {
        constructor() { this.type = "Curve", this.arcLengthDivisions = 200; }
        getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null; }
        getPointAt(t, e) { const i = this.getUtoTmapping(t); return this.getPoint(i, e); }
        getPoints(t = 5) { const e = []; for (let i = 0; i <= t; i++)
            e.push(this.getPoint(i / t)); return e; }
        getSpacedPoints(t = 5) { const e = []; for (let i = 0; i <= t; i++)
            e.push(this.getPointAt(i / t)); return e; }
        getLength() { const t = this.getLengths(); return t[t.length - 1]; }
        getLengths(t = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
            return this.cacheArcLengths; this.needsUpdate = !1; const e = []; let i, n = this.getPoint(0), r = 0; e.push(0); for (let s = 1; s <= t; s++)
            i = this.getPoint(s / t), r += i.distanceTo(n), e.push(r), n = i; return this.cacheArcLengths = e, e; }
        updateArcLengths() { this.needsUpdate = !0, this.getLengths(); }
        getUtoTmapping(t, e) { const i = this.getLengths(); let n = 0; const r = i.length; let s; s = e || t * i[r - 1]; let a, o = 0, l = r - 1; for (; o <= l;)
            if (n = Math.floor(o + (l - o) / 2), a = i[n] - s, a < 0)
                o = n + 1;
            else {
                if (!(a > 0)) {
                    l = n;
                    break;
                }
                l = n - 1;
            } if (n = l, i[n] === s)
            return n / (r - 1); const c = i[n]; return (n + (s - c) / (i[n + 1] - c)) / (r - 1); }
        getTangent(t, e) { const i = 1e-4; let n = t - i, r = t + i; n < 0 && (n = 0), r > 1 && (r = 1); const s = this.getPoint(n), a = this.getPoint(r), o = e || (s.isVector2 ? new Di : new un); return o.copy(a).sub(s).normalize(), o; }
        getTangentAt(t, e) { const i = this.getUtoTmapping(t); return this.getTangent(i, e); }
        computeFrenetFrames(t, e) { const i = new un, n = [], r = [], s = [], a = new un, o = new Gn; for (let e = 0; e <= t; e++) {
            const i = e / t;
            n[e] = this.getTangentAt(i, new un);
        } r[0] = new un, s[0] = new un; let l = Number.MAX_VALUE; const c = Math.abs(n[0].x), h = Math.abs(n[0].y), u = Math.abs(n[0].z); c <= l && (l = c, i.set(1, 0, 0)), h <= l && (l = h, i.set(0, 1, 0)), u <= l && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], a), s[0].crossVectors(n[0], r[0]); for (let e = 1; e <= t; e++) {
            if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(n[e - 1], n[e]), a.length() > Number.EPSILON) {
                a.normalize();
                const t = Math.acos(wi(n[e - 1].dot(n[e]), -1, 1));
                r[e].applyMatrix4(o.makeRotationAxis(a, t));
            }
            s[e].crossVectors(n[e], r[e]);
        } if (!0 === e) {
            let e = Math.acos(wi(r[0].dot(r[t]), -1, 1));
            e /= t, n[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
            for (let i = 1; i <= t; i++)
                r[i].applyMatrix4(o.makeRotationAxis(n[i], e * i)), s[i].crossVectors(n[i], r[i]);
        } return { tangents: n, normals: r, binormals: s }; }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this; }
        toJSON() { const t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t; }
        fromJSON(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this; }
    }
    class Mc extends bc {
        constructor(t = 0, e = 0, i = 1, n = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0) { super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o; }
        getPoint(t, e) { const i = e || new Di, n = 2 * Math.PI; let r = this.aEndAngle - this.aStartAngle; const s = Math.abs(r) < Number.EPSILON; for (; r < 0;)
            r += n; for (; r > n;)
            r -= n; r < Number.EPSILON && (r = s ? 0 : n), !0 !== this.aClockwise || s || (r === n ? r = -n : r -= n); const a = this.aStartAngle + t * r; let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a); if (0 !== this.aRotation) {
            const t = Math.cos(this.aRotation), e = Math.sin(this.aRotation), i = o - this.aX, n = l - this.aY;
            o = i * t - n * e + this.aX, l = i * e + n * t + this.aY;
        } return i.set(o, l); }
        copy(t) { return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this; }
        toJSON() { const t = super.toJSON(); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t; }
        fromJSON(t) { return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this; }
    }
    class wc extends Mc {
        constructor(t, e, i, n, r, s) { super(t, e, i, i, n, r, s), this.isArcCurve = !0, this.type = "ArcCurve"; }
    }
    function Sc() { let t = 0, e = 0, i = 0, n = 0; function r(r, s, a, o) { t = r, e = a, i = -3 * r + 3 * s - 2 * a - o, n = 2 * r - 2 * s + a + o; } return { initCatmullRom: function (t, e, i, n, s) { r(e, i, s * (i - t), s * (n - e)); }, initNonuniformCatmullRom: function (t, e, i, n, s, a, o) { let l = (e - t) / s - (i - t) / (s + a) + (i - e) / a, c = (i - e) / a - (n - e) / (a + o) + (n - i) / o; l *= a, c *= a, r(e, i, l, c); }, calc: function (r) { const s = r * r; return t + e * r + i * s + n * (s * r); } }; }
    const Tc = new un, Ec = new Sc, Ac = new Sc, Cc = new Sc;
    class Lc extends bc {
        constructor(t = [], e = !1, i = "centripetal", n = .5) { super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = i, this.tension = n; }
        getPoint(t, e = new un) { const i = e, n = this.points, r = n.length, s = (r - (this.closed ? 0 : 1)) * t; let a, o, l = Math.floor(s), c = s - l; this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = n[(l - 1) % r] : (Tc.subVectors(n[0], n[1]).add(n[0]), a = Tc); const h = n[l % r], u = n[(l + 1) % r]; if (this.closed || l + 2 < r ? o = n[(l + 2) % r] : (Tc.subVectors(n[r - 1], n[r - 2]).add(n[r - 1]), o = Tc), "centripetal" === this.curveType || "chordal" === this.curveType) {
            const t = "chordal" === this.curveType ? .5 : .25;
            let e = Math.pow(a.distanceToSquared(h), t), i = Math.pow(h.distanceToSquared(u), t), n = Math.pow(u.distanceToSquared(o), t);
            i < 1e-4 && (i = 1), e < 1e-4 && (e = i), n < 1e-4 && (n = i), Ec.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, i, n), Ac.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, i, n), Cc.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, i, n);
        }
        else
            "catmullrom" === this.curveType && (Ec.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), Ac.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), Cc.initCatmullRom(a.z, h.z, u.z, o.z, this.tension)); return i.set(Ec.calc(c), Ac.calc(c), Cc.calc(c)), i; }
        copy(t) { super.copy(t), this.points = []; for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push(i.clone());
        } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this; }
        toJSON() { const t = super.toJSON(); t.points = []; for (let e = 0, i = this.points.length; e < i; e++) {
            const i = this.points[e];
            t.points.push(i.toArray());
        } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t; }
        fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push((new un).fromArray(i));
        } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this; }
    }
    function Pc(t, e, i, n, r) { const s = .5 * (n - e), a = .5 * (r - i), o = t * t; return (2 * i - 2 * n + s + a) * (t * o) + (-3 * i + 3 * n - 2 * s - a) * o + s * t + i; }
    function Rc(t, e, i, n) { return function (t, e) { const i = 1 - t; return i * i * e; }(t, e) + function (t, e) { return 2 * (1 - t) * t * e; }(t, i) + function (t, e) { return t * t * e; }(t, n); }
    function Dc(t, e, i, n, r) { return function (t, e) { const i = 1 - t; return i * i * i * e; }(t, e) + function (t, e) { const i = 1 - t; return 3 * i * i * t * e; }(t, i) + function (t, e) { return 3 * (1 - t) * t * t * e; }(t, n) + function (t, e) { return t * t * t * e; }(t, r); }
    class Ic extends bc {
        constructor(t = new Di, e = new Di, i = new Di, n = new Di) { super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n; }
        getPoint(t, e = new Di) { const i = e, n = this.v0, r = this.v1, s = this.v2, a = this.v3; return i.set(Dc(t, n.x, r.x, s.x, a.x), Dc(t, n.y, r.y, s.y, a.y)), i; }
        copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this; }
        toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t; }
        fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this; }
    }
    class Oc extends bc {
        constructor(t = new un, e = new un, i = new un, n = new un) { super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n; }
        getPoint(t, e = new un) { const i = e, n = this.v0, r = this.v1, s = this.v2, a = this.v3; return i.set(Dc(t, n.x, r.x, s.x, a.x), Dc(t, n.y, r.y, s.y, a.y), Dc(t, n.z, r.z, s.z, a.z)), i; }
        copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this; }
        toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t; }
        fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this; }
    }
    class zc extends bc {
        constructor(t = new Di, e = new Di) { super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e; }
        getPoint(t, e = new Di) { const i = e; return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i; }
        getPointAt(t, e) { return this.getPoint(t, e); }
        getTangent(t, e) { const i = e || new Di; return i.copy(this.v2).sub(this.v1).normalize(), i; }
        copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
        toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
        fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
    }
    class Nc extends bc {
        constructor(t = new un, e = new un) { super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e; }
        getPoint(t, e = new un) { const i = e; return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i; }
        getPointAt(t, e) { return this.getPoint(t, e); }
        copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
        toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
        fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
    }
    class Uc extends bc {
        constructor(t = new Di, e = new Di, i = new Di) { super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i; }
        getPoint(t, e = new Di) { const i = e, n = this.v0, r = this.v1, s = this.v2; return i.set(Rc(t, n.x, r.x, s.x), Rc(t, n.y, r.y, s.y)), i; }
        copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
        toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
        fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
    }
    class kc extends bc {
        constructor(t = new un, e = new un, i = new un) { super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i; }
        getPoint(t, e = new un) { const i = e, n = this.v0, r = this.v1, s = this.v2; return i.set(Rc(t, n.x, r.x, s.x), Rc(t, n.y, r.y, s.y), Rc(t, n.z, r.z, s.z)), i; }
        copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this; }
        toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t; }
        fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this; }
    }
    class Bc extends bc {
        constructor(t = []) { super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t; }
        getPoint(t, e = new Di) { const i = e, n = this.points, r = (n.length - 1) * t, s = Math.floor(r), a = r - s, o = n[0 === s ? s : s - 1], l = n[s], c = n[s > n.length - 2 ? n.length - 1 : s + 1], h = n[s > n.length - 3 ? n.length - 1 : s + 2]; return i.set(Pc(a, o.x, l.x, c.x, h.x), Pc(a, o.y, l.y, c.y, h.y)), i; }
        copy(t) { super.copy(t), this.points = []; for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push(i.clone());
        } return this; }
        toJSON() { const t = super.toJSON(); t.points = []; for (let e = 0, i = this.points.length; e < i; e++) {
            const i = this.points[e];
            t.points.push(i.toArray());
        } return t; }
        fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, i = t.points.length; e < i; e++) {
            const i = t.points[e];
            this.points.push((new Di).fromArray(i));
        } return this; }
    }
    var Fc = Object.freeze({ __proto__: null, ArcCurve: wc, CatmullRomCurve3: Lc, CubicBezierCurve: Ic, CubicBezierCurve3: Oc, EllipseCurve: Mc, LineCurve: zc, LineCurve3: Nc, QuadraticBezierCurve: Uc, QuadraticBezierCurve3: kc, SplineCurve: Bc });
    class Gc extends bc {
        constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1; }
        add(t) { this.curves.push(t); }
        closePath() { const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1); t.equals(e) || this.curves.push(new zc(e, t)); }
        getPoint(t, e) { const i = t * this.getLength(), n = this.getCurveLengths(); let r = 0; for (; r < n.length;) {
            if (n[r] >= i) {
                const t = n[r] - i, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t / a;
                return s.getPointAt(o, e);
            }
            r++;
        } return null; }
        getLength() { const t = this.getCurveLengths(); return t[t.length - 1]; }
        updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths(); }
        getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
            return this.cacheLengths; const t = []; let e = 0; for (let i = 0, n = this.curves.length; i < n; i++)
            e += this.curves[i].getLength(), t.push(e); return this.cacheLengths = t, t; }
        getSpacedPoints(t = 40) { const e = []; for (let i = 0; i <= t; i++)
            e.push(this.getPoint(i / t)); return this.autoClose && e.push(e[0]), e; }
        getPoints(t = 12) { const e = []; let i; for (let n = 0, r = this.curves; n < r.length; n++) {
            const s = r[n], a = s.isEllipseCurve ? 2 * t : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t * s.points.length : t, o = s.getPoints(a);
            for (let t = 0; t < o.length; t++) {
                const n = o[t];
                i && i.equals(n) || (e.push(n), i = n);
            }
        } return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e; }
        copy(t) { super.copy(t), this.curves = []; for (let e = 0, i = t.curves.length; e < i; e++) {
            const i = t.curves[e];
            this.curves.push(i.clone());
        } return this.autoClose = t.autoClose, this; }
        toJSON() { const t = super.toJSON(); t.autoClose = this.autoClose, t.curves = []; for (let e = 0, i = this.curves.length; e < i; e++) {
            const i = this.curves[e];
            t.curves.push(i.toJSON());
        } return t; }
        fromJSON(t) { super.fromJSON(t), this.autoClose = t.autoClose, this.curves = []; for (let e = 0, i = t.curves.length; e < i; e++) {
            const i = t.curves[e];
            this.curves.push((new Fc[i.type]).fromJSON(i));
        } return this; }
    }
    class Vc extends Gc {
        constructor(t) { super(), this.type = "Path", this.currentPoint = new Di, t && this.setFromPoints(t); }
        setFromPoints(t) { this.moveTo(t[0].x, t[0].y); for (let e = 1, i = t.length; e < i; e++)
            this.lineTo(t[e].x, t[e].y); return this; }
        moveTo(t, e) { return this.currentPoint.set(t, e), this; }
        lineTo(t, e) { const i = new zc(this.currentPoint.clone(), new Di(t, e)); return this.curves.push(i), this.currentPoint.set(t, e), this; }
        quadraticCurveTo(t, e, i, n) { const r = new Uc(this.currentPoint.clone(), new Di(t, e), new Di(i, n)); return this.curves.push(r), this.currentPoint.set(i, n), this; }
        bezierCurveTo(t, e, i, n, r, s) { const a = new Ic(this.currentPoint.clone(), new Di(t, e), new Di(i, n), new Di(r, s)); return this.curves.push(a), this.currentPoint.set(r, s), this; }
        splineThru(t) { const e = [this.currentPoint.clone()].concat(t), i = new Bc(e); return this.curves.push(i), this.currentPoint.copy(t[t.length - 1]), this; }
        arc(t, e, i, n, r, s) { const a = this.currentPoint.x, o = this.currentPoint.y; return this.absarc(t + a, e + o, i, n, r, s), this; }
        absarc(t, e, i, n, r, s) { return this.absellipse(t, e, i, i, n, r, s), this; }
        ellipse(t, e, i, n, r, s, a, o) { const l = this.currentPoint.x, c = this.currentPoint.y; return this.absellipse(t + l, e + c, i, n, r, s, a, o), this; }
        absellipse(t, e, i, n, r, s, a, o) { const l = new Mc(t, e, i, n, r, s, a, o); if (this.curves.length > 0) {
            const t = l.getPoint(0);
            t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
        } this.curves.push(l); const c = l.getPoint(1); return this.currentPoint.copy(c), this; }
        copy(t) { return super.copy(t), this.currentPoint.copy(t.currentPoint), this; }
        toJSON() { const t = super.toJSON(); return t.currentPoint = this.currentPoint.toArray(), t; }
        fromJSON(t) { return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this; }
    }
    class Hc extends Xr {
        constructor(t = [new Di(0, -.5), new Di(.5, 0), new Di(0, .5)], e = 12, i = 0, n = 2 * Math.PI) { super(), this.type = "LatheGeometry", this.parameters = { points: t, segments: e, phiStart: i, phiLength: n }, e = Math.floor(e), n = wi(n, 0, 2 * Math.PI); const r = [], s = [], a = [], o = [], l = [], c = 1 / e, h = new un, u = new Di, d = new un, p = new un, f = new un; let m = 0, g = 0; for (let e = 0; e <= t.length - 1; e++)
            switch (e) {
                case 0:
                    m = t[e + 1].x - t[e].x, g = t[e + 1].y - t[e].y, d.x = 1 * g, d.y = -m, d.z = 0 * g, f.copy(d), d.normalize(), o.push(d.x, d.y, d.z);
                    break;
                case t.length - 1:
                    o.push(f.x, f.y, f.z);
                    break;
                default: m = t[e + 1].x - t[e].x, g = t[e + 1].y - t[e].y, d.x = 1 * g, d.y = -m, d.z = 0 * g, p.copy(d), d.x += f.x, d.y += f.y, d.z += f.z, d.normalize(), o.push(d.x, d.y, d.z), f.copy(p);
            } for (let r = 0; r <= e; r++) {
            const d = i + r * c * n, p = Math.sin(d), f = Math.cos(d);
            for (let i = 0; i <= t.length - 1; i++) {
                h.x = t[i].x * p, h.y = t[i].y, h.z = t[i].x * f, s.push(h.x, h.y, h.z), u.x = r / e, u.y = i / (t.length - 1), a.push(u.x, u.y);
                const n = o[3 * i + 0] * p, c = o[3 * i + 1], d = o[3 * i + 0] * f;
                l.push(n, c, d);
            }
        } for (let i = 0; i < e; i++)
            for (let e = 0; e < t.length - 1; e++) {
                const n = e + i * t.length, s = n, a = n + t.length, o = n + t.length + 1, l = n + 1;
                r.push(s, a, l), r.push(o, l, a);
            } this.setIndex(r), this.setAttribute("position", new kr(s, 3)), this.setAttribute("uv", new kr(a, 2)), this.setAttribute("normal", new kr(l, 3)); }
        static fromJSON(t) { return new Hc(t.points, t.segments, t.phiStart, t.phiLength); }
    }
    class Wc extends Hc {
        constructor(t = 1, e = 1, i = 4, n = 8) { const r = new Vc; r.absarc(0, -e / 2, t, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t, 0, .5 * Math.PI), super(r.getPoints(i), n), this.type = "CapsuleGeometry", this.parameters = { radius: t, height: e, capSegments: i, radialSegments: n }; }
        static fromJSON(t) { return new Wc(t.radius, t.length, t.capSegments, t.radialSegments); }
    }
    class jc extends Xr {
        constructor(t = 1, e = 32, i = 0, n = 2 * Math.PI) { super(), this.type = "CircleGeometry", this.parameters = { radius: t, segments: e, thetaStart: i, thetaLength: n }, e = Math.max(3, e); const r = [], s = [], a = [], o = [], l = new un, c = new Di; s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5); for (let r = 0, h = 3; r <= e; r++, h += 3) {
            const u = i + r / e * n;
            l.x = t * Math.cos(u), l.y = t * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t + 1) / 2, c.y = (s[h + 1] / t + 1) / 2, o.push(c.x, c.y);
        } for (let t = 1; t <= e; t++)
            r.push(t, t + 1, 0); this.setIndex(r), this.setAttribute("position", new kr(s, 3)), this.setAttribute("normal", new kr(a, 3)), this.setAttribute("uv", new kr(o, 2)); }
        static fromJSON(t) { return new jc(t.radius, t.segments, t.thetaStart, t.thetaLength); }
    }
    class qc extends Xr {
        constructor(t = 1, e = 1, i = 1, n = 32, r = 1, s = !1, a = 0, o = 2 * Math.PI) { super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: i, radialSegments: n, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: o }; const l = this; n = Math.floor(n), r = Math.floor(r); const c = [], h = [], u = [], d = []; let p = 0; const f = [], m = i / 2; let g = 0; function v(i) { const r = p, s = new Di, f = new un; let v = 0; const x = !0 === i ? t : e, _ = !0 === i ? 1 : -1; for (let t = 1; t <= n; t++)
            h.push(0, m * _, 0), u.push(0, _, 0), d.push(.5, .5), p++; const y = p; for (let t = 0; t <= n; t++) {
            const e = t / n * o + a, i = Math.cos(e), r = Math.sin(e);
            f.x = x * r, f.y = m * _, f.z = x * i, h.push(f.x, f.y, f.z), u.push(0, _, 0), s.x = .5 * i + .5, s.y = .5 * r * _ + .5, d.push(s.x, s.y), p++;
        } for (let t = 0; t < n; t++) {
            const e = r + t, n = y + t;
            !0 === i ? c.push(n, n + 1, e) : c.push(n + 1, n, e), v += 3;
        } l.addGroup(g, v, !0 === i ? 1 : 2), g += v; } !function () { const s = new un, v = new un; let x = 0; const _ = (e - t) / i; for (let l = 0; l <= r; l++) {
            const c = [], g = l / r, x = g * (e - t) + t;
            for (let t = 0; t <= n; t++) {
                const e = t / n, r = e * o + a, l = Math.sin(r), f = Math.cos(r);
                v.x = x * l, v.y = -g * i + m, v.z = x * f, h.push(v.x, v.y, v.z), s.set(l, _, f).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++);
            }
            f.push(c);
        } for (let t = 0; t < n; t++)
            for (let e = 0; e < r; e++) {
                const i = f[e][t], n = f[e + 1][t], r = f[e + 1][t + 1], s = f[e][t + 1];
                c.push(i, n, s), c.push(n, r, s), x += 6;
            } l.addGroup(g, x, 0), g += x; }(), !1 === s && (t > 0 && v(!0), e > 0 && v(!1)), this.setIndex(c), this.setAttribute("position", new kr(h, 3)), this.setAttribute("normal", new kr(u, 3)), this.setAttribute("uv", new kr(d, 2)); }
        static fromJSON(t) { return new qc(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength); }
    }
    class Xc extends qc {
        constructor(t = 1, e = 1, i = 32, n = 1, r = !1, s = 0, a = 2 * Math.PI) { super(0, t, e, i, n, r, s, a), this.type = "ConeGeometry", this.parameters = { radius: t, height: e, radialSegments: i, heightSegments: n, openEnded: r, thetaStart: s, thetaLength: a }; }
        static fromJSON(t) { return new Xc(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength); }
    }
    class Yc extends Xr {
        constructor(t = [], e = [], i = 1, n = 0) { super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t, indices: e, radius: i, detail: n }; const r = [], s = []; function a(t, e, i, n) { const r = n + 1, s = []; for (let n = 0; n <= r; n++) {
            s[n] = [];
            const a = t.clone().lerp(i, n / r), o = e.clone().lerp(i, n / r), l = r - n;
            for (let t = 0; t <= l; t++)
                s[n][t] = 0 === t && n === r ? a : a.clone().lerp(o, t / l);
        } for (let t = 0; t < r; t++)
            for (let e = 0; e < 2 * (r - t) - 1; e++) {
                const i = Math.floor(e / 2);
                e % 2 == 0 ? (o(s[t][i + 1]), o(s[t + 1][i]), o(s[t][i])) : (o(s[t][i + 1]), o(s[t + 1][i + 1]), o(s[t + 1][i]));
            } } function o(t) { r.push(t.x, t.y, t.z); } function l(e, i) { const n = 3 * e; i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]; } function c(t, e, i, n) { n < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === i.x && 0 === i.z && (s[e] = n / 2 / Math.PI + .5); } function h(t) { return Math.atan2(t.z, -t.x); } !function (t) { const i = new un, n = new un, r = new un; for (let s = 0; s < e.length; s += 3)
            l(e[s + 0], i), l(e[s + 1], n), l(e[s + 2], r), a(i, n, r, t); }(n), function (t) { const e = new un; for (let i = 0; i < r.length; i += 3)
            e.x = r[i + 0], e.y = r[i + 1], e.z = r[i + 2], e.normalize().multiplyScalar(t), r[i + 0] = e.x, r[i + 1] = e.y, r[i + 2] = e.z; }(i), function () { const t = new un; for (let i = 0; i < r.length; i += 3) {
            t.x = r[i + 0], t.y = r[i + 1], t.z = r[i + 2];
            const n = h(t) / 2 / Math.PI + .5, a = (e = t, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
            s.push(n, 1 - a);
        } var e; (function () { const t = new un, e = new un, i = new un, n = new un, a = new Di, o = new Di, l = new Di; for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
            t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), i.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), n.copy(t).add(e).add(i).divideScalar(3);
            const p = h(n);
            c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, i, p);
        } })(), function () { for (let t = 0; t < s.length; t += 6) {
            const e = s[t + 0], i = s[t + 2], n = s[t + 4], r = Math.max(e, i, n), a = Math.min(e, i, n);
            r > .9 && a < .1 && (e < .2 && (s[t + 0] += 1), i < .2 && (s[t + 2] += 1), n < .2 && (s[t + 4] += 1));
        } }(); }(), this.setAttribute("position", new kr(r, 3)), this.setAttribute("normal", new kr(r.slice(), 3)), this.setAttribute("uv", new kr(s, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals(); }
        static fromJSON(t) { return new Yc(t.vertices, t.indices, t.radius, t.details); }
    }
    class Zc extends Yc {
        constructor(t = 1, e = 0) { const i = (1 + Math.sqrt(5)) / 2, n = 1 / i; super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronGeometry", this.parameters = { radius: t, detail: e }; }
        static fromJSON(t) { return new Zc(t.radius, t.detail); }
    }
    const Jc = new un, Kc = new un, $c = new un, Qc = new wr;
    class th extends Xr {
        constructor(t = null, e = 1) { if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t, thresholdAngle: e }, null !== t) {
            const i = 4, n = Math.pow(10, i), r = Math.cos(yi * e), s = t.getIndex(), a = t.getAttribute("position"), o = s ? s.count : a.count, l = [0, 0, 0], c = ["a", "b", "c"], h = new Array(3), u = {}, d = [];
            for (let t = 0; t < o; t += 3) {
                s ? (l[0] = s.getX(t), l[1] = s.getX(t + 1), l[2] = s.getX(t + 2)) : (l[0] = t, l[1] = t + 1, l[2] = t + 2);
                const { a: e, b: i, c: o } = Qc;
                if (e.fromBufferAttribute(a, l[0]), i.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), Qc.getNormal($c), h[0] = `${Math.round(e.x * n)},${Math.round(e.y * n)},${Math.round(e.z * n)}`, h[1] = `${Math.round(i.x * n)},${Math.round(i.y * n)},${Math.round(i.z * n)}`, h[2] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`, h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0])
                    for (let t = 0; t < 3; t++) {
                        const e = (t + 1) % 3, i = h[t], n = h[e], s = Qc[c[t]], a = Qc[c[e]], o = `${i}_${n}`, p = `${n}_${i}`;
                        p in u && u[p] ? ($c.dot(u[p].normal) <= r && (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)), u[p] = null) : o in u || (u[o] = { index0: l[t], index1: l[e], normal: $c.clone() });
                    }
            }
            for (const t in u)
                if (u[t]) {
                    const { index0: e, index1: i } = u[t];
                    Jc.fromBufferAttribute(a, e), Kc.fromBufferAttribute(a, i), d.push(Jc.x, Jc.y, Jc.z), d.push(Kc.x, Kc.y, Kc.z);
                }
            this.setAttribute("position", new kr(d, 3));
        } }
    }
    class eh extends Vc {
        constructor(t) { super(t), this.uuid = Mi(), this.type = "Shape", this.holes = []; }
        getPointsHoles(t) { const e = []; for (let i = 0, n = this.holes.length; i < n; i++)
            e[i] = this.holes[i].getPoints(t); return e; }
        extractPoints(t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) }; }
        copy(t) { super.copy(t), this.holes = []; for (let e = 0, i = t.holes.length; e < i; e++) {
            const i = t.holes[e];
            this.holes.push(i.clone());
        } return this; }
        toJSON() { const t = super.toJSON(); t.uuid = this.uuid, t.holes = []; for (let e = 0, i = this.holes.length; e < i; e++) {
            const i = this.holes[e];
            t.holes.push(i.toJSON());
        } return t; }
        fromJSON(t) { super.fromJSON(t), this.uuid = t.uuid, this.holes = []; for (let e = 0, i = t.holes.length; e < i; e++) {
            const i = t.holes[e];
            this.holes.push((new Vc).fromJSON(i));
        } return this; }
    }
    const ih = function (t, e, i = 2) { const n = e && e.length, r = n ? e[0] * i : t.length; let s = nh(t, 0, r, i, !0); const a = []; if (!s || s.next === s.prev)
        return a; let o, l, c, h, u, d, p; if (n && (s = function (t, e, i, n) { const r = []; let s, a, o, l, c; for (s = 0, a = e.length; s < a; s++)
        o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : t.length, c = nh(t, o, l, n, !1), c === c.next && (c.steiner = !0), r.push(fh(c)); for (r.sort(hh), s = 0; s < r.length; s++)
        i = uh(r[s], i); return i; }(t, e, s, i)), t.length > 80 * i) {
        o = c = t[0], l = h = t[1];
        for (let e = i; e < r; e += i)
            u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
        p = Math.max(c - o, h - l), p = 0 !== p ? 32767 / p : 0;
    } return sh(s, a, i, o, l, p, 0), a; };
    function nh(t, e, i, n, r) { let s, a; if (r === function (t, e, i, n) { let r = 0; for (let s = e, a = i - n; s < i; s += n)
        r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s; return r; }(t, e, i, n) > 0)
        for (s = e; s < i; s += n)
            a = Sh(s, t[s], t[s + 1], a);
    else
        for (s = i - n; s >= e; s -= n)
            a = Sh(s, t[s], t[s + 1], a); return a && xh(a, a.next) && (Th(a), a = a.next), a; }
    function rh(t, e) { if (!t)
        return t; e || (e = t); let i, n = t; do {
        if (i = !1, n.steiner || !xh(n, n.next) && 0 !== vh(n.prev, n, n.next))
            n = n.next;
        else {
            if (Th(n), n = e = n.prev, n === n.next)
                break;
            i = !0;
        }
    } while (i || n !== e); return e; }
    function sh(t, e, i, n, r, s, a) { if (!t)
        return; !a && s && function (t, e, i, n) { let r = t; do {
        0 === r.z && (r.z = ph(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
    } while (r !== t); r.prevZ.nextZ = null, r.prevZ = null, function (t) { let e, i, n, r, s, a, o, l, c = 1; do {
        for (i = t, t = null, s = null, a = 0; i;) {
            for (a++, n = i, o = 0, e = 0; e < c && (o++, n = n.nextZ, n); e++)
                ;
            for (l = c; o > 0 || l > 0 && n;)
                0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
            i = n;
        }
        s.nextZ = null, c *= 2;
    } while (a > 1); }(r); }(t, n, r, s); let o, l, c = t; for (; t.prev !== t.next;)
        if (o = t.prev, l = t.next, s ? oh(t, n, r, s) : ah(t))
            e.push(o.i / i | 0), e.push(t.i / i | 0), e.push(l.i / i | 0), Th(t), t = l.next, c = l.next;
        else if ((t = l) === c) {
            a ? 1 === a ? sh(t = lh(rh(t), e, i), e, i, n, r, s, 2) : 2 === a && ch(t, e, i, n, r, s) : sh(rh(t), e, i, n, r, s, 1);
            break;
        } }
    function ah(t) { const e = t.prev, i = t, n = t.next; if (vh(e, i, n) >= 0)
        return !1; const r = e.x, s = i.x, a = n.x, o = e.y, l = i.y, c = n.y, h = r < s ? r < a ? r : a : s < a ? s : a, u = o < l ? o < c ? o : c : l < c ? l : c, d = r > s ? r > a ? r : a : s > a ? s : a, p = o > l ? o > c ? o : c : l > c ? l : c; let f = n.next; for (; f !== e;) {
        if (f.x >= h && f.x <= d && f.y >= u && f.y <= p && mh(r, o, s, l, a, c, f.x, f.y) && vh(f.prev, f, f.next) >= 0)
            return !1;
        f = f.next;
    } return !0; }
    function oh(t, e, i, n) { const r = t.prev, s = t, a = t.next; if (vh(r, s, a) >= 0)
        return !1; const o = r.x, l = s.x, c = a.x, h = r.y, u = s.y, d = a.y, p = o < l ? o < c ? o : c : l < c ? l : c, f = h < u ? h < d ? h : d : u < d ? u : d, m = o > l ? o > c ? o : c : l > c ? l : c, g = h > u ? h > d ? h : d : u > d ? u : d, v = ph(p, f, e, i, n), x = ph(m, g, e, i, n); let _ = t.prevZ, y = t.nextZ; for (; _ && _.z >= v && y && y.z <= x;) {
        if (_.x >= p && _.x <= m && _.y >= f && _.y <= g && _ !== r && _ !== a && mh(o, h, l, u, c, d, _.x, _.y) && vh(_.prev, _, _.next) >= 0)
            return !1;
        if (_ = _.prevZ, y.x >= p && y.x <= m && y.y >= f && y.y <= g && y !== r && y !== a && mh(o, h, l, u, c, d, y.x, y.y) && vh(y.prev, y, y.next) >= 0)
            return !1;
        y = y.nextZ;
    } for (; _ && _.z >= v;) {
        if (_.x >= p && _.x <= m && _.y >= f && _.y <= g && _ !== r && _ !== a && mh(o, h, l, u, c, d, _.x, _.y) && vh(_.prev, _, _.next) >= 0)
            return !1;
        _ = _.prevZ;
    } for (; y && y.z <= x;) {
        if (y.x >= p && y.x <= m && y.y >= f && y.y <= g && y !== r && y !== a && mh(o, h, l, u, c, d, y.x, y.y) && vh(y.prev, y, y.next) >= 0)
            return !1;
        y = y.nextZ;
    } return !0; }
    function lh(t, e, i) { let n = t; do {
        const r = n.prev, s = n.next.next;
        !xh(r, s) && _h(r, n, n.next, s) && Mh(r, s) && Mh(s, r) && (e.push(r.i / i | 0), e.push(n.i / i | 0), e.push(s.i / i | 0), Th(n), Th(n.next), n = t = s), n = n.next;
    } while (n !== t); return rh(n); }
    function ch(t, e, i, n, r, s) { let a = t; do {
        let t = a.next.next;
        for (; t !== a.prev;) {
            if (a.i !== t.i && gh(a, t)) {
                let o = wh(a, t);
                return a = rh(a, a.next), o = rh(o, o.next), sh(a, e, i, n, r, s, 0), void sh(o, e, i, n, r, s, 0);
            }
            t = t.next;
        }
        a = a.next;
    } while (a !== t); }
    function hh(t, e) { return t.x - e.x; }
    function uh(t, e) { const i = function (t, e) { let i, n = e, r = -1 / 0; const s = t.x, a = t.y; do {
        if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
            const t = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
            if (t <= s && t > r && (r = t, i = n.x < n.next.x ? n : n.next, t === s))
                return i;
        }
        n = n.next;
    } while (n !== e); if (!i)
        return null; const o = i, l = i.x, c = i.y; let h, u = 1 / 0; n = i; do {
        s >= n.x && n.x >= l && s !== n.x && mh(a < c ? s : r, a, l, c, a < c ? r : s, a, n.x, n.y) && (h = Math.abs(a - n.y) / (s - n.x), Mh(n, t) && (h < u || h === u && (n.x > i.x || n.x === i.x && dh(i, n))) && (i = n, u = h)), n = n.next;
    } while (n !== o); return i; }(t, e); if (!i)
        return e; const n = wh(i, t); return rh(n, n.next), rh(i, i.next); }
    function dh(t, e) { return vh(t.prev, t, e.prev) < 0 && vh(e.next, t, t.next) < 0; }
    function ph(t, e, i, n, r) { return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - i) * r | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - n) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1; }
    function fh(t) { let e = t, i = t; do {
        (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next;
    } while (e !== t); return i; }
    function mh(t, e, i, n, r, s, a, o) { return (r - a) * (e - o) >= (t - a) * (s - o) && (t - a) * (n - o) >= (i - a) * (e - o) && (i - a) * (s - o) >= (r - a) * (n - o); }
    function gh(t, e) { return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) { let i = t; do {
        if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && _h(i, i.next, t, e))
            return !0;
        i = i.next;
    } while (i !== t); return !1; }(t, e) && (Mh(t, e) && Mh(e, t) && function (t, e) { let i = t, n = !1; const r = (t.x + e.x) / 2, s = (t.y + e.y) / 2; do {
        i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next;
    } while (i !== t); return n; }(t, e) && (vh(t.prev, t, e.prev) || vh(t, e.prev, e)) || xh(t, e) && vh(t.prev, t, t.next) > 0 && vh(e.prev, e, e.next) > 0); }
    function vh(t, e, i) { return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y); }
    function xh(t, e) { return t.x === e.x && t.y === e.y; }
    function _h(t, e, i, n) { const r = bh(vh(t, e, i)), s = bh(vh(t, e, n)), a = bh(vh(i, n, t)), o = bh(vh(i, n, e)); return r !== s && a !== o || (!(0 !== r || !yh(t, i, e)) || (!(0 !== s || !yh(t, n, e)) || (!(0 !== a || !yh(i, t, n)) || !(0 !== o || !yh(i, e, n))))); }
    function yh(t, e, i) { return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y); }
    function bh(t) { return t > 0 ? 1 : t < 0 ? -1 : 0; }
    function Mh(t, e) { return vh(t.prev, t, t.next) < 0 ? vh(t, e, t.next) >= 0 && vh(t, t.prev, e) >= 0 : vh(t, e, t.prev) < 0 || vh(t, t.next, e) < 0; }
    function wh(t, e) { const i = new Eh(t.i, t.x, t.y), n = new Eh(e.i, e.x, e.y), r = t.next, s = e.prev; return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, n.prev = s, n; }
    function Sh(t, e, i, n) { const r = new Eh(t, e, i); return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r; }
    function Th(t) { t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ); }
    function Eh(t, e, i) { this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1; }
    class Ah {
        static area(t) { const e = t.length; let i = 0; for (let n = e - 1, r = 0; r < e; n = r++)
            i += t[n].x * t[r].y - t[r].x * t[n].y; return .5 * i; }
        static isClockWise(t) { return Ah.area(t) < 0; }
        static triangulateShape(t, e) { const i = [], n = [], r = []; Ch(t), Lh(i, t); let s = t.length; e.forEach(Ch); for (let t = 0; t < e.length; t++)
            n.push(s), s += e[t].length, Lh(i, e[t]); const a = ih(i, n); for (let t = 0; t < a.length; t += 3)
            r.push(a.slice(t, t + 3)); return r; }
    }
    function Ch(t) { const e = t.length; e > 2 && t[e - 1].equals(t[0]) && t.pop(); }
    function Lh(t, e) { for (let i = 0; i < e.length; i++)
        t.push(e[i].x), t.push(e[i].y); }
    class Ph extends Xr {
        constructor(t = new eh([new Di(.5, .5), new Di(-.5, .5), new Di(-.5, -.5), new Di(.5, -.5)]), e = {}) { super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t]; const i = this, n = [], r = []; for (let e = 0, i = t.length; e < i; e++) {
            s(t[e]);
        } function s(t) { const s = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1, l = void 0 !== e.depth ? e.depth : 1; let c = void 0 === e.bevelEnabled || e.bevelEnabled, h = void 0 !== e.bevelThickness ? e.bevelThickness : .2, u = void 0 !== e.bevelSize ? e.bevelSize : h - .1, d = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3; const f = e.extrudePath, m = void 0 !== e.UVGenerator ? e.UVGenerator : Rh; let g, v, x, _, y, b = !1; f && (g = f.getSpacedPoints(o), b = !0, c = !1, v = f.computeFrenetFrames(o, !1), x = new un, _ = new un, y = new un), c || (p = 0, h = 0, u = 0, d = 0); const M = t.extractPoints(a); let w = M.shape; const S = M.holes; if (!Ah.isClockWise(w)) {
            w = w.reverse();
            for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                Ah.isClockWise(e) && (S[t] = e.reverse());
            }
        } const T = Ah.triangulateShape(w, S), E = w; for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            w = w.concat(e);
        } function A(t, e, i) { return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t); } const C = w.length, L = T.length; function P(t, e, i) { let n, r, s; const a = t.x - e.x, o = t.y - e.y, l = i.x - t.x, c = i.y - t.y, h = a * a + o * o, u = a * c - o * l; if (Math.abs(u) > Number.EPSILON) {
            const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, f = e.y + a / u, m = ((i.x - c / d - p) * c - (i.y + l / d - f) * l) / (a * c - o * l);
            n = p + a * m - t.x, r = f + o * m - t.y;
            const g = n * n + r * r;
            if (g <= 2)
                return new Di(n, r);
            s = Math.sqrt(g / 2);
        }
        else {
            let t = !1;
            a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0), t ? (n = -o, r = a, s = Math.sqrt(h)) : (n = a, r = o, s = Math.sqrt(h / 2));
        } return new Di(n / s, r / s); } const R = []; for (let t = 0, e = E.length, i = e - 1, n = t + 1; t < e; t++, i++, n++)
            i === e && (i = 0), n === e && (n = 0), R[t] = P(E[t], E[i], E[n]); const D = []; let I, O = R.concat(); for (let t = 0, e = S.length; t < e; t++) {
            const e = S[t];
            I = [];
            for (let t = 0, i = e.length, n = i - 1, r = t + 1; t < i; t++, n++, r++)
                n === i && (n = 0), r === i && (r = 0), I[t] = P(e[t], e[n], e[r]);
            D.push(I), O = O.concat(I);
        } for (let t = 0; t < p; t++) {
            const e = t / p, i = h * Math.cos(e * Math.PI / 2), n = u * Math.sin(e * Math.PI / 2) + d;
            for (let t = 0, e = E.length; t < e; t++) {
                const e = A(E[t], R[t], n);
                U(e.x, e.y, -i);
            }
            for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                I = D[t];
                for (let t = 0, r = e.length; t < r; t++) {
                    const r = A(e[t], I[t], n);
                    U(r.x, r.y, -i);
                }
            }
        } const z = u + d; for (let t = 0; t < C; t++) {
            const e = c ? A(w[t], O[t], z) : w[t];
            b ? (_.copy(v.normals[0]).multiplyScalar(e.x), x.copy(v.binormals[0]).multiplyScalar(e.y), y.copy(g[0]).add(_).add(x), U(y.x, y.y, y.z)) : U(e.x, e.y, 0);
        } for (let t = 1; t <= o; t++)
            for (let e = 0; e < C; e++) {
                const i = c ? A(w[e], O[e], z) : w[e];
                b ? (_.copy(v.normals[t]).multiplyScalar(i.x), x.copy(v.binormals[t]).multiplyScalar(i.y), y.copy(g[t]).add(_).add(x), U(y.x, y.y, y.z)) : U(i.x, i.y, l / o * t);
            } for (let t = p - 1; t >= 0; t--) {
            const e = t / p, i = h * Math.cos(e * Math.PI / 2), n = u * Math.sin(e * Math.PI / 2) + d;
            for (let t = 0, e = E.length; t < e; t++) {
                const e = A(E[t], R[t], n);
                U(e.x, e.y, l + i);
            }
            for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                I = D[t];
                for (let t = 0, r = e.length; t < r; t++) {
                    const r = A(e[t], I[t], n);
                    b ? U(r.x, r.y + g[o - 1].y, g[o - 1].x + i) : U(r.x, r.y, l + i);
                }
            }
        } function N(t, e) { let i = t.length; for (; --i >= 0;) {
            const n = i;
            let r = i - 1;
            r < 0 && (r = t.length - 1);
            for (let t = 0, i = o + 2 * p; t < i; t++) {
                const i = C * t, s = C * (t + 1);
                B(e + n + i, e + r + i, e + r + s, e + n + s);
            }
        } } function U(t, e, i) { s.push(t), s.push(e), s.push(i); } function k(t, e, r) { F(t), F(e), F(r); const s = n.length / 3, a = m.generateTopUV(i, n, s - 3, s - 2, s - 1); G(a[0]), G(a[1]), G(a[2]); } function B(t, e, r, s) { F(t), F(e), F(s), F(e), F(r), F(s); const a = n.length / 3, o = m.generateSideWallUV(i, n, a - 6, a - 3, a - 2, a - 1); G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]); } function F(t) { n.push(s[3 * t + 0]), n.push(s[3 * t + 1]), n.push(s[3 * t + 2]); } function G(t) { r.push(t.x), r.push(t.y); } !function () { const t = n.length / 3; if (c) {
            let t = 0, e = C * t;
            for (let t = 0; t < L; t++) {
                const i = T[t];
                k(i[2] + e, i[1] + e, i[0] + e);
            }
            t = o + 2 * p, e = C * t;
            for (let t = 0; t < L; t++) {
                const i = T[t];
                k(i[0] + e, i[1] + e, i[2] + e);
            }
        }
        else {
            for (let t = 0; t < L; t++) {
                const e = T[t];
                k(e[2], e[1], e[0]);
            }
            for (let t = 0; t < L; t++) {
                const e = T[t];
                k(e[0] + C * o, e[1] + C * o, e[2] + C * o);
            }
        } i.addGroup(t, n.length / 3 - t, 0); }(), function () { const t = n.length / 3; let e = 0; N(E, e), e += E.length; for (let t = 0, i = S.length; t < i; t++) {
            const i = S[t];
            N(i, e), e += i.length;
        } i.addGroup(t, n.length / 3 - t, 1); }(); } this.setAttribute("position", new kr(n, 3)), this.setAttribute("uv", new kr(r, 2)), this.computeVertexNormals(); }
        toJSON() { const t = super.toJSON(); return function (t, e, i) { if (i.shapes = [], Array.isArray(t))
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                i.shapes.push(n.uuid);
            }
        else
            i.shapes.push(t.uuid); i.options = Object.assign({}, e), void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON()); return i; }(this.parameters.shapes, this.parameters.options, t); }
        static fromJSON(t, e) { const i = []; for (let n = 0, r = t.shapes.length; n < r; n++) {
            const r = e[t.shapes[n]];
            i.push(r);
        } const n = t.options.extrudePath; return void 0 !== n && (t.options.extrudePath = (new Fc[n.type]).fromJSON(n)), new Ph(i, t.options); }
    }
    const Rh = { generateTopUV: function (t, e, i, n, r) { const s = e[3 * i], a = e[3 * i + 1], o = e[3 * n], l = e[3 * n + 1], c = e[3 * r], h = e[3 * r + 1]; return [new Di(s, a), new Di(o, l), new Di(c, h)]; }, generateSideWallUV: function (t, e, i, n, r, s) { const a = e[3 * i], o = e[3 * i + 1], l = e[3 * i + 2], c = e[3 * n], h = e[3 * n + 1], u = e[3 * n + 2], d = e[3 * r], p = e[3 * r + 1], f = e[3 * r + 2], m = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2]; return Math.abs(o - h) < Math.abs(a - c) ? [new Di(a, 1 - l), new Di(c, 1 - u), new Di(d, 1 - f), new Di(m, 1 - v)] : [new Di(o, 1 - l), new Di(h, 1 - u), new Di(p, 1 - f), new Di(g, 1 - v)]; } };
    class Dh extends Yc {
        constructor(t = 1, e = 0) { const i = (1 + Math.sqrt(5)) / 2; super([-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronGeometry", this.parameters = { radius: t, detail: e }; }
        static fromJSON(t) { return new Dh(t.radius, t.detail); }
    }
    class Ih extends Yc {
        constructor(t = 1, e = 0) { super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronGeometry", this.parameters = { radius: t, detail: e }; }
        static fromJSON(t) { return new Ih(t.radius, t.detail); }
    }
    class Oh extends Xr {
        constructor(t = .5, e = 1, i = 32, n = 1, r = 0, s = 2 * Math.PI) { super(), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: i, phiSegments: n, thetaStart: r, thetaLength: s }, i = Math.max(3, i); const a = [], o = [], l = [], c = []; let h = t; const u = (e - t) / (n = Math.max(1, n)), d = new un, p = new Di; for (let t = 0; t <= n; t++) {
            for (let t = 0; t <= i; t++) {
                const n = r + t / i * s;
                d.x = h * Math.cos(n), d.y = h * Math.sin(n), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
            }
            h += u;
        } for (let t = 0; t < n; t++) {
            const e = t * (i + 1);
            for (let t = 0; t < i; t++) {
                const n = t + e, r = n, s = n + i + 1, o = n + i + 2, l = n + 1;
                a.push(r, s, l), a.push(s, o, l);
            }
        } this.setIndex(a), this.setAttribute("position", new kr(o, 3)), this.setAttribute("normal", new kr(l, 3)), this.setAttribute("uv", new kr(c, 2)); }
        static fromJSON(t) { return new Oh(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength); }
    }
    class zh extends Xr {
        constructor(t = new eh([new Di(0, .5), new Di(-.5, -.5), new Di(.5, -.5)]), e = 12) { super(), this.type = "ShapeGeometry", this.parameters = { shapes: t, curveSegments: e }; const i = [], n = [], r = [], s = []; let a = 0, o = 0; if (!1 === Array.isArray(t))
            l(t);
        else
            for (let e = 0; e < t.length; e++)
                l(t[e]), this.addGroup(a, o, e), a += o, o = 0; function l(t) { const a = n.length / 3, l = t.extractPoints(e); let c = l.shape; const h = l.holes; !1 === Ah.isClockWise(c) && (c = c.reverse()); for (let t = 0, e = h.length; t < e; t++) {
            const e = h[t];
            !0 === Ah.isClockWise(e) && (h[t] = e.reverse());
        } const u = Ah.triangulateShape(c, h); for (let t = 0, e = h.length; t < e; t++) {
            const e = h[t];
            c = c.concat(e);
        } for (let t = 0, e = c.length; t < e; t++) {
            const e = c[t];
            n.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
        } for (let t = 0, e = u.length; t < e; t++) {
            const e = u[t], n = e[0] + a, r = e[1] + a, s = e[2] + a;
            i.push(n, r, s), o += 3;
        } } this.setIndex(i), this.setAttribute("position", new kr(n, 3)), this.setAttribute("normal", new kr(r, 3)), this.setAttribute("uv", new kr(s, 2)); }
        toJSON() { const t = super.toJSON(); return function (t, e) { if (e.shapes = [], Array.isArray(t))
            for (let i = 0, n = t.length; i < n; i++) {
                const n = t[i];
                e.shapes.push(n.uuid);
            }
        else
            e.shapes.push(t.uuid); return e; }(this.parameters.shapes, t); }
        static fromJSON(t, e) { const i = []; for (let n = 0, r = t.shapes.length; n < r; n++) {
            const r = e[t.shapes[n]];
            i.push(r);
        } return new zh(i, t.curveSegments); }
    }
    class Nh extends Xr {
        constructor(t = 1, e = 32, i = 16, n = 0, r = 2 * Math.PI, s = 0, a = Math.PI) { super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: i, phiStart: n, phiLength: r, thetaStart: s, thetaLength: a }, e = Math.max(3, Math.floor(e)), i = Math.max(2, Math.floor(i)); const o = Math.min(s + a, Math.PI); let l = 0; const c = [], h = new un, u = new un, d = [], p = [], f = [], m = []; for (let d = 0; d <= i; d++) {
            const g = [], v = d / i;
            let x = 0;
            0 == d && 0 == s ? x = .5 / e : d == i && o == Math.PI && (x = -.5 / e);
            for (let i = 0; i <= e; i++) {
                const o = i / e;
                h.x = -t * Math.cos(n + o * r) * Math.sin(s + v * a), h.y = t * Math.cos(s + v * a), h.z = t * Math.sin(n + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), f.push(u.x, u.y, u.z), m.push(o + x, 1 - v), g.push(l++);
            }
            c.push(g);
        } for (let t = 0; t < i; t++)
            for (let n = 0; n < e; n++) {
                const e = c[t][n + 1], r = c[t][n], a = c[t + 1][n], l = c[t + 1][n + 1];
                (0 !== t || s > 0) && d.push(e, r, l), (t !== i - 1 || o < Math.PI) && d.push(r, a, l);
            } this.setIndex(d), this.setAttribute("position", new kr(p, 3)), this.setAttribute("normal", new kr(f, 3)), this.setAttribute("uv", new kr(m, 2)); }
        static fromJSON(t) { return new Nh(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength); }
    }
    class Uh extends Yc {
        constructor(t = 1, e = 0) { super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronGeometry", this.parameters = { radius: t, detail: e }; }
        static fromJSON(t) { return new Uh(t.radius, t.detail); }
    }
    class kh extends Xr {
        constructor(t = 1, e = .4, i = 12, n = 48, r = 2 * Math.PI) { super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: i, tubularSegments: n, arc: r }, i = Math.floor(i), n = Math.floor(n); const s = [], a = [], o = [], l = [], c = new un, h = new un, u = new un; for (let s = 0; s <= i; s++)
            for (let d = 0; d <= n; d++) {
                const p = d / n * r, f = s / i * Math.PI * 2;
                h.x = (t + e * Math.cos(f)) * Math.cos(p), h.y = (t + e * Math.cos(f)) * Math.sin(p), h.z = e * Math.sin(f), a.push(h.x, h.y, h.z), c.x = t * Math.cos(p), c.y = t * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / n), l.push(s / i);
            } for (let t = 1; t <= i; t++)
            for (let e = 1; e <= n; e++) {
                const i = (n + 1) * t + e - 1, r = (n + 1) * (t - 1) + e - 1, a = (n + 1) * (t - 1) + e, o = (n + 1) * t + e;
                s.push(i, r, o), s.push(r, a, o);
            } this.setIndex(s), this.setAttribute("position", new kr(a, 3)), this.setAttribute("normal", new kr(o, 3)), this.setAttribute("uv", new kr(l, 2)); }
        static fromJSON(t) { return new kh(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc); }
    }
    class Bh extends Xr {
        constructor(t = 1, e = .4, i = 64, n = 8, r = 2, s = 3) { super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t, tube: e, tubularSegments: i, radialSegments: n, p: r, q: s }, i = Math.floor(i), n = Math.floor(n); const a = [], o = [], l = [], c = [], h = new un, u = new un, d = new un, p = new un, f = new un, m = new un, g = new un; for (let a = 0; a <= i; ++a) {
            const x = a / i * r * Math.PI * 2;
            v(x, r, s, t, d), v(x + .01, r, s, t, p), m.subVectors(p, d), g.addVectors(p, d), f.crossVectors(m, g), g.crossVectors(f, m), f.normalize(), g.normalize();
            for (let t = 0; t <= n; ++t) {
                const r = t / n * Math.PI * 2, s = -e * Math.cos(r), p = e * Math.sin(r);
                h.x = d.x + (s * g.x + p * f.x), h.y = d.y + (s * g.y + p * f.y), h.z = d.z + (s * g.z + p * f.z), o.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l.push(u.x, u.y, u.z), c.push(a / i), c.push(t / n);
            }
        } for (let t = 1; t <= i; t++)
            for (let e = 1; e <= n; e++) {
                const i = (n + 1) * (t - 1) + (e - 1), r = (n + 1) * t + (e - 1), s = (n + 1) * t + e, o = (n + 1) * (t - 1) + e;
                a.push(i, r, o), a.push(r, s, o);
            } function v(t, e, i, n, r) { const s = Math.cos(t), a = Math.sin(t), o = i / e * t, l = Math.cos(o); r.x = n * (2 + l) * .5 * s, r.y = n * (2 + l) * a * .5, r.z = n * Math.sin(o) * .5; } this.setIndex(a), this.setAttribute("position", new kr(o, 3)), this.setAttribute("normal", new kr(l, 3)), this.setAttribute("uv", new kr(c, 2)); }
        static fromJSON(t) { return new Bh(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q); }
    }
    class Fh extends Xr {
        constructor(t = new kc(new un(-1, -1, 0), new un(-1, 1, 0), new un(1, 1, 0)), e = 64, i = 1, n = 8, r = !1) { super(), this.type = "TubeGeometry", this.parameters = { path: t, tubularSegments: e, radius: i, radialSegments: n, closed: r }; const s = t.computeFrenetFrames(e, r); this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals; const a = new un, o = new un, l = new Di; let c = new un; const h = [], u = [], d = [], p = []; function f(r) { c = t.getPointAt(r / e, c); const l = s.normals[r], d = s.binormals[r]; for (let t = 0; t <= n; t++) {
            const e = t / n * Math.PI * 2, r = Math.sin(e), s = -Math.cos(e);
            o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = c.x + i * o.x, a.y = c.y + i * o.y, a.z = c.z + i * o.z, h.push(a.x, a.y, a.z);
        } } !function () { for (let t = 0; t < e; t++)
            f(t); f(!1 === r ? e : 0), function () { for (let t = 0; t <= e; t++)
            for (let i = 0; i <= n; i++)
                l.x = t / e, l.y = i / n, d.push(l.x, l.y); }(), function () { for (let t = 1; t <= e; t++)
            for (let e = 1; e <= n; e++) {
                const i = (n + 1) * (t - 1) + (e - 1), r = (n + 1) * t + (e - 1), s = (n + 1) * t + e, a = (n + 1) * (t - 1) + e;
                p.push(i, r, a), p.push(r, s, a);
            } }(); }(), this.setIndex(p), this.setAttribute("position", new kr(h, 3)), this.setAttribute("normal", new kr(u, 3)), this.setAttribute("uv", new kr(d, 2)); }
        toJSON() { const t = super.toJSON(); return t.path = this.parameters.path.toJSON(), t; }
        static fromJSON(t) { return new Fh((new Fc[t.path.type]).fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed); }
    }
    class Gh extends Xr {
        constructor(t = null) { if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t }, null !== t) {
            const e = [], i = new Set, n = new un, r = new un;
            if (null !== t.index) {
                const s = t.attributes.position, a = t.index;
                let o = t.groups;
                0 === o.length && (o = [{ start: 0, count: a.count, materialIndex: 0 }]);
                for (let t = 0, l = o.length; t < l; ++t) {
                    const l = o[t], c = l.start;
                    for (let t = c, o = c + l.count; t < o; t += 3)
                        for (let o = 0; o < 3; o++) {
                            const l = a.getX(t + o), c = a.getX(t + (o + 1) % 3);
                            n.fromBufferAttribute(s, l), r.fromBufferAttribute(s, c), !0 === Vh(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z));
                        }
                }
            }
            else {
                const s = t.attributes.position;
                for (let t = 0, a = s.count / 3; t < a; t++)
                    for (let a = 0; a < 3; a++) {
                        const o = 3 * t + a, l = 3 * t + (a + 1) % 3;
                        n.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === Vh(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z));
                    }
            }
            this.setAttribute("position", new kr(e, 3));
        } }
    }
    function Vh(t, e, i) { const n = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`; return !0 !== i.has(n) && !0 !== i.has(r) && (i.add(n), i.add(r), !0); }
    var Hh = Object.freeze({ __proto__: null, BoxGeometry: cs, CapsuleGeometry: Wc, CircleGeometry: jc, ConeGeometry: Xc, CylinderGeometry: qc, DodecahedronGeometry: Zc, EdgesGeometry: th, ExtrudeGeometry: Ph, IcosahedronGeometry: Dh, LatheGeometry: Hc, OctahedronGeometry: Ih, PlaneGeometry: Ps, PolyhedronGeometry: Yc, RingGeometry: Oh, ShapeGeometry: zh, SphereGeometry: Nh, TetrahedronGeometry: Uh, TorusGeometry: kh, TorusKnotGeometry: Bh, TubeGeometry: Fh, WireframeGeometry: Gh });
    class Wh extends Tr {
        constructor(t) { super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Zi(0), this.transparent = !0, this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.fog = t.fog, this; }
    }
    class jh extends fs {
        constructor(t) { super(t), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial"; }
    }
    class qh extends Tr {
        constructor(t) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Zi(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ke, this.normalScale = new Di(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this; }
    }
    class Xh extends qh {
        constructor(t) { super(), this.isMeshPhysicalMaterial = !0, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Di(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function () { return wi(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1); }, set: function (t) { this.ior = (1 + .4 * t) / (1 - .4 * t); } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Zi(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Zi(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Zi(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t); }
        get sheen() { return this._sheen; }
        set sheen(t) { this._sheen > 0 != t > 0 && this.version++, this._sheen = t; }
        get clearcoat() { return this._clearcoat; }
        set clearcoat(t) { this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t; }
        get iridescence() { return this._iridescence; }
        set iridescence(t) { this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t; }
        get transmission() { return this._transmission; }
        set transmission(t) { this._transmission > 0 != t > 0 && this.version++, this._transmission = t; }
        copy(t) { return super.copy(t), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this; }
    }
    class Yh extends Tr {
        constructor(t) { super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Zi(16777215), this.specular = new Zi(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ke, this.normalScale = new Di(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this; }
    }
    class Zh extends Tr {
        constructor(t) { super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new Zi(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ke, this.normalScale = new Di(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this; }
    }
    class Jh extends Tr {
        constructor(t) { super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ke, this.normalScale = new Di(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t); }
        copy(t) { return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this; }
    }
    class Kh extends Tr {
        constructor(t) { super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Zi(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zi(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ke, this.normalScale = new Di(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this; }
    }
    class $h extends Tr {
        constructor(t) { super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new Zi(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ke, this.normalScale = new Di(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t); }
        copy(t) { return super.copy(t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this.fog = t.fog, this; }
    }
    class Qh extends $l {
        constructor(t) { super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t); }
        copy(t) { return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this; }
    }
    function tu(t, e, i) { return iu(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i); }
    function eu(t, e, i) { return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t); }
    function iu(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView); }
    function nu(t) { const e = t.length, i = new Array(e); for (let t = 0; t !== e; ++t)
        i[t] = t; return i.sort((function (e, i) { return t[e] - t[i]; })), i; }
    function ru(t, e, i) { const n = t.length, r = new t.constructor(n); for (let s = 0, a = 0; a !== n; ++s) {
        const n = i[s] * e;
        for (let i = 0; i !== e; ++i)
            r[a++] = t[n + i];
    } return r; }
    function su(t, e, i, n) { let r = 1, s = t[0]; for (; void 0 !== s && void 0 === s[n];)
        s = t[r++]; if (void 0 === s)
        return; let a = s[n]; if (void 0 !== a)
        if (Array.isArray(a))
            do {
                a = s[n], void 0 !== a && (e.push(s.time), i.push.apply(i, a)), s = t[r++];
            } while (void 0 !== s);
        else if (void 0 !== a.toArray)
            do {
                a = s[n], void 0 !== a && (e.push(s.time), a.toArray(i, i.length)), s = t[r++];
            } while (void 0 !== s);
        else
            do {
                a = s[n], void 0 !== a && (e.push(s.time), i.push(a)), s = t[r++];
            } while (void 0 !== s); }
    var au = Object.freeze({ __proto__: null, arraySlice: tu, convertArray: eu, flattenJSON: su, getKeyframeOrder: nu, isTypedArray: iu, makeClipAdditive: function (t, e = 0, i = t, n = 30) { n <= 0 && (n = 30); const r = i.tracks.length, s = e / n; for (let e = 0; e < r; ++e) {
            const n = i.tracks[e], r = n.ValueTypeName;
            if ("bool" === r || "string" === r)
                continue;
            const a = t.tracks.find((function (t) { return t.name === n.name && t.ValueTypeName === r; }));
            if (void 0 === a)
                continue;
            let o = 0;
            const l = n.getValueSize();
            n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
            let c = 0;
            const h = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
            const u = n.times.length - 1;
            let d;
            if (s <= n.times[0]) {
                const t = o, e = l - o;
                d = tu(n.values, t, e);
            }
            else if (s >= n.times[u]) {
                const t = u * l + o, e = t + l - o;
                d = tu(n.values, t, e);
            }
            else {
                const t = n.createInterpolant(), e = o, i = l - o;
                t.evaluate(s), d = tu(t.resultBuffer, e, i);
            }
            if ("quaternion" === r) {
                (new hn).fromArray(d).normalize().conjugate().toArray(d);
            }
            const p = a.times.length;
            for (let t = 0; t < p; ++t) {
                const e = t * h + c;
                if ("quaternion" === r)
                    hn.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                else {
                    const t = h - 2 * c;
                    for (let i = 0; i < t; ++i)
                        a.values[e + i] -= d[i];
                }
            }
        } return t.blendMode = Pe, t; }, sortedArray: ru, subclip: function (t, e, i, n, r = 30) { const s = t.clone(); s.name = e; const a = []; for (let t = 0; t < s.tracks.length; ++t) {
            const e = s.tracks[t], o = e.getValueSize(), l = [], c = [];
            for (let t = 0; t < e.times.length; ++t) {
                const s = e.times[t] * r;
                if (!(s < i || s >= n)) {
                    l.push(e.times[t]);
                    for (let i = 0; i < o; ++i)
                        c.push(e.values[t * o + i]);
                }
            }
            0 !== l.length && (e.times = eu(l, e.times.constructor), e.values = eu(c, e.values.constructor), a.push(e));
        } s.tracks = a; let o = 1 / 0; for (let t = 0; t < s.tracks.length; ++t)
            o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]); for (let t = 0; t < s.tracks.length; ++t)
            s.tracks[t].shift(-1 * o); return s.resetDuration(), s; } });
    class ou {
        constructor(t, e, i, n) { this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {}; }
        evaluate(t) { const e = this.parameterPositions; let i = this._cachedIndex, n = e[i], r = e[i - 1]; t: {
            e: {
                let s;
                i: {
                    n: if (!(t < n)) {
                        for (let s = i + 2;;) {
                            if (void 0 === n) {
                                if (t < r)
                                    break n;
                                return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
                            }
                            if (i === s)
                                break;
                            if (r = n, n = e[++i], t < n)
                                break e;
                        }
                        s = e.length;
                        break i;
                    }
                    if (t >= r)
                        break t;
                    {
                        const a = e[1];
                        t < a && (i = 2, r = a);
                        for (let s = i - 2;;) {
                            if (void 0 === r)
                                return this._cachedIndex = 0, this.copySampleValue_(0);
                            if (i === s)
                                break;
                            if (n = r, r = e[--i - 1], t >= r)
                                break e;
                        }
                        s = i, i = 0;
                    }
                }
                for (; i < s;) {
                    const n = i + s >>> 1;
                    t < e[n] ? s = n : i = n + 1;
                }
                if (n = e[i], r = e[i - 1], void 0 === r)
                    return this._cachedIndex = 0, this.copySampleValue_(0);
                if (void 0 === n)
                    return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
            }
            this._cachedIndex = i, this.intervalChanged_(i, r, n);
        } return this.interpolate_(i, r, t, n); }
        getSettings_() { return this.settings || this.DefaultSettings_; }
        copySampleValue_(t) { const e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n; for (let t = 0; t !== n; ++t)
            e[t] = i[r + t]; return e; }
        interpolate_() { throw new Error("call to abstract method"); }
        intervalChanged_() { }
    }
    class lu extends ou {
        constructor(t, e, i, n) { super(t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Ee, endingEnd: Ee }; }
        intervalChanged_(t, e, i) { const n = this.parameterPositions; let r = t - 2, s = t + 1, a = n[r], o = n[s]; if (void 0 === a)
            switch (this.getSettings_().endingStart) {
                case Ae:
                    r = t, a = 2 * e - i;
                    break;
                case Ce:
                    r = n.length - 2, a = e + n[r] - n[r + 1];
                    break;
                default: r = t, a = i;
            } if (void 0 === o)
            switch (this.getSettings_().endingEnd) {
                case Ae:
                    s = t, o = 2 * i - e;
                    break;
                case Ce:
                    s = 1, o = i + n[1] - n[0];
                    break;
                default: s = t - 1, o = e;
            } const l = .5 * (i - e), c = this.valueSize; this._weightPrev = l / (e - a), this._weightNext = l / (o - i), this._offsetPrev = r * c, this._offsetNext = s * c; }
        interpolate_(t, e, i, n) { const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (i - e) / (n - e), f = p * p, m = f * p, g = -u * m + 2 * u * f - u * p, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, x = (-1 - d) * m + (1.5 + d) * f + .5 * p, _ = d * m - d * f; for (let t = 0; t !== a; ++t)
            r[t] = g * s[c + t] + v * s[l + t] + x * s[o + t] + _ * s[h + t]; return r; }
    }
    class cu extends ou {
        constructor(t, e, i, n) { super(t, e, i, n); }
        interpolate_(t, e, i, n) { const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = (i - e) / (n - e), h = 1 - c; for (let t = 0; t !== a; ++t)
            r[t] = s[l + t] * h + s[o + t] * c; return r; }
    }
    class hu extends ou {
        constructor(t, e, i, n) { super(t, e, i, n); }
        interpolate_(t) { return this.copySampleValue_(t - 1); }
    }
    class uu {
        constructor(t, e, i, n) { if (void 0 === t)
            throw new Error("THREE.KeyframeTrack: track name is undefined"); if (void 0 === e || 0 === e.length)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t); this.name = t, this.times = eu(e, this.TimeBufferType), this.values = eu(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation); }
        static toJSON(t) { const e = t.constructor; let i; if (e.toJSON !== this.toJSON)
            i = e.toJSON(t);
        else {
            i = { name: t.name, times: eu(t.times, Array), values: eu(t.values, Array) };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (i.interpolation = e);
        } return i.type = t.ValueTypeName, i; }
        InterpolantFactoryMethodDiscrete(t) { return new hu(this.times, this.values, this.getValueSize(), t); }
        InterpolantFactoryMethodLinear(t) { return new cu(this.times, this.values, this.getValueSize(), t); }
        InterpolantFactoryMethodSmooth(t) { return new lu(this.times, this.values, this.getValueSize(), t); }
        setInterpolation(t) { let e; switch (t) {
            case we:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case Se:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case Te: e = this.InterpolantFactoryMethodSmooth;
        } if (void 0 === e) {
            const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation)
                    throw new Error(e);
                this.setInterpolation(this.DefaultInterpolation);
            }
            return console.warn("THREE.KeyframeTrack:", e), this;
        } return this.createInterpolant = e, this; }
        getInterpolation() { switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete: return we;
            case this.InterpolantFactoryMethodLinear: return Se;
            case this.InterpolantFactoryMethodSmooth: return Te;
        } }
        getValueSize() { return this.values.length / this.times.length; }
        shift(t) { if (0 !== t) {
            const e = this.times;
            for (let i = 0, n = e.length; i !== n; ++i)
                e[i] += t;
        } return this; }
        scale(t) { if (1 !== t) {
            const e = this.times;
            for (let i = 0, n = e.length; i !== n; ++i)
                e[i] *= t;
        } return this; }
        trim(t, e) { const i = this.times, n = i.length; let r = 0, s = n - 1; for (; r !== n && i[r] < t;)
            ++r; for (; -1 !== s && i[s] > e;)
            --s; if (++s, 0 !== r || s !== n) {
            r >= s && (s = Math.max(s, 1), r = s - 1);
            const t = this.getValueSize();
            this.times = tu(i, r, s), this.values = tu(this.values, r * t, s * t);
        } return this; }
        validate() { let t = !0; const e = this.getValueSize(); e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1); const i = this.times, n = this.values, r = i.length; 0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1); let s = null; for (let e = 0; e !== r; e++) {
            const n = i[e];
            if ("number" == typeof n && isNaN(n)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, n), t = !1;
                break;
            }
            if (null !== s && s > n) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, e, n, s), t = !1;
                break;
            }
            s = n;
        } if (void 0 !== n && iu(n))
            for (let e = 0, i = n.length; e !== i; ++e) {
                const i = n[e];
                if (isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, i), t = !1;
                    break;
                }
            } return t; }
        optimize() { const t = tu(this.times), e = tu(this.values), i = this.getValueSize(), n = this.getInterpolation() === Te, r = t.length - 1; let s = 1; for (let a = 1; a < r; ++a) {
            let r = !1;
            const o = t[a];
            if (o !== t[a + 1] && (1 !== a || o !== t[0]))
                if (n)
                    r = !0;
                else {
                    const t = a * i, n = t - i, s = t + i;
                    for (let a = 0; a !== i; ++a) {
                        const i = e[t + a];
                        if (i !== e[n + a] || i !== e[s + a]) {
                            r = !0;
                            break;
                        }
                    }
                }
            if (r) {
                if (a !== s) {
                    t[s] = t[a];
                    const n = a * i, r = s * i;
                    for (let t = 0; t !== i; ++t)
                        e[r + t] = e[n + t];
                }
                ++s;
            }
        } if (r > 0) {
            t[s] = t[r];
            for (let t = r * i, n = s * i, a = 0; a !== i; ++a)
                e[n + a] = e[t + a];
            ++s;
        } return s !== t.length ? (this.times = tu(t, 0, s), this.values = tu(e, 0, s * i)) : (this.times = t, this.values = e), this; }
        clone() { const t = tu(this.times, 0), e = tu(this.values, 0), i = new (0, this.constructor)(this.name, t, e); return i.createInterpolant = this.createInterpolant, i; }
    }
    uu.prototype.TimeBufferType = Float32Array, uu.prototype.ValueBufferType = Float32Array, uu.prototype.DefaultInterpolation = Se;
    class du extends uu {
    }
    du.prototype.ValueTypeName = "bool", du.prototype.ValueBufferType = Array, du.prototype.DefaultInterpolation = we, du.prototype.InterpolantFactoryMethodLinear = void 0, du.prototype.InterpolantFactoryMethodSmooth = void 0;
    class pu extends uu {
    }
    pu.prototype.ValueTypeName = "color";
    class fu extends uu {
    }
    fu.prototype.ValueTypeName = "number";
    class mu extends ou {
        constructor(t, e, i, n) { super(t, e, i, n); }
        interpolate_(t, e, i, n) { const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (i - e) / (n - e); let l = t * a; for (let t = l + a; l !== t; l += 4)
            hn.slerpFlat(r, 0, s, l - a, s, l, o); return r; }
    }
    class gu extends uu {
        InterpolantFactoryMethodLinear(t) { return new mu(this.times, this.values, this.getValueSize(), t); }
    }
    gu.prototype.ValueTypeName = "quaternion", gu.prototype.DefaultInterpolation = Se, gu.prototype.InterpolantFactoryMethodSmooth = void 0;
    class vu extends uu {
    }
    vu.prototype.ValueTypeName = "string", vu.prototype.ValueBufferType = Array, vu.prototype.DefaultInterpolation = we, vu.prototype.InterpolantFactoryMethodLinear = void 0, vu.prototype.InterpolantFactoryMethodSmooth = void 0;
    class xu extends uu {
    }
    xu.prototype.ValueTypeName = "vector";
    class _u {
        constructor(t, e = -1, i, n = Le) { this.name = t, this.tracks = i, this.duration = e, this.blendMode = n, this.uuid = Mi(), this.duration < 0 && this.resetDuration(); }
        static parse(t) { const e = [], i = t.tracks, n = 1 / (t.fps || 1); for (let t = 0, r = i.length; t !== r; ++t)
            e.push(yu(i[t]).scale(n)); const r = new this(t.name, t.duration, e, t.blendMode); return r.uuid = t.uuid, r; }
        static toJSON(t) { const e = [], i = t.tracks, n = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid, blendMode: t.blendMode }; for (let t = 0, n = i.length; t !== n; ++t)
            e.push(uu.toJSON(i[t])); return n; }
        static CreateFromMorphTargetSequence(t, e, i, n) { const r = e.length, s = []; for (let t = 0; t < r; t++) {
            let a = [], o = [];
            a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
            const l = nu(a);
            a = ru(a, 1, l), o = ru(o, 1, l), n || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new fu(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / i));
        } return new this(t, -1, s); }
        static findByName(t, e) { let i = t; if (!Array.isArray(t)) {
            const e = t;
            i = e.geometry && e.geometry.animations || e.animations;
        } for (let t = 0; t < i.length; t++)
            if (i[t].name === e)
                return i[t]; return null; }
        static CreateClipsFromMorphTargetSequences(t, e, i) { const n = {}, r = /^([\w-]*?)([\d]+)$/; for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e], s = i.name.match(r);
            if (s && s.length > 1) {
                const t = s[1];
                let e = n[t];
                e || (n[t] = e = []), e.push(i);
            }
        } const s = []; for (const t in n)
            s.push(this.CreateFromMorphTargetSequence(t, n[t], e, i)); return s; }
        static parseAnimation(t, e) { if (!t)
            return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const i = function (t, e, i, n, r) { if (0 !== i.length) {
            const s = [], a = [];
            su(i, s, a, n), 0 !== s.length && r.push(new t(e, s, a));
        } }, n = [], r = t.name || "default", s = t.fps || 30, a = t.blendMode; let o = t.length || -1; const l = t.hierarchy || []; for (let t = 0; t < l.length; t++) {
            const r = l[t].keys;
            if (r && 0 !== r.length)
                if (r[0].morphTargets) {
                    const t = {};
                    let e;
                    for (e = 0; e < r.length; e++)
                        if (r[e].morphTargets)
                            for (let i = 0; i < r[e].morphTargets.length; i++)
                                t[r[e].morphTargets[i]] = -1;
                    for (const i in t) {
                        const t = [], s = [];
                        for (let n = 0; n !== r[e].morphTargets.length; ++n) {
                            const n = r[e];
                            t.push(n.time), s.push(n.morphTarget === i ? 1 : 0);
                        }
                        n.push(new fu(".morphTargetInfluence[" + i + "]", t, s));
                    }
                    o = t.length * s;
                }
                else {
                    const s = ".bones[" + e[t].name + "]";
                    i(xu, s + ".position", r, "pos", n), i(gu, s + ".quaternion", r, "rot", n), i(xu, s + ".scale", r, "scl", n);
                }
        } if (0 === n.length)
            return null; return new this(r, o, n, a); }
        resetDuration() { let t = 0; for (let e = 0, i = this.tracks.length; e !== i; ++e) {
            const i = this.tracks[e];
            t = Math.max(t, i.times[i.times.length - 1]);
        } return this.duration = t, this; }
        trim() { for (let t = 0; t < this.tracks.length; t++)
            this.tracks[t].trim(0, this.duration); return this; }
        validate() { let t = !0; for (let e = 0; e < this.tracks.length; e++)
            t = t && this.tracks[e].validate(); return t; }
        optimize() { for (let t = 0; t < this.tracks.length; t++)
            this.tracks[t].optimize(); return this; }
        clone() { const t = []; for (let e = 0; e < this.tracks.length; e++)
            t.push(this.tracks[e].clone()); return new this.constructor(this.name, this.duration, t, this.blendMode); }
        toJSON() { return this.constructor.toJSON(this); }
    }
    function yu(t) { if (void 0 === t.type)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = function (t) { switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer": return fu;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4": return xu;
        case "color": return pu;
        case "quaternion": return gu;
        case "bool":
        case "boolean": return du;
        case "string": return vu;
    } throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t); }(t.type); if (void 0 === t.times) {
        const e = [], i = [];
        su(t.keys, e, i, "value"), t.times = e, t.values = i;
    } return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation); }
    const bu = { enabled: !1, files: {}, add: function (t, e) { !1 !== this.enabled && (this.files[t] = e); }, get: function (t) { if (!1 !== this.enabled)
            return this.files[t]; }, remove: function (t) { delete this.files[t]; }, clear: function () { this.files = {}; } };
    class Mu {
        constructor(t, e, i) { const n = this; let r, s = !1, a = 0, o = 0; const l = []; this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function (t) { o++, !1 === s && void 0 !== n.onStart && n.onStart(t, a, o), s = !0; }, this.itemEnd = function (t) { a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (s = !1, void 0 !== n.onLoad && n.onLoad()); }, this.itemError = function (t) { void 0 !== n.onError && n.onError(t); }, this.resolveURL = function (t) { return r ? r(t) : t; }, this.setURLModifier = function (t) { return r = t, this; }, this.addHandler = function (t, e) { return l.push(t, e), this; }, this.removeHandler = function (t) { const e = l.indexOf(t); return -1 !== e && l.splice(e, 2), this; }, this.getHandler = function (t) { for (let e = 0, i = l.length; e < i; e += 2) {
            const i = l[e], n = l[e + 1];
            if (i.global && (i.lastIndex = 0), i.test(t))
                return n;
        } return null; }; }
    }
    const wu = new Mu;
    class Su {
        constructor(t) { this.manager = void 0 !== t ? t : wu, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}; }
        load() { }
        loadAsync(t, e) { const i = this; return new Promise((function (n, r) { i.load(t, n, e, r); })); }
        parse() { }
        setCrossOrigin(t) { return this.crossOrigin = t, this; }
        setWithCredentials(t) { return this.withCredentials = t, this; }
        setPath(t) { return this.path = t, this; }
        setResourcePath(t) { return this.resourcePath = t, this; }
        setRequestHeader(t) { return this.requestHeader = t, this; }
    }
    const Tu = {};
    class Eu extends Error {
        constructor(t, e) { super(t), this.response = e; }
    }
    class Au extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); const r = bu.get(t); if (void 0 !== r)
            return this.manager.itemStart(t), setTimeout((() => { e && e(r), this.manager.itemEnd(t); }), 0), r; if (void 0 !== Tu[t])
            return void Tu[t].push({ onLoad: e, onProgress: i, onError: n }); Tu[t] = [], Tu[t].push({ onLoad: e, onProgress: i, onError: n }); const s = new Request(t, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, o = this.responseType; fetch(s).then((e => { if (200 === e.status || 0 === e.status) {
            if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader)
                return e;
            const i = Tu[t], n = e.body.getReader(), r = e.headers.get("Content-Length") || e.headers.get("X-File-Size"), s = r ? parseInt(r) : 0, a = 0 !== s;
            let o = 0;
            const l = new ReadableStream({ start(t) { !function e() { n.read().then((({ done: n, value: r }) => { if (n)
                    t.close();
                else {
                    o += r.byteLength;
                    const n = new ProgressEvent("progress", { lengthComputable: a, loaded: o, total: s });
                    for (let t = 0, e = i.length; t < e; t++) {
                        const e = i[t];
                        e.onProgress && e.onProgress(n);
                    }
                    t.enqueue(r), e();
                } })); }(); } });
            return new Response(l);
        } throw new Eu(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`, e); })).then((t => { switch (o) {
            case "arraybuffer": return t.arrayBuffer();
            case "blob": return t.blob();
            case "document": return t.text().then((t => (new DOMParser).parseFromString(t, a)));
            case "json": return t.json();
            default:
                if (void 0 === a)
                    return t.text();
                {
                    const e = /charset="?([^;"\s]*)"?/i.exec(a), i = e && e[1] ? e[1].toLowerCase() : void 0, n = new TextDecoder(i);
                    return t.arrayBuffer().then((t => n.decode(t)));
                }
        } })).then((e => { bu.add(t, e); const i = Tu[t]; delete Tu[t]; for (let t = 0, n = i.length; t < n; t++) {
            const n = i[t];
            n.onLoad && n.onLoad(e);
        } })).catch((e => { const i = Tu[t]; if (void 0 === i)
            throw this.manager.itemError(t), e; delete Tu[t]; for (let t = 0, n = i.length; t < n; t++) {
            const n = i[t];
            n.onError && n.onError(e);
        } this.manager.itemError(t); })).finally((() => { this.manager.itemEnd(t); })), this.manager.itemStart(t); }
        setResponseType(t) { return this.responseType = t, this; }
        setMimeType(t) { return this.mimeType = t, this; }
    }
    class Cu extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = this, s = new Au(this.manager); s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function (i) { try {
            e(r.parse(JSON.parse(i)));
        }
        catch (e) {
            n ? n(e) : console.error(e), r.manager.itemError(t);
        } }), i, n); }
        parse(t) { const e = []; for (let i = 0; i < t.length; i++) {
            const n = _u.parse(t[i]);
            e.push(n);
        } return e; }
    }
    class Lu extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = this, s = [], a = new xc, o = new Au(this.manager); o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials); let l = 0; function c(c) { o.load(t[c], (function (t) { const i = r.parse(t, !0); s[c] = { width: i.width, height: i.height, format: i.format, mipmaps: i.mipmaps }, l += 1, 6 === l && (1 === i.mipmapCount && (a.minFilter = vt), a.image = s, a.format = i.format, a.needsUpdate = !0, e && e(a)); }), i, n); } if (Array.isArray(t))
            for (let e = 0, i = t.length; e < i; ++e)
                c(e);
        else
            o.load(t, (function (t) { const i = r.parse(t, !0); if (i.isCubemap) {
                const t = i.mipmaps.length / i.mipmapCount;
                for (let e = 0; e < t; e++) {
                    s[e] = { mipmaps: [] };
                    for (let t = 0; t < i.mipmapCount; t++)
                        s[e].mipmaps.push(i.mipmaps[e * i.mipmapCount + t]), s[e].format = i.format, s[e].width = i.width, s[e].height = i.height;
                }
                a.image = s;
            }
            else
                a.image.width = i.width, a.image.height = i.height, a.mipmaps = i.mipmaps; 1 === i.mipmapCount && (a.minFilter = vt), a.format = i.format, a.needsUpdate = !0, e && e(a); }), i, n); return a; }
    }
    class Pu extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); const r = this, s = bu.get(t); if (void 0 !== s)
            return r.manager.itemStart(t), setTimeout((function () { e && e(s), r.manager.itemEnd(t); }), 0), s; const a = ki("img"); function o() { c(), bu.add(t, this), e && e(this), r.manager.itemEnd(t); } function l(e) { c(), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t); } function c() { a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1); } return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a; }
    }
    class Ru extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = new _s, s = new Pu(this.manager); s.setCrossOrigin(this.crossOrigin), s.setPath(this.path); let a = 0; function o(i) { s.load(t[i], (function (t) { r.images[i] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r)); }), void 0, n); } for (let e = 0; e < t.length; ++e)
            o(e); return r; }
    }
    class Du extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = this, s = new Gl, a = new Au(this.manager); return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, (function (t) { const i = r.parse(t); i && (void 0 !== i.image ? s.image = i.image : void 0 !== i.data && (s.image.width = i.width, s.image.height = i.height, s.image.data = i.data), s.wrapS = void 0 !== i.wrapS ? i.wrapS : ht, s.wrapT = void 0 !== i.wrapT ? i.wrapT : ht, s.magFilter = void 0 !== i.magFilter ? i.magFilter : vt, s.minFilter = void 0 !== i.minFilter ? i.minFilter : vt, s.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (s.encoding = i.encoding), void 0 !== i.flipY && (s.flipY = i.flipY), void 0 !== i.format && (s.format = i.format), void 0 !== i.type && (s.type = i.type), void 0 !== i.mipmaps && (s.mipmaps = i.mipmaps, s.minFilter = yt), 1 === i.mipmapCount && (s.minFilter = vt), void 0 !== i.generateMipmaps && (s.generateMipmaps = i.generateMipmaps), s.needsUpdate = !0, e && e(s, i)); }), i, n), s; }
    }
    class Iu extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = new en, s = new Pu(this.manager); return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function (t) { r.image = t, r.needsUpdate = !0, void 0 !== e && e(r); }), i, n), r; }
    }
    class Ou extends dr {
        constructor(t, e = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Zi(t), this.intensity = e; }
        dispose() { }
        copy(t, e) { return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this; }
        toJSON(t) { const e = super.toJSON(t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e; }
    }
    class zu extends Ou {
        constructor(t, e, i) { super(t, i), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(dr.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Zi(e); }
        copy(t, e) { return super.copy(t, e), this.groundColor.copy(t.groundColor), this; }
    }
    const Nu = new Gn, Uu = new un, ku = new un;
    class Bu {
        constructor(t) { this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Di(512, 512), this.map = null, this.mapPass = null, this.matrix = new Gn, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new As, this._frameExtents = new Di(1, 1), this._viewportCount = 1, this._viewports = [new nn(0, 0, 1, 1)]; }
        getViewportCount() { return this._viewportCount; }
        getFrustum() { return this._frustum; }
        updateMatrices(t) { const e = this.camera, i = this.matrix; Uu.setFromMatrixPosition(t.matrixWorld), e.position.copy(Uu), ku.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(ku), e.updateMatrixWorld(), Nu.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nu), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(Nu); }
        getViewport(t) { return this._viewports[t]; }
        getFrameExtents() { return this._frameExtents; }
        dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose(); }
        copy(t) { return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this; }
        clone() { return (new this.constructor).copy(this); }
        toJSON() { const t = {}; return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t; }
    }
    class Fu extends Bu {
        constructor() { super(new gs(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1; }
        updateMatrices(t) { const e = this.camera, i = 2 * bi * t.angle * this.focus, n = this.mapSize.width / this.mapSize.height, r = t.distance || e.far; i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t); }
        copy(t) { return super.copy(t), this.focus = t.focus, this; }
    }
    class Gu extends Ou {
        constructor(t, e, i = 0, n = Math.PI / 3, r = 0, s = 2) { super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(dr.DEFAULT_UP), this.updateMatrix(), this.target = new dr, this.distance = i, this.angle = n, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new Fu; }
        get power() { return this.intensity * Math.PI; }
        set power(t) { this.intensity = t / Math.PI; }
        dispose() { this.shadow.dispose(); }
        copy(t, e) { return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this; }
    }
    const Vu = new Gn, Hu = new un, Wu = new un;
    class ju extends Bu {
        constructor() { super(new gs(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Di(4, 2), this._viewportCount = 6, this._viewports = [new nn(2, 1, 1, 1), new nn(0, 1, 1, 1), new nn(3, 1, 1, 1), new nn(1, 1, 1, 1), new nn(3, 0, 1, 1), new nn(1, 0, 1, 1)], this._cubeDirections = [new un(1, 0, 0), new un(-1, 0, 0), new un(0, 0, 1), new un(0, 0, -1), new un(0, 1, 0), new un(0, -1, 0)], this._cubeUps = [new un(0, 1, 0), new un(0, 1, 0), new un(0, 1, 0), new un(0, 1, 0), new un(0, 0, 1), new un(0, 0, -1)]; }
        updateMatrices(t, e = 0) { const i = this.camera, n = this.matrix, r = t.distance || i.far; r !== i.far && (i.far = r, i.updateProjectionMatrix()), Hu.setFromMatrixPosition(t.matrixWorld), i.position.copy(Hu), Wu.copy(i.position), Wu.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(Wu), i.updateMatrixWorld(), n.makeTranslation(-Hu.x, -Hu.y, -Hu.z), Vu.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Vu); }
    }
    class qu extends Ou {
        constructor(t, e, i = 0, n = 2) { super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new ju; }
        get power() { return 4 * this.intensity * Math.PI; }
        set power(t) { this.intensity = t / (4 * Math.PI); }
        dispose() { this.shadow.dispose(); }
        copy(t, e) { return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this; }
    }
    class Xu extends Bu {
        constructor() { super(new Gs(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0; }
    }
    class Yu extends Ou {
        constructor(t, e) { super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(dr.DEFAULT_UP), this.updateMatrix(), this.target = new dr, this.shadow = new Xu; }
        dispose() { this.shadow.dispose(); }
        copy(t) { return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this; }
    }
    class Zu extends Ou {
        constructor(t, e) { super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight"; }
    }
    class Ju extends Ou {
        constructor(t, e, i = 10, n = 10) { super(t, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = i, this.height = n; }
        get power() { return this.intensity * this.width * this.height * Math.PI; }
        set power(t) { this.intensity = t / (this.width * this.height * Math.PI); }
        copy(t) { return super.copy(t), this.width = t.width, this.height = t.height, this; }
        toJSON(t) { const e = super.toJSON(t); return e.object.width = this.width, e.object.height = this.height, e; }
    }
    class Ku {
        constructor() { this.isSphericalHarmonics3 = !0, this.coefficients = []; for (let t = 0; t < 9; t++)
            this.coefficients.push(new un); }
        set(t) { for (let e = 0; e < 9; e++)
            this.coefficients[e].copy(t[e]); return this; }
        zero() { for (let t = 0; t < 9; t++)
            this.coefficients[t].set(0, 0, 0); return this; }
        getAt(t, e) { const i = t.x, n = t.y, r = t.z, s = this.coefficients; return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * n), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * i), e.addScaledVector(s[4], i * n * 1.092548), e.addScaledVector(s[5], n * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], i * r * 1.092548), e.addScaledVector(s[8], .546274 * (i * i - n * n)), e; }
        getIrradianceAt(t, e) { const i = t.x, n = t.y, r = t.z, s = this.coefficients; return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * n), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * i), e.addScaledVector(s[4], .858086 * i * n), e.addScaledVector(s[5], .858086 * n * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * i * r), e.addScaledVector(s[8], .429043 * (i * i - n * n)), e; }
        add(t) { for (let e = 0; e < 9; e++)
            this.coefficients[e].add(t.coefficients[e]); return this; }
        addScaledSH(t, e) { for (let i = 0; i < 9; i++)
            this.coefficients[i].addScaledVector(t.coefficients[i], e); return this; }
        scale(t) { for (let e = 0; e < 9; e++)
            this.coefficients[e].multiplyScalar(t); return this; }
        lerp(t, e) { for (let i = 0; i < 9; i++)
            this.coefficients[i].lerp(t.coefficients[i], e); return this; }
        equals(t) { for (let e = 0; e < 9; e++)
            if (!this.coefficients[e].equals(t.coefficients[e]))
                return !1; return !0; }
        copy(t) { return this.set(t.coefficients); }
        clone() { return (new this.constructor).copy(this); }
        fromArray(t, e = 0) { const i = this.coefficients; for (let n = 0; n < 9; n++)
            i[n].fromArray(t, e + 3 * n); return this; }
        toArray(t = [], e = 0) { const i = this.coefficients; for (let n = 0; n < 9; n++)
            i[n].toArray(t, e + 3 * n); return t; }
        static getBasisAt(t, e) { const i = t.x, n = t.y, r = t.z; e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * r, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * i * r, e[8] = .546274 * (i * i - n * n); }
    }
    class $u extends Ou {
        constructor(t = new Ku, e = 1) { super(void 0, e), this.isLightProbe = !0, this.sh = t; }
        copy(t) { return super.copy(t), this.sh.copy(t.sh), this; }
        fromJSON(t) { return this.intensity = t.intensity, this.sh.fromArray(t.sh), this; }
        toJSON(t) { const e = super.toJSON(t); return e.object.sh = this.sh.toArray(), e; }
    }
    class Qu extends Su {
        constructor(t) { super(t), this.textures = {}; }
        load(t, e, i, n) { const r = this, s = new Au(r.manager); s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function (i) { try {
            e(r.parse(JSON.parse(i)));
        }
        catch (e) {
            n ? n(e) : console.error(e), r.manager.itemError(t);
        } }), i, n); }
        parse(t) { const e = this.textures; function i(t) { return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]; } const n = Qu.createMaterialFromType(t.type); if (void 0 !== t.uuid && (n.uuid = t.uuid), void 0 !== t.name && (n.name = t.name), void 0 !== t.color && void 0 !== n.color && n.color.setHex(t.color), void 0 !== t.roughness && (n.roughness = t.roughness), void 0 !== t.metalness && (n.metalness = t.metalness), void 0 !== t.sheen && (n.sheen = t.sheen), void 0 !== t.sheenColor && (n.sheenColor = (new Zi).setHex(t.sheenColor)), void 0 !== t.sheenRoughness && (n.sheenRoughness = t.sheenRoughness), void 0 !== t.emissive && void 0 !== n.emissive && n.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== n.specular && n.specular.setHex(t.specular), void 0 !== t.specularIntensity && (n.specularIntensity = t.specularIntensity), void 0 !== t.specularColor && void 0 !== n.specularColor && n.specularColor.setHex(t.specularColor), void 0 !== t.shininess && (n.shininess = t.shininess), void 0 !== t.clearcoat && (n.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (n.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.iridescence && (n.iridescence = t.iridescence), void 0 !== t.iridescenceIOR && (n.iridescenceIOR = t.iridescenceIOR), void 0 !== t.iridescenceThicknessRange && (n.iridescenceThicknessRange = t.iridescenceThicknessRange), void 0 !== t.transmission && (n.transmission = t.transmission), void 0 !== t.thickness && (n.thickness = t.thickness), void 0 !== t.attenuationDistance && (n.attenuationDistance = t.attenuationDistance), void 0 !== t.attenuationColor && void 0 !== n.attenuationColor && n.attenuationColor.setHex(t.attenuationColor), void 0 !== t.fog && (n.fog = t.fog), void 0 !== t.flatShading && (n.flatShading = t.flatShading), void 0 !== t.blending && (n.blending = t.blending), void 0 !== t.combine && (n.combine = t.combine), void 0 !== t.side && (n.side = t.side), void 0 !== t.shadowSide && (n.shadowSide = t.shadowSide), void 0 !== t.opacity && (n.opacity = t.opacity), void 0 !== t.transparent && (n.transparent = t.transparent), void 0 !== t.alphaTest && (n.alphaTest = t.alphaTest), void 0 !== t.depthTest && (n.depthTest = t.depthTest), void 0 !== t.depthWrite && (n.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (n.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (n.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (n.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (n.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (n.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (n.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (n.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (n.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (n.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (n.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (n.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (n.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (n.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (n.rotation = t.rotation), 1 !== t.linewidth && (n.linewidth = t.linewidth), void 0 !== t.dashSize && (n.dashSize = t.dashSize), void 0 !== t.gapSize && (n.gapSize = t.gapSize), void 0 !== t.scale && (n.scale = t.scale), void 0 !== t.polygonOffset && (n.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (n.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (n.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.dithering && (n.dithering = t.dithering), void 0 !== t.alphaToCoverage && (n.alphaToCoverage = t.alphaToCoverage), void 0 !== t.premultipliedAlpha && (n.premultipliedAlpha = t.premultipliedAlpha), void 0 !== t.forceSinglePass && (n.forceSinglePass = t.forceSinglePass), void 0 !== t.visible && (n.visible = t.visible), void 0 !== t.toneMapped && (n.toneMapped = t.toneMapped), void 0 !== t.userData && (n.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? n.vertexColors = t.vertexColors > 0 : n.vertexColors = t.vertexColors), void 0 !== t.uniforms)
            for (const e in t.uniforms) {
                const r = t.uniforms[e];
                switch (n.uniforms[e] = {}, r.type) {
                    case "t":
                        n.uniforms[e].value = i(r.value);
                        break;
                    case "c":
                        n.uniforms[e].value = (new Zi).setHex(r.value);
                        break;
                    case "v2":
                        n.uniforms[e].value = (new Di).fromArray(r.value);
                        break;
                    case "v3":
                        n.uniforms[e].value = (new un).fromArray(r.value);
                        break;
                    case "v4":
                        n.uniforms[e].value = (new nn).fromArray(r.value);
                        break;
                    case "m3":
                        n.uniforms[e].value = (new Ii).fromArray(r.value);
                        break;
                    case "m4":
                        n.uniforms[e].value = (new Gn).fromArray(r.value);
                        break;
                    default: n.uniforms[e].value = r.value;
                }
            } if (void 0 !== t.defines && (n.defines = t.defines), void 0 !== t.vertexShader && (n.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (n.fragmentShader = t.fragmentShader), void 0 !== t.glslVersion && (n.glslVersion = t.glslVersion), void 0 !== t.extensions)
            for (const e in t.extensions)
                n.extensions[e] = t.extensions[e]; if (void 0 !== t.size && (n.size = t.size), void 0 !== t.sizeAttenuation && (n.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (n.map = i(t.map)), void 0 !== t.matcap && (n.matcap = i(t.matcap)), void 0 !== t.alphaMap && (n.alphaMap = i(t.alphaMap)), void 0 !== t.bumpMap && (n.bumpMap = i(t.bumpMap)), void 0 !== t.bumpScale && (n.bumpScale = t.bumpScale), void 0 !== t.normalMap && (n.normalMap = i(t.normalMap)), void 0 !== t.normalMapType && (n.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
            let e = t.normalScale;
            !1 === Array.isArray(e) && (e = [e, e]), n.normalScale = (new Di).fromArray(e);
        } return void 0 !== t.displacementMap && (n.displacementMap = i(t.displacementMap)), void 0 !== t.displacementScale && (n.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (n.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (n.roughnessMap = i(t.roughnessMap)), void 0 !== t.metalnessMap && (n.metalnessMap = i(t.metalnessMap)), void 0 !== t.emissiveMap && (n.emissiveMap = i(t.emissiveMap)), void 0 !== t.emissiveIntensity && (n.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (n.specularMap = i(t.specularMap)), void 0 !== t.specularIntensityMap && (n.specularIntensityMap = i(t.specularIntensityMap)), void 0 !== t.specularColorMap && (n.specularColorMap = i(t.specularColorMap)), void 0 !== t.envMap && (n.envMap = i(t.envMap)), void 0 !== t.envMapIntensity && (n.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (n.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (n.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (n.lightMap = i(t.lightMap)), void 0 !== t.lightMapIntensity && (n.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (n.aoMap = i(t.aoMap)), void 0 !== t.aoMapIntensity && (n.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (n.gradientMap = i(t.gradientMap)), void 0 !== t.clearcoatMap && (n.clearcoatMap = i(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (n.clearcoatRoughnessMap = i(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (n.clearcoatNormalMap = i(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (n.clearcoatNormalScale = (new Di).fromArray(t.clearcoatNormalScale)), void 0 !== t.iridescenceMap && (n.iridescenceMap = i(t.iridescenceMap)), void 0 !== t.iridescenceThicknessMap && (n.iridescenceThicknessMap = i(t.iridescenceThicknessMap)), void 0 !== t.transmissionMap && (n.transmissionMap = i(t.transmissionMap)), void 0 !== t.thicknessMap && (n.thicknessMap = i(t.thicknessMap)), void 0 !== t.sheenColorMap && (n.sheenColorMap = i(t.sheenColorMap)), void 0 !== t.sheenRoughnessMap && (n.sheenRoughnessMap = i(t.sheenRoughnessMap)), n; }
        setTextures(t) { return this.textures = t, this; }
        static createMaterialFromType(t) { return new { ShadowMaterial: Wh, SpriteMaterial: ml, RawShaderMaterial: jh, ShaderMaterial: fs, PointsMaterial: cc, MeshPhysicalMaterial: Xh, MeshStandardMaterial: qh, MeshPhongMaterial: Yh, MeshToonMaterial: Zh, MeshNormalMaterial: Jh, MeshLambertMaterial: Kh, MeshDepthMaterial: Xo, MeshDistanceMaterial: Yo, MeshBasicMaterial: Er, MeshMatcapMaterial: $h, LineDashedMaterial: Qh, LineBasicMaterial: $l, Material: Tr }[t]; }
    }
    class td {
        static decodeText(t) { if ("undefined" != typeof TextDecoder)
            return (new TextDecoder).decode(t); let e = ""; for (let i = 0, n = t.length; i < n; i++)
            e += String.fromCharCode(t[i]); try {
            return decodeURIComponent(escape(e));
        }
        catch (t) {
            return e;
        } }
        static extractUrlBase(t) { const e = t.lastIndexOf("/"); return -1 === e ? "./" : t.slice(0, e + 1); }
        static resolveURL(t, e) { return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t); }
    }
    class ed extends Xr {
        constructor() { super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0; }
        copy(t) { return super.copy(t), this.instanceCount = t.instanceCount, this; }
        toJSON() { const t = super.toJSON(); return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t; }
    }
    class id extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = this, s = new Au(r.manager); s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function (i) { try {
            e(r.parse(JSON.parse(i)));
        }
        catch (e) {
            n ? n(e) : console.error(e), r.manager.itemError(t);
        } }), i, n); }
        parse(t) { const e = {}, i = {}; function n(t, n) { if (void 0 !== e[n])
            return e[n]; const r = t.interleavedBuffers[n], s = function (t, e) { if (void 0 !== i[e])
            return i[e]; const n = t.arrayBuffers, r = n[e], s = new Uint32Array(r).buffer; return i[e] = s, s; }(t, r.buffer), a = Ui(r.type, s), o = new dl(a, r.stride); return o.uuid = r.uuid, e[n] = o, o; } const r = t.isInstancedBufferGeometry ? new ed : new Xr, s = t.data.index; if (void 0 !== s) {
            const t = Ui(s.type, s.array);
            r.setIndex(new Lr(t, 1));
        } const a = t.data.attributes; for (const e in a) {
            const i = a[e];
            let s;
            if (i.isInterleavedBufferAttribute) {
                const e = n(t.data, i.data);
                s = new fl(e, i.itemSize, i.offset, i.normalized);
            }
            else {
                const t = Ui(i.type, i.array);
                s = new (i.isInstancedBufferAttribute ? jl : Lr)(t, i.itemSize, i.normalized);
            }
            void 0 !== i.name && (s.name = i.name), void 0 !== i.usage && s.setUsage(i.usage), void 0 !== i.updateRange && (s.updateRange.offset = i.updateRange.offset, s.updateRange.count = i.updateRange.count), r.setAttribute(e, s);
        } const o = t.data.morphAttributes; if (o)
            for (const e in o) {
                const i = o[e], s = [];
                for (let e = 0, r = i.length; e < r; e++) {
                    const r = i[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = n(t.data, r.data);
                        a = new fl(e, r.itemSize, r.offset, r.normalized);
                    }
                    else {
                        const t = Ui(r.type, r.array);
                        a = new Lr(t, r.itemSize, r.normalized);
                    }
                    void 0 !== r.name && (a.name = r.name), s.push(a);
                }
                r.morphAttributes[e] = s;
            } t.data.morphTargetsRelative && (r.morphTargetsRelative = !0); const l = t.data.groups || t.data.drawcalls || t.data.offsets; if (void 0 !== l)
            for (let t = 0, e = l.length; t !== e; ++t) {
                const e = l[t];
                r.addGroup(e.start, e.count, e.materialIndex);
            } const c = t.data.boundingSphere; if (void 0 !== c) {
            const t = new un;
            void 0 !== c.center && t.fromArray(c.center), r.boundingSphere = new Dn(t, c.radius);
        } return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r; }
    }
    class nd extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = this, s = "" === this.path ? td.extractUrlBase(t) : this.path; this.resourcePath = this.resourcePath || s; const a = new Au(this.manager); a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, (function (i) { let s = null; try {
            s = JSON.parse(i);
        }
        catch (e) {
            return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
        } const a = s.metadata; if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase())
            return void 0 !== n && n(new Error("THREE.ObjectLoader: Can't load " + t)), void console.error("THREE.ObjectLoader: Can't load " + t); r.parse(s, e); }), i, n); }
        loadAsync(t, e) {
            return __awaiter(this, void 0, void 0, function* () { const i = "" === this.path ? td.extractUrlBase(t) : this.path; this.resourcePath = this.resourcePath || i; const n = new Au(this.manager); n.setPath(this.path), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials); const r = yield n.loadAsync(t, e), s = JSON.parse(r), a = s.metadata; if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase())
                throw new Error("THREE.ObjectLoader: Can't load " + t); return yield this.parseAsync(s); });
        }
        parse(t, e) { const i = this.parseAnimations(t.animations), n = this.parseShapes(t.shapes), r = this.parseGeometries(t.geometries, n), s = this.parseImages(t.images, (function () { void 0 !== e && e(l); })), a = this.parseTextures(t.textures, s), o = this.parseMaterials(t.materials, a), l = this.parseObject(t.object, r, o, a, i), c = this.parseSkeletons(t.skeletons, l); if (this.bindSkeletons(l, c), void 0 !== e) {
            let t = !1;
            for (const e in s)
                if (s[e].data instanceof HTMLImageElement) {
                    t = !0;
                    break;
                }
            !1 === t && e(l);
        } return l; }
        parseAsync(t) {
            return __awaiter(this, void 0, void 0, function* () { const e = this.parseAnimations(t.animations), i = this.parseShapes(t.shapes), n = this.parseGeometries(t.geometries, i), r = yield this.parseImagesAsync(t.images), s = this.parseTextures(t.textures, r), a = this.parseMaterials(t.materials, s), o = this.parseObject(t.object, n, a, s, e), l = this.parseSkeletons(t.skeletons, o); return this.bindSkeletons(o, l), o; });
        }
        parseShapes(t) { const e = {}; if (void 0 !== t)
            for (let i = 0, n = t.length; i < n; i++) {
                const n = (new eh).fromJSON(t[i]);
                e[n.uuid] = n;
            } return e; }
        parseSkeletons(t, e) { const i = {}, n = {}; if (e.traverse((function (t) { t.isBone && (n[t.uuid] = t); })), void 0 !== t)
            for (let e = 0, r = t.length; e < r; e++) {
                const r = (new Wl).fromJSON(t[e], n);
                i[r.uuid] = r;
            } return i; }
        parseGeometries(t, e) { const i = {}; if (void 0 !== t) {
            const n = new id;
            for (let r = 0, s = t.length; r < s; r++) {
                let s;
                const a = t[r];
                switch (a.type) {
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        s = n.parse(a);
                        break;
                    default: a.type in Hh ? s = Hh[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);
                }
                s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), i[a.uuid] = s;
            }
        } return i; }
        parseMaterials(t, e) { const i = {}, n = {}; if (void 0 !== t) {
            const r = new Qu;
            r.setTextures(e);
            for (let e = 0, s = t.length; e < s; e++) {
                const s = t[e];
                void 0 === i[s.uuid] && (i[s.uuid] = r.parse(s)), n[s.uuid] = i[s.uuid];
            }
        } return n; }
        parseAnimations(t) { const e = {}; if (void 0 !== t)
            for (let i = 0; i < t.length; i++) {
                const n = t[i], r = _u.parse(n);
                e[r.uuid] = r;
            } return e; }
        parseImages(t, e) { const i = this, n = {}; let r; function s(t) { if ("string" == typeof t) {
            const e = t;
            return function (t) { return i.manager.itemStart(t), r.load(t, (function () { i.manager.itemEnd(t); }), void 0, (function () { i.manager.itemError(t), i.manager.itemEnd(t); })); }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : i.resourcePath + e);
        } return t.data ? { data: Ui(t.type, t.data), width: t.width, height: t.height } : null; } if (void 0 !== t && t.length > 0) {
            const i = new Mu(e);
            r = new Pu(i), r.setCrossOrigin(this.crossOrigin);
            for (let e = 0, i = t.length; e < i; e++) {
                const i = t[e], r = i.url;
                if (Array.isArray(r)) {
                    const t = [];
                    for (let e = 0, i = r.length; e < i; e++) {
                        const i = s(r[e]);
                        null !== i && (i instanceof HTMLImageElement ? t.push(i) : t.push(new Gl(i.data, i.width, i.height)));
                    }
                    n[i.uuid] = new $i(t);
                }
                else {
                    const t = s(i.url);
                    n[i.uuid] = new $i(t);
                }
            }
        } return n; }
        parseImagesAsync(t) {
            return __awaiter(this, void 0, void 0, function* () { const e = this, i = {}; let n; function r(t) {
                return __awaiter(this, void 0, void 0, function* () { if ("string" == typeof t) {
                    const i = t, r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(i) ? i : e.resourcePath + i;
                    return yield n.loadAsync(r);
                } return t.data ? { data: Ui(t.type, t.data), width: t.width, height: t.height } : null; });
            } if (void 0 !== t && t.length > 0) {
                n = new Pu(this.manager), n.setCrossOrigin(this.crossOrigin);
                for (let e = 0, n = t.length; e < n; e++) {
                    const n = t[e], s = n.url;
                    if (Array.isArray(s)) {
                        const t = [];
                        for (let e = 0, i = s.length; e < i; e++) {
                            const i = s[e], n = yield r(i);
                            null !== n && (n instanceof HTMLImageElement ? t.push(n) : t.push(new Gl(n.data, n.width, n.height)));
                        }
                        i[n.uuid] = new $i(t);
                    }
                    else {
                        const t = yield r(n.url);
                        i[n.uuid] = new $i(t);
                    }
                }
            } return i; });
        }
        parseTextures(t, e) { function i(t, e) { return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]); } const n = {}; if (void 0 !== t)
            for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const a = e[s.image], o = a.data;
                let l;
                Array.isArray(o) ? (l = new _s, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new Gl : new en, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = i(s.mapping, rd)), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = i(s.wrap[0], sd), l.wrapT = i(s.wrap[1], sd)), void 0 !== s.format && (l.format = s.format), void 0 !== s.type && (l.type = s.type), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = i(s.minFilter, ad)), void 0 !== s.magFilter && (l.magFilter = i(s.magFilter, ad)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.generateMipmaps && (l.generateMipmaps = s.generateMipmaps), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.userData && (l.userData = s.userData), n[s.uuid] = l;
            } return n; }
        parseObject(t, e, i, n, r) { let s, a, o; function l(t) { return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]; } function c(t) { if (void 0 !== t) {
            if (Array.isArray(t)) {
                const e = [];
                for (let n = 0, r = t.length; n < r; n++) {
                    const r = t[n];
                    void 0 === i[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(i[r]);
                }
                return e;
            }
            return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t];
        } } function h(t) { return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined texture", t), n[t]; } switch (t.type) {
            case "Scene":
                s = new ul, void 0 !== t.background && (Number.isInteger(t.background) ? s.background = new Zi(t.background) : s.background = h(t.background)), void 0 !== t.environment && (s.environment = h(t.environment)), void 0 !== t.fog && ("Fog" === t.fog.type ? s.fog = new hl(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (s.fog = new cl(t.fog.color, t.fog.density))), void 0 !== t.backgroundBlurriness && (s.backgroundBlurriness = t.backgroundBlurriness), void 0 !== t.backgroundIntensity && (s.backgroundIntensity = t.backgroundIntensity);
                break;
            case "PerspectiveCamera":
                s = new gs(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (s.focus = t.focus), void 0 !== t.zoom && (s.zoom = t.zoom), void 0 !== t.filmGauge && (s.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (s.filmOffset = t.filmOffset), void 0 !== t.view && (s.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                s = new Gs(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (s.zoom = t.zoom), void 0 !== t.view && (s.view = Object.assign({}, t.view));
                break;
            case "AmbientLight":
                s = new Zu(t.color, t.intensity);
                break;
            case "DirectionalLight":
                s = new Yu(t.color, t.intensity);
                break;
            case "PointLight":
                s = new qu(t.color, t.intensity, t.distance, t.decay);
                break;
            case "RectAreaLight":
                s = new Ju(t.color, t.intensity, t.width, t.height);
                break;
            case "SpotLight":
                s = new Gu(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                break;
            case "HemisphereLight":
                s = new zu(t.color, t.groundColor, t.intensity);
                break;
            case "LightProbe":
                s = (new $u).fromJSON(t);
                break;
            case "SkinnedMesh":
                a = l(t.geometry), o = c(t.material), s = new Bl(a, o), void 0 !== t.bindMode && (s.bindMode = t.bindMode), void 0 !== t.bindMatrix && s.bindMatrix.fromArray(t.bindMatrix), void 0 !== t.skeleton && (s.skeleton = t.skeleton);
                break;
            case "Mesh":
                a = l(t.geometry), o = c(t.material), s = new os(a, o);
                break;
            case "InstancedMesh":
                a = l(t.geometry), o = c(t.material);
                const e = t.count, i = t.instanceMatrix, n = t.instanceColor;
                s = new Kl(a, o, e), s.instanceMatrix = new jl(new Float32Array(i.array), 16), void 0 !== n && (s.instanceColor = new jl(new Float32Array(n.array), n.itemSize));
                break;
            case "LOD":
                s = new Il;
                break;
            case "Line":
                s = new rc(l(t.geometry), c(t.material));
                break;
            case "LineLoop":
                s = new lc(l(t.geometry), c(t.material));
                break;
            case "LineSegments":
                s = new oc(l(t.geometry), c(t.material));
                break;
            case "PointCloud":
            case "Points":
                s = new fc(l(t.geometry), c(t.material));
                break;
            case "Sprite":
                s = new Ll(c(t.material));
                break;
            case "Group":
                s = new tl;
                break;
            case "Bone":
                s = new Fl;
                break;
            default: s = new dr;
        } if (s.uuid = t.uuid, void 0 !== t.name && (s.name = t.name), void 0 !== t.matrix ? (s.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (s.matrixAutoUpdate = t.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t.position && s.position.fromArray(t.position), void 0 !== t.rotation && s.rotation.fromArray(t.rotation), void 0 !== t.quaternion && s.quaternion.fromArray(t.quaternion), void 0 !== t.scale && s.scale.fromArray(t.scale)), void 0 !== t.castShadow && (s.castShadow = t.castShadow), void 0 !== t.receiveShadow && (s.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (s.shadow.bias = t.shadow.bias), void 0 !== t.shadow.normalBias && (s.shadow.normalBias = t.shadow.normalBias), void 0 !== t.shadow.radius && (s.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && s.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (s.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (s.visible = t.visible), void 0 !== t.frustumCulled && (s.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (s.renderOrder = t.renderOrder), void 0 !== t.userData && (s.userData = t.userData), void 0 !== t.layers && (s.layers.mask = t.layers), void 0 !== t.children) {
            const a = t.children;
            for (let t = 0; t < a.length; t++)
                s.add(this.parseObject(a[t], e, i, n, r));
        } if (void 0 !== t.animations) {
            const e = t.animations;
            for (let t = 0; t < e.length; t++) {
                const i = e[t];
                s.animations.push(r[i]);
            }
        } if ("LOD" === t.type) {
            void 0 !== t.autoUpdate && (s.autoUpdate = t.autoUpdate);
            const e = t.levels;
            for (let t = 0; t < e.length; t++) {
                const i = e[t], n = s.getObjectByProperty("uuid", i.object);
                void 0 !== n && s.addLevel(n, i.distance, i.hysteresis);
            }
        } return s; }
        bindSkeletons(t, e) { 0 !== Object.keys(e).length && t.traverse((function (t) { if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
            const i = e[t.skeleton];
            void 0 === i ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(i, t.bindMatrix);
        } })); }
    }
    const rd = { UVMapping: nt, CubeReflectionMapping: rt, CubeRefractionMapping: st, EquirectangularReflectionMapping: at, EquirectangularRefractionMapping: ot, CubeUVReflectionMapping: lt }, sd = { RepeatWrapping: ct, ClampToEdgeWrapping: ht, MirroredRepeatWrapping: ut }, ad = { NearestFilter: dt, NearestMipmapNearestFilter: pt, NearestMipmapLinearFilter: mt, LinearFilter: vt, LinearMipmapNearestFilter: xt, LinearMipmapLinearFilter: yt };
    class od extends Su {
        constructor(t) { super(t), this.isImageBitmapLoader = !0, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }; }
        setOptions(t) { return this.options = t, this; }
        load(t, e, i, n) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); const r = this, s = bu.get(t); if (void 0 !== s)
            return r.manager.itemStart(t), setTimeout((function () { e && e(s), r.manager.itemEnd(t); }), 0), s; const a = {}; a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then((function (t) { return t.blob(); })).then((function (t) { return createImageBitmap(t, Object.assign(r.options, { colorSpaceConversion: "none" })); })).then((function (i) { bu.add(t, i), e && e(i), r.manager.itemEnd(t); })).catch((function (e) { n && n(e), r.manager.itemError(t), r.manager.itemEnd(t); })), r.manager.itemStart(t); }
    }
    let ld;
    class cd {
        static getContext() { return void 0 === ld && (ld = new (window.AudioContext || window.webkitAudioContext)), ld; }
        static setContext(t) { ld = t; }
    }
    class hd extends Su {
        constructor(t) { super(t); }
        load(t, e, i, n) { const r = this, s = new Au(this.manager); s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function (i) { try {
            const t = i.slice(0);
            cd.getContext().decodeAudioData(t, (function (t) { e(t); }));
        }
        catch (e) {
            n ? n(e) : console.error(e), r.manager.itemError(t);
        } }), i, n); }
    }
    class ud extends $u {
        constructor(t, e, i = 1) { super(void 0, i), this.isHemisphereLightProbe = !0; const n = (new Zi).set(t), r = (new Zi).set(e), s = new un(n.r, n.g, n.b), a = new un(r.r, r.g, r.b), o = Math.sqrt(Math.PI), l = o * Math.sqrt(.75); this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l); }
    }
    class dd extends $u {
        constructor(t, e = 1) { super(void 0, e), this.isAmbientLightProbe = !0; const i = (new Zi).set(t); this.sh.coefficients[0].set(i.r, i.g, i.b).multiplyScalar(2 * Math.sqrt(Math.PI)); }
    }
    const pd = new Gn, fd = new Gn, md = new Gn;
    class gd {
        constructor() { this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new gs, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new gs, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = { focus: null, fov: null, aspect: null, near: null, far: null, zoom: null, eyeSep: null }; }
        update(t) { const e = this._cache; if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
            e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep, md.copy(t.projectionMatrix);
            const i = e.eyeSep / 2, n = i * e.near / e.focus, r = e.near * Math.tan(yi * e.fov * .5) / e.zoom;
            let s, a;
            fd.elements[12] = -i, pd.elements[12] = i, s = -r * e.aspect + n, a = r * e.aspect + n, md.elements[0] = 2 * e.near / (a - s), md.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(md), s = -r * e.aspect - n, a = r * e.aspect - n, md.elements[0] = 2 * e.near / (a - s), md.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(md);
        } this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(fd), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(pd); }
    }
    class vd {
        constructor(t = !0) { this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1; }
        start() { this.startTime = xd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0; }
        stop() { this.getElapsedTime(), this.running = !1, this.autoStart = !1; }
        getElapsedTime() { return this.getDelta(), this.elapsedTime; }
        getDelta() { let t = 0; if (this.autoStart && !this.running)
            return this.start(), 0; if (this.running) {
            const e = xd();
            t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
        } return t; }
    }
    function xd() { return ("undefined" == typeof performance ? Date : performance).now(); }
    const _d = new un, yd = new hn, bd = new un, Md = new un;
    class wd extends dr {
        constructor() { super(), this.type = "AudioListener", this.context = cd.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new vd; }
        getInput() { return this.gain; }
        removeFilter() { return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this; }
        getFilter() { return this.filter; }
        setFilter(t) { return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this; }
        getMasterVolume() { return this.gain.gain.value; }
        setMasterVolume(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this; }
        updateMatrixWorld(t) { super.updateMatrixWorld(t); const e = this.context.listener, i = this.up; if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(_d, yd, bd), Md.set(0, 0, -1).applyQuaternion(yd), e.positionX) {
            const t = this.context.currentTime + this.timeDelta;
            e.positionX.linearRampToValueAtTime(_d.x, t), e.positionY.linearRampToValueAtTime(_d.y, t), e.positionZ.linearRampToValueAtTime(_d.z, t), e.forwardX.linearRampToValueAtTime(Md.x, t), e.forwardY.linearRampToValueAtTime(Md.y, t), e.forwardZ.linearRampToValueAtTime(Md.z, t), e.upX.linearRampToValueAtTime(i.x, t), e.upY.linearRampToValueAtTime(i.y, t), e.upZ.linearRampToValueAtTime(i.z, t);
        }
        else
            e.setPosition(_d.x, _d.y, _d.z), e.setOrientation(Md.x, Md.y, Md.z, i.x, i.y, i.z); }
    }
    class Sd extends dr {
        constructor(t) { super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []; }
        getOutput() { return this.gain; }
        setNodeSource(t) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this; }
        setMediaElementSource(t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this; }
        setMediaStreamSource(t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this; }
        setBuffer(t) { return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this; }
        play(t = 0) { if (!0 === this.isPlaying)
            return void console.warn("THREE.Audio: Audio is already playing."); if (!1 === this.hasPlaybackControl)
            return void console.warn("THREE.Audio: this Audio has no playback control."); this._startedAt = this.context.currentTime + t; const e = this.context.createBufferSource(); return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect(); }
        pause() { if (!1 !== this.hasPlaybackControl)
            return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this; console.warn("THREE.Audio: this Audio has no playback control."); }
        stop() { if (!1 !== this.hasPlaybackControl)
            return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this; console.warn("THREE.Audio: this Audio has no playback control."); }
        connect() { if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++)
                this.filters[t - 1].connect(this.filters[t]);
            this.filters[this.filters.length - 1].connect(this.getOutput());
        }
        else
            this.source.connect(this.getOutput()); return this._connected = !0, this; }
        disconnect() { if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++)
                this.filters[t - 1].disconnect(this.filters[t]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput());
        }
        else
            this.source.disconnect(this.getOutput()); return this._connected = !1, this; }
        getFilters() { return this.filters; }
        setFilters(t) { return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this; }
        setDetune(t) { if (this.detune = t, void 0 !== this.source.detune)
            return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this; }
        getDetune() { return this.detune; }
        getFilter() { return this.getFilters()[0]; }
        setFilter(t) { return this.setFilters(t ? [t] : []); }
        setPlaybackRate(t) { if (!1 !== this.hasPlaybackControl)
            return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this; console.warn("THREE.Audio: this Audio has no playback control."); }
        getPlaybackRate() { return this.playbackRate; }
        onEnded() { this.isPlaying = !1; }
        getLoop() { return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop; }
        setLoop(t) { if (!1 !== this.hasPlaybackControl)
            return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this; console.warn("THREE.Audio: this Audio has no playback control."); }
        setLoopStart(t) { return this.loopStart = t, this; }
        setLoopEnd(t) { return this.loopEnd = t, this; }
        getVolume() { return this.gain.gain.value; }
        setVolume(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this; }
    }
    const Td = new un, Ed = new hn, Ad = new un, Cd = new un;
    class Ld extends Sd {
        constructor(t) { super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain); }
        disconnect() { super.disconnect(), this.panner.disconnect(this.gain); }
        getOutput() { return this.panner; }
        getRefDistance() { return this.panner.refDistance; }
        setRefDistance(t) { return this.panner.refDistance = t, this; }
        getRolloffFactor() { return this.panner.rolloffFactor; }
        setRolloffFactor(t) { return this.panner.rolloffFactor = t, this; }
        getDistanceModel() { return this.panner.distanceModel; }
        setDistanceModel(t) { return this.panner.distanceModel = t, this; }
        getMaxDistance() { return this.panner.maxDistance; }
        setMaxDistance(t) { return this.panner.maxDistance = t, this; }
        setDirectionalCone(t, e, i) { return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this; }
        updateMatrixWorld(t) { if (super.updateMatrixWorld(t), !0 === this.hasPlaybackControl && !1 === this.isPlaying)
            return; this.matrixWorld.decompose(Td, Ed, Ad), Cd.set(0, 0, 1).applyQuaternion(Ed); const e = this.panner; if (e.positionX) {
            const t = this.context.currentTime + this.listener.timeDelta;
            e.positionX.linearRampToValueAtTime(Td.x, t), e.positionY.linearRampToValueAtTime(Td.y, t), e.positionZ.linearRampToValueAtTime(Td.z, t), e.orientationX.linearRampToValueAtTime(Cd.x, t), e.orientationY.linearRampToValueAtTime(Cd.y, t), e.orientationZ.linearRampToValueAtTime(Cd.z, t);
        }
        else
            e.setPosition(Td.x, Td.y, Td.z), e.setOrientation(Cd.x, Cd.y, Cd.z); }
    }
    class Pd {
        constructor(t, e = 2048) { this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser); }
        getFrequencyData() { return this.analyser.getByteFrequencyData(this.data), this.data; }
        getAverageFrequency() { let t = 0; const e = this.getFrequencyData(); for (let i = 0; i < e.length; i++)
            t += e[i]; return t / e.length; }
    }
    class Rd {
        constructor(t, e, i) { let n, r, s; switch (this.binding = t, this.valueSize = i, e) {
            case "quaternion":
                n = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
                break;
            case "string":
            case "bool":
                n = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i);
                break;
            default: n = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i);
        } this._mixBufferRegion = n, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0; }
        accumulate(t, e) { const i = this.buffer, n = this.valueSize, r = t * n + n; let s = this.cumulativeWeight; if (0 === s) {
            for (let t = 0; t !== n; ++t)
                i[r + t] = i[t];
            s = e;
        }
        else {
            s += e;
            const t = e / s;
            this._mixBufferRegion(i, r, 0, t, n);
        } this.cumulativeWeight = s; }
        accumulateAdditive(t) { const e = this.buffer, i = this.valueSize, n = i * this._addIndex; 0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, n, 0, t, i), this.cumulativeWeightAdditive += t; }
        apply(t) { const e = this.valueSize, i = this.buffer, n = t * e + e, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, a = this.binding; if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
            const t = e * this._origIndex;
            this._mixBufferRegion(i, n, t, 1 - r, e);
        } s > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * e, 1, e); for (let t = e, r = e + e; t !== r; ++t)
            if (i[t] !== i[t + e]) {
                a.setValue(i, n);
                break;
            } }
        saveOriginalState() { const t = this.binding, e = this.buffer, i = this.valueSize, n = i * this._origIndex; t.getValue(e, n); for (let t = i, r = n; t !== r; ++t)
            e[t] = e[n + t % i]; this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0; }
        restoreOriginalState() { const t = 3 * this.valueSize; this.binding.setValue(this.buffer, t); }
        _setAdditiveIdentityNumeric() { const t = this._addIndex * this.valueSize, e = t + this.valueSize; for (let i = t; i < e; i++)
            this.buffer[i] = 0; }
        _setAdditiveIdentityQuaternion() { this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1; }
        _setAdditiveIdentityOther() { const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize; for (let i = 0; i < this.valueSize; i++)
            this.buffer[e + i] = this.buffer[t + i]; }
        _select(t, e, i, n, r) { if (n >= .5)
            for (let n = 0; n !== r; ++n)
                t[e + n] = t[i + n]; }
        _slerp(t, e, i, n) { hn.slerpFlat(t, e, t, e, t, i, n); }
        _slerpAdditive(t, e, i, n, r) { const s = this._workIndex * r; hn.multiplyQuaternionsFlat(t, s, t, e, t, i), hn.slerpFlat(t, e, t, e, t, s, n); }
        _lerp(t, e, i, n, r) { const s = 1 - n; for (let a = 0; a !== r; ++a) {
            const r = e + a;
            t[r] = t[r] * s + t[i + a] * n;
        } }
        _lerpAdditive(t, e, i, n, r) { for (let s = 0; s !== r; ++s) {
            const r = e + s;
            t[r] = t[r] + t[i + s] * n;
        } }
    }
    const Dd = "\\[\\]\\.:\\/", Id = new RegExp("[" + Dd + "]", "g"), Od = "[^" + Dd + "]", zd = "[^" + Dd.replace("\\.", "") + "]", Nd = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Od) + /(WCOD+)?/.source.replace("WCOD", zd) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Od) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Od) + "$"), Ud = ["material", "materials", "bones", "map"];
    class kd {
        constructor(t, e, i) { this.path = e, this.parsedPath = i || kd.parseTrackName(e), this.node = kd.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound; }
        static create(t, e, i) { return t && t.isAnimationObjectGroup ? new kd.Composite(t, e, i) : new kd(t, e, i); }
        static sanitizeNodeName(t) { return t.replace(/\s/g, "_").replace(Id, ""); }
        static parseTrackName(t) { const e = Nd.exec(t); if (null === e)
            throw new Error("PropertyBinding: Cannot parse trackName: " + t); const i = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, n = i.nodeName && i.nodeName.lastIndexOf("."); if (void 0 !== n && -1 !== n) {
            const t = i.nodeName.substring(n + 1);
            -1 !== Ud.indexOf(t) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = t);
        } if (null === i.propertyName || 0 === i.propertyName.length)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t); return i; }
        static findNode(t, e) { if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid)
            return t; if (t.skeleton) {
            const i = t.skeleton.getBoneByName(e);
            if (void 0 !== i)
                return i;
        } if (t.children) {
            const i = function (t) { for (let n = 0; n < t.length; n++) {
                const r = t[n];
                if (r.name === e || r.uuid === e)
                    return r;
                const s = i(r.children);
                if (s)
                    return s;
            } return null; }, n = i(t.children);
            if (n)
                return n;
        } return null; }
        _getValue_unavailable() { }
        _setValue_unavailable() { }
        _getValue_direct(t, e) { t[e] = this.targetObject[this.propertyName]; }
        _getValue_array(t, e) { const i = this.resolvedProperty; for (let n = 0, r = i.length; n !== r; ++n)
            t[e++] = i[n]; }
        _getValue_arrayElement(t, e) { t[e] = this.resolvedProperty[this.propertyIndex]; }
        _getValue_toArray(t, e) { this.resolvedProperty.toArray(t, e); }
        _setValue_direct(t, e) { this.targetObject[this.propertyName] = t[e]; }
        _setValue_direct_setNeedsUpdate(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0; }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0; }
        _setValue_array(t, e) { const i = this.resolvedProperty; for (let n = 0, r = i.length; n !== r; ++n)
            i[n] = t[e++]; }
        _setValue_array_setNeedsUpdate(t, e) { const i = this.resolvedProperty; for (let n = 0, r = i.length; n !== r; ++n)
            i[n] = t[e++]; this.targetObject.needsUpdate = !0; }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) { const i = this.resolvedProperty; for (let n = 0, r = i.length; n !== r; ++n)
            i[n] = t[e++]; this.targetObject.matrixWorldNeedsUpdate = !0; }
        _setValue_arrayElement(t, e) { this.resolvedProperty[this.propertyIndex] = t[e]; }
        _setValue_arrayElement_setNeedsUpdate(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0; }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0; }
        _setValue_fromArray(t, e) { this.resolvedProperty.fromArray(t, e); }
        _setValue_fromArray_setNeedsUpdate(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0; }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0; }
        _getValue_unbound(t, e) { this.bind(), this.getValue(t, e); }
        _setValue_unbound(t, e) { this.bind(), this.setValue(t, e); }
        bind() { let t = this.node; const e = this.parsedPath, i = e.objectName, n = e.propertyName; let r = e.propertyIndex; if (t || (t = kd.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t)
            return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found."); if (i) {
            let n = e.objectIndex;
            switch (i) {
                case "materials":
                    if (!t.material)
                        return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    if (!t.material.materials)
                        return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    t = t.material.materials;
                    break;
                case "bones":
                    if (!t.skeleton)
                        return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    t = t.skeleton.bones;
                    for (let e = 0; e < t.length; e++)
                        if (t[e].name === n) {
                            n = e;
                            break;
                        }
                    break;
                case "map":
                    if ("map" in t) {
                        t = t.map;
                        break;
                    }
                    if (!t.material)
                        return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    if (!t.material.map)
                        return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                    t = t.material.map;
                    break;
                default:
                    if (void 0 === t[i])
                        return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    t = t[i];
            }
            if (void 0 !== n) {
                if (void 0 === t[n])
                    return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                t = t[n];
            }
        } const s = t[n]; if (void 0 === s) {
            const i = e.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + n + " but it wasn't found.", t);
        } let a = this.Versioning.None; this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate); let o = this.BindingType.Direct; if (void 0 !== r) {
            if ("morphTargetInfluences" === n) {
                if (!t.geometry)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (!t.geometry.morphAttributes)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
            }
            o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
        }
        else
            void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n; this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a]; }
        unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound; }
    }
    kd.Composite = class {
        constructor(t, e, i) { const n = i || kd.parseTrackName(e); this._targetGroup = t, this._bindings = t.subscribe_(e, n); }
        getValue(t, e) { this.bind(); const i = this._targetGroup.nCachedObjects_, n = this._bindings[i]; void 0 !== n && n.getValue(t, e); }
        setValue(t, e) { const i = this._bindings; for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
            i[n].setValue(t, e); }
        bind() { const t = this._bindings; for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
            t[e].bind(); }
        unbind() { const t = this._bindings; for (let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)
            t[e].unbind(); }
    }, kd.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, kd.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, kd.prototype.GetterByBindingType = [kd.prototype._getValue_direct, kd.prototype._getValue_array, kd.prototype._getValue_arrayElement, kd.prototype._getValue_toArray], kd.prototype.SetterByBindingTypeAndVersioning = [[kd.prototype._setValue_direct, kd.prototype._setValue_direct_setNeedsUpdate, kd.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [kd.prototype._setValue_array, kd.prototype._setValue_array_setNeedsUpdate, kd.prototype._setValue_array_setMatrixWorldNeedsUpdate], [kd.prototype._setValue_arrayElement, kd.prototype._setValue_arrayElement_setNeedsUpdate, kd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [kd.prototype._setValue_fromArray, kd.prototype._setValue_fromArray_setNeedsUpdate, kd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
    class Bd {
        constructor() { this.isAnimationObjectGroup = !0, this.uuid = Mi(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0; const t = {}; this._indicesByUUID = t; for (let e = 0, i = arguments.length; e !== i; ++e)
            t[arguments[e].uuid] = e; this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {}; const e = this; this.stats = { objects: { get total() { return e._objects.length; }, get inUse() { return this.total - e.nCachedObjects_; } }, get bindingsPerObject() { return e._bindings.length; } }; }
        add() { const t = this._objects, e = this._indicesByUUID, i = this._paths, n = this._parsedPaths, r = this._bindings, s = r.length; let a, o = t.length, l = this.nCachedObjects_; for (let c = 0, h = arguments.length; c !== h; ++c) {
            const h = arguments[c], u = h.uuid;
            let d = e[u];
            if (void 0 === d) {
                d = o++, e[u] = d, t.push(h);
                for (let t = 0, e = s; t !== e; ++t)
                    r[t].push(new kd(h, i[t], n[t]));
            }
            else if (d < l) {
                a = t[d];
                const o = --l, c = t[o];
                e[c.uuid] = d, t[d] = c, e[u] = o, t[o] = h;
                for (let t = 0, e = s; t !== e; ++t) {
                    const e = r[t], s = e[o];
                    let a = e[d];
                    e[d] = s, void 0 === a && (a = new kd(h, i[t], n[t])), e[o] = a;
                }
            }
            else
                t[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
        } this.nCachedObjects_ = l; }
        remove() { const t = this._objects, e = this._indicesByUUID, i = this._bindings, n = i.length; let r = this.nCachedObjects_; for (let s = 0, a = arguments.length; s !== a; ++s) {
            const a = arguments[s], o = a.uuid, l = e[o];
            if (void 0 !== l && l >= r) {
                const s = r++, c = t[s];
                e[c.uuid] = l, t[l] = c, e[o] = s, t[s] = a;
                for (let t = 0, e = n; t !== e; ++t) {
                    const e = i[t], n = e[s], r = e[l];
                    e[l] = n, e[s] = r;
                }
            }
        } this.nCachedObjects_ = r; }
        uncache() { const t = this._objects, e = this._indicesByUUID, i = this._bindings, n = i.length; let r = this.nCachedObjects_, s = t.length; for (let a = 0, o = arguments.length; a !== o; ++a) {
            const o = arguments[a].uuid, l = e[o];
            if (void 0 !== l)
                if (delete e[o], l < r) {
                    const a = --r, o = t[a], c = --s, h = t[c];
                    e[o.uuid] = l, t[l] = o, e[h.uuid] = a, t[a] = h, t.pop();
                    for (let t = 0, e = n; t !== e; ++t) {
                        const e = i[t], n = e[a], r = e[c];
                        e[l] = n, e[a] = r, e.pop();
                    }
                }
                else {
                    const r = --s, a = t[r];
                    r > 0 && (e[a.uuid] = l), t[l] = a, t.pop();
                    for (let t = 0, e = n; t !== e; ++t) {
                        const e = i[t];
                        e[l] = e[r], e.pop();
                    }
                }
        } this.nCachedObjects_ = r; }
        subscribe_(t, e) { const i = this._bindingsIndicesByPath; let n = i[t]; const r = this._bindings; if (void 0 !== n)
            return r[n]; const s = this._paths, a = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, h = new Array(l); n = r.length, i[t] = n, s.push(t), a.push(e), r.push(h); for (let i = c, n = o.length; i !== n; ++i) {
            const n = o[i];
            h[i] = new kd(n, t, e);
        } return h; }
        unsubscribe_(t) { const e = this._bindingsIndicesByPath, i = e[t]; if (void 0 !== i) {
            const n = this._paths, r = this._parsedPaths, s = this._bindings, a = s.length - 1, o = s[a];
            e[t[a]] = i, s[i] = o, s.pop(), r[i] = r[a], r.pop(), n[i] = n[a], n.pop();
        } }
    }
    class Fd {
        constructor(t, e, i = null, n = e.blendMode) { this._mixer = t, this._clip = e, this._localRoot = i, this.blendMode = n; const r = e.tracks, s = r.length, a = new Array(s), o = { endingStart: Ee, endingEnd: Ee }; for (let t = 0; t !== s; ++t) {
            const e = r[t].createInterpolant(null);
            a[t] = e, e.settings = o;
        } this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = be, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0; }
        play() { return this._mixer._activateAction(this), this; }
        stop() { return this._mixer._deactivateAction(this), this.reset(); }
        reset() { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping(); }
        isRunning() { return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this); }
        isScheduled() { return this._mixer._isActiveAction(this); }
        startAt(t) { return this._startTime = t, this; }
        setLoop(t, e) { return this.loop = t, this.repetitions = e, this; }
        setEffectiveWeight(t) { return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading(); }
        getEffectiveWeight() { return this._effectiveWeight; }
        fadeIn(t) { return this._scheduleFading(t, 0, 1); }
        fadeOut(t) { return this._scheduleFading(t, 1, 0); }
        crossFadeFrom(t, e, i) { if (t.fadeOut(e), this.fadeIn(e), i) {
            const i = this._clip.duration, n = t._clip.duration, r = n / i, s = i / n;
            t.warp(1, r, e), this.warp(s, 1, e);
        } return this; }
        crossFadeTo(t, e, i) { return t.crossFadeFrom(this, e, i); }
        stopFading() { const t = this._weightInterpolant; return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this; }
        setEffectiveTimeScale(t) { return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping(); }
        getEffectiveTimeScale() { return this._effectiveTimeScale; }
        setDuration(t) { return this.timeScale = this._clip.duration / t, this.stopWarping(); }
        syncWith(t) { return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping(); }
        halt(t) { return this.warp(this._effectiveTimeScale, 0, t); }
        warp(t, e, i) { const n = this._mixer, r = n.time, s = this.timeScale; let a = this._timeScaleInterpolant; null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a); const o = a.parameterPositions, l = a.sampleValues; return o[0] = r, o[1] = r + i, l[0] = t / s, l[1] = e / s, this; }
        stopWarping() { const t = this._timeScaleInterpolant; return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this; }
        getMixer() { return this._mixer; }
        getClip() { return this._clip; }
        getRoot() { return this._localRoot || this._mixer._root; }
        _update(t, e, i, n) { if (!this.enabled)
            return void this._updateWeight(t); const r = this._startTime; if (null !== r) {
            const n = (t - r) * i;
            n < 0 || 0 === i ? e = 0 : (this._startTime = null, e = i * n);
        } e *= this._updateTimeScale(t); const s = this._updateTime(e), a = this._updateWeight(t); if (a > 0) {
            const t = this._interpolants, e = this._propertyBindings;
            if (this.blendMode === Pe)
                for (let i = 0, n = t.length; i !== n; ++i)
                    t[i].evaluate(s), e[i].accumulateAdditive(a);
            else
                for (let i = 0, r = t.length; i !== r; ++i)
                    t[i].evaluate(s), e[i].accumulate(n, a);
        } }
        _updateWeight(t) { let e = 0; if (this.enabled) {
            e = this.weight;
            const i = this._weightInterpolant;
            if (null !== i) {
                const n = i.evaluate(t)[0];
                e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1));
            }
        } return this._effectiveWeight = e, e; }
        _updateTimeScale(t) { let e = 0; if (!this.paused) {
            e = this.timeScale;
            const i = this._timeScaleInterpolant;
            if (null !== i) {
                e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
            }
        } return this._effectiveTimeScale = e, e; }
        _updateTime(t) { const e = this._clip.duration, i = this.loop; let n = this.time + t, r = this._loopCount; const s = i === Me; if (0 === t)
            return -1 === r ? n : s && 1 == (1 & r) ? e - n : n; if (i === ye) {
            -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            t: {
                if (n >= e)
                    n = e;
                else {
                    if (!(n < 0)) {
                        this.time = n;
                        break t;
                    }
                    n = 0;
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = n, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 });
            }
        }
        else {
            if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), n >= e || n < 0) {
                const i = Math.floor(n / e);
                n -= e * i, r += Math.abs(i);
                const a = this.repetitions - r;
                if (a <= 0)
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = t > 0 ? e : 0, this.time = n, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t > 0 ? 1 : -1 });
                else {
                    if (1 === a) {
                        const e = t < 0;
                        this._setEndings(e, !e, s);
                    }
                    else
                        this._setEndings(!1, !1, s);
                    this._loopCount = r, this.time = n, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: i });
                }
            }
            else
                this.time = n;
            if (s && 1 == (1 & r))
                return e - n;
        } return n; }
        _setEndings(t, e, i) { const n = this._interpolantSettings; i ? (n.endingStart = Ae, n.endingEnd = Ae) : (n.endingStart = t ? this.zeroSlopeAtStart ? Ae : Ee : Ce, n.endingEnd = e ? this.zeroSlopeAtEnd ? Ae : Ee : Ce); }
        _scheduleFading(t, e, i) { const n = this._mixer, r = n.time; let s = this._weightInterpolant; null === s && (s = n._lendControlInterpolant(), this._weightInterpolant = s); const a = s.parameterPositions, o = s.sampleValues; return a[0] = r, o[0] = e, a[1] = r + t, o[1] = i, this; }
    }
    const Gd = new Float32Array(1);
    class Vd extends vi {
        constructor(t) { super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1; }
        _bindAction(t, e) { const i = t._localRoot || this._root, n = t._clip.tracks, r = n.length, s = t._propertyBindings, a = t._interpolants, o = i.uuid, l = this._bindingsByRootAndName; let c = l[o]; void 0 === c && (c = {}, l[o] = c); for (let t = 0; t !== r; ++t) {
            const r = n[t], l = r.name;
            let h = c[l];
            if (void 0 !== h)
                ++h.referenceCount, s[t] = h;
            else {
                if (h = s[t], void 0 !== h) {
                    null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                    continue;
                }
                const n = e && e._propertyBindings[t].binding.parsedPath;
                h = new Rd(kd.create(i, l, n), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t] = h;
            }
            a[t].resultBuffer = h.buffer;
        } }
        _activateAction(t) { if (!this._isActiveAction(t)) {
            if (null === t._cacheIndex) {
                const e = (t._localRoot || this._root).uuid, i = t._clip.uuid, n = this._actionsByClip[i];
                this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e);
            }
            const e = t._propertyBindings;
            for (let t = 0, i = e.length; t !== i; ++t) {
                const i = e[t];
                0 == i.useCount++ && (this._lendBinding(i), i.saveOriginalState());
            }
            this._lendAction(t);
        } }
        _deactivateAction(t) { if (this._isActiveAction(t)) {
            const e = t._propertyBindings;
            for (let t = 0, i = e.length; t !== i; ++t) {
                const i = e[t];
                0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i));
            }
            this._takeBackAction(t);
        } }
        _initMemoryManager() { this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0; const t = this; this.stats = { actions: { get total() { return t._actions.length; }, get inUse() { return t._nActiveActions; } }, bindings: { get total() { return t._bindings.length; }, get inUse() { return t._nActiveBindings; } }, controlInterpolants: { get total() { return t._controlInterpolants.length; }, get inUse() { return t._nActiveControlInterpolants; } } }; }
        _isActiveAction(t) { const e = t._cacheIndex; return null !== e && e < this._nActiveActions; }
        _addInactiveAction(t, e, i) { const n = this._actions, r = this._actionsByClip; let s = r[e]; if (void 0 === s)
            s = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = s;
        else {
            const e = s.knownActions;
            t._byClipCacheIndex = e.length, e.push(t);
        } t._cacheIndex = n.length, n.push(t), s.actionByRoot[i] = t; }
        _removeInactiveAction(t) { const e = this._actions, i = e[e.length - 1], n = t._cacheIndex; i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null; const r = t._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1], c = t._byClipCacheIndex; l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null; delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t); }
        _removeInactiveBindingsForAction(t) { const e = t._propertyBindings; for (let t = 0, i = e.length; t !== i; ++t) {
            const i = e[t];
            0 == --i.referenceCount && this._removeInactiveBinding(i);
        } }
        _lendAction(t) { const e = this._actions, i = t._cacheIndex, n = this._nActiveActions++, r = e[n]; t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r; }
        _takeBackAction(t) { const e = this._actions, i = t._cacheIndex, n = --this._nActiveActions, r = e[n]; t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r; }
        _addInactiveBinding(t, e, i) { const n = this._bindingsByRootAndName, r = this._bindings; let s = n[e]; void 0 === s && (s = {}, n[e] = s), s[i] = t, t._cacheIndex = r.length, r.push(t); }
        _removeInactiveBinding(t) { const e = this._bindings, i = t.binding, n = i.rootNode.uuid, r = i.path, s = this._bindingsByRootAndName, a = s[n], o = e[e.length - 1], l = t._cacheIndex; o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[n]; }
        _lendBinding(t) { const e = this._bindings, i = t._cacheIndex, n = this._nActiveBindings++, r = e[n]; t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r; }
        _takeBackBinding(t) { const e = this._bindings, i = t._cacheIndex, n = --this._nActiveBindings, r = e[n]; t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r; }
        _lendControlInterpolant() { const t = this._controlInterpolants, e = this._nActiveControlInterpolants++; let i = t[e]; return void 0 === i && (i = new cu(new Float32Array(2), new Float32Array(2), 1, Gd), i.__cacheIndex = e, t[e] = i), i; }
        _takeBackControlInterpolant(t) { const e = this._controlInterpolants, i = t.__cacheIndex, n = --this._nActiveControlInterpolants, r = e[n]; t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r; }
        clipAction(t, e, i) { const n = e || this._root, r = n.uuid; let s = "string" == typeof t ? _u.findByName(n, t) : t; const a = null !== s ? s.uuid : t, o = this._actionsByClip[a]; let l = null; if (void 0 === i && (i = null !== s ? s.blendMode : Le), void 0 !== o) {
            const t = o.actionByRoot[r];
            if (void 0 !== t && t.blendMode === i)
                return t;
            l = o.knownActions[0], null === s && (s = l._clip);
        } if (null === s)
            return null; const c = new Fd(this, s, e, i); return this._bindAction(c, l), this._addInactiveAction(c, a, r), c; }
        existingAction(t, e) { const i = e || this._root, n = i.uuid, r = "string" == typeof t ? _u.findByName(i, t) : t, s = r ? r.uuid : t, a = this._actionsByClip[s]; return void 0 !== a && a.actionByRoot[n] || null; }
        stopAllAction() { const t = this._actions; for (let e = this._nActiveActions - 1; e >= 0; --e)
            t[e].stop(); return this; }
        update(t) { t *= this.timeScale; const e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), s = this._accuIndex ^= 1; for (let a = 0; a !== i; ++a) {
            e[a]._update(n, t, r, s);
        } const a = this._bindings, o = this._nActiveBindings; for (let t = 0; t !== o; ++t)
            a[t].apply(s); return this; }
        setTime(t) { this.time = 0; for (let t = 0; t < this._actions.length; t++)
            this._actions[t].time = 0; return this.update(t); }
        getRoot() { return this._root; }
        uncacheClip(t) { const e = this._actions, i = t.uuid, n = this._actionsByClip, r = n[i]; if (void 0 !== r) {
            const t = r.knownActions;
            for (let i = 0, n = t.length; i !== n; ++i) {
                const n = t[i];
                this._deactivateAction(n);
                const r = n._cacheIndex, s = e[e.length - 1];
                n._cacheIndex = null, n._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(n);
            }
            delete n[i];
        } }
        uncacheRoot(t) { const e = t.uuid, i = this._actionsByClip; for (const t in i) {
            const n = i[t].actionByRoot[e];
            void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
        } const n = this._bindingsByRootAndName[e]; if (void 0 !== n)
            for (const t in n) {
                const e = n[t];
                e.restoreOriginalState(), this._removeInactiveBinding(e);
            } }
        uncacheAction(t, e) { const i = this.existingAction(t, e); null !== i && (this._deactivateAction(i), this._removeInactiveAction(i)); }
    }
    class Hd {
        constructor(t) { this.value = t; }
        clone() { return new Hd(void 0 === this.value.clone ? this.value : this.value.clone()); }
    }
    let Wd = 0;
    class jd extends vi {
        constructor() { super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: Wd++ }), this.name = "", this.usage = si, this.uniforms = []; }
        add(t) { return this.uniforms.push(t), this; }
        remove(t) { const e = this.uniforms.indexOf(t); return -1 !== e && this.uniforms.splice(e, 1), this; }
        setName(t) { return this.name = t, this; }
        setUsage(t) { return this.usage = t, this; }
        dispose() { return this.dispatchEvent({ type: "dispose" }), this; }
        copy(t) { this.name = t.name, this.usage = t.usage; const e = t.uniforms; this.uniforms.length = 0; for (let t = 0, i = e.length; t < i; t++)
            this.uniforms.push(e[t].clone()); return this; }
        clone() { return (new this.constructor).copy(this); }
    }
    class qd extends dl {
        constructor(t, e, i = 1) { super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = i; }
        copy(t) { return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this; }
        clone(t) { const e = super.clone(t); return e.meshPerAttribute = this.meshPerAttribute, e; }
        toJSON(t) { const e = super.toJSON(t); return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e; }
    }
    class Xd {
        constructor(t, e, i, n, r) { this.isGLBufferAttribute = !0, this.name = "", this.buffer = t, this.type = e, this.itemSize = i, this.elementSize = n, this.count = r, this.version = 0; }
        set needsUpdate(t) { !0 === t && this.version++; }
        setBuffer(t) { return this.buffer = t, this; }
        setType(t, e) { return this.type = t, this.elementSize = e, this; }
        setItemSize(t) { return this.itemSize = t, this; }
        setCount(t) { return this.count = t, this; }
    }
    class Yd {
        constructor(t, e, i = 0, n = 1 / 0) { this.ray = new Fn(t, e), this.near = i, this.far = n, this.camera = null, this.layers = new $n, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }; }
        set(t, e) { this.ray.set(t, e); }
        setFromCamera(t, e) { e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type); }
        intersectObject(t, e = !0, i = []) { return Jd(t, this, i, e), i.sort(Zd), i; }
        intersectObjects(t, e = !0, i = []) { for (let n = 0, r = t.length; n < r; n++)
            Jd(t[n], this, i, e); return i.sort(Zd), i; }
    }
    function Zd(t, e) { return t.distance - e.distance; }
    function Jd(t, e, i, n) { if (t.layers.test(e.layers) && t.raycast(e, i), !0 === n) {
        const n = t.children;
        for (let t = 0, r = n.length; t < r; t++)
            Jd(n[t], e, i, !0);
    } }
    class Kd {
        constructor(t = 1, e = 0, i = 0) { return this.radius = t, this.phi = e, this.theta = i, this; }
        set(t, e, i) { return this.radius = t, this.phi = e, this.theta = i, this; }
        copy(t) { return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this; }
        makeSafe() { const t = 1e-6; return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this; }
        setFromVector3(t) { return this.setFromCartesianCoords(t.x, t.y, t.z); }
        setFromCartesianCoords(t, e, i) { return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(wi(e / this.radius, -1, 1))), this; }
        clone() { return (new this.constructor).copy(this); }
    }
    class $d {
        constructor(t = 1, e = 0, i = 0) { return this.radius = t, this.theta = e, this.y = i, this; }
        set(t, e, i) { return this.radius = t, this.theta = e, this.y = i, this; }
        copy(t) { return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this; }
        setFromVector3(t) { return this.setFromCartesianCoords(t.x, t.y, t.z); }
        setFromCartesianCoords(t, e, i) { return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this; }
        clone() { return (new this.constructor).copy(this); }
    }
    const Qd = new Di;
    class tp {
        constructor(t = new Di(1 / 0, 1 / 0), e = new Di(-1 / 0, -1 / 0)) { this.isBox2 = !0, this.min = t, this.max = e; }
        set(t, e) { return this.min.copy(t), this.max.copy(e), this; }
        setFromPoints(t) { this.makeEmpty(); for (let e = 0, i = t.length; e < i; e++)
            this.expandByPoint(t[e]); return this; }
        setFromCenterAndSize(t, e) { const i = Qd.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(i), this.max.copy(t).add(i), this; }
        clone() { return (new this.constructor).copy(this); }
        copy(t) { return this.min.copy(t.min), this.max.copy(t.max), this; }
        makeEmpty() { return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this; }
        isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y; }
        getCenter(t) { return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5); }
        getSize(t) { return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min); }
        expandByPoint(t) { return this.min.min(t), this.max.max(t), this; }
        expandByVector(t) { return this.min.sub(t), this.max.add(t), this; }
        expandByScalar(t) { return this.min.addScalar(-t), this.max.addScalar(t), this; }
        containsPoint(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y); }
        containsBox(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y; }
        getParameter(t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y)); }
        intersectsBox(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y); }
        clampPoint(t, e) { return e.copy(t).clamp(this.min, this.max); }
        distanceToPoint(t) { return Qd.copy(t).clamp(this.min, this.max).sub(t).length(); }
        intersect(t) { return this.min.max(t.min), this.max.min(t.max), this; }
        union(t) { return this.min.min(t.min), this.max.max(t.max), this; }
        translate(t) { return this.min.add(t), this.max.add(t), this; }
        equals(t) { return t.min.equals(this.min) && t.max.equals(this.max); }
    }
    const ep = new un, ip = new un;
    class np {
        constructor(t = new un, e = new un) { this.start = t, this.end = e; }
        set(t, e) { return this.start.copy(t), this.end.copy(e), this; }
        copy(t) { return this.start.copy(t.start), this.end.copy(t.end), this; }
        getCenter(t) { return t.addVectors(this.start, this.end).multiplyScalar(.5); }
        delta(t) { return t.subVectors(this.end, this.start); }
        distanceSq() { return this.start.distanceToSquared(this.end); }
        distance() { return this.start.distanceTo(this.end); }
        at(t, e) { return this.delta(e).multiplyScalar(t).add(this.start); }
        closestPointToPointParameter(t, e) { ep.subVectors(t, this.start), ip.subVectors(this.end, this.start); const i = ip.dot(ip); let n = ip.dot(ep) / i; return e && (n = wi(n, 0, 1)), n; }
        closestPointToPoint(t, e, i) { const n = this.closestPointToPointParameter(t, e); return this.delta(i).multiplyScalar(n).add(this.start); }
        applyMatrix4(t) { return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this; }
        equals(t) { return t.start.equals(this.start) && t.end.equals(this.end); }
        clone() { return (new this.constructor).copy(this); }
    }
    const rp = new un;
    class sp extends dr {
        constructor(t, e) { super(), this.light = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e, this.type = "SpotLightHelper"; const i = new Xr, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1]; for (let t = 0, e = 1, i = 32; t < i; t++, e++) {
            const r = t / i * Math.PI * 2, s = e / i * Math.PI * 2;
            n.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
        } i.setAttribute("position", new kr(n, 3)); const r = new $l({ fog: !1, toneMapped: !1 }); this.cone = new oc(i, r), this.add(this.cone), this.update(); }
        dispose() { this.cone.geometry.dispose(), this.cone.material.dispose(); }
        update() { this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1); const t = this.light.distance ? this.light.distance : 1e3, e = t * Math.tan(this.light.angle); this.cone.scale.set(e, e, t), rp.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(rp), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color); }
    }
    const ap = new un, op = new Gn, lp = new Gn;
    class cp extends oc {
        constructor(t) { const e = hp(t), i = new Xr, n = [], r = [], s = new Zi(0, 0, 1), a = new Zi(0, 1, 0); for (let t = 0; t < e.length; t++) {
            const i = e[t];
            i.parent && i.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
        } i.setAttribute("position", new kr(n, 3)), i.setAttribute("color", new kr(r, 3)); super(i, new $l({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 })), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1; }
        updateMatrixWorld(t) { const e = this.bones, i = this.geometry, n = i.getAttribute("position"); lp.copy(this.root.matrixWorld).invert(); for (let t = 0, i = 0; t < e.length; t++) {
            const r = e[t];
            r.parent && r.parent.isBone && (op.multiplyMatrices(lp, r.matrixWorld), ap.setFromMatrixPosition(op), n.setXYZ(i, ap.x, ap.y, ap.z), op.multiplyMatrices(lp, r.parent.matrixWorld), ap.setFromMatrixPosition(op), n.setXYZ(i + 1, ap.x, ap.y, ap.z), i += 2);
        } i.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t); }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
    }
    function hp(t) { const e = []; !0 === t.isBone && e.push(t); for (let i = 0; i < t.children.length; i++)
        e.push.apply(e, hp(t.children[i])); return e; }
    class up extends os {
        constructor(t, e, i) { super(new Nh(e, 4, 2), new Er({ wireframe: !0, fog: !1, toneMapped: !1 })), this.light = t, this.color = i, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update(); }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
        update() { this.light.updateWorldMatrix(!0, !1), void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color); }
    }
    const dp = new un, pp = new Zi, fp = new Zi;
    class mp extends dr {
        constructor(t, e, i) { super(), this.light = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, this.type = "HemisphereLightHelper"; const n = new Ih(e); n.rotateY(.5 * Math.PI), this.material = new Er({ wireframe: !0, fog: !1, toneMapped: !1 }), void 0 === this.color && (this.material.vertexColors = !0); const r = n.getAttribute("position"), s = new Float32Array(3 * r.count); n.setAttribute("color", new Lr(s, 3)), this.add(new os(n, this.material)), this.update(); }
        dispose() { this.children[0].geometry.dispose(), this.children[0].material.dispose(); }
        update() { const t = this.children[0]; if (void 0 !== this.color)
            this.material.color.set(this.color);
        else {
            const e = t.geometry.getAttribute("color");
            pp.copy(this.light.color), fp.copy(this.light.groundColor);
            for (let t = 0, i = e.count; t < i; t++) {
                const n = t < i / 2 ? pp : fp;
                e.setXYZ(t, n.r, n.g, n.b);
            }
            e.needsUpdate = !0;
        } this.light.updateWorldMatrix(!0, !1), t.lookAt(dp.setFromMatrixPosition(this.light.matrixWorld).negate()); }
    }
    class gp extends oc {
        constructor(t = 10, e = 10, i = 4473924, n = 8947848) { i = new Zi(i), n = new Zi(n); const r = e / 2, s = t / e, a = t / 2, o = [], l = []; for (let t = 0, c = 0, h = -a; t <= e; t++, h += s) {
            o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
            const e = t === r ? i : n;
            e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3;
        } const c = new Xr; c.setAttribute("position", new kr(o, 3)), c.setAttribute("color", new kr(l, 3)); super(c, new $l({ vertexColors: !0, toneMapped: !1 })), this.type = "GridHelper"; }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
    }
    class vp extends oc {
        constructor(t = 10, e = 16, i = 8, n = 64, r = 4473924, s = 8947848) { r = new Zi(r), s = new Zi(s); const a = [], o = []; if (e > 1)
            for (let i = 0; i < e; i++) {
                const n = i / e * (2 * Math.PI), l = Math.sin(n) * t, c = Math.cos(n) * t;
                a.push(0, 0, 0), a.push(l, 0, c);
                const h = 1 & i ? r : s;
                o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
            } for (let e = 0; e < i; e++) {
            const l = 1 & e ? r : s, c = t - t / i * e;
            for (let t = 0; t < n; t++) {
                let e = t / n * (2 * Math.PI), i = Math.sin(e) * c, r = Math.cos(e) * c;
                a.push(i, 0, r), o.push(l.r, l.g, l.b), e = (t + 1) / n * (2 * Math.PI), i = Math.sin(e) * c, r = Math.cos(e) * c, a.push(i, 0, r), o.push(l.r, l.g, l.b);
            }
        } const l = new Xr; l.setAttribute("position", new kr(a, 3)), l.setAttribute("color", new kr(o, 3)); super(l, new $l({ vertexColors: !0, toneMapped: !1 })), this.type = "PolarGridHelper"; }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
    }
    const xp = new un, _p = new un, yp = new un;
    class bp extends dr {
        constructor(t, e, i) { super(), this.light = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, this.type = "DirectionalLightHelper", void 0 === e && (e = 1); let n = new Xr; n.setAttribute("position", new kr([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)); const r = new $l({ fog: !1, toneMapped: !1 }); this.lightPlane = new rc(n, r), this.add(this.lightPlane), n = new Xr, n.setAttribute("position", new kr([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new rc(n, r), this.add(this.targetLine), this.update(); }
        dispose() { this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose(); }
        update() { this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), xp.setFromMatrixPosition(this.light.matrixWorld), _p.setFromMatrixPosition(this.light.target.matrixWorld), yp.subVectors(_p, xp), this.lightPlane.lookAt(_p), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(_p), this.targetLine.scale.z = yp.length(); }
    }
    const Mp = new un, wp = new ms;
    class Sp extends oc {
        constructor(t) { const e = new Xr, i = new $l({ color: 16777215, vertexColors: !0, toneMapped: !1 }), n = [], r = [], s = {}; function a(t, e) { o(t), o(e); } function o(t) { n.push(0, 0, 0), r.push(0, 0, 0), void 0 === s[t] && (s[t] = []), s[t].push(n.length / 3 - 1); } a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4"), e.setAttribute("position", new kr(n, 3)), e.setAttribute("color", new kr(r, 3)), super(e, i), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update(); const l = new Zi(16755200), c = new Zi(16711680), h = new Zi(43775), u = new Zi(16777215), d = new Zi(3355443); this.setColors(l, c, h, u, d); }
        setColors(t, e, i, n, r) { const s = this.geometry.getAttribute("color"); s.setXYZ(0, t.r, t.g, t.b), s.setXYZ(1, t.r, t.g, t.b), s.setXYZ(2, t.r, t.g, t.b), s.setXYZ(3, t.r, t.g, t.b), s.setXYZ(4, t.r, t.g, t.b), s.setXYZ(5, t.r, t.g, t.b), s.setXYZ(6, t.r, t.g, t.b), s.setXYZ(7, t.r, t.g, t.b), s.setXYZ(8, t.r, t.g, t.b), s.setXYZ(9, t.r, t.g, t.b), s.setXYZ(10, t.r, t.g, t.b), s.setXYZ(11, t.r, t.g, t.b), s.setXYZ(12, t.r, t.g, t.b), s.setXYZ(13, t.r, t.g, t.b), s.setXYZ(14, t.r, t.g, t.b), s.setXYZ(15, t.r, t.g, t.b), s.setXYZ(16, t.r, t.g, t.b), s.setXYZ(17, t.r, t.g, t.b), s.setXYZ(18, t.r, t.g, t.b), s.setXYZ(19, t.r, t.g, t.b), s.setXYZ(20, t.r, t.g, t.b), s.setXYZ(21, t.r, t.g, t.b), s.setXYZ(22, t.r, t.g, t.b), s.setXYZ(23, t.r, t.g, t.b), s.setXYZ(24, e.r, e.g, e.b), s.setXYZ(25, e.r, e.g, e.b), s.setXYZ(26, e.r, e.g, e.b), s.setXYZ(27, e.r, e.g, e.b), s.setXYZ(28, e.r, e.g, e.b), s.setXYZ(29, e.r, e.g, e.b), s.setXYZ(30, e.r, e.g, e.b), s.setXYZ(31, e.r, e.g, e.b), s.setXYZ(32, i.r, i.g, i.b), s.setXYZ(33, i.r, i.g, i.b), s.setXYZ(34, i.r, i.g, i.b), s.setXYZ(35, i.r, i.g, i.b), s.setXYZ(36, i.r, i.g, i.b), s.setXYZ(37, i.r, i.g, i.b), s.setXYZ(38, n.r, n.g, n.b), s.setXYZ(39, n.r, n.g, n.b), s.setXYZ(40, r.r, r.g, r.b), s.setXYZ(41, r.r, r.g, r.b), s.setXYZ(42, r.r, r.g, r.b), s.setXYZ(43, r.r, r.g, r.b), s.setXYZ(44, r.r, r.g, r.b), s.setXYZ(45, r.r, r.g, r.b), s.setXYZ(46, r.r, r.g, r.b), s.setXYZ(47, r.r, r.g, r.b), s.setXYZ(48, r.r, r.g, r.b), s.setXYZ(49, r.r, r.g, r.b), s.needsUpdate = !0; }
        update() { const t = this.geometry, e = this.pointMap; wp.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Tp("c", e, t, wp, 0, 0, -1), Tp("t", e, t, wp, 0, 0, 1), Tp("n1", e, t, wp, -1, -1, -1), Tp("n2", e, t, wp, 1, -1, -1), Tp("n3", e, t, wp, -1, 1, -1), Tp("n4", e, t, wp, 1, 1, -1), Tp("f1", e, t, wp, -1, -1, 1), Tp("f2", e, t, wp, 1, -1, 1), Tp("f3", e, t, wp, -1, 1, 1), Tp("f4", e, t, wp, 1, 1, 1), Tp("u1", e, t, wp, .7, 1.1, -1), Tp("u2", e, t, wp, -.7, 1.1, -1), Tp("u3", e, t, wp, 0, 2, -1), Tp("cf1", e, t, wp, -1, 0, 1), Tp("cf2", e, t, wp, 1, 0, 1), Tp("cf3", e, t, wp, 0, -1, 1), Tp("cf4", e, t, wp, 0, 1, 1), Tp("cn1", e, t, wp, -1, 0, -1), Tp("cn2", e, t, wp, 1, 0, -1), Tp("cn3", e, t, wp, 0, -1, -1), Tp("cn4", e, t, wp, 0, 1, -1), t.getAttribute("position").needsUpdate = !0; }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
    }
    function Tp(t, e, i, n, r, s, a) { Mp.set(r, s, a).unproject(n); const o = e[t]; if (void 0 !== o) {
        const t = i.getAttribute("position");
        for (let e = 0, i = o.length; e < i; e++)
            t.setXYZ(o[e], Mp.x, Mp.y, Mp.z);
    } }
    const Ep = new fn;
    class Ap extends oc {
        constructor(t, e = 16776960) { const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), n = new Float32Array(24), r = new Xr; r.setIndex(new Lr(i, 1)), r.setAttribute("position", new Lr(n, 3)), super(r, new $l({ color: e, toneMapped: !1 })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update(); }
        update(t) { if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Ep.setFromObject(this.object), Ep.isEmpty())
            return; const e = Ep.min, i = Ep.max, n = this.geometry.attributes.position, r = n.array; r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere(); }
        setFromObject(t) { return this.object = t, this.update(), this; }
        copy(t, e) { return super.copy(t, e), this.object = t.object, this; }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
    }
    class Cp extends oc {
        constructor(t, e = 16776960) { const i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), n = new Xr; n.setIndex(new Lr(i, 1)), n.setAttribute("position", new kr([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), super(n, new $l({ color: e, toneMapped: !1 })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere(); }
        updateMatrixWorld(t) { const e = this.box; e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t)); }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
    }
    class Lp extends rc {
        constructor(t, e = 1, i = 16776960) { const n = i, r = new Xr; r.setAttribute("position", new kr([1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)), r.computeBoundingSphere(), super(r, new $l({ color: n, toneMapped: !1 })), this.type = "PlaneHelper", this.plane = t, this.size = e; const s = new Xr; s.setAttribute("position", new kr([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)), s.computeBoundingSphere(), this.add(new os(s, new Er({ color: n, opacity: .2, transparent: !0, depthWrite: !1, toneMapped: !1 }))); }
        updateMatrixWorld(t) { this.position.set(0, 0, 0), this.scale.set(.5 * this.size, .5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(t); }
        dispose() { this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose(); }
    }
    const Pp = new un;
    let Rp, Dp;
    class Ip extends dr {
        constructor(t = new un(0, 0, 1), e = new un(0, 0, 0), i = 1, n = 16776960, r = .2 * i, s = .2 * r) { super(), this.type = "ArrowHelper", void 0 === Rp && (Rp = new Xr, Rp.setAttribute("position", new kr([0, 0, 0, 0, 1, 0], 3)), Dp = new qc(0, .5, 1, 5, 1), Dp.translate(0, -.5, 0)), this.position.copy(e), this.line = new rc(Rp, new $l({ color: n, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new os(Dp, new Er({ color: n, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, s); }
        setDirection(t) { if (t.y > .99999)
            this.quaternion.set(0, 0, 0, 1);
        else if (t.y < -.99999)
            this.quaternion.set(1, 0, 0, 0);
        else {
            Pp.set(t.z, 0, -t.x).normalize();
            const e = Math.acos(t.y);
            this.quaternion.setFromAxisAngle(Pp, e);
        } }
        setLength(t, e = .2 * t, i = .2 * e) { this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix(); }
        setColor(t) { this.line.material.color.set(t), this.cone.material.color.set(t); }
        copy(t) { return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this; }
        dispose() { this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose(); }
    }
    class Op extends oc {
        constructor(t = 1) { const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t], i = new Xr; i.setAttribute("position", new kr(e, 3)), i.setAttribute("color", new kr([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)); super(i, new $l({ vertexColors: !0, toneMapped: !1 })), this.type = "AxesHelper"; }
        setColors(t, e, i) { const n = new Zi, r = this.geometry.attributes.color.array; return n.set(t), n.toArray(r, 0), n.toArray(r, 3), n.set(e), n.toArray(r, 6), n.toArray(r, 9), n.set(i), n.toArray(r, 12), n.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this; }
        dispose() { this.geometry.dispose(), this.material.dispose(); }
    }
    class zp {
        constructor() { this.type = "ShapePath", this.color = new Zi, this.subPaths = [], this.currentPath = null; }
        moveTo(t, e) { return this.currentPath = new Vc, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this; }
        lineTo(t, e) { return this.currentPath.lineTo(t, e), this; }
        quadraticCurveTo(t, e, i, n) { return this.currentPath.quadraticCurveTo(t, e, i, n), this; }
        bezierCurveTo(t, e, i, n, r, s) { return this.currentPath.bezierCurveTo(t, e, i, n, r, s), this; }
        splineThru(t) { return this.currentPath.splineThru(t), this; }
        toShapes(t) { function e(t, e) { const i = e.length; let n = !1; for (let r = i - 1, s = 0; s < i; r = s++) {
            let i = e[r], a = e[s], o = a.x - i.x, l = a.y - i.y;
            if (Math.abs(l) > Number.EPSILON) {
                if (l < 0 && (i = e[s], o = -o, a = e[r], l = -l), t.y < i.y || t.y > a.y)
                    continue;
                if (t.y === i.y) {
                    if (t.x === i.x)
                        return !0;
                }
                else {
                    const e = l * (t.x - i.x) - o * (t.y - i.y);
                    if (0 === e)
                        return !0;
                    if (e < 0)
                        continue;
                    n = !n;
                }
            }
            else {
                if (t.y !== i.y)
                    continue;
                if (a.x <= t.x && t.x <= i.x || i.x <= t.x && t.x <= a.x)
                    return !0;
            }
        } return n; } const i = Ah.isClockWise, n = this.subPaths; if (0 === n.length)
            return []; let r, s, a; const o = []; if (1 === n.length)
            return s = n[0], a = new eh, a.curves = s.curves, o.push(a), o; let l = !i(n[0].getPoints()); l = t ? !l : l; const c = [], h = []; let u, d, p = [], f = 0; h[f] = void 0, p[f] = []; for (let e = 0, a = n.length; e < a; e++)
            s = n[e], u = s.getPoints(), r = i(u), r = t ? !r : r, r ? (!l && h[f] && f++, h[f] = { s: new eh, p: u }, h[f].s.curves = s.curves, l && f++, p[f] = []) : p[f].push({ h: s, p: u[0] }); if (!h[0])
            return function (t) { const e = []; for (let i = 0, n = t.length; i < n; i++) {
                const n = t[i], r = new eh;
                r.curves = n.curves, e.push(r);
            } return e; }(n); if (h.length > 1) {
            let t = !1, i = 0;
            for (let t = 0, e = h.length; t < e; t++)
                c[t] = [];
            for (let n = 0, r = h.length; n < r; n++) {
                const r = p[n];
                for (let s = 0; s < r.length; s++) {
                    const a = r[s];
                    let o = !0;
                    for (let r = 0; r < h.length; r++)
                        e(a.p, h[r].p) && (n !== r && i++, o ? (o = !1, c[r].push(a)) : t = !0);
                    o && c[n].push(a);
                }
            }
            i > 0 && !1 === t && (p = c);
        } for (let t = 0, e = h.length; t < e; t++) {
            a = h[t].s, o.push(a), d = p[t];
            for (let t = 0, e = d.length; t < e; t++)
                a.holes.push(d[t].h);
        } return o; }
    }
    const Np = Up();
    function Up() { const t = new ArrayBuffer(4), e = new Float32Array(t), i = new Uint32Array(t), n = new Uint32Array(512), r = new Uint32Array(512); for (let t = 0; t < 256; ++t) {
        const e = t - 127;
        e < -27 ? (n[t] = 0, n[256 | t] = 32768, r[t] = 24, r[256 | t] = 24) : e < -14 ? (n[t] = 1024 >> -e - 14, n[256 | t] = 1024 >> -e - 14 | 32768, r[t] = -e - 1, r[256 | t] = -e - 1) : e <= 15 ? (n[t] = e + 15 << 10, n[256 | t] = e + 15 << 10 | 32768, r[t] = 13, r[256 | t] = 13) : e < 128 ? (n[t] = 31744, n[256 | t] = 64512, r[t] = 24, r[256 | t] = 24) : (n[t] = 31744, n[256 | t] = 64512, r[t] = 13, r[256 | t] = 13);
    } const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64); for (let t = 1; t < 1024; ++t) {
        let e = t << 13, i = 0;
        for (; 0 == (8388608 & e);)
            e <<= 1, i -= 8388608;
        e &= -8388609, i += 947912704, s[t] = e | i;
    } for (let t = 1024; t < 2048; ++t)
        s[t] = 939524096 + (t - 1024 << 13); for (let t = 1; t < 31; ++t)
        a[t] = t << 23; a[31] = 1199570944, a[32] = 2147483648; for (let t = 33; t < 63; ++t)
        a[t] = 2147483648 + (t - 32 << 23); a[63] = 3347054592; for (let t = 1; t < 64; ++t)
        32 !== t && (o[t] = 1024); return { floatView: e, uint32View: i, baseTable: n, shiftTable: r, mantissaTable: s, exponentTable: a, offsetTable: o }; }
    var kp = Object.freeze({ __proto__: null, fromHalfFloat: function (t) { const e = t >> 10; return Np.uint32View[0] = Np.mantissaTable[Np.offsetTable[e] + (1023 & t)] + Np.exponentTable[e], Np.floatView[0]; }, toHalfFloat: function (t) { Math.abs(t) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t = wi(t, -65504, 65504), Np.floatView[0] = t; const e = Np.uint32View[0], i = e >> 23 & 511; return Np.baseTable[i] + ((8388607 & e) >> Np.shiftTable[i]); } });
    class Bp extends cs {
        constructor(t, e, i, n, r, s) { console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."), super(t, e, i, n, r, s); }
    }
    class Fp extends Wc {
        constructor(t, e, i, n) { console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."), super(t, e, i, n); }
    }
    class Gp extends jc {
        constructor(t, e, i, n) { console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."), super(t, e, i, n); }
    }
    class Vp extends Xc {
        constructor(t, e, i, n, r, s, a) { console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."), super(t, e, i, n, r, s, a); }
    }
    class Hp extends qc {
        constructor(t, e, i, n, r, s, a, o) { console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."), super(t, e, i, n, r, s, a, o); }
    }
    class Wp extends Zc {
        constructor(t, e) { console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."), super(t, e); }
    }
    class jp extends Ph {
        constructor(t, e) { console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."), super(t, e); }
    }
    class qp extends Dh {
        constructor(t, e) { console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."), super(t, e); }
    }
    class Xp extends Hc {
        constructor(t, e, i, n) { console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."), super(t, e, i, n); }
    }
    class Yp extends Ih {
        constructor(t, e) { console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."), super(t, e); }
    }
    class Zp extends Ps {
        constructor(t, e, i, n) { console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."), super(t, e, i, n); }
    }
    class Jp extends Yc {
        constructor(t, e, i, n) { console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."), super(t, e, i, n); }
    }
    class Kp extends Oh {
        constructor(t, e, i, n, r, s) { console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."), super(t, e, i, n, r, s); }
    }
    class $p extends zh {
        constructor(t, e) { console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."), super(t, e); }
    }
    class Qp extends Nh {
        constructor(t, e, i, n, r, s, a) { console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."), super(t, e, i, n, r, s, a); }
    }
    class tf extends Uh {
        constructor(t, e) { console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."), super(t, e); }
    }
    class ef extends kh {
        constructor(t, e, i, n, r) { console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."), super(t, e, i, n, r); }
    }
    class nf extends Bh {
        constructor(t, e, i, n, r, s) { console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."), super(t, e, i, n, r, s); }
    }
    class rf extends Fh {
        constructor(t, e, i, n, r) { console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."), super(t, e, i, n, r); }
    }
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: n } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = n);
})), r.register("b7H1R", (function (t, e) { t.exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying float wave;\n\nuniform sampler2D uTexture;\nuniform float uTime;\nuniform float uProg;\nuniform float uIndex;\nuniform vec2 uOffset;\n\nvec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {\n   float r = texture2D(textureImage,uv + offset).r;\n   vec2 gb = texture2D(textureImage,uv).gb;\n   return vec3(r,gb);\n}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec2 dUv = vec2(uv.x, uv.y);\n  vec3 textureColor;\n  \n  float w = wave;\n  float r = texture2D(uTexture, uv + uOffset).r;\n  if (uOffset.y >= -0.005 && uOffset.y <= 0.005) {\n    r = texture2D(uTexture, dUv + vec2(0.0, 0.0) + uProg * w * 0.04).r;\n  }\n  float g = texture2D(uTexture, dUv + vec2(0.0, 0.0) + uProg * w * 0.0).g;\n  float b = texture2D(uTexture, dUv + vec2(0.0, 0.0) + uProg * w * -0.02).b;\n  textureColor = vec3(r, g, b);\n  \n  gl_FragColor = vec4(textureColor, 1.0);\n}"; })), r.register("4yWMO", (function (t, e) { t.exports = "precision mediump float;\n#define GLSLIFY 1\nvarying vec2 vUv;\nvarying float wave;\nuniform float uTime;\nuniform float uProg;\nuniform float uIndex;\nuniform sampler2D uTexture;\nuniform vec2 uOffset;\n\n#define M_PI 3.1415926535897932384626433832795\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\nvec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n   position.x = position.x + (sin(uv.y * M_PI) * offset.x);\n   position.y = position.y + (sin(uv.x * M_PI) * offset.y);\n   return position;\n}\n\nvoid main() {\n  vec3 pos = position;\n  \n  pos.z += snoise(vec3(pos.x * 4. + uTime, pos.y, 0.)) * uProg;\n  wave = pos.z;\n  pos.z *= 1.5;\n\n  vUv = uv;\n\n  vec3 newPos = deformationCurve(pos, uv, uOffset);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.);\n}"; })), r.register("ca3Sc", (function (t, e) { var i = t.exports && t.exports.__createBinding || (Object.create ? function (t, e, i, n) { void 0 === n && (n = i); var r = Object.getOwnPropertyDescriptor(e, i); r && !("get" in r ? !e.__esModule : r.writable || r.configurable) || (r = { enumerable: !0, get: function () { return e[i]; } }), Object.defineProperty(t, n, r); } : function (t, e, i, n) { void 0 === n && (n = i), t[n] = e[i]; }), n = t.exports && t.exports.__setModuleDefault || (Object.create ? function (t, e) { Object.defineProperty(t, "default", { enumerable: !0, value: e }); } : function (t, e) { t.default = e; }), s = t.exports && t.exports.__importStar || function (t) { if (t && t.__esModule)
    return t; var e = {}; if (null != t)
    for (var r in t)
        "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && i(e, t, r); return n(e, t), e; }, a = t.exports && t.exports.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; }; Object.defineProperty(t.exports, "__esModule", { value: !0 }); const o = a(r("4AGbv")), l = s(r("ilwiq")); var c = r("eNign"); t.exports.default = new class {
    constructor() { this.run = ({ current: t }) => { let e = this.clock.getElapsedTime(); for (let i = 0; i < this.scene.children.length; i++) {
        const n = this.scene.children[i];
        n.updatePosition(t), n.updateTime(e);
    } requestAnimationFrame((() => this.render())); }, this.resize = () => { this.renderer.setSize(window.innerWidth, window.innerHeight), this.camera.updateProjectionMatrix(); for (let t = 0; t < this.scene.children.length; t++) {
        this.scene.children[t].resize();
    } }, this.scene = new l.Scene, this.camera = new l.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 100), this.container = document.querySelector("[data-scroll-content]"), this.scrollable = document.querySelector("[data-scroll]"), this.camera.position.z = 50, document.body.style.height = `${this.scrollable.getBoundingClientRect().height}px`, this.renderer = new l.WebGLRenderer({ alpha: !0 }), this.renderer.setPixelRatio(o.default.utils.clamp(1.5, 1, window.devicePixelRatio)), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setClearColor(15921906, 0), this.clock = new l.Clock, this.init(); }
    init() { this.addToDom(), this.addEvents(); }
    render() { this.renderer.render(this.scene, this.camera); }
    addEvents() { c.Events.on("tick", this.run), c.Events.on("resize", this.resize); }
    addToDom() { const t = this.renderer.domElement; t.classList.add("dom-gl"), document.body.appendChild(t); }
}; }));
var s = {}, a = s && s.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; };
Object.defineProperty(s, "__esModule", { value: !0 });
const o = a(r("8VC01"));
var l = {}, c = l && l.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; };
Object.defineProperty(l, "__esModule", { value: !0 }), l.Home = void 0;
const h = c(r("8Yt84"));
var u = r("4AGbv");
(0, h.default)({});
l.Home = class {
    constructor(t) { this.text = t, this.home = document.querySelector(".home"), this.chars = [...t.querySelectorAll(".char-inner")], this.charsSub = [...t.querySelectorAll(".char-inner-sub")], this.smallText = document.querySelector(".home-bottom-left"), this.navLinks = document.querySelector(".home-nav"), this.init(); }
    init() { this.play(); }
    play() { this.tl = u.gsap.timeline().addLabel("load", 0).from(this.text, { opacity: 0, visibility: "hidden" }, "load").set(this.text, { x: "0%", ease: "quad.in", opacity: 0, visibility: "hidden" }, "load+=0.2").set(this.smallText, { opacity: 0, visibility: "hidden", y: -70 }, "load+=0.45").set(this.navLinks, { opacity: 0, visibility: "hidden" }, "load+=0.75").to(this.chars, { duration: 1, ease: "expo", startAt: { x: "106%" }, x: "0%", opacity: 1, visibility: "visible" }, "load+=0.2").to(this.charsSub, { duration: 1.15, ease: "power3", startAt: { x: "103%" }, x: "0%", opacity: 1, visibility: "visible" }, "load+=0.33").to(this.smallText, { duration: 1.6, opacity: 1, y: 0, ease: "expo", visibility: "visible" }, "load+=0.45").to(this.navLinks, { duration: 1.6, opacity: 1, ease: "expo", visibility: "visible" }, "load+=0.75"); }
};
var d = {};
Object.defineProperty(d, "__esModule", { value: !0 }), d.Marquee = void 0;
u = r("4AGbv");
d.Marquee = class {
    constructor() { this.handleIntersection = (t, e) => { console.log(t), t.forEach((t => { t.isIntersecting && (requestAnimationFrame((() => this.play())), e.unobserve(t.target)); })); }, this.resizeHandler = () => { this.tl.pause(); const t = this.marqueeItems[0].offsetWidth, e = this.marquee.offsetWidth; let i = (u.gsap.utils.toArray(this.marqueeItems).length - 1) * t; this.tl = u.gsap.timeline({ repeat: -1, defaults: { ease: "none" } }), this.tl.to(this.marquee, { startAt: { opacity: 0, yPercent: -80 }, duration: .6, opacity: 1, yPercent: 0 }), this.tl.to(this.marquee, { x: "+=" + (+i - e), duration: 2.4, repeat: -1, modifiers: { x: u.gsap.utils.unitize(u.gsap.utils.wrap(-e, i)) } }, "<"), this.tl.resume(); }, this.skills = document.querySelector(".section-skills"), this.marquee = document.querySelector(".skills-marquee"), this.marqueeItems = [...this.marquee.querySelectorAll("div")], this.observer = new IntersectionObserver(this.handleIntersection, { threshold: .5 }), this.observer.observe(this.skills), window.addEventListener("resize", this.resizeHandler); }
    play() { const t = this.marqueeItems[0].offsetWidth, e = this.marquee.offsetWidth; let i = (u.gsap.utils.toArray(this.marqueeItems).length - 1) * t; this.tl = u.gsap.timeline({ defaults: { ease: "none" } }), this.tl.to(this.marquee, { startAt: { opacity: 0, yPercent: -80 }, duration: .6, opacity: 1, yPercent: 0 }), this.tl.to(this.marquee, { x: "+=" + (+i - e), duration: 2.4, repeat: -1, modifiers: { x: u.gsap.utils.unitize(u.gsap.utils.wrap(-e, i)) } }, "<"); }
    destroy() { this.observer.unobserve(this.skills), window.removeEventListener("resize", this.resizeHandler); }
};
const p = a(r("ixATP"));
var f = {}, m = f && f.__createBinding || (Object.create ? function (t, e, i, n) { void 0 === n && (n = i); var r = Object.getOwnPropertyDescriptor(e, i); r && !("get" in r ? !e.__esModule : r.writable || r.configurable) || (r = { enumerable: !0, get: function () { return e[i]; } }), Object.defineProperty(t, n, r); } : function (t, e, i, n) { void 0 === n && (n = i), t[n] = e[i]; }), g = f && f.__setModuleDefault || (Object.create ? function (t, e) { Object.defineProperty(t, "default", { enumerable: !0, value: e }); } : function (t, e) { t.default = e; }), v = f && f.__importStar || function (t) { if (t && t.__esModule)
    return t; var e = {}; if (null != t)
    for (var i in t)
        "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && m(e, t, i); return g(e, t), e; }, x = f && f.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; };
Object.defineProperty(f, "__esModule", { value: !0 }), f.ScrollCanvas = void 0;
const _ = v(r("ilwiq")), y = x(r("b7H1R")), b = x(r("4yWMO"));
var M = {}, w = M && M.__createBinding || (Object.create ? function (t, e, i, n) { void 0 === n && (n = i); var r = Object.getOwnPropertyDescriptor(e, i); r && !("get" in r ? !e.__esModule : r.writable || r.configurable) || (r = { enumerable: !0, get: function () { return e[i]; } }), Object.defineProperty(t, n, r); } : function (t, e, i, n) { void 0 === n && (n = i), t[n] = e[i]; }), S = M && M.__setModuleDefault || (Object.create ? function (t, e) { Object.defineProperty(t, "default", { enumerable: !0, value: e }); } : function (t, e) { t.default = e; }), T = M && M.__importStar || function (t) { if (t && t.__esModule)
    return t; var e = {}; if (null != t)
    for (var i in t)
        "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && w(e, t, i); return S(e, t), e; }, E = M && M.__importDefault || function (t) { return t && t.__esModule ? t : { default: t }; };
Object.defineProperty(M, "__esModule", { value: !0 }), M.GlObject = void 0;
const A = E(r("4AGbv")), C = T(r("ilwiq")), L = E(r("ca3Sc"));
class P extends C.Object3D {
    constructor(t) { super(), this.el = t, this.resize(); }
    setBounds() { this.rect = this.el.getBoundingClientRect(), this.bounds = { left: this.rect.left, top: this.rect.top + window.scrollY, width: this.rect.width, height: this.rect.height }, this.updateSize(), this.updatePosition(); }
    resize() { this.visible && this.setBounds(); }
    calculateUnitSize(t = this.position.z) { const e = L.default.camera.fov * Math.PI / 180, i = 2 * Math.tan(e / 2) * t; return { width: i * L.default.camera.aspect, height: i }; }
    updateSize(t = this.bounds.width / window.innerWidth, e = this.bounds.height / window.innerHeight) { this.camUnit = this.calculateUnitSize(L.default.camera.position.z - this.position.z), t && e && (this.scale.x = this.camUnit.width * t, this.scale.y = this.camUnit.height * e); }
    updateY(t = 0) { const { top: e, height: i } = this.bounds; this.position.y = this.camUnit.height / 2 - this.scale.y / 2, this.position.y -= (e - t) / window.innerHeight * this.camUnit.height, this.progress = A.default.utils.clamp(0, 1, 1 - (-t + e + i) / (window.innerHeight + i)); }
    updateX(t = 0) { const { left: e } = this.bounds; this.position.x = -this.camUnit.width / 2 + this.scale.x / 2, this.position.x += (e + t) / window.innerWidth * this.camUnit.width; }
    updatePosition(t = 0) { this.updateY(t), this.updateX(0); }
}
M.GlObject = P;
const R = x(r("ca3Sc")), D = x(r("4AGbv"));
var I = r("eNign");
const O = new _.PlaneGeometry(1, 1, 100, 100), z = new _.ShaderMaterial({ vertexShader: b.default, fragmentShader: y.default, transparent: !0, side: _.DoubleSide });
class N extends M.GlObject {
    constructor(t) { var e, i; super(t), this.geometry = O, this.material = z.clone(), this.img = null === (e = this.el) || void 0 === e ? void 0 : e.querySelector("[data-src]"), this.scrollable = document.querySelector("[data-scroll-content]"); const n = null === (i = this.img) || void 0 === i ? void 0 : i.getAttribute("data-src"); this.offset = new _.Vector2(0, 0), this.sizes = new _.Vector2(0, 0), this.texture = (new _.TextureLoader).load(n, (t => { t.minFilter = _.LinearFilter, t.generateMipmaps = !1, this.material.uniforms.uTexture.value = t; })), this.material.uniforms = { uTexture: { value: this.texture }, uOffset: { value: new _.Vector2(0, 0) }, uAlpha: { value: 1 }, uTime: { value: 0 }, uProg: { value: 0 } }, this.mesh = new _.Mesh(this.geometry, this.material), this.getDimensions(), this.add(this.mesh), R.default.scene.add(this), this.initEvents(), I.Events.on("scroll", this.render.bind(this)); }
    updateTime(t) { this.material.uniforms.uTime.value = t; }
    getDimensions() { var t, e; const { width: i, height: n, top: r, left: s } = null === (t = this.scrollable) || void 0 === t ? void 0 : t.getBoundingClientRect(); null === (e = this.sizes) || void 0 === e || e.set(i, n), this.offset.set(s - window.innerWidth / 2 + i / 2, -r + window.innerHeight / 2 - n / 2); }
    render() { this.getDimensions(), I.Events.on("tick", (t => { var e; const i = t.target, n = t.current; null === (e = this.material) || void 0 === e || e.uniforms.uOffset.value.set(0 * this.offset.x, 3e-4 * -(i - n)); })); }
    initEvents() { this.mouseEnter(), this.mouseLeave(); }
    mouseEnter() { var t; null === (t = this.el) || void 0 === t || t.addEventListener("mouseenter", (() => { var t; D.default.to(null === (t = this.material) || void 0 === t ? void 0 : t.uniforms.uProg, { value: 1, ease: "power.inOut" }); })); }
    mouseLeave() { var t; null === (t = this.el) || void 0 === t || t.addEventListener("mouseleave", (() => { var t; D.default.to(null === (t = this.material) || void 0 === t ? void 0 : t.uniforms.uProg, { value: 0, ease: "power.inOut" }); })); }
}
f.ScrollCanvas = N;
var U = {};
Object.defineProperty(U, "__esModule", { value: !0 }), U.Magnetic = void 0;
u = r("4AGbv");
let k = (0, (G = r("a3Sd4")).calcWinsize)();
window.addEventListener("resize", (() => k = (0, G.calcWinsize)()));
let B = { x: 0, y: 0 };
window.addEventListener("mousemove", (t => B = (0, G.getMousePos)(t)));
U.Magnetic = class {
    constructor(t) { this.el = t, this.sticky = this.el.querySelector(".footer-btn-sticky-area"), this.renderedStyles = { tx: { previous: 0, current: 0, amt: .1 }, ty: { previous: 0, current: 0, amt: .1 } }, this.calculateSizePosition(), this.initEvents(); }
    calculateSizePosition() { this.scrollVal = { x: window.scrollX, y: window.scrollY }, this.rect = this.el.getBoundingClientRect(); }
    initEvents() { window.addEventListener("resize", (() => this.calculateSizePosition())), this.el.addEventListener("mouseenter", (() => { this.loopRender(); })), this.el.addEventListener("mouseleave", (() => { this.stopRender(), this.renderedStyles.tx.previous = this.renderedStyles.ty.previous = 0; })); }
    loopRender() { this.reqId || (this.reqId = requestAnimationFrame((() => this.render()))); }
    stopRender() { this.reqId && (window.cancelAnimationFrame(this.reqId), this.reqId = void 0), u.gsap.to(this.el, { duration: .8, ease: "power3", x: 0, y: 0 }); }
    render() { this.reqId = void 0; const t = this.scrollVal.x - window.scrollX, e = this.scrollVal.y - window.scrollY; this.renderedStyles.tx.current = .3 * (B.x - (t + this.rect.left + this.rect.width / 2)), this.renderedStyles.ty.current = .3 * (B.y - (e + this.rect.top + this.rect.height / 2)); for (const t in this.renderedStyles)
        this.renderedStyles[t].previous = (0, G.lerp)(this.renderedStyles[t].previous, this.renderedStyles[t].current, this.renderedStyles[t].amt); u.gsap.set(this.el, { x: this.renderedStyles.tx.previous, y: this.renderedStyles.ty.previous }), this.loopRender(); }
};
var F = {};
Object.defineProperty(F, "__esModule", { value: !0 }), F.Liquid = void 0;
u = r("4AGbv");
var G = r("a3Sd4");
F.Liquid = class {
    constructor() { this.DOM = { mask: void 0, circle: void 0, circleSmall: void 0, heading: void 0, footer: void 0, words: void 0 }, this.DOM.circle = document.querySelector(".footer-btn"), this.DOM.circleSmall = document.querySelector(".footer-btn-small"), this.DOM.mask = document.querySelector("#request-btn"), this.DOM.footer = document.querySelector(".footer"), this.DOM.heading = document.querySelector(".before-footer-h2"), this.DOM.words = [...document.querySelectorAll(".word")], requestAnimationFrame((() => this.initEvents())); }
    initEvents() { window.addEventListener("mousemove", (t => (0, G.getMousePos)(t))), this.DOM.circle.addEventListener("mouseenter", (() => this.mouseEnter())), this.DOM.circle.addEventListener("mouseleave", (() => this.mouseLeave())), this.DOM.circle.addEventListener("click", (() => { this.open(); })), this.DOM.circleSmall.addEventListener("click", (() => { window.location.assign("/contact"); })); }
    mouseEnter() { u.gsap.to(this.DOM.mask, { startAt: { opacity: 1, x: 75, y: 250 }, opacity: 1, ease: "sine.inout", duration: .6, y: 165, rotation: -55 }); }
    mouseLeave() { u.gsap.killTweensOf(this.DOM.mask), u.gsap.to(this.DOM.mask, { startAt: { opacity: 1, y: 165 }, ease: "sine.out", duration: .3, y: 180, rotation: 30 }); }
    open() { u.gsap.to(this.DOM.heading, { startAt: { opacity: 1, y: 0 }, y: -70, opacity: 0, duration: .6, ease: "expo" }), u.gsap.to(this.DOM.footer, { opacity: 0, duration: .6, ease: "power2.out", onComplete: () => { window.location.assign("/contact"); } }); }
};
G = r("a3Sd4");
const V = document.querySelector(".loading-page"), H = document.querySelector(".home-container");
let W = !1;
document.body.style.overflow = "hidden", window.addEventListener("beforeunload", (() => { sessionStorage.removeItem("isPageLoaded"); })), window.addEventListener("popstate", (() => { W = !0; }));
function j(t) { const e = t.currentTarget, i = document.querySelector(e.getAttribute("href")); i && (t.preventDefault(), window.scrollTo({ top: i.offsetTop, behavior: "smooth" })); }
function q() { new Promise((t => { var e = 0, i = 0, n = document.querySelector(".loading-page .counter h1"), r = setInterval((function () { n.textContent = i + "%", e++, i++, 102 === e && (clearInterval(r), t()); }), 20); })).then((() => { H.classList.remove("loading"), V.style.display = "none", document.body.style.overflow = "auto", document.querySelectorAll(".word").forEach((t => new l.Home(t))), document.querySelectorAll(".js-plane").forEach((t => new f.ScrollCanvas(t))), (() => { let t = document.querySelector(".footer-btn"); new U.Magnetic(t); })(), new F.Liquid, new p.default, new d.Marquee, new o.default, sessionStorage.setItem("isPageLoaded", "true"); })); }
document.querySelectorAll('a[href^="#"]').forEach((t => { t.addEventListener("click", j); })), Promise.all([(0, G.preloadImages)(".gl-img")]).then((() => { null === sessionStorage.getItem("isPageLoaded") ? q() : W ? (H.classList.remove("loading"), V.style.display = "none", document.body.style.overflow = "auto", W = !1) : q(); }));
//# sourceMappingURL=index.70cba901.js.map
//# sourceMappingURL=index.70cba901.js.map