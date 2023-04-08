;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(l) {
    const i = {}
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(l) {
    if (l.ep) return
    l.ep = !0
    const i = n(l)
    fetch(l.href, i)
  }
})()
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
function pc(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == 'function') {
    var n = function r() {
      if (this instanceof r) {
        var l = [null]
        l.push.apply(l, arguments)
        var i = Function.bind.apply(t, l)
        return new i()
      }
      return t.apply(this, arguments)
    }
    n.prototype = t.prototype
  } else n = {}
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var l = Object.getOwnPropertyDescriptor(e, r)
      Object.defineProperty(
        n,
        r,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return e[r]
              },
            }
      )
    }),
    n
  )
}
var Or = {},
  mc = {
    get exports() {
      return Or
    },
    set exports(e) {
      Or = e
    },
  },
  il = {},
  jn = {},
  hc = {
    get exports() {
      return jn
    },
    set exports(e) {
      jn = e
    },
  },
  L = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zn = Symbol.for('react.element'),
  vc = Symbol.for('react.portal'),
  gc = Symbol.for('react.fragment'),
  yc = Symbol.for('react.strict_mode'),
  wc = Symbol.for('react.profiler'),
  kc = Symbol.for('react.provider'),
  Sc = Symbol.for('react.context'),
  xc = Symbol.for('react.forward_ref'),
  Ec = Symbol.for('react.suspense'),
  Cc = Symbol.for('react.memo'),
  _c = Symbol.for('react.lazy'),
  Wo = Symbol.iterator
function Nc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Wo && e[Wo]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var bu = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  es = Object.assign,
  ts = {}
function un(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu)
}
un.prototype.isReactComponent = {}
un.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function ns() {}
ns.prototype = un.prototype
function Yi(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu)
}
var Gi = (Yi.prototype = new ns())
Gi.constructor = Yi
es(Gi, un.prototype)
Gi.isPureReactComponent = !0
var Qo = Array.isArray,
  rs = Object.prototype.hasOwnProperty,
  Xi = { current: null },
  ls = { key: !0, ref: !0, __self: !0, __source: !0 }
function is(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) l.children = n
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
    l.children = s
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r])
  return { $$typeof: Zn, type: e, key: i, ref: o, props: l, _owner: Xi.current }
}
function Pc(e, t) {
  return {
    $$typeof: Zn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Ji(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zn
}
function zc(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Ko = /\/+/g
function _l(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? zc('' + e.key)
    : t.toString(36)
}
function xr(e, t, n, r, l) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var o = !1
  if (e === null) o = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Zn:
          case vc:
            o = !0
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + _l(o, 0) : r),
      Qo(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ko, '$&/') + '/'),
          xr(l, t, n, '', function (c) {
            return c
          }))
        : l != null &&
          (Ji(l) &&
            (l = Pc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ko, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    )
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Qo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u]
      var s = r + _l(i, u)
      o += xr(i, t, n, s, l)
    }
  else if (((s = Nc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + _l(i, u++)), (o += xr(i, t, n, s, l))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return o
}
function lr(e, t, n) {
  if (e == null) return e
  var r = [],
    l = 0
  return (
    xr(e, r, '', '', function (i) {
      return t.call(n, i, l++)
    }),
    r
  )
}
function Tc(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var se = { current: null },
  Er = { transition: null },
  Lc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Xi,
  }
L.Children = {
  map: lr,
  forEach: function (e, t, n) {
    lr(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      lr(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      lr(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Ji(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
L.Component = un
L.Fragment = gc
L.Profiler = wc
L.PureComponent = Yi
L.StrictMode = yc
L.Suspense = Ec
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lc
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = es({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Xi.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (s in t)
      rs.call(t, s) &&
        !ls.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    u = Array(s)
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2]
    r.children = u
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: i, props: r, _owner: o }
}
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kc, _context: e }),
    (e.Consumer = e)
  )
}
L.createElement = is
L.createFactory = function (e) {
  var t = is.bind(null, e)
  return (t.type = e), t
}
L.createRef = function () {
  return { current: null }
}
L.forwardRef = function (e) {
  return { $$typeof: xc, render: e }
}
L.isValidElement = Ji
L.lazy = function (e) {
  return { $$typeof: _c, _payload: { _status: -1, _result: e }, _init: Tc }
}
L.memo = function (e, t) {
  return { $$typeof: Cc, type: e, compare: t === void 0 ? null : t }
}
L.startTransition = function (e) {
  var t = Er.transition
  Er.transition = {}
  try {
    e()
  } finally {
    Er.transition = t
  }
}
L.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
L.useCallback = function (e, t) {
  return se.current.useCallback(e, t)
}
L.useContext = function (e) {
  return se.current.useContext(e)
}
L.useDebugValue = function () {}
L.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e)
}
L.useEffect = function (e, t) {
  return se.current.useEffect(e, t)
}
L.useId = function () {
  return se.current.useId()
}
L.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n)
}
L.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t)
}
L.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t)
}
L.useMemo = function (e, t) {
  return se.current.useMemo(e, t)
}
L.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n)
}
L.useRef = function (e) {
  return se.current.useRef(e)
}
L.useState = function (e) {
  return se.current.useState(e)
}
L.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n)
}
L.useTransition = function () {
  return se.current.useTransition()
}
L.version = '18.2.0'
;(function (e) {
  e.exports = L
})(hc)
const rt = dc(jn)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic = jn,
  Mc = Symbol.for('react.element'),
  jc = Symbol.for('react.fragment'),
  Oc = Object.prototype.hasOwnProperty,
  Fc = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rc = { key: !0, ref: !0, __self: !0, __source: !0 }
function os(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref)
  for (r in t) Oc.call(t, r) && !Rc.hasOwnProperty(r) && (l[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
  return { $$typeof: Mc, type: e, key: i, ref: o, props: l, _owner: Fc.current }
}
il.Fragment = jc
il.jsx = os
il.jsxs = os
;(function (e) {
  e.exports = il
})(mc)
const P = Or.jsx,
  V = Or.jsxs
var Zl = {},
  ql = {},
  Dc = {
    get exports() {
      return ql
    },
    set exports(e) {
      ql = e
    },
  },
  we = {},
  bl = {},
  Uc = {
    get exports() {
      return bl
    },
    set exports(e) {
      bl = e
    },
  },
  us = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(E, z) {
    var T = E.length
    E.push(z)
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        J = E[Q]
      if (0 < l(J, z)) (E[Q] = z), (E[T] = J), (T = Q)
      else break e
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0]
  }
  function r(E) {
    if (E.length === 0) return null
    var z = E[0],
      T = E.pop()
    if (T !== z) {
      E[0] = T
      e: for (var Q = 0, J = E.length, nr = J >>> 1; Q < nr; ) {
        var yt = 2 * (Q + 1) - 1,
          Cl = E[yt],
          wt = yt + 1,
          rr = E[wt]
        if (0 > l(Cl, T))
          wt < J && 0 > l(rr, Cl)
            ? ((E[Q] = rr), (E[wt] = T), (Q = wt))
            : ((E[Q] = Cl), (E[yt] = T), (Q = yt))
        else if (wt < J && 0 > l(rr, T)) (E[Q] = rr), (E[wt] = T), (Q = wt)
        else break e
      }
    }
    return z
  }
  function l(E, z) {
    var T = E.sortIndex - z.sortIndex
    return T !== 0 ? T : E.id - z.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var o = Date,
      u = o.now()
    e.unstable_now = function () {
      return o.now() - u
    }
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    y = !1,
    w = !1,
    k = !1,
    D = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function d(E) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c)
      else if (z.startTime <= E) r(c), (z.sortIndex = z.expirationTime), t(s, z)
      else break
      z = n(c)
    }
  }
  function v(E) {
    if (((k = !1), d(E), !w))
      if (n(s) !== null) (w = !0), xl(x)
      else {
        var z = n(c)
        z !== null && El(v, z.startTime - E)
      }
  }
  function x(E, z) {
    ;(w = !1), k && ((k = !1), f(N), (N = -1)), (y = !0)
    var T = p
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (E && !Pe()));

      ) {
        var Q = m.callback
        if (typeof Q == 'function') {
          ;(m.callback = null), (p = m.priorityLevel)
          var J = Q(m.expirationTime <= z)
          ;(z = e.unstable_now()),
            typeof J == 'function' ? (m.callback = J) : m === n(s) && r(s),
            d(z)
        } else r(s)
        m = n(s)
      }
      if (m !== null) var nr = !0
      else {
        var yt = n(c)
        yt !== null && El(v, yt.startTime - z), (nr = !1)
      }
      return nr
    } finally {
      ;(m = null), (p = T), (y = !1)
    }
  }
  var C = !1,
    _ = null,
    N = -1,
    W = 5,
    I = -1
  function Pe() {
    return !(e.unstable_now() - I < W)
  }
  function cn() {
    if (_ !== null) {
      var E = e.unstable_now()
      I = E
      var z = !0
      try {
        z = _(!0, E)
      } finally {
        z ? fn() : ((C = !1), (_ = null))
      }
    } else C = !1
  }
  var fn
  if (typeof a == 'function')
    fn = function () {
      a(cn)
    }
  else if (typeof MessageChannel < 'u') {
    var Ho = new MessageChannel(),
      fc = Ho.port2
    ;(Ho.port1.onmessage = cn),
      (fn = function () {
        fc.postMessage(null)
      })
  } else
    fn = function () {
      D(cn, 0)
    }
  function xl(E) {
    ;(_ = E), C || ((C = !0), fn())
  }
  function El(E, z) {
    N = D(function () {
      E(e.unstable_now())
    }, z)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), xl(x))
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (W = 0 < E ? Math.floor(1e3 / E) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3
          break
        default:
          z = p
      }
      var T = p
      p = z
      try {
        return E()
      } finally {
        p = T
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          E = 3
      }
      var T = p
      p = E
      try {
        return z()
      } finally {
        p = T
      }
    }),
    (e.unstable_scheduleCallback = function (E, z, T) {
      var Q = e.unstable_now()
      switch (
        (typeof T == 'object' && T !== null
          ? ((T = T.delay), (T = typeof T == 'number' && 0 < T ? Q + T : Q))
          : (T = Q),
        E)
      ) {
        case 1:
          var J = -1
          break
        case 2:
          J = 250
          break
        case 5:
          J = 1073741823
          break
        case 4:
          J = 1e4
          break
        default:
          J = 5e3
      }
      return (
        (J = T + J),
        (E = {
          id: h++,
          callback: z,
          priorityLevel: E,
          startTime: T,
          expirationTime: J,
          sortIndex: -1,
        }),
        T > Q
          ? ((E.sortIndex = T),
            t(c, E),
            n(s) === null &&
              E === n(c) &&
              (k ? (f(N), (N = -1)) : (k = !0), El(v, T - Q)))
          : ((E.sortIndex = J), t(s, E), w || y || ((w = !0), xl(x))),
        E
      )
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (E) {
      var z = p
      return function () {
        var T = p
        p = z
        try {
          return E.apply(this, arguments)
        } finally {
          p = T
        }
      }
    })
})(us)
;(function (e) {
  e.exports = us
})(Uc)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = jn,
  ye = bl
function g(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var as = new Set(),
  On = {}
function Mt(e, t) {
  bt(e, t), bt(e + 'Capture', t)
}
function bt(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) as.add(t[e])
}
var Qe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ei = Object.prototype.hasOwnProperty,
  Ac =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yo = {},
  Go = {}
function $c(e) {
  return ei.call(Go, e)
    ? !0
    : ei.call(Yo, e)
    ? !1
    : Ac.test(e)
    ? (Go[e] = !0)
    : ((Yo[e] = !0), !1)
}
function Bc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Vc(e, t, n, r) {
  if (t === null || typeof t > 'u' || Bc(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ae(e, t, n, r, l, i, o) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o)
}
var te = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Zi = /[\-:]([a-z])/g
function qi(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zi, qi)
    te[t] = new ae(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zi, qi)
    te[t] = new ae(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Zi, qi)
  te[t] = new ae(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
te.xlinkHref = new ae(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function bi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null
  ;(l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Vc(t, n, l, r) && (n = null),
    r || l === null
      ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = ss.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for('react.element'),
  Ft = Symbol.for('react.portal'),
  Rt = Symbol.for('react.fragment'),
  eo = Symbol.for('react.strict_mode'),
  ti = Symbol.for('react.profiler'),
  cs = Symbol.for('react.provider'),
  fs = Symbol.for('react.context'),
  to = Symbol.for('react.forward_ref'),
  ni = Symbol.for('react.suspense'),
  ri = Symbol.for('react.suspense_list'),
  no = Symbol.for('react.memo'),
  Ze = Symbol.for('react.lazy'),
  ds = Symbol.for('react.offscreen'),
  Xo = Symbol.iterator
function dn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xo && e[Xo]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var B = Object.assign,
  Nl
function kn(e) {
  if (Nl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Nl = (t && t[1]) || ''
    }
  return (
    `
` +
    Nl +
    e
  )
}
var Pl = !1
function zl(e, t) {
  if (!e || Pl) return ''
  Pl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (c) {
          var r = c
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (c) {
          r = c
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (c) {
        r = c
      }
      e()
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= o && 0 <= u)
          break
        }
    }
  } finally {
    ;(Pl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? kn(e) : ''
}
function Hc(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type)
    case 16:
      return kn('Lazy')
    case 13:
      return kn('Suspense')
    case 19:
      return kn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = zl(e.type, !1)), e
    case 11:
      return (e = zl(e.type.render, !1)), e
    case 1:
      return (e = zl(e.type, !0)), e
    default:
      return ''
  }
}
function li(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Rt:
      return 'Fragment'
    case Ft:
      return 'Portal'
    case ti:
      return 'Profiler'
    case eo:
      return 'StrictMode'
    case ni:
      return 'Suspense'
    case ri:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case fs:
        return (e.displayName || 'Context') + '.Consumer'
      case cs:
        return (e._context.displayName || 'Context') + '.Provider'
      case to:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case no:
        return (
          (t = e.displayName || null), t !== null ? t : li(e.type) || 'Memo'
        )
      case Ze:
        ;(t = e._payload), (e = e._init)
        try {
          return li(e(t))
        } catch {}
    }
  return null
}
function Wc(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return li(t)
    case 8:
      return t === eo ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function pt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function ps(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Qc(e) {
  var t = ps(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this)
        },
        set: function (o) {
          ;(r = '' + o), i.call(this, o)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (o) {
          r = '' + o
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Qc(e))
}
function ms(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = ps(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Fr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function ii(e, t) {
  var n = t.checked
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Jo(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function hs(e, t) {
  ;(t = t.checked), t != null && bi(e, 'checked', t, !1)
}
function oi(e, t) {
  hs(e, t)
  var n = pt(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? ui(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ui(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Zo(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function ui(e, t, n) {
  ;(t !== 'number' || Fr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Sn = Array.isArray
function Yt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
        return
      }
      t !== null || e[l].disabled || (t = e[l])
    }
    t !== null && (t.selected = !0)
  }
}
function si(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91))
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function qo(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92))
      if (Sn(n)) {
        if (1 < n.length) throw Error(g(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: pt(n) }
}
function vs(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function bo(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function gs(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function ai(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? gs(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ur,
  ys = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ur = ur || document.createElement('div'),
          ur.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Fn(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Kc = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Cn).forEach(function (e) {
  Kc.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cn[t] = Cn[e])
  })
})
function ws(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Cn.hasOwnProperty(e) && Cn[e])
    ? ('' + t).trim()
    : t + 'px'
}
function ks(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = ws(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l)
    }
}
var Yc = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
)
function ci(e, t) {
  if (t) {
    if (Yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(g(62))
  }
}
function fi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var di = null
function ro(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var pi = null,
  Gt = null,
  Xt = null
function eu(e) {
  if ((e = er(e))) {
    if (typeof pi != 'function') throw Error(g(280))
    var t = e.stateNode
    t && ((t = cl(t)), pi(e.stateNode, e.type, t))
  }
}
function Ss(e) {
  Gt ? (Xt ? Xt.push(e) : (Xt = [e])) : (Gt = e)
}
function xs() {
  if (Gt) {
    var e = Gt,
      t = Xt
    if (((Xt = Gt = null), eu(e), t)) for (e = 0; e < t.length; e++) eu(t[e])
  }
}
function Es(e, t) {
  return e(t)
}
function Cs() {}
var Tl = !1
function _s(e, t, n) {
  if (Tl) return e(t, n)
  Tl = !0
  try {
    return Es(e, t, n)
  } finally {
    ;(Tl = !1), (Gt !== null || Xt !== null) && (Cs(), xs())
  }
}
function Rn(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = cl(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(g(231, t, typeof n))
  return n
}
var mi = !1
if (Qe)
  try {
    var pn = {}
    Object.defineProperty(pn, 'passive', {
      get: function () {
        mi = !0
      },
    }),
      window.addEventListener('test', pn, pn),
      window.removeEventListener('test', pn, pn)
  } catch {
    mi = !1
  }
function Gc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, c)
  } catch (h) {
    this.onError(h)
  }
}
var _n = !1,
  Rr = null,
  Dr = !1,
  hi = null,
  Xc = {
    onError: function (e) {
      ;(_n = !0), (Rr = e)
    },
  }
function Jc(e, t, n, r, l, i, o, u, s) {
  ;(_n = !1), (Rr = null), Gc.apply(Xc, arguments)
}
function Zc(e, t, n, r, l, i, o, u, s) {
  if ((Jc.apply(this, arguments), _n)) {
    if (_n) {
      var c = Rr
      ;(_n = !1), (Rr = null)
    } else throw Error(g(198))
    Dr || ((Dr = !0), (hi = c))
  }
}
function jt(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Ns(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function tu(e) {
  if (jt(e) !== e) throw Error(g(188))
}
function qc(e) {
  var t = e.alternate
  if (!t) {
    if (((t = jt(e)), t === null)) throw Error(g(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var l = n.return
    if (l === null) break
    var i = l.alternate
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return tu(l), e
        if (i === r) return tu(l), t
        i = i.sibling
      }
      throw Error(g(188))
    }
    if (n.return !== r.return) (n = l), (r = i)
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          ;(o = !0), (n = l), (r = i)
          break
        }
        if (u === r) {
          ;(o = !0), (r = l), (n = i)
          break
        }
        u = u.sibling
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            ;(o = !0), (n = i), (r = l)
            break
          }
          if (u === r) {
            ;(o = !0), (r = i), (n = l)
            break
          }
          u = u.sibling
        }
        if (!o) throw Error(g(189))
      }
    }
    if (n.alternate !== r) throw Error(g(190))
  }
  if (n.tag !== 3) throw Error(g(188))
  return n.stateNode.current === n ? e : t
}
function Ps(e) {
  return (e = qc(e)), e !== null ? zs(e) : null
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = zs(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Ts = ye.unstable_scheduleCallback,
  nu = ye.unstable_cancelCallback,
  bc = ye.unstable_shouldYield,
  ef = ye.unstable_requestPaint,
  K = ye.unstable_now,
  tf = ye.unstable_getCurrentPriorityLevel,
  lo = ye.unstable_ImmediatePriority,
  Ls = ye.unstable_UserBlockingPriority,
  Ur = ye.unstable_NormalPriority,
  nf = ye.unstable_LowPriority,
  Is = ye.unstable_IdlePriority,
  ol = null,
  Ue = null
function rf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == 'function')
    try {
      Ue.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : uf,
  lf = Math.log,
  of = Math.LN2
function uf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((lf(e) / of) | 0)) | 0
}
var sr = 64,
  ar = 4194304
function xn(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Ar(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455
  if (o !== 0) {
    var u = o & ~l
    u !== 0 ? (r = xn(u)) : ((i &= o), i !== 0 && (r = xn(i)))
  } else (o = n & ~l), o !== 0 ? (r = xn(o)) : i !== 0 && (r = xn(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
  return r
}
function sf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function af(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Me(i),
      u = 1 << o,
      s = l[o]
    s === -1
      ? (!(u & n) || u & r) && (l[o] = sf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u)
  }
}
function vi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Ms() {
  var e = sr
  return (sr <<= 1), !(sr & 4194240) && (sr = 64), e
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function qn(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n)
}
function cf(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      i = 1 << l
    ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i)
  }
}
function io(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r
    ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
  }
}
var j = 0
function js(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Os,
  oo,
  Fs,
  Rs,
  Ds,
  gi = !1,
  cr = [],
  lt = null,
  it = null,
  ot = null,
  Dn = new Map(),
  Un = new Map(),
  be = [],
  ff =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function ru(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      lt = null
      break
    case 'dragenter':
    case 'dragleave':
      it = null
      break
    case 'mouseover':
    case 'mouseout':
      ot = null
      break
    case 'pointerover':
    case 'pointerout':
      Dn.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Un.delete(t.pointerId)
  }
}
function mn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = er(t)), t !== null && oo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e)
}
function df(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (lt = mn(lt, e, t, n, r, l)), !0
    case 'dragenter':
      return (it = mn(it, e, t, n, r, l)), !0
    case 'mouseover':
      return (ot = mn(ot, e, t, n, r, l)), !0
    case 'pointerover':
      var i = l.pointerId
      return Dn.set(i, mn(Dn.get(i) || null, e, t, n, r, l)), !0
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Un.set(i, mn(Un.get(i) || null, e, t, n, r, l)), !0
      )
  }
  return !1
}
function Us(e) {
  var t = xt(e.target)
  if (t !== null) {
    var n = jt(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ns(n)), t !== null)) {
          ;(e.blockedOn = t),
            Ds(e.priority, function () {
              Fs(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Cr(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(di = r), n.target.dispatchEvent(r), (di = null)
    } else return (t = er(n)), t !== null && oo(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function lu(e, t, n) {
  Cr(e) && n.delete(t)
}
function pf() {
  ;(gi = !1),
    lt !== null && Cr(lt) && (lt = null),
    it !== null && Cr(it) && (it = null),
    ot !== null && Cr(ot) && (ot = null),
    Dn.forEach(lu),
    Un.forEach(lu)
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gi ||
      ((gi = !0), ye.unstable_scheduleCallback(ye.unstable_NormalPriority, pf)))
}
function An(e) {
  function t(l) {
    return hn(l, e)
  }
  if (0 < cr.length) {
    hn(cr[0], e)
    for (var n = 1; n < cr.length; n++) {
      var r = cr[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    lt !== null && hn(lt, e),
      it !== null && hn(it, e),
      ot !== null && hn(ot, e),
      Dn.forEach(t),
      Un.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Us(n), n.blockedOn === null && be.shift()
}
var Jt = Xe.ReactCurrentBatchConfig,
  $r = !0
function mf(e, t, n, r) {
  var l = j,
    i = Jt.transition
  Jt.transition = null
  try {
    ;(j = 1), uo(e, t, n, r)
  } finally {
    ;(j = l), (Jt.transition = i)
  }
}
function hf(e, t, n, r) {
  var l = j,
    i = Jt.transition
  Jt.transition = null
  try {
    ;(j = 4), uo(e, t, n, r)
  } finally {
    ;(j = l), (Jt.transition = i)
  }
}
function uo(e, t, n, r) {
  if ($r) {
    var l = yi(e, t, n, r)
    if (l === null) $l(e, t, r, Br, n), ru(e, r)
    else if (df(l, e, t, n, r)) r.stopPropagation()
    else if ((ru(e, r), t & 4 && -1 < ff.indexOf(e))) {
      for (; l !== null; ) {
        var i = er(l)
        if (
          (i !== null && Os(i),
          (i = yi(e, t, n, r)),
          i === null && $l(e, t, r, Br, n),
          i === l)
        )
          break
        l = i
      }
      l !== null && r.stopPropagation()
    } else $l(e, t, r, null, n)
  }
}
var Br = null
function yi(e, t, n, r) {
  if (((Br = null), (e = ro(r)), (e = xt(e)), e !== null))
    if (((t = jt(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Ns(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Br = e), null
}
function As(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (tf()) {
        case lo:
          return 1
        case Ls:
          return 4
        case Ur:
        case nf:
          return 16
        case Is:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var tt = null,
  so = null,
  _r = null
function $s() {
  if (_r) return _r
  var e,
    t = so,
    n = t.length,
    r,
    l = 'value' in tt ? tt.value : tt.textContent,
    i = l.length
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (_r = l.slice(e, 1 < r ? 1 - r : void 0))
}
function Nr(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function fr() {
  return !0
}
function iu() {
  return !1
}
function ke(e) {
  function t(n, r, l, i, o) {
    ;(this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null)
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fr
        : iu),
      (this.isPropagationStopped = iu),
      this
    )
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = fr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = fr))
      },
      persist: function () {},
      isPersistent: fr,
    }),
    t
  )
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ao = ke(sn),
  bn = B({}, sn, { view: 0, detail: 0 }),
  vf = ke(bn),
  Il,
  Ml,
  vn,
  ul = B({}, bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: co,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== vn &&
            (vn && e.type === 'mousemove'
              ? ((Il = e.screenX - vn.screenX), (Ml = e.screenY - vn.screenY))
              : (Ml = Il = 0),
            (vn = e)),
          Il)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ml
    },
  }),
  ou = ke(ul),
  gf = B({}, ul, { dataTransfer: 0 }),
  yf = ke(gf),
  wf = B({}, bn, { relatedTarget: 0 }),
  jl = ke(wf),
  kf = B({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = ke(kf),
  xf = B({}, sn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Ef = ke(xf),
  Cf = B({}, sn, { data: 0 }),
  uu = ke(Cf),
  _f = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Nf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Pf = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function zf(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Pf[e]) ? !!t[e] : !1
}
function co() {
  return zf
}
var Tf = B({}, bn, {
    key: function (e) {
      if (e.key) {
        var t = _f[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Nr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Nf[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: co,
    charCode: function (e) {
      return e.type === 'keypress' ? Nr(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Nr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Lf = ke(Tf),
  If = B({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  su = ke(If),
  Mf = B({}, bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: co,
  }),
  jf = ke(Mf),
  Of = B({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ff = ke(Of),
  Rf = B({}, ul, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Df = ke(Rf),
  Uf = [9, 13, 27, 32],
  fo = Qe && 'CompositionEvent' in window,
  Nn = null
Qe && 'documentMode' in document && (Nn = document.documentMode)
var Af = Qe && 'TextEvent' in window && !Nn,
  Bs = Qe && (!fo || (Nn && 8 < Nn && 11 >= Nn)),
  au = String.fromCharCode(32),
  cu = !1
function Vs(e, t) {
  switch (e) {
    case 'keyup':
      return Uf.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Hs(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Dt = !1
function $f(e, t) {
  switch (e) {
    case 'compositionend':
      return Hs(t)
    case 'keypress':
      return t.which !== 32 ? null : ((cu = !0), au)
    case 'textInput':
      return (e = t.data), e === au && cu ? null : e
    default:
      return null
  }
}
function Bf(e, t) {
  if (Dt)
    return e === 'compositionend' || (!fo && Vs(e, t))
      ? ((e = $s()), (_r = so = tt = null), (Dt = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Bs && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Vf = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Vf[e.type] : t === 'textarea'
}
function Ws(e, t, n, r) {
  Ss(r),
    (t = Vr(t, 'onChange')),
    0 < t.length &&
      ((n = new ao('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Pn = null,
  $n = null
function Hf(e) {
  ta(e, 0)
}
function sl(e) {
  var t = $t(e)
  if (ms(t)) return e
}
function Wf(e, t) {
  if (e === 'change') return t
}
var Qs = !1
if (Qe) {
  var Ol
  if (Qe) {
    var Fl = 'oninput' in document
    if (!Fl) {
      var du = document.createElement('div')
      du.setAttribute('oninput', 'return;'),
        (Fl = typeof du.oninput == 'function')
    }
    Ol = Fl
  } else Ol = !1
  Qs = Ol && (!document.documentMode || 9 < document.documentMode)
}
function pu() {
  Pn && (Pn.detachEvent('onpropertychange', Ks), ($n = Pn = null))
}
function Ks(e) {
  if (e.propertyName === 'value' && sl($n)) {
    var t = []
    Ws(t, $n, e, ro(e)), _s(Hf, t)
  }
}
function Qf(e, t, n) {
  e === 'focusin'
    ? (pu(), (Pn = t), ($n = n), Pn.attachEvent('onpropertychange', Ks))
    : e === 'focusout' && pu()
}
function Kf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return sl($n)
}
function Yf(e, t) {
  if (e === 'click') return sl(t)
}
function Gf(e, t) {
  if (e === 'input' || e === 'change') return sl(t)
}
function Xf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Oe = typeof Object.is == 'function' ? Object.is : Xf
function Bn(e, t) {
  if (Oe(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var l = n[r]
    if (!ei.call(t, l) || !Oe(e[l], t[l])) return !1
  }
  return !0
}
function mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function hu(e, t) {
  var n = mu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = mu(n)
  }
}
function Ys(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ys(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Gs() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Fr(e.document)
  }
  return t
}
function po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Jf(e) {
  var t = Gs(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ys(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && po(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var l = n.textContent.length,
          i = Math.min(r.start, l)
        ;(r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = hu(n, i))
        var o = hu(n, r)
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Zf = Qe && 'documentMode' in document && 11 >= document.documentMode,
  Ut = null,
  wi = null,
  zn = null,
  ki = !1
function vu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  ki ||
    Ut == null ||
    Ut !== Fr(r) ||
    ((r = Ut),
    'selectionStart' in r && po(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zn && Bn(zn, r)) ||
      ((zn = r),
      (r = Vr(wi, 'onSelect')),
      0 < r.length &&
        ((t = new ao('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ut))))
}
function dr(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var At = {
    animationend: dr('Animation', 'AnimationEnd'),
    animationiteration: dr('Animation', 'AnimationIteration'),
    animationstart: dr('Animation', 'AnimationStart'),
    transitionend: dr('Transition', 'TransitionEnd'),
  },
  Rl = {},
  Xs = {}
Qe &&
  ((Xs = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete At.animationend.animation,
    delete At.animationiteration.animation,
    delete At.animationstart.animation),
  'TransitionEvent' in window || delete At.transitionend.transition)
function al(e) {
  if (Rl[e]) return Rl[e]
  if (!At[e]) return e
  var t = At[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Xs) return (Rl[e] = t[n])
  return e
}
var Js = al('animationend'),
  Zs = al('animationiteration'),
  qs = al('animationstart'),
  bs = al('transitionend'),
  ea = new Map(),
  gu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function ht(e, t) {
  ea.set(e, t), Mt(t, [e])
}
for (var Dl = 0; Dl < gu.length; Dl++) {
  var Ul = gu[Dl],
    qf = Ul.toLowerCase(),
    bf = Ul[0].toUpperCase() + Ul.slice(1)
  ht(qf, 'on' + bf)
}
ht(Js, 'onAnimationEnd')
ht(Zs, 'onAnimationIteration')
ht(qs, 'onAnimationStart')
ht('dblclick', 'onDoubleClick')
ht('focusin', 'onFocus')
ht('focusout', 'onBlur')
ht(bs, 'onTransitionEnd')
bt('onMouseEnter', ['mouseout', 'mouseover'])
bt('onMouseLeave', ['mouseout', 'mouseover'])
bt('onPointerEnter', ['pointerout', 'pointerover'])
bt('onPointerLeave', ['pointerout', 'pointerover'])
Mt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Mt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Mt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Mt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Mt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Mt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var En =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ed = new Set('cancel close invalid load scroll toggle'.split(' ').concat(En))
function yu(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Zc(r, t, void 0, e), (e.currentTarget = null)
}
function ta(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e
          yu(l, u, c), (i = s)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e
          yu(l, u, c), (i = s)
        }
    }
  }
  if (Dr) throw ((e = hi), (Dr = !1), (hi = null), e)
}
function F(e, t) {
  var n = t[_i]
  n === void 0 && (n = t[_i] = new Set())
  var r = e + '__bubble'
  n.has(r) || (na(t, e, 2, !1), n.add(r))
}
function Al(e, t, n) {
  var r = 0
  t && (r |= 4), na(n, e, r, t)
}
var pr = '_reactListening' + Math.random().toString(36).slice(2)
function Vn(e) {
  if (!e[pr]) {
    ;(e[pr] = !0),
      as.forEach(function (n) {
        n !== 'selectionchange' && (ed.has(n) || Al(n, !1, e), Al(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[pr] || ((t[pr] = !0), Al('selectionchange', !1, t))
  }
}
function na(e, t, n, r) {
  switch (As(t)) {
    case 1:
      var l = mf
      break
    case 4:
      l = hf
      break
    default:
      l = uo
  }
  ;(n = l.bind(null, t, n, e)),
    (l = void 0),
    !mi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1)
}
function $l(e, t, n, r, l) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var o = r.tag
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return
            o = o.return
          }
        for (; u !== null; ) {
          if (((o = xt(u)), o === null)) return
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  _s(function () {
    var c = i,
      h = ro(n),
      m = []
    e: {
      var p = ea.get(e)
      if (p !== void 0) {
        var y = ao,
          w = e
        switch (e) {
          case 'keypress':
            if (Nr(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = Lf
            break
          case 'focusin':
            ;(w = 'focus'), (y = jl)
            break
          case 'focusout':
            ;(w = 'blur'), (y = jl)
            break
          case 'beforeblur':
          case 'afterblur':
            y = jl
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = ou
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = yf
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = jf
            break
          case Js:
          case Zs:
          case qs:
            y = Sf
            break
          case bs:
            y = Ff
            break
          case 'scroll':
            y = vf
            break
          case 'wheel':
            y = Df
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = Ef
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = su
        }
        var k = (t & 4) !== 0,
          D = !k && e === 'scroll',
          f = k ? (p !== null ? p + 'Capture' : null) : p
        k = []
        for (var a = c, d; a !== null; ) {
          d = a
          var v = d.stateNode
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Rn(a, f)), v != null && k.push(Hn(a, v, d)))),
            D)
          )
            break
          a = a.return
        }
        0 < k.length &&
          ((p = new y(p, w, null, n, h)), m.push({ event: p, listeners: k }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== di &&
            (w = n.relatedTarget || n.fromElement) &&
            (xt(w) || w[Ke]))
        )
          break e
        if (
          (y || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = c),
              (w = w ? xt(w) : null),
              w !== null &&
                ((D = jt(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = c)),
          y !== w)
        ) {
          if (
            ((k = ou),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = su),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (D = y == null ? p : $t(y)),
            (d = w == null ? p : $t(w)),
            (p = new k(v, a + 'leave', y, n, h)),
            (p.target = D),
            (p.relatedTarget = d),
            (v = null),
            xt(h) === c &&
              ((k = new k(f, a + 'enter', w, n, h)),
              (k.target = d),
              (k.relatedTarget = D),
              (v = k)),
            (D = v),
            y && w)
          )
            t: {
              for (k = y, f = w, a = 0, d = k; d; d = Ot(d)) a++
              for (d = 0, v = f; v; v = Ot(v)) d++
              for (; 0 < a - d; ) (k = Ot(k)), a--
              for (; 0 < d - a; ) (f = Ot(f)), d--
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t
                ;(k = Ot(k)), (f = Ot(f))
              }
              k = null
            }
          else k = null
          y !== null && wu(m, p, y, k, !1),
            w !== null && D !== null && wu(m, D, w, k, !0)
        }
      }
      e: {
        if (
          ((p = c ? $t(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var x = Wf
        else if (fu(p))
          if (Qs) x = Gf
          else {
            x = Kf
            var C = Qf
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (x = Yf)
        if (x && (x = x(e, c))) {
          Ws(m, x, n, h)
          break e
        }
        C && C(e, p, c),
          e === 'focusout' &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === 'number' &&
            ui(p, 'number', p.value)
      }
      switch (((C = c ? $t(c) : window), e)) {
        case 'focusin':
          ;(fu(C) || C.contentEditable === 'true') &&
            ((Ut = C), (wi = c), (zn = null))
          break
        case 'focusout':
          zn = wi = Ut = null
          break
        case 'mousedown':
          ki = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(ki = !1), vu(m, n, h)
          break
        case 'selectionchange':
          if (Zf) break
        case 'keydown':
        case 'keyup':
          vu(m, n, h)
      }
      var _
      if (fo)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart'
              break e
            case 'compositionend':
              N = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              N = 'onCompositionUpdate'
              break e
          }
          N = void 0
        }
      else
        Dt
          ? Vs(e, n) && (N = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart')
      N &&
        (Bs &&
          n.locale !== 'ko' &&
          (Dt || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && Dt && (_ = $s())
            : ((tt = h),
              (so = 'value' in tt ? tt.value : tt.textContent),
              (Dt = !0))),
        (C = Vr(c, N)),
        0 < C.length &&
          ((N = new uu(N, e, null, n, h)),
          m.push({ event: N, listeners: C }),
          _ ? (N.data = _) : ((_ = Hs(n)), _ !== null && (N.data = _)))),
        (_ = Af ? $f(e, n) : Bf(e, n)) &&
          ((c = Vr(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new uu('onBeforeInput', 'beforeinput', null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)))
    }
    ta(m, t)
  })
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Vr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Rn(e, n)),
      i != null && r.unshift(Hn(e, i, l)),
      (i = Rn(e, t)),
      i != null && r.push(Hn(e, i, l))),
      (e = e.return)
  }
  return r
}
function Ot(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function wu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Rn(n, i)), s != null && o.unshift(Hn(n, s, u)))
        : l || ((s = Rn(n, i)), s != null && o.push(Hn(n, s, u)))),
      (n = n.return)
  }
  o.length !== 0 && e.push({ event: t, listeners: o })
}
var td = /\r\n?/g,
  nd = /\u0000|\uFFFD/g
function ku(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      td,
      `
`
    )
    .replace(nd, '')
}
function mr(e, t, n) {
  if (((t = ku(t)), ku(e) !== t && n)) throw Error(g(425))
}
function Hr() {}
var Si = null,
  xi = null
function Ei(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ci = typeof setTimeout == 'function' ? setTimeout : void 0,
  rd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Su = typeof Promise == 'function' ? Promise : void 0,
  ld =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Su < 'u'
      ? function (e) {
          return Su.resolve(null).then(e).catch(id)
        }
      : Ci
function id(e) {
  setTimeout(function () {
    throw e
  })
}
function Bl(e, t) {
  var n = t,
    r = 0
  do {
    var l = n.nextSibling
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), An(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = l
  } while (n)
  An(t)
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function xu(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var an = Math.random().toString(36).slice(2),
  De = '__reactFiber$' + an,
  Wn = '__reactProps$' + an,
  Ke = '__reactContainer$' + an,
  _i = '__reactEvents$' + an,
  od = '__reactListeners$' + an,
  ud = '__reactHandles$' + an
function xt(e) {
  var t = e[De]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[De])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xu(e); e !== null; ) {
          if ((n = e[De])) return n
          e = xu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function er(e) {
  return (
    (e = e[De] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(g(33))
}
function cl(e) {
  return e[Wn] || null
}
var Ni = [],
  Bt = -1
function vt(e) {
  return { current: e }
}
function R(e) {
  0 > Bt || ((e.current = Ni[Bt]), (Ni[Bt] = null), Bt--)
}
function O(e, t) {
  Bt++, (Ni[Bt] = e.current), (e.current = t)
}
var mt = {},
  ie = vt(mt),
  de = vt(!1),
  Pt = mt
function en(e, t) {
  var n = e.type.contextTypes
  if (!n) return mt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var l = {},
    i
  for (i in n) l[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  )
}
function pe(e) {
  return (e = e.childContextTypes), e != null
}
function Wr() {
  R(de), R(ie)
}
function Eu(e, t, n) {
  if (ie.current !== mt) throw Error(g(168))
  O(ie, t), O(de, n)
}
function ra(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var l in r) if (!(l in t)) throw Error(g(108, Wc(e) || 'Unknown', l))
  return B({}, n, r)
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Pt = ie.current),
    O(ie, e),
    O(de, de.current),
    !0
  )
}
function Cu(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(g(169))
  n
    ? ((e = ra(e, t, Pt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      R(de),
      R(ie),
      O(ie, e))
    : R(de),
    O(de, n)
}
var Be = null,
  fl = !1,
  Vl = !1
function la(e) {
  Be === null ? (Be = [e]) : Be.push(e)
}
function sd(e) {
  ;(fl = !0), la(e)
}
function gt() {
  if (!Vl && Be !== null) {
    Vl = !0
    var e = 0,
      t = j
    try {
      var n = Be
      for (j = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Be = null), (fl = !1)
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), Ts(lo, gt), l)
    } finally {
      ;(j = t), (Vl = !1)
    }
  }
  return null
}
var Vt = [],
  Ht = 0,
  Kr = null,
  Yr = 0,
  Se = [],
  xe = 0,
  zt = null,
  Ve = 1,
  He = ''
function kt(e, t) {
  ;(Vt[Ht++] = Yr), (Vt[Ht++] = Kr), (Kr = e), (Yr = t)
}
function ia(e, t, n) {
  ;(Se[xe++] = Ve), (Se[xe++] = He), (Se[xe++] = zt), (zt = e)
  var r = Ve
  e = He
  var l = 32 - Me(r) - 1
  ;(r &= ~(1 << l)), (n += 1)
  var i = 32 - Me(t) + l
  if (30 < i) {
    var o = l - (l % 5)
    ;(i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ve = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (He = i + e)
  } else (Ve = (1 << i) | (n << l) | r), (He = e)
}
function mo(e) {
  e.return !== null && (kt(e, 1), ia(e, 1, 0))
}
function ho(e) {
  for (; e === Kr; )
    (Kr = Vt[--Ht]), (Vt[Ht] = null), (Yr = Vt[--Ht]), (Vt[Ht] = null)
  for (; e === zt; )
    (zt = Se[--xe]),
      (Se[xe] = null),
      (He = Se[--xe]),
      (Se[xe] = null),
      (Ve = Se[--xe]),
      (Se[xe] = null)
}
var ge = null,
  ve = null,
  U = !1,
  Ie = null
function oa(e, t) {
  var n = Ee(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ve = ut(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ve = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: Ve, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ve = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Pi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function zi(e) {
  if (U) {
    var t = ve
    if (t) {
      var n = t
      if (!_u(e, t)) {
        if (Pi(e)) throw Error(g(418))
        t = ut(n.nextSibling)
        var r = ge
        t && _u(e, t)
          ? oa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e))
      }
    } else {
      if (Pi(e)) throw Error(g(418))
      ;(e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e)
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ge = e
}
function hr(e) {
  if (e !== ge) return !1
  if (!U) return Nu(e), (U = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ei(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Pi(e)) throw (ua(), Error(g(418)))
    for (; t; ) oa(e, t), (t = ut(t.nextSibling))
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              ve = ut(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      ve = null
    }
  } else ve = ge ? ut(e.stateNode.nextSibling) : null
  return !0
}
function ua() {
  for (var e = ve; e; ) e = ut(e.nextSibling)
}
function tn() {
  ;(ve = ge = null), (U = !1)
}
function vo(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e)
}
var ad = Xe.ReactCurrentBatchConfig
function Te(e, t) {
  if (e && e.defaultProps) {
    ;(t = B({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Gr = vt(null),
  Xr = null,
  Wt = null,
  go = null
function yo() {
  go = Wt = Xr = null
}
function wo(e) {
  var t = Gr.current
  R(Gr), (e._currentValue = t)
}
function Ti(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Zt(e, t) {
  ;(Xr = e),
    (go = Wt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null))
}
function _e(e) {
  var t = e._currentValue
  if (go !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wt === null)) {
      if (Xr === null) throw Error(g(308))
      ;(Wt = e), (Xr.dependencies = { lanes: 0, firstContext: e })
    } else Wt = Wt.next = e
  return t
}
var Et = null
function ko(e) {
  Et === null ? (Et = [e]) : Et.push(e)
}
function sa(e, t, n, r) {
  var l = t.interleaved
  return (
    l === null ? ((n.next = n), ko(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  )
}
function Ye(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var qe = !1
function So(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function aa(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function st(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), M & 2)) {
    var l = r.pending
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    )
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ko(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  )
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), io(e, n)
  }
}
function Pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next)
      } while (n !== null)
      i === null ? (l = i = t) : (i = i.next = t)
    } else l = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Jr(e, t, n, r) {
  var l = e.updateQueue
  qe = !1
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending
  if (u !== null) {
    l.shared.pending = null
    var s = u,
      c = s.next
    ;(s.next = null), o === null ? (i = c) : (o.next = c), (o = s)
    var h = e.alternate
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)))
  }
  if (i !== null) {
    var m = l.baseState
    ;(o = 0), (h = c = s = null), (u = i)
    do {
      var p = u.lane,
        y = u.eventTime
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            })
        e: {
          var w = e,
            k = u
          switch (((p = t), (y = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == 'function')) {
                m = w.call(y, m, p)
                break e
              }
              m = w
              break e
            case 3:
              w.flags = (w.flags & -65537) | 128
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == 'function' ? w.call(y, m, p) : w),
                p == null)
              )
                break e
              m = B({}, m, p)
              break e
            case 2:
              qe = !0
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u))
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = y), (s = m)) : (h = h.next = y),
          (o |= p)
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break
        ;(p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null)
      }
    } while (1)
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t
      do (o |= l.lane), (l = l.next)
      while (l !== t)
    } else i === null && (l.shared.lanes = 0)
    ;(Lt |= o), (e.lanes = o), (e.memoizedState = m)
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(g(191, l))
        l.call(r)
      }
    }
}
var ca = new ss.Component().refs
function Li(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jt(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ue(),
      l = ct(e),
      i = We(r, l)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (je(t, e, l, r), Pr(t, e, l))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ue(),
      l = ct(e),
      i = We(r, l)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (je(t, e, l, r), Pr(t, e, l))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ue(),
      r = ct(e),
      l = We(n, r)
    ;(l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (je(t, e, r, n), Pr(t, e, r))
  },
}
function Tu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, i)
      : !0
  )
}
function fa(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = _e(i))
      : ((l = pe(t) ? Pt : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? en(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Lu(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null)
}
function Ii(e, t, n, r) {
  var l = e.stateNode
  ;(l.props = n), (l.state = e.memoizedState), (l.refs = ca), So(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (l.context = _e(i))
    : ((i = pe(t) ? Pt : ie.current), (l.context = en(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Li(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Jr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309))
        var r = n.stateNode
      }
      if (!r) throw Error(g(147, e))
      var l = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs
            u === ca && (u = l.refs = {}), o === null ? delete u[i] : (u[i] = o)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(g(284))
    if (!n._owner) throw Error(g(290, e))
  }
  return e
}
function vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Iu(e) {
  var t = e._init
  return t(e._payload)
}
function da(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a)
    }
  }
  function n(f, a) {
    if (!e) return null
    for (; a !== null; ) t(f, a), (a = a.sibling)
    return null
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling)
    return f
  }
  function l(f, a) {
    return (f = ft(f, a)), (f.index = 0), (f.sibling = null), f
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    )
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Xl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a)
  }
  function s(f, a, d, v) {
    var x = d.type
    return x === Rt
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === Ze &&
            Iu(x) === a.type))
      ? ((v = l(a, d.props)), (v.ref = gn(f, a, d)), (v.return = f), v)
      : ((v = jr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = gn(f, a, d)),
        (v.return = f),
        v)
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Jl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a)
  }
  function h(f, a, d, v, x) {
    return a === null || a.tag !== 7
      ? ((a = Nt(d, f.mode, v, x)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a)
  }
  function m(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Xl('' + a, f.mode, d)), (a.return = f), a
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case ir:
          return (
            (d = jr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = gn(f, null, a)),
            (d.return = f),
            d
          )
        case Ft:
          return (a = Jl(a, f.mode, d)), (a.return = f), a
        case Ze:
          var v = a._init
          return m(f, v(a._payload), d)
      }
      if (Sn(a) || dn(a)) return (a = Nt(a, f.mode, d, null)), (a.return = f), a
      vr(f, a)
    }
    return null
  }
  function p(f, a, d, v) {
    var x = a !== null ? a.key : null
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return x !== null ? null : u(f, a, '' + d, v)
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === x ? s(f, a, d, v) : null
        case Ft:
          return d.key === x ? c(f, a, d, v) : null
        case Ze:
          return (x = d._init), p(f, a, x(d._payload), v)
      }
      if (Sn(d) || dn(d)) return x !== null ? null : h(f, a, d, v, null)
      vr(f, d)
    }
    return null
  }
  function y(f, a, d, v, x) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(a, f, '' + v, x)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case ir:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, x)
        case Ft:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, x)
        case Ze:
          var C = v._init
          return y(f, a, d, C(v._payload), x)
      }
      if (Sn(v) || dn(v)) return (f = f.get(d) || null), h(a, f, v, x, null)
      vr(a, v)
    }
    return null
  }
  function w(f, a, d, v) {
    for (
      var x = null, C = null, _ = a, N = (a = 0), W = null;
      _ !== null && N < d.length;
      N++
    ) {
      _.index > N ? ((W = _), (_ = null)) : (W = _.sibling)
      var I = p(f, _, d[N], v)
      if (I === null) {
        _ === null && (_ = W)
        break
      }
      e && _ && I.alternate === null && t(f, _),
        (a = i(I, a, N)),
        C === null ? (x = I) : (C.sibling = I),
        (C = I),
        (_ = W)
    }
    if (N === d.length) return n(f, _), U && kt(f, N), x
    if (_ === null) {
      for (; N < d.length; N++)
        (_ = m(f, d[N], v)),
          _ !== null &&
            ((a = i(_, a, N)), C === null ? (x = _) : (C.sibling = _), (C = _))
      return U && kt(f, N), x
    }
    for (_ = r(f, _); N < d.length; N++)
      (W = y(_, f, N, d[N], v)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? N : W.key),
          (a = i(W, a, N)),
          C === null ? (x = W) : (C.sibling = W),
          (C = W))
    return (
      e &&
        _.forEach(function (Pe) {
          return t(f, Pe)
        }),
      U && kt(f, N),
      x
    )
  }
  function k(f, a, d, v) {
    var x = dn(d)
    if (typeof x != 'function') throw Error(g(150))
    if (((d = x.call(d)), d == null)) throw Error(g(151))
    for (
      var C = (x = null), _ = a, N = (a = 0), W = null, I = d.next();
      _ !== null && !I.done;
      N++, I = d.next()
    ) {
      _.index > N ? ((W = _), (_ = null)) : (W = _.sibling)
      var Pe = p(f, _, I.value, v)
      if (Pe === null) {
        _ === null && (_ = W)
        break
      }
      e && _ && Pe.alternate === null && t(f, _),
        (a = i(Pe, a, N)),
        C === null ? (x = Pe) : (C.sibling = Pe),
        (C = Pe),
        (_ = W)
    }
    if (I.done) return n(f, _), U && kt(f, N), x
    if (_ === null) {
      for (; !I.done; N++, I = d.next())
        (I = m(f, I.value, v)),
          I !== null &&
            ((a = i(I, a, N)), C === null ? (x = I) : (C.sibling = I), (C = I))
      return U && kt(f, N), x
    }
    for (_ = r(f, _); !I.done; N++, I = d.next())
      (I = y(_, f, N, I.value, v)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? N : I.key),
          (a = i(I, a, N)),
          C === null ? (x = I) : (C.sibling = I),
          (C = I))
    return (
      e &&
        _.forEach(function (cn) {
          return t(f, cn)
        }),
      U && kt(f, N),
      x
    )
  }
  function D(f, a, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Rt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var x = d.key, C = a; C !== null; ) {
              if (C.key === x) {
                if (((x = d.type), x === Rt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a)
                    break e
                  }
                } else if (
                  C.elementType === x ||
                  (typeof x == 'object' &&
                    x !== null &&
                    x.$$typeof === Ze &&
                    Iu(x) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = gn(f, C, d)),
                    (a.return = f),
                    (f = a)
                  break e
                }
                n(f, C)
                break
              } else t(f, C)
              C = C.sibling
            }
            d.type === Rt
              ? ((a = Nt(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = jr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = gn(f, a, d)),
                (v.return = f),
                (f = v))
          }
          return o(f)
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a)
                  break e
                } else {
                  n(f, a)
                  break
                }
              else t(f, a)
              a = a.sibling
            }
            ;(a = Jl(d, f.mode, v)), (a.return = f), (f = a)
          }
          return o(f)
        case Ze:
          return (C = d._init), D(f, a, C(d._payload), v)
      }
      if (Sn(d)) return w(f, a, d, v)
      if (dn(d)) return k(f, a, d, v)
      vr(f, d)
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Xl(d, f.mode, v)), (a.return = f), (f = a)),
        o(f))
      : n(f, a)
  }
  return D
}
var nn = da(!0),
  pa = da(!1),
  tr = {},
  Ae = vt(tr),
  Qn = vt(tr),
  Kn = vt(tr)
function Ct(e) {
  if (e === tr) throw Error(g(174))
  return e
}
function xo(e, t) {
  switch ((O(Kn, t), O(Qn, e), O(Ae, tr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ai(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ai(t, e))
  }
  R(Ae), O(Ae, t)
}
function rn() {
  R(Ae), R(Qn), R(Kn)
}
function ma(e) {
  Ct(Kn.current)
  var t = Ct(Ae.current),
    n = ai(t, e.type)
  t !== n && (O(Qn, e), O(Ae, n))
}
function Eo(e) {
  Qn.current === e && (R(Ae), R(Qn))
}
var A = vt(0)
function Zr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Hl = []
function Co() {
  for (var e = 0; e < Hl.length; e++) Hl[e]._workInProgressVersionPrimary = null
  Hl.length = 0
}
var zr = Xe.ReactCurrentDispatcher,
  Wl = Xe.ReactCurrentBatchConfig,
  Tt = 0,
  $ = null,
  G = null,
  Z = null,
  qr = !1,
  Tn = !1,
  Yn = 0,
  cd = 0
function ne() {
  throw Error(g(321))
}
function _o(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Oe(e[n], t[n])) return !1
  return !0
}
function No(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zr.current = e === null || e.memoizedState === null ? md : hd),
    (e = n(r, l)),
    Tn)
  ) {
    i = 0
    do {
      if (((Tn = !1), (Yn = 0), 25 <= i)) throw Error(g(301))
      ;(i += 1),
        (Z = G = null),
        (t.updateQueue = null),
        (zr.current = vd),
        (e = n(r, l))
    } while (Tn)
  }
  if (
    ((zr.current = br),
    (t = G !== null && G.next !== null),
    (Tt = 0),
    (Z = G = $ = null),
    (qr = !1),
    t)
  )
    throw Error(g(300))
  return e
}
function Po() {
  var e = Yn !== 0
  return (Yn = 0), e
}
function Re() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e), Z
}
function Ne() {
  if (G === null) {
    var e = $.alternate
    e = e !== null ? e.memoizedState : null
  } else e = G.next
  var t = Z === null ? $.memoizedState : Z.next
  if (t !== null) (Z = t), (G = e)
  else {
    if (e === null) throw Error(g(310))
    ;(G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      Z === null ? ($.memoizedState = Z = e) : (Z = Z.next = e)
  }
  return Z
}
function Gn(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ql(e) {
  var t = Ne(),
    n = t.queue
  if (n === null) throw Error(g(311))
  n.lastRenderedReducer = e
  var r = G,
    l = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (l !== null) {
      var o = l.next
      ;(l.next = i.next), (i.next = o)
    }
    ;(r.baseQueue = l = i), (n.pending = null)
  }
  if (l !== null) {
    ;(i = l.next), (r = r.baseState)
    var u = (o = null),
      s = null,
      c = i
    do {
      var h = c.lane
      if ((Tt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action))
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          ($.lanes |= h),
          (Lt |= h)
      }
      c = c.next
    } while (c !== null && c !== i)
    s === null ? (o = r) : (s.next = u),
      Oe(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    l = e
    do (i = l.lane), ($.lanes |= i), (Lt |= i), (l = l.next)
    while (l !== e)
  } else l === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Kl(e) {
  var t = Ne(),
    n = t.queue
  if (n === null) throw Error(g(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState
  if (l !== null) {
    n.pending = null
    var o = (l = l.next)
    do (i = e(i, o.action)), (o = o.next)
    while (o !== l)
    Oe(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function ha() {}
function va(e, t) {
  var n = $,
    r = Ne(),
    l = t(),
    i = !Oe(r.memoizedState, l)
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    zo(wa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xn(9, ya.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(g(349))
    Tt & 30 || ga(n, t, l)
  }
  return l
}
function ga(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function ya(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), ka(t) && Sa(e)
}
function wa(e, t, n) {
  return n(function () {
    ka(t) && Sa(e)
  })
}
function ka(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Oe(e, n)
  } catch {
    return !0
  }
}
function Sa(e) {
  var t = Ye(e, 1)
  t !== null && je(t, e, 1, -1)
}
function Mu(e) {
  var t = Re()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pd.bind(null, $, e)),
    [t.memoizedState, e]
  )
}
function Xn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function xa() {
  return Ne().memoizedState
}
function Tr(e, t, n, r) {
  var l = Re()
  ;($.flags |= e),
    (l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r))
}
function pl(e, t, n, r) {
  var l = Ne()
  r = r === void 0 ? null : r
  var i = void 0
  if (G !== null) {
    var o = G.memoizedState
    if (((i = o.destroy), r !== null && _o(r, o.deps))) {
      l.memoizedState = Xn(t, n, i, r)
      return
    }
  }
  ;($.flags |= e), (l.memoizedState = Xn(1 | t, n, i, r))
}
function ju(e, t) {
  return Tr(8390656, 8, e, t)
}
function zo(e, t) {
  return pl(2048, 8, e, t)
}
function Ea(e, t) {
  return pl(4, 2, e, t)
}
function Ca(e, t) {
  return pl(4, 4, e, t)
}
function _a(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Na(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, _a.bind(null, t, e), n)
  )
}
function To() {}
function Pa(e, t) {
  var n = Ne()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && _o(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function za(e, t) {
  var n = Ne()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && _o(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Ta(e, t, n) {
  return Tt & 21
    ? (Oe(n, t) || ((n = Ms()), ($.lanes |= n), (Lt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n))
}
function fd(e, t) {
  var n = j
  ;(j = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Wl.transition
  Wl.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(j = n), (Wl.transition = r)
  }
}
function La() {
  return Ne().memoizedState
}
function dd(e, t, n) {
  var r = ct(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ia(e))
  )
    Ma(t, n)
  else if (((n = sa(e, t, n, r)), n !== null)) {
    var l = ue()
    je(n, e, r, l), ja(n, t, r)
  }
}
function pd(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Ia(e)) Ma(t, l)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n)
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, o))) {
          var s = t.interleaved
          s === null
            ? ((l.next = l), ko(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l)
          return
        }
      } catch {
      } finally {
      }
    ;(n = sa(e, t, l, r)),
      n !== null && ((l = ue()), je(n, e, r, l), ja(n, t, r))
  }
}
function Ia(e) {
  var t = e.alternate
  return e === $ || (t !== null && t === $)
}
function Ma(e, t) {
  Tn = qr = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function ja(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), io(e, n)
  }
}
var br = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  md = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Re().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: _e,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Tr(4194308, 4, _a.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Tr(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Tr(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Re()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Re()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = dd.bind(null, $, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Re()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Mu,
    useDebugValue: To,
    useDeferredValue: function (e) {
      return (Re().memoizedState = e)
    },
    useTransition: function () {
      var e = Mu(!1),
        t = e[0]
      return (e = fd.bind(null, e[1])), (Re().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Re()
      if (U) {
        if (n === void 0) throw Error(g(407))
        n = n()
      } else {
        if (((n = t()), q === null)) throw Error(g(349))
        Tt & 30 || ga(r, t, n)
      }
      l.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (l.queue = i),
        ju(wa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xn(9, ya.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Re(),
        t = q.identifierPrefix
      if (U) {
        var n = He,
          r = Ve
        ;(n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Yn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = cd++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  hd = {
    readContext: _e,
    useCallback: Pa,
    useContext: _e,
    useEffect: zo,
    useImperativeHandle: Na,
    useInsertionEffect: Ea,
    useLayoutEffect: Ca,
    useMemo: za,
    useReducer: Ql,
    useRef: xa,
    useState: function () {
      return Ql(Gn)
    },
    useDebugValue: To,
    useDeferredValue: function (e) {
      var t = Ne()
      return Ta(t, G.memoizedState, e)
    },
    useTransition: function () {
      var e = Ql(Gn)[0],
        t = Ne().memoizedState
      return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1,
  },
  vd = {
    readContext: _e,
    useCallback: Pa,
    useContext: _e,
    useEffect: zo,
    useImperativeHandle: Na,
    useInsertionEffect: Ea,
    useLayoutEffect: Ca,
    useMemo: za,
    useReducer: Kl,
    useRef: xa,
    useState: function () {
      return Kl(Gn)
    },
    useDebugValue: To,
    useDeferredValue: function (e) {
      var t = Ne()
      return G === null ? (t.memoizedState = e) : Ta(t, G.memoizedState, e)
    },
    useTransition: function () {
      var e = Kl(Gn)[0],
        t = Ne().memoizedState
      return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1,
  }
function ln(e, t) {
  try {
    var n = '',
      r = t
    do (n += Hc(r)), (r = r.return)
    while (r)
    var l = n
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: l, digest: null }
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Mi(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var gd = typeof WeakMap == 'function' ? WeakMap : Map
function Oa(e, t, n) {
  ;(n = We(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Vi = r)), Mi(e, t)
    }),
    n
  )
}
function Fa(e, t, n) {
  ;(n = We(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var l = t.value
    ;(n.payload = function () {
      return r(l)
    }),
      (n.callback = function () {
        Mi(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Mi(e, t),
          typeof r != 'function' &&
            (at === null ? (at = new Set([this])) : at.add(this))
        var o = t.stack
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' })
      }),
    n
  )
}
function Ou(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new gd()
    var l = new Set()
    r.set(t, l)
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
  l.has(n) || (l.add(n), (e = Id.bind(null, e, t, n)), t.then(e, e))
}
function Fu(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Ru(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var yd = Xe.ReactCurrentOwner,
  fe = !1
function oe(e, t, n, r) {
  t.child = e === null ? pa(t, null, n, r) : nn(t, e.child, n, r)
}
function Du(e, t, n, r, l) {
  n = n.render
  var i = t.ref
  return (
    Zt(t, l),
    (r = No(e, t, n, r, i, l)),
    (n = Po()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && n && mo(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  )
}
function Uu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Do(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ra(e, t, i, r, l))
      : ((e = jr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l)
  }
  return (
    (t.flags |= 1),
    (e = ft(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Ra(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Bn(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0)
      else return (t.lanes = e.lanes), Ge(e, t, l)
  }
  return ji(e, t, n, r, l)
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Kt, he),
        (he |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(Kt, he),
          (he |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(Kt, he),
        (he |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(Kt, he),
      (he |= r)
  return oe(e, t, l, n), t.child
}
function Ua(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function ji(e, t, n, r, l) {
  var i = pe(n) ? Pt : ie.current
  return (
    (i = en(t, i)),
    Zt(t, l),
    (n = No(e, t, n, r, i, l)),
    (r = Po()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (U && r && mo(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  )
}
function Au(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0
    Qr(t)
  } else i = !1
  if ((Zt(t, l), t.stateNode === null))
    Lr(e, t), fa(t, n, r), Ii(t, n, r, l), (r = !0)
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps
    o.props = u
    var s = o.context,
      c = n.contextType
    typeof c == 'object' && c !== null
      ? (c = _e(c))
      : ((c = pe(n) ? Pt : ie.current), (c = en(t, c)))
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Lu(t, o, r, c)),
      (qe = !1)
    var p = t.memoizedState
    ;(o.state = p),
      Jr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof h == 'function' && (Li(t, n, h, r), (s = t.memoizedState)),
          (u = qe || Tu(t, n, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(o = t.stateNode),
      aa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = _e(s))
        : ((s = pe(n) ? Pt : ie.current), (s = en(t, s)))
    var y = n.getDerivedStateFromProps
    ;(h =
      typeof y == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== m || p !== s) && Lu(t, o, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (o.state = p),
      Jr(t, r, o, l)
    var w = t.memoizedState
    u !== m || p !== w || de.current || qe
      ? (typeof y == 'function' && (Li(t, n, y, r), (w = t.memoizedState)),
        (c = qe || Tu(t, n, c, r, p, w, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Oi(e, t, n, r, i, l)
}
function Oi(e, t, n, r, l, i) {
  Ua(e, t)
  var o = (t.flags & 128) !== 0
  if (!r && !o) return l && Cu(t, n, !1), Ge(e, t, i)
  ;(r = t.stateNode), (yd.current = t)
  var u =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = nn(t, e.child, null, i)), (t.child = nn(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && Cu(t, n, !0),
    t.child
  )
}
function Aa(e) {
  var t = e.stateNode
  t.pendingContext
    ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Eu(e, t.context, !1),
    xo(e, t.containerInfo)
}
function $u(e, t, n, r, l) {
  return tn(), vo(l), (t.flags |= 256), oe(e, t, n, r), t.child
}
var Fi = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function $a(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(A, l & 1),
    e === null)
  )
    return (
      zi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = vl(o, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ri(n)),
              (t.memoizedState = Fi),
              e)
            : Lo(t, o))
    )
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return wd(e, t, o, r, u, l, n)
  if (i) {
    ;(i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ft(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = ft(u, i)) : ((i = Nt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ri(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fi),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ft(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Lo(e, t) {
  return (
    (t = vl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function gr(e, t, n, r) {
  return (
    r !== null && vo(r),
    nn(t, e.child, null, n),
    (e = Lo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function wd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yl(Error(g(422)))), gr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = vl({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = Nt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && nn(t, e.child, null, o),
        (t.child.memoizedState = Ri(o)),
        (t.memoizedState = Fi),
        i)
  if (!(t.mode & 1)) return gr(e, t, o, null)
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (i = Error(g(419))), (r = Yl(i, r, void 0)), gr(e, t, o, r)
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2
          break
        case 16:
          l = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32
          break
        case 536870912:
          l = 268435456
          break
        default:
          l = 0
      }
      ;(l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), je(r, e, l, -1))
    }
    return Ro(), (r = Yl(Error(g(421)))), gr(e, t, o, r)
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Md.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = ut(l.nextSibling)),
      (ge = t),
      (U = !0),
      (Ie = null),
      e !== null &&
        ((Se[xe++] = Ve),
        (Se[xe++] = He),
        (Se[xe++] = zt),
        (Ve = e.id),
        (He = e.overflow),
        (zt = t)),
      (t = Lo(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Bu(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Ti(e.return, t, n)
}
function Gl(e, t, n, r, l) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l))
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail
  if ((oe(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bu(e, n, t)
        else if (e.tag === 19) Bu(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((O(A, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Zr(e) === null && (l = n),
            (n = n.sibling)
        ;(n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Gl(t, !1, l, n, i)
        break
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zr(e) === null)) {
            t.child = l
            break
          }
          ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
        }
        Gl(t, !0, n, null, i)
        break
      case 'together':
        Gl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Lr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lt |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(g(153))
  if (t.child !== null) {
    for (
      e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function kd(e, t, n) {
  switch (t.tag) {
    case 3:
      Aa(t), tn()
      break
    case 5:
      ma(t)
      break
    case 1:
      pe(t.type) && Qr(t)
      break
    case 4:
      xo(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value
      O(Gr, r._currentValue), (r._currentValue = l)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $a(e, t, n)
          : (O(A, A.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null)
      O(A, A.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ba(e, t, n)
        t.flags |= 128
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(A, A.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Da(e, t, n)
  }
  return Ge(e, t, n)
}
var Va, Di, Ha, Wa
Va = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Di = function () {}
Ha = function (e, t, n, r) {
  var l = e.memoizedProps
  if (l !== r) {
    ;(e = t.stateNode), Ct(Ae.current)
    var i = null
    switch (n) {
      case 'input':
        ;(l = ii(e, l)), (r = ii(e, r)), (i = [])
        break
      case 'select':
        ;(l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(l = si(e, l)), (r = si(e, r)), (i = [])
        break
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Hr)
    }
    ci(n, r)
    var o
    n = null
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c]
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (On.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null))
    for (c in r) {
      var s = r[c]
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''))
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]))
          } else n || (i || (i = []), i.push(c, n)), (n = s)
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (On.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && F('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s))
    }
    n && (i = i || []).push('style', n)
    var c = i
    ;(t.updateQueue = c) && (t.flags |= 4)
  }
}
Wa = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function yn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling)
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Sd(e, t, n) {
  var r = t.pendingProps
  switch ((ho(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null
    case 1:
      return pe(t.type) && Wr(), re(t), null
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        R(de),
        R(ie),
        Co(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (Qi(Ie), (Ie = null)))),
        Di(e, t),
        re(t),
        null
      )
    case 5:
      Eo(t)
      var l = Ct(Kn.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Ha(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166))
          return re(t), null
        }
        if (((e = Ct(Ae.current)), hr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[De] = t), (r[Wn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              F('cancel', r), F('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              F('load', r)
              break
            case 'video':
            case 'audio':
              for (l = 0; l < En.length; l++) F(En[l], r)
              break
            case 'source':
              F('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              F('error', r), F('load', r)
              break
            case 'details':
              F('toggle', r)
              break
            case 'input':
              Jo(r, i), F('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                F('invalid', r)
              break
            case 'textarea':
              qo(r, i), F('invalid', r)
          }
          ci(n, i), (l = null)
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o]
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : On.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  F('scroll', r)
            }
          switch (n) {
            case 'input':
              or(r), Zo(r, i, !0)
              break
            case 'textarea':
              or(r), bo(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Hr)
          }
          ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = gs(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[De] = t),
            (e[Wn] = r),
            Va(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((o = fi(n, r)), n)) {
              case 'dialog':
                F('cancel', e), F('close', e), (l = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                F('load', e), (l = r)
                break
              case 'video':
              case 'audio':
                for (l = 0; l < En.length; l++) F(En[l], e)
                l = r
                break
              case 'source':
                F('error', e), (l = r)
                break
              case 'img':
              case 'image':
              case 'link':
                F('error', e), F('load', e), (l = r)
                break
              case 'details':
                F('toggle', e), (l = r)
                break
              case 'input':
                Jo(e, r), (l = ii(e, r)), F('invalid', e)
                break
              case 'option':
                l = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  F('invalid', e)
                break
              case 'textarea':
                qo(e, r), (l = si(e, r)), F('invalid', e)
                break
              default:
                l = r
            }
            ci(n, l), (u = l)
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i]
                i === 'style'
                  ? ks(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && ys(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Fn(e, s)
                    : typeof s == 'number' && Fn(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (On.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && F('scroll', e)
                      : s != null && bi(e, i, s, o))
              }
            switch (n) {
              case 'input':
                or(e), Zo(e, r, !1)
                break
              case 'textarea':
                or(e), bo(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + pt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yt(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof l.onClick == 'function' && (e.onclick = Hr)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return re(t), null
    case 6:
      if (e && t.stateNode != null) Wa(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(g(166))
        if (((n = Ct(Kn.current)), Ct(Ae.current), hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[De] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[De] = t),
            (t.stateNode = r)
      }
      return re(t), null
    case 13:
      if (
        (R(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          ua(), tn(), (t.flags |= 98560), (i = !1)
        else if (((i = hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317))
            i[De] = t
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          re(t), (i = !1)
        } else Ie !== null && (Qi(Ie), (Ie = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? X === 0 && (X = 3) : Ro())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null)
    case 4:
      return (
        rn(), Di(e, t), e === null && Vn(t.stateNode.containerInfo), re(t), null
      )
    case 10:
      return wo(t.type._context), re(t), null
    case 17:
      return pe(t.type) && Wr(), re(t), null
    case 19:
      if ((R(A), (i = t.memoizedState), i === null)) return re(t), null
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yn(i, !1)
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Zr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return O(A, (A.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            K() > on &&
            ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Zr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !U)
            )
              return re(t), null
          } else
            2 * K() - i.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          O(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null)
    case 22:
    case 23:
      return (
        Fo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(g(156, t.tag))
}
function xd(e, t) {
  switch ((ho(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Wr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        rn(),
        R(de),
        R(ie),
        Co(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Eo(t), null
    case 13:
      if ((R(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340))
        tn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return R(A), null
    case 4:
      return rn(), null
    case 10:
      return wo(t.type._context), null
    case 22:
    case 23:
      return Fo(), null
    case 24:
      return null
    default:
      return null
  }
}
var yr = !1,
  le = !1,
  Ed = typeof WeakSet == 'function' ? WeakSet : Set,
  S = null
function Qt(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        H(e, t, r)
      }
    else n.current = null
}
function Ui(e, t, n) {
  try {
    n()
  } catch (r) {
    H(e, t, r)
  }
}
var Vu = !1
function Cd(e, t) {
  if (((Si = $r), (e = Gs()), po(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var l = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null
          t: for (;;) {
            for (
              var y;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (y = m.firstChild) !== null;

            )
              (p = m), (m = y)
            for (;;) {
              if (m === e) break t
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (y = m.nextSibling) !== null)
              )
                break
              ;(m = p), (p = m.parentNode)
            }
            m = y
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (xi = { focusedElem: e, selectionRange: n }, $r = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e)
    else
      for (; S !== null; ) {
        t = S
        try {
          var w = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    D = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Te(t.type, k),
                      D
                    )
                  f.__reactInternalSnapshotBeforeUpdate = a
                }
                break
              case 3:
                var d = t.stateNode.containerInfo
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(g(163))
            }
        } catch (v) {
          H(t, t.return, v)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (S = e)
          break
        }
        S = t.return
      }
  return (w = Vu), (Vu = !1), w
}
function Ln(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next)
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy
        ;(l.destroy = void 0), i !== void 0 && Ui(t, n, i)
      }
      l = l.next
    } while (l !== r)
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Ai(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Qa(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Qa(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[De], delete t[Wn], delete t[_i], delete t[od], delete t[ud])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Ka(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Hu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ka(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function $i(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hr))
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($i(e, t, n), e = e.sibling; e !== null; ) $i(e, t, n), (e = e.sibling)
}
function Bi(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), (e = e.sibling)
}
var b = null,
  Le = !1
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Ya(e, t, n), (n = n.sibling)
}
function Ya(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == 'function')
    try {
      Ue.onCommitFiberUnmount(ol, n)
    } catch {}
  switch (n.tag) {
    case 5:
      le || Qt(n, t)
    case 6:
      var r = b,
        l = Le
      ;(b = null),
        Je(e, t, n),
        (b = r),
        (Le = l),
        b !== null &&
          (Le
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode))
      break
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bl(e.parentNode, n)
              : e.nodeType === 1 && Bl(e, n),
            An(e))
          : Bl(b, n.stateNode))
      break
    case 4:
      ;(r = b),
        (l = Le),
        (b = n.stateNode.containerInfo),
        (Le = !0),
        Je(e, t, n),
        (b = r),
        (Le = l)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next
        do {
          var i = l,
            o = i.destroy
          ;(i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ui(n, t, o),
            (l = l.next)
        } while (l !== r)
      }
      Je(e, t, n)
      break
    case 1:
      if (
        !le &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (u) {
          H(n, t, u)
        }
      Je(e, t, n)
      break
    case 21:
      Je(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Je(e, t, n), (le = r))
        : Je(e, t, n)
      break
    default:
      Je(e, t, n)
  }
}
function Wu(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Ed()),
      t.forEach(function (r) {
        var l = jd.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(l, l))
      })
  }
}
function ze(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r]
      try {
        var i = e,
          o = t,
          u = o
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ;(b = u.stateNode), (Le = !1)
              break e
            case 3:
              ;(b = u.stateNode.containerInfo), (Le = !0)
              break e
            case 4:
              ;(b = u.stateNode.containerInfo), (Le = !0)
              break e
          }
          u = u.return
        }
        if (b === null) throw Error(g(160))
        Ya(i, o, l), (b = null), (Le = !1)
        var s = l.alternate
        s !== null && (s.return = null), (l.return = null)
      } catch (c) {
        H(l, t, c)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ga(t, e), (t = t.sibling)
}
function Ga(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Fe(e), r & 4)) {
        try {
          Ln(3, e, e.return), ml(3, e)
        } catch (k) {
          H(e, e.return, k)
        }
        try {
          Ln(5, e, e.return)
        } catch (k) {
          H(e, e.return, k)
        }
      }
      break
    case 1:
      ze(t, e), Fe(e), r & 512 && n !== null && Qt(n, n.return)
      break
    case 5:
      if (
        (ze(t, e),
        Fe(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode
        try {
          Fn(l, '')
        } catch (k) {
          H(e, e.return, k)
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && hs(l, i),
              fi(u, o)
            var c = fi(u, i)
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1]
              h === 'style'
                ? ks(l, m)
                : h === 'dangerouslySetInnerHTML'
                ? ys(l, m)
                : h === 'children'
                ? Fn(l, m)
                : bi(l, h, m, c)
            }
            switch (u) {
              case 'input':
                oi(l, i)
                break
              case 'textarea':
                vs(l, i)
                break
              case 'select':
                var p = l._wrapperState.wasMultiple
                l._wrapperState.wasMultiple = !!i.multiple
                var y = i.value
                y != null
                  ? Yt(l, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yt(l, !!i.multiple, i.defaultValue, !0)
                      : Yt(l, !!i.multiple, i.multiple ? [] : '', !1))
            }
            l[Wn] = i
          } catch (k) {
            H(e, e.return, k)
          }
      }
      break
    case 6:
      if ((ze(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162))
        ;(l = e.stateNode), (i = e.memoizedProps)
        try {
          l.nodeValue = i
        } catch (k) {
          H(e, e.return, k)
        }
      }
      break
    case 3:
      if (
        (ze(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          An(t.containerInfo)
        } catch (k) {
          H(e, e.return, k)
        }
      break
    case 4:
      ze(t, e), Fe(e)
      break
    case 13:
      ze(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (jo = K())),
        r & 4 && Wu(e)
      break
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), ze(t, e), (le = c)) : ze(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (m = S = h; S !== null; ) {
              switch (((p = S), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, p, p.return)
                  break
                case 1:
                  Qt(p, p.return)
                  var w = p.stateNode
                  if (typeof w.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount()
                    } catch (k) {
                      H(r, n, k)
                    }
                  }
                  break
                case 5:
                  Qt(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Ku(m)
                    continue
                  }
              }
              y !== null ? ((y.return = p), (S = y)) : Ku(m)
            }
            h = h.sibling
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m
              try {
                ;(l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = ws('display', o)))
              } catch (k) {
                H(e, e.return, k)
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps
              } catch (k) {
                H(e, e.return, k)
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ;(m.child.return = m), (m = m.child)
            continue
          }
          if (m === e) break e
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e
            h === m && (h = null), (m = m.return)
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling)
        }
      }
      break
    case 19:
      ze(t, e), Fe(e), r & 4 && Wu(e)
      break
    case 21:
      break
    default:
      ze(t, e), Fe(e)
  }
}
function Fe(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ka(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(g(160))
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode
          r.flags & 32 && (Fn(l, ''), (r.flags &= -33))
          var i = Hu(e)
          Bi(e, i, l)
          break
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Hu(e)
          $i(e, u, o)
          break
        default:
          throw Error(g(161))
      }
    } catch (s) {
      H(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function _d(e, t, n) {
  ;(S = e), Xa(e)
}
function Xa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || yr
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le
        u = yr
        var c = le
        if (((yr = o), (le = s) && !c))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Yu(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : Yu(l)
        for (; i !== null; ) (S = i), Xa(i), (i = i.sibling)
        ;(S = l), (yr = u), (le = c)
      }
      Qu(e)
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Qu(e)
  }
}
function Qu(e) {
  for (; S !== null; ) {
    var t = S
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || ml(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount()
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && zu(t, i, r)
              break
            case 3:
              var o = t.updateQueue
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                zu(t, o, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate
                if (c !== null) {
                  var h = c.memoizedState
                  if (h !== null) {
                    var m = h.dehydrated
                    m !== null && An(m)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(g(163))
          }
        le || (t.flags & 512 && Ai(t))
      } catch (p) {
        H(t, t.return, p)
      }
    }
    if (t === e) {
      S = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (S = n)
      break
    }
    S = t.return
  }
}
function Ku(e) {
  for (; S !== null; ) {
    var t = S
    if (t === e) {
      S = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (S = n)
      break
    }
    S = t.return
  }
}
function Yu(e) {
  for (; S !== null; ) {
    var t = S
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ml(4, t)
          } catch (s) {
            H(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var l = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              H(t, l, s)
            }
          }
          var i = t.return
          try {
            Ai(t)
          } catch (s) {
            H(t, i, s)
          }
          break
        case 5:
          var o = t.return
          try {
            Ai(t)
          } catch (s) {
            H(t, o, s)
          }
      }
    } catch (s) {
      H(t, t.return, s)
    }
    if (t === e) {
      S = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (S = u)
      break
    }
    S = t.return
  }
}
var Nd = Math.ceil,
  el = Xe.ReactCurrentDispatcher,
  Io = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  Y = null,
  ee = 0,
  he = 0,
  Kt = vt(0),
  X = 0,
  Jn = null,
  Lt = 0,
  hl = 0,
  Mo = 0,
  In = null,
  ce = null,
  jo = 0,
  on = 1 / 0,
  $e = null,
  tl = !1,
  Vi = null,
  at = null,
  wr = !1,
  nt = null,
  nl = 0,
  Mn = 0,
  Hi = null,
  Ir = -1,
  Mr = 0
function ue() {
  return M & 6 ? K() : Ir !== -1 ? Ir : (Ir = K())
}
function ct(e) {
  return e.mode & 1
    ? M & 2 && ee !== 0
      ? ee & -ee
      : ad.transition !== null
      ? (Mr === 0 && (Mr = Ms()), Mr)
      : ((e = j),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : As(e.type))),
        e)
    : 1
}
function je(e, t, n, r) {
  if (50 < Mn) throw ((Mn = 0), (Hi = null), Error(g(185)))
  qn(e, n, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (hl |= n), X === 4 && et(e, ee)),
      me(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((on = K() + 500), fl && gt()))
}
function me(e, t) {
  var n = e.callbackNode
  af(e, t)
  var r = Ar(e, e === q ? ee : 0)
  if (r === 0)
    n !== null && nu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nu(n), t === 1))
      e.tag === 0 ? sd(Gu.bind(null, e)) : la(Gu.bind(null, e)),
        ld(function () {
          !(M & 6) && gt()
        }),
        (n = null)
    else {
      switch (js(r)) {
        case 1:
          n = lo
          break
        case 4:
          n = Ls
          break
        case 16:
          n = Ur
          break
        case 536870912:
          n = Is
          break
        default:
          n = Ur
      }
      n = rc(n, Ja.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Ja(e, t) {
  if (((Ir = -1), (Mr = 0), M & 6)) throw Error(g(327))
  var n = e.callbackNode
  if (qt() && e.callbackNode !== n) return null
  var r = Ar(e, e === q ? ee : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r)
  else {
    t = r
    var l = M
    M |= 2
    var i = qa()
    ;(q !== e || ee !== t) && (($e = null), (on = K() + 500), _t(e, t))
    do
      try {
        Td()
        break
      } catch (u) {
        Za(e, u)
      }
    while (1)
    yo(),
      (el.current = i),
      (M = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = X))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = vi(e)), l !== 0 && ((r = l), (t = Wi(e, l)))), t === 1)
    )
      throw ((n = Jn), _t(e, 0), et(e, r), me(e, K()), n)
    if (t === 6) et(e, r)
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Pd(l) &&
          ((t = rl(e, r)),
          t === 2 && ((i = vi(e)), i !== 0 && ((r = i), (t = Wi(e, i)))),
          t === 1))
      )
        throw ((n = Jn), _t(e, 0), et(e, r), me(e, K()), n)
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345))
        case 2:
          St(e, ce, $e)
          break
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = jo + 500 - K()), 10 < t))
          ) {
            if (Ar(e, 0) !== 0) break
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l)
              break
            }
            e.timeoutHandle = Ci(St.bind(null, e, ce, $e), t)
            break
          }
          St(e, ce, $e)
          break
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r)
            ;(i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i)
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Nd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ci(St.bind(null, e, ce, $e), r)
            break
          }
          St(e, ce, $e)
          break
        case 5:
          St(e, ce, $e)
          break
        default:
          throw Error(g(329))
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Ja.bind(null, e) : null
}
function Wi(e, t) {
  var n = In
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Qi(t)),
    e
  )
}
function Qi(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e)
}
function Pd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot
          l = l.value
          try {
            if (!Oe(i(), l)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function et(e, t) {
  for (
    t &= ~Mo,
      t &= ~hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Gu(e) {
  if (M & 6) throw Error(g(327))
  qt()
  var t = Ar(e, 0)
  if (!(t & 1)) return me(e, K()), null
  var n = rl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = vi(e)
    r !== 0 && ((t = r), (n = Wi(e, r)))
  }
  if (n === 1) throw ((n = Jn), _t(e, 0), et(e, t), me(e, K()), n)
  if (n === 6) throw Error(g(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    St(e, ce, $e),
    me(e, K()),
    null
  )
}
function Oo(e, t) {
  var n = M
  M |= 1
  try {
    return e(t)
  } finally {
    ;(M = n), M === 0 && ((on = K() + 500), fl && gt())
  }
}
function It(e) {
  nt !== null && nt.tag === 0 && !(M & 6) && qt()
  var t = M
  M |= 1
  var n = Ce.transition,
    r = j
  try {
    if (((Ce.transition = null), (j = 1), e)) return e()
  } finally {
    ;(j = r), (Ce.transition = n), (M = t), !(M & 6) && gt()
  }
}
function Fo() {
  ;(he = Kt.current), R(Kt)
}
function _t(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), rd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n
      switch ((ho(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Wr()
          break
        case 3:
          rn(), R(de), R(ie), Co()
          break
        case 5:
          Eo(r)
          break
        case 4:
          rn()
          break
        case 13:
          R(A)
          break
        case 19:
          R(A)
          break
        case 10:
          wo(r.type._context)
          break
        case 22:
        case 23:
          Fo()
      }
      n = n.return
    }
  if (
    ((q = e),
    (Y = e = ft(e.current, null)),
    (ee = he = t),
    (X = 0),
    (Jn = null),
    (Mo = hl = Lt = 0),
    (ce = In = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var l = r.next,
          i = n.pending
        if (i !== null) {
          var o = i.next
          ;(i.next = l), (r.next = o)
        }
        n.pending = r
      }
    Et = null
  }
  return e
}
function Za(e, t) {
  do {
    var n = Y
    try {
      if ((yo(), (zr.current = br), qr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue
          l !== null && (l.pending = null), (r = r.next)
        }
        qr = !1
      }
      if (
        ((Tt = 0),
        (Z = G = $ = null),
        (Tn = !1),
        (Yn = 0),
        (Io.current = null),
        n === null || n.return === null)
      ) {
        ;(X = 1), (Jn = t), (Y = null)
        break
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            h = u,
            m = h.tag
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null))
          }
          var y = Fu(o)
          if (y !== null) {
            ;(y.flags &= -257),
              Ru(y, o, u, i, t),
              y.mode & 1 && Ou(i, c, t),
              (t = y),
              (s = c)
            var w = t.updateQueue
            if (w === null) {
              var k = new Set()
              k.add(s), (t.updateQueue = k)
            } else w.add(s)
            break e
          } else {
            if (!(t & 1)) {
              Ou(i, c, t), Ro()
              break e
            }
            s = Error(g(426))
          }
        } else if (U && u.mode & 1) {
          var D = Fu(o)
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Ru(D, o, u, i, t),
              vo(ln(s, u))
            break e
          }
        }
        ;(i = s = ln(s, u)),
          X !== 4 && (X = 2),
          In === null ? (In = [i]) : In.push(i),
          (i = o)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var f = Oa(i, s, t)
              Pu(i, f)
              break e
            case 1:
              u = s
              var a = i.type,
                d = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (at === null || !at.has(d))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var v = Fa(i, u, t)
                Pu(i, v)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      ec(n)
    } catch (x) {
      ;(t = x), Y === n && n !== null && (Y = n = n.return)
      continue
    }
    break
  } while (1)
}
function qa() {
  var e = el.current
  return (el.current = br), e === null ? br : e
}
function Ro() {
  ;(X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Lt & 268435455) && !(hl & 268435455)) || et(q, ee)
}
function rl(e, t) {
  var n = M
  M |= 2
  var r = qa()
  ;(q !== e || ee !== t) && (($e = null), _t(e, t))
  do
    try {
      zd()
      break
    } catch (l) {
      Za(e, l)
    }
  while (1)
  if ((yo(), (M = n), (el.current = r), Y !== null)) throw Error(g(261))
  return (q = null), (ee = 0), X
}
function zd() {
  for (; Y !== null; ) ba(Y)
}
function Td() {
  for (; Y !== null && !bc(); ) ba(Y)
}
function ba(e) {
  var t = nc(e.alternate, e, he)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? ec(e) : (Y = t),
    (Io.current = null)
}
function ec(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xd(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Y = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(X = 6), (Y = null)
        return
      }
    } else if (((n = Sd(n, t, he)), n !== null)) {
      Y = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Y = t
      return
    }
    Y = t = e
  } while (t !== null)
  X === 0 && (X = 5)
}
function St(e, t, n) {
  var r = j,
    l = Ce.transition
  try {
    ;(Ce.transition = null), (j = 1), Ld(e, t, n, r)
  } finally {
    ;(Ce.transition = l), (j = r)
  }
  return null
}
function Ld(e, t, n, r) {
  do qt()
  while (nt !== null)
  if (M & 6) throw Error(g(327))
  n = e.finishedWork
  var l = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (cf(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wr ||
      ((wr = !0),
      rc(Ur, function () {
        return qt(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Ce.transition), (Ce.transition = null)
    var o = j
    j = 1
    var u = M
    ;(M |= 4),
      (Io.current = null),
      Cd(e, n),
      Ga(n, e),
      Jf(xi),
      ($r = !!Si),
      (xi = Si = null),
      (e.current = n),
      _d(n),
      ef(),
      (M = u),
      (j = o),
      (Ce.transition = i)
  } else e.current = n
  if (
    (wr && ((wr = !1), (nt = e), (nl = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    rf(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest })
  if (tl) throw ((tl = !1), (e = Vi), (Vi = null), e)
  return (
    nl & 1 && e.tag !== 0 && qt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Hi ? Mn++ : ((Mn = 0), (Hi = e))) : (Mn = 0),
    gt(),
    null
  )
}
function qt() {
  if (nt !== null) {
    var e = js(nl),
      t = Ce.transition,
      n = j
    try {
      if (((Ce.transition = null), (j = 16 > e ? 16 : e), nt === null))
        var r = !1
      else {
        if (((e = nt), (nt = null), (nl = 0), M & 6)) throw Error(g(331))
        var l = M
        for (M |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child
          if (S.flags & 16) {
            var u = i.deletions
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s]
                for (S = c; S !== null; ) {
                  var h = S
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, h, i)
                  }
                  var m = h.child
                  if (m !== null) (m.return = h), (S = m)
                  else
                    for (; S !== null; ) {
                      h = S
                      var p = h.sibling,
                        y = h.return
                      if ((Qa(h), h === c)) {
                        S = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = y), (S = p)
                        break
                      }
                      S = y
                    }
                }
              }
              var w = i.alternate
              if (w !== null) {
                var k = w.child
                if (k !== null) {
                  w.child = null
                  do {
                    var D = k.sibling
                    ;(k.sibling = null), (k = D)
                  } while (k !== null)
                }
              }
              S = i
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o)
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, i, i.return)
                }
              var f = i.sibling
              if (f !== null) {
                ;(f.return = i.return), (S = f)
                break e
              }
              S = i.return
            }
        }
        var a = e.current
        for (S = a; S !== null; ) {
          o = S
          var d = o.child
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (S = d)
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u)
                  }
                } catch (x) {
                  H(u, u.return, x)
                }
              if (u === o) {
                S = null
                break e
              }
              var v = u.sibling
              if (v !== null) {
                ;(v.return = u.return), (S = v)
                break e
              }
              S = u.return
            }
        }
        if (
          ((M = l), gt(), Ue && typeof Ue.onPostCommitFiberRoot == 'function')
        )
          try {
            Ue.onPostCommitFiberRoot(ol, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(j = n), (Ce.transition = t)
    }
  }
  return !1
}
function Xu(e, t, n) {
  ;(t = ln(n, t)),
    (t = Oa(e, t, 1)),
    (e = st(e, t, 1)),
    (t = ue()),
    e !== null && (qn(e, 1, t), me(e, t))
}
function H(e, t, n) {
  if (e.tag === 3) Xu(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xu(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (at === null || !at.has(r)))
        ) {
          ;(e = ln(n, e)),
            (e = Fa(t, e, 1)),
            (t = st(t, e, 1)),
            (e = ue()),
            t !== null && (qn(t, 1, e), me(t, e))
          break
        }
      }
      t = t.return
    }
}
function Id(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > K() - jo)
        ? _t(e, 0)
        : (Mo |= n)),
    me(e, t)
}
function tc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (t = 1))
  var n = ue()
  ;(e = Ye(e, t)), e !== null && (qn(e, t, n), me(e, n))
}
function Md(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), tc(e, n)
}
function jd(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState
      l !== null && (n = l.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(g(314))
  }
  r !== null && r.delete(t), tc(e, n)
}
var nc
nc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), kd(e, t, n)
      fe = !!(e.flags & 131072)
    }
  else (fe = !1), U && t.flags & 1048576 && ia(t, Yr, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Lr(e, t), (e = t.pendingProps)
      var l = en(t, ie.current)
      Zt(t, n), (l = No(null, t, r, e, l, n))
      var i = Po()
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), Qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            So(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ii(t, r, e, n),
            (t = Oi(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && mo(t), oe(null, t, l, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Lr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Fd(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = ji(null, t, r, e, n)
            break e
          case 1:
            t = Au(null, t, r, e, n)
            break e
          case 11:
            t = Du(null, t, r, e, n)
            break e
          case 14:
            t = Uu(null, t, r, Te(r.type, e), n)
            break e
        }
        throw Error(g(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ji(e, t, r, l, n)
      )
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Au(e, t, r, l, n)
      )
    case 3:
      e: {
        if ((Aa(t), e === null)) throw Error(g(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          aa(e, t),
          Jr(t, r, null, n)
        var o = t.memoizedState
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(l = ln(Error(g(423)), t)), (t = $u(e, t, r, n, l))
            break e
          } else if (r !== l) {
            ;(l = ln(Error(g(424)), t)), (t = $u(e, t, r, n, l))
            break e
          } else
            for (
              ve = ut(t.stateNode.containerInfo.firstChild),
                ge = t,
                U = !0,
                Ie = null,
                n = pa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((tn(), r === l)) {
            t = Ge(e, t, n)
            break e
          }
          oe(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        ma(t),
        e === null && zi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ei(r, l) ? (o = null) : i !== null && Ei(r, i) && (t.flags |= 32),
        Ua(e, t),
        oe(e, t, o, n),
        t.child
      )
    case 6:
      return e === null && zi(t), null
    case 13:
      return $a(e, t, n)
    case 4:
      return (
        xo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Du(e, t, r, l, n)
      )
    case 7:
      return oe(e, t, t.pendingProps, n), t.child
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          O(Gr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Oe(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Ge(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies
              if (u !== null) {
                o = i.child
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ;(s = We(-1, n & -n)), (s.tag = 2)
                      var c = i.updateQueue
                      if (c !== null) {
                        c = c.shared
                        var h = c.pending
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s)
                      }
                    }
                    ;(i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ti(i.return, n, t),
                      (u.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341))
                ;(o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ti(o, n, t),
                  (o = i.sibling)
              } else o = i.child
              if (o !== null) o.return = i
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null
                    break
                  }
                  if (((i = o.sibling), i !== null)) {
                    ;(i.return = o.return), (o = i)
                    break
                  }
                  o = o.return
                }
              i = o
            }
        oe(e, t, l.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Uu(e, t, r, l, n)
      )
    case 15:
      return Ra(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Lr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Qr(t)) : (e = !1),
        Zt(t, n),
        fa(t, r, l),
        Ii(t, r, l, n),
        Oi(null, t, r, !0, e, n)
      )
    case 19:
      return Ba(e, t, n)
    case 22:
      return Da(e, t, n)
  }
  throw Error(g(156, t.tag))
}
function rc(e, t) {
  return Ts(e, t)
}
function Od(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ee(e, t, n, r) {
  return new Od(e, t, n, r)
}
function Do(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Fd(e) {
  if (typeof e == 'function') return Do(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === to)) return 11
    if (e === no) return 14
  }
  return 2
}
function ft(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function jr(e, t, n, r, l, i) {
  var o = 2
  if (((r = e), typeof e == 'function')) Do(e) && (o = 1)
  else if (typeof e == 'string') o = 5
  else
    e: switch (e) {
      case Rt:
        return Nt(n.children, l, i, t)
      case eo:
        ;(o = 8), (l |= 8)
        break
      case ti:
        return (e = Ee(12, n, t, l | 2)), (e.elementType = ti), (e.lanes = i), e
      case ni:
        return (e = Ee(13, n, t, l)), (e.elementType = ni), (e.lanes = i), e
      case ri:
        return (e = Ee(19, n, t, l)), (e.elementType = ri), (e.lanes = i), e
      case ds:
        return vl(n, l, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case cs:
              o = 10
              break e
            case fs:
              o = 9
              break e
            case to:
              o = 11
              break e
            case no:
              o = 14
              break e
            case Ze:
              ;(o = 16), (r = null)
              break e
          }
        throw Error(g(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function Nt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e
}
function vl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = ds),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Xl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e
}
function Jl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Rd(e, t, n, r, l) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null)
}
function Uo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Rd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    So(i),
    e
  )
}
function Dd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Ft,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function lc(e) {
  if (!e) return mt
  e = e._reactInternals
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(g(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(g(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (pe(n)) return ra(e, n, t)
  }
  return t
}
function ic(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Uo(n, r, !0, e, l, i, o, u, s)),
    (e.context = lc(null)),
    (n = e.current),
    (r = ue()),
    (l = ct(n)),
    (i = We(r, l)),
    (i.callback = t ?? null),
    st(n, i, l),
    (e.current.lanes = l),
    qn(e, l, r),
    me(e, r),
    e
  )
}
function gl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = ct(l)
  return (
    (n = lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, o)),
    e !== null && (je(e, l, o, i), Pr(e, l, o)),
    o
  )
}
function ll(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ao(e, t) {
  Ju(e, t), (e = e.alternate) && Ju(e, t)
}
function Ud() {
  return null
}
var oc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function $o(e) {
  this._internalRoot = e
}
yl.prototype.render = $o.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(g(409))
  gl(e, t, null, null)
}
yl.prototype.unmount = $o.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    It(function () {
      gl(null, e, null, null)
    }),
      (t[Ke] = null)
  }
}
function yl(e) {
  this._internalRoot = e
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rs()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Us(e)
  }
}
function Bo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Zu() {}
function Ad(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var c = ll(o)
        i.call(c)
      }
    }
    var o = ic(t, r, e, 0, null, !1, !1, '', Zu)
    return (
      (e._reactRootContainer = o),
      (e[Ke] = o.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      It(),
      o
    )
  }
  for (; (l = e.lastChild); ) e.removeChild(l)
  if (typeof r == 'function') {
    var u = r
    r = function () {
      var c = ll(s)
      u.call(c)
    }
  }
  var s = Uo(e, 0, !1, null, null, !1, !1, '', Zu)
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    It(function () {
      gl(t, s, n, r)
    }),
    s
  )
}
function kl(e, t, n, r, l) {
  var i = n._reactRootContainer
  if (i) {
    var o = i
    if (typeof l == 'function') {
      var u = l
      l = function () {
        var s = ll(o)
        u.call(s)
      }
    }
    gl(t, o, e, l)
  } else o = Ad(n, t, e, l, r)
  return ll(o)
}
Os = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes)
        n !== 0 &&
          (io(t, n | 1), me(t, K()), !(M & 6) && ((on = K() + 500), gt()))
      }
      break
    case 13:
      It(function () {
        var r = Ye(e, 1)
        if (r !== null) {
          var l = ue()
          je(r, e, 1, l)
        }
      }),
        Ao(e, 1)
  }
}
oo = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728)
    if (t !== null) {
      var n = ue()
      je(t, e, 134217728, n)
    }
    Ao(e, 134217728)
  }
}
Fs = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Ye(e, t)
    if (n !== null) {
      var r = ue()
      je(n, e, t, r)
    }
    Ao(e, t)
  }
}
Rs = function () {
  return j
}
Ds = function (e, t) {
  var n = j
  try {
    return (j = e), t()
  } finally {
    j = n
  }
}
pi = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((oi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var l = cl(r)
            if (!l) throw Error(g(90))
            ms(r), oi(r, l)
          }
        }
      }
      break
    case 'textarea':
      vs(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Yt(e, !!n.multiple, t, !1)
  }
}
Es = Oo
Cs = It
var $d = { usingClientEntryPoint: !1, Events: [er, $t, cl, Ss, xs, Oo] },
  wn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Bd = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ps(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || Ud,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      ;(ol = kr.inject(Bd)), (Ue = kr)
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Bo(t)) throw Error(g(200))
  return Dd(e, t, null, n)
}
we.createRoot = function (e, t) {
  if (!Bo(e)) throw Error(g(299))
  var n = !1,
    r = '',
    l = oc
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Uo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new $o(t)
  )
}
we.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(g(188))
      : ((e = Object.keys(e).join(',')), Error(g(268, e)))
  return (e = Ps(t)), (e = e === null ? null : e.stateNode), e
}
we.flushSync = function (e) {
  return It(e)
}
we.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(g(200))
  return kl(null, e, t, !0, n)
}
we.hydrateRoot = function (e, t, n) {
  if (!Bo(e)) throw Error(g(405))
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = oc
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ic(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ke] = t.current),
    Vn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l)
  return new yl(t)
}
we.render = function (e, t, n) {
  if (!wl(t)) throw Error(g(200))
  return kl(null, e, t, !1, n)
}
we.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(g(40))
  return e._reactRootContainer
    ? (It(function () {
        kl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Ke] = null)
        })
      }),
      !0)
    : !1
}
we.unstable_batchedUpdates = Oo
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(g(200))
  if (e == null || e._reactInternals === void 0) throw Error(g(38))
  return kl(e, t, n, !1, r)
}
we.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (n) {
        console.error(n)
      }
  }
  t(), (e.exports = we)
})(Dc)
var qu = ql
;(Zl.createRoot = qu.createRoot), (Zl.hydrateRoot = qu.hydrateRoot)
var Vd = [
    {
      id: 'ci',
      name: 'Circum Icons',
      projectUrl: 'https://circumicons.com/',
      license: 'MPL-2.0 license',
      licenseUrl:
        'https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE',
    },
    {
      id: 'fa',
      name: 'Font Awesome 5',
      projectUrl: 'https://fontawesome.com/',
      license: 'CC BY 4.0 License',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    },
    {
      id: 'io',
      name: 'Ionicons 4',
      projectUrl: 'https://ionicons.com/',
      license: 'MIT',
      licenseUrl: 'https://github.com/ionic-team/ionicons/blob/master/LICENSE',
    },
    {
      id: 'io5',
      name: 'Ionicons 5',
      projectUrl: 'https://ionicons.com/',
      license: 'MIT',
      licenseUrl: 'https://github.com/ionic-team/ionicons/blob/master/LICENSE',
    },
    {
      id: 'md',
      name: 'Material Design icons',
      projectUrl: 'http://google.github.io/material-design-icons/',
      license: 'Apache License Version 2.0',
      licenseUrl:
        'https://github.com/google/material-design-icons/blob/master/LICENSE',
    },
    {
      id: 'ti',
      name: 'Typicons',
      projectUrl: 'http://s-ings.com/typicons/',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    },
    {
      id: 'go',
      name: 'Github Octicons icons',
      projectUrl: 'https://octicons.github.com/',
      license: 'MIT',
      licenseUrl: 'https://github.com/primer/octicons/blob/master/LICENSE',
    },
    {
      id: 'fi',
      name: 'Feather',
      projectUrl: 'https://feathericons.com/',
      license: 'MIT',
      licenseUrl: 'https://github.com/feathericons/feather/blob/master/LICENSE',
    },
    {
      id: 'gi',
      name: 'Game Icons',
      projectUrl: 'https://game-icons.net/',
      license: 'CC BY 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    },
    {
      id: 'wi',
      name: 'Weather Icons',
      projectUrl: 'https://erikflowers.github.io/weather-icons/',
      license: 'SIL OFL 1.1',
      licenseUrl: 'http://scripts.sil.org/OFL',
    },
    {
      id: 'di',
      name: 'Devicons',
      projectUrl: 'https://vorillaz.github.io/devicons/',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'ai',
      name: 'Ant Design Icons',
      projectUrl: 'https://github.com/ant-design/ant-design-icons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'bs',
      name: 'Bootstrap Icons',
      projectUrl: 'https://github.com/twbs/icons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'ri',
      name: 'Remix Icon',
      projectUrl: 'https://github.com/Remix-Design/RemixIcon',
      license: 'Apache License Version 2.0',
      licenseUrl: 'http://www.apache.org/licenses/',
    },
    {
      id: 'fc',
      name: 'Flat Color Icons',
      projectUrl: 'https://github.com/icons8/flat-color-icons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'gr',
      name: 'Grommet-Icons',
      projectUrl: 'https://github.com/grommet/grommet-icons',
      license: 'Apache License Version 2.0',
      licenseUrl: 'http://www.apache.org/licenses/',
    },
    {
      id: 'hi',
      name: 'Heroicons',
      projectUrl: 'https://github.com/tailwindlabs/heroicons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'hi2',
      name: 'Heroicons 2',
      projectUrl: 'https://github.com/tailwindlabs/heroicons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'si',
      name: 'Simple Icons',
      projectUrl: 'https://simpleicons.org/',
      license: 'CC0 1.0 Universal',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    },
    {
      id: 'sl',
      name: 'Simple Line Icons',
      projectUrl: 'https://thesabbir.github.io/simple-line-icons/',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'im',
      name: 'IcoMoon Free',
      projectUrl: 'https://github.com/Keyamoon/IcoMoon-Free',
      license: 'CC BY 4.0 License',
      licenseUrl:
        'https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt',
    },
    {
      id: 'bi',
      name: 'BoxIcons',
      projectUrl: 'https://github.com/atisawd/boxicons',
      license: 'CC BY 4.0 License',
      licenseUrl: 'https://github.com/atisawd/boxicons/blob/master/LICENSE',
    },
    {
      id: 'cg',
      name: 'css.gg',
      projectUrl: 'https://github.com/astrit/css.gg',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'vsc',
      name: 'VS Code Icons',
      projectUrl: 'https://github.com/microsoft/vscode-codicons',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    },
    {
      id: 'tb',
      name: 'Tabler Icons',
      projectUrl: 'https://github.com/tabler/tabler-icons',
      license: 'MIT',
      licenseUrl: 'https://opensource.org/licenses/MIT',
    },
    {
      id: 'tfi',
      name: 'Themify Icons',
      projectUrl: 'https://github.com/lykmapipo/themify-icons',
      license: 'MIT',
      licenseUrl:
        'https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE',
    },
    {
      id: 'rx',
      name: 'Radix Icons',
      projectUrl: 'https://icons.radix-ui.com',
      license: 'MIT',
      licenseUrl: 'https://github.com/radix-ui/icons/blob/master/LICENSE',
    },
  ],
  Vo = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ki = rt.createContext && rt.createContext(Vo),
  dt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (dt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
            }
            return e
          }),
        dt.apply(this, arguments)
      )
    },
  Hd =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {}
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]])
      return n
    }
function uc(e) {
  return (
    e &&
    e.map(function (t, n) {
      return rt.createElement(t.tag, dt({ key: n }, t.attr), uc(t.child))
    })
  )
}
function Wd(e) {
  return function (t) {
    return rt.createElement(sc, dt({ attr: dt({}, e.attr) }, t), uc(e.child))
  }
}
function sc(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = Hd(e, ['attr', 'size', 'title']),
      u = l || n.size || '1em',
      s
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      rt.createElement(
        'svg',
        dt(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          o,
          {
            className: s,
            style: dt(dt({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        i && rt.createElement('title', null, i),
        e.children
      )
    )
  }
  return Ki !== void 0
    ? rt.createElement(Ki.Consumer, null, function (n) {
        return t(n)
      })
    : t(Vo)
}
const Qd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        DefaultContext: Vo,
        GenIcon: Wd,
        IconBase: sc,
        IconContext: Ki,
        IconsManifest: Vd,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Sl = pc(Qd)
var Kd = Sl.GenIcon,
  Yd = function (t) {
    return Kd({
      tag: 'svg',
      attr: { viewBox: '0 0 496 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z',
          },
        },
      ],
    })(t)
  },
  Gd = Sl.GenIcon,
  Xd = function (t) {
    return Gd({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
        {
          tag: 'path',
          attr: {
            d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
          },
        },
      ],
    })(t)
  },
  Jd = Sl.GenIcon,
  Zd = function (t) {
    return Jd({
      tag: 'svg',
      attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z',
          },
        },
        {
          tag: 'path',
          attr: {
            d: 'M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z',
          },
        },
      ],
    })(t)
  },
  qd = Sl.GenIcon,
  bd = function (t) {
    return qd({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z',
          },
        },
      ],
    })(t)
  }
const ep = './assets/small_mypicture-c46d9487.jpg',
  tp = () => {
    const e = () => {
      document.documentElement.classList.toggle('dark')
    }
    return V('header', {
      className:
        'relative z-1 w-full flex flex-row justify-between m-0 p-0 pb-8 bg-transparent',
      children: [
        P('div', {
          onClick: (t) => e(),
          className: 'absolute top-[-15px] left-[-15px] cursor-pointer',
          children: P(bd, {}),
        }),
        P('div', {
          className: 'photo w-[12%] flex justify-center items-center',
          children: P('img', {
            src: ep,
            alt: 'My picture',
            className:
              'rounded-2xl w-[100%] border dark:border-headingForDark border-headingForLite ',
          }),
        }),
        V('div', {
          className: 'left flex flex-col max-w-full  m-0 p-0 pl-6',
          children: [
            P('h1', {
              className:
                'name dark:text-headingForDark text-headingForLite text-4xl font-medium',
              children: 'Andrei Liubinski',
            }),
            P('p', { className: 'position', children: 'Full-Stack Developer' }),
            V('div', {
              className: 'contacts flex flex-row',
              children: [
                V('a', {
                  href: 'mailto:box@aliubinski.us',
                  className:
                    'text-sm flex flex-row justify-center items-center',
                  children: [
                    P(Xd, {}),
                    P('p', { children: ':box@aliubinski.us' }),
                  ],
                }),
                P('span', {
                  className: 'dark:text-headingForDark text-headingForLite',
                  children: ' // ',
                }),
                V('a', {
                  href: 'tel:+375257112405',
                  className:
                    'text-sm flex flex-row justify-center items-center',
                  children: [
                    P(Zd, {}),
                    P('p', { children: ':(+375)25-711-2405' }),
                  ],
                }),
                P('span', {
                  className: 'dark:text-headingForDark text-headingForLite',
                  children: ' // ',
                }),
                V('a', {
                  href: 'https://t.me/alxdrvnsk',
                  className:
                    'text-sm flex flex-row justify-center items-center',
                  children: [P(Yd, {}), P('p', { children: ':@alxdrvnsk' })],
                }),
              ],
            }),
          ],
        }),
        P('nav', {
          className: 'right w-1/4 m-0 p-0 pl-2',
          children: V('ul', {
            className:
              'list w-full h-max flex flex-col list-none justify-start',
            children: [
              V('li', {
                className: 'linkedin flex flex-row justify-between',
                children: [
                  P('span', {
                    className:
                      'dark:text-headingForDark text-headingForLite font-bold',
                    children: 'LinkedIn',
                  }),
                  P('a', {
                    href: 'https://www.linkedin.com/in/andrei-liubinski/',
                    className: 'text-sm',
                    children: '/in/andrei-liubinski/',
                  }),
                ],
              }),
              V('li', {
                className: 'github flex flex-row justify-between',
                children: [
                  P('span', {
                    className:
                      'dark:text-headingForDark text-headingForLite font-bold',
                    children: 'GitHub',
                  }),
                  P('a', {
                    href: 'https://github.com/LIUAndrei',
                    className: 'text-sm',
                    children: '/LIUAndrei',
                  }),
                ],
              }),
              V('li', {
                className: 'codewars flex flex-row justify-between',
                children: [
                  P('span', {
                    className:
                      'dark:text-headingForDark text-headingForLite font-bold',
                    children: 'CodeWars',
                  }),
                  P('a', {
                    href: 'https://www.codewars.com/users/LIUAndrei',
                    className: 'text-sm',
                    children: '/LIUAndrei',
                  }),
                ],
              }),
              V('li', {
                className: 'portfolio flex flex-row justify-between',
                children: [
                  P('span', {
                    className:
                      'dark:text-headingForDark text-headingForLite font-bold',
                    children: 'Website',
                  }),
                  P('a', {
                    href: 'https://www.aliubinski.us/',
                    className: 'text-sm',
                    children: 'www.aliubinski.us',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  },
  np = ({ sectionTitle: e, unit: t }) => {
    let n, r
    return (
      t.points &&
        (n = t.points.map((l, i) =>
          P('li', { className: 'text-smaller', children: l }, i)
        )),
      t.responsibilities &&
        (n = t.responsibilities.map((l, i) =>
          P('li', { className: 'text-smaller', children: l }, i)
        )),
      t.achievements &&
        (r = t.achievements.map((l, i) =>
          P('li', { className: 'text-smaller', children: l }, i)
        )),
      V('div', {
        className: 'do-not-break w-full m-0 p-0 mb-6',
        children: [
          V('div', {
            className:
              'title w-full py-3 m-0 flex flex-row justify-between items-center',
            children: [
              V('h3', {
                className:
                  'title text-base font-medium dark:text-headingForDark text-headingForLite',
                children: [
                  t.name,
                  ' ',
                  V('span', {
                    className:
                      'text-xs dark:text-liteColor text-darkColor italic',
                    children: [
                      e === 'Development Experience & Courses' ? 'by' : 'with',
                      ' ',
                      t.description,
                    ],
                  }),
                ],
              }),
              P('p', {
                className: 'timeframe text-xs text-right italic',
                children: t.timeframe,
              }),
            ],
          }),
          t.responsibilities &&
            P('h4', { className: 'mt-4', children: 'Responsibilities:' }),
          P('ul', { className: 'w-full pl-4 list-disc', children: n }),
          t.achievements &&
            P('h4', { className: 'mt-2', children: 'Achievements:' }),
          t.achievements &&
            P('ul', { className: 'w-full pl-4 list-disc', children: r }),
        ],
      })
    )
  },
  rp = {
    section_title: 'Development Experience & Courses',
    list: [
      {
        name: 'Frontend Career Bootcamp',
        description: 'Scrimba.com',
        timeframe: 'january 2021 - january 2022',
        points: [
          "A self-paced course with own REPL system that explains minute details of tech that I've learned previously",
          'It allowed me to expand my skill in HTML, CSS, JS, explained frameworks such as Bootstrap, Tailwind CSS, preprocessors such as PostCSS and SCSS, JS library React and much more',
          'A reminder app was made with React and Tailwind as a part of this course',
        ],
      },
      {
        name: 'JavaScript 2020',
        description: 'Jonas Schmedtmann (Udemy)',
        timeframe: 'march 2021 - september 2021',
        points: [
          'A comprehensive JavaScript course from Udemy that gives complete knowledge necessary to develop web applications with JavaScript',
          'I have learned the fundamentals of the language such as variables, loops, functions, data types, as well as the more complex things like OOP with JS, call stack, heap, garbage collection in JS, asyncronous JS',
          "Along the way I've developed a few applications such as mock banking app, excercise map and more",
        ],
      },
      {
        name: 'HTML, CSS, JavaScript interactive course',
        description: 'HTMLAcademy.ru',
        timeframe: 'march 2020 - august 2020',
        points: [
          'This course is an interactive and visual way to learn HTML, CSS, with some JS and PHP',
          'It allowed me to have a strong understanding of webpage structure including tricky parts like HTML semantics, CSS grid & flexbox',
          'Some static pages were made as part of this course',
        ],
      },
    ],
  },
  lp = {
    section_title: 'Professional History',
    list: [
      {
        name: 'Client Support Agent',
        description: 'Capital.com',
        timeframe: 'june 2021 - august 2022',
        responsibilities: [
          'Responding to requests and inquiries of clients via Zendesk Platform',
          "Answering questions regarding the platform, it's functionality, trading, and finance in general using the language of the inquirer",
          'Dealing with disgruntled clients in the way that leaves them satisfied, explaining their mistakes without hinting that they are the ones who is responsible for their losses',
          "Ensuring that company's strict KYC policies as well as GDPR, FATCA and FATF laws are followed",
        ],
        achievements: [
          'Made sure that thousands of my clients understand the world of investing better that they did before making their inquiry',
          'Relayed relevant questions to compliance, client retention, finance or other departments',
          'Solved dozens of unusual situations and close calls that might have cost clients or company real financial losses',
        ],
      },
      {
        name: 'On-site safety inspector',
        description: '1845 Oilfield Service',
        timeframe: 'october 2018 - november 2019',
        responsibilities: [
          'Ensuring safety compliance of proppant delivery drivers',
          'Ensuring H2S compliance of subcontractors present on oilwell site',
          'Cosigning safety  every delivery of HazMat shippment as an PEC safety officer',
        ],
        achievements: [
          'No delivery-related incidents occured during my shifts',
          'Ensured no safety-related downtime durig my shifts both for the contractors and the service company',
        ],
      },
      {
        name: 'On & off-site proppant delivery dispatcher',
        description: 'Stevens Tanker Division',
        timeframe: 'october 2018 - november 2019',
        responsibilities: [
          'Ensuring steady stream of necessary deliveries',
          'Making sure that each shift has sufficient capacity to service the work-site',
          'Making sure that every contractor and employee has a fair share of work dispatched to them',
        ],
        achievements: [
          'Was in the top 25% of performers among the dispatchers for 3 months in a row',
          'Was one of the dispatchers that drivers and contractors were trying to work with',
          'Dispatched over $120 mln worth of oilfield related goods over the period of employment',
        ],
      },
      {
        name: 'Long haul driver & driver trainer',
        description: 'Stevens Transport',
        timeframe: 'september 2013 - october 2018',
        responsibilities: [
          'Delivering goods as a truck driver, including the hazardous materials',
          'Ensuring the integrity of the shipped goods',
          'Training new drivers out of driving school to be safe and successful and profitable',
        ],
        achievements: [
          'Made over 400 deliveries during the employment time',
          'Trained 9 new drivers',
        ],
      },
    ],
  },
  ac = {
    section_title: 'Skills',
    list: [
      ['HTML', 5],
      ['CSS', 5],
      ['JavaScript', 4],
      ['Tailwind CSS', 4],
      ['JSON', 3],
      ['SCSS', 3],
      ['ReactJS', 3],
      ['GIT', 3],
      ['Svelte', 3],
      ['ThreeJS', 2],
      ['Vite', 2],
      ['Webkit', 2],
      ['BASH', 2],
      ['NodeJS', 1],
    ],
  },
  cc = {
    section_title: 'Projects',
    list: [
      [
        "'Bankist'",
        'Mock banking application',
        'https://aliubinski.us/Projects/Bankist/',
      ],
      [
        "'Forkify'",
        'Recipe app that uses 3rd party API',
        'https://aliubinski.us/Projects/Forkify/',
      ],
      [
        "'Mapty'",
        'A map app that allows you to track your running and cycling workouts',
        'https://aliubinski.us/Projects/Mapty/',
      ],
      [
        'More on my website',
        'I code all the time, adding new projects as they are completed',
        'https://aliubinski.us/',
      ],
    ],
  },
  ip = () =>
    P('div', {
      className:
        'do-not-break w-full flex flex-col justify-evenly items-center',
      children: cc.list.map((e, t) =>
        V(
          'a',
          {
            href: e[2],
            className:
              'my-3 w-[90%] outline-dashed outline-1 outline-headingForDark  rounded',
            children: [
              P('p', {
                className:
                  'bg-headingForDark  font-semibold rounded-br-lg rounded-tl text-darkColor dark:text-liteColor px-3 max-w-fit',
                children: e[0],
              }),
              P('p', { className: 'p-2 text-sm ', children: e[1] }),
            ],
          },
          t
        )
      ),
    }),
  op = () =>
    P('div', {
      className:
        'do-not-break w-full flex flex-col justify-evenly items-center',
      children: ac.list.map((e) =>
        V(
          'div',
          {
            className:
              'relative rounded my-3 w-[90%] h-6 pl-2 flex items-center justify-start  outline-dashed outline-1  outline-headingForDark',
            children: [
              P('div', {
                className: `z-0 rounded-l absolute top-0 left-0 bg-headingForDark  h-full 
            ${e[1] === 5 ? 'w-full' : `w-${e[1]}/5`}
            `,
              }),
              P('p', {
                className:
                  'z-1 absolute text-base dark:text-liteColor text-darkColor font-semibold tracking-wide',
                children: e[0],
              }),
            ],
          },
          e[0]
        )
      ),
    }),
  Sr = ({ section: e }) => {
    let t
    return (
      e.section_title === 'Projects' && (t = P(ip, {})),
      e.section_title === 'Skills' && (t = P(op, {})),
      (e.section_title === 'Development Experience & Courses' ||
        e.section_title === 'Professional History') &&
        (t = e.list.map((n, r) =>
          P(np, { sectionTitle: e.section_title, unit: n }, r)
        )),
      console.log(e.section_title),
      V('section', {
        className: 'm-0 px-0 py-8 bg-transparent',
        children: [
          P('div', {
            className:
              'w-full h-[3px] dark:bg-headingForDark bg-headingForLite',
          }),
          P('h2', {
            className:
              'relative z-10 dark:text-headingForDark text-headingForLite text-lg font-bold top-[-18px] dark:bg-darkColor bg-liteColor max-w-fit pr-5',
            children: e.section_title,
          }),
          t,
        ],
      })
    )
  }
function up() {
  return V('div', {
    className:
      'wrapper h-full w-full p-8 dark:bg-darkColor dark:text-liteColor text-darkColor bg-liteColor',
    children: [
      P(tp, {}),
      V('main', {
        className: 'w-full flex flex-row',
        children: [
          V('div', {
            className: 'w-3/4 pr-2',
            children: [P(Sr, { section: rp }), P(Sr, { section: lp })],
          }),
          V('div', {
            className: 'w-1/4 pl-2',
            children: [P(Sr, { section: ac }), P(Sr, { section: cc })],
          }),
        ],
      }),
    ],
  })
}
Zl.createRoot(document.getElementById('root')).render(
  P(rt.StrictMode, { children: P(up, {}) })
)
