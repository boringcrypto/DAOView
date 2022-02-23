var bb = Object.defineProperty,
    yb = Object.defineProperties
var _b = Object.getOwnPropertyDescriptors
var id = Object.getOwnPropertySymbols
var wb = Object.prototype.hasOwnProperty,
    Eb = Object.prototype.propertyIsEnumerable
var sd = (e, t, r) => (t in e ? bb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    De = (e, t) => {
        for (var r in t || (t = {})) wb.call(t, r) && sd(e, r, t[r])
        if (id) for (var r of id(t)) Eb.call(t, r) && sd(e, r, t[r])
        return e
    },
    ga = (e, t) => yb(e, _b(t))
function Kf(e, t) {
    const r = Object.create(null),
        n = e.split(",")
    for (let i = 0; i < n.length; i++) r[n[i]] = !0
    return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i]
}
const Ab = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Sb = Kf(Ab)
function op(e) {
    return !!e || e === ""
}
function Ln(e) {
    if (Oe(e)) {
        const t = {}
        for (let r = 0; r < e.length; r++) {
            const n = e[r],
                i = Pt(n) ? Cb(n) : Ln(n)
            if (i) for (const s in i) t[s] = i[s]
        }
        return t
    } else {
        if (Pt(e)) return e
        if (Dt(e)) return e
    }
}
const Tb = /;(?![^(]*\))/g,
    xb = /:(.+)/
function Cb(e) {
    const t = {}
    return (
        e.split(Tb).forEach((r) => {
            if (r) {
                const n = r.split(xb)
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }),
        t
    )
}
function ve(e) {
    let t = ""
    if (Pt(e)) t = e
    else if (Oe(e))
        for (let r = 0; r < e.length; r++) {
            const n = ve(e[r])
            n && (t += n + " ")
        }
    else if (Dt(e)) for (const r in e) e[r] && (t += r + " ")
    return t.trim()
}
function $b(e) {
    if (!e) return null
    let { class: t, style: r } = e
    return t && !Pt(t) && (e.class = ve(t)), r && (e.style = Ln(r)), e
}
const tt = (e) =>
        Pt(e) ? e : e == null ? "" : Oe(e) || (Dt(e) && (e.toString === up || !Re(e.toString))) ? JSON.stringify(e, ap, 2) : String(e),
    ap = (e, t) =>
        t && t.__v_isRef
            ? ap(e, t.value)
            : Cs(t)
            ? { [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, i]) => ((r[`${n} =>`] = i), r), {}) }
            : lp(t)
            ? { [`Set(${t.size})`]: [...t.values()] }
            : Dt(t) && !Oe(t) && !fp(t)
            ? String(t)
            : t,
    st = {},
    xs = [],
    zr = () => {},
    Nb = () => !1,
    Bb = /^on[^a-z]/,
    ml = (e) => Bb.test(e),
    Gf = (e) => e.startsWith("onUpdate:"),
    Xt = Object.assign,
    Yf = (e, t) => {
        const r = e.indexOf(t)
        r > -1 && e.splice(r, 1)
    },
    kb = Object.prototype.hasOwnProperty,
    Ye = (e, t) => kb.call(e, t),
    Oe = Array.isArray,
    Cs = (e) => vl(e) === "[object Map]",
    lp = (e) => vl(e) === "[object Set]",
    Re = (e) => typeof e == "function",
    Pt = (e) => typeof e == "string",
    Jf = (e) => typeof e == "symbol",
    Dt = (e) => e !== null && typeof e == "object",
    Xf = (e) => Dt(e) && Re(e.then) && Re(e.catch),
    up = Object.prototype.toString,
    vl = (e) => up.call(e),
    Ob = (e) => vl(e).slice(8, -1),
    fp = (e) => vl(e) === "[object Object]",
    Zf = (e) => Pt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Pa = Kf(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    ),
    bl = (e) => {
        const t = Object.create(null)
        return (r) => t[r] || (t[r] = e(r))
    },
    Ib = /-(\w)/g,
    bn = bl((e) => e.replace(Ib, (t, r) => (r ? r.toUpperCase() : ""))),
    Pb = /\B([A-Z])/g,
    Ks = bl((e) => e.replace(Pb, "-$1").toLowerCase()),
    yl = bl((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    ou = bl((e) => (e ? `on${yl(e)}` : "")),
    Do = (e, t) => !Object.is(e, t),
    au = (e, t) => {
        for (let r = 0; r < e.length; r++) e[r](t)
    },
    Ka = (e, t, r) => {
        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r })
    },
    Qf = (e) => {
        const t = parseFloat(e)
        return isNaN(t) ? e : t
    }
let od
const Mb = () =>
    od ||
    (od =
        typeof globalThis != "undefined"
            ? globalThis
            : typeof self != "undefined"
            ? self
            : typeof window != "undefined"
            ? window
            : typeof global != "undefined"
            ? global
            : {})
let Cn
class Rb {
    constructor(t = !1) {
        ;(this.active = !0),
            (this.effects = []),
            (this.cleanups = []),
            !t && Cn && ((this.parent = Cn), (this.index = (Cn.scopes || (Cn.scopes = [])).push(this) - 1))
    }
    run(t) {
        if (this.active)
            try {
                return (Cn = this), t()
            } finally {
                Cn = this.parent
            }
    }
    on() {
        Cn = this
    }
    off() {
        Cn = this.parent
    }
    stop(t) {
        if (this.active) {
            let r, n
            for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop()
            for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]()
            if (this.scopes) for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0)
            if (this.parent && !t) {
                const i = this.parent.scopes.pop()
                i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index))
            }
            this.active = !1
        }
    }
}
function Lb(e, t = Cn) {
    t && t.active && t.effects.push(e)
}
const ec = (e) => {
        const t = new Set(e)
        return (t.w = 0), (t.n = 0), t
    },
    cp = (e) => (e.w & vi) > 0,
    dp = (e) => (e.n & vi) > 0,
    Db = ({ deps: e }) => {
        if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= vi
    },
    Fb = (e) => {
        const { deps: t } = e
        if (t.length) {
            let r = 0
            for (let n = 0; n < t.length; n++) {
                const i = t[n]
                cp(i) && !dp(i) ? i.delete(e) : (t[r++] = i), (i.w &= ~vi), (i.n &= ~vi)
            }
            t.length = r
        }
    },
    Gu = new WeakMap()
let Eo = 0,
    vi = 1
const Yu = 30
let ln
const Yi = Symbol(""),
    Ju = Symbol("")
class tc {
    constructor(t, r = null, n) {
        ;(this.fn = t), (this.scheduler = r), (this.active = !0), (this.deps = []), (this.parent = void 0), Lb(this, n)
    }
    run() {
        if (!this.active) return this.fn()
        let t = ln,
            r = di
        for (; t; ) {
            if (t === this) return
            t = t.parent
        }
        try {
            return (this.parent = ln), (ln = this), (di = !0), (vi = 1 << ++Eo), Eo <= Yu ? Db(this) : ad(this), this.fn()
        } finally {
            Eo <= Yu && Fb(this), (vi = 1 << --Eo), (ln = this.parent), (di = r), (this.parent = void 0)
        }
    }
    stop() {
        this.active && (ad(this), this.onStop && this.onStop(), (this.active = !1))
    }
}
function ad(e) {
    const { deps: t } = e
    if (t.length) {
        for (let r = 0; r < t.length; r++) t[r].delete(e)
        t.length = 0
    }
}
let di = !0
const hp = []
function Gs() {
    hp.push(di), (di = !1)
}
function Ys() {
    const e = hp.pop()
    di = e === void 0 ? !0 : e
}
function Ar(e, t, r) {
    if (di && ln) {
        let n = Gu.get(e)
        n || Gu.set(e, (n = new Map()))
        let i = n.get(r)
        i || n.set(r, (i = ec())), pp(i)
    }
}
function pp(e, t) {
    let r = !1
    Eo <= Yu ? dp(e) || ((e.n |= vi), (r = !cp(e))) : (r = !e.has(ln)), r && (e.add(ln), ln.deps.push(e))
}
function Dn(e, t, r, n, i, s) {
    const o = Gu.get(e)
    if (!o) return
    let a = []
    if (t === "clear") a = [...o.values()]
    else if (r === "length" && Oe(e))
        o.forEach((l, u) => {
            ;(u === "length" || u >= n) && a.push(l)
        })
    else
        switch ((r !== void 0 && a.push(o.get(r)), t)) {
            case "add":
                Oe(e) ? Zf(r) && a.push(o.get("length")) : (a.push(o.get(Yi)), Cs(e) && a.push(o.get(Ju)))
                break
            case "delete":
                Oe(e) || (a.push(o.get(Yi)), Cs(e) && a.push(o.get(Ju)))
                break
            case "set":
                Cs(e) && a.push(o.get(Yi))
                break
        }
    if (a.length === 1) a[0] && Xu(a[0])
    else {
        const l = []
        for (const u of a) u && l.push(...u)
        Xu(ec(l))
    }
}
function Xu(e, t) {
    for (const r of Oe(e) ? e : [...e]) (r !== ln || r.allowRecurse) && (r.scheduler ? r.scheduler() : r.run())
}
const Vb = Kf("__proto__,__v_isRef,__isVue"),
    gp = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((e) => Symbol[e])
            .filter(Jf)
    ),
    qb = rc(),
    Hb = rc(!1, !0),
    Ub = rc(!0),
    ld = zb()
function zb() {
    const e = {}
    return (
        ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
            e[t] = function (...r) {
                const n = et(this)
                for (let s = 0, o = this.length; s < o; s++) Ar(n, "get", s + "")
                const i = n[t](...r)
                return i === -1 || i === !1 ? n[t](...r.map(et)) : i
            }
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
            e[t] = function (...r) {
                Gs()
                const n = et(this)[t].apply(this, r)
                return Ys(), n
            }
        }),
        e
    )
}
function rc(e = !1, t = !1) {
    return function (n, i, s) {
        if (i === "__v_isReactive") return !e
        if (i === "__v_isReadonly") return e
        if (i === "__v_isShallow") return t
        if (i === "__v_raw" && s === (e ? (t ? oy : _p) : t ? yp : bp).get(n)) return n
        const o = Oe(n)
        if (!e && o && Ye(ld, i)) return Reflect.get(ld, i, s)
        const a = Reflect.get(n, i, s)
        return (Jf(i) ? gp.has(i) : Vb(i)) || (e || Ar(n, "get", i), t)
            ? a
            : Gt(a)
            ? !o || !Zf(i)
                ? a.value
                : a
            : Dt(a)
            ? e
                ? wp(a)
                : yn(a)
            : a
    }
}
const jb = mp(),
    Wb = mp(!0)
function mp(e = !1) {
    return function (r, n, i, s) {
        let o = r[n]
        if (Fo(o) && Gt(o) && !Gt(i)) return !1
        if (!e && !Fo(i) && (Ep(i) || ((i = et(i)), (o = et(o))), !Oe(r) && Gt(o) && !Gt(i))) return (o.value = i), !0
        const a = Oe(r) && Zf(n) ? Number(n) < r.length : Ye(r, n),
            l = Reflect.set(r, n, i, s)
        return r === et(s) && (a ? Do(i, o) && Dn(r, "set", n, i) : Dn(r, "add", n, i)), l
    }
}
function Kb(e, t) {
    const r = Ye(e, t)
    e[t]
    const n = Reflect.deleteProperty(e, t)
    return n && r && Dn(e, "delete", t, void 0), n
}
function Gb(e, t) {
    const r = Reflect.has(e, t)
    return (!Jf(t) || !gp.has(t)) && Ar(e, "has", t), r
}
function Yb(e) {
    return Ar(e, "iterate", Oe(e) ? "length" : Yi), Reflect.ownKeys(e)
}
const vp = { get: qb, set: jb, deleteProperty: Kb, has: Gb, ownKeys: Yb },
    Jb = {
        get: Ub,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        },
    },
    Xb = Xt({}, vp, { get: Hb, set: Wb }),
    nc = (e) => e,
    _l = (e) => Reflect.getPrototypeOf(e)
function ma(e, t, r = !1, n = !1) {
    e = e.__v_raw
    const i = et(e),
        s = et(t)
    t !== s && !r && Ar(i, "get", t), !r && Ar(i, "get", s)
    const { has: o } = _l(i),
        a = n ? nc : r ? oc : Vo
    if (o.call(i, t)) return a(e.get(t))
    if (o.call(i, s)) return a(e.get(s))
    e !== i && e.get(t)
}
function va(e, t = !1) {
    const r = this.__v_raw,
        n = et(r),
        i = et(e)
    return e !== i && !t && Ar(n, "has", e), !t && Ar(n, "has", i), e === i ? r.has(e) : r.has(e) || r.has(i)
}
function ba(e, t = !1) {
    return (e = e.__v_raw), !t && Ar(et(e), "iterate", Yi), Reflect.get(e, "size", e)
}
function ud(e) {
    e = et(e)
    const t = et(this)
    return _l(t).has.call(t, e) || (t.add(e), Dn(t, "add", e, e)), this
}
function fd(e, t) {
    t = et(t)
    const r = et(this),
        { has: n, get: i } = _l(r)
    let s = n.call(r, e)
    s || ((e = et(e)), (s = n.call(r, e)))
    const o = i.call(r, e)
    return r.set(e, t), s ? Do(t, o) && Dn(r, "set", e, t) : Dn(r, "add", e, t), this
}
function cd(e) {
    const t = et(this),
        { has: r, get: n } = _l(t)
    let i = r.call(t, e)
    i || ((e = et(e)), (i = r.call(t, e))), n && n.call(t, e)
    const s = t.delete(e)
    return i && Dn(t, "delete", e, void 0), s
}
function dd() {
    const e = et(this),
        t = e.size !== 0,
        r = e.clear()
    return t && Dn(e, "clear", void 0, void 0), r
}
function ya(e, t) {
    return function (n, i) {
        const s = this,
            o = s.__v_raw,
            a = et(o),
            l = t ? nc : e ? oc : Vo
        return !e && Ar(a, "iterate", Yi), o.forEach((u, c) => n.call(i, l(u), l(c), s))
    }
}
function _a(e, t, r) {
    return function (...n) {
        const i = this.__v_raw,
            s = et(i),
            o = Cs(s),
            a = e === "entries" || (e === Symbol.iterator && o),
            l = e === "keys" && o,
            u = i[e](...n),
            c = r ? nc : t ? oc : Vo
        return (
            !t && Ar(s, "iterate", l ? Ju : Yi),
            {
                next() {
                    const { value: d, done: h } = u.next()
                    return h ? { value: d, done: h } : { value: a ? [c(d[0]), c(d[1])] : c(d), done: h }
                },
                [Symbol.iterator]() {
                    return this
                },
            }
        )
    }
}
function ei(e) {
    return function (...t) {
        return e === "delete" ? !1 : this
    }
}
function Zb() {
    const e = {
            get(s) {
                return ma(this, s)
            },
            get size() {
                return ba(this)
            },
            has: va,
            add: ud,
            set: fd,
            delete: cd,
            clear: dd,
            forEach: ya(!1, !1),
        },
        t = {
            get(s) {
                return ma(this, s, !1, !0)
            },
            get size() {
                return ba(this)
            },
            has: va,
            add: ud,
            set: fd,
            delete: cd,
            clear: dd,
            forEach: ya(!1, !0),
        },
        r = {
            get(s) {
                return ma(this, s, !0)
            },
            get size() {
                return ba(this, !0)
            },
            has(s) {
                return va.call(this, s, !0)
            },
            add: ei("add"),
            set: ei("set"),
            delete: ei("delete"),
            clear: ei("clear"),
            forEach: ya(!0, !1),
        },
        n = {
            get(s) {
                return ma(this, s, !0, !0)
            },
            get size() {
                return ba(this, !0)
            },
            has(s) {
                return va.call(this, s, !0)
            },
            add: ei("add"),
            set: ei("set"),
            delete: ei("delete"),
            clear: ei("clear"),
            forEach: ya(!0, !0),
        }
    return (
        ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
            ;(e[s] = _a(s, !1, !1)), (r[s] = _a(s, !0, !1)), (t[s] = _a(s, !1, !0)), (n[s] = _a(s, !0, !0))
        }),
        [e, r, t, n]
    )
}
const [Qb, ey, ty, ry] = Zb()
function ic(e, t) {
    const r = t ? (e ? ry : ty) : e ? ey : Qb
    return (n, i, s) =>
        i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(Ye(r, i) && i in n ? r : n, i, s)
}
const ny = { get: ic(!1, !1) },
    iy = { get: ic(!1, !0) },
    sy = { get: ic(!0, !1) },
    bp = new WeakMap(),
    yp = new WeakMap(),
    _p = new WeakMap(),
    oy = new WeakMap()
function ay(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2
        default:
            return 0
    }
}
function ly(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ay(Ob(e))
}
function yn(e) {
    return Fo(e) ? e : sc(e, !1, vp, ny, bp)
}
function uy(e) {
    return sc(e, !1, Xb, iy, yp)
}
function wp(e) {
    return sc(e, !0, Jb, sy, _p)
}
function sc(e, t, r, n, i) {
    if (!Dt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
    const s = i.get(e)
    if (s) return s
    const o = ly(e)
    if (o === 0) return e
    const a = new Proxy(e, o === 2 ? n : r)
    return i.set(e, a), a
}
function Ji(e) {
    return Fo(e) ? Ji(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Fo(e) {
    return !!(e && e.__v_isReadonly)
}
function Ep(e) {
    return !!(e && e.__v_isShallow)
}
function Ap(e) {
    return Ji(e) || Fo(e)
}
function et(e) {
    const t = e && e.__v_raw
    return t ? et(t) : e
}
function Sp(e) {
    return Ka(e, "__v_skip", !0), e
}
const Vo = (e) => (Dt(e) ? yn(e) : e),
    oc = (e) => (Dt(e) ? wp(e) : e)
function Tp(e) {
    di && ln && ((e = et(e)), pp(e.dep || (e.dep = ec())))
}
function xp(e, t) {
    ;(e = et(e)), e.dep && Xu(e.dep)
}
function Gt(e) {
    return !!(e && e.__v_isRef === !0)
}
function Ve(e) {
    return Cp(e, !1)
}
function fy(e) {
    return Cp(e, !0)
}
function Cp(e, t) {
    return Gt(e) ? e : new cy(e, t)
}
class cy {
    constructor(t, r) {
        ;(this.__v_isShallow = r), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = r ? t : et(t)), (this._value = r ? t : Vo(t))
    }
    get value() {
        return Tp(this), this._value
    }
    set value(t) {
        ;(t = this.__v_isShallow ? t : et(t)),
            Do(t, this._rawValue) && ((this._rawValue = t), (this._value = this.__v_isShallow ? t : Vo(t)), xp(this))
    }
}
function Co(e) {
    return Gt(e) ? e.value : e
}
const dy = {
    get: (e, t, r) => Co(Reflect.get(e, t, r)),
    set: (e, t, r, n) => {
        const i = e[t]
        return Gt(i) && !Gt(r) ? ((i.value = r), !0) : Reflect.set(e, t, r, n)
    },
}
function $p(e) {
    return Ji(e) ? e : new Proxy(e, dy)
}
class hy {
    constructor(t, r, n, i) {
        ;(this._setter = r),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._dirty = !0),
            (this.effect = new tc(t, () => {
                this._dirty || ((this._dirty = !0), xp(this))
            })),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !i),
            (this.__v_isReadonly = n)
    }
    get value() {
        const t = et(this)
        return Tp(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
    }
    set value(t) {
        this._setter(t)
    }
}
function py(e, t, r = !1) {
    let n, i
    const s = Re(e)
    return s ? ((n = e), (i = zr)) : ((n = e.get), (i = e.set)), new hy(n, i, s || !i, r)
}
Promise.resolve()
function hi(e, t, r, n) {
    let i
    try {
        i = n ? e(...n) : e()
    } catch (s) {
        ra(s, t, r)
    }
    return i
}
function Br(e, t, r, n) {
    if (Re(e)) {
        const s = hi(e, t, r, n)
        return (
            s &&
                Xf(s) &&
                s.catch((o) => {
                    ra(o, t, r)
                }),
            s
        )
    }
    const i = []
    for (let s = 0; s < e.length; s++) i.push(Br(e[s], t, r, n))
    return i
}
function ra(e, t, r, n = !0) {
    const i = t ? t.vnode : null
    if (t) {
        let s = t.parent
        const o = t.proxy,
            a = r
        for (; s; ) {
            const u = s.ec
            if (u) {
                for (let c = 0; c < u.length; c++) if (u[c](e, o, a) === !1) return
            }
            s = s.parent
        }
        const l = t.appContext.config.errorHandler
        if (l) {
            hi(l, null, 10, [e, o, a])
            return
        }
    }
    gy(e, r, i, n)
}
function gy(e, t, r, n = !0) {
    console.error(e)
}
let Ga = !1,
    Zu = !1
const mr = []
let Nn = 0
const $o = []
let Ao = null,
    ms = 0
const No = []
let ai = null,
    vs = 0
const Np = Promise.resolve()
let ac = null,
    Qu = null
function cn(e) {
    const t = ac || Np
    return e ? t.then(this ? e.bind(this) : e) : t
}
function my(e) {
    let t = Nn + 1,
        r = mr.length
    for (; t < r; ) {
        const n = (t + r) >>> 1
        qo(mr[n]) < e ? (t = n + 1) : (r = n)
    }
    return t
}
function Bp(e) {
    ;(!mr.length || !mr.includes(e, Ga && e.allowRecurse ? Nn + 1 : Nn)) &&
        e !== Qu &&
        (e.id == null ? mr.push(e) : mr.splice(my(e.id), 0, e), kp())
}
function kp() {
    !Ga && !Zu && ((Zu = !0), (ac = Np.then(Mp)))
}
function vy(e) {
    const t = mr.indexOf(e)
    t > Nn && mr.splice(t, 1)
}
function Op(e, t, r, n) {
    Oe(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e), kp()
}
function by(e) {
    Op(e, Ao, $o, ms)
}
function Ip(e) {
    Op(e, ai, No, vs)
}
function lc(e, t = null) {
    if ($o.length) {
        for (Qu = t, Ao = [...new Set($o)], $o.length = 0, ms = 0; ms < Ao.length; ms++) Ao[ms]()
        ;(Ao = null), (ms = 0), (Qu = null), lc(e, t)
    }
}
function Pp(e) {
    if (No.length) {
        const t = [...new Set(No)]
        if (((No.length = 0), ai)) {
            ai.push(...t)
            return
        }
        for (ai = t, ai.sort((r, n) => qo(r) - qo(n)), vs = 0; vs < ai.length; vs++) ai[vs]()
        ;(ai = null), (vs = 0)
    }
}
const qo = (e) => (e.id == null ? 1 / 0 : e.id)
function Mp(e) {
    ;(Zu = !1), (Ga = !0), lc(e), mr.sort((r, n) => qo(r) - qo(n))
    const t = zr
    try {
        for (Nn = 0; Nn < mr.length; Nn++) {
            const r = mr[Nn]
            r && r.active !== !1 && hi(r, null, 14)
        }
    } finally {
        ;(Nn = 0), (mr.length = 0), Pp(), (Ga = !1), (ac = null), (mr.length || $o.length || No.length) && Mp(e)
    }
}
function yy(e, t, ...r) {
    const n = e.vnode.props || st
    let i = r
    const s = t.startsWith("update:"),
        o = s && t.slice(7)
    if (o && o in n) {
        const c = `${o === "modelValue" ? "model" : o}Modifiers`,
            { number: d, trim: h } = n[c] || st
        h ? (i = r.map((v) => v.trim())) : d && (i = r.map(Qf))
    }
    let a,
        l = n[(a = ou(t))] || n[(a = ou(bn(t)))]
    !l && s && (l = n[(a = ou(Ks(t)))]), l && Br(l, e, 6, i)
    const u = n[a + "Once"]
    if (u) {
        if (!e.emitted) e.emitted = {}
        else if (e.emitted[a]) return
        ;(e.emitted[a] = !0), Br(u, e, 6, i)
    }
}
function Rp(e, t, r = !1) {
    const n = t.emitsCache,
        i = n.get(e)
    if (i !== void 0) return i
    const s = e.emits
    let o = {},
        a = !1
    if (!Re(e)) {
        const l = (u) => {
            const c = Rp(u, t, !0)
            c && ((a = !0), Xt(o, c))
        }
        !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !s && !a ? (n.set(e, null), null) : (Oe(s) ? s.forEach((l) => (o[l] = null)) : Xt(o, s), n.set(e, o), o)
}
function uc(e, t) {
    return !e || !ml(t) ? !1 : ((t = t.slice(2).replace(/Once$/, "")), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, Ks(t)) || Ye(e, t))
}
let _r = null,
    Lp = null
function Ya(e) {
    const t = _r
    return (_r = e), (Lp = (e && e.type.__scopeId) || null), t
}
function Te(e, t = _r, r) {
    if (!t || e._n) return e
    const n = (...i) => {
        n._d && Td(-1)
        const s = Ya(t),
            o = e(...i)
        return Ya(s), n._d && Td(1), o
    }
    return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function lu(e) {
    const {
        type: t,
        vnode: r,
        proxy: n,
        withProxy: i,
        props: s,
        propsOptions: [o],
        slots: a,
        attrs: l,
        emit: u,
        render: c,
        renderCache: d,
        data: h,
        setupState: v,
        ctx: b,
        inheritAttrs: _,
    } = e
    let C, B
    const O = Ya(e)
    try {
        if (r.shapeFlag & 4) {
            const V = i || n
            ;(C = qr(c.call(V, V, d, s, v, h, b))), (B = l)
        } else {
            const V = t
            ;(C = qr(V.length > 1 ? V(s, { attrs: l, slots: a, emit: u }) : V(s, null))), (B = t.props ? l : wy(l))
        }
    } catch (V) {
        ;(ko.length = 0), ra(V, e, 1), (C = Rt(fr))
    }
    let L = C
    if (B && _ !== !1) {
        const V = Object.keys(B),
            { shapeFlag: H } = L
        V.length && H & 7 && (o && V.some(Gf) && (B = Ey(B, o)), (L = Os(L, B)))
    }
    return r.dirs && (L.dirs = L.dirs ? L.dirs.concat(r.dirs) : r.dirs), r.transition && (L.transition = r.transition), (C = L), Ya(O), C
}
function _y(e) {
    let t
    for (let r = 0; r < e.length; r++) {
        const n = e[r]
        if (zo(n)) {
            if (n.type !== fr || n.children === "v-if") {
                if (t) return
                t = n
            }
        } else return
    }
    return t
}
const wy = (e) => {
        let t
        for (const r in e) (r === "class" || r === "style" || ml(r)) && ((t || (t = {}))[r] = e[r])
        return t
    },
    Ey = (e, t) => {
        const r = {}
        for (const n in e) (!Gf(n) || !(n.slice(9) in t)) && (r[n] = e[n])
        return r
    }
function Ay(e, t, r) {
    const { props: n, children: i, component: s } = e,
        { props: o, children: a, patchFlag: l } = t,
        u = s.emitsOptions
    if (t.dirs || t.transition) return !0
    if (r && l >= 0) {
        if (l & 1024) return !0
        if (l & 16) return n ? hd(n, o, u) : !!o
        if (l & 8) {
            const c = t.dynamicProps
            for (let d = 0; d < c.length; d++) {
                const h = c[d]
                if (o[h] !== n[h] && !uc(u, h)) return !0
            }
        }
    } else return (i || a) && (!a || !a.$stable) ? !0 : n === o ? !1 : n ? (o ? hd(n, o, u) : !0) : !!o
    return !1
}
function hd(e, t, r) {
    const n = Object.keys(t)
    if (n.length !== Object.keys(e).length) return !0
    for (let i = 0; i < n.length; i++) {
        const s = n[i]
        if (t[s] !== e[s] && !uc(r, s)) return !0
    }
    return !1
}
function fc({ vnode: e, parent: t }, r) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = r), (t = t.parent)
}
const Sy = (e) => e.__isSuspense,
    Ty = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, r, n, i, s, o, a, l, u) {
            e == null ? xy(t, r, n, i, s, o, a, l, u) : Cy(e, t, r, n, i, o, a, l, u)
        },
        hydrate: $y,
        create: cc,
        normalize: Ny,
    },
    gI = Ty
function Ho(e, t) {
    const r = e.props && e.props[t]
    Re(r) && r()
}
function xy(e, t, r, n, i, s, o, a, l) {
    const {
            p: u,
            o: { createElement: c },
        } = l,
        d = c("div"),
        h = (e.suspense = cc(e, i, n, t, d, r, s, o, a, l))
    u(null, (h.pendingBranch = e.ssContent), d, null, n, h, s, o),
        h.deps > 0 ? (Ho(e, "onPending"), Ho(e, "onFallback"), u(null, e.ssFallback, t, r, n, null, s, o), $s(h, e.ssFallback)) : h.resolve()
}
function Cy(e, t, r, n, i, s, o, a, { p: l, um: u, o: { createElement: c } }) {
    const d = (t.suspense = e.suspense)
    ;(d.vnode = t), (t.el = e.el)
    const h = t.ssContent,
        v = t.ssFallback,
        { activeBranch: b, pendingBranch: _, isInFallback: C, isHydrating: B } = d
    if (_)
        (d.pendingBranch = h),
            sn(h, _)
                ? (l(_, h, d.hiddenContainer, null, i, d, s, o, a), d.deps <= 0 ? d.resolve() : C && (l(b, v, r, n, i, null, s, o, a), $s(d, v)))
                : (d.pendingId++,
                  B ? ((d.isHydrating = !1), (d.activeBranch = _)) : u(_, i, d),
                  (d.deps = 0),
                  (d.effects.length = 0),
                  (d.hiddenContainer = c("div")),
                  C
                      ? (l(null, h, d.hiddenContainer, null, i, d, s, o, a),
                        d.deps <= 0 ? d.resolve() : (l(b, v, r, n, i, null, s, o, a), $s(d, v)))
                      : b && sn(h, b)
                      ? (l(b, h, r, n, i, d, s, o, a), d.resolve(!0))
                      : (l(null, h, d.hiddenContainer, null, i, d, s, o, a), d.deps <= 0 && d.resolve()))
    else if (b && sn(h, b)) l(b, h, r, n, i, d, s, o, a), $s(d, h)
    else if ((Ho(t, "onPending"), (d.pendingBranch = h), d.pendingId++, l(null, h, d.hiddenContainer, null, i, d, s, o, a), d.deps <= 0))
        d.resolve()
    else {
        const { timeout: O, pendingId: L } = d
        O > 0
            ? setTimeout(() => {
                  d.pendingId === L && d.fallback(v)
              }, O)
            : O === 0 && d.fallback(v)
    }
}
function cc(e, t, r, n, i, s, o, a, l, u, c = !1) {
    const {
            p: d,
            m: h,
            um: v,
            n: b,
            o: { parentNode: _, remove: C },
        } = u,
        B = Qf(e.props && e.props.timeout),
        O = {
            vnode: e,
            parent: t,
            parentComponent: r,
            isSVG: o,
            container: n,
            hiddenContainer: i,
            anchor: s,
            deps: 0,
            pendingId: 0,
            timeout: typeof B == "number" ? B : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !0,
            isHydrating: c,
            isUnmounted: !1,
            effects: [],
            resolve(L = !1) {
                const { vnode: V, activeBranch: H, pendingBranch: Q, pendingId: K, effects: ae, parentComponent: z, container: ye } = O
                if (O.isHydrating) O.isHydrating = !1
                else if (!L) {
                    const g = H && Q.transition && Q.transition.mode === "out-in"
                    g &&
                        (H.transition.afterLeave = () => {
                            K === O.pendingId && h(Q, ye, y, 0)
                        })
                    let { anchor: y } = O
                    H && ((y = b(H)), v(H, z, O, !0)), g || h(Q, ye, y, 0)
                }
                $s(O, Q), (O.pendingBranch = null), (O.isInFallback = !1)
                let S = O.parent,
                    f = !1
                for (; S; ) {
                    if (S.pendingBranch) {
                        S.effects.push(...ae), (f = !0)
                        break
                    }
                    S = S.parent
                }
                f || Ip(ae), (O.effects = []), Ho(V, "onResolve")
            },
            fallback(L) {
                if (!O.pendingBranch) return
                const { vnode: V, activeBranch: H, parentComponent: Q, container: K, isSVG: ae } = O
                Ho(V, "onFallback")
                const z = b(H),
                    ye = () => {
                        !O.isInFallback || (d(null, L, K, z, Q, null, ae, a, l), $s(O, L))
                    },
                    S = L.transition && L.transition.mode === "out-in"
                S && (H.transition.afterLeave = ye), (O.isInFallback = !0), v(H, Q, null, !0), S || ye()
            },
            move(L, V, H) {
                O.activeBranch && h(O.activeBranch, L, V, H), (O.container = L)
            },
            next() {
                return O.activeBranch && b(O.activeBranch)
            },
            registerDep(L, V) {
                const H = !!O.pendingBranch
                H && O.deps++
                const Q = L.vnode.el
                L.asyncDep
                    .catch((K) => {
                        ra(K, L, 0)
                    })
                    .then((K) => {
                        if (L.isUnmounted || O.isUnmounted || O.pendingId !== L.suspenseId) return
                        L.asyncResolved = !0
                        const { vnode: ae } = L
                        ff(L, K, !1), Q && (ae.el = Q)
                        const z = !Q && L.subTree.el
                        V(L, ae, _(Q || L.subTree.el), Q ? null : b(L.subTree), O, o, l),
                            z && C(z),
                            fc(L, ae.el),
                            H && --O.deps === 0 && O.resolve()
                    })
            },
            unmount(L, V) {
                ;(O.isUnmounted = !0), O.activeBranch && v(O.activeBranch, r, L, V), O.pendingBranch && v(O.pendingBranch, r, L, V)
            },
        }
    return O
}
function $y(e, t, r, n, i, s, o, a, l) {
    const u = (t.suspense = cc(t, n, r, e.parentNode, document.createElement("div"), null, i, s, o, a, !0)),
        c = l(e, (u.pendingBranch = t.ssContent), r, u, s, o)
    return u.deps === 0 && u.resolve(), c
}
function Ny(e) {
    const { shapeFlag: t, children: r } = e,
        n = t & 32
    ;(e.ssContent = pd(n ? r.default : r)), (e.ssFallback = n ? pd(r.fallback) : Rt(fr))
}
function pd(e) {
    let t
    if (Re(e)) {
        const r = Uo && e._c
        r && ((e._d = !1), D()), (e = e()), r && ((e._d = !0), (t = pi), Qp())
    }
    return Oe(e) && (e = _y(e)), (e = qr(e)), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((r) => r !== e)), e
}
function By(e, t) {
    t && t.pendingBranch ? (Oe(e) ? t.effects.push(...e) : t.effects.push(e)) : Ip(e)
}
function $s(e, t) {
    e.activeBranch = t
    const { vnode: r, parentComponent: n } = e,
        i = (r.el = t.el)
    n && n.subTree === r && ((n.vnode.el = i), fc(n, i))
}
function dn(e, t) {
    if (Ut) {
        let r = Ut.provides
        const n = Ut.parent && Ut.parent.provides
        n === r && (r = Ut.provides = Object.create(n)), (r[e] = t)
    }
}
function Jt(e, t, r = !1) {
    const n = Ut || _r
    if (n) {
        const i = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides
        if (i && e in i) return i[e]
        if (arguments.length > 1) return r && Re(t) ? t.call(n.proxy) : t
    }
}
const gd = {}
function Tt(e, t, r) {
    return Dp(e, t, r)
}
function Dp(e, t, { immediate: r, deep: n, flush: i, onTrack: s, onTrigger: o } = st) {
    const a = Ut
    let l,
        u = !1,
        c = !1
    if (
        (Gt(e)
            ? ((l = () => e.value), (u = Ep(e)))
            : Ji(e)
            ? ((l = () => e), (n = !0))
            : Oe(e)
            ? ((c = !0),
              (u = e.some(Ji)),
              (l = () =>
                  e.map((B) => {
                      if (Gt(B)) return B.value
                      if (Ji(B)) return Gi(B)
                      if (Re(B)) return hi(B, a, 2)
                  })))
            : Re(e)
            ? t
                ? (l = () => hi(e, a, 2))
                : (l = () => {
                      if (!(a && a.isUnmounted)) return d && d(), Br(e, a, 3, [h])
                  })
            : (l = zr),
        t && n)
    ) {
        const B = l
        l = () => Gi(B())
    }
    let d,
        h = (B) => {
            d = C.onStop = () => {
                hi(B, a, 4)
            }
        }
    if (jo) return (h = zr), t ? r && Br(t, a, 3, [l(), c ? [] : void 0, h]) : l(), zr
    let v = c ? [] : gd
    const b = () => {
        if (!!C.active)
            if (t) {
                const B = C.run()
                ;(n || u || (c ? B.some((O, L) => Do(O, v[L])) : Do(B, v))) && (d && d(), Br(t, a, 3, [B, v === gd ? void 0 : v, h]), (v = B))
            } else C.run()
    }
    b.allowRecurse = !!t
    let _
    i === "sync"
        ? (_ = b)
        : i === "post"
        ? (_ = () => or(b, a && a.suspense))
        : (_ = () => {
              !a || a.isMounted ? by(b) : b()
          })
    const C = new tc(l, _)
    return (
        t ? (r ? b() : (v = C.run())) : i === "post" ? or(C.run.bind(C), a && a.suspense) : C.run(),
        () => {
            C.stop(), a && a.scope && Yf(a.scope.effects, C)
        }
    )
}
function ky(e, t, r) {
    const n = this.proxy,
        i = Pt(e) ? (e.includes(".") ? Fp(n, e) : () => n[e]) : e.bind(n, n)
    let s
    Re(t) ? (s = t) : ((s = t.handler), (r = t))
    const o = Ut
    bi(this)
    const a = Dp(i, s.bind(n), r)
    return o ? bi(o) : gi(), a
}
function Fp(e, t) {
    const r = t.split(".")
    return () => {
        let n = e
        for (let i = 0; i < r.length && n; i++) n = n[r[i]]
        return n
    }
}
function Gi(e, t) {
    if (!Dt(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
    if ((t.add(e), Gt(e))) Gi(e.value, t)
    else if (Oe(e)) for (let r = 0; r < e.length; r++) Gi(e[r], t)
    else if (lp(e) || Cs(e))
        e.forEach((r) => {
            Gi(r, t)
        })
    else if (fp(e)) for (const r in e) Gi(e[r], t)
    return e
}
function Oy() {
    const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
    return (
        zt(() => {
            e.isMounted = !0
        }),
        Al(() => {
            e.isUnmounting = !0
        }),
        e
    )
}
const $r = [Function, Array],
    Iy = {
        name: "BaseTransition",
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: $r,
            onEnter: $r,
            onAfterEnter: $r,
            onEnterCancelled: $r,
            onBeforeLeave: $r,
            onLeave: $r,
            onAfterLeave: $r,
            onLeaveCancelled: $r,
            onBeforeAppear: $r,
            onAppear: $r,
            onAfterAppear: $r,
            onAppearCancelled: $r,
        },
        setup(e, { slots: t }) {
            const r = Tl(),
                n = Oy()
            let i
            return () => {
                const s = t.default && Hp(t.default(), !0)
                if (!s || !s.length) return
                const o = et(e),
                    { mode: a } = o,
                    l = s[0]
                if (n.isLeaving) return uu(l)
                const u = md(l)
                if (!u) return uu(l)
                const c = ef(u, o, n, r)
                tf(u, c)
                const d = r.subTree,
                    h = d && md(d)
                let v = !1
                const { getTransitionKey: b } = u.type
                if (b) {
                    const _ = b()
                    i === void 0 ? (i = _) : _ !== i && ((i = _), (v = !0))
                }
                if (h && h.type !== fr && (!sn(u, h) || v)) {
                    const _ = ef(h, o, n, r)
                    if ((tf(h, _), a === "out-in"))
                        return (
                            (n.isLeaving = !0),
                            (_.afterLeave = () => {
                                ;(n.isLeaving = !1), r.update()
                            }),
                            uu(l)
                        )
                    a === "in-out" &&
                        u.type !== fr &&
                        (_.delayLeave = (C, B, O) => {
                            const L = qp(n, h)
                            ;(L[String(h.key)] = h),
                                (C._leaveCb = () => {
                                    B(), (C._leaveCb = void 0), delete c.delayedLeave
                                }),
                                (c.delayedLeave = O)
                        })
                }
                return l
            }
        },
    },
    Vp = Iy
function qp(e, t) {
    const { leavingVNodes: r } = e
    let n = r.get(t.type)
    return n || ((n = Object.create(null)), r.set(t.type, n)), n
}
function ef(e, t, r, n) {
    const {
            appear: i,
            mode: s,
            persisted: o = !1,
            onBeforeEnter: a,
            onEnter: l,
            onAfterEnter: u,
            onEnterCancelled: c,
            onBeforeLeave: d,
            onLeave: h,
            onAfterLeave: v,
            onLeaveCancelled: b,
            onBeforeAppear: _,
            onAppear: C,
            onAfterAppear: B,
            onAppearCancelled: O,
        } = t,
        L = String(e.key),
        V = qp(r, e),
        H = (K, ae) => {
            K && Br(K, n, 9, ae)
        },
        Q = {
            mode: s,
            persisted: o,
            beforeEnter(K) {
                let ae = a
                if (!r.isMounted)
                    if (i) ae = _ || a
                    else return
                K._leaveCb && K._leaveCb(!0)
                const z = V[L]
                z && sn(e, z) && z.el._leaveCb && z.el._leaveCb(), H(ae, [K])
            },
            enter(K) {
                let ae = l,
                    z = u,
                    ye = c
                if (!r.isMounted)
                    if (i) (ae = C || l), (z = B || u), (ye = O || c)
                    else return
                let S = !1
                const f = (K._enterCb = (g) => {
                    S || ((S = !0), g ? H(ye, [K]) : H(z, [K]), Q.delayedLeave && Q.delayedLeave(), (K._enterCb = void 0))
                })
                ae ? (ae(K, f), ae.length <= 1 && f()) : f()
            },
            leave(K, ae) {
                const z = String(e.key)
                if ((K._enterCb && K._enterCb(!0), r.isUnmounting)) return ae()
                H(d, [K])
                let ye = !1
                const S = (K._leaveCb = (f) => {
                    ye || ((ye = !0), ae(), f ? H(b, [K]) : H(v, [K]), (K._leaveCb = void 0), V[z] === e && delete V[z])
                })
                ;(V[z] = e), h ? (h(K, S), h.length <= 1 && S()) : S()
            },
            clone(K) {
                return ef(K, t, r, n)
            },
        }
    return Q
}
function uu(e) {
    if (wl(e)) return (e = Os(e)), (e.children = null), e
}
function md(e) {
    return wl(e) ? (e.children ? e.children[0] : void 0) : e
}
function tf(e, t) {
    e.shapeFlag & 6 && e.component
        ? tf(e.component.subTree, t)
        : e.shapeFlag & 128
        ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
        : (e.transition = t)
}
function Hp(e, t = !1) {
    let r = [],
        n = 0
    for (let i = 0; i < e.length; i++) {
        const s = e[i]
        s.type === St ? (s.patchFlag & 128 && n++, (r = r.concat(Hp(s.children, t)))) : (t || s.type !== fr) && r.push(s)
    }
    if (n > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2
    return r
}
function de(e) {
    return Re(e) ? { setup: e, name: e.name } : e
}
const rf = (e) => !!e.type.__asyncLoader,
    wl = (e) => e.type.__isKeepAlive
function dc(e, t) {
    Up(e, "a", t)
}
function Py(e, t) {
    Up(e, "da", t)
}
function Up(e, t, r = Ut) {
    const n =
        e.__wdc ||
        (e.__wdc = () => {
            let i = r
            for (; i; ) {
                if (i.isDeactivated) return
                i = i.parent
            }
            return e()
        })
    if ((El(t, n, r), r)) {
        let i = r.parent
        for (; i && i.parent; ) wl(i.parent.vnode) && My(n, t, r, i), (i = i.parent)
    }
}
function My(e, t, r, n) {
    const i = El(t, e, n, !0)
    hc(() => {
        Yf(n[t], i)
    }, r)
}
function El(e, t, r = Ut, n = !1) {
    if (r) {
        const i = r[e] || (r[e] = []),
            s =
                t.__weh ||
                (t.__weh = (...o) => {
                    if (r.isUnmounted) return
                    Gs(), bi(r)
                    const a = Br(t, r, e, o)
                    return gi(), Ys(), a
                })
        return n ? i.unshift(s) : i.push(s), s
    }
}
const zn =
        (e) =>
        (t, r = Ut) =>
            (!jo || e === "sp") && El(e, t, r),
    Ry = zn("bm"),
    zt = zn("m"),
    Ly = zn("bu"),
    Dy = zn("u"),
    Al = zn("bum"),
    hc = zn("um"),
    Fy = zn("sp"),
    Vy = zn("rtg"),
    qy = zn("rtc")
function Hy(e, t = Ut) {
    El("ec", e, t)
}
let nf = !0
function Uy(e) {
    const t = jp(e),
        r = e.proxy,
        n = e.ctx
    ;(nf = !1), t.beforeCreate && vd(t.beforeCreate, e, "bc")
    const {
        data: i,
        computed: s,
        methods: o,
        watch: a,
        provide: l,
        inject: u,
        created: c,
        beforeMount: d,
        mounted: h,
        beforeUpdate: v,
        updated: b,
        activated: _,
        deactivated: C,
        beforeDestroy: B,
        beforeUnmount: O,
        destroyed: L,
        unmounted: V,
        render: H,
        renderTracked: Q,
        renderTriggered: K,
        errorCaptured: ae,
        serverPrefetch: z,
        expose: ye,
        inheritAttrs: S,
        components: f,
        directives: g,
        filters: y,
    } = t
    if ((u && zy(u, n, null, e.appContext.config.unwrapInjectedRef), o))
        for (const $ in o) {
            const k = o[$]
            Re(k) && (n[$] = k.bind(r))
        }
    if (i) {
        const $ = i.call(r, r)
        Dt($) && (e.data = yn($))
    }
    if (((nf = !0), s))
        for (const $ in s) {
            const k = s[$],
                A = Re(k) ? k.bind(r, r) : Re(k.get) ? k.get.bind(r, r) : zr,
                p = !Re(k) && Re(k.set) ? k.set.bind(r) : zr,
                x = P({ get: A, set: p })
            Object.defineProperty(n, $, { enumerable: !0, configurable: !0, get: () => x.value, set: (ee) => (x.value = ee) })
        }
    if (a) for (const $ in a) zp(a[$], n, r, $)
    if (l) {
        const $ = Re(l) ? l.call(r) : l
        Reflect.ownKeys($).forEach((k) => {
            dn(k, $[k])
        })
    }
    c && vd(c, e, "c")
    function E($, k) {
        Oe(k) ? k.forEach((A) => $(A.bind(r))) : k && $(k.bind(r))
    }
    if ((E(Ry, d), E(zt, h), E(Ly, v), E(Dy, b), E(dc, _), E(Py, C), E(Hy, ae), E(qy, Q), E(Vy, K), E(Al, O), E(hc, V), E(Fy, z), Oe(ye)))
        if (ye.length) {
            const $ = e.exposed || (e.exposed = {})
            ye.forEach((k) => {
                Object.defineProperty($, k, { get: () => r[k], set: (A) => (r[k] = A) })
            })
        } else e.exposed || (e.exposed = {})
    H && e.render === zr && (e.render = H), S != null && (e.inheritAttrs = S), f && (e.components = f), g && (e.directives = g)
}
function zy(e, t, r = zr, n = !1) {
    Oe(e) && (e = sf(e))
    for (const i in e) {
        const s = e[i]
        let o
        Dt(s) ? ("default" in s ? (o = Jt(s.from || i, s.default, !0)) : (o = Jt(s.from || i))) : (o = Jt(s)),
            Gt(o) && n
                ? Object.defineProperty(t, i, { enumerable: !0, configurable: !0, get: () => o.value, set: (a) => (o.value = a) })
                : (t[i] = o)
    }
}
function vd(e, t, r) {
    Br(Oe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
}
function zp(e, t, r, n) {
    const i = n.includes(".") ? Fp(r, n) : () => r[n]
    if (Pt(e)) {
        const s = t[e]
        Re(s) && Tt(i, s)
    } else if (Re(e)) Tt(i, e.bind(r))
    else if (Dt(e))
        if (Oe(e)) e.forEach((s) => zp(s, t, r, n))
        else {
            const s = Re(e.handler) ? e.handler.bind(r) : t[e.handler]
            Re(s) && Tt(i, s, e)
        }
}
function jp(e) {
    const t = e.type,
        { mixins: r, extends: n } = t,
        {
            mixins: i,
            optionsCache: s,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        a = s.get(t)
    let l
    return a ? (l = a) : !i.length && !r && !n ? (l = t) : ((l = {}), i.length && i.forEach((u) => Ja(l, u, o, !0)), Ja(l, t, o)), s.set(t, l), l
}
function Ja(e, t, r, n = !1) {
    const { mixins: i, extends: s } = t
    s && Ja(e, s, r, !0), i && i.forEach((o) => Ja(e, o, r, !0))
    for (const o in t)
        if (!(n && o === "expose")) {
            const a = jy[o] || (r && r[o])
            e[o] = a ? a(e[o], t[o]) : t[o]
        }
    return e
}
const jy = {
    data: bd,
    props: Ui,
    emits: Ui,
    methods: Ui,
    computed: Ui,
    beforeCreate: rr,
    created: rr,
    beforeMount: rr,
    mounted: rr,
    beforeUpdate: rr,
    updated: rr,
    beforeDestroy: rr,
    beforeUnmount: rr,
    destroyed: rr,
    unmounted: rr,
    activated: rr,
    deactivated: rr,
    errorCaptured: rr,
    serverPrefetch: rr,
    components: Ui,
    directives: Ui,
    watch: Ky,
    provide: bd,
    inject: Wy,
}
function bd(e, t) {
    return t
        ? e
            ? function () {
                  return Xt(Re(e) ? e.call(this, this) : e, Re(t) ? t.call(this, this) : t)
              }
            : t
        : e
}
function Wy(e, t) {
    return Ui(sf(e), sf(t))
}
function sf(e) {
    if (Oe(e)) {
        const t = {}
        for (let r = 0; r < e.length; r++) t[e[r]] = e[r]
        return t
    }
    return e
}
function rr(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Ui(e, t) {
    return e ? Xt(Xt(Object.create(null), e), t) : t
}
function Ky(e, t) {
    if (!e) return t
    if (!t) return e
    const r = Xt(Object.create(null), e)
    for (const n in t) r[n] = rr(e[n], t[n])
    return r
}
function Gy(e, t, r, n = !1) {
    const i = {},
        s = {}
    Ka(s, Sl, 1), (e.propsDefaults = Object.create(null)), Wp(e, t, i, s)
    for (const o in e.propsOptions[0]) o in i || (i[o] = void 0)
    r ? (e.props = n ? i : uy(i)) : e.type.props ? (e.props = i) : (e.props = s), (e.attrs = s)
}
function Yy(e, t, r, n) {
    const {
            props: i,
            attrs: s,
            vnode: { patchFlag: o },
        } = e,
        a = et(i),
        [l] = e.propsOptions
    let u = !1
    if ((n || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = e.vnode.dynamicProps
            for (let d = 0; d < c.length; d++) {
                let h = c[d]
                const v = t[h]
                if (l)
                    if (Ye(s, h)) v !== s[h] && ((s[h] = v), (u = !0))
                    else {
                        const b = bn(h)
                        i[b] = of(l, a, b, v, e, !1)
                    }
                else v !== s[h] && ((s[h] = v), (u = !0))
            }
        }
    } else {
        Wp(e, t, i, s) && (u = !0)
        let c
        for (const d in a)
            (!t || (!Ye(t, d) && ((c = Ks(d)) === d || !Ye(t, c)))) &&
                (l ? r && (r[d] !== void 0 || r[c] !== void 0) && (i[d] = of(l, a, d, void 0, e, !0)) : delete i[d])
        if (s !== a) for (const d in s) (!t || (!Ye(t, d) && !0)) && (delete s[d], (u = !0))
    }
    u && Dn(e, "set", "$attrs")
}
function Wp(e, t, r, n) {
    const [i, s] = e.propsOptions
    let o = !1,
        a
    if (t)
        for (let l in t) {
            if (Pa(l)) continue
            const u = t[l]
            let c
            i && Ye(i, (c = bn(l)))
                ? !s || !s.includes(c)
                    ? (r[c] = u)
                    : ((a || (a = {}))[c] = u)
                : uc(e.emitsOptions, l) || ((!(l in n) || u !== n[l]) && ((n[l] = u), (o = !0)))
        }
    if (s) {
        const l = et(r),
            u = a || st
        for (let c = 0; c < s.length; c++) {
            const d = s[c]
            r[d] = of(i, l, d, u[d], e, !Ye(u, d))
        }
    }
    return o
}
function of(e, t, r, n, i, s) {
    const o = e[r]
    if (o != null) {
        const a = Ye(o, "default")
        if (a && n === void 0) {
            const l = o.default
            if (o.type !== Function && Re(l)) {
                const { propsDefaults: u } = i
                r in u ? (n = u[r]) : (bi(i), (n = u[r] = l.call(null, t)), gi())
            } else n = l
        }
        o[0] && (s && !a ? (n = !1) : o[1] && (n === "" || n === Ks(r)) && (n = !0))
    }
    return n
}
function Kp(e, t, r = !1) {
    const n = t.propsCache,
        i = n.get(e)
    if (i) return i
    const s = e.props,
        o = {},
        a = []
    let l = !1
    if (!Re(e)) {
        const c = (d) => {
            l = !0
            const [h, v] = Kp(d, t, !0)
            Xt(o, h), v && a.push(...v)
        }
        !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!s && !l) return n.set(e, xs), xs
    if (Oe(s))
        for (let c = 0; c < s.length; c++) {
            const d = bn(s[c])
            yd(d) && (o[d] = st)
        }
    else if (s)
        for (const c in s) {
            const d = bn(c)
            if (yd(d)) {
                const h = s[c],
                    v = (o[d] = Oe(h) || Re(h) ? { type: h } : h)
                if (v) {
                    const b = Ed(Boolean, v.type),
                        _ = Ed(String, v.type)
                    ;(v[0] = b > -1), (v[1] = _ < 0 || b < _), (b > -1 || Ye(v, "default")) && a.push(d)
                }
            }
        }
    const u = [o, a]
    return n.set(e, u), u
}
function yd(e) {
    return e[0] !== "$"
}
function _d(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/)
    return t ? t[1] : e === null ? "null" : ""
}
function wd(e, t) {
    return _d(e) === _d(t)
}
function Ed(e, t) {
    return Oe(t) ? t.findIndex((r) => wd(r, e)) : Re(t) && wd(t, e) ? 0 : -1
}
const Gp = (e) => e[0] === "_" || e === "$stable",
    pc = (e) => (Oe(e) ? e.map(qr) : [qr(e)]),
    Jy = (e, t, r) => {
        const n = Te((...i) => pc(t(...i)), r)
        return (n._c = !1), n
    },
    Yp = (e, t, r) => {
        const n = e._ctx
        for (const i in e) {
            if (Gp(i)) continue
            const s = e[i]
            if (Re(s)) t[i] = Jy(i, s, n)
            else if (s != null) {
                const o = pc(s)
                t[i] = () => o
            }
        }
    },
    Jp = (e, t) => {
        const r = pc(t)
        e.slots.default = () => r
    },
    Xy = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const r = t._
            r ? ((e.slots = et(t)), Ka(t, "_", r)) : Yp(t, (e.slots = {}))
        } else (e.slots = {}), t && Jp(e, t)
        Ka(e.slots, Sl, 1)
    },
    Zy = (e, t, r) => {
        const { vnode: n, slots: i } = e
        let s = !0,
            o = st
        if (n.shapeFlag & 32) {
            const a = t._
            a ? (r && a === 1 ? (s = !1) : (Xt(i, t), !r && a === 1 && delete i._)) : ((s = !t.$stable), Yp(t, i)), (o = t)
        } else t && (Jp(e, t), (o = { default: 1 }))
        if (s) for (const a in i) !Gp(a) && !(a in o) && delete i[a]
    }
function Qy(e, t) {
    const r = _r
    if (r === null) return e
    const n = r.proxy,
        i = e.dirs || (e.dirs = [])
    for (let s = 0; s < t.length; s++) {
        let [o, a, l, u = st] = t[s]
        Re(o) && (o = { mounted: o, updated: o }),
            o.deep && Gi(a),
            i.push({ dir: o, instance: n, value: a, oldValue: void 0, arg: l, modifiers: u })
    }
    return e
}
function Mi(e, t, r, n) {
    const i = e.dirs,
        s = t && t.dirs
    for (let o = 0; o < i.length; o++) {
        const a = i[o]
        s && (a.oldValue = s[o].value)
        let l = a.dir[n]
        l && (Gs(), Br(l, r, 8, [e.el, a, e, t]), Ys())
    }
}
function Xp() {
    return {
        app: null,
        config: {
            isNativeTag: Nb,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    }
}
let e1 = 0
function t1(e, t) {
    return function (n, i = null) {
        i != null && !Dt(i) && (i = null)
        const s = Xp(),
            o = new Set()
        let a = !1
        const l = (s.app = {
            _uid: e1++,
            _component: n,
            _props: i,
            _container: null,
            _context: s,
            _instance: null,
            version: E1,
            get config() {
                return s.config
            },
            set config(u) {},
            use(u, ...c) {
                return o.has(u) || (u && Re(u.install) ? (o.add(u), u.install(l, ...c)) : Re(u) && (o.add(u), u(l, ...c))), l
            },
            mixin(u) {
                return s.mixins.includes(u) || s.mixins.push(u), l
            },
            component(u, c) {
                return c ? ((s.components[u] = c), l) : s.components[u]
            },
            directive(u, c) {
                return c ? ((s.directives[u] = c), l) : s.directives[u]
            },
            mount(u, c, d) {
                if (!a) {
                    const h = Rt(n, i)
                    return (
                        (h.appContext = s),
                        c && t ? t(h, u) : e(h, u, d),
                        (a = !0),
                        (l._container = u),
                        (u.__vue_app__ = l),
                        _c(h.component) || h.component.proxy
                    )
                }
            },
            unmount() {
                a && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(u, c) {
                return (s.provides[u] = c), l
            },
        })
        return l
    }
}
function af(e, t, r, n, i = !1) {
    if (Oe(e)) {
        e.forEach((h, v) => af(h, t && (Oe(t) ? t[v] : t), r, n, i))
        return
    }
    if (rf(n) && !i) return
    const s = n.shapeFlag & 4 ? _c(n.component) || n.component.proxy : n.el,
        o = i ? null : s,
        { i: a, r: l } = e,
        u = t && t.r,
        c = a.refs === st ? (a.refs = {}) : a.refs,
        d = a.setupState
    if ((u != null && u !== l && (Pt(u) ? ((c[u] = null), Ye(d, u) && (d[u] = null)) : Gt(u) && (u.value = null)), Re(l))) hi(l, a, 12, [o, c])
    else {
        const h = Pt(l),
            v = Gt(l)
        if (h || v) {
            const b = () => {
                if (e.f) {
                    const _ = h ? c[l] : l.value
                    i ? Oe(_) && Yf(_, s) : Oe(_) ? _.includes(s) || _.push(s) : h ? (c[l] = [s]) : ((l.value = [s]), e.k && (c[e.k] = l.value))
                } else h ? ((c[l] = o), Ye(d, l) && (d[l] = o)) : Gt(l) && ((l.value = o), e.k && (c[e.k] = o))
            }
            o ? ((b.id = -1), or(b, r)) : b()
        }
    }
}
const or = By
function r1(e) {
    return n1(e)
}
function n1(e, t) {
    const r = Mb()
    r.__VUE__ = !0
    const {
            insert: n,
            remove: i,
            patchProp: s,
            createElement: o,
            createText: a,
            createComment: l,
            setText: u,
            setElementText: c,
            parentNode: d,
            nextSibling: h,
            setScopeId: v = zr,
            cloneNode: b,
            insertStaticContent: _,
        } = e,
        C = (T, N, R, U = null, Y = null, J = null, te = !1, ie = null, Z = !!N.dynamicChildren) => {
            if (T === N) return
            T && !sn(T, N) && ((U = F(T)), fe(T, Y, J, !0), (T = null)), N.patchFlag === -2 && ((Z = !1), (N.dynamicChildren = null))
            const { type: W, ref: we, shapeFlag: le } = N
            switch (W) {
                case bc:
                    B(T, N, R, U)
                    break
                case fr:
                    O(T, N, R, U)
                    break
                case fu:
                    T == null && L(N, R, U, te)
                    break
                case St:
                    g(T, N, R, U, Y, J, te, ie, Z)
                    break
                default:
                    le & 1
                        ? Q(T, N, R, U, Y, J, te, ie, Z)
                        : le & 6
                        ? y(T, N, R, U, Y, J, te, ie, Z)
                        : (le & 64 || le & 128) && W.process(T, N, R, U, Y, J, te, ie, Z, X)
            }
            we != null && Y && af(we, T && T.ref, J, N || T, !N)
        },
        B = (T, N, R, U) => {
            if (T == null) n((N.el = a(N.children)), R, U)
            else {
                const Y = (N.el = T.el)
                N.children !== T.children && u(Y, N.children)
            }
        },
        O = (T, N, R, U) => {
            T == null ? n((N.el = l(N.children || "")), R, U) : (N.el = T.el)
        },
        L = (T, N, R, U) => {
            ;[T.el, T.anchor] = _(T.children, N, R, U, T.el, T.anchor)
        },
        V = ({ el: T, anchor: N }, R, U) => {
            let Y
            for (; T && T !== N; ) (Y = h(T)), n(T, R, U), (T = Y)
            n(N, R, U)
        },
        H = ({ el: T, anchor: N }) => {
            let R
            for (; T && T !== N; ) (R = h(T)), i(T), (T = R)
            i(N)
        },
        Q = (T, N, R, U, Y, J, te, ie, Z) => {
            ;(te = te || N.type === "svg"), T == null ? K(N, R, U, Y, J, te, ie, Z) : ye(T, N, Y, J, te, ie, Z)
        },
        K = (T, N, R, U, Y, J, te, ie) => {
            let Z, W
            const { type: we, props: le, shapeFlag: ce, transition: xe, patchFlag: Ee, dirs: $e } = T
            if (T.el && b !== void 0 && Ee === -1) Z = T.el = b(T.el)
            else {
                if (
                    ((Z = T.el = o(T.type, J, le && le.is, le)),
                    ce & 8 ? c(Z, T.children) : ce & 16 && z(T.children, Z, null, U, Y, J && we !== "foreignObject", te, ie),
                    $e && Mi(T, null, U, "created"),
                    le)
                ) {
                    for (const Ce in le) Ce !== "value" && !Pa(Ce) && s(Z, Ce, null, le[Ce], J, T.children, U, Y, I)
                    "value" in le && s(Z, "value", null, le.value), (W = le.onVnodeBeforeMount) && Jr(W, U, T)
                }
                ae(Z, T, T.scopeId, te, U)
            }
            $e && Mi(T, null, U, "beforeMount")
            const We = (!Y || (Y && !Y.pendingBranch)) && xe && !xe.persisted
            We && xe.beforeEnter(Z),
                n(Z, N, R),
                ((W = le && le.onVnodeMounted) || We || $e) &&
                    or(() => {
                        W && Jr(W, U, T), We && xe.enter(Z), $e && Mi(T, null, U, "mounted")
                    }, Y)
        },
        ae = (T, N, R, U, Y) => {
            if ((R && v(T, R), U)) for (let J = 0; J < U.length; J++) v(T, U[J])
            if (Y) {
                let J = Y.subTree
                if (N === J) {
                    const te = Y.vnode
                    ae(T, te, te.scopeId, te.slotScopeIds, Y.parent)
                }
            }
        },
        z = (T, N, R, U, Y, J, te, ie, Z = 0) => {
            for (let W = Z; W < T.length; W++) {
                const we = (T[W] = ie ? li(T[W]) : qr(T[W]))
                C(null, we, N, R, U, Y, J, te, ie)
            }
        },
        ye = (T, N, R, U, Y, J, te) => {
            const ie = (N.el = T.el)
            let { patchFlag: Z, dynamicChildren: W, dirs: we } = N
            Z |= T.patchFlag & 16
            const le = T.props || st,
                ce = N.props || st
            let xe
            R && Ri(R, !1), (xe = ce.onVnodeBeforeUpdate) && Jr(xe, R, N, T), we && Mi(N, T, R, "beforeUpdate"), R && Ri(R, !0)
            const Ee = Y && N.type !== "foreignObject"
            if ((W ? S(T.dynamicChildren, W, ie, R, U, Ee, J) : te || A(T, N, ie, null, R, U, Ee, J, !1), Z > 0)) {
                if (Z & 16) f(ie, N, le, ce, R, U, Y)
                else if (
                    (Z & 2 && le.class !== ce.class && s(ie, "class", null, ce.class, Y), Z & 4 && s(ie, "style", le.style, ce.style, Y), Z & 8)
                ) {
                    const $e = N.dynamicProps
                    for (let We = 0; We < $e.length; We++) {
                        const Ce = $e[We],
                            He = le[Ce],
                            ir = ce[Ce]
                        ;(ir !== He || Ce === "value") && s(ie, Ce, He, ir, Y, T.children, R, U, I)
                    }
                }
                Z & 1 && T.children !== N.children && c(ie, N.children)
            } else !te && W == null && f(ie, N, le, ce, R, U, Y)
            ;((xe = ce.onVnodeUpdated) || we) &&
                or(() => {
                    xe && Jr(xe, R, N, T), we && Mi(N, T, R, "updated")
                }, U)
        },
        S = (T, N, R, U, Y, J, te) => {
            for (let ie = 0; ie < N.length; ie++) {
                const Z = T[ie],
                    W = N[ie],
                    we = Z.el && (Z.type === St || !sn(Z, W) || Z.shapeFlag & 70) ? d(Z.el) : R
                C(Z, W, we, null, U, Y, J, te, !0)
            }
        },
        f = (T, N, R, U, Y, J, te) => {
            if (R !== U) {
                for (const ie in U) {
                    if (Pa(ie)) continue
                    const Z = U[ie],
                        W = R[ie]
                    Z !== W && ie !== "value" && s(T, ie, W, Z, te, N.children, Y, J, I)
                }
                if (R !== st) for (const ie in R) !Pa(ie) && !(ie in U) && s(T, ie, R[ie], null, te, N.children, Y, J, I)
                "value" in U && s(T, "value", R.value, U.value)
            }
        },
        g = (T, N, R, U, Y, J, te, ie, Z) => {
            const W = (N.el = T ? T.el : a("")),
                we = (N.anchor = T ? T.anchor : a(""))
            let { patchFlag: le, dynamicChildren: ce, slotScopeIds: xe } = N
            xe && (ie = ie ? ie.concat(xe) : xe),
                T == null
                    ? (n(W, R, U), n(we, R, U), z(N.children, R, we, Y, J, te, ie, Z))
                    : le > 0 && le & 64 && ce && T.dynamicChildren
                    ? (S(T.dynamicChildren, ce, R, Y, J, te, ie), (N.key != null || (Y && N === Y.subTree)) && gc(T, N, !0))
                    : A(T, N, R, we, Y, J, te, ie, Z)
        },
        y = (T, N, R, U, Y, J, te, ie, Z) => {
            ;(N.slotScopeIds = ie), T == null ? (N.shapeFlag & 512 ? Y.ctx.activate(N, R, U, te, Z) : w(N, R, U, Y, J, te, Z)) : E(T, N, Z)
        },
        w = (T, N, R, U, Y, J, te) => {
            const ie = (T.component = g1(T, U, Y))
            if ((wl(T) && (ie.ctx.renderer = X), m1(ie), ie.asyncDep)) {
                if ((Y && Y.registerDep(ie, $), !T.el)) {
                    const Z = (ie.subTree = Rt(fr))
                    O(null, Z, N, R)
                }
                return
            }
            $(ie, T, N, R, Y, J, te)
        },
        E = (T, N, R) => {
            const U = (N.component = T.component)
            if (Ay(T, N, R))
                if (U.asyncDep && !U.asyncResolved) {
                    k(U, N, R)
                    return
                } else (U.next = N), vy(U.update), U.update()
            else (N.component = T.component), (N.el = T.el), (U.vnode = N)
        },
        $ = (T, N, R, U, Y, J, te) => {
            const ie = () => {
                    if (T.isMounted) {
                        let { next: we, bu: le, u: ce, parent: xe, vnode: Ee } = T,
                            $e = we,
                            We
                        Ri(T, !1),
                            we ? ((we.el = Ee.el), k(T, we, te)) : (we = Ee),
                            le && au(le),
                            (We = we.props && we.props.onVnodeBeforeUpdate) && Jr(We, xe, we, Ee),
                            Ri(T, !0)
                        const Ce = lu(T),
                            He = T.subTree
                        ;(T.subTree = Ce),
                            C(He, Ce, d(He.el), F(He), T, Y, J),
                            (we.el = Ce.el),
                            $e === null && fc(T, Ce.el),
                            ce && or(ce, Y),
                            (We = we.props && we.props.onVnodeUpdated) && or(() => Jr(We, xe, we, Ee), Y)
                    } else {
                        let we
                        const { el: le, props: ce } = N,
                            { bm: xe, m: Ee, parent: $e } = T,
                            We = rf(N)
                        if ((Ri(T, !1), xe && au(xe), !We && (we = ce && ce.onVnodeBeforeMount) && Jr(we, $e, N), Ri(T, !0), le && G)) {
                            const Ce = () => {
                                ;(T.subTree = lu(T)), G(le, T.subTree, T, Y, null)
                            }
                            We ? N.type.__asyncLoader().then(() => !T.isUnmounted && Ce()) : Ce()
                        } else {
                            const Ce = (T.subTree = lu(T))
                            C(null, Ce, R, U, T, Y, J), (N.el = Ce.el)
                        }
                        if ((Ee && or(Ee, Y), !We && (we = ce && ce.onVnodeMounted))) {
                            const Ce = N
                            or(() => Jr(we, $e, Ce), Y)
                        }
                        N.shapeFlag & 256 && T.a && or(T.a, Y), (T.isMounted = !0), (N = R = U = null)
                    }
                },
                Z = (T.effect = new tc(ie, () => Bp(T.update), T.scope)),
                W = (T.update = Z.run.bind(Z))
            ;(W.id = T.uid), Ri(T, !0), W()
        },
        k = (T, N, R) => {
            N.component = T
            const U = T.vnode.props
            ;(T.vnode = N), (T.next = null), Yy(T, N.props, U, R), Zy(T, N.children, R), Gs(), lc(void 0, T.update), Ys()
        },
        A = (T, N, R, U, Y, J, te, ie, Z = !1) => {
            const W = T && T.children,
                we = T ? T.shapeFlag : 0,
                le = N.children,
                { patchFlag: ce, shapeFlag: xe } = N
            if (ce > 0) {
                if (ce & 128) {
                    x(W, le, R, U, Y, J, te, ie, Z)
                    return
                } else if (ce & 256) {
                    p(W, le, R, U, Y, J, te, ie, Z)
                    return
                }
            }
            xe & 8
                ? (we & 16 && I(W, Y, J), le !== W && c(R, le))
                : we & 16
                ? xe & 16
                    ? x(W, le, R, U, Y, J, te, ie, Z)
                    : I(W, Y, J, !0)
                : (we & 8 && c(R, ""), xe & 16 && z(le, R, U, Y, J, te, ie, Z))
        },
        p = (T, N, R, U, Y, J, te, ie, Z) => {
            ;(T = T || xs), (N = N || xs)
            const W = T.length,
                we = N.length,
                le = Math.min(W, we)
            let ce
            for (ce = 0; ce < le; ce++) {
                const xe = (N[ce] = Z ? li(N[ce]) : qr(N[ce]))
                C(T[ce], xe, R, null, Y, J, te, ie, Z)
            }
            W > we ? I(T, Y, J, !0, !1, le) : z(N, R, U, Y, J, te, ie, Z, le)
        },
        x = (T, N, R, U, Y, J, te, ie, Z) => {
            let W = 0
            const we = N.length
            let le = T.length - 1,
                ce = we - 1
            for (; W <= le && W <= ce; ) {
                const xe = T[W],
                    Ee = (N[W] = Z ? li(N[W]) : qr(N[W]))
                if (sn(xe, Ee)) C(xe, Ee, R, null, Y, J, te, ie, Z)
                else break
                W++
            }
            for (; W <= le && W <= ce; ) {
                const xe = T[le],
                    Ee = (N[ce] = Z ? li(N[ce]) : qr(N[ce]))
                if (sn(xe, Ee)) C(xe, Ee, R, null, Y, J, te, ie, Z)
                else break
                le--, ce--
            }
            if (W > le) {
                if (W <= ce) {
                    const xe = ce + 1,
                        Ee = xe < we ? N[xe].el : U
                    for (; W <= ce; ) C(null, (N[W] = Z ? li(N[W]) : qr(N[W])), R, Ee, Y, J, te, ie, Z), W++
                }
            } else if (W > ce) for (; W <= le; ) fe(T[W], Y, J, !0), W++
            else {
                const xe = W,
                    Ee = W,
                    $e = new Map()
                for (W = Ee; W <= ce; W++) {
                    const Fe = (N[W] = Z ? li(N[W]) : qr(N[W]))
                    Fe.key != null && $e.set(Fe.key, W)
                }
                let We,
                    Ce = 0
                const He = ce - Ee + 1
                let ir = !1,
                    nt = 0
                const Ze = new Array(He)
                for (W = 0; W < He; W++) Ze[W] = 0
                for (W = xe; W <= le; W++) {
                    const Fe = T[W]
                    if (Ce >= He) {
                        fe(Fe, Y, J, !0)
                        continue
                    }
                    let Ue
                    if (Fe.key != null) Ue = $e.get(Fe.key)
                    else
                        for (We = Ee; We <= ce; We++)
                            if (Ze[We - Ee] === 0 && sn(Fe, N[We])) {
                                Ue = We
                                break
                            }
                    Ue === void 0
                        ? fe(Fe, Y, J, !0)
                        : ((Ze[Ue - Ee] = W + 1), Ue >= nt ? (nt = Ue) : (ir = !0), C(Fe, N[Ue], R, null, Y, J, te, ie, Z), Ce++)
                }
                const Gr = ir ? i1(Ze) : xs
                for (We = Gr.length - 1, W = He - 1; W >= 0; W--) {
                    const Fe = Ee + W,
                        Ue = N[Fe],
                        Yr = Fe + 1 < we ? N[Fe + 1].el : U
                    Ze[W] === 0 ? C(null, Ue, R, Yr, Y, J, te, ie, Z) : ir && (We < 0 || W !== Gr[We] ? ee(Ue, R, Yr, 2) : We--)
                }
            }
        },
        ee = (T, N, R, U, Y = null) => {
            const { el: J, type: te, transition: ie, children: Z, shapeFlag: W } = T
            if (W & 6) {
                ee(T.component.subTree, N, R, U)
                return
            }
            if (W & 128) {
                T.suspense.move(N, R, U)
                return
            }
            if (W & 64) {
                te.move(T, N, R, X)
                return
            }
            if (te === St) {
                n(J, N, R)
                for (let le = 0; le < Z.length; le++) ee(Z[le], N, R, U)
                n(T.anchor, N, R)
                return
            }
            if (te === fu) {
                V(T, N, R)
                return
            }
            if (U !== 2 && W & 1 && ie)
                if (U === 0) ie.beforeEnter(J), n(J, N, R), or(() => ie.enter(J), Y)
                else {
                    const { leave: le, delayLeave: ce, afterLeave: xe } = ie,
                        Ee = () => n(J, N, R),
                        $e = () => {
                            le(J, () => {
                                Ee(), xe && xe()
                            })
                        }
                    ce ? ce(J, Ee, $e) : $e()
                }
            else n(J, N, R)
        },
        fe = (T, N, R, U = !1, Y = !1) => {
            const { type: J, props: te, ref: ie, children: Z, dynamicChildren: W, shapeFlag: we, patchFlag: le, dirs: ce } = T
            if ((ie != null && af(ie, null, R, T, !0), we & 256)) {
                N.ctx.deactivate(T)
                return
            }
            const xe = we & 1 && ce,
                Ee = !rf(T)
            let $e
            if ((Ee && ($e = te && te.onVnodeBeforeUnmount) && Jr($e, N, T), we & 6)) M(T.component, R, U)
            else {
                if (we & 128) {
                    T.suspense.unmount(R, U)
                    return
                }
                xe && Mi(T, null, N, "beforeUnmount"),
                    we & 64
                        ? T.type.remove(T, N, R, Y, X, U)
                        : W && (J !== St || (le > 0 && le & 64))
                        ? I(W, N, R, !1, !0)
                        : ((J === St && le & 384) || (!Y && we & 16)) && I(Z, N, R),
                    U && he(T)
            }
            ;((Ee && ($e = te && te.onVnodeUnmounted)) || xe) &&
                or(() => {
                    $e && Jr($e, N, T), xe && Mi(T, null, N, "unmounted")
                }, R)
        },
        he = (T) => {
            const { type: N, el: R, anchor: U, transition: Y } = T
            if (N === St) {
                m(R, U)
                return
            }
            if (N === fu) {
                H(T)
                return
            }
            const J = () => {
                i(R), Y && !Y.persisted && Y.afterLeave && Y.afterLeave()
            }
            if (T.shapeFlag & 1 && Y && !Y.persisted) {
                const { leave: te, delayLeave: ie } = Y,
                    Z = () => te(R, J)
                ie ? ie(T.el, J, Z) : Z()
            } else J()
        },
        m = (T, N) => {
            let R
            for (; T !== N; ) (R = h(T)), i(T), (T = R)
            i(N)
        },
        M = (T, N, R) => {
            const { bum: U, scope: Y, update: J, subTree: te, um: ie } = T
            U && au(U),
                Y.stop(),
                J && ((J.active = !1), fe(te, T, N, R)),
                ie && or(ie, N),
                or(() => {
                    T.isUnmounted = !0
                }, N),
                N &&
                    N.pendingBranch &&
                    !N.isUnmounted &&
                    T.asyncDep &&
                    !T.asyncResolved &&
                    T.suspenseId === N.pendingId &&
                    (N.deps--, N.deps === 0 && N.resolve())
        },
        I = (T, N, R, U = !1, Y = !1, J = 0) => {
            for (let te = J; te < T.length; te++) fe(T[te], N, R, U, Y)
        },
        F = (T) => (T.shapeFlag & 6 ? F(T.component.subTree) : T.shapeFlag & 128 ? T.suspense.next() : h(T.anchor || T.el)),
        j = (T, N, R) => {
            T == null ? N._vnode && fe(N._vnode, null, null, !0) : C(N._vnode || null, T, N, null, null, null, R), Pp(), (N._vnode = T)
        },
        X = { p: C, um: fe, m: ee, r: he, mt: w, mc: z, pc: A, pbc: S, n: F, o: e }
    let oe, G
    return t && ([oe, G] = t(X)), { render: j, hydrate: oe, createApp: t1(j, oe) }
}
function Ri({ effect: e, update: t }, r) {
    e.allowRecurse = t.allowRecurse = r
}
function gc(e, t, r = !1) {
    const n = e.children,
        i = t.children
    if (Oe(n) && Oe(i))
        for (let s = 0; s < n.length; s++) {
            const o = n[s]
            let a = i[s]
            a.shapeFlag & 1 &&
                !a.dynamicChildren &&
                ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = i[s] = li(i[s])), (a.el = o.el)), r || gc(o, a))
        }
}
function i1(e) {
    const t = e.slice(),
        r = [0]
    let n, i, s, o, a
    const l = e.length
    for (n = 0; n < l; n++) {
        const u = e[n]
        if (u !== 0) {
            if (((i = r[r.length - 1]), e[i] < u)) {
                ;(t[n] = i), r.push(n)
                continue
            }
            for (s = 0, o = r.length - 1; s < o; ) (a = (s + o) >> 1), e[r[a]] < u ? (s = a + 1) : (o = a)
            u < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), (r[s] = n))
        }
    }
    for (s = r.length, o = r[s - 1]; s-- > 0; ) (r[s] = o), (o = t[o])
    return r
}
const s1 = (e) => e.__isTeleport,
    Bo = (e) => e && (e.disabled || e.disabled === ""),
    Ad = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
    lf = (e, t) => {
        const r = e && e.to
        return Pt(r) ? (t ? t(r) : null) : r
    },
    o1 = {
        __isTeleport: !0,
        process(e, t, r, n, i, s, o, a, l, u) {
            const {
                    mc: c,
                    pc: d,
                    pbc: h,
                    o: { insert: v, querySelector: b, createText: _, createComment: C },
                } = u,
                B = Bo(t.props)
            let { shapeFlag: O, children: L, dynamicChildren: V } = t
            if (e == null) {
                const H = (t.el = _("")),
                    Q = (t.anchor = _(""))
                v(H, r, n), v(Q, r, n)
                const K = (t.target = lf(t.props, b)),
                    ae = (t.targetAnchor = _(""))
                K && (v(ae, K), (o = o || Ad(K)))
                const z = (ye, S) => {
                    O & 16 && c(L, ye, S, i, s, o, a, l)
                }
                B ? z(r, Q) : K && z(K, ae)
            } else {
                t.el = e.el
                const H = (t.anchor = e.anchor),
                    Q = (t.target = e.target),
                    K = (t.targetAnchor = e.targetAnchor),
                    ae = Bo(e.props),
                    z = ae ? r : Q,
                    ye = ae ? H : K
                if (((o = o || Ad(Q)), V ? (h(e.dynamicChildren, V, z, i, s, o, a), gc(e, t, !0)) : l || d(e, t, z, ye, i, s, o, a, !1), B))
                    ae || wa(t, r, H, u, 1)
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const S = (t.target = lf(t.props, b))
                    S && wa(t, S, null, u, 0)
                } else ae && wa(t, Q, K, u, 1)
            }
        },
        remove(e, t, r, n, { um: i, o: { remove: s } }, o) {
            const { shapeFlag: a, children: l, anchor: u, targetAnchor: c, target: d, props: h } = e
            if ((d && s(c), (o || !Bo(h)) && (s(u), a & 16)))
                for (let v = 0; v < l.length; v++) {
                    const b = l[v]
                    i(b, t, r, !0, !!b.dynamicChildren)
                }
        },
        move: wa,
        hydrate: a1,
    }
function wa(e, t, r, { o: { insert: n }, m: i }, s = 2) {
    s === 0 && n(e.targetAnchor, t, r)
    const { el: o, anchor: a, shapeFlag: l, children: u, props: c } = e,
        d = s === 2
    if ((d && n(o, t, r), (!d || Bo(c)) && l & 16)) for (let h = 0; h < u.length; h++) i(u[h], t, r, 2)
    d && n(a, t, r)
}
function a1(e, t, r, n, i, s, { o: { nextSibling: o, parentNode: a, querySelector: l } }, u) {
    const c = (t.target = lf(t.props, l))
    if (c) {
        const d = c._lpa || c.firstChild
        t.shapeFlag & 16 &&
            (Bo(t.props)
                ? ((t.anchor = u(o(e), t, a(e), r, n, i, s)), (t.targetAnchor = d))
                : ((t.anchor = o(e)), (t.targetAnchor = u(d, t, c, r, n, i, s))),
            (c._lpa = t.targetAnchor && o(t.targetAnchor)))
    }
    return t.anchor && o(t.anchor)
}
const l1 = o1,
    mc = "components",
    u1 = "directives"
function jt(e, t) {
    return vc(mc, e, !0, t) || e
}
const Zp = Symbol()
function ke(e) {
    return Pt(e) ? vc(mc, e, !1) || e : e || Zp
}
function f1(e) {
    return vc(u1, e)
}
function vc(e, t, r = !0, n = !1) {
    const i = _r || Ut
    if (i) {
        const s = i.type
        if (e === mc) {
            const a = y1(s)
            if (a && (a === t || a === bn(t) || a === yl(bn(t)))) return s
        }
        const o = Sd(i[e] || s[e], t) || Sd(i.appContext[e], t)
        return !o && n ? s : o
    }
}
function Sd(e, t) {
    return e && (e[t] || e[bn(t)] || e[yl(bn(t))])
}
const St = Symbol(void 0),
    bc = Symbol(void 0),
    fr = Symbol(void 0),
    fu = Symbol(void 0),
    ko = []
let pi = null
function D(e = !1) {
    ko.push((pi = e ? null : []))
}
function Qp() {
    ko.pop(), (pi = ko[ko.length - 1] || null)
}
let Uo = 1
function Td(e) {
    Uo += e
}
function eg(e) {
    return (e.dynamicChildren = Uo > 0 ? pi || xs : null), Qp(), Uo > 0 && pi && pi.push(e), e
}
function se(e, t, r, n, i, s) {
    return eg(qe(e, t, r, n, i, s, !0))
}
function be(e, t, r, n, i) {
    return eg(Rt(e, t, r, n, i, !0))
}
function zo(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function sn(e, t) {
    return e.type === t.type && e.key === t.key
}
const Sl = "__vInternal",
    tg = ({ key: e }) => (e != null ? e : null),
    Ma = ({ ref: e, ref_key: t, ref_for: r }) => (e != null ? (Pt(e) || Gt(e) || Re(e) ? { i: _r, r: e, k: t, f: !!r } : e) : null)
function qe(e, t = null, r = null, n = 0, i = null, s = e === St ? 0 : 1, o = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && tg(t),
        ref: t && Ma(t),
        scopeId: Lp,
        slotScopeIds: null,
        children: r,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: n,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
    }
    return (
        a ? (yc(l, r), s & 128 && e.normalize(l)) : r && (l.shapeFlag |= Pt(r) ? 8 : 16),
        Uo > 0 && !o && pi && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && pi.push(l),
        l
    )
}
const Rt = c1
function c1(e, t = null, r = null, n = 0, i = null, s = !1) {
    if (((!e || e === Zp) && (e = fr), zo(e))) {
        const a = Os(e, t, !0)
        return r && yc(a, r), a
    }
    if ((_1(e) && (e = e.__vccOpts), t)) {
        t = rg(t)
        let { class: a, style: l } = t
        a && !Pt(a) && (t.class = ve(a)), Dt(l) && (Ap(l) && !Oe(l) && (l = Xt({}, l)), (t.style = Ln(l)))
    }
    const o = Pt(e) ? 1 : Sy(e) ? 128 : s1(e) ? 64 : Dt(e) ? 4 : Re(e) ? 2 : 0
    return qe(e, t, r, n, i, o, s, !0)
}
function rg(e) {
    return e ? (Ap(e) || Sl in e ? Xt({}, e) : e) : null
}
function Os(e, t, r = !1) {
    const { props: n, ref: i, patchFlag: s, children: o } = e,
        a = t ? Ge(n || {}, t) : n
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && tg(a),
        ref: t && t.ref ? (r && i ? (Oe(i) ? i.concat(Ma(t)) : [i, Ma(t)]) : Ma(t)) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== St ? (s === -1 ? 16 : s | 16) : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Os(e.ssContent),
        ssFallback: e.ssFallback && Os(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
    }
}
function Ot(e = " ", t = 0) {
    return Rt(bc, null, e, t)
}
function Ie(e = "", t = !1) {
    return t ? (D(), be(fr, null, e)) : Rt(fr, null, e)
}
function qr(e) {
    return e == null || typeof e == "boolean" ? Rt(fr) : Oe(e) ? Rt(St, null, e.slice()) : typeof e == "object" ? li(e) : Rt(bc, null, String(e))
}
function li(e) {
    return e.el === null || e.memo ? e : Os(e)
}
function yc(e, t) {
    let r = 0
    const { shapeFlag: n } = e
    if (t == null) t = null
    else if (Oe(t)) r = 16
    else if (typeof t == "object")
        if (n & 65) {
            const i = t.default
            i && (i._c && (i._d = !1), yc(e, i()), i._c && (i._d = !0))
            return
        } else {
            r = 32
            const i = t._
            !i && !(Sl in t) ? (t._ctx = _r) : i === 3 && _r && (_r.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        }
    else Re(t) ? ((t = { default: t, _ctx: _r }), (r = 32)) : ((t = String(t)), n & 64 ? ((r = 16), (t = [Ot(t)])) : (r = 8))
    ;(e.children = t), (e.shapeFlag |= r)
}
function Ge(...e) {
    const t = {}
    for (let r = 0; r < e.length; r++) {
        const n = e[r]
        for (const i in n)
            if (i === "class") t.class !== n.class && (t.class = ve([t.class, n.class]))
            else if (i === "style") t.style = Ln([t.style, n.style])
            else if (ml(i)) {
                const s = t[i],
                    o = n[i]
                o && s !== o && !(Oe(s) && s.includes(o)) && (t[i] = s ? [].concat(s, o) : o)
            } else i !== "" && (t[i] = n[i])
    }
    return t
}
function Jr(e, t, r, n = null) {
    Br(e, t, 7, [r, n])
}
function hn(e, t, r, n) {
    let i
    const s = r && r[n]
    if (Oe(e) || Pt(e)) {
        i = new Array(e.length)
        for (let o = 0, a = e.length; o < a; o++) i[o] = t(e[o], o, void 0, s && s[o])
    } else if (typeof e == "number") {
        i = new Array(e)
        for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, s && s[o])
    } else if (Dt(e))
        if (e[Symbol.iterator]) i = Array.from(e, (o, a) => t(o, a, void 0, s && s[a]))
        else {
            const o = Object.keys(e)
            i = new Array(o.length)
            for (let a = 0, l = o.length; a < l; a++) {
                const u = o[a]
                i[a] = t(e[u], u, a, s && s[a])
            }
        }
    else i = []
    return r && (r[n] = i), i
}
function ue(e, t, r = {}, n, i) {
    if (_r.isCE) return Rt("slot", t === "default" ? null : { name: t }, n && n())
    let s = e[t]
    s && s._c && (s._d = !1), D()
    const o = s && ng(s(r)),
        a = be(St, { key: r.key || `_${t}` }, o || (n ? n() : []), o && e._ === 1 ? 64 : -2)
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a
}
function ng(e) {
    return e.some((t) => (zo(t) ? !(t.type === fr || (t.type === St && !ng(t.children))) : !0)) ? e : null
}
const uf = (e) => (e ? (ig(e) ? _c(e) || e.proxy : uf(e.parent)) : null),
    Xa = Xt(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => uf(e.parent),
        $root: (e) => uf(e.root),
        $emit: (e) => e.emit,
        $options: (e) => jp(e),
        $forceUpdate: (e) => () => Bp(e.update),
        $nextTick: (e) => cn.bind(e.proxy),
        $watch: (e) => ky.bind(e),
    }),
    d1 = {
        get({ _: e }, t) {
            const { ctx: r, setupState: n, data: i, props: s, accessCache: o, type: a, appContext: l } = e
            let u
            if (t[0] !== "$") {
                const v = o[t]
                if (v !== void 0)
                    switch (v) {
                        case 1:
                            return n[t]
                        case 2:
                            return i[t]
                        case 4:
                            return r[t]
                        case 3:
                            return s[t]
                    }
                else {
                    if (n !== st && Ye(n, t)) return (o[t] = 1), n[t]
                    if (i !== st && Ye(i, t)) return (o[t] = 2), i[t]
                    if ((u = e.propsOptions[0]) && Ye(u, t)) return (o[t] = 3), s[t]
                    if (r !== st && Ye(r, t)) return (o[t] = 4), r[t]
                    nf && (o[t] = 0)
                }
            }
            const c = Xa[t]
            let d, h
            if (c) return t === "$attrs" && Ar(e, "get", t), c(e)
            if ((d = a.__cssModules) && (d = d[t])) return d
            if (r !== st && Ye(r, t)) return (o[t] = 4), r[t]
            if (((h = l.config.globalProperties), Ye(h, t))) return h[t]
        },
        set({ _: e }, t, r) {
            const { data: n, setupState: i, ctx: s } = e
            if (i !== st && Ye(i, t)) i[t] = r
            else if (n !== st && Ye(n, t)) n[t] = r
            else if (Ye(e.props, t)) return !1
            return t[0] === "$" && t.slice(1) in e ? !1 : ((s[t] = r), !0)
        },
        has({ _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, propsOptions: s } }, o) {
            let a
            return (
                !!r[o] ||
                (e !== st && Ye(e, o)) ||
                (t !== st && Ye(t, o)) ||
                ((a = s[0]) && Ye(a, o)) ||
                Ye(n, o) ||
                Ye(Xa, o) ||
                Ye(i.config.globalProperties, o)
            )
        },
    },
    h1 = Xp()
let p1 = 0
function g1(e, t, r) {
    const n = e.type,
        i = (t ? t.appContext : e.appContext) || h1,
        s = {
            uid: p1++,
            vnode: e,
            type: n,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Rb(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Kp(n, i),
            emitsOptions: Rp(n, i),
            emit: null,
            emitted: null,
            propsDefaults: st,
            inheritAttrs: n.inheritAttrs,
            ctx: st,
            data: st,
            props: st,
            attrs: st,
            slots: st,
            refs: st,
            setupState: st,
            setupContext: null,
            suspense: r,
            suspenseId: r ? r.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        }
    return (s.ctx = { _: s }), (s.root = t ? t.root : s), (s.emit = yy.bind(null, s)), e.ce && e.ce(s), s
}
let Ut = null
const Tl = () => Ut || _r,
    bi = (e) => {
        ;(Ut = e), e.scope.on()
    },
    gi = () => {
        Ut && Ut.scope.off(), (Ut = null)
    }
function ig(e) {
    return e.vnode.shapeFlag & 4
}
let jo = !1
function m1(e, t = !1) {
    jo = t
    const { props: r, children: n } = e.vnode,
        i = ig(e)
    Gy(e, r, i, t), Xy(e, n)
    const s = i ? v1(e, t) : void 0
    return (jo = !1), s
}
function v1(e, t) {
    const r = e.type
    ;(e.accessCache = Object.create(null)), (e.proxy = Sp(new Proxy(e.ctx, d1)))
    const { setup: n } = r
    if (n) {
        const i = (e.setupContext = n.length > 1 ? og(e) : null)
        bi(e), Gs()
        const s = hi(n, e, 0, [e.props, i])
        if ((Ys(), gi(), Xf(s))) {
            if ((s.then(gi, gi), t))
                return s
                    .then((o) => {
                        ff(e, o, t)
                    })
                    .catch((o) => {
                        ra(o, e, 0)
                    })
            e.asyncDep = s
        } else ff(e, s, t)
    } else sg(e, t)
}
function ff(e, t, r) {
    Re(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : Dt(t) && (e.setupState = $p(t)), sg(e, r)
}
let xd
function sg(e, t, r) {
    const n = e.type
    if (!e.render) {
        if (!t && xd && !n.render) {
            const i = n.template
            if (i) {
                const { isCustomElement: s, compilerOptions: o } = e.appContext.config,
                    { delimiters: a, compilerOptions: l } = n,
                    u = Xt(Xt({ isCustomElement: s, delimiters: a }, o), l)
                n.render = xd(i, u)
            }
        }
        e.render = n.render || zr
    }
    bi(e), Gs(), Uy(e), Ys(), gi()
}
function b1(e) {
    return new Proxy(e.attrs, {
        get(t, r) {
            return Ar(e, "get", "$attrs"), t[r]
        },
    })
}
function og(e) {
    const t = (n) => {
        e.exposed = n || {}
    }
    let r
    return {
        get attrs() {
            return r || (r = b1(e))
        },
        slots: e.slots,
        emit: e.emit,
        expose: t,
    }
}
function _c(e) {
    if (e.exposed)
        return (
            e.exposeProxy ||
            (e.exposeProxy = new Proxy($p(Sp(e.exposed)), {
                get(t, r) {
                    if (r in t) return t[r]
                    if (r in Xa) return Xa[r](e)
                },
            }))
        )
}
function y1(e) {
    return (Re(e) && e.displayName) || e.name
}
function _1(e) {
    return Re(e) && "__vccOpts" in e
}
const P = (e, t) => py(e, t, jo)
function mI() {
    return w1().slots
}
function w1() {
    const e = Tl()
    return e.setupContext || (e.setupContext = og(e))
}
function vI(e) {
    const t = Tl()
    let r = e()
    return (
        gi(),
        Xf(r) &&
            (r = r.catch((n) => {
                throw (bi(t), n)
            })),
        [r, () => bi(t)]
    )
}
function Ae(e, t, r) {
    const n = arguments.length
    return n === 2
        ? Dt(t) && !Oe(t)
            ? zo(t)
                ? Rt(e, null, [t])
                : Rt(e, t)
            : Rt(e, null, t)
        : (n > 3 ? (r = Array.prototype.slice.call(arguments, 2)) : n === 3 && zo(r) && (r = [r]), Rt(e, t, r))
}
const E1 = "3.2.30",
    A1 = "http://www.w3.org/2000/svg",
    Wi = typeof document != "undefined" ? document : null,
    Cd = Wi && Wi.createElement("template"),
    S1 = {
        insert: (e, t, r) => {
            t.insertBefore(e, r || null)
        },
        remove: (e) => {
            const t = e.parentNode
            t && t.removeChild(e)
        },
        createElement: (e, t, r, n) => {
            const i = t ? Wi.createElementNS(A1, e) : Wi.createElement(e, r ? { is: r } : void 0)
            return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i
        },
        createText: (e) => Wi.createTextNode(e),
        createComment: (e) => Wi.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => Wi.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        cloneNode(e) {
            const t = e.cloneNode(!0)
            return "_value" in e && (t._value = e._value), t
        },
        insertStaticContent(e, t, r, n, i, s) {
            const o = r ? r.previousSibling : t.lastChild
            if (i && (i === s || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), r), !(i === s || !(i = i.nextSibling)); );
            else {
                Cd.innerHTML = n ? `<svg>${e}</svg>` : e
                const a = Cd.content
                if (n) {
                    const l = a.firstChild
                    for (; l.firstChild; ) a.appendChild(l.firstChild)
                    a.removeChild(l)
                }
                t.insertBefore(a, r)
            }
            return [o ? o.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
        },
    }
function T1(e, t, r) {
    const n = e._vtc
    n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : (e.className = t)
}
function x1(e, t, r) {
    const n = e.style,
        i = Pt(r)
    if (r && !i) {
        for (const s in r) cf(n, s, r[s])
        if (t && !Pt(t)) for (const s in t) r[s] == null && cf(n, s, "")
    } else {
        const s = n.display
        i ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = s)
    }
}
const $d = /\s*!important$/
function cf(e, t, r) {
    if (Oe(r)) r.forEach((n) => cf(e, t, n))
    else if (t.startsWith("--")) e.setProperty(t, r)
    else {
        const n = C1(e, t)
        $d.test(r) ? e.setProperty(Ks(n), r.replace($d, ""), "important") : (e[n] = r)
    }
}
const Nd = ["Webkit", "Moz", "ms"],
    cu = {}
function C1(e, t) {
    const r = cu[t]
    if (r) return r
    let n = bn(t)
    if (n !== "filter" && n in e) return (cu[t] = n)
    n = yl(n)
    for (let i = 0; i < Nd.length; i++) {
        const s = Nd[i] + n
        if (s in e) return (cu[t] = s)
    }
    return t
}
const Bd = "http://www.w3.org/1999/xlink"
function $1(e, t, r, n, i) {
    if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Bd, t.slice(6, t.length)) : e.setAttributeNS(Bd, t, r)
    else {
        const s = Sb(t)
        r == null || (s && !op(r)) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : r)
    }
}
function N1(e, t, r, n, i, s, o) {
    if (t === "innerHTML" || t === "textContent") {
        n && o(n, i, s), (e[t] = r == null ? "" : r)
        return
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = r
        const a = r == null ? "" : r
        ;(e.value !== a || e.tagName === "OPTION") && (e.value = a), r == null && e.removeAttribute(t)
        return
    }
    if (r === "" || r == null) {
        const a = typeof e[t]
        if (a === "boolean") {
            e[t] = op(r)
            return
        } else if (r == null && a === "string") {
            ;(e[t] = ""), e.removeAttribute(t)
            return
        } else if (a === "number") {
            try {
                e[t] = 0
            } catch {}
            e.removeAttribute(t)
            return
        }
    }
    try {
        e[t] = r
    } catch {}
}
let Za = Date.now,
    ag = !1
if (typeof window != "undefined") {
    Za() > document.createEvent("Event").timeStamp && (Za = () => performance.now())
    const e = navigator.userAgent.match(/firefox\/(\d+)/i)
    ag = !!(e && Number(e[1]) <= 53)
}
let df = 0
const B1 = Promise.resolve(),
    k1 = () => {
        df = 0
    },
    O1 = () => df || (B1.then(k1), (df = Za()))
function I1(e, t, r, n) {
    e.addEventListener(t, r, n)
}
function P1(e, t, r, n) {
    e.removeEventListener(t, r, n)
}
function M1(e, t, r, n, i = null) {
    const s = e._vei || (e._vei = {}),
        o = s[t]
    if (n && o) o.value = n
    else {
        const [a, l] = R1(t)
        if (n) {
            const u = (s[t] = L1(n, i))
            I1(e, a, u, l)
        } else o && (P1(e, a, o, l), (s[t] = void 0))
    }
}
const kd = /(?:Once|Passive|Capture)$/
function R1(e) {
    let t
    if (kd.test(e)) {
        t = {}
        let r
        for (; (r = e.match(kd)); ) (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
    }
    return [Ks(e.slice(2)), t]
}
function L1(e, t) {
    const r = (n) => {
        const i = n.timeStamp || Za()
        ;(ag || i >= r.attached - 1) && Br(D1(n, r.value), t, 5, [n])
    }
    return (r.value = e), (r.attached = O1()), r
}
function D1(e, t) {
    if (Oe(t)) {
        const r = e.stopImmediatePropagation
        return (
            (e.stopImmediatePropagation = () => {
                r.call(e), (e._stopped = !0)
            }),
            t.map((n) => (i) => !i._stopped && n && n(i))
        )
    } else return t
}
const Od = /^on[a-z]/,
    F1 = (e, t, r, n, i = !1, s, o, a, l) => {
        t === "class"
            ? T1(e, n, i)
            : t === "style"
            ? x1(e, r, n)
            : ml(t)
            ? Gf(t) || M1(e, t, r, n, o)
            : (t[0] === "." ? ((t = t.slice(1)), !0) : t[0] === "^" ? ((t = t.slice(1)), !1) : V1(e, t, n, i))
            ? N1(e, t, n, s, o, a, l)
            : (t === "true-value" ? (e._trueValue = n) : t === "false-value" && (e._falseValue = n), $1(e, t, n, i))
    }
function V1(e, t, r, n) {
    return n
        ? !!(t === "innerHTML" || t === "textContent" || (t in e && Od.test(t) && Re(r)))
        : t === "spellcheck" ||
          t === "draggable" ||
          t === "form" ||
          (t === "list" && e.tagName === "INPUT") ||
          (t === "type" && e.tagName === "TEXTAREA") ||
          (Od.test(t) && Pt(r))
        ? !1
        : t in e
}
const ti = "transition",
    uo = "animation",
    wc = (e, { slots: t }) => Ae(Vp, q1(e), t)
wc.displayName = "Transition"
const lg = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
}
wc.props = Xt({}, Vp.props, lg)
const Li = (e, t = []) => {
        Oe(e) ? e.forEach((r) => r(...t)) : e && e(...t)
    },
    Id = (e) => (e ? (Oe(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function q1(e) {
    const t = {}
    for (const f in e) f in lg || (t[f] = e[f])
    if (e.css === !1) return t
    const {
            name: r = "v",
            type: n,
            duration: i,
            enterFromClass: s = `${r}-enter-from`,
            enterActiveClass: o = `${r}-enter-active`,
            enterToClass: a = `${r}-enter-to`,
            appearFromClass: l = s,
            appearActiveClass: u = o,
            appearToClass: c = a,
            leaveFromClass: d = `${r}-leave-from`,
            leaveActiveClass: h = `${r}-leave-active`,
            leaveToClass: v = `${r}-leave-to`,
        } = e,
        b = H1(i),
        _ = b && b[0],
        C = b && b[1],
        {
            onBeforeEnter: B,
            onEnter: O,
            onEnterCancelled: L,
            onLeave: V,
            onLeaveCancelled: H,
            onBeforeAppear: Q = B,
            onAppear: K = O,
            onAppearCancelled: ae = L,
        } = t,
        z = (f, g, y) => {
            us(f, g ? c : a), us(f, g ? u : o), y && y()
        },
        ye = (f, g) => {
            us(f, v), us(f, h), g && g()
        },
        S = (f) => (g, y) => {
            const w = f ? K : O,
                E = () => z(g, f, y)
            Li(w, [g, E]),
                Pd(() => {
                    us(g, f ? l : s), ri(g, f ? c : a), Id(w) || Md(g, n, _, E)
                })
        }
    return Xt(t, {
        onBeforeEnter(f) {
            Li(B, [f]), ri(f, s), ri(f, o)
        },
        onBeforeAppear(f) {
            Li(Q, [f]), ri(f, l), ri(f, u)
        },
        onEnter: S(!1),
        onAppear: S(!0),
        onLeave(f, g) {
            const y = () => ye(f, g)
            ri(f, d),
                j1(),
                ri(f, h),
                Pd(() => {
                    us(f, d), ri(f, v), Id(V) || Md(f, n, C, y)
                }),
                Li(V, [f, y])
        },
        onEnterCancelled(f) {
            z(f, !1), Li(L, [f])
        },
        onAppearCancelled(f) {
            z(f, !0), Li(ae, [f])
        },
        onLeaveCancelled(f) {
            ye(f), Li(H, [f])
        },
    })
}
function H1(e) {
    if (e == null) return null
    if (Dt(e)) return [du(e.enter), du(e.leave)]
    {
        const t = du(e)
        return [t, t]
    }
}
function du(e) {
    return Qf(e)
}
function ri(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set())).add(t)
}
function us(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.remove(n))
    const { _vtc: r } = e
    r && (r.delete(t), r.size || (e._vtc = void 0))
}
function Pd(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let U1 = 0
function Md(e, t, r, n) {
    const i = (e._endId = ++U1),
        s = () => {
            i === e._endId && n()
        }
    if (r) return setTimeout(s, r)
    const { type: o, timeout: a, propCount: l } = z1(e, t)
    if (!o) return n()
    const u = o + "end"
    let c = 0
    const d = () => {
            e.removeEventListener(u, h), s()
        },
        h = (v) => {
            v.target === e && ++c >= l && d()
        }
    setTimeout(() => {
        c < l && d()
    }, a + 1),
        e.addEventListener(u, h)
}
function z1(e, t) {
    const r = window.getComputedStyle(e),
        n = (b) => (r[b] || "").split(", "),
        i = n(ti + "Delay"),
        s = n(ti + "Duration"),
        o = Rd(i, s),
        a = n(uo + "Delay"),
        l = n(uo + "Duration"),
        u = Rd(a, l)
    let c = null,
        d = 0,
        h = 0
    t === ti
        ? o > 0 && ((c = ti), (d = o), (h = s.length))
        : t === uo
        ? u > 0 && ((c = uo), (d = u), (h = l.length))
        : ((d = Math.max(o, u)), (c = d > 0 ? (o > u ? ti : uo) : null), (h = c ? (c === ti ? s.length : l.length) : 0))
    const v = c === ti && /\b(transform|all)(,|$)/.test(r[ti + "Property"])
    return { type: c, timeout: d, propCount: h, hasTransform: v }
}
function Rd(e, t) {
    for (; e.length < t.length; ) e = e.concat(e)
    return Math.max(...t.map((r, n) => Ld(r) + Ld(e[n])))
}
function Ld(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function j1() {
    return document.body.offsetHeight
}
const W1 = ["ctrl", "shift", "alt", "meta"],
    K1 = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => "button" in e && e.button !== 0,
        middle: (e) => "button" in e && e.button !== 1,
        right: (e) => "button" in e && e.button !== 2,
        exact: (e, t) => W1.some((r) => e[`${r}Key`] && !t.includes(r)),
    },
    xl =
        (e, t) =>
        (r, ...n) => {
            for (let i = 0; i < t.length; i++) {
                const s = K1[t[i]]
                if (s && s(r, t)) return
            }
            return e(r, ...n)
        },
    G1 = Xt({ patchProp: F1 }, S1)
let Dd
function Y1() {
    return Dd || (Dd = r1(G1))
}
const bI = (...e) => {
    const t = Y1().createApp(...e),
        { mount: r } = t
    return (
        (t.mount = (n) => {
            const i = J1(n)
            if (!i) return
            const s = t._component
            !Re(s) && !s.render && !s.template && (s.template = i.innerHTML), (i.innerHTML = "")
            const o = r(i, !1, i instanceof SVGElement)
            return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
        }),
        t
    )
}
function J1(e) {
    return Pt(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.0.12
 * (c) 2021 Eduardo San Martin Morote
 * @license MIT
 */ const ug = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    Js = (e) => (ug ? Symbol(e) : "_vr_" + e),
    X1 = Js("rvlm"),
    Fd = Js("rvd"),
    Ec = Js("r"),
    Ac = Js("rl"),
    hf = Js("rvl"),
    bs = typeof window != "undefined"
function Z1(e) {
    return e.__esModule || (ug && e[Symbol.toStringTag] === "Module")
}
const it = Object.assign
function hu(e, t) {
    const r = {}
    for (const n in t) {
        const i = t[n]
        r[n] = Array.isArray(i) ? i.map(e) : e(i)
    }
    return r
}
const Oo = () => {},
    Q1 = /\/$/,
    e_ = (e) => e.replace(Q1, "")
function pu(e, t, r = "/") {
    let n,
        i = {},
        s = "",
        o = ""
    const a = t.indexOf("?"),
        l = t.indexOf("#", a > -1 ? a : 0)
    return (
        a > -1 && ((n = t.slice(0, a)), (s = t.slice(a + 1, l > -1 ? l : t.length)), (i = e(s))),
        l > -1 && ((n = n || t.slice(0, l)), (o = t.slice(l, t.length))),
        (n = i_(n != null ? n : t, r)),
        { fullPath: n + (s && "?") + s + o, path: n, query: i, hash: o }
    )
}
function t_(e, t) {
    const r = t.query ? e(t.query) : ""
    return t.path + (r && "?") + r + (t.hash || "")
}
function Vd(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function r_(e, t, r) {
    const n = t.matched.length - 1,
        i = r.matched.length - 1
    return n > -1 && n === i && Is(t.matched[n], r.matched[i]) && fg(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash
}
function Is(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function fg(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1
    for (const r in e) if (!n_(e[r], t[r])) return !1
    return !0
}
function n_(e, t) {
    return Array.isArray(e) ? qd(e, t) : Array.isArray(t) ? qd(t, e) : e === t
}
function qd(e, t) {
    return Array.isArray(t) ? e.length === t.length && e.every((r, n) => r === t[n]) : e.length === 1 && e[0] === t
}
function i_(e, t) {
    if (e.startsWith("/")) return e
    if (!e) return t
    const r = t.split("/"),
        n = e.split("/")
    let i = r.length - 1,
        s,
        o
    for (s = 0; s < n.length; s++)
        if (((o = n[s]), !(i === 1 || o === ".")))
            if (o === "..") i--
            else break
    return r.slice(0, i).join("/") + "/" + n.slice(s - (s === n.length ? 1 : 0)).join("/")
}
var Wo
;(function (e) {
    ;(e.pop = "pop"), (e.push = "push")
})(Wo || (Wo = {}))
var Io
;(function (e) {
    ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Io || (Io = {}))
function s_(e) {
    if (!e)
        if (bs) {
            const t = document.querySelector("base")
            ;(e = (t && t.getAttribute("href")) || "/"), (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
        } else e = "/"
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), e_(e)
}
const o_ = /^[^#]+#/
function a_(e, t) {
    return e.replace(o_, "#") + t
}
function l_(e, t) {
    const r = document.documentElement.getBoundingClientRect(),
        n = e.getBoundingClientRect()
    return { behavior: t.behavior, left: n.left - r.left - (t.left || 0), top: n.top - r.top - (t.top || 0) }
}
const Cl = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function u_(e) {
    let t
    if ("el" in e) {
        const r = e.el,
            n = typeof r == "string" && r.startsWith("#"),
            i = typeof r == "string" ? (n ? document.getElementById(r.slice(1)) : document.querySelector(r)) : r
        if (!i) return
        t = l_(i, e)
    } else t = e
    "scrollBehavior" in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}
function Hd(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const pf = new Map()
function f_(e, t) {
    pf.set(e, t)
}
function c_(e) {
    const t = pf.get(e)
    return pf.delete(e), t
}
let d_ = () => location.protocol + "//" + location.host
function cg(e, t) {
    const { pathname: r, search: n, hash: i } = t,
        s = e.indexOf("#")
    if (s > -1) {
        let a = i.includes(e.slice(s)) ? e.slice(s).length : 1,
            l = i.slice(a)
        return l[0] !== "/" && (l = "/" + l), Vd(l, "")
    }
    return Vd(r, e) + n + i
}
function h_(e, t, r, n) {
    let i = [],
        s = [],
        o = null
    const a = ({ state: h }) => {
        const v = cg(e, location),
            b = r.value,
            _ = t.value
        let C = 0
        if (h) {
            if (((r.value = v), (t.value = h), o && o === b)) {
                o = null
                return
            }
            C = _ ? h.position - _.position : 0
        } else n(v)
        i.forEach((B) => {
            B(r.value, b, { delta: C, type: Wo.pop, direction: C ? (C > 0 ? Io.forward : Io.back) : Io.unknown })
        })
    }
    function l() {
        o = r.value
    }
    function u(h) {
        i.push(h)
        const v = () => {
            const b = i.indexOf(h)
            b > -1 && i.splice(b, 1)
        }
        return s.push(v), v
    }
    function c() {
        const { history: h } = window
        !h.state || h.replaceState(it({}, h.state, { scroll: Cl() }), "")
    }
    function d() {
        for (const h of s) h()
        ;(s = []), window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c), { pauseListeners: l, listen: u, destroy: d }
}
function Ud(e, t, r, n = !1, i = !1) {
    return { back: e, current: t, forward: r, replaced: n, position: window.history.length, scroll: i ? Cl() : null }
}
function p_(e) {
    const { history: t, location: r } = window,
        n = { value: cg(e, r) },
        i = { value: t.state }
    i.value || s(n.value, { back: null, current: n.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0)
    function s(l, u, c) {
        const d = e.indexOf("#"),
            h = d > -1 ? (r.host && document.querySelector("base") ? e : e.slice(d)) + l : d_() + e + l
        try {
            t[c ? "replaceState" : "pushState"](u, "", h), (i.value = u)
        } catch (v) {
            console.error(v), r[c ? "replace" : "assign"](h)
        }
    }
    function o(l, u) {
        const c = it({}, t.state, Ud(i.value.back, l, i.value.forward, !0), u, { position: i.value.position })
        s(l, c, !0), (n.value = l)
    }
    function a(l, u) {
        const c = it({}, i.value, t.state, { forward: l, scroll: Cl() })
        s(c.current, c, !0)
        const d = it({}, Ud(n.value, l, null), { position: c.position + 1 }, u)
        s(l, d, !1), (n.value = l)
    }
    return { location: n, state: i, push: a, replace: o }
}
function g_(e) {
    e = s_(e)
    const t = p_(e),
        r = h_(e, t.state, t.location, t.replace)
    function n(s, o = !0) {
        o || r.pauseListeners(), history.go(s)
    }
    const i = it({ location: "", base: e, go: n, createHref: a_.bind(null, e) }, t, r)
    return (
        Object.defineProperty(i, "location", { enumerable: !0, get: () => t.location.value }),
        Object.defineProperty(i, "state", { enumerable: !0, get: () => t.state.value }),
        i
    )
}
function yI(e) {
    return (e = location.host ? e || location.pathname + location.search : ""), e.includes("#") || (e += "#"), g_(e)
}
function m_(e) {
    return typeof e == "string" || (e && typeof e == "object")
}
function dg(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const ni = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 },
    hg = Js("nf")
var zd
;(function (e) {
    ;(e[(e.aborted = 4)] = "aborted"), (e[(e.cancelled = 8)] = "cancelled"), (e[(e.duplicated = 16)] = "duplicated")
})(zd || (zd = {}))
function Ps(e, t) {
    return it(new Error(), { type: e, [hg]: !0 }, t)
}
function Di(e, t) {
    return e instanceof Error && hg in e && (t == null || !!(e.type & t))
}
const jd = "[^/]+?",
    v_ = { sensitive: !1, strict: !1, start: !0, end: !0 },
    b_ = /[.+*?^${}()[\]/\\]/g
function y_(e, t) {
    const r = it({}, v_, t),
        n = []
    let i = r.start ? "^" : ""
    const s = []
    for (const u of e) {
        const c = u.length ? [] : [90]
        r.strict && !u.length && (i += "/")
        for (let d = 0; d < u.length; d++) {
            const h = u[d]
            let v = 40 + (r.sensitive ? 0.25 : 0)
            if (h.type === 0) d || (i += "/"), (i += h.value.replace(b_, "\\$&")), (v += 40)
            else if (h.type === 1) {
                const { value: b, repeatable: _, optional: C, regexp: B } = h
                s.push({ name: b, repeatable: _, optional: C })
                const O = B || jd
                if (O !== jd) {
                    v += 10
                    try {
                        new RegExp(`(${O})`)
                    } catch (V) {
                        throw new Error(`Invalid custom RegExp for param "${b}" (${O}): ` + V.message)
                    }
                }
                let L = _ ? `((?:${O})(?:/(?:${O}))*)` : `(${O})`
                d || (L = C && u.length < 2 ? `(?:/${L})` : "/" + L),
                    C && (L += "?"),
                    (i += L),
                    (v += 20),
                    C && (v += -8),
                    _ && (v += -20),
                    O === ".*" && (v += -50)
            }
            c.push(v)
        }
        n.push(c)
    }
    if (r.strict && r.end) {
        const u = n.length - 1
        n[u][n[u].length - 1] += 0.7000000000000001
    }
    r.strict || (i += "/?"), r.end ? (i += "$") : r.strict && (i += "(?:/|$)")
    const o = new RegExp(i, r.sensitive ? "" : "i")
    function a(u) {
        const c = u.match(o),
            d = {}
        if (!c) return null
        for (let h = 1; h < c.length; h++) {
            const v = c[h] || "",
                b = s[h - 1]
            d[b.name] = v && b.repeatable ? v.split("/") : v
        }
        return d
    }
    function l(u) {
        let c = "",
            d = !1
        for (const h of e) {
            ;(!d || !c.endsWith("/")) && (c += "/"), (d = !1)
            for (const v of h)
                if (v.type === 0) c += v.value
                else if (v.type === 1) {
                    const { value: b, repeatable: _, optional: C } = v,
                        B = b in u ? u[b] : ""
                    if (Array.isArray(B) && !_) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`)
                    const O = Array.isArray(B) ? B.join("/") : B
                    if (!O)
                        if (C) h.length < 2 && (c.endsWith("/") ? (c = c.slice(0, -1)) : (d = !0))
                        else throw new Error(`Missing required param "${b}"`)
                    c += O
                }
        }
        return c
    }
    return { re: o, score: n, keys: s, parse: a, stringify: l }
}
function __(e, t) {
    let r = 0
    for (; r < e.length && r < t.length; ) {
        const n = t[r] - e[r]
        if (n) return n
        r++
    }
    return e.length < t.length
        ? e.length === 1 && e[0] === 40 + 40
            ? -1
            : 1
        : e.length > t.length
        ? t.length === 1 && t[0] === 40 + 40
            ? 1
            : -1
        : 0
}
function w_(e, t) {
    let r = 0
    const n = e.score,
        i = t.score
    for (; r < n.length && r < i.length; ) {
        const s = __(n[r], i[r])
        if (s) return s
        r++
    }
    return i.length - n.length
}
const E_ = { type: 0, value: "" },
    A_ = /[a-zA-Z0-9_]/
function S_(e) {
    if (!e) return [[]]
    if (e === "/") return [[E_]]
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
    function t(v) {
        throw new Error(`ERR (${r})/"${u}": ${v}`)
    }
    let r = 0,
        n = r
    const i = []
    let s
    function o() {
        s && i.push(s), (s = [])
    }
    let a = 0,
        l,
        u = "",
        c = ""
    function d() {
        !u ||
            (r === 0
                ? s.push({ type: 0, value: u })
                : r === 1 || r === 2 || r === 3
                ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
                  s.push({ type: 1, value: u, regexp: c, repeatable: l === "*" || l === "+", optional: l === "*" || l === "?" }))
                : t("Invalid state to consume buffer"),
            (u = ""))
    }
    function h() {
        u += l
    }
    for (; a < e.length; ) {
        if (((l = e[a++]), l === "\\" && r !== 2)) {
            ;(n = r), (r = 4)
            continue
        }
        switch (r) {
            case 0:
                l === "/" ? (u && d(), o()) : l === ":" ? (d(), (r = 1)) : h()
                break
            case 4:
                h(), (r = n)
                break
            case 1:
                l === "(" ? (r = 2) : A_.test(l) ? h() : (d(), (r = 0), l !== "*" && l !== "?" && l !== "+" && a--)
                break
            case 2:
                l === ")" ? (c[c.length - 1] == "\\" ? (c = c.slice(0, -1) + l) : (r = 3)) : (c += l)
                break
            case 3:
                d(), (r = 0), l !== "*" && l !== "?" && l !== "+" && a--, (c = "")
                break
            default:
                t("Unknown state")
                break
        }
    }
    return r === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), o(), i
}
function T_(e, t, r) {
    const n = y_(S_(e.path), r),
        i = it(n, { record: e, parent: t, children: [], alias: [] })
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function x_(e, t) {
    const r = [],
        n = new Map()
    t = Kd({ strict: !1, end: !0, sensitive: !1 }, t)
    function i(c) {
        return n.get(c)
    }
    function s(c, d, h) {
        const v = !h,
            b = $_(c)
        b.aliasOf = h && h.record
        const _ = Kd(t, c),
            C = [b]
        if ("alias" in c) {
            const L = typeof c.alias == "string" ? [c.alias] : c.alias
            for (const V of L) C.push(it({}, b, { components: h ? h.record.components : b.components, path: V, aliasOf: h ? h.record : b }))
        }
        let B, O
        for (const L of C) {
            const { path: V } = L
            if (d && V[0] !== "/") {
                const H = d.record.path,
                    Q = H[H.length - 1] === "/" ? "" : "/"
                L.path = d.record.path + (V && Q + V)
            }
            if (
                ((B = T_(L, d, _)),
                h ? h.alias.push(B) : ((O = O || B), O !== B && O.alias.push(B), v && c.name && !Wd(B) && o(c.name)),
                "children" in b)
            ) {
                const H = b.children
                for (let Q = 0; Q < H.length; Q++) s(H[Q], B, h && h.children[Q])
            }
            ;(h = h || B), l(B)
        }
        return O
            ? () => {
                  o(O)
              }
            : Oo
    }
    function o(c) {
        if (dg(c)) {
            const d = n.get(c)
            d && (n.delete(c), r.splice(r.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
        } else {
            const d = r.indexOf(c)
            d > -1 && (r.splice(d, 1), c.record.name && n.delete(c.record.name), c.children.forEach(o), c.alias.forEach(o))
        }
    }
    function a() {
        return r
    }
    function l(c) {
        let d = 0
        for (; d < r.length && w_(c, r[d]) >= 0; ) d++
        r.splice(d, 0, c), c.record.name && !Wd(c) && n.set(c.record.name, c)
    }
    function u(c, d) {
        let h,
            v = {},
            b,
            _
        if ("name" in c && c.name) {
            if (((h = n.get(c.name)), !h)) throw Ps(1, { location: c })
            ;(_ = h.record.name),
                (v = it(
                    C_(
                        d.params,
                        h.keys.filter((O) => !O.optional).map((O) => O.name)
                    ),
                    c.params
                )),
                (b = h.stringify(v))
        } else if ("path" in c) (b = c.path), (h = r.find((O) => O.re.test(b))), h && ((v = h.parse(b)), (_ = h.record.name))
        else {
            if (((h = d.name ? n.get(d.name) : r.find((O) => O.re.test(d.path))), !h)) throw Ps(1, { location: c, currentLocation: d })
            ;(_ = h.record.name), (v = it({}, d.params, c.params)), (b = h.stringify(v))
        }
        const C = []
        let B = h
        for (; B; ) C.unshift(B.record), (B = B.parent)
        return { name: _, path: b, params: v, matched: C, meta: B_(C) }
    }
    return e.forEach((c) => s(c)), { addRoute: s, resolve: u, removeRoute: o, getRoutes: a, getRecordMatcher: i }
}
function C_(e, t) {
    const r = {}
    for (const n of t) n in e && (r[n] = e[n])
    return r
}
function $_(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: N_(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: "components" in e ? e.components || {} : { default: e.component },
    }
}
function N_(e) {
    const t = {},
        r = e.props || !1
    if ("component" in e) t.default = r
    else for (const n in e.components) t[n] = typeof r == "boolean" ? r : r[n]
    return t
}
function Wd(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0
        e = e.parent
    }
    return !1
}
function B_(e) {
    return e.reduce((t, r) => it(t, r.meta), {})
}
function Kd(e, t) {
    const r = {}
    for (const n in e) r[n] = n in t ? t[n] : e[n]
    return r
}
const pg = /#/g,
    k_ = /&/g,
    O_ = /\//g,
    I_ = /=/g,
    P_ = /\?/g,
    gg = /\+/g,
    M_ = /%5B/g,
    R_ = /%5D/g,
    mg = /%5E/g,
    L_ = /%60/g,
    vg = /%7B/g,
    D_ = /%7C/g,
    bg = /%7D/g,
    F_ = /%20/g
function Sc(e) {
    return encodeURI("" + e)
        .replace(D_, "|")
        .replace(M_, "[")
        .replace(R_, "]")
}
function V_(e) {
    return Sc(e).replace(vg, "{").replace(bg, "}").replace(mg, "^")
}
function gf(e) {
    return Sc(e)
        .replace(gg, "%2B")
        .replace(F_, "+")
        .replace(pg, "%23")
        .replace(k_, "%26")
        .replace(L_, "`")
        .replace(vg, "{")
        .replace(bg, "}")
        .replace(mg, "^")
}
function q_(e) {
    return gf(e).replace(I_, "%3D")
}
function H_(e) {
    return Sc(e).replace(pg, "%23").replace(P_, "%3F")
}
function U_(e) {
    return e == null ? "" : H_(e).replace(O_, "%2F")
}
function Qa(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
function z_(e) {
    const t = {}
    if (e === "" || e === "?") return t
    const n = (e[0] === "?" ? e.slice(1) : e).split("&")
    for (let i = 0; i < n.length; ++i) {
        const s = n[i].replace(gg, " "),
            o = s.indexOf("="),
            a = Qa(o < 0 ? s : s.slice(0, o)),
            l = o < 0 ? null : Qa(s.slice(o + 1))
        if (a in t) {
            let u = t[a]
            Array.isArray(u) || (u = t[a] = [u]), u.push(l)
        } else t[a] = l
    }
    return t
}
function Gd(e) {
    let t = ""
    for (let r in e) {
        const n = e[r]
        if (((r = q_(r)), n == null)) {
            n !== void 0 && (t += (t.length ? "&" : "") + r)
            continue
        }
        ;(Array.isArray(n) ? n.map((s) => s && gf(s)) : [n && gf(n)]).forEach((s) => {
            s !== void 0 && ((t += (t.length ? "&" : "") + r), s != null && (t += "=" + s))
        })
    }
    return t
}
function j_(e) {
    const t = {}
    for (const r in e) {
        const n = e[r]
        n !== void 0 && (t[r] = Array.isArray(n) ? n.map((i) => (i == null ? null : "" + i)) : n == null ? n : "" + n)
    }
    return t
}
function fo() {
    let e = []
    function t(n) {
        return (
            e.push(n),
            () => {
                const i = e.indexOf(n)
                i > -1 && e.splice(i, 1)
            }
        )
    }
    function r() {
        e = []
    }
    return { add: t, list: () => e, reset: r }
}
function ui(e, t, r, n, i) {
    const s = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || [])
    return () =>
        new Promise((o, a) => {
            const l = (d) => {
                    d === !1
                        ? a(Ps(4, { from: r, to: t }))
                        : d instanceof Error
                        ? a(d)
                        : m_(d)
                        ? a(Ps(2, { from: t, to: d }))
                        : (s && n.enterCallbacks[i] === s && typeof d == "function" && s.push(d), o())
                },
                u = e.call(n && n.instances[i], t, r, l)
            let c = Promise.resolve(u)
            e.length < 3 && (c = c.then(l)), c.catch((d) => a(d))
        })
}
function gu(e, t, r, n) {
    const i = []
    for (const s of e)
        for (const o in s.components) {
            let a = s.components[o]
            if (!(t !== "beforeRouteEnter" && !s.instances[o]))
                if (W_(a)) {
                    const u = (a.__vccOpts || a)[t]
                    u && i.push(ui(u, r, n, s, o))
                } else {
                    let l = a()
                    i.push(() =>
                        l.then((u) => {
                            if (!u) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`))
                            const c = Z1(u) ? u.default : u
                            s.components[o] = c
                            const h = (c.__vccOpts || c)[t]
                            return h && ui(h, r, n, s, o)()
                        })
                    )
                }
        }
    return i
}
function W_(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}
function Yd(e) {
    const t = Jt(Ec),
        r = Jt(Ac),
        n = P(() => t.resolve(Co(e.to))),
        i = P(() => {
            const { matched: l } = n.value,
                { length: u } = l,
                c = l[u - 1],
                d = r.matched
            if (!c || !d.length) return -1
            const h = d.findIndex(Is.bind(null, c))
            if (h > -1) return h
            const v = Jd(l[u - 2])
            return u > 1 && Jd(c) === v && d[d.length - 1].path !== v ? d.findIndex(Is.bind(null, l[u - 2])) : h
        }),
        s = P(() => i.value > -1 && J_(r.params, n.value.params)),
        o = P(() => i.value > -1 && i.value === r.matched.length - 1 && fg(r.params, n.value.params))
    function a(l = {}) {
        return Y_(l) ? t[Co(e.replace) ? "replace" : "push"](Co(e.to)).catch(Oo) : Promise.resolve()
    }
    return { route: n, href: P(() => n.value.href), isActive: s, isExactActive: o, navigate: a }
}
const K_ = de({
        name: "RouterLink",
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: "page" },
        },
        useLink: Yd,
        setup(e, { slots: t }) {
            const r = yn(Yd(e)),
                { options: n } = Jt(Ec),
                i = P(() => ({
                    [Xd(e.activeClass, n.linkActiveClass, "router-link-active")]: r.isActive,
                    [Xd(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive,
                }))
            return () => {
                const s = t.default && t.default(r)
                return e.custom
                    ? s
                    : Ae(
                          "a",
                          { "aria-current": r.isExactActive ? e.ariaCurrentValue : null, href: r.href, onClick: r.navigate, class: i.value },
                          s
                      )
            }
        },
    }),
    G_ = K_
function Y_(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target")
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}
function J_(e, t) {
    for (const r in t) {
        const n = t[r],
            i = e[r]
        if (typeof n == "string") {
            if (n !== i) return !1
        } else if (!Array.isArray(i) || i.length !== n.length || n.some((s, o) => s !== i[o])) return !1
    }
    return !0
}
function Jd(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const Xd = (e, t, r) => (e != null ? e : t != null ? t : r),
    X_ = de({
        name: "RouterView",
        inheritAttrs: !1,
        props: { name: { type: String, default: "default" }, route: Object },
        setup(e, { attrs: t, slots: r }) {
            const n = Jt(hf),
                i = P(() => e.route || n.value),
                s = Jt(Fd, 0),
                o = P(() => i.value.matched[s])
            dn(Fd, s + 1), dn(X1, o), dn(hf, i)
            const a = Ve()
            return (
                Tt(
                    () => [a.value, o.value, e.name],
                    ([l, u, c], [d, h, v]) => {
                        u &&
                            ((u.instances[c] = l),
                            h &&
                                h !== u &&
                                l &&
                                l === d &&
                                (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
                                u.updateGuards.size || (u.updateGuards = h.updateGuards))),
                            l && u && (!h || !Is(u, h) || !d) && (u.enterCallbacks[c] || []).forEach((b) => b(l))
                    },
                    { flush: "post" }
                ),
                () => {
                    const l = i.value,
                        u = o.value,
                        c = u && u.components[e.name],
                        d = e.name
                    if (!c) return Zd(r.default, { Component: c, route: l })
                    const h = u.props[e.name],
                        v = h ? (h === !0 ? l.params : typeof h == "function" ? h(l) : h) : null,
                        _ = Ae(
                            c,
                            it({}, v, t, {
                                onVnodeUnmounted: (C) => {
                                    C.component.isUnmounted && (u.instances[d] = null)
                                },
                                ref: a,
                            })
                        )
                    return Zd(r.default, { Component: _, route: l }) || _
                }
            )
        },
    })
function Zd(e, t) {
    if (!e) return null
    const r = e(t)
    return r.length === 1 ? r[0] : r
}
const Z_ = X_
function _I(e) {
    const t = x_(e.routes, e),
        r = e.parseQuery || z_,
        n = e.stringifyQuery || Gd,
        i = e.history,
        s = fo(),
        o = fo(),
        a = fo(),
        l = fy(ni)
    let u = ni
    bs && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual")
    const c = hu.bind(null, (m) => "" + m),
        d = hu.bind(null, U_),
        h = hu.bind(null, Qa)
    function v(m, M) {
        let I, F
        return dg(m) ? ((I = t.getRecordMatcher(m)), (F = M)) : (F = m), t.addRoute(F, I)
    }
    function b(m) {
        const M = t.getRecordMatcher(m)
        M && t.removeRoute(M)
    }
    function _() {
        return t.getRoutes().map((m) => m.record)
    }
    function C(m) {
        return !!t.getRecordMatcher(m)
    }
    function B(m, M) {
        if (((M = it({}, M || l.value)), typeof m == "string")) {
            const G = pu(r, m, M.path),
                T = t.resolve({ path: G.path }, M),
                N = i.createHref(G.fullPath)
            return it(G, T, { params: h(T.params), hash: Qa(G.hash), redirectedFrom: void 0, href: N })
        }
        let I
        if ("path" in m) I = it({}, m, { path: pu(r, m.path, M.path).path })
        else {
            const G = it({}, m.params)
            for (const T in G) G[T] == null && delete G[T]
            ;(I = it({}, m, { params: d(m.params) })), (M.params = d(M.params))
        }
        const F = t.resolve(I, M),
            j = m.hash || ""
        F.params = c(h(F.params))
        const X = t_(n, it({}, m, { hash: V_(j), path: F.path })),
            oe = i.createHref(X)
        return it({ fullPath: X, hash: j, query: n === Gd ? j_(m.query) : m.query || {} }, F, { redirectedFrom: void 0, href: oe })
    }
    function O(m) {
        return typeof m == "string" ? pu(r, m, l.value.path) : it({}, m)
    }
    function L(m, M) {
        if (u !== m) return Ps(8, { from: M, to: m })
    }
    function V(m) {
        return K(m)
    }
    function H(m) {
        return V(it(O(m), { replace: !0 }))
    }
    function Q(m) {
        const M = m.matched[m.matched.length - 1]
        if (M && M.redirect) {
            const { redirect: I } = M
            let F = typeof I == "function" ? I(m) : I
            return (
                typeof F == "string" && ((F = F.includes("?") || F.includes("#") ? (F = O(F)) : { path: F }), (F.params = {})),
                it({ query: m.query, hash: m.hash, params: m.params }, F)
            )
        }
    }
    function K(m, M) {
        const I = (u = B(m)),
            F = l.value,
            j = m.state,
            X = m.force,
            oe = m.replace === !0,
            G = Q(I)
        if (G) return K(it(O(G), { state: j, force: X, replace: oe }), M || I)
        const T = I
        T.redirectedFrom = M
        let N
        return (
            !X && r_(n, F, I) && ((N = Ps(16, { to: T, from: F })), p(F, F, !0, !1)),
            (N ? Promise.resolve(N) : z(T, F))
                .catch((R) => (Di(R) ? R : $(R, T, F)))
                .then((R) => {
                    if (R) {
                        if (Di(R, 2)) return K(it(O(R.to), { state: j, force: X, replace: oe }), M || T)
                    } else R = S(T, F, !0, oe, j)
                    return ye(T, F, R), R
                })
        )
    }
    function ae(m, M) {
        const I = L(m, M)
        return I ? Promise.reject(I) : Promise.resolve()
    }
    function z(m, M) {
        let I
        const [F, j, X] = Q_(m, M)
        I = gu(F.reverse(), "beforeRouteLeave", m, M)
        for (const G of F)
            G.leaveGuards.forEach((T) => {
                I.push(ui(T, m, M))
            })
        const oe = ae.bind(null, m, M)
        return (
            I.push(oe),
            fs(I)
                .then(() => {
                    I = []
                    for (const G of s.list()) I.push(ui(G, m, M))
                    return I.push(oe), fs(I)
                })
                .then(() => {
                    I = gu(j, "beforeRouteUpdate", m, M)
                    for (const G of j)
                        G.updateGuards.forEach((T) => {
                            I.push(ui(T, m, M))
                        })
                    return I.push(oe), fs(I)
                })
                .then(() => {
                    I = []
                    for (const G of m.matched)
                        if (G.beforeEnter && !M.matched.includes(G))
                            if (Array.isArray(G.beforeEnter)) for (const T of G.beforeEnter) I.push(ui(T, m, M))
                            else I.push(ui(G.beforeEnter, m, M))
                    return I.push(oe), fs(I)
                })
                .then(() => (m.matched.forEach((G) => (G.enterCallbacks = {})), (I = gu(X, "beforeRouteEnter", m, M)), I.push(oe), fs(I)))
                .then(() => {
                    I = []
                    for (const G of o.list()) I.push(ui(G, m, M))
                    return I.push(oe), fs(I)
                })
                .catch((G) => (Di(G, 8) ? G : Promise.reject(G)))
        )
    }
    function ye(m, M, I) {
        for (const F of a.list()) F(m, M, I)
    }
    function S(m, M, I, F, j) {
        const X = L(m, M)
        if (X) return X
        const oe = M === ni,
            G = bs ? history.state : {}
        I && (F || oe ? i.replace(m.fullPath, it({ scroll: oe && G && G.scroll }, j)) : i.push(m.fullPath, j)),
            (l.value = m),
            p(m, M, I, oe),
            A()
    }
    let f
    function g() {
        f = i.listen((m, M, I) => {
            const F = B(m),
                j = Q(F)
            if (j) {
                K(it(j, { replace: !0 }), F).catch(Oo)
                return
            }
            u = F
            const X = l.value
            bs && f_(Hd(X.fullPath, I.delta), Cl()),
                z(F, X)
                    .catch((oe) =>
                        Di(oe, 12)
                            ? oe
                            : Di(oe, 2)
                            ? (K(oe.to, F)
                                  .then((G) => {
                                      Di(G, 20) && !I.delta && I.type === Wo.pop && i.go(-1, !1)
                                  })
                                  .catch(Oo),
                              Promise.reject())
                            : (I.delta && i.go(-I.delta, !1), $(oe, F, X))
                    )
                    .then((oe) => {
                        ;(oe = oe || S(F, X, !1)),
                            oe && (I.delta ? i.go(-I.delta, !1) : I.type === Wo.pop && Di(oe, 20) && i.go(-1, !1)),
                            ye(F, X, oe)
                    })
                    .catch(Oo)
        })
    }
    let y = fo(),
        w = fo(),
        E
    function $(m, M, I) {
        A(m)
        const F = w.list()
        return F.length ? F.forEach((j) => j(m, M, I)) : console.error(m), Promise.reject(m)
    }
    function k() {
        return E && l.value !== ni
            ? Promise.resolve()
            : new Promise((m, M) => {
                  y.add([m, M])
              })
    }
    function A(m) {
        E || ((E = !0), g(), y.list().forEach(([M, I]) => (m ? I(m) : M())), y.reset())
    }
    function p(m, M, I, F) {
        const { scrollBehavior: j } = e
        if (!bs || !j) return Promise.resolve()
        const X = (!I && c_(Hd(m.fullPath, 0))) || ((F || !I) && history.state && history.state.scroll) || null
        return cn()
            .then(() => j(m, M, X))
            .then((oe) => oe && u_(oe))
            .catch((oe) => $(oe, m, M))
    }
    const x = (m) => i.go(m)
    let ee
    const fe = new Set()
    return {
        currentRoute: l,
        addRoute: v,
        removeRoute: b,
        hasRoute: C,
        getRoutes: _,
        resolve: B,
        options: e,
        push: V,
        replace: H,
        go: x,
        back: () => x(-1),
        forward: () => x(1),
        beforeEach: s.add,
        beforeResolve: o.add,
        afterEach: a.add,
        onError: w.add,
        isReady: k,
        install(m) {
            const M = this
            m.component("RouterLink", G_),
                m.component("RouterView", Z_),
                (m.config.globalProperties.$router = M),
                Object.defineProperty(m.config.globalProperties, "$route", { enumerable: !0, get: () => Co(l) }),
                bs && !ee && l.value === ni && ((ee = !0), V(i.location).catch((j) => {}))
            const I = {}
            for (const j in ni) I[j] = P(() => l.value[j])
            m.provide(Ec, M), m.provide(Ac, yn(I)), m.provide(hf, l)
            const F = m.unmount
            fe.add(m),
                (m.unmount = function () {
                    fe.delete(m), fe.size < 1 && ((u = ni), f && f(), (l.value = ni), (ee = !1), (E = !1)), F()
                })
        },
    }
}
function fs(e) {
    return e.reduce((t, r) => t.then(() => r()), Promise.resolve())
}
function Q_(e, t) {
    const r = [],
        n = [],
        i = [],
        s = Math.max(t.matched.length, e.matched.length)
    for (let o = 0; o < s; o++) {
        const a = t.matched[o]
        a && (e.matched.find((u) => Is(u, a)) ? n.push(a) : r.push(a))
        const l = e.matched[o]
        l && (t.matched.find((u) => Is(u, l)) || i.push(l))
    }
    return [r, n, i]
}
function wI() {
    return Jt(Ac)
}
var yg =
        typeof globalThis != "undefined"
            ? globalThis
            : typeof window != "undefined"
            ? window
            : typeof global != "undefined"
            ? global
            : typeof self != "undefined"
            ? self
            : {},
    _g = { exports: {} }
;(function (e) {
    ;(function (t, r) {
        function n(S, f) {
            if (!S) throw new Error(f || "Assertion failed")
        }
        function i(S, f) {
            S.super_ = f
            var g = function () {}
            ;(g.prototype = f.prototype), (S.prototype = new g()), (S.prototype.constructor = S)
        }
        function s(S, f, g) {
            if (s.isBN(S)) return S
            ;(this.negative = 0),
                (this.words = null),
                (this.length = 0),
                (this.red = null),
                S !== null && ((f === "le" || f === "be") && ((g = f), (f = 10)), this._init(S || 0, f || 10, g || "be"))
        }
        typeof t == "object" ? (t.exports = s) : (r.BN = s), (s.BN = s), (s.wordSize = 26)
        var o
        try {
            typeof window != "undefined" && typeof window.Buffer != "undefined" ? (o = window.Buffer) : (o = require("buffer").Buffer)
        } catch {}
        ;(s.isBN = function (f) {
            return f instanceof s ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === s.wordSize && Array.isArray(f.words)
        }),
            (s.max = function (f, g) {
                return f.cmp(g) > 0 ? f : g
            }),
            (s.min = function (f, g) {
                return f.cmp(g) < 0 ? f : g
            }),
            (s.prototype._init = function (f, g, y) {
                if (typeof f == "number") return this._initNumber(f, g, y)
                if (typeof f == "object") return this._initArray(f, g, y)
                g === "hex" && (g = 16), n(g === (g | 0) && g >= 2 && g <= 36), (f = f.toString().replace(/\s+/g, ""))
                var w = 0
                f[0] === "-" && (w++, (this.negative = 1)),
                    w < f.length &&
                        (g === 16 ? this._parseHex(f, w, y) : (this._parseBase(f, g, w), y === "le" && this._initArray(this.toArray(), g, y)))
            }),
            (s.prototype._initNumber = function (f, g, y) {
                f < 0 && ((this.negative = 1), (f = -f)),
                    f < 67108864
                        ? ((this.words = [f & 67108863]), (this.length = 1))
                        : f < 4503599627370496
                        ? ((this.words = [f & 67108863, (f / 67108864) & 67108863]), (this.length = 2))
                        : (n(f < 9007199254740992), (this.words = [f & 67108863, (f / 67108864) & 67108863, 1]), (this.length = 3)),
                    y === "le" && this._initArray(this.toArray(), g, y)
            }),
            (s.prototype._initArray = function (f, g, y) {
                if ((n(typeof f.length == "number"), f.length <= 0)) return (this.words = [0]), (this.length = 1), this
                ;(this.length = Math.ceil(f.length / 3)), (this.words = new Array(this.length))
                for (var w = 0; w < this.length; w++) this.words[w] = 0
                var E,
                    $,
                    k = 0
                if (y === "be")
                    for (w = f.length - 1, E = 0; w >= 0; w -= 3)
                        ($ = f[w] | (f[w - 1] << 8) | (f[w - 2] << 16)),
                            (this.words[E] |= ($ << k) & 67108863),
                            (this.words[E + 1] = ($ >>> (26 - k)) & 67108863),
                            (k += 24),
                            k >= 26 && ((k -= 26), E++)
                else if (y === "le")
                    for (w = 0, E = 0; w < f.length; w += 3)
                        ($ = f[w] | (f[w + 1] << 8) | (f[w + 2] << 16)),
                            (this.words[E] |= ($ << k) & 67108863),
                            (this.words[E + 1] = ($ >>> (26 - k)) & 67108863),
                            (k += 24),
                            k >= 26 && ((k -= 26), E++)
                return this.strip()
            })
        function a(S, f) {
            var g = S.charCodeAt(f)
            return g >= 65 && g <= 70 ? g - 55 : g >= 97 && g <= 102 ? g - 87 : (g - 48) & 15
        }
        function l(S, f, g) {
            var y = a(S, g)
            return g - 1 >= f && (y |= a(S, g - 1) << 4), y
        }
        s.prototype._parseHex = function (f, g, y) {
            ;(this.length = Math.ceil((f.length - g) / 6)), (this.words = new Array(this.length))
            for (var w = 0; w < this.length; w++) this.words[w] = 0
            var E = 0,
                $ = 0,
                k
            if (y === "be")
                for (w = f.length - 1; w >= g; w -= 2)
                    (k = l(f, g, w) << E),
                        (this.words[$] |= k & 67108863),
                        E >= 18 ? ((E -= 18), ($ += 1), (this.words[$] |= k >>> 26)) : (E += 8)
            else {
                var A = f.length - g
                for (w = A % 2 === 0 ? g + 1 : g; w < f.length; w += 2)
                    (k = l(f, g, w) << E),
                        (this.words[$] |= k & 67108863),
                        E >= 18 ? ((E -= 18), ($ += 1), (this.words[$] |= k >>> 26)) : (E += 8)
            }
            this.strip()
        }
        function u(S, f, g, y) {
            for (var w = 0, E = Math.min(S.length, g), $ = f; $ < E; $++) {
                var k = S.charCodeAt($) - 48
                ;(w *= y), k >= 49 ? (w += k - 49 + 10) : k >= 17 ? (w += k - 17 + 10) : (w += k)
            }
            return w
        }
        ;(s.prototype._parseBase = function (f, g, y) {
            ;(this.words = [0]), (this.length = 1)
            for (var w = 0, E = 1; E <= 67108863; E *= g) w++
            w--, (E = (E / g) | 0)
            for (var $ = f.length - y, k = $ % w, A = Math.min($, $ - k) + y, p = 0, x = y; x < A; x += w)
                (p = u(f, x, x + w, g)), this.imuln(E), this.words[0] + p < 67108864 ? (this.words[0] += p) : this._iaddn(p)
            if (k !== 0) {
                var ee = 1
                for (p = u(f, x, f.length, g), x = 0; x < k; x++) ee *= g
                this.imuln(ee), this.words[0] + p < 67108864 ? (this.words[0] += p) : this._iaddn(p)
            }
            this.strip()
        }),
            (s.prototype.copy = function (f) {
                f.words = new Array(this.length)
                for (var g = 0; g < this.length; g++) f.words[g] = this.words[g]
                ;(f.length = this.length), (f.negative = this.negative), (f.red = this.red)
            }),
            (s.prototype.clone = function () {
                var f = new s(null)
                return this.copy(f), f
            }),
            (s.prototype._expand = function (f) {
                for (; this.length < f; ) this.words[this.length++] = 0
                return this
            }),
            (s.prototype.strip = function () {
                for (; this.length > 1 && this.words[this.length - 1] === 0; ) this.length--
                return this._normSign()
            }),
            (s.prototype._normSign = function () {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }),
            (s.prototype.inspect = function () {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            })
        var c = [
                "",
                "0",
                "00",
                "000",
                "0000",
                "00000",
                "000000",
                "0000000",
                "00000000",
                "000000000",
                "0000000000",
                "00000000000",
                "000000000000",
                "0000000000000",
                "00000000000000",
                "000000000000000",
                "0000000000000000",
                "00000000000000000",
                "000000000000000000",
                "0000000000000000000",
                "00000000000000000000",
                "000000000000000000000",
                "0000000000000000000000",
                "00000000000000000000000",
                "000000000000000000000000",
                "0000000000000000000000000",
            ],
            d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            h = [
                0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
                11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907,
                17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
            ]
        ;(s.prototype.toString = function (f, g) {
            ;(f = f || 10), (g = g | 0 || 1)
            var y
            if (f === 16 || f === "hex") {
                y = ""
                for (var w = 0, E = 0, $ = 0; $ < this.length; $++) {
                    var k = this.words[$],
                        A = (((k << w) | E) & 16777215).toString(16)
                    ;(E = (k >>> (24 - w)) & 16777215),
                        E !== 0 || $ !== this.length - 1 ? (y = c[6 - A.length] + A + y) : (y = A + y),
                        (w += 2),
                        w >= 26 && ((w -= 26), $--)
                }
                for (E !== 0 && (y = E.toString(16) + y); y.length % g !== 0; ) y = "0" + y
                return this.negative !== 0 && (y = "-" + y), y
            }
            if (f === (f | 0) && f >= 2 && f <= 36) {
                var p = d[f],
                    x = h[f]
                y = ""
                var ee = this.clone()
                for (ee.negative = 0; !ee.isZero(); ) {
                    var fe = ee.modn(x).toString(f)
                    ;(ee = ee.idivn(x)), ee.isZero() ? (y = fe + y) : (y = c[p - fe.length] + fe + y)
                }
                for (this.isZero() && (y = "0" + y); y.length % g !== 0; ) y = "0" + y
                return this.negative !== 0 && (y = "-" + y), y
            }
            n(!1, "Base should be between 2 and 36")
        }),
            (s.prototype.toNumber = function () {
                var f = this.words[0]
                return (
                    this.length === 2
                        ? (f += this.words[1] * 67108864)
                        : this.length === 3 && this.words[2] === 1
                        ? (f += 4503599627370496 + this.words[1] * 67108864)
                        : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                    this.negative !== 0 ? -f : f
                )
            }),
            (s.prototype.toJSON = function () {
                return this.toString(16)
            }),
            (s.prototype.toBuffer = function (f, g) {
                return n(typeof o != "undefined"), this.toArrayLike(o, f, g)
            }),
            (s.prototype.toArray = function (f, g) {
                return this.toArrayLike(Array, f, g)
            }),
            (s.prototype.toArrayLike = function (f, g, y) {
                var w = this.byteLength(),
                    E = y || Math.max(1, w)
                n(w <= E, "byte array longer than desired length"), n(E > 0, "Requested array length <= 0"), this.strip()
                var $ = g === "le",
                    k = new f(E),
                    A,
                    p,
                    x = this.clone()
                if ($) {
                    for (p = 0; !x.isZero(); p++) (A = x.andln(255)), x.iushrn(8), (k[p] = A)
                    for (; p < E; p++) k[p] = 0
                } else {
                    for (p = 0; p < E - w; p++) k[p] = 0
                    for (p = 0; !x.isZero(); p++) (A = x.andln(255)), x.iushrn(8), (k[E - p - 1] = A)
                }
                return k
            }),
            Math.clz32
                ? (s.prototype._countBits = function (f) {
                      return 32 - Math.clz32(f)
                  })
                : (s.prototype._countBits = function (f) {
                      var g = f,
                          y = 0
                      return (
                          g >= 4096 && ((y += 13), (g >>>= 13)),
                          g >= 64 && ((y += 7), (g >>>= 7)),
                          g >= 8 && ((y += 4), (g >>>= 4)),
                          g >= 2 && ((y += 2), (g >>>= 2)),
                          y + g
                      )
                  }),
            (s.prototype._zeroBits = function (f) {
                if (f === 0) return 26
                var g = f,
                    y = 0
                return (
                    (g & 8191) === 0 && ((y += 13), (g >>>= 13)),
                    (g & 127) === 0 && ((y += 7), (g >>>= 7)),
                    (g & 15) === 0 && ((y += 4), (g >>>= 4)),
                    (g & 3) === 0 && ((y += 2), (g >>>= 2)),
                    (g & 1) === 0 && y++,
                    y
                )
            }),
            (s.prototype.bitLength = function () {
                var f = this.words[this.length - 1],
                    g = this._countBits(f)
                return (this.length - 1) * 26 + g
            })
        function v(S) {
            for (var f = new Array(S.bitLength()), g = 0; g < f.length; g++) {
                var y = (g / 26) | 0,
                    w = g % 26
                f[g] = (S.words[y] & (1 << w)) >>> w
            }
            return f
        }
        ;(s.prototype.zeroBits = function () {
            if (this.isZero()) return 0
            for (var f = 0, g = 0; g < this.length; g++) {
                var y = this._zeroBits(this.words[g])
                if (((f += y), y !== 26)) break
            }
            return f
        }),
            (s.prototype.byteLength = function () {
                return Math.ceil(this.bitLength() / 8)
            }),
            (s.prototype.toTwos = function (f) {
                return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone()
            }),
            (s.prototype.fromTwos = function (f) {
                return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone()
            }),
            (s.prototype.isNeg = function () {
                return this.negative !== 0
            }),
            (s.prototype.neg = function () {
                return this.clone().ineg()
            }),
            (s.prototype.ineg = function () {
                return this.isZero() || (this.negative ^= 1), this
            }),
            (s.prototype.iuor = function (f) {
                for (; this.length < f.length; ) this.words[this.length++] = 0
                for (var g = 0; g < f.length; g++) this.words[g] = this.words[g] | f.words[g]
                return this.strip()
            }),
            (s.prototype.ior = function (f) {
                return n((this.negative | f.negative) === 0), this.iuor(f)
            }),
            (s.prototype.or = function (f) {
                return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this)
            }),
            (s.prototype.uor = function (f) {
                return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this)
            }),
            (s.prototype.iuand = function (f) {
                var g
                this.length > f.length ? (g = f) : (g = this)
                for (var y = 0; y < g.length; y++) this.words[y] = this.words[y] & f.words[y]
                return (this.length = g.length), this.strip()
            }),
            (s.prototype.iand = function (f) {
                return n((this.negative | f.negative) === 0), this.iuand(f)
            }),
            (s.prototype.and = function (f) {
                return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this)
            }),
            (s.prototype.uand = function (f) {
                return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this)
            }),
            (s.prototype.iuxor = function (f) {
                var g, y
                this.length > f.length ? ((g = this), (y = f)) : ((g = f), (y = this))
                for (var w = 0; w < y.length; w++) this.words[w] = g.words[w] ^ y.words[w]
                if (this !== g) for (; w < g.length; w++) this.words[w] = g.words[w]
                return (this.length = g.length), this.strip()
            }),
            (s.prototype.ixor = function (f) {
                return n((this.negative | f.negative) === 0), this.iuxor(f)
            }),
            (s.prototype.xor = function (f) {
                return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this)
            }),
            (s.prototype.uxor = function (f) {
                return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this)
            }),
            (s.prototype.inotn = function (f) {
                n(typeof f == "number" && f >= 0)
                var g = Math.ceil(f / 26) | 0,
                    y = f % 26
                this._expand(g), y > 0 && g--
                for (var w = 0; w < g; w++) this.words[w] = ~this.words[w] & 67108863
                return y > 0 && (this.words[w] = ~this.words[w] & (67108863 >> (26 - y))), this.strip()
            }),
            (s.prototype.notn = function (f) {
                return this.clone().inotn(f)
            }),
            (s.prototype.setn = function (f, g) {
                n(typeof f == "number" && f >= 0)
                var y = (f / 26) | 0,
                    w = f % 26
                return (
                    this._expand(y + 1),
                    g ? (this.words[y] = this.words[y] | (1 << w)) : (this.words[y] = this.words[y] & ~(1 << w)),
                    this.strip()
                )
            }),
            (s.prototype.iadd = function (f) {
                var g
                if (this.negative !== 0 && f.negative === 0)
                    return (this.negative = 0), (g = this.isub(f)), (this.negative ^= 1), this._normSign()
                if (this.negative === 0 && f.negative !== 0) return (f.negative = 0), (g = this.isub(f)), (f.negative = 1), g._normSign()
                var y, w
                this.length > f.length ? ((y = this), (w = f)) : ((y = f), (w = this))
                for (var E = 0, $ = 0; $ < w.length; $++)
                    (g = (y.words[$] | 0) + (w.words[$] | 0) + E), (this.words[$] = g & 67108863), (E = g >>> 26)
                for (; E !== 0 && $ < y.length; $++) (g = (y.words[$] | 0) + E), (this.words[$] = g & 67108863), (E = g >>> 26)
                if (((this.length = y.length), E !== 0)) (this.words[this.length] = E), this.length++
                else if (y !== this) for (; $ < y.length; $++) this.words[$] = y.words[$]
                return this
            }),
            (s.prototype.add = function (f) {
                var g
                return f.negative !== 0 && this.negative === 0
                    ? ((f.negative = 0), (g = this.sub(f)), (f.negative ^= 1), g)
                    : f.negative === 0 && this.negative !== 0
                    ? ((this.negative = 0), (g = f.sub(this)), (this.negative = 1), g)
                    : this.length > f.length
                    ? this.clone().iadd(f)
                    : f.clone().iadd(this)
            }),
            (s.prototype.isub = function (f) {
                if (f.negative !== 0) {
                    f.negative = 0
                    var g = this.iadd(f)
                    return (f.negative = 1), g._normSign()
                } else if (this.negative !== 0) return (this.negative = 0), this.iadd(f), (this.negative = 1), this._normSign()
                var y = this.cmp(f)
                if (y === 0) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
                var w, E
                y > 0 ? ((w = this), (E = f)) : ((w = f), (E = this))
                for (var $ = 0, k = 0; k < E.length; k++)
                    (g = (w.words[k] | 0) - (E.words[k] | 0) + $), ($ = g >> 26), (this.words[k] = g & 67108863)
                for (; $ !== 0 && k < w.length; k++) (g = (w.words[k] | 0) + $), ($ = g >> 26), (this.words[k] = g & 67108863)
                if ($ === 0 && k < w.length && w !== this) for (; k < w.length; k++) this.words[k] = w.words[k]
                return (this.length = Math.max(this.length, k)), w !== this && (this.negative = 1), this.strip()
            }),
            (s.prototype.sub = function (f) {
                return this.clone().isub(f)
            })
        function b(S, f, g) {
            g.negative = f.negative ^ S.negative
            var y = (S.length + f.length) | 0
            ;(g.length = y), (y = (y - 1) | 0)
            var w = S.words[0] | 0,
                E = f.words[0] | 0,
                $ = w * E,
                k = $ & 67108863,
                A = ($ / 67108864) | 0
            g.words[0] = k
            for (var p = 1; p < y; p++) {
                for (var x = A >>> 26, ee = A & 67108863, fe = Math.min(p, f.length - 1), he = Math.max(0, p - S.length + 1); he <= fe; he++) {
                    var m = (p - he) | 0
                    ;(w = S.words[m] | 0), (E = f.words[he] | 0), ($ = w * E + ee), (x += ($ / 67108864) | 0), (ee = $ & 67108863)
                }
                ;(g.words[p] = ee | 0), (A = x | 0)
            }
            return A !== 0 ? (g.words[p] = A | 0) : g.length--, g.strip()
        }
        var _ = function (f, g, y) {
            var w = f.words,
                E = g.words,
                $ = y.words,
                k = 0,
                A,
                p,
                x,
                ee = w[0] | 0,
                fe = ee & 8191,
                he = ee >>> 13,
                m = w[1] | 0,
                M = m & 8191,
                I = m >>> 13,
                F = w[2] | 0,
                j = F & 8191,
                X = F >>> 13,
                oe = w[3] | 0,
                G = oe & 8191,
                T = oe >>> 13,
                N = w[4] | 0,
                R = N & 8191,
                U = N >>> 13,
                Y = w[5] | 0,
                J = Y & 8191,
                te = Y >>> 13,
                ie = w[6] | 0,
                Z = ie & 8191,
                W = ie >>> 13,
                we = w[7] | 0,
                le = we & 8191,
                ce = we >>> 13,
                xe = w[8] | 0,
                Ee = xe & 8191,
                $e = xe >>> 13,
                We = w[9] | 0,
                Ce = We & 8191,
                He = We >>> 13,
                ir = E[0] | 0,
                nt = ir & 8191,
                Ze = ir >>> 13,
                Gr = E[1] | 0,
                Fe = Gr & 8191,
                Ue = Gr >>> 13,
                Yr = E[2] | 0,
                at = Yr & 8191,
                lt = Yr >>> 13,
                $i = E[3] | 0,
                ut = $i & 8191,
                ft = $i >>> 13,
                Ni = E[4] | 0,
                ct = Ni & 8191,
                dt = Ni >>> 13,
                Bi = E[5] | 0,
                ht = Bi & 8191,
                pt = Bi >>> 13,
                ki = E[6] | 0,
                gt = ki & 8191,
                mt = ki >>> 13,
                Oi = E[7] | 0,
                vt = Oi & 8191,
                bt = Oi >>> 13,
                Ii = E[8] | 0,
                yt = Ii & 8191,
                _t = Ii >>> 13,
                Pi = E[9] | 0,
                wt = Pi & 8191,
                Et = Pi >>> 13
            ;(y.negative = f.negative ^ g.negative),
                (y.length = 19),
                (A = Math.imul(fe, nt)),
                (p = Math.imul(fe, Ze)),
                (p = (p + Math.imul(he, nt)) | 0),
                (x = Math.imul(he, Ze))
            var Kn = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Kn >>> 26)) | 0),
                (Kn &= 67108863),
                (A = Math.imul(M, nt)),
                (p = Math.imul(M, Ze)),
                (p = (p + Math.imul(I, nt)) | 0),
                (x = Math.imul(I, Ze)),
                (A = (A + Math.imul(fe, Fe)) | 0),
                (p = (p + Math.imul(fe, Ue)) | 0),
                (p = (p + Math.imul(he, Fe)) | 0),
                (x = (x + Math.imul(he, Ue)) | 0)
            var Gn = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Gn >>> 26)) | 0),
                (Gn &= 67108863),
                (A = Math.imul(j, nt)),
                (p = Math.imul(j, Ze)),
                (p = (p + Math.imul(X, nt)) | 0),
                (x = Math.imul(X, Ze)),
                (A = (A + Math.imul(M, Fe)) | 0),
                (p = (p + Math.imul(M, Ue)) | 0),
                (p = (p + Math.imul(I, Fe)) | 0),
                (x = (x + Math.imul(I, Ue)) | 0),
                (A = (A + Math.imul(fe, at)) | 0),
                (p = (p + Math.imul(fe, lt)) | 0),
                (p = (p + Math.imul(he, at)) | 0),
                (x = (x + Math.imul(he, lt)) | 0)
            var Yn = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Yn >>> 26)) | 0),
                (Yn &= 67108863),
                (A = Math.imul(G, nt)),
                (p = Math.imul(G, Ze)),
                (p = (p + Math.imul(T, nt)) | 0),
                (x = Math.imul(T, Ze)),
                (A = (A + Math.imul(j, Fe)) | 0),
                (p = (p + Math.imul(j, Ue)) | 0),
                (p = (p + Math.imul(X, Fe)) | 0),
                (x = (x + Math.imul(X, Ue)) | 0),
                (A = (A + Math.imul(M, at)) | 0),
                (p = (p + Math.imul(M, lt)) | 0),
                (p = (p + Math.imul(I, at)) | 0),
                (x = (x + Math.imul(I, lt)) | 0),
                (A = (A + Math.imul(fe, ut)) | 0),
                (p = (p + Math.imul(fe, ft)) | 0),
                (p = (p + Math.imul(he, ut)) | 0),
                (x = (x + Math.imul(he, ft)) | 0)
            var Jn = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Jn >>> 26)) | 0),
                (Jn &= 67108863),
                (A = Math.imul(R, nt)),
                (p = Math.imul(R, Ze)),
                (p = (p + Math.imul(U, nt)) | 0),
                (x = Math.imul(U, Ze)),
                (A = (A + Math.imul(G, Fe)) | 0),
                (p = (p + Math.imul(G, Ue)) | 0),
                (p = (p + Math.imul(T, Fe)) | 0),
                (x = (x + Math.imul(T, Ue)) | 0),
                (A = (A + Math.imul(j, at)) | 0),
                (p = (p + Math.imul(j, lt)) | 0),
                (p = (p + Math.imul(X, at)) | 0),
                (x = (x + Math.imul(X, lt)) | 0),
                (A = (A + Math.imul(M, ut)) | 0),
                (p = (p + Math.imul(M, ft)) | 0),
                (p = (p + Math.imul(I, ut)) | 0),
                (x = (x + Math.imul(I, ft)) | 0),
                (A = (A + Math.imul(fe, ct)) | 0),
                (p = (p + Math.imul(fe, dt)) | 0),
                (p = (p + Math.imul(he, ct)) | 0),
                (x = (x + Math.imul(he, dt)) | 0)
            var Xn = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Xn >>> 26)) | 0),
                (Xn &= 67108863),
                (A = Math.imul(J, nt)),
                (p = Math.imul(J, Ze)),
                (p = (p + Math.imul(te, nt)) | 0),
                (x = Math.imul(te, Ze)),
                (A = (A + Math.imul(R, Fe)) | 0),
                (p = (p + Math.imul(R, Ue)) | 0),
                (p = (p + Math.imul(U, Fe)) | 0),
                (x = (x + Math.imul(U, Ue)) | 0),
                (A = (A + Math.imul(G, at)) | 0),
                (p = (p + Math.imul(G, lt)) | 0),
                (p = (p + Math.imul(T, at)) | 0),
                (x = (x + Math.imul(T, lt)) | 0),
                (A = (A + Math.imul(j, ut)) | 0),
                (p = (p + Math.imul(j, ft)) | 0),
                (p = (p + Math.imul(X, ut)) | 0),
                (x = (x + Math.imul(X, ft)) | 0),
                (A = (A + Math.imul(M, ct)) | 0),
                (p = (p + Math.imul(M, dt)) | 0),
                (p = (p + Math.imul(I, ct)) | 0),
                (x = (x + Math.imul(I, dt)) | 0),
                (A = (A + Math.imul(fe, ht)) | 0),
                (p = (p + Math.imul(fe, pt)) | 0),
                (p = (p + Math.imul(he, ht)) | 0),
                (x = (x + Math.imul(he, pt)) | 0)
            var Zn = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Zn >>> 26)) | 0),
                (Zn &= 67108863),
                (A = Math.imul(Z, nt)),
                (p = Math.imul(Z, Ze)),
                (p = (p + Math.imul(W, nt)) | 0),
                (x = Math.imul(W, Ze)),
                (A = (A + Math.imul(J, Fe)) | 0),
                (p = (p + Math.imul(J, Ue)) | 0),
                (p = (p + Math.imul(te, Fe)) | 0),
                (x = (x + Math.imul(te, Ue)) | 0),
                (A = (A + Math.imul(R, at)) | 0),
                (p = (p + Math.imul(R, lt)) | 0),
                (p = (p + Math.imul(U, at)) | 0),
                (x = (x + Math.imul(U, lt)) | 0),
                (A = (A + Math.imul(G, ut)) | 0),
                (p = (p + Math.imul(G, ft)) | 0),
                (p = (p + Math.imul(T, ut)) | 0),
                (x = (x + Math.imul(T, ft)) | 0),
                (A = (A + Math.imul(j, ct)) | 0),
                (p = (p + Math.imul(j, dt)) | 0),
                (p = (p + Math.imul(X, ct)) | 0),
                (x = (x + Math.imul(X, dt)) | 0),
                (A = (A + Math.imul(M, ht)) | 0),
                (p = (p + Math.imul(M, pt)) | 0),
                (p = (p + Math.imul(I, ht)) | 0),
                (x = (x + Math.imul(I, pt)) | 0),
                (A = (A + Math.imul(fe, gt)) | 0),
                (p = (p + Math.imul(fe, mt)) | 0),
                (p = (p + Math.imul(he, gt)) | 0),
                (x = (x + Math.imul(he, mt)) | 0)
            var Qn = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Qn >>> 26)) | 0),
                (Qn &= 67108863),
                (A = Math.imul(le, nt)),
                (p = Math.imul(le, Ze)),
                (p = (p + Math.imul(ce, nt)) | 0),
                (x = Math.imul(ce, Ze)),
                (A = (A + Math.imul(Z, Fe)) | 0),
                (p = (p + Math.imul(Z, Ue)) | 0),
                (p = (p + Math.imul(W, Fe)) | 0),
                (x = (x + Math.imul(W, Ue)) | 0),
                (A = (A + Math.imul(J, at)) | 0),
                (p = (p + Math.imul(J, lt)) | 0),
                (p = (p + Math.imul(te, at)) | 0),
                (x = (x + Math.imul(te, lt)) | 0),
                (A = (A + Math.imul(R, ut)) | 0),
                (p = (p + Math.imul(R, ft)) | 0),
                (p = (p + Math.imul(U, ut)) | 0),
                (x = (x + Math.imul(U, ft)) | 0),
                (A = (A + Math.imul(G, ct)) | 0),
                (p = (p + Math.imul(G, dt)) | 0),
                (p = (p + Math.imul(T, ct)) | 0),
                (x = (x + Math.imul(T, dt)) | 0),
                (A = (A + Math.imul(j, ht)) | 0),
                (p = (p + Math.imul(j, pt)) | 0),
                (p = (p + Math.imul(X, ht)) | 0),
                (x = (x + Math.imul(X, pt)) | 0),
                (A = (A + Math.imul(M, gt)) | 0),
                (p = (p + Math.imul(M, mt)) | 0),
                (p = (p + Math.imul(I, gt)) | 0),
                (x = (x + Math.imul(I, mt)) | 0),
                (A = (A + Math.imul(fe, vt)) | 0),
                (p = (p + Math.imul(fe, bt)) | 0),
                (p = (p + Math.imul(he, vt)) | 0),
                (x = (x + Math.imul(he, bt)) | 0)
            var Gl = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Gl >>> 26)) | 0),
                (Gl &= 67108863),
                (A = Math.imul(Ee, nt)),
                (p = Math.imul(Ee, Ze)),
                (p = (p + Math.imul($e, nt)) | 0),
                (x = Math.imul($e, Ze)),
                (A = (A + Math.imul(le, Fe)) | 0),
                (p = (p + Math.imul(le, Ue)) | 0),
                (p = (p + Math.imul(ce, Fe)) | 0),
                (x = (x + Math.imul(ce, Ue)) | 0),
                (A = (A + Math.imul(Z, at)) | 0),
                (p = (p + Math.imul(Z, lt)) | 0),
                (p = (p + Math.imul(W, at)) | 0),
                (x = (x + Math.imul(W, lt)) | 0),
                (A = (A + Math.imul(J, ut)) | 0),
                (p = (p + Math.imul(J, ft)) | 0),
                (p = (p + Math.imul(te, ut)) | 0),
                (x = (x + Math.imul(te, ft)) | 0),
                (A = (A + Math.imul(R, ct)) | 0),
                (p = (p + Math.imul(R, dt)) | 0),
                (p = (p + Math.imul(U, ct)) | 0),
                (x = (x + Math.imul(U, dt)) | 0),
                (A = (A + Math.imul(G, ht)) | 0),
                (p = (p + Math.imul(G, pt)) | 0),
                (p = (p + Math.imul(T, ht)) | 0),
                (x = (x + Math.imul(T, pt)) | 0),
                (A = (A + Math.imul(j, gt)) | 0),
                (p = (p + Math.imul(j, mt)) | 0),
                (p = (p + Math.imul(X, gt)) | 0),
                (x = (x + Math.imul(X, mt)) | 0),
                (A = (A + Math.imul(M, vt)) | 0),
                (p = (p + Math.imul(M, bt)) | 0),
                (p = (p + Math.imul(I, vt)) | 0),
                (x = (x + Math.imul(I, bt)) | 0),
                (A = (A + Math.imul(fe, yt)) | 0),
                (p = (p + Math.imul(fe, _t)) | 0),
                (p = (p + Math.imul(he, yt)) | 0),
                (x = (x + Math.imul(he, _t)) | 0)
            var Yl = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Yl >>> 26)) | 0),
                (Yl &= 67108863),
                (A = Math.imul(Ce, nt)),
                (p = Math.imul(Ce, Ze)),
                (p = (p + Math.imul(He, nt)) | 0),
                (x = Math.imul(He, Ze)),
                (A = (A + Math.imul(Ee, Fe)) | 0),
                (p = (p + Math.imul(Ee, Ue)) | 0),
                (p = (p + Math.imul($e, Fe)) | 0),
                (x = (x + Math.imul($e, Ue)) | 0),
                (A = (A + Math.imul(le, at)) | 0),
                (p = (p + Math.imul(le, lt)) | 0),
                (p = (p + Math.imul(ce, at)) | 0),
                (x = (x + Math.imul(ce, lt)) | 0),
                (A = (A + Math.imul(Z, ut)) | 0),
                (p = (p + Math.imul(Z, ft)) | 0),
                (p = (p + Math.imul(W, ut)) | 0),
                (x = (x + Math.imul(W, ft)) | 0),
                (A = (A + Math.imul(J, ct)) | 0),
                (p = (p + Math.imul(J, dt)) | 0),
                (p = (p + Math.imul(te, ct)) | 0),
                (x = (x + Math.imul(te, dt)) | 0),
                (A = (A + Math.imul(R, ht)) | 0),
                (p = (p + Math.imul(R, pt)) | 0),
                (p = (p + Math.imul(U, ht)) | 0),
                (x = (x + Math.imul(U, pt)) | 0),
                (A = (A + Math.imul(G, gt)) | 0),
                (p = (p + Math.imul(G, mt)) | 0),
                (p = (p + Math.imul(T, gt)) | 0),
                (x = (x + Math.imul(T, mt)) | 0),
                (A = (A + Math.imul(j, vt)) | 0),
                (p = (p + Math.imul(j, bt)) | 0),
                (p = (p + Math.imul(X, vt)) | 0),
                (x = (x + Math.imul(X, bt)) | 0),
                (A = (A + Math.imul(M, yt)) | 0),
                (p = (p + Math.imul(M, _t)) | 0),
                (p = (p + Math.imul(I, yt)) | 0),
                (x = (x + Math.imul(I, _t)) | 0),
                (A = (A + Math.imul(fe, wt)) | 0),
                (p = (p + Math.imul(fe, Et)) | 0),
                (p = (p + Math.imul(he, wt)) | 0),
                (x = (x + Math.imul(he, Et)) | 0)
            var Jl = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Jl >>> 26)) | 0),
                (Jl &= 67108863),
                (A = Math.imul(Ce, Fe)),
                (p = Math.imul(Ce, Ue)),
                (p = (p + Math.imul(He, Fe)) | 0),
                (x = Math.imul(He, Ue)),
                (A = (A + Math.imul(Ee, at)) | 0),
                (p = (p + Math.imul(Ee, lt)) | 0),
                (p = (p + Math.imul($e, at)) | 0),
                (x = (x + Math.imul($e, lt)) | 0),
                (A = (A + Math.imul(le, ut)) | 0),
                (p = (p + Math.imul(le, ft)) | 0),
                (p = (p + Math.imul(ce, ut)) | 0),
                (x = (x + Math.imul(ce, ft)) | 0),
                (A = (A + Math.imul(Z, ct)) | 0),
                (p = (p + Math.imul(Z, dt)) | 0),
                (p = (p + Math.imul(W, ct)) | 0),
                (x = (x + Math.imul(W, dt)) | 0),
                (A = (A + Math.imul(J, ht)) | 0),
                (p = (p + Math.imul(J, pt)) | 0),
                (p = (p + Math.imul(te, ht)) | 0),
                (x = (x + Math.imul(te, pt)) | 0),
                (A = (A + Math.imul(R, gt)) | 0),
                (p = (p + Math.imul(R, mt)) | 0),
                (p = (p + Math.imul(U, gt)) | 0),
                (x = (x + Math.imul(U, mt)) | 0),
                (A = (A + Math.imul(G, vt)) | 0),
                (p = (p + Math.imul(G, bt)) | 0),
                (p = (p + Math.imul(T, vt)) | 0),
                (x = (x + Math.imul(T, bt)) | 0),
                (A = (A + Math.imul(j, yt)) | 0),
                (p = (p + Math.imul(j, _t)) | 0),
                (p = (p + Math.imul(X, yt)) | 0),
                (x = (x + Math.imul(X, _t)) | 0),
                (A = (A + Math.imul(M, wt)) | 0),
                (p = (p + Math.imul(M, Et)) | 0),
                (p = (p + Math.imul(I, wt)) | 0),
                (x = (x + Math.imul(I, Et)) | 0)
            var Xl = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Xl >>> 26)) | 0),
                (Xl &= 67108863),
                (A = Math.imul(Ce, at)),
                (p = Math.imul(Ce, lt)),
                (p = (p + Math.imul(He, at)) | 0),
                (x = Math.imul(He, lt)),
                (A = (A + Math.imul(Ee, ut)) | 0),
                (p = (p + Math.imul(Ee, ft)) | 0),
                (p = (p + Math.imul($e, ut)) | 0),
                (x = (x + Math.imul($e, ft)) | 0),
                (A = (A + Math.imul(le, ct)) | 0),
                (p = (p + Math.imul(le, dt)) | 0),
                (p = (p + Math.imul(ce, ct)) | 0),
                (x = (x + Math.imul(ce, dt)) | 0),
                (A = (A + Math.imul(Z, ht)) | 0),
                (p = (p + Math.imul(Z, pt)) | 0),
                (p = (p + Math.imul(W, ht)) | 0),
                (x = (x + Math.imul(W, pt)) | 0),
                (A = (A + Math.imul(J, gt)) | 0),
                (p = (p + Math.imul(J, mt)) | 0),
                (p = (p + Math.imul(te, gt)) | 0),
                (x = (x + Math.imul(te, mt)) | 0),
                (A = (A + Math.imul(R, vt)) | 0),
                (p = (p + Math.imul(R, bt)) | 0),
                (p = (p + Math.imul(U, vt)) | 0),
                (x = (x + Math.imul(U, bt)) | 0),
                (A = (A + Math.imul(G, yt)) | 0),
                (p = (p + Math.imul(G, _t)) | 0),
                (p = (p + Math.imul(T, yt)) | 0),
                (x = (x + Math.imul(T, _t)) | 0),
                (A = (A + Math.imul(j, wt)) | 0),
                (p = (p + Math.imul(j, Et)) | 0),
                (p = (p + Math.imul(X, wt)) | 0),
                (x = (x + Math.imul(X, Et)) | 0)
            var Zl = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Zl >>> 26)) | 0),
                (Zl &= 67108863),
                (A = Math.imul(Ce, ut)),
                (p = Math.imul(Ce, ft)),
                (p = (p + Math.imul(He, ut)) | 0),
                (x = Math.imul(He, ft)),
                (A = (A + Math.imul(Ee, ct)) | 0),
                (p = (p + Math.imul(Ee, dt)) | 0),
                (p = (p + Math.imul($e, ct)) | 0),
                (x = (x + Math.imul($e, dt)) | 0),
                (A = (A + Math.imul(le, ht)) | 0),
                (p = (p + Math.imul(le, pt)) | 0),
                (p = (p + Math.imul(ce, ht)) | 0),
                (x = (x + Math.imul(ce, pt)) | 0),
                (A = (A + Math.imul(Z, gt)) | 0),
                (p = (p + Math.imul(Z, mt)) | 0),
                (p = (p + Math.imul(W, gt)) | 0),
                (x = (x + Math.imul(W, mt)) | 0),
                (A = (A + Math.imul(J, vt)) | 0),
                (p = (p + Math.imul(J, bt)) | 0),
                (p = (p + Math.imul(te, vt)) | 0),
                (x = (x + Math.imul(te, bt)) | 0),
                (A = (A + Math.imul(R, yt)) | 0),
                (p = (p + Math.imul(R, _t)) | 0),
                (p = (p + Math.imul(U, yt)) | 0),
                (x = (x + Math.imul(U, _t)) | 0),
                (A = (A + Math.imul(G, wt)) | 0),
                (p = (p + Math.imul(G, Et)) | 0),
                (p = (p + Math.imul(T, wt)) | 0),
                (x = (x + Math.imul(T, Et)) | 0)
            var Ql = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (Ql >>> 26)) | 0),
                (Ql &= 67108863),
                (A = Math.imul(Ce, ct)),
                (p = Math.imul(Ce, dt)),
                (p = (p + Math.imul(He, ct)) | 0),
                (x = Math.imul(He, dt)),
                (A = (A + Math.imul(Ee, ht)) | 0),
                (p = (p + Math.imul(Ee, pt)) | 0),
                (p = (p + Math.imul($e, ht)) | 0),
                (x = (x + Math.imul($e, pt)) | 0),
                (A = (A + Math.imul(le, gt)) | 0),
                (p = (p + Math.imul(le, mt)) | 0),
                (p = (p + Math.imul(ce, gt)) | 0),
                (x = (x + Math.imul(ce, mt)) | 0),
                (A = (A + Math.imul(Z, vt)) | 0),
                (p = (p + Math.imul(Z, bt)) | 0),
                (p = (p + Math.imul(W, vt)) | 0),
                (x = (x + Math.imul(W, bt)) | 0),
                (A = (A + Math.imul(J, yt)) | 0),
                (p = (p + Math.imul(J, _t)) | 0),
                (p = (p + Math.imul(te, yt)) | 0),
                (x = (x + Math.imul(te, _t)) | 0),
                (A = (A + Math.imul(R, wt)) | 0),
                (p = (p + Math.imul(R, Et)) | 0),
                (p = (p + Math.imul(U, wt)) | 0),
                (x = (x + Math.imul(U, Et)) | 0)
            var eu = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (eu >>> 26)) | 0),
                (eu &= 67108863),
                (A = Math.imul(Ce, ht)),
                (p = Math.imul(Ce, pt)),
                (p = (p + Math.imul(He, ht)) | 0),
                (x = Math.imul(He, pt)),
                (A = (A + Math.imul(Ee, gt)) | 0),
                (p = (p + Math.imul(Ee, mt)) | 0),
                (p = (p + Math.imul($e, gt)) | 0),
                (x = (x + Math.imul($e, mt)) | 0),
                (A = (A + Math.imul(le, vt)) | 0),
                (p = (p + Math.imul(le, bt)) | 0),
                (p = (p + Math.imul(ce, vt)) | 0),
                (x = (x + Math.imul(ce, bt)) | 0),
                (A = (A + Math.imul(Z, yt)) | 0),
                (p = (p + Math.imul(Z, _t)) | 0),
                (p = (p + Math.imul(W, yt)) | 0),
                (x = (x + Math.imul(W, _t)) | 0),
                (A = (A + Math.imul(J, wt)) | 0),
                (p = (p + Math.imul(J, Et)) | 0),
                (p = (p + Math.imul(te, wt)) | 0),
                (x = (x + Math.imul(te, Et)) | 0)
            var tu = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (tu >>> 26)) | 0),
                (tu &= 67108863),
                (A = Math.imul(Ce, gt)),
                (p = Math.imul(Ce, mt)),
                (p = (p + Math.imul(He, gt)) | 0),
                (x = Math.imul(He, mt)),
                (A = (A + Math.imul(Ee, vt)) | 0),
                (p = (p + Math.imul(Ee, bt)) | 0),
                (p = (p + Math.imul($e, vt)) | 0),
                (x = (x + Math.imul($e, bt)) | 0),
                (A = (A + Math.imul(le, yt)) | 0),
                (p = (p + Math.imul(le, _t)) | 0),
                (p = (p + Math.imul(ce, yt)) | 0),
                (x = (x + Math.imul(ce, _t)) | 0),
                (A = (A + Math.imul(Z, wt)) | 0),
                (p = (p + Math.imul(Z, Et)) | 0),
                (p = (p + Math.imul(W, wt)) | 0),
                (x = (x + Math.imul(W, Et)) | 0)
            var ru = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (ru >>> 26)) | 0),
                (ru &= 67108863),
                (A = Math.imul(Ce, vt)),
                (p = Math.imul(Ce, bt)),
                (p = (p + Math.imul(He, vt)) | 0),
                (x = Math.imul(He, bt)),
                (A = (A + Math.imul(Ee, yt)) | 0),
                (p = (p + Math.imul(Ee, _t)) | 0),
                (p = (p + Math.imul($e, yt)) | 0),
                (x = (x + Math.imul($e, _t)) | 0),
                (A = (A + Math.imul(le, wt)) | 0),
                (p = (p + Math.imul(le, Et)) | 0),
                (p = (p + Math.imul(ce, wt)) | 0),
                (x = (x + Math.imul(ce, Et)) | 0)
            var nu = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (nu >>> 26)) | 0),
                (nu &= 67108863),
                (A = Math.imul(Ce, yt)),
                (p = Math.imul(Ce, _t)),
                (p = (p + Math.imul(He, yt)) | 0),
                (x = Math.imul(He, _t)),
                (A = (A + Math.imul(Ee, wt)) | 0),
                (p = (p + Math.imul(Ee, Et)) | 0),
                (p = (p + Math.imul($e, wt)) | 0),
                (x = (x + Math.imul($e, Et)) | 0)
            var iu = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            ;(k = (((x + (p >>> 13)) | 0) + (iu >>> 26)) | 0),
                (iu &= 67108863),
                (A = Math.imul(Ce, wt)),
                (p = Math.imul(Ce, Et)),
                (p = (p + Math.imul(He, wt)) | 0),
                (x = Math.imul(He, Et))
            var su = (((k + A) | 0) + ((p & 8191) << 13)) | 0
            return (
                (k = (((x + (p >>> 13)) | 0) + (su >>> 26)) | 0),
                (su &= 67108863),
                ($[0] = Kn),
                ($[1] = Gn),
                ($[2] = Yn),
                ($[3] = Jn),
                ($[4] = Xn),
                ($[5] = Zn),
                ($[6] = Qn),
                ($[7] = Gl),
                ($[8] = Yl),
                ($[9] = Jl),
                ($[10] = Xl),
                ($[11] = Zl),
                ($[12] = Ql),
                ($[13] = eu),
                ($[14] = tu),
                ($[15] = ru),
                ($[16] = nu),
                ($[17] = iu),
                ($[18] = su),
                k !== 0 && (($[19] = k), y.length++),
                y
            )
        }
        Math.imul || (_ = b)
        function C(S, f, g) {
            ;(g.negative = f.negative ^ S.negative), (g.length = S.length + f.length)
            for (var y = 0, w = 0, E = 0; E < g.length - 1; E++) {
                var $ = w
                w = 0
                for (var k = y & 67108863, A = Math.min(E, f.length - 1), p = Math.max(0, E - S.length + 1); p <= A; p++) {
                    var x = E - p,
                        ee = S.words[x] | 0,
                        fe = f.words[p] | 0,
                        he = ee * fe,
                        m = he & 67108863
                    ;($ = ($ + ((he / 67108864) | 0)) | 0),
                        (m = (m + k) | 0),
                        (k = m & 67108863),
                        ($ = ($ + (m >>> 26)) | 0),
                        (w += $ >>> 26),
                        ($ &= 67108863)
                }
                ;(g.words[E] = k), (y = $), ($ = w)
            }
            return y !== 0 ? (g.words[E] = y) : g.length--, g.strip()
        }
        function B(S, f, g) {
            var y = new O()
            return y.mulp(S, f, g)
        }
        s.prototype.mulTo = function (f, g) {
            var y,
                w = this.length + f.length
            return (
                this.length === 10 && f.length === 10
                    ? (y = _(this, f, g))
                    : w < 63
                    ? (y = b(this, f, g))
                    : w < 1024
                    ? (y = C(this, f, g))
                    : (y = B(this, f, g)),
                y
            )
        }
        function O(S, f) {
            ;(this.x = S), (this.y = f)
        }
        ;(O.prototype.makeRBT = function (f) {
            for (var g = new Array(f), y = s.prototype._countBits(f) - 1, w = 0; w < f; w++) g[w] = this.revBin(w, y, f)
            return g
        }),
            (O.prototype.revBin = function (f, g, y) {
                if (f === 0 || f === y - 1) return f
                for (var w = 0, E = 0; E < g; E++) (w |= (f & 1) << (g - E - 1)), (f >>= 1)
                return w
            }),
            (O.prototype.permute = function (f, g, y, w, E, $) {
                for (var k = 0; k < $; k++) (w[k] = g[f[k]]), (E[k] = y[f[k]])
            }),
            (O.prototype.transform = function (f, g, y, w, E, $) {
                this.permute($, f, g, y, w, E)
                for (var k = 1; k < E; k <<= 1)
                    for (var A = k << 1, p = Math.cos((2 * Math.PI) / A), x = Math.sin((2 * Math.PI) / A), ee = 0; ee < E; ee += A)
                        for (var fe = p, he = x, m = 0; m < k; m++) {
                            var M = y[ee + m],
                                I = w[ee + m],
                                F = y[ee + m + k],
                                j = w[ee + m + k],
                                X = fe * F - he * j
                            ;(j = fe * j + he * F),
                                (F = X),
                                (y[ee + m] = M + F),
                                (w[ee + m] = I + j),
                                (y[ee + m + k] = M - F),
                                (w[ee + m + k] = I - j),
                                m !== A && ((X = p * fe - x * he), (he = p * he + x * fe), (fe = X))
                        }
            }),
            (O.prototype.guessLen13b = function (f, g) {
                var y = Math.max(g, f) | 1,
                    w = y & 1,
                    E = 0
                for (y = (y / 2) | 0; y; y = y >>> 1) E++
                return 1 << (E + 1 + w)
            }),
            (O.prototype.conjugate = function (f, g, y) {
                if (!(y <= 1))
                    for (var w = 0; w < y / 2; w++) {
                        var E = f[w]
                        ;(f[w] = f[y - w - 1]), (f[y - w - 1] = E), (E = g[w]), (g[w] = -g[y - w - 1]), (g[y - w - 1] = -E)
                    }
            }),
            (O.prototype.normalize13b = function (f, g) {
                for (var y = 0, w = 0; w < g / 2; w++) {
                    var E = Math.round(f[2 * w + 1] / g) * 8192 + Math.round(f[2 * w] / g) + y
                    ;(f[w] = E & 67108863), E < 67108864 ? (y = 0) : (y = (E / 67108864) | 0)
                }
                return f
            }),
            (O.prototype.convert13b = function (f, g, y, w) {
                for (var E = 0, $ = 0; $ < g; $++)
                    (E = E + (f[$] | 0)), (y[2 * $] = E & 8191), (E = E >>> 13), (y[2 * $ + 1] = E & 8191), (E = E >>> 13)
                for ($ = 2 * g; $ < w; ++$) y[$] = 0
                n(E === 0), n((E & -8192) === 0)
            }),
            (O.prototype.stub = function (f) {
                for (var g = new Array(f), y = 0; y < f; y++) g[y] = 0
                return g
            }),
            (O.prototype.mulp = function (f, g, y) {
                var w = 2 * this.guessLen13b(f.length, g.length),
                    E = this.makeRBT(w),
                    $ = this.stub(w),
                    k = new Array(w),
                    A = new Array(w),
                    p = new Array(w),
                    x = new Array(w),
                    ee = new Array(w),
                    fe = new Array(w),
                    he = y.words
                ;(he.length = w),
                    this.convert13b(f.words, f.length, k, w),
                    this.convert13b(g.words, g.length, x, w),
                    this.transform(k, $, A, p, w, E),
                    this.transform(x, $, ee, fe, w, E)
                for (var m = 0; m < w; m++) {
                    var M = A[m] * ee[m] - p[m] * fe[m]
                    ;(p[m] = A[m] * fe[m] + p[m] * ee[m]), (A[m] = M)
                }
                return (
                    this.conjugate(A, p, w),
                    this.transform(A, p, he, $, w, E),
                    this.conjugate(he, $, w),
                    this.normalize13b(he, w),
                    (y.negative = f.negative ^ g.negative),
                    (y.length = f.length + g.length),
                    y.strip()
                )
            }),
            (s.prototype.mul = function (f) {
                var g = new s(null)
                return (g.words = new Array(this.length + f.length)), this.mulTo(f, g)
            }),
            (s.prototype.mulf = function (f) {
                var g = new s(null)
                return (g.words = new Array(this.length + f.length)), B(this, f, g)
            }),
            (s.prototype.imul = function (f) {
                return this.clone().mulTo(f, this)
            }),
            (s.prototype.imuln = function (f) {
                n(typeof f == "number"), n(f < 67108864)
                for (var g = 0, y = 0; y < this.length; y++) {
                    var w = (this.words[y] | 0) * f,
                        E = (w & 67108863) + (g & 67108863)
                    ;(g >>= 26), (g += (w / 67108864) | 0), (g += E >>> 26), (this.words[y] = E & 67108863)
                }
                return g !== 0 && ((this.words[y] = g), this.length++), this
            }),
            (s.prototype.muln = function (f) {
                return this.clone().imuln(f)
            }),
            (s.prototype.sqr = function () {
                return this.mul(this)
            }),
            (s.prototype.isqr = function () {
                return this.imul(this.clone())
            }),
            (s.prototype.pow = function (f) {
                var g = v(f)
                if (g.length === 0) return new s(1)
                for (var y = this, w = 0; w < g.length && g[w] === 0; w++, y = y.sqr());
                if (++w < g.length) for (var E = y.sqr(); w < g.length; w++, E = E.sqr()) g[w] !== 0 && (y = y.mul(E))
                return y
            }),
            (s.prototype.iushln = function (f) {
                n(typeof f == "number" && f >= 0)
                var g = f % 26,
                    y = (f - g) / 26,
                    w = (67108863 >>> (26 - g)) << (26 - g),
                    E
                if (g !== 0) {
                    var $ = 0
                    for (E = 0; E < this.length; E++) {
                        var k = this.words[E] & w,
                            A = ((this.words[E] | 0) - k) << g
                        ;(this.words[E] = A | $), ($ = k >>> (26 - g))
                    }
                    $ && ((this.words[E] = $), this.length++)
                }
                if (y !== 0) {
                    for (E = this.length - 1; E >= 0; E--) this.words[E + y] = this.words[E]
                    for (E = 0; E < y; E++) this.words[E] = 0
                    this.length += y
                }
                return this.strip()
            }),
            (s.prototype.ishln = function (f) {
                return n(this.negative === 0), this.iushln(f)
            }),
            (s.prototype.iushrn = function (f, g, y) {
                n(typeof f == "number" && f >= 0)
                var w
                g ? (w = (g - (g % 26)) / 26) : (w = 0)
                var E = f % 26,
                    $ = Math.min((f - E) / 26, this.length),
                    k = 67108863 ^ ((67108863 >>> E) << E),
                    A = y
                if (((w -= $), (w = Math.max(0, w)), A)) {
                    for (var p = 0; p < $; p++) A.words[p] = this.words[p]
                    A.length = $
                }
                if ($ !== 0)
                    if (this.length > $) for (this.length -= $, p = 0; p < this.length; p++) this.words[p] = this.words[p + $]
                    else (this.words[0] = 0), (this.length = 1)
                var x = 0
                for (p = this.length - 1; p >= 0 && (x !== 0 || p >= w); p--) {
                    var ee = this.words[p] | 0
                    ;(this.words[p] = (x << (26 - E)) | (ee >>> E)), (x = ee & k)
                }
                return A && x !== 0 && (A.words[A.length++] = x), this.length === 0 && ((this.words[0] = 0), (this.length = 1)), this.strip()
            }),
            (s.prototype.ishrn = function (f, g, y) {
                return n(this.negative === 0), this.iushrn(f, g, y)
            }),
            (s.prototype.shln = function (f) {
                return this.clone().ishln(f)
            }),
            (s.prototype.ushln = function (f) {
                return this.clone().iushln(f)
            }),
            (s.prototype.shrn = function (f) {
                return this.clone().ishrn(f)
            }),
            (s.prototype.ushrn = function (f) {
                return this.clone().iushrn(f)
            }),
            (s.prototype.testn = function (f) {
                n(typeof f == "number" && f >= 0)
                var g = f % 26,
                    y = (f - g) / 26,
                    w = 1 << g
                if (this.length <= y) return !1
                var E = this.words[y]
                return !!(E & w)
            }),
            (s.prototype.imaskn = function (f) {
                n(typeof f == "number" && f >= 0)
                var g = f % 26,
                    y = (f - g) / 26
                if ((n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y)) return this
                if ((g !== 0 && y++, (this.length = Math.min(y, this.length)), g !== 0)) {
                    var w = 67108863 ^ ((67108863 >>> g) << g)
                    this.words[this.length - 1] &= w
                }
                return this.strip()
            }),
            (s.prototype.maskn = function (f) {
                return this.clone().imaskn(f)
            }),
            (s.prototype.iaddn = function (f) {
                return (
                    n(typeof f == "number"),
                    n(f < 67108864),
                    f < 0
                        ? this.isubn(-f)
                        : this.negative !== 0
                        ? this.length === 1 && (this.words[0] | 0) < f
                            ? ((this.words[0] = f - (this.words[0] | 0)), (this.negative = 0), this)
                            : ((this.negative = 0), this.isubn(f), (this.negative = 1), this)
                        : this._iaddn(f)
                )
            }),
            (s.prototype._iaddn = function (f) {
                this.words[0] += f
                for (var g = 0; g < this.length && this.words[g] >= 67108864; g++)
                    (this.words[g] -= 67108864), g === this.length - 1 ? (this.words[g + 1] = 1) : this.words[g + 1]++
                return (this.length = Math.max(this.length, g + 1)), this
            }),
            (s.prototype.isubn = function (f) {
                if ((n(typeof f == "number"), n(f < 67108864), f < 0)) return this.iaddn(-f)
                if (this.negative !== 0) return (this.negative = 0), this.iaddn(f), (this.negative = 1), this
                if (((this.words[0] -= f), this.length === 1 && this.words[0] < 0)) (this.words[0] = -this.words[0]), (this.negative = 1)
                else for (var g = 0; g < this.length && this.words[g] < 0; g++) (this.words[g] += 67108864), (this.words[g + 1] -= 1)
                return this.strip()
            }),
            (s.prototype.addn = function (f) {
                return this.clone().iaddn(f)
            }),
            (s.prototype.subn = function (f) {
                return this.clone().isubn(f)
            }),
            (s.prototype.iabs = function () {
                return (this.negative = 0), this
            }),
            (s.prototype.abs = function () {
                return this.clone().iabs()
            }),
            (s.prototype._ishlnsubmul = function (f, g, y) {
                var w = f.length + y,
                    E
                this._expand(w)
                var $,
                    k = 0
                for (E = 0; E < f.length; E++) {
                    $ = (this.words[E + y] | 0) + k
                    var A = (f.words[E] | 0) * g
                    ;($ -= A & 67108863), (k = ($ >> 26) - ((A / 67108864) | 0)), (this.words[E + y] = $ & 67108863)
                }
                for (; E < this.length - y; E++) ($ = (this.words[E + y] | 0) + k), (k = $ >> 26), (this.words[E + y] = $ & 67108863)
                if (k === 0) return this.strip()
                for (n(k === -1), k = 0, E = 0; E < this.length; E++)
                    ($ = -(this.words[E] | 0) + k), (k = $ >> 26), (this.words[E] = $ & 67108863)
                return (this.negative = 1), this.strip()
            }),
            (s.prototype._wordDiv = function (f, g) {
                var y = this.length - f.length,
                    w = this.clone(),
                    E = f,
                    $ = E.words[E.length - 1] | 0,
                    k = this._countBits($)
                ;(y = 26 - k), y !== 0 && ((E = E.ushln(y)), w.iushln(y), ($ = E.words[E.length - 1] | 0))
                var A = w.length - E.length,
                    p
                if (g !== "mod") {
                    ;(p = new s(null)), (p.length = A + 1), (p.words = new Array(p.length))
                    for (var x = 0; x < p.length; x++) p.words[x] = 0
                }
                var ee = w.clone()._ishlnsubmul(E, 1, A)
                ee.negative === 0 && ((w = ee), p && (p.words[A] = 1))
                for (var fe = A - 1; fe >= 0; fe--) {
                    var he = (w.words[E.length + fe] | 0) * 67108864 + (w.words[E.length + fe - 1] | 0)
                    for (he = Math.min((he / $) | 0, 67108863), w._ishlnsubmul(E, he, fe); w.negative !== 0; )
                        he--, (w.negative = 0), w._ishlnsubmul(E, 1, fe), w.isZero() || (w.negative ^= 1)
                    p && (p.words[fe] = he)
                }
                return p && p.strip(), w.strip(), g !== "div" && y !== 0 && w.iushrn(y), { div: p || null, mod: w }
            }),
            (s.prototype.divmod = function (f, g, y) {
                if ((n(!f.isZero()), this.isZero())) return { div: new s(0), mod: new s(0) }
                var w, E, $
                return this.negative !== 0 && f.negative === 0
                    ? (($ = this.neg().divmod(f, g)),
                      g !== "mod" && (w = $.div.neg()),
                      g !== "div" && ((E = $.mod.neg()), y && E.negative !== 0 && E.iadd(f)),
                      { div: w, mod: E })
                    : this.negative === 0 && f.negative !== 0
                    ? (($ = this.divmod(f.neg(), g)), g !== "mod" && (w = $.div.neg()), { div: w, mod: $.mod })
                    : (this.negative & f.negative) !== 0
                    ? (($ = this.neg().divmod(f.neg(), g)),
                      g !== "div" && ((E = $.mod.neg()), y && E.negative !== 0 && E.isub(f)),
                      { div: $.div, mod: E })
                    : f.length > this.length || this.cmp(f) < 0
                    ? { div: new s(0), mod: this }
                    : f.length === 1
                    ? g === "div"
                        ? { div: this.divn(f.words[0]), mod: null }
                        : g === "mod"
                        ? { div: null, mod: new s(this.modn(f.words[0])) }
                        : { div: this.divn(f.words[0]), mod: new s(this.modn(f.words[0])) }
                    : this._wordDiv(f, g)
            }),
            (s.prototype.div = function (f) {
                return this.divmod(f, "div", !1).div
            }),
            (s.prototype.mod = function (f) {
                return this.divmod(f, "mod", !1).mod
            }),
            (s.prototype.umod = function (f) {
                return this.divmod(f, "mod", !0).mod
            }),
            (s.prototype.divRound = function (f) {
                var g = this.divmod(f)
                if (g.mod.isZero()) return g.div
                var y = g.div.negative !== 0 ? g.mod.isub(f) : g.mod,
                    w = f.ushrn(1),
                    E = f.andln(1),
                    $ = y.cmp(w)
                return $ < 0 || (E === 1 && $ === 0) ? g.div : g.div.negative !== 0 ? g.div.isubn(1) : g.div.iaddn(1)
            }),
            (s.prototype.modn = function (f) {
                n(f <= 67108863)
                for (var g = (1 << 26) % f, y = 0, w = this.length - 1; w >= 0; w--) y = (g * y + (this.words[w] | 0)) % f
                return y
            }),
            (s.prototype.idivn = function (f) {
                n(f <= 67108863)
                for (var g = 0, y = this.length - 1; y >= 0; y--) {
                    var w = (this.words[y] | 0) + g * 67108864
                    ;(this.words[y] = (w / f) | 0), (g = w % f)
                }
                return this.strip()
            }),
            (s.prototype.divn = function (f) {
                return this.clone().idivn(f)
            }),
            (s.prototype.egcd = function (f) {
                n(f.negative === 0), n(!f.isZero())
                var g = this,
                    y = f.clone()
                g.negative !== 0 ? (g = g.umod(f)) : (g = g.clone())
                for (var w = new s(1), E = new s(0), $ = new s(0), k = new s(1), A = 0; g.isEven() && y.isEven(); ) g.iushrn(1), y.iushrn(1), ++A
                for (var p = y.clone(), x = g.clone(); !g.isZero(); ) {
                    for (var ee = 0, fe = 1; (g.words[0] & fe) === 0 && ee < 26; ++ee, fe <<= 1);
                    if (ee > 0) for (g.iushrn(ee); ee-- > 0; ) (w.isOdd() || E.isOdd()) && (w.iadd(p), E.isub(x)), w.iushrn(1), E.iushrn(1)
                    for (var he = 0, m = 1; (y.words[0] & m) === 0 && he < 26; ++he, m <<= 1);
                    if (he > 0) for (y.iushrn(he); he-- > 0; ) ($.isOdd() || k.isOdd()) && ($.iadd(p), k.isub(x)), $.iushrn(1), k.iushrn(1)
                    g.cmp(y) >= 0 ? (g.isub(y), w.isub($), E.isub(k)) : (y.isub(g), $.isub(w), k.isub(E))
                }
                return { a: $, b: k, gcd: y.iushln(A) }
            }),
            (s.prototype._invmp = function (f) {
                n(f.negative === 0), n(!f.isZero())
                var g = this,
                    y = f.clone()
                g.negative !== 0 ? (g = g.umod(f)) : (g = g.clone())
                for (var w = new s(1), E = new s(0), $ = y.clone(); g.cmpn(1) > 0 && y.cmpn(1) > 0; ) {
                    for (var k = 0, A = 1; (g.words[0] & A) === 0 && k < 26; ++k, A <<= 1);
                    if (k > 0) for (g.iushrn(k); k-- > 0; ) w.isOdd() && w.iadd($), w.iushrn(1)
                    for (var p = 0, x = 1; (y.words[0] & x) === 0 && p < 26; ++p, x <<= 1);
                    if (p > 0) for (y.iushrn(p); p-- > 0; ) E.isOdd() && E.iadd($), E.iushrn(1)
                    g.cmp(y) >= 0 ? (g.isub(y), w.isub(E)) : (y.isub(g), E.isub(w))
                }
                var ee
                return g.cmpn(1) === 0 ? (ee = w) : (ee = E), ee.cmpn(0) < 0 && ee.iadd(f), ee
            }),
            (s.prototype.gcd = function (f) {
                if (this.isZero()) return f.abs()
                if (f.isZero()) return this.abs()
                var g = this.clone(),
                    y = f.clone()
                ;(g.negative = 0), (y.negative = 0)
                for (var w = 0; g.isEven() && y.isEven(); w++) g.iushrn(1), y.iushrn(1)
                do {
                    for (; g.isEven(); ) g.iushrn(1)
                    for (; y.isEven(); ) y.iushrn(1)
                    var E = g.cmp(y)
                    if (E < 0) {
                        var $ = g
                        ;(g = y), (y = $)
                    } else if (E === 0 || y.cmpn(1) === 0) break
                    g.isub(y)
                } while (!0)
                return y.iushln(w)
            }),
            (s.prototype.invm = function (f) {
                return this.egcd(f).a.umod(f)
            }),
            (s.prototype.isEven = function () {
                return (this.words[0] & 1) === 0
            }),
            (s.prototype.isOdd = function () {
                return (this.words[0] & 1) === 1
            }),
            (s.prototype.andln = function (f) {
                return this.words[0] & f
            }),
            (s.prototype.bincn = function (f) {
                n(typeof f == "number")
                var g = f % 26,
                    y = (f - g) / 26,
                    w = 1 << g
                if (this.length <= y) return this._expand(y + 1), (this.words[y] |= w), this
                for (var E = w, $ = y; E !== 0 && $ < this.length; $++) {
                    var k = this.words[$] | 0
                    ;(k += E), (E = k >>> 26), (k &= 67108863), (this.words[$] = k)
                }
                return E !== 0 && ((this.words[$] = E), this.length++), this
            }),
            (s.prototype.isZero = function () {
                return this.length === 1 && this.words[0] === 0
            }),
            (s.prototype.cmpn = function (f) {
                var g = f < 0
                if (this.negative !== 0 && !g) return -1
                if (this.negative === 0 && g) return 1
                this.strip()
                var y
                if (this.length > 1) y = 1
                else {
                    g && (f = -f), n(f <= 67108863, "Number is too big")
                    var w = this.words[0] | 0
                    y = w === f ? 0 : w < f ? -1 : 1
                }
                return this.negative !== 0 ? -y | 0 : y
            }),
            (s.prototype.cmp = function (f) {
                if (this.negative !== 0 && f.negative === 0) return -1
                if (this.negative === 0 && f.negative !== 0) return 1
                var g = this.ucmp(f)
                return this.negative !== 0 ? -g | 0 : g
            }),
            (s.prototype.ucmp = function (f) {
                if (this.length > f.length) return 1
                if (this.length < f.length) return -1
                for (var g = 0, y = this.length - 1; y >= 0; y--) {
                    var w = this.words[y] | 0,
                        E = f.words[y] | 0
                    if (w !== E) {
                        w < E ? (g = -1) : w > E && (g = 1)
                        break
                    }
                }
                return g
            }),
            (s.prototype.gtn = function (f) {
                return this.cmpn(f) === 1
            }),
            (s.prototype.gt = function (f) {
                return this.cmp(f) === 1
            }),
            (s.prototype.gten = function (f) {
                return this.cmpn(f) >= 0
            }),
            (s.prototype.gte = function (f) {
                return this.cmp(f) >= 0
            }),
            (s.prototype.ltn = function (f) {
                return this.cmpn(f) === -1
            }),
            (s.prototype.lt = function (f) {
                return this.cmp(f) === -1
            }),
            (s.prototype.lten = function (f) {
                return this.cmpn(f) <= 0
            }),
            (s.prototype.lte = function (f) {
                return this.cmp(f) <= 0
            }),
            (s.prototype.eqn = function (f) {
                return this.cmpn(f) === 0
            }),
            (s.prototype.eq = function (f) {
                return this.cmp(f) === 0
            }),
            (s.red = function (f) {
                return new z(f)
            }),
            (s.prototype.toRed = function (f) {
                return (
                    n(!this.red, "Already a number in reduction context"),
                    n(this.negative === 0, "red works only with positives"),
                    f.convertTo(this)._forceRed(f)
                )
            }),
            (s.prototype.fromRed = function () {
                return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }),
            (s.prototype._forceRed = function (f) {
                return (this.red = f), this
            }),
            (s.prototype.forceRed = function (f) {
                return n(!this.red, "Already a number in reduction context"), this._forceRed(f)
            }),
            (s.prototype.redAdd = function (f) {
                return n(this.red, "redAdd works only with red numbers"), this.red.add(this, f)
            }),
            (s.prototype.redIAdd = function (f) {
                return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f)
            }),
            (s.prototype.redSub = function (f) {
                return n(this.red, "redSub works only with red numbers"), this.red.sub(this, f)
            }),
            (s.prototype.redISub = function (f) {
                return n(this.red, "redISub works only with red numbers"), this.red.isub(this, f)
            }),
            (s.prototype.redShl = function (f) {
                return n(this.red, "redShl works only with red numbers"), this.red.shl(this, f)
            }),
            (s.prototype.redMul = function (f) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f)
            }),
            (s.prototype.redIMul = function (f) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f)
            }),
            (s.prototype.redSqr = function () {
                return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }),
            (s.prototype.redISqr = function () {
                return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }),
            (s.prototype.redSqrt = function () {
                return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }),
            (s.prototype.redInvm = function () {
                return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }),
            (s.prototype.redNeg = function () {
                return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }),
            (s.prototype.redPow = function (f) {
                return n(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f)
            })
        var L = { k256: null, p224: null, p192: null, p25519: null }
        function V(S, f) {
            ;(this.name = S),
                (this.p = new s(f, 16)),
                (this.n = this.p.bitLength()),
                (this.k = new s(1).iushln(this.n).isub(this.p)),
                (this.tmp = this._tmp())
        }
        ;(V.prototype._tmp = function () {
            var f = new s(null)
            return (f.words = new Array(Math.ceil(this.n / 13))), f
        }),
            (V.prototype.ireduce = function (f) {
                var g = f,
                    y
                do this.split(g, this.tmp), (g = this.imulK(g)), (g = g.iadd(this.tmp)), (y = g.bitLength())
                while (y > this.n)
                var w = y < this.n ? -1 : g.ucmp(this.p)
                return w === 0 ? ((g.words[0] = 0), (g.length = 1)) : w > 0 ? g.isub(this.p) : g.strip !== void 0 ? g.strip() : g._strip(), g
            }),
            (V.prototype.split = function (f, g) {
                f.iushrn(this.n, 0, g)
            }),
            (V.prototype.imulK = function (f) {
                return f.imul(this.k)
            })
        function H() {
            V.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        i(H, V),
            (H.prototype.split = function (f, g) {
                for (var y = 4194303, w = Math.min(f.length, 9), E = 0; E < w; E++) g.words[E] = f.words[E]
                if (((g.length = w), f.length <= 9)) {
                    ;(f.words[0] = 0), (f.length = 1)
                    return
                }
                var $ = f.words[9]
                for (g.words[g.length++] = $ & y, E = 10; E < f.length; E++) {
                    var k = f.words[E] | 0
                    ;(f.words[E - 10] = ((k & y) << 4) | ($ >>> 22)), ($ = k)
                }
                ;($ >>>= 22), (f.words[E - 10] = $), $ === 0 && f.length > 10 ? (f.length -= 10) : (f.length -= 9)
            }),
            (H.prototype.imulK = function (f) {
                ;(f.words[f.length] = 0), (f.words[f.length + 1] = 0), (f.length += 2)
                for (var g = 0, y = 0; y < f.length; y++) {
                    var w = f.words[y] | 0
                    ;(g += w * 977), (f.words[y] = g & 67108863), (g = w * 64 + ((g / 67108864) | 0))
                }
                return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f
            })
        function Q() {
            V.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        i(Q, V)
        function K() {
            V.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        i(K, V)
        function ae() {
            V.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        i(ae, V),
            (ae.prototype.imulK = function (f) {
                for (var g = 0, y = 0; y < f.length; y++) {
                    var w = (f.words[y] | 0) * 19 + g,
                        E = w & 67108863
                    ;(w >>>= 26), (f.words[y] = E), (g = w)
                }
                return g !== 0 && (f.words[f.length++] = g), f
            }),
            (s._prime = function (f) {
                if (L[f]) return L[f]
                var g
                if (f === "k256") g = new H()
                else if (f === "p224") g = new Q()
                else if (f === "p192") g = new K()
                else if (f === "p25519") g = new ae()
                else throw new Error("Unknown prime " + f)
                return (L[f] = g), g
            })
        function z(S) {
            if (typeof S == "string") {
                var f = s._prime(S)
                ;(this.m = f.p), (this.prime = f)
            } else n(S.gtn(1), "modulus must be greater than 1"), (this.m = S), (this.prime = null)
        }
        ;(z.prototype._verify1 = function (f) {
            n(f.negative === 0, "red works only with positives"), n(f.red, "red works only with red numbers")
        }),
            (z.prototype._verify2 = function (f, g) {
                n((f.negative | g.negative) === 0, "red works only with positives"),
                    n(f.red && f.red === g.red, "red works only with red numbers")
            }),
            (z.prototype.imod = function (f) {
                return this.prime ? this.prime.ireduce(f)._forceRed(this) : f.umod(this.m)._forceRed(this)
            }),
            (z.prototype.neg = function (f) {
                return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this)
            }),
            (z.prototype.add = function (f, g) {
                this._verify2(f, g)
                var y = f.add(g)
                return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this)
            }),
            (z.prototype.iadd = function (f, g) {
                this._verify2(f, g)
                var y = f.iadd(g)
                return y.cmp(this.m) >= 0 && y.isub(this.m), y
            }),
            (z.prototype.sub = function (f, g) {
                this._verify2(f, g)
                var y = f.sub(g)
                return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this)
            }),
            (z.prototype.isub = function (f, g) {
                this._verify2(f, g)
                var y = f.isub(g)
                return y.cmpn(0) < 0 && y.iadd(this.m), y
            }),
            (z.prototype.shl = function (f, g) {
                return this._verify1(f), this.imod(f.ushln(g))
            }),
            (z.prototype.imul = function (f, g) {
                return this._verify2(f, g), this.imod(f.imul(g))
            }),
            (z.prototype.mul = function (f, g) {
                return this._verify2(f, g), this.imod(f.mul(g))
            }),
            (z.prototype.isqr = function (f) {
                return this.imul(f, f.clone())
            }),
            (z.prototype.sqr = function (f) {
                return this.mul(f, f)
            }),
            (z.prototype.sqrt = function (f) {
                if (f.isZero()) return f.clone()
                var g = this.m.andln(3)
                if ((n(g % 2 === 1), g === 3)) {
                    var y = this.m.add(new s(1)).iushrn(2)
                    return this.pow(f, y)
                }
                for (var w = this.m.subn(1), E = 0; !w.isZero() && w.andln(1) === 0; ) E++, w.iushrn(1)
                n(!w.isZero())
                var $ = new s(1).toRed(this),
                    k = $.redNeg(),
                    A = this.m.subn(1).iushrn(1),
                    p = this.m.bitLength()
                for (p = new s(2 * p * p).toRed(this); this.pow(p, A).cmp(k) !== 0; ) p.redIAdd(k)
                for (var x = this.pow(p, w), ee = this.pow(f, w.addn(1).iushrn(1)), fe = this.pow(f, w), he = E; fe.cmp($) !== 0; ) {
                    for (var m = fe, M = 0; m.cmp($) !== 0; M++) m = m.redSqr()
                    n(M < he)
                    var I = this.pow(x, new s(1).iushln(he - M - 1))
                    ;(ee = ee.redMul(I)), (x = I.redSqr()), (fe = fe.redMul(x)), (he = M)
                }
                return ee
            }),
            (z.prototype.invm = function (f) {
                var g = f._invmp(this.m)
                return g.negative !== 0 ? ((g.negative = 0), this.imod(g).redNeg()) : this.imod(g)
            }),
            (z.prototype.pow = function (f, g) {
                if (g.isZero()) return new s(1).toRed(this)
                if (g.cmpn(1) === 0) return f.clone()
                var y = 4,
                    w = new Array(1 << y)
                ;(w[0] = new s(1).toRed(this)), (w[1] = f)
                for (var E = 2; E < w.length; E++) w[E] = this.mul(w[E - 1], f)
                var $ = w[0],
                    k = 0,
                    A = 0,
                    p = g.bitLength() % 26
                for (p === 0 && (p = 26), E = g.length - 1; E >= 0; E--) {
                    for (var x = g.words[E], ee = p - 1; ee >= 0; ee--) {
                        var fe = (x >> ee) & 1
                        if (($ !== w[0] && ($ = this.sqr($)), fe === 0 && k === 0)) {
                            A = 0
                            continue
                        }
                        ;(k <<= 1), (k |= fe), A++, !(A !== y && (E !== 0 || ee !== 0)) && (($ = this.mul($, w[k])), (A = 0), (k = 0))
                    }
                    p = 26
                }
                return $
            }),
            (z.prototype.convertTo = function (f) {
                var g = f.umod(this.m)
                return g === f ? g.clone() : g
            }),
            (z.prototype.convertFrom = function (f) {
                var g = f.clone()
                return (g.red = null), g
            }),
            (s.mont = function (f) {
                return new ye(f)
            })
        function ye(S) {
            z.call(this, S),
                (this.shift = this.m.bitLength()),
                this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
                (this.r = new s(1).iushln(this.shift)),
                (this.r2 = this.imod(this.r.sqr())),
                (this.rinv = this.r._invmp(this.m)),
                (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                (this.minv = this.minv.umod(this.r)),
                (this.minv = this.r.sub(this.minv))
        }
        i(ye, z),
            (ye.prototype.convertTo = function (f) {
                return this.imod(f.ushln(this.shift))
            }),
            (ye.prototype.convertFrom = function (f) {
                var g = this.imod(f.mul(this.rinv))
                return (g.red = null), g
            }),
            (ye.prototype.imul = function (f, g) {
                if (f.isZero() || g.isZero()) return (f.words[0] = 0), (f.length = 1), f
                var y = f.imul(g),
                    w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    E = y.isub(w).iushrn(this.shift),
                    $ = E
                return E.cmp(this.m) >= 0 ? ($ = E.isub(this.m)) : E.cmpn(0) < 0 && ($ = E.iadd(this.m)), $._forceRed(this)
            }),
            (ye.prototype.mul = function (f, g) {
                if (f.isZero() || g.isZero()) return new s(0)._forceRed(this)
                var y = f.mul(g),
                    w = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    E = y.isub(w).iushrn(this.shift),
                    $ = E
                return E.cmp(this.m) >= 0 ? ($ = E.isub(this.m)) : E.cmpn(0) < 0 && ($ = E.iadd(this.m)), $._forceRed(this)
            }),
            (ye.prototype.invm = function (f) {
                var g = this.imod(f._invmp(this.m).mul(this.r2))
                return g._forceRed(this)
            })
    })(e, yg)
})(_g)
var Pe = _g.exports
const ew = "logger/5.5.0"
let Qd = !1,
    eh = !1
const Ra = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 }
let th = Ra.default,
    mu = null
function tw() {
    try {
        const e = []
        if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
                try {
                    if ("test".normalize(t) !== "test") throw new Error("bad normalize")
                } catch {
                    e.push(t)
                }
            }),
            e.length)
        )
            throw new Error("missing " + e.join(", "))
        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
    } catch (e) {
        return e.message
    }
    return null
}
const rh = tw()
var mf
;(function (e) {
    ;(e.DEBUG = "DEBUG"), (e.INFO = "INFO"), (e.WARNING = "WARNING"), (e.ERROR = "ERROR"), (e.OFF = "OFF")
})(mf || (mf = {}))
var vf
;(function (e) {
    ;(e.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
        (e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
        (e.NETWORK_ERROR = "NETWORK_ERROR"),
        (e.SERVER_ERROR = "SERVER_ERROR"),
        (e.TIMEOUT = "TIMEOUT"),
        (e.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
        (e.NUMERIC_FAULT = "NUMERIC_FAULT"),
        (e.MISSING_NEW = "MISSING_NEW"),
        (e.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
        (e.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
        (e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
        (e.CALL_EXCEPTION = "CALL_EXCEPTION"),
        (e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
        (e.NONCE_EXPIRED = "NONCE_EXPIRED"),
        (e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
        (e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
        (e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED")
})(vf || (vf = {}))
const nh = "0123456789abcdef"
class q {
    constructor(t) {
        Object.defineProperty(this, "version", { enumerable: !0, value: t, writable: !1 })
    }
    _log(t, r) {
        const n = t.toLowerCase()
        Ra[n] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(th > Ra[n]) && console.log.apply(console, r)
    }
    debug(...t) {
        this._log(q.levels.DEBUG, t)
    }
    info(...t) {
        this._log(q.levels.INFO, t)
    }
    warn(...t) {
        this._log(q.levels.WARNING, t)
    }
    makeError(t, r, n) {
        if (eh) return this.makeError("censored error", r, {})
        r || (r = q.errors.UNKNOWN_ERROR), n || (n = {})
        const i = []
        Object.keys(n).forEach((a) => {
            const l = n[a]
            try {
                if (l instanceof Uint8Array) {
                    let u = ""
                    for (let c = 0; c < l.length; c++) (u += nh[l[c] >> 4]), (u += nh[l[c] & 15])
                    i.push(a + "=Uint8Array(0x" + u + ")")
                } else i.push(a + "=" + JSON.stringify(l))
            } catch {
                i.push(a + "=" + JSON.stringify(n[a].toString()))
            }
        }),
            i.push(`code=${r}`),
            i.push(`version=${this.version}`)
        const s = t
        i.length && (t += " (" + i.join(", ") + ")")
        const o = new Error(t)
        return (
            (o.reason = s),
            (o.code = r),
            Object.keys(n).forEach(function (a) {
                o[a] = n[a]
            }),
            o
        )
    }
    throwError(t, r, n) {
        throw this.makeError(t, r, n)
    }
    throwArgumentError(t, r, n) {
        return this.throwError(t, q.errors.INVALID_ARGUMENT, { argument: r, value: n })
    }
    assert(t, r, n, i) {
        t || this.throwError(r, n, i)
    }
    assertArgument(t, r, n, i) {
        t || this.throwArgumentError(r, n, i)
    }
    checkNormalize(t) {
        rh &&
            this.throwError("platform missing String.prototype.normalize", q.errors.UNSUPPORTED_OPERATION, {
                operation: "String.prototype.normalize",
                form: rh,
            })
    }
    checkSafeUint53(t, r) {
        typeof t == "number" &&
            (r == null && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
                this.throwError(r, q.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: t }),
            t % 1 && this.throwError(r, q.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: t }))
    }
    checkArgumentCount(t, r, n) {
        n ? (n = ": " + n) : (n = ""),
            t < r && this.throwError("missing argument" + n, q.errors.MISSING_ARGUMENT, { count: t, expectedCount: r }),
            t > r && this.throwError("too many arguments" + n, q.errors.UNEXPECTED_ARGUMENT, { count: t, expectedCount: r })
    }
    checkNew(t, r) {
        ;(t === Object || t == null) && this.throwError("missing new", q.errors.MISSING_NEW, { name: r.name })
    }
    checkAbstract(t, r) {
        t === r
            ? this.throwError(
                  "cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class",
                  q.errors.UNSUPPORTED_OPERATION,
                  { name: t.name, operation: "new" }
              )
            : (t === Object || t == null) && this.throwError("missing new", q.errors.MISSING_NEW, { name: r.name })
    }
    static globalLogger() {
        return mu || (mu = new q(ew)), mu
    }
    static setCensorship(t, r) {
        if (
            (!t &&
                r &&
                this.globalLogger().throwError("cannot permanently disable censorship", q.errors.UNSUPPORTED_OPERATION, {
                    operation: "setCensorship",
                }),
            Qd)
        ) {
            if (!t) return
            this.globalLogger().throwError("error censorship permanent", q.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" })
        }
        ;(eh = !!t), (Qd = !!r)
    }
    static setLogLevel(t) {
        const r = Ra[t.toLowerCase()]
        if (r == null) {
            q.globalLogger().warn("invalid log level - " + t)
            return
        }
        th = r
    }
    static from(t) {
        return new q(t)
    }
}
q.errors = vf
q.levels = mf
const rw = "bytes/5.5.0",
    kt = new q(rw)
function wg(e) {
    return !!e.toHexString
}
function Ns(e) {
    return (
        e.slice ||
            (e.slice = function () {
                const t = Array.prototype.slice.call(arguments)
                return Ns(new Uint8Array(Array.prototype.slice.apply(e, t)))
            }),
        e
    )
}
function Tc(e) {
    return (Xe(e) && !(e.length % 2)) || na(e)
}
function ih(e) {
    return typeof e == "number" && e == e && e % 1 === 0
}
function na(e) {
    if (e == null) return !1
    if (e.constructor === Uint8Array) return !0
    if (typeof e == "string" || !ih(e.length) || e.length < 0) return !1
    for (let t = 0; t < e.length; t++) {
        const r = e[t]
        if (!ih(r) || r < 0 || r >= 256) return !1
    }
    return !0
}
function Ne(e, t) {
    if ((t || (t = {}), typeof e == "number")) {
        kt.checkSafeUint53(e, "invalid arrayify value")
        const r = []
        for (; e; ) r.unshift(e & 255), (e = parseInt(String(e / 256)))
        return r.length === 0 && r.push(0), Ns(new Uint8Array(r))
    }
    if ((t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), wg(e) && (e = e.toHexString()), Xe(e))) {
        let r = e.substring(2)
        r.length % 2 &&
            (t.hexPad === "left"
                ? (r = "0x0" + r.substring(2))
                : t.hexPad === "right"
                ? (r += "0")
                : kt.throwArgumentError("hex data is odd-length", "value", e))
        const n = []
        for (let i = 0; i < r.length; i += 2) n.push(parseInt(r.substring(i, i + 2), 16))
        return Ns(new Uint8Array(n))
    }
    return na(e) ? Ns(new Uint8Array(e)) : kt.throwArgumentError("invalid arrayify value", "value", e)
}
function wr(e) {
    const t = e.map((i) => Ne(i)),
        r = t.reduce((i, s) => i + s.length, 0),
        n = new Uint8Array(r)
    return t.reduce((i, s) => (n.set(s, i), i + s.length), 0), Ns(n)
}
function Ms(e) {
    let t = Ne(e)
    if (t.length === 0) return t
    let r = 0
    for (; r < t.length && t[r] === 0; ) r++
    return r && (t = t.slice(r)), t
}
function nw(e, t) {
    ;(e = Ne(e)), e.length > t && kt.throwArgumentError("value out of range", "value", arguments[0])
    const r = new Uint8Array(t)
    return r.set(e, t - e.length), Ns(r)
}
function Xe(e, t) {
    return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || (t && e.length !== 2 + 2 * t))
}
const vu = "0123456789abcdef"
function Se(e, t) {
    if ((t || (t = {}), typeof e == "number")) {
        kt.checkSafeUint53(e, "invalid hexlify value")
        let r = ""
        for (; e; ) (r = vu[e & 15] + r), (e = Math.floor(e / 16))
        return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
    }
    if (typeof e == "bigint") return (e = e.toString(16)), e.length % 2 ? "0x0" + e : "0x" + e
    if ((t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), wg(e))) return e.toHexString()
    if (Xe(e))
        return (
            e.length % 2 &&
                (t.hexPad === "left"
                    ? (e = "0x0" + e.substring(2))
                    : t.hexPad === "right"
                    ? (e += "0")
                    : kt.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
        )
    if (na(e)) {
        let r = "0x"
        for (let n = 0; n < e.length; n++) {
            let i = e[n]
            r += vu[(i & 240) >> 4] + vu[i & 15]
        }
        return r
    }
    return kt.throwArgumentError("invalid hexlify value", "value", e)
}
function ia(e) {
    if (typeof e != "string") e = Se(e)
    else if (!Xe(e) || e.length % 2) return null
    return (e.length - 2) / 2
}
function Pn(e, t, r) {
    return (
        typeof e != "string" ? (e = Se(e)) : (!Xe(e) || e.length % 2) && kt.throwArgumentError("invalid hexData", "value", e),
        (t = 2 + 2 * t),
        r != null ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
    )
}
function Hr(e) {
    let t = "0x"
    return (
        e.forEach((r) => {
            t += Se(r).substring(2)
        }),
        t
    )
}
function xc(e) {
    const t = iw(Se(e, { hexPad: "left" }))
    return t === "0x" ? "0x0" : t
}
function iw(e) {
    typeof e != "string" && (e = Se(e)), Xe(e) || kt.throwArgumentError("invalid hex string", "value", e), (e = e.substring(2))
    let t = 0
    for (; t < e.length && e[t] === "0"; ) t++
    return "0x" + e.substring(t)
}
function It(e, t) {
    for (
        typeof e != "string" ? (e = Se(e)) : Xe(e) || kt.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * t + 2 && kt.throwArgumentError("value out of range", "value", arguments[1]);
        e.length < 2 * t + 2;

    )
        e = "0x0" + e.substring(2)
    return e
}
function $l(e) {
    const t = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0 }
    if (Tc(e)) {
        const r = Ne(e)
        r.length !== 65 && kt.throwArgumentError("invalid signature string; must be 65 bytes", "signature", e),
            (t.r = Se(r.slice(0, 32))),
            (t.s = Se(r.slice(32, 64))),
            (t.v = r[64]),
            t.v < 27 && (t.v === 0 || t.v === 1 ? (t.v += 27) : kt.throwArgumentError("signature invalid v byte", "signature", e)),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.recoveryParam && (r[32] |= 128),
            (t._vs = Se(r.slice(32, 64)))
    } else {
        if (((t.r = e.r), (t.s = e.s), (t.v = e.v), (t.recoveryParam = e.recoveryParam), (t._vs = e._vs), t._vs != null)) {
            const i = nw(Ne(t._vs), 32)
            t._vs = Se(i)
            const s = i[0] >= 128 ? 1 : 0
            t.recoveryParam == null
                ? (t.recoveryParam = s)
                : t.recoveryParam !== s && kt.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e),
                (i[0] &= 127)
            const o = Se(i)
            t.s == null ? (t.s = o) : t.s !== o && kt.throwArgumentError("signature v mismatch _vs", "signature", e)
        }
        if (t.recoveryParam == null)
            t.v == null
                ? kt.throwArgumentError("signature missing v and recoveryParam", "signature", e)
                : t.v === 0 || t.v === 1
                ? (t.recoveryParam = t.v)
                : (t.recoveryParam = 1 - (t.v % 2))
        else if (t.v == null) t.v = 27 + t.recoveryParam
        else {
            const i = t.v === 0 || t.v === 1 ? t.v : 1 - (t.v % 2)
            t.recoveryParam !== i && kt.throwArgumentError("signature recoveryParam mismatch v", "signature", e)
        }
        t.r == null || !Xe(t.r) ? kt.throwArgumentError("signature missing or invalid r", "signature", e) : (t.r = It(t.r, 32)),
            t.s == null || !Xe(t.s) ? kt.throwArgumentError("signature missing or invalid s", "signature", e) : (t.s = It(t.s, 32))
        const r = Ne(t.s)
        r[0] >= 128 && kt.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128)
        const n = Se(r)
        t._vs && (Xe(t._vs) || kt.throwArgumentError("signature invalid _vs", "signature", e), (t._vs = It(t._vs, 32))),
            t._vs == null ? (t._vs = n) : t._vs !== n && kt.throwArgumentError("signature _vs mismatch v and s", "signature", e)
    }
    return t
}
const sw = "bignumber/5.5.0"
var el = Pe.BN
const en = new q(sw),
    bu = {},
    sh = 9007199254740991
let oh = !1
class pe {
    constructor(t, r) {
        en.checkNew(new.target, pe),
            t !== bu &&
                en.throwError("cannot call constructor directly; use BigNumber.from", q.errors.UNSUPPORTED_OPERATION, {
                    operation: "new (BigNumber)",
                }),
            (this._hex = r),
            (this._isBigNumber = !0),
            Object.freeze(this)
    }
    fromTwos(t) {
        return sr(ze(this).fromTwos(t))
    }
    toTwos(t) {
        return sr(ze(this).toTwos(t))
    }
    abs() {
        return this._hex[0] === "-" ? pe.from(this._hex.substring(1)) : this
    }
    add(t) {
        return sr(ze(this).add(ze(t)))
    }
    sub(t) {
        return sr(ze(this).sub(ze(t)))
    }
    div(t) {
        return pe.from(t).isZero() && Nr("division by zero", "div"), sr(ze(this).div(ze(t)))
    }
    mul(t) {
        return sr(ze(this).mul(ze(t)))
    }
    mod(t) {
        const r = ze(t)
        return r.isNeg() && Nr("cannot modulo negative values", "mod"), sr(ze(this).umod(r))
    }
    pow(t) {
        const r = ze(t)
        return r.isNeg() && Nr("cannot raise to negative values", "pow"), sr(ze(this).pow(r))
    }
    and(t) {
        const r = ze(t)
        return (this.isNegative() || r.isNeg()) && Nr("cannot 'and' negative values", "and"), sr(ze(this).and(r))
    }
    or(t) {
        const r = ze(t)
        return (this.isNegative() || r.isNeg()) && Nr("cannot 'or' negative values", "or"), sr(ze(this).or(r))
    }
    xor(t) {
        const r = ze(t)
        return (this.isNegative() || r.isNeg()) && Nr("cannot 'xor' negative values", "xor"), sr(ze(this).xor(r))
    }
    mask(t) {
        return (this.isNegative() || t < 0) && Nr("cannot mask negative values", "mask"), sr(ze(this).maskn(t))
    }
    shl(t) {
        return (this.isNegative() || t < 0) && Nr("cannot shift negative values", "shl"), sr(ze(this).shln(t))
    }
    shr(t) {
        return (this.isNegative() || t < 0) && Nr("cannot shift negative values", "shr"), sr(ze(this).shrn(t))
    }
    eq(t) {
        return ze(this).eq(ze(t))
    }
    lt(t) {
        return ze(this).lt(ze(t))
    }
    lte(t) {
        return ze(this).lte(ze(t))
    }
    gt(t) {
        return ze(this).gt(ze(t))
    }
    gte(t) {
        return ze(this).gte(ze(t))
    }
    isNegative() {
        return this._hex[0] === "-"
    }
    isZero() {
        return ze(this).isZero()
    }
    toNumber() {
        try {
            return ze(this).toNumber()
        } catch {
            Nr("overflow", "toNumber", this.toString())
        }
        return null
    }
    toBigInt() {
        try {
            return BigInt(this.toString())
        } catch {}
        return en.throwError("this platform does not support BigInt", q.errors.UNSUPPORTED_OPERATION, { value: this.toString() })
    }
    toString() {
        return (
            arguments.length > 0 &&
                (arguments[0] === 10
                    ? oh || ((oh = !0), en.warn("BigNumber.toString does not accept any parameters; base-10 is assumed"))
                    : arguments[0] === 16
                    ? en.throwError(
                          "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                          q.errors.UNEXPECTED_ARGUMENT,
                          {}
                      )
                    : en.throwError("BigNumber.toString does not accept parameters", q.errors.UNEXPECTED_ARGUMENT, {})),
            ze(this).toString(10)
        )
    }
    toHexString() {
        return this._hex
    }
    toJSON(t) {
        return { type: "BigNumber", hex: this.toHexString() }
    }
    static from(t) {
        if (t instanceof pe) return t
        if (typeof t == "string")
            return t.match(/^-?0x[0-9a-f]+$/i)
                ? new pe(bu, Ko(t))
                : t.match(/^-?[0-9]+$/)
                ? new pe(bu, Ko(new el(t)))
                : en.throwArgumentError("invalid BigNumber string", "value", t)
        if (typeof t == "number")
            return (
                t % 1 && Nr("underflow", "BigNumber.from", t), (t >= sh || t <= -sh) && Nr("overflow", "BigNumber.from", t), pe.from(String(t))
            )
        const r = t
        if (typeof r == "bigint") return pe.from(r.toString())
        if (na(r)) return pe.from(Se(r))
        if (r)
            if (r.toHexString) {
                const n = r.toHexString()
                if (typeof n == "string") return pe.from(n)
            } else {
                let n = r._hex
                if (
                    (n == null && r.type === "BigNumber" && (n = r.hex), typeof n == "string" && (Xe(n) || (n[0] === "-" && Xe(n.substring(1)))))
                )
                    return pe.from(n)
            }
        return en.throwArgumentError("invalid BigNumber value", "value", t)
    }
    static isBigNumber(t) {
        return !!(t && t._isBigNumber)
    }
}
function Ko(e) {
    if (typeof e != "string") return Ko(e.toString(16))
    if (e[0] === "-")
        return (e = e.substring(1)), e[0] === "-" && en.throwArgumentError("invalid hex", "value", e), (e = Ko(e)), e === "0x00" ? e : "-" + e
    if ((e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x")) return "0x00"
    for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00"; ) e = "0x" + e.substring(4)
    return e
}
function sr(e) {
    return pe.from(Ko(e))
}
function ze(e) {
    const t = pe.from(e).toHexString()
    return t[0] === "-" ? new el("-" + t.substring(3), 16) : new el(t.substring(2), 16)
}
function Nr(e, t, r) {
    const n = { fault: e, operation: t }
    return r != null && (n.value = r), en.throwError(e, q.errors.NUMERIC_FAULT, n)
}
function ow(e) {
    return new el(e, 36).toString(16)
}
const aw = "properties/5.5.0"
var lw =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const tl = new q(aw)
function ne(e, t, r) {
    Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 })
}
function Er(e, t) {
    for (let r = 0; r < 32; r++) {
        if (e[t]) return e[t]
        if (!e.prototype || typeof e.prototype != "object") break
        e = Object.getPrototypeOf(e.prototype).constructor
    }
    return null
}
function Mt(e) {
    return lw(this, void 0, void 0, function* () {
        const t = Object.keys(e).map((n) => {
            const i = e[n]
            return Promise.resolve(i).then((s) => ({ key: n, value: s }))
        })
        return (yield Promise.all(t)).reduce((n, i) => ((n[i.key] = i.value), n), {})
    })
}
function uw(e, t) {
    ;(!e || typeof e != "object") && tl.throwArgumentError("invalid object", "object", e),
        Object.keys(e).forEach((r) => {
            t[r] || tl.throwArgumentError("invalid object key - " + r, "transaction:" + r, e)
        })
}
function Vt(e) {
    const t = {}
    for (const r in e) t[r] = e[r]
    return t
}
const fw = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 }
function Eg(e) {
    if (e == null || fw[typeof e]) return !0
    if (Array.isArray(e) || typeof e == "object") {
        if (!Object.isFrozen(e)) return !1
        const t = Object.keys(e)
        for (let r = 0; r < t.length; r++) {
            let n = null
            try {
                n = e[t[r]]
            } catch {
                continue
            }
            if (!Eg(n)) return !1
        }
        return !0
    }
    return tl.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
}
function cw(e) {
    if (Eg(e)) return e
    if (Array.isArray(e)) return Object.freeze(e.map((t) => Fn(t)))
    if (typeof e == "object") {
        const t = {}
        for (const r in e) {
            const n = e[r]
            n !== void 0 && ne(t, r, Fn(n))
        }
        return t
    }
    return tl.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
}
function Fn(e) {
    return cw(e)
}
class sa {
    constructor(t) {
        for (const r in t) this[r] = Fn(t[r])
    }
}
const oa = "abi/5.5.0",
    Ke = new q(oa),
    es = {}
let ah = { calldata: !0, memory: !0, storage: !0 },
    dw = { calldata: !0, memory: !0 }
function Ea(e, t) {
    if (e === "bytes" || e === "string") {
        if (ah[t]) return !0
    } else if (e === "address") {
        if (t === "payable") return !0
    } else if ((e.indexOf("[") >= 0 || e === "tuple") && dw[t]) return !0
    return (ah[t] || t === "payable") && Ke.throwArgumentError("invalid modifier", "name", t), !1
}
function hw(e, t) {
    let r = e
    function n(a) {
        Ke.throwArgumentError(`unexpected character at position ${a}`, "param", e)
    }
    e = e.replace(/\s/g, " ")
    function i(a) {
        let l = { type: "", name: "", parent: a, state: { allowType: !0 } }
        return t && (l.indexed = !1), l
    }
    let s = { type: "", name: "", state: { allowType: !0 } },
        o = s
    for (let a = 0; a < e.length; a++) {
        let l = e[a]
        switch (l) {
            case "(":
                o.state.allowType && o.type === "" ? (o.type = "tuple") : o.state.allowParams || n(a),
                    (o.state.allowType = !1),
                    (o.type = ys(o.type)),
                    (o.components = [i(o)]),
                    (o = o.components[0])
                break
            case ")":
                delete o.state,
                    o.name === "indexed" && (t || n(a), (o.indexed = !0), (o.name = "")),
                    Ea(o.type, o.name) && (o.name = ""),
                    (o.type = ys(o.type))
                let u = o
                ;(o = o.parent), o || n(a), delete u.parent, (o.state.allowParams = !1), (o.state.allowName = !0), (o.state.allowArray = !0)
                break
            case ",":
                delete o.state,
                    o.name === "indexed" && (t || n(a), (o.indexed = !0), (o.name = "")),
                    Ea(o.type, o.name) && (o.name = ""),
                    (o.type = ys(o.type))
                let c = i(o.parent)
                o.parent.components.push(c), delete o.parent, (o = c)
                break
            case " ":
                o.state.allowType &&
                    o.type !== "" &&
                    ((o.type = ys(o.type)), delete o.state.allowType, (o.state.allowName = !0), (o.state.allowParams = !0)),
                    o.state.allowName &&
                        o.name !== "" &&
                        (o.name === "indexed"
                            ? (t || n(a), o.indexed && n(a), (o.indexed = !0), (o.name = ""))
                            : Ea(o.type, o.name)
                            ? (o.name = "")
                            : (o.state.allowName = !1))
                break
            case "[":
                o.state.allowArray || n(a), (o.type += l), (o.state.allowArray = !1), (o.state.allowName = !1), (o.state.readArray = !0)
                break
            case "]":
                o.state.readArray || n(a), (o.type += l), (o.state.readArray = !1), (o.state.allowArray = !0), (o.state.allowName = !0)
                break
            default:
                o.state.allowType
                    ? ((o.type += l), (o.state.allowParams = !0), (o.state.allowArray = !0))
                    : o.state.allowName
                    ? ((o.name += l), delete o.state.allowArray)
                    : o.state.readArray
                    ? (o.type += l)
                    : n(a)
        }
    }
    return (
        o.parent && Ke.throwArgumentError("unexpected eof", "param", e),
        delete s.state,
        o.name === "indexed"
            ? (t || n(r.length - 7), o.indexed && n(r.length - 7), (o.indexed = !0), (o.name = ""))
            : Ea(o.type, o.name) && (o.name = ""),
        (s.type = ys(s.type)),
        s
    )
}
function La(e, t) {
    for (let r in t) ne(e, r, t[r])
}
const Je = Object.freeze({ sighash: "sighash", minimal: "minimal", full: "full", json: "json" }),
    pw = new RegExp(/^(.*)\[([0-9]*)\]$/)
class Ht {
    constructor(t, r) {
        t !== es && Ke.throwError("use fromString", q.errors.UNSUPPORTED_OPERATION, { operation: "new ParamType()" }), La(this, r)
        let n = this.type.match(pw)
        n
            ? La(this, {
                  arrayLength: parseInt(n[2] || "-1"),
                  arrayChildren: Ht.fromObject({ type: n[1], components: this.components }),
                  baseType: "array",
              })
            : La(this, { arrayLength: null, arrayChildren: null, baseType: this.components != null ? "tuple" : this.type }),
            (this._isParamType = !0),
            Object.freeze(this)
    }
    format(t) {
        if ((t || (t = Je.sighash), Je[t] || Ke.throwArgumentError("invalid format type", "format", t), t === Je.json)) {
            let n = { type: this.baseType === "tuple" ? "tuple" : this.type, name: this.name || void 0 }
            return (
                typeof this.indexed == "boolean" && (n.indexed = this.indexed),
                this.components && (n.components = this.components.map((i) => JSON.parse(i.format(t)))),
                JSON.stringify(n)
            )
        }
        let r = ""
        return (
            this.baseType === "array"
                ? ((r += this.arrayChildren.format(t)), (r += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]"))
                : this.baseType === "tuple"
                ? (t !== Je.sighash && (r += this.type),
                  (r += "(" + this.components.map((n) => n.format(t)).join(t === Je.full ? ", " : ",") + ")"))
                : (r += this.type),
            t !== Je.sighash && (this.indexed === !0 && (r += " indexed"), t === Je.full && this.name && (r += " " + this.name)),
            r
        )
    }
    static from(t, r) {
        return typeof t == "string" ? Ht.fromString(t, r) : Ht.fromObject(t)
    }
    static fromObject(t) {
        return Ht.isParamType(t)
            ? t
            : new Ht(es, {
                  name: t.name || null,
                  type: ys(t.type),
                  indexed: t.indexed == null ? null : !!t.indexed,
                  components: t.components ? t.components.map(Ht.fromObject) : null,
              })
    }
    static fromString(t, r) {
        function n(i) {
            return Ht.fromObject({ name: i.name, type: i.type, indexed: i.indexed, components: i.components })
        }
        return n(hw(t, !!r))
    }
    static isParamType(t) {
        return !!(t != null && t._isParamType)
    }
}
function Go(e, t) {
    return mw(e).map((r) => Ht.fromString(r, t))
}
class On {
    constructor(t, r) {
        t !== es && Ke.throwError("use a static from method", q.errors.UNSUPPORTED_OPERATION, { operation: "new Fragment()" }),
            La(this, r),
            (this._isFragment = !0),
            Object.freeze(this)
    }
    static from(t) {
        return On.isFragment(t) ? t : typeof t == "string" ? On.fromString(t) : On.fromObject(t)
    }
    static fromObject(t) {
        if (On.isFragment(t)) return t
        switch (t.type) {
            case "function":
                return an.fromObject(t)
            case "event":
                return Bn.fromObject(t)
            case "constructor":
                return on.fromObject(t)
            case "error":
                return ci.fromObject(t)
            case "fallback":
            case "receive":
                return null
        }
        return Ke.throwArgumentError("invalid fragment object", "value", t)
    }
    static fromString(t) {
        return (
            (t = t.replace(/\s/g, " ")),
            (t = t.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")),
            (t = t.trim()),
            t.split(" ")[0] === "event"
                ? Bn.fromString(t.substring(5).trim())
                : t.split(" ")[0] === "function"
                ? an.fromString(t.substring(8).trim())
                : t.split("(")[0].trim() === "constructor"
                ? on.fromString(t.trim())
                : t.split(" ")[0] === "error"
                ? ci.fromString(t.substring(5).trim())
                : Ke.throwArgumentError("unsupported fragment", "value", t)
        )
    }
    static isFragment(t) {
        return !!(t && t._isFragment)
    }
}
class Bn extends On {
    format(t) {
        if ((t || (t = Je.sighash), Je[t] || Ke.throwArgumentError("invalid format type", "format", t), t === Je.json))
            return JSON.stringify({
                type: "event",
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map((n) => JSON.parse(n.format(t))),
            })
        let r = ""
        return (
            t !== Je.sighash && (r += "event "),
            (r += this.name + "(" + this.inputs.map((n) => n.format(t)).join(t === Je.full ? ", " : ",") + ") "),
            t !== Je.sighash && this.anonymous && (r += "anonymous "),
            r.trim()
        )
    }
    static from(t) {
        return typeof t == "string" ? Bn.fromString(t) : Bn.fromObject(t)
    }
    static fromObject(t) {
        if (Bn.isEventFragment(t)) return t
        t.type !== "event" && Ke.throwArgumentError("invalid event object", "value", t)
        const r = { name: Yo(t.name), anonymous: t.anonymous, inputs: t.inputs ? t.inputs.map(Ht.fromObject) : [], type: "event" }
        return new Bn(es, r)
    }
    static fromString(t) {
        let r = t.match(Jo)
        r || Ke.throwArgumentError("invalid event string", "value", t)
        let n = !1
        return (
            r[3].split(" ").forEach((i) => {
                switch (i.trim()) {
                    case "anonymous":
                        n = !0
                        break
                    case "":
                        break
                    default:
                        Ke.warn("unknown modifier: " + i)
                }
            }),
            Bn.fromObject({ name: r[1].trim(), anonymous: n, inputs: Go(r[2], !0), type: "event" })
        )
    }
    static isEventFragment(t) {
        return t && t._isFragment && t.type === "event"
    }
}
function Ag(e, t) {
    t.gas = null
    let r = e.split("@")
    return r.length !== 1
        ? (r.length > 2 && Ke.throwArgumentError("invalid human-readable ABI signature", "value", e),
          r[1].match(/^[0-9]+$/) || Ke.throwArgumentError("invalid human-readable ABI signature gas", "value", e),
          (t.gas = pe.from(r[1])),
          r[0])
        : e
}
function Sg(e, t) {
    ;(t.constant = !1),
        (t.payable = !1),
        (t.stateMutability = "nonpayable"),
        e.split(" ").forEach((r) => {
            switch (r.trim()) {
                case "constant":
                    t.constant = !0
                    break
                case "payable":
                    ;(t.payable = !0), (t.stateMutability = "payable")
                    break
                case "nonpayable":
                    ;(t.payable = !1), (t.stateMutability = "nonpayable")
                    break
                case "pure":
                    ;(t.constant = !0), (t.stateMutability = "pure")
                    break
                case "view":
                    ;(t.constant = !0), (t.stateMutability = "view")
                    break
                case "external":
                case "public":
                case "":
                    break
                default:
                    console.log("unknown modifier: " + r)
            }
        })
}
function Tg(e) {
    let t = { constant: !1, payable: !0, stateMutability: "payable" }
    return (
        e.stateMutability != null
            ? ((t.stateMutability = e.stateMutability),
              (t.constant = t.stateMutability === "view" || t.stateMutability === "pure"),
              e.constant != null &&
                  !!e.constant !== t.constant &&
                  Ke.throwArgumentError("cannot have constant function with mutability " + t.stateMutability, "value", e),
              (t.payable = t.stateMutability === "payable"),
              e.payable != null &&
                  !!e.payable !== t.payable &&
                  Ke.throwArgumentError("cannot have payable function with mutability " + t.stateMutability, "value", e))
            : e.payable != null
            ? ((t.payable = !!e.payable),
              e.constant == null &&
                  !t.payable &&
                  e.type !== "constructor" &&
                  Ke.throwArgumentError("unable to determine stateMutability", "value", e),
              (t.constant = !!e.constant),
              t.constant ? (t.stateMutability = "view") : (t.stateMutability = t.payable ? "payable" : "nonpayable"),
              t.payable && t.constant && Ke.throwArgumentError("cannot have constant payable function", "value", e))
            : e.constant != null
            ? ((t.constant = !!e.constant), (t.payable = !t.constant), (t.stateMutability = t.constant ? "view" : "payable"))
            : e.type !== "constructor" && Ke.throwArgumentError("unable to determine stateMutability", "value", e),
        t
    )
}
class on extends On {
    format(t) {
        if ((t || (t = Je.sighash), Je[t] || Ke.throwArgumentError("invalid format type", "format", t), t === Je.json))
            return JSON.stringify({
                type: "constructor",
                stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
                payable: this.payable,
                gas: this.gas ? this.gas.toNumber() : void 0,
                inputs: this.inputs.map((n) => JSON.parse(n.format(t))),
            })
        t === Je.sighash &&
            Ke.throwError("cannot format a constructor for sighash", q.errors.UNSUPPORTED_OPERATION, { operation: "format(sighash)" })
        let r = "constructor(" + this.inputs.map((n) => n.format(t)).join(t === Je.full ? ", " : ",") + ") "
        return this.stateMutability && this.stateMutability !== "nonpayable" && (r += this.stateMutability + " "), r.trim()
    }
    static from(t) {
        return typeof t == "string" ? on.fromString(t) : on.fromObject(t)
    }
    static fromObject(t) {
        if (on.isConstructorFragment(t)) return t
        t.type !== "constructor" && Ke.throwArgumentError("invalid constructor object", "value", t)
        let r = Tg(t)
        r.constant && Ke.throwArgumentError("constructor cannot be constant", "value", t)
        const n = {
            name: null,
            type: t.type,
            inputs: t.inputs ? t.inputs.map(Ht.fromObject) : [],
            payable: r.payable,
            stateMutability: r.stateMutability,
            gas: t.gas ? pe.from(t.gas) : null,
        }
        return new on(es, n)
    }
    static fromString(t) {
        let r = { type: "constructor" }
        t = Ag(t, r)
        let n = t.match(Jo)
        return (
            (!n || n[1].trim() !== "constructor") && Ke.throwArgumentError("invalid constructor string", "value", t),
            (r.inputs = Go(n[2].trim(), !1)),
            Sg(n[3].trim(), r),
            on.fromObject(r)
        )
    }
    static isConstructorFragment(t) {
        return t && t._isFragment && t.type === "constructor"
    }
}
class an extends on {
    format(t) {
        if ((t || (t = Je.sighash), Je[t] || Ke.throwArgumentError("invalid format type", "format", t), t === Je.json))
            return JSON.stringify({
                type: "function",
                name: this.name,
                constant: this.constant,
                stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
                payable: this.payable,
                gas: this.gas ? this.gas.toNumber() : void 0,
                inputs: this.inputs.map((n) => JSON.parse(n.format(t))),
                outputs: this.outputs.map((n) => JSON.parse(n.format(t))),
            })
        let r = ""
        return (
            t !== Je.sighash && (r += "function "),
            (r += this.name + "(" + this.inputs.map((n) => n.format(t)).join(t === Je.full ? ", " : ",") + ") "),
            t !== Je.sighash &&
                (this.stateMutability
                    ? this.stateMutability !== "nonpayable" && (r += this.stateMutability + " ")
                    : this.constant && (r += "view "),
                this.outputs && this.outputs.length && (r += "returns (" + this.outputs.map((n) => n.format(t)).join(", ") + ") "),
                this.gas != null && (r += "@" + this.gas.toString() + " ")),
            r.trim()
        )
    }
    static from(t) {
        return typeof t == "string" ? an.fromString(t) : an.fromObject(t)
    }
    static fromObject(t) {
        if (an.isFunctionFragment(t)) return t
        t.type !== "function" && Ke.throwArgumentError("invalid function object", "value", t)
        let r = Tg(t)
        const n = {
            type: t.type,
            name: Yo(t.name),
            constant: r.constant,
            inputs: t.inputs ? t.inputs.map(Ht.fromObject) : [],
            outputs: t.outputs ? t.outputs.map(Ht.fromObject) : [],
            payable: r.payable,
            stateMutability: r.stateMutability,
            gas: t.gas ? pe.from(t.gas) : null,
        }
        return new an(es, n)
    }
    static fromString(t) {
        let r = { type: "function" }
        t = Ag(t, r)
        let n = t.split(" returns ")
        n.length > 2 && Ke.throwArgumentError("invalid function string", "value", t)
        let i = n[0].match(Jo)
        if (
            (i || Ke.throwArgumentError("invalid function signature", "value", t),
            (r.name = i[1].trim()),
            r.name && Yo(r.name),
            (r.inputs = Go(i[2], !1)),
            Sg(i[3].trim(), r),
            n.length > 1)
        ) {
            let s = n[1].match(Jo)
            ;(s[1].trim() != "" || s[3].trim() != "") && Ke.throwArgumentError("unexpected tokens", "value", t), (r.outputs = Go(s[2], !1))
        } else r.outputs = []
        return an.fromObject(r)
    }
    static isFunctionFragment(t) {
        return t && t._isFragment && t.type === "function"
    }
}
function lh(e) {
    const t = e.format()
    return (t === "Error(string)" || t === "Panic(uint256)") && Ke.throwArgumentError(`cannot specify user defined ${t} error`, "fragment", e), e
}
class ci extends On {
    format(t) {
        if ((t || (t = Je.sighash), Je[t] || Ke.throwArgumentError("invalid format type", "format", t), t === Je.json))
            return JSON.stringify({ type: "error", name: this.name, inputs: this.inputs.map((n) => JSON.parse(n.format(t))) })
        let r = ""
        return (
            t !== Je.sighash && (r += "error "),
            (r += this.name + "(" + this.inputs.map((n) => n.format(t)).join(t === Je.full ? ", " : ",") + ") "),
            r.trim()
        )
    }
    static from(t) {
        return typeof t == "string" ? ci.fromString(t) : ci.fromObject(t)
    }
    static fromObject(t) {
        if (ci.isErrorFragment(t)) return t
        t.type !== "error" && Ke.throwArgumentError("invalid error object", "value", t)
        const r = { type: t.type, name: Yo(t.name), inputs: t.inputs ? t.inputs.map(Ht.fromObject) : [] }
        return lh(new ci(es, r))
    }
    static fromString(t) {
        let r = { type: "error" },
            n = t.match(Jo)
        return (
            n || Ke.throwArgumentError("invalid error signature", "value", t),
            (r.name = n[1].trim()),
            r.name && Yo(r.name),
            (r.inputs = Go(n[2], !1)),
            lh(ci.fromObject(r))
        )
    }
    static isErrorFragment(t) {
        return t && t._isFragment && t.type === "error"
    }
}
function ys(e) {
    return e.match(/^uint($|[^1-9])/) ? (e = "uint256" + e.substring(4)) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
}
const gw = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$")
function Yo(e) {
    return (!e || !e.match(gw)) && Ke.throwArgumentError(`invalid identifier "${e}"`, "value", e), e
}
const Jo = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")
function mw(e) {
    e = e.trim()
    let t = [],
        r = "",
        n = 0
    for (let i = 0; i < e.length; i++) {
        let s = e[i]
        s === "," && n === 0
            ? (t.push(r), (r = ""))
            : ((r += s), s === "(" ? n++ : s === ")" && (n--, n === -1 && Ke.throwArgumentError("unbalanced parenthesis", "value", e)))
    }
    return r && t.push(r), t
}
const Cc = new q(oa)
function vw(e) {
    const t = [],
        r = function (n, i) {
            if (!!Array.isArray(i))
                for (let s in i) {
                    const o = n.slice()
                    o.push(s)
                    try {
                        r(o, i[s])
                    } catch (a) {
                        t.push({ path: o, error: a })
                    }
                }
        }
    return r([], e), t
}
class jn {
    constructor(t, r, n, i) {
        ;(this.name = t), (this.type = r), (this.localName = n), (this.dynamic = i)
    }
    _throwError(t, r) {
        Cc.throwArgumentError(t, this.localName, r)
    }
}
class bf {
    constructor(t) {
        ne(this, "wordSize", t || 32), (this._data = []), (this._dataLength = 0), (this._padding = new Uint8Array(t))
    }
    get data() {
        return Hr(this._data)
    }
    get length() {
        return this._dataLength
    }
    _writeData(t) {
        return this._data.push(t), (this._dataLength += t.length), t.length
    }
    appendWriter(t) {
        return this._writeData(wr(t._data))
    }
    writeBytes(t) {
        let r = Ne(t)
        const n = r.length % this.wordSize
        return n && (r = wr([r, this._padding.slice(n)])), this._writeData(r)
    }
    _getValue(t) {
        let r = Ne(pe.from(t))
        return (
            r.length > this.wordSize &&
                Cc.throwError("value out-of-bounds", q.errors.BUFFER_OVERRUN, { length: this.wordSize, offset: r.length }),
            r.length % this.wordSize && (r = wr([this._padding.slice(r.length % this.wordSize), r])),
            r
        )
    }
    writeValue(t) {
        return this._writeData(this._getValue(t))
    }
    writeUpdatableValue() {
        const t = this._data.length
        return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (r) => {
                this._data[t] = this._getValue(r)
            }
        )
    }
}
class rl {
    constructor(t, r, n, i) {
        ne(this, "_data", Ne(t)), ne(this, "wordSize", r || 32), ne(this, "_coerceFunc", n), ne(this, "allowLoose", i), (this._offset = 0)
    }
    get data() {
        return Se(this._data)
    }
    get consumed() {
        return this._offset
    }
    static coerce(t, r) {
        let n = t.match("^u?int([0-9]+)$")
        return n && parseInt(n[1]) <= 48 && (r = r.toNumber()), r
    }
    coerce(t, r) {
        return this._coerceFunc ? this._coerceFunc(t, r) : rl.coerce(t, r)
    }
    _peekBytes(t, r, n) {
        let i = Math.ceil(r / this.wordSize) * this.wordSize
        return (
            this._offset + i > this._data.length &&
                (this.allowLoose && n && this._offset + r <= this._data.length
                    ? (i = r)
                    : Cc.throwError("data out-of-bounds", q.errors.BUFFER_OVERRUN, { length: this._data.length, offset: this._offset + i })),
            this._data.slice(this._offset, this._offset + i)
        )
    }
    subReader(t) {
        return new rl(this._data.slice(this._offset + t), this.wordSize, this._coerceFunc, this.allowLoose)
    }
    readBytes(t, r) {
        let n = this._peekBytes(0, t, !!r)
        return (this._offset += n.length), n.slice(0, t)
    }
    readValue() {
        return pe.from(this.readBytes(this.wordSize))
    }
}
var xg = { exports: {} }
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ ;(function (e) {
    ;(function () {
        var t = "input is invalid type",
            r = "finalize already called",
            n = typeof window == "object",
            i = n ? window : {}
        i.JS_SHA3_NO_WINDOW && (n = !1)
        var s = !n && typeof self == "object",
            o = !i.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node
        o ? (i = yg) : s && (i = self)
        var a = !i.JS_SHA3_NO_COMMON_JS && !0 && e.exports,
            l = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer != "undefined",
            u = "0123456789abcdef".split(""),
            c = [31, 7936, 2031616, 520093696],
            d = [4, 1024, 262144, 67108864],
            h = [1, 256, 65536, 16777216],
            v = [6, 1536, 393216, 100663296],
            b = [0, 8, 16, 24],
            _ = [
                1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648,
                138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770,
                2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0,
                2147516424, 2147483648,
            ],
            C = [224, 256, 384, 512],
            B = [128, 256],
            O = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            L = { 128: 168, 256: 136 }
        ;(i.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
            (Array.isArray = function (m) {
                return Object.prototype.toString.call(m) === "[object Array]"
            }),
            l &&
                (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
                (ArrayBuffer.isView = function (m) {
                    return typeof m == "object" && m.buffer && m.buffer.constructor === ArrayBuffer
                })
        for (
            var V = function (m, M, I) {
                    return function (F) {
                        return new ee(m, M, m).update(F)[I]()
                    }
                },
                H = function (m, M, I) {
                    return function (F, j) {
                        return new ee(m, M, j).update(F)[I]()
                    }
                },
                Q = function (m, M, I) {
                    return function (F, j, X, oe) {
                        return y["cshake" + m].update(F, j, X, oe)[I]()
                    }
                },
                K = function (m, M, I) {
                    return function (F, j, X, oe) {
                        return y["kmac" + m].update(F, j, X, oe)[I]()
                    }
                },
                ae = function (m, M, I, F) {
                    for (var j = 0; j < O.length; ++j) {
                        var X = O[j]
                        m[X] = M(I, F, X)
                    }
                    return m
                },
                z = function (m, M) {
                    var I = V(m, M, "hex")
                    return (
                        (I.create = function () {
                            return new ee(m, M, m)
                        }),
                        (I.update = function (F) {
                            return I.create().update(F)
                        }),
                        ae(I, V, m, M)
                    )
                },
                ye = function (m, M) {
                    var I = H(m, M, "hex")
                    return (
                        (I.create = function (F) {
                            return new ee(m, M, F)
                        }),
                        (I.update = function (F, j) {
                            return I.create(j).update(F)
                        }),
                        ae(I, H, m, M)
                    )
                },
                S = function (m, M) {
                    var I = L[m],
                        F = Q(m, M, "hex")
                    return (
                        (F.create = function (j, X, oe) {
                            return !X && !oe ? y["shake" + m].create(j) : new ee(m, M, j).bytepad([X, oe], I)
                        }),
                        (F.update = function (j, X, oe, G) {
                            return F.create(X, oe, G).update(j)
                        }),
                        ae(F, Q, m, M)
                    )
                },
                f = function (m, M) {
                    var I = L[m],
                        F = K(m, M, "hex")
                    return (
                        (F.create = function (j, X, oe) {
                            return new fe(m, M, X).bytepad(["KMAC", oe], I).bytepad([j], I)
                        }),
                        (F.update = function (j, X, oe, G) {
                            return F.create(j, oe, G).update(X)
                        }),
                        ae(F, K, m, M)
                    )
                },
                g = [
                    { name: "keccak", padding: h, bits: C, createMethod: z },
                    { name: "sha3", padding: v, bits: C, createMethod: z },
                    { name: "shake", padding: c, bits: B, createMethod: ye },
                    { name: "cshake", padding: d, bits: B, createMethod: S },
                    { name: "kmac", padding: d, bits: B, createMethod: f },
                ],
                y = {},
                w = [],
                E = 0;
            E < g.length;
            ++E
        )
            for (var $ = g[E], k = $.bits, A = 0; A < k.length; ++A) {
                var p = $.name + "_" + k[A]
                if ((w.push(p), (y[p] = $.createMethod(k[A], $.padding)), $.name !== "sha3")) {
                    var x = $.name + k[A]
                    w.push(x), (y[x] = y[p])
                }
            }
        function ee(m, M, I) {
            ;(this.blocks = []),
                (this.s = []),
                (this.padding = M),
                (this.outputBits = I),
                (this.reset = !0),
                (this.finalized = !1),
                (this.block = 0),
                (this.start = 0),
                (this.blockCount = (1600 - (m << 1)) >> 5),
                (this.byteCount = this.blockCount << 2),
                (this.outputBlocks = I >> 5),
                (this.extraBytes = (I & 31) >> 3)
            for (var F = 0; F < 50; ++F) this.s[F] = 0
        }
        ;(ee.prototype.update = function (m) {
            if (this.finalized) throw new Error(r)
            var M,
                I = typeof m
            if (I !== "string") {
                if (I === "object") {
                    if (m === null) throw new Error(t)
                    if (l && m.constructor === ArrayBuffer) m = new Uint8Array(m)
                    else if (!Array.isArray(m) && (!l || !ArrayBuffer.isView(m))) throw new Error(t)
                } else throw new Error(t)
                M = !0
            }
            for (var F = this.blocks, j = this.byteCount, X = m.length, oe = this.blockCount, G = 0, T = this.s, N, R; G < X; ) {
                if (this.reset) for (this.reset = !1, F[0] = this.block, N = 1; N < oe + 1; ++N) F[N] = 0
                if (M) for (N = this.start; G < X && N < j; ++G) F[N >> 2] |= m[G] << b[N++ & 3]
                else
                    for (N = this.start; G < X && N < j; ++G)
                        (R = m.charCodeAt(G)),
                            R < 128
                                ? (F[N >> 2] |= R << b[N++ & 3])
                                : R < 2048
                                ? ((F[N >> 2] |= (192 | (R >> 6)) << b[N++ & 3]), (F[N >> 2] |= (128 | (R & 63)) << b[N++ & 3]))
                                : R < 55296 || R >= 57344
                                ? ((F[N >> 2] |= (224 | (R >> 12)) << b[N++ & 3]),
                                  (F[N >> 2] |= (128 | ((R >> 6) & 63)) << b[N++ & 3]),
                                  (F[N >> 2] |= (128 | (R & 63)) << b[N++ & 3]))
                                : ((R = 65536 + (((R & 1023) << 10) | (m.charCodeAt(++G) & 1023))),
                                  (F[N >> 2] |= (240 | (R >> 18)) << b[N++ & 3]),
                                  (F[N >> 2] |= (128 | ((R >> 12) & 63)) << b[N++ & 3]),
                                  (F[N >> 2] |= (128 | ((R >> 6) & 63)) << b[N++ & 3]),
                                  (F[N >> 2] |= (128 | (R & 63)) << b[N++ & 3]))
                if (((this.lastByteIndex = N), N >= j)) {
                    for (this.start = N - j, this.block = F[oe], N = 0; N < oe; ++N) T[N] ^= F[N]
                    he(T), (this.reset = !0)
                } else this.start = N
            }
            return this
        }),
            (ee.prototype.encode = function (m, M) {
                var I = m & 255,
                    F = 1,
                    j = [I]
                for (m = m >> 8, I = m & 255; I > 0; ) j.unshift(I), (m = m >> 8), (I = m & 255), ++F
                return M ? j.push(F) : j.unshift(F), this.update(j), j.length
            }),
            (ee.prototype.encodeString = function (m) {
                var M,
                    I = typeof m
                if (I !== "string") {
                    if (I === "object") {
                        if (m === null) throw new Error(t)
                        if (l && m.constructor === ArrayBuffer) m = new Uint8Array(m)
                        else if (!Array.isArray(m) && (!l || !ArrayBuffer.isView(m))) throw new Error(t)
                    } else throw new Error(t)
                    M = !0
                }
                var F = 0,
                    j = m.length
                if (M) F = j
                else
                    for (var X = 0; X < m.length; ++X) {
                        var oe = m.charCodeAt(X)
                        oe < 128
                            ? (F += 1)
                            : oe < 2048
                            ? (F += 2)
                            : oe < 55296 || oe >= 57344
                            ? (F += 3)
                            : ((oe = 65536 + (((oe & 1023) << 10) | (m.charCodeAt(++X) & 1023))), (F += 4))
                    }
                return (F += this.encode(F * 8)), this.update(m), F
            }),
            (ee.prototype.bytepad = function (m, M) {
                for (var I = this.encode(M), F = 0; F < m.length; ++F) I += this.encodeString(m[F])
                var j = M - (I % M),
                    X = []
                return (X.length = j), this.update(X), this
            }),
            (ee.prototype.finalize = function () {
                if (!this.finalized) {
                    this.finalized = !0
                    var m = this.blocks,
                        M = this.lastByteIndex,
                        I = this.blockCount,
                        F = this.s
                    if (((m[M >> 2] |= this.padding[M & 3]), this.lastByteIndex === this.byteCount))
                        for (m[0] = m[I], M = 1; M < I + 1; ++M) m[M] = 0
                    for (m[I - 1] |= 2147483648, M = 0; M < I; ++M) F[M] ^= m[M]
                    he(F)
                }
            }),
            (ee.prototype.toString = ee.prototype.hex =
                function () {
                    this.finalize()
                    for (var m = this.blockCount, M = this.s, I = this.outputBlocks, F = this.extraBytes, j = 0, X = 0, oe = "", G; X < I; ) {
                        for (j = 0; j < m && X < I; ++j, ++X)
                            (G = M[j]),
                                (oe +=
                                    u[(G >> 4) & 15] +
                                    u[G & 15] +
                                    u[(G >> 12) & 15] +
                                    u[(G >> 8) & 15] +
                                    u[(G >> 20) & 15] +
                                    u[(G >> 16) & 15] +
                                    u[(G >> 28) & 15] +
                                    u[(G >> 24) & 15])
                        X % m === 0 && (he(M), (j = 0))
                    }
                    return (
                        F &&
                            ((G = M[j]),
                            (oe += u[(G >> 4) & 15] + u[G & 15]),
                            F > 1 && (oe += u[(G >> 12) & 15] + u[(G >> 8) & 15]),
                            F > 2 && (oe += u[(G >> 20) & 15] + u[(G >> 16) & 15])),
                        oe
                    )
                }),
            (ee.prototype.arrayBuffer = function () {
                this.finalize()
                var m = this.blockCount,
                    M = this.s,
                    I = this.outputBlocks,
                    F = this.extraBytes,
                    j = 0,
                    X = 0,
                    oe = this.outputBits >> 3,
                    G
                F ? (G = new ArrayBuffer((I + 1) << 2)) : (G = new ArrayBuffer(oe))
                for (var T = new Uint32Array(G); X < I; ) {
                    for (j = 0; j < m && X < I; ++j, ++X) T[X] = M[j]
                    X % m === 0 && he(M)
                }
                return F && ((T[j] = M[j]), (G = G.slice(0, oe))), G
            }),
            (ee.prototype.buffer = ee.prototype.arrayBuffer),
            (ee.prototype.digest = ee.prototype.array =
                function () {
                    this.finalize()
                    for (var m = this.blockCount, M = this.s, I = this.outputBlocks, F = this.extraBytes, j = 0, X = 0, oe = [], G, T; X < I; ) {
                        for (j = 0; j < m && X < I; ++j, ++X)
                            (G = X << 2),
                                (T = M[j]),
                                (oe[G] = T & 255),
                                (oe[G + 1] = (T >> 8) & 255),
                                (oe[G + 2] = (T >> 16) & 255),
                                (oe[G + 3] = (T >> 24) & 255)
                        X % m === 0 && he(M)
                    }
                    return (
                        F &&
                            ((G = X << 2),
                            (T = M[j]),
                            (oe[G] = T & 255),
                            F > 1 && (oe[G + 1] = (T >> 8) & 255),
                            F > 2 && (oe[G + 2] = (T >> 16) & 255)),
                        oe
                    )
                })
        function fe(m, M, I) {
            ee.call(this, m, M, I)
        }
        ;(fe.prototype = new ee()),
            (fe.prototype.finalize = function () {
                return this.encode(this.outputBits, !0), ee.prototype.finalize.call(this)
            })
        var he = function (m) {
            var M,
                I,
                F,
                j,
                X,
                oe,
                G,
                T,
                N,
                R,
                U,
                Y,
                J,
                te,
                ie,
                Z,
                W,
                we,
                le,
                ce,
                xe,
                Ee,
                $e,
                We,
                Ce,
                He,
                ir,
                nt,
                Ze,
                Gr,
                Fe,
                Ue,
                Yr,
                at,
                lt,
                $i,
                ut,
                ft,
                Ni,
                ct,
                dt,
                Bi,
                ht,
                pt,
                ki,
                gt,
                mt,
                Oi,
                vt,
                bt,
                Ii,
                yt,
                _t,
                Pi,
                wt,
                Et,
                Kn,
                Gn,
                Yn,
                Jn,
                Xn,
                Zn,
                Qn
            for (F = 0; F < 48; F += 2)
                (j = m[0] ^ m[10] ^ m[20] ^ m[30] ^ m[40]),
                    (X = m[1] ^ m[11] ^ m[21] ^ m[31] ^ m[41]),
                    (oe = m[2] ^ m[12] ^ m[22] ^ m[32] ^ m[42]),
                    (G = m[3] ^ m[13] ^ m[23] ^ m[33] ^ m[43]),
                    (T = m[4] ^ m[14] ^ m[24] ^ m[34] ^ m[44]),
                    (N = m[5] ^ m[15] ^ m[25] ^ m[35] ^ m[45]),
                    (R = m[6] ^ m[16] ^ m[26] ^ m[36] ^ m[46]),
                    (U = m[7] ^ m[17] ^ m[27] ^ m[37] ^ m[47]),
                    (Y = m[8] ^ m[18] ^ m[28] ^ m[38] ^ m[48]),
                    (J = m[9] ^ m[19] ^ m[29] ^ m[39] ^ m[49]),
                    (M = Y ^ ((oe << 1) | (G >>> 31))),
                    (I = J ^ ((G << 1) | (oe >>> 31))),
                    (m[0] ^= M),
                    (m[1] ^= I),
                    (m[10] ^= M),
                    (m[11] ^= I),
                    (m[20] ^= M),
                    (m[21] ^= I),
                    (m[30] ^= M),
                    (m[31] ^= I),
                    (m[40] ^= M),
                    (m[41] ^= I),
                    (M = j ^ ((T << 1) | (N >>> 31))),
                    (I = X ^ ((N << 1) | (T >>> 31))),
                    (m[2] ^= M),
                    (m[3] ^= I),
                    (m[12] ^= M),
                    (m[13] ^= I),
                    (m[22] ^= M),
                    (m[23] ^= I),
                    (m[32] ^= M),
                    (m[33] ^= I),
                    (m[42] ^= M),
                    (m[43] ^= I),
                    (M = oe ^ ((R << 1) | (U >>> 31))),
                    (I = G ^ ((U << 1) | (R >>> 31))),
                    (m[4] ^= M),
                    (m[5] ^= I),
                    (m[14] ^= M),
                    (m[15] ^= I),
                    (m[24] ^= M),
                    (m[25] ^= I),
                    (m[34] ^= M),
                    (m[35] ^= I),
                    (m[44] ^= M),
                    (m[45] ^= I),
                    (M = T ^ ((Y << 1) | (J >>> 31))),
                    (I = N ^ ((J << 1) | (Y >>> 31))),
                    (m[6] ^= M),
                    (m[7] ^= I),
                    (m[16] ^= M),
                    (m[17] ^= I),
                    (m[26] ^= M),
                    (m[27] ^= I),
                    (m[36] ^= M),
                    (m[37] ^= I),
                    (m[46] ^= M),
                    (m[47] ^= I),
                    (M = R ^ ((j << 1) | (X >>> 31))),
                    (I = U ^ ((X << 1) | (j >>> 31))),
                    (m[8] ^= M),
                    (m[9] ^= I),
                    (m[18] ^= M),
                    (m[19] ^= I),
                    (m[28] ^= M),
                    (m[29] ^= I),
                    (m[38] ^= M),
                    (m[39] ^= I),
                    (m[48] ^= M),
                    (m[49] ^= I),
                    (te = m[0]),
                    (ie = m[1]),
                    (gt = (m[11] << 4) | (m[10] >>> 28)),
                    (mt = (m[10] << 4) | (m[11] >>> 28)),
                    (nt = (m[20] << 3) | (m[21] >>> 29)),
                    (Ze = (m[21] << 3) | (m[20] >>> 29)),
                    (Jn = (m[31] << 9) | (m[30] >>> 23)),
                    (Xn = (m[30] << 9) | (m[31] >>> 23)),
                    (Bi = (m[40] << 18) | (m[41] >>> 14)),
                    (ht = (m[41] << 18) | (m[40] >>> 14)),
                    (at = (m[2] << 1) | (m[3] >>> 31)),
                    (lt = (m[3] << 1) | (m[2] >>> 31)),
                    (Z = (m[13] << 12) | (m[12] >>> 20)),
                    (W = (m[12] << 12) | (m[13] >>> 20)),
                    (Oi = (m[22] << 10) | (m[23] >>> 22)),
                    (vt = (m[23] << 10) | (m[22] >>> 22)),
                    (Gr = (m[33] << 13) | (m[32] >>> 19)),
                    (Fe = (m[32] << 13) | (m[33] >>> 19)),
                    (Zn = (m[42] << 2) | (m[43] >>> 30)),
                    (Qn = (m[43] << 2) | (m[42] >>> 30)),
                    (Pi = (m[5] << 30) | (m[4] >>> 2)),
                    (wt = (m[4] << 30) | (m[5] >>> 2)),
                    ($i = (m[14] << 6) | (m[15] >>> 26)),
                    (ut = (m[15] << 6) | (m[14] >>> 26)),
                    (we = (m[25] << 11) | (m[24] >>> 21)),
                    (le = (m[24] << 11) | (m[25] >>> 21)),
                    (bt = (m[34] << 15) | (m[35] >>> 17)),
                    (Ii = (m[35] << 15) | (m[34] >>> 17)),
                    (Ue = (m[45] << 29) | (m[44] >>> 3)),
                    (Yr = (m[44] << 29) | (m[45] >>> 3)),
                    (We = (m[6] << 28) | (m[7] >>> 4)),
                    (Ce = (m[7] << 28) | (m[6] >>> 4)),
                    (Et = (m[17] << 23) | (m[16] >>> 9)),
                    (Kn = (m[16] << 23) | (m[17] >>> 9)),
                    (ft = (m[26] << 25) | (m[27] >>> 7)),
                    (Ni = (m[27] << 25) | (m[26] >>> 7)),
                    (ce = (m[36] << 21) | (m[37] >>> 11)),
                    (xe = (m[37] << 21) | (m[36] >>> 11)),
                    (yt = (m[47] << 24) | (m[46] >>> 8)),
                    (_t = (m[46] << 24) | (m[47] >>> 8)),
                    (pt = (m[8] << 27) | (m[9] >>> 5)),
                    (ki = (m[9] << 27) | (m[8] >>> 5)),
                    (He = (m[18] << 20) | (m[19] >>> 12)),
                    (ir = (m[19] << 20) | (m[18] >>> 12)),
                    (Gn = (m[29] << 7) | (m[28] >>> 25)),
                    (Yn = (m[28] << 7) | (m[29] >>> 25)),
                    (ct = (m[38] << 8) | (m[39] >>> 24)),
                    (dt = (m[39] << 8) | (m[38] >>> 24)),
                    (Ee = (m[48] << 14) | (m[49] >>> 18)),
                    ($e = (m[49] << 14) | (m[48] >>> 18)),
                    (m[0] = te ^ (~Z & we)),
                    (m[1] = ie ^ (~W & le)),
                    (m[10] = We ^ (~He & nt)),
                    (m[11] = Ce ^ (~ir & Ze)),
                    (m[20] = at ^ (~$i & ft)),
                    (m[21] = lt ^ (~ut & Ni)),
                    (m[30] = pt ^ (~gt & Oi)),
                    (m[31] = ki ^ (~mt & vt)),
                    (m[40] = Pi ^ (~Et & Gn)),
                    (m[41] = wt ^ (~Kn & Yn)),
                    (m[2] = Z ^ (~we & ce)),
                    (m[3] = W ^ (~le & xe)),
                    (m[12] = He ^ (~nt & Gr)),
                    (m[13] = ir ^ (~Ze & Fe)),
                    (m[22] = $i ^ (~ft & ct)),
                    (m[23] = ut ^ (~Ni & dt)),
                    (m[32] = gt ^ (~Oi & bt)),
                    (m[33] = mt ^ (~vt & Ii)),
                    (m[42] = Et ^ (~Gn & Jn)),
                    (m[43] = Kn ^ (~Yn & Xn)),
                    (m[4] = we ^ (~ce & Ee)),
                    (m[5] = le ^ (~xe & $e)),
                    (m[14] = nt ^ (~Gr & Ue)),
                    (m[15] = Ze ^ (~Fe & Yr)),
                    (m[24] = ft ^ (~ct & Bi)),
                    (m[25] = Ni ^ (~dt & ht)),
                    (m[34] = Oi ^ (~bt & yt)),
                    (m[35] = vt ^ (~Ii & _t)),
                    (m[44] = Gn ^ (~Jn & Zn)),
                    (m[45] = Yn ^ (~Xn & Qn)),
                    (m[6] = ce ^ (~Ee & te)),
                    (m[7] = xe ^ (~$e & ie)),
                    (m[16] = Gr ^ (~Ue & We)),
                    (m[17] = Fe ^ (~Yr & Ce)),
                    (m[26] = ct ^ (~Bi & at)),
                    (m[27] = dt ^ (~ht & lt)),
                    (m[36] = bt ^ (~yt & pt)),
                    (m[37] = Ii ^ (~_t & ki)),
                    (m[46] = Jn ^ (~Zn & Pi)),
                    (m[47] = Xn ^ (~Qn & wt)),
                    (m[8] = Ee ^ (~te & Z)),
                    (m[9] = $e ^ (~ie & W)),
                    (m[18] = Ue ^ (~We & He)),
                    (m[19] = Yr ^ (~Ce & ir)),
                    (m[28] = Bi ^ (~at & $i)),
                    (m[29] = ht ^ (~lt & ut)),
                    (m[38] = yt ^ (~pt & gt)),
                    (m[39] = _t ^ (~ki & mt)),
                    (m[48] = Zn ^ (~Pi & Et)),
                    (m[49] = Qn ^ (~wt & Kn)),
                    (m[0] ^= _[F]),
                    (m[1] ^= _[F + 1])
        }
        if (a) e.exports = y
        else for (E = 0; E < w.length; ++E) i[w[E]] = y[w[E]]
    })()
})(xg)
var bw = xg.exports
function Ft(e) {
    return "0x" + bw.keccak_256(Ne(e))
}
const yw = "rlp/5.5.0",
    rn = new q(yw)
function uh(e) {
    const t = []
    for (; e; ) t.unshift(e & 255), (e >>= 8)
    return t
}
function fh(e, t, r) {
    let n = 0
    for (let i = 0; i < r; i++) n = n * 256 + e[t + i]
    return n
}
function Cg(e) {
    if (Array.isArray(e)) {
        let n = []
        if (
            (e.forEach(function (s) {
                n = n.concat(Cg(s))
            }),
            n.length <= 55)
        )
            return n.unshift(192 + n.length), n
        const i = uh(n.length)
        return i.unshift(247 + i.length), i.concat(n)
    }
    Tc(e) || rn.throwArgumentError("RLP object must be BytesLike", "object", e)
    const t = Array.prototype.slice.call(Ne(e))
    if (t.length === 1 && t[0] <= 127) return t
    if (t.length <= 55) return t.unshift(128 + t.length), t
    const r = uh(t.length)
    return r.unshift(183 + r.length), r.concat(t)
}
function Nl(e) {
    return Se(Cg(e))
}
function ch(e, t, r, n) {
    const i = []
    for (; r < t + 1 + n; ) {
        const s = $g(e, r)
        i.push(s.result), (r += s.consumed), r > t + 1 + n && rn.throwError("child data too short", q.errors.BUFFER_OVERRUN, {})
    }
    return { consumed: 1 + n, result: i }
}
function $g(e, t) {
    if ((e.length === 0 && rn.throwError("data too short", q.errors.BUFFER_OVERRUN, {}), e[t] >= 248)) {
        const r = e[t] - 247
        t + 1 + r > e.length && rn.throwError("data short segment too short", q.errors.BUFFER_OVERRUN, {})
        const n = fh(e, t + 1, r)
        return t + 1 + r + n > e.length && rn.throwError("data long segment too short", q.errors.BUFFER_OVERRUN, {}), ch(e, t, t + 1 + r, r + n)
    } else if (e[t] >= 192) {
        const r = e[t] - 192
        return t + 1 + r > e.length && rn.throwError("data array too short", q.errors.BUFFER_OVERRUN, {}), ch(e, t, t + 1, r)
    } else if (e[t] >= 184) {
        const r = e[t] - 183
        t + 1 + r > e.length && rn.throwError("data array too short", q.errors.BUFFER_OVERRUN, {})
        const n = fh(e, t + 1, r)
        t + 1 + r + n > e.length && rn.throwError("data array too short", q.errors.BUFFER_OVERRUN, {})
        const i = Se(e.slice(t + 1 + r, t + 1 + r + n))
        return { consumed: 1 + r + n, result: i }
    } else if (e[t] >= 128) {
        const r = e[t] - 128
        t + 1 + r > e.length && rn.throwError("data too short", q.errors.BUFFER_OVERRUN, {})
        const n = Se(e.slice(t + 1, t + 1 + r))
        return { consumed: 1 + r, result: n }
    }
    return { consumed: 1, result: Se(e[t]) }
}
function $c(e) {
    const t = Ne(e),
        r = $g(t, 0)
    return r.consumed !== t.length && rn.throwArgumentError("invalid rlp data", "data", e), r.result
}
const _w = "address/5.5.0",
    Es = new q(_w)
function dh(e) {
    Xe(e, 20) || Es.throwArgumentError("invalid address", "address", e), (e = e.toLowerCase())
    const t = e.substring(2).split(""),
        r = new Uint8Array(40)
    for (let i = 0; i < 40; i++) r[i] = t[i].charCodeAt(0)
    const n = Ne(Ft(r))
    for (let i = 0; i < 40; i += 2)
        n[i >> 1] >> 4 >= 8 && (t[i] = t[i].toUpperCase()), (n[i >> 1] & 15) >= 8 && (t[i + 1] = t[i + 1].toUpperCase())
    return "0x" + t.join("")
}
const ww = 9007199254740991
function Ew(e) {
    return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10
}
const Nc = {}
for (let e = 0; e < 10; e++) Nc[String(e)] = String(e)
for (let e = 0; e < 26; e++) Nc[String.fromCharCode(65 + e)] = String(10 + e)
const hh = Math.floor(Ew(ww))
function Aw(e) {
    ;(e = e.toUpperCase()), (e = e.substring(4) + e.substring(0, 2) + "00")
    let t = e
        .split("")
        .map((n) => Nc[n])
        .join("")
    for (; t.length >= hh; ) {
        let n = t.substring(0, hh)
        t = (parseInt(n, 10) % 97) + t.substring(n.length)
    }
    let r = String(98 - (parseInt(t, 10) % 97))
    for (; r.length < 2; ) r = "0" + r
    return r
}
function Zt(e) {
    let t = null
    if ((typeof e != "string" && Es.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)))
        e.substring(0, 2) !== "0x" && (e = "0x" + e),
            (t = dh(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && Es.throwArgumentError("bad address checksum", "address", e)
    else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for (e.substring(2, 4) !== Aw(e) && Es.throwArgumentError("bad icap checksum", "address", e), t = ow(e.substring(4)); t.length < 40; )
            t = "0" + t
        t = dh("0x" + t)
    } else Es.throwArgumentError("invalid address", "address", e)
    return t
}
function Bc(e) {
    let t = null
    try {
        t = Zt(e.from)
    } catch {
        Es.throwArgumentError("missing from address", "transaction", e)
    }
    const r = Ms(Ne(pe.from(e.nonce).toHexString()))
    return Zt(Pn(Ft(Nl([t, r])), 12))
}
class Sw extends jn {
    constructor(t) {
        super("address", "address", t, !1)
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000"
    }
    encode(t, r) {
        try {
            r = Zt(r)
        } catch (n) {
            this._throwError(n.message, r)
        }
        return t.writeValue(r)
    }
    decode(t) {
        return Zt(It(t.readValue().toHexString(), 20))
    }
}
class Tw extends jn {
    constructor(t) {
        super(t.name, t.type, void 0, t.dynamic)
        this.coder = t
    }
    defaultValue() {
        return this.coder.defaultValue()
    }
    encode(t, r) {
        return this.coder.encode(t, r)
    }
    decode(t) {
        return this.coder.decode(t)
    }
}
const As = new q(oa)
function Ng(e, t, r) {
    let n = null
    if (Array.isArray(r)) n = r
    else if (r && typeof r == "object") {
        let l = {}
        n = t.map((u) => {
            const c = u.localName
            return (
                c ||
                    As.throwError("cannot encode object for signature with missing names", q.errors.INVALID_ARGUMENT, {
                        argument: "values",
                        coder: u,
                        value: r,
                    }),
                l[c] &&
                    As.throwError("cannot encode object for signature with duplicate names", q.errors.INVALID_ARGUMENT, {
                        argument: "values",
                        coder: u,
                        value: r,
                    }),
                (l[c] = !0),
                r[c]
            )
        })
    } else As.throwArgumentError("invalid tuple value", "tuple", r)
    t.length !== n.length && As.throwArgumentError("types/value length mismatch", "tuple", r)
    let i = new bf(e.wordSize),
        s = new bf(e.wordSize),
        o = []
    t.forEach((l, u) => {
        let c = n[u]
        if (l.dynamic) {
            let d = s.length
            l.encode(s, c)
            let h = i.writeUpdatableValue()
            o.push((v) => {
                h(v + d)
            })
        } else l.encode(i, c)
    }),
        o.forEach((l) => {
            l(i.length)
        })
    let a = e.appendWriter(i)
    return (a += e.appendWriter(s)), a
}
function Bg(e, t) {
    let r = [],
        n = e.subReader(0)
    t.forEach((s) => {
        let o = null
        if (s.dynamic) {
            let a = e.readValue(),
                l = n.subReader(a.toNumber())
            try {
                o = s.decode(l)
            } catch (u) {
                if (u.code === q.errors.BUFFER_OVERRUN) throw u
                ;(o = u), (o.baseType = s.name), (o.name = s.localName), (o.type = s.type)
            }
        } else
            try {
                o = s.decode(e)
            } catch (a) {
                if (a.code === q.errors.BUFFER_OVERRUN) throw a
                ;(o = a), (o.baseType = s.name), (o.name = s.localName), (o.type = s.type)
            }
        o != null && r.push(o)
    })
    const i = t.reduce((s, o) => {
        const a = o.localName
        return a && (s[a] || (s[a] = 0), s[a]++), s
    }, {})
    t.forEach((s, o) => {
        let a = s.localName
        if (!a || i[a] !== 1 || (a === "length" && (a = "_length"), r[a] != null)) return
        const l = r[o]
        l instanceof Error
            ? Object.defineProperty(r, a, {
                  enumerable: !0,
                  get: () => {
                      throw l
                  },
              })
            : (r[a] = l)
    })
    for (let s = 0; s < r.length; s++) {
        const o = r[s]
        o instanceof Error &&
            Object.defineProperty(r, s, {
                enumerable: !0,
                get: () => {
                    throw o
                },
            })
    }
    return Object.freeze(r)
}
class xw extends jn {
    constructor(t, r, n) {
        const i = t.type + "[" + (r >= 0 ? r : "") + "]",
            s = r === -1 || t.dynamic
        super("array", i, n, s)
        ;(this.coder = t), (this.length = r)
    }
    defaultValue() {
        const t = this.coder.defaultValue(),
            r = []
        for (let n = 0; n < this.length; n++) r.push(t)
        return r
    }
    encode(t, r) {
        Array.isArray(r) || this._throwError("expected array value", r)
        let n = this.length
        n === -1 && ((n = r.length), t.writeValue(r.length)),
            As.checkArgumentCount(r.length, n, "coder array" + (this.localName ? " " + this.localName : ""))
        let i = []
        for (let s = 0; s < r.length; s++) i.push(this.coder)
        return Ng(t, i, r)
    }
    decode(t) {
        let r = this.length
        r === -1 &&
            ((r = t.readValue().toNumber()),
            r * 32 > t._data.length && As.throwError("insufficient data length", q.errors.BUFFER_OVERRUN, { length: t._data.length, count: r }))
        let n = []
        for (let i = 0; i < r; i++) n.push(new Tw(this.coder))
        return t.coerce(this.name, Bg(t, n))
    }
}
class Cw extends jn {
    constructor(t) {
        super("bool", "bool", t, !1)
    }
    defaultValue() {
        return !1
    }
    encode(t, r) {
        return t.writeValue(r ? 1 : 0)
    }
    decode(t) {
        return t.coerce(this.type, !t.readValue().isZero())
    }
}
class kg extends jn {
    constructor(t, r) {
        super(t, t, r, !0)
    }
    defaultValue() {
        return "0x"
    }
    encode(t, r) {
        r = Ne(r)
        let n = t.writeValue(r.length)
        return (n += t.writeBytes(r)), n
    }
    decode(t) {
        return t.readBytes(t.readValue().toNumber(), !0)
    }
}
class $w extends kg {
    constructor(t) {
        super("bytes", t)
    }
    decode(t) {
        return t.coerce(this.name, Se(super.decode(t)))
    }
}
class Nw extends jn {
    constructor(t, r) {
        let n = "bytes" + String(t)
        super(n, n, r, !1)
        this.size = t
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2)
    }
    encode(t, r) {
        let n = Ne(r)
        return n.length !== this.size && this._throwError("incorrect data length", r), t.writeBytes(n)
    }
    decode(t) {
        return t.coerce(this.name, Se(t.readBytes(this.size)))
    }
}
class Bw extends jn {
    constructor(t) {
        super("null", "", t, !1)
    }
    defaultValue() {
        return null
    }
    encode(t, r) {
        return r != null && this._throwError("not null", r), t.writeBytes([])
    }
    decode(t) {
        return t.readBytes(0), t.coerce(this.name, null)
    }
}
const kw = "0x0000000000000000000000000000000000000000",
    Ow = pe.from(-1),
    Og = pe.from(0),
    Iw = pe.from(1),
    Pw = pe.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    Mw = "0x0000000000000000000000000000000000000000000000000000000000000000"
class Rw extends jn {
    constructor(t, r, n) {
        const i = (r ? "int" : "uint") + t * 8
        super(i, i, n, !1)
        ;(this.size = t), (this.signed = r)
    }
    defaultValue() {
        return 0
    }
    encode(t, r) {
        let n = pe.from(r),
            i = Pw.mask(t.wordSize * 8)
        if (this.signed) {
            let s = i.mask(this.size * 8 - 1)
            ;(n.gt(s) || n.lt(s.add(Iw).mul(Ow))) && this._throwError("value out-of-bounds", r)
        } else (n.lt(Og) || n.gt(i.mask(this.size * 8))) && this._throwError("value out-of-bounds", r)
        return (
            (n = n.toTwos(this.size * 8).mask(this.size * 8)),
            this.signed && (n = n.fromTwos(this.size * 8).toTwos(8 * t.wordSize)),
            t.writeValue(n)
        )
    }
    decode(t) {
        let r = t.readValue().mask(this.size * 8)
        return this.signed && (r = r.fromTwos(this.size * 8)), t.coerce(this.name, r)
    }
}
const Lw = "strings/5.5.0",
    Ig = new q(Lw)
var Rs
;(function (e) {
    ;(e.current = ""), (e.NFC = "NFC"), (e.NFD = "NFD"), (e.NFKC = "NFKC"), (e.NFKD = "NFKD")
})(Rs || (Rs = {}))
var pr
;(function (e) {
    ;(e.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
        (e.BAD_PREFIX = "bad codepoint prefix"),
        (e.OVERRUN = "string overrun"),
        (e.MISSING_CONTINUE = "missing continuation byte"),
        (e.OUT_OF_RANGE = "out of UTF-8 range"),
        (e.UTF16_SURROGATE = "UTF-16 surrogate"),
        (e.OVERLONG = "overlong representation")
})(pr || (pr = {}))
function Dw(e, t, r, n, i) {
    return Ig.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r)
}
function Pg(e, t, r, n, i) {
    if (e === pr.BAD_PREFIX || e === pr.UNEXPECTED_CONTINUE) {
        let s = 0
        for (let o = t + 1; o < r.length && r[o] >> 6 === 2; o++) s++
        return s
    }
    return e === pr.OVERRUN ? r.length - t - 1 : 0
}
function Fw(e, t, r, n, i) {
    return e === pr.OVERLONG ? (n.push(i), 0) : (n.push(65533), Pg(e, t, r))
}
const Vw = Object.freeze({ error: Dw, ignore: Pg, replace: Fw })
function Mg(e, t) {
    t == null && (t = Vw.error), (e = Ne(e))
    const r = []
    let n = 0
    for (; n < e.length; ) {
        const i = e[n++]
        if (i >> 7 === 0) {
            r.push(i)
            continue
        }
        let s = null,
            o = null
        if ((i & 224) === 192) (s = 1), (o = 127)
        else if ((i & 240) === 224) (s = 2), (o = 2047)
        else if ((i & 248) === 240) (s = 3), (o = 65535)
        else {
            ;(i & 192) === 128 ? (n += t(pr.UNEXPECTED_CONTINUE, n - 1, e, r)) : (n += t(pr.BAD_PREFIX, n - 1, e, r))
            continue
        }
        if (n - 1 + s >= e.length) {
            n += t(pr.OVERRUN, n - 1, e, r)
            continue
        }
        let a = i & ((1 << (8 - s - 1)) - 1)
        for (let l = 0; l < s; l++) {
            let u = e[n]
            if ((u & 192) != 128) {
                ;(n += t(pr.MISSING_CONTINUE, n, e, r)), (a = null)
                break
            }
            ;(a = (a << 6) | (u & 63)), n++
        }
        if (a !== null) {
            if (a > 1114111) {
                n += t(pr.OUT_OF_RANGE, n - 1 - s, e, r, a)
                continue
            }
            if (a >= 55296 && a <= 57343) {
                n += t(pr.UTF16_SURROGATE, n - 1 - s, e, r, a)
                continue
            }
            if (a <= o) {
                n += t(pr.OVERLONG, n - 1 - s, e, r, a)
                continue
            }
            r.push(a)
        }
    }
    return r
}
function Vn(e, t = Rs.current) {
    t != Rs.current && (Ig.checkNormalize(), (e = e.normalize(t)))
    let r = []
    for (let n = 0; n < e.length; n++) {
        const i = e.charCodeAt(n)
        if (i < 128) r.push(i)
        else if (i < 2048) r.push((i >> 6) | 192), r.push((i & 63) | 128)
        else if ((i & 64512) == 55296) {
            n++
            const s = e.charCodeAt(n)
            if (n >= e.length || (s & 64512) !== 56320) throw new Error("invalid utf-8 string")
            const o = 65536 + ((i & 1023) << 10) + (s & 1023)
            r.push((o >> 18) | 240), r.push(((o >> 12) & 63) | 128), r.push(((o >> 6) & 63) | 128), r.push((o & 63) | 128)
        } else r.push((i >> 12) | 224), r.push(((i >> 6) & 63) | 128), r.push((i & 63) | 128)
    }
    return Ne(r)
}
function yf(e) {
    return e
        .map((t) => (t <= 65535 ? String.fromCharCode(t) : ((t -= 65536), String.fromCharCode(((t >> 10) & 1023) + 55296, (t & 1023) + 56320))))
        .join("")
}
function Xs(e, t) {
    return yf(Mg(e, t))
}
function ph(e, t = Rs.current) {
    return Mg(Vn(e, t))
}
function qw(e) {
    if (e.length % 4 !== 0) throw new Error("bad data")
    let t = []
    for (let r = 0; r < e.length; r += 4) t.push(parseInt(e.substring(r, r + 4), 16))
    return t
}
function kc(e, t) {
    t ||
        (t = function (i) {
            return [parseInt(i, 16)]
        })
    let r = 0,
        n = {}
    return (
        e.split(",").forEach((i) => {
            let s = i.split(":")
            ;(r += parseInt(s[0], 16)), (n[r] = t(s[1]))
        }),
        n
    )
}
function Rg(e) {
    let t = 0
    return e.split(",").map((r) => {
        let n = r.split("-")
        n.length === 1 ? (n[1] = "0") : n[1] === "" && (n[1] = "1")
        let i = t + parseInt(n[0], 16)
        return (t = parseInt(n[1], 16)), { l: i, h: t }
    })
}
function Oc(e, t) {
    let r = 0
    for (let n = 0; n < t.length; n++) {
        let i = t[n]
        if (((r += i.l), e >= r && e <= r + i.h && (e - r) % (i.d || 1) === 0)) {
            if (i.e && i.e.indexOf(e - r) !== -1) continue
            return i
        }
    }
    return null
}
const Hw = Rg(
        "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
    ),
    Uw = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e) => parseInt(e, 16)),
    zw = [
        { h: 25, s: 32, l: 65 },
        { h: 30, s: 32, e: [23], l: 127 },
        { h: 54, s: 1, e: [48], l: 64, d: 2 },
        { h: 14, s: 1, l: 57, d: 2 },
        { h: 44, s: 1, l: 17, d: 2 },
        { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
        { h: 16, s: 1, l: 68, d: 2 },
        { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
        { h: 26, s: 32, e: [17], l: 435 },
        { h: 22, s: 1, l: 71, d: 2 },
        { h: 15, s: 80, l: 40 },
        { h: 31, s: 32, l: 16 },
        { h: 32, s: 1, l: 80, d: 2 },
        { h: 52, s: 1, l: 42, d: 2 },
        { h: 12, s: 1, l: 55, d: 2 },
        { h: 40, s: 1, e: [38], l: 15, d: 2 },
        { h: 14, s: 1, l: 48, d: 2 },
        { h: 37, s: 48, l: 49 },
        { h: 148, s: 1, l: 6351, d: 2 },
        { h: 88, s: 1, l: 160, d: 2 },
        { h: 15, s: 16, l: 704 },
        { h: 25, s: 26, l: 854 },
        { h: 25, s: 32, l: 55915 },
        { h: 37, s: 40, l: 1247 },
        { h: 25, s: -119711, l: 53248 },
        { h: 25, s: -119763, l: 52 },
        { h: 25, s: -119815, l: 52 },
        { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
        { h: 25, s: -119919, l: 52 },
        { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
        { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
        { h: 25, s: -120075, l: 52 },
        { h: 25, s: -120127, l: 52 },
        { h: 25, s: -120179, l: 52 },
        { h: 25, s: -120231, l: 52 },
        { h: 25, s: -120283, l: 52 },
        { h: 25, s: -120335, l: 52 },
        { h: 24, s: -119543, e: [17], l: 56 },
        { h: 24, s: -119601, e: [17], l: 58 },
        { h: 24, s: -119659, e: [17], l: 58 },
        { h: 24, s: -119717, e: [17], l: 58 },
        { h: 24, s: -119775, e: [17], l: 58 },
    ],
    jw = kc(
        "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
    ),
    Ww = kc(
        "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
    ),
    Kw = kc(
        "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
        qw
    ),
    Gw = Rg(
        "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
    )
function Yw(e) {
    return e.reduce(
        (t, r) => (
            r.forEach((n) => {
                t.push(n)
            }),
            t
        ),
        []
    )
}
function Jw(e) {
    return !!Oc(e, Hw)
}
function Xw(e) {
    let t = Oc(e, zw)
    if (t) return [e + t.s]
    let r = jw[e]
    if (r) return r
    let n = Ww[e]
    if (n) return [e + n[0]]
    let i = Kw[e]
    return i || null
}
function Zw(e) {
    return !!Oc(e, Gw)
}
function Qw(e) {
    if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase()
    let t = ph(e)
    ;(t = Yw(
        t.map((n) => {
            if (Uw.indexOf(n) >= 0) return []
            if (n >= 65024 && n <= 65039) return []
            let i = Xw(n)
            return i || [n]
        })
    )),
        (t = ph(yf(t), Rs.NFKC)),
        t.forEach((n) => {
            if (Zw(n)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED")
        }),
        t.forEach((n) => {
            if (Jw(n)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")
        })
    let r = yf(t)
    if (r.substring(0, 1) === "-" || r.substring(2, 4) === "--" || r.substring(r.length - 1) === "-") throw new Error("invalid hyphen")
    if (r.length > 63) throw new Error("too long")
    return r
}
class eE extends kg {
    constructor(t) {
        super("string", t)
    }
    defaultValue() {
        return ""
    }
    encode(t, r) {
        return super.encode(t, Vn(r))
    }
    decode(t) {
        return Xs(super.decode(t))
    }
}
class Aa extends jn {
    constructor(t, r) {
        let n = !1
        const i = []
        t.forEach((o) => {
            o.dynamic && (n = !0), i.push(o.type)
        })
        const s = "tuple(" + i.join(",") + ")"
        super("tuple", s, r, n)
        this.coders = t
    }
    defaultValue() {
        const t = []
        this.coders.forEach((n) => {
            t.push(n.defaultValue())
        })
        const r = this.coders.reduce((n, i) => {
            const s = i.localName
            return s && (n[s] || (n[s] = 0), n[s]++), n
        }, {})
        return (
            this.coders.forEach((n, i) => {
                let s = n.localName
                !s || r[s] !== 1 || (s === "length" && (s = "_length"), t[s] == null && (t[s] = t[i]))
            }),
            Object.freeze(t)
        )
    }
    encode(t, r) {
        return Ng(t, this.coders, r)
    }
    decode(t) {
        return t.coerce(this.name, Bg(t, this.coders))
    }
}
const co = new q(oa),
    tE = new RegExp(/^bytes([0-9]*)$/),
    rE = new RegExp(/^(u?int)([0-9]*)$/)
class Ic {
    constructor(t) {
        co.checkNew(new.target, Ic), ne(this, "coerceFunc", t || null)
    }
    _getCoder(t) {
        switch (t.baseType) {
            case "address":
                return new Sw(t.name)
            case "bool":
                return new Cw(t.name)
            case "string":
                return new eE(t.name)
            case "bytes":
                return new $w(t.name)
            case "array":
                return new xw(this._getCoder(t.arrayChildren), t.arrayLength, t.name)
            case "tuple":
                return new Aa(
                    (t.components || []).map((n) => this._getCoder(n)),
                    t.name
                )
            case "":
                return new Bw(t.name)
        }
        let r = t.type.match(rE)
        if (r) {
            let n = parseInt(r[2] || "256")
            return (
                (n === 0 || n > 256 || n % 8 !== 0) && co.throwArgumentError("invalid " + r[1] + " bit length", "param", t),
                new Rw(n / 8, r[1] === "int", t.name)
            )
        }
        if (((r = t.type.match(tE)), r)) {
            let n = parseInt(r[1])
            return (n === 0 || n > 32) && co.throwArgumentError("invalid bytes length", "param", t), new Nw(n, t.name)
        }
        return co.throwArgumentError("invalid type", "type", t.type)
    }
    _getWordSize() {
        return 32
    }
    _getReader(t, r) {
        return new rl(t, this._getWordSize(), this.coerceFunc, r)
    }
    _getWriter() {
        return new bf(this._getWordSize())
    }
    getDefaultValue(t) {
        const r = t.map((i) => this._getCoder(Ht.from(i)))
        return new Aa(r, "_").defaultValue()
    }
    encode(t, r) {
        t.length !== r.length &&
            co.throwError("types/values length mismatch", q.errors.INVALID_ARGUMENT, {
                count: { types: t.length, values: r.length },
                value: { types: t, values: r },
            })
        const n = t.map((o) => this._getCoder(Ht.from(o))),
            i = new Aa(n, "_"),
            s = this._getWriter()
        return i.encode(s, r), s.data
    }
    decode(t, r, n) {
        const i = t.map((o) => this._getCoder(Ht.from(o)))
        return new Aa(i, "_").decode(this._getReader(Ne(r), n))
    }
}
const nE = new Ic()
function Ss(e) {
    return Ft(Vn(e))
}
const Lg = "hash/5.5.0",
    gh = new q(Lg),
    Dg = new Uint8Array(32)
Dg.fill(0)
const iE = new RegExp("^((.*)\\.)?([^.]+)$")
function nl(e) {
    typeof e != "string" && gh.throwArgumentError("invalid ENS name; not a string", "name", e)
    let t = e,
        r = Dg
    for (; t.length; ) {
        const n = t.match(iE)
        ;(n == null || n[2] === "") && gh.throwArgumentError("invalid ENS address; missing component", "name", e)
        const i = Vn(Qw(n[3]))
        ;(r = Ft(wr([r, Ft(i)]))), (t = n[2] || "")
    }
    return Se(r)
}
var sE =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const Nt = new q(Lg),
    Fg = new Uint8Array(32)
Fg.fill(0)
const oE = pe.from(-1),
    Vg = pe.from(0),
    qg = pe.from(1),
    aE = pe.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
function lE(e) {
    const t = Ne(e),
        r = t.length % 32
    return r ? Hr([t, Fg.slice(r)]) : Se(t)
}
const uE = It(qg.toHexString(), 32),
    fE = It(Vg.toHexString(), 32),
    mh = { name: "string", version: "string", chainId: "uint256", verifyingContract: "address", salt: "bytes32" },
    yu = ["name", "version", "chainId", "verifyingContract", "salt"]
function vh(e) {
    return function (t) {
        return typeof t != "string" && Nt.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, t), t
    }
}
const cE = {
    name: vh("name"),
    version: vh("version"),
    chainId: function (e) {
        try {
            return pe.from(e).toString()
        } catch {}
        return Nt.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e)
    },
    verifyingContract: function (e) {
        try {
            return Zt(e).toLowerCase()
        } catch {}
        return Nt.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e)
    },
    salt: function (e) {
        try {
            const t = Ne(e)
            if (t.length !== 32) throw new Error("bad length")
            return Se(t)
        } catch {}
        return Nt.throwArgumentError('invalid domain value "salt"', "domain.salt", e)
    },
}
function _u(e) {
    {
        const t = e.match(/^(u?)int(\d*)$/)
        if (t) {
            const r = t[1] === "",
                n = parseInt(t[2] || "256")
            ;(n % 8 !== 0 || n > 256 || (t[2] && t[2] !== String(n))) && Nt.throwArgumentError("invalid numeric width", "type", e)
            const i = aE.mask(r ? n - 1 : n),
                s = r ? i.add(qg).mul(oE) : Vg
            return function (o) {
                const a = pe.from(o)
                return (
                    (a.lt(s) || a.gt(i)) && Nt.throwArgumentError(`value out-of-bounds for ${e}`, "value", o),
                    It(a.toTwos(256).toHexString(), 32)
                )
            }
        }
    }
    {
        const t = e.match(/^bytes(\d+)$/)
        if (t) {
            const r = parseInt(t[1])
            return (
                (r === 0 || r > 32 || t[1] !== String(r)) && Nt.throwArgumentError("invalid bytes width", "type", e),
                function (n) {
                    return Ne(n).length !== r && Nt.throwArgumentError(`invalid length for ${e}`, "value", n), lE(n)
                }
            )
        }
    }
    switch (e) {
        case "address":
            return function (t) {
                return It(Zt(t), 32)
            }
        case "bool":
            return function (t) {
                return t ? uE : fE
            }
        case "bytes":
            return function (t) {
                return Ft(t)
            }
        case "string":
            return function (t) {
                return Ss(t)
            }
    }
    return null
}
function bh(e, t) {
    return `${e}(${t.map(({ name: r, type: n }) => n + " " + r).join(",")})`
}
class hr {
    constructor(t) {
        ne(this, "types", Object.freeze(Fn(t))), ne(this, "_encoderCache", {}), ne(this, "_types", {})
        const r = {},
            n = {},
            i = {}
        Object.keys(t).forEach((a) => {
            ;(r[a] = {}), (n[a] = []), (i[a] = {})
        })
        for (const a in t) {
            const l = {}
            t[a].forEach((u) => {
                l[u.name] && Nt.throwArgumentError(`duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(a)}`, "types", t),
                    (l[u.name] = !0)
                const c = u.type.match(/^([^\x5b]*)(\x5b|$)/)[1]
                c === a && Nt.throwArgumentError(`circular type reference to ${JSON.stringify(c)}`, "types", t),
                    !_u(c) && (n[c] || Nt.throwArgumentError(`unknown type ${JSON.stringify(c)}`, "types", t), n[c].push(a), (r[a][c] = !0))
            })
        }
        const s = Object.keys(n).filter((a) => n[a].length === 0)
        s.length === 0
            ? Nt.throwArgumentError("missing primary type", "types", t)
            : s.length > 1 &&
              Nt.throwArgumentError(`ambiguous primary types or unused types: ${s.map((a) => JSON.stringify(a)).join(", ")}`, "types", t),
            ne(this, "primaryType", s[0])
        function o(a, l) {
            l[a] && Nt.throwArgumentError(`circular type reference to ${JSON.stringify(a)}`, "types", t),
                (l[a] = !0),
                Object.keys(r[a]).forEach((u) => {
                    !n[u] ||
                        (o(u, l),
                        Object.keys(l).forEach((c) => {
                            i[c][u] = !0
                        }))
                }),
                delete l[a]
        }
        o(this.primaryType, {})
        for (const a in i) {
            const l = Object.keys(i[a])
            l.sort(), (this._types[a] = bh(a, t[a]) + l.map((u) => bh(u, t[u])).join(""))
        }
    }
    getEncoder(t) {
        let r = this._encoderCache[t]
        return r || (r = this._encoderCache[t] = this._getEncoder(t)), r
    }
    _getEncoder(t) {
        {
            const i = _u(t)
            if (i) return i
        }
        const r = t.match(/^(.*)(\x5b(\d*)\x5d)$/)
        if (r) {
            const i = r[1],
                s = this.getEncoder(i),
                o = parseInt(r[3])
            return (a) => {
                o >= 0 && a.length !== o && Nt.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", a)
                let l = a.map(s)
                return this._types[i] && (l = l.map(Ft)), Ft(Hr(l))
            }
        }
        const n = this.types[t]
        if (n) {
            const i = Ss(this._types[t])
            return (s) => {
                const o = n.map(({ name: a, type: l }) => {
                    const u = this.getEncoder(l)(s[a])
                    return this._types[l] ? Ft(u) : u
                })
                return o.unshift(i), Hr(o)
            }
        }
        return Nt.throwArgumentError(`unknown type: ${t}`, "type", t)
    }
    encodeType(t) {
        const r = this._types[t]
        return r || Nt.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), r
    }
    encodeData(t, r) {
        return this.getEncoder(t)(r)
    }
    hashStruct(t, r) {
        return Ft(this.encodeData(t, r))
    }
    encode(t) {
        return this.encodeData(this.primaryType, t)
    }
    hash(t) {
        return this.hashStruct(this.primaryType, t)
    }
    _visit(t, r, n) {
        if (_u(t)) return n(t, r)
        const i = t.match(/^(.*)(\x5b(\d*)\x5d)$/)
        if (i) {
            const o = i[1],
                a = parseInt(i[3])
            return (
                a >= 0 && r.length !== a && Nt.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r),
                r.map((l) => this._visit(o, l, n))
            )
        }
        const s = this.types[t]
        return s
            ? s.reduce((o, { name: a, type: l }) => ((o[a] = this._visit(l, r[a], n)), o), {})
            : Nt.throwArgumentError(`unknown type: ${t}`, "type", t)
    }
    visit(t, r) {
        return this._visit(this.primaryType, t, r)
    }
    static from(t) {
        return new hr(t)
    }
    static getPrimaryType(t) {
        return hr.from(t).primaryType
    }
    static hashStruct(t, r, n) {
        return hr.from(r).hashStruct(t, n)
    }
    static hashDomain(t) {
        const r = []
        for (const n in t) {
            const i = mh[n]
            i || Nt.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), r.push({ name: n, type: i })
        }
        return r.sort((n, i) => yu.indexOf(n.name) - yu.indexOf(i.name)), hr.hashStruct("EIP712Domain", { EIP712Domain: r }, t)
    }
    static encode(t, r, n) {
        return Hr(["0x1901", hr.hashDomain(t), hr.from(r).hash(n)])
    }
    static hash(t, r, n) {
        return Ft(hr.encode(t, r, n))
    }
    static resolveNames(t, r, n, i) {
        return sE(this, void 0, void 0, function* () {
            t = Vt(t)
            const s = {}
            t.verifyingContract && !Xe(t.verifyingContract, 20) && (s[t.verifyingContract] = "0x")
            const o = hr.from(r)
            o.visit(n, (a, l) => (a === "address" && !Xe(l, 20) && (s[l] = "0x"), l))
            for (const a in s) s[a] = yield i(a)
            return (
                t.verifyingContract && s[t.verifyingContract] && (t.verifyingContract = s[t.verifyingContract]),
                (n = o.visit(n, (a, l) => (a === "address" && s[l] ? s[l] : l))),
                { domain: t, value: n }
            )
        })
    }
    static getPayload(t, r, n) {
        hr.hashDomain(t)
        const i = {},
            s = []
        yu.forEach((l) => {
            const u = t[l]
            u != null && ((i[l] = cE[l](u)), s.push({ name: l, type: mh[l] }))
        })
        const o = hr.from(r),
            a = Vt(r)
        return (
            a.EIP712Domain ? Nt.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", r) : (a.EIP712Domain = s),
            o.encode(n),
            {
                types: a,
                domain: i,
                primaryType: o.primaryType,
                message: o.visit(n, (l, u) => {
                    if (l.match(/^bytes(\d*)/)) return Se(Ne(u))
                    if (l.match(/^u?int/)) return pe.from(u).toString()
                    switch (l) {
                        case "address":
                            return u.toLowerCase()
                        case "bool":
                            return !!u
                        case "string":
                            return typeof u != "string" && Nt.throwArgumentError("invalid string", "value", u), u
                    }
                    return Nt.throwArgumentError("unsupported type", "type", l)
                }),
            }
        )
    }
}
const xt = new q(oa)
class dE extends sa {}
class hE extends sa {}
class pE extends sa {}
class _f extends sa {
    static isIndexed(t) {
        return !!(t && t._isIndexed)
    }
}
const gE = {
    "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: !0 },
    "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] },
}
function yh(e, t) {
    const r = new Error(`deferred error during ABI decoding triggered accessing ${e}`)
    return (r.error = t), r
}
class il {
    constructor(t) {
        xt.checkNew(new.target, il)
        let r = []
        typeof t == "string" ? (r = JSON.parse(t)) : (r = t),
            ne(
                this,
                "fragments",
                r.map((n) => On.from(n)).filter((n) => n != null)
            ),
            ne(this, "_abiCoder", Er(new.target, "getAbiCoder")()),
            ne(this, "functions", {}),
            ne(this, "errors", {}),
            ne(this, "events", {}),
            ne(this, "structs", {}),
            this.fragments.forEach((n) => {
                let i = null
                switch (n.type) {
                    case "constructor":
                        if (this.deploy) {
                            xt.warn("duplicate definition - constructor")
                            return
                        }
                        ne(this, "deploy", n)
                        return
                    case "function":
                        i = this.functions
                        break
                    case "event":
                        i = this.events
                        break
                    case "error":
                        i = this.errors
                        break
                    default:
                        return
                }
                let s = n.format()
                if (i[s]) {
                    xt.warn("duplicate definition - " + s)
                    return
                }
                i[s] = n
            }),
            this.deploy || ne(this, "deploy", on.from({ payable: !1, type: "constructor" })),
            ne(this, "_isInterface", !0)
    }
    format(t) {
        t || (t = Je.full), t === Je.sighash && xt.throwArgumentError("interface does not support formatting sighash", "format", t)
        const r = this.fragments.map((n) => n.format(t))
        return t === Je.json ? JSON.stringify(r.map((n) => JSON.parse(n))) : r
    }
    static getAbiCoder() {
        return nE
    }
    static getAddress(t) {
        return Zt(t)
    }
    static getSighash(t) {
        return Pn(Ss(t.format()), 0, 4)
    }
    static getEventTopic(t) {
        return Ss(t.format())
    }
    getFunction(t) {
        if (Xe(t)) {
            for (const n in this.functions) if (t === this.getSighash(n)) return this.functions[n]
            xt.throwArgumentError("no matching function", "sighash", t)
        }
        if (t.indexOf("(") === -1) {
            const n = t.trim(),
                i = Object.keys(this.functions).filter((s) => s.split("(")[0] === n)
            return (
                i.length === 0
                    ? xt.throwArgumentError("no matching function", "name", n)
                    : i.length > 1 && xt.throwArgumentError("multiple matching functions", "name", n),
                this.functions[i[0]]
            )
        }
        const r = this.functions[an.fromString(t).format()]
        return r || xt.throwArgumentError("no matching function", "signature", t), r
    }
    getEvent(t) {
        if (Xe(t)) {
            const n = t.toLowerCase()
            for (const i in this.events) if (n === this.getEventTopic(i)) return this.events[i]
            xt.throwArgumentError("no matching event", "topichash", n)
        }
        if (t.indexOf("(") === -1) {
            const n = t.trim(),
                i = Object.keys(this.events).filter((s) => s.split("(")[0] === n)
            return (
                i.length === 0
                    ? xt.throwArgumentError("no matching event", "name", n)
                    : i.length > 1 && xt.throwArgumentError("multiple matching events", "name", n),
                this.events[i[0]]
            )
        }
        const r = this.events[Bn.fromString(t).format()]
        return r || xt.throwArgumentError("no matching event", "signature", t), r
    }
    getError(t) {
        if (Xe(t)) {
            const n = Er(this.constructor, "getSighash")
            for (const i in this.errors) {
                const s = this.errors[i]
                if (t === n(s)) return this.errors[i]
            }
            xt.throwArgumentError("no matching error", "sighash", t)
        }
        if (t.indexOf("(") === -1) {
            const n = t.trim(),
                i = Object.keys(this.errors).filter((s) => s.split("(")[0] === n)
            return (
                i.length === 0
                    ? xt.throwArgumentError("no matching error", "name", n)
                    : i.length > 1 && xt.throwArgumentError("multiple matching errors", "name", n),
                this.errors[i[0]]
            )
        }
        const r = this.errors[an.fromString(t).format()]
        return r || xt.throwArgumentError("no matching error", "signature", t), r
    }
    getSighash(t) {
        if (typeof t == "string")
            try {
                t = this.getFunction(t)
            } catch (r) {
                try {
                    t = this.getError(t)
                } catch {
                    throw r
                }
            }
        return Er(this.constructor, "getSighash")(t)
    }
    getEventTopic(t) {
        return typeof t == "string" && (t = this.getEvent(t)), Er(this.constructor, "getEventTopic")(t)
    }
    _decodeParams(t, r) {
        return this._abiCoder.decode(t, r)
    }
    _encodeParams(t, r) {
        return this._abiCoder.encode(t, r)
    }
    encodeDeploy(t) {
        return this._encodeParams(this.deploy.inputs, t || [])
    }
    decodeErrorResult(t, r) {
        typeof t == "string" && (t = this.getError(t))
        const n = Ne(r)
        return (
            Se(n.slice(0, 4)) !== this.getSighash(t) && xt.throwArgumentError(`data signature does not match error ${t.name}.`, "data", Se(n)),
            this._decodeParams(t.inputs, n.slice(4))
        )
    }
    encodeErrorResult(t, r) {
        return typeof t == "string" && (t = this.getError(t)), Se(wr([this.getSighash(t), this._encodeParams(t.inputs, r || [])]))
    }
    decodeFunctionData(t, r) {
        typeof t == "string" && (t = this.getFunction(t))
        const n = Ne(r)
        return (
            Se(n.slice(0, 4)) !== this.getSighash(t) &&
                xt.throwArgumentError(`data signature does not match function ${t.name}.`, "data", Se(n)),
            this._decodeParams(t.inputs, n.slice(4))
        )
    }
    encodeFunctionData(t, r) {
        return typeof t == "string" && (t = this.getFunction(t)), Se(wr([this.getSighash(t), this._encodeParams(t.inputs, r || [])]))
    }
    decodeFunctionResult(t, r) {
        typeof t == "string" && (t = this.getFunction(t))
        let n = Ne(r),
            i = null,
            s = null,
            o = null,
            a = null
        switch (n.length % this._abiCoder._getWordSize()) {
            case 0:
                try {
                    return this._abiCoder.decode(t.outputs, n)
                } catch {}
                break
            case 4: {
                const l = Se(n.slice(0, 4)),
                    u = gE[l]
                if (u) (s = this._abiCoder.decode(u.inputs, n.slice(4))), (o = u.name), (a = u.signature), u.reason && (i = s[0])
                else
                    try {
                        const c = this.getError(l)
                        ;(s = this._abiCoder.decode(c.inputs, n.slice(4))), (o = c.name), (a = c.format())
                    } catch (c) {
                        console.log(c)
                    }
                break
            }
        }
        return xt.throwError("call revert exception", q.errors.CALL_EXCEPTION, {
            method: t.format(),
            errorArgs: s,
            errorName: o,
            errorSignature: a,
            reason: i,
        })
    }
    encodeFunctionResult(t, r) {
        return typeof t == "string" && (t = this.getFunction(t)), Se(this._abiCoder.encode(t.outputs, r || []))
    }
    encodeFilterTopics(t, r) {
        typeof t == "string" && (t = this.getEvent(t)),
            r.length > t.inputs.length &&
                xt.throwError("too many arguments for " + t.format(), q.errors.UNEXPECTED_ARGUMENT, { argument: "values", value: r })
        let n = []
        t.anonymous || n.push(this.getEventTopic(t))
        const i = (s, o) =>
            s.type === "string"
                ? Ss(o)
                : s.type === "bytes"
                ? Ft(Se(o))
                : (s.type === "address" && this._abiCoder.encode(["address"], [o]), It(Se(o), 32))
        for (
            r.forEach((s, o) => {
                let a = t.inputs[o]
                if (!a.indexed) {
                    s != null && xt.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + a.name, s)
                    return
                }
                s == null
                    ? n.push(null)
                    : a.baseType === "array" || a.baseType === "tuple"
                    ? xt.throwArgumentError("filtering with tuples or arrays not supported", "contract." + a.name, s)
                    : Array.isArray(s)
                    ? n.push(s.map((l) => i(a, l)))
                    : n.push(i(a, s))
            });
            n.length && n[n.length - 1] === null;

        )
            n.pop()
        return n
    }
    encodeEventLog(t, r) {
        typeof t == "string" && (t = this.getEvent(t))
        const n = [],
            i = [],
            s = []
        return (
            t.anonymous || n.push(this.getEventTopic(t)),
            r.length !== t.inputs.length && xt.throwArgumentError("event arguments/values mismatch", "values", r),
            t.inputs.forEach((o, a) => {
                const l = r[a]
                if (o.indexed)
                    if (o.type === "string") n.push(Ss(l))
                    else if (o.type === "bytes") n.push(Ft(l))
                    else {
                        if (o.baseType === "tuple" || o.baseType === "array") throw new Error("not implemented")
                        n.push(this._abiCoder.encode([o.type], [l]))
                    }
                else i.push(o), s.push(l)
            }),
            { data: this._abiCoder.encode(i, s), topics: n }
        )
    }
    decodeEventLog(t, r, n) {
        if ((typeof t == "string" && (t = this.getEvent(t)), n != null && !t.anonymous)) {
            let h = this.getEventTopic(t)
            ;(!Xe(n[0], 32) || n[0].toLowerCase() !== h) &&
                xt.throwError("fragment/topic mismatch", q.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: h, value: n[0] }),
                (n = n.slice(1))
        }
        let i = [],
            s = [],
            o = []
        t.inputs.forEach((h, v) => {
            h.indexed
                ? h.type === "string" || h.type === "bytes" || h.baseType === "tuple" || h.baseType === "array"
                    ? (i.push(Ht.fromObject({ type: "bytes32", name: h.name })), o.push(!0))
                    : (i.push(h), o.push(!1))
                : (s.push(h), o.push(!1))
        })
        let a = n != null ? this._abiCoder.decode(i, wr(n)) : null,
            l = this._abiCoder.decode(s, r, !0),
            u = [],
            c = 0,
            d = 0
        t.inputs.forEach((h, v) => {
            if (h.indexed)
                if (a == null) u[v] = new _f({ _isIndexed: !0, hash: null })
                else if (o[v]) u[v] = new _f({ _isIndexed: !0, hash: a[d++] })
                else
                    try {
                        u[v] = a[d++]
                    } catch (b) {
                        u[v] = b
                    }
            else
                try {
                    u[v] = l[c++]
                } catch (b) {
                    u[v] = b
                }
            if (h.name && u[h.name] == null) {
                const b = u[v]
                b instanceof Error
                    ? Object.defineProperty(u, h.name, {
                          enumerable: !0,
                          get: () => {
                              throw yh(`property ${JSON.stringify(h.name)}`, b)
                          },
                      })
                    : (u[h.name] = b)
            }
        })
        for (let h = 0; h < u.length; h++) {
            const v = u[h]
            v instanceof Error &&
                Object.defineProperty(u, h, {
                    enumerable: !0,
                    get: () => {
                        throw yh(`index ${h}`, v)
                    },
                })
        }
        return Object.freeze(u)
    }
    parseTransaction(t) {
        let r = this.getFunction(t.data.substring(0, 10).toLowerCase())
        return r
            ? new hE({
                  args: this._abiCoder.decode(r.inputs, "0x" + t.data.substring(10)),
                  functionFragment: r,
                  name: r.name,
                  signature: r.format(),
                  sighash: this.getSighash(r),
                  value: pe.from(t.value || "0"),
              })
            : null
    }
    parseLog(t) {
        let r = this.getEvent(t.topics[0])
        return !r || r.anonymous
            ? null
            : new dE({
                  eventFragment: r,
                  name: r.name,
                  signature: r.format(),
                  topic: this.getEventTopic(r),
                  args: this.decodeEventLog(r, t.data, t.topics),
              })
    }
    parseError(t) {
        const r = Se(t)
        let n = this.getError(r.substring(0, 10).toLowerCase())
        return n
            ? new pE({
                  args: this._abiCoder.decode(n.inputs, "0x" + r.substring(10)),
                  errorFragment: n,
                  name: n.name,
                  signature: n.format(),
                  sighash: this.getSighash(n),
              })
            : null
    }
    static isInterface(t) {
        return !!(t && t._isInterface)
    }
}
const mE = "abstract-provider/5.5.1"
var vE =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const bE = new q(mE)
class yE extends sa {
    static isForkEvent(t) {
        return !!(t && t._isForkEvent)
    }
}
class Xo {
    constructor() {
        bE.checkAbstract(new.target, Xo), ne(this, "_isProvider", !0)
    }
    getFeeData() {
        return vE(this, void 0, void 0, function* () {
            const { block: t, gasPrice: r } = yield Mt({ block: this.getBlock("latest"), gasPrice: this.getGasPrice().catch((s) => null) })
            let n = null,
                i = null
            return (
                t && t.baseFeePerGas && ((i = pe.from("2500000000")), (n = t.baseFeePerGas.mul(2).add(i))),
                { maxFeePerGas: n, maxPriorityFeePerGas: i, gasPrice: r }
            )
        })
    }
    addListener(t, r) {
        return this.on(t, r)
    }
    removeListener(t, r) {
        return this.off(t, r)
    }
    static isProvider(t) {
        return !!(t && t._isProvider)
    }
}
const _E = "abstract-signer/5.5.0"
var Dr =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const dr = new q(_E),
    wE = [
        "accessList",
        "chainId",
        "customData",
        "data",
        "from",
        "gasLimit",
        "gasPrice",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "to",
        "type",
        "value",
    ],
    EE = [q.errors.INSUFFICIENT_FUNDS, q.errors.NONCE_EXPIRED, q.errors.REPLACEMENT_UNDERPRICED]
class Zs {
    constructor() {
        dr.checkAbstract(new.target, Zs), ne(this, "_isSigner", !0)
    }
    getBalance(t) {
        return Dr(this, void 0, void 0, function* () {
            return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
        })
    }
    getTransactionCount(t) {
        return Dr(this, void 0, void 0, function* () {
            return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
        })
    }
    estimateGas(t) {
        return Dr(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas")
            const r = yield Mt(this.checkTransaction(t))
            return yield this.provider.estimateGas(r)
        })
    }
    call(t, r) {
        return Dr(this, void 0, void 0, function* () {
            this._checkProvider("call")
            const n = yield Mt(this.checkTransaction(t))
            return yield this.provider.call(n, r)
        })
    }
    sendTransaction(t) {
        return Dr(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction")
            const r = yield this.populateTransaction(t),
                n = yield this.signTransaction(r)
            return yield this.provider.sendTransaction(n)
        })
    }
    getChainId() {
        return Dr(this, void 0, void 0, function* () {
            return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId
        })
    }
    getGasPrice() {
        return Dr(this, void 0, void 0, function* () {
            return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
        })
    }
    getFeeData() {
        return Dr(this, void 0, void 0, function* () {
            return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
        })
    }
    resolveName(t) {
        return Dr(this, void 0, void 0, function* () {
            return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
        })
    }
    checkTransaction(t) {
        for (const n in t) wE.indexOf(n) === -1 && dr.throwArgumentError("invalid transaction key: " + n, "transaction", t)
        const r = Vt(t)
        return (
            r.from == null
                ? (r.from = this.getAddress())
                : (r.from = Promise.all([Promise.resolve(r.from), this.getAddress()]).then(
                      (n) => (
                          n[0].toLowerCase() !== n[1].toLowerCase() && dr.throwArgumentError("from address mismatch", "transaction", t), n[0]
                      )
                  )),
            r
        )
    }
    populateTransaction(t) {
        return Dr(this, void 0, void 0, function* () {
            const r = yield Mt(this.checkTransaction(t))
            r.to != null &&
                ((r.to = Promise.resolve(r.to).then((i) =>
                    Dr(this, void 0, void 0, function* () {
                        if (i == null) return null
                        const s = yield this.resolveName(i)
                        return s == null && dr.throwArgumentError("provided ENS name resolves to null", "tx.to", i), s
                    })
                )),
                r.to.catch((i) => {}))
            const n = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null
            if (
                (r.gasPrice != null && (r.type === 2 || n)
                    ? dr.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t)
                    : (r.type === 0 || r.type === 1) &&
                      n &&
                      dr.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t),
                (r.type === 2 || r.type == null) && r.maxFeePerGas != null && r.maxPriorityFeePerGas != null)
            )
                r.type = 2
            else if (r.type === 0 || r.type === 1) r.gasPrice == null && (r.gasPrice = this.getGasPrice())
            else {
                const i = yield this.getFeeData()
                if (r.type == null)
                    if (i.maxFeePerGas != null && i.maxPriorityFeePerGas != null)
                        if (((r.type = 2), r.gasPrice != null)) {
                            const s = r.gasPrice
                            delete r.gasPrice, (r.maxFeePerGas = s), (r.maxPriorityFeePerGas = s)
                        } else
                            r.maxFeePerGas == null && (r.maxFeePerGas = i.maxFeePerGas),
                                r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = i.maxPriorityFeePerGas)
                    else
                        i.gasPrice != null
                            ? (n &&
                                  dr.throwError("network does not support EIP-1559", q.errors.UNSUPPORTED_OPERATION, {
                                      operation: "populateTransaction",
                                  }),
                              r.gasPrice == null && (r.gasPrice = i.gasPrice),
                              (r.type = 0))
                            : dr.throwError("failed to get consistent fee data", q.errors.UNSUPPORTED_OPERATION, {
                                  operation: "signer.getFeeData",
                              })
                else
                    r.type === 2 &&
                        (r.maxFeePerGas == null && (r.maxFeePerGas = i.maxFeePerGas),
                        r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = i.maxPriorityFeePerGas))
            }
            return (
                r.nonce == null && (r.nonce = this.getTransactionCount("pending")),
                r.gasLimit == null &&
                    (r.gasLimit = this.estimateGas(r).catch((i) => {
                        if (EE.indexOf(i.code) >= 0) throw i
                        return dr.throwError(
                            "cannot estimate gas; transaction may fail or may require manual gas limit",
                            q.errors.UNPREDICTABLE_GAS_LIMIT,
                            { error: i, tx: r }
                        )
                    })),
                r.chainId == null
                    ? (r.chainId = this.getChainId())
                    : (r.chainId = Promise.all([Promise.resolve(r.chainId), this.getChainId()]).then(
                          (i) => (i[1] !== 0 && i[0] !== i[1] && dr.throwArgumentError("chainId address mismatch", "transaction", t), i[0])
                      )),
                yield Mt(r)
            )
        })
    }
    _checkProvider(t) {
        this.provider || dr.throwError("missing provider", q.errors.UNSUPPORTED_OPERATION, { operation: t || "_checkProvider" })
    }
    static isSigner(t) {
        return !!(t && t._isSigner)
    }
}
class sl extends Zs {
    constructor(t, r) {
        dr.checkNew(new.target, sl)
        super()
        ne(this, "address", t), ne(this, "provider", r || null)
    }
    getAddress() {
        return Promise.resolve(this.address)
    }
    _fail(t, r) {
        return Promise.resolve().then(() => {
            dr.throwError(t, q.errors.UNSUPPORTED_OPERATION, { operation: r })
        })
    }
    signMessage(t) {
        return this._fail("VoidSigner cannot sign messages", "signMessage")
    }
    signTransaction(t) {
        return this._fail("VoidSigner cannot sign transactions", "signTransaction")
    }
    _signTypedData(t, r, n) {
        return this._fail("VoidSigner cannot sign typed data", "signTypedData")
    }
    connect(t) {
        return new sl(this.address, t)
    }
}
var Hg = {},
    je = {},
    aa = Ug
function Ug(e, t) {
    if (!e) throw new Error(t || "Assertion failed")
}
Ug.equal = function (t, r, n) {
    if (t != r) throw new Error(n || "Assertion failed: " + t + " != " + r)
}
var wf = { exports: {} }
typeof Object.create == "function"
    ? (wf.exports = function (t, r) {
          r &&
              ((t.super_ = r),
              (t.prototype = Object.create(r.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })))
      })
    : (wf.exports = function (t, r) {
          if (r) {
              t.super_ = r
              var n = function () {}
              ;(n.prototype = r.prototype), (t.prototype = new n()), (t.prototype.constructor = t)
          }
      })
var AE = aa,
    SE = wf.exports
je.inherits = SE
function TE(e, t) {
    return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? !1 : (e.charCodeAt(t + 1) & 64512) === 56320
}
function xE(e, t) {
    if (Array.isArray(e)) return e.slice()
    if (!e) return []
    var r = []
    if (typeof e == "string")
        if (t) {
            if (t === "hex")
                for (e = e.replace(/[^a-z0-9]+/gi, ""), e.length % 2 !== 0 && (e = "0" + e), i = 0; i < e.length; i += 2)
                    r.push(parseInt(e[i] + e[i + 1], 16))
        } else
            for (var n = 0, i = 0; i < e.length; i++) {
                var s = e.charCodeAt(i)
                s < 128
                    ? (r[n++] = s)
                    : s < 2048
                    ? ((r[n++] = (s >> 6) | 192), (r[n++] = (s & 63) | 128))
                    : TE(e, i)
                    ? ((s = 65536 + ((s & 1023) << 10) + (e.charCodeAt(++i) & 1023)),
                      (r[n++] = (s >> 18) | 240),
                      (r[n++] = ((s >> 12) & 63) | 128),
                      (r[n++] = ((s >> 6) & 63) | 128),
                      (r[n++] = (s & 63) | 128))
                    : ((r[n++] = (s >> 12) | 224), (r[n++] = ((s >> 6) & 63) | 128), (r[n++] = (s & 63) | 128))
            }
    else for (i = 0; i < e.length; i++) r[i] = e[i] | 0
    return r
}
je.toArray = xE
function CE(e) {
    for (var t = "", r = 0; r < e.length; r++) t += jg(e[r].toString(16))
    return t
}
je.toHex = CE
function zg(e) {
    var t = (e >>> 24) | ((e >>> 8) & 65280) | ((e << 8) & 16711680) | ((e & 255) << 24)
    return t >>> 0
}
je.htonl = zg
function $E(e, t) {
    for (var r = "", n = 0; n < e.length; n++) {
        var i = e[n]
        t === "little" && (i = zg(i)), (r += Wg(i.toString(16)))
    }
    return r
}
je.toHex32 = $E
function jg(e) {
    return e.length === 1 ? "0" + e : e
}
je.zero2 = jg
function Wg(e) {
    return e.length === 7
        ? "0" + e
        : e.length === 6
        ? "00" + e
        : e.length === 5
        ? "000" + e
        : e.length === 4
        ? "0000" + e
        : e.length === 3
        ? "00000" + e
        : e.length === 2
        ? "000000" + e
        : e.length === 1
        ? "0000000" + e
        : e
}
je.zero8 = Wg
function NE(e, t, r, n) {
    var i = r - t
    AE(i % 4 === 0)
    for (var s = new Array(i / 4), o = 0, a = t; o < s.length; o++, a += 4) {
        var l
        n === "big"
            ? (l = (e[a] << 24) | (e[a + 1] << 16) | (e[a + 2] << 8) | e[a + 3])
            : (l = (e[a + 3] << 24) | (e[a + 2] << 16) | (e[a + 1] << 8) | e[a]),
            (s[o] = l >>> 0)
    }
    return s
}
je.join32 = NE
function BE(e, t) {
    for (var r = new Array(e.length * 4), n = 0, i = 0; n < e.length; n++, i += 4) {
        var s = e[n]
        t === "big"
            ? ((r[i] = s >>> 24), (r[i + 1] = (s >>> 16) & 255), (r[i + 2] = (s >>> 8) & 255), (r[i + 3] = s & 255))
            : ((r[i + 3] = s >>> 24), (r[i + 2] = (s >>> 16) & 255), (r[i + 1] = (s >>> 8) & 255), (r[i] = s & 255))
    }
    return r
}
je.split32 = BE
function kE(e, t) {
    return (e >>> t) | (e << (32 - t))
}
je.rotr32 = kE
function OE(e, t) {
    return (e << t) | (e >>> (32 - t))
}
je.rotl32 = OE
function IE(e, t) {
    return (e + t) >>> 0
}
je.sum32 = IE
function PE(e, t, r) {
    return (e + t + r) >>> 0
}
je.sum32_3 = PE
function ME(e, t, r, n) {
    return (e + t + r + n) >>> 0
}
je.sum32_4 = ME
function RE(e, t, r, n, i) {
    return (e + t + r + n + i) >>> 0
}
je.sum32_5 = RE
function LE(e, t, r, n) {
    var i = e[t],
        s = e[t + 1],
        o = (n + s) >>> 0,
        a = (o < n ? 1 : 0) + r + i
    ;(e[t] = a >>> 0), (e[t + 1] = o)
}
je.sum64 = LE
function DE(e, t, r, n) {
    var i = (t + n) >>> 0,
        s = (i < t ? 1 : 0) + e + r
    return s >>> 0
}
je.sum64_hi = DE
function FE(e, t, r, n) {
    var i = t + n
    return i >>> 0
}
je.sum64_lo = FE
function VE(e, t, r, n, i, s, o, a) {
    var l = 0,
        u = t
    ;(u = (u + n) >>> 0), (l += u < t ? 1 : 0), (u = (u + s) >>> 0), (l += u < s ? 1 : 0), (u = (u + a) >>> 0), (l += u < a ? 1 : 0)
    var c = e + r + i + o + l
    return c >>> 0
}
je.sum64_4_hi = VE
function qE(e, t, r, n, i, s, o, a) {
    var l = t + n + s + a
    return l >>> 0
}
je.sum64_4_lo = qE
function HE(e, t, r, n, i, s, o, a, l, u) {
    var c = 0,
        d = t
    ;(d = (d + n) >>> 0),
        (c += d < t ? 1 : 0),
        (d = (d + s) >>> 0),
        (c += d < s ? 1 : 0),
        (d = (d + a) >>> 0),
        (c += d < a ? 1 : 0),
        (d = (d + u) >>> 0),
        (c += d < u ? 1 : 0)
    var h = e + r + i + o + l + c
    return h >>> 0
}
je.sum64_5_hi = HE
function UE(e, t, r, n, i, s, o, a, l, u) {
    var c = t + n + s + a + u
    return c >>> 0
}
je.sum64_5_lo = UE
function zE(e, t, r) {
    var n = (t << (32 - r)) | (e >>> r)
    return n >>> 0
}
je.rotr64_hi = zE
function jE(e, t, r) {
    var n = (e << (32 - r)) | (t >>> r)
    return n >>> 0
}
je.rotr64_lo = jE
function WE(e, t, r) {
    return e >>> r
}
je.shr64_hi = WE
function KE(e, t, r) {
    var n = (e << (32 - r)) | (t >>> r)
    return n >>> 0
}
je.shr64_lo = KE
var Qs = {},
    _h = je,
    GE = aa
function Bl() {
    ;(this.pending = null),
        (this.pendingTotal = 0),
        (this.blockSize = this.constructor.blockSize),
        (this.outSize = this.constructor.outSize),
        (this.hmacStrength = this.constructor.hmacStrength),
        (this.padLength = this.constructor.padLength / 8),
        (this.endian = "big"),
        (this._delta8 = this.blockSize / 8),
        (this._delta32 = this.blockSize / 32)
}
Qs.BlockHash = Bl
Bl.prototype.update = function (t, r) {
    if (
        ((t = _h.toArray(t, r)),
        this.pending ? (this.pending = this.pending.concat(t)) : (this.pending = t),
        (this.pendingTotal += t.length),
        this.pending.length >= this._delta8)
    ) {
        t = this.pending
        var n = t.length % this._delta8
        ;(this.pending = t.slice(t.length - n, t.length)),
            this.pending.length === 0 && (this.pending = null),
            (t = _h.join32(t, 0, t.length - n, this.endian))
        for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
    }
    return this
}
Bl.prototype.digest = function (t) {
    return this.update(this._pad()), GE(this.pending === null), this._digest(t)
}
Bl.prototype._pad = function () {
    var t = this.pendingTotal,
        r = this._delta8,
        n = r - ((t + this.padLength) % r),
        i = new Array(n + this.padLength)
    i[0] = 128
    for (var s = 1; s < n; s++) i[s] = 0
    if (((t <<= 3), this.endian === "big")) {
        for (var o = 8; o < this.padLength; o++) i[s++] = 0
        ;(i[s++] = 0),
            (i[s++] = 0),
            (i[s++] = 0),
            (i[s++] = 0),
            (i[s++] = (t >>> 24) & 255),
            (i[s++] = (t >>> 16) & 255),
            (i[s++] = (t >>> 8) & 255),
            (i[s++] = t & 255)
    } else
        for (
            i[s++] = t & 255,
                i[s++] = (t >>> 8) & 255,
                i[s++] = (t >>> 16) & 255,
                i[s++] = (t >>> 24) & 255,
                i[s++] = 0,
                i[s++] = 0,
                i[s++] = 0,
                i[s++] = 0,
                o = 8;
            o < this.padLength;
            o++
        )
            i[s++] = 0
    return i
}
var eo = {},
    Tn = {},
    YE = je,
    pn = YE.rotr32
function JE(e, t, r, n) {
    if (e === 0) return Kg(t, r, n)
    if (e === 1 || e === 3) return Yg(t, r, n)
    if (e === 2) return Gg(t, r, n)
}
Tn.ft_1 = JE
function Kg(e, t, r) {
    return (e & t) ^ (~e & r)
}
Tn.ch32 = Kg
function Gg(e, t, r) {
    return (e & t) ^ (e & r) ^ (t & r)
}
Tn.maj32 = Gg
function Yg(e, t, r) {
    return e ^ t ^ r
}
Tn.p32 = Yg
function XE(e) {
    return pn(e, 2) ^ pn(e, 13) ^ pn(e, 22)
}
Tn.s0_256 = XE
function ZE(e) {
    return pn(e, 6) ^ pn(e, 11) ^ pn(e, 25)
}
Tn.s1_256 = ZE
function QE(e) {
    return pn(e, 7) ^ pn(e, 18) ^ (e >>> 3)
}
Tn.g0_256 = QE
function e2(e) {
    return pn(e, 17) ^ pn(e, 19) ^ (e >>> 10)
}
Tn.g1_256 = e2
var Ls = je,
    t2 = Qs,
    r2 = Tn,
    wu = Ls.rotl32,
    ho = Ls.sum32,
    n2 = Ls.sum32_5,
    i2 = r2.ft_1,
    Jg = t2.BlockHash,
    s2 = [1518500249, 1859775393, 2400959708, 3395469782]
function _n() {
    if (!(this instanceof _n)) return new _n()
    Jg.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = new Array(80))
}
Ls.inherits(_n, Jg)
var o2 = _n
_n.blockSize = 512
_n.outSize = 160
_n.hmacStrength = 80
_n.padLength = 64
_n.prototype._update = function (t, r) {
    for (var n = this.W, i = 0; i < 16; i++) n[i] = t[r + i]
    for (; i < n.length; i++) n[i] = wu(n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16], 1)
    var s = this.h[0],
        o = this.h[1],
        a = this.h[2],
        l = this.h[3],
        u = this.h[4]
    for (i = 0; i < n.length; i++) {
        var c = ~~(i / 20),
            d = n2(wu(s, 5), i2(c, o, a, l), u, n[i], s2[c])
        ;(u = l), (l = a), (a = wu(o, 30)), (o = s), (s = d)
    }
    ;(this.h[0] = ho(this.h[0], s)),
        (this.h[1] = ho(this.h[1], o)),
        (this.h[2] = ho(this.h[2], a)),
        (this.h[3] = ho(this.h[3], l)),
        (this.h[4] = ho(this.h[4], u))
}
_n.prototype._digest = function (t) {
    return t === "hex" ? Ls.toHex32(this.h, "big") : Ls.split32(this.h, "big")
}
var Ds = je,
    a2 = Qs,
    to = Tn,
    l2 = aa,
    Fr = Ds.sum32,
    u2 = Ds.sum32_4,
    f2 = Ds.sum32_5,
    c2 = to.ch32,
    d2 = to.maj32,
    h2 = to.s0_256,
    p2 = to.s1_256,
    g2 = to.g0_256,
    m2 = to.g1_256,
    Xg = a2.BlockHash,
    v2 = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278,
        1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
        1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
        773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
        3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
        1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
    ]
function wn() {
    if (!(this instanceof wn)) return new wn()
    Xg.call(this),
        (this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
        (this.k = v2),
        (this.W = new Array(64))
}
Ds.inherits(wn, Xg)
var Zg = wn
wn.blockSize = 512
wn.outSize = 256
wn.hmacStrength = 192
wn.padLength = 64
wn.prototype._update = function (t, r) {
    for (var n = this.W, i = 0; i < 16; i++) n[i] = t[r + i]
    for (; i < n.length; i++) n[i] = u2(m2(n[i - 2]), n[i - 7], g2(n[i - 15]), n[i - 16])
    var s = this.h[0],
        o = this.h[1],
        a = this.h[2],
        l = this.h[3],
        u = this.h[4],
        c = this.h[5],
        d = this.h[6],
        h = this.h[7]
    for (l2(this.k.length === n.length), i = 0; i < n.length; i++) {
        var v = f2(h, p2(u), c2(u, c, d), this.k[i], n[i]),
            b = Fr(h2(s), d2(s, o, a))
        ;(h = d), (d = c), (c = u), (u = Fr(l, v)), (l = a), (a = o), (o = s), (s = Fr(v, b))
    }
    ;(this.h[0] = Fr(this.h[0], s)),
        (this.h[1] = Fr(this.h[1], o)),
        (this.h[2] = Fr(this.h[2], a)),
        (this.h[3] = Fr(this.h[3], l)),
        (this.h[4] = Fr(this.h[4], u)),
        (this.h[5] = Fr(this.h[5], c)),
        (this.h[6] = Fr(this.h[6], d)),
        (this.h[7] = Fr(this.h[7], h))
}
wn.prototype._digest = function (t) {
    return t === "hex" ? Ds.toHex32(this.h, "big") : Ds.split32(this.h, "big")
}
var Ef = je,
    Qg = Zg
function qn() {
    if (!(this instanceof qn)) return new qn()
    Qg.call(this), (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
}
Ef.inherits(qn, Qg)
var b2 = qn
qn.blockSize = 512
qn.outSize = 224
qn.hmacStrength = 192
qn.padLength = 64
qn.prototype._digest = function (t) {
    return t === "hex" ? Ef.toHex32(this.h.slice(0, 7), "big") : Ef.split32(this.h.slice(0, 7), "big")
}
var cr = je,
    y2 = Qs,
    _2 = aa,
    gn = cr.rotr64_hi,
    mn = cr.rotr64_lo,
    em = cr.shr64_hi,
    tm = cr.shr64_lo,
    ii = cr.sum64,
    Eu = cr.sum64_hi,
    Au = cr.sum64_lo,
    w2 = cr.sum64_4_hi,
    E2 = cr.sum64_4_lo,
    A2 = cr.sum64_5_hi,
    S2 = cr.sum64_5_lo,
    rm = y2.BlockHash,
    T2 = [
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993,
        3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764,
        1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401,
        2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235,
        1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671,
        3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350,
        1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008,
        3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616,
        1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
        1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474,
        593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269,
        320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158,
        1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591,
    ]
function jr() {
    if (!(this instanceof jr)) return new jr()
    rm.call(this),
        (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924,
            725511199, 528734635, 4215389547, 1541459225, 327033209,
        ]),
        (this.k = T2),
        (this.W = new Array(160))
}
cr.inherits(jr, rm)
var nm = jr
jr.blockSize = 1024
jr.outSize = 512
jr.hmacStrength = 192
jr.padLength = 128
jr.prototype._prepareBlock = function (t, r) {
    for (var n = this.W, i = 0; i < 32; i++) n[i] = t[r + i]
    for (; i < n.length; i += 2) {
        var s = R2(n[i - 4], n[i - 3]),
            o = L2(n[i - 4], n[i - 3]),
            a = n[i - 14],
            l = n[i - 13],
            u = P2(n[i - 30], n[i - 29]),
            c = M2(n[i - 30], n[i - 29]),
            d = n[i - 32],
            h = n[i - 31]
        ;(n[i] = w2(s, o, a, l, u, c, d, h)), (n[i + 1] = E2(s, o, a, l, u, c, d, h))
    }
}
jr.prototype._update = function (t, r) {
    this._prepareBlock(t, r)
    var n = this.W,
        i = this.h[0],
        s = this.h[1],
        o = this.h[2],
        a = this.h[3],
        l = this.h[4],
        u = this.h[5],
        c = this.h[6],
        d = this.h[7],
        h = this.h[8],
        v = this.h[9],
        b = this.h[10],
        _ = this.h[11],
        C = this.h[12],
        B = this.h[13],
        O = this.h[14],
        L = this.h[15]
    _2(this.k.length === n.length)
    for (var V = 0; V < n.length; V += 2) {
        var H = O,
            Q = L,
            K = O2(h, v),
            ae = I2(h, v),
            z = x2(h, v, b, _, C),
            ye = C2(h, v, b, _, C, B),
            S = this.k[V],
            f = this.k[V + 1],
            g = n[V],
            y = n[V + 1],
            w = A2(H, Q, K, ae, z, ye, S, f, g, y),
            E = S2(H, Q, K, ae, z, ye, S, f, g, y)
        ;(H = B2(i, s)), (Q = k2(i, s)), (K = $2(i, s, o, a, l)), (ae = N2(i, s, o, a, l, u))
        var $ = Eu(H, Q, K, ae),
            k = Au(H, Q, K, ae)
        ;(O = C),
            (L = B),
            (C = b),
            (B = _),
            (b = h),
            (_ = v),
            (h = Eu(c, d, w, E)),
            (v = Au(d, d, w, E)),
            (c = l),
            (d = u),
            (l = o),
            (u = a),
            (o = i),
            (a = s),
            (i = Eu(w, E, $, k)),
            (s = Au(w, E, $, k))
    }
    ii(this.h, 0, i, s),
        ii(this.h, 2, o, a),
        ii(this.h, 4, l, u),
        ii(this.h, 6, c, d),
        ii(this.h, 8, h, v),
        ii(this.h, 10, b, _),
        ii(this.h, 12, C, B),
        ii(this.h, 14, O, L)
}
jr.prototype._digest = function (t) {
    return t === "hex" ? cr.toHex32(this.h, "big") : cr.split32(this.h, "big")
}
function x2(e, t, r, n, i) {
    var s = (e & r) ^ (~e & i)
    return s < 0 && (s += 4294967296), s
}
function C2(e, t, r, n, i, s) {
    var o = (t & n) ^ (~t & s)
    return o < 0 && (o += 4294967296), o
}
function $2(e, t, r, n, i) {
    var s = (e & r) ^ (e & i) ^ (r & i)
    return s < 0 && (s += 4294967296), s
}
function N2(e, t, r, n, i, s) {
    var o = (t & n) ^ (t & s) ^ (n & s)
    return o < 0 && (o += 4294967296), o
}
function B2(e, t) {
    var r = gn(e, t, 28),
        n = gn(t, e, 2),
        i = gn(t, e, 7),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
function k2(e, t) {
    var r = mn(e, t, 28),
        n = mn(t, e, 2),
        i = mn(t, e, 7),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
function O2(e, t) {
    var r = gn(e, t, 14),
        n = gn(e, t, 18),
        i = gn(t, e, 9),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
function I2(e, t) {
    var r = mn(e, t, 14),
        n = mn(e, t, 18),
        i = mn(t, e, 9),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
function P2(e, t) {
    var r = gn(e, t, 1),
        n = gn(e, t, 8),
        i = em(e, t, 7),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
function M2(e, t) {
    var r = mn(e, t, 1),
        n = mn(e, t, 8),
        i = tm(e, t, 7),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
function R2(e, t) {
    var r = gn(e, t, 19),
        n = gn(t, e, 29),
        i = em(e, t, 6),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
function L2(e, t) {
    var r = mn(e, t, 19),
        n = mn(t, e, 29),
        i = tm(e, t, 6),
        s = r ^ n ^ i
    return s < 0 && (s += 4294967296), s
}
var Af = je,
    im = nm
function Hn() {
    if (!(this instanceof Hn)) return new Hn()
    im.call(this),
        (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231,
            1750603025, 3675008525, 1694076839, 1203062813, 3204075428,
        ])
}
Af.inherits(Hn, im)
var D2 = Hn
Hn.blockSize = 1024
Hn.outSize = 384
Hn.hmacStrength = 192
Hn.padLength = 128
Hn.prototype._digest = function (t) {
    return t === "hex" ? Af.toHex32(this.h.slice(0, 12), "big") : Af.split32(this.h.slice(0, 12), "big")
}
eo.sha1 = o2
eo.sha224 = b2
eo.sha256 = Zg
eo.sha384 = D2
eo.sha512 = nm
var sm = {},
    ts = je,
    F2 = Qs,
    Sa = ts.rotl32,
    wh = ts.sum32,
    po = ts.sum32_3,
    Eh = ts.sum32_4,
    om = F2.BlockHash
function En() {
    if (!(this instanceof En)) return new En()
    om.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.endian = "little")
}
ts.inherits(En, om)
sm.ripemd160 = En
En.blockSize = 512
En.outSize = 160
En.hmacStrength = 192
En.padLength = 64
En.prototype._update = function (t, r) {
    for (var n = this.h[0], i = this.h[1], s = this.h[2], o = this.h[3], a = this.h[4], l = n, u = i, c = s, d = o, h = a, v = 0; v < 80; v++) {
        var b = wh(Sa(Eh(n, Ah(v, i, s, o), t[H2[v] + r], V2(v)), z2[v]), a)
        ;(n = a),
            (a = o),
            (o = Sa(s, 10)),
            (s = i),
            (i = b),
            (b = wh(Sa(Eh(l, Ah(79 - v, u, c, d), t[U2[v] + r], q2(v)), j2[v]), h)),
            (l = h),
            (h = d),
            (d = Sa(c, 10)),
            (c = u),
            (u = b)
    }
    ;(b = po(this.h[1], s, d)),
        (this.h[1] = po(this.h[2], o, h)),
        (this.h[2] = po(this.h[3], a, l)),
        (this.h[3] = po(this.h[4], n, u)),
        (this.h[4] = po(this.h[0], i, c)),
        (this.h[0] = b)
}
En.prototype._digest = function (t) {
    return t === "hex" ? ts.toHex32(this.h, "little") : ts.split32(this.h, "little")
}
function Ah(e, t, r, n) {
    return e <= 15 ? t ^ r ^ n : e <= 31 ? (t & r) | (~t & n) : e <= 47 ? (t | ~r) ^ n : e <= 63 ? (t & n) | (r & ~n) : t ^ (r | ~n)
}
function V2(e) {
    return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
}
function q2(e) {
    return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
}
var H2 = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2,
        7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
    ],
    U2 = [
        5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11,
        8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
    ],
    z2 = [
        11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
        15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8,
        5, 6,
    ],
    j2 = [
        8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6,
        14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13,
        11, 11,
    ],
    W2 = je,
    K2 = aa
function Fs(e, t, r) {
    if (!(this instanceof Fs)) return new Fs(e, t, r)
    ;(this.Hash = e),
        (this.blockSize = e.blockSize / 8),
        (this.outSize = e.outSize / 8),
        (this.inner = null),
        (this.outer = null),
        this._init(W2.toArray(t, r))
}
var G2 = Fs
Fs.prototype._init = function (t) {
    t.length > this.blockSize && (t = new this.Hash().update(t).digest()), K2(t.length <= this.blockSize)
    for (var r = t.length; r < this.blockSize; r++) t.push(0)
    for (r = 0; r < t.length; r++) t[r] ^= 54
    for (this.inner = new this.Hash().update(t), r = 0; r < t.length; r++) t[r] ^= 106
    this.outer = new this.Hash().update(t)
}
Fs.prototype.update = function (t, r) {
    return this.inner.update(t, r), this
}
Fs.prototype.digest = function (t) {
    return this.outer.update(this.inner.digest()), this.outer.digest(t)
}
;(function (e) {
    var t = e
    ;(t.utils = je),
        (t.common = Qs),
        (t.sha = eo),
        (t.ripemd = sm),
        (t.hmac = G2),
        (t.sha1 = t.sha.sha1),
        (t.sha256 = t.sha.sha256),
        (t.sha224 = t.sha.sha224),
        (t.sha384 = t.sha.sha384),
        (t.sha512 = t.sha.sha512),
        (t.ripemd160 = t.ripemd.ripemd160)
})(Hg)
var tn = Hg
function ro(e, t, r) {
    return (
        (r = {
            path: t,
            exports: {},
            require: function (n, i) {
                return Y2(n, i == null ? r.path : i)
            },
        }),
        e(r, r.exports),
        r.exports
    )
}
function Y2() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
var Pc = am
function am(e, t) {
    if (!e) throw new Error(t || "Assertion failed")
}
am.equal = function (t, r, n) {
    if (t != r) throw new Error(n || "Assertion failed: " + t + " != " + r)
}
var Ur = ro(function (e, t) {
        var r = t
        function n(o, a) {
            if (Array.isArray(o)) return o.slice()
            if (!o) return []
            var l = []
            if (typeof o != "string") {
                for (var u = 0; u < o.length; u++) l[u] = o[u] | 0
                return l
            }
            if (a === "hex") {
                ;(o = o.replace(/[^a-z0-9]+/gi, "")), o.length % 2 !== 0 && (o = "0" + o)
                for (var u = 0; u < o.length; u += 2) l.push(parseInt(o[u] + o[u + 1], 16))
            } else
                for (var u = 0; u < o.length; u++) {
                    var c = o.charCodeAt(u),
                        d = c >> 8,
                        h = c & 255
                    d ? l.push(d, h) : l.push(h)
                }
            return l
        }
        r.toArray = n
        function i(o) {
            return o.length === 1 ? "0" + o : o
        }
        r.zero2 = i
        function s(o) {
            for (var a = "", l = 0; l < o.length; l++) a += i(o[l].toString(16))
            return a
        }
        ;(r.toHex = s),
            (r.encode = function (a, l) {
                return l === "hex" ? s(a) : a
            })
    }),
    xr = ro(function (e, t) {
        var r = t
        ;(r.assert = Pc), (r.toArray = Ur.toArray), (r.zero2 = Ur.zero2), (r.toHex = Ur.toHex), (r.encode = Ur.encode)
        function n(l, u, c) {
            var d = new Array(Math.max(l.bitLength(), c) + 1)
            d.fill(0)
            for (var h = 1 << (u + 1), v = l.clone(), b = 0; b < d.length; b++) {
                var _,
                    C = v.andln(h - 1)
                v.isOdd() ? (C > (h >> 1) - 1 ? (_ = (h >> 1) - C) : (_ = C), v.isubn(_)) : (_ = 0), (d[b] = _), v.iushrn(1)
            }
            return d
        }
        r.getNAF = n
        function i(l, u) {
            var c = [[], []]
            ;(l = l.clone()), (u = u.clone())
            for (var d = 0, h = 0, v; l.cmpn(-d) > 0 || u.cmpn(-h) > 0; ) {
                var b = (l.andln(3) + d) & 3,
                    _ = (u.andln(3) + h) & 3
                b === 3 && (b = -1), _ === 3 && (_ = -1)
                var C
                ;(b & 1) === 0 ? (C = 0) : ((v = (l.andln(7) + d) & 7), (v === 3 || v === 5) && _ === 2 ? (C = -b) : (C = b)), c[0].push(C)
                var B
                ;(_ & 1) === 0 ? (B = 0) : ((v = (u.andln(7) + h) & 7), (v === 3 || v === 5) && b === 2 ? (B = -_) : (B = _)),
                    c[1].push(B),
                    2 * d === C + 1 && (d = 1 - d),
                    2 * h === B + 1 && (h = 1 - h),
                    l.iushrn(1),
                    u.iushrn(1)
            }
            return c
        }
        r.getJSF = i
        function s(l, u, c) {
            var d = "_" + u
            l.prototype[u] = function () {
                return this[d] !== void 0 ? this[d] : (this[d] = c.call(this))
            }
        }
        r.cachedProperty = s
        function o(l) {
            return typeof l == "string" ? r.toArray(l, "hex") : l
        }
        r.parseBytes = o
        function a(l) {
            return new Pe(l, "hex", "le")
        }
        r.intFromLE = a
    }),
    ol = xr.getNAF,
    J2 = xr.getJSF,
    al = xr.assert
function Si(e, t) {
    ;(this.type = e),
        (this.p = new Pe(t.p, 16)),
        (this.red = t.prime ? Pe.red(t.prime) : Pe.mont(this.p)),
        (this.zero = new Pe(0).toRed(this.red)),
        (this.one = new Pe(1).toRed(this.red)),
        (this.two = new Pe(2).toRed(this.red)),
        (this.n = t.n && new Pe(t.n, 16)),
        (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
        (this._wnafT1 = new Array(4)),
        (this._wnafT2 = new Array(4)),
        (this._wnafT3 = new Array(4)),
        (this._wnafT4 = new Array(4)),
        (this._bitLength = this.n ? this.n.bitLength() : 0)
    var r = this.n && this.p.div(this.n)
    !r || r.cmpn(100) > 0 ? (this.redN = null) : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)))
}
var os = Si
Si.prototype.point = function () {
    throw new Error("Not implemented")
}
Si.prototype.validate = function () {
    throw new Error("Not implemented")
}
Si.prototype._fixedNafMul = function (t, r) {
    al(t.precomputed)
    var n = t._getDoubles(),
        i = ol(r, 1, this._bitLength),
        s = (1 << (n.step + 1)) - (n.step % 2 === 0 ? 2 : 1)
    s /= 3
    var o = [],
        a,
        l
    for (a = 0; a < i.length; a += n.step) {
        l = 0
        for (var u = a + n.step - 1; u >= a; u--) l = (l << 1) + i[u]
        o.push(l)
    }
    for (var c = this.jpoint(null, null, null), d = this.jpoint(null, null, null), h = s; h > 0; h--) {
        for (a = 0; a < o.length; a++) (l = o[a]), l === h ? (d = d.mixedAdd(n.points[a])) : l === -h && (d = d.mixedAdd(n.points[a].neg()))
        c = c.add(d)
    }
    return c.toP()
}
Si.prototype._wnafMul = function (t, r) {
    var n = 4,
        i = t._getNAFPoints(n)
    n = i.wnd
    for (var s = i.points, o = ol(r, n, this._bitLength), a = this.jpoint(null, null, null), l = o.length - 1; l >= 0; l--) {
        for (var u = 0; l >= 0 && o[l] === 0; l--) u++
        if ((l >= 0 && u++, (a = a.dblp(u)), l < 0)) break
        var c = o[l]
        al(c !== 0),
            t.type === "affine"
                ? c > 0
                    ? (a = a.mixedAdd(s[(c - 1) >> 1]))
                    : (a = a.mixedAdd(s[(-c - 1) >> 1].neg()))
                : c > 0
                ? (a = a.add(s[(c - 1) >> 1]))
                : (a = a.add(s[(-c - 1) >> 1].neg()))
    }
    return t.type === "affine" ? a.toP() : a
}
Si.prototype._wnafMulAdd = function (t, r, n, i, s) {
    var o = this._wnafT1,
        a = this._wnafT2,
        l = this._wnafT3,
        u = 0,
        c,
        d,
        h
    for (c = 0; c < i; c++) {
        h = r[c]
        var v = h._getNAFPoints(t)
        ;(o[c] = v.wnd), (a[c] = v.points)
    }
    for (c = i - 1; c >= 1; c -= 2) {
        var b = c - 1,
            _ = c
        if (o[b] !== 1 || o[_] !== 1) {
            ;(l[b] = ol(n[b], o[b], this._bitLength)),
                (l[_] = ol(n[_], o[_], this._bitLength)),
                (u = Math.max(l[b].length, u)),
                (u = Math.max(l[_].length, u))
            continue
        }
        var C = [r[b], null, null, r[_]]
        r[b].y.cmp(r[_].y) === 0
            ? ((C[1] = r[b].add(r[_])), (C[2] = r[b].toJ().mixedAdd(r[_].neg())))
            : r[b].y.cmp(r[_].y.redNeg()) === 0
            ? ((C[1] = r[b].toJ().mixedAdd(r[_])), (C[2] = r[b].add(r[_].neg())))
            : ((C[1] = r[b].toJ().mixedAdd(r[_])), (C[2] = r[b].toJ().mixedAdd(r[_].neg())))
        var B = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
            O = J2(n[b], n[_])
        for (u = Math.max(O[0].length, u), l[b] = new Array(u), l[_] = new Array(u), d = 0; d < u; d++) {
            var L = O[0][d] | 0,
                V = O[1][d] | 0
            ;(l[b][d] = B[(L + 1) * 3 + (V + 1)]), (l[_][d] = 0), (a[b] = C)
        }
    }
    var H = this.jpoint(null, null, null),
        Q = this._wnafT4
    for (c = u; c >= 0; c--) {
        for (var K = 0; c >= 0; ) {
            var ae = !0
            for (d = 0; d < i; d++) (Q[d] = l[d][c] | 0), Q[d] !== 0 && (ae = !1)
            if (!ae) break
            K++, c--
        }
        if ((c >= 0 && K++, (H = H.dblp(K)), c < 0)) break
        for (d = 0; d < i; d++) {
            var z = Q[d]
            z !== 0 &&
                (z > 0 ? (h = a[d][(z - 1) >> 1]) : z < 0 && (h = a[d][(-z - 1) >> 1].neg()),
                h.type === "affine" ? (H = H.mixedAdd(h)) : (H = H.add(h)))
        }
    }
    for (c = 0; c < i; c++) a[c] = null
    return s ? H : H.toP()
}
function Pr(e, t) {
    ;(this.curve = e), (this.type = t), (this.precomputed = null)
}
Si.BasePoint = Pr
Pr.prototype.eq = function () {
    throw new Error("Not implemented")
}
Pr.prototype.validate = function () {
    return this.curve.validate(this)
}
Si.prototype.decodePoint = function (t, r) {
    t = xr.toArray(t, r)
    var n = this.p.byteLength()
    if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * n) {
        t[0] === 6 ? al(t[t.length - 1] % 2 === 0) : t[0] === 7 && al(t[t.length - 1] % 2 === 1)
        var i = this.point(t.slice(1, 1 + n), t.slice(1 + n, 1 + 2 * n))
        return i
    } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === n) return this.pointFromX(t.slice(1, 1 + n), t[0] === 3)
    throw new Error("Unknown point format")
}
Pr.prototype.encodeCompressed = function (t) {
    return this.encode(t, !0)
}
Pr.prototype._encode = function (t) {
    var r = this.curve.p.byteLength(),
        n = this.getX().toArray("be", r)
    return t ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", r))
}
Pr.prototype.encode = function (t, r) {
    return xr.encode(this._encode(r), t)
}
Pr.prototype.precompute = function (t) {
    if (this.precomputed) return this
    var r = { doubles: null, naf: null, beta: null }
    return (r.naf = this._getNAFPoints(8)), (r.doubles = this._getDoubles(4, t)), (r.beta = this._getBeta()), (this.precomputed = r), this
}
Pr.prototype._hasDoubles = function (t) {
    if (!this.precomputed) return !1
    var r = this.precomputed.doubles
    return r ? r.points.length >= Math.ceil((t.bitLength() + 1) / r.step) : !1
}
Pr.prototype._getDoubles = function (t, r) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles
    for (var n = [this], i = this, s = 0; s < r; s += t) {
        for (var o = 0; o < t; o++) i = i.dbl()
        n.push(i)
    }
    return { step: t, points: n }
}
Pr.prototype._getNAFPoints = function (t) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf
    for (var r = [this], n = (1 << t) - 1, i = n === 1 ? null : this.dbl(), s = 1; s < n; s++) r[s] = r[s - 1].add(i)
    return { wnd: t, points: r }
}
Pr.prototype._getBeta = function () {
    return null
}
Pr.prototype.dblp = function (t) {
    for (var r = this, n = 0; n < t; n++) r = r.dbl()
    return r
}
var Mc = ro(function (e) {
        typeof Object.create == "function"
            ? (e.exports = function (r, n) {
                  n &&
                      ((r.super_ = n),
                      (r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })))
              })
            : (e.exports = function (r, n) {
                  if (n) {
                      r.super_ = n
                      var i = function () {}
                      ;(i.prototype = n.prototype), (r.prototype = new i()), (r.prototype.constructor = r)
                  }
              })
    }),
    X2 = xr.assert
function Mr(e) {
    os.call(this, "short", e),
        (this.a = new Pe(e.a, 16).toRed(this.red)),
        (this.b = new Pe(e.b, 16).toRed(this.red)),
        (this.tinv = this.two.redInvm()),
        (this.zeroA = this.a.fromRed().cmpn(0) === 0),
        (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
        (this.endo = this._getEndomorphism(e)),
        (this._endoWnafT1 = new Array(4)),
        (this._endoWnafT2 = new Array(4))
}
Mc(Mr, os)
var Z2 = Mr
Mr.prototype._getEndomorphism = function (t) {
    if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
        var r, n
        if (t.beta) r = new Pe(t.beta, 16).toRed(this.red)
        else {
            var i = this._getEndoRoots(this.p)
            ;(r = i[0].cmp(i[1]) < 0 ? i[0] : i[1]), (r = r.toRed(this.red))
        }
        if (t.lambda) n = new Pe(t.lambda, 16)
        else {
            var s = this._getEndoRoots(this.n)
            this.g.mul(s[0]).x.cmp(this.g.x.redMul(r)) === 0 ? (n = s[0]) : ((n = s[1]), X2(this.g.mul(n).x.cmp(this.g.x.redMul(r)) === 0))
        }
        var o
        return (
            t.basis
                ? (o = t.basis.map(function (a) {
                      return { a: new Pe(a.a, 16), b: new Pe(a.b, 16) }
                  }))
                : (o = this._getEndoBasis(n)),
            { beta: r, lambda: n, basis: o }
        )
    }
}
Mr.prototype._getEndoRoots = function (t) {
    var r = t === this.p ? this.red : Pe.mont(t),
        n = new Pe(2).toRed(r).redInvm(),
        i = n.redNeg(),
        s = new Pe(3).toRed(r).redNeg().redSqrt().redMul(n),
        o = i.redAdd(s).fromRed(),
        a = i.redSub(s).fromRed()
    return [o, a]
}
Mr.prototype._getEndoBasis = function (t) {
    for (
        var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
            n = t,
            i = this.n.clone(),
            s = new Pe(1),
            o = new Pe(0),
            a = new Pe(0),
            l = new Pe(1),
            u,
            c,
            d,
            h,
            v,
            b,
            _,
            C = 0,
            B,
            O;
        n.cmpn(0) !== 0;

    ) {
        var L = i.div(n)
        ;(B = i.sub(L.mul(n))), (O = a.sub(L.mul(s)))
        var V = l.sub(L.mul(o))
        if (!d && B.cmp(r) < 0) (u = _.neg()), (c = s), (d = B.neg()), (h = O)
        else if (d && ++C === 2) break
        ;(_ = B), (i = n), (n = B), (a = s), (s = O), (l = o), (o = V)
    }
    ;(v = B.neg()), (b = O)
    var H = d.sqr().add(h.sqr()),
        Q = v.sqr().add(b.sqr())
    return (
        Q.cmp(H) >= 0 && ((v = u), (b = c)),
        d.negative && ((d = d.neg()), (h = h.neg())),
        v.negative && ((v = v.neg()), (b = b.neg())),
        [
            { a: d, b: h },
            { a: v, b },
        ]
    )
}
Mr.prototype._endoSplit = function (t) {
    var r = this.endo.basis,
        n = r[0],
        i = r[1],
        s = i.b.mul(t).divRound(this.n),
        o = n.b.neg().mul(t).divRound(this.n),
        a = s.mul(n.a),
        l = o.mul(i.a),
        u = s.mul(n.b),
        c = o.mul(i.b),
        d = t.sub(a).sub(l),
        h = u.add(c).neg()
    return { k1: d, k2: h }
}
Mr.prototype.pointFromX = function (t, r) {
    ;(t = new Pe(t, 16)), t.red || (t = t.toRed(this.red))
    var n = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
        i = n.redSqrt()
    if (i.redSqr().redSub(n).cmp(this.zero) !== 0) throw new Error("invalid point")
    var s = i.fromRed().isOdd()
    return ((r && !s) || (!r && s)) && (i = i.redNeg()), this.point(t, i)
}
Mr.prototype.validate = function (t) {
    if (t.inf) return !0
    var r = t.x,
        n = t.y,
        i = this.a.redMul(r),
        s = r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b)
    return n.redSqr().redISub(s).cmpn(0) === 0
}
Mr.prototype._endoWnafMulAdd = function (t, r, n) {
    for (var i = this._endoWnafT1, s = this._endoWnafT2, o = 0; o < t.length; o++) {
        var a = this._endoSplit(r[o]),
            l = t[o],
            u = l._getBeta()
        a.k1.negative && (a.k1.ineg(), (l = l.neg(!0))),
            a.k2.negative && (a.k2.ineg(), (u = u.neg(!0))),
            (i[o * 2] = l),
            (i[o * 2 + 1] = u),
            (s[o * 2] = a.k1),
            (s[o * 2 + 1] = a.k2)
    }
    for (var c = this._wnafMulAdd(1, i, s, o * 2, n), d = 0; d < o * 2; d++) (i[d] = null), (s[d] = null)
    return c
}
function Wt(e, t, r, n) {
    os.BasePoint.call(this, e, "affine"),
        t === null && r === null
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new Pe(t, 16)),
              (this.y = new Pe(r, 16)),
              n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1))
}
Mc(Wt, os.BasePoint)
Mr.prototype.point = function (t, r, n) {
    return new Wt(this, t, r, n)
}
Mr.prototype.pointFromJSON = function (t, r) {
    return Wt.fromJSON(this, t, r)
}
Wt.prototype._getBeta = function () {
    if (!!this.curve.endo) {
        var t = this.precomputed
        if (t && t.beta) return t.beta
        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y)
        if (t) {
            var n = this.curve,
                i = function (s) {
                    return n.point(s.x.redMul(n.endo.beta), s.y)
                }
            ;(t.beta = r),
                (r.precomputed = {
                    beta: null,
                    naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
                    doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(i) },
                })
        }
        return r
    }
}
Wt.prototype.toJSON = function () {
    return this.precomputed
        ? [
              this.x,
              this.y,
              this.precomputed && {
                  doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) },
                  naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) },
              },
          ]
        : [this.x, this.y]
}
Wt.fromJSON = function (t, r, n) {
    typeof r == "string" && (r = JSON.parse(r))
    var i = t.point(r[0], r[1], n)
    if (!r[2]) return i
    function s(a) {
        return t.point(a[0], a[1], n)
    }
    var o = r[2]
    return (
        (i.precomputed = {
            beta: null,
            doubles: o.doubles && { step: o.doubles.step, points: [i].concat(o.doubles.points.map(s)) },
            naf: o.naf && { wnd: o.naf.wnd, points: [i].concat(o.naf.points.map(s)) },
        }),
        i
    )
}
Wt.prototype.inspect = function () {
    return this.isInfinity()
        ? "<EC Point Infinity>"
        : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
}
Wt.prototype.isInfinity = function () {
    return this.inf
}
Wt.prototype.add = function (t) {
    if (this.inf) return t
    if (t.inf) return this
    if (this.eq(t)) return this.dbl()
    if (this.neg().eq(t)) return this.curve.point(null, null)
    if (this.x.cmp(t.x) === 0) return this.curve.point(null, null)
    var r = this.y.redSub(t.y)
    r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(t.x).redInvm()))
    var n = r.redSqr().redISub(this.x).redISub(t.x),
        i = r.redMul(this.x.redSub(n)).redISub(this.y)
    return this.curve.point(n, i)
}
Wt.prototype.dbl = function () {
    if (this.inf) return this
    var t = this.y.redAdd(this.y)
    if (t.cmpn(0) === 0) return this.curve.point(null, null)
    var r = this.curve.a,
        n = this.x.redSqr(),
        i = t.redInvm(),
        s = n.redAdd(n).redIAdd(n).redIAdd(r).redMul(i),
        o = s.redSqr().redISub(this.x.redAdd(this.x)),
        a = s.redMul(this.x.redSub(o)).redISub(this.y)
    return this.curve.point(o, a)
}
Wt.prototype.getX = function () {
    return this.x.fromRed()
}
Wt.prototype.getY = function () {
    return this.y.fromRed()
}
Wt.prototype.mul = function (t) {
    return (
        (t = new Pe(t, 16)),
        this.isInfinity()
            ? this
            : this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [t])
            : this.curve._wnafMul(this, t)
    )
}
Wt.prototype.mulAdd = function (t, r, n) {
    var i = [this, r],
        s = [t, n]
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, s) : this.curve._wnafMulAdd(1, i, s, 2)
}
Wt.prototype.jmulAdd = function (t, r, n) {
    var i = [this, r],
        s = [t, n]
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, s, !0) : this.curve._wnafMulAdd(1, i, s, 2, !0)
}
Wt.prototype.eq = function (t) {
    return this === t || (this.inf === t.inf && (this.inf || (this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0)))
}
Wt.prototype.neg = function (t) {
    if (this.inf) return this
    var r = this.curve.point(this.x, this.y.redNeg())
    if (t && this.precomputed) {
        var n = this.precomputed,
            i = function (s) {
                return s.neg()
            }
        r.precomputed = {
            naf: n.naf && { wnd: n.naf.wnd, points: n.naf.points.map(i) },
            doubles: n.doubles && { step: n.doubles.step, points: n.doubles.points.map(i) },
        }
    }
    return r
}
Wt.prototype.toJ = function () {
    if (this.inf) return this.curve.jpoint(null, null, null)
    var t = this.curve.jpoint(this.x, this.y, this.curve.one)
    return t
}
function Qt(e, t, r, n) {
    os.BasePoint.call(this, e, "jacobian"),
        t === null && r === null && n === null
            ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new Pe(0)))
            : ((this.x = new Pe(t, 16)), (this.y = new Pe(r, 16)), (this.z = new Pe(n, 16))),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        (this.zOne = this.z === this.curve.one)
}
Mc(Qt, os.BasePoint)
Mr.prototype.jpoint = function (t, r, n) {
    return new Qt(this, t, r, n)
}
Qt.prototype.toP = function () {
    if (this.isInfinity()) return this.curve.point(null, null)
    var t = this.z.redInvm(),
        r = t.redSqr(),
        n = this.x.redMul(r),
        i = this.y.redMul(r).redMul(t)
    return this.curve.point(n, i)
}
Qt.prototype.neg = function () {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
}
Qt.prototype.add = function (t) {
    if (this.isInfinity()) return t
    if (t.isInfinity()) return this
    var r = t.z.redSqr(),
        n = this.z.redSqr(),
        i = this.x.redMul(r),
        s = t.x.redMul(n),
        o = this.y.redMul(r.redMul(t.z)),
        a = t.y.redMul(n.redMul(this.z)),
        l = i.redSub(s),
        u = o.redSub(a)
    if (l.cmpn(0) === 0) return u.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl()
    var c = l.redSqr(),
        d = c.redMul(l),
        h = i.redMul(c),
        v = u.redSqr().redIAdd(d).redISub(h).redISub(h),
        b = u.redMul(h.redISub(v)).redISub(o.redMul(d)),
        _ = this.z.redMul(t.z).redMul(l)
    return this.curve.jpoint(v, b, _)
}
Qt.prototype.mixedAdd = function (t) {
    if (this.isInfinity()) return t.toJ()
    if (t.isInfinity()) return this
    var r = this.z.redSqr(),
        n = this.x,
        i = t.x.redMul(r),
        s = this.y,
        o = t.y.redMul(r).redMul(this.z),
        a = n.redSub(i),
        l = s.redSub(o)
    if (a.cmpn(0) === 0) return l.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl()
    var u = a.redSqr(),
        c = u.redMul(a),
        d = n.redMul(u),
        h = l.redSqr().redIAdd(c).redISub(d).redISub(d),
        v = l.redMul(d.redISub(h)).redISub(s.redMul(c)),
        b = this.z.redMul(a)
    return this.curve.jpoint(h, v, b)
}
Qt.prototype.dblp = function (t) {
    if (t === 0) return this
    if (this.isInfinity()) return this
    if (!t) return this.dbl()
    var r
    if (this.curve.zeroA || this.curve.threeA) {
        var n = this
        for (r = 0; r < t; r++) n = n.dbl()
        return n
    }
    var i = this.curve.a,
        s = this.curve.tinv,
        o = this.x,
        a = this.y,
        l = this.z,
        u = l.redSqr().redSqr(),
        c = a.redAdd(a)
    for (r = 0; r < t; r++) {
        var d = o.redSqr(),
            h = c.redSqr(),
            v = h.redSqr(),
            b = d.redAdd(d).redIAdd(d).redIAdd(i.redMul(u)),
            _ = o.redMul(h),
            C = b.redSqr().redISub(_.redAdd(_)),
            B = _.redISub(C),
            O = b.redMul(B)
        O = O.redIAdd(O).redISub(v)
        var L = c.redMul(l)
        r + 1 < t && (u = u.redMul(v)), (o = C), (l = L), (c = O)
    }
    return this.curve.jpoint(o, c.redMul(s), l)
}
Qt.prototype.dbl = function () {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
}
Qt.prototype._zeroDbl = function () {
    var t, r, n
    if (this.zOne) {
        var i = this.x.redSqr(),
            s = this.y.redSqr(),
            o = s.redSqr(),
            a = this.x.redAdd(s).redSqr().redISub(i).redISub(o)
        a = a.redIAdd(a)
        var l = i.redAdd(i).redIAdd(i),
            u = l.redSqr().redISub(a).redISub(a),
            c = o.redIAdd(o)
        ;(c = c.redIAdd(c)), (c = c.redIAdd(c)), (t = u), (r = l.redMul(a.redISub(u)).redISub(c)), (n = this.y.redAdd(this.y))
    } else {
        var d = this.x.redSqr(),
            h = this.y.redSqr(),
            v = h.redSqr(),
            b = this.x.redAdd(h).redSqr().redISub(d).redISub(v)
        b = b.redIAdd(b)
        var _ = d.redAdd(d).redIAdd(d),
            C = _.redSqr(),
            B = v.redIAdd(v)
        ;(B = B.redIAdd(B)),
            (B = B.redIAdd(B)),
            (t = C.redISub(b).redISub(b)),
            (r = _.redMul(b.redISub(t)).redISub(B)),
            (n = this.y.redMul(this.z)),
            (n = n.redIAdd(n))
    }
    return this.curve.jpoint(t, r, n)
}
Qt.prototype._threeDbl = function () {
    var t, r, n
    if (this.zOne) {
        var i = this.x.redSqr(),
            s = this.y.redSqr(),
            o = s.redSqr(),
            a = this.x.redAdd(s).redSqr().redISub(i).redISub(o)
        a = a.redIAdd(a)
        var l = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
            u = l.redSqr().redISub(a).redISub(a)
        t = u
        var c = o.redIAdd(o)
        ;(c = c.redIAdd(c)), (c = c.redIAdd(c)), (r = l.redMul(a.redISub(u)).redISub(c)), (n = this.y.redAdd(this.y))
    } else {
        var d = this.z.redSqr(),
            h = this.y.redSqr(),
            v = this.x.redMul(h),
            b = this.x.redSub(d).redMul(this.x.redAdd(d))
        b = b.redAdd(b).redIAdd(b)
        var _ = v.redIAdd(v)
        _ = _.redIAdd(_)
        var C = _.redAdd(_)
        ;(t = b.redSqr().redISub(C)), (n = this.y.redAdd(this.z).redSqr().redISub(h).redISub(d))
        var B = h.redSqr()
        ;(B = B.redIAdd(B)), (B = B.redIAdd(B)), (B = B.redIAdd(B)), (r = b.redMul(_.redISub(t)).redISub(B))
    }
    return this.curve.jpoint(t, r, n)
}
Qt.prototype._dbl = function () {
    var t = this.curve.a,
        r = this.x,
        n = this.y,
        i = this.z,
        s = i.redSqr().redSqr(),
        o = r.redSqr(),
        a = n.redSqr(),
        l = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(s)),
        u = r.redAdd(r)
    u = u.redIAdd(u)
    var c = u.redMul(a),
        d = l.redSqr().redISub(c.redAdd(c)),
        h = c.redISub(d),
        v = a.redSqr()
    ;(v = v.redIAdd(v)), (v = v.redIAdd(v)), (v = v.redIAdd(v))
    var b = l.redMul(h).redISub(v),
        _ = n.redAdd(n).redMul(i)
    return this.curve.jpoint(d, b, _)
}
Qt.prototype.trpl = function () {
    if (!this.curve.zeroA) return this.dbl().add(this)
    var t = this.x.redSqr(),
        r = this.y.redSqr(),
        n = this.z.redSqr(),
        i = r.redSqr(),
        s = t.redAdd(t).redIAdd(t),
        o = s.redSqr(),
        a = this.x.redAdd(r).redSqr().redISub(t).redISub(i)
    ;(a = a.redIAdd(a)), (a = a.redAdd(a).redIAdd(a)), (a = a.redISub(o))
    var l = a.redSqr(),
        u = i.redIAdd(i)
    ;(u = u.redIAdd(u)), (u = u.redIAdd(u)), (u = u.redIAdd(u))
    var c = s.redIAdd(a).redSqr().redISub(o).redISub(l).redISub(u),
        d = r.redMul(c)
    ;(d = d.redIAdd(d)), (d = d.redIAdd(d))
    var h = this.x.redMul(l).redISub(d)
    ;(h = h.redIAdd(h)), (h = h.redIAdd(h))
    var v = this.y.redMul(c.redMul(u.redISub(c)).redISub(a.redMul(l)))
    ;(v = v.redIAdd(v)), (v = v.redIAdd(v)), (v = v.redIAdd(v))
    var b = this.z.redAdd(a).redSqr().redISub(n).redISub(l)
    return this.curve.jpoint(h, v, b)
}
Qt.prototype.mul = function (t, r) {
    return (t = new Pe(t, r)), this.curve._wnafMul(this, t)
}
Qt.prototype.eq = function (t) {
    if (t.type === "affine") return this.eq(t.toJ())
    if (this === t) return !0
    var r = this.z.redSqr(),
        n = t.z.redSqr()
    if (this.x.redMul(n).redISub(t.x.redMul(r)).cmpn(0) !== 0) return !1
    var i = r.redMul(this.z),
        s = n.redMul(t.z)
    return this.y.redMul(s).redISub(t.y.redMul(i)).cmpn(0) === 0
}
Qt.prototype.eqXToP = function (t) {
    var r = this.z.redSqr(),
        n = t.toRed(this.curve.red).redMul(r)
    if (this.x.cmp(n) === 0) return !0
    for (var i = t.clone(), s = this.curve.redN.redMul(r); ; ) {
        if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1
        if ((n.redIAdd(s), this.x.cmp(n) === 0)) return !0
    }
}
Qt.prototype.inspect = function () {
    return this.isInfinity()
        ? "<EC JPoint Infinity>"
        : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
}
Qt.prototype.isInfinity = function () {
    return this.z.cmpn(0) === 0
}
var Da = ro(function (e, t) {
        var r = t
        ;(r.base = os), (r.short = Z2), (r.mont = null), (r.edwards = null)
    }),
    Fa = ro(function (e, t) {
        var r = t,
            n = xr.assert
        function i(a) {
            a.type === "short"
                ? (this.curve = new Da.short(a))
                : a.type === "edwards"
                ? (this.curve = new Da.edwards(a))
                : (this.curve = new Da.mont(a)),
                (this.g = this.curve.g),
                (this.n = this.curve.n),
                (this.hash = a.hash),
                n(this.g.validate(), "Invalid curve"),
                n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }
        r.PresetCurve = i
        function s(a, l) {
            Object.defineProperty(r, a, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    var u = new i(l)
                    return Object.defineProperty(r, a, { configurable: !0, enumerable: !0, value: u }), u
                },
            })
        }
        s("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: tn.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"],
        }),
            s("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: tn.sha256,
                gRed: !1,
                g: [
                    "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                    "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
                ],
            }),
            s("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: tn.sha256,
                gRed: !1,
                g: [
                    "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                    "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
                ],
            }),
            s("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: tn.sha384,
                gRed: !1,
                g: [
                    "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                    "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
                ],
            }),
            s("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: tn.sha512,
                gRed: !1,
                g: [
                    "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                    "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
                ],
            }),
            s("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: tn.sha256,
                gRed: !1,
                g: ["9"],
            }),
            s("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: tn.sha256,
                gRed: !1,
                g: [
                    "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                    "6666666666666666666666666666666666666666666666666666666666666658",
                ],
            })
        var o
        try {
            o = null.crash()
        } catch {
            o = void 0
        }
        s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: tn.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
                { a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" },
                { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" },
            ],
            gRed: !1,
            g: [
                "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
                o,
            ],
        })
    })
function yi(e) {
    if (!(this instanceof yi)) return new yi(e)
    ;(this.hash = e.hash),
        (this.predResist = !!e.predResist),
        (this.outLen = this.hash.outSize),
        (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
        (this._reseed = null),
        (this.reseedInterval = null),
        (this.K = null),
        (this.V = null)
    var t = Ur.toArray(e.entropy, e.entropyEnc || "hex"),
        r = Ur.toArray(e.nonce, e.nonceEnc || "hex"),
        n = Ur.toArray(e.pers, e.persEnc || "hex")
    Pc(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
}
var lm = yi
yi.prototype._init = function (t, r, n) {
    var i = t.concat(r).concat(n)
    ;(this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8))
    for (var s = 0; s < this.V.length; s++) (this.K[s] = 0), (this.V[s] = 1)
    this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656)
}
yi.prototype._hmac = function () {
    return new tn.hmac(this.hash, this.K)
}
yi.prototype._update = function (t) {
    var r = this._hmac().update(this.V).update([0])
    t && (r = r.update(t)),
        (this.K = r.digest()),
        (this.V = this._hmac().update(this.V).digest()),
        !!t && ((this.K = this._hmac().update(this.V).update([1]).update(t).digest()), (this.V = this._hmac().update(this.V).digest()))
}
yi.prototype.reseed = function (t, r, n, i) {
    typeof r != "string" && ((i = n), (n = r), (r = null)),
        (t = Ur.toArray(t, r)),
        (n = Ur.toArray(n, i)),
        Pc(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
        this._update(t.concat(n || [])),
        (this._reseed = 1)
}
yi.prototype.generate = function (t, r, n, i) {
    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required")
    typeof r != "string" && ((i = n), (n = r), (r = null)), n && ((n = Ur.toArray(n, i || "hex")), this._update(n))
    for (var s = []; s.length < t; ) (this.V = this._hmac().update(this.V).digest()), (s = s.concat(this.V))
    var o = s.slice(0, t)
    return this._update(n), this._reseed++, Ur.encode(o, r)
}
var Sf = xr.assert
function tr(e, t) {
    ;(this.ec = e),
        (this.priv = null),
        (this.pub = null),
        t.priv && this._importPrivate(t.priv, t.privEnc),
        t.pub && this._importPublic(t.pub, t.pubEnc)
}
var Rc = tr
tr.fromPublic = function (t, r, n) {
    return r instanceof tr ? r : new tr(t, { pub: r, pubEnc: n })
}
tr.fromPrivate = function (t, r, n) {
    return r instanceof tr ? r : new tr(t, { priv: r, privEnc: n })
}
tr.prototype.validate = function () {
    var t = this.getPublic()
    return t.isInfinity()
        ? { result: !1, reason: "Invalid public key" }
        : t.validate()
        ? t.mul(this.ec.curve.n).isInfinity()
            ? { result: !0, reason: null }
            : { result: !1, reason: "Public key * N != O" }
        : { result: !1, reason: "Public key is not a point" }
}
tr.prototype.getPublic = function (t, r) {
    return typeof t == "string" && ((r = t), (t = null)), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub
}
tr.prototype.getPrivate = function (t) {
    return t === "hex" ? this.priv.toString(16, 2) : this.priv
}
tr.prototype._importPrivate = function (t, r) {
    ;(this.priv = new Pe(t, r || 16)), (this.priv = this.priv.umod(this.ec.curve.n))
}
tr.prototype._importPublic = function (t, r) {
    if (t.x || t.y) {
        this.ec.curve.type === "mont"
            ? Sf(t.x, "Need x coordinate")
            : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Sf(t.x && t.y, "Need both x and y coordinate"),
            (this.pub = this.ec.curve.point(t.x, t.y))
        return
    }
    this.pub = this.ec.curve.decodePoint(t, r)
}
tr.prototype.derive = function (t) {
    return t.validate() || Sf(t.validate(), "public point not validated"), t.mul(this.priv).getX()
}
tr.prototype.sign = function (t, r, n) {
    return this.ec.sign(t, this, r, n)
}
tr.prototype.verify = function (t, r) {
    return this.ec.verify(t, r, this)
}
tr.prototype.inspect = function () {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
}
var Q2 = xr.assert
function kl(e, t) {
    if (e instanceof kl) return e
    this._importDER(e, t) ||
        (Q2(e.r && e.s, "Signature without r or s"),
        (this.r = new Pe(e.r, 16)),
        (this.s = new Pe(e.s, 16)),
        e.recoveryParam === void 0 ? (this.recoveryParam = null) : (this.recoveryParam = e.recoveryParam))
}
var Ol = kl
function eA() {
    this.place = 0
}
function Su(e, t) {
    var r = e[t.place++]
    if (!(r & 128)) return r
    var n = r & 15
    if (n === 0 || n > 4) return !1
    for (var i = 0, s = 0, o = t.place; s < n; s++, o++) (i <<= 8), (i |= e[o]), (i >>>= 0)
    return i <= 127 ? !1 : ((t.place = o), i)
}
function Sh(e) {
    for (var t = 0, r = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r; ) t++
    return t === 0 ? e : e.slice(t)
}
kl.prototype._importDER = function (t, r) {
    t = xr.toArray(t, r)
    var n = new eA()
    if (t[n.place++] !== 48) return !1
    var i = Su(t, n)
    if (i === !1 || i + n.place !== t.length || t[n.place++] !== 2) return !1
    var s = Su(t, n)
    if (s === !1) return !1
    var o = t.slice(n.place, s + n.place)
    if (((n.place += s), t[n.place++] !== 2)) return !1
    var a = Su(t, n)
    if (a === !1 || t.length !== a + n.place) return !1
    var l = t.slice(n.place, a + n.place)
    if (o[0] === 0)
        if (o[1] & 128) o = o.slice(1)
        else return !1
    if (l[0] === 0)
        if (l[1] & 128) l = l.slice(1)
        else return !1
    return (this.r = new Pe(o)), (this.s = new Pe(l)), (this.recoveryParam = null), !0
}
function Tu(e, t) {
    if (t < 128) {
        e.push(t)
        return
    }
    var r = 1 + ((Math.log(t) / Math.LN2) >>> 3)
    for (e.push(r | 128); --r; ) e.push((t >>> (r << 3)) & 255)
    e.push(t)
}
kl.prototype.toDER = function (t) {
    var r = this.r.toArray(),
        n = this.s.toArray()
    for (r[0] & 128 && (r = [0].concat(r)), n[0] & 128 && (n = [0].concat(n)), r = Sh(r), n = Sh(n); !n[0] && !(n[1] & 128); ) n = n.slice(1)
    var i = [2]
    Tu(i, r.length), (i = i.concat(r)), i.push(2), Tu(i, n.length)
    var s = i.concat(n),
        o = [48]
    return Tu(o, s.length), (o = o.concat(s)), xr.encode(o, t)
}
var tA = function () {
        throw new Error("unsupported")
    },
    um = xr.assert
function Or(e) {
    if (!(this instanceof Or)) return new Or(e)
    typeof e == "string" && (um(Object.prototype.hasOwnProperty.call(Fa, e), "Unknown curve " + e), (e = Fa[e])),
        e instanceof Fa.PresetCurve && (e = { curve: e }),
        (this.curve = e.curve.curve),
        (this.n = this.curve.n),
        (this.nh = this.n.ushrn(1)),
        (this.g = this.curve.g),
        (this.g = e.curve.g),
        this.g.precompute(e.curve.n.bitLength() + 1),
        (this.hash = e.hash || e.curve.hash)
}
var rA = Or
Or.prototype.keyPair = function (t) {
    return new Rc(this, t)
}
Or.prototype.keyFromPrivate = function (t, r) {
    return Rc.fromPrivate(this, t, r)
}
Or.prototype.keyFromPublic = function (t, r) {
    return Rc.fromPublic(this, t, r)
}
Or.prototype.genKeyPair = function (t) {
    t || (t = {})
    for (
        var r = new lm({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || tA(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
            }),
            n = this.n.byteLength(),
            i = this.n.sub(new Pe(2));
        ;

    ) {
        var s = new Pe(r.generate(n))
        if (!(s.cmp(i) > 0)) return s.iaddn(1), this.keyFromPrivate(s)
    }
}
Or.prototype._truncateToN = function (t, r) {
    var n = t.byteLength() * 8 - this.n.bitLength()
    return n > 0 && (t = t.ushrn(n)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
}
Or.prototype.sign = function (t, r, n, i) {
    typeof n == "object" && ((i = n), (n = null)), i || (i = {}), (r = this.keyFromPrivate(r, n)), (t = this._truncateToN(new Pe(t, 16)))
    for (
        var s = this.n.byteLength(),
            o = r.getPrivate().toArray("be", s),
            a = t.toArray("be", s),
            l = new lm({ hash: this.hash, entropy: o, nonce: a, pers: i.pers, persEnc: i.persEnc || "utf8" }),
            u = this.n.sub(new Pe(1)),
            c = 0;
        ;
        c++
    ) {
        var d = i.k ? i.k(c) : new Pe(l.generate(this.n.byteLength()))
        if (((d = this._truncateToN(d, !0)), !(d.cmpn(1) <= 0 || d.cmp(u) >= 0))) {
            var h = this.g.mul(d)
            if (!h.isInfinity()) {
                var v = h.getX(),
                    b = v.umod(this.n)
                if (b.cmpn(0) !== 0) {
                    var _ = d.invm(this.n).mul(b.mul(r.getPrivate()).iadd(t))
                    if (((_ = _.umod(this.n)), _.cmpn(0) !== 0)) {
                        var C = (h.getY().isOdd() ? 1 : 0) | (v.cmp(b) !== 0 ? 2 : 0)
                        return i.canonical && _.cmp(this.nh) > 0 && ((_ = this.n.sub(_)), (C ^= 1)), new Ol({ r: b, s: _, recoveryParam: C })
                    }
                }
            }
        }
    }
}
Or.prototype.verify = function (t, r, n, i) {
    ;(t = this._truncateToN(new Pe(t, 16))), (n = this.keyFromPublic(n, i)), (r = new Ol(r, "hex"))
    var s = r.r,
        o = r.s
    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1
    var a = o.invm(this.n),
        l = a.mul(t).umod(this.n),
        u = a.mul(s).umod(this.n),
        c
    return this.curve._maxwellTrick
        ? ((c = this.g.jmulAdd(l, n.getPublic(), u)), c.isInfinity() ? !1 : c.eqXToP(s))
        : ((c = this.g.mulAdd(l, n.getPublic(), u)), c.isInfinity() ? !1 : c.getX().umod(this.n).cmp(s) === 0)
}
Or.prototype.recoverPubKey = function (e, t, r, n) {
    um((3 & r) === r, "The recovery param is more than two bits"), (t = new Ol(t, n))
    var i = this.n,
        s = new Pe(e),
        o = t.r,
        a = t.s,
        l = r & 1,
        u = r >> 1
    if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate")
    u ? (o = this.curve.pointFromX(o.add(this.curve.n), l)) : (o = this.curve.pointFromX(o, l))
    var c = t.r.invm(i),
        d = i.sub(s).mul(c).umod(i),
        h = a.mul(c).umod(i)
    return this.g.mulAdd(d, o, h)
}
Or.prototype.getKeyRecoveryParam = function (e, t, r, n) {
    if (((t = new Ol(t, n)), t.recoveryParam !== null)) return t.recoveryParam
    for (var i = 0; i < 4; i++) {
        var s
        try {
            s = this.recoverPubKey(e, t, i)
        } catch {
            continue
        }
        if (s.eq(r)) return i
    }
    throw new Error("Unable to find valid recovery factor")
}
var nA = ro(function (e, t) {
        var r = t
        ;(r.version = "6.5.4"),
            (r.utils = xr),
            (r.rand = function () {
                throw new Error("unsupported")
            }),
            (r.curve = Da),
            (r.curves = Fa),
            (r.ec = rA),
            (r.eddsa = null)
    }),
    iA = nA.ec
const sA = "signing-key/5.5.0",
    fm = new q(sA)
let xu = null
function nn() {
    return xu || (xu = new iA("secp256k1")), xu
}
class oA {
    constructor(t) {
        ne(this, "curve", "secp256k1"), ne(this, "privateKey", Se(t))
        const r = nn().keyFromPrivate(Ne(this.privateKey))
        ne(this, "publicKey", "0x" + r.getPublic(!1, "hex")),
            ne(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")),
            ne(this, "_isSigningKey", !0)
    }
    _addPoint(t) {
        const r = nn().keyFromPublic(Ne(this.publicKey)),
            n = nn().keyFromPublic(Ne(t))
        return "0x" + r.pub.add(n.pub).encodeCompressed("hex")
    }
    signDigest(t) {
        const r = nn().keyFromPrivate(Ne(this.privateKey)),
            n = Ne(t)
        n.length !== 32 && fm.throwArgumentError("bad digest length", "digest", t)
        const i = r.sign(n, { canonical: !0 })
        return $l({ recoveryParam: i.recoveryParam, r: It("0x" + i.r.toString(16), 32), s: It("0x" + i.s.toString(16), 32) })
    }
    computeSharedSecret(t) {
        const r = nn().keyFromPrivate(Ne(this.privateKey)),
            n = nn().keyFromPublic(Ne(cm(t)))
        return It("0x" + r.derive(n.getPublic()).toString(16), 32)
    }
    static isSigningKey(t) {
        return !!(t && t._isSigningKey)
    }
}
function aA(e, t) {
    const r = $l(t),
        n = { r: Ne(r.r), s: Ne(r.s) }
    return "0x" + nn().recoverPubKey(Ne(e), n, r.recoveryParam).encode("hex", !1)
}
function cm(e, t) {
    const r = Ne(e)
    if (r.length === 32) {
        const n = new oA(r)
        return t ? "0x" + nn().keyFromPrivate(r).getPublic(!0, "hex") : n.publicKey
    } else {
        if (r.length === 33) return t ? Se(r) : "0x" + nn().keyFromPublic(r).getPublic(!1, "hex")
        if (r.length === 65) return t ? "0x" + nn().keyFromPublic(r).getPublic(!0, "hex") : Se(r)
    }
    return fm.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
}
const lA = "transactions/5.5.0",
    Wn = new q(lA)
var Th
;(function (e) {
    ;(e[(e.legacy = 0)] = "legacy"), (e[(e.eip2930 = 1)] = "eip2930"), (e[(e.eip1559 = 2)] = "eip1559")
})(Th || (Th = {}))
function Lc(e) {
    return e === "0x" ? null : Zt(e)
}
function er(e) {
    return e === "0x" ? Og : pe.from(e)
}
function uA(e) {
    const t = cm(e)
    return Zt(Pn(Ft(Pn(t, 1)), 12))
}
function dm(e, t) {
    return uA(aA(Ne(e), t))
}
function gr(e, t) {
    const r = Ms(pe.from(e).toHexString())
    return r.length > 32 && Wn.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r
}
function Cu(e, t) {
    return {
        address: Zt(e),
        storageKeys: (t || []).map(
            (r, n) => (ia(r) !== 32 && Wn.throwArgumentError("invalid access list storageKey", `accessList[${e}:${n}]`, r), r.toLowerCase())
        ),
    }
}
function no(e) {
    if (Array.isArray(e))
        return e.map((r, n) =>
            Array.isArray(r)
                ? (r.length > 2 && Wn.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${n}]`, r),
                  Cu(r[0], r[1]))
                : Cu(r.address, r.storageKeys)
        )
    const t = Object.keys(e).map((r) => {
        const n = e[r].reduce((i, s) => ((i[s] = !0), i), {})
        return Cu(r, Object.keys(n).sort())
    })
    return t.sort((r, n) => r.address.localeCompare(n.address)), t
}
function hm(e) {
    return no(e).map((t) => [t.address, t.storageKeys])
}
function fA(e, t) {
    if (e.gasPrice != null) {
        const n = pe.from(e.gasPrice),
            i = pe.from(e.maxFeePerGas || 0)
        n.eq(i) || Wn.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", { gasPrice: n, maxFeePerGas: i })
    }
    const r = [
        gr(e.chainId || 0, "chainId"),
        gr(e.nonce || 0, "nonce"),
        gr(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
        gr(e.maxFeePerGas || 0, "maxFeePerGas"),
        gr(e.gasLimit || 0, "gasLimit"),
        e.to != null ? Zt(e.to) : "0x",
        gr(e.value || 0, "value"),
        e.data || "0x",
        hm(e.accessList || []),
    ]
    if (t) {
        const n = $l(t)
        r.push(gr(n.recoveryParam, "recoveryParam")), r.push(Ms(n.r)), r.push(Ms(n.s))
    }
    return Hr(["0x02", Nl(r)])
}
function cA(e, t) {
    const r = [
        gr(e.chainId || 0, "chainId"),
        gr(e.nonce || 0, "nonce"),
        gr(e.gasPrice || 0, "gasPrice"),
        gr(e.gasLimit || 0, "gasLimit"),
        e.to != null ? Zt(e.to) : "0x",
        gr(e.value || 0, "value"),
        e.data || "0x",
        hm(e.accessList || []),
    ]
    if (t) {
        const n = $l(t)
        r.push(gr(n.recoveryParam, "recoveryParam")), r.push(Ms(n.r)), r.push(Ms(n.s))
    }
    return Hr(["0x01", Nl(r)])
}
function pm(e, t, r) {
    try {
        const n = er(t[0]).toNumber()
        if (n !== 0 && n !== 1) throw new Error("bad recid")
        e.v = n
    } catch {
        Wn.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
    }
    ;(e.r = It(t[1], 32)), (e.s = It(t[2], 32))
    try {
        const n = Ft(r(e))
        e.from = dm(n, { r: e.r, s: e.s, recoveryParam: e.v })
    } catch (n) {
        console.log(n)
    }
}
function dA(e) {
    const t = $c(e.slice(1))
    t.length !== 9 && t.length !== 12 && Wn.throwArgumentError("invalid component count for transaction type: 2", "payload", Se(e))
    const r = er(t[2]),
        n = er(t[3]),
        i = {
            type: 2,
            chainId: er(t[0]).toNumber(),
            nonce: er(t[1]).toNumber(),
            maxPriorityFeePerGas: r,
            maxFeePerGas: n,
            gasPrice: null,
            gasLimit: er(t[4]),
            to: Lc(t[5]),
            value: er(t[6]),
            data: t[7],
            accessList: no(t[8]),
        }
    return t.length === 9 || ((i.hash = Ft(e)), pm(i, t.slice(9), fA)), i
}
function hA(e) {
    const t = $c(e.slice(1))
    t.length !== 8 && t.length !== 11 && Wn.throwArgumentError("invalid component count for transaction type: 1", "payload", Se(e))
    const r = {
        type: 1,
        chainId: er(t[0]).toNumber(),
        nonce: er(t[1]).toNumber(),
        gasPrice: er(t[2]),
        gasLimit: er(t[3]),
        to: Lc(t[4]),
        value: er(t[5]),
        data: t[6],
        accessList: no(t[7]),
    }
    return t.length === 8 || ((r.hash = Ft(e)), pm(r, t.slice(8), cA)), r
}
function pA(e) {
    const t = $c(e)
    t.length !== 9 && t.length !== 6 && Wn.throwArgumentError("invalid raw transaction", "rawTransaction", e)
    const r = { nonce: er(t[0]).toNumber(), gasPrice: er(t[1]), gasLimit: er(t[2]), to: Lc(t[3]), value: er(t[4]), data: t[5], chainId: 0 }
    if (t.length === 6) return r
    try {
        r.v = pe.from(t[6]).toNumber()
    } catch (n) {
        return console.log(n), r
    }
    if (((r.r = It(t[7], 32)), (r.s = It(t[8], 32)), pe.from(r.r).isZero() && pe.from(r.s).isZero())) (r.chainId = r.v), (r.v = 0)
    else {
        ;(r.chainId = Math.floor((r.v - 35) / 2)), r.chainId < 0 && (r.chainId = 0)
        let n = r.v - 27
        const i = t.slice(0, 6)
        r.chainId !== 0 && (i.push(Se(r.chainId)), i.push("0x"), i.push("0x"), (n -= r.chainId * 2 + 8))
        const s = Ft(Nl(i))
        try {
            r.from = dm(s, { r: Se(r.r), s: Se(r.s), recoveryParam: n })
        } catch (o) {
            console.log(o)
        }
        r.hash = Ft(e)
    }
    return (r.type = null), r
}
function gA(e) {
    const t = Ne(e)
    if (t[0] > 127) return pA(t)
    switch (t[0]) {
        case 1:
            return hA(t)
        case 2:
            return dA(t)
    }
    return Wn.throwError(`unsupported transaction type: ${t[0]}`, q.errors.UNSUPPORTED_OPERATION, {
        operation: "parseTransaction",
        transactionType: t[0],
    })
}
const mA = "contracts/5.5.0"
var _i =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const rt = new q(mA),
    vA = {
        chainId: !0,
        data: !0,
        from: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
        customData: !0,
    }
function ll(e, t) {
    return _i(this, void 0, void 0, function* () {
        const r = yield t
        typeof r != "string" && rt.throwArgumentError("invalid address or ENS name", "name", r)
        try {
            return Zt(r)
        } catch {}
        e || rt.throwError("a provider or signer is needed to resolve ENS names", q.errors.UNSUPPORTED_OPERATION, { operation: "resolveName" })
        const n = yield e.resolveName(r)
        return n == null && rt.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n
    })
}
function Po(e, t, r) {
    return _i(this, void 0, void 0, function* () {
        return Array.isArray(r)
            ? yield Promise.all(r.map((n, i) => Po(e, Array.isArray(t) ? t[i] : t[n.name], n)))
            : r.type === "address"
            ? yield ll(e, t)
            : r.type === "tuple"
            ? yield Po(e, t, r.components)
            : r.baseType === "array"
            ? Array.isArray(t)
                ? yield Promise.all(t.map((n) => Po(e, n, r.arrayChildren)))
                : Promise.reject(rt.makeError("invalid value for array", q.errors.INVALID_ARGUMENT, { argument: "value", value: t }))
            : t
    })
}
function Il(e, t, r) {
    return _i(this, void 0, void 0, function* () {
        let n = {}
        r.length === t.inputs.length + 1 && typeof r[r.length - 1] == "object" && (n = Vt(r.pop())),
            rt.checkArgumentCount(r.length, t.inputs.length, "passed to contract"),
            e.signer
                ? n.from
                    ? (n.from = Mt({ override: ll(e.signer, n.from), signer: e.signer.getAddress() }).then((u) =>
                          _i(this, void 0, void 0, function* () {
                              return (
                                  Zt(u.signer) !== u.override &&
                                      rt.throwError("Contract with a Signer cannot override from", q.errors.UNSUPPORTED_OPERATION, {
                                          operation: "overrides.from",
                                      }),
                                  u.override
                              )
                          })
                      ))
                    : (n.from = e.signer.getAddress())
                : n.from && (n.from = ll(e.provider, n.from))
        const i = yield Mt({ args: Po(e.signer || e.provider, r, t.inputs), address: e.resolvedAddress, overrides: Mt(n) || {} }),
            s = e.interface.encodeFunctionData(t, i.args),
            o = { data: s, to: i.address },
            a = i.overrides
        if (
            (a.nonce != null && (o.nonce = pe.from(a.nonce).toNumber()),
            a.gasLimit != null && (o.gasLimit = pe.from(a.gasLimit)),
            a.gasPrice != null && (o.gasPrice = pe.from(a.gasPrice)),
            a.maxFeePerGas != null && (o.maxFeePerGas = pe.from(a.maxFeePerGas)),
            a.maxPriorityFeePerGas != null && (o.maxPriorityFeePerGas = pe.from(a.maxPriorityFeePerGas)),
            a.from != null && (o.from = a.from),
            a.type != null && (o.type = a.type),
            a.accessList != null && (o.accessList = no(a.accessList)),
            o.gasLimit == null && t.gas != null)
        ) {
            let u = 21e3
            const c = Ne(s)
            for (let d = 0; d < c.length; d++) (u += 4), c[d] && (u += 64)
            o.gasLimit = pe.from(t.gas).add(u)
        }
        if (a.value) {
            const u = pe.from(a.value)
            !u.isZero() &&
                !t.payable &&
                rt.throwError("non-payable method cannot override value", q.errors.UNSUPPORTED_OPERATION, {
                    operation: "overrides.value",
                    value: n.value,
                }),
                (o.value = u)
        }
        a.customData && (o.customData = Vt(a.customData)),
            delete n.nonce,
            delete n.gasLimit,
            delete n.gasPrice,
            delete n.from,
            delete n.value,
            delete n.type,
            delete n.accessList,
            delete n.maxFeePerGas,
            delete n.maxPriorityFeePerGas,
            delete n.customData
        const l = Object.keys(n).filter((u) => n[u] != null)
        return (
            l.length &&
                rt.throwError(`cannot override ${l.map((u) => JSON.stringify(u)).join(",")}`, q.errors.UNSUPPORTED_OPERATION, {
                    operation: "overrides",
                    overrides: l,
                }),
            o
        )
    })
}
function bA(e, t) {
    return function (...r) {
        return Il(e, t, r)
    }
}
function yA(e, t) {
    const r = e.signer || e.provider
    return function (...n) {
        return _i(this, void 0, void 0, function* () {
            r || rt.throwError("estimate require a provider or signer", q.errors.UNSUPPORTED_OPERATION, { operation: "estimateGas" })
            const i = yield Il(e, t, n)
            return yield r.estimateGas(i)
        })
    }
}
function gm(e, t) {
    const r = t.wait.bind(t)
    t.wait = (n) =>
        r(n).then(
            (i) => (
                (i.events = i.logs.map((s) => {
                    let o = Fn(s),
                        a = null
                    try {
                        a = e.interface.parseLog(s)
                    } catch {}
                    return (
                        a &&
                            ((o.args = a.args),
                            (o.decode = (l, u) => e.interface.decodeEventLog(a.eventFragment, l, u)),
                            (o.event = a.name),
                            (o.eventSignature = a.signature)),
                        (o.removeListener = () => e.provider),
                        (o.getBlock = () => e.provider.getBlock(i.blockHash)),
                        (o.getTransaction = () => e.provider.getTransaction(i.transactionHash)),
                        (o.getTransactionReceipt = () => Promise.resolve(i)),
                        o
                    )
                })),
                i
            )
        )
}
function mm(e, t, r) {
    const n = e.signer || e.provider
    return function (...i) {
        return _i(this, void 0, void 0, function* () {
            let s
            if (i.length === t.inputs.length + 1 && typeof i[i.length - 1] == "object") {
                const l = Vt(i.pop())
                l.blockTag != null && (s = yield l.blockTag), delete l.blockTag, i.push(l)
            }
            e.deployTransaction != null && (yield e._deployed(s))
            const o = yield Il(e, t, i),
                a = yield n.call(o, s)
            try {
                let l = e.interface.decodeFunctionResult(t, a)
                return r && t.outputs.length === 1 && (l = l[0]), l
            } catch (l) {
                throw (l.code === q.errors.CALL_EXCEPTION && ((l.address = e.address), (l.args = i), (l.transaction = o)), l)
            }
        })
    }
}
function _A(e, t) {
    return function (...r) {
        return _i(this, void 0, void 0, function* () {
            e.signer ||
                rt.throwError("sending a transaction requires a signer", q.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction" }),
                e.deployTransaction != null && (yield e._deployed())
            const n = yield Il(e, t, r),
                i = yield e.signer.sendTransaction(n)
            return gm(e, i), i
        })
    }
}
function xh(e, t, r) {
    return t.constant ? mm(e, t, r) : _A(e, t)
}
function vm(e) {
    return e.address && (e.topics == null || e.topics.length === 0)
        ? "*"
        : (e.address || "*") + "@" + (e.topics ? e.topics.map((t) => (Array.isArray(t) ? t.join("|") : t)).join(":") : "")
}
class Zo {
    constructor(t, r) {
        ne(this, "tag", t), ne(this, "filter", r), (this._listeners = [])
    }
    addListener(t, r) {
        this._listeners.push({ listener: t, once: r })
    }
    removeListener(t) {
        let r = !1
        this._listeners = this._listeners.filter((n) => (r || n.listener !== t ? !0 : ((r = !0), !1)))
    }
    removeAllListeners() {
        this._listeners = []
    }
    listeners() {
        return this._listeners.map((t) => t.listener)
    }
    listenerCount() {
        return this._listeners.length
    }
    run(t) {
        const r = this.listenerCount()
        return (
            (this._listeners = this._listeners.filter((n) => {
                const i = t.slice()
                return (
                    setTimeout(() => {
                        n.listener.apply(this, i)
                    }, 0),
                    !n.once
                )
            })),
            r
        )
    }
    prepareEvent(t) {}
    getEmit(t) {
        return [t]
    }
}
class wA extends Zo {
    constructor() {
        super("error", null)
    }
}
class Ch extends Zo {
    constructor(t, r, n, i) {
        const s = { address: t }
        let o = r.getEventTopic(n)
        i ? (o !== i[0] && rt.throwArgumentError("topic mismatch", "topics", i), (s.topics = i.slice())) : (s.topics = [o])
        super(vm(s), s)
        ne(this, "address", t), ne(this, "interface", r), ne(this, "fragment", n)
    }
    prepareEvent(t) {
        super.prepareEvent(t),
            (t.event = this.fragment.name),
            (t.eventSignature = this.fragment.format()),
            (t.decode = (r, n) => this.interface.decodeEventLog(this.fragment, r, n))
        try {
            t.args = this.interface.decodeEventLog(this.fragment, t.data, t.topics)
        } catch (r) {
            ;(t.args = null), (t.decodeError = r)
        }
    }
    getEmit(t) {
        const r = vw(t.args)
        if (r.length) throw r[0].error
        const n = (t.args || []).slice()
        return n.push(t), n
    }
}
class $h extends Zo {
    constructor(t, r) {
        super("*", { address: t })
        ne(this, "address", t), ne(this, "interface", r)
    }
    prepareEvent(t) {
        super.prepareEvent(t)
        try {
            const r = this.interface.parseLog(t)
            ;(t.event = r.name),
                (t.eventSignature = r.signature),
                (t.decode = (n, i) => this.interface.decodeEventLog(r.eventFragment, n, i)),
                (t.args = r.args)
        } catch {}
    }
}
class EA {
    constructor(t, r, n) {
        rt.checkNew(new.target, Tf),
            ne(this, "interface", Er(new.target, "getInterface")(r)),
            n == null
                ? (ne(this, "provider", null), ne(this, "signer", null))
                : Zs.isSigner(n)
                ? (ne(this, "provider", n.provider || null), ne(this, "signer", n))
                : Xo.isProvider(n)
                ? (ne(this, "provider", n), ne(this, "signer", null))
                : rt.throwArgumentError("invalid signer or provider", "signerOrProvider", n),
            ne(this, "callStatic", {}),
            ne(this, "estimateGas", {}),
            ne(this, "functions", {}),
            ne(this, "populateTransaction", {}),
            ne(this, "filters", {})
        {
            const o = {}
            Object.keys(this.interface.events).forEach((a) => {
                const l = this.interface.events[a]
                ne(this.filters, a, (...u) => ({ address: this.address, topics: this.interface.encodeFilterTopics(l, u) })),
                    o[l.name] || (o[l.name] = []),
                    o[l.name].push(a)
            }),
                Object.keys(o).forEach((a) => {
                    const l = o[a]
                    l.length === 1 ? ne(this.filters, a, this.filters[l[0]]) : rt.warn(`Duplicate definition of ${a} (${l.join(", ")})`)
                })
        }
        if (
            (ne(this, "_runningEvents", {}),
            ne(this, "_wrappedEmits", {}),
            t == null && rt.throwArgumentError("invalid contract address or ENS name", "addressOrName", t),
            ne(this, "address", t),
            this.provider)
        )
            ne(this, "resolvedAddress", ll(this.provider, t))
        else
            try {
                ne(this, "resolvedAddress", Promise.resolve(Zt(t)))
            } catch {
                rt.throwError("provider is required to use ENS name as contract address", q.errors.UNSUPPORTED_OPERATION, {
                    operation: "new Contract",
                })
            }
        const i = {},
            s = {}
        Object.keys(this.interface.functions).forEach((o) => {
            const a = this.interface.functions[o]
            if (s[o]) {
                rt.warn(`Duplicate ABI entry for ${JSON.stringify(o)}`)
                return
            }
            s[o] = !0
            {
                const l = a.name
                i[`%${l}`] || (i[`%${l}`] = []), i[`%${l}`].push(o)
            }
            this[o] == null && ne(this, o, xh(this, a, !0)),
                this.functions[o] == null && ne(this.functions, o, xh(this, a, !1)),
                this.callStatic[o] == null && ne(this.callStatic, o, mm(this, a, !0)),
                this.populateTransaction[o] == null && ne(this.populateTransaction, o, bA(this, a)),
                this.estimateGas[o] == null && ne(this.estimateGas, o, yA(this, a))
        }),
            Object.keys(i).forEach((o) => {
                const a = i[o]
                if (a.length > 1) return
                o = o.substring(1)
                const l = a[0]
                try {
                    this[o] == null && ne(this, o, this[l])
                } catch {}
                this.functions[o] == null && ne(this.functions, o, this.functions[l]),
                    this.callStatic[o] == null && ne(this.callStatic, o, this.callStatic[l]),
                    this.populateTransaction[o] == null && ne(this.populateTransaction, o, this.populateTransaction[l]),
                    this.estimateGas[o] == null && ne(this.estimateGas, o, this.estimateGas[l])
            })
    }
    static getContractAddress(t) {
        return Bc(t)
    }
    static getInterface(t) {
        return il.isInterface(t) ? t : new il(t)
    }
    deployed() {
        return this._deployed()
    }
    _deployed(t) {
        return (
            this._deployedPromise ||
                (this.deployTransaction
                    ? (this._deployedPromise = this.deployTransaction.wait().then(() => this))
                    : (this._deployedPromise = this.provider
                          .getCode(this.address, t)
                          .then(
                              (r) => (
                                  r === "0x" &&
                                      rt.throwError("contract not deployed", q.errors.UNSUPPORTED_OPERATION, {
                                          contractAddress: this.address,
                                          operation: "getDeployed",
                                      }),
                                  this
                              )
                          ))),
            this._deployedPromise
        )
    }
    fallback(t) {
        this.signer ||
            rt.throwError("sending a transactions require a signer", q.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" })
        const r = Vt(t || {})
        return (
            ["from", "to"].forEach(function (n) {
                r[n] != null && rt.throwError("cannot override " + n, q.errors.UNSUPPORTED_OPERATION, { operation: n })
            }),
            (r.to = this.resolvedAddress),
            this.deployed().then(() => this.signer.sendTransaction(r))
        )
    }
    connect(t) {
        typeof t == "string" && (t = new sl(t, this.provider))
        const r = new this.constructor(this.address, this.interface, t)
        return this.deployTransaction && ne(r, "deployTransaction", this.deployTransaction), r
    }
    attach(t) {
        return new this.constructor(t, this.interface, this.signer || this.provider)
    }
    static isIndexed(t) {
        return _f.isIndexed(t)
    }
    _normalizeRunningEvent(t) {
        return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t
    }
    _getRunningEvent(t) {
        if (typeof t == "string") {
            if (t === "error") return this._normalizeRunningEvent(new wA())
            if (t === "event") return this._normalizeRunningEvent(new Zo("event", null))
            if (t === "*") return this._normalizeRunningEvent(new $h(this.address, this.interface))
            const r = this.interface.getEvent(t)
            return this._normalizeRunningEvent(new Ch(this.address, this.interface, r))
        }
        if (t.topics && t.topics.length > 0) {
            try {
                const n = t.topics[0]
                if (typeof n != "string") throw new Error("invalid topic")
                const i = this.interface.getEvent(n)
                return this._normalizeRunningEvent(new Ch(this.address, this.interface, i, t.topics))
            } catch {}
            const r = { address: this.address, topics: t.topics }
            return this._normalizeRunningEvent(new Zo(vm(r), r))
        }
        return this._normalizeRunningEvent(new $h(this.address, this.interface))
    }
    _checkRunningEvents(t) {
        if (t.listenerCount() === 0) {
            delete this._runningEvents[t.tag]
            const r = this._wrappedEmits[t.tag]
            r && t.filter && (this.provider.off(t.filter, r), delete this._wrappedEmits[t.tag])
        }
    }
    _wrapEvent(t, r, n) {
        const i = Fn(r)
        return (
            (i.removeListener = () => {
                !n || (t.removeListener(n), this._checkRunningEvents(t))
            }),
            (i.getBlock = () => this.provider.getBlock(r.blockHash)),
            (i.getTransaction = () => this.provider.getTransaction(r.transactionHash)),
            (i.getTransactionReceipt = () => this.provider.getTransactionReceipt(r.transactionHash)),
            t.prepareEvent(i),
            i
        )
    }
    _addEventListener(t, r, n) {
        if (
            (this.provider ||
                rt.throwError("events require a provider or a signer with a provider", q.errors.UNSUPPORTED_OPERATION, { operation: "once" }),
            t.addListener(r, n),
            (this._runningEvents[t.tag] = t),
            !this._wrappedEmits[t.tag])
        ) {
            const i = (s) => {
                let o = this._wrapEvent(t, s, r)
                if (o.decodeError == null)
                    try {
                        const a = t.getEmit(o)
                        this.emit(t.filter, ...a)
                    } catch (a) {
                        o.decodeError = a.error
                    }
                t.filter != null && this.emit("event", o), o.decodeError != null && this.emit("error", o.decodeError, o)
            }
            ;(this._wrappedEmits[t.tag] = i), t.filter != null && this.provider.on(t.filter, i)
        }
    }
    queryFilter(t, r, n) {
        const i = this._getRunningEvent(t),
            s = Vt(i.filter)
        return (
            typeof r == "string" && Xe(r, 32)
                ? (n != null && rt.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", n), (s.blockHash = r))
                : ((s.fromBlock = r != null ? r : 0), (s.toBlock = n != null ? n : "latest")),
            this.provider.getLogs(s).then((o) => o.map((a) => this._wrapEvent(i, a, null)))
        )
    }
    on(t, r) {
        return this._addEventListener(this._getRunningEvent(t), r, !1), this
    }
    once(t, r) {
        return this._addEventListener(this._getRunningEvent(t), r, !0), this
    }
    emit(t, ...r) {
        if (!this.provider) return !1
        const n = this._getRunningEvent(t),
            i = n.run(r) > 0
        return this._checkRunningEvents(n), i
    }
    listenerCount(t) {
        return this.provider
            ? t == null
                ? Object.keys(this._runningEvents).reduce((r, n) => r + this._runningEvents[n].listenerCount(), 0)
                : this._getRunningEvent(t).listenerCount()
            : 0
    }
    listeners(t) {
        if (!this.provider) return []
        if (t == null) {
            const r = []
            for (let n in this._runningEvents)
                this._runningEvents[n].listeners().forEach((i) => {
                    r.push(i)
                })
            return r
        }
        return this._getRunningEvent(t).listeners()
    }
    removeAllListeners(t) {
        if (!this.provider) return this
        if (t == null) {
            for (const n in this._runningEvents) {
                const i = this._runningEvents[n]
                i.removeAllListeners(), this._checkRunningEvents(i)
            }
            return this
        }
        const r = this._getRunningEvent(t)
        return r.removeAllListeners(), this._checkRunningEvents(r), this
    }
    off(t, r) {
        if (!this.provider) return this
        const n = this._getRunningEvent(t)
        return n.removeListener(r), this._checkRunningEvents(n), this
    }
    removeListener(t, r) {
        return this.off(t, r)
    }
}
class Tf extends EA {}
class EI {
    constructor(t, r, n) {
        let i = null
        typeof r == "string" ? (i = r) : na(r) ? (i = Se(r)) : r && typeof r.object == "string" ? (i = r.object) : (i = "!"),
            i.substring(0, 2) !== "0x" && (i = "0x" + i),
            (!Xe(i) || i.length % 2) && rt.throwArgumentError("invalid bytecode", "bytecode", r),
            n && !Zs.isSigner(n) && rt.throwArgumentError("invalid signer", "signer", n),
            ne(this, "bytecode", i),
            ne(this, "interface", Er(new.target, "getInterface")(t)),
            ne(this, "signer", n || null)
    }
    getDeployTransaction(...t) {
        let r = {}
        if (t.length === this.interface.deploy.inputs.length + 1 && typeof t[t.length - 1] == "object") {
            r = Vt(t.pop())
            for (const n in r) if (!vA[n]) throw new Error("unknown transaction override " + n)
        }
        return (
            ["data", "from", "to"].forEach((n) => {
                r[n] != null && rt.throwError("cannot override " + n, q.errors.UNSUPPORTED_OPERATION, { operation: n })
            }),
            r.value &&
                !pe.from(r.value).isZero() &&
                !this.interface.deploy.payable &&
                rt.throwError("non-payable constructor cannot override value", q.errors.UNSUPPORTED_OPERATION, {
                    operation: "overrides.value",
                    value: r.value,
                }),
            rt.checkArgumentCount(t.length, this.interface.deploy.inputs.length, " in Contract constructor"),
            (r.data = Se(wr([this.bytecode, this.interface.encodeDeploy(t)]))),
            r
        )
    }
    deploy(...t) {
        return _i(this, void 0, void 0, function* () {
            let r = {}
            t.length === this.interface.deploy.inputs.length + 1 && (r = t.pop()),
                rt.checkArgumentCount(t.length, this.interface.deploy.inputs.length, " in Contract constructor")
            const n = yield Po(this.signer, t, this.interface.deploy.inputs)
            n.push(r)
            const i = this.getDeployTransaction(...n),
                s = yield this.signer.sendTransaction(i),
                o = Er(this.constructor, "getContractAddress")(s),
                a = Er(this.constructor, "getContract")(o, this.interface, this.signer)
            return gm(a, s), ne(a, "deployTransaction", s), a
        })
    }
    attach(t) {
        return this.constructor.getContract(t, this.interface, this.signer)
    }
    connect(t) {
        return new this.constructor(this.interface, this.bytecode, t)
    }
    static fromSolidity(t, r) {
        t == null && rt.throwError("missing compiler output", q.errors.MISSING_ARGUMENT, { argument: "compilerOutput" }),
            typeof t == "string" && (t = JSON.parse(t))
        const n = t.abi
        let i = null
        return t.bytecode ? (i = t.bytecode) : t.evm && t.evm.bytecode && (i = t.evm.bytecode), new this(n, i, r)
    }
    static getInterface(t) {
        return Tf.getInterface(t)
    }
    static getContractAddress(t) {
        return Bc(t)
    }
    static getContract(t, r, n) {
        return new Tf(t, r, n)
    }
}
class bm {
    constructor(t) {
        ne(this, "alphabet", t), ne(this, "base", t.length), ne(this, "_alphabetMap", {}), ne(this, "_leader", t.charAt(0))
        for (let r = 0; r < t.length; r++) this._alphabetMap[t.charAt(r)] = r
    }
    encode(t) {
        let r = Ne(t)
        if (r.length === 0) return ""
        let n = [0]
        for (let s = 0; s < r.length; ++s) {
            let o = r[s]
            for (let a = 0; a < n.length; ++a) (o += n[a] << 8), (n[a] = o % this.base), (o = (o / this.base) | 0)
            for (; o > 0; ) n.push(o % this.base), (o = (o / this.base) | 0)
        }
        let i = ""
        for (let s = 0; r[s] === 0 && s < r.length - 1; ++s) i += this._leader
        for (let s = n.length - 1; s >= 0; --s) i += this.alphabet[n[s]]
        return i
    }
    decode(t) {
        if (typeof t != "string") throw new TypeError("Expected String")
        let r = []
        if (t.length === 0) return new Uint8Array(r)
        r.push(0)
        for (let n = 0; n < t.length; n++) {
            let i = this._alphabetMap[t[n]]
            if (i === void 0) throw new Error("Non-base" + this.base + " character")
            let s = i
            for (let o = 0; o < r.length; ++o) (s += r[o] * this.base), (r[o] = s & 255), (s >>= 8)
            for (; s > 0; ) r.push(s & 255), (s >>= 8)
        }
        for (let n = 0; t[n] === this._leader && n < t.length - 1; ++n) r.push(0)
        return Ne(new Uint8Array(r.reverse()))
    }
}
new bm("abcdefghijklmnopqrstuvwxyz234567")
const ym = new bm("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
    AA = "sha2/5.5.0"
new q(AA)
function Nh(e) {
    return "0x" + tn.sha256().update(Ne(e)).digest("hex")
}
const SA = "networks/5.5.2",
    Bh = new q(SA)
function TA(e) {
    return e && typeof e.renetwork == "function"
}
function Bs(e) {
    const t = function (r, n) {
        n == null && (n = {})
        const i = []
        if (r.InfuraProvider)
            try {
                i.push(new r.InfuraProvider(e, n.infura))
            } catch {}
        if (r.EtherscanProvider)
            try {
                i.push(new r.EtherscanProvider(e, n.etherscan))
            } catch {}
        if (r.AlchemyProvider)
            try {
                i.push(new r.AlchemyProvider(e, n.alchemy))
            } catch {}
        if (r.PocketProvider) {
            const s = ["goerli", "ropsten", "rinkeby"]
            try {
                const o = new r.PocketProvider(e)
                o.network && s.indexOf(o.network.name) === -1 && i.push(o)
            } catch {}
        }
        if (r.CloudflareProvider)
            try {
                i.push(new r.CloudflareProvider(e))
            } catch {}
        if (i.length === 0) return null
        if (r.FallbackProvider) {
            let s = 1
            return n.quorum != null ? (s = n.quorum) : e === "homestead" && (s = 2), new r.FallbackProvider(i, s)
        }
        return i[0]
    }
    return (
        (t.renetwork = function (r) {
            return Bs(r)
        }),
        t
    )
}
function ul(e, t) {
    const r = function (n, i) {
        return n.JsonRpcProvider ? new n.JsonRpcProvider(e, t) : null
    }
    return (
        (r.renetwork = function (n) {
            return ul(e, n)
        }),
        r
    )
}
const kh = { chainId: 1, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "homestead", _defaultProvider: Bs("homestead") },
    Oh = { chainId: 3, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "ropsten", _defaultProvider: Bs("ropsten") },
    Ih = { chainId: 63, name: "classicMordor", _defaultProvider: ul("https://www.ethercluster.com/mordor", "classicMordor") },
    Ta = {
        unspecified: { chainId: 0, name: "unspecified" },
        homestead: kh,
        mainnet: kh,
        morden: { chainId: 2, name: "morden" },
        ropsten: Oh,
        testnet: Oh,
        rinkeby: { chainId: 4, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "rinkeby", _defaultProvider: Bs("rinkeby") },
        kovan: { chainId: 42, name: "kovan", _defaultProvider: Bs("kovan") },
        goerli: { chainId: 5, ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", name: "goerli", _defaultProvider: Bs("goerli") },
        kintsugi: { chainId: 1337702, name: "kintsugi" },
        classic: { chainId: 61, name: "classic", _defaultProvider: ul("https://www.ethercluster.com/etc", "classic") },
        classicMorden: { chainId: 62, name: "classicMorden" },
        classicMordor: Ih,
        classicTestnet: Ih,
        classicKotti: { chainId: 6, name: "classicKotti", _defaultProvider: ul("https://www.ethercluster.com/kotti", "classicKotti") },
        xdai: { chainId: 100, name: "xdai" },
        matic: { chainId: 137, name: "matic" },
        maticmum: { chainId: 80001, name: "maticmum" },
        optimism: { chainId: 10, name: "optimism" },
        "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
        "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
        arbitrum: { chainId: 42161, name: "arbitrum" },
        "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
        bnb: { chainId: 56, name: "bnb" },
        bnbt: { chainId: 97, name: "bnbt" },
    }
function xA(e) {
    if (e == null) return null
    if (typeof e == "number") {
        for (const n in Ta) {
            const i = Ta[n]
            if (i.chainId === e)
                return { name: i.name, chainId: i.chainId, ensAddress: i.ensAddress || null, _defaultProvider: i._defaultProvider || null }
        }
        return { chainId: e, name: "unknown" }
    }
    if (typeof e == "string") {
        const n = Ta[e]
        return n == null ? null : { name: n.name, chainId: n.chainId, ensAddress: n.ensAddress, _defaultProvider: n._defaultProvider || null }
    }
    const t = Ta[e.name]
    if (!t) return typeof e.chainId != "number" && Bh.throwArgumentError("invalid network chainId", "network", e), e
    e.chainId !== 0 && e.chainId !== t.chainId && Bh.throwArgumentError("network chainId mismatch", "network", e)
    let r = e._defaultProvider || null
    return (
        r == null && t._defaultProvider && (TA(t._defaultProvider) ? (r = t._defaultProvider.renetwork(e)) : (r = t._defaultProvider)),
        { name: e.name, chainId: t.chainId, ensAddress: e.ensAddress || t.ensAddress || null, _defaultProvider: r }
    )
}
function CA(e) {
    e = atob(e)
    const t = []
    for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r))
    return Ne(t)
}
function $A(e) {
    e = Ne(e)
    let t = ""
    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r])
    return btoa(t)
}
const NA = "web/5.5.1"
var BA =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
function kA(e, t) {
    return BA(this, void 0, void 0, function* () {
        t == null && (t = {})
        const r = { method: t.method || "GET", headers: t.headers || {}, body: t.body || void 0 }
        t.skipFetchSetup !== !0 &&
            ((r.mode = "cors"), (r.cache = "no-cache"), (r.credentials = "same-origin"), (r.redirect = "follow"), (r.referrer = "client"))
        const n = yield fetch(e, r),
            i = yield n.arrayBuffer(),
            s = {}
        return (
            n.headers.forEach
                ? n.headers.forEach((o, a) => {
                      s[a.toLowerCase()] = o
                  })
                : n.headers.keys().forEach((o) => {
                      s[o.toLowerCase()] = n.headers.get(o)
                  }),
            { headers: s, statusCode: n.status, statusMessage: n.statusText, body: Ne(new Uint8Array(i)) }
        )
    })
}
var OA =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const Vr = new q(NA)
function Ph(e) {
    return new Promise((t) => {
        setTimeout(t, e)
    })
}
function si(e, t) {
    if (e == null) return null
    if (typeof e == "string") return e
    if (Tc(e)) {
        if (t && (t.split("/")[0] === "text" || t.split(";")[0].trim() === "application/json"))
            try {
                return Xs(e)
            } catch {}
        return Se(e)
    }
    return e
}
function IA(e, t, r) {
    const n = typeof e == "object" && e.throttleLimit != null ? e.throttleLimit : 12
    Vr.assertArgument(n > 0 && n % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", n)
    const i = typeof e == "object" ? e.throttleCallback : null,
        s = typeof e == "object" && typeof e.throttleSlotInterval == "number" ? e.throttleSlotInterval : 100
    Vr.assertArgument(s > 0 && s % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s)
    const o = {}
    let a = null
    const l = { method: "GET" }
    let u = !1,
        c = 2 * 60 * 1e3
    if (typeof e == "string") a = e
    else if (typeof e == "object") {
        if (
            ((e == null || e.url == null) && Vr.throwArgumentError("missing URL", "connection.url", e),
            (a = e.url),
            typeof e.timeout == "number" && e.timeout > 0 && (c = e.timeout),
            e.headers)
        )
            for (const C in e.headers)
                (o[C.toLowerCase()] = { key: C, value: String(e.headers[C]) }),
                    ["if-none-match", "if-modified-since"].indexOf(C.toLowerCase()) >= 0 && (u = !0)
        if (((l.allowGzip = !!e.allowGzip), e.user != null && e.password != null)) {
            a.substring(0, 6) !== "https:" &&
                e.allowInsecureAuthentication !== !0 &&
                Vr.throwError("basic authentication requires a secure https url", q.errors.INVALID_ARGUMENT, {
                    argument: "url",
                    url: a,
                    user: e.user,
                    password: "[REDACTED]",
                })
            const C = e.user + ":" + e.password
            o.authorization = { key: "Authorization", value: "Basic " + $A(Vn(C)) }
        }
    }
    const d = new RegExp("^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$", "i"),
        h = a ? a.match(d) : null
    if (h)
        try {
            const C = { statusCode: 200, statusMessage: "OK", headers: { "content-type": h[1] }, body: CA(h[2]) }
            let B = C.body
            return r && (B = r(C.body, C)), Promise.resolve(B)
        } catch (C) {
            Vr.throwError("processing response error", q.errors.SERVER_ERROR, {
                body: si(h[1], h[2]),
                error: C,
                requestBody: null,
                requestMethod: "GET",
                url: a,
            })
        }
    t &&
        ((l.method = "POST"),
        (l.body = t),
        o["content-type"] == null && (o["content-type"] = { key: "Content-Type", value: "application/octet-stream" }),
        o["content-length"] == null && (o["content-length"] = { key: "Content-Length", value: String(t.length) }))
    const v = {}
    Object.keys(o).forEach((C) => {
        const B = o[C]
        v[B.key] = B.value
    }),
        (l.headers = v)
    const b = (function () {
            let C = null
            return {
                promise: new Promise(function (L, V) {
                    c &&
                        (C = setTimeout(() => {
                            C != null &&
                                ((C = null),
                                V(
                                    Vr.makeError("timeout", q.errors.TIMEOUT, {
                                        requestBody: si(l.body, v["content-type"]),
                                        requestMethod: l.method,
                                        timeout: c,
                                        url: a,
                                    })
                                ))
                        }, c))
                }),
                cancel: function () {
                    C != null && (clearTimeout(C), (C = null))
                },
            }
        })(),
        _ = (function () {
            return OA(this, void 0, void 0, function* () {
                for (let C = 0; C < n; C++) {
                    let B = null
                    try {
                        if (((B = yield kA(a, l)), C < n)) {
                            if (B.statusCode === 301 || B.statusCode === 302) {
                                const L = B.headers.location || ""
                                if (l.method === "GET" && L.match(/^https:/)) {
                                    a = B.headers.location
                                    continue
                                }
                            } else if (B.statusCode === 429) {
                                let L = !0
                                if ((i && (L = yield i(C, a)), L)) {
                                    let V = 0
                                    const H = B.headers["retry-after"]
                                    typeof H == "string" && H.match(/^[1-9][0-9]*$/)
                                        ? (V = parseInt(H) * 1e3)
                                        : (V = s * parseInt(String(Math.random() * Math.pow(2, C)))),
                                        yield Ph(V)
                                    continue
                                }
                            }
                        }
                    } catch (L) {
                        ;(B = L.response),
                            B == null &&
                                (b.cancel(),
                                Vr.throwError("missing response", q.errors.SERVER_ERROR, {
                                    requestBody: si(l.body, v["content-type"]),
                                    requestMethod: l.method,
                                    serverError: L,
                                    url: a,
                                }))
                    }
                    let O = B.body
                    if (
                        (u && B.statusCode === 304
                            ? (O = null)
                            : (B.statusCode < 200 || B.statusCode >= 300) &&
                              (b.cancel(),
                              Vr.throwError("bad response", q.errors.SERVER_ERROR, {
                                  status: B.statusCode,
                                  headers: B.headers,
                                  body: si(O, B.headers ? B.headers["content-type"] : null),
                                  requestBody: si(l.body, v["content-type"]),
                                  requestMethod: l.method,
                                  url: a,
                              })),
                        r)
                    )
                        try {
                            const L = yield r(O, B)
                            return b.cancel(), L
                        } catch (L) {
                            if (L.throttleRetry && C < n) {
                                let V = !0
                                if ((i && (V = yield i(C, a)), V)) {
                                    const H = s * parseInt(String(Math.random() * Math.pow(2, C)))
                                    yield Ph(H)
                                    continue
                                }
                            }
                            b.cancel(),
                                Vr.throwError("processing response error", q.errors.SERVER_ERROR, {
                                    body: si(O, B.headers ? B.headers["content-type"] : null),
                                    error: L,
                                    requestBody: si(l.body, v["content-type"]),
                                    requestMethod: l.method,
                                    url: a,
                                })
                        }
                    return b.cancel(), O
                }
                return Vr.throwError("failed response", q.errors.SERVER_ERROR, {
                    requestBody: si(l.body, v["content-type"]),
                    requestMethod: l.method,
                    url: a,
                })
            })
        })()
    return Promise.race([b.promise, _])
}
function _m(e, t, r) {
    let n = (s, o) => {
            let a = null
            if (s != null)
                try {
                    a = JSON.parse(Xs(s))
                } catch (l) {
                    Vr.throwError("invalid JSON", q.errors.SERVER_ERROR, { body: s, error: l })
                }
            return r && (a = r(a, o)), a
        },
        i = null
    if (t != null) {
        i = Vn(t)
        const s = typeof e == "string" ? { url: e } : Vt(e)
        s.headers
            ? Object.keys(s.headers).filter((a) => a.toLowerCase() === "content-type").length !== 0 ||
              ((s.headers = Vt(s.headers)), (s.headers["content-type"] = "application/json"))
            : (s.headers = { "content-type": "application/json" }),
            (e = s)
    }
    return IA(e, i, n)
}
function So(e, t) {
    return (
        t || (t = {}),
        (t = Vt(t)),
        t.floor == null && (t.floor = 0),
        t.ceiling == null && (t.ceiling = 1e4),
        t.interval == null && (t.interval = 250),
        new Promise(function (r, n) {
            let i = null,
                s = !1
            const o = () => (s ? !1 : ((s = !0), i && clearTimeout(i), !0))
            t.timeout &&
                (i = setTimeout(() => {
                    o() && n(new Error("timeout"))
                }, t.timeout))
            const a = t.retryLimit
            let l = 0
            function u() {
                return e().then(
                    function (c) {
                        if (c !== void 0) o() && r(c)
                        else if (t.oncePoll) t.oncePoll.once("poll", u)
                        else if (t.onceBlock) t.onceBlock.once("block", u)
                        else if (!s) {
                            if ((l++, l > a)) {
                                o() && n(new Error("retry limit reached"))
                                return
                            }
                            let d = t.interval * parseInt(String(Math.random() * Math.pow(2, l)))
                            d < t.floor && (d = t.floor), d > t.ceiling && (d = t.ceiling), setTimeout(u, d)
                        }
                        return null
                    },
                    function (c) {
                        o() && n(c)
                    }
                )
            }
            u()
        })
    )
}
var fl = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
    xf = {}
for (var xa = 0; xa < fl.length; xa++) {
    var $u = fl.charAt(xa)
    if (xf[$u] !== void 0) throw new TypeError($u + " is ambiguous")
    xf[$u] = xa
}
function ks(e) {
    var t = e >> 25
    return (
        ((e & 33554431) << 5) ^
        (-((t >> 0) & 1) & 996825010) ^
        (-((t >> 1) & 1) & 642813549) ^
        (-((t >> 2) & 1) & 513874426) ^
        (-((t >> 3) & 1) & 1027748829) ^
        (-((t >> 4) & 1) & 705979059)
    )
}
function wm(e) {
    for (var t = 1, r = 0; r < e.length; ++r) {
        var n = e.charCodeAt(r)
        if (n < 33 || n > 126) return "Invalid prefix (" + e + ")"
        t = ks(t) ^ (n >> 5)
    }
    for (t = ks(t), r = 0; r < e.length; ++r) {
        var i = e.charCodeAt(r)
        t = ks(t) ^ (i & 31)
    }
    return t
}
function PA(e, t, r) {
    if (((r = r || 90), e.length + 7 + t.length > r)) throw new TypeError("Exceeds length limit")
    e = e.toLowerCase()
    var n = wm(e)
    if (typeof n == "string") throw new Error(n)
    for (var i = e + "1", s = 0; s < t.length; ++s) {
        var o = t[s]
        if (o >> 5 !== 0) throw new Error("Non 5-bit word")
        ;(n = ks(n) ^ o), (i += fl.charAt(o))
    }
    for (s = 0; s < 6; ++s) n = ks(n)
    for (n ^= 1, s = 0; s < 6; ++s) {
        var a = (n >> ((5 - s) * 5)) & 31
        i += fl.charAt(a)
    }
    return i
}
function Em(e, t) {
    if (((t = t || 90), e.length < 8)) return e + " too short"
    if (e.length > t) return "Exceeds length limit"
    var r = e.toLowerCase(),
        n = e.toUpperCase()
    if (e !== r && e !== n) return "Mixed-case string " + e
    e = r
    var i = e.lastIndexOf("1")
    if (i === -1) return "No separator character for " + e
    if (i === 0) return "Missing prefix for " + e
    var s = e.slice(0, i),
        o = e.slice(i + 1)
    if (o.length < 6) return "Data too short"
    var a = wm(s)
    if (typeof a == "string") return a
    for (var l = [], u = 0; u < o.length; ++u) {
        var c = o.charAt(u),
            d = xf[c]
        if (d === void 0) return "Unknown character " + c
        ;(a = ks(a) ^ d), !(u + 6 >= o.length) && l.push(d)
    }
    return a !== 1 ? "Invalid checksum for " + e : { prefix: s, words: l }
}
function MA() {
    var e = Em.apply(null, arguments)
    if (typeof e == "object") return e
}
function RA(e) {
    var t = Em.apply(null, arguments)
    if (typeof t == "object") return t
    throw new Error(t)
}
function Pl(e, t, r, n) {
    for (var i = 0, s = 0, o = (1 << r) - 1, a = [], l = 0; l < e.length; ++l)
        for (i = (i << t) | e[l], s += t; s >= r; ) (s -= r), a.push((i >> s) & o)
    if (n) s > 0 && a.push((i << (r - s)) & o)
    else {
        if (s >= t) return "Excess padding"
        if ((i << (r - s)) & o) return "Non-zero padding"
    }
    return a
}
function LA(e) {
    var t = Pl(e, 8, 5, !0)
    if (Array.isArray(t)) return t
}
function DA(e) {
    var t = Pl(e, 8, 5, !0)
    if (Array.isArray(t)) return t
    throw new Error(t)
}
function FA(e) {
    var t = Pl(e, 5, 8, !1)
    if (Array.isArray(t)) return t
}
function VA(e) {
    var t = Pl(e, 5, 8, !1)
    if (Array.isArray(t)) return t
    throw new Error(t)
}
var Mh = { decodeUnsafe: MA, decode: RA, encode: PA, toWordsUnsafe: LA, toWords: DA, fromWordsUnsafe: FA, fromWords: VA }
const la = "providers/5.5.3",
    cs = new q(la)
class _e {
    constructor() {
        cs.checkNew(new.target, _e), (this.formats = this.getDefaultFormats())
    }
    getDefaultFormats() {
        const t = {},
            r = this.address.bind(this),
            n = this.bigNumber.bind(this),
            i = this.blockTag.bind(this),
            s = this.data.bind(this),
            o = this.hash.bind(this),
            a = this.hex.bind(this),
            l = this.number.bind(this),
            u = this.type.bind(this),
            c = (d) => this.data(d, !0)
        return (
            (t.transaction = {
                hash: o,
                type: u,
                accessList: _e.allowNull(this.accessList.bind(this), null),
                blockHash: _e.allowNull(o, null),
                blockNumber: _e.allowNull(l, null),
                transactionIndex: _e.allowNull(l, null),
                confirmations: _e.allowNull(l, null),
                from: r,
                gasPrice: _e.allowNull(n),
                maxPriorityFeePerGas: _e.allowNull(n),
                maxFeePerGas: _e.allowNull(n),
                gasLimit: n,
                to: _e.allowNull(r, null),
                value: n,
                nonce: l,
                data: s,
                r: _e.allowNull(this.uint256),
                s: _e.allowNull(this.uint256),
                v: _e.allowNull(l),
                creates: _e.allowNull(r, null),
                raw: _e.allowNull(s),
            }),
            (t.transactionRequest = {
                from: _e.allowNull(r),
                nonce: _e.allowNull(l),
                gasLimit: _e.allowNull(n),
                gasPrice: _e.allowNull(n),
                maxPriorityFeePerGas: _e.allowNull(n),
                maxFeePerGas: _e.allowNull(n),
                to: _e.allowNull(r),
                value: _e.allowNull(n),
                data: _e.allowNull(c),
                type: _e.allowNull(l),
                accessList: _e.allowNull(this.accessList.bind(this), null),
            }),
            (t.receiptLog = {
                transactionIndex: l,
                blockNumber: l,
                transactionHash: o,
                address: r,
                topics: _e.arrayOf(o),
                data: s,
                logIndex: l,
                blockHash: o,
            }),
            (t.receipt = {
                to: _e.allowNull(this.address, null),
                from: _e.allowNull(this.address, null),
                contractAddress: _e.allowNull(r, null),
                transactionIndex: l,
                root: _e.allowNull(a),
                gasUsed: n,
                logsBloom: _e.allowNull(s),
                blockHash: o,
                transactionHash: o,
                logs: _e.arrayOf(this.receiptLog.bind(this)),
                blockNumber: l,
                confirmations: _e.allowNull(l, null),
                cumulativeGasUsed: n,
                effectiveGasPrice: _e.allowNull(n),
                status: _e.allowNull(l),
                type: u,
            }),
            (t.block = {
                hash: o,
                parentHash: o,
                number: l,
                timestamp: l,
                nonce: _e.allowNull(a),
                difficulty: this.difficulty.bind(this),
                gasLimit: n,
                gasUsed: n,
                miner: r,
                extraData: s,
                transactions: _e.allowNull(_e.arrayOf(o)),
                baseFeePerGas: _e.allowNull(n),
            }),
            (t.blockWithTransactions = Vt(t.block)),
            (t.blockWithTransactions.transactions = _e.allowNull(_e.arrayOf(this.transactionResponse.bind(this)))),
            (t.filter = {
                fromBlock: _e.allowNull(i, void 0),
                toBlock: _e.allowNull(i, void 0),
                blockHash: _e.allowNull(o, void 0),
                address: _e.allowNull(r, void 0),
                topics: _e.allowNull(this.topics.bind(this), void 0),
            }),
            (t.filterLog = {
                blockNumber: _e.allowNull(l),
                blockHash: _e.allowNull(o),
                transactionIndex: l,
                removed: _e.allowNull(this.boolean.bind(this)),
                address: r,
                data: _e.allowFalsish(s, "0x"),
                topics: _e.arrayOf(o),
                transactionHash: o,
                logIndex: l,
            }),
            t
        )
    }
    accessList(t) {
        return no(t || [])
    }
    number(t) {
        return t === "0x" ? 0 : pe.from(t).toNumber()
    }
    type(t) {
        return t === "0x" || t == null ? 0 : pe.from(t).toNumber()
    }
    bigNumber(t) {
        return pe.from(t)
    }
    boolean(t) {
        if (typeof t == "boolean") return t
        if (typeof t == "string") {
            if (((t = t.toLowerCase()), t === "true")) return !0
            if (t === "false") return !1
        }
        throw new Error("invalid boolean - " + t)
    }
    hex(t, r) {
        return typeof t == "string" && (!r && t.substring(0, 2) !== "0x" && (t = "0x" + t), Xe(t))
            ? t.toLowerCase()
            : cs.throwArgumentError("invalid hash", "value", t)
    }
    data(t, r) {
        const n = this.hex(t, r)
        if (n.length % 2 !== 0) throw new Error("invalid data; odd-length - " + t)
        return n
    }
    address(t) {
        return Zt(t)
    }
    callAddress(t) {
        if (!Xe(t, 32)) return null
        const r = Zt(Pn(t, 12))
        return r === kw ? null : r
    }
    contractAddress(t) {
        return Bc(t)
    }
    blockTag(t) {
        if (t == null) return "latest"
        if (t === "earliest") return "0x0"
        if (t === "latest" || t === "pending") return t
        if (typeof t == "number" || Xe(t)) return xc(t)
        throw new Error("invalid blockTag")
    }
    hash(t, r) {
        const n = this.hex(t, r)
        return ia(n) !== 32 ? cs.throwArgumentError("invalid hash", "value", t) : n
    }
    difficulty(t) {
        if (t == null) return null
        const r = pe.from(t)
        try {
            return r.toNumber()
        } catch {}
        return null
    }
    uint256(t) {
        if (!Xe(t)) throw new Error("invalid uint256")
        return It(t, 32)
    }
    _block(t, r) {
        t.author != null && t.miner == null && (t.miner = t.author)
        const n = t._difficulty != null ? t._difficulty : t.difficulty,
            i = _e.check(r, t)
        return (i._difficulty = n == null ? null : pe.from(n)), i
    }
    block(t) {
        return this._block(t, this.formats.block)
    }
    blockWithTransactions(t) {
        return this._block(t, this.formats.blockWithTransactions)
    }
    transactionRequest(t) {
        return _e.check(this.formats.transactionRequest, t)
    }
    transactionResponse(t) {
        t.gas != null && t.gasLimit == null && (t.gasLimit = t.gas),
            t.to && pe.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"),
            t.input != null && t.data == null && (t.data = t.input),
            t.to == null && t.creates == null && (t.creates = this.contractAddress(t)),
            (t.type === 1 || t.type === 2) && t.accessList == null && (t.accessList = [])
        const r = _e.check(this.formats.transaction, t)
        if (t.chainId != null) {
            let n = t.chainId
            Xe(n) && (n = pe.from(n).toNumber()), (r.chainId = n)
        } else {
            let n = t.networkId
            n == null && r.v == null && (n = t.chainId),
                Xe(n) && (n = pe.from(n).toNumber()),
                typeof n != "number" && r.v != null && ((n = (r.v - 35) / 2), n < 0 && (n = 0), (n = parseInt(n))),
                typeof n != "number" && (n = 0),
                (r.chainId = n)
        }
        return r.blockHash && r.blockHash.replace(/0/g, "") === "x" && (r.blockHash = null), r
    }
    transaction(t) {
        return gA(t)
    }
    receiptLog(t) {
        return _e.check(this.formats.receiptLog, t)
    }
    receipt(t) {
        const r = _e.check(this.formats.receipt, t)
        if (r.root != null)
            if (r.root.length <= 4) {
                const n = pe.from(r.root).toNumber()
                n === 0 || n === 1
                    ? (r.status != null &&
                          r.status !== n &&
                          cs.throwArgumentError("alt-root-status/status mismatch", "value", { root: r.root, status: r.status }),
                      (r.status = n),
                      delete r.root)
                    : cs.throwArgumentError("invalid alt-root-status", "value.root", r.root)
            } else r.root.length !== 66 && cs.throwArgumentError("invalid root hash", "value.root", r.root)
        return r.status != null && (r.byzantium = !0), r
    }
    topics(t) {
        return Array.isArray(t) ? t.map((r) => this.topics(r)) : t != null ? this.hash(t, !0) : null
    }
    filter(t) {
        return _e.check(this.formats.filter, t)
    }
    filterLog(t) {
        return _e.check(this.formats.filterLog, t)
    }
    static check(t, r) {
        const n = {}
        for (const i in t)
            try {
                const s = t[i](r[i])
                s !== void 0 && (n[i] = s)
            } catch (s) {
                throw ((s.checkKey = i), (s.checkValue = r[i]), s)
            }
        return n
    }
    static allowNull(t, r) {
        return function (n) {
            return n == null ? r : t(n)
        }
    }
    static allowFalsish(t, r) {
        return function (n) {
            return n ? t(n) : r
        }
    }
    static arrayOf(t) {
        return function (r) {
            if (!Array.isArray(r)) throw new Error("not an array")
            const n = []
            return (
                r.forEach(function (i) {
                    n.push(t(i))
                }),
                n
            )
        }
    }
}
var Le =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const Qe = new q(la)
function Rh(e) {
    return e == null ? "null" : (ia(e) !== 32 && Qe.throwArgumentError("invalid topic", "topic", e), e.toLowerCase())
}
function Lh(e) {
    for (e = e.slice(); e.length > 0 && e[e.length - 1] == null; ) e.pop()
    return e
        .map((t) => {
            if (Array.isArray(t)) {
                const r = {}
                t.forEach((i) => {
                    r[Rh(i)] = !0
                })
                const n = Object.keys(r)
                return n.sort(), n.join("|")
            } else return Rh(t)
        })
        .join("&")
}
function qA(e) {
    return e === ""
        ? []
        : e.split(/&/g).map((t) => {
              if (t === "") return []
              const r = t.split("|").map((n) => (n === "null" ? null : n))
              return r.length === 1 ? r[0] : r
          })
}
function ds(e) {
    if (typeof e == "string") {
        if (((e = e.toLowerCase()), ia(e) === 32)) return "tx:" + e
        if (e.indexOf(":") === -1) return e
    } else {
        if (Array.isArray(e)) return "filter:*:" + Lh(e)
        if (yE.isForkEvent(e)) throw (Qe.warn("not implemented"), new Error("not implemented"))
        if (e && typeof e == "object") return "filter:" + (e.address || "*") + ":" + Lh(e.topics || [])
    }
    throw new Error("invalid event - " + e)
}
function go() {
    return new Date().getTime()
}
function Dh(e) {
    return new Promise((t) => {
        setTimeout(t, e)
    })
}
const HA = ["block", "network", "pending", "poll"]
class UA {
    constructor(t, r, n) {
        ne(this, "tag", t), ne(this, "listener", r), ne(this, "once", n)
    }
    get event() {
        switch (this.type) {
            case "tx":
                return this.hash
            case "filter":
                return this.filter
        }
        return this.tag
    }
    get type() {
        return this.tag.split(":")[0]
    }
    get hash() {
        const t = this.tag.split(":")
        return t[0] !== "tx" ? null : t[1]
    }
    get filter() {
        const t = this.tag.split(":")
        if (t[0] !== "filter") return null
        const r = t[1],
            n = qA(t[2]),
            i = {}
        return n.length > 0 && (i.topics = n), r && r !== "*" && (i.address = r), i
    }
    pollable() {
        return this.tag.indexOf(":") >= 0 || HA.indexOf(this.tag) >= 0
    }
}
const zA = {
    0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
    2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
    3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
    60: { symbol: "eth", ilk: "eth" },
    61: { symbol: "etc", ilk: "eth" },
    700: { symbol: "xdai", ilk: "eth" },
}
function Nu(e) {
    return It(pe.from(e).toHexString(), 32)
}
function Fh(e) {
    return ym.encode(wr([e, Pn(Nh(Nh(e)), 0, 4)]))
}
const Am = new RegExp("^(ipfs)://(.*)$", "i"),
    Vh = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), Am, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")]
function jA(e) {
    try {
        return Xs(Sm(e))
    } catch {}
    return null
}
function Sm(e) {
    if (e === "0x") return null
    const t = pe.from(Pn(e, 0, 32)).toNumber(),
        r = pe.from(Pn(e, t, t + 32)).toNumber()
    return Pn(e, t + 32, t + 32 + r)
}
function Bu(e) {
    return (
        e.match(/^ipfs:\/\/ipfs\//i)
            ? (e = e.substring(12))
            : e.match(/^ipfs:\/\//i)
            ? (e = e.substring(7))
            : Qe.throwArgumentError("unsupported IPFS format", "link", e),
        `https://gateway.ipfs.io/ipfs/${e}`
    )
}
class qh {
    constructor(t, r, n, i) {
        ne(this, "provider", t), ne(this, "name", n), ne(this, "address", t.formatter.address(r)), ne(this, "_resolvedAddress", i)
    }
    _fetchBytes(t, r) {
        return Le(this, void 0, void 0, function* () {
            const n = { to: this.address, data: Hr([t, nl(this.name), r || "0x"]) }
            try {
                return Sm(yield this.provider.call(n))
            } catch (i) {
                return i.code === q.errors.CALL_EXCEPTION, null
            }
        })
    }
    _getAddress(t, r) {
        const n = zA[String(t)]
        if (
            (n == null && Qe.throwError(`unsupported coin type: ${t}`, q.errors.UNSUPPORTED_OPERATION, { operation: `getAddress(${t})` }),
            n.ilk === "eth")
        )
            return this.provider.formatter.address(r)
        const i = Ne(r)
        if (n.p2pkh != null) {
            const s = r.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/)
            if (s) {
                const o = parseInt(s[1], 16)
                if (s[2].length === o * 2 && o >= 1 && o <= 75) return Fh(wr([[n.p2pkh], "0x" + s[2]]))
            }
        }
        if (n.p2sh != null) {
            const s = r.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/)
            if (s) {
                const o = parseInt(s[1], 16)
                if (s[2].length === o * 2 && o >= 1 && o <= 75) return Fh(wr([[n.p2sh], "0x" + s[2]]))
            }
        }
        if (n.prefix != null) {
            const s = i[1]
            let o = i[0]
            if ((o === 0 ? s !== 20 && s !== 32 && (o = -1) : (o = -1), o >= 0 && i.length === 2 + s && s >= 1 && s <= 75)) {
                const a = Mh.toWords(i.slice(2))
                return a.unshift(o), Mh.encode(n.prefix, a)
            }
        }
        return null
    }
    getAddress(t) {
        return Le(this, void 0, void 0, function* () {
            if ((t == null && (t = 60), t === 60))
                try {
                    const i = { to: this.address, data: "0x3b3b57de" + nl(this.name).substring(2) },
                        s = yield this.provider.call(i)
                    return s === "0x" || s === Mw ? null : this.provider.formatter.callAddress(s)
                } catch (i) {
                    if (i.code === q.errors.CALL_EXCEPTION) return null
                    throw i
                }
            const r = yield this._fetchBytes("0xf1cb7e06", Nu(t))
            if (r == null || r === "0x") return null
            const n = this._getAddress(t, r)
            return (
                n == null &&
                    Qe.throwError("invalid or unsupported coin data", q.errors.UNSUPPORTED_OPERATION, {
                        operation: `getAddress(${t})`,
                        coinType: t,
                        data: r,
                    }),
                n
            )
        })
    }
    getAvatar() {
        return Le(this, void 0, void 0, function* () {
            const t = [{ type: "name", content: this.name }]
            try {
                const r = yield this.getText("avatar")
                if (r == null) return null
                for (let n = 0; n < Vh.length; n++) {
                    const i = r.match(Vh[n])
                    if (i == null) continue
                    const s = i[1].toLowerCase()
                    switch (s) {
                        case "https":
                            return t.push({ type: "url", content: r }), { linkage: t, url: r }
                        case "data":
                            return t.push({ type: "data", content: r }), { linkage: t, url: r }
                        case "ipfs":
                            return t.push({ type: "ipfs", content: r }), { linkage: t, url: Bu(r) }
                        case "erc721":
                        case "erc1155": {
                            const o = s === "erc721" ? "0xc87b56dd" : "0x0e89341c"
                            t.push({ type: s, content: r })
                            const a = this._resolvedAddress || (yield this.getAddress()),
                                l = (i[2] || "").split("/")
                            if (l.length !== 2) return null
                            const u = yield this.provider.formatter.address(l[0]),
                                c = It(pe.from(l[1]).toHexString(), 32)
                            if (s === "erc721") {
                                const _ = this.provider.formatter.callAddress(yield this.provider.call({ to: u, data: Hr(["0x6352211e", c]) }))
                                if (a !== _) return null
                                t.push({ type: "owner", content: _ })
                            } else if (s === "erc1155") {
                                const _ = pe.from(yield this.provider.call({ to: u, data: Hr(["0x00fdd58e", It(a, 32), c]) }))
                                if (_.isZero()) return null
                                t.push({ type: "balance", content: _.toString() })
                            }
                            const d = { to: this.provider.formatter.address(l[0]), data: Hr([o, c]) }
                            let h = jA(yield this.provider.call(d))
                            if (h == null) return null
                            t.push({ type: "metadata-url-base", content: h }),
                                s === "erc1155" &&
                                    ((h = h.replace("{id}", c.substring(2))), t.push({ type: "metadata-url-expanded", content: h })),
                                h.match(/^ipfs:/i) && (h = Bu(h)),
                                t.push({ type: "metadata-url", content: h })
                            const v = yield _m(h)
                            if (!v) return null
                            t.push({ type: "metadata", content: JSON.stringify(v) })
                            let b = v.image
                            if (typeof b != "string") return null
                            if (!b.match(/^(https:\/\/|data:)/i)) {
                                if (b.match(Am) == null) return null
                                t.push({ type: "url-ipfs", content: b }), (b = Bu(b))
                            }
                            return t.push({ type: "url", content: b }), { linkage: t, url: b }
                        }
                    }
                }
            } catch {}
            return null
        })
    }
    getContentHash() {
        return Le(this, void 0, void 0, function* () {
            const t = yield this._fetchBytes("0xbc1c58d1")
            if (t == null || t === "0x") return null
            const r = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/)
            if (r) {
                const i = parseInt(r[3], 16)
                if (r[4].length === i * 2) return "ipfs://" + ym.encode("0x" + r[1])
            }
            const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/)
            return n && n[1].length === 32 * 2
                ? "bzz://" + n[1]
                : Qe.throwError("invalid or unsupported content hash data", q.errors.UNSUPPORTED_OPERATION, {
                      operation: "getContentHash()",
                      data: t,
                  })
        })
    }
    getText(t) {
        return Le(this, void 0, void 0, function* () {
            let r = Vn(t)
            ;(r = wr([Nu(64), Nu(r.length), r])), r.length % 32 !== 0 && (r = wr([r, It("0x", 32 - (t.length % 32))]))
            const n = yield this._fetchBytes("0x59d1d43c", Se(r))
            return n == null || n === "0x" ? null : Xs(n)
        })
    }
}
let ku = null,
    WA = 1
class KA extends Xo {
    constructor(t) {
        Qe.checkNew(new.target, Xo)
        super()
        if (
            ((this._events = []),
            (this._emitted = { block: -2 }),
            (this.formatter = new.target.getFormatter()),
            ne(this, "anyNetwork", t === "any"),
            this.anyNetwork && (t = this.detectNetwork()),
            t instanceof Promise)
        )
            (this._networkPromise = t), t.catch((r) => {}), this._ready().catch((r) => {})
        else {
            const r = Er(new.target, "getNetwork")(t)
            r ? (ne(this, "_network", r), this.emit("network", r, null)) : Qe.throwArgumentError("invalid network", "network", t)
        }
        ;(this._maxInternalBlockNumber = -1024), (this._lastBlockNumber = -2), (this._pollingInterval = 4e3), (this._fastQueryDate = 0)
    }
    _ready() {
        return Le(this, void 0, void 0, function* () {
            if (this._network == null) {
                let t = null
                if (this._networkPromise)
                    try {
                        t = yield this._networkPromise
                    } catch {}
                t == null && (t = yield this.detectNetwork()),
                    t || Qe.throwError("no network detected", q.errors.UNKNOWN_ERROR, {}),
                    this._network == null && (this.anyNetwork ? (this._network = t) : ne(this, "_network", t), this.emit("network", t, null))
            }
            return this._network
        })
    }
    get ready() {
        return So(() =>
            this._ready().then(
                (t) => t,
                (t) => {
                    if (!(t.code === q.errors.NETWORK_ERROR && t.event === "noNetwork")) throw t
                }
            )
        )
    }
    static getFormatter() {
        return ku == null && (ku = new _e()), ku
    }
    static getNetwork(t) {
        return xA(t == null ? "homestead" : t)
    }
    _getInternalBlockNumber(t) {
        return Le(this, void 0, void 0, function* () {
            if ((yield this._ready(), t > 0))
                for (; this._internalBlockNumber; ) {
                    const i = this._internalBlockNumber
                    try {
                        const s = yield i
                        if (go() - s.respTime <= t) return s.blockNumber
                        break
                    } catch {
                        if (this._internalBlockNumber === i) break
                    }
                }
            const r = go(),
                n = Mt({
                    blockNumber: this.perform("getBlockNumber", {}),
                    networkError: this.getNetwork().then(
                        (i) => null,
                        (i) => i
                    ),
                }).then(({ blockNumber: i, networkError: s }) => {
                    if (s) throw (this._internalBlockNumber === n && (this._internalBlockNumber = null), s)
                    const o = go()
                    return (
                        (i = pe.from(i).toNumber()),
                        i < this._maxInternalBlockNumber && (i = this._maxInternalBlockNumber),
                        (this._maxInternalBlockNumber = i),
                        this._setFastBlockNumber(i),
                        { blockNumber: i, reqTime: r, respTime: o }
                    )
                })
            return (
                (this._internalBlockNumber = n),
                n.catch((i) => {
                    this._internalBlockNumber === n && (this._internalBlockNumber = null)
                }),
                (yield n).blockNumber
            )
        })
    }
    poll() {
        return Le(this, void 0, void 0, function* () {
            const t = WA++,
                r = []
            let n = null
            try {
                n = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
            } catch (i) {
                this.emit("error", i)
                return
            }
            if ((this._setFastBlockNumber(n), this.emit("poll", t, n), n === this._lastBlockNumber)) {
                this.emit("didPoll", t)
                return
            }
            if ((this._emitted.block === -2 && (this._emitted.block = n - 1), Math.abs(this._emitted.block - n) > 1e3))
                Qe.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${n})`),
                    this.emit(
                        "error",
                        Qe.makeError("network block skew detected", q.errors.NETWORK_ERROR, {
                            blockNumber: n,
                            event: "blockSkew",
                            previousBlockNumber: this._emitted.block,
                        })
                    ),
                    this.emit("block", n)
            else for (let i = this._emitted.block + 1; i <= n; i++) this.emit("block", i)
            this._emitted.block !== n &&
                ((this._emitted.block = n),
                Object.keys(this._emitted).forEach((i) => {
                    if (i === "block") return
                    const s = this._emitted[i]
                    s !== "pending" && n - s > 12 && delete this._emitted[i]
                })),
                this._lastBlockNumber === -2 && (this._lastBlockNumber = n - 1),
                this._events.forEach((i) => {
                    switch (i.type) {
                        case "tx": {
                            const s = i.hash
                            let o = this.getTransactionReceipt(s)
                                .then((a) => (!a || a.blockNumber == null || ((this._emitted["t:" + s] = a.blockNumber), this.emit(s, a)), null))
                                .catch((a) => {
                                    this.emit("error", a)
                                })
                            r.push(o)
                            break
                        }
                        case "filter": {
                            const s = i.filter
                            ;(s.fromBlock = this._lastBlockNumber + 1), (s.toBlock = n)
                            const o = this.getLogs(s)
                                .then((a) => {
                                    a.length !== 0 &&
                                        a.forEach((l) => {
                                            ;(this._emitted["b:" + l.blockHash] = l.blockNumber),
                                                (this._emitted["t:" + l.transactionHash] = l.blockNumber),
                                                this.emit(s, l)
                                        })
                                })
                                .catch((a) => {
                                    this.emit("error", a)
                                })
                            r.push(o)
                            break
                        }
                    }
                }),
                (this._lastBlockNumber = n),
                Promise.all(r)
                    .then(() => {
                        this.emit("didPoll", t)
                    })
                    .catch((i) => {
                        this.emit("error", i)
                    })
        })
    }
    resetEventsBlock(t) {
        ;(this._lastBlockNumber = t - 1), this.polling && this.poll()
    }
    get network() {
        return this._network
    }
    detectNetwork() {
        return Le(this, void 0, void 0, function* () {
            return Qe.throwError("provider does not support network detection", q.errors.UNSUPPORTED_OPERATION, {
                operation: "provider.detectNetwork",
            })
        })
    }
    getNetwork() {
        return Le(this, void 0, void 0, function* () {
            const t = yield this._ready(),
                r = yield this.detectNetwork()
            if (t.chainId !== r.chainId) {
                if (this.anyNetwork)
                    return (
                        (this._network = r),
                        (this._lastBlockNumber = -2),
                        (this._fastBlockNumber = null),
                        (this._fastBlockNumberPromise = null),
                        (this._fastQueryDate = 0),
                        (this._emitted.block = -2),
                        (this._maxInternalBlockNumber = -1024),
                        (this._internalBlockNumber = null),
                        this.emit("network", r, t),
                        yield Dh(0),
                        this._network
                    )
                const n = Qe.makeError("underlying network changed", q.errors.NETWORK_ERROR, {
                    event: "changed",
                    network: t,
                    detectedNetwork: r,
                })
                throw (this.emit("error", n), n)
            }
            return t
        })
    }
    get blockNumber() {
        return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
                (t) => {
                    this._setFastBlockNumber(t)
                },
                (t) => {}
            ),
            this._fastBlockNumber != null ? this._fastBlockNumber : -1
        )
    }
    get polling() {
        return this._poller != null
    }
    set polling(t) {
        t && !this._poller
            ? ((this._poller = setInterval(() => {
                  this.poll()
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                  (this._bootstrapPoll = setTimeout(() => {
                      this.poll(),
                          (this._bootstrapPoll = setTimeout(() => {
                              this._poller || this.poll(), (this._bootstrapPoll = null)
                          }, this.pollingInterval))
                  }, 0)))
            : !t && this._poller && (clearInterval(this._poller), (this._poller = null))
    }
    get pollingInterval() {
        return this._pollingInterval
    }
    set pollingInterval(t) {
        if (typeof t != "number" || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval")
        ;(this._pollingInterval = t),
            this._poller &&
                (clearInterval(this._poller),
                (this._poller = setInterval(() => {
                    this.poll()
                }, this._pollingInterval)))
    }
    _getFastBlockNumber() {
        const t = go()
        return (
            t - this._fastQueryDate > 2 * this._pollingInterval &&
                ((this._fastQueryDate = t),
                (this._fastBlockNumberPromise = this.getBlockNumber().then(
                    (r) => ((this._fastBlockNumber == null || r > this._fastBlockNumber) && (this._fastBlockNumber = r), this._fastBlockNumber)
                ))),
            this._fastBlockNumberPromise
        )
    }
    _setFastBlockNumber(t) {
        ;(this._fastBlockNumber != null && t < this._fastBlockNumber) ||
            ((this._fastQueryDate = go()),
            (this._fastBlockNumber == null || t > this._fastBlockNumber) &&
                ((this._fastBlockNumber = t), (this._fastBlockNumberPromise = Promise.resolve(t))))
    }
    waitForTransaction(t, r, n) {
        return Le(this, void 0, void 0, function* () {
            return this._waitForTransaction(t, r == null ? 1 : r, n || 0, null)
        })
    }
    _waitForTransaction(t, r, n, i) {
        return Le(this, void 0, void 0, function* () {
            const s = yield this.getTransactionReceipt(t)
            return (s ? s.confirmations : 0) >= r
                ? s
                : new Promise((o, a) => {
                      const l = []
                      let u = !1
                      const c = function () {
                              return u
                                  ? !0
                                  : ((u = !0),
                                    l.forEach((h) => {
                                        h()
                                    }),
                                    !1)
                          },
                          d = (h) => {
                              h.confirmations < r || c() || o(h)
                          }
                      if (
                          (this.on(t, d),
                          l.push(() => {
                              this.removeListener(t, d)
                          }),
                          i)
                      ) {
                          let h = i.startBlock,
                              v = null
                          const b = (_) =>
                              Le(this, void 0, void 0, function* () {
                                  u ||
                                      (yield Dh(1e3),
                                      this.getTransactionCount(i.from).then(
                                          (C) =>
                                              Le(this, void 0, void 0, function* () {
                                                  if (!u) {
                                                      if (C <= i.nonce) h = _
                                                      else {
                                                          {
                                                              const B = yield this.getTransaction(t)
                                                              if (B && B.blockNumber != null) return
                                                          }
                                                          for (v == null && ((v = h - 3), v < i.startBlock && (v = i.startBlock)); v <= _; ) {
                                                              if (u) return
                                                              const B = yield this.getBlockWithTransactions(v)
                                                              for (let O = 0; O < B.transactions.length; O++) {
                                                                  const L = B.transactions[O]
                                                                  if (L.hash === t) return
                                                                  if (L.from === i.from && L.nonce === i.nonce) {
                                                                      if (u) return
                                                                      const V = yield this.waitForTransaction(L.hash, r)
                                                                      if (c()) return
                                                                      let H = "replaced"
                                                                      L.data === i.data && L.to === i.to && L.value.eq(i.value)
                                                                          ? (H = "repriced")
                                                                          : L.data === "0x" &&
                                                                            L.from === L.to &&
                                                                            L.value.isZero() &&
                                                                            (H = "cancelled"),
                                                                          a(
                                                                              Qe.makeError(
                                                                                  "transaction was replaced",
                                                                                  q.errors.TRANSACTION_REPLACED,
                                                                                  {
                                                                                      cancelled: H === "replaced" || H === "cancelled",
                                                                                      reason: H,
                                                                                      replacement: this._wrapTransaction(L),
                                                                                      hash: t,
                                                                                      receipt: V,
                                                                                  }
                                                                              )
                                                                          )
                                                                      return
                                                                  }
                                                              }
                                                              v++
                                                          }
                                                      }
                                                      u || this.once("block", b)
                                                  }
                                              }),
                                          (C) => {
                                              u || this.once("block", b)
                                          }
                                      ))
                              })
                          if (u) return
                          this.once("block", b),
                              l.push(() => {
                                  this.removeListener("block", b)
                              })
                      }
                      if (typeof n == "number" && n > 0) {
                          const h = setTimeout(() => {
                              c() || a(Qe.makeError("timeout exceeded", q.errors.TIMEOUT, { timeout: n }))
                          }, n)
                          h.unref && h.unref(),
                              l.push(() => {
                                  clearTimeout(h)
                              })
                      }
                  })
        })
    }
    getBlockNumber() {
        return Le(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0)
        })
    }
    getGasPrice() {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const t = yield this.perform("getGasPrice", {})
            try {
                return pe.from(t)
            } catch (r) {
                return Qe.throwError("bad result from backend", q.errors.SERVER_ERROR, { method: "getGasPrice", result: t, error: r })
            }
        })
    }
    getBalance(t, r) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const n = yield Mt({ address: this._getAddress(t), blockTag: this._getBlockTag(r) }),
                i = yield this.perform("getBalance", n)
            try {
                return pe.from(i)
            } catch (s) {
                return Qe.throwError("bad result from backend", q.errors.SERVER_ERROR, { method: "getBalance", params: n, result: i, error: s })
            }
        })
    }
    getTransactionCount(t, r) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const n = yield Mt({ address: this._getAddress(t), blockTag: this._getBlockTag(r) }),
                i = yield this.perform("getTransactionCount", n)
            try {
                return pe.from(i).toNumber()
            } catch (s) {
                return Qe.throwError("bad result from backend", q.errors.SERVER_ERROR, {
                    method: "getTransactionCount",
                    params: n,
                    result: i,
                    error: s,
                })
            }
        })
    }
    getCode(t, r) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const n = yield Mt({ address: this._getAddress(t), blockTag: this._getBlockTag(r) }),
                i = yield this.perform("getCode", n)
            try {
                return Se(i)
            } catch (s) {
                return Qe.throwError("bad result from backend", q.errors.SERVER_ERROR, { method: "getCode", params: n, result: i, error: s })
            }
        })
    }
    getStorageAt(t, r, n) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const i = yield Mt({
                    address: this._getAddress(t),
                    blockTag: this._getBlockTag(n),
                    position: Promise.resolve(r).then((o) => xc(o)),
                }),
                s = yield this.perform("getStorageAt", i)
            try {
                return Se(s)
            } catch (o) {
                return Qe.throwError("bad result from backend", q.errors.SERVER_ERROR, {
                    method: "getStorageAt",
                    params: i,
                    result: s,
                    error: o,
                })
            }
        })
    }
    _wrapTransaction(t, r, n) {
        if (r != null && ia(r) !== 32) throw new Error("invalid response - sendTransaction")
        const i = t
        return (
            r != null &&
                t.hash !== r &&
                Qe.throwError("Transaction hash mismatch from Provider.sendTransaction.", q.errors.UNKNOWN_ERROR, {
                    expectedHash: t.hash,
                    returnedHash: r,
                }),
            (i.wait = (s, o) =>
                Le(this, void 0, void 0, function* () {
                    s == null && (s = 1), o == null && (o = 0)
                    let a
                    s !== 0 && n != null && (a = { data: t.data, from: t.from, nonce: t.nonce, to: t.to, value: t.value, startBlock: n })
                    const l = yield this._waitForTransaction(t.hash, s, o, a)
                    return l == null && s === 0
                        ? null
                        : ((this._emitted["t:" + t.hash] = l.blockNumber),
                          l.status === 0 &&
                              Qe.throwError("transaction failed", q.errors.CALL_EXCEPTION, {
                                  transactionHash: t.hash,
                                  transaction: t,
                                  receipt: l,
                              }),
                          l)
                })),
            i
        )
    }
    sendTransaction(t) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const r = yield Promise.resolve(t).then((s) => Se(s)),
                n = this.formatter.transaction(t)
            n.confirmations == null && (n.confirmations = 0)
            const i = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)
            try {
                const s = yield this.perform("sendTransaction", { signedTransaction: r })
                return this._wrapTransaction(n, s, i)
            } catch (s) {
                throw ((s.transaction = n), (s.transactionHash = n.hash), s)
            }
        })
    }
    _getTransactionRequest(t) {
        return Le(this, void 0, void 0, function* () {
            const r = yield t,
                n = {}
            return (
                ["from", "to"].forEach((i) => {
                    r[i] != null && (n[i] = Promise.resolve(r[i]).then((s) => (s ? this._getAddress(s) : null)))
                }),
                ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((i) => {
                    r[i] != null && (n[i] = Promise.resolve(r[i]).then((s) => (s ? pe.from(s) : null)))
                }),
                ["type"].forEach((i) => {
                    r[i] != null && (n[i] = Promise.resolve(r[i]).then((s) => (s != null ? s : null)))
                }),
                r.accessList && (n.accessList = this.formatter.accessList(r.accessList)),
                ["data"].forEach((i) => {
                    r[i] != null && (n[i] = Promise.resolve(r[i]).then((s) => (s ? Se(s) : null)))
                }),
                this.formatter.transactionRequest(yield Mt(n))
            )
        })
    }
    _getFilter(t) {
        return Le(this, void 0, void 0, function* () {
            t = yield t
            const r = {}
            return (
                t.address != null && (r.address = this._getAddress(t.address)),
                ["blockHash", "topics"].forEach((n) => {
                    t[n] != null && (r[n] = t[n])
                }),
                ["fromBlock", "toBlock"].forEach((n) => {
                    t[n] != null && (r[n] = this._getBlockTag(t[n]))
                }),
                this.formatter.filter(yield Mt(r))
            )
        })
    }
    call(t, r) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const n = yield Mt({ transaction: this._getTransactionRequest(t), blockTag: this._getBlockTag(r) }),
                i = yield this.perform("call", n)
            try {
                return Se(i)
            } catch (s) {
                return Qe.throwError("bad result from backend", q.errors.SERVER_ERROR, { method: "call", params: n, result: i, error: s })
            }
        })
    }
    estimateGas(t) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const r = yield Mt({ transaction: this._getTransactionRequest(t) }),
                n = yield this.perform("estimateGas", r)
            try {
                return pe.from(n)
            } catch (i) {
                return Qe.throwError("bad result from backend", q.errors.SERVER_ERROR, { method: "estimateGas", params: r, result: n, error: i })
            }
        })
    }
    _getAddress(t) {
        return Le(this, void 0, void 0, function* () {
            ;(t = yield t), typeof t != "string" && Qe.throwArgumentError("invalid address or ENS name", "name", t)
            const r = yield this.resolveName(t)
            return (
                r == null &&
                    Qe.throwError("ENS name not configured", q.errors.UNSUPPORTED_OPERATION, { operation: `resolveName(${JSON.stringify(t)})` }),
                r
            )
        })
    }
    _getBlock(t, r) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t)
            let n = -128
            const i = { includeTransactions: !!r }
            if (Xe(t, 32)) i.blockHash = t
            else
                try {
                    ;(i.blockTag = yield this._getBlockTag(t)), Xe(i.blockTag) && (n = parseInt(i.blockTag.substring(2), 16))
                } catch {
                    Qe.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                }
            return So(
                () =>
                    Le(this, void 0, void 0, function* () {
                        const s = yield this.perform("getBlock", i)
                        if (s == null)
                            return (i.blockHash != null && this._emitted["b:" + i.blockHash] == null) ||
                                (i.blockTag != null && n > this._emitted.block)
                                ? null
                                : void 0
                        if (r) {
                            let o = null
                            for (let l = 0; l < s.transactions.length; l++) {
                                const u = s.transactions[l]
                                if (u.blockNumber == null) u.confirmations = 0
                                else if (u.confirmations == null) {
                                    o == null && (o = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval))
                                    let c = o - u.blockNumber + 1
                                    c <= 0 && (c = 1), (u.confirmations = c)
                                }
                            }
                            const a = this.formatter.blockWithTransactions(s)
                            return (a.transactions = a.transactions.map((l) => this._wrapTransaction(l))), a
                        }
                        return this.formatter.block(s)
                    }),
                { oncePoll: this }
            )
        })
    }
    getBlock(t) {
        return this._getBlock(t, !1)
    }
    getBlockWithTransactions(t) {
        return this._getBlock(t, !0)
    }
    getTransaction(t) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t)
            const r = { transactionHash: this.formatter.hash(t, !0) }
            return So(
                () =>
                    Le(this, void 0, void 0, function* () {
                        const n = yield this.perform("getTransaction", r)
                        if (n == null) return this._emitted["t:" + t] == null ? null : void 0
                        const i = this.formatter.transactionResponse(n)
                        if (i.blockNumber == null) i.confirmations = 0
                        else if (i.confirmations == null) {
                            let o = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1
                            o <= 0 && (o = 1), (i.confirmations = o)
                        }
                        return this._wrapTransaction(i)
                    }),
                { oncePoll: this }
            )
        })
    }
    getTransactionReceipt(t) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t)
            const r = { transactionHash: this.formatter.hash(t, !0) }
            return So(
                () =>
                    Le(this, void 0, void 0, function* () {
                        const n = yield this.perform("getTransactionReceipt", r)
                        if (n == null) return this._emitted["t:" + t] == null ? null : void 0
                        if (n.blockHash == null) return
                        const i = this.formatter.receipt(n)
                        if (i.blockNumber == null) i.confirmations = 0
                        else if (i.confirmations == null) {
                            let o = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1
                            o <= 0 && (o = 1), (i.confirmations = o)
                        }
                        return i
                    }),
                { oncePoll: this }
            )
        })
    }
    getLogs(t) {
        return Le(this, void 0, void 0, function* () {
            yield this.getNetwork()
            const r = yield Mt({ filter: this._getFilter(t) }),
                n = yield this.perform("getLogs", r)
            return (
                n.forEach((i) => {
                    i.removed == null && (i.removed = !1)
                }),
                _e.arrayOf(this.formatter.filterLog.bind(this.formatter))(n)
            )
        })
    }
    getEtherPrice() {
        return Le(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform("getEtherPrice", {})
        })
    }
    _getBlockTag(t) {
        return Le(this, void 0, void 0, function* () {
            if (((t = yield t), typeof t == "number" && t < 0)) {
                t % 1 && Qe.throwArgumentError("invalid BlockTag", "blockTag", t)
                let r = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)
                return (r += t), r < 0 && (r = 0), this.formatter.blockTag(r)
            }
            return this.formatter.blockTag(t)
        })
    }
    getResolver(t) {
        return Le(this, void 0, void 0, function* () {
            try {
                const r = yield this._getResolver(t)
                return r == null ? null : new qh(this, r, t)
            } catch (r) {
                if (r.code === q.errors.CALL_EXCEPTION) return null
                throw r
            }
        })
    }
    _getResolver(t) {
        return Le(this, void 0, void 0, function* () {
            const r = yield this.getNetwork()
            r.ensAddress || Qe.throwError("network does not support ENS", q.errors.UNSUPPORTED_OPERATION, { operation: "ENS", network: r.name })
            const n = { to: r.ensAddress, data: "0x0178b8bf" + nl(t).substring(2) }
            try {
                return this.formatter.callAddress(yield this.call(n))
            } catch (i) {
                if (i.code === q.errors.CALL_EXCEPTION) return null
                throw i
            }
        })
    }
    resolveName(t) {
        return Le(this, void 0, void 0, function* () {
            t = yield t
            try {
                return Promise.resolve(this.formatter.address(t))
            } catch (n) {
                if (Xe(t)) throw n
            }
            typeof t != "string" && Qe.throwArgumentError("invalid ENS name", "name", t)
            const r = yield this.getResolver(t)
            return r ? yield r.getAddress() : null
        })
    }
    lookupAddress(t) {
        return Le(this, void 0, void 0, function* () {
            ;(t = yield t), (t = this.formatter.address(t))
            const r = t.substring(2).toLowerCase() + ".addr.reverse",
                n = yield this._getResolver(r)
            if (!n) return null
            let i = Ne(yield this.call({ to: n, data: "0x691f3431" + nl(r).substring(2) }))
            if (i.length < 32 || !pe.from(i.slice(0, 32)).eq(32) || ((i = i.slice(32)), i.length < 32)) return null
            const s = pe.from(i.slice(0, 32)).toNumber()
            if (((i = i.slice(32)), s > i.length)) return null
            const o = Xs(i.slice(0, s))
            return (yield this.resolveName(o)) != t ? null : o
        })
    }
    getAvatar(t) {
        return Le(this, void 0, void 0, function* () {
            let r = null
            if (Xe(t)) {
                const i = this.formatter.address(t),
                    s = i.substring(2).toLowerCase() + ".addr.reverse",
                    o = yield this._getResolver(s)
                if (!o) return null
                r = new qh(this, o, "_", i)
            } else if (((r = yield this.getResolver(t)), !r)) return null
            const n = yield r.getAvatar()
            return n == null ? null : n.url
        })
    }
    perform(t, r) {
        return Qe.throwError(t + " not implemented", q.errors.NOT_IMPLEMENTED, { operation: t })
    }
    _startEvent(t) {
        this.polling = this._events.filter((r) => r.pollable()).length > 0
    }
    _stopEvent(t) {
        this.polling = this._events.filter((r) => r.pollable()).length > 0
    }
    _addEventListener(t, r, n) {
        const i = new UA(ds(t), r, n)
        return this._events.push(i), this._startEvent(i), this
    }
    on(t, r) {
        return this._addEventListener(t, r, !1)
    }
    once(t, r) {
        return this._addEventListener(t, r, !0)
    }
    emit(t, ...r) {
        let n = !1,
            i = [],
            s = ds(t)
        return (
            (this._events = this._events.filter((o) =>
                o.tag !== s
                    ? !0
                    : (setTimeout(() => {
                          o.listener.apply(this, r)
                      }, 0),
                      (n = !0),
                      o.once ? (i.push(o), !1) : !0)
            )),
            i.forEach((o) => {
                this._stopEvent(o)
            }),
            n
        )
    }
    listenerCount(t) {
        if (!t) return this._events.length
        let r = ds(t)
        return this._events.filter((n) => n.tag === r).length
    }
    listeners(t) {
        if (t == null) return this._events.map((n) => n.listener)
        let r = ds(t)
        return this._events.filter((n) => n.tag === r).map((n) => n.listener)
    }
    off(t, r) {
        if (r == null) return this.removeAllListeners(t)
        const n = []
        let i = !1,
            s = ds(t)
        return (
            (this._events = this._events.filter((o) => (o.tag !== s || o.listener != r || i ? !0 : ((i = !0), n.push(o), !1)))),
            n.forEach((o) => {
                this._stopEvent(o)
            }),
            this
        )
    }
    removeAllListeners(t) {
        let r = []
        if (t == null) (r = this._events), (this._events = [])
        else {
            const n = ds(t)
            this._events = this._events.filter((i) => (i.tag !== n ? !0 : (r.push(i), !1)))
        }
        return (
            r.forEach((n) => {
                this._stopEvent(n)
            }),
            this
        )
    }
}
var $n =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const Kt = new q(la),
    GA = ["call", "estimateGas"]
function Tm(e, t, r) {
    if (e === "call" && t.code === q.errors.SERVER_ERROR) {
        const s = t.error
        if (s && s.message.match("reverted") && Xe(s.data)) return s.data
        Kt.throwError("missing revert data in call exception", q.errors.CALL_EXCEPTION, { error: t, data: "0x" })
    }
    let n = t.message
    t.code === q.errors.SERVER_ERROR && t.error && typeof t.error.message == "string"
        ? (n = t.error.message)
        : typeof t.body == "string"
        ? (n = t.body)
        : typeof t.responseText == "string" && (n = t.responseText),
        (n = (n || "").toLowerCase())
    const i = r.transaction || r.signedTransaction
    throw (
        (n.match(/insufficient funds|base fee exceeds gas limit/) &&
            Kt.throwError("insufficient funds for intrinsic transaction cost", q.errors.INSUFFICIENT_FUNDS, {
                error: t,
                method: e,
                transaction: i,
            }),
        n.match(/nonce too low/) &&
            Kt.throwError("nonce has already been used", q.errors.NONCE_EXPIRED, { error: t, method: e, transaction: i }),
        n.match(/replacement transaction underpriced/) &&
            Kt.throwError("replacement fee too low", q.errors.REPLACEMENT_UNDERPRICED, { error: t, method: e, transaction: i }),
        n.match(/only replay-protected/) &&
            Kt.throwError("legacy pre-eip-155 transactions not supported", q.errors.UNSUPPORTED_OPERATION, {
                error: t,
                method: e,
                transaction: i,
            }),
        GA.indexOf(e) >= 0 &&
            n.match(/gas required exceeds allowance|always failing transaction|execution reverted/) &&
            Kt.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", q.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: t,
                method: e,
                transaction: i,
            }),
        t)
    )
}
function Hh(e) {
    return new Promise(function (t) {
        setTimeout(t, e)
    })
}
function YA(e) {
    if (e.error) {
        const t = new Error(e.error.message)
        throw ((t.code = e.error.code), (t.data = e.error.data), t)
    }
    return e.result
}
function mo(e) {
    return e && e.toLowerCase()
}
const Cf = {}
class Ml extends Zs {
    constructor(t, r, n) {
        Kt.checkNew(new.target, Ml)
        super()
        if (t !== Cf) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner")
        ne(this, "provider", r),
            n == null && (n = 0),
            typeof n == "string"
                ? (ne(this, "_address", this.provider.formatter.address(n)), ne(this, "_index", null))
                : typeof n == "number"
                ? (ne(this, "_index", n), ne(this, "_address", null))
                : Kt.throwArgumentError("invalid address or index", "addressOrIndex", n)
    }
    connect(t) {
        return Kt.throwError("cannot alter JSON-RPC Signer connection", q.errors.UNSUPPORTED_OPERATION, { operation: "connect" })
    }
    connectUnchecked() {
        return new JA(Cf, this.provider, this._address || this._index)
    }
    getAddress() {
        return this._address
            ? Promise.resolve(this._address)
            : this.provider
                  .send("eth_accounts", [])
                  .then(
                      (t) => (
                          t.length <= this._index &&
                              Kt.throwError("unknown account #" + this._index, q.errors.UNSUPPORTED_OPERATION, { operation: "getAddress" }),
                          this.provider.formatter.address(t[this._index])
                      )
                  )
    }
    sendUncheckedTransaction(t) {
        t = Vt(t)
        const r = this.getAddress().then((n) => (n && (n = n.toLowerCase()), n))
        if (t.gasLimit == null) {
            const n = Vt(t)
            ;(n.from = r), (t.gasLimit = this.provider.estimateGas(n))
        }
        return (
            t.to != null &&
                (t.to = Promise.resolve(t.to).then((n) =>
                    $n(this, void 0, void 0, function* () {
                        if (n == null) return null
                        const i = yield this.provider.resolveName(n)
                        return i == null && Kt.throwArgumentError("provided ENS name resolves to null", "tx.to", n), i
                    })
                )),
            Mt({ tx: Mt(t), sender: r }).then(({ tx: n, sender: i }) => {
                n.from != null ? n.from.toLowerCase() !== i && Kt.throwArgumentError("from address mismatch", "transaction", t) : (n.from = i)
                const s = this.provider.constructor.hexlifyTransaction(n, { from: !0 })
                return this.provider.send("eth_sendTransaction", [s]).then(
                    (o) => o,
                    (o) => Tm("sendTransaction", o, s)
                )
            })
        )
    }
    signTransaction(t) {
        return Kt.throwError("signing transactions is unsupported", q.errors.UNSUPPORTED_OPERATION, { operation: "signTransaction" })
    }
    sendTransaction(t) {
        return $n(this, void 0, void 0, function* () {
            const r = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval),
                n = yield this.sendUncheckedTransaction(t)
            try {
                return yield So(
                    () =>
                        $n(this, void 0, void 0, function* () {
                            const i = yield this.provider.getTransaction(n)
                            if (i !== null) return this.provider._wrapTransaction(i, n, r)
                        }),
                    { oncePoll: this.provider }
                )
            } catch (i) {
                throw ((i.transactionHash = n), i)
            }
        })
    }
    signMessage(t) {
        return $n(this, void 0, void 0, function* () {
            const r = typeof t == "string" ? Vn(t) : t,
                n = yield this.getAddress()
            return yield this.provider.send("personal_sign", [Se(r), n.toLowerCase()])
        })
    }
    _legacySignMessage(t) {
        return $n(this, void 0, void 0, function* () {
            const r = typeof t == "string" ? Vn(t) : t,
                n = yield this.getAddress()
            return yield this.provider.send("eth_sign", [n.toLowerCase(), Se(r)])
        })
    }
    _signTypedData(t, r, n) {
        return $n(this, void 0, void 0, function* () {
            const i = yield hr.resolveNames(t, r, n, (o) => this.provider.resolveName(o)),
                s = yield this.getAddress()
            return yield this.provider.send("eth_signTypedData_v4", [s.toLowerCase(), JSON.stringify(hr.getPayload(i.domain, r, i.value))])
        })
    }
    unlock(t) {
        return $n(this, void 0, void 0, function* () {
            const r = this.provider,
                n = yield this.getAddress()
            return r.send("personal_unlockAccount", [n.toLowerCase(), t, null])
        })
    }
}
class JA extends Ml {
    sendTransaction(t) {
        return this.sendUncheckedTransaction(t).then((r) => ({
            hash: r,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (n) => this.provider.waitForTransaction(r, n),
        }))
    }
}
const XA = {
    chainId: !0,
    data: !0,
    gasLimit: !0,
    gasPrice: !0,
    nonce: !0,
    to: !0,
    value: !0,
    type: !0,
    accessList: !0,
    maxFeePerGas: !0,
    maxPriorityFeePerGas: !0,
}
class Rl extends KA {
    constructor(t, r) {
        Kt.checkNew(new.target, Rl)
        let n = r
        n == null &&
            (n = new Promise((i, s) => {
                setTimeout(() => {
                    this.detectNetwork().then(
                        (o) => {
                            i(o)
                        },
                        (o) => {
                            s(o)
                        }
                    )
                }, 0)
            }))
        super(n)
        t || (t = Er(this.constructor, "defaultUrl")()),
            typeof t == "string" ? ne(this, "connection", Object.freeze({ url: t })) : ne(this, "connection", Object.freeze(Vt(t))),
            (this._nextId = 42)
    }
    get _cache() {
        return this._eventLoopCache == null && (this._eventLoopCache = {}), this._eventLoopCache
    }
    static defaultUrl() {
        return "http://localhost:8545"
    }
    detectNetwork() {
        return (
            this._cache.detectNetwork ||
                ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
                setTimeout(() => {
                    this._cache.detectNetwork = null
                }, 0)),
            this._cache.detectNetwork
        )
    }
    _uncachedDetectNetwork() {
        return $n(this, void 0, void 0, function* () {
            yield Hh(0)
            let t = null
            try {
                t = yield this.send("eth_chainId", [])
            } catch {
                try {
                    t = yield this.send("net_version", [])
                } catch {}
            }
            if (t != null) {
                const r = Er(this.constructor, "getNetwork")
                try {
                    return r(pe.from(t).toNumber())
                } catch (n) {
                    return Kt.throwError("could not detect network", q.errors.NETWORK_ERROR, {
                        chainId: t,
                        event: "invalidNetwork",
                        serverError: n,
                    })
                }
            }
            return Kt.throwError("could not detect network", q.errors.NETWORK_ERROR, { event: "noNetwork" })
        })
    }
    getSigner(t) {
        return new Ml(Cf, this, t)
    }
    getUncheckedSigner(t) {
        return this.getSigner(t).connectUnchecked()
    }
    listAccounts() {
        return this.send("eth_accounts", []).then((t) => t.map((r) => this.formatter.address(r)))
    }
    send(t, r) {
        const n = { method: t, params: r, id: this._nextId++, jsonrpc: "2.0" }
        this.emit("debug", { action: "request", request: Fn(n), provider: this })
        const i = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0
        if (i && this._cache[t]) return this._cache[t]
        const s = _m(this.connection, JSON.stringify(n), YA).then(
            (o) => (this.emit("debug", { action: "response", request: n, response: o, provider: this }), o),
            (o) => {
                throw (this.emit("debug", { action: "response", error: o, request: n, provider: this }), o)
            }
        )
        return (
            i &&
                ((this._cache[t] = s),
                setTimeout(() => {
                    this._cache[t] = null
                }, 0)),
            s
        )
    }
    prepareRequest(t, r) {
        switch (t) {
            case "getBlockNumber":
                return ["eth_blockNumber", []]
            case "getGasPrice":
                return ["eth_gasPrice", []]
            case "getBalance":
                return ["eth_getBalance", [mo(r.address), r.blockTag]]
            case "getTransactionCount":
                return ["eth_getTransactionCount", [mo(r.address), r.blockTag]]
            case "getCode":
                return ["eth_getCode", [mo(r.address), r.blockTag]]
            case "getStorageAt":
                return ["eth_getStorageAt", [mo(r.address), r.position, r.blockTag]]
            case "sendTransaction":
                return ["eth_sendRawTransaction", [r.signedTransaction]]
            case "getBlock":
                return r.blockTag
                    ? ["eth_getBlockByNumber", [r.blockTag, !!r.includeTransactions]]
                    : r.blockHash
                    ? ["eth_getBlockByHash", [r.blockHash, !!r.includeTransactions]]
                    : null
            case "getTransaction":
                return ["eth_getTransactionByHash", [r.transactionHash]]
            case "getTransactionReceipt":
                return ["eth_getTransactionReceipt", [r.transactionHash]]
            case "call": {
                const n = Er(this.constructor, "hexlifyTransaction")
                return ["eth_call", [n(r.transaction, { from: !0 }), r.blockTag]]
            }
            case "estimateGas": {
                const n = Er(this.constructor, "hexlifyTransaction")
                return ["eth_estimateGas", [n(r.transaction, { from: !0 })]]
            }
            case "getLogs":
                return r.filter && r.filter.address != null && (r.filter.address = mo(r.filter.address)), ["eth_getLogs", [r.filter]]
        }
        return null
    }
    perform(t, r) {
        return $n(this, void 0, void 0, function* () {
            if (t === "call" || t === "estimateGas") {
                const i = r.transaction
                if (i && i.type != null && pe.from(i.type).isZero() && i.maxFeePerGas == null && i.maxPriorityFeePerGas == null) {
                    const s = yield this.getFeeData()
                    s.maxFeePerGas == null && s.maxPriorityFeePerGas == null && ((r = Vt(r)), (r.transaction = Vt(i)), delete r.transaction.type)
                }
            }
            const n = this.prepareRequest(t, r)
            n == null && Kt.throwError(t + " not implemented", q.errors.NOT_IMPLEMENTED, { operation: t })
            try {
                return yield this.send(n[0], n[1])
            } catch (i) {
                return Tm(t, i, r)
            }
        })
    }
    _startEvent(t) {
        t.tag === "pending" && this._startPending(), super._startEvent(t)
    }
    _startPending() {
        if (this._pendingFilter != null) return
        const t = this,
            r = this.send("eth_newPendingTransactionFilter", [])
        ;(this._pendingFilter = r),
            r
                .then(function (n) {
                    function i() {
                        t.send("eth_getFilterChanges", [n])
                            .then(function (s) {
                                if (t._pendingFilter != r) return null
                                let o = Promise.resolve()
                                return (
                                    s.forEach(function (a) {
                                        ;(t._emitted["t:" + a.toLowerCase()] = "pending"),
                                            (o = o.then(function () {
                                                return t.getTransaction(a).then(function (l) {
                                                    return t.emit("pending", l), null
                                                })
                                            }))
                                    }),
                                    o.then(function () {
                                        return Hh(1e3)
                                    })
                                )
                            })
                            .then(function () {
                                if (t._pendingFilter != r) {
                                    t.send("eth_uninstallFilter", [n])
                                    return
                                }
                                return (
                                    setTimeout(function () {
                                        i()
                                    }, 0),
                                    null
                                )
                            })
                            .catch((s) => {})
                    }
                    return i(), n
                })
                .catch((n) => {})
    }
    _stopEvent(t) {
        t.tag === "pending" && this.listenerCount("pending") === 0 && (this._pendingFilter = null), super._stopEvent(t)
    }
    static hexlifyTransaction(t, r) {
        const n = Vt(XA)
        if (r) for (const s in r) r[s] && (n[s] = !0)
        uw(t, n)
        const i = {}
        return (
            ["gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function (s) {
                if (t[s] == null) return
                const o = xc(t[s])
                s === "gasLimit" && (s = "gas"), (i[s] = o)
            }),
            ["from", "to", "data"].forEach(function (s) {
                t[s] != null && (i[s] = Se(t[s]))
            }),
            t.accessList && (i.accessList = no(t.accessList)),
            i
        )
    }
}
var ZA =
    (globalThis && globalThis.__awaiter) ||
    function (e, t, r, n) {
        function i(s) {
            return s instanceof r
                ? s
                : new r(function (o) {
                      o(s)
                  })
        }
        return new (r || (r = Promise))(function (s, o) {
            function a(c) {
                try {
                    u(n.next(c))
                } catch (d) {
                    o(d)
                }
            }
            function l(c) {
                try {
                    u(n.throw(c))
                } catch (d) {
                    o(d)
                }
            }
            function u(c) {
                c.done ? s(c.value) : i(c.value).then(a, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }
const QA = new q(la)
class AI extends Rl {
    detectNetwork() {
        const t = Object.create(null, { detectNetwork: { get: () => super.detectNetwork } })
        return ZA(this, void 0, void 0, function* () {
            let r = this.network
            return (
                r == null &&
                    ((r = yield t.detectNetwork.call(this)),
                    r || QA.throwError("no network detected", q.errors.UNKNOWN_ERROR, {}),
                    this._network == null && (ne(this, "_network", r), this.emit("network", r, null))),
                r
            )
        })
    }
}
const Ou = new q(la)
let eS = 1
function Uh(e, t) {
    const r = "Web3LegacyFetcher"
    return function (n, i) {
        const s = { method: n, params: i, id: eS++, jsonrpc: "2.0" }
        return new Promise((o, a) => {
            this.emit("debug", { action: "request", fetcher: r, request: Fn(s), provider: this }),
                t(s, (l, u) => {
                    if (l) return this.emit("debug", { action: "response", fetcher: r, error: l, request: s, provider: this }), a(l)
                    if ((this.emit("debug", { action: "response", fetcher: r, request: s, response: u, provider: this }), u.error)) {
                        const c = new Error(u.error.message)
                        return (c.code = u.error.code), (c.data = u.error.data), a(c)
                    }
                    o(u.result)
                })
        })
    }
}
function tS(e) {
    return function (t, r) {
        r == null && (r = [])
        const n = { method: t, params: r }
        return (
            this.emit("debug", { action: "request", fetcher: "Eip1193Fetcher", request: Fn(n), provider: this }),
            e.request(n).then(
                (i) => (this.emit("debug", { action: "response", fetcher: "Eip1193Fetcher", request: n, response: i, provider: this }), i),
                (i) => {
                    throw (this.emit("debug", { action: "response", fetcher: "Eip1193Fetcher", request: n, error: i, provider: this }), i)
                }
            )
        )
    }
}
class xm extends Rl {
    constructor(t, r) {
        Ou.checkNew(new.target, xm), t == null && Ou.throwArgumentError("missing provider", "provider", t)
        let n = null,
            i = null,
            s = null
        typeof t == "function"
            ? ((n = "unknown:"), (i = t))
            : ((n = t.host || t.path || ""),
              !n && t.isMetaMask && (n = "metamask"),
              (s = t),
              t.request
                  ? (n === "" && (n = "eip-1193:"), (i = tS(t)))
                  : t.sendAsync
                  ? (i = Uh(t, t.sendAsync.bind(t)))
                  : t.send
                  ? (i = Uh(t, t.send.bind(t)))
                  : Ou.throwArgumentError("unsupported provider", "provider", t),
              n || (n = "unknown:"))
        super(n, r)
        ne(this, "jsonRpcFetchFunc", i), ne(this, "provider", s)
    }
    send(t, r) {
        return this.jsonRpcFetchFunc(t, r)
    }
}
const rS = "ethers/5.5.4"
new q(rS)
var lr = "top",
    Sr = "bottom",
    Tr = "right",
    ur = "left",
    Ll = "auto",
    io = [lr, Sr, Tr, ur],
    rs = "start",
    Vs = "end",
    Cm = "clippingParents",
    Dc = "viewport",
    _s = "popper",
    $m = "reference",
    $f = io.reduce(function (e, t) {
        return e.concat([t + "-" + rs, t + "-" + Vs])
    }, []),
    Fc = [].concat(io, [Ll]).reduce(function (e, t) {
        return e.concat([t, t + "-" + rs, t + "-" + Vs])
    }, []),
    Nm = "beforeRead",
    Bm = "read",
    km = "afterRead",
    Om = "beforeMain",
    Im = "main",
    Pm = "afterMain",
    Mm = "beforeWrite",
    Rm = "write",
    Lm = "afterWrite",
    Dm = [Nm, Bm, km, Om, Im, Pm, Mm, Rm, Lm]
function An(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function Wr(e) {
    if (e == null) return window
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument
        return (t && t.defaultView) || window
    }
    return e
}
function Qo(e) {
    var t = Wr(e).Element
    return e instanceof t || e instanceof Element
}
function kr(e) {
    var t = Wr(e).HTMLElement
    return e instanceof t || e instanceof HTMLElement
}
function Fm(e) {
    if (typeof ShadowRoot == "undefined") return !1
    var t = Wr(e).ShadowRoot
    return e instanceof t || e instanceof ShadowRoot
}
function nS(e) {
    var t = e.state
    Object.keys(t.elements).forEach(function (r) {
        var n = t.styles[r] || {},
            i = t.attributes[r] || {},
            s = t.elements[r]
        !kr(s) ||
            !An(s) ||
            (Object.assign(s.style, n),
            Object.keys(i).forEach(function (o) {
                var a = i[o]
                a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a)
            }))
    })
}
function iS(e) {
    var t = e.state,
        r = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }
    return (
        Object.assign(t.elements.popper.style, r.popper),
        (t.styles = r),
        t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
        function () {
            Object.keys(t.elements).forEach(function (n) {
                var i = t.elements[n],
                    s = t.attributes[n] || {},
                    o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
                    a = o.reduce(function (l, u) {
                        return (l[u] = ""), l
                    }, {})
                !kr(i) ||
                    !An(i) ||
                    (Object.assign(i.style, a),
                    Object.keys(s).forEach(function (l) {
                        i.removeAttribute(l)
                    }))
            })
        }
    )
}
var Vc = { name: "applyStyles", enabled: !0, phase: "write", fn: nS, effect: iS, requires: ["computeStyles"] }
function vn(e) {
    return e.split("-")[0]
}
function qs(e, t) {
    var r = e.getBoundingClientRect(),
        n = 1,
        i = 1
    return {
        width: r.width / n,
        height: r.height / i,
        top: r.top / i,
        right: r.right / n,
        bottom: r.bottom / i,
        left: r.left / n,
        x: r.left / n,
        y: r.top / i,
    }
}
function qc(e) {
    var t = qs(e),
        r = e.offsetWidth,
        n = e.offsetHeight
    return (
        Math.abs(t.width - r) <= 1 && (r = t.width),
        Math.abs(t.height - n) <= 1 && (n = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
    )
}
function Vm(e, t) {
    var r = t.getRootNode && t.getRootNode()
    if (e.contains(t)) return !0
    if (r && Fm(r)) {
        var n = t
        do {
            if (n && e.isSameNode(n)) return !0
            n = n.parentNode || n.host
        } while (n)
    }
    return !1
}
function Un(e) {
    return Wr(e).getComputedStyle(e)
}
function sS(e) {
    return ["table", "td", "th"].indexOf(An(e)) >= 0
}
function Ti(e) {
    return ((Qo(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Dl(e) {
    return An(e) === "html" ? e : e.assignedSlot || e.parentNode || (Fm(e) ? e.host : null) || Ti(e)
}
function zh(e) {
    return !kr(e) || Un(e).position === "fixed" ? null : e.offsetParent
}
function oS(e) {
    var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
        r = navigator.userAgent.indexOf("Trident") !== -1
    if (r && kr(e)) {
        var n = Un(e)
        if (n.position === "fixed") return null
    }
    for (var i = Dl(e); kr(i) && ["html", "body"].indexOf(An(i)) < 0; ) {
        var s = Un(i)
        if (
            s.transform !== "none" ||
            s.perspective !== "none" ||
            s.contain === "paint" ||
            ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
            (t && s.willChange === "filter") ||
            (t && s.filter && s.filter !== "none")
        )
            return i
        i = i.parentNode
    }
    return null
}
function ua(e) {
    for (var t = Wr(e), r = zh(e); r && sS(r) && Un(r).position === "static"; ) r = zh(r)
    return r && (An(r) === "html" || (An(r) === "body" && Un(r).position === "static")) ? t : r || oS(e) || t
}
function Hc(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
var mi = Math.max,
    ea = Math.min,
    Ca = Math.round
function Va(e, t, r) {
    return mi(e, ea(t, r))
}
function qm() {
    return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Hm(e) {
    return Object.assign({}, qm(), e)
}
function Um(e, t) {
    return t.reduce(function (r, n) {
        return (r[n] = e), r
    }, {})
}
var aS = function (t, r) {
    return (t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t), Hm(typeof t != "number" ? t : Um(t, io))
}
function lS(e) {
    var t,
        r = e.state,
        n = e.name,
        i = e.options,
        s = r.elements.arrow,
        o = r.modifiersData.popperOffsets,
        a = vn(r.placement),
        l = Hc(a),
        u = [ur, Tr].indexOf(a) >= 0,
        c = u ? "height" : "width"
    if (!(!s || !o)) {
        var d = aS(i.padding, r),
            h = qc(s),
            v = l === "y" ? lr : ur,
            b = l === "y" ? Sr : Tr,
            _ = r.rects.reference[c] + r.rects.reference[l] - o[l] - r.rects.popper[c],
            C = o[l] - r.rects.reference[l],
            B = ua(s),
            O = B ? (l === "y" ? B.clientHeight || 0 : B.clientWidth || 0) : 0,
            L = _ / 2 - C / 2,
            V = d[v],
            H = O - h[c] - d[b],
            Q = O / 2 - h[c] / 2 + L,
            K = Va(V, Q, H),
            ae = l
        r.modifiersData[n] = ((t = {}), (t[ae] = K), (t.centerOffset = K - Q), t)
    }
}
function uS(e) {
    var t = e.state,
        r = e.options,
        n = r.element,
        i = n === void 0 ? "[data-popper-arrow]" : n
    i != null &&
        ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) || !Vm(t.elements.popper, i) || (t.elements.arrow = i))
}
var zm = { name: "arrow", enabled: !0, phase: "main", fn: lS, effect: uS, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }
function Hs(e) {
    return e.split("-")[1]
}
var fS = { top: "auto", right: "auto", bottom: "auto", left: "auto" }
function cS(e) {
    var t = e.x,
        r = e.y,
        n = window,
        i = n.devicePixelRatio || 1
    return { x: Ca(Ca(t * i) / i) || 0, y: Ca(Ca(r * i) / i) || 0 }
}
function jh(e) {
    var t,
        r = e.popper,
        n = e.popperRect,
        i = e.placement,
        s = e.variation,
        o = e.offsets,
        a = e.position,
        l = e.gpuAcceleration,
        u = e.adaptive,
        c = e.roundOffsets,
        d = c === !0 ? cS(o) : typeof c == "function" ? c(o) : o,
        h = d.x,
        v = h === void 0 ? 0 : h,
        b = d.y,
        _ = b === void 0 ? 0 : b,
        C = o.hasOwnProperty("x"),
        B = o.hasOwnProperty("y"),
        O = ur,
        L = lr,
        V = window
    if (u) {
        var H = ua(r),
            Q = "clientHeight",
            K = "clientWidth"
        H === Wr(r) && ((H = Ti(r)), Un(H).position !== "static" && a === "absolute" && ((Q = "scrollHeight"), (K = "scrollWidth"))),
            (H = H),
            (i === lr || ((i === ur || i === Tr) && s === Vs)) && ((L = Sr), (_ -= H[Q] - n.height), (_ *= l ? 1 : -1)),
            (i === ur || ((i === lr || i === Sr) && s === Vs)) && ((O = Tr), (v -= H[K] - n.width), (v *= l ? 1 : -1))
    }
    var ae = Object.assign({ position: a }, u && fS)
    if (l) {
        var z
        return Object.assign(
            {},
            ae,
            ((z = {}),
            (z[L] = B ? "0" : ""),
            (z[O] = C ? "0" : ""),
            (z.transform = (V.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + _ + "px)" : "translate3d(" + v + "px, " + _ + "px, 0)"),
            z)
        )
    }
    return Object.assign({}, ae, ((t = {}), (t[L] = B ? _ + "px" : ""), (t[O] = C ? v + "px" : ""), (t.transform = ""), t))
}
function dS(e) {
    var t = e.state,
        r = e.options,
        n = r.gpuAcceleration,
        i = n === void 0 ? !0 : n,
        s = r.adaptive,
        o = s === void 0 ? !0 : s,
        a = r.roundOffsets,
        l = a === void 0 ? !0 : a,
        u = { placement: vn(t.placement), variation: Hs(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: i }
    t.modifiersData.popperOffsets != null &&
        (t.styles.popper = Object.assign(
            {},
            t.styles.popper,
            jh(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: l }))
        )),
        t.modifiersData.arrow != null &&
            (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                jh(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l }))
            )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }))
}
var Uc = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: dS, data: {} },
    $a = { passive: !0 }
function hS(e) {
    var t = e.state,
        r = e.instance,
        n = e.options,
        i = n.scroll,
        s = i === void 0 ? !0 : i,
        o = n.resize,
        a = o === void 0 ? !0 : o,
        l = Wr(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper)
    return (
        s &&
            u.forEach(function (c) {
                c.addEventListener("scroll", r.update, $a)
            }),
        a && l.addEventListener("resize", r.update, $a),
        function () {
            s &&
                u.forEach(function (c) {
                    c.removeEventListener("scroll", r.update, $a)
                }),
                a && l.removeEventListener("resize", r.update, $a)
        }
    )
}
var zc = { name: "eventListeners", enabled: !0, phase: "write", fn: function () {}, effect: hS, data: {} },
    pS = { left: "right", right: "left", bottom: "top", top: "bottom" }
function qa(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
        return pS[t]
    })
}
var gS = { start: "end", end: "start" }
function Wh(e) {
    return e.replace(/start|end/g, function (t) {
        return gS[t]
    })
}
function jc(e) {
    var t = Wr(e),
        r = t.pageXOffset,
        n = t.pageYOffset
    return { scrollLeft: r, scrollTop: n }
}
function Wc(e) {
    return qs(Ti(e)).left + jc(e).scrollLeft
}
function mS(e) {
    var t = Wr(e),
        r = Ti(e),
        n = t.visualViewport,
        i = r.clientWidth,
        s = r.clientHeight,
        o = 0,
        a = 0
    return (
        n &&
            ((i = n.width),
            (s = n.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((o = n.offsetLeft), (a = n.offsetTop))),
        { width: i, height: s, x: o + Wc(e), y: a }
    )
}
function vS(e) {
    var t,
        r = Ti(e),
        n = jc(e),
        i = (t = e.ownerDocument) == null ? void 0 : t.body,
        s = mi(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
        o = mi(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
        a = -n.scrollLeft + Wc(e),
        l = -n.scrollTop
    return Un(i || r).direction === "rtl" && (a += mi(r.clientWidth, i ? i.clientWidth : 0) - s), { width: s, height: o, x: a, y: l }
}
function Kc(e) {
    var t = Un(e),
        r = t.overflow,
        n = t.overflowX,
        i = t.overflowY
    return /auto|scroll|overlay|hidden/.test(r + i + n)
}
function jm(e) {
    return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : kr(e) && Kc(e) ? e : jm(Dl(e))
}
function Mo(e, t) {
    var r
    t === void 0 && (t = [])
    var n = jm(e),
        i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = Wr(n),
        o = i ? [s].concat(s.visualViewport || [], Kc(n) ? n : []) : n,
        a = t.concat(o)
    return i ? a : a.concat(Mo(Dl(o)))
}
function Nf(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height })
}
function bS(e) {
    var t = qs(e)
    return (
        (t.top = t.top + e.clientTop),
        (t.left = t.left + e.clientLeft),
        (t.bottom = t.top + e.clientHeight),
        (t.right = t.left + e.clientWidth),
        (t.width = e.clientWidth),
        (t.height = e.clientHeight),
        (t.x = t.left),
        (t.y = t.top),
        t
    )
}
function Kh(e, t) {
    return t === Dc ? Nf(mS(e)) : kr(t) ? bS(t) : Nf(vS(Ti(e)))
}
function yS(e) {
    var t = Mo(Dl(e)),
        r = ["absolute", "fixed"].indexOf(Un(e).position) >= 0,
        n = r && kr(e) ? ua(e) : e
    return Qo(n)
        ? t.filter(function (i) {
              return Qo(i) && Vm(i, n) && An(i) !== "body"
          })
        : []
}
function _S(e, t, r) {
    var n = t === "clippingParents" ? yS(e) : [].concat(t),
        i = [].concat(n, [r]),
        s = i[0],
        o = i.reduce(function (a, l) {
            var u = Kh(e, l)
            return (
                (a.top = mi(u.top, a.top)),
                (a.right = ea(u.right, a.right)),
                (a.bottom = ea(u.bottom, a.bottom)),
                (a.left = mi(u.left, a.left)),
                a
            )
        }, Kh(e, s))
    return (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o
}
function Wm(e) {
    var t = e.reference,
        r = e.element,
        n = e.placement,
        i = n ? vn(n) : null,
        s = n ? Hs(n) : null,
        o = t.x + t.width / 2 - r.width / 2,
        a = t.y + t.height / 2 - r.height / 2,
        l
    switch (i) {
        case lr:
            l = { x: o, y: t.y - r.height }
            break
        case Sr:
            l = { x: o, y: t.y + t.height }
            break
        case Tr:
            l = { x: t.x + t.width, y: a }
            break
        case ur:
            l = { x: t.x - r.width, y: a }
            break
        default:
            l = { x: t.x, y: t.y }
    }
    var u = i ? Hc(i) : null
    if (u != null) {
        var c = u === "y" ? "height" : "width"
        switch (s) {
            case rs:
                l[u] = l[u] - (t[c] / 2 - r[c] / 2)
                break
            case Vs:
                l[u] = l[u] + (t[c] / 2 - r[c] / 2)
                break
        }
    }
    return l
}
function Us(e, t) {
    t === void 0 && (t = {})
    var r = t,
        n = r.placement,
        i = n === void 0 ? e.placement : n,
        s = r.boundary,
        o = s === void 0 ? Cm : s,
        a = r.rootBoundary,
        l = a === void 0 ? Dc : a,
        u = r.elementContext,
        c = u === void 0 ? _s : u,
        d = r.altBoundary,
        h = d === void 0 ? !1 : d,
        v = r.padding,
        b = v === void 0 ? 0 : v,
        _ = Hm(typeof b != "number" ? b : Um(b, io)),
        C = c === _s ? $m : _s,
        B = e.rects.popper,
        O = e.elements[h ? C : c],
        L = _S(Qo(O) ? O : O.contextElement || Ti(e.elements.popper), o, l),
        V = qs(e.elements.reference),
        H = Wm({ reference: V, element: B, strategy: "absolute", placement: i }),
        Q = Nf(Object.assign({}, B, H)),
        K = c === _s ? Q : V,
        ae = {
            top: L.top - K.top + _.top,
            bottom: K.bottom - L.bottom + _.bottom,
            left: L.left - K.left + _.left,
            right: K.right - L.right + _.right,
        },
        z = e.modifiersData.offset
    if (c === _s && z) {
        var ye = z[i]
        Object.keys(ae).forEach(function (S) {
            var f = [Tr, Sr].indexOf(S) >= 0 ? 1 : -1,
                g = [lr, Sr].indexOf(S) >= 0 ? "y" : "x"
            ae[S] += ye[g] * f
        })
    }
    return ae
}
function wS(e, t) {
    t === void 0 && (t = {})
    var r = t,
        n = r.placement,
        i = r.boundary,
        s = r.rootBoundary,
        o = r.padding,
        a = r.flipVariations,
        l = r.allowedAutoPlacements,
        u = l === void 0 ? Fc : l,
        c = Hs(n),
        d = c
            ? a
                ? $f
                : $f.filter(function (b) {
                      return Hs(b) === c
                  })
            : io,
        h = d.filter(function (b) {
            return u.indexOf(b) >= 0
        })
    h.length === 0 && (h = d)
    var v = h.reduce(function (b, _) {
        return (b[_] = Us(e, { placement: _, boundary: i, rootBoundary: s, padding: o })[vn(_)]), b
    }, {})
    return Object.keys(v).sort(function (b, _) {
        return v[b] - v[_]
    })
}
function ES(e) {
    if (vn(e) === Ll) return []
    var t = qa(e)
    return [Wh(e), t, Wh(t)]
}
function AS(e) {
    var t = e.state,
        r = e.options,
        n = e.name
    if (!t.modifiersData[n]._skip) {
        for (
            var i = r.mainAxis,
                s = i === void 0 ? !0 : i,
                o = r.altAxis,
                a = o === void 0 ? !0 : o,
                l = r.fallbackPlacements,
                u = r.padding,
                c = r.boundary,
                d = r.rootBoundary,
                h = r.altBoundary,
                v = r.flipVariations,
                b = v === void 0 ? !0 : v,
                _ = r.allowedAutoPlacements,
                C = t.options.placement,
                B = vn(C),
                O = B === C,
                L = l || (O || !b ? [qa(C)] : ES(C)),
                V = [C].concat(L).reduce(function (he, m) {
                    return he.concat(
                        vn(m) === Ll
                            ? wS(t, { placement: m, boundary: c, rootBoundary: d, padding: u, flipVariations: b, allowedAutoPlacements: _ })
                            : m
                    )
                }, []),
                H = t.rects.reference,
                Q = t.rects.popper,
                K = new Map(),
                ae = !0,
                z = V[0],
                ye = 0;
            ye < V.length;
            ye++
        ) {
            var S = V[ye],
                f = vn(S),
                g = Hs(S) === rs,
                y = [lr, Sr].indexOf(f) >= 0,
                w = y ? "width" : "height",
                E = Us(t, { placement: S, boundary: c, rootBoundary: d, altBoundary: h, padding: u }),
                $ = y ? (g ? Tr : ur) : g ? Sr : lr
            H[w] > Q[w] && ($ = qa($))
            var k = qa($),
                A = []
            if (
                (s && A.push(E[f] <= 0),
                a && A.push(E[$] <= 0, E[k] <= 0),
                A.every(function (he) {
                    return he
                }))
            ) {
                ;(z = S), (ae = !1)
                break
            }
            K.set(S, A)
        }
        if (ae)
            for (
                var p = b ? 3 : 1,
                    x = function (m) {
                        var M = V.find(function (I) {
                            var F = K.get(I)
                            if (F)
                                return F.slice(0, m).every(function (j) {
                                    return j
                                })
                        })
                        if (M) return (z = M), "break"
                    },
                    ee = p;
                ee > 0;
                ee--
            ) {
                var fe = x(ee)
                if (fe === "break") break
            }
        t.placement !== z && ((t.modifiersData[n]._skip = !0), (t.placement = z), (t.reset = !0))
    }
}
var Km = { name: "flip", enabled: !0, phase: "main", fn: AS, requiresIfExists: ["offset"], data: { _skip: !1 } }
function Gh(e, t, r) {
    return (
        r === void 0 && (r = { x: 0, y: 0 }),
        { top: e.top - t.height - r.y, right: e.right - t.width + r.x, bottom: e.bottom - t.height + r.y, left: e.left - t.width - r.x }
    )
}
function Yh(e) {
    return [lr, Tr, Sr, ur].some(function (t) {
        return e[t] >= 0
    })
}
function SS(e) {
    var t = e.state,
        r = e.name,
        n = t.rects.reference,
        i = t.rects.popper,
        s = t.modifiersData.preventOverflow,
        o = Us(t, { elementContext: "reference" }),
        a = Us(t, { altBoundary: !0 }),
        l = Gh(o, n),
        u = Gh(a, i, s),
        c = Yh(l),
        d = Yh(u)
    ;(t.modifiersData[r] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: d }),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": d }))
}
var Gm = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: SS }
function TS(e, t, r) {
    var n = vn(e),
        i = [ur, lr].indexOf(n) >= 0 ? -1 : 1,
        s = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
        o = s[0],
        a = s[1]
    return (o = o || 0), (a = (a || 0) * i), [ur, Tr].indexOf(n) >= 0 ? { x: a, y: o } : { x: o, y: a }
}
function xS(e) {
    var t = e.state,
        r = e.options,
        n = e.name,
        i = r.offset,
        s = i === void 0 ? [0, 0] : i,
        o = Fc.reduce(function (c, d) {
            return (c[d] = TS(d, t.rects, s)), c
        }, {}),
        a = o[t.placement],
        l = a.x,
        u = a.y
    t.modifiersData.popperOffsets != null && ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += u)),
        (t.modifiersData[n] = o)
}
var Ym = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: xS }
function CS(e) {
    var t = e.state,
        r = e.name
    t.modifiersData[r] = Wm({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement })
}
var Gc = { name: "popperOffsets", enabled: !0, phase: "read", fn: CS, data: {} }
function $S(e) {
    return e === "x" ? "y" : "x"
}
function NS(e) {
    var t = e.state,
        r = e.options,
        n = e.name,
        i = r.mainAxis,
        s = i === void 0 ? !0 : i,
        o = r.altAxis,
        a = o === void 0 ? !1 : o,
        l = r.boundary,
        u = r.rootBoundary,
        c = r.altBoundary,
        d = r.padding,
        h = r.tether,
        v = h === void 0 ? !0 : h,
        b = r.tetherOffset,
        _ = b === void 0 ? 0 : b,
        C = Us(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
        B = vn(t.placement),
        O = Hs(t.placement),
        L = !O,
        V = Hc(B),
        H = $S(V),
        Q = t.modifiersData.popperOffsets,
        K = t.rects.reference,
        ae = t.rects.popper,
        z = typeof _ == "function" ? _(Object.assign({}, t.rects, { placement: t.placement })) : _,
        ye = { x: 0, y: 0 }
    if (!!Q) {
        if (s || a) {
            var S = V === "y" ? lr : ur,
                f = V === "y" ? Sr : Tr,
                g = V === "y" ? "height" : "width",
                y = Q[V],
                w = Q[V] + C[S],
                E = Q[V] - C[f],
                $ = v ? -ae[g] / 2 : 0,
                k = O === rs ? K[g] : ae[g],
                A = O === rs ? -ae[g] : -K[g],
                p = t.elements.arrow,
                x = v && p ? qc(p) : { width: 0, height: 0 },
                ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : qm(),
                fe = ee[S],
                he = ee[f],
                m = Va(0, K[g], x[g]),
                M = L ? K[g] / 2 - $ - m - fe - z : k - m - fe - z,
                I = L ? -K[g] / 2 + $ + m + he + z : A + m + he + z,
                F = t.elements.arrow && ua(t.elements.arrow),
                j = F ? (V === "y" ? F.clientTop || 0 : F.clientLeft || 0) : 0,
                X = t.modifiersData.offset ? t.modifiersData.offset[t.placement][V] : 0,
                oe = Q[V] + M - X - j,
                G = Q[V] + I - X
            if (s) {
                var T = Va(v ? ea(w, oe) : w, y, v ? mi(E, G) : E)
                ;(Q[V] = T), (ye[V] = T - y)
            }
            if (a) {
                var N = V === "x" ? lr : ur,
                    R = V === "x" ? Sr : Tr,
                    U = Q[H],
                    Y = U + C[N],
                    J = U - C[R],
                    te = Va(v ? ea(Y, oe) : Y, U, v ? mi(J, G) : J)
                ;(Q[H] = te), (ye[H] = te - U)
            }
        }
        t.modifiersData[n] = ye
    }
}
var Jm = { name: "preventOverflow", enabled: !0, phase: "main", fn: NS, requiresIfExists: ["offset"] }
function BS(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function kS(e) {
    return e === Wr(e) || !kr(e) ? jc(e) : BS(e)
}
function OS(e) {
    var t = e.getBoundingClientRect(),
        r = t.width / e.offsetWidth || 1,
        n = t.height / e.offsetHeight || 1
    return r !== 1 || n !== 1
}
function IS(e, t, r) {
    r === void 0 && (r = !1)
    var n = kr(t)
    kr(t) && OS(t)
    var i = Ti(t),
        s = qs(e),
        o = { scrollLeft: 0, scrollTop: 0 },
        a = { x: 0, y: 0 }
    return (
        (n || (!n && !r)) &&
            ((An(t) !== "body" || Kc(i)) && (o = kS(t)),
            kr(t) ? ((a = qs(t)), (a.x += t.clientLeft), (a.y += t.clientTop)) : i && (a.x = Wc(i))),
        { x: s.left + o.scrollLeft - a.x, y: s.top + o.scrollTop - a.y, width: s.width, height: s.height }
    )
}
function PS(e) {
    var t = new Map(),
        r = new Set(),
        n = []
    e.forEach(function (s) {
        t.set(s.name, s)
    })
    function i(s) {
        r.add(s.name)
        var o = [].concat(s.requires || [], s.requiresIfExists || [])
        o.forEach(function (a) {
            if (!r.has(a)) {
                var l = t.get(a)
                l && i(l)
            }
        }),
            n.push(s)
    }
    return (
        e.forEach(function (s) {
            r.has(s.name) || i(s)
        }),
        n
    )
}
function MS(e) {
    var t = PS(e)
    return Dm.reduce(function (r, n) {
        return r.concat(
            t.filter(function (i) {
                return i.phase === n
            })
        )
    }, [])
}
function RS(e) {
    var t
    return function () {
        return (
            t ||
                (t = new Promise(function (r) {
                    Promise.resolve().then(function () {
                        ;(t = void 0), r(e())
                    })
                })),
            t
        )
    }
}
function LS(e) {
    var t = e.reduce(function (r, n) {
        var i = r[n.name]
        return (
            (r[n.name] = i
                ? Object.assign({}, i, n, { options: Object.assign({}, i.options, n.options), data: Object.assign({}, i.data, n.data) })
                : n),
            r
        )
    }, {})
    return Object.keys(t).map(function (r) {
        return t[r]
    })
}
var Jh = { placement: "bottom", modifiers: [], strategy: "absolute" }
function Xh() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
    return !t.some(function (n) {
        return !(n && typeof n.getBoundingClientRect == "function")
    })
}
function Fl(e) {
    e === void 0 && (e = {})
    var t = e,
        r = t.defaultModifiers,
        n = r === void 0 ? [] : r,
        i = t.defaultOptions,
        s = i === void 0 ? Jh : i
    return function (a, l, u) {
        u === void 0 && (u = s)
        var c = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Jh, s),
                modifiersData: {},
                elements: { reference: a, popper: l },
                attributes: {},
                styles: {},
            },
            d = [],
            h = !1,
            v = {
                state: c,
                setOptions: function (B) {
                    var O = typeof B == "function" ? B(c.options) : B
                    _(),
                        (c.options = Object.assign({}, s, c.options, O)),
                        (c.scrollParents = { reference: Qo(a) ? Mo(a) : a.contextElement ? Mo(a.contextElement) : [], popper: Mo(l) })
                    var L = MS(LS([].concat(n, c.options.modifiers)))
                    return (
                        (c.orderedModifiers = L.filter(function (V) {
                            return V.enabled
                        })),
                        b(),
                        v.update()
                    )
                },
                forceUpdate: function () {
                    if (!h) {
                        var B = c.elements,
                            O = B.reference,
                            L = B.popper
                        if (!!Xh(O, L)) {
                            ;(c.rects = { reference: IS(O, ua(L), c.options.strategy === "fixed"), popper: qc(L) }),
                                (c.reset = !1),
                                (c.placement = c.options.placement),
                                c.orderedModifiers.forEach(function (ye) {
                                    return (c.modifiersData[ye.name] = Object.assign({}, ye.data))
                                })
                            for (var V = 0; V < c.orderedModifiers.length; V++) {
                                if (c.reset === !0) {
                                    ;(c.reset = !1), (V = -1)
                                    continue
                                }
                                var H = c.orderedModifiers[V],
                                    Q = H.fn,
                                    K = H.options,
                                    ae = K === void 0 ? {} : K,
                                    z = H.name
                                typeof Q == "function" && (c = Q({ state: c, options: ae, name: z, instance: v }) || c)
                            }
                        }
                    }
                },
                update: RS(function () {
                    return new Promise(function (C) {
                        v.forceUpdate(), C(c)
                    })
                }),
                destroy: function () {
                    _(), (h = !0)
                },
            }
        if (!Xh(a, l)) return v
        v.setOptions(u).then(function (C) {
            !h && u.onFirstUpdate && u.onFirstUpdate(C)
        })
        function b() {
            c.orderedModifiers.forEach(function (C) {
                var B = C.name,
                    O = C.options,
                    L = O === void 0 ? {} : O,
                    V = C.effect
                if (typeof V == "function") {
                    var H = V({ state: c, name: B, instance: v, options: L }),
                        Q = function () {}
                    d.push(H || Q)
                }
            })
        }
        function _() {
            d.forEach(function (C) {
                return C()
            }),
                (d = [])
        }
        return v
    }
}
var DS = Fl(),
    FS = [zc, Gc, Uc, Vc],
    VS = Fl({ defaultModifiers: FS }),
    qS = [zc, Gc, Uc, Vc, Ym, Km, Jm, zm, Gm],
    Yc = Fl({ defaultModifiers: qS }),
    Xm = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        popperGenerator: Fl,
        detectOverflow: Us,
        createPopperBase: DS,
        createPopper: Yc,
        createPopperLite: VS,
        top: lr,
        bottom: Sr,
        right: Tr,
        left: ur,
        auto: Ll,
        basePlacements: io,
        start: rs,
        end: Vs,
        clippingParents: Cm,
        viewport: Dc,
        popper: _s,
        reference: $m,
        variationPlacements: $f,
        placements: Fc,
        beforeRead: Nm,
        read: Bm,
        afterRead: km,
        beforeMain: Om,
        main: Im,
        afterMain: Pm,
        beforeWrite: Mm,
        write: Rm,
        afterWrite: Lm,
        modifierPhases: Dm,
        applyStyles: Vc,
        arrow: zm,
        computeStyles: Uc,
        eventListeners: zc,
        flip: Km,
        hide: Gm,
        offset: Ym,
        popperOffsets: Gc,
        preventOverflow: Jm,
    })
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const HS = 1e6,
    US = 1e3,
    Bf = "transitionend",
    zS = (e) =>
        e == null
            ? `${e}`
            : {}.toString
                  .call(e)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase(),
    jS = (e) => {
        do e += Math.floor(Math.random() * HS)
        while (document.getElementById(e))
        return e
    },
    Zm = (e) => {
        let t = e.getAttribute("data-bs-target")
        if (!t || t === "#") {
            let r = e.getAttribute("href")
            if (!r || (!r.includes("#") && !r.startsWith("."))) return null
            r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), (t = r && r !== "#" ? r.trim() : null)
        }
        return t
    },
    Jc = (e) => {
        const t = Zm(e)
        return t && document.querySelector(t) ? t : null
    },
    wi = (e) => {
        const t = Zm(e)
        return t ? document.querySelector(t) : null
    },
    WS = (e) => {
        if (!e) return 0
        let { transitionDuration: t, transitionDelay: r } = window.getComputedStyle(e)
        const n = Number.parseFloat(t),
            i = Number.parseFloat(r)
        return !n && !i ? 0 : ((t = t.split(",")[0]), (r = r.split(",")[0]), (Number.parseFloat(t) + Number.parseFloat(r)) * US)
    },
    Qm = (e) => {
        e.dispatchEvent(new Event(Bf))
    },
    ns = (e) => (!e || typeof e != "object" ? !1 : (typeof e.jquery != "undefined" && (e = e[0]), typeof e.nodeType != "undefined")),
    Ei = (e) => (ns(e) ? (e.jquery ? e[0] : e) : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null),
    xn = (e, t, r) => {
        Object.keys(r).forEach((n) => {
            const i = r[n],
                s = t[n],
                o = s && ns(s) ? "element" : zS(s)
            if (!new RegExp(i).test(o)) throw new TypeError(`${e.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`)
        })
    },
    fa = (e) => (!ns(e) || e.getClientRects().length === 0 ? !1 : getComputedStyle(e).getPropertyValue("visibility") === "visible"),
    Xi = (e) =>
        !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")
            ? !0
            : typeof e.disabled != "undefined"
            ? e.disabled
            : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
    ev = (e) => {
        if (!document.documentElement.attachShadow) return null
        if (typeof e.getRootNode == "function") {
            const t = e.getRootNode()
            return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? ev(e.parentNode) : null
    },
    cl = () => {},
    so = (e) => {
        e.offsetHeight
    },
    tv = () => {
        const { jQuery: e } = window
        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
    },
    Iu = [],
    KS = (e) => {
        document.readyState === "loading"
            ? (Iu.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                      Iu.forEach((t) => t())
                  }),
              Iu.push(e))
            : e()
    },
    ar = () => document.documentElement.dir === "rtl",
    Rr = (e) => {
        KS(() => {
            const t = tv()
            if (t) {
                const r = e.NAME,
                    n = t.fn[r]
                ;(t.fn[r] = e.jQueryInterface), (t.fn[r].Constructor = e), (t.fn[r].noConflict = () => ((t.fn[r] = n), e.jQueryInterface))
            }
        })
    },
    Ki = (e) => {
        typeof e == "function" && e()
    },
    rv = (e, t, r = !0) => {
        if (!r) {
            Ki(e)
            return
        }
        const n = 5,
            i = WS(t) + n
        let s = !1
        const o = ({ target: a }) => {
            a === t && ((s = !0), t.removeEventListener(Bf, o), Ki(e))
        }
        t.addEventListener(Bf, o),
            setTimeout(() => {
                s || Qm(t)
            }, i)
    },
    nv = (e, t, r, n) => {
        let i = e.indexOf(t)
        if (i === -1) return e[!r && n ? e.length - 1 : 0]
        const s = e.length
        return (i += r ? 1 : -1), n && (i = (i + s) % s), e[Math.max(0, Math.min(i, s - 1))]
    },
    GS = /[^.]*(?=\..*)\.|.*/,
    YS = /\..*/,
    JS = /::\d+$/,
    Pu = {}
let Zh = 1
const XS = { mouseenter: "mouseover", mouseleave: "mouseout" },
    ZS = /^(mouseenter|mouseleave)/i,
    iv = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
    ])
function sv(e, t) {
    return (t && `${t}::${Zh++}`) || e.uidEvent || Zh++
}
function ov(e) {
    const t = sv(e)
    return (e.uidEvent = t), (Pu[t] = Pu[t] || {}), Pu[t]
}
function QS(e, t) {
    return function r(n) {
        return (n.delegateTarget = e), r.oneOff && re.off(e, n.type, t), t.apply(e, [n])
    }
}
function eT(e, t, r) {
    return function n(i) {
        const s = e.querySelectorAll(t)
        for (let { target: o } = i; o && o !== this; o = o.parentNode)
            for (let a = s.length; a--; ) if (s[a] === o) return (i.delegateTarget = o), n.oneOff && re.off(e, i.type, t, r), r.apply(o, [i])
        return null
    }
}
function av(e, t, r = null) {
    const n = Object.keys(e)
    for (let i = 0, s = n.length; i < s; i++) {
        const o = e[n[i]]
        if (o.originalHandler === t && o.delegationSelector === r) return o
    }
    return null
}
function lv(e, t, r) {
    const n = typeof t == "string",
        i = n ? r : t
    let s = uv(e)
    return iv.has(s) || (s = e), [n, i, s]
}
function Qh(e, t, r, n, i) {
    if (typeof t != "string" || !e) return
    if ((r || ((r = n), (n = null)), ZS.test(t))) {
        const v = (b) =>
            function (_) {
                if (!_.relatedTarget || (_.relatedTarget !== _.delegateTarget && !_.delegateTarget.contains(_.relatedTarget)))
                    return b.call(this, _)
            }
        n ? (n = v(n)) : (r = v(r))
    }
    const [s, o, a] = lv(t, r, n),
        l = ov(e),
        u = l[a] || (l[a] = {}),
        c = av(u, o, s ? r : null)
    if (c) {
        c.oneOff = c.oneOff && i
        return
    }
    const d = sv(o, t.replace(GS, "")),
        h = s ? eT(e, r, n) : QS(e, r)
    ;(h.delegationSelector = s ? r : null), (h.originalHandler = o), (h.oneOff = i), (h.uidEvent = d), (u[d] = h), e.addEventListener(a, h, s)
}
function kf(e, t, r, n, i) {
    const s = av(t[r], n, i)
    !s || (e.removeEventListener(r, s, Boolean(i)), delete t[r][s.uidEvent])
}
function tT(e, t, r, n) {
    const i = t[r] || {}
    Object.keys(i).forEach((s) => {
        if (s.includes(n)) {
            const o = i[s]
            kf(e, t, r, o.originalHandler, o.delegationSelector)
        }
    })
}
function uv(e) {
    return (e = e.replace(YS, "")), XS[e] || e
}
const re = {
        on(e, t, r, n) {
            Qh(e, t, r, n, !1)
        },
        one(e, t, r, n) {
            Qh(e, t, r, n, !0)
        },
        off(e, t, r, n) {
            if (typeof t != "string" || !e) return
            const [i, s, o] = lv(t, r, n),
                a = o !== t,
                l = ov(e),
                u = t.startsWith(".")
            if (typeof s != "undefined") {
                if (!l || !l[o]) return
                kf(e, l, o, s, i ? r : null)
                return
            }
            u &&
                Object.keys(l).forEach((d) => {
                    tT(e, l, d, t.slice(1))
                })
            const c = l[o] || {}
            Object.keys(c).forEach((d) => {
                const h = d.replace(JS, "")
                if (!a || t.includes(h)) {
                    const v = c[d]
                    kf(e, l, o, v.originalHandler, v.delegationSelector)
                }
            })
        },
        trigger(e, t, r) {
            if (typeof t != "string" || !e) return null
            const n = tv(),
                i = uv(t),
                s = t !== i,
                o = iv.has(i)
            let a,
                l = !0,
                u = !0,
                c = !1,
                d = null
            return (
                s &&
                    n &&
                    ((a = n.Event(t, r)),
                    n(e).trigger(a),
                    (l = !a.isPropagationStopped()),
                    (u = !a.isImmediatePropagationStopped()),
                    (c = a.isDefaultPrevented())),
                o ? ((d = document.createEvent("HTMLEvents")), d.initEvent(i, l, !0)) : (d = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                typeof r != "undefined" &&
                    Object.keys(r).forEach((h) => {
                        Object.defineProperty(d, h, {
                            get() {
                                return r[h]
                            },
                        })
                    }),
                c && d.preventDefault(),
                u && e.dispatchEvent(d),
                d.defaultPrevented && typeof a != "undefined" && a.preventDefault(),
                d
            )
        },
    },
    oi = new Map(),
    Ro = {
        set(e, t, r) {
            oi.has(e) || oi.set(e, new Map())
            const n = oi.get(e)
            if (!n.has(t) && n.size !== 0) {
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
                return
            }
            n.set(t, r)
        },
        get(e, t) {
            return (oi.has(e) && oi.get(e).get(t)) || null
        },
        remove(e, t) {
            if (!oi.has(e)) return
            const r = oi.get(e)
            r.delete(t), r.size === 0 && oi.delete(e)
        },
    },
    rT = "5.1.3"
class Kr {
    constructor(t) {
        ;(t = Ei(t)), !!t && ((this._element = t), Ro.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
        Ro.remove(this._element, this.constructor.DATA_KEY),
            re.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach((t) => {
                this[t] = null
            })
    }
    _queueCallback(t, r, n = !0) {
        rv(t, r, n)
    }
    static getInstance(t) {
        return Ro.get(Ei(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, r = {}) {
        return this.getInstance(t) || new this(t, typeof r == "object" ? r : null)
    }
    static get VERSION() {
        return rT
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!')
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`
    }
}
const Vl = (e, t = "hide") => {
        const r = `click.dismiss${e.EVENT_KEY}`,
            n = e.NAME
        re.on(document, r, `[data-bs-dismiss="${n}"]`, function (i) {
            if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), Xi(this))) return
            const s = wi(this) || this.closest(`.${n}`)
            e.getOrCreateInstance(s)[t]()
        })
    },
    nT = "alert",
    iT = "bs.alert",
    fv = `.${iT}`,
    sT = `close${fv}`,
    oT = `closed${fv}`,
    aT = "fade",
    lT = "show"
class ca extends Kr {
    static get NAME() {
        return nT
    }
    close() {
        if (re.trigger(this._element, sT).defaultPrevented) return
        this._element.classList.remove(lT)
        const r = this._element.classList.contains(aT)
        this._queueCallback(() => this._destroyElement(), this._element, r)
    }
    _destroyElement() {
        this._element.remove(), re.trigger(this._element, oT), this.dispose()
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = ca.getOrCreateInstance(this)
            if (typeof t == "string") {
                if (r[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`)
                r[t](this)
            }
        })
    }
}
Vl(ca, "close")
Rr(ca)
const uT = "button",
    fT = "bs.button",
    cT = `.${fT}`,
    dT = ".data-api",
    hT = "active",
    e0 = '[data-bs-toggle="button"]',
    pT = `click${cT}${dT}`
class ql extends Kr {
    static get NAME() {
        return uT
    }
    toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(hT))
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = ql.getOrCreateInstance(this)
            t === "toggle" && r[t]()
        })
    }
}
re.on(document, pT, e0, (e) => {
    e.preventDefault()
    const t = e.target.closest(e0)
    ql.getOrCreateInstance(t).toggle()
})
Rr(ql)
function t0(e) {
    return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e
}
function Mu(e) {
    return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
}
const Yt = {
        setDataAttribute(e, t, r) {
            e.setAttribute(`data-bs-${Mu(t)}`, r)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${Mu(t)}`)
        },
        getDataAttributes(e) {
            if (!e) return {}
            const t = {}
            return (
                Object.keys(e.dataset)
                    .filter((r) => r.startsWith("bs"))
                    .forEach((r) => {
                        let n = r.replace(/^bs/, "")
                        ;(n = n.charAt(0).toLowerCase() + n.slice(1, n.length)), (t[n] = t0(e.dataset[r]))
                    }),
                t
            )
        },
        getDataAttribute(e, t) {
            return t0(e.getAttribute(`data-bs-${Mu(t)}`))
        },
        offset(e) {
            const t = e.getBoundingClientRect()
            return { top: t.top + window.pageYOffset, left: t.left + window.pageXOffset }
        },
        position(e) {
            return { top: e.offsetTop, left: e.offsetLeft }
        },
    },
    gT = 3,
    Be = {
        find(e, t = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(t, e))
        },
        findOne(e, t = document.documentElement) {
            return Element.prototype.querySelector.call(t, e)
        },
        children(e, t) {
            return [].concat(...e.children).filter((r) => r.matches(t))
        },
        parents(e, t) {
            const r = []
            let n = e.parentNode
            for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== gT; ) n.matches(t) && r.push(n), (n = n.parentNode)
            return r
        },
        prev(e, t) {
            let r = e.previousElementSibling
            for (; r; ) {
                if (r.matches(t)) return [r]
                r = r.previousElementSibling
            }
            return []
        },
        next(e, t) {
            let r = e.nextElementSibling
            for (; r; ) {
                if (r.matches(t)) return [r]
                r = r.nextElementSibling
            }
            return []
        },
        focusableChildren(e) {
            const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]']
                .map((r) => `${r}:not([tabindex^="-"])`)
                .join(", ")
            return this.find(t, e).filter((r) => !Xi(r) && fa(r))
        },
    },
    r0 = "carousel",
    mT = "bs.carousel",
    Cr = `.${mT}`,
    cv = ".data-api",
    vT = "ArrowLeft",
    bT = "ArrowRight",
    yT = 500,
    _T = 40,
    n0 = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
    wT = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
    },
    Fi = "next",
    Vi = "prev",
    zi = "left",
    To = "right",
    ET = { [vT]: To, [bT]: zi },
    AT = `slide${Cr}`,
    i0 = `slid${Cr}`,
    ST = `keydown${Cr}`,
    TT = `mouseenter${Cr}`,
    xT = `mouseleave${Cr}`,
    CT = `touchstart${Cr}`,
    $T = `touchmove${Cr}`,
    NT = `touchend${Cr}`,
    BT = `pointerdown${Cr}`,
    kT = `pointerup${Cr}`,
    OT = `dragstart${Cr}`,
    IT = `load${Cr}${cv}`,
    PT = `click${Cr}${cv}`,
    MT = "carousel",
    qi = "active",
    RT = "slide",
    LT = "carousel-item-end",
    DT = "carousel-item-start",
    FT = "carousel-item-next",
    VT = "carousel-item-prev",
    qT = "pointer-event",
    HT = ".active",
    Na = ".active.carousel-item",
    UT = ".carousel-item",
    zT = ".carousel-item img",
    jT = ".carousel-item-next, .carousel-item-prev",
    WT = ".carousel-indicators",
    KT = "[data-bs-target]",
    GT = "[data-bs-slide], [data-bs-slide-to]",
    YT = '[data-bs-ride="carousel"]',
    JT = "touch",
    XT = "pen"
class un extends Kr {
    constructor(t, r) {
        super(t)
        ;(this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(r)),
            (this._indicatorsElement = Be.findOne(WT, this._element)),
            (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(window.PointerEvent)),
            this._addEventListeners()
    }
    static get Default() {
        return n0
    }
    static get NAME() {
        return r0
    }
    next() {
        this._slide(Fi)
    }
    nextWhenVisible() {
        !document.hidden && fa(this._element) && this.next()
    }
    prev() {
        this._slide(Vi)
    }
    pause(t) {
        t || (this._isPaused = !0),
            Be.findOne(jT, this._element) && (Qm(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null)
    }
    cycle(t) {
        t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval), (this._interval = null)),
            this._config &&
                this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)))
    }
    to(t) {
        this._activeElement = Be.findOne(Na, this._element)
        const r = this._getItemIndex(this._activeElement)
        if (t > this._items.length - 1 || t < 0) return
        if (this._isSliding) {
            re.one(this._element, i0, () => this.to(t))
            return
        }
        if (r === t) {
            this.pause(), this.cycle()
            return
        }
        const n = t > r ? Fi : Vi
        this._slide(n, this._items[t])
    }
    _getConfig(t) {
        return (t = De(De(De({}, n0), Yt.getDataAttributes(this._element)), typeof t == "object" ? t : {})), xn(r0, t, wT), t
    }
    _handleSwipe() {
        const t = Math.abs(this.touchDeltaX)
        if (t <= _T) return
        const r = t / this.touchDeltaX
        ;(this.touchDeltaX = 0), !!r && this._slide(r > 0 ? To : zi)
    }
    _addEventListeners() {
        this._config.keyboard && re.on(this._element, ST, (t) => this._keydown(t)),
            this._config.pause === "hover" && (re.on(this._element, TT, (t) => this.pause(t)), re.on(this._element, xT, (t) => this.cycle(t))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
        const t = (s) => this._pointerEvent && (s.pointerType === XT || s.pointerType === JT),
            r = (s) => {
                t(s) ? (this.touchStartX = s.clientX) : this._pointerEvent || (this.touchStartX = s.touches[0].clientX)
            },
            n = (s) => {
                this.touchDeltaX = s.touches && s.touches.length > 1 ? 0 : s.touches[0].clientX - this.touchStartX
            },
            i = (s) => {
                t(s) && (this.touchDeltaX = s.clientX - this.touchStartX),
                    this._handleSwipe(),
                    this._config.pause === "hover" &&
                        (this.pause(),
                        this.touchTimeout && clearTimeout(this.touchTimeout),
                        (this.touchTimeout = setTimeout((o) => this.cycle(o), yT + this._config.interval)))
            }
        Be.find(zT, this._element).forEach((s) => {
            re.on(s, OT, (o) => o.preventDefault())
        }),
            this._pointerEvent
                ? (re.on(this._element, BT, (s) => r(s)), re.on(this._element, kT, (s) => i(s)), this._element.classList.add(qT))
                : (re.on(this._element, CT, (s) => r(s)), re.on(this._element, $T, (s) => n(s)), re.on(this._element, NT, (s) => i(s)))
    }
    _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return
        const r = ET[t.key]
        r && (t.preventDefault(), this._slide(r))
    }
    _getItemIndex(t) {
        return (this._items = t && t.parentNode ? Be.find(UT, t.parentNode) : []), this._items.indexOf(t)
    }
    _getItemByOrder(t, r) {
        const n = t === Fi
        return nv(this._items, r, n, this._config.wrap)
    }
    _triggerSlideEvent(t, r) {
        const n = this._getItemIndex(t),
            i = this._getItemIndex(Be.findOne(Na, this._element))
        return re.trigger(this._element, AT, { relatedTarget: t, direction: r, from: i, to: n })
    }
    _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
            const r = Be.findOne(HT, this._indicatorsElement)
            r.classList.remove(qi), r.removeAttribute("aria-current")
            const n = Be.find(KT, this._indicatorsElement)
            for (let i = 0; i < n.length; i++)
                if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                    n[i].classList.add(qi), n[i].setAttribute("aria-current", "true")
                    break
                }
        }
    }
    _updateInterval() {
        const t = this._activeElement || Be.findOne(Na, this._element)
        if (!t) return
        const r = Number.parseInt(t.getAttribute("data-bs-interval"), 10)
        r
            ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = r))
            : (this._config.interval = this._config.defaultInterval || this._config.interval)
    }
    _slide(t, r) {
        const n = this._directionToOrder(t),
            i = Be.findOne(Na, this._element),
            s = this._getItemIndex(i),
            o = r || this._getItemByOrder(n, i),
            a = this._getItemIndex(o),
            l = Boolean(this._interval),
            u = n === Fi,
            c = u ? DT : LT,
            d = u ? FT : VT,
            h = this._orderToDirection(n)
        if (o && o.classList.contains(qi)) {
            this._isSliding = !1
            return
        }
        if (this._isSliding || this._triggerSlideEvent(o, h).defaultPrevented || !i || !o) return
        ;(this._isSliding = !0), l && this.pause(), this._setActiveIndicatorElement(o), (this._activeElement = o)
        const b = () => {
            re.trigger(this._element, i0, { relatedTarget: o, direction: h, from: s, to: a })
        }
        if (this._element.classList.contains(RT)) {
            o.classList.add(d), so(o), i.classList.add(c), o.classList.add(c)
            const _ = () => {
                o.classList.remove(c, d), o.classList.add(qi), i.classList.remove(qi, d, c), (this._isSliding = !1), setTimeout(b, 0)
            }
            this._queueCallback(_, i, !0)
        } else i.classList.remove(qi), o.classList.add(qi), (this._isSliding = !1), b()
        l && this.cycle()
    }
    _directionToOrder(t) {
        return [To, zi].includes(t) ? (ar() ? (t === zi ? Vi : Fi) : t === zi ? Fi : Vi) : t
    }
    _orderToDirection(t) {
        return [Fi, Vi].includes(t) ? (ar() ? (t === Vi ? zi : To) : t === Vi ? To : zi) : t
    }
    static carouselInterface(t, r) {
        const n = un.getOrCreateInstance(t, r)
        let { _config: i } = n
        typeof r == "object" && (i = De(De({}, i), r))
        const s = typeof r == "string" ? r : i.slide
        if (typeof r == "number") n.to(r)
        else if (typeof s == "string") {
            if (typeof n[s] == "undefined") throw new TypeError(`No method named "${s}"`)
            n[s]()
        } else i.interval && i.ride && (n.pause(), n.cycle())
    }
    static jQueryInterface(t) {
        return this.each(function () {
            un.carouselInterface(this, t)
        })
    }
    static dataApiClickHandler(t) {
        const r = wi(this)
        if (!r || !r.classList.contains(MT)) return
        const n = De(De({}, Yt.getDataAttributes(r)), Yt.getDataAttributes(this)),
            i = this.getAttribute("data-bs-slide-to")
        i && (n.interval = !1), un.carouselInterface(r, n), i && un.getInstance(r).to(i), t.preventDefault()
    }
}
re.on(document, PT, GT, un.dataApiClickHandler)
re.on(window, IT, () => {
    const e = Be.find(YT)
    for (let t = 0, r = e.length; t < r; t++) un.carouselInterface(e[t], un.getInstance(e[t]))
})
Rr(un)
const s0 = "collapse",
    dv = "bs.collapse",
    da = `.${dv}`,
    ZT = ".data-api",
    o0 = { toggle: !0, parent: null },
    QT = { toggle: "boolean", parent: "(null|element)" },
    e3 = `show${da}`,
    t3 = `shown${da}`,
    r3 = `hide${da}`,
    n3 = `hidden${da}`,
    i3 = `click${da}${ZT}`,
    Ru = "show",
    Ts = "collapse",
    Ba = "collapsing",
    a0 = "collapsed",
    l0 = `:scope .${Ts} .${Ts}`,
    s3 = "collapse-horizontal",
    o3 = "width",
    a3 = "height",
    l3 = ".collapse.show, .collapse.collapsing",
    Of = '[data-bs-toggle="collapse"]'
class Zi extends Kr {
    constructor(t, r) {
        super(t)
        ;(this._isTransitioning = !1), (this._config = this._getConfig(r)), (this._triggerArray = [])
        const n = Be.find(Of)
        for (let i = 0, s = n.length; i < s; i++) {
            const o = n[i],
                a = Jc(o),
                l = Be.find(a).filter((u) => u === this._element)
            a !== null && l.length && ((this._selector = a), this._triggerArray.push(o))
        }
        this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
    }
    static get Default() {
        return o0
    }
    static get NAME() {
        return s0
    }
    toggle() {
        this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (this._isTransitioning || this._isShown()) return
        let t = [],
            r
        if (this._config.parent) {
            const u = Be.find(l0, this._config.parent)
            t = Be.find(l3, this._config.parent).filter((c) => !u.includes(c))
        }
        const n = Be.findOne(this._selector)
        if (t.length) {
            const u = t.find((c) => n !== c)
            if (((r = u ? Zi.getInstance(u) : null), r && r._isTransitioning)) return
        }
        if (re.trigger(this._element, e3).defaultPrevented) return
        t.forEach((u) => {
            n !== u && Zi.getOrCreateInstance(u, { toggle: !1 }).hide(), r || Ro.set(u, dv, null)
        })
        const s = this._getDimension()
        this._element.classList.remove(Ts),
            this._element.classList.add(Ba),
            (this._element.style[s] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0)
        const o = () => {
                ;(this._isTransitioning = !1),
                    this._element.classList.remove(Ba),
                    this._element.classList.add(Ts, Ru),
                    (this._element.style[s] = ""),
                    re.trigger(this._element, t3)
            },
            l = `scroll${s[0].toUpperCase() + s.slice(1)}`
        this._queueCallback(o, this._element, !0), (this._element.style[s] = `${this._element[l]}px`)
    }
    hide() {
        if (this._isTransitioning || !this._isShown() || re.trigger(this._element, r3).defaultPrevented) return
        const r = this._getDimension()
        ;(this._element.style[r] = `${this._element.getBoundingClientRect()[r]}px`),
            so(this._element),
            this._element.classList.add(Ba),
            this._element.classList.remove(Ts, Ru)
        const n = this._triggerArray.length
        for (let s = 0; s < n; s++) {
            const o = this._triggerArray[s],
                a = wi(o)
            a && !this._isShown(a) && this._addAriaAndCollapsedClass([o], !1)
        }
        this._isTransitioning = !0
        const i = () => {
            ;(this._isTransitioning = !1), this._element.classList.remove(Ba), this._element.classList.add(Ts), re.trigger(this._element, n3)
        }
        ;(this._element.style[r] = ""), this._queueCallback(i, this._element, !0)
    }
    _isShown(t = this._element) {
        return t.classList.contains(Ru)
    }
    _getConfig(t) {
        return (
            (t = De(De(De({}, o0), Yt.getDataAttributes(this._element)), t)),
            (t.toggle = Boolean(t.toggle)),
            (t.parent = Ei(t.parent)),
            xn(s0, t, QT),
            t
        )
    }
    _getDimension() {
        return this._element.classList.contains(s3) ? o3 : a3
    }
    _initializeChildren() {
        if (!this._config.parent) return
        const t = Be.find(l0, this._config.parent)
        Be.find(Of, this._config.parent)
            .filter((r) => !t.includes(r))
            .forEach((r) => {
                const n = wi(r)
                n && this._addAriaAndCollapsedClass([r], this._isShown(n))
            })
    }
    _addAriaAndCollapsedClass(t, r) {
        !t.length ||
            t.forEach((n) => {
                r ? n.classList.remove(a0) : n.classList.add(a0), n.setAttribute("aria-expanded", r)
            })
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = {}
            typeof t == "string" && /show|hide/.test(t) && (r.toggle = !1)
            const n = Zi.getOrCreateInstance(this, r)
            if (typeof t == "string") {
                if (typeof n[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                n[t]()
            }
        })
    }
}
re.on(document, i3, Of, function (e) {
    ;(e.target.tagName === "A" || (e.delegateTarget && e.delegateTarget.tagName === "A")) && e.preventDefault()
    const t = Jc(this)
    Be.find(t).forEach((n) => {
        Zi.getOrCreateInstance(n, { toggle: !1 }).toggle()
    })
})
Rr(Zi)
const Lu = "dropdown",
    u3 = "bs.dropdown",
    as = `.${u3}`,
    Xc = ".data-api",
    Ha = "Escape",
    u0 = "Space",
    f0 = "Tab",
    If = "ArrowUp",
    Ua = "ArrowDown",
    f3 = 2,
    c3 = new RegExp(`${If}|${Ua}|${Ha}`),
    d3 = `hide${as}`,
    h3 = `hidden${as}`,
    p3 = `show${as}`,
    g3 = `shown${as}`,
    hv = `click${as}${Xc}`,
    pv = `keydown${as}${Xc}`,
    m3 = `keyup${as}${Xc}`,
    hs = "show",
    v3 = "dropup",
    b3 = "dropend",
    y3 = "dropstart",
    _3 = "navbar",
    Lo = '[data-bs-toggle="dropdown"]',
    Pf = ".dropdown-menu",
    w3 = ".navbar-nav",
    E3 = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    A3 = ar() ? "top-end" : "top-start",
    S3 = ar() ? "top-start" : "top-end",
    T3 = ar() ? "bottom-end" : "bottom-start",
    x3 = ar() ? "bottom-start" : "bottom-end",
    C3 = ar() ? "left-start" : "right-start",
    $3 = ar() ? "right-start" : "left-start",
    N3 = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
    B3 = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)",
    }
class vr extends Kr {
    constructor(t, r) {
        super(t)
        ;(this._popper = null),
            (this._config = this._getConfig(r)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar())
    }
    static get Default() {
        return N3
    }
    static get DefaultType() {
        return B3
    }
    static get NAME() {
        return Lu
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (Xi(this._element) || this._isShown(this._menu)) return
        const t = { relatedTarget: this._element }
        if (re.trigger(this._element, p3, t).defaultPrevented) return
        const n = vr.getParentFromElement(this._element)
        this._inNavbar ? Yt.setDataAttribute(this._menu, "popper", "none") : this._createPopper(n),
            "ontouchstart" in document.documentElement &&
                !n.closest(w3) &&
                [].concat(...document.body.children).forEach((i) => re.on(i, "mouseover", cl)),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(hs),
            this._element.classList.add(hs),
            re.trigger(this._element, g3, t)
    }
    hide() {
        if (Xi(this._element) || !this._isShown(this._menu)) return
        const t = { relatedTarget: this._element }
        this._completeHide(t)
    }
    dispose() {
        this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
        ;(this._inNavbar = this._detectNavbar()), this._popper && this._popper.update()
    }
    _completeHide(t) {
        re.trigger(this._element, d3, t).defaultPrevented ||
            ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((n) => re.off(n, "mouseover", cl)),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(hs),
            this._element.classList.remove(hs),
            this._element.setAttribute("aria-expanded", "false"),
            Yt.removeDataAttribute(this._menu, "popper"),
            re.trigger(this._element, h3, t))
    }
    _getConfig(t) {
        if (
            ((t = De(De(De({}, this.constructor.Default), Yt.getDataAttributes(this._element)), t)),
            xn(Lu, t, this.constructor.DefaultType),
            typeof t.reference == "object" && !ns(t.reference) && typeof t.reference.getBoundingClientRect != "function")
        )
            throw new TypeError(
                `${Lu.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            )
        return t
    }
    _createPopper(t) {
        if (typeof Xm == "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
        let r = this._element
        this._config.reference === "parent"
            ? (r = t)
            : ns(this._config.reference)
            ? (r = Ei(this._config.reference))
            : typeof this._config.reference == "object" && (r = this._config.reference)
        const n = this._getPopperConfig(),
            i = n.modifiers.find((s) => s.name === "applyStyles" && s.enabled === !1)
        ;(this._popper = Yc(r, this._menu, n)), i && Yt.setDataAttribute(this._menu, "popper", "static")
    }
    _isShown(t = this._element) {
        return t.classList.contains(hs)
    }
    _getMenuElement() {
        return Be.next(this._element, Pf)[0]
    }
    _getPlacement() {
        const t = this._element.parentNode
        if (t.classList.contains(b3)) return C3
        if (t.classList.contains(y3)) return $3
        const r = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end"
        return t.classList.contains(v3) ? (r ? S3 : A3) : r ? x3 : T3
    }
    _detectNavbar() {
        return this._element.closest(`.${_3}`) !== null
    }
    _getOffset() {
        const { offset: t } = this._config
        return typeof t == "string" ? t.split(",").map((r) => Number.parseInt(r, 10)) : typeof t == "function" ? (r) => t(r, this._element) : t
    }
    _getPopperConfig() {
        const t = {
            placement: this._getPlacement(),
            modifiers: [
                { name: "preventOverflow", options: { boundary: this._config.boundary } },
                { name: "offset", options: { offset: this._getOffset() } },
            ],
        }
        return (
            this._config.display === "static" && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
            De(De({}, t), typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig)
        )
    }
    _selectMenuItem({ key: t, target: r }) {
        const n = Be.find(E3, this._menu).filter(fa)
        !n.length || nv(n, r, t === Ua, !n.includes(r)).focus()
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = vr.getOrCreateInstance(this, t)
            if (typeof t == "string") {
                if (typeof r[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                r[t]()
            }
        })
    }
    static clearMenus(t) {
        if (t && (t.button === f3 || (t.type === "keyup" && t.key !== f0))) return
        const r = Be.find(Lo)
        for (let n = 0, i = r.length; n < i; n++) {
            const s = vr.getInstance(r[n])
            if (!s || s._config.autoClose === !1 || !s._isShown()) continue
            const o = { relatedTarget: s._element }
            if (t) {
                const a = t.composedPath(),
                    l = a.includes(s._menu)
                if (
                    a.includes(s._element) ||
                    (s._config.autoClose === "inside" && !l) ||
                    (s._config.autoClose === "outside" && l) ||
                    (s._menu.contains(t.target) &&
                        ((t.type === "keyup" && t.key === f0) || /input|select|option|textarea|form/i.test(t.target.tagName)))
                )
                    continue
                t.type === "click" && (o.clickEvent = t)
            }
            s._completeHide(o)
        }
    }
    static getParentFromElement(t) {
        return wi(t) || t.parentNode
    }
    static dataApiKeydownHandler(t) {
        if (
            /input|textarea/i.test(t.target.tagName)
                ? t.key === u0 || (t.key !== Ha && ((t.key !== Ua && t.key !== If) || t.target.closest(Pf)))
                : !c3.test(t.key)
        )
            return
        const r = this.classList.contains(hs)
        if ((!r && t.key === Ha) || (t.preventDefault(), t.stopPropagation(), Xi(this))) return
        const n = this.matches(Lo) ? this : Be.prev(this, Lo)[0],
            i = vr.getOrCreateInstance(n)
        if (t.key === Ha) {
            i.hide()
            return
        }
        if (t.key === If || t.key === Ua) {
            r || i.show(), i._selectMenuItem(t)
            return
        }
        ;(!r || t.key === u0) && vr.clearMenus()
    }
}
re.on(document, pv, Lo, vr.dataApiKeydownHandler)
re.on(document, pv, Pf, vr.dataApiKeydownHandler)
re.on(document, hv, vr.clearMenus)
re.on(document, m3, vr.clearMenus)
re.on(document, hv, Lo, function (e) {
    e.preventDefault(), vr.getOrCreateInstance(this).toggle()
})
Rr(vr)
const c0 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    d0 = ".sticky-top"
class Mf {
    constructor() {
        this._element = document.body
    }
    getWidth() {
        const t = document.documentElement.clientWidth
        return Math.abs(window.innerWidth - t)
    }
    hide() {
        const t = this.getWidth()
        this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", (r) => r + t),
            this._setElementAttributes(c0, "paddingRight", (r) => r + t),
            this._setElementAttributes(d0, "marginRight", (r) => r - t)
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden")
    }
    _setElementAttributes(t, r, n) {
        const i = this.getWidth(),
            s = (o) => {
                if (o !== this._element && window.innerWidth > o.clientWidth + i) return
                this._saveInitialAttribute(o, r)
                const a = window.getComputedStyle(o)[r]
                o.style[r] = `${n(Number.parseFloat(a))}px`
            }
        this._applyManipulationCallback(t, s)
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes(c0, "paddingRight"),
            this._resetElementAttributes(d0, "marginRight")
    }
    _saveInitialAttribute(t, r) {
        const n = t.style[r]
        n && Yt.setDataAttribute(t, r, n)
    }
    _resetElementAttributes(t, r) {
        const n = (i) => {
            const s = Yt.getDataAttribute(i, r)
            typeof s == "undefined" ? i.style.removeProperty(r) : (Yt.removeDataAttribute(i, r), (i.style[r] = s))
        }
        this._applyManipulationCallback(t, n)
    }
    _applyManipulationCallback(t, r) {
        ns(t) ? r(t) : Be.find(t, this._element).forEach(r)
    }
    isOverflowing() {
        return this.getWidth() > 0
    }
}
const k3 = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
    O3 = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" },
    gv = "backdrop",
    I3 = "fade",
    h0 = "show",
    p0 = `mousedown.bs.${gv}`
class mv {
    constructor(t) {
        ;(this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null)
    }
    show(t) {
        if (!this._config.isVisible) {
            Ki(t)
            return
        }
        this._append(),
            this._config.isAnimated && so(this._getElement()),
            this._getElement().classList.add(h0),
            this._emulateAnimation(() => {
                Ki(t)
            })
    }
    hide(t) {
        if (!this._config.isVisible) {
            Ki(t)
            return
        }
        this._getElement().classList.remove(h0),
            this._emulateAnimation(() => {
                this.dispose(), Ki(t)
            })
    }
    _getElement() {
        if (!this._element) {
            const t = document.createElement("div")
            ;(t.className = this._config.className), this._config.isAnimated && t.classList.add(I3), (this._element = t)
        }
        return this._element
    }
    _getConfig(t) {
        return (t = De(De({}, k3), typeof t == "object" ? t : {})), (t.rootElement = Ei(t.rootElement)), xn(gv, t, O3), t
    }
    _append() {
        this._isAppended ||
            (this._config.rootElement.append(this._getElement()),
            re.on(this._getElement(), p0, () => {
                Ki(this._config.clickCallback)
            }),
            (this._isAppended = !0))
    }
    dispose() {
        !this._isAppended || (re.off(this._element, p0), this._element.remove(), (this._isAppended = !1))
    }
    _emulateAnimation(t) {
        rv(t, this._getElement(), this._config.isAnimated)
    }
}
const P3 = { trapElement: null, autofocus: !0 },
    M3 = { trapElement: "element", autofocus: "boolean" },
    R3 = "focustrap",
    L3 = "bs.focustrap",
    dl = `.${L3}`,
    D3 = `focusin${dl}`,
    F3 = `keydown.tab${dl}`,
    V3 = "Tab",
    q3 = "forward",
    g0 = "backward"
class vv {
    constructor(t) {
        ;(this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null)
    }
    activate() {
        const { trapElement: t, autofocus: r } = this._config
        this._isActive ||
            (r && t.focus(),
            re.off(document, dl),
            re.on(document, D3, (n) => this._handleFocusin(n)),
            re.on(document, F3, (n) => this._handleKeydown(n)),
            (this._isActive = !0))
    }
    deactivate() {
        !this._isActive || ((this._isActive = !1), re.off(document, dl))
    }
    _handleFocusin(t) {
        const { target: r } = t,
            { trapElement: n } = this._config
        if (r === document || r === n || n.contains(r)) return
        const i = Be.focusableChildren(n)
        i.length === 0 ? n.focus() : this._lastTabNavDirection === g0 ? i[i.length - 1].focus() : i[0].focus()
    }
    _handleKeydown(t) {
        t.key === V3 && (this._lastTabNavDirection = t.shiftKey ? g0 : q3)
    }
    _getConfig(t) {
        return (t = De(De({}, P3), typeof t == "object" ? t : {})), xn(R3, t, M3), t
    }
}
const m0 = "modal",
    H3 = "bs.modal",
    Lr = `.${H3}`,
    U3 = ".data-api",
    v0 = "Escape",
    b0 = { backdrop: !0, keyboard: !0, focus: !0 },
    z3 = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
    j3 = `hide${Lr}`,
    W3 = `hidePrevented${Lr}`,
    bv = `hidden${Lr}`,
    yv = `show${Lr}`,
    K3 = `shown${Lr}`,
    y0 = `resize${Lr}`,
    _0 = `click.dismiss${Lr}`,
    w0 = `keydown.dismiss${Lr}`,
    G3 = `mouseup.dismiss${Lr}`,
    E0 = `mousedown.dismiss${Lr}`,
    Y3 = `click${Lr}${U3}`,
    A0 = "modal-open",
    J3 = "fade",
    S0 = "show",
    Du = "modal-static",
    X3 = ".modal.show",
    Z3 = ".modal-dialog",
    Q3 = ".modal-body",
    ex = '[data-bs-toggle="modal"]'
class is extends Kr {
    constructor(t, r) {
        super(t)
        ;(this._config = this._getConfig(r)),
            (this._dialog = Be.findOne(Z3, this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new Mf())
    }
    static get Default() {
        return b0
    }
    static get NAME() {
        return m0
    }
    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
        this._isShown ||
            this._isTransitioning ||
            re.trigger(this._element, yv, { relatedTarget: t }).defaultPrevented ||
            ((this._isShown = !0),
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(A0),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            re.on(this._dialog, E0, () => {
                re.one(this._element, G3, (n) => {
                    n.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(() => this._showElement(t)))
    }
    hide() {
        if (!this._isShown || this._isTransitioning || re.trigger(this._element, j3).defaultPrevented) return
        this._isShown = !1
        const r = this._isAnimated()
        r && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            this._focustrap.deactivate(),
            this._element.classList.remove(S0),
            re.off(this._element, _0),
            re.off(this._dialog, E0),
            this._queueCallback(() => this._hideModal(), this._element, r)
    }
    dispose() {
        ;[window, this._dialog].forEach((t) => re.off(t, Lr)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
        this._adjustDialog()
    }
    _initializeBackDrop() {
        return new mv({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() })
    }
    _initializeFocusTrap() {
        return new vv({ trapElement: this._element })
    }
    _getConfig(t) {
        return (t = De(De(De({}, b0), Yt.getDataAttributes(this._element)), typeof t == "object" ? t : {})), xn(m0, t, z3), t
    }
    _showElement(t) {
        const r = this._isAnimated(),
            n = Be.findOne(Q3, this._dialog)
        ;(!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0),
            n && (n.scrollTop = 0),
            r && so(this._element),
            this._element.classList.add(S0)
        const i = () => {
            this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), re.trigger(this._element, K3, { relatedTarget: t })
        }
        this._queueCallback(i, this._dialog, r)
    }
    _setEscapeEvent() {
        this._isShown
            ? re.on(this._element, w0, (t) => {
                  this._config.keyboard && t.key === v0
                      ? (t.preventDefault(), this.hide())
                      : !this._config.keyboard && t.key === v0 && this._triggerBackdropTransition()
              })
            : re.off(this._element, w0)
    }
    _setResizeEvent() {
        this._isShown ? re.on(window, y0, () => this._adjustDialog()) : re.off(window, y0)
    }
    _hideModal() {
        ;(this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
                document.body.classList.remove(A0), this._resetAdjustments(), this._scrollBar.reset(), re.trigger(this._element, bv)
            })
    }
    _showBackdrop(t) {
        re.on(this._element, _0, (r) => {
            if (this._ignoreBackdropClick) {
                this._ignoreBackdropClick = !1
                return
            }
            r.target === r.currentTarget &&
                (this._config.backdrop === !0 ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition())
        }),
            this._backdrop.show(t)
    }
    _isAnimated() {
        return this._element.classList.contains(J3)
    }
    _triggerBackdropTransition() {
        if (re.trigger(this._element, W3).defaultPrevented) return
        const { classList: r, scrollHeight: n, style: i } = this._element,
            s = n > document.documentElement.clientHeight
        ;(!s && i.overflowY === "hidden") ||
            r.contains(Du) ||
            (s || (i.overflowY = "hidden"),
            r.add(Du),
            this._queueCallback(() => {
                r.remove(Du),
                    s ||
                        this._queueCallback(() => {
                            i.overflowY = ""
                        }, this._dialog)
            }, this._dialog),
            this._element.focus())
    }
    _adjustDialog() {
        const t = this._element.scrollHeight > document.documentElement.clientHeight,
            r = this._scrollBar.getWidth(),
            n = r > 0
        ;((!n && t && !ar()) || (n && !t && ar())) && (this._element.style.paddingLeft = `${r}px`),
            ((n && !t && !ar()) || (!n && t && ar())) && (this._element.style.paddingRight = `${r}px`)
    }
    _resetAdjustments() {
        ;(this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "")
    }
    static jQueryInterface(t, r) {
        return this.each(function () {
            const n = is.getOrCreateInstance(this, t)
            if (typeof t == "string") {
                if (typeof n[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                n[t](r)
            }
        })
    }
}
re.on(document, Y3, ex, function (e) {
    const t = wi(this)
    ;["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        re.one(t, yv, (i) => {
            i.defaultPrevented ||
                re.one(t, bv, () => {
                    fa(this) && this.focus()
                })
        })
    const r = Be.findOne(X3)
    r && is.getInstance(r).hide(), is.getOrCreateInstance(t).toggle(this)
})
Vl(is)
Rr(is)
const T0 = "offcanvas",
    tx = "bs.offcanvas",
    ls = `.${tx}`,
    _v = ".data-api",
    rx = `load${ls}${_v}`,
    nx = "Escape",
    x0 = { backdrop: !0, keyboard: !0, scroll: !1 },
    ix = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    C0 = "show",
    sx = "offcanvas-backdrop",
    wv = ".offcanvas.show",
    ox = `show${ls}`,
    ax = `shown${ls}`,
    lx = `hide${ls}`,
    Ev = `hidden${ls}`,
    ux = `click${ls}${_v}`,
    fx = `keydown.dismiss${ls}`,
    cx = '[data-bs-toggle="offcanvas"]'
class Ai extends Kr {
    constructor(t, r) {
        super(t)
        ;(this._config = this._getConfig(r)),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners()
    }
    static get NAME() {
        return T0
    }
    static get Default() {
        return x0
    }
    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
        if (this._isShown || re.trigger(this._element, ox, { relatedTarget: t }).defaultPrevented) return
        ;(this._isShown = !0),
            (this._element.style.visibility = "visible"),
            this._backdrop.show(),
            this._config.scroll || new Mf().hide(),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(C0)
        const n = () => {
            this._config.scroll || this._focustrap.activate(), re.trigger(this._element, ax, { relatedTarget: t })
        }
        this._queueCallback(n, this._element, !0)
    }
    hide() {
        if (!this._isShown || re.trigger(this._element, lx).defaultPrevented) return
        this._focustrap.deactivate(), this._element.blur(), (this._isShown = !1), this._element.classList.remove(C0), this._backdrop.hide()
        const r = () => {
            this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new Mf().reset(),
                re.trigger(this._element, Ev)
        }
        this._queueCallback(r, this._element, !0)
    }
    dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _getConfig(t) {
        return (t = De(De(De({}, x0), Yt.getDataAttributes(this._element)), typeof t == "object" ? t : {})), xn(T0, t, ix), t
    }
    _initializeBackDrop() {
        return new mv({
            className: sx,
            isVisible: this._config.backdrop,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: () => this.hide(),
        })
    }
    _initializeFocusTrap() {
        return new vv({ trapElement: this._element })
    }
    _addEventListeners() {
        re.on(this._element, fx, (t) => {
            this._config.keyboard && t.key === nx && this.hide()
        })
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = Ai.getOrCreateInstance(this, t)
            if (typeof t == "string") {
                if (r[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`)
                r[t](this)
            }
        })
    }
}
re.on(document, ux, cx, function (e) {
    const t = wi(this)
    if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Xi(this))) return
    re.one(t, Ev, () => {
        fa(this) && this.focus()
    })
    const r = Be.findOne(wv)
    r && r !== t && Ai.getInstance(r).hide(), Ai.getOrCreateInstance(t).toggle(this)
})
re.on(window, rx, () => Be.find(wv).forEach((e) => Ai.getOrCreateInstance(e).show()))
Vl(Ai)
Rr(Ai)
const dx = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    hx = /^aria-[\w-]*$/i,
    px = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    gx = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    mx = (e, t) => {
        const r = e.nodeName.toLowerCase()
        if (t.includes(r)) return dx.has(r) ? Boolean(px.test(e.nodeValue) || gx.test(e.nodeValue)) : !0
        const n = t.filter((i) => i instanceof RegExp)
        for (let i = 0, s = n.length; i < s; i++) if (n[i].test(r)) return !0
        return !1
    },
    vx = {
        "*": ["class", "dir", "id", "lang", "role", hx],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
    }
function $0(e, t, r) {
    if (!e.length) return e
    if (r && typeof r == "function") return r(e)
    const i = new window.DOMParser().parseFromString(e, "text/html"),
        s = [].concat(...i.body.querySelectorAll("*"))
    for (let o = 0, a = s.length; o < a; o++) {
        const l = s[o],
            u = l.nodeName.toLowerCase()
        if (!Object.keys(t).includes(u)) {
            l.remove()
            continue
        }
        const c = [].concat(...l.attributes),
            d = [].concat(t["*"] || [], t[u] || [])
        c.forEach((h) => {
            mx(h, d) || l.removeAttribute(h.nodeName)
        })
    }
    return i.body.innerHTML
}
const N0 = "tooltip",
    bx = "bs.tooltip",
    Xr = `.${bx}`,
    yx = "bs-tooltip",
    _x = new Set(["sanitize", "allowList", "sanitizeFn"]),
    wx = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
    },
    Ex = { AUTO: "auto", TOP: "top", RIGHT: ar() ? "left" : "right", BOTTOM: "bottom", LEFT: ar() ? "right" : "left" },
    Ax = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: vx,
        popperConfig: null,
    },
    Sx = {
        HIDE: `hide${Xr}`,
        HIDDEN: `hidden${Xr}`,
        SHOW: `show${Xr}`,
        SHOWN: `shown${Xr}`,
        INSERTED: `inserted${Xr}`,
        CLICK: `click${Xr}`,
        FOCUSIN: `focusin${Xr}`,
        FOCUSOUT: `focusout${Xr}`,
        MOUSEENTER: `mouseenter${Xr}`,
        MOUSELEAVE: `mouseleave${Xr}`,
    },
    ka = "fade",
    Tx = "modal",
    vo = "show",
    bo = "show",
    Fu = "out",
    B0 = ".tooltip-inner",
    k0 = `.${Tx}`,
    O0 = "hide.bs.modal",
    yo = "hover",
    Vu = "focus",
    xx = "click",
    Cx = "manual"
class Mn extends Kr {
    constructor(t, r) {
        if (typeof Xm == "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
        super(t)
        ;(this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._config = this._getConfig(r)),
            (this.tip = null),
            this._setListeners()
    }
    static get Default() {
        return Ax
    }
    static get NAME() {
        return N0
    }
    static get Event() {
        return Sx
    }
    static get DefaultType() {
        return wx
    }
    enable() {
        this._isEnabled = !0
    }
    disable() {
        this._isEnabled = !1
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled
    }
    toggle(t) {
        if (!!this._isEnabled)
            if (t) {
                const r = this._initializeOnDelegatedTarget(t)
                ;(r._activeTrigger.click = !r._activeTrigger.click), r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
            } else {
                if (this.getTipElement().classList.contains(vo)) {
                    this._leave(null, this)
                    return
                }
                this._enter(null, this)
            }
    }
    dispose() {
        clearTimeout(this._timeout),
            re.off(this._element.closest(k0), O0, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements")
        if (!(this.isWithContent() && this._isEnabled)) return
        const t = re.trigger(this._element, this.constructor.Event.SHOW),
            r = ev(this._element),
            n = r === null ? this._element.ownerDocument.documentElement.contains(this._element) : r.contains(this._element)
        if (t.defaultPrevented || !n) return
        this.constructor.NAME === "tooltip" &&
            this.tip &&
            this.getTitle() !== this.tip.querySelector(B0).innerHTML &&
            (this._disposePopper(), this.tip.remove(), (this.tip = null))
        const i = this.getTipElement(),
            s = jS(this.constructor.NAME)
        i.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && i.classList.add(ka)
        const o = typeof this._config.placement == "function" ? this._config.placement.call(this, i, this._element) : this._config.placement,
            a = this._getAttachment(o)
        this._addAttachmentClass(a)
        const { container: l } = this._config
        Ro.set(i, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) ||
                (l.append(i), re.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : (this._popper = Yc(this._element, i, this._getPopperConfig(a))),
            i.classList.add(vo)
        const u = this._resolvePossibleFunction(this._config.customClass)
        u && i.classList.add(...u.split(" ")),
            "ontouchstart" in document.documentElement &&
                [].concat(...document.body.children).forEach((h) => {
                    re.on(h, "mouseover", cl)
                })
        const c = () => {
                const h = this._hoverState
                ;(this._hoverState = null), re.trigger(this._element, this.constructor.Event.SHOWN), h === Fu && this._leave(null, this)
            },
            d = this.tip.classList.contains(ka)
        this._queueCallback(c, this.tip, d)
    }
    hide() {
        if (!this._popper) return
        const t = this.getTipElement(),
            r = () => {
                this._isWithActiveTrigger() ||
                    (this._hoverState !== bo && t.remove(),
                    this._cleanTipClass(),
                    this._element.removeAttribute("aria-describedby"),
                    re.trigger(this._element, this.constructor.Event.HIDDEN),
                    this._disposePopper())
            }
        if (re.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return
        t.classList.remove(vo),
            "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((s) => re.off(s, "mouseover", cl)),
            (this._activeTrigger[xx] = !1),
            (this._activeTrigger[Vu] = !1),
            (this._activeTrigger[yo] = !1)
        const i = this.tip.classList.contains(ka)
        this._queueCallback(r, this.tip, i), (this._hoverState = "")
    }
    update() {
        this._popper !== null && this._popper.update()
    }
    isWithContent() {
        return Boolean(this.getTitle())
    }
    getTipElement() {
        if (this.tip) return this.tip
        const t = document.createElement("div")
        t.innerHTML = this._config.template
        const r = t.children[0]
        return this.setContent(r), r.classList.remove(ka, vo), (this.tip = r), this.tip
    }
    setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), B0)
    }
    _sanitizeAndSetContent(t, r, n) {
        const i = Be.findOne(n, t)
        if (!r && i) {
            i.remove()
            return
        }
        this.setElementContent(i, r)
    }
    setElementContent(t, r) {
        if (t !== null) {
            if (ns(r)) {
                ;(r = Ei(r)), this._config.html ? r.parentNode !== t && ((t.innerHTML = ""), t.append(r)) : (t.textContent = r.textContent)
                return
            }
            this._config.html
                ? (this._config.sanitize && (r = $0(r, this._config.allowList, this._config.sanitizeFn)), (t.innerHTML = r))
                : (t.textContent = r)
        }
    }
    getTitle() {
        const t = this._element.getAttribute("data-bs-original-title") || this._config.title
        return this._resolvePossibleFunction(t)
    }
    updateAttachment(t) {
        return t === "right" ? "end" : t === "left" ? "start" : t
    }
    _initializeOnDelegatedTarget(t, r) {
        return r || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
    }
    _getOffset() {
        const { offset: t } = this._config
        return typeof t == "string" ? t.split(",").map((r) => Number.parseInt(r, 10)) : typeof t == "function" ? (r) => t(r, this._element) : t
    }
    _resolvePossibleFunction(t) {
        return typeof t == "function" ? t.call(this._element) : t
    }
    _getPopperConfig(t) {
        const r = {
            placement: t,
            modifiers: [
                { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                { name: "offset", options: { offset: this._getOffset() } },
                { name: "preventOverflow", options: { boundary: this._config.boundary } },
                { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                { name: "onChange", enabled: !0, phase: "afterWrite", fn: (n) => this._handlePopperPlacementChange(n) },
            ],
            onFirstUpdate: (n) => {
                n.options.placement !== n.placement && this._handlePopperPlacementChange(n)
            },
        }
        return De(De({}, r), typeof this._config.popperConfig == "function" ? this._config.popperConfig(r) : this._config.popperConfig)
    }
    _addAttachmentClass(t) {
        this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
    }
    _getAttachment(t) {
        return Ex[t.toUpperCase()]
    }
    _setListeners() {
        this._config.trigger.split(" ").forEach((r) => {
            if (r === "click") re.on(this._element, this.constructor.Event.CLICK, this._config.selector, (n) => this.toggle(n))
            else if (r !== Cx) {
                const n = r === yo ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                    i = r === yo ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT
                re.on(this._element, n, this._config.selector, (s) => this._enter(s)),
                    re.on(this._element, i, this._config.selector, (s) => this._leave(s))
            }
        }),
            (this._hideModalHandler = () => {
                this._element && this.hide()
            }),
            re.on(this._element.closest(k0), O0, this._hideModalHandler),
            this._config.selector ? (this._config = ga(De({}, this._config), { trigger: "manual", selector: "" })) : this._fixTitle()
    }
    _fixTitle() {
        const t = this._element.getAttribute("title"),
            r = typeof this._element.getAttribute("data-bs-original-title")
        ;(t || r !== "string") &&
            (this._element.setAttribute("data-bs-original-title", t || ""),
            t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
    }
    _enter(t, r) {
        if (
            ((r = this._initializeOnDelegatedTarget(t, r)),
            t && (r._activeTrigger[t.type === "focusin" ? Vu : yo] = !0),
            r.getTipElement().classList.contains(vo) || r._hoverState === bo)
        ) {
            r._hoverState = bo
            return
        }
        if ((clearTimeout(r._timeout), (r._hoverState = bo), !r._config.delay || !r._config.delay.show)) {
            r.show()
            return
        }
        r._timeout = setTimeout(() => {
            r._hoverState === bo && r.show()
        }, r._config.delay.show)
    }
    _leave(t, r) {
        if (
            ((r = this._initializeOnDelegatedTarget(t, r)),
            t && (r._activeTrigger[t.type === "focusout" ? Vu : yo] = r._element.contains(t.relatedTarget)),
            !r._isWithActiveTrigger())
        ) {
            if ((clearTimeout(r._timeout), (r._hoverState = Fu), !r._config.delay || !r._config.delay.hide)) {
                r.hide()
                return
            }
            r._timeout = setTimeout(() => {
                r._hoverState === Fu && r.hide()
            }, r._config.delay.hide)
        }
    }
    _isWithActiveTrigger() {
        for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0
        return !1
    }
    _getConfig(t) {
        const r = Yt.getDataAttributes(this._element)
        return (
            Object.keys(r).forEach((n) => {
                _x.has(n) && delete r[n]
            }),
            (t = De(De(De({}, this.constructor.Default), r), typeof t == "object" && t ? t : {})),
            (t.container = t.container === !1 ? document.body : Ei(t.container)),
            typeof t.delay == "number" && (t.delay = { show: t.delay, hide: t.delay }),
            typeof t.title == "number" && (t.title = t.title.toString()),
            typeof t.content == "number" && (t.content = t.content.toString()),
            xn(N0, t, this.constructor.DefaultType),
            t.sanitize && (t.template = $0(t.template, t.allowList, t.sanitizeFn)),
            t
        )
    }
    _getDelegateConfig() {
        const t = {}
        for (const r in this._config) this.constructor.Default[r] !== this._config[r] && (t[r] = this._config[r])
        return t
    }
    _cleanTipClass() {
        const t = this.getTipElement(),
            r = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
            n = t.getAttribute("class").match(r)
        n !== null && n.length > 0 && n.map((i) => i.trim()).forEach((i) => t.classList.remove(i))
    }
    _getBasicClassPrefix() {
        return yx
    }
    _handlePopperPlacementChange(t) {
        const { state: r } = t
        !r || ((this.tip = r.elements.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(r.placement)))
    }
    _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null))
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = Mn.getOrCreateInstance(this, t)
            if (typeof t == "string") {
                if (typeof r[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                r[t]()
            }
        })
    }
}
Rr(Mn)
const $x = "popover",
    Nx = "bs.popover",
    Zr = `.${Nx}`,
    Bx = "bs-popover",
    kx = ga(De({}, Mn.Default), {
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Ox = ga(De({}, Mn.DefaultType), { content: "(string|element|function)" }),
    Ix = {
        HIDE: `hide${Zr}`,
        HIDDEN: `hidden${Zr}`,
        SHOW: `show${Zr}`,
        SHOWN: `shown${Zr}`,
        INSERTED: `inserted${Zr}`,
        CLICK: `click${Zr}`,
        FOCUSIN: `focusin${Zr}`,
        FOCUSOUT: `focusout${Zr}`,
        MOUSEENTER: `mouseenter${Zr}`,
        MOUSELEAVE: `mouseleave${Zr}`,
    },
    Px = ".popover-header",
    Mx = ".popover-body"
class zs extends Mn {
    static get Default() {
        return kx
    }
    static get NAME() {
        return $x
    }
    static get Event() {
        return Ix
    }
    static get DefaultType() {
        return Ox
    }
    isWithContent() {
        return this.getTitle() || this._getContent()
    }
    setContent(t) {
        this._sanitizeAndSetContent(t, this.getTitle(), Px), this._sanitizeAndSetContent(t, this._getContent(), Mx)
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content)
    }
    _getBasicClassPrefix() {
        return Bx
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = zs.getOrCreateInstance(this, t)
            if (typeof t == "string") {
                if (typeof r[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                r[t]()
            }
        })
    }
}
Rr(zs)
const I0 = "scrollspy",
    Rx = "bs.scrollspy",
    Hl = `.${Rx}`,
    Lx = ".data-api",
    P0 = { offset: 10, method: "auto", target: "" },
    Dx = { offset: "number", method: "string", target: "(string|element)" },
    Fx = `activate${Hl}`,
    Vx = `scroll${Hl}`,
    qx = `load${Hl}${Lx}`,
    Av = "dropdown-item",
    ps = "active",
    Hx = '[data-bs-spy="scroll"]',
    Ux = ".nav, .list-group",
    Rf = ".nav-link",
    zx = ".nav-item",
    Sv = ".list-group-item",
    qu = `${Rf}, ${Sv}, .${Av}`,
    jx = ".dropdown",
    Wx = ".dropdown-toggle",
    Kx = "offset",
    M0 = "position"
class Ul extends Kr {
    constructor(t, r) {
        super(t)
        ;(this._scrollElement = this._element.tagName === "BODY" ? window : this._element),
            (this._config = this._getConfig(r)),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            re.on(this._scrollElement, Vx, () => this._process()),
            this.refresh(),
            this._process()
    }
    static get Default() {
        return P0
    }
    static get NAME() {
        return I0
    }
    refresh() {
        const t = this._scrollElement === this._scrollElement.window ? Kx : M0,
            r = this._config.method === "auto" ? t : this._config.method,
            n = r === M0 ? this._getScrollTop() : 0
        ;(this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            Be.find(qu, this._config.target)
                .map((s) => {
                    const o = Jc(s),
                        a = o ? Be.findOne(o) : null
                    if (a) {
                        const l = a.getBoundingClientRect()
                        if (l.width || l.height) return [Yt[r](a).top + n, o]
                    }
                    return null
                })
                .filter((s) => s)
                .sort((s, o) => s[0] - o[0])
                .forEach((s) => {
                    this._offsets.push(s[0]), this._targets.push(s[1])
                })
    }
    dispose() {
        re.off(this._scrollElement, Hl), super.dispose()
    }
    _getConfig(t) {
        return (
            (t = De(De(De({}, P0), Yt.getDataAttributes(this._element)), typeof t == "object" && t ? t : {})),
            (t.target = Ei(t.target) || document.documentElement),
            xn(I0, t, Dx),
            t
        )
    }
    _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }
    _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }
    _process() {
        const t = this._getScrollTop() + this._config.offset,
            r = this._getScrollHeight(),
            n = this._config.offset + r - this._getOffsetHeight()
        if ((this._scrollHeight !== r && this.refresh(), t >= n)) {
            const i = this._targets[this._targets.length - 1]
            this._activeTarget !== i && this._activate(i)
            return
        }
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
            ;(this._activeTarget = null), this._clear()
            return
        }
        for (let i = this._offsets.length; i--; )
            this._activeTarget !== this._targets[i] &&
                t >= this._offsets[i] &&
                (typeof this._offsets[i + 1] == "undefined" || t < this._offsets[i + 1]) &&
                this._activate(this._targets[i])
    }
    _activate(t) {
        ;(this._activeTarget = t), this._clear()
        const r = qu.split(",").map((i) => `${i}[data-bs-target="${t}"],${i}[href="${t}"]`),
            n = Be.findOne(r.join(","), this._config.target)
        n.classList.add(ps),
            n.classList.contains(Av)
                ? Be.findOne(Wx, n.closest(jx)).classList.add(ps)
                : Be.parents(n, Ux).forEach((i) => {
                      Be.prev(i, `${Rf}, ${Sv}`).forEach((s) => s.classList.add(ps)),
                          Be.prev(i, zx).forEach((s) => {
                              Be.children(s, Rf).forEach((o) => o.classList.add(ps))
                          })
                  }),
            re.trigger(this._scrollElement, Fx, { relatedTarget: t })
    }
    _clear() {
        Be.find(qu, this._config.target)
            .filter((t) => t.classList.contains(ps))
            .forEach((t) => t.classList.remove(ps))
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = Ul.getOrCreateInstance(this, t)
            if (typeof t == "string") {
                if (typeof r[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                r[t]()
            }
        })
    }
}
re.on(window, qx, () => {
    Be.find(Hx).forEach((e) => new Ul(e))
})
Rr(Ul)
const Gx = "tab",
    Yx = "bs.tab",
    ha = `.${Yx}`,
    Jx = ".data-api",
    Xx = `hide${ha}`,
    Zx = `hidden${ha}`,
    Qx = `show${ha}`,
    eC = `shown${ha}`,
    tC = `click${ha}${Jx}`,
    rC = "dropdown-menu",
    _o = "active",
    R0 = "fade",
    L0 = "show",
    nC = ".dropdown",
    iC = ".nav, .list-group",
    D0 = ".active",
    F0 = ":scope > li > .active",
    sC = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    oC = ".dropdown-toggle",
    aC = ":scope > .dropdown-menu .active"
class zl extends Kr {
    static get NAME() {
        return Gx
    }
    show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(_o)) return
        let t
        const r = wi(this._element),
            n = this._element.closest(iC)
        if (n) {
            const a = n.nodeName === "UL" || n.nodeName === "OL" ? F0 : D0
            ;(t = Be.find(a, n)), (t = t[t.length - 1])
        }
        const i = t ? re.trigger(t, Xx, { relatedTarget: this._element }) : null
        if (re.trigger(this._element, Qx, { relatedTarget: t }).defaultPrevented || (i !== null && i.defaultPrevented)) return
        this._activate(this._element, n)
        const o = () => {
            re.trigger(t, Zx, { relatedTarget: this._element }), re.trigger(this._element, eC, { relatedTarget: t })
        }
        r ? this._activate(r, r.parentNode, o) : o()
    }
    _activate(t, r, n) {
        const s = (r && (r.nodeName === "UL" || r.nodeName === "OL") ? Be.find(F0, r) : Be.children(r, D0))[0],
            o = n && s && s.classList.contains(R0),
            a = () => this._transitionComplete(t, s, n)
        s && o ? (s.classList.remove(L0), this._queueCallback(a, t, !0)) : a()
    }
    _transitionComplete(t, r, n) {
        if (r) {
            r.classList.remove(_o)
            const s = Be.findOne(aC, r.parentNode)
            s && s.classList.remove(_o), r.getAttribute("role") === "tab" && r.setAttribute("aria-selected", !1)
        }
        t.classList.add(_o),
            t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", !0),
            so(t),
            t.classList.contains(R0) && t.classList.add(L0)
        let i = t.parentNode
        if ((i && i.nodeName === "LI" && (i = i.parentNode), i && i.classList.contains(rC))) {
            const s = t.closest(nC)
            s && Be.find(oC, s).forEach((o) => o.classList.add(_o)), t.setAttribute("aria-expanded", !0)
        }
        n && n()
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = zl.getOrCreateInstance(this)
            if (typeof t == "string") {
                if (typeof r[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                r[t]()
            }
        })
    }
}
re.on(document, tC, sC, function (e) {
    if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Xi(this))) return
    zl.getOrCreateInstance(this).show()
})
Rr(zl)
const V0 = "toast",
    lC = "bs.toast",
    xi = `.${lC}`,
    uC = `mouseover${xi}`,
    fC = `mouseout${xi}`,
    cC = `focusin${xi}`,
    dC = `focusout${xi}`,
    hC = `hide${xi}`,
    pC = `hidden${xi}`,
    gC = `show${xi}`,
    mC = `shown${xi}`,
    vC = "fade",
    q0 = "hide",
    wo = "show",
    Oa = "showing",
    bC = { animation: "boolean", autohide: "boolean", delay: "number" },
    H0 = { animation: !0, autohide: !0, delay: 5e3 }
class jl extends Kr {
    constructor(t, r) {
        super(t)
        ;(this._config = this._getConfig(r)),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners()
    }
    static get DefaultType() {
        return bC
    }
    static get Default() {
        return H0
    }
    static get NAME() {
        return V0
    }
    show() {
        if (re.trigger(this._element, gC).defaultPrevented) return
        this._clearTimeout(), this._config.animation && this._element.classList.add(vC)
        const r = () => {
            this._element.classList.remove(Oa), re.trigger(this._element, mC), this._maybeScheduleHide()
        }
        this._element.classList.remove(q0),
            so(this._element),
            this._element.classList.add(wo),
            this._element.classList.add(Oa),
            this._queueCallback(r, this._element, this._config.animation)
    }
    hide() {
        if (!this._element.classList.contains(wo) || re.trigger(this._element, hC).defaultPrevented) return
        const r = () => {
            this._element.classList.add(q0),
                this._element.classList.remove(Oa),
                this._element.classList.remove(wo),
                re.trigger(this._element, pC)
        }
        this._element.classList.add(Oa), this._queueCallback(r, this._element, this._config.animation)
    }
    dispose() {
        this._clearTimeout(), this._element.classList.contains(wo) && this._element.classList.remove(wo), super.dispose()
    }
    _getConfig(t) {
        return (
            (t = De(De(De({}, H0), Yt.getDataAttributes(this._element)), typeof t == "object" && t ? t : {})),
            xn(V0, t, this.constructor.DefaultType),
            t
        )
    }
    _maybeScheduleHide() {
        !this._config.autohide ||
            this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay))
    }
    _onInteraction(t, r) {
        switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = r
                break
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = r
                break
        }
        if (r) {
            this._clearTimeout()
            return
        }
        const n = t.relatedTarget
        this._element === n || this._element.contains(n) || this._maybeScheduleHide()
    }
    _setListeners() {
        re.on(this._element, uC, (t) => this._onInteraction(t, !0)),
            re.on(this._element, fC, (t) => this._onInteraction(t, !1)),
            re.on(this._element, cC, (t) => this._onInteraction(t, !0)),
            re.on(this._element, dC, (t) => this._onInteraction(t, !1))
    }
    _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null)
    }
    static jQueryInterface(t) {
        return this.each(function () {
            const r = jl.getOrCreateInstance(this, t)
            if (typeof t == "string") {
                if (typeof r[t] == "undefined") throw new TypeError(`No method named "${t}"`)
                r[t](this)
            }
        })
    }
}
Vl(jl)
Rr(jl)
var yC = Object.defineProperty,
    _C = Object.defineProperties,
    wC = Object.getOwnPropertyDescriptors,
    U0 = Object.getOwnPropertySymbols,
    EC = Object.prototype.hasOwnProperty,
    AC = Object.prototype.propertyIsEnumerable,
    z0 = (e, t, r) => (t in e ? yC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    Me = (e, t) => {
        for (var r in t || (t = {})) EC.call(t, r) && z0(e, r, t[r])
        if (U0) for (var r of U0(t)) AC.call(t, r) && z0(e, r, t[r])
        return e
    },
    Bt = (e, t) => _C(e, wC(t))
function In(e = "") {
    return `__BVID__${Math.random().toString().substr(2, 6)}___BV_${e}__`
}
function nr(e, t) {
    return P(() => e || In(t))
}
var ge = (e, t) => {
    const r = e.__vccOpts || e
    for (const [n, i] of t) r[n] = i
    return r
}
const Tv = Symbol(),
    SC = de({
        name: "BAccordion",
        props: { flush: { type: Boolean, default: !1 }, free: { type: Boolean, default: !1 }, id: { type: String, default: void 0 } },
        setup(e) {
            const t = nr(e.id, "accordion"),
                r = P(() => ({ "accordion-flush": e.flush }))
            return e.free || dn(Tv, `${t.value}`), { computedId: t, classes: r }
        },
    }),
    TC = ["id"]
function xC(e, t, r, n, i, s) {
    return D(), se("div", { id: e.computedId, class: ve(["accordion", e.classes]) }, [ue(e.$slots, "default")], 10, TC)
}
var CC = ge(SC, [["render", xC]])
function Ct(e, t, r) {
    zt(() => {
        var n
        ;(n = e == null ? void 0 : e.value) == null || n.addEventListener(t, r)
    }),
        Al(() => {
            var n
            ;(n = e == null ? void 0 : e.value) == null || n.removeEventListener(t, r)
        })
}
const $C = de({
    name: "BCollapse",
    props: {
        accordion: { type: String, required: !1 },
        id: { type: String, default: In() },
        modelValue: { type: Boolean, default: !1 },
        tag: { type: String, default: "div" },
        toggle: { type: Boolean, default: !1 },
        visible: { type: Boolean, default: !1 },
    },
    emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
    setup(e, { emit: t }) {
        const r = Ve(),
            n = Ve(),
            i = P(() => ({ show: e.modelValue })),
            s = () => t("update:modelValue", !1)
        return (
            Ct(r, "show.bs.collapse", () => {
                t("show"), t("update:modelValue", !0)
            }),
            Ct(r, "hide.bs.collapse", () => {
                t("hide"), t("update:modelValue", !1)
            }),
            Ct(r, "shown.bs.collapse", () => t("shown")),
            Ct(r, "hidden.bs.collapse", () => t("hidden")),
            zt(() => {
                var o
                ;(n.value = new Zi(r.value, { parent: e.accordion ? `#${e.accordion}` : void 0, toggle: e.toggle })),
                    (e.visible || e.modelValue) && (t("update:modelValue", !0), (o = n.value) == null || o.show())
            }),
            Tt(
                () => e.modelValue,
                (o) => {
                    var a, l
                    o ? (a = n.value) == null || a.show() : (l = n.value) == null || l.hide()
                }
            ),
            Tt(
                () => e.visible,
                (o) => {
                    var a, l
                    o
                        ? (t("update:modelValue", !!o), (a = n.value) == null || a.show())
                        : (t("update:modelValue", !!o), (l = n.value) == null || l.hide())
                }
            ),
            { element: r, classes: i, close: s }
        )
    },
})
function NC(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { id: e.id, ref: "element", class: ve(["collapse", e.classes]), "data-bs-parent": e.accordion || null },
            { default: Te(() => [ue(e.$slots, "default", { visible: e.modelValue, close: e.close })]), _: 3 },
            8,
            ["id", "class", "data-bs-parent"]
        )
    )
}
var xv = ge($C, [["render", NC]])
const BC = /_/g,
    kC = /([a-z])([A-Z])/g,
    OC = /(\s|^)(\w)/,
    za = /\s+/,
    IC = /^#/,
    PC = /^#[A-Za-z]+[\w\-:.]*$/,
    MC = (e, t) => e.indexOf(t) !== -1,
    RC = (...e) => Array.from(...e),
    LC = (...e) => Array.prototype.concat.apply([], e),
    oo = typeof window != "undefined",
    Cv = typeof document != "undefined",
    DC = typeof navigator != "undefined",
    FC = oo && Cv && DC,
    kn = oo ? window : {},
    $v = Cv ? document : {},
    Nv = oo ? kn.Element : class extends Object {},
    VC = oo ? kn.HTMLElement : class extends Nv {}
oo ? kn.SVGElement : class extends Nv {}
oo ? kn.File : class extends Object {}
const qC = /^[0-9]*\.?[0-9]+$/,
    Hu = (e) => Ov(e) === "boolean",
    HC = (e) => e !== null && typeof e == "object",
    js = (e) => typeof e == "string",
    UC = (e) => e === void 0,
    zC = (e) => e === null,
    Bv = (e) => UC(e) || zC(e),
    kv = (e) => qC.test(String(e)),
    jC = (e) => typeof e == "number",
    Ov = (e) => typeof e,
    Iv = (e) => Ov(e) === "function",
    Pv = (e) => Object.prototype.toString.call(e) === "[object Object]",
    Mv = (e) => Array.isArray(e),
    Lf = (e, t = 2) => (Bv(e) ? "" : Mv(e) || (Pv(e) && e.toString === Object.prototype.toString) ? JSON.stringify(e, null, t) : String(e)),
    j0 = (e) =>
        e
            .replace(BC, " ")
            .replace(kC, (t, r, n) => `${r} ${n}`)
            .replace(OC, (t, r, n) => r + n.toUpperCase()),
    WC = (e) => ((e = js(e) ? e.trim() : String(e)), e.charAt(0).toUpperCase() + e.slice(1)),
    Ci = (e) => !!(e && e.nodeType === Node.ELEMENT_NODE),
    KC = (e) => (Ci(e) ? e.getBoundingClientRect() : null),
    GC = (e = []) => {
        const { activeElement: t } = document
        return t && !e.some((r) => r === t) ? t : null
    },
    YC = (e) => Ci(e) && e === GC(),
    JC = (e, t = {}) => {
        try {
            e.focus(t)
        } catch (r) {
            console.error(r)
        }
        return YC(e)
    },
    XC = (e, t) => (t && Ci(e) && e.getAttribute(t)) || null,
    ZC = (e) => {
        if (XC(e, "display") === "none") return !1
        const t = KC(e)
        return !!(t && t.height > 0 && t.width > 0)
    },
    W0 = (e, t) => !e || e(t).filter((r) => r.type !== fr).length < 1,
    QC = (e, t) => (Ci(t) ? t : $v).querySelector(e) || null,
    e$ = (e, t) => RC((Ci(t) ? t : $v).querySelectorAll(e)),
    Rv = (e, t) => (t && Ci(e) ? e.getAttribute(t) : null),
    t$ = (e, t, r) => {
        t && Ci(e) && e.setAttribute(t, r)
    },
    r$ = (e, t) => {
        t && Ci(e) && e.removeAttribute(t)
    },
    n$ = (e, t) => Lf(e).toLowerCase() === Lf(t).toLowerCase(),
    Ia =
        kn.requestAnimationFrame ||
        kn.webkitRequestAnimationFrame ||
        kn.mozRequestAnimationFrame ||
        kn.msRequestAnimationFrame ||
        kn.oRequestAnimationFrame ||
        ((e) => setTimeout(e, 16))
function i$(e) {
    if (e.classList.contains("offcanvas")) return "offcanvas"
    if (e.classList.contains("collapse")) return "collapse"
    throw Error("Couldn't resolve toggle type")
}
const s$ = (e, t) => {
        const { modifiers: r, arg: n, value: i } = e,
            s = Object.keys(r || {}),
            o = js(i) ? i.split(za) : i
        if (n$(t.tagName, "a")) {
            const a = Rv(t, "href") || ""
            PC.test(a) && s.push(a.replace(IC, ""))
        }
        return LC(n, o).forEach((a) => js(a) && s.push(a)), s.filter((a, l, u) => a && u.indexOf(a) === l)
    },
    Lv = {
        mounted(e, t) {
            const r = s$(t, e),
                n = []
            let i = "data-bs-target"
            e.tagName === "a" && (i = "href")
            for (let s = 0; s < r.length; s++) {
                const o = r[s],
                    a = document.getElementById(o)
                a && (e.setAttribute("data-bs-toggle", i$(a)), n.push(`#${o}`))
            }
            n.length > 0 && e.setAttribute(i, n.join(","))
        },
    },
    o$ = de({
        name: "BAccordionItem",
        components: { BCollapse: xv },
        directives: { BToggle: Lv },
        props: { title: { type: String }, id: { type: String }, visible: { type: Boolean, default: !1 } },
        setup(e) {
            const t = nr(e.id, "accordion_item")
            return { parent: Jt(Tv, ""), computedId: t }
        },
    }),
    a$ = { class: "accordion-item" },
    l$ = ["id"],
    u$ = ["aria-expanded", "aria-controls"],
    f$ = { class: "accordion-body" }
function c$(e, t, r, n, i, s) {
    const o = jt("b-collapse"),
        a = f1("b-toggle")
    return (
        D(),
        se("div", a$, [
            qe(
                "h2",
                { id: `${e.computedId}heading`, class: "accordion-header" },
                [
                    Qy(
                        (D(),
                        se(
                            "button",
                            {
                                class: ve(["accordion-button", { collapsed: !e.visible }]),
                                type: "button",
                                "aria-expanded": e.visible ? "true" : "false",
                                "aria-controls": e.computedId,
                            },
                            [ue(e.$slots, "title", {}, () => [Ot(tt(e.title), 1)])],
                            10,
                            u$
                        )),
                        [[a, void 0, e.computedId]]
                    ),
                ],
                8,
                l$
            ),
            Rt(
                o,
                {
                    id: e.computedId,
                    class: "accordion-collapse",
                    visible: e.visible,
                    accordion: e.parent,
                    "aria-labelledby": `heading${e.computedId}`,
                },
                { default: Te(() => [qe("div", f$, [ue(e.$slots, "default")])]), _: 3 },
                8,
                ["id", "visible", "accordion", "aria-labelledby"]
            ),
        ])
    )
}
var d$ = ge(o$, [["render", c$]])
const Ws = (e, t = NaN) => (Number.isInteger(e) ? e : t),
    h$ = (e, t = NaN) => {
        const r = parseInt(e, 10)
        return isNaN(r) ? t : r
    },
    Zc = (e, t = NaN) => {
        const r = parseFloat(e.toString())
        return isNaN(r) ? t : r
    },
    p$ = de({
        name: "BAlert",
        props: {
            dismissLabel: { type: String, default: "Close" },
            dismissible: { type: Boolean, default: !1 },
            fade: { type: Boolean, default: !1 },
            modelValue: { type: [Boolean, Number], default: !1 },
            show: { type: Boolean, default: !1 },
            variant: { type: String, default: "info" },
        },
        emits: ["dismissed", "dismiss-count-down", "update:modelValue"],
        setup(e, { emit: t }) {
            const r = Ve(),
                n = Ve(),
                i = P(() => ({ [`alert-${e.variant}`]: e.variant, show: e.modelValue, "alert-dismissible": e.dismissible, fade: e.modelValue }))
            let s = 0
            const o = (v) => {
                    if (typeof v == "boolean") return 0
                    const b = Ws(v, 0)
                    return b > 0 ? b : 0
                },
                a = () => {
                    s !== void 0 && (clearTimeout(s), (s = void 0))
                },
                l = Ve(o(e.modelValue)),
                u = P(() => e.modelValue || e.show)
            Al(() => {
                var v
                a(), (v = n.value) == null || v.dispose(), (n.value = void 0)
            })
            const c = P(() => (e.modelValue === !0 ? !0 : e.modelValue === !1 || Ws(e.modelValue, 0) < 1 ? !1 : !!e.modelValue)),
                d = () => {
                    ;(l.value = o(e.modelValue)), (c.value || e.show) && !n.value && (n.value = new ca(r.value))
                },
                h = () => {
                    typeof e.modelValue == "boolean" ? t("update:modelValue", !1) : t("update:modelValue", 0), t("dismissed")
                }
            return (
                Tt(() => e.modelValue, d),
                Tt(() => e.show, d),
                Tt(l, (v) => {
                    a(),
                        typeof e.modelValue != "boolean" &&
                            (t("dismiss-count-down", v),
                            v === 0 && e.modelValue > 0 && t("dismissed"),
                            e.modelValue !== v && t("update:modelValue", v),
                            v > 0 &&
                                (s = setTimeout(() => {
                                    l.value--
                                }, 1e3)))
                }),
                { dismissClicked: h, isAlertVisible: u, element: r, classes: i }
            )
        },
    }),
    g$ = ["aria-label"]
function m$(e, t, r, n, i, s) {
    return e.isAlertVisible
        ? (D(),
          se(
              "div",
              { key: 0, ref: "element", class: ve(["alert", e.classes]), role: "alert" },
              [
                  ue(e.$slots, "default"),
                  e.dismissible
                      ? (D(),
                        se(
                            "button",
                            {
                                key: 0,
                                type: "button",
                                class: "btn-close",
                                "data-bs-dismiss": "alert",
                                "aria-label": e.dismissLabel,
                                onClick: t[0] || (t[0] = (...o) => e.dismissClicked && e.dismissClicked(...o)),
                            },
                            null,
                            8,
                            g$
                        ))
                      : Ie("", !0),
              ],
              2
          ))
        : Ie("", !0)
}
var v$ = ge(p$, [["render", m$]])
const b$ = Math.min,
    Df = Math.max,
    Dv = Symbol(),
    y$ = de({
        name: "BAvatar",
        props: {
            overlap: { type: [Number, String], default: 0.3 },
            rounded: { type: [Boolean, String], default: !1 },
            size: { type: String, required: !1 },
            square: { type: Boolean, default: !1 },
            tag: { type: String, default: "div" },
            variant: { type: String, required: !1 },
        },
        setup(e) {
            const t = P(() => Ff(e.size)),
                r = (s) => (js(s) && kv(s) ? Zc(s, 0) : s || 0),
                n = P(() => b$(Df(r(e.overlap), 0), 1) / 2),
                i = P(() => {
                    let { value: s } = t
                    return (s = s ? `calc(${s} * ${n.value})` : null), s ? { paddingLeft: s, paddingRight: s } : {}
                })
            return dn(Dv, { overlapScale: n, size: e.size, square: e.square, rounded: e.rounded, variant: e.variant }), { paddingStyle: i }
        },
    })
function _$(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { class: "b-avatar-group", role: "group" },
            { default: Te(() => [qe("div", { class: "b-avatar-group-inner", style: Ln(e.paddingStyle) }, [ue(e.$slots, "default")], 4)]), _: 3 }
        )
    )
}
var w$ = ge(y$, [["render", _$]])
const Ff = (e) => {
        const t = js(e) && kv(e) ? Zc(e, 0) : e
        return jC(t) ? `${t}px` : t || null
    },
    E$ = de({
        name: "BAvatar",
        props: {
            alt: { type: String, default: "avatar" },
            ariaLabel: { type: String, required: !1 },
            badge: { type: [Boolean, String], default: !1 },
            badgeLeft: { type: Boolean, default: !1 },
            badgeOffset: { type: String, required: !1 },
            badgeTop: { type: Boolean, default: !1 },
            badgeVariant: { type: String, default: "primary" },
            button: { type: Boolean, default: !1 },
            buttonType: { type: String, default: "button" },
            disabled: { type: Boolean, default: !1 },
            icon: { type: String, required: !1 },
            rounded: { type: [Boolean, String], default: "circle" },
            size: { type: [String, Number], required: !1 },
            square: { type: Boolean, default: !1 },
            src: { type: String, required: !1 },
            text: { type: String, required: !1 },
            textVariant: { type: String, default: void 0 },
            variant: { type: String, default: "secondary" },
        },
        emits: ["click", "img-error"],
        setup(e, { emit: t, slots: r }) {
            const n = ["sm", null, "lg"],
                i = 0.4,
                s = i * 0.7,
                o = Jt(Dv, null),
                a = (f) => {
                    const g = f
                    return g === "light" || g === "warning" ? "dark" : "light"
                },
                l = P(() => !W0(r.default)),
                u = P(() => !W0(r.badge)),
                c = P(() => e.badge || e.badge === "" || u.value),
                d = P(() => ((o == null ? void 0 : o.size) ? o.size : Ff(e.size))),
                h = P(() => ((o == null ? void 0 : o.variant) ? o.variant : e.variant)),
                v = P(() => ((o == null ? void 0 : o.rounded) ? o.rounded : e.rounded)),
                b = P(() => ({ "aria-label": e.ariaLabel || null, disabled: e.disabled || null })),
                _ = P(() => ({ [`bg-${e.badgeVariant}`]: e.badgeVariant })),
                C = P(() => (e.badge === !0 ? "" : e.badge)),
                B = P(() => `text-${a(e.badgeVariant)}`),
                O = P(() => ({
                    [`b-avatar-${e.size}`]: e.size && n.indexOf(Ff(e.size)) !== -1,
                    [`bg-${h.value}`]: h.value,
                    badge: !e.button && h.value && l.value,
                    rounded: v.value === "" || v.value === !0,
                    ["rounded-circle"]: !e.square && v.value === "circle",
                    ["rounded-0"]: e.square || v.value === "0",
                    ["rounded-1"]: !e.square && v.value === "sm",
                    ["rounded-3"]: !e.square && v.value === "lg",
                    ["rounded-top"]: !e.square && v.value === "top",
                    ["rounded-bottom"]: !e.square && v.value === "bottom",
                    ["rounded-start"]: !e.square && v.value === "left",
                    ["rounded-end"]: !e.square && v.value === "right",
                    btn: e.button,
                    [`btn-${h.value}`]: e.button ? h.value : null,
                })),
                L = P(() => `text-${e.textVariant || a(h.value)}`),
                V = P(() => {
                    if (e.icon) return e.icon
                    if (!e.text && !e.src) return "person-fill"
                }),
                H = P(() => {
                    const f = e.badgeOffset || "0px"
                    return {
                        fontSize: (n.indexOf(d.value || null) === -1 ? `calc(${d.value} * ${s})` : "") || "",
                        top: e.badgeTop ? f : "",
                        bottom: e.badgeTop ? "" : f,
                        left: e.badgeLeft ? f : "",
                        right: e.badgeLeft ? "" : f,
                    }
                }),
                Q = P(() => {
                    const f = n.indexOf(d.value || null) === -1 ? `calc(${d.value} * ${i})` : null
                    return f ? { fontSize: f } : {}
                }),
                K = P(() => {
                    var f
                    const g = ((f = o == null ? void 0 : o.overlapScale) == null ? void 0 : f.value) || 0,
                        y = d.value && g ? `calc(${d.value} * -${g})` : null
                    return y ? { marginLeft: y, marginRight: y } : {}
                }),
                ae = P(() => (e.button ? e.buttonType : "span")),
                z = P(() => Bt(Me({}, K.value), { width: d.value, height: d.value }))
            return {
                attrs: b,
                badgeClasses: _,
                badgeStyle: H,
                badgeText: C,
                badgeTextClasses: B,
                classes: O,
                clicked: function (f) {
                    !e.disabled && e.button && t("click", f)
                },
                fontStyle: Q,
                hasBadgeSlot: u,
                hasDefaultSlot: l,
                iconName: V,
                onImgError: (f) => t("img-error", f),
                showBadge: c,
                tag: ae,
                tagStyle: z,
                textClasses: L,
            }
        },
    }),
    A$ = { key: 0, class: "b-avatar-custom" },
    S$ = { key: 1, class: "b-avatar-img" },
    T$ = ["src", "alt"]
function x$(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            Ge({ class: ["b-avatar", e.classes], style: e.tagStyle }, e.attrs, { onClick: e.clicked }),
            {
                default: Te(() => [
                    e.hasDefaultSlot
                        ? (D(), se("span", A$, [ue(e.$slots, "default")]))
                        : e.src
                        ? (D(),
                          se("span", S$, [
                              qe(
                                  "img",
                                  { src: e.src, alt: e.alt, onError: t[0] || (t[0] = (...o) => e.onImgError && e.onImgError(...o)) },
                                  null,
                                  40,
                                  T$
                              ),
                          ]))
                        : e.text
                        ? (D(), se("span", { key: 2, class: ve(["b-avatar-text", e.textClasses]), style: Ln(e.fontStyle) }, tt(e.text), 7))
                        : Ie("", !0),
                    e.showBadge
                        ? (D(),
                          se(
                              "span",
                              { key: 3, class: ve(["b-avatar-badge", e.badgeClasses]), style: Ln(e.badgeStyle) },
                              [
                                  e.hasBadgeSlot
                                      ? ue(e.$slots, "badge", { key: 0 })
                                      : (D(), se("span", { key: 1, class: ve(e.badgeTextClasses) }, tt(e.badgeText), 3)),
                              ],
                              6
                          ))
                        : Ie("", !0),
                ]),
                _: 3,
            },
            16,
            ["class", "style", "onClick"]
        )
    )
}
var C$ = ge(E$, [["render", x$]])
const $$ = (e, ...t) => Object.assign(e, ...t),
    N$ = (e, t) => Object.defineProperties(e, t),
    B$ = (e, t, r) => Object.defineProperty(e, t, r),
    Fv = (e, t) =>
        Object.keys(e)
            .filter((r) => t.indexOf(r) === -1)
            .reduce((r, n) => Bt(Me({}, r), { [n]: e[n] }), {}),
    Hi = () => ({ enumerable: !0, configurable: !1, writable: !1 }),
    pa = {
        active: { type: Boolean, default: !1 },
        activeClass: { type: String, default: "router-link-active" },
        append: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        event: { type: [String, Array], default: "click" },
        exact: { type: Boolean, default: !1 },
        exactActiveClass: { type: String, default: "router-link-exact-active" },
        href: { type: String },
        rel: { type: String, default: null },
        replace: { type: Boolean, default: !1 },
        routerComponentName: { type: String, default: "router-link" },
        routerTag: { type: String, default: "a" },
        target: { type: String, default: "_self" },
        to: { type: [String, Object], default: null },
    },
    k$ = de({
        name: "BLink",
        props: pa,
        emits: ["click"],
        setup(e, { emit: t, attrs: r }) {
            const n = Tl(),
                i = Ve(null),
                s = P(() => {
                    const d = e.routerComponentName
                        .split("-")
                        .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
                        .join("")
                    return !((n == null ? void 0 : n.appContext.app.component(d)) !== void 0) || e.disabled || !e.to
                        ? "a"
                        : e.routerComponentName
                }),
                o = P(() => {
                    const d = "#"
                    if (e.href) return e.href
                    if (typeof e.to == "string") return e.to || d
                    const h = e.to
                    if (Object.prototype.toString.call(h) === "[object Object]" && (h.path || h.query || h.hash)) {
                        const v = h.path || "",
                            b = h.query
                                ? `?${Object.keys(h.query)
                                      .map((C) => `${C}=${h.query[C]}`)
                                      .join("=")}`
                                : "",
                            _ = !h.hash || h.hash.charAt(0) === "#" ? h.hash || "" : `#${h.hash}`
                        return `${v}${b}${_}` || d
                    }
                    return d
                }),
                a = () => {
                    e.disabled || i.value.focus()
                },
                l = () => {
                    e.disabled || i.value.blur()
                },
                u = function (d) {
                    if (e.disabled) {
                        d.preventDefault(), d.stopImmediatePropagation()
                        return
                    }
                    t("click", d)
                },
                c = P(() => ({
                    to: e.to,
                    href: o.value,
                    target: e.target,
                    rel: e.target === "_blank" && e.rel === null ? "noopener" : e.rel || null,
                    tabindex: e.disabled ? "-1" : typeof r.tabindex == "undefined" ? null : r.tabindex,
                    "aria-disabled": e.disabled ? "true" : null,
                }))
            return { tag: s, routerAttr: c, link: i, focus: a, blur: l, clicked: u }
        },
    })
function O$(e, t, r, n, i, s) {
    return e.tag === "router-link"
        ? (D(),
          be(
              ke(e.tag),
              Ge({ key: 0 }, e.routerAttr, { custom: "" }),
              {
                  default: Te(({ href: o, navigate: a, isActive: l, isExactActive: u }) => [
                      (D(),
                      be(
                          ke(e.routerTag),
                          Ge({ ref: "link", href: o, class: [l && e.activeClass, u && e.exactActiveClass] }, e.$attrs, { onClick: a }),
                          { default: Te(() => [ue(e.$slots, "default")]), _: 2 },
                          1040,
                          ["href", "class", "onClick"]
                      )),
                  ]),
                  _: 3,
              },
              16
          ))
        : (D(),
          be(
              ke(e.tag),
              Ge({ key: 1, ref: "link", class: { active: e.active, disabled: e.disabled } }, e.routerAttr, { onClick: e.clicked }),
              { default: Te(() => [ue(e.$slots, "default")]), _: 3 },
              16,
              ["class", "onClick"]
          ))
}
var I$ = ge(k$, [["render", O$]])
const Vf = (e) => !!(e.href || e.to),
    K0 = (e, t) => t + (e ? WC(e) : ""),
    P$ = (e, t, r = (n) => n) => (Mv(e) ? e.slice() : Object.keys(e)).reduce((n, i) => ((n[r(i)] = t[i]), n), {}),
    G0 = Fv(pa, ["event", "routerTag"]),
    M$ = de({
        name: "BBadge",
        props: Me(
            {
                pill: { type: Boolean, default: !1 },
                tag: { type: String, default: "span" },
                variant: { type: String, default: "secondary" },
                textIndicator: { type: Boolean, default: !1 },
                dotIndicator: { type: Boolean, default: !1 },
            },
            G0
        ),
        setup(e) {
            const t = P(() => Vf(e)),
                r = P(() => (t.value ? "b-link" : e.tag))
            return {
                classes: P(() => ({
                    [`bg-${e.variant}`]: e.variant,
                    active: e.active,
                    disabled: e.disabled,
                    "text-dark": ["warning", "info", "light"].includes(e.variant),
                    "rounded-pill": e.pill,
                    "position-absolute top-0 start-100 translate-middle": e.textIndicator || e.dotIndicator,
                    "p-2 border border-light rounded-circle": e.dotIndicator,
                    "text-decoration-none": t,
                })),
                props: t.value ? P$(G0, e) : {},
                computedTag: r,
            }
        },
    })
function R$(e, t, r, n, i, s) {
    return (
        D(),
        be(ke(e.computedTag), Ge({ class: ["badge", e.classes] }, e.props), { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 16, [
            "class",
        ])
    )
}
var L$ = ge(M$, [["render", R$]])
const Vv = Symbol(),
    qv = {
        items: yn([]),
        reset() {
            this.items = yn([])
        },
    }
function D$(e) {
    e.provide(Vv, qv)
}
function F$() {
    const e = Jt(Vv)
    return e || qv
}
const V$ = de({
    name: "BBreadcrumbItem",
    props: Bt(Me({}, Fv(pa, ["event", "routerTag"])), {
        active: { type: Boolean, default: !1 },
        ariaCurrent: { type: String, default: "location" },
        disabled: { type: Boolean, default: !1 },
        text: { type: String, required: !1 },
    }),
    emits: ["click"],
    setup(e, { emit: t }) {
        const r = P(() => ({ active: e.active })),
            n = P(() => (e.active ? "span" : "b-link")),
            i = P(() => ({ "aria-current": e.active ? e.ariaCurrent : void 0 }))
        return {
            liClasses: r,
            computedTag: n,
            computedAriaCurrent: i,
            clicked: function (o) {
                if (e.disabled || e.active) {
                    o.preventDefault(), o.stopImmediatePropagation()
                    return
                }
                e.disabled || t("click", o)
            },
        }
    },
})
function q$(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "li",
            { class: ve(["breadcrumb-item", e.liClasses]) },
            [
                (D(),
                be(
                    ke(e.computedTag),
                    Ge({ "aria-current": e.computedAriaCurrent }, e.$props, { onClick: e.clicked }),
                    { default: Te(() => [ue(e.$slots, "default")]), _: 3 },
                    16,
                    ["aria-current", "onClick"]
                )),
            ],
            2
        )
    )
}
var Hv = ge(V$, [["render", q$]])
const H$ = de({
        name: "BBreadcrumb",
        components: { BBreadcrumbItem: Hv },
        props: { items: { type: Array } },
        setup(e) {
            const t = F$()
            return {
                computedItems: P(() => {
                    const n = e.items || (t == null ? void 0 : t.items) || []
                    let i = !1
                    return n.map(
                        (o, a) => (
                            typeof o == "string" && ((o = { text: o }), a < n.length - 1 && (o.href = "#")),
                            o.active && (i = !0),
                            !o.active && !i && (o.active = a + 1 === n.length),
                            o
                        )
                    )
                }),
            }
        },
    }),
    U$ = { "aria-label": "breadcrumb" },
    z$ = { class: "breadcrumb" }
function j$(e, t, r, n, i, s) {
    const o = jt("b-breadcrumb-item")
    return (
        D(),
        se("nav", U$, [
            qe("ol", z$, [
                ue(e.$slots, "prepend"),
                (D(!0),
                se(
                    St,
                    null,
                    hn(e.computedItems, (a, l) => (D(), be(o, Ge({ key: l }, a), { default: Te(() => [Ot(tt(a.text), 1)]), _: 2 }, 1040))),
                    128
                )),
                ue(e.$slots, "default"),
                ue(e.$slots, "append"),
            ]),
        ])
    )
}
var W$ = ge(H$, [["render", j$]])
const K$ = de({
    name: "BButton",
    props: Bt(Me({}, pa), {
        active: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        href: { type: String, required: !1 },
        pill: { type: Boolean, default: !1 },
        pressed: { type: Boolean, default: null },
        rel: { type: String, default: null },
        size: { type: String },
        squared: { type: Boolean, default: !1 },
        tag: { type: String, default: "button" },
        target: { type: String, default: "_self" },
        type: { type: String, default: "button" },
        variant: { type: String, default: "secondary" },
    }),
    emits: ["click", "update:pressed"],
    setup(e, { emit: t }) {
        const r = e.pressed !== null,
            n = e.tag === "button" && !e.href && !e.to,
            i = !!(e.href || e.to),
            s = !!e.to,
            o = e.href ? !1 : !n,
            a = P(() => ({
                [`btn-${e.variant}`]: e.variant,
                [`btn-${e.size}`]: e.size,
                active: e.active || e.pressed,
                "rounded-pill": e.pill,
                "rounded-0": e.squared,
                disabled: e.disabled,
            })),
            l = P(() => ({
                "aria-disabled": o ? String(e.disabled) : null,
                "aria-pressed": r ? String(e.pressed) : null,
                autocomplete: r ? "off" : null,
                disabled: n ? e.disabled : null,
                href: e.href,
                rel: i ? e.rel : null,
                role: o || i ? "button" : null,
                target: i ? e.target : null,
                type: n ? e.type : null,
                to: n ? null : e.to,
                append: i ? e.append : null,
                activeClass: s ? e.activeClass : null,
                event: s ? e.event : null,
                exact: s ? e.exact : null,
                exactActiveClass: s ? e.exactActiveClass : null,
                replace: s ? e.replace : null,
                routerComponentName: s ? e.routerComponentName : null,
                routerTag: s ? e.routerTag : null,
            })),
            u = function (d) {
                if (e.disabled) {
                    d.preventDefault(), d.stopPropagation()
                    return
                }
                t("click", d), r && t("update:pressed", !e.pressed)
            },
            c = P(() => (s ? "b-link" : e.href ? "a" : e.tag))
        return { classes: a, attrs: l, computedTag: c, clicked: u }
    },
})
function G$(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.computedTag),
            Ge({ class: ["btn", e.classes] }, e.attrs, { onClick: e.clicked }),
            { default: Te(() => [ue(e.$slots, "default")]), _: 3 },
            16,
            ["class", "onClick"]
        )
    )
}
var Qc = ge(K$, [["render", G$]])
const Y$ = de({
    name: "BButtonGroup",
    props: {
        ariaRole: { type: String, default: "group" },
        size: { type: String, required: !1 },
        tag: { type: String, default: "div" },
        vertical: { type: Boolean, default: !1 },
    },
    setup(e) {
        return { classes: P(() => ({ "btn-group": !e.vertical, "btn-group-vertical": e.vertical, [`btn-group-${e.size}`]: e.size })) }
    },
})
function J$(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { class: ve(e.classes), role: "group", "aria-role": e.ariaRole },
            { default: Te(() => [ue(e.$slots, "default")]), _: 3 },
            8,
            ["class", "aria-role"]
        )
    )
}
var X$ = ge(Y$, [["render", J$]])
const Z$ = de({
        name: "BButtonToolbar",
        props: { ariaRole: { type: String, default: "group" }, justify: { type: Boolean, default: !1 } },
        setup(e) {
            return { classes: P(() => ({ "justify-content-between": e.justify })) }
        },
    }),
    Q$ = ["aria-label"]
function eN(e, t, r, n, i, s) {
    return (
        D(), se("div", { class: ve([e.classes, "btn-toolbar"]), role: "toolbar", "aria-label": e.ariaRole }, [ue(e.$slots, "default")], 10, Q$)
    )
}
var tN = ge(Z$, [["render", eN]])
const rN = de({
        name: "BCard",
        props: {
            align: { type: String, required: !1 },
            bgVariant: { type: String, required: !1 },
            bodyBgVariant: { type: String, required: !1 },
            bodyClass: { type: [Array, Object, String], required: !1 },
            bodyTag: { type: String, default: "div" },
            bodyTextVariant: { type: String, required: !1 },
            borderVariant: { type: String, required: !1 },
            footer: { type: String, required: !1 },
            footerBgVariant: { type: String, required: !1 },
            footerBorderVariant: { type: String, required: !1 },
            footerClass: { type: [Array, Object, String], required: !1 },
            footerHtml: { type: String, default: "" },
            footerTag: { type: String, default: "div" },
            footerTextVariant: { type: String, required: !1 },
            header: { type: String, required: !1 },
            headerBgVariant: { type: String, required: !1 },
            headerBorderVariant: { type: String, required: !1 },
            headerClass: { type: [Array, Object, String], required: !1 },
            headerHtml: { type: String, default: "" },
            headerTag: { type: String, default: "div" },
            headerTextVariant: { type: String, required: !1 },
            imgAlt: { type: String, required: !1 },
            imgBottom: { type: Boolean, default: !1 },
            imgEnd: { type: Boolean, default: !1 },
            imgHeight: { type: [String, Number], required: !1 },
            imgLeft: { type: Boolean, default: !1 },
            imgRight: { type: Boolean, default: !1 },
            imgSrc: { type: String, required: !1 },
            imgStart: { type: Boolean, default: !1 },
            imgTop: { type: Boolean, default: !1 },
            imgWidth: { type: [String, Number], required: !1 },
            noBody: { type: Boolean, default: !1 },
            overlay: { type: Boolean, default: !1 },
            subTitle: { type: String, required: !1 },
            subTitleTag: { type: String, default: "h6" },
            subTitleTextVariant: { type: String, default: "muted" },
            tag: { type: String, default: "div" },
            textVariant: { type: String, required: !1 },
            title: { type: String, required: !1 },
            titleTag: { type: String, default: "h4" },
        },
        setup(e) {
            const t = P(() => ({
                    [`text-${e.align}`]: e.align,
                    [`text-${e.textVariant}`]: e.textVariant,
                    [`bg-${e.bgVariant}`]: e.bgVariant,
                    [`border-${e.borderVariant}`]: e.borderVariant,
                    "flex-row": e.imgLeft || e.imgStart,
                    "flex-row-reverse": e.imgEnd || e.imgRight,
                })),
                r = P(() => ({
                    "card-body": !e.noBody,
                    "card-img-overlay": e.overlay,
                    [`bg-${e.bodyBgVariant}`]: e.bodyBgVariant,
                    [`text-${e.bodyTextVariant}`]: e.bodyTextVariant,
                })),
                n = P(() => ({
                    [`bg-${e.footerBgVariant}`]: e.footerBgVariant,
                    [`border-${e.footerBorderVariant}`]: e.footerBorderVariant,
                    [`text-${e.footerTextVariant}`]: e.footerTextVariant,
                })),
                i = P(() => ({
                    [`bg-${e.headerBgVariant}`]: e.headerBgVariant,
                    [`border-${e.headerBorderVariant}`]: e.headerBorderVariant,
                    [`text-${e.headerTextVariant}`]: e.headerTextVariant,
                })),
                s = P(() => ({
                    "card-img": !e.imgEnd && !e.imgRight && !e.imgStart && !e.imgLeft && !e.imgTop && !e.imgTop,
                    "card-img-right": e.imgEnd || e.imgRight,
                    "card-img-left": e.imgStart || e.imgLeft,
                    "card-img-top": e.imgTop,
                    "card-img-bottom": e.imgBottom,
                })),
                o = P(() => ({ src: e.imgSrc, alt: e.imgAlt, height: e.imgHeight, width: e.imgWidth })),
                a = P(() => ({ [`text-${e.subTitleTextVariant}`]: e.subTitleTextVariant }))
            return { classes: t, bodyClasses: r, footerClasses: n, headerClasses: i, imgClasses: s, imgAttr: o, subTitleClasses: a }
        },
    }),
    nN = ["innerHTML"],
    iN = ["innerHTML"]
function sN(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { class: ve(["card", e.classes]) },
            {
                default: Te(() => [
                    e.imgSrc && !e.imgBottom ? (D(), se("img", Ge({ key: 0 }, e.imgAttr, { class: e.imgClasses }), null, 16)) : Ie("", !0),
                    e.header || e.$slots.header || e.headerHtml
                        ? (D(),
                          be(
                              ke(e.headerTag),
                              { key: 1, class: ve(["card-header", [e.headerClass, e.headerClasses]]) },
                              {
                                  default: Te(() => [
                                      e.headerHtml
                                          ? (D(), se("div", { key: 0, innerHTML: e.headerHtml }, null, 8, nN))
                                          : ue(e.$slots, "header", { key: 1 }, () => [Ot(tt(e.header), 1)]),
                                  ]),
                                  _: 3,
                              },
                              8,
                              ["class"]
                          ))
                        : Ie("", !0),
                    e.noBody
                        ? Ie("", !0)
                        : (D(),
                          be(
                              ke(e.bodyTag),
                              { key: 2, class: ve([e.bodyClass, e.bodyClasses]) },
                              {
                                  default: Te(() => [
                                      e.title && !e.noBody
                                          ? (D(),
                                            be(
                                                ke(e.titleTag),
                                                { key: 0, class: "card-title" },
                                                { default: Te(() => [Ot(tt(e.title), 1)]), _: 1 }
                                            ))
                                          : Ie("", !0),
                                      e.subTitle && !e.noBody
                                          ? (D(),
                                            be(
                                                ke(e.subTitleTag),
                                                { key: 1, class: ve(["card-subtitle mb-2", e.subTitleClasses]) },
                                                { default: Te(() => [Ot(tt(e.subTitle), 1)]), _: 1 },
                                                8,
                                                ["class"]
                                            ))
                                          : Ie("", !0),
                                      ue(e.$slots, "default"),
                                  ]),
                                  _: 3,
                              },
                              8,
                              ["class"]
                          )),
                    e.noBody ? ue(e.$slots, "default", { key: 3 }) : Ie("", !0),
                    e.footer || e.$slots.footer || e.footerHtml
                        ? (D(),
                          be(
                              ke(e.footerTag),
                              { key: 4, class: ve(["card-footer", [e.footerClass, e.footerClasses]]) },
                              {
                                  default: Te(() => [
                                      e.footerHtml
                                          ? (D(), se("div", { key: 0, innerHTML: e.footerHtml }, null, 8, iN))
                                          : ue(e.$slots, "footer", { key: 1 }, () => [Ot(tt(e.footer), 1)]),
                                  ]),
                                  _: 3,
                              },
                              8,
                              ["class"]
                          ))
                        : Ie("", !0),
                    e.imgSrc && e.imgBottom ? (D(), se("img", Ge({ key: 5 }, e.imgAttr, { class: e.imgClasses }), null, 16)) : Ie("", !0),
                ]),
                _: 3,
            },
            8,
            ["class"]
        )
    )
}
var oN = ge(rN, [["render", sN]])
const aN = de({
    name: "BCardBody",
    props: {
        bodyBgVariant: { type: String, required: !1 },
        bodyClass: { type: [Array, Object, String], required: !1 },
        bodyTag: { type: String, default: "div" },
        bodyTextVariant: { type: String, required: !1 },
        overlay: { type: Boolean, default: !1 },
        subTitle: { type: String, required: !1 },
        subTitleTag: { type: String, default: "h4" },
        subTitleTextVariant: { type: String, required: !1 },
        title: { type: String, required: !1 },
        titleTag: { type: String, default: "h4" },
    },
    setup(e) {
        return { classes: P(() => ({ [`text-${e.bodyTextVariant}`]: e.bodyTextVariant, [`bg-${e.bodyBgVariant}`]: e.bodyBgVariant })) }
    },
})
function lN(e, t, r, n, i, s) {
    const o = jt("b-card-title"),
        a = jt("b-card-sub-title")
    return (
        D(),
        be(
            ke(e.bodyTag),
            { class: ve(["card-body", e.classes]) },
            {
                default: Te(() => [
                    e.title ? (D(), be(o, { key: 0, "title-tag": e.titleTag, title: e.title }, null, 8, ["title-tag", "title"])) : Ie("", !0),
                    e.subTitle
                        ? (D(),
                          be(
                              a,
                              {
                                  key: 1,
                                  "sub-title-tag": e.subTitleTag,
                                  "sub-title": e.subTitle,
                                  "sub-title-text-variant": e.subTitleTextVariant,
                              },
                              null,
                              8,
                              ["sub-title-tag", "sub-title", "sub-title-text-variant"]
                          ))
                        : Ie("", !0),
                    ue(e.$slots, "default"),
                ]),
                _: 3,
            },
            8,
            ["class"]
        )
    )
}
var uN = ge(aN, [["render", lN]])
const fN = de({
        name: "BCardFooter",
        props: {
            footer: { type: String },
            footerBgVariant: { type: String, required: !1 },
            footerBorderVariant: { type: String, required: !1 },
            footerClass: { type: [Array, Object, String], required: !1 },
            footerHtml: { type: String, required: !1 },
            footerTag: { type: String, default: "div" },
            footerTextVariant: { type: String, required: !1 },
        },
        setup(e) {
            return {
                classes: P(() => ({
                    [`text-${e.footerTextVariant}`]: e.footerTextVariant,
                    [`bg-${e.footerBgVariant}`]: e.footerBgVariant,
                    [`border-${e.footerBorderVariant}`]: e.footerBorderVariant,
                })),
            }
        },
    }),
    cN = ["innerHTML"]
function dN(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.footerTag),
            { class: ve(["card-footer", [e.footerClass, e.classes]]) },
            {
                default: Te(() => [
                    e.footerHtml
                        ? (D(), se("div", { key: 0, innerHTML: e.footerHtml }, null, 8, cN))
                        : ue(e.$slots, "default", { key: 1 }, () => [Ot(tt(e.footer), 1)]),
                ]),
                _: 3,
            },
            8,
            ["class"]
        )
    )
}
var hN = ge(fN, [["render", dN]])
const pN = de({
    name: "BCardGroup",
    props: { columns: { type: Boolean, default: !1 }, deck: { type: Boolean, default: !1 }, tag: { type: String, default: "div" } },
    setup(e) {
        return { classes: P(() => (e.deck ? "card-deck" : e.columns ? "card-columns" : "card-group")) }
    },
})
function gN(e, t, r, n, i, s) {
    return D(), be(ke(e.tag), { class: ve(e.classes) }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 8, ["class"])
}
var mN = ge(pN, [["render", gN]])
const vN = de({
        name: "BCardHeader",
        props: {
            header: { type: String, required: !1 },
            headerBgVariant: { type: String, required: !1 },
            headerBorderVariant: { type: String, required: !1 },
            headerClass: { type: [Array, Object, String], required: !1 },
            headerHtml: { type: String, required: !1 },
            headerTag: { type: String, default: "div" },
            headerTextVariant: { type: String, required: !1 },
        },
        setup(e) {
            return {
                classes: P(() => ({
                    [`text-${e.headerTextVariant}`]: e.headerTextVariant,
                    [`bg-${e.headerBgVariant}`]: e.headerBgVariant,
                    [`border-${e.headerBorderVariant}`]: e.headerBorderVariant,
                })),
            }
        },
    }),
    bN = ["innerHTML"]
function yN(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.headerTag),
            { class: ve(["card-header", [e.headerClass, e.classes]]) },
            {
                default: Te(() => [
                    e.headerHtml
                        ? (D(), se("div", { key: 0, innerHTML: e.headerHtml }, null, 8, bN))
                        : ue(e.$slots, "default", { key: 1 }, () => [Ot(tt(e.header), 1)]),
                ]),
                _: 3,
            },
            8,
            ["class"]
        )
    )
}
var _N = ge(vN, [["render", yN]])
const wN = de({
    name: "BCardImage",
    props: {
        alt: { type: String, default: null },
        bottom: { type: Boolean, default: !1 },
        end: { type: Boolean, default: !1 },
        height: { type: [Number, String], required: !1 },
        left: { type: Boolean, default: !1 },
        right: { type: Boolean, default: !1 },
        src: { type: String, required: !1 },
        start: { type: Boolean, default: !1 },
        top: { type: Boolean, default: !1 },
        width: { type: [Number, String], required: !1 },
    },
    setup(e) {
        const t = P(() => ({
                src: e.src,
                alt: e.alt,
                width: (typeof e.width == "number" ? e.width : parseInt(e.width, 10)) || void 0,
                height: (typeof e.height == "number" ? e.height : parseInt(e.height, 10)) || void 0,
            })),
            r = P(() => {
                const n = e.left ? "float-left" : e.right ? "float-right" : ""
                let i = "card-img"
                return (
                    e.top
                        ? (i += "-top")
                        : e.right || e.end
                        ? (i += "-right")
                        : e.bottom
                        ? (i += "-bottom")
                        : (e.left || e.start) && (i += "-left"),
                    { [n]: !!n, [i]: !0 }
                )
            })
        return { attrs: t, classes: r }
    },
})
function EN(e, t, r, n, i, s) {
    return D(), se("img", Ge({ class: e.classes }, e.attrs), null, 16)
}
var AN = ge(wN, [["render", EN]])
const SN = de({
    name: "BCardSubTitle",
    props: { subTitle: { type: String }, subTitleTag: { type: String, default: "h6" }, subTitleTextVariant: { type: String, default: "muted" } },
    setup(e) {
        return { classes: P(() => ({ [`text-${e.subTitleTextVariant}`]: e.subTitleTextVariant })) }
    },
})
function TN(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.subTitleTag),
            { class: ve(["card-subtitle mb-2", e.classes]) },
            { default: Te(() => [ue(e.$slots, "default", {}, () => [Ot(tt(e.subTitle), 1)])]), _: 3 },
            8,
            ["class"]
        )
    )
}
var xN = ge(SN, [["render", TN]])
const CN = {},
    $N = { class: "card-text" }
function NN(e, t) {
    return D(), se("p", $N, [ue(e.$slots, "default")])
}
var BN = ge(CN, [["render", NN]])
const kN = de({ name: "BCardTitle", props: { title: { type: String }, titleTag: { type: String, default: "h4" } } })
function ON(e, t, r, n, i, s) {
    return (
        D(), be(ke(e.titleTag), { class: "card-title" }, { default: Te(() => [ue(e.$slots, "default", {}, () => [Ot(tt(e.title), 1)])]), _: 3 })
    )
}
var IN = ge(kN, [["render", ON]])
const Uv = Symbol(),
    PN = de({
        name: "BCarousel",
        props: {
            background: { type: String, required: !1 },
            modelValue: { type: Number, default: 0 },
            controls: { type: Boolean, default: !1 },
            id: { type: String },
            imgHeight: { type: String },
            imgWidth: { type: String },
            indicators: { type: Boolean, default: !1 },
            interval: { type: Number, default: 5e3 },
            noTouch: { type: Boolean, default: !1 },
            noWrap: { type: Boolean, default: !1 },
        },
        emits: ["sliding-start", "sliding-end"],
        setup(e, { slots: t, emit: r }) {
            const n = Ve(),
                i = Ve(),
                s = nr(e.id, "accordion"),
                o = Ve([])
            return (
                Ct(n, "slide.bs.carousel", (a) => r("sliding-start", a)),
                Ct(n, "slid.bs.carousel", (a) => r("sliding-end", a)),
                zt(() => {
                    ;(i.value = new un(n.value, { wrap: !e.noTouch, interval: e.interval, touch: !e.noTouch })),
                        t.default &&
                            (o.value = t.default().filter((a) => {
                                var l
                                return ((l = a.type) == null ? void 0 : l.name) === "BCarouselSlide"
                            }))
                }),
                dn(Uv, { background: e.background, width: e.imgWidth, height: e.imgHeight }),
                { element: n, computedId: s, slides: o }
            )
        },
    }),
    MN = ["id"],
    RN = { key: 0, class: "carousel-indicators" },
    LN = ["data-bs-target", "data-bs-slide-to", "aria-label"],
    DN = { class: "carousel-inner" },
    FN = ["data-bs-target"],
    VN = qe("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }, null, -1),
    qN = qe("span", { class: "visually-hidden" }, "Previous", -1),
    HN = [VN, qN],
    UN = ["data-bs-target"],
    zN = qe("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }, null, -1),
    jN = qe("span", { class: "visually-hidden" }, "Next", -1),
    WN = [zN, jN]
function KN(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "div",
            { id: e.computedId, ref: "element", class: "carousel slide", "data-bs-ride": "carousel" },
            [
                e.indicators
                    ? (D(),
                      se("div", RN, [
                          (D(!0),
                          se(
                              St,
                              null,
                              hn(
                                  e.slides,
                                  (o, a) => (
                                      D(),
                                      se(
                                          "button",
                                          {
                                              key: a,
                                              type: "button",
                                              "data-bs-target": `#${e.computedId}`,
                                              "data-bs-slide-to": a,
                                              class: ve(a === 0 ? "active" : ""),
                                              "aria-current": "true",
                                              "aria-label": `Slide ${a}`,
                                          },
                                          null,
                                          10,
                                          LN
                                      )
                                  )
                              ),
                              128
                          )),
                      ]))
                    : Ie("", !0),
                qe("div", DN, [ue(e.$slots, "default")]),
                e.controls
                    ? (D(),
                      se(
                          St,
                          { key: 1 },
                          [
                              qe(
                                  "button",
                                  {
                                      class: "carousel-control-prev",
                                      type: "button",
                                      "data-bs-target": `#${e.computedId}`,
                                      "data-bs-slide": "prev",
                                  },
                                  HN,
                                  8,
                                  FN
                              ),
                              qe(
                                  "button",
                                  {
                                      class: "carousel-control-next",
                                      type: "button",
                                      "data-bs-target": `#${e.computedId}`,
                                      "data-bs-slide": "next",
                                  },
                                  WN,
                                  8,
                                  UN
                              ),
                          ],
                          64
                      ))
                    : Ie("", !0),
            ],
            8,
            MN
        )
    )
}
var GN = ge(PN, [["render", KN]])
const YN = de({
        name: "BCarouselSlide",
        props: {
            active: { type: Boolean, default: !1 },
            background: { type: String, required: !1 },
            caption: { type: String, required: !1 },
            captionHtml: { type: String, required: !1 },
            captionTag: { type: String, default: "h3" },
            contentTag: { type: String, default: "div" },
            contentVisibleUp: { type: String, required: !1 },
            id: { type: String, required: !1 },
            imgAlt: { type: String, required: !1 },
            imgBlank: { type: Boolean, default: !1 },
            imgBlankColor: { type: String, default: "transparent" },
            imgHeight: { type: String },
            imgSrc: { type: String },
            imgWidth: { type: String },
            interval: { type: [String, Number] },
            text: { type: String, required: !1 },
            textHtml: { type: String, required: !1 },
            textTag: { type: String, default: "p" },
        },
        setup(e) {
            const t = Jt(Uv, {}),
                r = nr(e.id, "accordion"),
                n = P(() => (e.imgBlank ? e.imgBlank : e.imgSrc)),
                i = P(() => ({ background: `${e.background || t.background || "rgb(171, 171, 171)"} none repeat scroll 0% 0%` })),
                s = P(() => ({ "d-none": e.contentVisibleUp, [`d-${e.contentVisibleUp}-block`]: e.contentVisibleUp })),
                o = P(() => e.text && !e.textHtml),
                a = P(() => e.textHtml),
                l = P(() => e.caption && !e.captionHtml),
                u = P(() => e.captionHtml)
            return {
                computedAttr: i,
                computedContentClasses: s,
                computedId: r,
                height: t.height,
                img: n,
                showCaption: l,
                showCaptionAsHtml: u,
                showText: o,
                showTextAsHtml: a,
                width: t.width,
            }
        },
    }),
    JN = ["id", "data-bs-interval"],
    XN = { key: 0 },
    ZN = ["innerHTML"],
    QN = { key: 0 },
    e6 = ["innerHTML"]
function t6(e, t, r, n, i, s) {
    const o = jt("b-img")
    return (
        D(),
        se(
            "div",
            { id: e.computedId, class: ve(["carousel-item", { active: e.active }]), "data-bs-interval": e.interval, style: Ln(e.computedAttr) },
            [
                ue(e.$slots, "img", {}, () => [
                    Rt(
                        o,
                        {
                            class: "d-block w-100",
                            alt: e.imgAlt,
                            src: e.imgSrc,
                            width: e.imgWidth || e.width,
                            height: e.imgHeight || e.height,
                            blank: e.imgBlank,
                            "blank-color": e.imgBlankColor,
                        },
                        null,
                        8,
                        ["alt", "src", "width", "height", "blank", "blank-color"]
                    ),
                ]),
                e.caption || e.captionHtml || e.text || e.textHtml || e.$slots.default
                    ? (D(),
                      be(
                          ke(e.contentTag),
                          { key: 0, class: ve(["carousel-caption", e.computedContentClasses]) },
                          {
                              default: Te(() => [
                                  e.caption || e.captionHtml
                                      ? (D(),
                                        be(
                                            ke(e.captionTag),
                                            { key: 0 },
                                            {
                                                default: Te(() => [
                                                    e.showCaption ? (D(), se("span", XN, tt(e.caption), 1)) : Ie("", !0),
                                                    e.showCaptionAsHtml
                                                        ? (D(), se("span", { key: 1, innerHTML: e.captionHtml }, null, 8, ZN))
                                                        : Ie("", !0),
                                                ]),
                                                _: 1,
                                            }
                                        ))
                                      : Ie("", !0),
                                  e.text || e.textHtml
                                      ? (D(),
                                        be(
                                            ke(e.textTag),
                                            { key: 1 },
                                            {
                                                default: Te(() => [
                                                    e.showText ? (D(), se("span", QN, tt(e.text), 1)) : Ie("", !0),
                                                    e.showTextAsHtml
                                                        ? (D(), se("span", { key: 1, innerHTML: e.textHtml }, null, 8, e6))
                                                        : Ie("", !0),
                                                ]),
                                                _: 1,
                                            }
                                        ))
                                      : Ie("", !0),
                                  ue(e.$slots, "default"),
                              ]),
                              _: 3,
                          },
                          8,
                          ["class"]
                      ))
                    : Ie("", !0),
            ],
            14,
            JN
        )
    )
}
var r6 = ge(YN, [["render", t6]])
const n6 = de({
        name: "BCloseButton",
        props: { disabled: { type: Boolean, default: !1 }, white: { type: Boolean, default: !1 } },
        setup(e) {
            return { classes: P(() => ({ "btn-close-white": e.white })) }
        },
    }),
    i6 = ["disabled"]
function s6(e, t, r, n, i, s) {
    return D(), se("button", { type: "button", class: ve(["btn-close", e.classes]), disabled: e.disabled, "aria-label": "Close" }, null, 10, i6)
}
var zv = ge(n6, [["render", s6]]),
    Wl = (e, t, r) =>
        t
            .concat(["sm", "md", "lg", "xl", "xxl"])
            .reduce((n, i) => ((n[e ? `${e}${i.charAt(0).toUpperCase() + i.slice(1)}` : i] = r), n), Object.create(null)),
    jv = (e, t, r, n = r) =>
        Object.keys(t).reduce(
            (i, s) => (
                e[s] &&
                    i.push(
                        [n, s.replace(r, ""), e[s]]
                            .filter((o) => o)
                            .join("-")
                            .toLowerCase()
                    ),
                i
            ),
            []
        )
const Y0 = Wl("", [], { type: [Boolean, String, Number], default: !1 }),
    J0 = Wl("offset", [""], { type: [String, Number], default: null }),
    X0 = Wl("order", [""], { type: [String, Number], default: null }),
    o6 = de({
        name: "BCol",
        props: Bt(
            Me(
                Bt(
                    Me(
                        Bt(Me({ col: { type: Boolean, default: !1 }, cols: { type: [String, Number], default: null } }, Y0), {
                            offset: { type: [String, Number], default: null },
                        }),
                        J0
                    ),
                    { order: { type: [String, Number], default: null } }
                ),
                X0
            ),
            { alignSelf: { type: String, default: null }, tag: { type: String, default: "div" } }
        ),
        setup(e) {
            let t = []
            return (
                [
                    { content: Y0, propPrefix: "cols", classPrefix: "col" },
                    { content: J0, propPrefix: "offset" },
                    { content: X0, propPrefix: "order" },
                ].forEach((i) => {
                    t = t.concat(jv(e, i.content, i.propPrefix, i.classPrefix))
                }),
                {
                    classes: P(() => ({
                        col: e.col || !t.some((i) => /^col-/.test(i) && !e.cols),
                        [`col-${e.cols}`]: !!e.cols,
                        [`offset-${e.offset}`]: !!e.offset,
                        [`order-${e.order}`]: !!e.order,
                        [`align-self-${e.alignSelf}`]: !!e.alignSelf,
                    })),
                    classList: t,
                }
            )
        },
    })
function a6(e, t, r, n, i, s) {
    return D(), be(ke(e.tag), { class: ve([e.classes, e.classList]) }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 8, ["class"])
}
var xo = ge(o6, [["render", a6]])
let gs = { delay: 5e3, value: !0, pos: "top-right" }
class Z0 {
    constructor(t) {
        Ji(t) ? (this.vm = t) : (this.vm = yn(t)),
            (this.containerPositions = P(() => {
                let r = new Set([])
                return (
                    this.vm.toasts.map((n) => {
                        n.options.pos && r.add(n.options.pos)
                    }),
                    r
                )
            }))
    }
    toasts(t) {
        return P(
            t
                ? () =>
                      this.vm.toasts.filter((r) => {
                          if (r.options.pos == t) return r
                      })
                : () => this.vm.toasts
        )
    }
    displayedToasts(t) {
        return P(() =>
            this.vm.toasts.filter((r) => {
                if (r.options.pos == t && r.options.value) return r
                if (r.options.value) return r
            })
        )
    }
    remove(...t) {
        this.vm.toasts = this.vm.toasts.filter((r) => {
            if (!t.includes(r.options.id)) return r
        })
    }
    isRoot() {
        var t
        return (t = this.vm.root) != null ? t : !1
    }
    show(t, r = gs) {
        let n = Me(Me({ id: In() }, gs), r),
            i = { options: yn(n), content: t }
        return this.vm.toasts.push(i), i
    }
    info(t, r = gs) {
        return this.show(t, Me({ variant: "info" }, r))
    }
    danger(t, r = gs) {
        return this.show(t, Me({ variant: "danger" }, r))
    }
    warning(t, r = gs) {
        return this.show(t, Me({ variant: "warning" }, r))
    }
    success(t, r = gs) {
        return this.show(t, Me({ variant: "success" }, r))
    }
    hide() {}
}
class l6 {
    constructor() {
        ;(this.useToast = Wv), (this.vms = {})
    }
    getOrCreateViewModel(t) {
        if (t) {
            if (t.root) {
                if (this.rootInstance) return this.vms[this.rootInstance]
                this.rootInstance = t.id
            }
            return (this.vms[t.id] = t), t
        } else {
            if (this.rootInstance) return this.vms[this.rootInstance]
            {
                let r = { root: !0, toasts: [], container: void 0, id: Symbol("toast") }
                return (this.rootInstance = r.id), (this.vms[r.id] = r), r
            }
        }
    }
    getVM(t) {
        if (!t && this.rootInstance) return this.vms[this.rootInstance]
        if (t) return this.vms[t]
    }
}
let qf = "toast",
    u6 = { container: void 0, toasts: [], root: !1 }
function Wv(e, t = qf) {
    let r = Jt(t !== null ? t : qf)
    if (!e) return new Z0(r.getOrCreateViewModel())
    let n = { id: Symbol("toastInstance") },
        i = Me(Me(Me({}, u6), n), e),
        s = r.getOrCreateViewModel(i)
    return new Z0(s)
}
const f6 = {
        install: (e, t = {}) => {
            var r, n
            e.provide((n = (r = t == null ? void 0 : t.BToast) == null ? void 0 : r.injectkey) != null ? n : qf, new l6())
        },
    },
    c6 = {
        "top-left": "top-0 start-0",
        "top-center": "top-0 start-50",
        "top-right": "top-0 end-0",
        "middle-left": "top-50 start-0 translate-middle-y",
        "middle-center": "top-50 start-50 translate-middle",
        "middle-right": "top-50 end-0 translate-middle-y",
        "bottom-left": "bottom-0 start-0",
        "bottom-center": "bottom-0 start-50",
        "bottom-right": "bottom-0 end-0",
    },
    d6 = de({
        name: "BToaster",
        props: { position: { type: String, default: "top-right" }, instance: { type: Object } },
        setup(e, { emit: t }) {
            return {
                positionClass: P(() => c6[e.position]),
                handleDestroy: (i) => {
                    var s
                    ;(s = e.instance) == null || s.remove(i)
                },
            }
        },
        computed: {},
    }),
    h6 = qe("div", null, null, -1)
function p6(e, t, r, n, i, s) {
    const o = jt("b-toast")
    return (
        D(),
        se(
            "div",
            { class: ve([[e.positionClass], "b-toaster position-fixed p-3"]), style: { "z-index": "11" } },
            [
                (D(!0),
                se(
                    St,
                    null,
                    hn(
                        e.instance.displayedToasts().value,
                        (a) => (
                            D(),
                            be(
                                o,
                                {
                                    id: a.options.id,
                                    key: a.options.id,
                                    modelValue: a.options.value,
                                    "onUpdate:modelValue": (l) => (a.options.value = l),
                                    title: a.content.title,
                                    body: a.content.body,
                                    component: a.content.vnode,
                                    variant: a.options.variant,
                                    onDestroyed: e.handleDestroy,
                                },
                                null,
                                8,
                                ["id", "modelValue", "onUpdate:modelValue", "title", "body", "component", "variant", "onDestroyed"]
                            )
                        )
                    ),
                    128
                )),
                h6,
            ],
            2
        )
    )
}
var Hf = ge(d6, [["render", p6]])
const g6 = de({
    name: "BContainer",
    props: { fluid: { type: [Boolean, String], default: !1 }, toast: { type: Object }, position: { type: String, required: !1 } },
    setup(e, { slots: t, expose: r }) {
        const n = Ve()
        let i
        const s = P(() => ({
            container: !e.fluid,
            ["container-fluid"]: typeof e.fluid == "boolean" && e.fluid,
            [`container-${e.fluid}`]: typeof e.fluid == "string",
        }))
        return (
            zt(() => {
                e.toast
            }),
            e.toast && ((i = Wv({ container: n, root: e.toast.root })), r({})),
            () => {
                var o
                const a = []
                return (
                    i == null ||
                        i.containerPositions.value.forEach((l) => {
                            a.push(Ae(Hf, { instance: i, position: l }))
                        }),
                    Ae("div", { class: [s.value, e.position], ref: n }, [...a, (o = t.default) == null ? void 0 : o.call(t)])
                )
            }
        )
    },
    methods: {},
})
function Uu(e) {
    return e && typeof e == "object" && e.constructor === Object
}
function Uf(e, t, r = !0) {
    const n = e instanceof Date && typeof e.getMonth == "function" ? new Date(e) : Object.assign({}, e)
    return (
        Uu(e) &&
            Uu(t) &&
            Object.keys(t).forEach((i) => {
                Uu(t[i])
                    ? i in e
                        ? (n[i] = Uf(e[i], t[i], r))
                        : Object.assign(n, { [i]: t[i] })
                    : Array.isArray(t[i]) && Array.isArray(e[i])
                    ? Object.assign(n, { [i]: r ? e[i].concat(t[i].filter((s) => !e[i].includes(s))) : t[i] })
                    : Object.assign(n, { [i]: t[i] })
            }),
        n
    )
}
const m6 = de({
        name: "BDropdown",
        components: { BButton: Qc },
        props: {
            autoClose: { type: [Boolean, String], default: !0 },
            block: { type: Boolean, default: !1 },
            boundary: { type: [VC, String], default: "clippingParents" },
            dark: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            dropup: { type: Boolean, default: !1 },
            dropright: { type: Boolean, default: !1 },
            dropleft: { type: Boolean, default: !1 },
            id: { type: String },
            menuClass: { type: [Array, Object, String] },
            noFlip: { type: Boolean, default: !1 },
            offset: { type: [Number, String], default: 0 },
            popperOpts: { type: Object, default: () => ({}) },
            right: { type: Boolean, default: !1 },
            role: { type: String, default: "menu" },
            size: { type: String },
            split: { type: Boolean, default: !1 },
            splitButtonType: { type: String, default: "button" },
            splitClass: { type: [Array, Object, String] },
            splitHref: { type: String, default: null },
            noCaret: { type: Boolean, default: !1 },
            splitVariant: { type: String },
            text: { type: String },
            toggleClass: { type: [Array, Object, String] },
            toggleText: { type: String, default: "Toggle dropdown" },
            variant: { type: String, default: "secondary" },
        },
        emits: ["show", "shown", "hide", "hidden"],
        setup(e, { emit: t }) {
            const r = Ve(),
                n = Ve(),
                i = Ve(),
                s = nr(e.id, "dropdown")
            Ct(r, "show.bs.dropdown", () => t("show")),
                Ct(r, "shown.bs.dropdown", () => t("shown")),
                Ct(r, "hide.bs.dropdown", () => t("hide")),
                Ct(r, "hidden.bs.dropdown", () => t("hidden"))
            const o = P(() => ({ "d-grid": e.block, "d-flex": e.block && e.split })),
                a = P(() => ({ "dropdown-toggle": !e.split, "dropdown-toggle-no-caret": e.noCaret && !e.split, "w-100": e.split && e.block })),
                l = P(() => ({ "dropdown-menu-dark": e.dark })),
                u = P(() => ({
                    "data-bs-toggle": e.split ? null : "dropdown",
                    "aria-expanded": e.split ? null : !1,
                    ref: e.split ? null : n,
                    href: e.split ? e.splitHref : null,
                })),
                c = P(() => ({ ref: e.split ? n : null })),
                d = () => {
                    var h
                    ;(h = i.value) == null || h.hide()
                }
            return (
                zt(() => {
                    var h
                    i.value = new vr((h = n.value) == null ? void 0 : h.$el, {
                        autoClose: e.autoClose,
                        boundary: e.boundary,
                        offset: e.offset.toString(),
                        reference: e.offset || e.split ? "parent" : "toggle",
                        popperConfig: (v) => {
                            const b = {
                                placement: "bottom-start",
                                modifiers: e.noFlip ? [{ name: "flip", options: { fallbackPlacements: [] } }] : [],
                            }
                            return (
                                e.dropup
                                    ? (b.placement = e.right ? "top-end" : "top-start")
                                    : e.dropright
                                    ? (b.placement = "right-start")
                                    : e.dropleft
                                    ? (b.placement = "left-start")
                                    : e.right && (b.placement = "bottom-end"),
                                Uf(v, Uf(b, e.popperOpts))
                            )
                        },
                    })
                }),
                {
                    parent: r,
                    computedId: s,
                    classes: o,
                    buttonClasses: a,
                    buttonAttr: u,
                    splitAttr: c,
                    dropdownMenuClasses: l,
                    dropdown: n,
                    hide: d,
                }
            )
        },
    }),
    v6 = { class: "visually-hidden" },
    b6 = ["aria-labelledby", "role"]
function y6(e, t, r, n, i, s) {
    const o = jt("b-button")
    return (
        D(),
        se(
            "div",
            { ref: "parent", class: ve([e.classes, "btn-group"]) },
            [
                Rt(
                    o,
                    Ge(
                        {
                            id: e.computedId,
                            variant: e.splitVariant || e.variant,
                            size: e.size,
                            class: [e.buttonClasses, e.split ? e.splitClass : e.toggleClass],
                            disabled: e.disabled,
                            type: e.splitButtonType,
                        },
                        e.buttonAttr
                    ),
                    { default: Te(() => [Ot(tt(e.text) + " ", 1), ue(e.$slots, "button-content")]), _: 3 },
                    16,
                    ["id", "variant", "size", "class", "disabled", "type"]
                ),
                e.split
                    ? (D(),
                      be(
                          o,
                          Ge({ key: 0, variant: e.variant, size: e.size, disabled: e.disabled }, e.splitAttr, {
                              class: [e.toggleClass, "dropdown-toggle-split dropdown-toggle"],
                              "data-bs-toggle": "dropdown",
                              "aria-expanded": "false",
                          }),
                          { default: Te(() => [qe("span", v6, tt(e.toggleText), 1)]), _: 1 },
                          16,
                          ["variant", "size", "disabled", "class"]
                      ))
                    : Ie("", !0),
                qe(
                    "ul",
                    { class: ve(["dropdown-menu", [e.menuClass, e.dropdownMenuClasses]]), "aria-labelledby": e.computedId, role: e.role },
                    [ue(e.$slots, "default")],
                    10,
                    b6
                ),
            ],
            2
        )
    )
}
var _6 = ge(m6, [["render", y6]])
const w6 = de({ name: "BDropdownDivider", props: { tag: { type: String, default: "hr" } } }),
    E6 = { role: "presentation" }
function A6(e, t, r, n, i, s) {
    return D(), se("li", E6, [(D(), be(ke(e.tag), { class: "dropdown-divider", role: "separator", "aria-orientation": "horizontal" }))])
}
var S6 = ge(w6, [["render", A6]])
const T6 = de({ name: "BDropdownForm" }),
    x6 = { role: "presentation" },
    C6 = { class: "px-4 py-3" }
function $6(e, t, r, n, i, s) {
    return D(), se("li", x6, [qe("form", C6, [ue(e.$slots, "default")])])
}
var N6 = ge(T6, [["render", $6]])
const B6 = de({
        name: "BDropdownGroup",
        inheritAttrs: !1,
        props: {
            ariaDescribedby: { type: String },
            header: { type: String },
            headerClasses: { type: [String, Array, Object], default: null },
            headerTag: { type: String, default: "header" },
            headerVariant: { type: String, default: null },
            id: { type: String },
        },
        setup(e) {
            const t = P(() => (e.id ? [e.id, "group_dd_header"].join("_") : null)),
                r = P(() => (e.headerTag === "header" ? null : "heading"))
            return { classes: P(() => ({ [`text-${e.headerVariant}`]: e.headerVariant })), headerId: t, headerRole: r }
        },
    }),
    k6 = { role: "presentation" },
    O6 = ["id", "aria-describedby"]
function I6(e, t, r, n, i, s) {
    return (
        D(),
        se("li", k6, [
            (D(),
            be(
                ke(e.headerTag),
                { id: e.headerId, class: ve(["dropdown-header", [e.classes, e.headerClasses]]), role: e.headerRole },
                { default: Te(() => [ue(e.$slots, "header", {}, () => [Ot(tt(e.header), 1)])]), _: 3 },
                8,
                ["id", "class", "role"]
            )),
            qe(
                "ul",
                Ge({ id: e.id, role: "group", class: "list-unstyled" }, e.$attrs, { "aria-describedby": e.ariaDescribedby || e.headerId }),
                [ue(e.$slots, "default")],
                16,
                O6
            ),
        ])
    )
}
var P6 = ge(B6, [["render", I6]])
const M6 = {},
    R6 = { class: "dropdown-header" }
function L6(e, t) {
    return D(), se("li", null, [qe("h6", R6, [ue(e.$slots, "default")])])
}
var D6 = ge(M6, [["render", L6]])
const F6 = de({
        name: "BDropdownItem",
        inheritAttrs: !1,
        props: {
            active: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            href: { type: String },
            linkClass: { type: [Array, Object, String] },
            rel: { type: String, default: null },
            target: { type: String, default: "_self" },
            variant: { type: String, default: null },
        },
        emits: ["click"],
        setup(e) {
            const t = P(() => ({ active: e.active, disabled: e.disabled, [`text-${e.variant}`]: e.variant })),
                r = P(() => (e.href ? "a" : "button")),
                n = P(() => ({
                    "aria-current": e.active ? "true" : null,
                    href: r.value === "a" ? e.href : null,
                    rel: e.rel,
                    type: r.value === "button" ? "button" : null,
                    target: e.target,
                }))
            return { classes: t, tag: r, attrs: n }
        },
    }),
    V6 = { role: "presentation" }
function q6(e, t, r, n, i, s) {
    return (
        D(),
        se("li", V6, [
            (D(),
            be(
                ke(e.tag),
                Ge({ class: ["dropdown-item", [e.classes, e.linkClass]] }, e.attrs, { onClick: t[0] || (t[0] = (o) => e.$emit("click", o)) }),
                { default: Te(() => [ue(e.$slots, "default")]), _: 3 },
                16,
                ["class"]
            )),
        ])
    )
}
var H6 = ge(F6, [["render", q6]])
const U6 = de({
        name: "BDropdownItemButton",
        inheritAttrs: !1,
        props: {
            active: { type: Boolean, default: !1 },
            activeClass: { type: String, default: "active" },
            buttonClass: { type: [String, Array, Object] },
            disabled: { type: Boolean, default: !1 },
            variant: { type: String, default: null },
        },
        emits: ["click"],
        setup(e) {
            const t = P(() => ({ [e.activeClass]: e.active, disabled: e.disabled, [`text-${e.variant}`]: e.variant })),
                r = P(() => ({ role: "menuitem", type: "button", disabled: e.disabled }))
            return { classes: t, attrs: r }
        },
    }),
    z6 = { role: "presentation" }
function j6(e, t, r, n, i, s) {
    return (
        D(),
        se("li", z6, [
            qe(
                "button",
                Ge({ class: ["dropdown-item", [e.classes, e.buttonClass]] }, e.attrs, { onClick: t[0] || (t[0] = (o) => e.$emit("click", o)) }),
                [ue(e.$slots, "default")],
                16
            ),
        ])
    )
}
var W6 = ge(U6, [["render", j6]])
const K6 = de({ name: "BDropdownText" }),
    G6 = { role: "presentation" },
    Y6 = { class: "px-4 py-1 mb-0 text-muted" }
function J6(e, t, r, n, i, s) {
    return D(), se("li", G6, [qe("p", Y6, [ue(e.$slots, "default")])])
}
var X6 = ge(K6, [["render", J6]])
const Z6 = de({
        name: "BForm",
        props: {
            id: { type: String, required: !1 },
            floating: { type: Boolean, default: !1 },
            novalidate: { type: Boolean, default: !1 },
            validated: { type: Boolean, default: !1 },
        },
        emits: ["submit"],
        setup(e) {
            return { classes: P(() => ({ "form-floating": e.floating, "was-validated": e.validated })) }
        },
    }),
    Q6 = ["id", "novalidate"]
function eB(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "form",
            {
                id: e.id,
                novalidate: e.novalidate,
                class: ve(e.classes),
                onSubmit: t[0] || (t[0] = xl((o) => e.$emit("submit", o), ["prevent"])),
            },
            [ue(e.$slots, "default")],
            42,
            Q6
        )
    )
}
var tB = ge(Z6, [["render", eB]])
const rB = (e) =>
        P(() =>
            e.ariaInvalid === !0 || e.ariaInvalid === "true" || e.ariaInvalid === "" || (typeof e.state == "boolean" ? e.state : null) === !1
                ? "true"
                : e.ariaInvalid
        ),
    Kv = (e) =>
        P(() => ({
            "form-check": !e.plain && !e.button,
            "form-check-inline": e.inline,
            "form-switch": e.switch,
            [`form-control-${e.size}`]: e.size && e.size !== "md",
        })),
    Gv = (e) =>
        P(() => ({
            "form-check-input": !e.plain && !e.button,
            "is-valid": e.state === !0,
            "is-invalid": e.state === !1,
            "btn-check": e.button,
        })),
    Yv = (e) =>
        P(() => ({
            "form-check-label": !e.plain && !e.button,
            btn: e.button,
            [`btn-${e.buttonVariant}`]: e.button,
            [`btn-${e.size}`]: e.button && e.size && e.size !== "md",
        })),
    Jv = (e) => P(() => ({ "aria-invalid": rB(e).value, "aria-required": e.required.toString() === "true" ? "true" : null })),
    Xv = (e) =>
        P(() => ({
            "was-validated": e.validated,
            "btn-group": e.buttons && !e.stacked,
            "btn-group-vertical": e.stacked,
            [`btn-group-${e.size}`]: e.size,
        })),
    hl = (e, t, r) =>
        e
            .filter((n) => n.type.name === t)
            .map((n) => {
                const i = (n.children.default ? n.children.default() : []).find((s) => s.type.toString() === "Symbol(Text)")
                return { props: Me({ disabled: r }, n.props), text: i ? i.children : "" }
            }),
    Zv = (e, t) =>
        typeof e == "string"
            ? { props: { value: e, disabled: t.disabled }, text: e }
            : {
                  props: Me({ value: e[t.valueField], disabled: t.disabled || e[t.disabledField] }, e.props),
                  text: e[t.textField],
                  html: e[t.htmlField],
              },
    Qv = (e, t, r, n, i) =>
        Bt(Me({}, e), {
            props: Me(
                {
                    "button-variant": r.buttonVariant,
                    form: r.form,
                    name: n.value,
                    id: `${i.value}_option_${t}`,
                    button: r.buttons,
                    state: r.state,
                    plain: r.plain,
                    size: r.size,
                    inline: !r.stacked,
                    required: r.required,
                },
                e.props
            ),
        }),
    nB = de({
        name: "BFormCheckbox",
        inheritAttrs: !1,
        props: {
            id: { type: String, default: void 0 },
            ariaLabel: { type: String },
            ariaLabelledBy: { type: String },
            autofocus: { type: Boolean, default: !1 },
            plain: { type: Boolean, default: !1 },
            button: { type: Boolean, default: !1 },
            switch: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            buttonVariant: { type: String, default: "secondary" },
            form: { type: String },
            indeterminate: { type: Boolean },
            inline: { type: Boolean, default: !1 },
            name: { type: String },
            required: { type: Boolean, default: void 0 },
            size: { type: String, default: "md" },
            state: { type: Boolean, default: null },
            uncheckedValue: { type: [Boolean, String, Array, Object, Number], default: !1 },
            value: { type: [Boolean, String, Array, Object, Number], default: !0 },
            modelValue: { type: [Boolean, String, Array, Object, Number], default: null },
        },
        emits: ["update:modelValue", "input", "change"],
        setup(e, { emit: t }) {
            const r = nr(e.id, "form-check"),
                n = Ve(null),
                i = Ve(!1),
                s = P({
                    get: () => e.modelValue,
                    set: (v) => {
                        t("input", v), t("update:modelValue", v), t("change", v)
                    },
                }),
                o = P(() =>
                    Array.isArray(e.modelValue) ? e.modelValue.indexOf(e.value) > -1 : JSON.stringify(e.modelValue) === JSON.stringify(e.value)
                ),
                a = Kv(e),
                l = Gv(e),
                u = Yv(e)
            Tt(
                () => e.modelValue,
                (v) => {
                    t("input", v)
                }
            )
            const c = () => {
                    ;(i.value = !0), e.disabled || n.value.focus()
                },
                d = () => {
                    ;(i.value = !1), e.disabled || n.value.blur()
                },
                h = (v) => {
                    if (!Array.isArray(e.modelValue)) s.value = v ? e.value : e.uncheckedValue
                    else {
                        const b = e.modelValue
                        if (v) b.indexOf(e.value) < 0 && b.push(e.value)
                        else {
                            const _ = b.indexOf(e.value)
                            _ > -1 && b.splice(_, 1)
                        }
                        s.value = b
                    }
                }
            return (
                e.autofocus &&
                    zt(() => {
                        n.value.focus()
                    }),
                {
                    input: n,
                    computedId: r,
                    classes: a,
                    inputClasses: l,
                    labelClasses: u,
                    localChecked: s,
                    isChecked: o,
                    isFocused: i,
                    handleClick: h,
                    focus: c,
                    blur: d,
                }
            )
        },
    }),
    iB = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate", "checked"],
    sB = ["for"]
function oB(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "div",
            { class: ve(e.classes) },
            [
                qe(
                    "input",
                    Ge({ id: e.computedId }, e.$attrs, {
                        ref: "input",
                        class: e.inputClasses,
                        type: "checkbox",
                        disabled: e.disabled,
                        required: e.name && e.required,
                        name: e.name,
                        form: e.form,
                        "aria-label": e.ariaLabel,
                        "aria-labelledby": e.ariaLabelledBy,
                        "aria-required": e.name && e.required ? "true" : null,
                        value: e.value,
                        indeterminate: e.indeterminate,
                        checked: e.isChecked,
                        onClick: t[0] || (t[0] = xl((o) => e.handleClick(o.target.checked), ["stop"])),
                        onFocus: t[1] || (t[1] = (o) => e.focus()),
                        onBlur: t[2] || (t[2] = (o) => e.blur()),
                    }),
                    null,
                    16,
                    iB
                ),
                e.$slots.default || !e.plain
                    ? (D(),
                      se(
                          "label",
                          { key: 0, for: e.computedId, class: ve([e.labelClasses, { active: e.isChecked, focus: e.isFocused }]) },
                          [ue(e.$slots, "default")],
                          10,
                          sB
                      ))
                    : Ie("", !0),
            ],
            2
        )
    )
}
var aB = ge(nB, [["render", oB]])
const lB = de({
        name: "BFormCheckboxGroup",
        props: {
            modelValue: { type: Array, default: () => [] },
            ariaInvalid: { type: [Boolean, String], default: null },
            autofocus: { type: Boolean, default: !1 },
            buttonVariant: { type: String, default: "secondary" },
            buttons: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            disabledField: { type: String, default: "disabled" },
            form: { type: String },
            htmlField: { type: String, default: "html" },
            id: { type: String },
            name: { type: String },
            options: { type: Array, default: () => [] },
            plain: { type: Boolean, default: !1 },
            required: { type: Boolean, default: !1 },
            size: { type: String },
            stacked: { type: Boolean, default: !1 },
            state: { type: Boolean, default: null },
            switches: { type: Boolean, default: !1 },
            textField: { type: String, default: "text" },
            validated: { type: Boolean, default: !1 },
            valueField: { type: String, default: "value" },
        },
        emits: ["update:modelValue", "change", "input"],
        setup(e, { emit: t, slots: r }) {
            const n = "BFormCheckbox",
                i = nr(e.id, "checkbox"),
                s = nr(e.name, "checkbox"),
                o = P({
                    get: () => e.modelValue,
                    set: (d) => {
                        JSON.stringify(d) !== JSON.stringify(e.modelValue) && (t("input", d), t("update:modelValue", d), t("change", d))
                    },
                }),
                a = P(() =>
                    (r.first ? hl(r.first(), n, e.disabled) : [])
                        .concat(e.options.map((d) => Zv(d, e)))
                        .concat(r.default ? hl(r.default(), n, e.disabled) : [])
                        .map((d, h) => Qv(d, h, e, s, i))
                        .map((d) => {
                            var h
                            return Bt(Me({}, d), {
                                model: e.modelValue.find((v) => {
                                    var b
                                    return ((b = d.props) == null ? void 0 : b.value) === v
                                })
                                    ? (h = d.props) == null
                                        ? void 0
                                        : h.value
                                    : !1,
                                props: Me({ switch: e.switches }, d.props),
                            })
                        })
                ),
                l = (d, h) => {
                    const v = e.modelValue.filter((b) => JSON.stringify(b) !== JSON.stringify(h))
                    JSON.stringify(d) === JSON.stringify(h) && v.push(d), t("update:modelValue", v), t("change", v)
                },
                u = Jv(e),
                c = Xv(e)
            return (
                Tt(
                    () => e.modelValue,
                    (d) => {
                        t("input", d)
                    }
                ),
                { attrs: u, classes: c, checkboxList: a, childUpdated: l, computedId: i, localChecked: o }
            )
        },
    }),
    uB = ["id"],
    fB = ["innerHTML"],
    cB = ["textContent"]
function dB(e, t, r, n, i, s) {
    const o = jt("b-form-checkbox")
    return (
        D(),
        se(
            "div",
            Ge(e.attrs, { id: e.computedId, role: "group", class: [e.classes, "bv-no-focus-ring"], tabindex: "-1" }),
            [
                (D(!0),
                se(
                    St,
                    null,
                    hn(
                        e.checkboxList,
                        (a, l) => (
                            D(),
                            be(
                                o,
                                Ge({ key: l, modelValue: a.model, "onUpdate:modelValue": (u) => (a.model = u) }, a.props, {
                                    onChange: (u) => {
                                        var c
                                        return e.childUpdated(u, (c = a.props) == null ? void 0 : c.value)
                                    },
                                }),
                                {
                                    default: Te(() => [
                                        a.html
                                            ? (D(), se("span", { key: 0, innerHTML: a.html }, null, 8, fB))
                                            : (D(), se("span", { key: 1, textContent: tt(a.text) }, null, 8, cB)),
                                    ]),
                                    _: 2,
                                },
                                1040,
                                ["modelValue", "onUpdate:modelValue", "onChange"]
                            )
                        )
                    ),
                    128
                )),
            ],
            16,
            uB
        )
    )
}
var hB = ge(lB, [["render", dB]])
const pB = de({ name: "BFormFloatingLabel", props: { labelFor: { type: String }, label: { type: String } } }),
    gB = { class: "form-floating" },
    mB = ["for"]
function vB(e, t, r, n, i, s) {
    return D(), se("div", gB, [ue(e.$slots, "default"), qe("label", { for: e.labelFor }, tt(e.label), 9, mB)])
}
var bB = ge(pB, [["render", vB]])
const zu = (e) => "\\" + e,
    yB = (e) => {
        e = Lf(e)
        const t = e.length,
            r = e.charCodeAt(0)
        return e.split("").reduce((n, i, s) => {
            const o = e.charCodeAt(s)
            return o === 0
                ? n + "\uFFFD"
                : o === 127 || (o >= 1 && o <= 31) || (s === 0 && o >= 48 && o <= 57) || (s === 1 && o >= 48 && o <= 57 && r === 45)
                ? n + zu(`${o.toString(16)} `)
                : s === 0 && o === 45 && t === 1
                ? n + zu(i)
                : o >= 128 || o === 45 || o === 95 || (o >= 48 && o <= 57) || (o >= 65 && o <= 90) || (o >= 97 && o <= 122)
                ? n + i
                : n + zu(i)
        }, "")
    },
    br = (e, t = {}, r = {}) => {
        const n = [e]
        let i
        for (let s = 0; s < n.length && !i; s++) {
            const o = n[s]
            i = r[o]
        }
        return i && Iv(i) ? i(t) : i
    },
    _B = de({
        name: "BFormValidFeedback",
        props: {
            ariaLive: { type: String, required: !1 },
            forceShow: { type: Boolean, default: !1 },
            id: { type: String, required: !1 },
            role: { type: String, required: !1 },
            state: { type: Boolean, default: void 0 },
            tag: { type: String, default: "div" },
            tooltip: { type: Boolean, default: !1 },
        },
        setup(e) {
            const t = P(() => e.forceShow === !0 || e.state === !0),
                r = P(() => ({ "d-block": t.value, "valid-feedback": !e.tooltip, "valid-tooltip": e.tooltip }))
            return {
                attrs: P(() => ({
                    id: e.id || null,
                    role: e.role || null,
                    "aria-live": e.ariaLive || null,
                    "aria-atomic": e.ariaLive ? "true" : null,
                })),
                classes: r,
                computedShow: t,
            }
        },
    })
function wB(e, t, r, n, i, s) {
    return D(), be(ke(e.tag), Ge({ class: e.classes }, e.attrs), { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 16, ["class"])
}
var zf = ge(_B, [["render", wB]])
const EB = de({
    name: "BFormInvalidFeedback",
    props: {
        ariaLive: { type: String, required: !1 },
        forceShow: { type: Boolean, default: !1 },
        id: { type: String, required: !1 },
        role: { type: String, required: !1 },
        state: { type: Boolean, default: void 0 },
        tag: { type: String, default: "div" },
        tooltip: { type: Boolean, default: !1 },
    },
    setup(e) {
        const t = P(() => e.forceShow === !0 || e.state === !1),
            r = P(() => ({ "d-block": t.value, "invalid-feedback": !e.tooltip, "invalid-tooltip": e.tooltip }))
        return {
            attrs: P(() => ({
                id: e.id || null,
                role: e.role || null,
                "aria-live": e.ariaLive || null,
                "aria-atomic": e.ariaLive ? "true" : null,
            })),
            classes: r,
            computedShow: t,
        }
    },
})
function AB(e, t, r, n, i, s) {
    return D(), be(ke(e.tag), Ge({ class: e.classes }, e.attrs), { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 16, ["class"])
}
var jf = ge(EB, [["render", AB]])
const SB = de({ name: "BFormRow", props: { tag: { type: String, default: "div" } } })
function TB(e, t, r, n, i, s) {
    return D(), be(ke(e.tag), { class: "row d-flex flex-wrap" }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 })
}
var ja = ge(SB, [["render", TB]])
const xB = de({
    name: "BFormText",
    props: {
        id: { type: String, required: !1 },
        inline: { type: Boolean, default: !1 },
        tag: { type: String, default: "small" },
        textVariant: { type: String, default: "muted" },
    },
    setup(e) {
        const t = P(() => ({ "form-text": !e.inline, [`text-${e.textVariant}`]: e.textVariant }))
        return { attrs: P(() => ({ id: e.id || null })), classes: t }
    },
})
function CB(e, t, r, n, i, s) {
    return D(), be(ke(e.tag), Ge({ class: e.classes }, e.attrs), { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 16, ["class"])
}
var Wf = ge(xB, [["render", CB]])
const eb = ["input", "select", "textarea"],
    $B = eb.map((e) => `${e}:not([disabled])`).join(),
    NB = [...eb, "a", "button", "label"],
    BB = "label",
    kB = "invalid-feedback",
    OB = "valid-feedback",
    IB = "description",
    PB = "default",
    MB = de({
        name: "BFormGroup",
        components: { BCol: xo, BFormInvalidFeedback: jf, BFormRow: ja, BFormText: Wf, BFormValidFeedback: zf },
        props: {
            contentCols: { type: [Boolean, String, Number], required: !1 },
            contentColsLg: { type: [Boolean, String, Number], required: !1 },
            contentColsMd: { type: [Boolean, String, Number], required: !1 },
            contentColsSm: { type: [Boolean, String, Number], required: !1 },
            contentColsXl: { type: [Boolean, String, Number], required: !1 },
            description: { type: [String], required: !1 },
            disabled: { type: Boolean, default: !1 },
            feedbackAriaLive: { type: String, default: "assertive" },
            id: { type: String, required: !1 },
            invalidFeedback: { type: String, required: !1 },
            label: { type: String, required: !1 },
            labelAlign: { type: [Boolean, String, Number], required: !1 },
            labelAlignLg: { type: [Boolean, String, Number], required: !1 },
            labelAlignMd: { type: [Boolean, String, Number], required: !1 },
            labelAlignSm: { type: [Boolean, String, Number], required: !1 },
            labelAlignXl: { type: [Boolean, String, Number], required: !1 },
            labelClass: { type: [Array, Object, String], required: !1 },
            labelCols: { type: [Boolean, String, Number], required: !1 },
            labelColsLg: { type: [Boolean, String, Number], required: !1 },
            labelColsMd: { type: [Boolean, String, Number], required: !1 },
            labelColsSm: { type: [Boolean, String, Number], required: !1 },
            labelColsXl: { type: [Boolean, String, Number], required: !1 },
            labelFor: { type: String, required: !1 },
            labelSize: { type: String, required: !1 },
            labelSrOnly: { type: Boolean, default: !1 },
            state: { type: Boolean, default: null },
            tooltip: { type: Boolean, default: !1 },
            validFeedback: { type: String, required: !1 },
            validated: { type: Boolean, default: !1 },
            floating: { type: Boolean, default: !1 },
        },
        setup(e, { attrs: t }) {
            const n = ["xs", "sm", "md", "lg", "xl"],
                i = (C, B) =>
                    n.reduce((L, V) => {
                        const H = C[K0(V, `${B}Align`)] || null
                        return H && L.push(["text", V, H].filter((Q) => Q).join("-")), L
                    }, []),
                s = (C, B) =>
                    n.reduce((L, V) => {
                        let H = C[K0(V, `${B}Cols`)]
                        return (
                            (H = H === "" ? !0 : H || !1),
                            !Hu(H) && H !== "auto" && ((H = h$(H, 0)), (H = H > 0 ? H : !1)),
                            H && (L[V || (Hu(H) ? "col" : "cols")] = H),
                            L
                        )
                    }, {}),
                o = Ve(),
                a = (C, B = null) => {
                    if (FC && e.labelFor) {
                        const O = QC(`#${yB(e.labelFor)}`, o)
                        if (O) {
                            const L = "aria-describedby",
                                V = (C || "").split(za),
                                H = (B || "").split(za),
                                Q = (Rv(O, L) || "")
                                    .split(za)
                                    .filter((K) => !MC(H, K))
                                    .concat(V)
                                    .filter((K, ae, z) => z.indexOf(K) === ae)
                                    .filter((K) => K)
                                    .join(" ")
                                    .trim()
                            Q ? t$(O, L, Q) : r$(O, L)
                        }
                    }
                },
                l = P(() => s(e, "content")),
                u = P(() => i(e, "label")),
                c = P(() => s(e, "label")),
                d = P(() => Object.keys(l.value).length > 0 || Object.keys(c.value).length > 0),
                h = P(() => (Hu(e.state) ? e.state : null)),
                v = P(() => {
                    const C = h.value
                    return C === !0 ? "is-valid" : C === !1 ? "is-invalid" : null
                }),
                b = P(() =>
                    t.ariaInvalid === !0 || t.ariaInvalid === "true" || t.ariaInvalid === "" || h.value === !1 ? "true" : t.ariaInvalid
                )
            return (
                Tt(
                    () => null,
                    (C, B) => {
                        C !== B && a(C, B)
                    }
                ),
                zt(() => {
                    cn(() => {
                        a(null)
                    })
                }),
                {
                    ariaDescribedby: null,
                    computedAriaInvalid: b,
                    contentColProps: l,
                    isHorizontal: d,
                    labelAlignClasses: u,
                    labelColProps: c,
                    onLegendClick: (C) => {
                        if (e.labelFor) return
                        const { target: B } = C,
                            O = B ? B.tagName : ""
                        if (NB.indexOf(O) !== -1) return
                        const L = e$($B, o).filter(ZC)
                        L.length === 1 && JC(L[0])
                    },
                    stateClass: v,
                }
            )
        },
        render() {
            const e = this.$props,
                t = this.$slots,
                r = nr(),
                n = !e.labelFor
            let i = null
            const s = br(BB, {}, t) || e.label,
                o = s ? In("_BV_label_") : null
            if (s || this.isHorizontal) {
                const V = n ? "legend" : "label"
                if (e.labelSrOnly)
                    s && (i = Ae(V, { class: "visually-hidden", id: o, for: e.labelFor || null }, s)),
                        this.isHorizontal ? (i = Ae(xo, this.labelColProps, { default: () => i })) : (i = Ae("div", {}, [i]))
                else {
                    const H = Bt(Me({ onClick: n ? this.onLegendClick : null }, this.isHorizontal ? this.labelColProps : {}), {
                        tag: this.isHorizontal ? V : null,
                        id: o,
                        for: e.labelFor || null,
                        tabIndex: n ? "-1" : null,
                        class: [
                            {
                                "bv-no-focus-ring": n,
                                "col-form-label": this.isHorizontal || n,
                                "pt-0": !this.isHorizontal && n,
                                "d-block": !this.isHorizontal && !n,
                                [`col-form-label-${e.labelSize}`]: !!e.labelSize,
                            },
                            this.labelAlignClasses,
                            e.labelClass,
                        ],
                    })
                    this.isHorizontal ? (i = Ae(xo, H, { default: () => s })) : (i = Ae(V, H, s))
                }
            }
            let a = null
            const l = br(kB, {}, t) || this.invalidFeedback,
                u = l ? In("_BV_feedback_invalid_") : null
            l &&
                (a = Ae(
                    jf,
                    { ariaLive: e.feedbackAriaLive, id: u, state: e.state, tooltip: e.tooltip, tabindex: l ? "-1" : null },
                    { default: () => l }
                ))
            let c = null
            const d = br(OB, {}, t) || this.validFeedback,
                h = d ? In("_BV_feedback_valid_") : null
            d &&
                (c = Ae(
                    zf,
                    { ariaLive: e.feedbackAriaLive, id: h, state: e.state, tooltip: e.tooltip, tabindex: d ? "-1" : null },
                    { default: () => d }
                ))
            let v = null
            const b = br(IB, {}, t) || this.description,
                _ = b ? In("_BV_description_") : null
            b && (v = Ae(Wf, { id: _, tabindex: "-1" }, { default: () => b }))
            const C = (this.ariaDescribedby = [_, e.state === !1 ? u : null, e.state === !0 ? h : null].filter((V) => V).join(" ") || null),
                B = [br(PB, { ariaDescribedby: C, descriptionId: _, id: r, labelId: o }, t) || "", a, c, v]
            !this.isHorizontal && e.floating && B.push(i)
            let O = Ae("div", { ref: "content", class: [{ "form-floating": !this.isHorizontal && e.floating }] }, B)
            this.isHorizontal && (O = Ae(xo, Me({ ref: "content" }, this.contentColProps), { default: () => B }))
            const L = {
                class: ["mb-3", this.stateClass, { "was-validated": e.validated }],
                id: nr(e.id).value,
                disabled: n ? e.disabled : null,
                role: n ? null : "group",
                "aria-invalid": this.computedAriaInvalid,
                "aria-labelledby": n && this.isHorizontal ? o : null,
            }
            return this.isHorizontal && !n
                ? Ae(ja, L, { default: () => [i, O] })
                : Ae(
                      n ? "fieldset" : "div",
                      L,
                      this.isHorizontal && n ? [Ae(ja, {}, { default: () => [i, O] })] : this.isHorizontal || !e.floating ? [i, O] : [O]
                  )
        },
    }),
    tb = {
        ariaInvalid: { type: [Boolean, String], default: !1 },
        autocomplete: { type: String, required: !1 },
        autofocus: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        form: { type: String, required: !1 },
        formatter: { type: Function, required: !1 },
        id: { type: String, required: !1 },
        lazy: { type: Boolean, default: !1 },
        lazyFormatter: { type: Boolean, default: !1 },
        list: { type: String, required: !1 },
        modelValue: { type: [String, Number], default: "" },
        name: { type: String, required: !1 },
        number: { type: Boolean, default: !1 },
        placeholder: { type: String, required: !1 },
        plaintext: { type: Boolean, default: !1 },
        readonly: { type: Boolean, default: !1 },
        required: { type: Boolean, default: !1 },
        size: { type: String, required: !1 },
        state: { type: Boolean, default: null },
        trim: { type: Boolean, default: !1 },
    }
function rb(e, t) {
    const r = Ve()
    let n = null,
        i = !0
    const s = nr(e.id, "input"),
        o = (_, C, B = !1) => ((_ = String(_)), typeof e.formatter == "function" && (!e.lazyFormatter || B) ? ((i = !1), e.formatter(_, C)) : _),
        a = (_) => (e.trim ? _.trim() : e.number ? parseFloat(_) : _),
        l = () => {
            cn(() => {
                var _
                e.autofocus && ((_ = r.value) == null || _.focus())
            })
        }
    zt(l),
        zt(() => {
            r.value && (r.value.value = e.modelValue)
        }),
        dc(l)
    const u = P(() => (e.ariaInvalid ? e.ariaInvalid.toString() : e.state === !1 ? "true" : void 0)),
        c = (_) => {
            const { value: C } = _.target,
                B = o(C, _)
            if (B === !1 || _.defaultPrevented) {
                _.preventDefault()
                return
            }
            if (e.lazy) return
            t("input", B)
            const O = a(B)
            e.modelValue !== O && ((n = C), t("update:modelValue", O))
        },
        d = (_) => {
            const { value: C } = _.target,
                B = o(C, _)
            if (B === !1 || _.defaultPrevented) {
                _.preventDefault()
                return
            }
            if (!e.lazy) return
            ;(n = C), t("update:modelValue", B)
            const O = a(B)
            e.modelValue !== O && t("change", B)
        },
        h = (_) => {
            if ((t("blur", _), !e.lazy && !e.lazyFormatter)) return
            const { value: C } = _.target,
                B = o(C, _, !0)
            ;(n = C), t("update:modelValue", B)
        },
        v = () => {
            var _
            e.disabled || (_ = r.value) == null || _.focus()
        },
        b = () => {
            var _
            e.disabled || (_ = r.value) == null || _.blur()
        }
    return (
        Tt(
            () => e.modelValue,
            (_) => {
                !r.value || ((r.value.value = n && i ? n : _), (n = null), (i = !0))
            }
        ),
        { input: r, computedId: s, computedAriaInvalid: u, onInput: c, onChange: d, onBlur: h, focus: v, blur: b }
    )
}
const Q0 = ["text", "number", "email", "password", "search", "url", "tel", "date", "time", "range", "color"],
    RB = de({
        name: "BFormInput",
        props: Bt(Me({}, tb), {
            max: { type: [String, Number], required: !1 },
            min: { type: [String, Number], required: !1 },
            step: { type: [String, Number], required: !1 },
            type: { type: String, default: "text", validator: (e) => Q0.includes(e) },
        }),
        emits: ["update:modelValue", "change", "blur", "input"],
        setup(e, { emit: t }) {
            const r = P(() => {
                    const h = e.type === "range",
                        v = e.type === "color"
                    return {
                        "form-range": h,
                        "form-control": v || (!e.plaintext && !h),
                        "form-control-color": v,
                        "form-control-plaintext": e.plaintext && !h && !v,
                        [`form-control-${e.size}`]: e.size,
                        "is-valid": e.state === !0,
                        "is-invalid": e.state === !1,
                    }
                }),
                n = P(() => (Q0.includes(e.type) ? e.type : "text")),
                { input: i, computedId: s, computedAriaInvalid: o, onInput: a, onChange: l, onBlur: u, focus: c, blur: d } = rb(e, t)
            return {
                classes: r,
                localType: n,
                input: i,
                computedId: s,
                computedAriaInvalid: o,
                onInput: a,
                onChange: l,
                onBlur: u,
                focus: c,
                blur: d,
            }
        },
    }),
    LB = [
        "id",
        "name",
        "form",
        "type",
        "disabled",
        "placeholder",
        "required",
        "autocomplete",
        "readonly",
        "min",
        "max",
        "step",
        "list",
        "aria-required",
        "aria-invalid",
    ]
function DB(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "input",
            Ge(
                {
                    id: e.computedId,
                    ref: "input",
                    class: e.classes,
                    name: e.name || void 0,
                    form: e.form || void 0,
                    type: e.localType,
                    disabled: e.disabled,
                    placeholder: e.placeholder,
                    required: e.required,
                    autocomplete: e.autocomplete || void 0,
                    readonly: e.readonly || e.plaintext,
                    min: e.min,
                    max: e.max,
                    step: e.step,
                    list: e.type !== "password" ? e.list : void 0,
                    "aria-required": e.required ? "true" : void 0,
                    "aria-invalid": e.computedAriaInvalid,
                },
                e.$attrs,
                {
                    onInput: t[0] || (t[0] = (o) => e.onInput(o)),
                    onChange: t[1] || (t[1] = (o) => e.onChange(o)),
                    onBlur: t[2] || (t[2] = (o) => e.onBlur(o)),
                }
            ),
            null,
            16,
            LB
        )
    )
}
var FB = ge(RB, [["render", DB]])
const VB = de({
        name: "BFormRadio",
        props: {
            ariaLabel: { type: String },
            ariaLabelledBy: { type: String },
            autofocus: { type: Boolean, default: !1 },
            modelValue: { type: [Boolean, String, Array, Object, Number], default: null },
            plain: { type: Boolean, default: !1 },
            button: { type: Boolean, default: !1 },
            switch: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            buttonVariant: { type: String, default: "secondary" },
            form: { type: String },
            id: { type: String },
            inline: { type: Boolean, default: !1 },
            name: { type: String },
            required: { type: Boolean, default: !1 },
            size: { type: String },
            state: { type: Boolean, default: null },
            value: { type: [String, Boolean, Object, Number], default: !0 },
        },
        emits: ["update:modelValue", "change", "input"],
        setup(e, { emit: t }) {
            const r = nr(e.id, "form-check"),
                n = Ve(null),
                i = Ve(!1),
                s = P({
                    get: () => e.modelValue,
                    set: (v) => {
                        t("input", v), t("change", v), t("update:modelValue", v)
                    },
                }),
                o = () => {
                    ;(i.value = !0), e.disabled || n.value.focus()
                },
                a = () => {
                    ;(i.value = !1), e.disabled || n.value.blur()
                },
                l = P(() =>
                    Array.isArray(e.modelValue)
                        ? (e.modelValue || []).find((v) => v === e.value)
                        : JSON.stringify(e.modelValue) === JSON.stringify(e.value)
                ),
                u = Kv(e),
                c = Gv(e),
                d = Yv(e),
                h = async (v) => {
                    Array.isArray(e.modelValue)
                        ? (e.modelValue || [])[0] !== e.value && (s.value = [e.value])
                        : v && e.modelValue !== e.value && (s.value = e.value)
                }
            return (
                Tt(
                    () => e.modelValue,
                    (v) => {
                        t("input", v)
                    }
                ),
                e.autofocus &&
                    zt(() => {
                        n.value.focus()
                    }),
                {
                    localChecked: s,
                    computedId: r,
                    classes: u,
                    inputClasses: c,
                    labelClasses: d,
                    isChecked: l,
                    isFocused: i,
                    input: n,
                    handleClick: h,
                    focus: o,
                    blur: a,
                }
            )
        },
    }),
    qB = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "checked", "aria-required"],
    HB = ["for"]
function UB(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "div",
            { class: ve(e.classes) },
            [
                qe(
                    "input",
                    Ge({ id: e.computedId }, e.$attrs, {
                        ref: "input",
                        class: e.inputClasses,
                        type: "radio",
                        disabled: e.disabled,
                        required: e.name && e.required,
                        name: e.name,
                        form: e.form,
                        "aria-label": e.ariaLabel,
                        "aria-labelledby": e.ariaLabelledBy,
                        value: e.value,
                        checked: e.isChecked,
                        "aria-required": e.name && e.required ? "true" : null,
                        onClick: t[0] || (t[0] = xl((o) => e.handleClick(o.target.checked), ["stop"])),
                        onFocus: t[1] || (t[1] = (...o) => e.focus && e.focus(...o)),
                        onBlur: t[2] || (t[2] = (...o) => e.blur && e.blur(...o)),
                    }),
                    null,
                    16,
                    qB
                ),
                e.$slots.default || !e.plain
                    ? (D(),
                      se(
                          "label",
                          { key: 0, for: e.computedId, class: ve([e.labelClasses, { active: e.isChecked, focus: e.isFocused }]) },
                          [ue(e.$slots, "default")],
                          10,
                          HB
                      ))
                    : Ie("", !0),
            ],
            2
        )
    )
}
var zB = ge(VB, [["render", UB]])
const jB = de({
        name: "BFormRadioGroup",
        props: {
            modelValue: { type: [String, Boolean, Array, Object, Number], default: "" },
            ariaInvalid: { type: [Boolean, String], default: null },
            autofocus: { type: Boolean, default: !1 },
            buttonVariant: { type: String, default: "secondary" },
            buttons: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            disabledField: { type: String, default: "disabled" },
            form: { type: String },
            htmlField: { type: String, default: "html" },
            id: { type: String },
            name: { type: String },
            options: { type: Array, default: () => [] },
            plain: { type: Boolean, default: !1 },
            required: { type: Boolean, default: !1 },
            size: { type: String },
            stacked: { type: Boolean, default: !1 },
            state: { type: Boolean, default: null },
            textField: { type: String, default: "text" },
            validated: { type: Boolean, default: !1 },
            valueField: { type: String, default: "value" },
        },
        emits: ["update:modelValue", "input", "change"],
        setup(e, { emit: t, slots: r }) {
            const n = "BFormRadio",
                i = nr(e.id, "radio"),
                s = nr(e.name, "checkbox"),
                o = P({
                    get: () => e.modelValue,
                    set: (d) => {
                        t("input", d), t("update:modelValue", d), t("change", d)
                    },
                }),
                a = P(() =>
                    (r.first ? hl(r.first(), n, e.disabled) : [])
                        .concat(e.options.map((d) => Zv(d, e)))
                        .concat(r.default ? hl(r.default(), n, e.disabled) : [])
                        .map((d, h) => Qv(d, h, e, s, i))
                        .map((d) => {
                            var h, v
                            return Bt(Me({}, d), {
                                model:
                                    JSON.stringify(e.modelValue) === JSON.stringify((h = d.props) == null ? void 0 : h.value)
                                        ? (v = d.props) == null
                                            ? void 0
                                            : v.value
                                        : null,
                            })
                        })
                ),
                l = (d) => {
                    t("change", d), t("update:modelValue", d)
                },
                u = Jv(e),
                c = Xv(e)
            return { attrs: u, classes: c, checkboxList: a, childUpdated: l, computedId: i, localChecked: o }
        },
    }),
    WB = ["id"],
    KB = ["innerHTML"],
    GB = ["textContent"]
function YB(e, t, r, n, i, s) {
    const o = jt("b-form-radio")
    return (
        D(),
        se(
            "div",
            Ge(e.attrs, { id: e.computedId, role: "radiogroup", class: [e.classes, "bv-no-focus-ring"], tabindex: "-1" }),
            [
                (D(!0),
                se(
                    St,
                    null,
                    hn(
                        e.checkboxList,
                        (a, l) => (
                            D(),
                            be(
                                o,
                                Ge({ key: l, modelValue: a.model, "onUpdate:modelValue": (u) => (a.model = u) }, a.props, {
                                    onChange: e.childUpdated,
                                }),
                                {
                                    default: Te(() => [
                                        a.html
                                            ? (D(), se("span", { key: 0, innerHTML: a.html }, null, 8, KB))
                                            : (D(), se("span", { key: 1, textContent: tt(a.text) }, null, 8, GB)),
                                    ]),
                                    _: 2,
                                },
                                1040,
                                ["modelValue", "onUpdate:modelValue", "onChange"]
                            )
                        )
                    ),
                    128
                )),
            ],
            16,
            WB
        )
    )
}
var JB = ge(jB, [["render", YB]])
const XB = de({ name: "BFormSelectOption", props: { value: { required: !0 }, disabled: { type: Boolean, default: !1 } } }),
    ZB = ["value", "disabled"]
function QB(e, t, r, n, i, s) {
    var o
    return D(), se("option", { value: (o = e.value) != null ? o : "", disabled: e.disabled }, [ue(e.$slots, "default")], 8, ZB)
}
var ed = ge(XB, [["render", QB]])
const ws = (e, t) => {
        if (!e) return e
        if (t in e) return e[t]
        const r = t.split(".")
        return ws(e[r[0]], r.splice(1).join("."))
    },
    ju = (e, t = null, r, n) => {
        if (Object.prototype.toString.call(e) === "[object Object]") {
            const i = ws(e, n.valueField),
                s = ws(e, n.textField),
                o = ws(e, n.htmlField),
                a = ws(e, n.disabledField),
                l = e[n.optionsField] || null
            return l !== null
                ? { label: String(ws(e, n.labelField) || s), options: td(l, r, n) }
                : { value: typeof i == "undefined" ? t || s : i, text: String(typeof s == "undefined" ? t : s), html: o, disabled: Boolean(a) }
        }
        return { value: t || e, text: String(e), disabled: !1 }
    },
    td = (e, t, r) =>
        Array.isArray(e)
            ? e.map((n) => ju(n, null, t, r))
            : Object.prototype.toString.call(e) === "[object Object]"
            ? (console.warn(`[BootstrapVue warn]: ${t} - Setting prop "options" to an object is deprecated. Use the array format instead.`),
              Object.keys(e).map((n) => {
                  const i = e[n]
                  switch (typeof i) {
                      case "object":
                          return ju(i.text, String(i.value), t, r)
                      default:
                          return ju(i, String(n), t, r)
                  }
              }))
            : [],
    ek = de({
        name: "BFormSelectOptionGroup",
        components: { BFormSelectOption: ed },
        props: {
            label: { type: String, required: !0 },
            disabledField: { type: String, default: "disabled" },
            htmlField: { type: String, default: "html" },
            options: { type: [Array, Object], default: () => [] },
            textField: { type: String, default: "text" },
            valueField: { type: String, default: "value" },
        },
        setup(e) {
            return { formOptions: P(() => td(e.options, "BFormSelectOptionGroup", e)) }
        },
    }),
    tk = ["label"]
function rk(e, t, r, n, i, s) {
    const o = jt("b-form-select-option")
    return (
        D(),
        se(
            "optgroup",
            { label: e.label },
            [
                ue(e.$slots, "first"),
                (D(!0),
                se(
                    St,
                    null,
                    hn(
                        e.formOptions,
                        (a, l) => (
                            D(),
                            be(
                                o,
                                Ge({ key: `option_${l}`, value: a.value, disabled: a.disabled }, e.$attrs, { innerHTML: a.html || a.text }),
                                null,
                                16,
                                ["value", "disabled", "innerHTML"]
                            )
                        )
                    ),
                    128
                )),
                ue(e.$slots, "default"),
            ],
            8,
            tk
        )
    )
}
var nb = ge(ek, [["render", rk]])
const nk = de({
        name: "BFormSelect",
        components: { BFormSelectOption: ed, BFormSelectOptionGroup: nb },
        props: {
            ariaInvalid: { type: [Boolean, String], default: !1 },
            autofocus: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            disabledField: { type: String, default: "disabled" },
            form: { type: String, required: !1 },
            htmlField: { type: String, default: "html" },
            id: { type: String, required: !1 },
            labelField: { type: String, default: "label" },
            multiple: { type: Boolean, default: !1 },
            name: { type: String, required: !1 },
            options: { type: [Array, Object], default: () => [] },
            optionsField: { type: String, default: "options" },
            plain: { type: Boolean, default: !1 },
            required: { type: Boolean, default: !1 },
            selectSize: { type: Number, default: 0 },
            size: { type: String, required: !1 },
            state: { type: Boolean, default: null },
            textField: { type: String, default: "text" },
            valueField: { type: String, default: "value" },
            modelValue: { type: [String, Array, Object, Number], default: "" },
        },
        emits: ["update:modelValue", "change", "input"],
        setup(e, { emit: t }) {
            const r = Ve(),
                n = nr(e.id, "input"),
                i = () => {
                    cn(() => {
                        var h
                        e.autofocus && ((h = r.value) == null || h.focus())
                    })
                }
            zt(i), dc(i)
            const s = P(() => ({
                    "form-control": e.plain,
                    [`form-control-${e.size}`]: e.size && e.plain,
                    "form-select": !e.plain,
                    [`form-select-${e.size}`]: e.size && !e.plain,
                    "is-valid": e.state === !0,
                    "is-invalid": e.state === !1,
                })),
                o = P(() => (e.selectSize || e.plain ? e.selectSize : null)),
                a = P(() => (e.ariaInvalid ? e.ariaInvalid.toString() : e.state === !1 ? "true" : null)),
                l = P(() => td(e.options, "BFormSelect", e)),
                u = (h) => {
                    const { target: v } = h,
                        b = Array.from(v.options)
                            .filter((_) => _.selected)
                            .map((_) => ("_value" in _ ? _._value : _.value))
                    cn(() => {
                        t("change", v.multiple ? b : b[0]), t("update:modelValue", v.multiple ? b : b[0])
                    })
                },
                c = () => {
                    var h
                    e.disabled || (h = r.value) == null || h.focus()
                },
                d = () => {
                    var h
                    e.disabled || (h = r.value) == null || h.blur()
                }
            return (
                Tt(
                    () => e.modelValue,
                    (h) => {
                        t("input", h)
                    }
                ),
                {
                    input: r,
                    computedId: n,
                    computedSelectSize: o,
                    computedAriaInvalid: a,
                    classes: s,
                    formOptions: l,
                    onChange: u,
                    focus: c,
                    blur: d,
                }
            )
        },
    }),
    ik = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid", "value"]
function sk(e, t, r, n, i, s) {
    const o = jt("b-form-select-option-group"),
        a = jt("b-form-select-option")
    return (
        D(),
        se(
            "select",
            Ge(
                {
                    id: e.computedId,
                    ref: "input",
                    class: e.classes,
                    name: e.name,
                    form: e.form || null,
                    multiple: e.multiple || null,
                    size: e.computedSelectSize,
                    disabled: e.disabled,
                    required: e.required,
                    "aria-required": e.required ? "true" : null,
                    "aria-invalid": e.computedAriaInvalid,
                },
                e.$attrs,
                { value: e.modelValue, onChange: t[0] || (t[0] = (l) => e.onChange(l)) }
            ),
            [
                ue(e.$slots, "first"),
                (D(!0),
                se(
                    St,
                    null,
                    hn(
                        e.formOptions,
                        (l, u) => (
                            D(),
                            se(
                                St,
                                null,
                                [
                                    Array.isArray(l.options)
                                        ? (D(), be(o, { key: `option_${u}`, label: l.label, options: l.options }, null, 8, ["label", "options"]))
                                        : (D(),
                                          be(
                                              a,
                                              { key: `option2_${u}`, value: l.value, disabled: l.disabled, innerHTML: l.html || l.text },
                                              null,
                                              8,
                                              ["value", "disabled", "innerHTML"]
                                          )),
                                ],
                                64
                            )
                        )
                    ),
                    256
                )),
                ue(e.$slots, "default"),
            ],
            16,
            ik
        )
    )
}
var ok = ge(nk, [["render", sk]])
const ak = de({
        name: "BFormTextarea",
        props: Bt(Me({}, tb), {
            noResize: { type: Boolean, default: !1 },
            rows: { type: [String, Number], required: !1, default: 2 },
            wrap: { type: String, default: "soft" },
        }),
        emits: ["update:modelValue", "change", "blur", "input"],
        setup(e, { emit: t }) {
            const r = P(() => ({
                    "form-control": !e.plaintext,
                    "form-control-plaintext": e.plaintext,
                    [`form-control-${e.size}`]: e.size,
                    "is-valid": e.state === !0,
                    "is-invalid": e.state === !1,
                })),
                n = P(() => (e.noResize ? { resize: "none" } : void 0)),
                { input: i, computedId: s, computedAriaInvalid: o, onInput: a, onChange: l, onBlur: u, focus: c, blur: d } = rb(e, t)
            return {
                input: i,
                computedId: s,
                computedAriaInvalid: o,
                onInput: a,
                onChange: l,
                onBlur: u,
                focus: c,
                blur: d,
                classes: r,
                computedStyles: n,
            }
        },
    }),
    lk = [
        "id",
        "name",
        "form",
        "disabled",
        "placeholder",
        "required",
        "autocomplete",
        "readonly",
        "aria-required",
        "aria-invalid",
        "rows",
        "wrap",
    ]
function uk(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "textarea",
            Ge(
                {
                    id: e.computedId,
                    ref: "input",
                    class: e.classes,
                    name: e.name || void 0,
                    form: e.form || void 0,
                    disabled: e.disabled,
                    placeholder: e.placeholder,
                    required: e.required,
                    autocomplete: e.autocomplete || void 0,
                    readonly: e.readonly || e.plaintext,
                    "aria-required": e.required ? "true" : void 0,
                    "aria-invalid": e.computedAriaInvalid,
                    rows: e.rows,
                    style: e.computedStyles,
                    wrap: e.wrap || void 0,
                },
                e.$attrs,
                {
                    onInput: t[0] || (t[0] = (o) => e.onInput(o)),
                    onChange: t[1] || (t[1] = (o) => e.onChange(o)),
                    onBlur: t[2] || (t[2] = (o) => e.onBlur(o)),
                }
            ),
            null,
            16,
            lk
        )
    )
}
var fk = ge(ak, [["render", uk]])
const ck =
        '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',
    dk = (e, t, r) =>
        `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(ck.replace("%{w}", String(e)).replace("%{h}", String(t)).replace("%{f}", r))}`,
    hk = de({
        name: "BImg",
        props: {
            alt: { type: String, default: void 0 },
            blank: { type: Boolean, default: !1 },
            blankColor: { type: String, default: "transparent" },
            block: { type: Boolean, default: !1 },
            center: { type: Boolean, default: !1 },
            fluid: { type: Boolean, default: !1 },
            fluidGrow: { type: Boolean, default: !1 },
            height: { type: [Number, String], required: !1 },
            left: { type: Boolean, default: !1 },
            right: { type: Boolean, default: !1 },
            rounded: { type: [Boolean, String], default: !1 },
            sizes: { type: [String, Array], required: !1 },
            src: { type: String, required: !1 },
            srcset: { type: [String, Array], required: !1 },
            thumbnail: { type: Boolean, default: !1 },
            width: { type: [Number, String], required: !1 },
        },
        setup(e) {
            const t = P(() => {
                    let n = e.src,
                        i = (typeof e.width == "number" ? e.width : parseInt(e.width, 10)) || null,
                        s = (typeof e.height == "number" ? e.height : parseInt(e.height, 10)) || null,
                        o = ""
                    typeof e.srcset == "string"
                        ? (o = e.srcset
                              .split(",")
                              .filter((l) => l)
                              .join(","))
                        : Array.isArray(e.srcset) && (o = e.srcset.filter((l) => l).join(","))
                    let a = ""
                    return (
                        typeof e.sizes == "string"
                            ? (a = e.sizes
                                  .split(",")
                                  .filter((l) => l)
                                  .join(","))
                            : Array.isArray(e.sizes) && (a = e.sizes.filter((l) => l).join(",")),
                        e.blank &&
                            (!s && i ? (s = i) : !i && s && (i = s),
                            !i && !s && ((i = 1), (s = 1)),
                            (n = dk(i, s, e.blankColor || "transparent")),
                            (o = ""),
                            (a = "")),
                        { src: n, alt: e.alt, width: i || null, height: s || null, srcset: o || null, sizes: a || null }
                    )
                }),
                r = P(() => {
                    let n = "",
                        i = e.block
                    return (
                        e.left ? (n = "float-start") : e.right ? (n = "float-end") : e.center && ((n = "mx-auto"), (i = !0)),
                        {
                            "img-thumbnail": e.thumbnail,
                            "img-fluid": e.fluid || e.fluidGrow,
                            "w-100": e.fluidGrow,
                            rounded: e.rounded === "" || e.rounded === !0,
                            [`rounded-${e.rounded}`]: typeof e.rounded == "string" && e.rounded !== "",
                            [n]: !!n,
                            "d-block": i,
                        }
                    )
                })
            return { attrs: t, classes: r }
        },
    })
function pk(e, t, r, n, i, s) {
    return D(), se("img", Ge({ class: e.classes }, e.attrs), null, 16)
}
var gk = ge(hk, [["render", pk]])
const mk = de({
        name: "BInputGroup",
        props: {
            append: { type: String, required: !1 },
            appendHtml: { type: String, required: !1 },
            id: { type: String, required: !1 },
            prepend: { type: String, required: !1 },
            prependHtml: { type: String, required: !1 },
            size: { type: String, required: !1 },
            tag: { type: String, default: "div" },
        },
        setup(e) {
            const t = P(() => ({ "input-group-sm": e.size === "sm", "input-group-lg": e.size === "lg" })),
                r = P(() => e.append || e.appendHtml),
                n = P(() => e.prepend || e.prependHtml),
                i = P(() => !!e.appendHtml),
                s = P(() => !!e.prependHtml)
            return { classes: t, hasAppend: r, hasPrepend: n, showAppendHtml: i, showPrependHtml: s }
        },
    }),
    vk = { key: 0, class: "input-group-text" },
    bk = { key: 0 },
    yk = ["innerHTML"],
    _k = { key: 0, class: "input-group-text" },
    wk = { key: 0 },
    Ek = ["innerHTML"]
function Ak(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { id: e.id, class: ve(["input-group", e.classes]), role: "group" },
            {
                default: Te(() => [
                    ue(e.$slots, "prepend", {}, () => [
                        e.hasPrepend
                            ? (D(),
                              se("span", vk, [
                                  e.showPrependHtml ? Ie("", !0) : (D(), se("span", bk, tt(e.prepend), 1)),
                                  e.showPrependHtml ? (D(), se("span", { key: 1, innerHTML: e.prependHtml }, null, 8, yk)) : Ie("", !0),
                              ]))
                            : Ie("", !0),
                    ]),
                    ue(e.$slots, "default"),
                    ue(e.$slots, "append", {}, () => [
                        e.hasAppend
                            ? (D(),
                              se("span", _k, [
                                  e.showAppendHtml ? Ie("", !0) : (D(), se("span", wk, tt(e.append), 1)),
                                  e.showAppendHtml ? (D(), se("span", { key: 1, innerHTML: e.appendHtml }, null, 8, Ek)) : Ie("", !0),
                              ]))
                            : Ie("", !0),
                    ]),
                ]),
                _: 3,
            },
            8,
            ["id", "class"]
        )
    )
}
var Sk = ge(mk, [["render", Ak]])
const Tk = de({ name: "BInputGroupText", props: { tag: { type: String, default: "div" } } })
function xk(e, t, r, n, i, s) {
    return D(), be(ke(e.tag), { class: "input-group-text" }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 })
}
var ib = ge(Tk, [["render", xk]])
const Ck = de({
    name: "BInputGroupAddon",
    components: { BInputGroupText: ib },
    props: {
        append: { type: Boolean, default: !1 },
        id: { type: String, required: !1 },
        isText: { type: Boolean, default: !1 },
        tag: { type: String, default: "div" },
    },
    setup(e) {
        return { computedClasses: P(() => ({ "input-group-append": e.append, "input-group-prepend": !e.append })) }
    },
})
function $k(e, t, r, n, i, s) {
    const o = jt("b-input-group-text")
    return (
        D(),
        be(
            ke(e.tag),
            { id: e.id, class: ve(["d-flex", e.computedClasses]) },
            {
                default: Te(() => [
                    e.isText ? (D(), be(o, { key: 0 }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 })) : Ie("", !0),
                    e.isText ? Ie("", !0) : ue(e.$slots, "default", { key: 1 }),
                ]),
                _: 3,
            },
            8,
            ["id", "class"]
        )
    )
}
var rd = ge(Ck, [["render", $k]])
const Nk = de({
    name: "BInputGroupAppend",
    components: { BInputGroupAddon: rd },
    props: { id: { type: String, required: !1 }, isText: { type: Boolean, default: !1 }, tag: { type: String, default: "div" } },
})
function Bk(e, t, r, n, i, s) {
    const o = jt("b-input-group-addon")
    return (
        D(),
        be(o, { id: e.id, "is-text": e.isText, tag: e.tag, append: "" }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 8, [
            "id",
            "is-text",
            "tag",
        ])
    )
}
var kk = ge(Nk, [["render", Bk]])
const Ok = de({
    name: "BInputGroupPrepend",
    components: { BInputGroupAddon: rd },
    props: { id: { type: String, required: !1 }, isText: { type: Boolean, default: !1 }, tag: { type: String, default: "div" } },
})
function Ik(e, t, r, n, i, s) {
    const o = jt("b-input-group-addon")
    return (
        D(),
        be(o, { id: e.id, "is-text": e.isText, tag: e.tag, append: !1 }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 8, [
            "id",
            "is-text",
            "tag",
        ])
    )
}
var Pk = ge(Ok, [["render", Ik]])
const sb = Symbol(),
    Mk = de({
        name: "BListGroup",
        props: {
            flush: { type: Boolean, default: !1 },
            horizontal: { type: [Boolean, String], default: !1 },
            numbered: { type: Boolean, default: !1 },
            tag: { type: String, default: "div" },
        },
        setup(e) {
            const t = P(() => {
                    const i = e.flush ? !1 : e.horizontal
                    return {
                        "list-group-flush": e.flush,
                        "list-group-horizontal": i === !0,
                        [`list-group-horizontal-${i}`]: typeof i == "string",
                        "list-group-numbered": e.numbered,
                    }
                }),
                r = () => (e.numbered === !0 ? "ol" : e.tag),
                n = Ve(r())
            return (
                Tt(
                    () => e.tag,
                    () => (n.value = r())
                ),
                Tt(
                    () => e.numbered,
                    () => (n.value = r())
                ),
                dn(sb, { numbered: e.numbered }),
                { classes: t, computedTag: n }
            )
        },
    })
function Rk(e, t, r, n, i, s) {
    return (
        D(),
        be(ke(e.computedTag), { class: ve(["list-group", e.classes]) }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 8, ["class"])
    )
}
var Lk = ge(Mk, [["render", Rk]])
const Dk = ["a", "router-link", "button", "b-link"],
    Fk = de({
        name: "BListGroupItem",
        props: {
            action: { type: Boolean, default: !1 },
            active: { type: Boolean, default: !1 },
            button: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            href: { type: String },
            tag: { type: String, default: "div" },
            target: { type: String, default: "_self" },
            variant: { type: String },
        },
        setup(e, t) {
            const r = Jt(sb, null),
                n = P(() => !e.button && e.href),
                i = P(() => ((r == null ? void 0 : r.numbered) ? "li" : e.button ? "button" : n.value ? "a" : e.tag)),
                s = P(() => {
                    const a = e.action || n.value || e.button || Dk.includes(e.tag)
                    return { [`list-group-item-${e.variant}`]: e.variant, "list-group-item-action": a, active: e.active, disabled: e.disabled }
                }),
                o = P(() => {
                    const a = {}
                    return e.button && ((!t.attrs || !t.attrs.type) && (a.type = "button"), e.disabled && (a.disabled = !0)), a
                })
            return { tagComputed: i, classes: s, attrs: o, link: n }
        },
    })
function Vk(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tagComputed),
            Ge(
                {
                    class: ["list-group-item", e.classes],
                    "aria-current": e.active ? !0 : null,
                    "aria-disabled": e.disabled ? !0 : null,
                    target: e.link ? e.target : null,
                    href: e.button ? null : e.href,
                },
                e.attrs
            ),
            { default: Te(() => [ue(e.$slots, "default")]), _: 3 },
            16,
            ["class", "aria-current", "aria-disabled", "target", "href"]
        )
    )
}
var qk = ge(Fk, [["render", Vk]])
const Hk = de({
        name: "BModal",
        components: { BButton: Qc },
        inheritAttrs: !1,
        props: {
            bodyBgVariant: { type: String, required: !1 },
            bodyClass: { type: String, required: !1 },
            bodyTextVariant: { type: String, required: !1 },
            busy: { type: Boolean, default: !1 },
            buttonSize: { type: String, default: "md" },
            cancelDisabled: { type: Boolean, default: !1 },
            cancelTitle: { type: String, default: "Cancel" },
            cancelVariant: { type: String, default: "secondary" },
            centered: { type: Boolean, default: !1 },
            contentClass: { type: String, required: !1 },
            dialogClass: { type: String, required: !1 },
            footerBgVariant: { type: String, required: !1 },
            footerBorderVariant: { type: String, required: !1 },
            footerClass: { type: String, required: !1 },
            footerTextVariant: { type: String, required: !1 },
            fullscreen: { type: [Boolean, String], default: !1 },
            headerBgVariant: { type: String, required: !1 },
            headerBorderVariant: { type: String, required: !1 },
            headerClass: { type: String, required: !1 },
            headerCloseLabel: { type: String, default: "Close" },
            headerCloseWhite: { type: Boolean, default: !1 },
            headerTextVariant: { type: String, required: !1 },
            hideBackdrop: { type: Boolean, default: !1 },
            hideFooter: { type: Boolean, default: !1 },
            hideHeader: { type: Boolean, default: !1 },
            hideHeaderClose: { type: Boolean, default: !1 },
            id: { type: String, required: !1 },
            modalClass: { type: String, required: !1 },
            modelValue: { type: Boolean, default: !1 },
            noCloseOnBackdrop: { type: Boolean, default: !1 },
            noCloseOnEsc: { type: Boolean, default: !1 },
            noFade: { type: Boolean, default: !1 },
            noFocus: { type: Boolean, default: !1 },
            okDisabled: { type: Boolean, default: !1 },
            okOnly: { type: Boolean, default: !1 },
            okTitle: { type: String, default: "Ok" },
            okVariant: { type: String, default: "primary" },
            scrollable: { type: Boolean, default: !1 },
            show: { type: Boolean, default: !1 },
            size: { type: String, required: !1 },
            title: { type: String, required: !1 },
            titleClass: { type: String, required: !1 },
            titleSrOnly: { type: Boolean, default: !1 },
            titleTag: { type: String, default: "h5" },
        },
        emits: ["update:modelValue", "show", "shown", "hide", "hidden", "hide-prevented", "ok", "cancel"],
        setup(e, { emit: t, slots: r }) {
            const n = Ve(),
                i = Ve(),
                s = P(() => [{ fade: !e.noFade, show: e.show }, e.modalClass]),
                o = P(() => [
                    {
                        "modal-fullscreen": typeof e.fullscreen == "boolean" ? e.fullscreen : !1,
                        [`modal-fullscreen-${e.fullscreen}-down`]: typeof e.fullscreen == "string" ? e.fullscreen : !1,
                        [`modal-${e.size}`]: e.size,
                        "modal-dialog-centered": e.centered,
                        "modal-dialog-scrollable": e.scrollable,
                    },
                    e.dialogClass,
                ]),
                a = P(() => [{ [`bg-${e.bodyBgVariant}`]: e.bodyBgVariant, [`text-${e.bodyTextVariant}`]: e.bodyTextVariant }, e.bodyClass]),
                l = P(() => [
                    {
                        [`bg-${e.headerBgVariant}`]: e.headerBgVariant,
                        [`border-${e.headerBorderVariant}`]: e.headerBorderVariant,
                        [`text-${e.headerTextVariant}`]: e.headerTextVariant,
                    },
                    e.headerClass,
                ]),
                u = P(() => [
                    {
                        [`bg-${e.footerBgVariant}`]: e.footerBgVariant,
                        [`border-${e.footerBorderVariant}`]: e.footerBorderVariant,
                        [`text-${e.footerTextVariant}`]: e.footerTextVariant,
                    },
                    e.footerClass,
                ]),
                c = P(() => [{ ["visually-hidden"]: e.titleSrOnly }, e.titleClass]),
                d = P(() => !!r["header-close"]),
                h = P(() => [{ ["btn-close-content"]: d.value, ["d-flex"]: d.value, ["btn-close-white"]: !d.value && e.headerCloseWhite }]),
                v = P(() => e.cancelDisabled || e.busy),
                b = P(() => e.okDisabled || e.busy)
            return (
                Ct(n, "shown.bs.modal", (_) => t("shown", _)),
                Ct(n, "hidden.bs.modal", (_) => t("hidden", _)),
                Ct(n, "hidePrevented.bs.modal", (_) => t("hide-prevented", _)),
                Ct(n, "show.bs.modal", (_) => {
                    t("show", _), _.defaultPrevented || t("update:modelValue", !0)
                }),
                Ct(n, "hide.bs.modal", (_) => {
                    t("hide", _), _.defaultPrevented || t("update:modelValue", !1)
                }),
                zt(() => {
                    var _
                    ;(i.value = new is(n.value, {
                        backdrop: e.hideBackdrop ? !1 : e.noCloseOnBackdrop ? "static" : !e.hideBackdrop,
                        keyboard: !e.noCloseOnEsc,
                        focus: !e.noFocus,
                    })),
                        e.modelValue && ((_ = i.value) == null || _.show())
                }),
                Tt(
                    () => e.modelValue,
                    (_) => {
                        var C, B
                        _ ? (C = i.value) == null || C.show() : (B = i.value) == null || B.hide()
                    }
                ),
                {
                    element: n,
                    disableCancel: v,
                    disableOk: b,
                    modalClasses: s,
                    modalDialogClasses: o,
                    computedBodyClasses: a,
                    computedFooterClasses: u,
                    computedHeaderClasses: l,
                    computedTitleClasses: c,
                    computedCloseButtonClasses: h,
                }
            )
        },
    }),
    Uk = ["id"],
    zk = ["aria-label"]
function jk(e, t, r, n, i, s) {
    const o = jt("b-button")
    return (
        D(),
        be(l1, { to: "body" }, [
            qe(
                "div",
                Ge({ id: e.id, ref: "element", class: ["modal", e.modalClasses], tabindex: "-1" }, e.$attrs),
                [
                    qe(
                        "div",
                        { class: ve(["modal-dialog", e.modalDialogClasses]) },
                        [
                            qe(
                                "div",
                                { class: ve(["modal-content", e.contentClass]) },
                                [
                                    e.hideHeader
                                        ? Ie("", !0)
                                        : (D(),
                                          se(
                                              "div",
                                              { key: 0, class: ve(["modal-header", e.computedHeaderClasses]) },
                                              [
                                                  (D(),
                                                  be(
                                                      ke(e.titleTag),
                                                      { class: ve(["modal-title", e.computedTitleClasses]) },
                                                      { default: Te(() => [ue(e.$slots, "title", {}, () => [Ot(tt(e.title), 1)])]), _: 3 },
                                                      8,
                                                      ["class"]
                                                  )),
                                                  e.hideHeaderClose
                                                      ? Ie("", !0)
                                                      : (D(),
                                                        se(
                                                            "button",
                                                            {
                                                                key: 0,
                                                                type: "button",
                                                                class: ve(["btn-close", e.computedCloseButtonClasses]),
                                                                "data-bs-dismiss": "modal",
                                                                "aria-label": e.headerCloseLabel,
                                                            },
                                                            [ue(e.$slots, "header-close")],
                                                            10,
                                                            zk
                                                        )),
                                              ],
                                              2
                                          )),
                                    qe("div", { class: ve(["modal-body", e.computedBodyClasses]) }, [ue(e.$slots, "default")], 2),
                                    e.hideFooter
                                        ? Ie("", !0)
                                        : (D(),
                                          se(
                                              "div",
                                              { key: 1, class: ve(["modal-footer", e.computedFooterClasses]) },
                                              [
                                                  ue(e.$slots, "footer", {}, () => [
                                                      e.okOnly
                                                          ? Ie("", !0)
                                                          : (D(),
                                                            be(
                                                                o,
                                                                {
                                                                    key: 0,
                                                                    type: "button",
                                                                    class: "btn btn-secondary",
                                                                    "data-bs-dismiss": "modal",
                                                                    disabled: e.disableCancel,
                                                                    size: e.buttonSize,
                                                                    variant: e.cancelVariant,
                                                                    onClick: t[0] || (t[0] = (a) => e.$emit("cancel")),
                                                                },
                                                                { default: Te(() => [Ot(tt(e.cancelTitle), 1)]), _: 1 },
                                                                8,
                                                                ["disabled", "size", "variant"]
                                                            )),
                                                      Rt(
                                                          o,
                                                          {
                                                              type: "button",
                                                              class: "btn btn-primary",
                                                              "data-bs-dismiss": "modal",
                                                              disabled: e.disableOk,
                                                              size: e.buttonSize,
                                                              variant: e.okVariant,
                                                              onClick: t[1] || (t[1] = (a) => e.$emit("ok")),
                                                          },
                                                          { default: Te(() => [Ot(tt(e.okTitle), 1)]), _: 1 },
                                                          8,
                                                          ["disabled", "size", "variant"]
                                                      ),
                                                  ]),
                                              ],
                                              2
                                          )),
                                ],
                                2
                            ),
                        ],
                        2
                    ),
                ],
                16,
                Uk
            ),
        ])
    )
}
var Wk = ge(Hk, [["render", jk]])
const Kk = de({
    name: "BNav",
    props: {
        align: { type: String },
        fill: { type: Boolean, default: !1 },
        justified: { type: Boolean, default: !1 },
        pills: { type: Boolean, default: !1 },
        tabs: { type: Boolean, default: !1 },
        vertical: { type: Boolean, default: !1 },
    },
    setup(e) {
        return {
            classes: P(() => ({
                "flex-column": e.vertical,
                [`justify-content-${e.align}`]: e.align,
                "nav-tabs": e.tabs,
                "nav-pills": e.pills,
                "nav-fill": e.fill,
                "nav-justified": e.justified,
            })),
        }
    },
})
function Gk(e, t, r, n, i, s) {
    return D(), se("ul", { class: ve(["nav", e.classes]) }, [ue(e.$slots, "default")], 2)
}
var Yk = ge(Kk, [["render", Gk]])
const Jk = de({
        name: "BNavItem",
        props: { active: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, href: { type: String, required: !1 } },
        setup(e) {
            return { classes: P(() => ({ active: e.active, disabled: e.disabled })) }
        },
    }),
    Xk = ["href", "tabindex", "aria-disabled"]
function Zk(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "li",
            { class: ve(["nav-item", e.classes]) },
            [
                qe(
                    "a",
                    { href: e.href, class: "nav-link", tabindex: e.disabled ? -1 : null, "aria-disabled": e.disabled ? !0 : null },
                    [ue(e.$slots, "default")],
                    8,
                    Xk
                ),
            ],
            2
        )
    )
}
var Qk = ge(Jk, [["render", Zk]])
const eO = de({
        name: "BOffcanvas",
        props: {
            modelValue: { type: Boolean, default: !1 },
            bodyScrolling: { type: Boolean, default: !1 },
            backdrop: { type: Boolean, default: !0 },
            placement: { type: String, default: "start" },
            title: { type: String, required: !0 },
        },
        emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
        setup(e, { emit: t }) {
            const r = Ve(),
                n = Ve()
            Ct(r, "shown.bs.offcanvas", () => t("shown")),
                Ct(r, "hidden.bs.offcanvas", () => t("hidden")),
                Ct(r, "show.bs.offcanvas", () => {
                    t("show"), t("update:modelValue", !0)
                }),
                Ct(r, "hide.bs.offcanvas", () => {
                    t("hide"), t("update:modelValue", !1)
                }),
                zt(() => {
                    var s
                    ;(n.value = new Ai(r.value)), e.modelValue && ((s = n.value) == null || s.show(r.value))
                })
            const i = P(() => ({ [`offcanvas-${e.placement}`]: e.placement }))
            return (
                Tt(
                    () => e.modelValue,
                    (s) => {
                        var o, a
                        s ? (o = n.value) == null || o.show(r.value) : (a = n.value) == null || a.hide()
                    }
                ),
                { element: r, classes: i }
            )
        },
    }),
    tO = ["data-bs-backdrop", "data-bs-scroll"],
    rO = { class: "offcanvas-header" },
    nO = { id: "offcanvasLabel", class: "offcanvas-title" },
    iO = qe("button", { type: "button", class: "btn-close text-reset", "data-bs-dismiss": "offcanvas", "aria-label": "Close" }, null, -1),
    sO = { class: "offcanvas-body" }
function oO(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "div",
            {
                ref: "element",
                class: ve(["offcanvas", e.classes]),
                tabindex: "-1",
                "aria-labelledby": "offcanvasLabel",
                "data-bs-backdrop": e.backdrop,
                "data-bs-scroll": e.bodyScrolling,
            },
            [
                qe("div", rO, [qe("h5", nO, [ue(e.$slots, "title", {}, () => [Ot(tt(e.title), 1)])]), iO]),
                qe("div", sO, [ue(e.$slots, "default")]),
            ],
            10,
            tO
        )
    )
}
var aO = ge(eO, [["render", oO]])
const ob = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: "",
    },
    lO = Bt(Me({}, ob), { enterActiveClass: "fade showing", leaveActiveClass: "fade showing" }),
    pl = de({
        name: "BTransition",
        props: {
            appear: { type: Boolean, default: !1 },
            mode: { type: String, required: !1 },
            noFade: { type: Boolean, default: !1 },
            transProps: { type: Object, required: !1 },
        },
        setup(e, { slots: t }) {
            const r = Ve(e.transProps)
            return (
                Pv(r.value) ||
                    ((r.value = e.noFade ? ob : lO),
                    e.appear &&
                        (r.value = Bt(Me({}, r.value), {
                            appear: !0,
                            appearClass: r.value.enterClass,
                            appearActiveClass: r.value.enterActiveClass,
                            appearToClass: r.value.enterToClass,
                        }))),
                (r.value = Bt(Me({ mode: e.mode }, r.value), { css: !0 })),
                () => Ae(wc, Me({}, r.value), { default: () => (t.default ? t.default() : []) })
            )
        },
    }),
    Wu = { top: 0, left: 0, bottom: 0, right: 0 },
    uO = "default",
    fO = "overlay",
    cO = de({
        name: "BOverlay",
        components: { BTransition: pl },
        props: {
            bgColor: { type: String, required: !1 },
            blur: { type: String, default: "2px" },
            fixed: { type: Boolean, default: !1 },
            noCenter: { type: Boolean, default: !1 },
            noFade: { type: Boolean, default: !1 },
            noWrap: { type: Boolean, default: !1 },
            opacity: {
                type: [Number, String],
                default: 0.85,
                validator: (e) => {
                    const t = Zc(e, 0)
                    return t >= 0 && t <= 1
                },
            },
            overlayTag: { type: String, default: "div" },
            rounded: { type: [Boolean, String], default: !1 },
            show: { type: Boolean, default: !1 },
            spinnerSmall: { type: Boolean, default: !1 },
            spinnerType: { type: String, default: "border" },
            spinnerVariant: { type: String, required: !1 },
            variant: { type: String, default: "light" },
            wrapTag: { type: String, default: "div" },
            zIndex: { type: [Number, String], default: 10 },
        },
        emits: ["click", "hidden", "shown"],
        setup(e, { slots: t, emit: r }) {
            const n = P(() => (e.rounded === !0 || e.rounded === "" ? "rounded" : e.rounded ? `rounded-${e.rounded}` : "")),
                i = P(() => (e.variant && !e.bgColor ? `bg-${e.variant}` : "")),
                s = P(() => ({ spinnerType: e.spinnerType || null, spinnerVariant: e.spinnerVariant || null, spinnerSmall: e.spinnerSmall }))
            return () => {
                const o = (c) => Ae(jt("BSpinner"), { type: c.spinnerType, variant: c.spinnerVariant, small: c.spinnerSmall })
                let a = ""
                if (e.show) {
                    const c = Ae("div", {
                            class: ["position-absolute", i.value, n.value],
                            style: Bt(Me({}, Wu), {
                                opacity: e.opacity,
                                backgroundColor: e.bgColor || null,
                                backdropFilter: e.blur ? `blur(${e.blur})` : null,
                            }),
                        }),
                        d = Ae(
                            "div",
                            {
                                class: "position-absolute",
                                style: e.noCenter ? Me({}, Wu) : { top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)" },
                            },
                            br(fO, s.value, t) || o(s.value) || ""
                        )
                    a = Ae(
                        e.overlayTag,
                        {
                            class: [
                                "b-overlay",
                                { "position-absolute": !e.noWrap || (e.noWrap && !e.fixed), "position-fixed": e.noWrap && e.fixed },
                            ],
                            style: Bt(Me({}, Wu), { zIndex: e.zIndex || 10 }),
                            onClick: (h) => r("click", h),
                            key: "overlay",
                        },
                        [c, d]
                    )
                }
                const l = () =>
                    Ae(
                        pl,
                        {
                            noFade: e.noFade,
                            transProps: { enterToClass: "show" },
                            name: "fade",
                            onAfterEnter: () => r("shown"),
                            onAfterLeave: () => r("hidden"),
                        },
                        { default: () => a }
                    )
                return e.noWrap
                    ? l()
                    : Ae(e.wrapTag, { class: ["b-overlay-wrap position-relative"], "aria-busy": e.show ? "true" : null }, [
                          Ae("span", br(uO, {}, t)),
                          l(),
                      ])
            }
        },
    })
function dO(e) {
    return P(() =>
        e.align === "center"
            ? "justify-content-center"
            : e.align === "end"
            ? "justify-content-end"
            : (e.align === "start", "justify-content-start")
    )
}
class Kl {
    constructor(t, r = {}) {
        if (
            ((this.cancelable = !0),
            (this.componentId = null),
            (this.defaultPrevented = !1),
            (this.nativeEvent = null),
            (this.relatedTarget = null),
            (this.target = null),
            (this.eventType = ""),
            (this.vueTarget = null),
            !t)
        )
            throw new TypeError(`Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`)
        $$(this, Kl.Defaults, this.constructor.Defaults, r, { eventType: t }),
            N$(this, { type: Hi(), cancelable: Hi(), nativeEvent: Hi(), target: Hi(), relatedTarget: Hi(), vueTarget: Hi(), componentId: Hi() })
        let n = !1
        ;(this.preventDefault = function () {
            this.cancelable && (n = !0)
        }),
            B$(this, "defaultPrevented", {
                enumerable: !0,
                get() {
                    return n
                },
            })
    }
    static get Defaults() {
        return { eventType: "", cancelable: !0, nativeEvent: null, target: null, relatedTarget: null, vueTarget: null, componentId: null }
    }
}
const hO = 5,
    ab = 20,
    lb = 0,
    Qr = 3,
    pO = "ellipsis-text",
    gO = "first-text",
    mO = "last-text",
    vO = "next-text",
    bO = "page",
    yO = "prev-text",
    ep = (e) => Math.max(Ws(e) || ab, 1),
    tp = (e) => Math.max(Ws(e) || lb, 0),
    _O = (e, t) => {
        const r = Ws(e) || 1
        return r > t ? t : r < 1 ? 1 : r
    },
    wO = de({
        name: "BPagination",
        props: {
            align: { type: String, default: "start" },
            ariaControls: { type: String, required: !1 },
            ariaLabel: { type: String, default: "Pagination" },
            disabled: { type: Boolean, default: !1 },
            ellipsisClass: { type: [Array, String], default: () => [] },
            ellipsisText: { type: String, default: "\u2026" },
            firstClass: { type: [Array, String], default: () => [] },
            firstNumber: { type: Boolean, default: !1 },
            firstText: { type: String, default: "\xAB" },
            hideEllipsis: { type: Boolean, default: !1 },
            hideGotoEndButtons: { type: Boolean, default: !1 },
            labelFirstPage: { type: String, default: "Go to first page" },
            labelLastPage: { type: String, default: "Go to last page" },
            labelNextPage: { type: String, default: "Go to next page" },
            labelPage: { type: String, default: "Go to page" },
            labelPrevPage: { type: String, default: "Go to previous page" },
            lastClass: { type: [Array, String], default: () => [] },
            lastNumber: { type: Boolean, default: !1 },
            lastText: { type: String, default: "\xBB" },
            limit: { type: Number, default: hO },
            modelValue: { type: Number, default: 1 },
            nextClass: { type: [Array, String], default: () => [] },
            nextText: { type: String, default: "\u203A" },
            pageClass: { type: [Array, String], default: () => [] },
            perPage: { type: Number, default: ab },
            pills: { type: Boolean, default: !1 },
            prevClass: { type: [Array, String], default: () => [] },
            prevText: { type: String, default: "\u2039" },
            size: { type: String, required: !1 },
            totalRows: { type: Number, default: lb },
        },
        emits: ["update:modelValue", "page-click"],
        setup(e, { emit: t, slots: r }) {
            const n = dO(e),
                i = P(() => Math.ceil(tp(e.totalRows) / ep(e.perPage))),
                s = P(() => {
                    let b = 1
                    return (
                        i.value - e.modelValue + 2 < e.limit && e.limit > Qr
                            ? (b = i.value - a.value + 1)
                            : (b = e.modelValue - Math.floor(a.value / 2)),
                        b < 1 ? (b = 1) : b > i.value - a.value && (b = i.value - a.value + 1),
                        e.limit <= Qr && e.lastNumber && i.value === b + a.value - 1 && (b = Math.max(b - 1, 1)),
                        b
                    )
                }),
                o = P(() => {
                    const b = i.value - e.modelValue
                    let _ = !1
                    return (
                        b + 2 < e.limit && e.limit > Qr ? e.limit > Qr && (_ = !0) : e.limit > Qr && (_ = !!(!e.hideEllipsis || e.firstNumber)),
                        s.value <= 1 && (_ = !1),
                        _ && e.firstNumber && s.value < 4 && (_ = !1),
                        _
                    )
                }),
                a = P(() => {
                    let b = e.limit
                    return (
                        i.value <= e.limit
                            ? (b = i.value)
                            : e.modelValue < e.limit - 1 && e.limit > Qr
                            ? ((!e.hideEllipsis || e.lastNumber) && (b = e.limit - (e.firstNumber ? 0 : 1)), (b = Math.min(b, e.limit)))
                            : i.value - e.modelValue + 2 < e.limit && e.limit > Qr
                            ? (!e.hideEllipsis || e.firstNumber) && (b = e.limit - (e.lastNumber ? 0 : 1))
                            : e.limit > Qr && (b = e.limit - (e.hideEllipsis ? 0 : 2)),
                        b
                    )
                })
            P(() => {
                let b = a.value
                o.value && e.firstNumber && s.value < 4 && (b = b + 2)
                const _ = s.value + b - 1
                return (
                    l.value && e.lastNumber && _ > i.value - 3 && (b = b + (_ === i.value - 2 ? 2 : 3)),
                    (b = Math.min(b, i.value - s.value + 1)),
                    b
                )
            })
            const l = P(() => {
                    const b = i.value - a.value
                    let _ = !1
                    e.modelValue < e.limit - 1 && e.limit > Qr
                        ? (!e.hideEllipsis || e.lastNumber) && (_ = !0)
                        : e.limit > Qr && (_ = !!(!e.hideEllipsis || e.lastNumber)),
                        s.value > b && (_ = !1)
                    const C = s.value + a.value - 1
                    return _ && e.lastNumber && C > i.value - 3 && (_ = !1), _
                }),
                u = yn({ pageSize: ep(e.perPage), totalRows: tp(e.totalRows), numberOfPages: i.value }),
                c = (b, _) => {
                    if (_ === e.modelValue) return
                    const { target: C } = b,
                        B = new Kl("page-click", { cancelable: !0, vueTarget: this, target: C })
                    t("page-click", B, _), !B.defaultPrevented && t("update:modelValue", _)
                },
                d = P(() => (e.size ? `pagination-${e.size}` : "")),
                h = P(() => (e.pills ? "b-pagination-pills" : ""))
            Tt(
                () => e.modelValue,
                (b) => {
                    const _ = _O(b, i.value)
                    _ !== e.modelValue && t("update:modelValue", _)
                }
            ),
                Tt(u, (b, _) => {
                    Bv(b) ||
                        (((_.pageSize !== b.pageSize && _.totalRows === b.totalRows) ||
                            (_.numberOfPages !== b.numberOfPages && e.modelValue > _.numberOfPages)) &&
                            t("update:modelValue", 1))
                })
            const v = P(() => {
                const b = []
                for (let _ = 0; _ < a.value; _++) b.push({ number: s.value + _, classes: null })
                return b
            })
            return () => {
                const b = [],
                    _ = v.value.map((z) => z.number),
                    C = (z) => z === e.modelValue,
                    B = e.modelValue < 1,
                    O = e.align === "fill",
                    L = (z, ye, S, f, g, y) => {
                        const w = e.disabled || C(y) || B || z < 1 || z > i.value,
                            E = z < 1 ? 1 : z > i.value ? i.value : z,
                            $ = { disabled: w, page: E, index: E - 1 },
                            k = br(S, $, r) || f || ""
                        return Ae(
                            "li",
                            { class: ["page-item", { disabled: w, "flex-fill": O, "d-flex": O && !w }, g] },
                            Ae(
                                w ? "span" : "button",
                                {
                                    class: ["page-link", { "flex-grow-1": !w && O }],
                                    "aria-label": ye,
                                    "aria-controls": e.ariaControls || null,
                                    "aria-disabled": w ? "true" : null,
                                    role: "menuitem",
                                    type: w ? null : "button",
                                    tabindex: w ? null : "-1",
                                    onClick: (A) => {
                                        w || c(A, E)
                                    },
                                },
                                k
                            )
                        )
                    },
                    V = (z) =>
                        Ae(
                            "li",
                            {
                                class: ["page-item", "disabled", "bv-d-xs-down-none", O ? "flex-fill" : "", e.ellipsisClass],
                                role: "separator",
                                key: `ellipsis-${z ? "last" : "first"}`,
                            },
                            [Ae("span", { class: ["page-link"] }, br(pO, {}, r) || e.ellipsisText || "...")]
                        ),
                    H = (z, ye) => {
                        const S = C(z.number) && !B,
                            f = e.disabled ? null : S || (B && ye === 0) ? "0" : "-1",
                            g = { active: S, disabled: e.disabled, page: z.number, index: z.number - 1, content: z.number },
                            y = br(bO, g, r) || z.number,
                            w = Ae(
                                e.disabled ? "span" : "button",
                                {
                                    class: ["page-link", { "flex-grow-1": !e.disabled && O }],
                                    "aria-controls": e.ariaControls || null,
                                    "aria-disabled": e.disabled ? "true" : null,
                                    "aria-label": e.labelPage ? `${e.labelPage} ${z.number}` : null,
                                    role: "menuitemradio",
                                    type: e.disabled ? null : "button",
                                    tabindex: f,
                                    onClick: (E) => {
                                        e.disabled || c(E, z.number)
                                    },
                                },
                                y
                            )
                        return Ae(
                            "li",
                            {
                                class: [
                                    "page-item",
                                    { disabled: e.disabled, active: S, "flex-fill": O, "d-flex": O && !e.disabled },
                                    e.pageClass,
                                ],
                                role: "presentation",
                                key: `page-${z.number}`,
                            },
                            w
                        )
                    }
                if (!e.hideGotoEndButtons && !e.firstNumber) {
                    const z = L(1, e.labelFirstPage, gO, e.firstText, e.firstClass, 1)
                    b.push(z)
                }
                const Q = L(e.modelValue - 1, e.labelFirstPage, yO, e.prevText, e.prevClass, 1)
                b.push(Q),
                    e.firstNumber && _[0] !== 1 && b.push(H({ number: 1 }, 0)),
                    o.value && b.push(V(!1)),
                    v.value.forEach((z, ye) => {
                        const S = o.value && e.firstNumber && _[0] !== 1 ? 1 : 0
                        b.push(H(z, ye + S))
                    }),
                    l.value && b.push(V(!0)),
                    e.lastNumber && _[_.length - 1] !== i.value && b.push(H({ number: i.value }, -1))
                const K = L(e.modelValue + 1, e.labelNextPage, vO, e.nextText, e.nextClass, i.value)
                if ((b.push(K), !e.lastNumber && !e.hideGotoEndButtons)) {
                    const z = L(i.value, e.labelLastPage, mO, e.lastText, e.lastClass, i.value)
                    b.push(z)
                }
                return Ae(
                    "ul",
                    {
                        class: ["pagination", d.value, n.value, h.value],
                        role: "menubar",
                        "aria-disabled": e.disabled,
                        "aria-label": e.ariaLabel || null,
                    },
                    b
                )
            }
        },
    }),
    EO = de({
        name: "BPopover",
        props: {
            container: { type: [String, Object], default: "body" },
            content: { type: String },
            id: { type: String },
            noninteractive: { type: Boolean, default: !1 },
            placement: { type: String, default: "right" },
            target: { type: [String, Object], default: void 0 },
            title: { type: String },
            triggers: { type: String, default: "click" },
            show: { type: Boolean, default: !1 },
            variant: { type: String, default: void 0 },
            html: { type: Boolean, default: !0 },
            sanitize: { type: Boolean, default: !1 },
        },
        emits: ["show", "shown", "hide", "hidden", "inserted"],
        setup(e, { emit: t, slots: r }) {
            const n = Ve(),
                i = Ve(),
                s = Ve(),
                o = Ve(),
                a = Ve(),
                l = P(() => ({ [`b-popover-${e.variant}`]: e.variant })),
                u = (d) => {
                    if (typeof d == "string") return d
                    if (d instanceof HTMLElement) return d
                    if (typeof d != "undefined") return d.$el
                },
                c = (d) => {
                    if (!!d) {
                        if (typeof d == "string") {
                            const h = document.getElementById(d)
                            return h || void 0
                        }
                        return d
                    }
                }
            return (
                zt(() => {
                    var d, h, v
                    cn(() => {
                        ;(i.value = c(u(e.target))),
                            i.value
                                ? (s.value = new zs(i.value, {
                                      container: u(e.container),
                                      trigger: e.triggers,
                                      placement: e.placement,
                                      title: e.title || r.title ? o.value : "",
                                      content: a.value,
                                      html: e.html,
                                      sanitize: e.sanitize,
                                  }))
                                : console.warn("[B-Popover] Target is a mandatory props.")
                    }),
                        (h = (d = n.value) == null ? void 0 : d.parentNode) == null || h.removeChild(n.value),
                        e.show && ((v = s.value) == null || v.show())
                }),
                Tt(
                    () => e.show,
                    (d, h) => {
                        var v, b
                        d !== h && (d ? (v = s.value) == null || v.show() : (b = s.value) == null || b.hide())
                    }
                ),
                Ct(i, "show.bs.popover", () => t("show")),
                Ct(i, "shown.bs.popover", () => t("shown")),
                Ct(i, "hide.bs.popover", () => t("hide")),
                Ct(i, "hidden.bs.popover", () => t("hidden")),
                Ct(i, "inserted.bs.popover", () => t("inserted")),
                { element: n, titleRef: o, contentRef: a, classes: l }
            )
        },
    }),
    AO = ["id"],
    SO = { ref: "titleRef" },
    TO = { ref: "contentRef" }
function xO(e, t, r, n, i, s) {
    return (
        D(),
        se(
            "div",
            { id: e.id, ref: "element", class: ve(["popover b-popover", e.classes]), role: "tooltip", tabindex: "-1" },
            [
                qe("div", SO, [ue(e.$slots, "title", {}, () => [Ot(tt(e.title), 1)])], 512),
                qe("div", TO, [ue(e.$slots, "default", {}, () => [Ot(tt(e.content), 1)])], 512),
            ],
            10,
            AO
        )
    )
}
var CO = ge(EO, [["render", xO]])
const ub = Symbol(),
    $O = de({
        name: "BProgress",
        props: {
            animated: { type: Boolean, default: !1 },
            max: { type: [Number, String] },
            height: { type: String },
            precision: { type: [Number, String], default: 0 },
            showProgress: { type: Boolean, default: !1 },
            showValue: { type: Boolean, default: !1 },
            striped: { type: Boolean, default: !1 },
            value: { type: [Number, String], default: 0 },
            variant: { type: String },
        },
        setup(e) {
            dn(ub, { animated: e.animated, max: e.max, showProgress: e.showProgress, showValue: e.showValue, striped: e.striped })
        },
    })
function NO(e, t, r, n, i, s) {
    const o = jt("b-progress-bar")
    return (
        D(),
        se(
            "div",
            { class: "progress", style: Ln({ height: e.height }) },
            [
                ue(e.$slots, "default", {}, () => [
                    Rt(
                        o,
                        $b(
                            rg({
                                animated: e.animated,
                                max: e.max,
                                precision: e.precision,
                                showProgress: e.showProgress,
                                showValue: e.showValue,
                                striped: e.striped,
                                value: e.value,
                                variant: e.variant,
                            })
                        ),
                        null,
                        16
                    ),
                ]),
            ],
            4
        )
    )
}
var BO = ge($O, [["render", NO]])
const kO = de({
        name: "BProgressBar",
        props: {
            animated: { type: Boolean, default: !1 },
            label: { type: String },
            labelHtml: { type: String },
            max: { type: [Number, String] },
            precision: { type: [Number, String], default: 0 },
            showProgress: { type: Boolean, default: !1 },
            showValue: { type: Boolean, default: !1 },
            striped: { type: Boolean, default: !1 },
            value: { type: [Number, String], default: 0 },
            variant: { type: String },
        },
        setup(e, { slots: t }) {
            const r = Jt(ub),
                n = P(() => ({
                    "progress-bar-animated": e.animated || (r == null ? void 0 : r.animated),
                    "progress-bar-striped": e.striped || (r == null ? void 0 : r.striped) || e.animated || (r == null ? void 0 : r.animated),
                    [`bg-${e.variant}`]: e.variant,
                })),
                i = P(() => {
                    if (e.showValue || (r == null ? void 0 : r.showValue)) return parseFloat(e.value).toFixed(e.precision)
                    if (e.showProgress || (r == null ? void 0 : r.showProgress)) {
                        const a = ((e.value * 100) / parseInt(e.max || 100)).toString()
                        return parseFloat(a).toFixed(e.precision)
                    }
                    return e.label || ""
                }),
                s = P(() =>
                    e.max || (r == null ? void 0 : r.max)
                        ? `${(e.value * 100) / parseInt(e.max || (r == null ? void 0 : r.max))}%`
                        : typeof e.value == "string"
                        ? e.value
                        : `${e.value}%`
                ),
                o = P(() => {
                    const a = {
                        class: ["progress-bar", n.value],
                        role: "progressbar",
                        "aria-valuenow": e.value,
                        "aria-valuemin": 0,
                        "aria-valuemax": e.max,
                        style: { width: s.value },
                    }
                    return e.labelHtml ? Bt(Me({}, a), { innerHTML: e.labelHtml }) : a
                })
            return () => {
                var a
                return Ae("div", o.value, ((a = t.default) == null ? void 0 : a.call(t)) || i.value)
            }
        },
    }),
    rp = Wl("cols", [""], { type: [String, Number], default: null }),
    OO = de({
        name: "BRow",
        props: Me(
            {
                tag: { type: String, default: "div" },
                gutterX: { type: String, default: null },
                gutterY: { type: String, default: null },
                alignV: { type: String, default: null },
                alignH: { type: String, default: null },
                alignContent: { type: String, default: null },
            },
            rp
        ),
        setup(e) {
            const t = jv(e, rp, "cols", "row-cols")
            return {
                classes: P(() => ({
                    [`gx-${e.gutterX}`]: e.gutterX !== null,
                    [`gy-${e.gutterY}`]: e.gutterY !== null,
                    [`align-items-${e.alignV}`]: e.alignV,
                    [`justify-content-${e.alignH}`]: e.alignH,
                    [`align-content-${e.alignContent}`]: e.alignContent,
                })),
                rowColsClasses: t,
            }
        },
    })
function IO(e, t, r, n, i, s) {
    return (
        D(),
        be(ke(e.tag), { class: ve(["row", [e.classes, e.rowColsClasses]]) }, { default: Te(() => [ue(e.$slots, "default")]), _: 3 }, 8, [
            "class",
        ])
    )
}
var PO = ge(OO, [["render", IO]])
const MO = de({
        name: "BSpinner",
        props: {
            label: { type: String },
            role: { type: String, default: "status" },
            small: { type: Boolean, default: !1 },
            tag: { type: String, default: "span" },
            type: { type: String, default: "border" },
            variant: { type: String },
        },
        setup(e) {
            return {
                classes: P(() => ({
                    "spinner-border": e.type === "border",
                    "spinner-border-sm": e.type === "border" && e.small,
                    "spinner-grow": e.type === "grow",
                    "spinner-grow-sm": e.type === "grow" && e.small,
                    [`text-${e.variant}`]: !!e.variant,
                })),
            }
        },
    }),
    RO = { key: 0, class: "visually-hidden" }
function LO(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { class: ve(e.classes), role: e.label || e.$slots.label ? e.role : null, "aria-hidden": e.label || e.$slots.label ? null : !0 },
            {
                default: Te(() => [
                    e.label || e.$slots.label ? (D(), se("span", RO, [ue(e.$slots, "label", {}, () => [Ot(tt(e.label), 1)])])) : Ie("", !0),
                ]),
                _: 3,
            },
            8,
            ["class", "role", "aria-hidden"]
        )
    )
}
var DO = ge(MO, [["render", LO]])
const fb = Symbol(),
    FO = (e) =>
        !e || !e.default
            ? []
            : e
                  .default()
                  .reduce((t, r) => (typeof r.type == "symbol" ? (t = t.concat(r.children)) : t.push(r), t), [])
                  .filter((t) => {
                      var r
                      return ((r = t.type) == null ? void 0 : r.name) === "BTab"
                  }),
    VO = de({
        name: "BTabs",
        props: {
            activeNavItemClass: { type: [Array, Object, String], default: null },
            activeTabClass: { type: [Array, Object, String], default: null },
            align: { type: String, default: null },
            card: { type: Boolean, default: !1 },
            contentClass: { type: [Array, Object, String], default: null },
            end: { type: Boolean, default: !1 },
            fill: { type: Boolean, default: !1 },
            id: { type: String, default: null },
            justified: { type: Boolean, default: !1 },
            lazy: { type: Boolean, default: !1 },
            navClass: { type: [Array, Object, String], default: null },
            navWrapperClass: { type: [Array, Object, String], default: null },
            noFade: { type: Boolean, default: !1 },
            noNavStyle: { type: Boolean, default: !1 },
            pills: { type: Boolean, default: !1 },
            small: { type: Boolean, default: !1 },
            tag: { type: String, default: "div" },
            vertical: { type: Boolean, default: !1 },
            modelValue: { type: Number, default: -1 },
        },
        emits: ["update:modelValue", "activate-tab", "click"],
        setup(e, { slots: t, emit: r }) {
            const n = Ve(e.modelValue),
                i = Ve(""),
                s = P({
                    get: () => n.value,
                    set: (h) => {
                        ;(n.value = h),
                            o.value.length > 0 && h >= 0 && h < o.value.length ? (i.value = o.value[h].buttonId) : (i.value = ""),
                            r("update:modelValue", h)
                    },
                }),
                o = P(() => {
                    let h = []
                    return (
                        t.default &&
                            (h = FO(t).map((v, b) => {
                                v.props || (v.props = {})
                                const _ = v.props["button-id"] || In("tab"),
                                    C = v.props.id || In(),
                                    B = s.value > -1 ? b === s.value : v.props.active === "",
                                    O = v.props["title-item-class"],
                                    L = v.props["title-link-attributes"]
                                return {
                                    buttonId: _,
                                    contentId: C,
                                    active: B,
                                    disabled: v.props.disabled === "",
                                    navItemClasses: [
                                        { active: B, disabled: v.props.disabled === "" },
                                        B && e.activeNavItemClass ? e.activeNavItemClass : null,
                                        v.props["title-link-class"],
                                    ],
                                    tabClasses: [{ fade: !e.noFade }, B && e.activeTabClass ? e.activeTabClass : null],
                                    target: `#${C}`,
                                    title: v.props.title,
                                    titleItemClass: O,
                                    titleLinkAttributes: L,
                                    onClick: v.props.onClick,
                                    tab: v,
                                }
                            })),
                        h
                    )
                }),
                a = P(() => !((o == null ? void 0 : o.value) && o.value.length > 0)),
                l = P(() => ({ "d-flex align-items-start": e.vertical })),
                u = P(() => ({
                    "nav-pills": e.pills,
                    "flex-column me-3": e.vertical,
                    [`justify-content-${e.align}`]: !!e.align,
                    "nav-fill": e.fill,
                    "card-header-tabs": e.card,
                    "nav-justified": e.justified,
                    "nav-tabs": !e.noNavStyle && !e.pills,
                    small: e.small,
                })),
                c = (h) => {
                    let v = !1
                    if (
                        h !== void 0 &&
                        h > -1 &&
                        h < o.value.length &&
                        !o.value[h].disabled &&
                        (s.value < 0 || o.value[h].buttonId !== i.value)
                    ) {
                        const b = new Kl("activate-tab", { cancelable: !0, vueTarget: this })
                        r("activate-tab", h, s.value, b), b.defaultPrevented || ((s.value = h), (v = !0))
                    }
                    return !v && e.modelValue !== s.value && r("update:modelValue", s.value), v
                },
                d = (h, v) => {
                    var b
                    c(v),
                        v >= 0 &&
                            !o.value[v].disabled &&
                            ((b = o.value[v]) == null ? void 0 : b.onClick) &&
                            Iv(o.value[v].onClick) &&
                            o.value[v].onClick(h)
                }
            return (
                c(n.value),
                Tt(
                    () => e.modelValue,
                    (h, v) => {
                        if (h === v) return
                        if (((h = Df(h, -1)), (v = Df(v, -1)), o.value.length <= 0)) {
                            s.value = -1
                            return
                        }
                        const b = h > v
                        let _ = h
                        const C = o.value.length - 1
                        for (; _ >= 0 && _ <= C && o.value[_].disabled; ) _ += b ? 1 : -1
                        if (_ < 0) {
                            c(0)
                            return
                        }
                        if (_ >= o.value.length) {
                            c(o.value.length - 1)
                            return
                        }
                        c(_)
                    }
                ),
                Tt(
                    () => o.value,
                    () => {
                        let h = o.value.map((v) => v.active && !v.disabled).lastIndexOf(!0)
                        h < 0 &&
                            (s.value >= o.value.length
                                ? (h = o.value.map((v) => !v.disabled).lastIndexOf(!0))
                                : o.value[s.value] && !o.value[s.value].disabled && (h = s.value)),
                            h < 0 && (h = o.value.map((v) => !v.disabled).indexOf(!0)),
                            o.value.forEach((v, b) => (v.active = b === h)),
                            c(h)
                    }
                ),
                zt(() => {
                    if (s.value < 0 && o.value.length > 0 && !o.value.some((h) => h.active)) {
                        const h = o.value.map((v) => !v.disabled).indexOf(!0)
                        c(h >= 0 ? h : -1)
                    }
                }),
                dn(fb, { lazy: e.lazy, card: e.card }),
                { tabs: o, showEmpty: a, classes: l, navTabsClasses: u, tabIndex: s, handleClick: d }
            )
        },
    }),
    qO = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"]
function HO(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { id: e.id, class: ve(["tabs", e.classes]) },
            {
                default: Te(() => [
                    e.end
                        ? (D(),
                          se(
                              "div",
                              { key: 0, class: ve(["tab-content", e.contentClass]) },
                              [
                                  (D(!0),
                                  se(
                                      St,
                                      null,
                                      hn(
                                          e.tabs,
                                          ({ tab: o, contentId: a, tabClasses: l, active: u }, c) => (
                                              D(), be(ke(o), { key: c, id: a, class: ve(l), active: u }, null, 8, ["id", "class", "active"])
                                          )
                                      ),
                                      128
                                  )),
                                  e.showEmpty
                                      ? (D(),
                                        se(
                                            "div",
                                            { key: "bv-empty-tab", class: ve(["tab-pane active", { "card-body": e.card }]) },
                                            [ue(e.$slots, "empty")],
                                            2
                                        ))
                                      : Ie("", !0),
                              ],
                              2
                          ))
                        : Ie("", !0),
                    qe(
                        "div",
                        { class: ve([e.navWrapperClass, { "card-header": e.card, "ms-auto": e.vertical && e.end }]) },
                        [
                            qe(
                                "ul",
                                { class: ve(["nav", [e.navTabsClasses, e.navClass]]), role: "tablist" },
                                [
                                    ue(e.$slots, "tabs-start"),
                                    (D(!0),
                                    se(
                                        St,
                                        null,
                                        hn(
                                            e.tabs,
                                            ({ tab: o, buttonId: a, contentId: l, navItemClasses: u, active: c, target: d }, h) => (
                                                D(),
                                                se(
                                                    "li",
                                                    { key: h, class: ve(["nav-item", o.props["title-item-class"]]) },
                                                    [
                                                        qe(
                                                            "a",
                                                            Ge(
                                                                {
                                                                    id: a,
                                                                    class: ["nav-link", u],
                                                                    "data-bs-toggle": "tab",
                                                                    "data-bs-target": d,
                                                                    href: "#",
                                                                    role: "tab",
                                                                    "aria-controls": l,
                                                                    "aria-selected": c,
                                                                },
                                                                o.props["title-link-attributes"],
                                                                { onClick: xl((v) => e.handleClick(v, h), ["stop"]) }
                                                            ),
                                                            [
                                                                o.children && o.children.title
                                                                    ? (D(), be(ke(o.children.title), { key: 0 }))
                                                                    : (D(), se(St, { key: 1 }, [Ot(tt(o.props.title), 1)], 64)),
                                                            ],
                                                            16,
                                                            qO
                                                        ),
                                                    ],
                                                    2
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                    ue(e.$slots, "tabs-end"),
                                ],
                                2
                            ),
                        ],
                        2
                    ),
                    e.end
                        ? Ie("", !0)
                        : (D(),
                          se(
                              "div",
                              { key: 1, class: ve(["tab-content", e.contentClass]) },
                              [
                                  (D(!0),
                                  se(
                                      St,
                                      null,
                                      hn(
                                          e.tabs,
                                          ({ tab: o, contentId: a, tabClasses: l, active: u }, c) => (
                                              D(), be(ke(o), { key: c, id: a, class: ve(l), active: u }, null, 8, ["id", "class", "active"])
                                          )
                                      ),
                                      128
                                  )),
                                  e.showEmpty
                                      ? (D(),
                                        se(
                                            "div",
                                            { key: "bv-empty-tab", class: ve(["tab-pane active", { "card-body": e.card }]) },
                                            [ue(e.$slots, "empty")],
                                            2
                                        ))
                                      : Ie("", !0),
                              ],
                              2
                          )),
                ]),
                _: 3,
            },
            8,
            ["id", "class"]
        )
    )
}
var UO = ge(VO, [["render", HO]])
const zO = de({
    name: "BTab",
    props: {
        active: { type: Boolean, default: !1 },
        buttonId: { type: String, default: null },
        disabled: { type: Boolean, default: !1 },
        id: { type: String },
        lazy: { type: Boolean, default: !1 },
        noBody: { type: [Boolean, String], default: !1 },
        tag: { type: String, default: "div" },
        title: { type: String },
        titleItemClass: { type: [Array, Object, String], default: null },
        titleLinkAttributes: { type: Object, default: null },
        titleLinkClass: { type: [Array, Object, String], default: null },
    },
    setup(e) {
        const t = Jt(fb),
            r = P(() => (t == null ? void 0 : t.lazy) || e.lazy),
            n = P(() => e.active && !e.disabled),
            i = P(() => n.value || !r.value)
        return {
            classes: P(() => ({ active: e.active, show: e.active, "card-body": t.card && e.noBody === !1 })),
            computedLazy: r,
            computedActive: n,
            showSlot: i,
        }
    },
})
function jO(e, t, r, n, i, s) {
    return (
        D(),
        be(
            ke(e.tag),
            { id: e.id, class: ve(["tab-pane", e.classes]), role: "tabpanel", "aria-labelledby": "profile-tab" },
            { default: Te(() => [e.showSlot ? ue(e.$slots, "default", { key: 0 }) : Ie("", !0)]), _: 3 },
            8,
            ["id", "class"]
        )
    )
}
var WO = ge(zO, [["render", jO]])
const KO = () => ({
        normaliseFields: (t, r) => {
            const n = []
            return !(t == null ? void 0 : t.length) && (r == null ? void 0 : r.length)
                ? (Object.keys(r[0]).forEach((i) => n.push({ key: i, label: j0(i) })), n)
                : (Array.isArray(t) &&
                      t.forEach((i) => {
                          typeof i == "string" ? n.push({ key: i, label: j0(i) }) : HC(i) && i.key && js(i.key) && n.push(Me({}, i))
                      }),
                  n)
        },
    }),
    GO = de({
        name: "BTable",
        props: {
            align: { type: String },
            caption: { type: String },
            captionTop: { type: Boolean, default: !1 },
            borderless: { type: Boolean, default: !1 },
            bordered: { type: Boolean, default: !1 },
            borderVariant: { type: String },
            dark: { type: Boolean, default: !1 },
            fields: { type: Array, default: () => [] },
            footClone: { type: Boolean, default: !1 },
            hover: { type: Boolean, default: !1 },
            items: { type: Array, default: () => [] },
            responsive: { type: [Boolean, String], default: !1 },
            small: { type: Boolean, default: !1 },
            striped: { type: Boolean, default: !1 },
            variant: { type: String },
        },
        setup(e, { slots: t }) {
            const r = P(() => ({
                    [`align-${e.align}`]: e.align,
                    [`table-${e.variant}`]: e.variant,
                    "table-striped": e.striped,
                    "table-hover": e.hover,
                    "table-dark": e.dark,
                    "table-bordered": e.bordered,
                    [`border-${e.borderVariant}`]: e.borderVariant,
                    "table-borderless": e.borderless,
                    "table-sm": e.small,
                    "caption-top": e.captionTop,
                })),
                n = KO(),
                i = P(() => n.normaliseFields(e.fields, e.items))
            return () => {
                let s
                ;(s = null), t["thead-top"] && (s = t["thead-top"]())
                let o
                ;(o = null),
                    t["thead-sub"] &&
                        (o = Ae(
                            "tr",
                            i.value.map((d) =>
                                Ae(
                                    "td",
                                    { scope: "col", class: [d.class, d.thClass, d.variant ? `table-${d.variant}` : ""] },
                                    t["thead-sub"](Me({ items: i.value }, d))
                                )
                            )
                        ))
                const a = Ae("thead", [
                        s,
                        Ae(
                            "tr",
                            i.value.map((d) => {
                                var h
                                const v = `head(${d.key})`
                                let b = d.label
                                return (
                                    t[v] && (b = (h = t[v]) == null ? void 0 : h.call(t, { label: d.label })),
                                    Ae(
                                        "th",
                                        Bt(Me({}, d.thAttr), {
                                            scope: "col",
                                            class: [d.class, d.thClass, d.variant ? `table-${d.variant}` : ""],
                                            title: d.headerTitle,
                                            abbr: d.headerAbbr,
                                            style: d.thStyle,
                                        }),
                                        b
                                    )
                                )
                            })
                        ),
                        o,
                    ]),
                    l = [
                        Ae(
                            "tbody",
                            e.items.map((d, h) =>
                                Ae(
                                    "tr",
                                    { class: [d._rowVariant ? `table-${d._rowVariant}` : null] },
                                    i.value.map((v) => {
                                        var b
                                        const _ = `cell(${v.key})`
                                        let C = d[v.key]
                                        return (
                                            t[_] &&
                                                (C =
                                                    (b = t[_]) == null
                                                        ? void 0
                                                        : b.call(t, { value: d[v.key], index: h, item: d, items: e.items })),
                                            Ae(
                                                "td",
                                                Bt(Me({}, v.tdAttr), {
                                                    class: [
                                                        v.class,
                                                        v.tdClass,
                                                        v.variant ? `table-${v.variant}` : "",
                                                        (d == null ? void 0 : d._cellVariants) && (d == null ? void 0 : d._cellVariants[v.key])
                                                            ? `table-${d == null ? void 0 : d._cellVariants[v.key]}`
                                                            : "",
                                                    ],
                                                }),
                                                C
                                            )
                                        )
                                    })
                                )
                            )
                        ),
                    ],
                    u = [a, l]
                if (t["table-caption"]) u.push(Ae("caption", t["table-caption"]()))
                else if (e.caption) {
                    const d = Ae("caption", e.caption)
                    u.push(d)
                }
                if (e.footClone) {
                    const d = Ae(
                        "tfoot",
                        Ae(
                            "tr",
                            i.value.map((h) =>
                                Ae(
                                    "th",
                                    Bt(Me({}, h.thAttr), {
                                        scope: "col",
                                        class: [h.class, h.thClass, h.variant ? `table-${h.variant}` : ""],
                                        title: h.headerTitle,
                                        abbr: h.headerAbbr,
                                        style: h.thStyle,
                                    }),
                                    h.label
                                )
                            )
                        )
                    )
                    u.push(d)
                }
                const c = Ae("table", { class: ["table", r.value] }, u)
                return e.responsive
                    ? Ae(
                          "div",
                          {
                              class: {
                                  "table-responsive": typeof e.responsive == "boolean",
                                  [`table-responsive-${e.responsive}`]: typeof e.responsive == "string",
                              },
                          },
                          c
                      )
                    : c
            }
        },
    })
function YO(e, t, r, n, i, s) {
    return D(), se("div")
}
var JO = ge(GO, [["render", YO]])
const XO = "toast-title",
    ZO = 5e3,
    QO = de({
        name: "BToast",
        emits: ["destroyed", "update:modelValue"],
        props: Bt(Me({}, pa), {
            delay: { type: Number, default: 5e3 },
            bodyClass: { type: String },
            body: { type: Object },
            headerClass: { type: String },
            headerTag: { type: String, default: "div" },
            animation: { type: Boolean, default: !0 },
            id: { type: String },
            isStatus: { type: Boolean, default: !1 },
            autoHide: { type: Boolean, default: !0 },
            noCloseButton: { type: Boolean, default: !1 },
            noFade: { type: Boolean, default: !1 },
            noHoverPause: { type: Boolean, default: !1 },
            solid: { type: Boolean, default: !1 },
            static: { type: Boolean, default: !1 },
            title: { type: String },
            modelValue: { type: Boolean, default: !1 },
            toastClass: { type: Array },
            variant: { type: String },
        }),
        setup(e, { emit: t, slots: r }) {
            Ve(), Ve(null)
            const n = Ve(!1),
                i = Ve(!1),
                s = Ve(!1),
                o = P(() => ({ [`b-toast-${e.variant}`]: e.variant, show: s.value || n.value }))
            let a, l
            const u = () => {
                    clearTimeout(a), (a = void 0)
                },
                c = P(() => Math.max(Ws(e.delay, 0), ZO)),
                d = () => {
                    e.modelValue &&
                        ((l = 0),
                        u(),
                        (i.value = !0),
                        Ia(() => {
                            s.value = !1
                        }))
                },
                h = () => {
                    u(),
                        t("update:modelValue", !0),
                        (l = 0),
                        (i.value = !1),
                        cn(() => {
                            Ia(() => {
                                s.value = !0
                            })
                        })
                }
            Tt(
                () => e.modelValue,
                (L) => {
                    L ? h() : d()
                }
            )
            const v = () => {
                    u(), e.autoHide && ((a = setTimeout(d, l || c.value)), (l = 0))
                },
                b = () => {
                    ;(n.value = !0), t("update:modelValue", !0)
                },
                _ = () => {
                    ;(n.value = !1), v()
                },
                C = () => {
                    n.value = !0
                },
                B = () => {
                    ;(n.value = !1), (l = 0), t("update:modelValue", !1)
                }
            P(() => ({ OnBeforeEnter: b, OnAfterEnter: _, OnBeforeLeave: C, OnAfterLeave: B })),
                hc(() => {
                    t("destroyed", e.id)
                }),
                zt(() => {
                    cn(() => {
                        e.modelValue &&
                            Ia(() => {
                                h()
                            })
                    })
                })
            const O = () => {
                cn(() => {
                    Ia(() => {
                        d()
                    })
                })
            }
            return () => {
                const L = () => {
                    const H = [],
                        Q = br(XO, { hide: d }, r)
                    Q ? H.push(Ae(Q)) : e.title && H.push(Ae("strong", { class: "me-auto" }, e.title)),
                        e.noCloseButton ||
                            H.push(
                                Ae(zv, {
                                    class: ["btn-close"],
                                    onClick: () => {
                                        d()
                                    },
                                })
                            )
                    const K = []
                    if (
                        (H.length > 0 && K.push(Ae(e.headerTag, { class: "toast-header" }, { default: () => H })),
                        br("default", { hide: d }, r) || e.body)
                    ) {
                        const ae = Ae(
                            Vf(e) ? "b-link" : "div",
                            { class: ["toast-body", e.bodyClass], onClick: Vf(e) ? { click: O } : {} },
                            br("default", { hide: d }, r) || e.body
                        )
                        K.push(ae)
                    }
                    return Ae("div", { class: ["toast", e.toastClass, o.value], tabindex: "0" }, K)
                }
                return Ae(
                    "div",
                    {
                        class: ["b-toast"],
                        id: e.id,
                        role: i.value ? null : e.isStatus ? "status" : "alert",
                        "aria-live": i.value ? null : e.isStatus ? "polite" : "assertive",
                        "aria-atomic": i.value ? null : "true",
                    },
                    [
                        Ae(pl, { noFade: e.noFade, onAfterEnter: _, onBeforeEnter: b, onAfterLeave: B, onBeforeLeave: C }, () => [
                            s.value ? L() : "",
                        ]),
                    ]
                )
            }
        },
    })
var eI = {
        BAccordion: CC,
        BAccordionItem: d$,
        BAlert: v$,
        BAvatar: C$,
        BAvatarGroup: w$,
        BBadge: L$,
        BBreadcrumb: W$,
        BBreadcrumbItem: Hv,
        BButton: Qc,
        BButtonGroup: X$,
        BButtonToolbar: tN,
        BCard: oN,
        BCardBody: uN,
        BCardFooter: hN,
        BCardGroup: mN,
        BCardHeader: _N,
        BCardImg: AN,
        BCardSubTitle: xN,
        BCardText: BN,
        BCardTitle: IN,
        BCarousel: GN,
        BCarouselSlide: r6,
        BCloseButton: zv,
        BCol: xo,
        BCollapse: xv,
        BContainer: g6,
        BDropdown: _6,
        BDropdownDivider: S6,
        BDropdownForm: N6,
        BDropdownGroup: P6,
        BDropdownHeader: D6,
        BDropdownItem: H6,
        BDropdownItemButton: W6,
        BDropdownText: X6,
        BForm: tB,
        BFormCheckbox: aB,
        BFormCheckboxGroup: hB,
        BFormFloatingLabel: bB,
        BFormGroup: MB,
        BFormInput: FB,
        BFormInvalidFeedback: jf,
        BFormRadio: zB,
        BFormRadioGroup: JB,
        BFormRow: ja,
        BFormSelect: ok,
        BFormSelectOption: ed,
        BFormSelectOptionGroup: nb,
        BFormText: Wf,
        BFormTextarea: fk,
        BFormValidFeedback: zf,
        BImg: gk,
        BInputGroup: Sk,
        BInputGroupAddon: rd,
        BInputGroupAppend: kk,
        BInputGroupPrepend: Pk,
        BInputGroupText: ib,
        BLink: I$,
        BListGroup: Lk,
        BListGroupItem: qk,
        BModal: Wk,
        BNav: Yk,
        BNavItem: Qk,
        BOffcanvas: aO,
        BOverlay: cO,
        BPagination: wO,
        BPopover: CO,
        BProgress: BO,
        BProgressBar: kO,
        BRow: PO,
        BSpinner: DO,
        BTab: WO,
        BTable: JO,
        BToast: QO,
        BToaster: Hf,
        BToastContainer: Hf,
        BTabs: UO,
        BTransition: pl,
        ToastPlugin: f6,
    },
    tI = {
        mounted(e, t) {
            let r = t.value
            Object.keys(t.modifiers).length > 0 && ([r] = Object.keys(t.modifiers)),
                e.setAttribute("data-bs-toggle", "modal"),
                e.setAttribute("data-bs-target", `#${r}`)
        },
    }
const rI = {
    mounted(e, t) {
        let r = "right"
        const n = []
        t.modifiers.left
            ? (r = "left")
            : t.modifiers.right
            ? (r = "right")
            : t.modifiers.bottom
            ? (r = "bottom")
            : t.modifiers.top && (r = "top"),
            t.modifiers.manual
                ? n.push("manual")
                : (t.modifiers.click && n.push("click"), t.modifiers.hover && n.push("hover"), t.modifiers.focus && n.push("focus")),
            e.setAttribute("data-bs-toggle", "popover"),
            new zs(e, { trigger: n.length === 0 ? "click" : n.join(" "), placement: r, content: t.value })
    },
    unmounted(e) {
        const t = zs.getInstance(e)
        t == null || t.dispose()
    },
}
function nI(e) {
    if (e.manual) return "manual"
    const t = []
    return e.click && t.push("click"), e.hover && t.push("hover"), e.focus && t.push("focus"), t.length > 0 ? t.join(" ") : "hover focus"
}
function iI(e) {
    return e.left ? "left" : e.right ? "right" : e.bottom ? "bottom" : "top"
}
function sI(e) {
    return (e == null ? void 0 : e.delay) ? e.delay : 50
}
const oI = {
        beforeMount(e, t) {
            e.setAttribute("data-bs-toogle", "tooltip")
            const r = /<("[^"]*"|'[^']*'|[^'">])*>/.test(e.title),
                n = nI(t.modifiers),
                i = iI(t.modifiers),
                s = sI(t.value)
            new Mn(e, { trigger: n, placement: i, delay: s, html: r })
        },
        updated(e) {
            const t = e.getAttribute("title")
            if (t !== "") {
                const r = Mn.getInstance(e)
                r == null || r.hide(), e.setAttribute("data-bs-original-title", t || ""), e.setAttribute("title", "")
            }
        },
        unmounted(e) {
            const t = Mn.getInstance(e)
            t == null || t.dispose()
        },
    },
    Wa = new Map()
function cb(e) {
    if (Wa.has(e)) {
        const t = Wa.get(e)
        t && t.stop && t.stop(), Wa.delete(e)
    }
}
function np(e, t) {
    const r = { margin: "0px", once: !1, callback: t.value }
    Object.keys(t.modifiers).forEach((i) => {
        Number.isInteger(i) ? (r.margin = `${i}px`) : i.toLowerCase() === "once" && (r.once = !0)
    }),
        cb(e)
    const n = new lI(e, r.margin, r.once, r.callback, t.instance)
    Wa.set(e, n)
}
const aI = {
    beforeMount(e, t) {
        np(e, t)
    },
    updated(e, t) {
        np(e, t)
    },
    unmounted(e) {
        cb(e)
    },
}
class lI {
    constructor(t, r, n, i, s) {
        ;(this.element = t), (this.margin = r), (this.once = n), (this.callback = i), (this.instance = s), this.createObserver()
    }
    createObserver() {
        if ((this.observer && this.stop(), !(this.doneOnce || typeof this.callback != "function"))) {
            try {
                this.observer = new IntersectionObserver(this.handler.bind(this), { root: null, rootMargin: this.margin, threshold: 0 })
            } catch {
                console.error("Intersection Observer not supported"), (this.doneOnce = !0), (this.observer = void 0), this.callback(null)
                return
            }
            this.instance.$nextTick(() => {
                this.observer && this.observer.observe(this.element)
            })
        }
    }
    handler(t) {
        const [r] = t,
            n = Boolean(r.isIntersecting || r.intersectionRatio > 0)
        n !== this.visible && ((this.visible = n), this.callback(n), this.once && this.visible && ((this.doneOnce = !0), this.stop()))
    }
    stop() {
        this.observer && this.observer.disconnect(), (this.observer = null)
    }
}
var uI = {
        mounted(e, t) {
            t.value !== !1 && e.focus()
        },
    },
    fI = { BModal: tI, BPopover: rI, BToggle: Lv, BTooltip: oI, BVisible: aI, focus: uI }
const $I = {
    install(e, t = {}) {
        Object.entries(eI).forEach(([r, n]) => {
            e.component(r, n)
        }),
            Object.entries(fI).forEach(([r, n]) => {
                e.directive(r, n)
            }),
            D$(e)
    },
}
var ao = 1e9,
    cI = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
    }
var $t = !0,
    Ir = "[DecimalError] ",
    Qi = Ir + "Invalid argument: ",
    nd = Ir + "Exponent out of range: ",
    lo = Math.floor,
    ji = Math.pow,
    dI = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    yr,
    qt = 1e7,
    At = 7,
    db = 9007199254740991,
    gl = lo(db / At),
    me = {}
me.absoluteValue = me.abs = function () {
    var e = new this.constructor(this)
    return e.s && (e.s = 1), e
}
me.comparedTo = me.cmp = function (e) {
    var t,
        r,
        n,
        i,
        s = this
    if (((e = new s.constructor(e)), s.s !== e.s)) return s.s || -e.s
    if (s.e !== e.e) return (s.e > e.e) ^ (s.s < 0) ? 1 : -1
    for (n = s.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s.d[t] !== e.d[t]) return (s.d[t] > e.d[t]) ^ (s.s < 0) ? 1 : -1
    return n === i ? 0 : (n > i) ^ (s.s < 0) ? 1 : -1
}
me.decimalPlaces = me.dp = function () {
    var e = this,
        t = e.d.length - 1,
        r = (t - e.e) * At
    if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--
    return r < 0 ? 0 : r
}
me.dividedBy = me.div = function (e) {
    return Rn(this, new this.constructor(e))
}
me.dividedToIntegerBy = me.idiv = function (e) {
    var t = this,
        r = t.constructor
    return ot(Rn(t, new r(e), 0, 1), r.precision)
}
me.equals = me.eq = function (e) {
    return !this.cmp(e)
}
me.exponent = function () {
    return Lt(this)
}
me.greaterThan = me.gt = function (e) {
    return this.cmp(e) > 0
}
me.greaterThanOrEqualTo = me.gte = function (e) {
    return this.cmp(e) >= 0
}
me.isInteger = me.isint = function () {
    return this.e > this.d.length - 2
}
me.isNegative = me.isneg = function () {
    return this.s < 0
}
me.isPositive = me.ispos = function () {
    return this.s > 0
}
me.isZero = function () {
    return this.s === 0
}
me.lessThan = me.lt = function (e) {
    return this.cmp(e) < 0
}
me.lessThanOrEqualTo = me.lte = function (e) {
    return this.cmp(e) < 1
}
me.logarithm = me.log = function (e) {
    var t,
        r = this,
        n = r.constructor,
        i = n.precision,
        s = i + 5
    if (e === void 0) e = new n(10)
    else if (((e = new n(e)), e.s < 1 || e.eq(yr))) throw Error(Ir + "NaN")
    if (r.s < 1) throw Error(Ir + (r.s ? "NaN" : "-Infinity"))
    return r.eq(yr) ? new n(0) : (($t = !1), (t = Rn(ta(r, s), ta(e, s), s)), ($t = !0), ot(t, i))
}
me.minus = me.sub = function (e) {
    var t = this
    return (e = new t.constructor(e)), t.s == e.s ? gb(t, e) : hb(t, ((e.s = -e.s), e))
}
me.modulo = me.mod = function (e) {
    var t,
        r = this,
        n = r.constructor,
        i = n.precision
    if (((e = new n(e)), !e.s)) throw Error(Ir + "NaN")
    return r.s ? (($t = !1), (t = Rn(r, e, 0, 1).times(e)), ($t = !0), r.minus(t)) : ot(new n(r), i)
}
me.naturalExponential = me.exp = function () {
    return pb(this)
}
me.naturalLogarithm = me.ln = function () {
    return ta(this)
}
me.negated = me.neg = function () {
    var e = new this.constructor(this)
    return (e.s = -e.s || 0), e
}
me.plus = me.add = function (e) {
    var t = this
    return (e = new t.constructor(e)), t.s == e.s ? hb(t, e) : gb(t, ((e.s = -e.s), e))
}
me.precision = me.sd = function (e) {
    var t,
        r,
        n,
        i = this
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Qi + e)
    if (((t = Lt(i) + 1), (n = i.d.length - 1), (r = n * At + 1), (n = i.d[n]), n)) {
        for (; n % 10 == 0; n /= 10) r--
        for (n = i.d[0]; n >= 10; n /= 10) r++
    }
    return e && t > r ? t : r
}
me.squareRoot = me.sqrt = function () {
    var e,
        t,
        r,
        n,
        i,
        s,
        o,
        a = this,
        l = a.constructor
    if (a.s < 1) {
        if (!a.s) return new l(0)
        throw Error(Ir + "NaN")
    }
    for (
        e = Lt(a),
            $t = !1,
            i = Math.sqrt(+a),
            i == 0 || i == 1 / 0
                ? ((t = fn(a.d)),
                  (t.length + e) % 2 == 0 && (t += "0"),
                  (i = Math.sqrt(t)),
                  (e = lo((e + 1) / 2) - (e < 0 || e % 2)),
                  i == 1 / 0 ? (t = "5e" + e) : ((t = i.toExponential()), (t = t.slice(0, t.indexOf("e") + 1) + e)),
                  (n = new l(t)))
                : (n = new l(i.toString())),
            r = l.precision,
            i = o = r + 3;
        ;

    )
        if (((s = n), (n = s.plus(Rn(a, s, o + 2)).times(0.5)), fn(s.d).slice(0, o) === (t = fn(n.d)).slice(0, o))) {
            if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
                if ((ot(s, r + 1, 0), s.times(s).eq(a))) {
                    n = s
                    break
                }
            } else if (t != "9999") break
            o += 4
        }
    return ($t = !0), ot(n, r)
}
me.times = me.mul = function (e) {
    var t,
        r,
        n,
        i,
        s,
        o,
        a,
        l,
        u,
        c = this,
        d = c.constructor,
        h = c.d,
        v = (e = new d(e)).d
    if (!c.s || !e.s) return new d(0)
    for (
        e.s *= c.s,
            r = c.e + e.e,
            l = h.length,
            u = v.length,
            l < u && ((s = h), (h = v), (v = s), (o = l), (l = u), (u = o)),
            s = [],
            o = l + u,
            n = o;
        n--;

    )
        s.push(0)
    for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; ) (a = s[i] + v[n] * h[i - n - 1] + t), (s[i--] = a % qt | 0), (t = (a / qt) | 0)
        s[i] = (s[i] + t) % qt | 0
    }
    for (; !s[--o]; ) s.pop()
    return t ? ++r : s.shift(), (e.d = s), (e.e = r), $t ? ot(e, d.precision) : e
}
me.toDecimalPlaces = me.todp = function (e, t) {
    var r = this,
        n = r.constructor
    return (r = new n(r)), e === void 0 ? r : (Sn(e, 0, ao), t === void 0 ? (t = n.rounding) : Sn(t, 0, 8), ot(r, e + Lt(r) + 1, t))
}
me.toExponential = function (e, t) {
    var r,
        n = this,
        i = n.constructor
    return (
        e === void 0
            ? (r = ss(n, !0))
            : (Sn(e, 0, ao), t === void 0 ? (t = i.rounding) : Sn(t, 0, 8), (n = ot(new i(n), e + 1, t)), (r = ss(n, !0, e + 1))),
        r
    )
}
me.toFixed = function (e, t) {
    var r,
        n,
        i = this,
        s = i.constructor
    return e === void 0
        ? ss(i)
        : (Sn(e, 0, ao),
          t === void 0 ? (t = s.rounding) : Sn(t, 0, 8),
          (n = ot(new s(i), e + Lt(i) + 1, t)),
          (r = ss(n.abs(), !1, e + Lt(n) + 1)),
          i.isneg() && !i.isZero() ? "-" + r : r)
}
me.toInteger = me.toint = function () {
    var e = this,
        t = e.constructor
    return ot(new t(e), Lt(e) + 1, t.rounding)
}
me.toNumber = function () {
    return +this
}
me.toPower = me.pow = function (e) {
    var t,
        r,
        n,
        i,
        s,
        o,
        a = this,
        l = a.constructor,
        u = 12,
        c = +(e = new l(e))
    if (!e.s) return new l(yr)
    if (((a = new l(a)), !a.s)) {
        if (e.s < 1) throw Error(Ir + "Infinity")
        return a
    }
    if (a.eq(yr)) return a
    if (((n = l.precision), e.eq(yr))) return ot(a, n)
    if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (s = a.s), o)) {
        if ((r = c < 0 ? -c : c) <= db) {
            for (i = new l(yr), t = Math.ceil(n / At + 4), $t = !1; r % 2 && ((i = i.times(a)), sp(i.d, t)), (r = lo(r / 2)), r !== 0; )
                (a = a.times(a)), sp(a.d, t)
            return ($t = !0), e.s < 0 ? new l(yr).div(i) : ot(i, n)
        }
    } else if (s < 0) throw Error(Ir + "NaN")
    return (
        (s = s < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1), (a.s = 1), ($t = !1), (i = e.times(ta(a, n + u))), ($t = !0), (i = pb(i)), (i.s = s), i
    )
}
me.toPrecision = function (e, t) {
    var r,
        n,
        i = this,
        s = i.constructor
    return (
        e === void 0
            ? ((r = Lt(i)), (n = ss(i, r <= s.toExpNeg || r >= s.toExpPos)))
            : (Sn(e, 1, ao),
              t === void 0 ? (t = s.rounding) : Sn(t, 0, 8),
              (i = ot(new s(i), e, t)),
              (r = Lt(i)),
              (n = ss(i, e <= r || r <= s.toExpNeg, e))),
        n
    )
}
me.toSignificantDigits = me.tosd = function (e, t) {
    var r = this,
        n = r.constructor
    return (
        e === void 0 ? ((e = n.precision), (t = n.rounding)) : (Sn(e, 1, ao), t === void 0 ? (t = n.rounding) : Sn(t, 0, 8)), ot(new n(r), e, t)
    )
}
me.toString =
    me.valueOf =
    me.val =
    me.toJSON =
    me[Symbol.for("nodejs.util.inspect.custom")] =
        function () {
            var e = this,
                t = Lt(e),
                r = e.constructor
            return ss(e, t <= r.toExpNeg || t >= r.toExpPos)
        }
function hb(e, t) {
    var r,
        n,
        i,
        s,
        o,
        a,
        l,
        u,
        c = e.constructor,
        d = c.precision
    if (!e.s || !t.s) return t.s || (t = new c(e)), $t ? ot(t, d) : t
    if (((l = e.d), (u = t.d), (o = e.e), (i = t.e), (l = l.slice()), (s = o - i), s)) {
        for (
            s < 0 ? ((n = l), (s = -s), (a = u.length)) : ((n = u), (i = o), (a = l.length)),
                o = Math.ceil(d / At),
                a = o > a ? o + 1 : a + 1,
                s > a && ((s = a), (n.length = 1)),
                n.reverse();
            s--;

        )
            n.push(0)
        n.reverse()
    }
    for (a = l.length, s = u.length, a - s < 0 && ((s = a), (n = u), (u = l), (l = n)), r = 0; s; )
        (r = ((l[--s] = l[s] + u[s] + r) / qt) | 0), (l[s] %= qt)
    for (r && (l.unshift(r), ++i), a = l.length; l[--a] == 0; ) l.pop()
    return (t.d = l), (t.e = i), $t ? ot(t, d) : t
}
function Sn(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(Qi + e)
}
function fn(e) {
    var t,
        r,
        n,
        i = e.length - 1,
        s = "",
        o = e[0]
    if (i > 0) {
        for (s += o, t = 1; t < i; t++) (n = e[t] + ""), (r = At - n.length), r && (s += fi(r)), (s += n)
        ;(o = e[t]), (n = o + ""), (r = At - n.length), r && (s += fi(r))
    } else if (o === 0) return "0"
    for (; o % 10 === 0; ) o /= 10
    return s + o
}
var Rn = (function () {
    function e(n, i) {
        var s,
            o = 0,
            a = n.length
        for (n = n.slice(); a--; ) (s = n[a] * i + o), (n[a] = s % qt | 0), (o = (s / qt) | 0)
        return o && n.unshift(o), n
    }
    function t(n, i, s, o) {
        var a, l
        if (s != o) l = s > o ? 1 : -1
        else
            for (a = l = 0; a < s; a++)
                if (n[a] != i[a]) {
                    l = n[a] > i[a] ? 1 : -1
                    break
                }
        return l
    }
    function r(n, i, s) {
        for (var o = 0; s--; ) (n[s] -= o), (o = n[s] < i[s] ? 1 : 0), (n[s] = o * qt + n[s] - i[s])
        for (; !n[0] && n.length > 1; ) n.shift()
    }
    return function (n, i, s, o) {
        var a,
            l,
            u,
            c,
            d,
            h,
            v,
            b,
            _,
            C,
            B,
            O,
            L,
            V,
            H,
            Q,
            K,
            ae,
            z = n.constructor,
            ye = n.s == i.s ? 1 : -1,
            S = n.d,
            f = i.d
        if (!n.s) return new z(n)
        if (!i.s) throw Error(Ir + "Division by zero")
        for (l = n.e - i.e, K = f.length, H = S.length, v = new z(ye), b = v.d = [], u = 0; f[u] == (S[u] || 0); ) ++u
        if ((f[u] > (S[u] || 0) && --l, s == null ? (O = s = z.precision) : o ? (O = s + (Lt(n) - Lt(i)) + 1) : (O = s), O < 0)) return new z(0)
        if (((O = (O / At + 2) | 0), (u = 0), K == 1))
            for (c = 0, f = f[0], O++; (u < H || c) && O--; u++) (L = c * qt + (S[u] || 0)), (b[u] = (L / f) | 0), (c = L % f | 0)
        else {
            for (
                c = (qt / (f[0] + 1)) | 0,
                    c > 1 && ((f = e(f, c)), (S = e(S, c)), (K = f.length), (H = S.length)),
                    V = K,
                    _ = S.slice(0, K),
                    C = _.length;
                C < K;

            )
                _[C++] = 0
            ;(ae = f.slice()), ae.unshift(0), (Q = f[0]), f[1] >= qt / 2 && ++Q
            do
                (c = 0),
                    (a = t(f, _, K, C)),
                    a < 0
                        ? ((B = _[0]),
                          K != C && (B = B * qt + (_[1] || 0)),
                          (c = (B / Q) | 0),
                          c > 1
                              ? (c >= qt && (c = qt - 1),
                                (d = e(f, c)),
                                (h = d.length),
                                (C = _.length),
                                (a = t(d, _, h, C)),
                                a == 1 && (c--, r(d, K < h ? ae : f, h)))
                              : (c == 0 && (a = c = 1), (d = f.slice())),
                          (h = d.length),
                          h < C && d.unshift(0),
                          r(_, d, C),
                          a == -1 && ((C = _.length), (a = t(f, _, K, C)), a < 1 && (c++, r(_, K < C ? ae : f, C))),
                          (C = _.length))
                        : a === 0 && (c++, (_ = [0])),
                    (b[u++] = c),
                    a && _[0] ? (_[C++] = S[V] || 0) : ((_ = [S[V]]), (C = 1))
            while ((V++ < H || _[0] !== void 0) && O--)
        }
        return b[0] || b.shift(), (v.e = l), ot(v, o ? s + Lt(v) + 1 : s)
    }
})()
function pb(e, t) {
    var r,
        n,
        i,
        s,
        o,
        a,
        l = 0,
        u = 0,
        c = e.constructor,
        d = c.precision
    if (Lt(e) > 16) throw Error(nd + Lt(e))
    if (!e.s) return new c(yr)
    for (t == null ? (($t = !1), (a = d)) : (a = t), o = new c(0.03125); e.abs().gte(0.1); ) (e = e.times(o)), (u += 5)
    for (n = ((Math.log(ji(2, u)) / Math.LN10) * 2 + 5) | 0, a += n, r = i = s = new c(yr), c.precision = a; ; ) {
        if (((i = ot(i.times(e), a)), (r = r.times(++l)), (o = s.plus(Rn(i, r, a))), fn(o.d).slice(0, a) === fn(s.d).slice(0, a))) {
            for (; u--; ) s = ot(s.times(s), a)
            return (c.precision = d), t == null ? (($t = !0), ot(s, d)) : s
        }
        s = o
    }
}
function Lt(e) {
    for (var t = e.e * At, r = e.d[0]; r >= 10; r /= 10) t++
    return t
}
function Ku(e, t, r) {
    if (t > e.LN10.sd()) throw (($t = !0), r && (e.precision = r), Error(Ir + "LN10 precision limit exceeded"))
    return ot(new e(e.LN10), t)
}
function fi(e) {
    for (var t = ""; e--; ) t += "0"
    return t
}
function ta(e, t) {
    var r,
        n,
        i,
        s,
        o,
        a,
        l,
        u,
        c,
        d = 1,
        h = 10,
        v = e,
        b = v.d,
        _ = v.constructor,
        C = _.precision
    if (v.s < 1) throw Error(Ir + (v.s ? "NaN" : "-Infinity"))
    if (v.eq(yr)) return new _(0)
    if ((t == null ? (($t = !1), (u = C)) : (u = t), v.eq(10))) return t == null && ($t = !0), Ku(_, u)
    if (((u += h), (_.precision = u), (r = fn(b)), (n = r.charAt(0)), (s = Lt(v)), Math.abs(s) < 15e14)) {
        for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); ) (v = v.times(e)), (r = fn(v.d)), (n = r.charAt(0)), d++
        ;(s = Lt(v)), n > 1 ? ((v = new _("0." + r)), s++) : (v = new _(n + "." + r.slice(1)))
    } else
        return (
            (l = Ku(_, u + 2, C).times(s + "")),
            (v = ta(new _(n + "." + r.slice(1)), u - h).plus(l)),
            (_.precision = C),
            t == null ? (($t = !0), ot(v, C)) : v
        )
    for (a = o = v = Rn(v.minus(yr), v.plus(yr), u), c = ot(v.times(v), u), i = 3; ; ) {
        if (((o = ot(o.times(c), u)), (l = a.plus(Rn(o, new _(i), u))), fn(l.d).slice(0, u) === fn(a.d).slice(0, u)))
            return (
                (a = a.times(2)),
                s !== 0 && (a = a.plus(Ku(_, u + 2, C).times(s + ""))),
                (a = Rn(a, new _(d), u)),
                (_.precision = C),
                t == null ? (($t = !0), ot(a, C)) : a
            )
        ;(a = l), (i += 2)
    }
}
function ip(e, t) {
    var r, n, i
    for (
        (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n))) : r < 0 && (r = t.length),
            n = 0;
        t.charCodeAt(n) === 48;

    )
        ++n
    for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i
    if (((t = t.slice(n, i)), t)) {
        if (((i -= n), (r = r - n - 1), (e.e = lo(r / At)), (e.d = []), (n = (r + 1) % At), r < 0 && (n += At), n < i)) {
            for (n && e.d.push(+t.slice(0, n)), i -= At; n < i; ) e.d.push(+t.slice(n, (n += At)))
            ;(t = t.slice(n)), (n = At - t.length)
        } else n -= i
        for (; n--; ) t += "0"
        if ((e.d.push(+t), $t && (e.e > gl || e.e < -gl))) throw Error(nd + r)
    } else (e.s = 0), (e.e = 0), (e.d = [0])
    return e
}
function ot(e, t, r) {
    var n,
        i,
        s,
        o,
        a,
        l,
        u,
        c,
        d = e.d
    for (o = 1, s = d[0]; s >= 10; s /= 10) o++
    if (((n = t - o), n < 0)) (n += At), (i = t), (u = d[(c = 0)])
    else {
        if (((c = Math.ceil((n + 1) / At)), (s = d.length), c >= s)) return e
        for (u = s = d[c], o = 1; s >= 10; s /= 10) o++
        ;(n %= At), (i = n - At + o)
    }
    if (
        (r !== void 0 &&
            ((s = ji(10, o - i - 1)),
            (a = (u / s) % 10 | 0),
            (l = t < 0 || d[c + 1] !== void 0 || u % s),
            (l =
                r < 4
                    ? (a || l) && (r == 0 || r == (e.s < 0 ? 3 : 2))
                    : a > 5 ||
                      (a == 5 &&
                          (r == 4 ||
                              l ||
                              (r == 6 && (n > 0 ? (i > 0 ? u / ji(10, o - i) : 0) : d[c - 1]) % 10 & 1) ||
                              r == (e.s < 0 ? 8 : 7))))),
        t < 1 || !d[0])
    )
        return (
            l
                ? ((s = Lt(e)), (d.length = 1), (t = t - s - 1), (d[0] = ji(10, (At - (t % At)) % At)), (e.e = lo(-t / At) || 0))
                : ((d.length = 1), (d[0] = e.e = e.s = 0)),
            e
        )
    if (
        (n == 0
            ? ((d.length = c), (s = 1), c--)
            : ((d.length = c + 1), (s = ji(10, At - n)), (d[c] = i > 0 ? ((u / ji(10, o - i)) % ji(10, i) | 0) * s : 0)),
        l)
    )
        for (;;)
            if (c == 0) {
                ;(d[0] += s) == qt && ((d[0] = 1), ++e.e)
                break
            } else {
                if (((d[c] += s), d[c] != qt)) break
                ;(d[c--] = 0), (s = 1)
            }
    for (n = d.length; d[--n] === 0; ) d.pop()
    if ($t && (e.e > gl || e.e < -gl)) throw Error(nd + Lt(e))
    return e
}
function gb(e, t) {
    var r,
        n,
        i,
        s,
        o,
        a,
        l,
        u,
        c,
        d,
        h = e.constructor,
        v = h.precision
    if (!e.s || !t.s) return t.s ? (t.s = -t.s) : (t = new h(e)), $t ? ot(t, v) : t
    if (((l = e.d), (d = t.d), (n = t.e), (u = e.e), (l = l.slice()), (o = u - n), o)) {
        for (
            c = o < 0,
                c ? ((r = l), (o = -o), (a = d.length)) : ((r = d), (n = u), (a = l.length)),
                i = Math.max(Math.ceil(v / At), a) + 2,
                o > i && ((o = i), (r.length = 1)),
                r.reverse(),
                i = o;
            i--;

        )
            r.push(0)
        r.reverse()
    } else {
        for (i = l.length, a = d.length, c = i < a, c && (a = i), i = 0; i < a; i++)
            if (l[i] != d[i]) {
                c = l[i] < d[i]
                break
            }
        o = 0
    }
    for (c && ((r = l), (l = d), (d = r), (t.s = -t.s)), a = l.length, i = d.length - a; i > 0; --i) l[a++] = 0
    for (i = d.length; i > o; ) {
        if (l[--i] < d[i]) {
            for (s = i; s && l[--s] === 0; ) l[s] = qt - 1
            --l[s], (l[i] += qt)
        }
        l[i] -= d[i]
    }
    for (; l[--a] === 0; ) l.pop()
    for (; l[0] === 0; l.shift()) --n
    return l[0] ? ((t.d = l), (t.e = n), $t ? ot(t, v) : t) : new h(0)
}
function ss(e, t, r) {
    var n,
        i = Lt(e),
        s = fn(e.d),
        o = s.length
    return (
        t
            ? (r && (n = r - o) > 0 ? (s = s.charAt(0) + "." + s.slice(1) + fi(n)) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (i < 0 ? "e" : "e+") + i))
            : i < 0
            ? ((s = "0." + fi(-i - 1) + s), r && (n = r - o) > 0 && (s += fi(n)))
            : i >= o
            ? ((s += fi(i + 1 - o)), r && (n = r - i - 1) > 0 && (s = s + "." + fi(n)))
            : ((n = i + 1) < o && (s = s.slice(0, n) + "." + s.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (s += "."), (s += fi(n)))),
        e.s < 0 ? "-" + s : s
    )
}
function sp(e, t) {
    if (e.length > t) return (e.length = t), !0
}
function mb(e) {
    var t, r, n
    function i(s) {
        var o = this
        if (!(o instanceof i)) return new i(s)
        if (((o.constructor = i), s instanceof i)) {
            ;(o.s = s.s), (o.e = s.e), (o.d = (s = s.d) ? s.slice() : s)
            return
        }
        if (typeof s == "number") {
            if (s * 0 !== 0) throw Error(Qi + s)
            if (s > 0) o.s = 1
            else if (s < 0) (s = -s), (o.s = -1)
            else {
                ;(o.s = 0), (o.e = 0), (o.d = [0])
                return
            }
            if (s === ~~s && s < 1e7) {
                ;(o.e = 0), (o.d = [s])
                return
            }
            return ip(o, s.toString())
        } else if (typeof s != "string") throw Error(Qi + s)
        if ((s.charCodeAt(0) === 45 ? ((s = s.slice(1)), (o.s = -1)) : (o.s = 1), dI.test(s))) ip(o, s)
        else throw Error(Qi + s)
    }
    if (
        ((i.prototype = me),
        (i.ROUND_UP = 0),
        (i.ROUND_DOWN = 1),
        (i.ROUND_CEIL = 2),
        (i.ROUND_FLOOR = 3),
        (i.ROUND_HALF_UP = 4),
        (i.ROUND_HALF_DOWN = 5),
        (i.ROUND_HALF_EVEN = 6),
        (i.ROUND_HALF_CEIL = 7),
        (i.ROUND_HALF_FLOOR = 8),
        (i.clone = mb),
        (i.config = i.set = hI),
        e === void 0 && (e = {}),
        e)
    )
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
            e.hasOwnProperty((r = n[t++])) || (e[r] = this[r])
    return i.config(e), i
}
function hI(e) {
    if (!e || typeof e != "object") throw Error(Ir + "Object expected")
    var t,
        r,
        n,
        i = ["precision", 1, ao, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0]
    for (t = 0; t < i.length; t += 3)
        if ((n = e[(r = i[t])]) !== void 0)
            if (lo(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n
            else throw Error(Qi + r + ": " + n)
    if ((n = e[(r = "LN10")]) !== void 0)
        if (n == Math.LN10) this[r] = new this(n)
        else throw Error(Qi + r + ": " + n)
    return this
}
var vb = mb(cI)
yr = new vb(1)
var NI = vb
export {
    wI as A,
    pe as B,
    EI as C,
    NI as D,
    vI as E,
    St as F,
    Ve as G,
    bI as H,
    il as I,
    _I as J,
    yI as K,
    $I as L,
    gI as S,
    xm as W,
    qe as a,
    ke as b,
    be as c,
    Ot as d,
    Tf as e,
    Se as f,
    AI as g,
    iw as h,
    P as i,
    yn as j,
    de as k,
    mI as l,
    Sp as m,
    se as n,
    D as o,
    ue as p,
    Jt as q,
    jt as r,
    hn as s,
    tt as t,
    Co as u,
    ve as v,
    Te as w,
    Rt as x,
    Zt as y,
    Ie as z,
}
