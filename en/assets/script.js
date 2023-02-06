/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof e &&
          "#" === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      o(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(
        s,
        "unique",
        s.uniqueSort,
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      t(
        s.expr,
        "filters",
        s.expr.pseudos,
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      t(
        s.expr,
        ":",
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        o(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(m, "");
          },
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (o(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated"
        ),
        o(
          s,
          "isArray",
          Array.isArray,
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (o(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        o(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "jQuery.type is deprecated"
        ),
        o(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated"
        ),
        o(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                "success",
                e.done,
                "jQXHR.success is deprecated and removed"
              ),
              o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
              o(
                e,
                "complete",
                e.always,
                "jQXHR.complete is deprecated and removed"
              )),
            e
          );
        }),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  c.test(e.data))) &&
              u("JSON-to-JSONP auto-promotion is deprecated");
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? h.apply(this, arguments)
          : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || ""
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("JQMIGRATE: jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u("jQuery.data() always sets/gets camelCased names: " + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        "string" == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u("jQuery.data() always sets/gets camelCased names: " + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument"
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        "concat",
        s.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u("jQuery.event.fixHooks are deprecated and removed: " + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            "load" === t &&
            "complete" === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? R.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r)
          );
        },
        hover: function (e, t) {
          return (
            u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e &&
        T(e) !== T(t) &&
        u("HTML tags must be properly nested and closed: " + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u("jQuery.fn.offset() requires a valid DOM element"),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u("deferred.pipe() is deprecated"),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && "function" == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + "With"](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
if ("undefined" == typeof console) {
  window.console = { log: function () {} };
}
jQuery(function ($) {
  var debugMode = gtm4wp_scrollerscript_debugmode;
  var callBackTime = gtm4wp_scrollerscript_callbacktime;
  var readerLocation = gtm4wp_scrollerscript_readerlocation;
  var timer = 0;
  var scroller = !1;
  var endContent = !1;
  var didComplete = !1;
  var startTime = new Date();
  var beginning = startTime.getTime();
  var totalTime = 0;
  if (!debugMode) {
    window[gtm4wp_datalayer_name].push({
      event: "gtm4wp.reading.articleLoaded",
    });
  } else {
    console.log("Article loaded");
  }
  function trackLocation() {
    bottom = $(window).height() + $(window).scrollTop();
    height = $(document).height();
    if (bottom > readerLocation && !scroller) {
      currentTime = new Date();
      scrollStart = currentTime.getTime();
      timeToScroll = Math.round((scrollStart - beginning) / 1000);
      if (!debugMode) {
        window[gtm4wp_datalayer_name].push({
          event: "gtm4wp.reading.startReading",
          timeToScroll: timeToScroll,
        });
      } else {
        console.log("Started reading " + timeToScroll);
      }
      scroller = !0;
    }
    if (
      bottom >=
        $("#" + gtm4wp_scrollerscript_contentelementid).scrollTop() +
          $("#" + gtm4wp_scrollerscript_contentelementid).innerHeight() &&
      !endContent
    ) {
      currentTime = new Date();
      contentScrollEnd = currentTime.getTime();
      timeToContentEnd = Math.round((contentScrollEnd - scrollStart) / 1000);
      if (!debugMode) {
        window[gtm4wp_datalayer_name].push({
          event: "gtm4wp.reading.contentBottom",
          timeToScroll: timeToContentEnd,
        });
      } else {
        console.log("End content section " + timeToContentEnd);
      }
      endContent = !0;
    }
    if (bottom >= height && !didComplete) {
      currentTime = new Date();
      end = currentTime.getTime();
      totalTime = Math.round((end - scrollStart) / 1000);
      if (!debugMode) {
        if (totalTime < gtm4wp_scrollerscript_scannertime) {
          window[gtm4wp_datalayer_name].push({
            event: "gtm4wp.reading.readerType",
            readerType: "scanner",
          });
        } else {
          window[gtm4wp_datalayer_name].push({
            event: "gtm4wp.reading.readerType",
            readerType: "reader",
          });
        }
        window[gtm4wp_datalayer_name].push({
          event: "gtm4wp.reading.pagebottom",
          timeToScroll: totalTime,
        });
      } else {
        if (totalTime < gtm4wp_scrollerscript_scannertime) {
          console.log('The visitor seems to be a "scanner"');
        } else {
          console.log('The visitor seems to be a "reader"');
        }
        console.log("Bottom of page " + totalTime);
      }
      didComplete = !0;
    }
  }
  $(window).scroll(function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(trackLocation, callBackTime);
  });
});
!(function () {
  "use strict";
  var t = {
      d: function (e, i) {
        for (var n in i)
          t.o(i, n) &&
            !t.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
      },
      o: function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      },
      r: function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  function i(t) {
    if (((this.formData = {}), (this.tree = {}), !(t instanceof FormData)))
      return this;
    this.formData = t;
    const e = () => {
      const t = new Map();
      return (
        (t.largestIndex = 0),
        (t.set = function (e, i) {
          "" === e
            ? (e = t.largestIndex++)
            : /^[0-9]+$/.test(e) &&
              ((e = parseInt(e)),
              t.largestIndex <= e && (t.largestIndex = e + 1)),
            Map.prototype.set.call(t, e, i);
        }),
        t
      );
    };
    this.tree = e();
    const i =
      /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
    for (const [t, n] of this.formData) {
      const s = t.match(i);
      if (s)
        if ("" === s.groups.array) this.tree.set(s.groups.name, n);
        else {
          const t = [
            ...s.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi),
          ].map(([t, e]) => e);
          t.unshift(s.groups.name);
          const i = t.pop();
          t.reduce((t, i) => {
            if (
              (/^[0-9]+$/.test(i) && (i = parseInt(i)), t.get(i) instanceof Map)
            )
              return t.get(i);
            const n = e();
            return t.set(i, n), n;
          }, this.tree).set(i, n);
        }
    }
  }
  t.r(e),
    t.d(e, {
      date: function () {
        return d;
      },
      email: function () {
        return r;
      },
      file: function () {
        return m;
      },
      maxdate: function () {
        return x;
      },
      maxfilesize: function () {
        return w;
      },
      maxlength: function () {
        return u;
      },
      maxnumber: function () {
        return v;
      },
      mindate: function () {
        return g;
      },
      minlength: function () {
        return f;
      },
      minnumber: function () {
        return h;
      },
      number: function () {
        return c;
      },
      required: function () {
        return o;
      },
      requiredfile: function () {
        return a;
      },
      tel: function () {
        return l;
      },
      url: function () {
        return p;
      },
    }),
    (i.prototype.entries = function () {
      return this.tree.entries();
    }),
    (i.prototype.get = function (t) {
      return this.tree.get(t);
    }),
    (i.prototype.getAll = function (t) {
      if (!this.has(t)) return [];
      const e = (t) => {
        const i = [];
        if (t instanceof Map) for (const [n, s] of t) i.push(...e(s));
        else "" !== t && i.push(t);
        return i;
      };
      return e(this.get(t));
    }),
    (i.prototype.has = function (t) {
      return this.tree.has(t);
    }),
    (i.prototype.keys = function () {
      return this.tree.keys();
    }),
    (i.prototype.values = function () {
      return this.tree.values();
    });
  var n = i;
  function s({ rule: t, field: e, error: i, ...n }) {
    (this.rule = t), (this.field = e), (this.error = i), (this.properties = n);
  }
  const o = function (t) {
      if (0 === t.getAll(this.field).length) throw new s(this);
    },
    a = function (t) {
      if (0 === t.getAll(this.field).length) throw new s(this);
    },
    r = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if ((t = t.trim()).length < 6) return !1;
          if (-1 === t.indexOf("@", 1)) return !1;
          if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
          const [e, i] = t.split("@", 2);
          if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
          if (/\.{2,}/.test(i)) return !1;
          if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i)) return !1;
          const n = i.split(".");
          if (n.length < 2) return !1;
          for (const t of n) {
            if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
            if (!/^[a-z0-9-]+$/i.test(t)) return !1;
          }
          return !0;
        })
      )
        throw new s(this);
    },
    p = function (t) {
      const e = t.getAll(this.field);
      if (
        !e.every((t) => {
          if ("" === (t = t.trim())) return !1;
          try {
            return ((t) =>
              -1 !==
              [
                "http",
                "https",
                "ftp",
                "ftps",
                "mailto",
                "news",
                "irc",
                "irc6",
                "ircs",
                "gopher",
                "nntp",
                "feed",
                "telnet",
                "mms",
                "rtsp",
                "sms",
                "svn",
                "tel",
                "fax",
                "xmpp",
                "webcal",
                "urn",
              ].indexOf(t))(new URL(t).protocol.replace(/:$/, ""));
          } catch {
            return !1;
          }
        })
      )
        throw new s(this);
    },
    l = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, "")),
              /^[+]?[0-9]+$/.test(t)
            )
          )
      )
        throw new s(this);
    },
    c = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) ||
                !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)
            )
          )
      )
        throw new s(this);
    },
    d = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim()))
      )
        throw new s(this);
    },
    m = function (t) {
      if (
        !t.getAll(this.field).every(
          (t) =>
            t instanceof File &&
            this.accept?.some((e) =>
              /^\.[a-z0-9]+$/i.test(e)
                ? t.name.toLowerCase().endsWith(e.toLowerCase())
                : ((t) => {
                    const e = [],
                      i = t.match(
                        /^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i
                      );
                    if (i) {
                      const t = i.groups.toplevel.toLowerCase(),
                        n = i.groups.sub.toLowerCase();
                      for (const [s, o] of (() => {
                        const t = new Map();
                        return (
                          t.set("jpg|jpeg|jpe", "image/jpeg"),
                          t.set("gif", "image/gif"),
                          t.set("png", "image/png"),
                          t.set("bmp", "image/bmp"),
                          t.set("tiff|tif", "image/tiff"),
                          t.set("webp", "image/webp"),
                          t.set("ico", "image/x-icon"),
                          t.set("heic", "image/heic"),
                          t.set("asf|asx", "video/x-ms-asf"),
                          t.set("wmv", "video/x-ms-wmv"),
                          t.set("wmx", "video/x-ms-wmx"),
                          t.set("wm", "video/x-ms-wm"),
                          t.set("avi", "video/avi"),
                          t.set("divx", "video/divx"),
                          t.set("flv", "video/x-flv"),
                          t.set("mov|qt", "video/quicktime"),
                          t.set("mpeg|mpg|mpe", "video/mpeg"),
                          t.set("mp4|m4v", "video/mp4"),
                          t.set("ogv", "video/ogg"),
                          t.set("webm", "video/webm"),
                          t.set("mkv", "video/x-matroska"),
                          t.set("3gp|3gpp", "video/3gpp"),
                          t.set("3g2|3gp2", "video/3gpp2"),
                          t.set("txt|asc|c|cc|h|srt", "text/plain"),
                          t.set("csv", "text/csv"),
                          t.set("tsv", "text/tab-separated-values"),
                          t.set("ics", "text/calendar"),
                          t.set("rtx", "text/richtext"),
                          t.set("css", "text/css"),
                          t.set("htm|html", "text/html"),
                          t.set("vtt", "text/vtt"),
                          t.set("dfxp", "application/ttaf+xml"),
                          t.set("mp3|m4a|m4b", "audio/mpeg"),
                          t.set("aac", "audio/aac"),
                          t.set("ra|ram", "audio/x-realaudio"),
                          t.set("wav", "audio/wav"),
                          t.set("ogg|oga", "audio/ogg"),
                          t.set("flac", "audio/flac"),
                          t.set("mid|midi", "audio/midi"),
                          t.set("wma", "audio/x-ms-wma"),
                          t.set("wax", "audio/x-ms-wax"),
                          t.set("mka", "audio/x-matroska"),
                          t.set("rtf", "application/rtf"),
                          t.set("js", "application/javascript"),
                          t.set("pdf", "application/pdf"),
                          t.set("swf", "application/x-shockwave-flash"),
                          t.set("class", "application/java"),
                          t.set("tar", "application/x-tar"),
                          t.set("zip", "application/zip"),
                          t.set("gz|gzip", "application/x-gzip"),
                          t.set("rar", "application/rar"),
                          t.set("7z", "application/x-7z-compressed"),
                          t.set("exe", "application/x-msdownload"),
                          t.set("psd", "application/octet-stream"),
                          t.set("xcf", "application/octet-stream"),
                          t.set("doc", "application/msword"),
                          t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                          t.set("wri", "application/vnd.ms-write"),
                          t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                          t.set("mdb", "application/vnd.ms-access"),
                          t.set("mpp", "application/vnd.ms-project"),
                          t.set(
                            "docx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ),
                          t.set(
                            "docm",
                            "application/vnd.ms-word.document.macroEnabled.12"
                          ),
                          t.set(
                            "dotx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
                          ),
                          t.set(
                            "dotm",
                            "application/vnd.ms-word.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlsx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          ),
                          t.set(
                            "xlsm",
                            "application/vnd.ms-excel.sheet.macroEnabled.12"
                          ),
                          t.set(
                            "xlsb",
                            "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
                          ),
                          t.set(
                            "xltx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
                          ),
                          t.set(
                            "xltm",
                            "application/vnd.ms-excel.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlam",
                            "application/vnd.ms-excel.addin.macroEnabled.12"
                          ),
                          t.set(
                            "pptx",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                          ),
                          t.set(
                            "pptm",
                            "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
                          ),
                          t.set(
                            "ppsx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
                          ),
                          t.set(
                            "ppsm",
                            "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
                          ),
                          t.set(
                            "potx",
                            "application/vnd.openxmlformats-officedocument.presentationml.template"
                          ),
                          t.set(
                            "potm",
                            "application/vnd.ms-powerpoint.template.macroEnabled.12"
                          ),
                          t.set(
                            "ppam",
                            "application/vnd.ms-powerpoint.addin.macroEnabled.12"
                          ),
                          t.set(
                            "sldx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slide"
                          ),
                          t.set(
                            "sldm",
                            "application/vnd.ms-powerpoint.slide.macroEnabled.12"
                          ),
                          t.set(
                            "onetoc|onetoc2|onetmp|onepkg",
                            "application/onenote"
                          ),
                          t.set("oxps", "application/oxps"),
                          t.set("xps", "application/vnd.ms-xpsdocument"),
                          t.set(
                            "odt",
                            "application/vnd.oasis.opendocument.text"
                          ),
                          t.set(
                            "odp",
                            "application/vnd.oasis.opendocument.presentation"
                          ),
                          t.set(
                            "ods",
                            "application/vnd.oasis.opendocument.spreadsheet"
                          ),
                          t.set(
                            "odg",
                            "application/vnd.oasis.opendocument.graphics"
                          ),
                          t.set(
                            "odc",
                            "application/vnd.oasis.opendocument.chart"
                          ),
                          t.set(
                            "odb",
                            "application/vnd.oasis.opendocument.database"
                          ),
                          t.set(
                            "odf",
                            "application/vnd.oasis.opendocument.formula"
                          ),
                          t.set("wp|wpd", "application/wordperfect"),
                          t.set("key", "application/vnd.apple.keynote"),
                          t.set("numbers", "application/vnd.apple.numbers"),
                          t.set("pages", "application/vnd.apple.pages"),
                          t
                        );
                      })())
                        (("*" === n && o.startsWith(t + "/")) || o === i[0]) &&
                          e.push(...s.split("|"));
                    }
                    return e;
                  })(e).some(
                    (e) => (
                      (e = "." + e.trim()),
                      t.name.toLowerCase().endsWith(e.toLowerCase())
                    )
                  )
            )
        )
      )
        throw new s(this);
    },
    f = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (i += t.length);
        }),
        0 !== i && i < parseInt(this.threshold))
      )
        throw new s(this);
    },
    u = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (i += t.length);
        }),
        parseInt(this.threshold) < i)
      )
        throw new s(this);
    },
    h = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(t) < parseFloat(this.threshold)))
      )
        throw new s(this);
    },
    v = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(this.threshold) < parseFloat(t)))
      )
        throw new s(this);
    },
    g = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                t < this.threshold
              )
            )
          )
      )
        throw new s(this);
    },
    x = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                this.threshold < t
              )
            )
          )
      )
        throw new s(this);
    },
    w = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (i += t.size);
        }),
        parseInt(this.threshold) < i)
      )
        throw new s(this);
    };
  var b;
  window.swv = {
    validators: e,
    validate: (t, i, o = {}) => {
      const a = (t.rules ?? []).filter(
        ({ rule: t, ...i }) =>
          "function" == typeof e[t] &&
          ("function" != typeof e[t].matches || e[t].matches(i, o))
      );
      if (!a.length) return new Map();
      const r = new n(i);
      return a.reduce((t, i) => {
        const { rule: n, ...o } = i;
        if (t.get(o.field)?.error) return t;
        try {
          e[n].call({ rule: n, ...o }, r);
        } catch (e) {
          if (e instanceof s) return t.set(o.field, e);
        }
        return t.set(o.field, {});
      }, new Map());
    },
    ...(null !== (b = window.swv) && void 0 !== b ? b : {}),
  };
})();
var wpcf7 = {
  api: {
    root: "https://www.vueloiv.com/en/wp-json/",
    namespace: "contact-form-7/v1",
  },
  cached: "1",
};
!(function () {
  "use strict";
  const e = (e) => Math.abs(parseInt(e, 10)),
    t = (e, t) => {
      const a = new Map([
        ["init", "init"],
        ["validation_failed", "invalid"],
        ["acceptance_missing", "unaccepted"],
        ["spam", "spam"],
        ["aborted", "aborted"],
        ["mail_sent", "sent"],
        ["mail_failed", "failed"],
        ["submitting", "submitting"],
        ["resetting", "resetting"],
        ["validating", "validating"],
        ["payment_required", "payment-required"],
      ]);
      a.has(t) && (t = a.get(t)),
        Array.from(a.values()).includes(t) ||
          (t = `custom-${(t = (t = t
            .replace(/[^0-9a-z]+/i, " ")
            .trim()).replace(/\s+/, "-"))}`);
      const r = e.getAttribute("data-status");
      return (
        (e.wpcf7.status = t),
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t && e.classList.remove(r),
        t
      );
    },
    a = (e, t, a) => {
      const r = new CustomEvent(`wpcf7${t}`, { bubbles: !0, detail: a });
      "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(r);
    },
    r = (e) => {
      const { root: t, namespace: a = "contact-form-7/v1" } = wpcf7.api;
      return n.reduceRight(
        (e, t) => (a) => t(a, e),
        (e) => {
          let r,
            n,
            {
              url: o,
              path: c,
              endpoint: s,
              headers: i,
              body: l,
              data: d,
              ...p
            } = e;
          "string" == typeof s &&
            ((r = a.replace(/^\/|\/$/g, "")),
            (n = s.replace(/^\//, "")),
            (c = n ? r + "/" + n : r)),
            "string" == typeof c &&
              (-1 !== t.indexOf("?") && (c = c.replace("?", "&")),
              (c = c.replace(/^\//, "")),
              (o = t + c)),
            (i = { Accept: "application/json, */*;q=0.1", ...i }),
            delete i["X-WP-Nonce"],
            d &&
              ((l = JSON.stringify(d)),
              (i["Content-Type"] = "application/json"));
          const u = {
              code: "fetch_error",
              message: "You are probably offline.",
            },
            f = {
              code: "invalid_json",
              message: "The response is not a valid JSON response.",
            };
          return window
            .fetch(o || c || window.location.href, {
              ...p,
              headers: i,
              body: l,
            })
            .then(
              (e) =>
                Promise.resolve(e)
                  .then((e) => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e;
                  })
                  .then((e) => {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw f;
                      });
                    throw f;
                  }),
              () => {
                throw u;
              }
            );
        }
      )(e);
    },
    n = [];
  function o(e) {
    var a, r, n, o;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const l = e;
    if (void 0 === (null === (a = e.wpcf7) || void 0 === a ? void 0 : a.schema))
      return;
    const d = { ...e.wpcf7.schema };
    if (
      null === (r = i.target) ||
      void 0 === r ||
      !r.closest(".wpcf7-form-control-wrap[data-name]")
    )
      return;
    if (null !== (n = i.target) && void 0 !== n && n.closest(".novalidate"))
      return;
    const p = new FormData(),
      u = [];
    for (const e of l.querySelectorAll(".wpcf7-form-control-wrap"))
      if (
        !e.closest(".novalidate") &&
        (e
          .querySelectorAll(":where( input, textarea, select ):enabled")
          .forEach((e) => {
            if (e.name)
              switch (e.type) {
                case "button":
                case "image":
                case "reset":
                case "submit":
                  break;
                case "checkbox":
                case "radio":
                  e.checked && p.append(e.name, e.value);
                  break;
                case "select-multiple":
                  for (const t of e.selectedOptions) p.append(e.name, t.value);
                  break;
                case "file":
                  for (const t of e.files) p.append(e.name, t);
                  break;
                default:
                  p.append(e.name, e.value);
              }
          }),
        e.dataset.name &&
          (u.push(e.dataset.name),
          e.setAttribute("data-under-validation", "1"),
          e.dataset.name === i.target.name.replace(/\[.*\]$/, "")))
      )
        break;
    d.rules = (null !== (o = d.rules) && void 0 !== o ? o : []).filter((e) => {
      let { field: t } = e;
      return u.includes(t);
    });
    const f = e.getAttribute("data-status");
    Promise.resolve(t(e, "validating"))
      .then((t) => {
        if (void 0 !== swv) {
          const t = swv.validate(d, p, i);
          for (const [a, { error: r }] of t)
            s(e, a), void 0 !== r && c(e, a, r);
        }
      })
      .finally(() => {
        t(e, f),
          e
            .querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]")
            .forEach((e) => {
              e.removeAttribute("data-under-validation");
            });
      });
  }
  r.use = (e) => {
    n.unshift(e);
  };
  const c = (e, t, a) => {
      var r;
      const n = `${
          null === (r = e.wpcf7) || void 0 === r ? void 0 : r.unitTag
        }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
        o = e.querySelector(
          `.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`
        );
      (() => {
        const t = document.createElement("li");
        t.setAttribute("id", n),
          o && o.id
            ? t.insertAdjacentHTML("beforeend", `<a href="#${o.id}">${a}</a>`)
            : t.insertAdjacentText("beforeend", a),
          e.wpcf7.parent
            .querySelector(".screen-reader-response ul")
            .appendChild(t);
      })(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((t) => {
            if (
              "validating" === e.getAttribute("data-status") &&
              !t.dataset.underValidation
            )
              return;
            const r = document.createElement("span");
            r.classList.add("wpcf7-not-valid-tip"),
              r.setAttribute("aria-hidden", "true"),
              r.insertAdjacentText("beforeend", a),
              t.appendChild(r),
              t.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "true");
              }),
              t.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.classList.add("wpcf7-not-valid"),
                  e.setAttribute("aria-describedby", n),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity(a),
                  e.closest(".use-floating-validation-tip") &&
                    (e.addEventListener("focus", (e) => {
                      r.setAttribute("style", "display: none");
                    }),
                    r.addEventListener("click", (e) => {
                      r.setAttribute("style", "display: none");
                    }));
              });
          });
    },
    s = (e, t) => {
      var a, r;
      const n = `${
        null === (a = e.wpcf7) || void 0 === a ? void 0 : a.unitTag
      }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
      null ===
        (r = e.wpcf7.parent.querySelector(
          `.screen-reader-response ul li#${n}`
        )) ||
        void 0 === r ||
        r.remove(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((e) => {
            var t;
            null === (t = e.querySelector(".wpcf7-not-valid-tip")) ||
              void 0 === t ||
              t.remove(),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "false");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.removeAttribute("aria-describedby"),
                  e.classList.remove("wpcf7-not-valid"),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity("");
              });
          });
    };
  function i(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (wpcf7.blocked) return l(e), void t(e, "submitting");
    const o = new FormData(e);
    n.submitter &&
      n.submitter.name &&
      o.append(n.submitter.name, n.submitter.value);
    const s = {
      contactFormId: e.wpcf7.id,
      pluginVersion: e.wpcf7.pluginVersion,
      contactFormLocale: e.wpcf7.locale,
      unitTag: e.wpcf7.unitTag,
      containerPostId: e.wpcf7.containerPost,
      status: e.wpcf7.status,
      inputs: Array.from(o, (e) => {
        const t = e[0],
          a = e[1];
        return !t.match(/^_/) && { name: t, value: a };
      }).filter((e) => !1 !== e),
      formData: o,
    };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
      method: "POST",
      body: o,
      wpcf7: { endpoint: "feedback", form: e, detail: s },
    })
      .then((r) => {
        const n = t(e, r.status);
        return (
          (s.status = r.status),
          (s.apiResponse = r),
          ["invalid", "unaccepted", "spam", "aborted"].includes(n)
            ? a(e, n, s)
            : ["sent", "failed"].includes(n) && a(e, `mail${n}`, s),
          a(e, "submit", s),
          r
        );
      })
      .then((t) => {
        t.posted_data_hash &&
          (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
            t.posted_data_hash),
          "mail_sent" === t.status &&
            (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
          t.invalid_fields &&
            t.invalid_fields.forEach((t) => {
              c(e, t.field, t.message);
            }),
          e.wpcf7.parent
            .querySelector('.screen-reader-response [role="status"]')
            .insertAdjacentText("beforeend", t.message),
          e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
            e.innerText = t.message;
          });
      })
      .catch((e) => console.error(e));
  }
  r.use((e, r) => {
    if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
      const { form: r, detail: n } = e.wpcf7;
      l(r), a(r, "beforesubmit", n), t(r, "submitting");
    }
    return r(e);
  });
  const l = (e) => {
    e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t) => {
      t.dataset.name && s(e, t.dataset.name);
    }),
      (e.wpcf7.parent.querySelector(
        '.screen-reader-response [role="status"]'
      ).innerText = ""),
      e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
        e.innerText = "";
      });
  };
  function d(e) {
    const n = new FormData(e),
      o = {
        contactFormId: e.wpcf7.id,
        pluginVersion: e.wpcf7.pluginVersion,
        contactFormLocale: e.wpcf7.locale,
        unitTag: e.wpcf7.unitTag,
        containerPostId: e.wpcf7.containerPost,
        status: e.wpcf7.status,
        inputs: Array.from(n, (e) => {
          const t = e[0],
            a = e[1];
          return !t.match(/^_/) && { name: t, value: a };
        }).filter((e) => !1 !== e),
        formData: n,
      };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/refill`,
      method: "GET",
      wpcf7: { endpoint: "refill", form: e, detail: o },
    })
      .then((r) => {
        e.wpcf7.resetOnMailSent
          ? (delete e.wpcf7.resetOnMailSent, t(e, "mail_sent"))
          : t(e, "init"),
          (o.apiResponse = r),
          a(e, "reset", o);
      })
      .catch((e) => console.error(e));
  }
  r.use((e, a) => {
    if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
      const { form: a, detail: r } = e.wpcf7;
      l(a), t(a, "resetting");
    }
    return a(e);
  });
  const p = (e, t) => {
      for (const a in t) {
        const r = t[a];
        e.querySelectorAll(`input[name="${a}"]`).forEach((e) => {
          e.value = "";
        }),
          e
            .querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`)
            .forEach((e) => {
              e.setAttribute("src", r);
            });
        const n = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
        n &&
          e
            .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`)
            .forEach((e) => {
              e.value = n[1];
            });
      }
    },
    u = (e, t) => {
      for (const a in t) {
        const r = t[a][0],
          n = t[a][1];
        e.querySelectorAll(
          `.wpcf7-form-control-wrap[data-name="${a}"]`
        ).forEach((e) => {
          (e.querySelector(`input[name="${a}"]`).value = ""),
            (e.querySelector(".wpcf7-quiz-label").textContent = r),
            (e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value =
              n);
        });
      }
    };
  function f(t) {
    const a = new FormData(t);
    (t.wpcf7 = {
      id: e(a.get("_wpcf7")),
      status: t.getAttribute("data-status"),
      pluginVersion: a.get("_wpcf7_version"),
      locale: a.get("_wpcf7_locale"),
      unitTag: a.get("_wpcf7_unit_tag"),
      containerPost: e(a.get("_wpcf7_container_post")),
      parent: t.closest(".wpcf7"),
      schema: void 0,
    }),
      t.querySelectorAll(".has-spinner").forEach((e) => {
        e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
      }),
      ((e) => {
        e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t) => {
          t.addEventListener("change", (t) => {
            const a = t.target.getAttribute("name");
            e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach(
              (e) => {
                e !== t.target && (e.checked = !1);
              }
            );
          });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".has-free-text").forEach((t) => {
          const a = t.querySelector("input.wpcf7-free-text"),
            r = t.querySelector('input[type="checkbox"], input[type="radio"]');
          (a.disabled = !r.checked),
            e.addEventListener("change", (e) => {
              (a.disabled = !r.checked),
                e.target === r && r.checked && a.focus();
            });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".wpcf7-validates-as-url").forEach((e) => {
          e.addEventListener("change", (t) => {
            let a = e.value.trim();
            a &&
              !a.match(/^[a-z][a-z0-9.+-]*:/i) &&
              -1 !== a.indexOf(".") &&
              ((a = a.replace(/^\/+/, "")), (a = "http://" + a)),
              (e.value = a);
          });
        });
      })(t),
      ((e) => {
        if (
          !e.querySelector(".wpcf7-acceptance") ||
          e.classList.contains("wpcf7-acceptance-as-validation")
        )
          return;
        const t = () => {
          let t = !0;
          e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
            if (!t || e.classList.contains("optional")) return;
            const a = e.querySelector('input[type="checkbox"]');
            ((e.classList.contains("invert") && a.checked) ||
              (!e.classList.contains("invert") && !a.checked)) &&
              (t = !1);
          }),
            e.querySelectorAll(".wpcf7-submit").forEach((e) => {
              e.disabled = !t;
            });
        };
        t(),
          e.addEventListener("change", (e) => {
            t();
          }),
          e.addEventListener("wpcf7reset", (e) => {
            t();
          });
      })(t),
      ((t) => {
        const a = (t, a) => {
            const r = e(t.getAttribute("data-starting-value")),
              n = e(t.getAttribute("data-maximum-value")),
              o = e(t.getAttribute("data-minimum-value")),
              c = t.classList.contains("down")
                ? r - a.value.length
                : a.value.length;
            t.setAttribute("data-current-value", c),
              (t.innerText = c),
              n && n < a.value.length
                ? t.classList.add("too-long")
                : t.classList.remove("too-long"),
              o && a.value.length < o
                ? t.classList.add("too-short")
                : t.classList.remove("too-short");
          },
          r = (e) => {
            (e = { init: !1, ...e }),
              t.querySelectorAll(".wpcf7-character-count").forEach((r) => {
                const n = r.getAttribute("data-target-name"),
                  o = t.querySelector(`[name="${n}"]`);
                o &&
                  ((o.value = o.defaultValue),
                  a(r, o),
                  e.init &&
                    o.addEventListener("keyup", (e) => {
                      a(r, o);
                    }));
              });
          };
        r({ init: !0 }),
          t.addEventListener("wpcf7reset", (e) => {
            r();
          });
      })(t),
      window.addEventListener("load", (e) => {
        wpcf7.cached && t.reset();
      }),
      t.addEventListener("reset", (e) => {
        wpcf7.reset(t);
      }),
      t.addEventListener("submit", (e) => {
        wpcf7.submit(t, { submitter: e.submitter }), e.preventDefault();
      }),
      t.addEventListener("wpcf7submit", (e) => {
        e.detail.apiResponse.captcha && p(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && u(t, e.detail.apiResponse.quiz);
      }),
      t.addEventListener("wpcf7reset", (e) => {
        e.detail.apiResponse.captcha && p(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && u(t, e.detail.apiResponse.quiz);
      }),
      r({
        endpoint: `contact-forms/${t.wpcf7.id}/feedback/schema`,
        method: "GET",
      }).then((e) => {
        t.wpcf7.schema = e;
      }),
      t.addEventListener("change", (e) => {
        e.target.closest(".wpcf7-form-control") &&
          wpcf7.validate(t, { target: e.target });
      });
  }
  document.addEventListener("DOMContentLoaded", (e) => {
    var t;
    "undefined" != typeof wpcf7
      ? void 0 !== wpcf7.api
        ? "function" == typeof window.fetch
          ? "function" == typeof window.FormData
            ? "function" == typeof NodeList.prototype.forEach
              ? "function" == typeof String.prototype.replaceAll
                ? ((wpcf7 = {
                    init: f,
                    submit: i,
                    reset: d,
                    validate: o,
                    ...(null !== (t = wpcf7) && void 0 !== t ? t : {}),
                  }),
                  document.querySelectorAll(".wpcf7 > form").forEach((e) => {
                    wpcf7.init(e);
                  }))
                : console.error(
                    "Your browser does not support String.replaceAll()."
                  )
              : console.error(
                  "Your browser does not support NodeList.forEach()."
                )
            : console.error("Your browser does not support window.FormData().")
          : console.error("Your browser does not support window.fetch().")
        : console.error("wpcf7.api is not defined.")
      : console.error("wpcf7 is not defined.");
  });
})();
function gtm4wp_prepare_cf7_data(eventdata) {
  let cf7data = { formid: "(not set)", inputs: [] };
  if (eventdata && eventdata.detail && eventdata.detail.contactFormId) {
    cf7data.formid = eventdata.detail.contactFormId;
  }
  if (event && event.detail && event.detail.inputs) {
    cf7data.inputs = event.detail.inputs;
  }
  return cf7data;
}
const gtm4wp_ctf7_event_pairs = {
  wpcf7invalid: "gtm4wp.contactForm7InvalidInput",
  wpcf7spam: "gtm4wp.contactForm7SpamDetected",
  wpcf7mailsent: "gtm4wp.contactForm7MailSent",
  wpcf7mailfailed: "gtm4wp.contactForm7MailFailed",
  wpcf7submit: "gtm4wp.contactForm7Submitted",
};
(function (w, d, p) {
  for (let ctf7event in p) {
    d.addEventListener(ctf7event, function (event) {
      const cf7data = gtm4wp_prepare_cf7_data(event);
      w[gtm4wp_datalayer_name].push({
        event: p[ctf7event],
        formid: cf7data.formid,
        inputs: cf7data.inputs,
      });
    });
  }
})(window, document, gtm4wp_ctf7_event_pairs);
document.addEventListener(
  "focusin",
  function (event) {
    const elem =
      event &&
      event.target &&
      event.target.closest("input,select,textarea,button,meter,progress");
    if (elem) {
      window[gtm4wp_datalayer_name].push({
        event: "gtm4wp.formElementEnter",
        inputID: elem.getAttribute("id") || "(no input ID)",
        inputName: elem.getAttribute("name") || "(no input name)",
        inputClass: elem.getAttribute("class") || "(no input class)",
        formID: (elem.form && elem.form.getAttribute("id")) || "(no form ID)",
        formName:
          (elem.form && elem.form.getAttribute("name")) || "(no form name)",
        formClass:
          (elem.form && elem.form.getAttribute("class")) || "(no form class)",
      });
    }
  },
  !1
);
document.addEventListener(
  "focusout",
  function (event) {
    const elem =
      event &&
      event.target &&
      event.target.closest("input,select,textarea,button,meter,progress");
    if (elem) {
      window[gtm4wp_datalayer_name].push({
        event: "gtm4wp.formElementLeave",
        inputID: elem.getAttribute("id") || "(no input ID)",
        inputName: elem.getAttribute("name") || "(no input name)",
        inputClass: elem.getAttribute("class") || "(no input class)",
        formID: (elem.form && elem.form.getAttribute("id")) || "(no form ID)",
        formName:
          (elem.form && elem.form.getAttribute("name")) || "(no form name)",
        formClass:
          (elem.form && elem.form.getAttribute("class")) || "(no form class)",
      });
    }
  },
  !1
);
var __cookieLawBannerPosition = "bottom";
var __cookieLawCookiePolicyUrl = {
  ca: "/politica-de-cookies/",
  es: "/politica-de-cookies/",
  en: "/cookies/",
};
var __cookieLawTextWarning = {
  ca: "Fem servir cookies pr&ograve;pies i de tercers per millorar aquest web, recollir i analitzar dades d&acute;acc&eacute;s, incloure funcions socials i oferir publicitat basada en els seus h&agrave;bits de navegaci&oacute;. Si segueix navegant considerem que accepta. Per canviar la configuraci&oacute; i obtenir m&eacute;s informaci&oacute;:",
  es: "Utilizamos cookies propias y de terceros para mejorar esta web, recoger y analizar datos de acceso, incluir funciones sociales y mostrar publicidad basada en sus h&aacute;bitos de navegaci&oacute;n. Si contin&uacute;a navegando, consideramos que acepta. Para cambiar la configuraci&oacute;n u obtener m&aacute;s informaci&oacute;n:",
  en: "We use first and third party cokies to enhance this web, collect and analyze access data, include social functions and show ads based in your browsing behavior. If you continue browsing, we assume that you accept. To change configuration and more information:",
  fr: "Nous utilisons premier et troisi&egrave;me cokies pour am&eacute;liorer ce web, collecter et analyser les donn&egrave;es d&#39;acc&eacute;s, incluons des fonctions sociales et montrons des annonces en fonction de vos habitudes de navigation. Si vous continuer &agrave; naviguer, nous supposons que vous acceptez. Pour modifier la configuration et plus d&#39;informations:",
};
var __cokieLawTextPolCookiesName = {
  ca: "Pol&iacute;tica de cookies",
  es: "Pol&iacute;tica de cookies",
  en: "Cookies policy",
  fr: "Politique li&eacute;e aux cookies",
};
var __cokieLawTextAccept = {
  ca: "Acceptar",
  es: "Aceptar",
  en: "Accept",
  fr: "Accepter",
};
var __cokieLawTextReject = {
  ca: "Rebutjar",
  es: "Rechazar",
  en: "Reject",
  fr: "Rejeter",
};
function __getCookieLawLang() {
  console.log(window.location.href);
  if (window.location.href.indexOf("/ca/") != -1) return "ca";
  else if (window.location.href.indexOf("/es/") != -1) return "es";
  else if (window.location.href.indexOf("/en/") != -1) return "en";
  else return "es";
}
var __cookieLawBannerDivId = "cookieLawBannerId";
var __cookieLawCookieBannerShownCountName = "__cookieBannerShownCount";
var __cookieLawCookieAcceptName = "__cookieAccept";
var __cookieLawCountBeforeAccept = 3;
function __showCookieBanner() {
  var divCookieAlert = document.getElementById(__cookieLawBannerDivId);
  if (divCookieAlert == null) {
    divCookieAlert = document.createElement("div");
    divCookieAlert.id = __cookieLawBannerDivId;
    divCookieAlert.className = "cookieLawBox";
    divCookieAlert.style.width = "95%";
    divCookieAlert.style.display = "flex";
    divCookieAlert.style.justifyContent = "space-between";
    divCookieAlert.style.alignItems = "center";
    divCookieAlert.style.flexWrap = "wrap";
    divCookieAlert.style.boxSizing = "border-box";
    divCookieAlert.style.padding = "10px 10px 10px 10px";
    divCookieAlert.style.position = "fixed";
    if (__cookieLawBannerPosition == "top") {
      divCookieAlert.style.top = "0px";
    } else if (__cookieLawBannerPosition == "bottom") {
      divCookieAlert.style.bottom = "10px";
    }
    divCookieAlert.style.left = "0px";
    divCookieAlert.style.right = "0px";
    divCookieAlert.innerHTML +=
      '<div class="small-12 medium-10 large-10 columns" style="margint-top: 20px">' +
      __cookieLawTextWarning[__getCookieLawLang()] +
      " <button class=\"cookieLawAnchor button tiny clear white no-external-link\" onclick='javascript:__doCookieLawInfo()'>" +
      __cokieLawTextPolCookiesName[__getCookieLawLang()] +
      "</button></div>";
    divCookieAlert.innerHTML +=
      '<div class="small-12 medium-2 large-2 columns" style="display: flex; margin-top: 20px; justify-content:center;align-items:center"><button class="cookieLawButton  cookieLawButtonAccept button white no-external-link" style="margin:6px; float: right; " onclick=\'javascript:__doCookieLawAccept()\'>' +
      __cokieLawTextAccept[__getCookieLawLang()] +
      '</button><button class="cookieLawButton cookieLawButtonAccept button white hollow no-external-link" style="margin:6px; float: right; " onclick=\'javascript:__doCookieLawDeny()\'>' +
      __cokieLawTextReject[__getCookieLawLang()] +
      "</button></div>";
    document.body.appendChild(divCookieAlert);
  }
}
function __hideCookieBanner() {
  var divCookieAlert = document.getElementById(__cookieLawBannerDivId);
  if (divCookieAlert != null) {
    divCookieAlert.parentNode.removeChild(divCookieAlert);
  }
}
function __isVisibleCookieBanner() {
  var divCookieAlert = document.getElementById(__cookieLawBannerDivId);
  if (divCookieAlert != null) return !0;
  else return !1;
}
function __doCookieLawInfo() {
  document.location = __cookieLawCookiePolicyUrl[__getCookieLawLang()];
}
function __doCookieLawAccept() {
  __saveCookieValue(__cookieLawCookieAcceptName, "accepted", 31536000000, "/");
  __deleteCookieJs(__cookieLawCookieBannerShownCountName);
  __hideCookieBanner();
}
function __doCookieLawAcceptInferred() {
  __saveCookieValue(__cookieLawCookieAcceptName, "accepted", 0, "/");
  __deleteCookieJs(__cookieLawCookieBannerShownCountName);
  __hideCookieBanner();
}
function __doCookieLawDeny() {
  __saveCookieValue(__cookieLawCookieAcceptName, "denied", 0, "/");
  __hideCookieBanner();
}
function __doCookieLawDenyAndExit() {
  __deleteAllCookiesJs();
  document.body.innerHTML = "";
}
function __doCookieClose() {
  __hideCookieBanner();
}
function __bodyAlert(textToAlert) {
  var auxAlertP = document.createElement("p");
  auxAlertP.innerHTML = "[" + new Date() + " " + textToAlert + "]";
  document.body.appendChild(auxAlertP);
}
function __getScrollX() {
  var auxX =
    window.pageXOffset !== undefined
      ? window.pageXOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollLeft;
  return auxX;
}
function __getScrollY() {
  var auxY =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  return auxY;
}
function __retrieveCookieValue(cookieName) {
  var auxCookiesString = document.cookie;
  var arrMatches = auxCookiesString.split(";");
  for (var i = 0; arrMatches != null && i < arrMatches.length; i++) {
    if (arrMatches[i] != null && arrMatches[i].indexOf("=") != -1) {
      var auxCookieName = arrMatches[i].substring(
        0,
        arrMatches[i].indexOf("=")
      );
      auxCookieName = cookieNameTrim(auxCookieName);
      var auxCookieValue = arrMatches[i].substring(
        arrMatches[i].indexOf("=") + 1
      );
      if (auxCookieName == cookieName) {
        return auxCookieValue;
      }
    }
  }
  return null;
}
function __saveCookieValue(cookieName, cookieValue) {
  document.cookie = cookieName + "=" + cookieValue;
}
function __saveCookieValue(
  cookieName,
  cookieValue,
  cookieExpirationMilisFromNow
) {
  if (cookieExpirationMilisFromNow == 0) {
    document.cookie = cookieName + "=" + cookieValue + "; expires=0";
  } else {
    var auxDate = new Date();
    var auxTime = auxDate.getTime();
    auxTime = auxTime + cookieExpirationMilisFromNow;
    auxDate.setTime(auxTime);
    document.cookie =
      cookieName + "=" + cookieValue + "; expires=" + auxDate.toGMTString();
  }
}
function __saveCookieValue(
  cookieName,
  cookieValue,
  cookieExpirationMilisFromNow,
  cookiePath
) {
  if (cookieExpirationMilisFromNow == 0) {
    document.cookie =
      cookieName + "=" + cookieValue + "; expires=0; path=" + cookiePath;
  } else {
    var auxDate = new Date();
    var auxTime = auxDate.getTime();
    auxTime = auxTime + cookieExpirationMilisFromNow;
    auxDate.setTime(auxTime);
    document.cookie =
      cookieName +
      "=" +
      cookieValue +
      "; expires=" +
      auxDate.toGMTString() +
      "; path=" +
      cookiePath;
  }
}
function cookieNameTrim(s) {
  if (typeof s === "undefined") return s;
  if (s == null) return s;
  var ret = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) != " ") ret = ret + s.charAt(i);
  }
  return ret;
}
function __deleteAllCookiesJs() {
  alert("borrando..." + document.cookie);
  var auxCookieSplit = document.cookie.split(";");
  for (var i = 0; i < auxCookieSplit.length; i++) {
    var auxCookieName = auxCookieSplit[i].substring(
      0,
      auxCookieSplit[i].indexOf("=")
    );
    auxCookieName = cookieNameTrim(auxCookieName);
    __deleteCookieJs(auxCookieName);
  }
}
function __deleteCookieJs(cookieName) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
  var auxDomain = document.domain;
  var auxSubdomain = auxDomain;
  if (auxSubdomain.indexOf(".") != -1)
    auxSubdomain = auxSubdomain.substring(auxSubdomain.indexOf(".") + 1);
  document.cookie =
    cookieName +
    "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain = " +
    auxSubdomain;
}
function __checkCookiesEnabled() {
  var retCookieEnabled = navigator.cookieEnabled ? !0 : !1;
  if (typeof navigator.cookieEnabled == "undefined" && !retCookieEnabled) {
    document.cookie = "__auxTestCookie";
    retCookieEnabled =
      document.cookie.indexOf("__auxTestCookie") != -1 ? !0 : !1;
    __deleteCookieJs("__auxTestCookie");
  }
  return retCookieEnabled;
}
function __setOrUpdateCookieBannerShownCount() {
  var auxCount = __retrieveCookieValue(__cookieLawCookieBannerShownCountName);
  if (auxCount == null || isNaN(auxCount)) {
    __saveCookieValue(
      __cookieLawCookieBannerShownCountName,
      "" + __cookieLawCountBeforeAccept,
      0,
      "/"
    );
  } else {
    var auxCountNum = parseInt(auxCount);
    auxCountNum = auxCountNum - 1;
    __saveCookieValue(
      __cookieLawCookieBannerShownCountName,
      "" + auxCountNum,
      0,
      "/"
    );
  }
}
function __testCookieBannerShownCountExceded() {
  var auxCount = __retrieveCookieValue(__cookieLawCookieBannerShownCountName);
  if (auxCount == null) {
    return !1;
  } else if (isNaN(auxCount)) {
    return !1;
  } else {
    if (auxCount > 0) {
      return !1;
    } else {
      return !0;
    }
  }
}
function __checkCookieLawExists() {
  var auxCookie = __retrieveCookieValue(__cookieLawCookieAcceptName);
  if (auxCookie != null && (auxCookie == "accepted" || auxCookie == "denied")) {
    return !0;
  }
  return !1;
}
function __checkCookieLawAccepted() {
  var auxCookie = __retrieveCookieValue(__cookieLawCookieAcceptName);
  if (auxCookie != null && auxCookie == "accepted") {
    return !0;
  }
  return !1;
}
function __checkCookieLawDenied() {
  var auxCookie = __retrieveCookieValue(__cookieLawCookieAcceptName);
  if (auxCookie != null && auxCookie == "denied") {
    return !0;
  }
  return !1;
}
if (__checkCookiesEnabled()) {
  if (__checkCookieLawExists() == !1) {
    __setOrUpdateCookieBannerShownCount();
    if (__testCookieBannerShownCountExceded()) {
      __doCookieLawAcceptInferred();
    } else {
      setTimeout(function () {
        __showCookieBanner();
      }, 7000);
    }
  }
}
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.0.6
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("whatInput", [], t)
    : "object" == typeof exports
    ? (exports.whatInput = t())
    : (e.whatInput = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = ""), t(0);
  })([
    function (e, t) {
      e.exports = (function () {
        var e = document.documentElement,
          t = "initial",
          n = null,
          o = ["input", "select", "textarea"],
          i = [16, 17, 18, 91, 93],
          r = {
            keyup: "keyboard",
            mousedown: "mouse",
            mousemove: "mouse",
            MSPointerDown: "pointer",
            MSPointerMove: "pointer",
            pointerdown: "pointer",
            pointermove: "pointer",
            touchstart: "touch",
          },
          u = [],
          d = !1,
          a = { 2: "touch", 3: "touch", 4: "mouse" },
          p = null,
          s = function () {
            (r[h()] = "mouse"), c(), m();
          },
          c = function () {
            window.PointerEvent
              ? (e.addEventListener("pointerdown", f),
                e.addEventListener("pointermove", w))
              : window.MSPointerEvent
              ? (e.addEventListener("MSPointerDown", f),
                e.addEventListener("MSPointerMove", w))
              : (e.addEventListener("mousedown", f),
                e.addEventListener("mousemove", w),
                "ontouchstart" in window &&
                  e.addEventListener("touchstart", v)),
              e.addEventListener(h(), w),
              e.addEventListener("keydown", f),
              e.addEventListener("keyup", f);
          },
          f = function (e) {
            if (!d) {
              var u = e.which,
                a = r[e.type];
              if (("pointer" === a && (a = l(e)), t !== a || n !== a)) {
                var p = document.activeElement,
                  s = !(
                    !p ||
                    !p.nodeName ||
                    o.indexOf(p.nodeName.toLowerCase()) !== -1
                  );
                ("touch" === a ||
                  ("mouse" === a && i.indexOf(u) === -1) ||
                  ("keyboard" === a && s)) &&
                  ((t = n = a), m());
              }
            }
          },
          m = function () {
            e.setAttribute("data-whatinput", t),
              e.setAttribute("data-whatintent", t),
              u.indexOf(t) === -1 &&
                (u.push(t), (e.className += " whatinput-types-" + t));
          },
          w = function (t) {
            if (!d) {
              var o = r[t.type];
              "pointer" === o && (o = l(t)),
                n !== o && ((n = o), e.setAttribute("data-whatintent", n));
            }
          },
          v = function (e) {
            window.clearTimeout(p),
              f(e),
              (d = !0),
              (p = window.setTimeout(function () {
                d = !1;
              }, 200));
          },
          l = function (e) {
            return "number" == typeof e.pointerType
              ? a[e.pointerType]
              : "pen" === e.pointerType
              ? "touch"
              : e.pointerType;
          },
          h = function () {
            return "onwheel" in document.createElement("div")
              ? "wheel"
              : void 0 !== document.onmousewheel
              ? "mousewheel"
              : "DOMMouseScroll";
          };
        return (
          "addEventListener" in window && Array.prototype.indexOf && s(),
          {
            ask: function (e) {
              return "loose" === e ? n : t;
            },
            types: function () {
              return u;
            },
          }
        );
      })();
    },
  ]);
});
("use strict");
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
!(function (t) {
  function e(t) {
    if (void 0 === Function.prototype.name) {
      var e = /function\s([^(]{1,})\(/,
        i = e.exec(t.toString());
      return i && i.length > 1 ? i[1].trim() : "";
    }
    return void 0 === t.prototype
      ? t.constructor.name
      : t.prototype.constructor.name;
  }
  function i(t) {
    return (
      "true" === t || ("false" !== t && (isNaN(1 * t) ? t : parseFloat(t)))
    );
  }
  function n(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  var s = "6.3.1",
    o = {
      version: s,
      _plugins: {},
      _uuids: [],
      rtl: function () {
        return "rtl" === t("html").attr("dir");
      },
      plugin: function (t, i) {
        var s = i || e(t),
          o = n(s);
        this._plugins[o] = this[s] = t;
      },
      registerPlugin: function (t, i) {
        var s = i ? n(i) : e(t.constructor).toLowerCase();
        (t.uuid = this.GetYoDigits(6, s)),
          t.$element.attr("data-" + s) || t.$element.attr("data-" + s, t.uuid),
          t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t),
          t.$element.trigger("init.zf." + s),
          this._uuids.push(t.uuid);
      },
      unregisterPlugin: function (t) {
        var i = n(e(t.$element.data("zfPlugin").constructor));
        this._uuids.splice(this._uuids.indexOf(t.uuid), 1),
          t.$element
            .removeAttr("data-" + i)
            .removeData("zfPlugin")
            .trigger("destroyed.zf." + i);
        for (var s in t) t[s] = null;
      },
      reInit: function (e) {
        var i = e instanceof t;
        try {
          if (i)
            e.each(function () {
              t(this).data("zfPlugin")._init();
            });
          else {
            var s = "undefined" == typeof e ? "undefined" : _typeof(e),
              o = this,
              a = {
                object: function (e) {
                  e.forEach(function (e) {
                    (e = n(e)), t("[data-" + e + "]").foundation("_init");
                  });
                },
                string: function () {
                  (e = n(e)), t("[data-" + e + "]").foundation("_init");
                },
                undefined: function () {
                  this.object(Object.keys(o._plugins));
                },
              };
            a[s](e);
          }
        } catch (r) {
          console.error(r);
        } finally {
          return e;
        }
      },
      GetYoDigits: function (t, e) {
        return (
          (t = t || 6),
          Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t))
            .toString(36)
            .slice(1) + (e ? "-" + e : "")
        );
      },
      reflow: function (e, n) {
        "undefined" == typeof n
          ? (n = Object.keys(this._plugins))
          : "string" == typeof n && (n = [n]);
        var s = this;
        t.each(n, function (n, o) {
          var a = s._plugins[o],
            r = t(e)
              .find("[data-" + o + "]")
              .addBack("[data-" + o + "]");
          r.each(function () {
            var e = t(this),
              n = {};
            if (e.data("zfPlugin"))
              return void console.warn(
                "Tried to initialize " +
                  o +
                  " on an element that already has a Foundation plugin."
              );
            if (e.attr("data-options")) {
              e.attr("data-options")
                .split(";")
                .forEach(function (t, e) {
                  var s = t.split(":").map(function (t) {
                    return t.trim();
                  });
                  s[0] && (n[s[0]] = i(s[1]));
                });
            }
            try {
              e.data("zfPlugin", new a(t(this), n));
            } catch (s) {
              console.error(s);
            } finally {
              return;
            }
          });
        });
      },
      getFnName: e,
      transitionend: function (t) {
        var e,
          i = {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
          },
          n = document.createElement("div");
        for (var s in i) "undefined" != typeof n.style[s] && (e = i[s]);
        return e
          ? e
          : ((e = setTimeout(function () {
              t.triggerHandler("transitionend", [t]);
            }, 1)),
            "transitionend");
      },
    };
  o.util = {
    throttle: function (t, e) {
      var i = null;
      return function () {
        var n = this,
          s = arguments;
        null === i &&
          (i = setTimeout(function () {
            t.apply(n, s), (i = null);
          }, e));
      };
    },
  };
  var a = function (i) {
    var n = "undefined" == typeof i ? "undefined" : _typeof(i),
      s = t("meta.foundation-mq"),
      a = t(".no-js");
    if (
      (s.length || t('<meta class="foundation-mq">').appendTo(document.head),
      a.length && a.removeClass("no-js"),
      "undefined" === n)
    )
      o.MediaQuery._init(), o.reflow(this);
    else {
      if ("string" !== n)
        throw new TypeError(
          "We're sorry, " +
            n +
            " is not a valid parameter. You must use a string representing the method you wish to invoke."
        );
      var r = Array.prototype.slice.call(arguments, 1),
        l = this.data("zfPlugin");
      if (void 0 === l || void 0 === l[i])
        throw new ReferenceError(
          "We're sorry, '" +
            i +
            "' is not an available method for " +
            (l ? e(l) : "this element") +
            "."
        );
      1 === this.length
        ? l[i].apply(l, r)
        : this.each(function (e, n) {
            l[i].apply(t(n).data("zfPlugin"), r);
          });
    }
    return this;
  };
  (window.Foundation = o),
    (t.fn.foundation = a),
    (function () {
      (Date.now && window.Date.now) ||
        (window.Date.now = Date.now =
          function () {
            return new Date().getTime();
          });
      for (
        var t = ["webkit", "moz"], e = 0;
        e < t.length && !window.requestAnimationFrame;
        ++e
      ) {
        var i = t[e];
        (window.requestAnimationFrame = window[i + "RequestAnimationFrame"]),
          (window.cancelAnimationFrame =
            window[i + "CancelAnimationFrame"] ||
            window[i + "CancelRequestAnimationFrame"]);
      }
      if (
        /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) ||
        !window.requestAnimationFrame ||
        !window.cancelAnimationFrame
      ) {
        var n = 0;
        (window.requestAnimationFrame = function (t) {
          var e = Date.now(),
            i = Math.max(n + 16, e);
          return setTimeout(function () {
            t((n = i));
          }, i - e);
        }),
          (window.cancelAnimationFrame = clearTimeout);
      }
      (window.performance && window.performance.now) ||
        (window.performance = {
          start: Date.now(),
          now: function () {
            return Date.now() - this.start;
          },
        });
    })(),
    Function.prototype.bind ||
      (Function.prototype.bind = function (t) {
        if ("function" != typeof this)
          throw new TypeError(
            "Function.prototype.bind - what is trying to be bound is not callable"
          );
        var e = Array.prototype.slice.call(arguments, 1),
          i = this,
          n = function () {},
          s = function () {
            return i.apply(
              this instanceof n ? this : t,
              e.concat(Array.prototype.slice.call(arguments))
            );
          };
        return (
          this.prototype && (n.prototype = this.prototype),
          (s.prototype = new n()),
          s
        );
      });
})(jQuery),
  !(function (t) {
    function e(t, e, n, s) {
      var o,
        a,
        r,
        l,
        h = i(t);
      if (e) {
        var u = i(e);
        (a = h.offset.top + h.height <= u.height + u.offset.top),
          (o = h.offset.top >= u.offset.top),
          (r = h.offset.left >= u.offset.left),
          (l = h.offset.left + h.width <= u.width + u.offset.left);
      } else
        (a =
          h.offset.top + h.height <=
          h.windowDims.height + h.windowDims.offset.top),
          (o = h.offset.top >= h.windowDims.offset.top),
          (r = h.offset.left >= h.windowDims.offset.left),
          (l = h.offset.left + h.width <= h.windowDims.width);
      var d = [a, o, r, l];
      return n ? (r === l) == !0 : s ? (o === a) == !0 : d.indexOf(!1) === -1;
    }
    function i(t, e) {
      if (((t = t.length ? t[0] : t), t === window || t === document))
        throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
      var i = t.getBoundingClientRect(),
        n = t.parentNode.getBoundingClientRect(),
        s = document.body.getBoundingClientRect(),
        o = window.pageYOffset,
        a = window.pageXOffset;
      return {
        width: i.width,
        height: i.height,
        offset: { top: i.top + o, left: i.left + a },
        parentDims: {
          width: n.width,
          height: n.height,
          offset: { top: n.top + o, left: n.left + a },
        },
        windowDims: {
          width: s.width,
          height: s.height,
          offset: { top: o, left: a },
        },
      };
    }
    function n(t, e, n, s, o, a) {
      var r = i(t),
        l = e ? i(e) : null;
      switch (n) {
        case "top":
          return {
            left: Foundation.rtl()
              ? l.offset.left - r.width + l.width
              : l.offset.left,
            top: l.offset.top - (r.height + s),
          };
        case "left":
          return { left: l.offset.left - (r.width + o), top: l.offset.top };
        case "right":
          return { left: l.offset.left + l.width + o, top: l.offset.top };
        case "center top":
          return {
            left: l.offset.left + l.width / 2 - r.width / 2,
            top: l.offset.top - (r.height + s),
          };
        case "center bottom":
          return {
            left: a ? o : l.offset.left + l.width / 2 - r.width / 2,
            top: l.offset.top + l.height + s,
          };
        case "center left":
          return {
            left: l.offset.left - (r.width + o),
            top: l.offset.top + l.height / 2 - r.height / 2,
          };
        case "center right":
          return {
            left: l.offset.left + l.width + o + 1,
            top: l.offset.top + l.height / 2 - r.height / 2,
          };
        case "center":
          return {
            left:
              r.windowDims.offset.left + r.windowDims.width / 2 - r.width / 2,
            top:
              r.windowDims.offset.top + r.windowDims.height / 2 - r.height / 2,
          };
        case "reveal":
          return {
            left: (r.windowDims.width - r.width) / 2,
            top: r.windowDims.offset.top + s,
          };
        case "reveal full":
          return {
            left: r.windowDims.offset.left,
            top: r.windowDims.offset.top,
          };
        case "left bottom":
          return { left: l.offset.left, top: l.offset.top + l.height + s };
        case "right bottom":
          return {
            left: l.offset.left + l.width + o - r.width,
            top: l.offset.top + l.height + s,
          };
        default:
          return {
            left: Foundation.rtl()
              ? l.offset.left - r.width + l.width
              : l.offset.left + o,
            top: l.offset.top + l.height + s,
          };
      }
    }
    Foundation.Box = { ImNotTouchingYou: e, GetDimensions: i, GetOffsets: n };
  })(jQuery),
  !(function (t) {
    function e(t) {
      var e = {};
      for (var i in t) e[t[i]] = t[i];
      return e;
    }
    var i = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN",
      },
      n = {},
      s = {
        keys: e(i),
        parseKey: function (t) {
          var e =
            i[t.which || t.keyCode] ||
            String.fromCharCode(t.which).toUpperCase();
          return (
            (e = e.replace(/\W+/, "")),
            t.shiftKey && (e = "SHIFT_" + e),
            t.ctrlKey && (e = "CTRL_" + e),
            t.altKey && (e = "ALT_" + e),
            (e = e.replace(/_$/, ""))
          );
        },
        handleKey: function (e, i, s) {
          var o,
            a,
            r,
            l = n[i],
            h = this.parseKey(e);
          if (!l) return console.warn("Component not defined!");
          if (
            ((o =
              "undefined" == typeof l.ltr
                ? l
                : Foundation.rtl()
                ? t.extend({}, l.ltr, l.rtl)
                : t.extend({}, l.rtl, l.ltr)),
            (a = o[h]),
            (r = s[a]),
            r && "function" == typeof r)
          ) {
            var u = r.apply();
            (s.handled || "function" == typeof s.handled) && s.handled(u);
          } else
            (s.unhandled || "function" == typeof s.unhandled) && s.unhandled();
        },
        findFocusable: function (e) {
          return (
            !!e &&
            e
              .find(
                "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
              )
              .filter(function () {
                return !(
                  !t(this).is(":visible") || t(this).attr("tabindex") < 0
                );
              })
          );
        },
        register: function (t, e) {
          n[t] = e;
        },
        trapFocus: function (t) {
          var e = Foundation.Keyboard.findFocusable(t),
            i = e.eq(0),
            n = e.eq(-1);
          t.on("keydown.zf.trapfocus", function (t) {
            t.target === n[0] && "TAB" === Foundation.Keyboard.parseKey(t)
              ? (t.preventDefault(), i.focus())
              : t.target === i[0] &&
                "SHIFT_TAB" === Foundation.Keyboard.parseKey(t) &&
                (t.preventDefault(), n.focus());
          });
        },
        releaseFocus: function (t) {
          t.off("keydown.zf.trapfocus");
        },
      };
    Foundation.Keyboard = s;
  })(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
!(function (t) {
  function e(t) {
    var e = {};
    return "string" != typeof t
      ? e
      : (t = t.trim().slice(1, -1))
      ? (e = t.split("&").reduce(function (t, e) {
          var i = e.replace(/\+/g, " ").split("="),
            n = i[0],
            s = i[1];
          return (
            (n = decodeURIComponent(n)),
            (s = void 0 === s ? null : decodeURIComponent(s)),
            t.hasOwnProperty(n)
              ? Array.isArray(t[n])
                ? t[n].push(s)
                : (t[n] = [t[n], s])
              : (t[n] = s),
            t
          );
        }, {}))
      : e;
  }
  var i = {
    queries: [],
    current: "",
    _init: function () {
      var i,
        n = this,
        s = t(".foundation-mq").css("font-family");
      i = e(s);
      for (var o in i)
        i.hasOwnProperty(o) &&
          n.queries.push({
            name: o,
            value: "only screen and (min-width: " + i[o] + ")",
          });
      (this.current = this._getCurrentSize()), this._watcher();
    },
    atLeast: function (t) {
      var e = this.get(t);
      return !!e && window.matchMedia(e).matches;
    },
    is: function (t) {
      return (
        (t = t.trim().split(" ")),
        t.length > 1 && "only" === t[1]
          ? t[0] === this._getCurrentSize()
          : this.atLeast(t[0])
      );
    },
    get: function (t) {
      for (var e in this.queries)
        if (this.queries.hasOwnProperty(e)) {
          var i = this.queries[e];
          if (t === i.name) return i.value;
        }
      return null;
    },
    _getCurrentSize: function () {
      for (var t, e = 0; e < this.queries.length; e++) {
        var i = this.queries[e];
        window.matchMedia(i.value).matches && (t = i);
      }
      return "object" === ("undefined" == typeof t ? "undefined" : _typeof(t))
        ? t.name
        : t;
    },
    _watcher: function () {
      var e = this;
      t(window).on("resize.zf.mediaquery", function () {
        var i = e._getCurrentSize(),
          n = e.current;
        i !== n &&
          ((e.current = i), t(window).trigger("changed.zf.mediaquery", [i, n]));
      });
    },
  };
  (Foundation.MediaQuery = i),
    window.matchMedia ||
      (window.matchMedia = (function () {
        var t = window.styleMedia || window.media;
        if (!t) {
          var e = document.createElement("style"),
            i = document.getElementsByTagName("script")[0],
            n = null;
          (e.type = "text/css"),
            (e.id = "matchmediajs-test"),
            i && i.parentNode && i.parentNode.insertBefore(e, i),
            (n =
              ("getComputedStyle" in window &&
                window.getComputedStyle(e, null)) ||
              e.currentStyle),
            (t = {
              matchMedium: function (t) {
                var i =
                  "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                return (
                  e.styleSheet
                    ? (e.styleSheet.cssText = i)
                    : (e.textContent = i),
                  "1px" === n.width
                );
              },
            });
        }
        return function (e) {
          return { matches: t.matchMedium(e || "all"), media: e || "all" };
        };
      })()),
    (Foundation.MediaQuery = i);
})(jQuery),
  !(function (t) {
    function e(t, e, i) {
      function n(r) {
        a || (a = r),
          (o = r - a),
          i.apply(e),
          o < t
            ? (s = window.requestAnimationFrame(n, e))
            : (window.cancelAnimationFrame(s),
              e
                .trigger("finished.zf.animate", [e])
                .triggerHandler("finished.zf.animate", [e]));
      }
      var s,
        o,
        a = null;
      return 0 === t
        ? (i.apply(e),
          void e
            .trigger("finished.zf.animate", [e])
            .triggerHandler("finished.zf.animate", [e]))
        : void (s = window.requestAnimationFrame(n));
    }
    function i(e, i, o, a) {
      function r() {
        e || i.hide(), l(), a && a.apply(i);
      }
      function l() {
        (i[0].style.transitionDuration = 0),
          i.removeClass(h + " " + u + " " + o);
      }
      if (((i = t(i).eq(0)), i.length)) {
        var h = e ? n[0] : n[1],
          u = e ? s[0] : s[1];
        l(),
          i.addClass(o).css("transition", "none"),
          requestAnimationFrame(function () {
            i.addClass(h), e && i.show();
          }),
          requestAnimationFrame(function () {
            i[0].offsetWidth, i.css("transition", "").addClass(u);
          }),
          i.one(Foundation.transitionend(i), r);
      }
    }
    var n = ["mui-enter", "mui-leave"],
      s = ["mui-enter-active", "mui-leave-active"],
      o = {
        animateIn: function (t, e, n) {
          i(!0, t, e, n);
        },
        animateOut: function (t, e, n) {
          i(!1, t, e, n);
        },
      };
    (Foundation.Move = e), (Foundation.Motion = o);
  })(jQuery),
  !(function (t) {
    var e = {
      Feather: function (e) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
        e.attr("role", "menubar");
        var n = e.find("li").attr({ role: "menuitem" }),
          s = "is-" + i + "-submenu",
          o = s + "-item",
          a = "is-" + i + "-submenu-parent";
        n.each(function () {
          var e = t(this),
            n = e.children("ul");
          n.length &&
            (e
              .addClass(a)
              .attr({
                "aria-haspopup": !0,
                "aria-label": e.children("a:first").text(),
              }),
            "drilldown" === i && e.attr({ "aria-expanded": !1 }),
            n
              .addClass("submenu " + s)
              .attr({ "data-submenu": "", role: "menu" }),
            "drilldown" === i && n.attr({ "aria-hidden": !0 })),
            e.parent("[data-submenu]").length &&
              e.addClass("is-submenu-item " + o);
        });
      },
      Burn: function (t, e) {
        var i = "is-" + e + "-submenu",
          n = i + "-item",
          s = "is-" + e + "-submenu-parent";
        t.find(">li, .menu, .menu > li")
          .removeClass(
            i + " " + n + " " + s + " is-submenu-item submenu is-active"
          )
          .removeAttr("data-submenu")
          .css("display", "");
      },
    };
    Foundation.Nest = e;
  })(jQuery),
  !(function (t) {
    function e(t, e, i) {
      var n,
        s,
        o = this,
        a = e.duration,
        r = Object.keys(t.data())[0] || "timer",
        l = -1;
      (this.isPaused = !1),
        (this.restart = function () {
          (l = -1), clearTimeout(s), this.start();
        }),
        (this.start = function () {
          (this.isPaused = !1),
            clearTimeout(s),
            (l = l <= 0 ? a : l),
            t.data("paused", !1),
            (n = Date.now()),
            (s = setTimeout(function () {
              e.infinite && o.restart(), i && "function" == typeof i && i();
            }, l)),
            t.trigger("timerstart.zf." + r);
        }),
        (this.pause = function () {
          (this.isPaused = !0), clearTimeout(s), t.data("paused", !0);
          var e = Date.now();
          (l -= e - n), t.trigger("timerpaused.zf." + r);
        });
    }
    function i(e, i) {
      function n() {
        s--, 0 === s && i();
      }
      var s = e.length;
      0 === s && i(),
        e.each(function () {
          if (
            this.complete ||
            4 === this.readyState ||
            "complete" === this.readyState
          )
            n();
          else {
            var e = t(this).attr("src");
            t(this).attr(
              "src",
              e + (e.indexOf("?") >= 0 ? "&" : "?") + new Date().getTime()
            ),
              t(this).one("load", function () {
                n();
              });
          }
        });
    }
    (Foundation.Timer = e), (Foundation.onImagesLoaded = i);
  })(jQuery),
  (function (t) {
    function e() {
      this.removeEventListener("touchmove", i),
        this.removeEventListener("touchend", e),
        (h = !1);
    }
    function i(i) {
      if ((t.spotSwipe.preventDefault && i.preventDefault(), h)) {
        var n,
          s = i.touches[0].pageX,
          a = (i.touches[0].pageY, o - s);
        (l = new Date().getTime() - r),
          Math.abs(a) >= t.spotSwipe.moveThreshold &&
            l <= t.spotSwipe.timeThreshold &&
            (n = a > 0 ? "left" : "right"),
          n &&
            (i.preventDefault(),
            e.call(this),
            t(this)
              .trigger("swipe", n)
              .trigger("swipe" + n));
      }
    }
    function n(t) {
      1 == t.touches.length &&
        ((o = t.touches[0].pageX),
        (a = t.touches[0].pageY),
        (h = !0),
        (r = new Date().getTime()),
        this.addEventListener("touchmove", i, !1),
        this.addEventListener("touchend", e, !1));
    }
    function s() {
      this.addEventListener && this.addEventListener("touchstart", n, !1);
    }
    t.spotSwipe = {
      version: "1.0.0",
      enabled: "ontouchstart" in document.documentElement,
      preventDefault: !1,
      moveThreshold: 75,
      timeThreshold: 200,
    };
    var o,
      a,
      r,
      l,
      h = !1;
    (t.event.special.swipe = { setup: s }),
      t.each(["left", "up", "down", "right"], function () {
        t.event.special["swipe" + this] = {
          setup: function () {
            t(this).on("swipe", t.noop);
          },
        };
      });
  })(jQuery),
  !(function (t) {
    t.fn.addTouch = function () {
      this.each(function (i, n) {
        t(n).bind("touchstart touchmove touchend touchcancel", function () {
          e(event);
        });
      });
      var e = function (t) {
        var e,
          i = t.changedTouches,
          n = i[0],
          s = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
          },
          o = s[t.type];
        "MouseEvent" in window && "function" == typeof window.MouseEvent
          ? (e = new window.MouseEvent(o, {
              bubbles: !0,
              cancelable: !0,
              screenX: n.screenX,
              screenY: n.screenY,
              clientX: n.clientX,
              clientY: n.clientY,
            }))
          : ((e = document.createEvent("MouseEvent")),
            e.initMouseEvent(
              o,
              !0,
              !0,
              window,
              1,
              n.screenX,
              n.screenY,
              n.clientX,
              n.clientY,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            )),
          n.target.dispatchEvent(e);
      };
    };
  })(jQuery);
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
!(function (t) {
  function e() {
    o(), n(), s(), i();
  }
  function i(e) {
    var i = t("[data-yeti-box]"),
      n = ["dropdown", "tooltip", "reveal"];
    if (
      (e &&
        ("string" == typeof e
          ? n.push(e)
          : "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) &&
            "string" == typeof e[0]
          ? n.concat(e)
          : console.error("Plugin names must be strings")),
      i.length)
    ) {
      var s = n
        .map(function (t) {
          return "closeme.zf." + t;
        })
        .join(" ");
      t(window)
        .off(s)
        .on(s, function (e, i) {
          var n = e.namespace.split(".")[0],
            s = t("[data-" + n + "]").not('[data-yeti-box="' + i + '"]');
          s.each(function () {
            var e = t(this);
            e.triggerHandler("close.zf.trigger", [e]);
          });
        });
    }
  }
  function n(e) {
    var i = void 0,
      n = t("[data-resize]");
    n.length &&
      t(window)
        .off("resize.zf.trigger")
        .on("resize.zf.trigger", function (s) {
          i && clearTimeout(i),
            (i = setTimeout(function () {
              a ||
                n.each(function () {
                  t(this).triggerHandler("resizeme.zf.trigger");
                }),
                n.attr("data-events", "resize");
            }, e || 10));
        });
  }
  function s(e) {
    var i = void 0,
      n = t("[data-scroll]");
    n.length &&
      t(window)
        .off("scroll.zf.trigger")
        .on("scroll.zf.trigger", function (s) {
          i && clearTimeout(i),
            (i = setTimeout(function () {
              a ||
                n.each(function () {
                  t(this).triggerHandler("scrollme.zf.trigger");
                }),
                n.attr("data-events", "scroll");
            }, e || 10));
        });
  }
  function o() {
    if (!a) return !1;
    var e = document.querySelectorAll(
        "[data-resize], [data-scroll], [data-mutate]"
      ),
      i = function (e) {
        var i = t(e[0].target);
        switch (e[0].type) {
          case "attributes":
            "scroll" === i.attr("data-events") &&
              "data-events" === e[0].attributeName &&
              i.triggerHandler("scrollme.zf.trigger", [i, window.pageYOffset]),
              "resize" === i.attr("data-events") &&
                "data-events" === e[0].attributeName &&
                i.triggerHandler("resizeme.zf.trigger", [i]),
              "style" === e[0].attributeName &&
                (i.closest("[data-mutate]").attr("data-events", "mutate"),
                i
                  .closest("[data-mutate]")
                  .triggerHandler("mutateme.zf.trigger", [
                    i.closest("[data-mutate]"),
                  ]));
            break;
          case "childList":
            i.closest("[data-mutate]").attr("data-events", "mutate"),
              i
                .closest("[data-mutate]")
                .triggerHandler("mutateme.zf.trigger", [
                  i.closest("[data-mutate]"),
                ]);
            break;
          default:
            return !1;
        }
      };
    if (e.length)
      for (var n = 0; n <= e.length - 1; n++) {
        var s = new a(i);
        s.observe(e[n], {
          attributes: !0,
          childList: !0,
          characterData: !1,
          subtree: !0,
          attributeFilter: ["data-events", "style"],
        });
      }
  }
  var a = (function () {
      for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
        if (t[e] + "MutationObserver" in window)
          return window[t[e] + "MutationObserver"];
      return !1;
    })(),
    r = function (e, i) {
      e.data(i)
        .split(" ")
        .forEach(function (n) {
          t("#" + n)["close" === i ? "trigger" : "triggerHandler"](
            i + ".zf.trigger",
            [e]
          );
        });
    };
  t(document).on("click.zf.trigger", "[data-open]", function () {
    r(t(this), "open");
  }),
    t(document).on("click.zf.trigger", "[data-close]", function () {
      var e = t(this).data("close");
      e ? r(t(this), "close") : t(this).trigger("close.zf.trigger");
    }),
    t(document).on("click.zf.trigger", "[data-toggle]", function () {
      var e = t(this).data("toggle");
      e ? r(t(this), "toggle") : t(this).trigger("toggle.zf.trigger");
    }),
    t(document).on("close.zf.trigger", "[data-closable]", function (e) {
      e.stopPropagation();
      var i = t(this).data("closable");
      "" !== i
        ? Foundation.Motion.animateOut(t(this), i, function () {
            t(this).trigger("closed.zf");
          })
        : t(this).fadeOut().trigger("closed.zf");
    }),
    t(document).on(
      "focus.zf.trigger blur.zf.trigger",
      "[data-toggle-focus]",
      function () {
        var e = t(this).data("toggle-focus");
        t("#" + e).triggerHandler("toggle.zf.trigger", [t(this)]);
      }
    ),
    t(window).on("load", function () {
      e();
    }),
    (Foundation.IHearYou = e);
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Abide");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            (this.$inputs = this.$element.find("input, textarea, select")),
              this._events();
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            this.$element
              .off(".abide")
              .on("reset.zf.abide", function () {
                e.resetForm();
              })
              .on("submit.zf.abide", function () {
                return e.validateForm();
              }),
              "fieldChange" === this.options.validateOn &&
                this.$inputs
                  .off("change.zf.abide")
                  .on("change.zf.abide", function (i) {
                    e.validateInput(t(i.target));
                  }),
              this.options.liveValidate &&
                this.$inputs
                  .off("input.zf.abide")
                  .on("input.zf.abide", function (i) {
                    e.validateInput(t(i.target));
                  }),
              this.options.validateOnBlur &&
                this.$inputs
                  .off("blur.zf.abide")
                  .on("blur.zf.abide", function (i) {
                    e.validateInput(t(i.target));
                  });
          },
        },
        {
          key: "_reflow",
          value: function () {
            this._init();
          },
        },
        {
          key: "requiredCheck",
          value: function (t) {
            if (!t.attr("required")) return !0;
            var e = !0;
            switch (t[0].type) {
              case "checkbox":
                e = t[0].checked;
                break;
              case "select":
              case "select-one":
              case "select-multiple":
                var i = t.find("option:selected");
                (i.length && i.val()) || (e = !1);
                break;
              default:
                (t.val() && t.val().length) || (e = !1);
            }
            return e;
          },
        },
        {
          key: "findFormError",
          value: function (t) {
            var e = t[0].id,
              i = t.siblings(this.options.formErrorSelector);
            return (
              i.length || (i = t.parent().find(this.options.formErrorSelector)),
              (i = i.add(
                this.$element.find('[data-form-error-for="' + e + '"]')
              ))
            );
          },
        },
        {
          key: "findLabel",
          value: function (t) {
            var e = t[0].id,
              i = this.$element.find('label[for="' + e + '"]');
            return i.length ? i : t.closest("label");
          },
        },
        {
          key: "findRadioLabels",
          value: function (e) {
            var i = this,
              n = e.map(function (e, n) {
                var s = n.id,
                  o = i.$element.find('label[for="' + s + '"]');
                return o.length || (o = t(n).closest("label")), o[0];
              });
            return t(n);
          },
        },
        {
          key: "addErrorClasses",
          value: function (t) {
            var e = this.findLabel(t),
              i = this.findFormError(t);
            e.length && e.addClass(this.options.labelErrorClass),
              i.length && i.addClass(this.options.formErrorClass),
              t.addClass(this.options.inputErrorClass).attr("data-invalid", "");
          },
        },
        {
          key: "removeRadioErrorClasses",
          value: function (t) {
            var e = this.$element.find(':radio[name="' + t + '"]'),
              i = this.findRadioLabels(e),
              n = this.findFormError(e);
            i.length && i.removeClass(this.options.labelErrorClass),
              n.length && n.removeClass(this.options.formErrorClass),
              e
                .removeClass(this.options.inputErrorClass)
                .removeAttr("data-invalid");
          },
        },
        {
          key: "removeErrorClasses",
          value: function (t) {
            if ("radio" == t[0].type)
              return this.removeRadioErrorClasses(t.attr("name"));
            var e = this.findLabel(t),
              i = this.findFormError(t);
            e.length && e.removeClass(this.options.labelErrorClass),
              i.length && i.removeClass(this.options.formErrorClass),
              t
                .removeClass(this.options.inputErrorClass)
                .removeAttr("data-invalid");
          },
        },
        {
          key: "validateInput",
          value: function (e) {
            var i = this.requiredCheck(e),
              n = !1,
              s = !0,
              o = e.attr("data-validator"),
              a = !0;
            if (
              e.is("[data-abide-ignore]") ||
              e.is('[type="hidden"]') ||
              e.is("[disabled]")
            )
              return !0;
            switch (e[0].type) {
              case "radio":
                n = this.validateRadio(e.attr("name"));
                break;
              case "checkbox":
                n = i;
                break;
              case "select":
              case "select-one":
              case "select-multiple":
                n = i;
                break;
              default:
                n = this.validateText(e);
            }
            o && (s = this.matchValidation(e, o, e.attr("required"))),
              e.attr("data-equalto") &&
                (a = this.options.validators.equalTo(e));
            var r = [i, n, s, a].indexOf(!1) === -1,
              l = (r ? "valid" : "invalid") + ".zf.abide";
            if (r) {
              var h = this.$element.find(
                '[data-equalto="' + e.attr("id") + '"]'
              );
              if (h.length) {
                var u = this;
                h.each(function () {
                  t(this).val() && u.validateInput(t(this));
                });
              }
            }
            return (
              this[r ? "removeErrorClasses" : "addErrorClasses"](e),
              e.trigger(l, [e]),
              r
            );
          },
        },
        {
          key: "validateForm",
          value: function () {
            var e = [],
              i = this;
            this.$inputs.each(function () {
              e.push(i.validateInput(t(this)));
            });
            var n = e.indexOf(!1) === -1;
            return (
              this.$element
                .find("[data-abide-error]")
                .css("display", n ? "none" : "block"),
              this.$element.trigger(
                (n ? "formvalid" : "forminvalid") + ".zf.abide",
                [this.$element]
              ),
              n
            );
          },
        },
        {
          key: "validateText",
          value: function (t, e) {
            e = e || t.attr("pattern") || t.attr("type");
            var i = t.val(),
              n = !1;
            return (
              i.length
                ? (n = this.options.patterns.hasOwnProperty(e)
                    ? this.options.patterns[e].test(i)
                    : e === t.attr("type") || new RegExp(e).test(i))
                : t.prop("required") || (n = !0),
              n
            );
          },
        },
        {
          key: "validateRadio",
          value: function (e) {
            var i = this.$element.find(':radio[name="' + e + '"]'),
              n = !1,
              s = !1;
            return (
              i.each(function (e, i) {
                t(i).attr("required") && (s = !0);
              }),
              s || (n = !0),
              n ||
                i.each(function (e, i) {
                  t(i).prop("checked") && (n = !0);
                }),
              n
            );
          },
        },
        {
          key: "matchValidation",
          value: function (t, e, i) {
            var n = this;
            i = !!i;
            var s = e.split(" ").map(function (e) {
              return n.options.validators[e](t, i, t.parent());
            });
            return s.indexOf(!1) === -1;
          },
        },
        {
          key: "resetForm",
          value: function () {
            var e = this.$element,
              i = this.options;
            t("." + i.labelErrorClass, e)
              .not("small")
              .removeClass(i.labelErrorClass),
              t("." + i.inputErrorClass, e)
                .not("small")
                .removeClass(i.inputErrorClass),
              t(i.formErrorSelector + "." + i.formErrorClass).removeClass(
                i.formErrorClass
              ),
              e.find("[data-abide-error]").css("display", "none"),
              t(":input", e)
                .not(
                  ":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]"
                )
                .val("")
                .removeAttr("data-invalid"),
              t(":input:radio", e)
                .not("[data-abide-ignore]")
                .prop("checked", !1)
                .removeAttr("data-invalid"),
              t(":input:checkbox", e)
                .not("[data-abide-ignore]")
                .prop("checked", !1)
                .removeAttr("data-invalid"),
              e.trigger("formreset.zf.abide", [e]);
          },
        },
        {
          key: "destroy",
          value: function () {
            var e = this;
            this.$element
              .off(".abide")
              .find("[data-abide-error]")
              .css("display", "none"),
              this.$inputs.off(".abide").each(function () {
                e.removeErrorClasses(t(this));
              }),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    validateOn: "fieldChange",
    labelErrorClass: "is-invalid-label",
    inputErrorClass: "is-invalid-input",
    formErrorSelector: ".form-error",
    formErrorClass: "is-visible",
    liveValidate: !1,
    validateOnBlur: !1,
    patterns: {
      alpha: /^[a-zA-Z]+$/,
      alpha_numeric: /^[a-zA-Z0-9]+$/,
      integer: /^[-+]?\d+$/,
      number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
      card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
      cvv: /^([0-9]){3,4}$/,
      email:
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
      url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
      domain:
        /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
      datetime:
        /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
      date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
      time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
      dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
      month_day_year:
        /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
      day_month_year:
        /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
      color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    },
    validators: {
      equalTo: function (e, i, n) {
        return t("#" + e.attr("data-equalto")).val() === e.val();
      },
    },
  }),
    Foundation.plugin(e, "Abide");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Accordion"),
        Foundation.Keyboard.register("Accordion", {
          ENTER: "toggle",
          SPACE: "toggle",
          ARROW_DOWN: "next",
          ARROW_UP: "previous",
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e = this;
            this.$element.attr("role", "tablist"),
              (this.$tabs = this.$element.children("[data-accordion-item]")),
              this.$tabs.each(function (e, i) {
                var n = t(i),
                  s = n.children("[data-tab-content]"),
                  o = s[0].id || Foundation.GetYoDigits(6, "accordion"),
                  a = i.id || o + "-label";
                n
                  .find("a:first")
                  .attr({
                    "aria-controls": o,
                    role: "tab",
                    id: a,
                    "aria-expanded": !1,
                    "aria-selected": !1,
                  }),
                  s.attr({
                    role: "tabpanel",
                    "aria-labelledby": a,
                    "aria-hidden": !0,
                    id: o,
                  });
              });
            var i = this.$element
              .find(".is-active")
              .children("[data-tab-content]");
            (this.firstTimeInit = !0),
              i.length &&
                (this.down(i, this.firstTimeInit), (this.firstTimeInit = !1)),
              (this._checkDeepLink = function () {
                var i = window.location.hash;
                if (i.length) {
                  var n = e.$element.find('[href$="' + i + '"]'),
                    s = t(i);
                  if (n.length && s) {
                    if (
                      (n
                        .parent("[data-accordion-item]")
                        .hasClass("is-active") ||
                        (e.down(s, e.firstTimeInit), (e.firstTimeInit = !1)),
                      e.options.deepLinkSmudge)
                    ) {
                      var o = e;
                      t(window).load(function () {
                        var e = o.$element.offset();
                        t("html, body").animate(
                          { scrollTop: e.top },
                          o.options.deepLinkSmudgeDelay
                        );
                      });
                    }
                    e.$element.trigger("deeplink.zf.accordion", [n, s]);
                  }
                }
              }),
              this.options.deepLink && this._checkDeepLink(),
              this._events();
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            this.$tabs.each(function () {
              var i = t(this),
                n = i.children("[data-tab-content]");
              n.length &&
                i
                  .children("a")
                  .off("click.zf.accordion keydown.zf.accordion")
                  .on("click.zf.accordion", function (t) {
                    t.preventDefault(), e.toggle(n);
                  })
                  .on("keydown.zf.accordion", function (t) {
                    Foundation.Keyboard.handleKey(t, "Accordion", {
                      toggle: function () {
                        e.toggle(n);
                      },
                      next: function () {
                        var t = i.next().find("a").focus();
                        e.options.multiExpand ||
                          t.trigger("click.zf.accordion");
                      },
                      previous: function () {
                        var t = i.prev().find("a").focus();
                        e.options.multiExpand ||
                          t.trigger("click.zf.accordion");
                      },
                      handled: function () {
                        t.preventDefault(), t.stopPropagation();
                      },
                    });
                  });
            }),
              this.options.deepLink &&
                t(window).on("popstate", this._checkDeepLink);
          },
        },
        {
          key: "toggle",
          value: function (t) {
            if (
              (t.parent().hasClass("is-active") ? this.up(t) : this.down(t),
              this.options.deepLink)
            ) {
              var e = t.prev("a").attr("href");
              this.options.updateHistory
                ? history.pushState({}, "", e)
                : history.replaceState({}, "", e);
            }
          },
        },
        {
          key: "down",
          value: function (e, i) {
            var n = this;
            if (
              (e
                .attr("aria-hidden", !1)
                .parent("[data-tab-content]")
                .addBack()
                .parent()
                .addClass("is-active"),
              !this.options.multiExpand && !i)
            ) {
              var s = this.$element
                .children(".is-active")
                .children("[data-tab-content]");
              s.length && this.up(s.not(e));
            }
            e.slideDown(this.options.slideSpeed, function () {
              n.$element.trigger("down.zf.accordion", [e]);
            }),
              t("#" + e.attr("aria-labelledby")).attr({
                "aria-expanded": !0,
                "aria-selected": !0,
              });
          },
        },
        {
          key: "up",
          value: function (e) {
            var i = e.parent().siblings(),
              n = this;
            (this.options.allowAllClosed || i.hasClass("is-active")) &&
              e.parent().hasClass("is-active") &&
              (e.slideUp(n.options.slideSpeed, function () {
                n.$element.trigger("up.zf.accordion", [e]);
              }),
              e.attr("aria-hidden", !0).parent().removeClass("is-active"),
              t("#" + e.attr("aria-labelledby")).attr({
                "aria-expanded": !1,
                "aria-selected": !1,
              }));
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element
              .find("[data-tab-content]")
              .stop(!0)
              .slideUp(0)
              .css("display", ""),
              this.$element.find("a").off(".zf.accordion"),
              this.options.deepLink &&
                t(window).off("popstate", this._checkDeepLink),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    slideSpeed: 250,
    multiExpand: !1,
    allowAllClosed: !1,
    deepLink: !1,
    deepLinkSmudge: !1,
    deepLinkSmudgeDelay: 300,
    updateHistory: !1,
  }),
    Foundation.plugin(e, "Accordion");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        Foundation.Nest.Feather(this.$element, "accordion"),
        this._init(),
        Foundation.registerPlugin(this, "AccordionMenu"),
        Foundation.Keyboard.register("AccordionMenu", {
          ENTER: "toggle",
          SPACE: "toggle",
          ARROW_RIGHT: "open",
          ARROW_UP: "up",
          ARROW_DOWN: "down",
          ARROW_LEFT: "close",
          ESCAPE: "closeAll",
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            this.$element.find("[data-submenu]").not(".is-active").slideUp(0),
              this.$element.attr({
                role: "menu",
                "aria-multiselectable": this.options.multiOpen,
              }),
              (this.$menuLinks = this.$element.find(
                ".is-accordion-submenu-parent"
              )),
              this.$menuLinks.each(function () {
                var e = this.id || Foundation.GetYoDigits(6, "acc-menu-link"),
                  i = t(this),
                  n = i.children("[data-submenu]"),
                  s = n[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                  o = n.hasClass("is-active");
                i.attr({
                  "aria-controls": s,
                  "aria-expanded": o,
                  role: "menuitem",
                  id: e,
                }),
                  n.attr({
                    "aria-labelledby": e,
                    "aria-hidden": !o,
                    role: "menu",
                    id: s,
                  });
              });
            var e = this.$element.find(".is-active");
            if (e.length) {
              var i = this;
              e.each(function () {
                i.down(t(this));
              });
            }
            this._events();
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            this.$element
              .find("li")
              .each(function () {
                var i = t(this).children("[data-submenu]");
                i.length &&
                  t(this)
                    .children("a")
                    .off("click.zf.accordionMenu")
                    .on("click.zf.accordionMenu", function (t) {
                      t.preventDefault(), e.toggle(i);
                    });
              })
              .on("keydown.zf.accordionmenu", function (i) {
                var n,
                  s,
                  o = t(this),
                  a = o.parent("ul").children("li"),
                  r = o.children("[data-submenu]");
                a.each(function (e) {
                  if (t(this).is(o))
                    return (
                      (n = a
                        .eq(Math.max(0, e - 1))
                        .find("a")
                        .first()),
                      (s = a
                        .eq(Math.min(e + 1, a.length - 1))
                        .find("a")
                        .first()),
                      t(this).children("[data-submenu]:visible").length &&
                        (s = o.find("li:first-child").find("a").first()),
                      t(this).is(":first-child")
                        ? (n = o.parents("li").first().find("a").first())
                        : n
                            .parents("li")
                            .first()
                            .children("[data-submenu]:visible").length &&
                          (n = n
                            .parents("li")
                            .find("li:last-child")
                            .find("a")
                            .first()),
                      void (
                        t(this).is(":last-child") &&
                        (s = o
                          .parents("li")
                          .first()
                          .next("li")
                          .find("a")
                          .first())
                      )
                    );
                }),
                  Foundation.Keyboard.handleKey(i, "AccordionMenu", {
                    open: function () {
                      r.is(":hidden") &&
                        (e.down(r),
                        r.find("li").first().find("a").first().focus());
                    },
                    close: function () {
                      r.length && !r.is(":hidden")
                        ? e.up(r)
                        : o.parent("[data-submenu]").length &&
                          (e.up(o.parent("[data-submenu]")),
                          o.parents("li").first().find("a").first().focus());
                    },
                    up: function () {
                      return n.focus(), !0;
                    },
                    down: function () {
                      return s.focus(), !0;
                    },
                    toggle: function () {
                      o.children("[data-submenu]").length &&
                        e.toggle(o.children("[data-submenu]"));
                    },
                    closeAll: function () {
                      e.hideAll();
                    },
                    handled: function (t) {
                      t && i.preventDefault(), i.stopImmediatePropagation();
                    },
                  });
              });
          },
        },
        {
          key: "hideAll",
          value: function () {
            this.up(this.$element.find("[data-submenu]"));
          },
        },
        {
          key: "showAll",
          value: function () {
            this.down(this.$element.find("[data-submenu]"));
          },
        },
        {
          key: "toggle",
          value: function (t) {
            t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t));
          },
        },
        {
          key: "down",
          value: function (t) {
            var e = this;
            this.options.multiOpen ||
              this.up(
                this.$element
                  .find(".is-active")
                  .not(t.parentsUntil(this.$element).add(t))
              ),
              t
                .addClass("is-active")
                .attr({ "aria-hidden": !1 })
                .parent(".is-accordion-submenu-parent")
                .attr({ "aria-expanded": !0 }),
              t.slideDown(e.options.slideSpeed, function () {
                e.$element.trigger("down.zf.accordionMenu", [t]);
              });
          },
        },
        {
          key: "up",
          value: function (t) {
            var e = this;
            t.slideUp(e.options.slideSpeed, function () {
              e.$element.trigger("up.zf.accordionMenu", [t]);
            });
            var i = t
              .find("[data-submenu]")
              .slideUp(0)
              .addBack()
              .attr("aria-hidden", !0);
            i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element
              .find("[data-submenu]")
              .slideDown(0)
              .css("display", ""),
              this.$element.find("a").off("click.zf.accordionMenu"),
              Foundation.Nest.Burn(this.$element, "accordion"),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = { slideSpeed: 250, multiOpen: !0 }),
    Foundation.plugin(e, "AccordionMenu");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        Foundation.Nest.Feather(this.$element, "drilldown"),
        this._init(),
        Foundation.registerPlugin(this, "Drilldown"),
        Foundation.Keyboard.register("Drilldown", {
          ENTER: "open",
          SPACE: "open",
          ARROW_RIGHT: "next",
          ARROW_UP: "up",
          ARROW_DOWN: "down",
          ARROW_LEFT: "previous",
          ESCAPE: "close",
          TAB: "down",
          SHIFT_TAB: "up",
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            (this.$submenuAnchors = this.$element
              .find("li.is-drilldown-submenu-parent")
              .children("a")),
              (this.$submenus = this.$submenuAnchors
                .parent("li")
                .children("[data-submenu]")),
              (this.$menuItems = this.$element
                .find("li")
                .not(".js-drilldown-back")
                .attr("role", "menuitem")
                .find("a")),
              this.$element.attr(
                "data-mutate",
                this.$element.attr("data-drilldown") ||
                  Foundation.GetYoDigits(6, "drilldown")
              ),
              this._prepareMenu(),
              this._registerEvents(),
              this._keyboardEvents();
          },
        },
        {
          key: "_prepareMenu",
          value: function () {
            var e = this;
            this.$submenuAnchors.each(function () {
              var i = t(this),
                n = i.parent();
              e.options.parentLink &&
                i
                  .clone()
                  .prependTo(n.children("[data-submenu]"))
                  .wrap(
                    '<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'
                  ),
                i
                  .data("savedHref", i.attr("href"))
                  .removeAttr("href")
                  .attr("tabindex", 0),
                i
                  .children("[data-submenu]")
                  .attr({ "aria-hidden": !0, tabindex: 0, role: "menu" }),
                e._events(i);
            }),
              this.$submenus.each(function () {
                var i = t(this),
                  n = i.find(".js-drilldown-back");
                if (!n.length)
                  switch (e.options.backButtonPosition) {
                    case "bottom":
                      i.append(e.options.backButton);
                      break;
                    case "top":
                      i.prepend(e.options.backButton);
                      break;
                    default:
                      console.error(
                        "Unsupported backButtonPosition value '" +
                          e.options.backButtonPosition +
                          "'"
                      );
                  }
                e._back(i);
              }),
              this.$submenus.addClass("invisible"),
              this.options.autoHeight ||
                this.$submenus.addClass("drilldown-submenu-cover-previous"),
              this.$element.parent().hasClass("is-drilldown") ||
                ((this.$wrapper = t(this.options.wrapper).addClass(
                  "is-drilldown"
                )),
                this.options.animateHeight &&
                  this.$wrapper.addClass("animate-height"),
                this.$element.wrap(this.$wrapper)),
              (this.$wrapper = this.$element.parent()),
              this.$wrapper.css(this._getMaxDims());
          },
        },
        {
          key: "_resize",
          value: function () {
            this.$wrapper.css({ "max-width": "none", "min-height": "none" }),
              this.$wrapper.css(this._getMaxDims());
          },
        },
        {
          key: "_events",
          value: function (e) {
            var i = this;
            e.off("click.zf.drilldown").on("click.zf.drilldown", function (n) {
              if (
                (t(n.target)
                  .parentsUntil("ul", "li")
                  .hasClass("is-drilldown-submenu-parent") &&
                  (n.stopImmediatePropagation(), n.preventDefault()),
                i._show(e.parent("li")),
                i.options.closeOnClick)
              ) {
                var s = t("body");
                s.off(".zf.drilldown").on("click.zf.drilldown", function (e) {
                  e.target === i.$element[0] ||
                    t.contains(i.$element[0], e.target) ||
                    (e.preventDefault(), i._hideAll(), s.off(".zf.drilldown"));
                });
              }
            }),
              this.$element.on("mutateme.zf.trigger", this._resize.bind(this));
          },
        },
        {
          key: "_registerEvents",
          value: function () {
            this.options.scrollTop &&
              ((this._bindHandler = this._scrollTop.bind(this)),
              this.$element.on(
                "open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",
                this._bindHandler
              ));
          },
        },
        {
          key: "_scrollTop",
          value: function () {
            var e = this,
              i =
                "" != e.options.scrollTopElement
                  ? t(e.options.scrollTopElement)
                  : e.$element,
              n = parseInt(i.offset().top + e.options.scrollTopOffset);
            t("html, body")
              .stop(!0)
              .animate(
                { scrollTop: n },
                e.options.animationDuration,
                e.options.animationEasing,
                function () {
                  this === t("html")[0] &&
                    e.$element.trigger("scrollme.zf.drilldown");
                }
              );
          },
        },
        {
          key: "_keyboardEvents",
          value: function () {
            var e = this;
            this.$menuItems
              .add(
                this.$element.find(
                  ".js-drilldown-back > a, .is-submenu-parent-item > a"
                )
              )
              .on("keydown.zf.drilldown", function (i) {
                var n,
                  s,
                  o = t(this),
                  a = o.parent("li").parent("ul").children("li").children("a");
                a.each(function (e) {
                  if (t(this).is(o))
                    return (
                      (n = a.eq(Math.max(0, e - 1))),
                      void (s = a.eq(Math.min(e + 1, a.length - 1)))
                    );
                }),
                  Foundation.Keyboard.handleKey(i, "Drilldown", {
                    next: function () {
                      if (o.is(e.$submenuAnchors))
                        return (
                          e._show(o.parent("li")),
                          o
                            .parent("li")
                            .one(Foundation.transitionend(o), function () {
                              o.parent("li")
                                .find("ul li a")
                                .filter(e.$menuItems)
                                .first()
                                .focus();
                            }),
                          !0
                        );
                    },
                    previous: function () {
                      return (
                        e._hide(o.parent("li").parent("ul")),
                        o
                          .parent("li")
                          .parent("ul")
                          .one(Foundation.transitionend(o), function () {
                            setTimeout(function () {
                              o.parent("li")
                                .parent("ul")
                                .parent("li")
                                .children("a")
                                .first()
                                .focus();
                            }, 1);
                          }),
                        !0
                      );
                    },
                    up: function () {
                      return (
                        n.focus(),
                        !o.is(e.$element.find("> li:first-child > a"))
                      );
                    },
                    down: function () {
                      return (
                        s.focus(), !o.is(e.$element.find("> li:last-child > a"))
                      );
                    },
                    close: function () {
                      o.is(e.$element.find("> li > a")) ||
                        (e._hide(o.parent().parent()),
                        o.parent().parent().siblings("a").focus());
                    },
                    open: function () {
                      return o.is(e.$menuItems)
                        ? o.is(e.$submenuAnchors)
                          ? (e._show(o.parent("li")),
                            o
                              .parent("li")
                              .one(Foundation.transitionend(o), function () {
                                o.parent("li")
                                  .find("ul li a")
                                  .filter(e.$menuItems)
                                  .first()
                                  .focus();
                              }),
                            !0)
                          : void 0
                        : (e._hide(o.parent("li").parent("ul")),
                          o
                            .parent("li")
                            .parent("ul")
                            .one(Foundation.transitionend(o), function () {
                              setTimeout(function () {
                                o.parent("li")
                                  .parent("ul")
                                  .parent("li")
                                  .children("a")
                                  .first()
                                  .focus();
                              }, 1);
                            }),
                          !0);
                    },
                    handled: function (t) {
                      t && i.preventDefault(), i.stopImmediatePropagation();
                    },
                  });
              });
          },
        },
        {
          key: "_hideAll",
          value: function () {
            var t = this.$element
              .find(".is-drilldown-submenu.is-active")
              .addClass("is-closing");
            this.options.autoHeight &&
              this.$wrapper.css({
                height: t.parent().closest("ul").data("calcHeight"),
              }),
              t.one(Foundation.transitionend(t), function (e) {
                t.removeClass("is-active is-closing");
              }),
              this.$element.trigger("closed.zf.drilldown");
          },
        },
        {
          key: "_back",
          value: function (t) {
            var e = this;
            t.off("click.zf.drilldown"),
              t
                .children(".js-drilldown-back")
                .on("click.zf.drilldown", function (i) {
                  i.stopImmediatePropagation(), e._hide(t);
                  var n = t.parent("li").parent("ul").parent("li");
                  n.length && e._show(n);
                });
          },
        },
        {
          key: "_menuLinkEvents",
          value: function () {
            var t = this;
            this.$menuItems
              .not(".is-drilldown-submenu-parent")
              .off("click.zf.drilldown")
              .on("click.zf.drilldown", function (e) {
                setTimeout(function () {
                  t._hideAll();
                }, 0);
              });
          },
        },
        {
          key: "_show",
          value: function (t) {
            this.options.autoHeight &&
              this.$wrapper.css({
                height: t.children("[data-submenu]").data("calcHeight"),
              }),
              t.attr("aria-expanded", !0),
              t
                .children("[data-submenu]")
                .addClass("is-active")
                .removeClass("invisible")
                .attr("aria-hidden", !1),
              this.$element.trigger("open.zf.drilldown", [t]);
          },
        },
        {
          key: "_hide",
          value: function (t) {
            this.options.autoHeight &&
              this.$wrapper.css({
                height: t.parent().closest("ul").data("calcHeight"),
              });
            t.parent("li").attr("aria-expanded", !1),
              t.attr("aria-hidden", !0).addClass("is-closing"),
              t
                .addClass("is-closing")
                .one(Foundation.transitionend(t), function () {
                  t.removeClass("is-active is-closing"),
                    t.blur().addClass("invisible");
                }),
              t.trigger("hide.zf.drilldown", [t]);
          },
        },
        {
          key: "_getMaxDims",
          value: function () {
            var e = 0,
              i = {},
              n = this;
            return (
              this.$submenus.add(this.$element).each(function () {
                var s =
                  (t(this).children("li").length,
                  Foundation.Box.GetDimensions(this).height);
                (e = s > e ? s : e),
                  n.options.autoHeight &&
                    (t(this).data("calcHeight", s),
                    t(this).hasClass("is-drilldown-submenu") || (i.height = s));
              }),
              this.options.autoHeight || (i["min-height"] = e + "px"),
              (i["max-width"] =
                this.$element[0].getBoundingClientRect().width + "px"),
              i
            );
          },
        },
        {
          key: "destroy",
          value: function () {
            this.options.scrollTop &&
              this.$element.off(".zf.drilldown", this._bindHandler),
              this._hideAll(),
              this.$element.off("mutateme.zf.trigger"),
              Foundation.Nest.Burn(this.$element, "drilldown"),
              this.$element
                .unwrap()
                .find(".js-drilldown-back, .is-submenu-parent-item")
                .remove()
                .end()
                .find(".is-active, .is-closing, .is-drilldown-submenu")
                .removeClass("is-active is-closing is-drilldown-submenu")
                .end()
                .find("[data-submenu]")
                .removeAttr("aria-hidden tabindex role"),
              this.$submenuAnchors.each(function () {
                t(this).off(".zf.drilldown");
              }),
              this.$submenus.removeClass("drilldown-submenu-cover-previous"),
              this.$element.find("a").each(function () {
                var e = t(this);
                e.removeAttr("tabindex"),
                  e.data("savedHref") &&
                    e.attr("href", e.data("savedHref")).removeData("savedHref");
              }),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
    backButtonPosition: "top",
    wrapper: "<div></div>",
    parentLink: !1,
    closeOnClick: !1,
    autoHeight: !1,
    animateHeight: !1,
    scrollTop: !1,
    scrollTopElement: "",
    scrollTopOffset: 0,
    animationDuration: 500,
    animationEasing: "swing",
  }),
    Foundation.plugin(e, "Drilldown");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Dropdown"),
        Foundation.Keyboard.register("Dropdown", {
          ENTER: "open",
          SPACE: "open",
          ESCAPE: "close",
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e = this.$element.attr("id");
            (this.$anchor = t(
              t('[data-toggle="' + e + '"]').length
                ? '[data-toggle="' + e + '"]'
                : '[data-open="' + e + '"]'
            )),
              this.$anchor.attr({
                "aria-controls": e,
                "data-is-focus": !1,
                "data-yeti-box": e,
                "aria-haspopup": !0,
                "aria-expanded": !1,
              }),
              this.options.parentClass
                ? (this.$parent = this.$element.parents(
                    "." + this.options.parentClass
                  ))
                : (this.$parent = null),
              (this.options.positionClass = this.getPositionClass()),
              (this.counter = 4),
              (this.usedPositions = []),
              this.$element.attr({
                "aria-hidden": "true",
                "data-yeti-box": e,
                "data-resize": e,
                "aria-labelledby":
                  this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor"),
              }),
              this._events();
          },
        },
        {
          key: "getPositionClass",
          value: function () {
            var t = this.$element[0].className.match(
              /(top|left|right|bottom)/g
            );
            t = t ? t[0] : "";
            var e = /float-(\S+)/.exec(this.$anchor[0].className);
            e = e ? e[1] : "";
            var i = e ? e + " " + t : t;
            return i;
          },
        },
        {
          key: "_reposition",
          value: function (t) {
            this.usedPositions.push(t ? t : "bottom"),
              !t && this.usedPositions.indexOf("top") < 0
                ? this.$element.addClass("top")
                : "top" === t && this.usedPositions.indexOf("bottom") < 0
                ? this.$element.removeClass(t)
                : "left" === t && this.usedPositions.indexOf("right") < 0
                ? this.$element.removeClass(t).addClass("right")
                : "right" === t && this.usedPositions.indexOf("left") < 0
                ? this.$element.removeClass(t).addClass("left")
                : !t &&
                  this.usedPositions.indexOf("top") > -1 &&
                  this.usedPositions.indexOf("left") < 0
                ? this.$element.addClass("left")
                : "top" === t &&
                  this.usedPositions.indexOf("bottom") > -1 &&
                  this.usedPositions.indexOf("left") < 0
                ? this.$element.removeClass(t).addClass("left")
                : "left" === t &&
                  this.usedPositions.indexOf("right") > -1 &&
                  this.usedPositions.indexOf("bottom") < 0
                ? this.$element.removeClass(t)
                : "right" === t &&
                  this.usedPositions.indexOf("left") > -1 &&
                  this.usedPositions.indexOf("bottom") < 0
                ? this.$element.removeClass(t)
                : this.$element.removeClass(t),
              (this.classChanged = !0),
              this.counter--;
          },
        },
        {
          key: "_setPosition",
          value: function () {
            if ("false" === this.$anchor.attr("aria-expanded")) return !1;
            var t = this.getPositionClass(),
              e = Foundation.Box.GetDimensions(this.$element),
              i =
                (Foundation.Box.GetDimensions(this.$anchor),
                "left" === t ? "left" : "right" === t ? "left" : "top"),
              n = "top" === i ? "height" : "width";
            "height" === n ? this.options.vOffset : this.options.hOffset;
            if (
              e.width >= e.windowDims.width ||
              (!this.counter &&
                !Foundation.Box.ImNotTouchingYou(this.$element, this.$parent))
            ) {
              var s = e.windowDims.width,
                o = 0;
              if (this.$parent) {
                var a = Foundation.Box.GetDimensions(this.$parent),
                  o = a.offset.left;
                a.width < s && (s = a.width);
              }
              return (
                this.$element
                  .offset(
                    Foundation.Box.GetOffsets(
                      this.$element,
                      this.$anchor,
                      "center bottom",
                      this.options.vOffset,
                      this.options.hOffset + o,
                      !0
                    )
                  )
                  .css({ width: s - 2 * this.options.hOffset, height: "auto" }),
                (this.classChanged = !0),
                !1
              );
            }
            for (
              this.$element.offset(
                Foundation.Box.GetOffsets(
                  this.$element,
                  this.$anchor,
                  t,
                  this.options.vOffset,
                  this.options.hOffset
                )
              );
              !Foundation.Box.ImNotTouchingYou(
                this.$element,
                this.$parent,
                !0
              ) && this.counter;

            )
              this._reposition(t), this._setPosition();
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            this.$element.on({
              "open.zf.trigger": this.open.bind(this),
              "close.zf.trigger": this.close.bind(this),
              "toggle.zf.trigger": this.toggle.bind(this),
              "resizeme.zf.trigger": this._setPosition.bind(this),
            }),
              this.options.hover &&
                (this.$anchor
                  .off("mouseenter.zf.dropdown mouseleave.zf.dropdown")
                  .on("mouseenter.zf.dropdown", function () {
                    var i = t("body").data();
                    ("undefined" != typeof i.whatinput &&
                      "mouse" !== i.whatinput) ||
                      (clearTimeout(e.timeout),
                      (e.timeout = setTimeout(function () {
                        e.open(), e.$anchor.data("hover", !0);
                      }, e.options.hoverDelay)));
                  })
                  .on("mouseleave.zf.dropdown", function () {
                    clearTimeout(e.timeout),
                      (e.timeout = setTimeout(function () {
                        e.close(), e.$anchor.data("hover", !1);
                      }, e.options.hoverDelay));
                  }),
                this.options.hoverPane &&
                  this.$element
                    .off("mouseenter.zf.dropdown mouseleave.zf.dropdown")
                    .on("mouseenter.zf.dropdown", function () {
                      clearTimeout(e.timeout);
                    })
                    .on("mouseleave.zf.dropdown", function () {
                      clearTimeout(e.timeout),
                        (e.timeout = setTimeout(function () {
                          e.close(), e.$anchor.data("hover", !1);
                        }, e.options.hoverDelay));
                    })),
              this.$anchor
                .add(this.$element)
                .on("keydown.zf.dropdown", function (i) {
                  var n = t(this);
                  Foundation.Keyboard.findFocusable(e.$element);
                  Foundation.Keyboard.handleKey(i, "Dropdown", {
                    open: function () {
                      n.is(e.$anchor) &&
                        (e.open(),
                        e.$element.attr("tabindex", -1).focus(),
                        i.preventDefault());
                    },
                    close: function () {
                      e.close(), e.$anchor.focus();
                    },
                  });
                });
          },
        },
        {
          key: "_addBodyHandler",
          value: function () {
            var e = t(document.body).not(this.$element),
              i = this;
            e.off("click.zf.dropdown").on("click.zf.dropdown", function (t) {
              i.$anchor.is(t.target) ||
                i.$anchor.find(t.target).length ||
                i.$element.find(t.target).length ||
                (i.close(), e.off("click.zf.dropdown"));
            });
          },
        },
        {
          key: "open",
          value: function () {
            if (
              (this.$element.trigger(
                "closeme.zf.dropdown",
                this.$element.attr("id")
              ),
              this.$anchor.addClass("hover").attr({ "aria-expanded": !0 }),
              this._setPosition(),
              this.$element.addClass("is-open").attr({ "aria-hidden": !1 }),
              this.options.autoFocus)
            ) {
              var t = Foundation.Keyboard.findFocusable(this.$element);
              t.length && t.eq(0).focus();
            }
            this.options.closeOnClick && this._addBodyHandler(),
              this.options.trapFocus &&
                Foundation.Keyboard.trapFocus(this.$element),
              this.$element.trigger("show.zf.dropdown", [this.$element]);
          },
        },
        {
          key: "close",
          value: function () {
            if (!this.$element.hasClass("is-open")) return !1;
            if (
              (this.$element.removeClass("is-open").attr({ "aria-hidden": !0 }),
              this.$anchor.removeClass("hover").attr("aria-expanded", !1),
              this.classChanged)
            ) {
              var t = this.getPositionClass();
              t && this.$element.removeClass(t),
                this.$element
                  .addClass(this.options.positionClass)
                  .css({ height: "", width: "" }),
                (this.classChanged = !1),
                (this.counter = 4),
                (this.usedPositions.length = 0);
            }
            this.$element.trigger("hide.zf.dropdown", [this.$element]),
              this.options.trapFocus &&
                Foundation.Keyboard.releaseFocus(this.$element);
          },
        },
        {
          key: "toggle",
          value: function () {
            if (this.$element.hasClass("is-open")) {
              if (this.$anchor.data("hover")) return;
              this.close();
            } else this.open();
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element.off(".zf.trigger").hide(),
              this.$anchor.off(".zf.dropdown"),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    parentClass: null,
    hoverDelay: 250,
    hover: !1,
    hoverPane: !1,
    vOffset: 1,
    hOffset: 1,
    positionClass: "",
    trapFocus: !1,
    autoFocus: !1,
    closeOnClick: !1,
  }),
    Foundation.plugin(e, "Dropdown");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        Foundation.Nest.Feather(this.$element, "dropdown"),
        this._init(),
        Foundation.registerPlugin(this, "DropdownMenu"),
        Foundation.Keyboard.register("DropdownMenu", {
          ENTER: "open",
          SPACE: "open",
          ARROW_RIGHT: "next",
          ARROW_UP: "up",
          ARROW_DOWN: "down",
          ARROW_LEFT: "previous",
          ESCAPE: "close",
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var t = this.$element.find("li.is-dropdown-submenu-parent");
            this.$element
              .children(".is-dropdown-submenu-parent")
              .children(".is-dropdown-submenu")
              .addClass("first-sub"),
              (this.$menuItems = this.$element.find('[role="menuitem"]')),
              (this.$tabs = this.$element.children('[role="menuitem"]')),
              this.$tabs
                .find("ul.is-dropdown-submenu")
                .addClass(this.options.verticalClass),
              this.$element.hasClass(this.options.rightClass) ||
              "right" === this.options.alignment ||
              Foundation.rtl() ||
              this.$element.parents(".top-bar-right").is("*")
                ? ((this.options.alignment = "right"), t.addClass("opens-left"))
                : t.addClass("opens-right"),
              (this.changed = !1),
              this._events();
          },
        },
        {
          key: "_isVertical",
          value: function () {
            return "block" === this.$tabs.css("display");
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this,
              i =
                "ontouchstart" in window ||
                "undefined" != typeof window.ontouchstart,
              n = "is-dropdown-submenu-parent",
              s = function (s) {
                var o = t(s.target).parentsUntil("ul", "." + n),
                  a = o.hasClass(n),
                  r = "true" === o.attr("data-is-click"),
                  l = o.children(".is-dropdown-submenu");
                if (a)
                  if (r) {
                    if (
                      !e.options.closeOnClick ||
                      (!e.options.clickOpen && !i) ||
                      (e.options.forceFollow && i)
                    )
                      return;
                    s.stopImmediatePropagation(),
                      s.preventDefault(),
                      e._hide(o);
                  } else
                    s.preventDefault(),
                      s.stopImmediatePropagation(),
                      e._show(l),
                      o
                        .add(o.parentsUntil(e.$element, "." + n))
                        .attr("data-is-click", !0);
              };
            (this.options.clickOpen || i) &&
              this.$menuItems.on(
                "click.zf.dropdownmenu touchstart.zf.dropdownmenu",
                s
              ),
              e.options.closeOnClickInside &&
                this.$menuItems.on("click.zf.dropdownmenu", function (i) {
                  var s = t(this),
                    o = s.hasClass(n);
                  o || e._hide();
                }),
              this.options.disableHover ||
                this.$menuItems
                  .on("mouseenter.zf.dropdownmenu", function (i) {
                    var s = t(this),
                      o = s.hasClass(n);
                    o &&
                      (clearTimeout(s.data("_delay")),
                      s.data(
                        "_delay",
                        setTimeout(function () {
                          e._show(s.children(".is-dropdown-submenu"));
                        }, e.options.hoverDelay)
                      ));
                  })
                  .on("mouseleave.zf.dropdownmenu", function (i) {
                    var s = t(this),
                      o = s.hasClass(n);
                    if (o && e.options.autoclose) {
                      if (
                        "true" === s.attr("data-is-click") &&
                        e.options.clickOpen
                      )
                        return !1;
                      clearTimeout(s.data("_delay")),
                        s.data(
                          "_delay",
                          setTimeout(function () {
                            e._hide(s);
                          }, e.options.closingTime)
                        );
                    }
                  }),
              this.$menuItems.on("keydown.zf.dropdownmenu", function (i) {
                var n,
                  s,
                  o = t(i.target).parentsUntil("ul", '[role="menuitem"]'),
                  a = e.$tabs.index(o) > -1,
                  r = a ? e.$tabs : o.siblings("li").add(o);
                r.each(function (e) {
                  if (t(this).is(o))
                    return (n = r.eq(e - 1)), void (s = r.eq(e + 1));
                });
                var l = function () {
                    o.is(":last-child") ||
                      (s.children("a:first").focus(), i.preventDefault());
                  },
                  h = function () {
                    n.children("a:first").focus(), i.preventDefault();
                  },
                  u = function () {
                    var t = o.children("ul.is-dropdown-submenu");
                    t.length &&
                      (e._show(t),
                      o.find("li > a:first").focus(),
                      i.preventDefault());
                  },
                  d = function () {
                    var t = o.parent("ul").parent("li");
                    t.children("a:first").focus(),
                      e._hide(t),
                      i.preventDefault();
                  },
                  c = {
                    open: u,
                    close: function () {
                      e._hide(e.$element),
                        e.$menuItems.find("a:first").focus(),
                        i.preventDefault();
                    },
                    handled: function () {
                      i.stopImmediatePropagation();
                    },
                  };
                a
                  ? e._isVertical()
                    ? Foundation.rtl()
                      ? t.extend(c, { down: l, up: h, next: d, previous: u })
                      : t.extend(c, { down: l, up: h, next: u, previous: d })
                    : Foundation.rtl()
                    ? t.extend(c, { next: h, previous: l, down: u, up: d })
                    : t.extend(c, { next: l, previous: h, down: u, up: d })
                  : Foundation.rtl()
                  ? t.extend(c, { next: d, previous: u, down: l, up: h })
                  : t.extend(c, { next: u, previous: d, down: l, up: h }),
                  Foundation.Keyboard.handleKey(i, "DropdownMenu", c);
              });
          },
        },
        {
          key: "_addBodyHandler",
          value: function () {
            var e = t(document.body),
              i = this;
            e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on(
              "mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",
              function (t) {
                var n = i.$element.find(t.target);
                n.length ||
                  (i._hide(),
                  e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"));
              }
            );
          },
        },
        {
          key: "_show",
          value: function (e) {
            var i = this.$tabs.index(
                this.$tabs.filter(function (i, n) {
                  return t(n).find(e).length > 0;
                })
              ),
              n = e
                .parent("li.is-dropdown-submenu-parent")
                .siblings("li.is-dropdown-submenu-parent");
            this._hide(n, i),
              e
                .css("visibility", "hidden")
                .addClass("js-dropdown-active")
                .parent("li.is-dropdown-submenu-parent")
                .addClass("is-active");
            var s = Foundation.Box.ImNotTouchingYou(e, null, !0);
            if (!s) {
              var o = "left" === this.options.alignment ? "-right" : "-left",
                a = e.parent(".is-dropdown-submenu-parent");
              a
                .removeClass("opens" + o)
                .addClass("opens-" + this.options.alignment),
                (s = Foundation.Box.ImNotTouchingYou(e, null, !0)),
                s ||
                  a
                    .removeClass("opens-" + this.options.alignment)
                    .addClass("opens-inner"),
                (this.changed = !0);
            }
            e.css("visibility", ""),
              this.options.closeOnClick && this._addBodyHandler(),
              this.$element.trigger("show.zf.dropdownmenu", [e]);
          },
        },
        {
          key: "_hide",
          value: function (t, e) {
            var i;
            i =
              t && t.length
                ? t
                : void 0 !== e
                ? this.$tabs.not(function (t, i) {
                    return t === e;
                  })
                : this.$element;
            var n = i.hasClass("is-active") || i.find(".is-active").length > 0;
            if (n) {
              if (
                (i
                  .find("li.is-active")
                  .add(i)
                  .attr({ "data-is-click": !1 })
                  .removeClass("is-active"),
                i
                  .find("ul.js-dropdown-active")
                  .removeClass("js-dropdown-active"),
                this.changed || i.find("opens-inner").length)
              ) {
                var s = "left" === this.options.alignment ? "right" : "left";
                i
                  .find("li.is-dropdown-submenu-parent")
                  .add(i)
                  .removeClass("opens-inner opens-" + this.options.alignment)
                  .addClass("opens-" + s),
                  (this.changed = !1);
              }
              this.$element.trigger("hide.zf.dropdownmenu", [i]);
            }
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$menuItems
              .off(".zf.dropdownmenu")
              .removeAttr("data-is-click")
              .removeClass(
                "is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"
              ),
              t(document.body).off(".zf.dropdownmenu"),
              Foundation.Nest.Burn(this.$element, "dropdown"),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    disableHover: !1,
    autoclose: !0,
    hoverDelay: 50,
    clickOpen: !1,
    closingTime: 500,
    alignment: "left",
    closeOnClick: !0,
    closeOnClickInside: !0,
    verticalClass: "vertical",
    rightClass: "align-right",
    forceFollow: !0,
  }),
    Foundation.plugin(e, "DropdownMenu");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Equalizer");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e = this.$element.attr("data-equalizer") || "",
              i = this.$element.find('[data-equalizer-watch="' + e + '"]');
            (this.$watched = i.length
              ? i
              : this.$element.find("[data-equalizer-watch]")),
              this.$element.attr(
                "data-resize",
                e || Foundation.GetYoDigits(6, "eq")
              ),
              this.$element.attr(
                "data-mutate",
                e || Foundation.GetYoDigits(6, "eq")
              ),
              (this.hasNested =
                this.$element.find("[data-equalizer]").length > 0),
              (this.isNested =
                this.$element.parentsUntil(document.body, "[data-equalizer]")
                  .length > 0),
              (this.isOn = !1),
              (this._bindHandler = {
                onResizeMeBound: this._onResizeMe.bind(this),
                onPostEqualizedBound: this._onPostEqualized.bind(this),
              });
            var n,
              s = this.$element.find("img");
            this.options.equalizeOn
              ? ((n = this._checkMQ()),
                t(window).on("changed.zf.mediaquery", this._checkMQ.bind(this)))
              : this._events(),
              ((void 0 !== n && n === !1) || void 0 === n) &&
                (s.length
                  ? Foundation.onImagesLoaded(s, this._reflow.bind(this))
                  : this._reflow());
          },
        },
        {
          key: "_pauseEvents",
          value: function () {
            (this.isOn = !1),
              this.$element.off({
                ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                "mutateme.zf.trigger": this._bindHandler.onResizeMeBound,
              });
          },
        },
        {
          key: "_onResizeMe",
          value: function (t) {
            this._reflow();
          },
        },
        {
          key: "_onPostEqualized",
          value: function (t) {
            t.target !== this.$element[0] && this._reflow();
          },
        },
        {
          key: "_events",
          value: function () {
            this._pauseEvents(),
              this.hasNested
                ? this.$element.on(
                    "postequalized.zf.equalizer",
                    this._bindHandler.onPostEqualizedBound
                  )
                : (this.$element.on(
                    "resizeme.zf.trigger",
                    this._bindHandler.onResizeMeBound
                  ),
                  this.$element.on(
                    "mutateme.zf.trigger",
                    this._bindHandler.onResizeMeBound
                  )),
              (this.isOn = !0);
          },
        },
        {
          key: "_checkMQ",
          value: function () {
            var t = !Foundation.MediaQuery.is(this.options.equalizeOn);
            return (
              t
                ? this.isOn &&
                  (this._pauseEvents(), this.$watched.css("height", "auto"))
                : this.isOn || this._events(),
              t
            );
          },
        },
        { key: "_killswitch", value: function () {} },
        {
          key: "_reflow",
          value: function () {
            return !this.options.equalizeOnStack && this._isStacked()
              ? (this.$watched.css("height", "auto"), !1)
              : void (this.options.equalizeByRow
                  ? this.getHeightsByRow(this.applyHeightByRow.bind(this))
                  : this.getHeights(this.applyHeight.bind(this)));
          },
        },
        {
          key: "_isStacked",
          value: function () {
            return (
              !this.$watched[0] ||
              !this.$watched[1] ||
              this.$watched[0].getBoundingClientRect().top !==
                this.$watched[1].getBoundingClientRect().top
            );
          },
        },
        {
          key: "getHeights",
          value: function (t) {
            for (var e = [], i = 0, n = this.$watched.length; i < n; i++)
              (this.$watched[i].style.height = "auto"),
                e.push(this.$watched[i].offsetHeight);
            t(e);
          },
        },
        {
          key: "getHeightsByRow",
          value: function (e) {
            var i = this.$watched.length
                ? this.$watched.first().offset().top
                : 0,
              n = [],
              s = 0;
            n[s] = [];
            for (var o = 0, a = this.$watched.length; o < a; o++) {
              this.$watched[o].style.height = "auto";
              var r = t(this.$watched[o]).offset().top;
              r != i && (s++, (n[s] = []), (i = r)),
                n[s].push([this.$watched[o], this.$watched[o].offsetHeight]);
            }
            for (var l = 0, h = n.length; l < h; l++) {
              var u = t(n[l])
                  .map(function () {
                    return this[1];
                  })
                  .get(),
                d = Math.max.apply(null, u);
              n[l].push(d);
            }
            e(n);
          },
        },
        {
          key: "applyHeight",
          value: function (t) {
            var e = Math.max.apply(null, t);
            this.$element.trigger("preequalized.zf.equalizer"),
              this.$watched.css("height", e),
              this.$element.trigger("postequalized.zf.equalizer");
          },
        },
        {
          key: "applyHeightByRow",
          value: function (e) {
            this.$element.trigger("preequalized.zf.equalizer");
            for (var i = 0, n = e.length; i < n; i++) {
              var s = e[i].length,
                o = e[i][s - 1];
              if (s <= 2) t(e[i][0][0]).css({ height: "auto" });
              else {
                this.$element.trigger("preequalizedrow.zf.equalizer");
                for (var a = 0, r = s - 1; a < r; a++)
                  t(e[i][a][0]).css({ height: o });
                this.$element.trigger("postequalizedrow.zf.equalizer");
              }
            }
            this.$element.trigger("postequalized.zf.equalizer");
          },
        },
        {
          key: "destroy",
          value: function () {
            this._pauseEvents(),
              this.$watched.css("height", "auto"),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = { equalizeOnStack: !1, equalizeByRow: !1, equalizeOn: "" }),
    Foundation.plugin(e, "Equalizer");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, n)),
        (this.rules = []),
        (this.currentPath = ""),
        this._init(),
        this._events(),
        Foundation.registerPlugin(this, "Interchange");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            this._addBreakpoints(), this._generateRules(), this._reflow();
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            t(window).on(
              "resize.zf.interchange",
              Foundation.util.throttle(function () {
                e._reflow();
              }, 50)
            );
          },
        },
        {
          key: "_reflow",
          value: function () {
            var t;
            for (var e in this.rules)
              if (this.rules.hasOwnProperty(e)) {
                var i = this.rules[e];
                window.matchMedia(i.query).matches && (t = i);
              }
            t && this.replace(t.path);
          },
        },
        {
          key: "_addBreakpoints",
          value: function () {
            for (var t in Foundation.MediaQuery.queries)
              if (Foundation.MediaQuery.queries.hasOwnProperty(t)) {
                var i = Foundation.MediaQuery.queries[t];
                e.SPECIAL_QUERIES[i.name] = i.value;
              }
          },
        },
        {
          key: "_generateRules",
          value: function (t) {
            var i,
              n = [];
            (i = this.options.rules
              ? this.options.rules
              : this.$element.data("interchange")),
              (i = "string" == typeof i ? i.match(/\[.*?\]/g) : i);
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var o = i[s].slice(1, -1).split(", "),
                  a = o.slice(0, -1).join(""),
                  r = o[o.length - 1];
                e.SPECIAL_QUERIES[r] && (r = e.SPECIAL_QUERIES[r]),
                  n.push({ path: a, query: r });
              }
            this.rules = n;
          },
        },
        {
          key: "replace",
          value: function (e) {
            if (this.currentPath !== e) {
              var i = this,
                n = "replaced.zf.interchange";
              "IMG" === this.$element[0].nodeName
                ? this.$element
                    .attr("src", e)
                    .on("load", function () {
                      i.currentPath = e;
                    })
                    .trigger(n)
                : e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)
                ? this.$element
                    .css({ "background-image": "url(" + e + ")" })
                    .trigger(n)
                : t.get(e, function (s) {
                    i.$element.html(s).trigger(n),
                      t(s).foundation(),
                      (i.currentPath = e);
                  });
            }
          },
        },
        { key: "destroy", value: function () {} },
      ]),
      e
    );
  })();
  (e.defaults = { rules: null }),
    (e.SPECIAL_QUERIES = {
      landscape: "screen and (orientation: landscape)",
      portrait: "screen and (orientation: portrait)",
      retina:
        "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)",
    }),
    Foundation.plugin(e, "Interchange");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        this.calcPoints(),
        Foundation.registerPlugin(this, "Magellan");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e =
              this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
            (this.$targets = t("[data-magellan-target]")),
              (this.$links = this.$element.find("a")),
              this.$element.attr({ "data-resize": e, "data-scroll": e, id: e }),
              (this.$active = t()),
              (this.scrollPos = parseInt(window.pageYOffset, 10)),
              this._events();
          },
        },
        {
          key: "calcPoints",
          value: function () {
            var e = this,
              i = document.body,
              n = document.documentElement;
            (this.points = []),
              (this.winHeight = Math.round(
                Math.max(window.innerHeight, n.clientHeight)
              )),
              (this.docHeight = Math.round(
                Math.max(
                  i.scrollHeight,
                  i.offsetHeight,
                  n.clientHeight,
                  n.scrollHeight,
                  n.offsetHeight
                )
              )),
              this.$targets.each(function () {
                var i = t(this),
                  n = Math.round(i.offset().top - e.options.threshold);
                (i.targetPoint = n), e.points.push(n);
              });
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            t("html, body"),
              {
                duration: e.options.animationDuration,
                easing: e.options.animationEasing,
              };
            t(window).one("load", function () {
              e.options.deepLinking &&
                location.hash &&
                e.scrollToLoc(location.hash),
                e.calcPoints(),
                e._updateActive();
            }),
              this.$element
                .on({
                  "resizeme.zf.trigger": this.reflow.bind(this),
                  "scrollme.zf.trigger": this._updateActive.bind(this),
                })
                .on("click.zf.magellan", 'a[href^="#"]', function (t) {
                  t.preventDefault();
                  var i = this.getAttribute("href");
                  e.scrollToLoc(i);
                }),
              t(window).on("popstate", function (t) {
                e.options.deepLinking && e.scrollToLoc(window.location.hash);
              });
          },
        },
        {
          key: "scrollToLoc",
          value: function (e) {
            if (!t(e).length) return !1;
            this._inTransition = !0;
            var i = this,
              n = Math.round(
                t(e).offset().top -
                  this.options.threshold / 2 -
                  this.options.barOffset
              );
            t("html, body")
              .stop(!0)
              .animate(
                { scrollTop: n },
                this.options.animationDuration,
                this.options.animationEasing,
                function () {
                  (i._inTransition = !1), i._updateActive();
                }
              );
          },
        },
        {
          key: "reflow",
          value: function () {
            this.calcPoints(), this._updateActive();
          },
        },
        {
          key: "_updateActive",
          value: function () {
            if (!this._inTransition) {
              var t,
                e = parseInt(window.pageYOffset, 10);
              if (e + this.winHeight === this.docHeight)
                t = this.points.length - 1;
              else if (e < this.points[0]) t = void 0;
              else {
                var i = this.scrollPos < e,
                  n = this,
                  s = this.points.filter(function (t, s) {
                    return i
                      ? t - n.options.barOffset <= e
                      : t - n.options.barOffset - n.options.threshold <= e;
                  });
                t = s.length ? s.length - 1 : 0;
              }
              if (
                (this.$active.removeClass(this.options.activeClass),
                (this.$active = this.$links
                  .filter(
                    '[href="#' +
                      this.$targets.eq(t).data("magellan-target") +
                      '"]'
                  )
                  .addClass(this.options.activeClass)),
                this.options.deepLinking)
              ) {
                var o = "";
                void 0 != t && (o = this.$active[0].getAttribute("href")),
                  o !== window.location.hash &&
                    (window.history.pushState
                      ? window.history.pushState(null, null, o)
                      : (window.location.hash = o));
              }
              (this.scrollPos = e),
                this.$element.trigger("update.zf.magellan", [this.$active]);
            }
          },
        },
        {
          key: "destroy",
          value: function () {
            if (
              (this.$element
                .off(".zf.trigger .zf.magellan")
                .find("." + this.options.activeClass)
                .removeClass(this.options.activeClass),
              this.options.deepLinking)
            ) {
              var t = this.$active[0].getAttribute("href");
              window.location.hash.replace(t, "");
            }
            Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    animationDuration: 500,
    animationEasing: "linear",
    threshold: 50,
    activeClass: "active",
    deepLinking: !1,
    barOffset: 0,
  }),
    Foundation.plugin(e, "Magellan");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        (this.$lastTrigger = t()),
        (this.$triggers = t()),
        this._init(),
        this._events(),
        Foundation.registerPlugin(this, "OffCanvas"),
        Foundation.Keyboard.register("OffCanvas", { ESCAPE: "close" });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e = this.$element.attr("id");
            if (
              (this.$element.attr("aria-hidden", "true"),
              this.$element.addClass(
                "is-transition-" + this.options.transition
              ),
              (this.$triggers = t(document)
                .find(
                  '[data-open="' +
                    e +
                    '"], [data-close="' +
                    e +
                    '"], [data-toggle="' +
                    e +
                    '"]'
                )
                .attr("aria-expanded", "false")
                .attr("aria-controls", e)),
              this.options.contentOverlay === !0)
            ) {
              var i = document.createElement("div"),
                n =
                  "fixed" === t(this.$element).css("position")
                    ? "is-overlay-fixed"
                    : "is-overlay-absolute";
              i.setAttribute("class", "js-off-canvas-overlay " + n),
                (this.$overlay = t(i)),
                "is-overlay-fixed" === n
                  ? t("body").append(this.$overlay)
                  : this.$element
                      .siblings("[data-off-canvas-content]")
                      .append(this.$overlay);
            }
            (this.options.isRevealed =
              this.options.isRevealed ||
              new RegExp(this.options.revealClass, "g").test(
                this.$element[0].className
              )),
              this.options.isRevealed === !0 &&
                ((this.options.revealOn =
                  this.options.revealOn ||
                  this.$element[0].className
                    .match(/(reveal-for-medium|reveal-for-large)/g)[0]
                    .split("-")[2]),
                this._setMQChecker()),
              !this.options.transitionTime == !0 &&
                (this.options.transitionTime =
                  1e3 *
                  parseFloat(
                    window.getComputedStyle(t("[data-off-canvas]")[0])
                      .transitionDuration
                  ));
          },
        },
        {
          key: "_events",
          value: function () {
            if (
              (this.$element
                .off(".zf.trigger .zf.offcanvas")
                .on({
                  "open.zf.trigger": this.open.bind(this),
                  "close.zf.trigger": this.close.bind(this),
                  "toggle.zf.trigger": this.toggle.bind(this),
                  "keydown.zf.offcanvas": this._handleKeyboard.bind(this),
                }),
              this.options.closeOnClick === !0)
            ) {
              var e = this.options.contentOverlay
                ? this.$overlay
                : t("[data-off-canvas-content]");
              e.on({ "click.zf.offcanvas": this.close.bind(this) });
            }
          },
        },
        {
          key: "_setMQChecker",
          value: function () {
            var e = this;
            t(window)
              .on("changed.zf.mediaquery", function () {
                Foundation.MediaQuery.atLeast(e.options.revealOn)
                  ? e.reveal(!0)
                  : e.reveal(!1);
              })
              .one("load.zf.offcanvas", function () {
                Foundation.MediaQuery.atLeast(e.options.revealOn) &&
                  e.reveal(!0);
              });
          },
        },
        {
          key: "reveal",
          value: function (t) {
            var e = this.$element.find("[data-close]");
            t
              ? (this.close(),
                (this.isRevealed = !0),
                this.$element.attr("aria-hidden", "false"),
                this.$element.off("open.zf.trigger toggle.zf.trigger"),
                e.length && e.hide())
              : ((this.isRevealed = !1),
                this.$element.attr("aria-hidden", "true"),
                this.$element
                  .off("open.zf.trigger toggle.zf.trigger")
                  .on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                  }),
                e.length && e.show());
          },
        },
        {
          key: "_stopScrolling",
          value: function (t) {
            return !1;
          },
        },
        {
          key: "_recordScrollable",
          value: function (t) {
            var e = this;
            e.scrollHeight !== e.clientHeight &&
              (0 === e.scrollTop && (e.scrollTop = 1),
              e.scrollTop === e.scrollHeight - e.clientHeight &&
                (e.scrollTop = e.scrollHeight - e.clientHeight - 1)),
              (e.allowUp = e.scrollTop > 0),
              (e.allowDown = e.scrollTop < e.scrollHeight - e.clientHeight),
              (e.lastY = t.originalEvent.pageY);
          },
        },
        {
          key: "_stopScrollPropagation",
          value: function (t) {
            var e = this,
              i = t.pageY < e.lastY,
              n = !i;
            (e.lastY = t.pageY),
              (i && e.allowUp) || (n && e.allowDown)
                ? t.stopPropagation()
                : t.preventDefault();
          },
        },
        {
          key: "open",
          value: function (e, i) {
            if (!this.$element.hasClass("is-open") && !this.isRevealed) {
              var n = this;
              i && (this.$lastTrigger = i),
                "top" === this.options.forceTo
                  ? window.scrollTo(0, 0)
                  : "bottom" === this.options.forceTo &&
                    window.scrollTo(0, document.body.scrollHeight),
                n.$element.addClass("is-open"),
                this.$triggers.attr("aria-expanded", "true"),
                this.$element
                  .attr("aria-hidden", "false")
                  .trigger("opened.zf.offcanvas"),
                this.options.contentScroll === !1 &&
                  (t("body")
                    .addClass("is-off-canvas-open")
                    .on("touchmove", this._stopScrolling),
                  this.$element.on("touchstart", this._recordScrollable),
                  this.$element.on("touchmove", this._stopScrollPropagation)),
                this.options.contentOverlay === !0 &&
                  this.$overlay.addClass("is-visible"),
                this.options.closeOnClick === !0 &&
                  this.options.contentOverlay === !0 &&
                  this.$overlay.addClass("is-closable"),
                this.options.autoFocus === !0 &&
                  this.$element.one(
                    Foundation.transitionend(this.$element),
                    function () {
                      var t = n.$element.find("[data-autofocus]");
                      t.length
                        ? t.eq(0).focus()
                        : n.$element.find("a, button").eq(0).focus();
                    }
                  ),
                this.options.trapFocus === !0 &&
                  (this.$element
                    .siblings("[data-off-canvas-content]")
                    .attr("tabindex", "-1"),
                  Foundation.Keyboard.trapFocus(this.$element));
            }
          },
        },
        {
          key: "close",
          value: function (e) {
            if (this.$element.hasClass("is-open") && !this.isRevealed) {
              var i = this;
              i.$element.removeClass("is-open"),
                this.$element
                  .attr("aria-hidden", "true")
                  .trigger("closed.zf.offcanvas"),
                this.options.contentScroll === !1 &&
                  (t("body")
                    .removeClass("is-off-canvas-open")
                    .off("touchmove", this._stopScrolling),
                  this.$element.off("touchstart", this._recordScrollable),
                  this.$element.off("touchmove", this._stopScrollPropagation)),
                this.options.contentOverlay === !0 &&
                  this.$overlay.removeClass("is-visible"),
                this.options.closeOnClick === !0 &&
                  this.options.contentOverlay === !0 &&
                  this.$overlay.removeClass("is-closable"),
                this.$triggers.attr("aria-expanded", "false"),
                this.options.trapFocus === !0 &&
                  (this.$element
                    .siblings("[data-off-canvas-content]")
                    .removeAttr("tabindex"),
                  Foundation.Keyboard.releaseFocus(this.$element));
            }
          },
        },
        {
          key: "toggle",
          value: function (t, e) {
            this.$element.hasClass("is-open")
              ? this.close(t, e)
              : this.open(t, e);
          },
        },
        {
          key: "_handleKeyboard",
          value: function (t) {
            var e = this;
            Foundation.Keyboard.handleKey(t, "OffCanvas", {
              close: function () {
                return e.close(), e.$lastTrigger.focus(), !0;
              },
              handled: function () {
                t.stopPropagation(), t.preventDefault();
              },
            });
          },
        },
        {
          key: "destroy",
          value: function () {
            this.close(),
              this.$element.off(".zf.trigger .zf.offcanvas"),
              this.$overlay.off(".zf.offcanvas"),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    closeOnClick: !0,
    contentOverlay: !0,
    contentScroll: !0,
    transitionTime: 0,
    transition: "push",
    forceTo: null,
    isRevealed: !1,
    revealOn: null,
    autoFocus: !0,
    revealClass: "reveal-for-",
    trapFocus: !1,
  }),
    Foundation.plugin(e, "OffCanvas");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Orbit"),
        Foundation.Keyboard.register("Orbit", {
          ltr: { ARROW_RIGHT: "next", ARROW_LEFT: "previous" },
          rtl: { ARROW_LEFT: "next", ARROW_RIGHT: "previous" },
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            this._reset(),
              (this.$wrapper = this.$element.find(
                "." + this.options.containerClass
              )),
              (this.$slides = this.$element.find(
                "." + this.options.slideClass
              ));
            var t = this.$element.find("img"),
              e = this.$slides.filter(".is-active"),
              i = this.$element[0].id || Foundation.GetYoDigits(6, "orbit");
            this.$element.attr({ "data-resize": i, id: i }),
              e.length || this.$slides.eq(0).addClass("is-active"),
              this.options.useMUI || this.$slides.addClass("no-motionui"),
              t.length
                ? Foundation.onImagesLoaded(t, this._prepareForOrbit.bind(this))
                : this._prepareForOrbit(),
              this.options.bullets && this._loadBullets(),
              this._events(),
              this.options.autoPlay &&
                this.$slides.length > 1 &&
                this.geoSync(),
              this.options.accessible && this.$wrapper.attr("tabindex", 0);
          },
        },
        {
          key: "_loadBullets",
          value: function () {
            this.$bullets = this.$element
              .find("." + this.options.boxOfBullets)
              .find("button");
          },
        },
        {
          key: "geoSync",
          value: function () {
            var t = this;
            (this.timer = new Foundation.Timer(
              this.$element,
              { duration: this.options.timerDelay, infinite: !1 },
              function () {
                t.changeSlide(!0);
              }
            )),
              this.timer.start();
          },
        },
        {
          key: "_prepareForOrbit",
          value: function () {
            this._setWrapperHeight();
          },
        },
        {
          key: "_setWrapperHeight",
          value: function (e) {
            var i,
              n = 0,
              s = 0,
              o = this;
            this.$slides.each(function () {
              (i = this.getBoundingClientRect().height),
                t(this).attr("data-slide", s),
                o.$slides.filter(".is-active")[0] !== o.$slides.eq(s)[0] &&
                  t(this).css({ position: "relative", display: "none" }),
                (n = i > n ? i : n),
                s++;
            }),
              s === this.$slides.length &&
                (this.$wrapper.css({ height: n }), e && e(n));
          },
        },
        {
          key: "_setSlideHeight",
          value: function (e) {
            this.$slides.each(function () {
              t(this).css("max-height", e);
            });
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            if (
              (this.$element
                .off(".resizeme.zf.trigger")
                .on({
                  "resizeme.zf.trigger": this._prepareForOrbit.bind(this),
                }),
              this.$slides.length > 1)
            ) {
              if (
                (this.options.swipe &&
                  this.$slides
                    .off("swipeleft.zf.orbit swiperight.zf.orbit")
                    .on("swipeleft.zf.orbit", function (t) {
                      t.preventDefault(), e.changeSlide(!0);
                    })
                    .on("swiperight.zf.orbit", function (t) {
                      t.preventDefault(), e.changeSlide(!1);
                    }),
                this.options.autoPlay &&
                  (this.$slides.on("click.zf.orbit", function () {
                    e.$element.data("clickedOn", !e.$element.data("clickedOn")),
                      e.timer[
                        e.$element.data("clickedOn") ? "pause" : "start"
                      ]();
                  }),
                  this.options.pauseOnHover &&
                    this.$element
                      .on("mouseenter.zf.orbit", function () {
                        e.timer.pause();
                      })
                      .on("mouseleave.zf.orbit", function () {
                        e.$element.data("clickedOn") || e.timer.start();
                      })),
                this.options.navButtons)
              ) {
                var i = this.$element.find(
                  "." + this.options.nextClass + ", ." + this.options.prevClass
                );
                i.attr("tabindex", 0).on(
                  "click.zf.orbit touchend.zf.orbit",
                  function (i) {
                    i.preventDefault(),
                      e.changeSlide(t(this).hasClass(e.options.nextClass));
                  }
                );
              }
              this.options.bullets &&
                this.$bullets.on(
                  "click.zf.orbit touchend.zf.orbit",
                  function () {
                    if (/is-active/g.test(this.className)) return !1;
                    var i = t(this).data("slide"),
                      n = i > e.$slides.filter(".is-active").data("slide"),
                      s = e.$slides.eq(i);
                    e.changeSlide(n, s, i);
                  }
                ),
                this.options.accessible &&
                  this.$wrapper
                    .add(this.$bullets)
                    .on("keydown.zf.orbit", function (i) {
                      Foundation.Keyboard.handleKey(i, "Orbit", {
                        next: function () {
                          e.changeSlide(!0);
                        },
                        previous: function () {
                          e.changeSlide(!1);
                        },
                        handled: function () {
                          t(i.target).is(e.$bullets) &&
                            e.$bullets.filter(".is-active").focus();
                        },
                      });
                    });
            }
          },
        },
        {
          key: "_reset",
          value: function () {
            "undefined" != typeof this.$slides &&
              this.$slides.length > 1 &&
              (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),
              this.options.autoPlay && this.timer.restart(),
              this.$slides.each(function (e) {
                t(e)
                  .removeClass("is-active is-active is-in")
                  .removeAttr("aria-live")
                  .hide();
              }),
              this.$slides.first().addClass("is-active").show(),
              this.$element.trigger("slidechange.zf.orbit", [
                this.$slides.first(),
              ]),
              this.options.bullets && this._updateBullets(0));
          },
        },
        {
          key: "changeSlide",
          value: function (t, e, i) {
            if (this.$slides) {
              var n = this.$slides.filter(".is-active").eq(0);
              if (/mui/g.test(n[0].className)) return !1;
              var s,
                o = this.$slides.first(),
                a = this.$slides.last(),
                r = t ? "Right" : "Left",
                l = t ? "Left" : "Right",
                h = this;
              (s = e
                ? e
                : t
                ? this.options.infiniteWrap
                  ? n.next("." + this.options.slideClass).length
                    ? n.next("." + this.options.slideClass)
                    : o
                  : n.next("." + this.options.slideClass)
                : this.options.infiniteWrap
                ? n.prev("." + this.options.slideClass).length
                  ? n.prev("." + this.options.slideClass)
                  : a
                : n.prev("." + this.options.slideClass)),
                s.length &&
                  (this.$element.trigger("beforeslidechange.zf.orbit", [n, s]),
                  this.options.bullets &&
                    ((i = i || this.$slides.index(s)), this._updateBullets(i)),
                  this.options.useMUI && !this.$element.is(":hidden")
                    ? (Foundation.Motion.animateIn(
                        s
                          .addClass("is-active")
                          .css({ position: "absolute", top: 0 }),
                        this.options["animInFrom" + r],
                        function () {
                          s.css({
                            position: "relative",
                            display: "block",
                          }).attr("aria-live", "polite");
                        }
                      ),
                      Foundation.Motion.animateOut(
                        n.removeClass("is-active"),
                        this.options["animOutTo" + l],
                        function () {
                          n.removeAttr("aria-live"),
                            h.options.autoPlay &&
                              !h.timer.isPaused &&
                              h.timer.restart();
                        }
                      ))
                    : (n
                        .removeClass("is-active is-in")
                        .removeAttr("aria-live")
                        .hide(),
                      s
                        .addClass("is-active is-in")
                        .attr("aria-live", "polite")
                        .show(),
                      this.options.autoPlay &&
                        !this.timer.isPaused &&
                        this.timer.restart()),
                  this.$element.trigger("slidechange.zf.orbit", [s]));
            }
          },
        },
        {
          key: "_updateBullets",
          value: function (t) {
            var e = this.$element
                .find("." + this.options.boxOfBullets)
                .find(".is-active")
                .removeClass("is-active")
                .blur(),
              i = e.find("span:last").detach();
            this.$bullets.eq(t).addClass("is-active").append(i);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element
              .off(".zf.orbit")
              .find("*")
              .off(".zf.orbit")
              .end()
              .hide(),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    bullets: !0,
    navButtons: !0,
    animInFromRight: "slide-in-right",
    animOutToRight: "slide-out-right",
    animInFromLeft: "slide-in-left",
    animOutToLeft: "slide-out-left",
    autoPlay: !0,
    timerDelay: 5e3,
    infiniteWrap: !0,
    swipe: !0,
    pauseOnHover: !0,
    accessible: !0,
    containerClass: "orbit-container",
    slideClass: "orbit-slide",
    boxOfBullets: "orbit-bullets",
    nextClass: "orbit-next",
    prevClass: "orbit-previous",
    useMUI: !0,
  }),
    Foundation.plugin(e, "Orbit");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = t(i)),
        (this.rules = this.$element.data("responsive-menu")),
        (this.currentMq = null),
        (this.currentPlugin = null),
        this._init(),
        this._events(),
        Foundation.registerPlugin(this, "ResponsiveMenu");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            if ("string" == typeof this.rules) {
              for (
                var e = {}, n = this.rules.split(" "), s = 0;
                s < n.length;
                s++
              ) {
                var o = n[s].split("-"),
                  a = o.length > 1 ? o[0] : "small",
                  r = o.length > 1 ? o[1] : o[0];
                null !== i[r] && (e[a] = i[r]);
              }
              this.rules = e;
            }
            t.isEmptyObject(this.rules) || this._checkMediaQueries(),
              this.$element.attr(
                "data-mutate",
                this.$element.attr("data-mutate") ||
                  Foundation.GetYoDigits(6, "responsive-menu")
              );
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this;
            t(window).on("changed.zf.mediaquery", function () {
              e._checkMediaQueries();
            });
          },
        },
        {
          key: "_checkMediaQueries",
          value: function () {
            var e,
              n = this;
            t.each(this.rules, function (t) {
              Foundation.MediaQuery.atLeast(t) && (e = t);
            }),
              e &&
                (this.currentPlugin instanceof this.rules[e].plugin ||
                  (t.each(i, function (t, e) {
                    n.$element.removeClass(e.cssClass);
                  }),
                  this.$element.addClass(this.rules[e].cssClass),
                  this.currentPlugin && this.currentPlugin.destroy(),
                  (this.currentPlugin = new this.rules[e].plugin(
                    this.$element,
                    {}
                  ))));
          },
        },
        {
          key: "destroy",
          value: function () {
            this.currentPlugin.destroy(),
              t(window).off(".zf.ResponsiveMenu"),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  e.defaults = {};
  var i = {
    dropdown: {
      cssClass: "dropdown",
      plugin: Foundation._plugins["dropdown-menu"] || null,
    },
    drilldown: {
      cssClass: "drilldown",
      plugin: Foundation._plugins.drilldown || null,
    },
    accordion: {
      cssClass: "accordion-menu",
      plugin: Foundation._plugins["accordion-menu"] || null,
    },
  };
  Foundation.plugin(e, "ResponsiveMenu");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = t(i)),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        this._events(),
        Foundation.registerPlugin(this, "ResponsiveToggle");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e = this.$element.data("responsive-toggle");
            if (
              (e ||
                console.error(
                  "Your tab bar needs an ID of a Menu as the value of data-tab-bar."
                ),
              (this.$targetMenu = t("#" + e)),
              (this.$toggler = this.$element
                .find("[data-toggle]")
                .filter(function () {
                  var i = t(this).data("toggle");
                  return i === e || "" === i;
                })),
              (this.options = t.extend(
                {},
                this.options,
                this.$targetMenu.data()
              )),
              this.options.animate)
            ) {
              var i = this.options.animate.split(" ");
              (this.animationIn = i[0]), (this.animationOut = i[1] || null);
            }
            this._update();
          },
        },
        {
          key: "_events",
          value: function () {
            (this._updateMqHandler = this._update.bind(this)),
              t(window).on("changed.zf.mediaquery", this._updateMqHandler),
              this.$toggler.on(
                "click.zf.responsiveToggle",
                this.toggleMenu.bind(this)
              );
          },
        },
        {
          key: "_update",
          value: function () {
            Foundation.MediaQuery.atLeast(this.options.hideFor)
              ? (this.$element.hide(), this.$targetMenu.show())
              : (this.$element.show(), this.$targetMenu.hide());
          },
        },
        {
          key: "toggleMenu",
          value: function () {
            var t = this;
            Foundation.MediaQuery.atLeast(this.options.hideFor) ||
              (this.options.animate
                ? this.$targetMenu.is(":hidden")
                  ? Foundation.Motion.animateIn(
                      this.$targetMenu,
                      this.animationIn,
                      function () {
                        t.$element.trigger("toggled.zf.responsiveToggle"),
                          t.$targetMenu
                            .find("[data-mutate]")
                            .triggerHandler("mutateme.zf.trigger");
                      }
                    )
                  : Foundation.Motion.animateOut(
                      this.$targetMenu,
                      this.animationOut,
                      function () {
                        t.$element.trigger("toggled.zf.responsiveToggle");
                      }
                    )
                : (this.$targetMenu.toggle(0),
                  this.$targetMenu
                    .find("[data-mutate]")
                    .trigger("mutateme.zf.trigger"),
                  this.$element.trigger("toggled.zf.responsiveToggle")));
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element.off(".zf.responsiveToggle"),
              this.$toggler.off(".zf.responsiveToggle"),
              t(window).off("changed.zf.mediaquery", this._updateMqHandler),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = { hideFor: "medium", animate: !1 }),
    Foundation.plugin(e, "ResponsiveToggle");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  function e() {
    return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent);
  }
  function i() {
    return /Android/.test(window.navigator.userAgent);
  }
  function n() {
    return e() || i();
  }
  var s = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Reveal"),
        Foundation.Keyboard.register("Reveal", {
          ENTER: "open",
          SPACE: "open",
          ESCAPE: "close",
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            (this.id = this.$element.attr("id")),
              (this.isActive = !1),
              (this.cached = { mq: Foundation.MediaQuery.current }),
              (this.isMobile = n()),
              (this.$anchor = t(
                t('[data-open="' + this.id + '"]').length
                  ? '[data-open="' + this.id + '"]'
                  : '[data-toggle="' + this.id + '"]'
              )),
              this.$anchor.attr({
                "aria-controls": this.id,
                "aria-haspopup": !0,
                tabindex: 0,
              }),
              (this.options.fullScreen || this.$element.hasClass("full")) &&
                ((this.options.fullScreen = !0), (this.options.overlay = !1)),
              this.options.overlay &&
                !this.$overlay &&
                (this.$overlay = this._makeOverlay(this.id)),
              this.$element.attr({
                role: "dialog",
                "aria-hidden": !0,
                "data-yeti-box": this.id,
                "data-resize": this.id,
              }),
              this.$overlay
                ? this.$element.detach().appendTo(this.$overlay)
                : (this.$element.detach().appendTo(t(this.options.appendTo)),
                  this.$element.addClass("without-overlay")),
              this._events(),
              this.options.deepLink &&
                window.location.hash === "#" + this.id &&
                t(window).one("load.zf.reveal", this.open.bind(this));
          },
        },
        {
          key: "_makeOverlay",
          value: function () {
            return t("<div></div>")
              .addClass("reveal-overlay")
              .appendTo(this.options.appendTo);
          },
        },
        {
          key: "_updatePosition",
          value: function () {
            var e,
              i,
              n = this.$element.outerWidth(),
              s = t(window).width(),
              o = this.$element.outerHeight(),
              a = t(window).height();
            (e =
              "auto" === this.options.hOffset
                ? parseInt((s - n) / 2, 10)
                : parseInt(this.options.hOffset, 10)),
              (i =
                "auto" === this.options.vOffset
                  ? o > a
                    ? parseInt(Math.min(100, a / 10), 10)
                    : parseInt((a - o) / 4, 10)
                  : parseInt(this.options.vOffset, 10)),
              this.$element.css({ top: i + "px" }),
              (this.$overlay && "auto" === this.options.hOffset) ||
                (this.$element.css({ left: e + "px" }),
                this.$element.css({ margin: "0px" }));
          },
        },
        {
          key: "_events",
          value: function () {
            var e = this,
              i = this;
            this.$element.on({
              "open.zf.trigger": this.open.bind(this),
              "close.zf.trigger": function (n, s) {
                if (
                  n.target === i.$element[0] ||
                  t(n.target).parents("[data-closable]")[0] === s
                )
                  return e.close.apply(e);
              },
              "toggle.zf.trigger": this.toggle.bind(this),
              "resizeme.zf.trigger": function () {
                i._updatePosition();
              },
            }),
              this.$anchor.length &&
                this.$anchor.on("keydown.zf.reveal", function (t) {
                  (13 !== t.which && 32 !== t.which) ||
                    (t.stopPropagation(), t.preventDefault(), i.open());
                }),
              this.options.closeOnClick &&
                this.options.overlay &&
                this.$overlay
                  .off(".zf.reveal")
                  .on("click.zf.reveal", function (e) {
                    e.target !== i.$element[0] &&
                      !t.contains(i.$element[0], e.target) &&
                      t.contains(document, e.target) &&
                      i.close();
                  }),
              this.options.deepLink &&
                t(window).on(
                  "popstate.zf.reveal:" + this.id,
                  this._handleState.bind(this)
                );
          },
        },
        {
          key: "_handleState",
          value: function (t) {
            window.location.hash !== "#" + this.id || this.isActive
              ? this.close()
              : this.open();
          },
        },
        {
          key: "open",
          value: function () {
            function e() {
              s.isMobile
                ? (s.originalScrollPos ||
                    (s.originalScrollPos = window.pageYOffset),
                  t("html, body").addClass("is-reveal-open"))
                : t("body").addClass("is-reveal-open");
            }
            var i = this;
            if (this.options.deepLink) {
              var n = "#" + this.id;
              window.history.pushState
                ? window.history.pushState(null, null, n)
                : (window.location.hash = n);
            }
            (this.isActive = !0),
              this.$element.css({ visibility: "hidden" }).show().scrollTop(0),
              this.options.overlay &&
                this.$overlay.css({ visibility: "hidden" }).show(),
              this._updatePosition(),
              this.$element.hide().css({ visibility: "" }),
              this.$overlay &&
                (this.$overlay.css({ visibility: "" }).hide(),
                this.$element.hasClass("fast")
                  ? this.$overlay.addClass("fast")
                  : this.$element.hasClass("slow") &&
                    this.$overlay.addClass("slow")),
              this.options.multipleOpened ||
                this.$element.trigger("closeme.zf.reveal", this.id);
            var s = this;
            if (this.options.animationIn) {
              var o = function () {
                s.$element.attr({ "aria-hidden": !1, tabindex: -1 }).focus(),
                  e(),
                  Foundation.Keyboard.trapFocus(s.$element);
              };
              this.options.overlay &&
                Foundation.Motion.animateIn(this.$overlay, "fade-in"),
                Foundation.Motion.animateIn(
                  this.$element,
                  this.options.animationIn,
                  function () {
                    i.$element &&
                      ((i.focusableElements = Foundation.Keyboard.findFocusable(
                        i.$element
                      )),
                      o());
                  }
                );
            } else
              this.options.overlay && this.$overlay.show(0),
                this.$element.show(this.options.showDelay);
            this.$element.attr({ "aria-hidden": !1, tabindex: -1 }).focus(),
              Foundation.Keyboard.trapFocus(this.$element),
              this.$element.trigger("open.zf.reveal"),
              e(),
              setTimeout(function () {
                i._extraHandlers();
              }, 0);
          },
        },
        {
          key: "_extraHandlers",
          value: function () {
            var e = this;
            this.$element &&
              ((this.focusableElements = Foundation.Keyboard.findFocusable(
                this.$element
              )),
              this.options.overlay ||
                !this.options.closeOnClick ||
                this.options.fullScreen ||
                t("body").on("click.zf.reveal", function (i) {
                  i.target !== e.$element[0] &&
                    !t.contains(e.$element[0], i.target) &&
                    t.contains(document, i.target) &&
                    e.close();
                }),
              this.options.closeOnEsc &&
                t(window).on("keydown.zf.reveal", function (t) {
                  Foundation.Keyboard.handleKey(t, "Reveal", {
                    close: function () {
                      e.options.closeOnEsc && (e.close(), e.$anchor.focus());
                    },
                  });
                }),
              this.$element.on("keydown.zf.reveal", function (i) {
                var n = t(this);
                Foundation.Keyboard.handleKey(i, "Reveal", {
                  open: function () {
                    e.$element
                      .find(":focus")
                      .is(e.$element.find("[data-close]"))
                      ? setTimeout(function () {
                          e.$anchor.focus();
                        }, 1)
                      : n.is(e.focusableElements) && e.open();
                  },
                  close: function () {
                    e.options.closeOnEsc && (e.close(), e.$anchor.focus());
                  },
                  handled: function (t) {
                    t && i.preventDefault();
                  },
                });
              }));
          },
        },
        {
          key: "close",
          value: function () {
            function e() {
              i.isMobile
                ? (0 === t(".reveal:visible").length &&
                    t("html, body").removeClass("is-reveal-open"),
                  i.originalScrollPos &&
                    (t("body").scrollTop(i.originalScrollPos),
                    (i.originalScrollPos = null)))
                : 0 === t(".reveal:visible").length &&
                  t("body").removeClass("is-reveal-open"),
                Foundation.Keyboard.releaseFocus(i.$element),
                i.$element.attr("aria-hidden", !0),
                i.$element.trigger("closed.zf.reveal");
            }
            if (!this.isActive || !this.$element.is(":visible")) return !1;
            var i = this;
            this.options.animationOut
              ? (this.options.overlay
                  ? Foundation.Motion.animateOut(this.$overlay, "fade-out", e)
                  : e(),
                Foundation.Motion.animateOut(
                  this.$element,
                  this.options.animationOut
                ))
              : (this.$element.hide(this.options.hideDelay),
                this.options.overlay ? this.$overlay.hide(0, e) : e()),
              this.options.closeOnEsc && t(window).off("keydown.zf.reveal"),
              !this.options.overlay &&
                this.options.closeOnClick &&
                t("body").off("click.zf.reveal"),
              this.$element.off("keydown.zf.reveal"),
              this.options.resetOnClose &&
                this.$element.html(this.$element.html()),
              (this.isActive = !1),
              i.options.deepLink &&
                (window.history.replaceState
                  ? window.history.replaceState(
                      "",
                      document.title,
                      window.location.href.replace("#" + this.id, "")
                    )
                  : (window.location.hash = ""));
          },
        },
        {
          key: "toggle",
          value: function () {
            this.isActive ? this.close() : this.open();
          },
        },
        {
          key: "destroy",
          value: function () {
            this.options.overlay &&
              (this.$element.appendTo(t(this.options.appendTo)),
              this.$overlay.hide().off().remove()),
              this.$element.hide().off(),
              this.$anchor.off(".zf"),
              t(window).off(".zf.reveal:" + this.id),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (s.defaults = {
    animationIn: "",
    animationOut: "",
    showDelay: 0,
    hideDelay: 0,
    closeOnClick: !0,
    closeOnEsc: !0,
    multipleOpened: !1,
    vOffset: "auto",
    hOffset: "auto",
    fullScreen: !1,
    btmOffsetPct: 10,
    overlay: !0,
    resetOnClose: !1,
    deepLink: !1,
    appendTo: "body",
  }),
    Foundation.plugin(s, "Reveal");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  function e(t, e) {
    return t / e;
  }
  function i(t, e, i, n) {
    return Math.abs(t.position()[e] + t[n]() / 2 - i);
  }
  function n(t, e) {
    return Math.log(e) / Math.log(t);
  }
  var s = (function () {
    function s(e, i) {
      _classCallCheck(this, s),
        (this.$element = e),
        (this.options = t.extend({}, s.defaults, this.$element.data(), i)),
        this._init(),
        Foundation.registerPlugin(this, "Slider"),
        Foundation.Keyboard.register("Slider", {
          ltr: {
            ARROW_RIGHT: "increase",
            ARROW_UP: "increase",
            ARROW_DOWN: "decrease",
            ARROW_LEFT: "decrease",
            SHIFT_ARROW_RIGHT: "increase_fast",
            SHIFT_ARROW_UP: "increase_fast",
            SHIFT_ARROW_DOWN: "decrease_fast",
            SHIFT_ARROW_LEFT: "decrease_fast",
          },
          rtl: {
            ARROW_LEFT: "increase",
            ARROW_RIGHT: "decrease",
            SHIFT_ARROW_LEFT: "increase_fast",
            SHIFT_ARROW_RIGHT: "decrease_fast",
          },
        });
    }
    return (
      _createClass(s, [
        {
          key: "_init",
          value: function () {
            (this.inputs = this.$element.find("input")),
              (this.handles = this.$element.find("[data-slider-handle]")),
              (this.$handle = this.handles.eq(0)),
              (this.$input = this.inputs.length
                ? this.inputs.eq(0)
                : t("#" + this.$handle.attr("aria-controls"))),
              (this.$fill = this.$element
                .find("[data-slider-fill]")
                .css(this.options.vertical ? "height" : "width", 0));
            var e = !1;
            (this.options.disabled ||
              this.$element.hasClass(this.options.disabledClass)) &&
              ((this.options.disabled = !0),
              this.$element.addClass(this.options.disabledClass)),
              this.inputs.length ||
                ((this.inputs = t().add(this.$input)),
                (this.options.binding = !0)),
              this._setInitAttr(0),
              this.handles[1] &&
                ((this.options.doubleSided = !0),
                (this.$handle2 = this.handles.eq(1)),
                (this.$input2 =
                  this.inputs.length > 1
                    ? this.inputs.eq(1)
                    : t("#" + this.$handle2.attr("aria-controls"))),
                this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)),
                (e = !0),
                this._setInitAttr(1)),
              this.setHandles(),
              this._events();
          },
        },
        {
          key: "setHandles",
          value: function () {
            var t = this;
            this.handles[1]
              ? this._setHandlePos(
                  this.$handle,
                  this.inputs.eq(0).val(),
                  !0,
                  function () {
                    t._setHandlePos(t.$handle2, t.inputs.eq(1).val(), !0);
                  }
                )
              : this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0);
          },
        },
        {
          key: "_reflow",
          value: function () {
            this.setHandles();
          },
        },
        {
          key: "_pctOfBar",
          value: function (t) {
            var i = e(
              t - this.options.start,
              this.options.end - this.options.start
            );
            switch (this.options.positionValueFunction) {
              case "pow":
                i = this._logTransform(i);
                break;
              case "log":
                i = this._powTransform(i);
            }
            return i.toFixed(2);
          },
        },
        {
          key: "_value",
          value: function (t) {
            switch (this.options.positionValueFunction) {
              case "pow":
                t = this._powTransform(t);
                break;
              case "log":
                t = this._logTransform(t);
            }
            var e =
              (this.options.end - this.options.start) * t + this.options.start;
            return e;
          },
        },
        {
          key: "_logTransform",
          value: function (t) {
            return n(
              this.options.nonLinearBase,
              t * (this.options.nonLinearBase - 1) + 1
            );
          },
        },
        {
          key: "_powTransform",
          value: function (t) {
            return (
              (Math.pow(this.options.nonLinearBase, t) - 1) /
              (this.options.nonLinearBase - 1)
            );
          },
        },
        {
          key: "_setHandlePos",
          value: function (t, i, n, s) {
            if (!this.$element.hasClass(this.options.disabledClass)) {
              (i = parseFloat(i)),
                i < this.options.start
                  ? (i = this.options.start)
                  : i > this.options.end && (i = this.options.end);
              var o = this.options.doubleSided;
              if (o)
                if (0 === this.handles.index(t)) {
                  var a = parseFloat(this.$handle2.attr("aria-valuenow"));
                  i = i >= a ? a - this.options.step : i;
                } else {
                  var r = parseFloat(this.$handle.attr("aria-valuenow"));
                  i = i <= r ? r + this.options.step : i;
                }
              this.options.vertical && !n && (i = this.options.end - i);
              var l = this,
                h = this.options.vertical,
                u = h ? "height" : "width",
                d = h ? "top" : "left",
                c = t[0].getBoundingClientRect()[u],
                f = this.$element[0].getBoundingClientRect()[u],
                p = this._pctOfBar(i),
                m = (f - c) * p,
                g = (100 * e(m, f)).toFixed(this.options.decimal);
              i = parseFloat(i.toFixed(this.options.decimal));
              var v = {};
              if ((this._setValues(t, i), o)) {
                var y,
                  w = 0 === this.handles.index(t),
                  b = ~~(100 * e(c, f));
                if (w)
                  (v[d] = g + "%"),
                    (y = parseFloat(this.$handle2[0].style[d]) - g + b),
                    s && "function" == typeof s && s();
                else {
                  var $ = parseFloat(this.$handle[0].style[d]);
                  y =
                    g -
                    (isNaN($)
                      ? (this.options.initialStart - this.options.start) /
                        ((this.options.end - this.options.start) / 100)
                      : $) +
                    b;
                }
                v["min-" + u] = y + "%";
              }
              this.$element.one("finished.zf.animate", function () {
                l.$element.trigger("moved.zf.slider", [t]);
              });
              var C = this.$element.data("dragging")
                ? 1e3 / 60
                : this.options.moveTime;
              Foundation.Move(C, t, function () {
                isNaN(g) ? t.css(d, 100 * p + "%") : t.css(d, g + "%"),
                  l.options.doubleSided
                    ? l.$fill.css(v)
                    : l.$fill.css(u, 100 * p + "%");
              }),
                clearTimeout(l.timeout),
                (l.timeout = setTimeout(function () {
                  l.$element.trigger("changed.zf.slider", [t]);
                }, l.options.changedDelay));
            }
          },
        },
        {
          key: "_setInitAttr",
          value: function (t) {
            var e =
                0 === t ? this.options.initialStart : this.options.initialEnd,
              i =
                this.inputs.eq(t).attr("id") ||
                Foundation.GetYoDigits(6, "slider");
            this.inputs
              .eq(t)
              .attr({
                id: i,
                max: this.options.end,
                min: this.options.start,
                step: this.options.step,
              }),
              this.inputs.eq(t).val(e),
              this.handles
                .eq(t)
                .attr({
                  role: "slider",
                  "aria-controls": i,
                  "aria-valuemax": this.options.end,
                  "aria-valuemin": this.options.start,
                  "aria-valuenow": e,
                  "aria-orientation": this.options.vertical
                    ? "vertical"
                    : "horizontal",
                  tabindex: 0,
                });
          },
        },
        {
          key: "_setValues",
          value: function (t, e) {
            var i = this.options.doubleSided ? this.handles.index(t) : 0;
            this.inputs.eq(i).val(e), t.attr("aria-valuenow", e);
          },
        },
        {
          key: "_handleEvent",
          value: function (n, s, o) {
            var a, r;
            if (o) (a = this._adjustValue(null, o)), (r = !0);
            else {
              n.preventDefault();
              var l = this,
                h = this.options.vertical,
                u = h ? "height" : "width",
                d = h ? "top" : "left",
                c = h ? n.pageY : n.pageX,
                f =
                  (this.$handle[0].getBoundingClientRect()[u] / 2,
                  this.$element[0].getBoundingClientRect()[u]),
                p = h ? t(window).scrollTop() : t(window).scrollLeft(),
                m = this.$element.offset()[d];
              n.clientY === n.pageY && (c += p);
              var g,
                v = c - m;
              g = v < 0 ? 0 : v > f ? f : v;
              var y = e(g, f);
              if (
                ((a = this._value(y)),
                Foundation.rtl() &&
                  !this.options.vertical &&
                  (a = this.options.end - a),
                (a = l._adjustValue(null, a)),
                (r = !1),
                !s)
              ) {
                var w = i(this.$handle, d, g, u),
                  b = i(this.$handle2, d, g, u);
                s = w <= b ? this.$handle : this.$handle2;
              }
            }
            this._setHandlePos(s, a, r);
          },
        },
        {
          key: "_adjustValue",
          value: function (t, e) {
            var i,
              n,
              s,
              o,
              a = this.options.step,
              r = parseFloat(a / 2);
            return (
              (i = t ? parseFloat(t.attr("aria-valuenow")) : e),
              (n = i % a),
              (s = i - n),
              (o = s + a),
              0 === n ? i : (i = i >= s + r ? o : s)
            );
          },
        },
        {
          key: "_events",
          value: function () {
            this._eventsForHandle(this.$handle),
              this.handles[1] && this._eventsForHandle(this.$handle2);
          },
        },
        {
          key: "_eventsForHandle",
          value: function (e) {
            var i,
              n = this;
            if (
              (this.inputs
                .off("change.zf.slider")
                .on("change.zf.slider", function (e) {
                  var i = n.inputs.index(t(this));
                  n._handleEvent(e, n.handles.eq(i), t(this).val());
                }),
              this.options.clickSelect &&
                this.$element
                  .off("click.zf.slider")
                  .on("click.zf.slider", function (e) {
                    return (
                      !n.$element.data("dragging") &&
                      void (
                        t(e.target).is("[data-slider-handle]") ||
                        (n.options.doubleSided
                          ? n._handleEvent(e)
                          : n._handleEvent(e, n.$handle))
                      )
                    );
                  }),
              this.options.draggable)
            ) {
              this.handles.addTouch();
              var s = t("body");
              e.off("mousedown.zf.slider")
                .on("mousedown.zf.slider", function (o) {
                  e.addClass("is-dragging"),
                    n.$fill.addClass("is-dragging"),
                    n.$element.data("dragging", !0),
                    (i = t(o.currentTarget)),
                    s
                      .on("mousemove.zf.slider", function (t) {
                        t.preventDefault(), n._handleEvent(t, i);
                      })
                      .on("mouseup.zf.slider", function (t) {
                        n._handleEvent(t, i),
                          e.removeClass("is-dragging"),
                          n.$fill.removeClass("is-dragging"),
                          n.$element.data("dragging", !1),
                          s.off("mousemove.zf.slider mouseup.zf.slider");
                      });
                })
                .on("selectstart.zf.slider touchmove.zf.slider", function (t) {
                  t.preventDefault();
                });
            }
            e.off("keydown.zf.slider").on("keydown.zf.slider", function (e) {
              var i,
                s = t(this),
                o = n.options.doubleSided ? n.handles.index(s) : 0,
                a = parseFloat(n.inputs.eq(o).val());
              Foundation.Keyboard.handleKey(e, "Slider", {
                decrease: function () {
                  i = a - n.options.step;
                },
                increase: function () {
                  i = a + n.options.step;
                },
                decrease_fast: function () {
                  i = a - 10 * n.options.step;
                },
                increase_fast: function () {
                  i = a + 10 * n.options.step;
                },
                handled: function () {
                  e.preventDefault(), n._setHandlePos(s, i, !0);
                },
              });
            });
          },
        },
        {
          key: "destroy",
          value: function () {
            this.handles.off(".zf.slider"),
              this.inputs.off(".zf.slider"),
              this.$element.off(".zf.slider"),
              clearTimeout(this.timeout),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      s
    );
  })();
  (s.defaults = {
    start: 0,
    end: 100,
    step: 1,
    initialStart: 0,
    initialEnd: 100,
    binding: !1,
    clickSelect: !0,
    vertical: !1,
    draggable: !0,
    disabled: !1,
    doubleSided: !1,
    decimal: 2,
    moveTime: 200,
    disabledClass: "disabled",
    invertVertical: !1,
    changedDelay: 500,
    nonLinearBase: 5,
    positionValueFunction: "linear",
  }),
    Foundation.plugin(s, "Slider");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  function e(t) {
    return (
      parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
    );
  }
  var i = (function () {
    function i(e, n) {
      _classCallCheck(this, i),
        (this.$element = e),
        (this.options = t.extend({}, i.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Sticky");
    }
    return (
      _createClass(i, [
        {
          key: "_init",
          value: function () {
            var e = this.$element.parent("[data-sticky-container]"),
              i = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"),
              n = this;
            e.length || (this.wasWrapped = !0),
              (this.$container = e.length
                ? e
                : t(this.options.container).wrapInner(this.$element)),
              this.$container.addClass(this.options.containerClass),
              this.$element
                .addClass(this.options.stickyClass)
                .attr({ "data-resize": i, "data-mutate": i }),
              "" !== this.options.anchor &&
                t("#" + n.options.anchor).attr({ "data-mutate": i }),
              (this.scrollCount = this.options.checkEvery),
              (this.isStuck = !1),
              t(window).one("load.zf.sticky", function () {
                (n.containerHeight =
                  "none" == n.$element.css("display")
                    ? 0
                    : n.$element[0].getBoundingClientRect().height),
                  n.$container.css("height", n.containerHeight),
                  (n.elemHeight = n.containerHeight),
                  "" !== n.options.anchor
                    ? (n.$anchor = t("#" + n.options.anchor))
                    : n._parsePoints(),
                  n._setSizes(function () {
                    var t = window.pageYOffset;
                    n._calc(!1, t),
                      n.isStuck || n._removeSticky(!(t >= n.topPoint));
                  }),
                  n._events(i.split("-").reverse().join("-"));
              });
          },
        },
        {
          key: "_parsePoints",
          value: function () {
            for (
              var e = "" == this.options.topAnchor ? 1 : this.options.topAnchor,
                i =
                  "" == this.options.btmAnchor
                    ? document.documentElement.scrollHeight
                    : this.options.btmAnchor,
                n = [e, i],
                s = {},
                o = 0,
                a = n.length;
              o < a && n[o];
              o++
            ) {
              var r;
              if ("number" == typeof n[o]) r = n[o];
              else {
                var l = n[o].split(":"),
                  h = t("#" + l[0]);
                (r = h.offset().top),
                  l[1] &&
                    "bottom" === l[1].toLowerCase() &&
                    (r += h[0].getBoundingClientRect().height);
              }
              s[o] = r;
            }
            this.points = s;
          },
        },
        {
          key: "_events",
          value: function (e) {
            var i = this,
              n = (this.scrollListener = "scroll.zf." + e);
            this.isOn ||
              (this.canStick &&
                ((this.isOn = !0),
                t(window)
                  .off(n)
                  .on(n, function (t) {
                    0 === i.scrollCount
                      ? ((i.scrollCount = i.options.checkEvery),
                        i._setSizes(function () {
                          i._calc(!1, window.pageYOffset);
                        }))
                      : (i.scrollCount--, i._calc(!1, window.pageYOffset));
                  })),
              this.$element
                .off("resizeme.zf.trigger")
                .on("resizeme.zf.trigger", function (t, n) {
                  i._eventsHandler(e);
                }),
              this.$element.on("mutateme.zf.trigger", function (t, n) {
                i._eventsHandler(e);
              }),
              this.$anchor &&
                this.$anchor.on("mutateme.zf.trigger", function (t, n) {
                  i._eventsHandler(e);
                }));
          },
        },
        {
          key: "_eventsHandler",
          value: function (t) {
            var e = this,
              i = (this.scrollListener = "scroll.zf." + t);
            e._setSizes(function () {
              e._calc(!1),
                e.canStick
                  ? e.isOn || e._events(t)
                  : e.isOn && e._pauseListeners(i);
            });
          },
        },
        {
          key: "_pauseListeners",
          value: function (e) {
            (this.isOn = !1),
              t(window).off(e),
              this.$element.trigger("pause.zf.sticky");
          },
        },
        {
          key: "_calc",
          value: function (t, e) {
            return (
              t && this._setSizes(),
              this.canStick
                ? (e || (e = window.pageYOffset),
                  void (e >= this.topPoint
                    ? e <= this.bottomPoint
                      ? this.isStuck || this._setSticky()
                      : this.isStuck && this._removeSticky(!1)
                    : this.isStuck && this._removeSticky(!0)))
                : (this.isStuck && this._removeSticky(!0), !1)
            );
          },
        },
        {
          key: "_setSticky",
          value: function () {
            var t = this,
              e = this.options.stickTo,
              i = "top" === e ? "marginTop" : "marginBottom",
              n = "top" === e ? "bottom" : "top",
              s = {};
            (s[i] = this.options[i] + "em"),
              (s[e] = 0),
              (s[n] = "auto"),
              (this.isStuck = !0),
              this.$element
                .removeClass("is-anchored is-at-" + n)
                .addClass("is-stuck is-at-" + e)
                .css(s)
                .trigger("sticky.zf.stuckto:" + e),
              this.$element.on(
                "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
                function () {
                  t._setSizes();
                }
              );
          },
        },
        {
          key: "_removeSticky",
          value: function (t) {
            var e = this.options.stickTo,
              i = "top" === e,
              n = {},
              s =
                (this.points
                  ? this.points[1] - this.points[0]
                  : this.anchorHeight) - this.elemHeight,
              o = i ? "marginTop" : "marginBottom",
              a = t ? "top" : "bottom";
            (n[o] = 0),
              (n.bottom = "auto"),
              t ? (n.top = 0) : (n.top = s),
              (this.isStuck = !1),
              this.$element
                .removeClass("is-stuck is-at-" + e)
                .addClass("is-anchored is-at-" + a)
                .css(n)
                .trigger("sticky.zf.unstuckfrom:" + a);
          },
        },
        {
          key: "_setSizes",
          value: function (t) {
            (this.canStick = Foundation.MediaQuery.is(this.options.stickyOn)),
              this.canStick || (t && "function" == typeof t && t());
            var e = this.$container[0].getBoundingClientRect().width,
              i = window.getComputedStyle(this.$container[0]),
              n = parseInt(i["padding-left"], 10),
              s = parseInt(i["padding-right"], 10);
            this.$anchor && this.$anchor.length
              ? (this.anchorHeight =
                  this.$anchor[0].getBoundingClientRect().height)
              : this._parsePoints(),
              this.$element.css({ "max-width": e - n - s + "px" });
            var o =
              this.$element[0].getBoundingClientRect().height ||
              this.containerHeight;
            if (
              ("none" == this.$element.css("display") && (o = 0),
              (this.containerHeight = o),
              this.$container.css({ height: o }),
              (this.elemHeight = o),
              !this.isStuck && this.$element.hasClass("is-at-bottom"))
            ) {
              var a =
                (this.points
                  ? this.points[1] - this.$container.offset().top
                  : this.anchorHeight) - this.elemHeight;
              this.$element.css("top", a);
            }
            this._setBreakPoints(o, function () {
              t && "function" == typeof t && t();
            });
          },
        },
        {
          key: "_setBreakPoints",
          value: function (t, i) {
            if (!this.canStick) {
              if (!i || "function" != typeof i) return !1;
              i();
            }
            var n = e(this.options.marginTop),
              s = e(this.options.marginBottom),
              o = this.points ? this.points[0] : this.$anchor.offset().top,
              a = this.points ? this.points[1] : o + this.anchorHeight,
              r = window.innerHeight;
            "top" === this.options.stickTo
              ? ((o -= n), (a -= t + n))
              : "bottom" === this.options.stickTo &&
                ((o -= r - (t + s)), (a -= r - s)),
              (this.topPoint = o),
              (this.bottomPoint = a),
              i && "function" == typeof i && i();
          },
        },
        {
          key: "destroy",
          value: function () {
            this._removeSticky(!0),
              this.$element
                .removeClass(
                  this.options.stickyClass + " is-anchored is-at-top"
                )
                .css({ height: "", top: "", bottom: "", "max-width": "" })
                .off("resizeme.zf.trigger")
                .off("mutateme.zf.trigger"),
              this.$anchor &&
                this.$anchor.length &&
                this.$anchor.off("change.zf.sticky"),
              t(window).off(this.scrollListener),
              this.wasWrapped
                ? this.$element.unwrap()
                : this.$container
                    .removeClass(this.options.containerClass)
                    .css({ height: "" }),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      i
    );
  })();
  (i.defaults = {
    container: "<div data-sticky-container></div>",
    stickTo: "top",
    anchor: "",
    topAnchor: "",
    btmAnchor: "",
    marginTop: 1,
    marginBottom: 1,
    stickyOn: "medium",
    stickyClass: "sticky",
    containerClass: "sticky-container",
    checkEvery: -1,
  }),
    Foundation.plugin(i, "Sticky");
})(jQuery);
var _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        },
  _createClass = (function () {
    function t(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    return function (e, i, n) {
      return i && t(e.prototype, i), n && t(e, n), e;
    };
  })();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        this._init(),
        Foundation.registerPlugin(this, "Tabs"),
        Foundation.Keyboard.register("Tabs", {
          ENTER: "open",
          SPACE: "open",
          ARROW_RIGHT: "next",
          ARROW_UP: "previous",
          ARROW_DOWN: "next",
          ARROW_LEFT: "previous",
        });
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e = this,
              i = this;
            if (
              (this.$element.attr({ role: "tablist" }),
              (this.$tabTitles = this.$element.find(
                "." + this.options.linkClass
              )),
              (this.$tabContent = t(
                '[data-tabs-content="' + this.$element[0].id + '"]'
              )),
              this.$tabTitles.each(function () {
                var e = t(this),
                  n = e.find("a"),
                  s = e.hasClass("" + i.options.linkActiveClass),
                  o = n[0].hash.slice(1),
                  a = n[0].id ? n[0].id : o + "-label",
                  r = t("#" + o);
                e.attr({ role: "presentation" }),
                  n.attr({
                    role: "tab",
                    "aria-controls": o,
                    "aria-selected": s,
                    id: a,
                  }),
                  r.attr({
                    role: "tabpanel",
                    "aria-hidden": !s,
                    "aria-labelledby": a,
                  }),
                  s &&
                    i.options.autoFocus &&
                    t(window).load(function () {
                      t("html, body").animate(
                        { scrollTop: e.offset().top },
                        i.options.deepLinkSmudgeDelay,
                        function () {
                          n.focus();
                        }
                      );
                    });
              }),
              this.options.matchHeight)
            ) {
              var n = this.$tabContent.find("img");
              n.length
                ? Foundation.onImagesLoaded(n, this._setHeight.bind(this))
                : this._setHeight();
            }
            (this._checkDeepLink = function () {
              var i = window.location.hash;
              if (i.length) {
                var n = e.$element.find('[href$="' + i + '"]');
                if (n.length) {
                  if ((e.selectTab(t(i), !0), e.options.deepLinkSmudge)) {
                    var s = e.$element.offset();
                    t("html, body").animate(
                      { scrollTop: s.top },
                      e.options.deepLinkSmudgeDelay
                    );
                  }
                  e.$element.trigger("deeplink.zf.tabs", [n, t(i)]);
                }
              }
            }),
              this.options.deepLink && this._checkDeepLink(),
              this._events();
          },
        },
        {
          key: "_events",
          value: function () {
            this._addKeyHandler(),
              this._addClickHandler(),
              (this._setHeightMqHandler = null),
              this.options.matchHeight &&
                ((this._setHeightMqHandler = this._setHeight.bind(this)),
                t(window).on(
                  "changed.zf.mediaquery",
                  this._setHeightMqHandler
                )),
              this.options.deepLink &&
                t(window).on("popstate", this._checkDeepLink);
          },
        },
        {
          key: "_addClickHandler",
          value: function () {
            var e = this;
            this.$element
              .off("click.zf.tabs")
              .on("click.zf.tabs", "." + this.options.linkClass, function (i) {
                i.preventDefault(),
                  i.stopPropagation(),
                  e._handleTabChange(t(this));
              });
          },
        },
        {
          key: "_addKeyHandler",
          value: function () {
            var e = this;
            this.$tabTitles
              .off("keydown.zf.tabs")
              .on("keydown.zf.tabs", function (i) {
                if (9 !== i.which) {
                  var n,
                    s,
                    o = t(this),
                    a = o.parent("ul").children("li");
                  a.each(function (i) {
                    if (t(this).is(o))
                      return void (e.options.wrapOnKeys
                        ? ((n = 0 === i ? a.last() : a.eq(i - 1)),
                          (s = i === a.length - 1 ? a.first() : a.eq(i + 1)))
                        : ((n = a.eq(Math.max(0, i - 1))),
                          (s = a.eq(Math.min(i + 1, a.length - 1)))));
                  }),
                    Foundation.Keyboard.handleKey(i, "Tabs", {
                      open: function () {
                        o.find('[role="tab"]').focus(), e._handleTabChange(o);
                      },
                      previous: function () {
                        n.find('[role="tab"]').focus(), e._handleTabChange(n);
                      },
                      next: function () {
                        s.find('[role="tab"]').focus(), e._handleTabChange(s);
                      },
                      handled: function () {
                        i.stopPropagation(), i.preventDefault();
                      },
                    });
                }
              });
          },
        },
        {
          key: "_handleTabChange",
          value: function (t, e) {
            if (t.hasClass("" + this.options.linkActiveClass))
              return void (
                this.options.activeCollapse &&
                (this._collapseTab(t),
                this.$element.trigger("collapse.zf.tabs", [t]))
              );
            var i = this.$element.find(
                "." +
                  this.options.linkClass +
                  "." +
                  this.options.linkActiveClass
              ),
              n = t.find('[role="tab"]'),
              s = n[0].hash,
              o = this.$tabContent.find(s);
            if (
              (this._collapseTab(i),
              this._openTab(t),
              this.options.deepLink && !e)
            ) {
              var a = t.find("a").attr("href");
              this.options.updateHistory
                ? history.pushState({}, "", a)
                : history.replaceState({}, "", a);
            }
            this.$element.trigger("change.zf.tabs", [t, o]),
              o.find("[data-mutate]").trigger("mutateme.zf.trigger");
          },
        },
        {
          key: "_openTab",
          value: function (t) {
            var e = t.find('[role="tab"]'),
              i = e[0].hash,
              n = this.$tabContent.find(i);
            t.addClass("" + this.options.linkActiveClass),
              e.attr({ "aria-selected": "true" }),
              n
                .addClass("" + this.options.panelActiveClass)
                .attr({ "aria-hidden": "false" });
          },
        },
        {
          key: "_collapseTab",
          value: function (e) {
            var i = e
              .removeClass("" + this.options.linkActiveClass)
              .find('[role="tab"]')
              .attr({ "aria-selected": "false" });
            t("#" + i.attr("aria-controls"))
              .removeClass("" + this.options.panelActiveClass)
              .attr({ "aria-hidden": "true" });
          },
        },
        {
          key: "selectTab",
          value: function (t, e) {
            var i;
            (i =
              "object" === ("undefined" == typeof t ? "undefined" : _typeof(t))
                ? t[0].id
                : t),
              i.indexOf("#") < 0 && (i = "#" + i);
            var n = this.$tabTitles
              .find('[href$="' + i + '"]')
              .parent("." + this.options.linkClass);
            this._handleTabChange(n, e);
          },
        },
        {
          key: "_setHeight",
          value: function () {
            var e = 0,
              i = this;
            this.$tabContent
              .find("." + this.options.panelClass)
              .css("height", "")
              .each(function () {
                var n = t(this),
                  s = n.hasClass("" + i.options.panelActiveClass);
                s || n.css({ visibility: "hidden", display: "block" });
                var o = this.getBoundingClientRect().height;
                s || n.css({ visibility: "", display: "" }),
                  (e = o > e ? o : e);
              })
              .css("height", e + "px");
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element
              .find("." + this.options.linkClass)
              .off(".zf.tabs")
              .hide()
              .end()
              .find("." + this.options.panelClass)
              .hide(),
              this.options.matchHeight &&
                null != this._setHeightMqHandler &&
                t(window).off(
                  "changed.zf.mediaquery",
                  this._setHeightMqHandler
                ),
              this.options.deepLink &&
                t(window).off("popstate", this._checkDeepLink),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    deepLink: !1,
    deepLinkSmudge: !1,
    deepLinkSmudgeDelay: 300,
    updateHistory: !1,
    autoFocus: !1,
    wrapOnKeys: !0,
    matchHeight: !1,
    activeCollapse: !1,
    linkClass: "tabs-title",
    linkActiveClass: "is-active",
    panelClass: "tabs-panel",
    panelActiveClass: "is-active",
  }),
    Foundation.plugin(e, "Tabs");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, i.data(), n)),
        (this.className = ""),
        this._init(),
        this._events(),
        Foundation.registerPlugin(this, "Toggler");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e;
            this.options.animate
              ? ((e = this.options.animate.split(" ")),
                (this.animationIn = e[0]),
                (this.animationOut = e[1] || null))
              : ((e = this.$element.data("toggler")),
                (this.className = "." === e[0] ? e.slice(1) : e));
            var i = this.$element[0].id;
            t(
              '[data-open="' +
                i +
                '"], [data-close="' +
                i +
                '"], [data-toggle="' +
                i +
                '"]'
            ).attr("aria-controls", i),
              this.$element.attr("aria-expanded", !this.$element.is(":hidden"));
          },
        },
        {
          key: "_events",
          value: function () {
            this.$element
              .off("toggle.zf.trigger")
              .on("toggle.zf.trigger", this.toggle.bind(this));
          },
        },
        {
          key: "toggle",
          value: function () {
            this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
          },
        },
        {
          key: "_toggleClass",
          value: function () {
            this.$element.toggleClass(this.className);
            var t = this.$element.hasClass(this.className);
            t
              ? this.$element.trigger("on.zf.toggler")
              : this.$element.trigger("off.zf.toggler"),
              this._updateARIA(t),
              this.$element
                .find("[data-mutate]")
                .trigger("mutateme.zf.trigger");
          },
        },
        {
          key: "_toggleAnimate",
          value: function () {
            var t = this;
            this.$element.is(":hidden")
              ? Foundation.Motion.animateIn(
                  this.$element,
                  this.animationIn,
                  function () {
                    t._updateARIA(!0),
                      this.trigger("on.zf.toggler"),
                      this.find("[data-mutate]").trigger("mutateme.zf.trigger");
                  }
                )
              : Foundation.Motion.animateOut(
                  this.$element,
                  this.animationOut,
                  function () {
                    t._updateARIA(!1),
                      this.trigger("off.zf.toggler"),
                      this.find("[data-mutate]").trigger("mutateme.zf.trigger");
                  }
                );
          },
        },
        {
          key: "_updateARIA",
          value: function (t) {
            this.$element.attr("aria-expanded", !!t);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = { animate: !1 }), Foundation.plugin(e, "Toggler");
})(jQuery);
var _createClass = (function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  };
})();
!(function (t) {
  var e = (function () {
    function e(i, n) {
      _classCallCheck(this, e),
        (this.$element = i),
        (this.options = t.extend({}, e.defaults, this.$element.data(), n)),
        (this.isActive = !1),
        (this.isClick = !1),
        this._init(),
        Foundation.registerPlugin(this, "Tooltip");
    }
    return (
      _createClass(e, [
        {
          key: "_init",
          value: function () {
            var e =
              this.$element.attr("aria-describedby") ||
              Foundation.GetYoDigits(6, "tooltip");
            (this.options.positionClass =
              this.options.positionClass ||
              this._getPositionClass(this.$element)),
              (this.options.tipText =
                this.options.tipText || this.$element.attr("title")),
              (this.template = this.options.template
                ? t(this.options.template)
                : this._buildTemplate(e)),
              this.options.allowHtml
                ? this.template
                    .appendTo(document.body)
                    .html(this.options.tipText)
                    .hide()
                : this.template
                    .appendTo(document.body)
                    .text(this.options.tipText)
                    .hide(),
              this.$element
                .attr({
                  title: "",
                  "aria-describedby": e,
                  "data-yeti-box": e,
                  "data-toggle": e,
                  "data-resize": e,
                })
                .addClass(this.options.triggerClass),
              (this.usedPositions = []),
              (this.counter = 4),
              (this.classChanged = !1),
              this._events();
          },
        },
        {
          key: "_getPositionClass",
          value: function (t) {
            if (!t) return "";
            var e = t[0].className.match(/\b(top|left|right)\b/g);
            return (e = e ? e[0] : "");
          },
        },
        {
          key: "_buildTemplate",
          value: function (e) {
            var i = (
                this.options.tooltipClass +
                " " +
                this.options.positionClass +
                " " +
                this.options.templateClasses
              ).trim(),
              n = t("<div></div>")
                .addClass(i)
                .attr({
                  role: "tooltip",
                  "aria-hidden": !0,
                  "data-is-active": !1,
                  "data-is-focus": !1,
                  id: e,
                });
            return n;
          },
        },
        {
          key: "_reposition",
          value: function (t) {
            this.usedPositions.push(t ? t : "bottom"),
              !t && this.usedPositions.indexOf("top") < 0
                ? this.template.addClass("top")
                : "top" === t && this.usedPositions.indexOf("bottom") < 0
                ? this.template.removeClass(t)
                : "left" === t && this.usedPositions.indexOf("right") < 0
                ? this.template.removeClass(t).addClass("right")
                : "right" === t && this.usedPositions.indexOf("left") < 0
                ? this.template.removeClass(t).addClass("left")
                : !t &&
                  this.usedPositions.indexOf("top") > -1 &&
                  this.usedPositions.indexOf("left") < 0
                ? this.template.addClass("left")
                : "top" === t &&
                  this.usedPositions.indexOf("bottom") > -1 &&
                  this.usedPositions.indexOf("left") < 0
                ? this.template.removeClass(t).addClass("left")
                : "left" === t &&
                  this.usedPositions.indexOf("right") > -1 &&
                  this.usedPositions.indexOf("bottom") < 0
                ? this.template.removeClass(t)
                : "right" === t &&
                  this.usedPositions.indexOf("left") > -1 &&
                  this.usedPositions.indexOf("bottom") < 0
                ? this.template.removeClass(t)
                : this.template.removeClass(t),
              (this.classChanged = !0),
              this.counter--;
          },
        },
        {
          key: "_setPosition",
          value: function () {
            var t = this._getPositionClass(this.template),
              e = Foundation.Box.GetDimensions(this.template),
              i = Foundation.Box.GetDimensions(this.$element),
              n = "left" === t ? "left" : "right" === t ? "left" : "top",
              s = "top" === n ? "height" : "width";
            "height" === s ? this.options.vOffset : this.options.hOffset;
            if (
              e.width >= e.windowDims.width ||
              (!this.counter && !Foundation.Box.ImNotTouchingYou(this.template))
            )
              return (
                this.template
                  .offset(
                    Foundation.Box.GetOffsets(
                      this.template,
                      this.$element,
                      "center bottom",
                      this.options.vOffset,
                      this.options.hOffset,
                      !0
                    )
                  )
                  .css({
                    width: i.windowDims.width - 2 * this.options.hOffset,
                    height: "auto",
                  }),
                !1
              );
            for (
              this.template.offset(
                Foundation.Box.GetOffsets(
                  this.template,
                  this.$element,
                  "center " + (t || "bottom"),
                  this.options.vOffset,
                  this.options.hOffset
                )
              );
              !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;

            )
              this._reposition(t), this._setPosition();
          },
        },
        {
          key: "show",
          value: function () {
            if (
              "all" !== this.options.showOn &&
              !Foundation.MediaQuery.is(this.options.showOn)
            )
              return !1;
            var t = this;
            this.template.css("visibility", "hidden").show(),
              this._setPosition(),
              this.$element.trigger(
                "closeme.zf.tooltip",
                this.template.attr("id")
              ),
              this.template.attr({ "data-is-active": !0, "aria-hidden": !1 }),
              (t.isActive = !0),
              this.template
                .stop()
                .hide()
                .css("visibility", "")
                .fadeIn(this.options.fadeInDuration, function () {}),
              this.$element.trigger("show.zf.tooltip");
          },
        },
        {
          key: "hide",
          value: function () {
            var t = this;
            this.template
              .stop()
              .attr({ "aria-hidden": !0, "data-is-active": !1 })
              .fadeOut(this.options.fadeOutDuration, function () {
                (t.isActive = !1),
                  (t.isClick = !1),
                  t.classChanged &&
                    (t.template
                      .removeClass(t._getPositionClass(t.template))
                      .addClass(t.options.positionClass),
                    (t.usedPositions = []),
                    (t.counter = 4),
                    (t.classChanged = !1));
              }),
              this.$element.trigger("hide.zf.tooltip");
          },
        },
        {
          key: "_events",
          value: function () {
            var t = this,
              e = (this.template, !1);
            this.options.disableHover ||
              this.$element
                .on("mouseenter.zf.tooltip", function (e) {
                  t.isActive ||
                    (t.timeout = setTimeout(function () {
                      t.show();
                    }, t.options.hoverDelay));
                })
                .on("mouseleave.zf.tooltip", function (i) {
                  clearTimeout(t.timeout),
                    (!e || (t.isClick && !t.options.clickOpen)) && t.hide();
                }),
              this.options.clickOpen
                ? this.$element.on("mousedown.zf.tooltip", function (e) {
                    e.stopImmediatePropagation(),
                      t.isClick ||
                        ((t.isClick = !0),
                        (!t.options.disableHover &&
                          t.$element.attr("tabindex")) ||
                          t.isActive ||
                          t.show());
                  })
                : this.$element.on("mousedown.zf.tooltip", function (e) {
                    e.stopImmediatePropagation(), (t.isClick = !0);
                  }),
              this.options.disableForTouch ||
                this.$element.on(
                  "tap.zf.tooltip touchend.zf.tooltip",
                  function (e) {
                    t.isActive ? t.hide() : t.show();
                  }
                ),
              this.$element.on({ "close.zf.trigger": this.hide.bind(this) }),
              this.$element
                .on("focus.zf.tooltip", function (i) {
                  return (
                    (e = !0),
                    t.isClick
                      ? (t.options.clickOpen || (e = !1), !1)
                      : void t.show()
                  );
                })
                .on("focusout.zf.tooltip", function (i) {
                  (e = !1), (t.isClick = !1), t.hide();
                })
                .on("resizeme.zf.trigger", function () {
                  t.isActive && t._setPosition();
                });
          },
        },
        {
          key: "toggle",
          value: function () {
            this.isActive ? this.hide() : this.show();
          },
        },
        {
          key: "destroy",
          value: function () {
            this.$element
              .attr("title", this.template.text())
              .off(".zf.trigger .zf.tooltip")
              .removeClass("has-tip top right left")
              .removeAttr(
                "aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"
              ),
              this.template.remove(),
              Foundation.unregisterPlugin(this);
          },
        },
      ]),
      e
    );
  })();
  (e.defaults = {
    disableForTouch: !1,
    hoverDelay: 200,
    fadeInDuration: 150,
    fadeOutDuration: 150,
    disableHover: !1,
    templateClasses: "",
    tooltipClass: "tooltip",
    triggerClass: "has-tip",
    showOn: "small",
    template: "",
    tipText: "",
    touchCloseText: "Tap to close.",
    clickOpen: !0,
    positionClass: "",
    vOffset: 10,
    hOffset: 12,
    allowHtml: !1,
  }),
    Foundation.plugin(e, "Tooltip");
})(jQuery);
jQuery(document).foundation();
var $ = jQuery.noConflict();
jQuery(document).ready(function ($) {
  $(".wpcf7-form input")
    .focus(function () {
      $(this).parent().siblings("label").addClass("has-value");
    })
    .blur(function () {
      var text_val = $(this).val();
      if (text_val === "") {
        $(this).parent().siblings("label").removeClass("has-value");
      }
    });
});
function gaEvent() {}
document.addEventListener(
  "wpcf7mailsent",
  function (event) {
    formSent();
  },
  !1
);
function formSent() {
  function getLang() {
    if (window.location.href.indexOf("/es/") != -1) return "es";
    else if (window.location.href.indexOf("/en/") != -1) return "en";
    else if (window.location.href.indexOf("/ca/") != -1) return "ca";
    else return "es";
  }
  if (getLang() == "en") {
    var title = "Got it!";
    var content = "We'll get in touch with you soon.";
  }
  if (getLang() == "en") {
    var title = "Rebut!";
    var content = "En breu ens posarem en contacte amb tu.";
  }
  if (getLang() == "es") {
    var title = "Recibido!";
    var content = "En breve nos pondremos en contacto contigo.";
  }
  document.getElementById("fs_text1").innerHTML = title;
  document.getElementById("fs_text2").innerHTML = content;
  $("#form_sent").foundation("open");
}
jQuery(".wpcf7-submit").last().addClass("button");
$(".editorimage:even .img-col").addClass("large-push-6");
$(".editorimage:even .editor-col").addClass("large-pull-6");
$(".galleryeditor:even .img-col").addClass("large-push-6");
$(".galleryeditor:even .editor-col").addClass("large-pull-6");
$("body.desktop .home-hero-wrapper .pre-line span:not(:last-child)").append(
  " Â· "
);
jQuery(".column.block").wrapAll("<div class='row' />");
var userAgent;
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  var userAgent = "handheld";
} else {
  var userAgent = "desktop";
}
window.is_touch = !1;
window.addEventListener(
  "touchstart",
  function onFirstTouch() {
    document.body.classList.add("is_touch");
    window.is_touch = !0;
    window.removeEventListener("touchstart", onFirstTouch, !1);
  },
  !1
);
var $ = jQuery.noConflict();
$(document).ready(function () {
  $(".skip").click(function (event) {
    var skipTo = "#" + this.href.split("#")[1];
    $(skipTo)
      .attr("tabindex", -1)
      .on("blur focusout", function () {
        $(this).removeAttr("tabindex");
      })
      .focus();
  });
});
$("a").each(function () {
  if (location.hostname === this.hostname) {
    $(this).addClass("local");
  } else {
    $(this).addClass("external");
    $(this).attr("target", "_blank");
  }
});
$("a[href^=mailto]").each(function () {
  $(this).addClass("phone no-external-link");
  $(this).removeClass("local");
  $(this).removeAttr("target");
});
$("a[href^=tel]").each(function () {
  $(this).addClass("phone no-external-link");
  $(this).removeClass("local");
  $(this).removeAttr("target");
});
$("a[href^=\\#]").each(function () {
  $(this).addClass("inner-link");
  $(this).removeClass("local");
});
$("a[target='_blank']").each(function () {
  $(this).append(
    '<svg class="icon white tiny" viewBox="0 0 30 30"><use xlink:href="#external"></use></svg><span class="show-for-sr">Abre en nueva ventana</span>'
  );
});
/*!
 * GSAP 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function n(t) {
    return "string" == typeof t;
  }
  function o(t) {
    return "function" == typeof t;
  }
  function p(t) {
    return "number" == typeof t;
  }
  function q(t) {
    return void 0 === t;
  }
  function r(t) {
    return "object" == typeof t;
  }
  function s(t) {
    return !1 !== t;
  }
  function t() {
    return "undefined" != typeof window;
  }
  function u(t) {
    return o(t) || n(t);
  }
  function J(t) {
    return (l = _t(t, at)) && ne;
  }
  function K(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function L(t, e) {
    return !e && console.warn(t);
  }
  function M(t, e) {
    return (t && (at[t] = e) && l && (l[t] = e)) || at;
  }
  function N() {
    return 0;
  }
  function X(t) {
    var e,
      n,
      i = t[0];
    if ((r(i) || o(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (n = pt.length; n-- && !pt[n].targetTest(i); );
      e = pt[n];
    }
    for (n = t.length; n--; )
      (t[n] && (t[n]._gsap || (t[n]._gsap = new Et(t[n], e)))) ||
        t.splice(n, 1);
    return t;
  }
  function Y(t) {
    return t._gsap || X(yt(t))[0]._gsap;
  }
  function Z(t, e) {
    var r = t[e];
    return o(r) ? t[e]() : (q(r) && t.getAttribute(e)) || r;
  }
  function $(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function _(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function aa(t, e) {
    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
    return n < r;
  }
  function ba(t, e, r) {
    var n,
      i = p(t[1]),
      a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    if ((i && (o.duration = t[1]), (o.parent = r), e)) {
      for (n = o; r && !("immediateRender" in n); )
        (n = r.vars.defaults || {}), (r = s(r.vars.inherit) && r.parent);
      (o.immediateRender = s(n.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
    }
    return o;
  }
  function ca() {
    var t,
      e,
      r = ot.length,
      n = ot.slice(0);
    for (ut = {}, t = ot.length = 0; t < r; t++)
      (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function da(t, e, r, n) {
    ot.length && ca(), t.render(e, r, n), ot.length && ca();
  }
  function ea(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(it).length < 2 ? e : t;
  }
  function fa(t) {
    return t;
  }
  function ga(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ha(t, e) {
    for (var r in e)
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function ja(t, e) {
    for (var n in e) t[n] = r(e[n]) ? ja(t[n] || (t[n] = {}), e[n]) : e[n];
    return t;
  }
  function ka(t, e) {
    var r,
      n = {};
    for (r in t) r in e || (n[r] = t[r]);
    return n;
  }
  function oa(t, e, r, n) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var i = e._prev,
      a = e._next;
    i ? (i._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = i) : t[n] === e && (t[n] = i),
      (e._dp = t),
      (e._next = e._prev = e.parent = null);
  }
  function pa(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function qa(t) {
    for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
    return t;
  }
  function ta(t) {
    return t._repeat ? ct(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function va(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function wa(t, e, r) {
    if (
      (e.parent && pa(e),
      (e._start = r + e._delay),
      (e._end = e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
      (function _addLinkedListItem(t, e, r, n, i) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var a,
          s = t[n];
        if (i) for (a = e[i]; s && s[i] > a; ) s = s._prev;
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[n] = e),
          (e._prev = s),
          (e.parent = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e)._time || (!e._dur && e._initted))
    ) {
      var n = (t.rawTime() - e._start) * e._ts;
      (!e._dur || gt(0, e.totalDuration(), n) - e._tTime > B) &&
        e.render(n, !0);
    }
    if ((qa(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration()))
      for (var i = t; i._dp; ) i.totalTime(i._tTime, !0), (i = i._dp);
    return t;
  }
  function xa(t, e, r, n) {
    return (
      Nt(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== Ct.frame
          ? (ot.push(t), (t._lazy = [e, n]), 1)
          : void 0
        : 1
    );
  }
  function Aa(t) {
    if (t instanceof Bt) return qa(t);
    var e = t._repeat;
    return (
      (t._tDur = e
        ? e < 0
          ? 1e12
          : _(t._dur * (e + 1) + t._rDelay * e)
        : t._dur),
      qa(t.parent),
      t
    );
  }
  function Ca(t, e) {
    var r,
      i,
      a = t.labels,
      s = t._recent || mt,
      o = t.duration() >= F ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a)
      ? "<" === (r = e.charAt(0)) || ">" === r
        ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf("=")) < 0
        ? (e in a || (a[e] = o), a[e])
        : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? Ca(t, e.substr(0, r - 1)) + i : o + i)
      : null == e
      ? o
      : +e;
  }
  function Da(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Fa(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  }
  function Ia(t, e) {
    return (
      t &&
      r(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && r(t[0]))) &&
      !t.nodeType &&
      t !== i
    );
  }
  function La(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function Ma(t) {
    if (o(t)) return t;
    var c = r(t) ? t : { each: t },
      m = Ft(c.ease),
      g = c.from || 0,
      v = parseFloat(c.base) || 0,
      y = {},
      e = 0 < g && g < 1,
      b = isNaN(g) || e,
      w = c.axis,
      T = g,
      x = g;
    return (
      n(g)
        ? (T = x = { center: 0.5, edges: 0.5, end: 1 }[g] || 0)
        : !e && b && ((T = g[0]), (x = g[1])),
      function (t, e, r) {
        var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          p = (r || c).length,
          d = y[p];
        if (!d) {
          if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, F])[1])) {
            for (
              h = -F;
              h < (h = r[f++].getBoundingClientRect().left) && f < p;

            );
            f--;
          }
          for (
            d = y[p] = [],
              n = b ? Math.min(f, p) * T - 0.5 : g % f,
              i = b ? (p * x) / f - 0.5 : (g / f) | 0,
              l = F,
              u = h = 0;
            u < p;
            u++
          )
            (a = (u % f) - n),
              (s = i - ((u / f) | 0)),
              (d[u] = o = w ? Math.abs("y" === w ? s : a) : V(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === g && La(d),
            (d.max = h - l),
            (d.min = l),
            (d.v = p =
              (parseFloat(c.amount) ||
                parseFloat(c.each) *
                  (p < f
                    ? p - 1
                    : w
                    ? "y" === w
                      ? p / f
                      : f
                    : Math.max(f, p / f)) ||
                0) * ("edges" === g ? -1 : 1)),
            (d.b = p < 0 ? v - p : v),
            (d.u = Fa(c.amount || c.each) || 0),
            (m = m && p < 0 ? At(m) : m);
        }
        return (
          (p = (d[t] - d.min) / d.max || 0), _(d.b + (m ? m(p) : p) * d.v) + d.u
        );
      }
    );
  }
  function Na(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return ~~(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Fa(t));
    };
  }
  function Oa(u, t) {
    var h,
      l,
      e = G(u);
    return (
      !e &&
        r(u) &&
        ((h = e = u.radius || F),
        u.values
          ? ((u = yt(u.values)), (l = !p(u[0])) && (h *= h))
          : (u = Na(u.increment))),
      Da(
        t,
        e
          ? o(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t;
              }
            : function (t) {
                for (
                  var e,
                    r,
                    n = parseFloat(l ? t.x : t),
                    i = parseFloat(l ? t.y : 0),
                    a = F,
                    s = 0,
                    o = u.length;
                  o--;

                )
                  (e = l
                    ? (e = u[o].x - n) * e + (r = u[o].y - i) * r
                    : Math.abs(u[o] - n)) < a && ((a = e), (s = o));
                return (
                  (s = !h || a <= h ? u[s] : t),
                  l || s === t || p(t) ? s : s + Fa(t)
                );
              }
          : Na(u)
      )
    );
  }
  function Pa(t, e, r, n) {
    return Da(G(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
      return G(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            ~~(Math.round((t + Math.random() * (e - t)) / r) * r * n) / n;
    });
  }
  function Ta(e, r, t) {
    return Da(t, function (t) {
      return e[~~r(t)];
    });
  }
  function Wa(t) {
    for (var e, r, n, i, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (n = t.indexOf(")", e)),
        (i = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, n - e - 7).match(i ? it : H)),
        (s += t.substr(a, e - a) + Pa(i ? r : +r[0], +r[1], +r[2] || 1e-5)),
        (a = n + 1);
    return s + t.substr(a, t.length - a);
  }
  function Za(t, e, r) {
    var n,
      i,
      a,
      s = t.labels,
      o = F;
    for (n in s)
      (i = s[n] - e) < 0 == !!r &&
        i &&
        o > (i = Math.abs(i)) &&
        ((a = n), (o = i));
    return a;
  }
  function _a(t) {
    return pa(t), t.progress() < 1 && wt(t, "onInterrupt"), t;
  }
  function eb(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        Tt +
        0.5) |
      0
    );
  }
  function fb(t, e) {
    var r,
      n,
      i,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d = t ? (p(t) ? [t >> 16, (t >> 8) & Tt, t & Tt] : 0) : xt.black;
    if (!d) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]))
        d = xt[t];
      else if ("#" === t.charAt(0))
        4 === t.length &&
          (t =
            "#" +
            (r = t.charAt(1)) +
            r +
            (n = t.charAt(2)) +
            n +
            (i = t.charAt(3)) +
            i),
          (d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Tt, t & Tt]);
      else if ("hsl" === t.substr(0, 3))
        if (((d = f = t.match(H)), e)) {
          if (~t.indexOf("=")) return t.match(tt);
        } else
          (a = (+d[0] % 360) / 360),
            (s = d[1] / 100),
            (r =
              2 * (o = d[2] / 100) -
              (n = o <= 0.5 ? o * (s + 1) : o + s - o * s)),
            3 < d.length && (d[3] *= 1),
            (d[0] = eb(a + 1 / 3, r, n)),
            (d[1] = eb(a, r, n)),
            (d[2] = eb(a - 1 / 3, r, n));
      else d = t.match(H) || xt.transparent;
      d = d.map(Number);
    }
    return (
      e &&
        !f &&
        ((r = d[0] / Tt),
        (n = d[1] / Tt),
        (i = d[2] / Tt),
        (o = ((u = Math.max(r, n, i)) + (h = Math.min(r, n, i))) / 2),
        u === h
          ? (a = s = 0)
          : ((l = u - h),
            (s = 0.5 < o ? l / (2 - u - h) : l / (u + h)),
            (a =
              u === r
                ? (n - i) / l + (n < i ? 6 : 0)
                : u === n
                ? (i - r) / l + 2
                : (r - n) / l + 4),
            (a *= 60)),
        (d[0] = (a + 0.5) | 0),
        (d[1] = (100 * s + 0.5) | 0),
        (d[2] = (100 * o + 0.5) | 0)),
      d
    );
  }
  function gb(t, e) {
    var r,
      n,
      i,
      a = (t + "").match(kt),
      s = 0,
      o = "";
    if (!a) return t;
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        (s += (i = t.substr(s, t.indexOf(n, s) - s)).length + n.length),
        3 === (n = fb(n, e)).length && n.push(1),
        (o +=
          i +
          (e
            ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
            : "rgba(" + n.join(",")) +
          ")");
    return o + t.substr(s);
  }
  function jb(t) {
    var e,
      r = t.join(" ");
    (kt.lastIndex = 0),
      kt.test(r) &&
        ((e = Ot.test(r)), (t[0] = gb(t[0], e)), (t[1] = gb(t[1], e)));
  }
  function rb(t) {
    var e = (t + "").split("("),
      r = Pt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      n,
                      i = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (n = r.substr(0, e)),
                      (i[s] = isNaN(n) ? n.replace(Dt, "").trim() : +n),
                      (s = r.substr(e + 1).trim());
                  return i;
                })(e[1]),
              ]
            : rt.exec(t)[1].split(",").map(ea)
        )
      : Pt._CE && St.test(t)
      ? Pt._CE("", t)
      : r;
  }
  function ub(t, e, r, n) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === n &&
        (n = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var i,
      a = { easeIn: e, easeOut: r, easeInOut: n };
    return (
      $(t, function (t) {
        for (var e in ((Pt[t] = at[t] = a), (Pt[(i = t.toLowerCase())] = r), a))
          Pt[
            i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Pt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function vb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function wb(r, t, e) {
    function Dk(t) {
      return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Q((t - a) * i) + 1;
    }
    var n = 1 <= t ? t : 1,
      i = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (i / R) * (Math.asin(1 / n) || 0),
      s =
        "out" === r
          ? Dk
          : "in" === r
          ? function (t) {
              return 1 - Dk(1 - t);
            }
          : vb(Dk);
    return (
      (i = R / i),
      (s.config = function (t, e) {
        return wb(r, t, e);
      }),
      s
    );
  }
  function xb(e, r) {
    function Lk(t) {
      return --t * t * ((r + 1) * t + r) + 1;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Lk
        : "in" === e
        ? function (t) {
            return 1 - Lk(1 - t);
          }
        : vb(Lk);
    return (
      (t.config = function (t) {
        return xb(e, t);
      }),
      t
    );
  }
  var E,
    i,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    v,
    y,
    b,
    w,
    T,
    x,
    k,
    O,
    C,
    P,
    S,
    D,
    A,
    j = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    z = { duration: 0.5, overwrite: !1, delay: 0 },
    F = 1e8,
    B = 1 / F,
    R = 2 * Math.PI,
    I = R / 4,
    U = 0,
    V = Math.sqrt,
    W = Math.cos,
    Q = Math.sin,
    G = Array.isArray,
    H = /(?:-?\.?\d|\.)+/gi,
    tt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
    et = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,
    rt = /\(([^()]+)\)/i,
    nt = /[\+-]=-?[\.\d]+/,
    it = /[#\-+\.]*\b[a-z\d-=+%.]+/gi,
    at = {},
    st = {},
    ot = [],
    ut = {},
    ht = {},
    lt = {},
    ft = 30,
    pt = [],
    dt = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    _t = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    ct = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    mt = { _start: 0, endTime: N },
    gt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    vt = [].slice,
    yt = function toArray(t, e) {
      return !n(t) || e || (!a && Mt())
        ? G(t)
          ? (function _flatten(t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (n(t) && !e) || Ia(t, 1)
                    ? r.push.apply(r, yt(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : Ia(t)
          ? vt.call(t, 0)
          : t
          ? [t]
          : []
        : vt.call(h.querySelectorAll(t), 0);
    },
    bt = function mapRange(e, t, r, n, i) {
      var a = t - e,
        s = n - r;
      return Da(i, function (t) {
        return r + ((t - e) / a) * s;
      });
    },
    wt = function _callback(t, e, r) {
      var n,
        i,
        a = t.vars,
        s = a[e];
      if (s)
        return (
          (n = a[e + "Params"]),
          (i = a.callbackScope || t),
          r && ot.length && ca(),
          n ? s.apply(i, n) : s.call(i)
        );
    },
    Tt = 255,
    xt = {
      aqua: [0, Tt, Tt],
      lime: [0, Tt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Tt],
      navy: [0, 0, 128],
      white: [Tt, Tt, Tt],
      olive: [128, 128, 0],
      yellow: [Tt, Tt, 0],
      orange: [Tt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Tt, 0, 0],
      pink: [Tt, 192, 203],
      cyan: [0, Tt, Tt],
      transparent: [Tt, Tt, Tt, 0],
    },
    kt = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in xt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ot = /hsl[a]?\(/,
    Ct =
      ((w = Date.now),
      (T = 500),
      (x = 33),
      (k = w()),
      (O = k),
      (P = C = 1 / 60),
      (b = {
        time: 0,
        frame: 0,
        tick: function tick() {
          Jj(!0);
        },
        wake: function wake() {
          f &&
            (!a &&
              t() &&
              ((i = a = window),
              (h = i.document || {}),
              (at.gsap = ne),
              (i.gsapVersions || (i.gsapVersions = [])).push(ne.version),
              J(l || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (y = i.requestAnimationFrame)),
            g && b.sleep(),
            (v =
              y ||
              function (t) {
                return setTimeout(t, (1e3 * (P - b.time) + 1) | 0);
              }),
            (m = 1),
            Jj(2));
        },
        sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = N);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (T = t || 1e8), (x = Math.min(e, T, 0));
        },
        fps: function fps(t) {
          (C = 1 / (t || 60)), (P = b.time + C);
        },
        add: function add(t) {
          S.indexOf(t) < 0 && S.push(t), Mt();
        },
        remove: function remove(t) {
          var e;
          ~(e = S.indexOf(t)) && S.splice(e, 1);
        },
        _listeners: (S = []),
      })),
    Mt = function _wake() {
      return !m && Ct.wake();
    },
    Pt = {},
    St = /^[\d.\-M][\d.\-,\s]/,
    Dt = /["']/g,
    At = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Ft = function _parseEase(t, e) {
      return (t && (o(t) ? t : Pt[t] || rb(t))) || e;
    };
  function Jj(e) {
    var t,
      r,
      n = w() - O,
      i = !0 === e;
    T < n && (k += n - x),
      (O += n),
      (b.time = (O - k) / 1e3),
      (0 < (t = b.time - P) || i) &&
        (b.frame++, (P += t + (C <= t ? 0.004 : C - t)), (r = 1)),
      i || (g = v(Jj)),
      r &&
        S.forEach(function (t) {
          return t(b.time, n, b.frame, e);
        });
  }
  function al(t) {
    return t < A
      ? D * t * t
      : t < 0.7272727272727273
      ? D * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? D * (t -= 2.25 / 2.75) * t + 0.9375
      : D * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  $("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    ub(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn),
    ub("Elastic", wb("in"), wb("out"), wb()),
    (D = 7.5625),
    (A = 1 / 2.75),
    ub(
      "Bounce",
      function (t) {
        return 1 - al(1 - t);
      },
      al
    ),
    ub("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    ub("Circ", function (t) {
      return -(V(1 - t * t) - 1);
    }),
    ub("Sine", function (t) {
      return 1 - W(t * I);
    }),
    ub("Back", xb("in"), xb("out"), xb()),
    (Pt.SteppedEase =
      Pt.steps =
      at.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              n = t + (e ? 0 : 1),
              i = e ? 1 : 0;
            return function (t) {
              return (((n * gt(0, 0.99999999, t)) | 0) + i) * r;
            };
          },
        }),
    (z.ease = Pt["quad.out"]);
  var Rt,
    Et = function GSCache(t, e) {
      (this.id = U++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : Z),
        (this.set = e ? e.getSetter : Wt);
    },
    zt =
      (((Rt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? ((this._delay = t), this) : this._delay;
      }),
      (Rt.duration = function duration(t) {
        var e = arguments.length,
          r = this._repeat,
          n = 0 < r ? r * ((e ? t : this._dur) + this._rDelay) : 0;
        return e
          ? this.totalDuration(r < 0 ? t : t + n)
          : this.totalDuration() && this._dur;
      }),
      (Rt.totalDuration = function totalDuration(t) {
        if (!arguments.length) return this._tDur;
        var e = this._repeat,
          r = (t || this._rDelay) && e < 0;
        return (
          (this._tDur = r ? 1e12 : t),
          (this._dur = r ? t : (t - e * this._rDelay) / (e + 1)),
          (this._dirty = 0),
          qa(this.parent),
          this
        );
      }),
      (Rt.totalTime = function totalTime(t, e) {
        if ((Mt(), !arguments.length)) return this._tTime;
        var r,
          n = this.parent || this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (
            r = this._start,
              this._start =
                n._time -
                (0 < this._ts
                  ? t / this._ts
                  : ((this._dirty ? this.totalDuration() : this._tDur) - t) /
                    -this._ts),
              this._end += this._start - r,
              n._dirty || qa(n);
            n.parent;

          )
            n.parent._time !==
              n._start +
                (0 < n._ts
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            n.autoRemoveChildren &&
            wa(n, this, this._start - this._delay);
        }
        return (
          (this._tTime === t && (this._dur || e)) ||
            (this._ts || (this._pTime = t), da(this, t, e)),
          this
        );
      }),
      (Rt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ta(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (Rt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this._tTime / this.totalDuration();
      }),
      (Rt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                ta(this),
              e
            )
          : this.duration()
          ? this._time / this._dur
          : this.ratio;
      }),
      (Rt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? ct(this._tTime, r) + 1
          : 1;
      }),
      (Rt.timeScale = function timeScale(t) {
        if (!arguments.length) return this._ts || this._pauseTS || 0;
        if (null !== this._pauseTS) return (this._pauseTS = t), this;
        var e =
          this.parent && this._ts ? va(this.parent._time, this) : this._tTime;
        return (
          (this._ts = t),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(e, !0))
        );
      }),
      (Rt.paused = function paused(t) {
        var e = !this._ts;
        return arguments.length
          ? (e !== t &&
              (t
                ? ((this._pauseTS = this._ts),
                  (this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : ((this._ts = this._pauseTS || 1),
                  (this._pauseTS = null),
                  (t = this._tTime || this._pTime),
                  1 === this.progress() && (this._tTime -= B),
                  this.totalTime(t, !0))),
            this)
          : e;
      }),
      (Rt.startTime = function startTime(t) {
        return arguments.length
          ? (this.parent &&
              this.parent._sort &&
              wa(this.parent, this, t - this._delay),
            this)
          : this._start;
      }),
      (Rt.endTime = function endTime(t) {
        return (
          this._start +
          (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (Rt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? va(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Rt.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t), Aa(this)) : this._repeat;
      }),
      (Rt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? ((this._rDelay = t), Aa(this)) : this._rDelay;
      }),
      (Rt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Rt.seek = function seek(t, e) {
        return this.totalTime(Ca(this, t), s(e));
      }),
      (Rt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
      }),
      (Rt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Rt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (Rt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Rt.resume = function resume() {
        return this.paused(!1);
      }),
      (Rt.reversed = function reversed(t) {
        var e = this._ts || this._pauseTS || 0;
        return arguments.length
          ? (t !== this.reversed() &&
              ((this[null === this._pauseTS ? "_ts" : "_pauseTS"] =
                Math.abs(e) * (t ? -1 : 1)),
              this.totalTime(this._tTime, !0)),
            this)
          : e < 0;
      }),
      (Rt.invalidate = function invalidate() {
        return (this._initted = 0), this;
      }),
      (Rt.isActive = function isActive(t) {
        var e,
          r = this.parent || this._dp,
          n = this._start;
        return !(
          r &&
          !(
            this._ts &&
            (this._initted || !t) &&
            r.isActive(t) &&
            (e = r.rawTime(!0)) >= n &&
            e < this.endTime(!0) - B
          )
        );
      }),
      (Rt.eventCallback = function eventCallback(t, e, r) {
        var n = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((n[t] = e),
                r && (n[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete n[t],
            this)
          : n[t];
      }),
      (Rt.then = function then(t) {
        var n = this;
        return new Promise(function (e) {
          function vm() {
            var t = n.then;
            (n.then = null),
              (r = r(n)) &&
                (r.then || r === n ? (n.then = t) : o(r) || (r = fa)),
              e(r),
              (n.then = t);
          }
          var r = o(t) ? t : fa;
          (n._initted && 1 === n.totalProgress() && 0 <= n._ts) ||
          (!n._tTime && n._ts < 0)
            ? vm()
            : (n._prom = vm);
        });
      }),
      (Rt.kill = function kill() {
        _a(this);
      }),
      Animation);
  function Animation(t, e) {
    var r = t.parent || E;
    (this.vars = t),
      (this._dur = this._tDur = +t.duration || 0),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase),
        Aa(this)),
      (this._ts = 1),
      (this.data = t.data),
      m || Ct.wake(),
      r && wa(r, this, e || 0 === e ? e : r._time),
      t.reversed && this.reversed(!0),
      t.paused && this.paused(!0);
  }
  ga(zt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: 0,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -B,
    _prom: 0,
    _pauseTS: null,
  });
  var Bt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t, e) || this).labels = {}),
        (r.smoothChildTiming = s(t.smoothChildTiming)),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = s(t.sortChildren)),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var t = Timeline.prototype;
    return (
      (t.to = function to(t, e, r, n) {
        return new jt(t, ba(arguments, 0, this), Ca(this, p(e) ? n : r)), this;
      }),
      (t.from = function from(t, e, r, n) {
        return new jt(t, ba(arguments, 1, this), Ca(this, p(e) ? n : r)), this;
      }),
      (t.fromTo = function fromTo(t, e, r, n, i) {
        return new jt(t, ba(arguments, 2, this), Ca(this, p(e) ? i : n)), this;
      }),
      (t.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          e.repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new jt(t, e, Ca(this, r)),
          this
        );
      }),
      (t.call = function call(t, e, r) {
        return wa(this, jt.delayedCall(0, t, e), Ca(this, r));
      }),
      (t.staggerTo = function staggerTo(t, e, r, n, i, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || n),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new jt(t, r, Ca(this, i)),
          this
        );
      }),
      (t.staggerFrom = function staggerFrom(t, e, r, n, i, a, o) {
        return (
          (r.runBackwards = 1),
          (r.immediateRender = s(r.immediateRender)),
          this.staggerTo(t, e, r, n, i, a, o)
        );
      }),
      (t.staggerFromTo = function staggerFromTo(t, e, r, n, i, a, o, u) {
        return (
          (n.startAt = r),
          (n.immediateRender = s(n.immediateRender)),
          this.staggerTo(t, e, n, i, a, o, u)
        );
      }),
      (t.render = function render(t, e, r) {
        var n,
          i,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          p,
          d,
          c,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          y = g - B < t && 0 <= t && this !== E ? g : t < B ? 0 : t,
          b = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (y !== this._tTime || r || b) {
          if (
            (b && (v || (m = this._zTime), (!t && e) || (this._zTime = t)),
            (n = y),
            (f = this._start),
            (u = 0 === (l = this._ts)),
            m !== this._time && v && (n += this._time - m),
            this._repeat &&
              ((d = this._yoyo),
              (o = v + this._rDelay),
              (v < (n = _(y % o)) || g === y) && (n = v),
              (s = ~~(y / o)) && s === y / o && ((n = v), s--),
              d && 1 & s && ((n = v - n), (c = 1)),
              s !== (p = ct(this._tTime, o)) && !this._lock))
          ) {
            var w = d && 1 & p,
              T = w === (d && 1 & s);
            if (
              (s < p && (w = !w),
              (m = w ? 0 : v),
              (this._lock = 1),
              (this.render(m, e, !v)._lock = 0),
              !e && this.parent && wt(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !c &&
                this.getChildren().forEach(function (t) {
                  return t.invalidate();
                }),
              m !== this._time || u != !this._ts)
            )
              return this;
            if (
              (T &&
                ((this._lock = 2),
                (m = w ? v + 1e-4 : -1e-4),
                this.render(m, !0)),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var n;
                if (e < r)
                  for (n = t._first; n && n._start <= r; ) {
                    if (!n._dur && "isPause" === n.data && n._start > e)
                      return n;
                    n = n._next;
                  }
                else
                  for (n = t._last; n && n._start >= r; ) {
                    if (!n._dur && "isPause" === n.data && n._start < e)
                      return n;
                    n = n._prev;
                  }
              })(this, _(m), _(n))) &&
              (y -= n - (n = h._start)),
            (this._tTime = y),
            (this._time = n),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate), (this._initted = 1)),
            m || !n || e || wt(this, "onStart"),
            m <= n && 0 <= t)
          )
            for (i = this._first; i; ) {
              if (
                ((a = i._next), (i._act || n >= i._start) && i._ts && h !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    0 < i._ts
                      ? (n - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (n - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !u))
                ) {
                  h = 0;
                  break;
                }
              }
              i = a;
            }
          else {
            i = this._last;
            for (var x = t < 0 ? t : n; i; ) {
              if (
                ((a = i._prev), (i._act || x <= i._end) && i._ts && h !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    0 < i._ts
                      ? (x - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (x - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !u))
                ) {
                  h = 0;
                  break;
                }
              }
              i = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(m <= n ? 0 : -B)._zTime = m <= n ? 1 : -1),
            this._ts)
          )
            return (this._start = f), this.render(t, e, r);
          this._onUpdate && !e && wt(this, "onUpdate", !0),
            ((y === g && g >= this.totalDuration()) || (!y && this._ts < 0)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                ((!t && v) ||
                  !((t && 0 < this._ts) || (!y && this._ts < 0)) ||
                  pa(this, 1),
                e ||
                  (t < 0 && !m) ||
                  (wt(this, y === g ? "onComplete" : "onReverseComplete", !0),
                  this._prom && this._prom())));
        }
        return this;
      }),
      (t.add = function add(t, e) {
        var r = this;
        if ((p(e) || (e = Ca(this, e)), !(t instanceof zt))) {
          if (G(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              qa(this)
            );
          if (n(t)) return this.addLabel(t, e);
          if (!o(t)) return this;
          t = jt.delayedCall(0, t);
        }
        return this !== t ? wa(this, t, e) : this;
      }),
      (t.getChildren = function getChildren(t, e, r, n) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === n && (n = -F);
        for (var i = [], a = this._first; a; )
          a._start >= n &&
            (a instanceof jt
              ? e && i.push(a)
              : (r && i.push(a),
                t && i.push.apply(i, a.getChildren(!0, e, r)))),
            (a = a._next);
        return i;
      }),
      (t.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (t.remove = function remove(t) {
        return n(t)
          ? this.removeLabel(t)
          : o(t)
          ? this.killTweensOf(t)
          : (oa(this, t),
            t === this._recent && (this._recent = this._last),
            qa(this));
      }),
      (t.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            this.parent ||
              this._dp ||
              !this._ts ||
              (this._start =
                Ct.time -
                (0 < this._ts
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts)),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function addLabel(t, e) {
        return (this.labels[t] = Ca(this, e)), this;
      }),
      (t.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (t.addPause = function addPause(t, e, r) {
        var n = jt.delayedCall(0, e || N, r);
        return (
          (n.data = "isPause"), (this._hasPause = 1), wa(this, n, Ca(this, t))
        );
      }),
      (t.removePause = function removePause(t) {
        var e = this._first;
        for (t = Ca(this, t); e; )
          e._start === t && "isPause" === e.data && pa(e), (e = e._next);
      }),
      (t.killTweensOf = function killTweensOf(t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--; )
          Lt !== n[i] && n[i].kill(t, e);
        return this;
      }),
      (t.getTweensOf = function getTweensOf(t, e) {
        for (var r, n = [], i = yt(t), a = this._first; a; )
          a instanceof jt
            ? !aa(a._targets, i) ||
              (e && !a.isActive("started" === e)) ||
              n.push(a)
            : (r = a.getTweensOf(i, e)).length && n.push.apply(n, r),
            (a = a._next);
        return n;
      }),
      (t.tweenTo = function tweenTo(t, e) {
        var r = this,
          n = Ca(r, t),
          i = e && e.startAt,
          a = jt.to(
            r,
            ga(
              {
                ease: "none",
                lazy: !1,
                time: n,
                duration:
                  Math.abs(n - (i && "time" in i ? i.time : r._time)) /
                    r.timeScale() || B,
                onStart: function onStart() {
                  r.pause();
                  var t = Math.abs(n - r._time) / r.timeScale();
                  a._dur !== t && ((a._dur = t), a.render(a._time, !0, !0)),
                    e && e.onStart && e.onStart.apply(a, e.onStartParams || []);
                },
              },
              e
            )
          );
        return a;
      }),
      (t.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ga({ startAt: { time: Ca(this, t) } }, r));
      }),
      (t.recent = function recent() {
        return this._recent;
      }),
      (t.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), Za(this, Ca(this, t));
      }),
      (t.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), Za(this, Ca(this, t), 1);
      }),
      (t.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + B);
      }),
      (t.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, a = this.labels; i; )
          i._start >= r && (i._start += t), (i = i._next);
        if (e) for (n in a) a[n] >= r && (a[n] += t);
        return qa(this);
      }),
      (t.invalidate = function invalidate() {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return i.prototype.invalidate.call(this);
      }),
      (t.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          (this._time = this._tTime = 0), t && (this.labels = {}), qa(this)
        );
      }),
      (t.totalDuration = function totalDuration(t) {
        var e,
          r,
          n = 0,
          i = this,
          a = i._last,
          s = F,
          o = i._repeat,
          u = o * i._rDelay || 0,
          h = o < 0;
        if (arguments.length) return h ? i : i.timeScale(i.totalDuration() / t);
        if (i._dirty) {
          for (; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              a._start > s && i._sort && a._ts && !i._lock
                ? ((i._lock = 1), wa(i, a, a._start - a._delay), (i._lock = 0))
                : (s = a._start),
              a._start < 0 &&
                a._ts &&
                ((n -= a._start),
                ((!i.parent && !i._dp) ||
                  (i.parent && i.parent.smoothChildTiming)) &&
                  ((i._start += a._start / i._ts),
                  (i._time -= a._start),
                  (i._tTime -= a._start)),
                i.shiftChildren(-a._start, !1, -1e20),
                (s = 0)),
              n <
                (r = a._end =
                  a._start + a._tDur / Math.abs(a._ts || a._pauseTS || B)) &&
                a._ts &&
                (n = _(r)),
              (a = e);
          (i._dur = i === E && i._time > n ? i._time : Math.min(F, n)),
            (i._tDur =
              h && (i._dur || u) ? 1e12 : Math.min(F, n * (o + 1) + u)),
            (i._end =
              i._start + (i._tDur / Math.abs(i._ts || i._pauseTS || B) || 0)),
            (i._dirty = 0);
        }
        return i._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((E._ts && (da(E, va(t, E)), (d = Ct.frame)), Ct.frame >= ft)) {
          ft += j.autoSleep || 120;
          var e = E._first;
          if ((!e || !e._ts) && j.autoSleep && Ct._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Ct.sleep();
          }
        }
      }),
      Timeline
    );
  })(zt);
  ga(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Eb(t, e, i, a, s, u) {
    var h, l, f, p;
    if (
      ht[t] &&
      !1 !==
        (h = new ht[t]()).init(
          s,
          h.rawVars
            ? e[t]
            : (function _processVars(t, e, i, a, s) {
                if (
                  (o(t) && (t = Yt(t, s, e, i, a)),
                  !r(t) || (t.style && t.nodeType) || G(t))
                )
                  return n(t) ? Yt(t, s, e, i, a) : t;
                var u,
                  h = {};
                for (u in t) h[u] = Yt(t[u], s, e, i, a);
                return h;
              })(e[t], a, s, u, i),
          i,
          a,
          u
        ) &&
      ((i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)),
      i !== c)
    )
      for (f = i._ptLookup[i._targets.indexOf(s)], p = h._props.length; p--; )
        f[h._props[p]] = l;
    return h;
  }
  var Lt,
    It = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f,
        p = t[e],
        d =
          "get" !== r
            ? r
            : o(p)
            ? l
              ? t[
                  e.indexOf("set") || !o(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : p,
        _ = o(p) ? (l ? $t : Vt) : Ut;
      if (
        (n(i) &&
          (~i.indexOf("random(") && (i = Wa(i)),
          "=" === i.charAt(1) &&
            (i =
              parseFloat(d) +
              parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
              (Fa(d) || 0))),
        d !== i)
      )
        return isNaN(d + i)
          ? (p || e in t || K(e, i),
            function _addComplexStringPropTween(t, e, r, n, i, a, s) {
              var o,
                u,
                h,
                l,
                f,
                p,
                d,
                _,
                c = new ee(this._pt, t, e, 0, 1, Gt, null, i),
                m = 0,
                g = 0;
              for (
                c.b = r,
                  c.e = n,
                  r += "",
                  (d = ~(n += "").indexOf("random(")) && (n = Wa(n)),
                  a && (a((_ = [r, n]), t, e), (r = _[0]), (n = _[1])),
                  u = r.match(et) || [];
                (o = et.exec(n));

              )
                (l = o[0]),
                  (f = n.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((p = parseFloat(u[g - 1]) || 0),
                    (c._pt = {
                      _next: c._pt,
                      p: f || 1 === g ? f : ",",
                      s: p,
                      c:
                        "=" === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ("-" === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - p,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = et.lastIndex));
              return (
                (c.c = m < n.length ? n.substring(m, n.length) : ""),
                (c.fp = s),
                (nt.test(n) || d) && (c.e = 0),
                (this._pt = c)
              );
            }.call(this, t, e, d, i, _, h || j.stringFilter, l))
          : ((f = new ee(
              this._pt,
              t,
              e,
              +d || 0,
              i - (d || 0),
              "boolean" == typeof p ? Zt : Qt,
              0,
              _
            )),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            (this._pt = f));
    },
    Nt = function _initTween(t, e) {
      var r,
        n,
        i,
        a,
        o,
        u,
        h,
        l,
        f,
        p,
        d,
        _,
        c = t.vars,
        m = c.ease,
        g = c.startAt,
        v = c.immediateRender,
        y = c.lazy,
        b = c.onUpdate,
        w = c.onUpdateParams,
        T = c.callbackScope,
        x = c.runBackwards,
        k = c.yoyoEase,
        O = c.keyframes,
        C = c.autoRevert,
        M = t._dur,
        P = t._startAt,
        S = t._targets,
        D = t.parent,
        A = D && "nested" === D.data ? D.parent._targets : S,
        F = "auto" === t._overwrite,
        R = t.timeline;
      if (
        (!R || (O && m) || (m = "none"),
        (t._ease = Ft(m, z.ease)),
        (t._yEase = k ? At(Ft(!0 === k ? m : k, z.ease)) : 0),
        k &&
          t._yoyo &&
          !t._repeat &&
          ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
        !R)
      ) {
        if ((P && P.render(-1, !0).kill(), g)) {
          if (
            (pa(
              (t._startAt = jt.set(
                S,
                ga(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: s(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: T,
                    stagger: 0,
                  },
                  g
                )
              ))
            ),
            v)
          )
            if (0 < e) C || (t._startAt = 0);
            else if (M) return;
        } else if (x && M)
          if (P) C || (t._startAt = 0);
          else if (
            (e && (v = !1),
            pa(
              (t._startAt = jt.set(
                S,
                _t(ka(c, st), {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: v && s(y),
                  immediateRender: v,
                  stagger: 0,
                  parent: D,
                })
              ))
            ),
            v)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, B);
        for (
          r = ka(c, st),
            _ = (l = S[(t._pt = 0)] ? Y(S[0]).harness : 0) && c[l.prop],
            y = (M && s(y)) || (y && !M),
            n = 0;
          n < S.length;
          n++
        ) {
          if (
            ((h = (o = S[n])._gsap || X(S)[n]._gsap),
            (t._ptLookup[n] = p = {}),
            ut[h.id] && ca(),
            (d = A === S ? n : A.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, _ || r, t, d, A) &&
              ((t._pt = a =
                new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                p[t] = a;
              }),
              f.priority && (u = 1)),
            !l || _)
          )
            for (i in r)
              ht[i] && (f = Eb(i, r, t, d, o, A))
                ? f.priority && (u = 1)
                : (p[i] = a =
                    It.call(t, o, i, "get", r[i], d, A, 0, c.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]),
            F && t._pt && ((Lt = t), E.killTweensOf(o, p, "started"), (Lt = 0)),
            t._pt && y && (ut[h.id] = 1);
        }
        u && te(t), t._onInit && t._onInit(t);
      }
      (t._from = !R && !!c.runBackwards), (t._onUpdate = b), (t._initted = 1);
    },
    Yt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t)
        ? t.call(e, r, i, a)
        : n(t) && ~t.indexOf("random(")
        ? Wa(t)
        : t;
    },
    qt = dt + ",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Xt = (qt + ",id,stagger,delay,duration,paused").split(","),
    jt = (function (O) {
      function Tween(t, e, n) {
        var i;
        "number" == typeof e && ((n.duration = e), (e = n), (n = null));
        var a,
          o,
          h,
          l,
          f,
          d,
          _,
          c,
          m = (i =
            O.call(
              this,
              (function _inheritDefaults(t) {
                var e = t.parent || E,
                  r = t.keyframes ? ha : ga;
                if (s(t.inherit))
                  for (; e; ) r(t, e.vars.defaults), (e = e.parent);
                return t;
              })(e),
              n
            ) || this).vars,
          g = m.duration,
          v = m.delay,
          y = m.immediateRender,
          b = m.stagger,
          w = m.overwrite,
          T = m.keyframes,
          x = m.defaults,
          k = G(t) && p(t[0]) ? [t] : yt(t);
        if (
          ((i._targets = k.length
            ? X(k)
            : L(
                "GSAP target " + t + " not found. https://greensock.com",
                !j.nullTargetWarn
              ) || []),
          (i._ptLookup = []),
          (i._overwrite = w),
          T || b || u(g) || u(v))
        ) {
          if (
            ((e = i.vars),
            (a = i.timeline =
              new Bt({ data: "nested", defaults: x || {} })).kill(),
            (a.parent = _assertThisInitialized(i)),
            T)
          )
            ga(a.vars.defaults, { ease: "none" }),
              T.forEach(function (t) {
                return a.to(k, t, ">");
              });
          else {
            if (((l = k.length), (_ = b ? Ma(b) : N), r(b)))
              for (f in b) ~qt.indexOf(f) && ((c = c || {})[f] = b[f]);
            for (o = 0; o < l; o++) {
              for (f in ((h = {}), e)) Xt.indexOf(f) < 0 && (h[f] = e[f]);
              (h.stagger = 0),
                c && _t(h, c),
                e.yoyoEase && !e.repeat && (h.yoyoEase = e.yoyoEase),
                (d = k[o]),
                (h.duration = +Yt(g, _assertThisInitialized(i), o, d, k)),
                (h.delay =
                  (+Yt(v, _assertThisInitialized(i), o, d, k) || 0) - i._delay),
                !b &&
                  1 === l &&
                  h.delay &&
                  ((i._delay = v = h.delay), (i._start += v), (h.delay = 0)),
                a.to(d, h, _(o, d, k));
            }
            g = v = 0;
          }
          g || i.duration((g = a.duration()));
        } else i.timeline = 0;
        return (
          !0 === w &&
            ((Lt = _assertThisInitialized(i)), E.killTweensOf(k), (Lt = 0)),
          (y ||
            (!g &&
              !T &&
              i._start === i.parent._time &&
              s(y) &&
              (function _hasNoPausedAncestors(t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
              })(_assertThisInitialized(i)) &&
              "nested" !== i.parent.data)) &&
            ((i._tTime = -B), i.render(Math.max(0, -v))),
          i
        );
      }
      _inheritsLoose(Tween, O);
      var t = Tween.prototype;
      return (
        (t.render = function render(t, e, r) {
          var n,
            i,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            p = this._time,
            d = this._tDur,
            c = this._dur,
            m = d - B < t && 0 <= t ? d : t < B ? 0 : t;
          if (c) {
            if (
              m !== this._tTime ||
              !t ||
              r ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((n = m), (l = this.timeline), this._repeat)) {
                if (
                  ((s = c + this._rDelay),
                  c < (n = _(m % s)) && (n = c),
                  (a = ~~(m / s)) && a === m / s && ((n = c), a--),
                  (u = this._yoyo && 1 & a) && ((f = this._yEase), (n = c - n)),
                  (o = ct(this._tTime, s)),
                  n === p && !r && this._initted)
                )
                  return this;
                a !== o &&
                  (!this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(s * a, !0).invalidate()._lock = 0)));
              }
              if (!this._initted && xa(this, n, r, e))
                return (this._tTime = 0), this;
              for (
                this._tTime = m,
                  this._time = n,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(n / c),
                  this._from && (this.ratio = h = 1 - h),
                  p || !n || e || wt(this, "onStart"),
                  i = this._pt;
                i;

              )
                i.r(h, i.d), (i = i._next);
              (l && l.render(t < 0 ? t : !n && u ? -B : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  wt(this, "onUpdate")),
                this._repeat &&
                  a !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  wt(this, "onRepeat"),
                (m !== this._tDur && m) ||
                  this._tTime !== m ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, r),
                  (!t && c) ||
                    !((t && 0 < this._ts) || (!m && this._ts < 0)) ||
                    pa(this, 1),
                  e ||
                    (t < 0 && !p) ||
                    (wt(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom && this._prom()));
            }
          } else
            !(function _renderZeroDurationTween(t, e, r, n) {
              var i,
                a = t._zTime < 0 ? 0 : 1,
                s = e < 0 ? 0 : 1,
                o = t._rDelay,
                u = 0;
              if (
                (o &&
                  t._repeat &&
                  ((u = gt(0, t._tDur, e)),
                  ct(u, o) !== ct(t._tTime, o) &&
                    ((a = 1 - s),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                (t._initted || !xa(t, e, n, r)) &&
                  (s !== a || n || t._zTime === B || (!e && t._zTime)))
              ) {
                for (
                  t._zTime = e || (r ? B : 0),
                    t.ratio = s,
                    t._from && (s = 1 - s),
                    t._time = 0,
                    t._tTime = u,
                    r || wt(t, "onStart"),
                    i = t._pt;
                  i;

                )
                  i.r(s, i.d), (i = i._next);
                !s &&
                  t._startAt &&
                  !t._onUpdate &&
                  t._start &&
                  t._startAt.render(e, !0, n),
                  t._onUpdate && !r && wt(t, "onUpdate"),
                  u && t._repeat && !r && t.parent && wt(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === s &&
                    (t.ratio && pa(t, 1),
                    r ||
                      (wt(t, t.ratio ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              }
            })(this, t, e, r);
          return this;
        }),
        (t.targets = function targets() {
          return this._targets;
        }),
        (t.invalidate = function invalidate() {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._act =
              this._lazy =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            O.prototype.invalidate.call(this)
          );
        }),
        (t.kill = function kill(t, e) {
          if (
            (void 0 === e && (e = "all"),
            !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
          )
            return _a(this);
          if (this.timeline)
            return (
              this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite),
              this
            );
          var r,
            i,
            a,
            s,
            o,
            u,
            h,
            l = this._targets,
            f = t ? yt(t) : l,
            p = this._ptLookup,
            d = this._pt;
          if (
            (!e || "all" === e) &&
            (function _arraysMatch(t, e) {
              for (
                var r = t.length, n = r === e.length;
                n && r-- && t[r] === e[r];

              );
              return r < 0;
            })(l, f)
          )
            return _a(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (n(e) &&
                  ((o = {}),
                  $(e, function (t) {
                    return (o[t] = 1);
                  }),
                  (e = o)),
                (e = (function _addAliasesToVars(t, e) {
                  var r,
                    n,
                    i,
                    a,
                    s = t[0] ? Y(t[0]).harness : 0,
                    o = s && s.aliases;
                  if (!o) return e;
                  for (n in ((r = _t({}, e)), o))
                    if ((n in r))
                      for (i = (a = o[n].split(",")).length; i--; )
                        r[a[i]] = r[n];
                  return r;
                })(l, e))),
              h = l.length;
            h--;

          )
            if (~f.indexOf(l[h]))
              for (o in ((i = p[h]),
              "all" === e
                ? ((r[h] = e), (s = i), (a = {}))
                : ((a = r[h] = r[h] || {}), (s = e)),
              s))
                (u = i && i[o]) &&
                  (("kill" in u.d && !0 !== u.d.kill(o)) || oa(this, u, "_pt"),
                  delete i[o]),
                  "all" !== a && (a[o] = 1);
          return this._initted && !this._pt && d && _a(this), this;
        }),
        (Tween.to = function to(t, e, r) {
          return new Tween(t, e, r);
        }),
        (Tween.from = function from(t, e) {
          return new Tween(t, ba(arguments, 1));
        }),
        (Tween.delayedCall = function delayedCall(t, e, r, n) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: n,
          });
        }),
        (Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t, ba(arguments, 2));
        }),
        (Tween.set = function set(t, e) {
          return (
            (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
          );
        }),
        (Tween.killTweensOf = function killTweensOf(t, e, r) {
          return E.killTweensOf(t, e, r);
        }),
        Tween
      );
    })(zt);
  ga(jt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    $("staggerTo,staggerFrom,staggerFromTo", function (r) {
      jt[r] = function () {
        var t = new Bt(),
          e = vt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function Pb(t, e, r) {
    return t.setAttribute(e, r);
  }
  function Xb(t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
  }
  var Ut = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    Vt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    $t = function _setterFuncWithParam(t, e, r, n) {
      return t[e](n.fp, r);
    },
    Wt = function _getSetter(t, e) {
      return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Pb : Ut;
    },
    Qt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    Zt = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Gt = function _renderComplexString(t, e) {
      var r = e._pt,
        n = "";
      if (!t && e.b) n = e.b;
      else if (1 === t && e.e) n = e.e;
      else {
        for (; r; )
          (n =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            n),
            (r = r._next);
        n += e.c;
      }
      e.set(e.t, e.p, n, e);
    },
    Jt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    Ht = function _addPluginModifier(t, e, r, n) {
      for (var i, a = this._pt; a; )
        (i = a._next), a.p === n && a.modifier(t, e, r), (a = i);
    },
    Kt = function _killPropTweensOf(t) {
      for (var e, r, n = this._pt; n; )
        (r = n._next),
          (n.p === t && !n.op) || n.op === t
            ? oa(this, n, "_pt")
            : n.dep || (e = 1),
          (n = r);
      return !e;
    },
    te = function _sortPropTweensByPriority(t) {
      for (var e, r, n, i, a = t._pt; a; ) {
        for (e = a._next, r = n; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : i) ? (a._prev._next = a) : (n = a),
          (a._next = r) ? (r._prev = a) : (i = a),
          (a = e);
      }
      t._pt = n;
    },
    ee =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = Xb),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, n, i, a, s, o, u) {
    (this.t = e),
      (this.s = n),
      (this.c = i),
      (this.p = r),
      (this.r = a || Qt),
      (this.d = s || this),
      (this.set = o || Ut),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  $(
    dt +
      ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",
    function (t) {
      (st[t] = 1), "on" === t.substr(0, 2) && (st[t + "Params"] = 1);
    }
  ),
    (at.TweenMax = at.TweenLite = jt),
    (at.TimelineLite = at.TimelineMax = Bt),
    (E = new Bt({
      sortChildren: !1,
      defaults: z,
      autoRemoveChildren: !0,
      id: "root",
    })),
    (j.stringFilter = jb);
  var re = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = o(t),
            n =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            i = {
              init: N,
              render: Jt,
              add: It,
              kill: Kt,
              modifier: Ht,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Wt,
              aliases: {},
              register: 0,
            };
          if ((Mt(), t !== n)) {
            if (ht[e]) return;
            ga(n, ga(ka(t, i), a)),
              _t(n.prototype, _t(i, ka(t, a))),
              (ht[(n.prop = e)] = n),
              t.targetTest && (pt.push(n), (st[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          M(e, n), t.register && t.register(ne, n, ee);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return E.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = yt(i)[0]);
      var a = Y(i || {}).get,
        s = e ? fa : ea;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((ht[t] && ht[t].get) || a)(i, t, e, r))
            : function (t, e, r) {
                return s(((ht[t] && ht[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, n) {
      if (1 < (r = yt(r)).length) {
        var i = r.map(function (t) {
            return ne.quickSetter(t, e, n);
          }),
          a = i.length;
        return function (t) {
          for (var e = a; e--; ) i[e](t);
        };
      }
      r = r[0] || {};
      var s = ht[e],
        o = Y(r),
        u = s
          ? function (t) {
              var e = new s();
              (c._pt = 0),
                e.init(r, n ? t + n : t, c, 0, [r]),
                e.render(1, e),
                c._pt && Jt(1, c);
            }
          : o.set(r, e);
      return s
        ? u
        : function (t) {
            return u(r, e, n ? t + n : t, o, 1);
          };
    },
    isTweening: function isTweening(t) {
      return 0 < E.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Ft(t.ease, z.ease)), ja(z, t || {});
    },
    config: function config(t) {
      return ja(j, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !ht[t] && !at[t] && L(i + " effect requires " + t + " plugin.")
        );
      }),
        (lt[i] = function (t, e) {
          return n(yt(t), ga(e || {}, a));
        }),
        s &&
          (Bt.prototype[i] = function (t, e, n) {
            return this.add(lt[i](t, r(e) ? e : (n = e) && {}), n);
          });
    },
    registerEase: function registerEase(t, e) {
      Pt[t] = Ft(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Ft(t, e) : Pt;
    },
    getById: function getById(t) {
      return E.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        n,
        i = new Bt(t);
      for (
        i.smoothChildTiming = s(t.smoothChildTiming),
          E.remove(i),
          i._dp = 0,
          i._time = i._tTime = E._time,
          r = E._first;
        r;

      )
        (n = r._next),
          (!e &&
            !r._dur &&
            r instanceof jt &&
            r.vars.onComplete === r._targets[0]) ||
            wa(i, r, r._start - r._delay),
          (r = n);
      return wa(E, i, 0), i;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var n = t - e;
        return G(e)
          ? Ta(e, wrap(0, e.length), t)
          : Da(r, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var n = t - e,
          i = 2 * n;
        return G(e)
          ? Ta(e, wrapYoyo(0, e.length - 1), t)
          : Da(r, function (t) {
              return e + (n < (t = (i + ((t - e) % i)) % i) ? i - t : t);
            });
      },
      distribute: Ma,
      random: Pa,
      snap: Oa,
      normalize: function normalize(t, e, r) {
        return bt(t, e, 0, 1, r);
      },
      getUnit: Fa,
      clamp: function clamp(e, r, t) {
        return Da(t, function (t) {
          return gt(e, r, t);
        });
      },
      splitColor: fb,
      toArray: yt,
      mapRange: bt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Fa(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = n(e),
            p = {};
          if ((!0 === t && (i = 1) && (t = null), f))
            (e = { p: e }), (r = { p: r });
          else if (G(e) && !G(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = r);
          } else i || (e = _t(G(e) ? [] : {}, e));
          if (!u) {
            for (s in r) It.call(p, e, s, "get", r[s]);
            a = function func(t) {
              return Jt(t, p) || (f ? e.p : e);
            };
          }
        }
        return Da(t, a);
      },
      shuffle: La,
    },
    install: J,
    effects: lt,
    ticker: Ct,
    updateRoot: Bt.updateRoot,
    plugins: ht,
    globalTimeline: E,
    core: {
      PropTween: ee,
      globals: M,
      Tween: jt,
      Timeline: Bt,
      Animation: zt,
      getCache: Y,
    },
  };
  $("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (re[t] = jt[t]);
  }),
    Ct.add(Bt.updateRoot),
    (c = re.to({}, { duration: 0 }));
  function _b(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function bc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (
            (n(i) &&
              ((e = {}),
              $(i, function (t) {
                return (e[t] = 1);
              }),
              (i = e)),
            a)
          ) {
            for (r in ((e = {}), i)) e[r] = a(i[r]);
            i = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              n,
              i,
              a = t._targets;
            for (r in e)
              for (n = a.length; n--; )
                (i = (i = t._ptLookup[n][r]) && i.d) &&
                  (i._pt && (i = _b(i, r)),
                  i && i.modifier && i.modifier(e[r], t, a[n], r));
          })(t, i);
        };
      },
    };
  }
  var ne =
    re.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, n, i) {
          for (var a in e)
            this.add(
              t,
              "setAttribute",
              (t.getAttribute(a) || 0) + "",
              e[a],
              n,
              i,
              0,
              0,
              a
            ),
              this._props.push(a);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      bc("roundProps", Na),
      bc("modifiers"),
      bc("snap", Oa)
    ) || re;
  (jt.version = Bt.version = ne.version = "3.1.1"), (f = 1), t() && Mt();
  function Nc(t, e) {
    return e.set(e.t, e.p, ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e);
  }
  function Oc(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u,
      e
    );
  }
  function Pc(t, e) {
    return e.set(e.t, e.p, t ? ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u : e.b, e);
  }
  function Qc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Rc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Sc(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Tc(t, e, r) {
    return (t.style[e] = r);
  }
  function Uc(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Vc(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Wc(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Xc(t, e, r, n, i) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(i, a);
  }
  function Yc(t, e, r, n, i) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(i, a);
  }
  function ad(t, e) {
    var r = ae.createElementNS
      ? ae.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : ae.createElement(t);
    return r.style ? r : ae.createElement(t);
  }
  function bd(t, e, r) {
    var n = getComputedStyle(t);
    return (
      n[e] ||
      n.getPropertyValue(e.replace(Ee, "-$1").toLowerCase()) ||
      n.getPropertyValue(e) ||
      (!r && bd(t, Xe(e) || e, 1)) ||
      ""
    );
  }
  function ed() {
    !(function _windowExists() {
      return "undefined" != typeof window;
    })() ||
      ((ie = window),
      (ae = ie.document),
      (se = ae.documentElement),
      (ue = ad("div") || { style: {} }),
      (he = ad("div")),
      (Ne = Xe(Ne)),
      (Ye = Xe(Ye)),
      (ue.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (fe = !!Xe("perspective")),
      (oe = 1));
  }
  function gd(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function hd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = function _getBBoxHack(t) {
        var e,
          r = ad(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          n = this.parentNode,
          i = this.nextSibling,
          a = this.style.cssText;
        if (
          (se.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          t)
        )
          try {
            (e = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = _getBBoxHack);
          } catch (t) {}
        else this._gsapBBox && (e = this._gsapBBox());
        return (
          i ? n.insertBefore(this, i) : n.appendChild(this),
          se.removeChild(r),
          (this.style.cssText = a),
          e
        );
      }.call(e, !0);
    }
    return !r || r.width || r.x || r.y
      ? r
      : {
          x: +gd(e, ["x", "cx", "x1"]) || 0,
          y: +gd(e, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0,
        };
  }
  function id(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !hd(t));
  }
  function jd(t, e) {
    if (e) {
      var r = t.style;
      e in De && (e = Ne),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(Ee, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function kd(t, e, r, n, i, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Sc : Rc);
    return ((t._pt = s).b = n), (s.e = i), t._props.push(r), s;
  }
  function md(t, e, r, n) {
    var i,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = ue.style,
      f = Be.test(e),
      p = "svg" === t.tagName.toLowerCase(),
      d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
      c = "px" === n;
    return n === h || !u || je[n] || je[h]
      ? u
      : ((o = t.getCTM && id(t)),
        "%" === n && (De[e] || ~e.indexOf("adius"))
          ? _((u / (o ? t.getBBox()[f ? "width" : "height"] : t[d])) * 100)
          : ((l[f ? "width" : "height"] = 100 + (c ? h : n)),
            (a =
              ~e.indexOf("adius") || ("em" === n && t.appendChild && !p)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== ae && a.appendChild) || (a = ae.body),
            (s = a._gsap) && "%" === n && s.width && f && s.time === Ct.time
              ? _((u / s.width) * 100)
              : (a === t && (l.position = "static"),
                a.appendChild(ue),
                (i = ue[d]),
                a.removeChild(ue),
                (l.position = "absolute"),
                f &&
                  "%" === n &&
                  (((s = Y(a)).time = Ct.time), (s.width = a[d])),
                _(c ? (i * u) / 100 : (100 / i) * u))));
  }
  function nd(t, e, r, n) {
    var i;
    return (
      oe || ed(),
      e in Ie &&
        "transform" !== e &&
        ~(e = Ie[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      De[e] && "transform" !== e
        ? ((i = Qe(t, n)),
          (i =
            "transformOrigin" !== e ? i[e] : Ze(bd(t, Ye)) + i.zOrigin + "px"))
        : ((i = t.style[e]) &&
            "auto" !== i &&
            !n &&
            !~(i + "").indexOf("calc(")) ||
          (i =
            (Ve[e] && Ve[e](t, e, r)) ||
            bd(t, e) ||
            Z(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(i + "").indexOf(" ") ? md(t, e, i, r) + r : i
    );
  }
  function od(t, e, r, n) {
    var i,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      p,
      d,
      _,
      c,
      m = new ee(this._pt, t.style, e, 0, 1, Gt),
      g = 0,
      v = 0;
    if (
      ((m.b = r),
      (m.e = n),
      (r += ""),
      "auto" === (n += "") &&
        ((t.style[e] = n), (n = bd(t, e) || n), (t.style[e] = r)),
      jb((i = [r, n])),
      (n = i[1]),
      !!(h = (r = i[0]).indexOf("rgba(")) != !!(l = n.indexOf("rgba(")) &&
        (h
          ? (r = r.substr(h) + " " + r.substr(0, h - 1))
          : (n = n.substr(l) + " " + n.substr(0, l - 1))),
      (s = r.match(ze) || []),
      (n.match(ze) || []).length)
    ) {
      for (; (a = ze.exec(n)); )
        (l = a[0]),
          (p = n.substring(g, a.index)),
          u
            ? (u = (u + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (u = 1),
          l !== (h = s[v++] || "") &&
            ((o = parseFloat(h) || 0),
            (_ = h.substr((o + "").length)),
            (c = "=" === l.charAt(1) ? +(l.charAt(0) + "1") : 0) &&
              (l = l.substr(2)),
            (f = parseFloat(l)),
            (d = l.substr((f + "").length)),
            (g = ze.lastIndex - d.length),
            d ||
              ((d = d || j.units[e] || _),
              g === n.length && ((n += d), (m.e += d))),
            _ !== d && (o = md(t, e, h, d) || 0),
            (m._pt = {
              _next: m._pt,
              p: p || 1 === v ? p : ",",
              s: o,
              c: c ? c * f : f - o,
              m: u && u < 4 ? Math.round : 0,
            }));
      m.c = g < n.length ? n.substring(g, n.length) : "";
    } else m.r = "display" === e && "none" === n ? Sc : Rc;
    return nt.test(n) && (m.e = 0), (this._pt = m);
  }
  function qd(t) {
    var e = t.split(" "),
      r = e[0],
      n = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) ||
        ((t = r), (r = n), (n = t)),
      (e[0] = Ue[r] || r),
      (e[1] = Ue[n] || n),
      e.join(" ")
    );
  }
  function rd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        n,
        i,
        a = e.t,
        s = a.style,
        o = e.u;
      if ("all" === o || !0 === o) (s.cssText = ""), (n = 1);
      else
        for (i = (o = o.split(",")).length; -1 < --i; )
          (r = o[i]),
            De[r] && ((n = 1), (r = "transformOrigin" === r ? Ye : Ne)),
            jd(a, r);
      n &&
        (jd(a, Ne),
        (n = a._gsap) && (n.svg && a.removeAttribute("transform"), Qe(a, 1)));
    }
  }
  function vd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function wd(t) {
    var e = bd(t, Ne);
    return vd(e) ? $e : e.substr(7).match(tt).map(_);
  }
  function xd(t, e) {
    var r,
      n,
      i,
      a,
      s = t._gsap,
      o = t.style,
      u = wd(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (i = t.transform.baseVal.consolidate().matrix).a,
          i.b,
          i.c,
          i.d,
          i.e,
          i.f,
        ]).join(",")
        ? $e
        : u
      : (u !== $e ||
          t.offsetParent ||
          t === se ||
          s.svg ||
          ((i = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (n = t.nextSibling), se.appendChild(t)),
          (u = wd(t)),
          i ? (o.display = i) : jd(t, "display"),
          a &&
            (n
              ? r.insertBefore(t, n)
              : r
              ? r.appendChild(t)
              : se.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function yd(t, e, r, n, i, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = i || xd(t, !0),
      f = h.xOrigin || 0,
      p = h.yOrigin || 0,
      d = h.xOffset || 0,
      _ = h.yOffset || 0,
      c = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      b = l[5],
      w = e.split(" "),
      T = parseFloat(w[0]) || 0,
      x = parseFloat(w[1]) || 0;
    r
      ? l !== $e &&
        (o = c * v - m * g) &&
        ((u = T * (-m / o) + x * (c / o) - (c * b - m * y) / o),
        (T = T * (v / o) + x * (-g / o) + (g * b - v * y) / o),
        (x = u))
      : ((T = (s = hd(t)).x + (~w[0].indexOf("%") ? (T / 100) * s.width : T)),
        (x = s.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * s.height : x))),
      n || (!1 !== n && h.smooth)
        ? ((y = T - f),
          (b = x - p),
          (h.xOffset = d + (y * c + b * g) - y),
          (h.yOffset = _ + (y * m + b * v) - b))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = T),
      (h.yOrigin = x),
      (h.smooth = !!n),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Ye] = "0px 0px"),
      a &&
        (kd(a, h, "xOrigin", f, T),
        kd(a, h, "yOrigin", p, x),
        kd(a, h, "xOffset", d, h.xOffset),
        kd(a, h, "yOffset", _, h.yOffset));
  }
  function Bd(t, e, r) {
    var n = Fa(e);
    return _(parseFloat(e) + parseFloat(md(t, "x", r + "px", n))) + n;
  }
  function Id(t, e, r, i, a, s) {
    var o,
      u,
      h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf("rad") ? Ae : 1),
      p = s ? f * s : f - i,
      d = i + p + "deg";
    return (
      l &&
        ("short" === (o = a.split("_")[1]) &&
          (p %= h) !== p % 180 &&
          (p += p < 0 ? h : -h),
        "cw" === o && p < 0
          ? (p = ((p + 36e9) % h) - ~~(p / h) * h)
          : "ccw" === o && 0 < p && (p = ((p - 36e9) % h) - ~~(p / h) * h)),
      (t._pt = u = new ee(t._pt, e, r, i, p, Oc)),
      (u.e = d),
      (u.u = "deg"),
      t._props.push(r),
      u
    );
  }
  function Jd(t, e, r) {
    var n,
      i,
      a,
      s,
      o,
      u,
      h,
      l = he.style,
      f = r._gsap;
    for (i in ((l.cssText =
      getComputedStyle(r).cssText + ";position:absolute;display:block;"),
    (l[Ne] = e),
    ae.body.appendChild(he),
    (n = Qe(he, 1)),
    De))
      (a = f[i]) !== (s = n[i]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
        ((o = Fa(a) !== (h = Fa(s)) ? md(r, i, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new ee(t._pt, f, i, o, u - o, Nc)),
        (t._pt.u = h || 0),
        t._props.push(i));
    ae.body.removeChild(he);
  }
  var ie,
    ae,
    se,
    oe,
    ue,
    he,
    le,
    fe,
    pe = Pt.Power0,
    de = Pt.Power1,
    _e = Pt.Power2,
    ce = Pt.Power3,
    me = Pt.Power4,
    ge = Pt.Linear,
    ve = Pt.Quad,
    ye = Pt.Cubic,
    be = Pt.Quart,
    we = Pt.Quint,
    Te = Pt.Strong,
    xe = Pt.Elastic,
    ke = Pt.Back,
    Oe = Pt.SteppedEase,
    Ce = Pt.Bounce,
    Me = Pt.Sine,
    Pe = Pt.Expo,
    Se = Pt.Circ,
    De = {},
    Ae = 180 / Math.PI,
    Fe = Math.PI / 180,
    Re = Math.atan2,
    Ee = /([A-Z])/g,
    ze = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,
    Be = /(?:left|right|width|margin|padding|x)/i,
    Le = /[\s,\(]\S/,
    Ie = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ne = "transform",
    Ye = Ne + "Origin",
    qe = "O,Moz,ms,Ms,Webkit".split(","),
    Xe = function _checkPropPrefix(t, e) {
      var r = (e || ue).style,
        n = 5;
      if (t in r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(qe[n] + t in r);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? qe[n] : "") + t;
    },
    je = { deg: 1, rad: 1, turn: 1 },
    Ue = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Ve = {
      clearProps: function clearProps(t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var a = (t._pt = new ee(t._pt, e, r, 0, 0, rd));
          return (a.u = n), (a.pr = -10), (a.tween = i), t._props.push(r), 1;
        }
      },
    },
    $e = [1, 0, 0, 1, 0, 0],
    We = {},
    Qe = function _parseTransform(t, e) {
      var r = t._gsap || new Et(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        p,
        d,
        c,
        m,
        g,
        v,
        y,
        b,
        w,
        T,
        x,
        k,
        O,
        C,
        M,
        P,
        S,
        D,
        A,
        F,
        R,
        E = t.style,
        z = r.scaleX < 0,
        B = r.xOrigin || 0,
        L = r.yOrigin || 0,
        I = "deg",
        N = bd(t, Ye) || "0";
      return (
        (n = i = a = u = h = l = f = p = d = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !id(t))),
        (c = xd(t, r.svg)),
        r.svg && yd(t, N, r.originIsAbsolute, !1 !== r.smooth, c),
        c !== $e &&
          ((y = c[0]),
          (b = c[1]),
          (w = c[2]),
          (T = c[3]),
          (n = x = c[4]),
          (i = k = c[5]),
          6 === c.length
            ? ((s = Math.sqrt(y * y + b * b)),
              (o = Math.sqrt(T * T + w * w)),
              (u = y || b ? Re(b, y) * Ae : 0),
              (f = w || T ? Re(w, T) * Ae + u : 0),
              r.svg && ((n -= B - (B * y + L * w)), (i -= L - (B * b + L * T))))
            : ((R = c[6]),
              (A = c[7]),
              (P = c[8]),
              (S = c[9]),
              (D = c[10]),
              (F = c[11]),
              (n = c[12]),
              (i = c[13]),
              (a = c[14]),
              (h = (m = Re(R, D)) * Ae),
              m &&
                ((O = x * (g = Math.cos(-m)) + P * (v = Math.sin(-m))),
                (C = k * g + S * v),
                (M = R * g + D * v),
                (P = x * -v + P * g),
                (S = k * -v + S * g),
                (D = R * -v + D * g),
                (F = A * -v + F * g),
                (x = O),
                (k = C),
                (R = M)),
              (l = (m = Re(-w, D)) * Ae),
              m &&
                ((g = Math.cos(-m)),
                (F = T * (v = Math.sin(-m)) + F * g),
                (y = O = y * g - P * v),
                (b = C = b * g - S * v),
                (w = M = w * g - D * v)),
              (u = (m = Re(b, y)) * Ae),
              m &&
                ((O = y * (g = Math.cos(m)) + b * (v = Math.sin(m))),
                (C = x * g + k * v),
                (b = b * g - y * v),
                (k = k * g - x * v),
                (y = O),
                (x = C)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = _(Math.sqrt(y * y + b * b + w * w))),
              (o = _(Math.sqrt(k * k + R * R))),
              (m = Re(x, k)),
              (f = 2e-4 < Math.abs(m) ? m * Ae : 0),
              (d = F ? 1 / (F < 0 ? -F : F) : 0)),
          r.svg &&
            ((c = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !vd(bd(t, Ne))),
            c && t.setAttribute("transform", c))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (z
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          ((r.xPercent =
            n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
            ? 0
            : n) + "px"),
        (r.y =
          ((r.yPercent =
            i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + "px"),
        (r.z = a + "px"),
        (r.scaleX = _(s)),
        (r.scaleY = _(o)),
        (r.rotation = _(u) + I),
        (r.rotationX = _(h) + I),
        (r.rotationY = _(l) + I),
        (r.skewX = f + I),
        (r.skewY = p + I),
        (r.transformPerspective = d + "px"),
        (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (E[Ye] = Ze(N)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = j.force3D),
        (r.renderTransform = r.svg ? er : fe ? tr : Ge),
        (r.uncache = 0),
        r
      );
    },
    Ze = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ge = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        tr(t, e);
    },
    Je = "0deg",
    He = "0px",
    Ke = ") ",
    tr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        p = r.skewY,
        d = r.scaleX,
        _ = r.scaleY,
        c = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        b = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Je || h !== Je)) {
        var w,
          T = parseFloat(h) * Fe,
          x = Math.sin(T),
          k = Math.cos(T);
        (T = parseFloat(l) * Fe),
          (w = Math.cos(T)),
          (a = Bd(g, a, x * w * -v)),
          (s = Bd(g, s, -Math.sin(T) * -v)),
          (o = Bd(g, o, k * w * -v + v));
      }
      c !== He && (y += "perspective(" + c + Ke),
        (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
        (!b && a === He && s === He && o === He) ||
          (y +=
            o !== He || b
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + Ke),
        u !== Je && (y += "rotate(" + u + Ke),
        h !== Je && (y += "rotateY(" + h + Ke),
        l !== Je && (y += "rotateX(" + l + Ke),
        (f === Je && p === Je) || (y += "skew(" + f + ", " + p + Ke),
        (1 === d && 1 === _) || (y += "scale(" + d + ", " + _ + Ke),
        (g.style[Ne] = y || "translate(0, 0)");
    },
    er = function _renderSVGTransforms(t, e) {
      var r,
        n,
        i,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        p = o.rotation,
        d = o.skewX,
        c = o.skewY,
        m = o.scaleX,
        g = o.scaleY,
        v = o.target,
        y = o.xOrigin,
        b = o.yOrigin,
        w = o.xOffset,
        T = o.yOffset,
        x = o.forceCSS,
        k = parseFloat(l),
        O = parseFloat(f);
      (p = parseFloat(p)),
        (d = parseFloat(d)),
        (c = parseFloat(c)) && ((d += c = parseFloat(c)), (p += c)),
        p || d
          ? ((p *= Fe),
            (d *= Fe),
            (r = Math.cos(p) * m),
            (n = Math.sin(p) * m),
            (i = Math.sin(p - d) * -g),
            (a = Math.cos(p - d) * g),
            d &&
              ((c *= Fe),
              (s = Math.tan(d - c)),
              (i *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              c &&
                ((s = Math.tan(c)), (r *= s = Math.sqrt(1 + s * s)), (n *= s))),
            (r = _(r)),
            (n = _(n)),
            (i = _(i)),
            (a = _(a)))
          : ((r = m), (a = g), (n = i = 0)),
        ((k && !~(l + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
          ((k = md(v, "x", l, "px")), (O = md(v, "y", f, "px"))),
        (y || b || w || T) &&
          ((k = _(k + y - (y * r + b * i) + w)),
          (O = _(O + b - (y * n + b * a) + T))),
        (u || h) &&
          ((s = v.getBBox()),
          (k = _(k + (u / 100) * s.width)),
          (O = _(O + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          i +
          "," +
          a +
          "," +
          k +
          "," +
          O +
          ")"),
        v.setAttribute("transform", s),
        x && (v.style[Ne] = s);
    };
  $("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      n = "Bottom",
      i = "Left",
      o = (r < 3 ? ["Top", t, n, i] : ["Top" + i, "Top" + t, n + t, n + i]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    Ve[1 < r ? "border" + e : e] = function (e, t, r, n, i) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return nd(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (n + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, i);
    };
  });
  var rr,
    nr,
    ir,
    ar = {
      name: "css",
      register: ed,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, n, i) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          p,
          d,
          _,
          c,
          m,
          g,
          v,
          y,
          b = this._props,
          w = t.style;
        for (f in (oe || ed(), e))
          if (
            "autoRound" !== f &&
            ((s = e[f]), !ht[f] || !Eb(f, e, r, n, t, i))
          )
            if (
              ((h = typeof s),
              (l = Ve[f]),
              "function" === h && (h = typeof (s = s.call(r, n, t, i))),
              "string" === h && ~s.indexOf("random(") && (s = Wa(s)),
              l)
            )
              l(this, t, f, s, r) && (y = 1);
            else if ("--" === f.substr(0, 2))
              this.add(
                w,
                "setProperty",
                getComputedStyle(t).getPropertyValue(f) + "",
                s + "",
                n,
                i,
                0,
                0,
                f
              );
            else {
              if (
                ((a = nd(t, f)),
                (u = parseFloat(a)),
                (_ =
                  "string" === h && "=" === s.charAt(1)
                    ? +(s.charAt(0) + "1")
                    : 0) && (s = s.substr(2)),
                (o = parseFloat(s)),
                f in Ie &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === nd(t, "visibility") &&
                      o &&
                      (u = 0),
                    kd(
                      this,
                      w,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = Ie[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (c = f in De))
              )
                if (
                  (m ||
                    ((g = t._gsap).renderTransform || Qe(t),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new ee(
                        this._pt,
                        w,
                        Ne,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new ee(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    _ ? _ * o : o - g.scaleY
                  )),
                    b.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (s = qd(s)),
                      g.svg
                        ? yd(t, s, 0, v, 0, this)
                        : ((d = parseFloat(s.split(" ")[2])) !== g.zOrigin &&
                            kd(this, g, "zOrigin", g.zOrigin, d),
                          kd(this, w, f, Ze(a), Ze(s)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    yd(t, s, 1, v, 0, this);
                    continue;
                  }
                  if (f in We) {
                    Id(this, g, f, u, s, _);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    kd(this, g, "smooth", g.smooth, s);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = s;
                    continue;
                  }
                  if ("transform" === f) {
                    Jd(this, s, t);
                    continue;
                  }
                }
              else f in w || (f = Xe(f) || f);
              if (
                c ||
                ((o || 0 === o) && (u || 0 === u) && !Le.test(s) && f in w)
              )
                (p = (a + "").substr((u + "").length)) !==
                  (d =
                    (s + "").substr((o + "").length) ||
                    (f in j.units ? j.units[f] : p)) && (u = md(t, f, a, d)),
                  (this._pt = new ee(
                    this._pt,
                    c ? g : w,
                    f,
                    u,
                    _ ? _ * o : o - u,
                    "px" !== d || !1 === e.autoRound || c ? Nc : Qc
                  )),
                  (this._pt.u = d || 0),
                  p !== d && ((this._pt.b = a), (this._pt.r = Pc));
              else if (f in w) od.call(this, t, f, a, s);
              else {
                if (!(f in t)) {
                  K(f, s);
                  continue;
                }
                this.add(t, f, t[f], s, n, i);
              }
              b.push(f);
            }
        y && te(this);
      },
      get: nd,
      aliases: Ie,
      getSetter: function getSetter(t, e, r) {
        return (e = Ie[e] || e) in De && e !== Ye && (t._gsap.x || nd(t, "x"))
          ? r && le === r
            ? "scale" === e
              ? Wc
              : Vc
            : (le = r || {}) && ("scale" === e ? Xc : Yc)
          : t.style && !q(t.style[e])
          ? Tc
          : ~e.indexOf("-")
          ? Uc
          : Wt(t, e);
      },
    };
  (ne.utils.checkPrefix = Xe),
    (ir = $(
      (rr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (nr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        De[t] = 1;
      }
    )),
    $(nr, function (t) {
      (j.units[t] = "deg"), (We[t] = 1);
    }),
    (Ie[ir[13]] = rr + "," + nr),
    $(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        Ie[e[1]] = ir[e[0]];
      }
    ),
    $(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        j.units[t] = "px";
      }
    ),
    ne.registerPlugin(ar);
  var sr = ne.registerPlugin(ar) || ne,
    or = sr.core.Tween;
  (e.Back = ke),
    (e.Bounce = Ce),
    (e.CSSPlugin = ar),
    (e.Circ = Se),
    (e.Cubic = ye),
    (e.Elastic = xe),
    (e.Expo = Pe),
    (e.Linear = ge),
    (e.Power0 = pe),
    (e.Power1 = de),
    (e.Power2 = _e),
    (e.Power3 = ce),
    (e.Power4 = me),
    (e.Quad = ve),
    (e.Quart = be),
    (e.Quint = we),
    (e.Sine = Me),
    (e.SteppedEase = Oe),
    (e.Strong = Te),
    (e.TimelineLite = Bt),
    (e.TimelineMax = Bt),
    (e.TweenLite = jt),
    (e.TweenMax = or),
    (e.default = sr),
    (e.gsap = sr);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var $ = jQuery.noConflict();
$(document).ready(function () {
  var cat = getParameterByName("cat");
  var type = getParameterByName("type");
  if (cat != null && cat != "all") {
    var value_name = "trabajos_actividades-" + cat;
  } else if (type != null && type != "all") {
  }
  if (cat != null || type != null) {
    console.log(value_name);
    $(".filter-simple-item")
      .not("." + value_name)
      .addClass("show-item-out");
    $(".filter-simple-item")
      .filter("." + value_name)
      .addClass("show-item-in");
    $(".filter-simple-item")
      .filter("." + value_name)
      .removeClass("show-item-out");
    $(".filter_btn").addClass("is-active");
  }
});
$(".filter-simple-button").click(function () {
  var value = $(this).attr("data-filter");
  if (value === "all") {
    $(".filter-simple-item").removeClass("show-item-out");
    $(".filter-simple-item").addClass("show-item-in");
    $(".filter-simple-item").removeClass("show-item-in");
    $(".filter_btn").removeClass("is-active");
  } else {
    window.scrollTo(500, 0);
    $(".filter-simple-item")
      .not("." + value)
      .addClass("show-item-out");
    $(".filter-simple-item")
      .filter("." + value)
      .addClass("show-item-in");
    $(".filter-simple-item")
      .filter("." + value)
      .removeClass("show-item-out");
    $(".filter_btn").addClass("is-active");
  }
});
$(".filter-simple-button").click(function () {
  $(this).siblings().removeClass("is-active");
  $(this).addClass("is-active");
}); /*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  "use strict";
  var f =
      "undefined" == typeof document
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document,
    J =
      "undefined" == typeof window
        ? {
            document: f,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return "";
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    l = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return (this.length = e.length), this;
    };
  function L(e, t) {
    var a = [],
      i = 0;
    if (e && !t && e instanceof l) return e;
    if (e)
      if ("string" == typeof e) {
        var s,
          r,
          n = e.trim();
        if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
          var o = "div";
          for (
            0 === n.indexOf("<li") && (o = "ul"),
              0 === n.indexOf("<tr") && (o = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
              0 === n.indexOf("<tbody") && (o = "table"),
              0 === n.indexOf("<option") && (o = "select"),
              (r = f.createElement(o)).innerHTML = n,
              i = 0;
            i < r.childNodes.length;
            i += 1
          )
            a.push(r.childNodes[i]);
        } else
          for (
            s =
              t || "#" !== e[0] || e.match(/[ .<>:~]/)
                ? (t || f).querySelectorAll(e.trim())
                : [f.getElementById(e.trim().split("#")[1])],
              i = 0;
            i < s.length;
            i += 1
          )
            s[i] && a.push(s[i]);
      } else if (e.nodeType || e === J || e === f) a.push(e);
      else if (0 < e.length && e[0].nodeType)
        for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new l(a);
  }
  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1)
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t;
  }
  (L.fn = l.prototype), (L.Class = l), (L.Dom7 = l);
  var t = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.add(t[a]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.remove(t[a]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.toggle(t[a]);
      return this;
    },
    attr: function (e, t) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var i = 0; i < this.length; i += 1)
        if (2 === a.length) this[i].setAttribute(e, t);
        else
          for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var a;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1)
          (a = this[i]).dom7ElementDataStorage ||
            (a.dom7ElementDataStorage = {}),
            (a.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((a = this[0])) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
          return a.dom7ElementDataStorage[e];
        var s = a.getAttribute("data-" + e);
        return s || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransform = e), (a.transform = e);
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransitionDuration = e), (a.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      var i = t[0],
        r = t[1],
        n = t[2],
        s = t[3];
      function o(e) {
        var t = e.target;
        if (t) {
          var a = e.target.dom7EventData || [];
          if ((a.indexOf(e) < 0 && a.unshift(e), L(t).is(r))) n.apply(t, a);
          else
            for (var i = L(t).parents(), s = 0; s < i.length; s += 1)
              L(i[s]).is(r) && n.apply(i[s], a);
        }
      }
      function l(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] &&
        ((i = (e = t)[0]), (n = e[1]), (s = e[2]), (r = void 0)),
        s || (s = !1);
      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (d = 0; d < p.length; d += 1) {
            var h = p[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
              u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }),
              u.addEventListener(h, o, s);
          }
        else
          for (d = 0; d < p.length; d += 1) {
            var v = p[d];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
              u.dom7Listeners[v].push({ listener: n, proxyListener: l }),
              u.addEventListener(v, l, s);
          }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] &&
        ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)),
        n || (n = !1);
      for (var o = i.split(" "), l = 0; l < o.length; l += 1)
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
            u = void 0;
          if (
            (!s && c.dom7Listeners
              ? (u = c.dom7Listeners[d])
              : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
            u && u.length)
          )
            for (var h = u.length - 1; 0 <= h; h -= 1) {
              var v = u[h];
              r && v.listener === r
                ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                : r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r
                ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                : r ||
                  (c.removeEventListener(d, v.proxyListener, n),
                  u.splice(h, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
        for (var r = a[s], n = 0; n < this.length; n += 1) {
          var o = this[n],
            l = void 0;
          try {
            l = new J.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (e) {
            (l = f.createEvent("Event")).initEvent(r, !0, !0), (l.detail = i);
          }
          (o.dom7EventData = e.filter(function (e, t) {
            return 0 < t;
          })),
            o.dispatchEvent(l),
            (o.dom7EventData = []),
            delete o.dom7EventData;
        }
      return this;
    },
    transitionEnd: function (t) {
      var a,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function r(e) {
        if (e.target === this)
          for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r);
      }
      if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
      return this;
    },
    outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (0 < this.length) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = f.body,
          i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0,
          r = e === J ? J.scrollY : e.scrollTop,
          n = e === J ? J.scrollX : e.scrollLeft;
        return { top: t.top + r - i, left: t.left + n - s };
      }
      return null;
    },
    css: function (e, t) {
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var i in e) this[a].style[i] = e[i];
          return this;
        }
        if (this[0])
          return J.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      var t,
        a,
        i = this[0];
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
        return !1;
      }
      if (e === f) return i === f;
      if (e === J) return i === J;
      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
          if (t[a] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        a = this.length;
      return new l(
        a - 1 < e ? [] : e < 0 ? ((t = a + e) < 0 ? [] : [this[t]]) : [this[e]]
      );
    },
    append: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      for (var i = 0; i < t.length; i += 1) {
        e = t[i];
        for (var s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            var r = f.createElement("div");
            for (r.innerHTML = e; r.firstChild; )
              this[s].appendChild(r.firstChild);
          } else if (e instanceof l)
            for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
          else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      var t, a;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var i = f.createElement("div");
          for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1)
            this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
        } else if (e instanceof l)
          for (a = 0; a < e.length; a += 1)
            this[t].insertBefore(e[a], this[t].childNodes[0]);
        else this[t].insertBefore(e, this[t].childNodes[0]);
      return this;
    },
    next: function (e) {
      return 0 < this.length
        ? e
          ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e)
            ? new l([this[0].nextElementSibling])
            : new l([])
          : this[0].nextElementSibling
          ? new l([this[0].nextElementSibling])
          : new l([])
        : new l([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.nextElementSibling; ) {
        var i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
      }
      return new l(t);
    },
    prev: function (e) {
      if (0 < this.length) {
        var t = this[0];
        return e
          ? t.previousElementSibling && L(t.previousElementSibling).is(e)
            ? new l([t.previousElementSibling])
            : new l([])
          : t.previousElementSibling
          ? new l([t.previousElementSibling])
          : new l([]);
      }
      return new l([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.previousElementSibling; ) {
        var i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
      }
      return new l(t);
    },
    parent: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        null !== this[a].parentNode &&
          (e
            ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode)
            : t.push(this[a].parentNode));
      return L(r(t));
    },
    parents: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].parentNode; i; )
          e ? L(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      return L(r(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new l([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
          t.push(i[s]);
      return new l(t);
    },
    children: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
          e
            ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s])
            : 1 === i[s].nodeType && t.push(i[s]);
      return new l(r(t));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var a, i;
      for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);
        for (i = 0; i < s.length; i += 1)
          (this[this.length] = s[i]), (this.length += 1);
      }
      return this;
    },
    styles: function () {
      return this[0] ? J.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e];
  });
  var e,
    a,
    i,
    s,
    ee = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, t) {
        var a, i, s;
        void 0 === t && (t = "x");
        var r = J.getComputedStyle(e, null);
        return (
          J.WebKitCSSMatrix
            ? (6 < (i = r.transform || r.webkitTransform).split(",").length &&
                (i = i
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (s = new J.WebKitCSSMatrix("none" === i ? "" : i)))
            : (a = (s =
                r.MozTransform ||
                r.OTransform ||
                r.MsTransform ||
                r.msTransform ||
                r.transform ||
                r
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (i = J.WebKitCSSMatrix
              ? s.m41
              : 16 === a.length
              ? parseFloat(a[12])
              : parseFloat(a[4])),
          "y" === t &&
            (i = J.WebKitCSSMatrix
              ? s.m42
              : 16 === a.length
              ? parseFloat(a[13])
              : parseFloat(a[5])),
          i || 0
        );
      },
      parseUrlQuery: function (e) {
        var t,
          a,
          i,
          s,
          r = {},
          n = e || J.location.href;
        if ("string" == typeof n && n.length)
          for (
            s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (e) {
                return "" !== e;
              })).length,
              t = 0;
            t < s;
            t += 1
          )
            (i = a[t].replace(/#\S+/g, "").split("=")),
              (r[decodeURIComponent(i[0])] =
                void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
        return r;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s)
            for (
              var r = Object.keys(Object(s)), n = 0, o = r.length;
              n < o;
              n += 1
            ) {
              var l = r[n],
                d = Object.getOwnPropertyDescriptor(s, l);
              void 0 !== d &&
                d.enumerable &&
                (ee.isObject(a[l]) && ee.isObject(s[l])
                  ? ee.extend(a[l], s[l])
                  : !ee.isObject(a[l]) && ee.isObject(s[l])
                  ? ((a[l] = {}), ee.extend(a[l], s[l]))
                  : (a[l] = s[l]));
            }
        }
        return a;
      },
    },
    te =
      ((i = f.createElement("div")),
      {
        touch:
          (J.Modernizr && !0 === J.Modernizr.touch) ||
          !!(
            0 < J.navigator.maxTouchPoints ||
            "ontouchstart" in J ||
            (J.DocumentTouch && f instanceof J.DocumentTouch)
          ),
        pointerEvents: !!(
          J.navigator.pointerEnabled ||
          J.PointerEvent ||
          ("maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints)
        ),
        prefixedPointerEvents: !!J.navigator.msPointerEnabled,
        transition:
          ((a = i.style),
          "transition" in a || "webkitTransition" in a || "MozTransition" in a),
        transforms3d:
          (J.Modernizr && !0 === J.Modernizr.csstransforms3d) ||
          ((e = i.style),
          "webkitPerspective" in e ||
            "MozPerspective" in e ||
            "OPerspective" in e ||
            "MsPerspective" in e ||
            "perspective" in e),
        flexbox: (function () {
          for (
            var e = i.style,
              t =
                "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                  " "
                ),
              a = 0;
            a < t.length;
            a += 1
          )
            if (t[a] in e) return !0;
          return !1;
        })(),
        observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
        passiveListener: (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            J.addEventListener("testPassiveListener", null, t);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in J,
      }),
    I = {
      isIE:
        !!J.navigator.userAgent.match(/Trident/g) ||
        !!J.navigator.userAgent.match(/MSIE/g),
      isEdge: !!J.navigator.userAgent.match(/Edge/g),
      isSafari:
        ((s = J.navigator.userAgent.toLowerCase()),
        0 <= s.indexOf("safari") &&
          s.indexOf("chrome") < 0 &&
          s.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        J.navigator.userAgent
      ),
    },
    n = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    o = { components: { configurable: !0 } };
  (n.prototype.on = function (e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return (
      e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []),
          i.eventsListeners[e][s](t);
      }),
      i
    );
  }),
    (n.prototype.once = function (a, i, e) {
      var s = this;
      if ("function" != typeof i) return s;
      function r() {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy;
      }
      return (r.f7proxy = i), s.on(a, r, e);
    }),
    (n.prototype.off = function (e, i) {
      var s = this;
      return (
        s.eventsListeners &&
          e.split(" ").forEach(function (a) {
            void 0 === i
              ? (s.eventsListeners[a] = [])
              : s.eventsListeners[a] &&
                s.eventsListeners[a].length &&
                s.eventsListeners[a].forEach(function (e, t) {
                  (e === i || (e.f7proxy && e.f7proxy === i)) &&
                    s.eventsListeners[a].splice(t, 1);
                });
          }),
        s
      );
    }),
    (n.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var a,
        i,
        s,
        r = this;
      return (
        r.eventsListeners &&
          ("string" == typeof e[0] || Array.isArray(e[0])
            ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r))
            : ((a = e[0].events), (i = e[0].data), (s = e[0].context || r)),
          (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
              var t = [];
              r.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }),
                t.forEach(function (e) {
                  e.apply(s, i);
                });
            }
          })),
        r
      );
    }),
    (n.prototype.useModulesParams = function (a) {
      var i = this;
      i.modules &&
        Object.keys(i.modules).forEach(function (e) {
          var t = i.modules[e];
          t.params && ee.extend(a, t.params);
        });
    }),
    (n.prototype.useModules = function (i) {
      void 0 === i && (i = {});
      var s = this;
      s.modules &&
        Object.keys(s.modules).forEach(function (e) {
          var a = s.modules[e],
            t = i[e] || {};
          a.instance &&
            Object.keys(a.instance).forEach(function (e) {
              var t = a.instance[e];
              s[e] = "function" == typeof t ? t.bind(s) : t;
            }),
            a.on &&
              s.on &&
              Object.keys(a.on).forEach(function (e) {
                s.on(e, a.on[e]);
              }),
            a.create && a.create.bind(s)(t);
        });
    }),
    (o.components.set = function (e) {
      this.use && this.use(e);
    }),
    (n.installModule = function (t) {
      for (var e = [], a = arguments.length - 1; 0 < a--; )
        e[a] = arguments[a + 1];
      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var s =
        t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
      return (
        (i.prototype.modules[s] = t).proto &&
          Object.keys(t.proto).forEach(function (e) {
            i.prototype[e] = t.proto[e];
          }),
        t.static &&
          Object.keys(t.static).forEach(function (e) {
            i[e] = t.static[e];
          }),
        t.install && t.install.apply(i, e),
        i
      );
    }),
    (n.use = function (e) {
      for (var t = [], a = arguments.length - 1; 0 < a--; )
        t[a] = arguments[a + 1];
      var i = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return i.installModule(e);
          }),
          i)
        : i.installModule.apply(i, [e].concat(t));
    }),
    Object.defineProperties(n, o);
  var d = {
    updateSize: function () {
      var e,
        t,
        a = this,
        i = a.$el;
      (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
        (t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
        (0 === e && a.isHorizontal()) ||
          (0 === t && a.isVertical()) ||
          ((e =
            e -
            parseInt(i.css("padding-left"), 10) -
            parseInt(i.css("padding-right"), 10)),
          (t =
            t -
            parseInt(i.css("padding-top"), 10) -
            parseInt(i.css("padding-bottom"), 10)),
          ee.extend(a, {
            width: e,
            height: t,
            size: a.isHorizontal() ? e : t,
          }));
    },
    updateSlides: function () {
      var e = this,
        t = e.params,
        a = e.$wrapperEl,
        i = e.size,
        s = e.rtlTranslate,
        r = e.wrongRTL,
        n = e.virtual && t.virtual.enabled,
        o = n ? e.virtual.slides.length : e.slides.length,
        l = a.children("." + e.params.slideClass),
        d = n ? e.virtual.slides.length : l.length,
        p = [],
        c = [],
        u = [],
        h = t.slidesOffsetBefore;
      "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var f = e.snapGrid.length,
        m = e.snapGrid.length,
        g = t.spaceBetween,
        b = -h,
        w = 0,
        y = 0;
      if (void 0 !== i) {
        var x, T;
        "string" == typeof g &&
          0 <= g.indexOf("%") &&
          (g = (parseFloat(g.replace("%", "")) / 100) * i),
          (e.virtualSize = -g),
          s
            ? l.css({ marginLeft: "", marginTop: "" })
            : l.css({ marginRight: "", marginBottom: "" }),
          1 < t.slidesPerColumn &&
            ((x =
              Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn
                ? d
                : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
            "auto" !== t.slidesPerView &&
              "row" === t.slidesPerColumnFill &&
              (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (
          var E,
            S = t.slidesPerColumn,
            C = x / S,
            M = Math.floor(d / t.slidesPerColumn),
            z = 0;
          z < d;
          z += 1
        ) {
          T = 0;
          var P = l.eq(z);
          if (1 < t.slidesPerColumn) {
            var k = void 0,
              $ = void 0,
              L = void 0;
            "column" === t.slidesPerColumnFill
              ? ((L = z - ($ = Math.floor(z / S)) * S),
                (M < $ || ($ === M && L === S - 1)) &&
                  S <= (L += 1) &&
                  ((L = 0), ($ += 1)),
                (k = $ + (L * x) / S),
                P.css({
                  "-webkit-box-ordinal-group": k,
                  "-moz-box-ordinal-group": k,
                  "-ms-flex-order": k,
                  "-webkit-order": k,
                  order: k,
                }))
              : ($ = z - (L = Math.floor(z / C)) * C),
              P.css(
                "margin-" + (e.isHorizontal() ? "top" : "left"),
                0 !== L && t.spaceBetween && t.spaceBetween + "px"
              )
                .attr("data-swiper-column", $)
                .attr("data-swiper-row", L);
          }
          if ("none" !== P.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = J.getComputedStyle(P[0], null),
                D = P[0].style.transform,
                O = P[0].style.webkitTransform;
              if (
                (D && (P[0].style.transform = "none"),
                O && (P[0].style.webkitTransform = "none"),
                t.roundLengths)
              )
                T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
              else if (e.isHorizontal()) {
                var A = parseFloat(I.getPropertyValue("width")),
                  H = parseFloat(I.getPropertyValue("padding-left")),
                  N = parseFloat(I.getPropertyValue("padding-right")),
                  G = parseFloat(I.getPropertyValue("margin-left")),
                  B = parseFloat(I.getPropertyValue("margin-right")),
                  X = I.getPropertyValue("box-sizing");
                T = X && "border-box" === X ? A + G + B : A + H + N + G + B;
              } else {
                var Y = parseFloat(I.getPropertyValue("height")),
                  V = parseFloat(I.getPropertyValue("padding-top")),
                  F = parseFloat(I.getPropertyValue("padding-bottom")),
                  R = parseFloat(I.getPropertyValue("margin-top")),
                  q = parseFloat(I.getPropertyValue("margin-bottom")),
                  W = I.getPropertyValue("box-sizing");
                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q;
              }
              D && (P[0].style.transform = D),
                O && (P[0].style.webkitTransform = O),
                t.roundLengths && (T = Math.floor(T));
            } else
              (T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView),
                t.roundLengths && (T = Math.floor(T)),
                l[z] &&
                  (e.isHorizontal()
                    ? (l[z].style.width = T + "px")
                    : (l[z].style.height = T + "px"));
            l[z] && (l[z].swiperSlideSize = T),
              u.push(T),
              t.centeredSlides
                ? ((b = b + T / 2 + w / 2 + g),
                  0 === w && 0 !== z && (b = b - i / 2 - g),
                  0 === z && (b = b - i / 2 - g),
                  Math.abs(b) < 0.001 && (b = 0),
                  t.roundLengths && (b = Math.floor(b)),
                  y % t.slidesPerGroup == 0 && p.push(b),
                  c.push(b))
                : (t.roundLengths && (b = Math.floor(b)),
                  y % t.slidesPerGroup == 0 && p.push(b),
                  c.push(b),
                  (b = b + T + g)),
              (e.virtualSize += T + g),
              (w = T),
              (y += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + v),
          s &&
            r &&
            ("slide" === t.effect || "coverflow" === t.effect) &&
            a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
          (te.flexbox && !t.setWrapperSize) ||
            (e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
          1 < t.slidesPerColumn &&
            ((e.virtualSize = (T + t.spaceBetween) * x),
            (e.virtualSize =
              Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
            e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
            t.centeredSlides))
        ) {
          E = [];
          for (var j = 0; j < p.length; j += 1) {
            var U = p[j];
            t.roundLengths && (U = Math.floor(U)),
              p[j] < e.virtualSize + p[0] && E.push(U);
          }
          p = E;
        }
        if (!t.centeredSlides) {
          E = [];
          for (var K = 0; K < p.length; K += 1) {
            var _ = p[K];
            t.roundLengths && (_ = Math.floor(_)),
              p[K] <= e.virtualSize - i && E.push(_);
          }
          (p = E),
            1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) &&
              p.push(e.virtualSize - i);
        }
        if (
          (0 === p.length && (p = [0]),
          0 !== t.spaceBetween &&
            (e.isHorizontal()
              ? s
                ? l.css({ marginLeft: g + "px" })
                : l.css({ marginRight: g + "px" })
              : l.css({ marginBottom: g + "px" })),
          t.centerInsufficientSlides)
        ) {
          var Z = 0;
          if (
            (u.forEach(function (e) {
              Z += e + (t.spaceBetween ? t.spaceBetween : 0);
            }),
            (Z -= t.spaceBetween) < i)
          ) {
            var Q = (i - Z) / 2;
            p.forEach(function (e, t) {
              p[t] = e - Q;
            }),
              c.forEach(function (e, t) {
                c[t] = e + Q;
              });
          }
        }
        ee.extend(e, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u,
        }),
          d !== o && e.emit("slidesLengthChange"),
          p.length !== f &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          c.length !== m && e.emit("slidesGridLengthChange"),
          (t.watchSlidesProgress || t.watchSlidesVisibility) &&
            e.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        a = this,
        i = [],
        s = 0;
      if (
        ("number" == typeof e
          ? a.setTransition(e)
          : !0 === e && a.setTransition(a.params.speed),
        "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
      )
        for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
          var r = a.activeIndex + t;
          if (r > a.slides.length) break;
          i.push(a.slides.eq(r)[0]);
        }
      else i.push(a.slides.eq(a.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var n = i[t].offsetHeight;
          s = s < n ? n : s;
        }
      s && a.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this,
        a = t.params,
        i = t.slides,
        s = t.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        s && (r = e),
          i.removeClass(a.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l =
              (r +
                (a.centeredSlides ? t.minTranslate() : 0) -
                o.swiperSlideOffset) /
              (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
              p = d + t.slidesSizesGrid[n];
            ((0 <= d && d < t.size) ||
              (0 < p && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(n),
              i.eq(n).addClass(a.slideVisibleClass));
          }
          o.progress = s ? -l : l;
        }
        t.visibleSlides = L(t.visibleSlides);
      }
    },
    updateProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this,
        a = t.params,
        i = t.maxTranslate() - t.minTranslate(),
        s = t.progress,
        r = t.isBeginning,
        n = t.isEnd,
        o = r,
        l = n;
      0 === i
        ? (n = r = !(s = 0))
        : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = 1 <= s)),
        ee.extend(t, { progress: s, isBeginning: r, isEnd: n }),
        (a.watchSlidesProgress || a.watchSlidesVisibility) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !l && t.emit("reachEnd toEdge"),
        ((o && !r) || (l && !n)) && t.emit("fromEdge"),
        t.emit("progress", s);
    },
    updateSlidesClasses: function () {
      var e,
        t = this,
        a = t.slides,
        i = t.params,
        s = t.$wrapperEl,
        r = t.activeIndex,
        n = t.realIndex,
        o = t.virtual && i.virtual.enabled;
      a.removeClass(
        i.slideActiveClass +
          " " +
          i.slideNextClass +
          " " +
          i.slidePrevClass +
          " " +
          i.slideDuplicateActiveClass +
          " " +
          i.slideDuplicateNextClass +
          " " +
          i.slideDuplicatePrevClass
      ),
        (e = o
          ? t.$wrapperEl.find(
              "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
            )
          : a.eq(r)).addClass(i.slideActiveClass),
        i.loop &&
          (e.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    n +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    n +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass));
      var l = e
        .nextAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
      var d = e
        .prevAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slidePrevClass);
      i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass),
          d.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    d.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    d.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
        a = this,
        i = a.rtlTranslate ? a.translate : -a.translate,
        s = a.slidesGrid,
        r = a.snapGrid,
        n = a.params,
        o = a.activeIndex,
        l = a.realIndex,
        d = a.snapIndex,
        p = e;
      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1)
          void 0 !== s[c + 1]
            ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
              ? (p = c)
              : i >= s[c] && i < s[c + 1] && (p = c + 1)
            : i >= s[c] && (p = c);
        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }
      if (
        ((t =
          0 <= r.indexOf(i)
            ? r.indexOf(i)
            : Math.floor(p / n.slidesPerGroup)) >= r.length &&
          (t = r.length - 1),
        p !== o)
      ) {
        var u = parseInt(
          a.slides.eq(p).attr("data-swiper-slide-index") || p,
          10
        );
        ee.extend(a, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: p,
        }),
          a.emit("activeIndexChange"),
          a.emit("snapIndexChange"),
          l !== u && a.emit("realIndexChange"),
          a.emit("slideChange");
      } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this,
        a = t.params,
        i = L(e.target).closest("." + a.slideClass)[0],
        s = !1;
      if (i)
        for (var r = 0; r < t.slides.length; r += 1)
          t.slides[r] === i && (s = !0);
      if (!i || !s)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              L(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = L(i).index()),
        a.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var p = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        a = this.rtlTranslate,
        i = this.translate,
        s = this.$wrapperEl;
      if (t.virtualTranslate) return a ? -i : i;
      var r = ee.getTranslate(s[0], e);
      return a && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var a = this,
        i = a.rtlTranslate,
        s = a.params,
        r = a.$wrapperEl,
        n = a.progress,
        o = 0,
        l = 0;
      a.isHorizontal() ? (o = i ? -e : e) : (l = e),
        s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
        s.virtualTranslate ||
          (te.transforms3d
            ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)")
            : r.transform("translate(" + o + "px, " + l + "px)")),
        (a.previousTranslate = a.translate),
        (a.translate = a.isHorizontal() ? o : l);
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
        a.emit("setTranslate", a.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
  };
  var c = {
    setTransition: function (e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.params,
        r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      var n = t;
      if (
        (n || (n = r < i ? "next" : i < r ? "prev" : "reset"),
        a.emit("transitionStart"),
        e && i !== r)
      ) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");
        a.emit("slideChangeTransitionStart"),
          "next" === n
            ? a.emit("slideNextTransitionStart")
            : a.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.previousIndex;
      (a.animating = !1), a.setTransition(0);
      var r = t;
      if (
        (r || (r = s < i ? "next" : i < s ? "prev" : "reset"),
        a.emit("transitionEnd"),
        e && i !== s)
      ) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");
        a.emit("slideChangeTransitionEnd"),
          "next" === r
            ? a.emit("slideNextTransitionEnd")
            : a.emit("slidePrevTransitionEnd");
      }
    },
  };
  var u = {
    slideTo: function (e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      var s = this,
        r = e;
      r < 0 && (r = 0);
      var n = s.params,
        o = s.snapGrid,
        l = s.slidesGrid,
        d = s.previousIndex,
        p = s.activeIndex,
        c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1),
        (p || n.initialSlide || 0) === (d || 0) &&
          a &&
          s.emit("beforeSlideChangeStart");
      var h,
        v = -o[u];
      if ((s.updateProgress(v), n.normalizeSlideIndex))
        for (var f = 0; f < l.length; f += 1)
          -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
          return !1;
        if (
          !s.allowSlidePrev &&
          v > s.translate &&
          v > s.maxTranslate() &&
          (p || 0) !== r
        )
          return !1;
      }
      return (
        (h = p < r ? "next" : r < p ? "prev" : "reset"),
        (c && -v === s.translate) || (!c && v === s.translate)
          ? (s.updateActiveIndex(r),
            n.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== n.effect && s.setTranslate(v),
            "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)),
            !1)
          : (0 !== t && te.transition
              ? (s.setTransition(t),
                s.setTranslate(v),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a, h),
                s.animating ||
                  ((s.animating = !0),
                  s.onSlideToWrapperTransitionEnd ||
                    (s.onSlideToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        (s.onSlideToWrapperTransitionEnd = null),
                        delete s.onSlideToWrapperTransitionEnd,
                        s.transitionEnd(a, h));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onSlideToWrapperTransitionEnd
                  )))
              : (s.setTransition(0),
                s.setTranslate(v),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a, h),
                s.transitionEnd(a, h)),
            !0)
      );
    },
    slideToLoop: function (e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      var s = e;
      return (
        this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
      );
    },
    slideNext: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating;
      return s.loop
        ? !r &&
            (i.loopFix(),
            (i._clientLeft = i.$wrapperEl[0].clientLeft),
            i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a))
        : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
    },
    slidePrev: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating,
        n = i.snapGrid,
        o = i.slidesGrid,
        l = i.rtlTranslate;
      if (s.loop) {
        if (r) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var p,
        c = d(l ? i.translate : -i.translate),
        u = n.map(function (e) {
          return d(e);
        }),
        h =
          (o.map(function (e) {
            return d(e);
          }),
          n[u.indexOf(c)],
          n[u.indexOf(c) - 1]);
      return (
        void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
        i.slideTo(p, e, t, a)
      );
    },
    slideReset: function (e, t, a) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, a)
      );
    },
    slideToClosest: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.activeIndex,
        r = Math.floor(s / i.params.slidesPerGroup);
      if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate,
          o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
      }
      return i.slideTo(s, e, t, a);
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        a = t.params,
        i = t.$wrapperEl,
        s =
          "auto" === a.slidesPerView
            ? t.slidesPerViewDynamic()
            : a.slidesPerView,
        r = t.clickedIndex;
      if (a.loop) {
        if (t.animating) return;
        (e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
          a.centeredSlides
            ? r < t.loopedSlides - s / 2 ||
              r > t.slides.length - t.loopedSlides + s / 2
              ? (t.loopFix(),
                (r = i
                  .children(
                    "." +
                      a.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      a.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                ee.nextTick(function () {
                  t.slideTo(r);
                }))
              : t.slideTo(r)
            : r > t.slides.length - s
            ? (t.loopFix(),
              (r = i
                .children(
                  "." +
                    a.slideClass +
                    '[data-swiper-slide-index="' +
                    e +
                    '"]:not(.' +
                    a.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index()),
              ee.nextTick(function () {
                t.slideTo(r);
              }))
            : t.slideTo(r);
      } else t.slideTo(r);
    },
  };
  var h = {
    loopCreate: function () {
      var i = this,
        e = i.params,
        t = i.$wrapperEl;
      t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
      var s = t.children("." + e.slideClass);
      if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - (s.length % e.slidesPerGroup);
        if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(
              e.slideClass + " " + e.slideBlankClass
            );
            t.append(n);
          }
          s = t.children("." + e.slideClass);
        }
      }
      "auto" !== e.slidesPerView ||
        e.loopedSlides ||
        (e.loopedSlides = s.length),
        (i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
        (i.loopedSlides += e.loopAdditionalSlides),
        i.loopedSlides > s.length && (i.loopedSlides = s.length);
      var o = [],
        l = [];
      s.each(function (e, t) {
        var a = L(t);
        e < i.loopedSlides && l.push(t),
          e < s.length && e >= s.length - i.loopedSlides && o.push(t),
          a.attr("data-swiper-slide-index", e);
      });
      for (var d = 0; d < l.length; d += 1)
        t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      for (var p = o.length - 1; 0 <= p; p -= 1)
        t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
    },
    loopFix: function () {
      var e,
        t = this,
        a = t.params,
        i = t.activeIndex,
        s = t.slides,
        r = t.loopedSlides,
        n = t.allowSlidePrev,
        o = t.allowSlideNext,
        l = t.snapGrid,
        d = t.rtlTranslate;
      (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
      var p = -l[i] - t.getTranslate();
      i < r
        ? ((e = s.length - 3 * r + i),
          (e += r),
          t.slideTo(e, 0, !1, !0) &&
            0 !== p &&
            t.setTranslate((d ? -t.translate : t.translate) - p))
        : (("auto" === a.slidesPerView && 2 * r <= i) || i >= s.length - r) &&
          ((e = -s.length + i + r),
          (e += r),
          t.slideTo(e, 0, !1, !0) &&
            0 !== p &&
            t.setTranslate((d ? -t.translate : t.translate) - p));
      (t.allowSlidePrev = n), (t.allowSlideNext = o);
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
        t = this.params,
        a = this.slides;
      e
        .children(
          "." +
            t.slideClass +
            "." +
            t.slideDuplicateClass +
            ",." +
            t.slideClass +
            "." +
            t.slideBlankClass
        )
        .remove(),
        a.removeAttr("data-swiper-slide-index");
    },
  };
  var v = {
    setGrabCursor: function (e) {
      if (
        !(
          te.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked)
        )
      ) {
        var t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      }
    },
    unsetGrabCursor: function () {
      te.touch ||
        (this.params.watchOverflow && this.isLocked) ||
        (this.el.style.cursor = "");
    },
  };
  var m = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
          for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
        else a.append(e);
        i.loop && t.loopCreate(), (i.observer && te.observer) || t.update();
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
          r = s + e.length;
        } else i.prepend(e);
        a.loop && t.loopCreate(),
          (a.observer && te.observer) || t.update(),
          t.slideTo(r, 0, !1);
      },
      addSlide: function (e, t) {
        var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;
        s.loop &&
          ((r -= a.loopedSlides),
          a.loopDestroy(),
          (a.slides = i.children("." + s.slideClass)));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);
        else if (n <= e) a.appendSlide(t);
        else {
          for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), l.unshift(p);
          }
          if ("object" == typeof t && "length" in t) {
            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
            o = e < r ? r + t.length : r;
          } else i.append(t);
          for (var u = 0; u < l.length; u += 1) i.append(l[u]);
          s.loop && a.loopCreate(),
            (s.observer && te.observer) || a.update(),
            s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop &&
          ((s -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = i.children("." + a.slideClass)));
        var r,
          n = s;
        if ("object" == typeof e && "length" in e) {
          for (var o = 0; o < e.length; o += 1)
            (r = e[o]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1);
          n = Math.max(n, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1),
            (n = Math.max(n, 0));
        a.loop && t.loopCreate(),
          (a.observer && te.observer) || t.update(),
          a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      },
    },
    g = (function () {
      var e = J.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: J.cordova || J.phonegap,
          phonegap: J.cordova || J.phonegap,
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
        i &&
          !a &&
          ((t.os = "android"),
          (t.osVersion = i[2]),
          (t.android = !0),
          (t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome"))),
        (s || n || r) && ((t.os = "ios"), (t.ios = !0)),
        n && !r && ((t.osVersion = n[2].replace(/_/g, ".")), (t.iphone = !0)),
        s && ((t.osVersion = s[2].replace(/_/g, ".")), (t.ipad = !0)),
        r &&
          ((t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null),
          (t.iphone = !0)),
        t.ios &&
          t.osVersion &&
          0 <= e.indexOf("Version/") &&
          "10" === t.osVersion.split(".")[0] &&
          (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        (t.desktop = !(t.os || t.android || t.webView)),
        (t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
        t.os && "ios" === t.os)
      ) {
        var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');
        t.minimalUi =
          !t.webView &&
          (r || n) &&
          (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) &&
          l &&
          0 <= l.getAttribute("content").indexOf("minimal-ui");
      }
      return (t.pixelRatio = J.devicePixelRatio || 1), t;
    })();
  function b() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      if (
        ((e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        t.freeMode)
      ) {
        var n = Math.min(
          Math.max(e.translate, e.maxTranslate()),
          e.minTranslate()
        );
        e.setTranslate(n),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          t.autoHeight && e.updateAutoHeight();
      } else
        e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0);
      (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  var w = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    y = {
      update: d,
      translate: p,
      transition: c,
      slide: u,
      loop: h,
      grabCursor: v,
      manipulation: m,
      events: {
        attachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;
          (e.onTouchStart = function (e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches;
            if (!t.animating || !i.preventInteractionOnTransition) {
              var r = e;
              if (
                (r.originalEvent && (r = r.originalEvent),
                (a.isTouchEvent = "touchstart" === r.type),
                (a.isTouchEvent || !("which" in r) || 3 !== r.which) &&
                  !(
                    (!a.isTouchEvent && "button" in r && 0 < r.button) ||
                    (a.isTouched && a.isMoved)
                  ))
              )
                if (
                  i.noSwiping &&
                  L(r.target).closest(
                    i.noSwipingSelector
                      ? i.noSwipingSelector
                      : "." + i.noSwipingClass
                  )[0]
                )
                  t.allowClick = !0;
                else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                  (s.currentX =
                    "touchstart" === r.type
                      ? r.targetTouches[0].pageX
                      : r.pageX),
                    (s.currentY =
                      "touchstart" === r.type
                        ? r.targetTouches[0].pageY
                        : r.pageY);
                  var n = s.currentX,
                    o = s.currentY,
                    l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                    d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                  if (!l || !(n <= d || n >= J.screen.width - d)) {
                    if (
                      (ee.extend(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                      }),
                      (s.startX = n),
                      (s.startY = o),
                      (a.touchStartTime = ee.now()),
                      (t.allowClick = !0),
                      t.updateSize(),
                      (t.swipeDirection = void 0),
                      0 < i.threshold && (a.allowThresholdMove = !1),
                      "touchstart" !== r.type)
                    ) {
                      var p = !0;
                      L(r.target).is(a.formElements) && (p = !1),
                        f.activeElement &&
                          L(f.activeElement).is(a.formElements) &&
                          f.activeElement !== r.target &&
                          f.activeElement.blur();
                      var c =
                        p && t.allowTouchMove && i.touchStartPreventDefault;
                      (i.touchStartForcePreventDefault || c) &&
                        r.preventDefault();
                    }
                    t.emit("touchStart", r);
                  }
                }
            }
          }.bind(e)),
            (e.onTouchMove = function (e) {
              var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtlTranslate,
                n = e;
              if ((n.originalEvent && (n = n.originalEvent), a.isTouched)) {
                if (!a.isTouchEvent || "mousemove" !== n.type) {
                  var o =
                      "touchmove" === n.type
                        ? n.targetTouches[0].pageX
                        : n.pageX,
                    l =
                      "touchmove" === n.type
                        ? n.targetTouches[0].pageY
                        : n.pageY;
                  if (n.preventedByNestedSwiper)
                    return (s.startX = o), void (s.startY = l);
                  if (!t.allowTouchMove)
                    return (
                      (t.allowClick = !1),
                      void (
                        a.isTouched &&
                        (ee.extend(s, {
                          startX: o,
                          startY: l,
                          currentX: o,
                          currentY: l,
                        }),
                        (a.touchStartTime = ee.now()))
                      )
                    );
                  if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                    if (t.isVertical()) {
                      if (
                        (l < s.startY && t.translate <= t.maxTranslate()) ||
                        (l > s.startY && t.translate >= t.minTranslate())
                      )
                        return (a.isTouched = !1), void (a.isMoved = !1);
                    } else if (
                      (o < s.startX && t.translate <= t.maxTranslate()) ||
                      (o > s.startX && t.translate >= t.minTranslate())
                    )
                      return;
                  if (
                    a.isTouchEvent &&
                    f.activeElement &&
                    n.target === f.activeElement &&
                    L(n.target).is(a.formElements)
                  )
                    return (a.isMoved = !0), void (t.allowClick = !1);
                  if (
                    (a.allowTouchCallbacks && t.emit("touchMove", n),
                    !(n.targetTouches && 1 < n.targetTouches.length))
                  ) {
                    (s.currentX = o), (s.currentY = l);
                    var d,
                      p = s.currentX - s.startX,
                      c = s.currentY - s.startY;
                    if (
                      !(
                        t.params.threshold &&
                        Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) <
                          t.params.threshold
                      )
                    )
                      if (
                        (void 0 === a.isScrolling &&
                          ((t.isHorizontal() && s.currentY === s.startY) ||
                          (t.isVertical() && s.currentX === s.startX)
                            ? (a.isScrolling = !1)
                            : 25 <= p * p + c * c &&
                              ((d =
                                (180 * Math.atan2(Math.abs(c), Math.abs(p))) /
                                Math.PI),
                              (a.isScrolling = t.isHorizontal()
                                ? d > i.touchAngle
                                : 90 - d > i.touchAngle))),
                        a.isScrolling && t.emit("touchMoveOpposite", n),
                        void 0 === a.startMoving &&
                          ((s.currentX === s.startX &&
                            s.currentY === s.startY) ||
                            (a.startMoving = !0)),
                        a.isScrolling)
                      )
                        a.isTouched = !1;
                      else if (a.startMoving) {
                        (t.allowClick = !1),
                          n.preventDefault(),
                          i.touchMoveStopPropagation &&
                            !i.nested &&
                            n.stopPropagation(),
                          a.isMoved ||
                            (i.loop && t.loopFix(),
                            (a.startTranslate = t.getTranslate()),
                            t.setTransition(0),
                            t.animating &&
                              t.$wrapperEl.trigger(
                                "webkitTransitionEnd transitionend"
                              ),
                            (a.allowMomentumBounce = !1),
                            !i.grabCursor ||
                              (!0 !== t.allowSlideNext &&
                                !0 !== t.allowSlidePrev) ||
                              t.setGrabCursor(!0),
                            t.emit("sliderFirstMove", n)),
                          t.emit("sliderMove", n),
                          (a.isMoved = !0);
                        var u = t.isHorizontal() ? p : c;
                        (s.diff = u),
                          (u *= i.touchRatio),
                          r && (u = -u),
                          (t.swipeDirection = 0 < u ? "prev" : "next"),
                          (a.currentTranslate = u + a.startTranslate);
                        var h = !0,
                          v = i.resistanceRatio;
                        if (
                          (i.touchReleaseOnEdges && (v = 0),
                          0 < u && a.currentTranslate > t.minTranslate()
                            ? ((h = !1),
                              i.resistance &&
                                (a.currentTranslate =
                                  t.minTranslate() -
                                  1 +
                                  Math.pow(
                                    -t.minTranslate() + a.startTranslate + u,
                                    v
                                  )))
                            : u < 0 &&
                              a.currentTranslate < t.maxTranslate() &&
                              ((h = !1),
                              i.resistance &&
                                (a.currentTranslate =
                                  t.maxTranslate() +
                                  1 -
                                  Math.pow(
                                    t.maxTranslate() - a.startTranslate - u,
                                    v
                                  ))),
                          h && (n.preventedByNestedSwiper = !0),
                          !t.allowSlideNext &&
                            "next" === t.swipeDirection &&
                            a.currentTranslate < a.startTranslate &&
                            (a.currentTranslate = a.startTranslate),
                          !t.allowSlidePrev &&
                            "prev" === t.swipeDirection &&
                            a.currentTranslate > a.startTranslate &&
                            (a.currentTranslate = a.startTranslate),
                          0 < i.threshold)
                        ) {
                          if (
                            !(Math.abs(u) > i.threshold || a.allowThresholdMove)
                          )
                            return void (a.currentTranslate = a.startTranslate);
                          if (!a.allowThresholdMove)
                            return (
                              (a.allowThresholdMove = !0),
                              (s.startX = s.currentX),
                              (s.startY = s.currentY),
                              (a.currentTranslate = a.startTranslate),
                              void (s.diff = t.isHorizontal()
                                ? s.currentX - s.startX
                                : s.currentY - s.startY)
                            );
                        }
                        i.followFinger &&
                          ((i.freeMode ||
                            i.watchSlidesProgress ||
                            i.watchSlidesVisibility) &&
                            (t.updateActiveIndex(), t.updateSlidesClasses()),
                          i.freeMode &&
                            (0 === a.velocities.length &&
                              a.velocities.push({
                                position:
                                  s[t.isHorizontal() ? "startX" : "startY"],
                                time: a.touchStartTime,
                              }),
                            a.velocities.push({
                              position:
                                s[t.isHorizontal() ? "currentX" : "currentY"],
                              time: ee.now(),
                            })),
                          t.updateProgress(a.currentTranslate),
                          t.setTranslate(a.currentTranslate));
                      }
                  }
                }
              } else
                a.startMoving &&
                  a.isScrolling &&
                  t.emit("touchMoveOpposite", n);
            }.bind(e)),
            (e.onTouchEnd = function (e) {
              var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtlTranslate,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                d = e;
              if (
                (d.originalEvent && (d = d.originalEvent),
                a.allowTouchCallbacks && t.emit("touchEnd", d),
                (a.allowTouchCallbacks = !1),
                !a.isTouched)
              )
                return (
                  a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                  (a.isMoved = !1),
                  void (a.startMoving = !1)
                );
              i.grabCursor &&
                a.isMoved &&
                a.isTouched &&
                (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                t.setGrabCursor(!1);
              var p,
                c = ee.now(),
                u = c - a.touchStartTime;
              if (
                (t.allowClick &&
                  (t.updateClickedSlide(d),
                  t.emit("tap", d),
                  u < 300 &&
                    300 < c - a.lastClickTime &&
                    (a.clickTimeout && clearTimeout(a.clickTimeout),
                    (a.clickTimeout = ee.nextTick(function () {
                      t && !t.destroyed && t.emit("click", d);
                    }, 300))),
                  u < 300 &&
                    c - a.lastClickTime < 300 &&
                    (a.clickTimeout && clearTimeout(a.clickTimeout),
                    t.emit("doubleTap", d))),
                (a.lastClickTime = ee.now()),
                ee.nextTick(function () {
                  t.destroyed || (t.allowClick = !0);
                }),
                !a.isTouched ||
                  !a.isMoved ||
                  !t.swipeDirection ||
                  0 === s.diff ||
                  a.currentTranslate === a.startTranslate)
              )
                return (
                  (a.isTouched = !1),
                  (a.isMoved = !1),
                  void (a.startMoving = !1)
                );
              if (
                ((a.isTouched = !1),
                (a.isMoved = !1),
                (a.startMoving = !1),
                (p = i.followFinger
                  ? r
                    ? t.translate
                    : -t.translate
                  : -a.currentTranslate),
                i.freeMode)
              ) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                  return void (t.slides.length < l.length
                    ? t.slideTo(l.length - 1)
                    : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                  if (1 < a.velocities.length) {
                    var h = a.velocities.pop(),
                      v = a.velocities.pop(),
                      f = h.position - v.position,
                      m = h.time - v.time;
                    (t.velocity = f / m),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                        (t.velocity = 0),
                      (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= i.freeModeMomentumVelocityRatio),
                    (a.velocities.length = 0);
                  var g = 1e3 * i.freeModeMomentumRatio,
                    b = t.velocity * g,
                    w = t.translate + b;
                  r && (w = -w);
                  var y,
                    x,
                    T = !1,
                    E =
                      20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                  if (w < t.maxTranslate())
                    i.freeModeMomentumBounce
                      ? (w + t.maxTranslate() < -E &&
                          (w = t.maxTranslate() - E),
                        (y = t.maxTranslate()),
                        (T = !0),
                        (a.allowMomentumBounce = !0))
                      : (w = t.maxTranslate()),
                      i.loop && i.centeredSlides && (x = !0);
                  else if (w > t.minTranslate())
                    i.freeModeMomentumBounce
                      ? (w - t.minTranslate() > E && (w = t.minTranslate() + E),
                        (y = t.minTranslate()),
                        (T = !0),
                        (a.allowMomentumBounce = !0))
                      : (w = t.minTranslate()),
                      i.loop && i.centeredSlides && (x = !0);
                  else if (i.freeModeSticky) {
                    for (var S, C = 0; C < l.length; C += 1)
                      if (l[C] > -w) {
                        S = C;
                        break;
                      }
                    w = -(w =
                      Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) ||
                      "next" === t.swipeDirection
                        ? l[S]
                        : l[S - 1]);
                  }
                  if (
                    (x &&
                      t.once("transitionEnd", function () {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  )
                    g = r
                      ? Math.abs((-w - t.translate) / t.velocity)
                      : Math.abs((w - t.translate) / t.velocity);
                  else if (i.freeModeSticky) return void t.slideToClosest();
                  i.freeModeMomentumBounce && T
                    ? (t.updateProgress(y),
                      t.setTransition(g),
                      t.setTranslate(w),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      n.transitionEnd(function () {
                        t &&
                          !t.destroyed &&
                          a.allowMomentumBounce &&
                          (t.emit("momentumBounce"),
                          t.setTransition(i.speed),
                          t.setTranslate(y),
                          n.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          }));
                      }))
                    : t.velocity
                    ? (t.updateProgress(w),
                      t.setTransition(g),
                      t.setTranslate(w),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        n.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(w),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else if (i.freeModeSticky) return void t.slideToClosest();
                (!i.freeModeMomentum || u >= i.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              } else {
                for (
                  var M = 0, z = t.slidesSizesGrid[0], P = 0;
                  P < o.length;
                  P += i.slidesPerGroup
                )
                  void 0 !== o[P + i.slidesPerGroup]
                    ? p >= o[P] &&
                      p < o[P + i.slidesPerGroup] &&
                      (z = o[(M = P) + i.slidesPerGroup] - o[P])
                    : p >= o[P] &&
                      ((M = P), (z = o[o.length - 1] - o[o.length - 2]));
                var k = (p - o[M]) / z;
                if (u > i.longSwipesMs) {
                  if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection &&
                    (k >= i.longSwipesRatio
                      ? t.slideTo(M + i.slidesPerGroup)
                      : t.slideTo(M)),
                    "prev" === t.swipeDirection &&
                      (k > 1 - i.longSwipesRatio
                        ? t.slideTo(M + i.slidesPerGroup)
                        : t.slideTo(M));
                } else {
                  if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection &&
                    t.slideTo(M + i.slidesPerGroup),
                    "prev" === t.swipeDirection && t.slideTo(M);
                }
              }
            }.bind(e)),
            (e.onClick = function (e) {
              this.allowClick ||
                (this.params.preventClicks && e.preventDefault(),
                this.params.preventClicksPropagation &&
                  this.animating &&
                  (e.stopPropagation(), e.stopImmediatePropagation()));
            }.bind(e));
          var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (te.touch || (!te.pointerEvents && !te.prefixedPointerEvents)) {
            if (te.touch) {
              var o = !(
                "touchstart" !== a.start ||
                !te.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              r.addEventListener(a.start, e.onTouchStart, o),
                r.addEventListener(
                  a.move,
                  e.onTouchMove,
                  te.passiveListener ? { passive: !1, capture: n } : n
                ),
                r.addEventListener(a.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !g.ios && !g.android) ||
              (t.simulateTouch && !te.touch && g.ios)) &&
              (r.addEventListener("mousedown", e.onTouchStart, !1),
              f.addEventListener("mousemove", e.onTouchMove, n),
              f.addEventListener("mouseup", e.onTouchEnd, !1));
          } else
            r.addEventListener(a.start, e.onTouchStart, !1),
              f.addEventListener(a.move, e.onTouchMove, n),
              f.addEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) &&
            r.addEventListener("click", e.onClick, !0),
            e.on(
              g.ios || g.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              b,
              !0
            );
        },
        detachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (te.touch || (!te.pointerEvents && !te.prefixedPointerEvents)) {
            if (te.touch) {
              var o = !(
                "onTouchStart" !== a.start ||
                !te.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              r.removeEventListener(a.start, e.onTouchStart, o),
                r.removeEventListener(a.move, e.onTouchMove, n),
                r.removeEventListener(a.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !g.ios && !g.android) ||
              (t.simulateTouch && !te.touch && g.ios)) &&
              (r.removeEventListener("mousedown", e.onTouchStart, !1),
              f.removeEventListener("mousemove", e.onTouchMove, n),
              f.removeEventListener("mouseup", e.onTouchEnd, !1));
          } else
            r.removeEventListener(a.start, e.onTouchStart, !1),
              f.removeEventListener(a.move, e.onTouchMove, n),
              f.removeEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) &&
            r.removeEventListener("click", e.onClick, !0),
            e.off(
              g.ios || g.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              b
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides;
          void 0 === i && (i = 0);
          var s = e.params,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var n = e.getBreakpoint(r);
            if (n && e.currentBreakpoint !== n) {
              var o = n in r ? r[n] : void 0;
              o &&
                ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(
                  function (e) {
                    var t = o[e];
                    void 0 !== t &&
                      (o[e] =
                        "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : "auto");
                  }
                );
              var l = o || e.originalParams,
                d = l.direction && l.direction !== s.direction,
                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
              d && a && e.changeDirection(),
                ee.extend(e.params, l),
                ee.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = n),
                p &&
                  a &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", l);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              a = [];
            Object.keys(e).forEach(function (e) {
              a.push(e);
            }),
              a.sort(function (e, t) {
                return parseInt(e, 10) - parseInt(t, 10);
              });
            for (var i = 0; i < a.length; i += 1) {
              var s = a[i];
              this.params.breakpointsInverse
                ? s <= J.innerWidth && (t = s)
                : s >= J.innerWidth && !t && (t = s);
            }
            return t || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.isLocked;
          (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var t = this.classNames,
            a = this.params,
            e = this.rtl,
            i = this.$el,
            s = [];
          s.push("initialized"),
            s.push(a.direction),
            a.freeMode && s.push("free-mode"),
            te.flexbox || s.push("no-flexbox"),
            a.autoHeight && s.push("autoheight"),
            e && s.push("rtl"),
            1 < a.slidesPerColumn && s.push("multirow"),
            g.android && s.push("android"),
            g.ios && s.push("ios"),
            (I.isIE || I.isEdge) &&
              (te.pointerEvents || te.prefixedPointerEvents) &&
              s.push("wp8-" + a.direction),
            s.forEach(function (e) {
              t.push(a.containerModifierClass + e);
            }),
            i.addClass(t.join(" "));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        },
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n;
          function o() {
            r && r();
          }
          e.complete && s
            ? o()
            : t
            ? (((n = new J.Image()).onload = o),
              (n.onerror = o),
              i && (n.sizes = i),
              a && (n.srcset = a),
              t && (n.src = t))
            : o();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    x = {},
    T = (function (u) {
      function h() {
        for (var e, t, s, a = [], i = arguments.length; i--; )
          a[i] = arguments[i];
        1 === a.length && a[0].constructor && a[0].constructor === Object
          ? (s = a[0])
          : ((t = (e = a)[0]), (s = e[1])),
          s || (s = {}),
          (s = ee.extend({}, s)),
          t && !s.el && (s.el = t),
          u.call(this, s),
          Object.keys(y).forEach(function (t) {
            Object.keys(y[t]).forEach(function (e) {
              h.prototype[e] || (h.prototype[e] = y[t][e]);
            });
          });
        var r = this;
        void 0 === r.modules && (r.modules = {}),
          Object.keys(r.modules).forEach(function (e) {
            var t = r.modules[e];
            if (t.params) {
              var a = Object.keys(t.params)[0],
                i = t.params[a];
              if ("object" != typeof i || null === i) return;
              if (!(a in s && "enabled" in i)) return;
              !0 === s[a] && (s[a] = { enabled: !0 }),
                "object" != typeof s[a] ||
                  "enabled" in s[a] ||
                  (s[a].enabled = !0),
                s[a] || (s[a] = { enabled: !1 });
            }
          });
        var n = ee.extend({}, w);
        r.useModulesParams(n),
          (r.params = ee.extend({}, n, x, s)),
          (r.originalParams = ee.extend({}, r.params)),
          (r.passedParams = ee.extend({}, s));
        var o = (r.$ = L)(r.params.el);
        if ((t = o[0])) {
          if (1 < o.length) {
            var l = [];
            return (
              o.each(function (e, t) {
                var a = ee.extend({}, s, { el: t });
                l.push(new h(a));
              }),
              l
            );
          }
          (t.swiper = r), o.data("swiper", r);
          var d,
            p,
            c = o.children("." + r.params.wrapperClass);
          return (
            ee.extend(r, {
              $el: o,
              el: t,
              $wrapperEl: c,
              wrapperEl: c[0],
              classNames: [],
              slides: L(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === r.params.direction;
              },
              isVertical: function () {
                return "vertical" === r.params.direction;
              },
              rtl:
                "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
              rtlTranslate:
                "horizontal" === r.params.direction &&
                ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
              wrongRTL: "-webkit-box" === c.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents:
                ((d = ["touchstart", "touchmove", "touchend"]),
                (p = ["mousedown", "mousemove", "mouseup"]),
                te.pointerEvents
                  ? (p = ["pointerdown", "pointermove", "pointerup"])
                  : te.prefixedPointerEvents &&
                    (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                (r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }),
                (r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }),
                te.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: ee.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            r.useModules(),
            r.params.init && r.init(),
            r
          );
        }
      }
      u && (h.__proto__ = u);
      var e = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (((h.prototype = Object.create(u && u.prototype)).constructor =
          h).prototype.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var o, l = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !o &&
                ((n += 1), s < (l += a[d].swiperSlideSize) && (o = !0));
            for (var p = r - 1; 0 <= p; p -= 1)
              a[p] &&
                !o &&
                ((n += 1), s < (l += a[p].swiperSlideSize) && (o = !0));
          } else
            for (var c = r + 1; c < a.length; c += 1)
              i[c] - i[r] < s && (n += 1);
          return n;
        }),
        (h.prototype.update = function () {
          var a = this;
          if (a && !a.destroyed) {
            var e = a.snapGrid,
              t = a.params;
            t.breakpoints && a.setBreakpoint(),
              a.updateSize(),
              a.updateSlides(),
              a.updateProgress(),
              a.updateSlidesClasses(),
              a.params.freeMode
                ? (i(), a.params.autoHeight && a.updateAutoHeight())
                : (("auto" === a.params.slidesPerView ||
                    1 < a.params.slidesPerView) &&
                  a.isEnd &&
                  !a.params.centeredSlides
                    ? a.slideTo(a.slides.length - 1, 0, !1, !0)
                    : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
              t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
              a.emit("update");
          }
          function i() {
            var e = a.rtlTranslate ? -1 * a.translate : a.translate,
              t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
            a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
          }
        }),
        (h.prototype.changeDirection = function (a, e) {
          void 0 === e && (e = !0);
          var t = this,
            i = t.params.direction;
          return (
            a || (a = "horizontal" === i ? "vertical" : "horizontal"),
            a === i ||
              ("horizontal" !== a && "vertical" !== a) ||
              ("vertical" === i &&
                (t.$el
                  .removeClass(
                    t.params.containerModifierClass + "vertical wp8-vertical"
                  )
                  .addClass("" + t.params.containerModifierClass + a),
                (I.isIE || I.isEdge) &&
                  (te.pointerEvents || te.prefixedPointerEvents) &&
                  t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)),
              "horizontal" === i &&
                (t.$el
                  .removeClass(
                    t.params.containerModifierClass +
                      "horizontal wp8-horizontal"
                  )
                  .addClass("" + t.params.containerModifierClass + a),
                (I.isIE || I.isEdge) &&
                  (te.pointerEvents || te.prefixedPointerEvents) &&
                  t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)),
              (t.params.direction = a),
              t.slides.each(function (e, t) {
                "vertical" === a ? (t.style.width = "") : (t.style.height = "");
              }),
              t.emit("changeDirection"),
              e && t.update()),
            t
          );
        }),
        (h.prototype.init = function () {
          var e = this;
          e.initialized ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"));
        }),
        (h.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a = this,
            i = a.params,
            s = a.$el,
            r = a.$wrapperEl,
            n = a.slides;
          return (
            void 0 === a.params ||
              a.destroyed ||
              (a.emit("beforeDestroy"),
              (a.initialized = !1),
              a.detachEvents(),
              i.loop && a.loopDestroy(),
              t &&
                (a.removeClasses(),
                s.removeAttr("style"),
                r.removeAttr("style"),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")
                    .removeAttr("data-swiper-column")
                    .removeAttr("data-swiper-row")),
              a.emit("destroy"),
              Object.keys(a.eventsListeners).forEach(function (e) {
                a.off(e);
              }),
              !1 !== e &&
                ((a.$el[0].swiper = null),
                a.$el.data("swiper", null),
                ee.deleteProps(a)),
              (a.destroyed = !0)),
            null
          );
        }),
        (h.extendDefaults = function (e) {
          ee.extend(x, e);
        }),
        (e.extendedDefaults.get = function () {
          return x;
        }),
        (e.defaults.get = function () {
          return w;
        }),
        (e.Class.get = function () {
          return u;
        }),
        (e.$.get = function () {
          return L;
        }),
        Object.defineProperties(h, e),
        h
      );
    })(n),
    E = { name: "device", proto: { device: g }, static: { device: g } },
    S = { name: "support", proto: { support: te }, static: { support: te } },
    C = { name: "browser", proto: { browser: I }, static: { browser: I } },
    M = {
      name: "resize",
      create: function () {
        var e = this;
        ee.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          J.addEventListener("resize", this.resize.resizeHandler),
            J.addEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          J.removeEventListener("resize", this.resize.resizeHandler),
            J.removeEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    z = {
      func: J.MutationObserver || J.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new z.func(function (e) {
            if (1 !== e.length) {
              var t = function () {
                a.emit("observerUpdate", e[0]);
              };
              J.requestAnimationFrame
                ? J.requestAnimationFrame(t)
                : J.setTimeout(t, 0);
            } else a.emit("observerUpdate", e[0]);
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          a.observer.observers.push(i);
      },
      init: function () {
        var e = this;
        if (te.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    P = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        ee.extend(this, {
          observer: {
            init: z.init.bind(this),
            attach: z.attach.bind(this),
            destroy: z.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    k = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          w = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l))
            : ((g = i + (s - 1) + o), (b = s + l));
        var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
        function E() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (ee.extend(t.virtual, {
            from: y,
            to: x,
            offset: T,
            slidesGrid: t.slidesGrid,
          }),
          p === y && c === x && !e)
        )
          return (
            t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: T,
              from: y,
              to: x,
              slides: (function () {
                for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void E()
          );
        var S = [],
          C = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var M = p; M <= c; M += 1)
            (M < y || x < M) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    M +
                    '"]'
                )
                .remove();
        for (var z = 0; z < u.length; z += 1)
          y <= z &&
            z <= x &&
            (void 0 === c || e
              ? C.push(z)
              : (c < z && C.push(z), z < p && S.push(z)));
        C.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }),
          S.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(u[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
          E();
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide
          ? L(i.renderSlide.call(a, e, t))
          : L(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (a.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r]);
          (i = a + e.length), (s = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            o = {};
          Object.keys(n).forEach(function (e) {
            o[parseInt(e, 10) + s] = n[e];
          }),
            (t.virtual.cache = o);
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function (e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; 0 <= i; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                (a = Math.max(a, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
              (a = Math.max(a, 0));
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function () {
        var e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    },
    $ = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          virtual: {
            update: k.update.bind(e),
            appendSlide: k.appendSlide.bind(e),
            prependSlide: k.prependSlide.bind(e),
            removeSlide: k.removeSlide.bind(e),
            removeAllSlides: k.removeAllSlides.bind(e),
            renderSlide: k.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            ee.extend(e.params, t),
              ee.extend(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    D = {
      handle: function (e) {
        var t = this,
          a = t.rtlTranslate,
          i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && 39 === s) || (t.isVertical() && 40 === s))
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && 37 === s) || (t.isVertical() && 38 === s))
        )
          return !1;
        if (
          !(
            i.shiftKey ||
            i.altKey ||
            i.ctrlKey ||
            i.metaKey ||
            (f.activeElement &&
              f.activeElement.nodeName &&
              ("input" === f.activeElement.nodeName.toLowerCase() ||
                "textarea" === f.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (37 === s || 39 === s || 38 === s || 40 === s)
          ) {
            var r = !1;
            if (
              0 < t.$el.parents("." + t.params.slideClass).length &&
              0 === t.$el.parents("." + t.params.slideActiveClass).length
            )
              return;
            var n = J.innerWidth,
              o = J.innerHeight,
              l = t.$el.offset();
            a && (l.left -= t.$el[0].scrollLeft);
            for (
              var d = [
                  [l.left, l.top],
                  [l.left + t.width, l.top],
                  [l.left, l.top + t.height],
                  [l.left + t.width, l.top + t.height],
                ],
                p = 0;
              p < d.length;
              p += 1
            ) {
              var c = d[p];
              0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
            }
            if (!r) return;
          }
          t.isHorizontal()
            ? ((37 !== s && 39 !== s) ||
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              ((39 === s && !a) || (37 === s && a)) && t.slideNext(),
              ((37 === s && !a) || (39 === s && a)) && t.slidePrev())
            : ((38 !== s && 40 !== s) ||
                (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              40 === s && t.slideNext(),
              38 === s && t.slidePrev()),
            t.emit("keyPress", s);
        }
      },
      enable: function () {
        this.keyboard.enabled ||
          (L(f).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled &&
          (L(f).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    O = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        ee.extend(this, {
          keyboard: {
            enabled: !1,
            enable: D.enable.bind(this),
            disable: D.disable.bind(this),
            handle: D.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    };
  var A = {
      lastScrollTime: ee.now(),
      event:
        -1 < J.navigator.userAgent.indexOf("firefox")
          ? "DOMMouseScroll"
          : (function () {
              var e = "onwheel",
                t = e in f;
              if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"), (t = "function" == typeof a[e]);
              }
              return (
                !t &&
                  f.implementation &&
                  f.implementation.hasFeature &&
                  !0 !== f.implementation.hasFeature("", "") &&
                  (t = f.implementation.hasFeature("Events.wheel", "3.0")),
                t
              );
            })()
          ? "wheel"
          : "mousewheel",
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          "detail" in e && (a = e.detail),
          "wheelDelta" in e && (a = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        if (!a.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var s = 0,
          r = a.rtlTranslate ? -1 : 1,
          n = A.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
            s = n.pixelX * r;
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
            s = n.pixelY;
          }
        else
          s =
            Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
        if (0 === s) return !0;
        if ((i.invert && (s = -s), a.params.freeMode)) {
          a.params.loop && a.loopFix();
          var o = a.getTranslate() + s * i.sensitivity,
            l = a.isBeginning,
            d = a.isEnd;
          if (
            (o >= a.minTranslate() && (o = a.minTranslate()),
            o <= a.maxTranslate() && (o = a.maxTranslate()),
            a.setTransition(0),
            a.setTranslate(o),
            a.updateProgress(),
            a.updateActiveIndex(),
            a.updateSlidesClasses(),
            ((!l && a.isBeginning) || (!d && a.isEnd)) &&
              a.updateSlidesClasses(),
            a.params.freeModeSticky &&
              (clearTimeout(a.mousewheel.timeout),
              (a.mousewheel.timeout = ee.nextTick(function () {
                a.slideToClosest();
              }, 300))),
            a.emit("scroll", t),
            a.params.autoplay &&
              a.params.autoplayDisableOnInteraction &&
              a.autoplay.stop(),
            o === a.minTranslate() || o === a.maxTranslate())
          )
            return !0;
        } else {
          if (60 < ee.now() - a.mousewheel.lastScrollTime)
            if (s < 0)
              if ((a.isEnd && !a.params.loop) || a.animating) {
                if (i.releaseOnEdges) return !0;
              } else a.slideNext(), a.emit("scroll", t);
            else if ((a.isBeginning && !a.params.loop) || a.animating) {
              if (i.releaseOnEdges) return !0;
            } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = new J.Date().getTime();
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      enable: function () {
        var e = this;
        if (!A.event) return !1;
        if (e.mousewheel.enabled) return !1;
        var t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = L(e.params.mousewheel.eventsTarged)),
          t.on("mouseenter", e.mousewheel.handleMouseEnter),
          t.on("mouseleave", e.mousewheel.handleMouseLeave),
          t.on(A.event, e.mousewheel.handle),
          (e.mousewheel.enabled = !0)
        );
      },
      disable: function () {
        var e = this;
        if (!A.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        var t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = L(e.params.mousewheel.eventsTarged)),
          t.off(A.event, e.mousewheel.handle),
          !(e.mousewheel.enabled = !1)
        );
      },
    },
    H = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s &&
            0 < s.length &&
            (e.isBeginning
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass)),
            i &&
              0 < i.length &&
              (e.isEnd
                ? i.addClass(t.disabledClass)
                : i.removeClass(t.disabledClass),
              i[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = L(i.nextEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              1 < e.length &&
              1 === a.$el.find(i.nextEl).length &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = L(i.prevEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              1 < t.length &&
              1 === a.$el.find(i.prevEl).length &&
              (t = a.$el.find(i.prevEl))),
          e && 0 < e.length && e.on("click", a.navigation.onNextClick),
          t && 0 < t.length && t.on("click", a.navigation.onPrevClick),
          ee.extend(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a &&
          a.length &&
          (a.off("click", e.navigation.onNextClick),
          a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    },
    N = {
      update: function () {
        var e = this,
          t = e.rtl,
          s = e.params.pagination;
        if (
          s.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var r,
            a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            n = e.params.loop
              ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((r = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides),
                n - 1 < r && (r -= n),
                r < 0 && "bullets" !== e.params.paginationType && (r = n + r))
              : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              0 < e.pagination.bullets.length)
          ) {
            var o,
              l,
              d,
              p = e.pagination.bullets;
            if (
              (s.dynamicBullets &&
                ((e.pagination.bulletSize = p
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                i.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"
                ),
                1 < s.dynamicMainBullets &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                  e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        s.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (o = r - e.pagination.dynamicBulletIndex),
                (d =
                  ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) +
                    o) /
                  2)),
              p.removeClass(
                s.bulletActiveClass +
                  " " +
                  s.bulletActiveClass +
                  "-next " +
                  s.bulletActiveClass +
                  "-next-next " +
                  s.bulletActiveClass +
                  "-prev " +
                  s.bulletActiveClass +
                  "-prev-prev " +
                  s.bulletActiveClass +
                  "-main"
              ),
              1 < i.length)
            )
              p.each(function (e, t) {
                var a = L(t),
                  i = a.index();
                i === r && a.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (o <= i &&
                      i <= l &&
                      a.addClass(s.bulletActiveClass + "-main"),
                    i === o &&
                      a
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev-prev"),
                    i === l &&
                      a
                        .next()
                        .addClass(s.bulletActiveClass + "-next")
                        .next()
                        .addClass(s.bulletActiveClass + "-next-next"));
              });
            else if (
              (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets)
            ) {
              for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)
                p.eq(h).addClass(s.bulletActiveClass + "-main");
              c
                .prev()
                .addClass(s.bulletActiveClass + "-prev")
                .prev()
                .addClass(s.bulletActiveClass + "-prev-prev"),
                u
                  .next()
                  .addClass(s.bulletActiveClass + "-next")
                  .next()
                  .addClass(s.bulletActiveClass + "-next-next");
            }
            if (s.dynamicBullets) {
              var v = Math.min(p.length, s.dynamicMainBullets + 4),
                f =
                  (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize,
                m = t ? "right" : "left";
              p.css(e.isHorizontal() ? m : "top", f + "px");
            }
          }
          if (
            ("fraction" === s.type &&
              (i
                .find("." + s.currentClass)
                .text(s.formatFractionCurrent(r + 1)),
              i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
            "progressbar" === s.type)
          ) {
            var g;
            g = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var b = (r + 1) / n,
              w = 1,
              y = 1;
            "horizontal" === g ? (w = b) : (y = b),
              i
                .find("." + s.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")"
                )
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (i.html(s.renderCustom(e, r + 1, n)),
              e.emit("paginationRender", e, i[0]))
            : e.emit("paginationUpdate", e, i[0]),
            i[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](s.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (
              var r = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length,
                n = 0;
              n < r;
              n += 1
            )
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var a = this,
          e = a.params.pagination;
        if (e.el) {
          var t = L(e.el);
          0 !== t.length &&
            (a.params.uniqueNavElements &&
              "string" == typeof e.el &&
              1 < t.length &&
              1 === a.$el.find(e.el).length &&
              (t = a.$el.find(e.el)),
            "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
            t.addClass(e.modifierClass + e.type),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
              (a.pagination.dynamicBulletIndex = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              t.addClass(e.progressbarOppositeClass),
            e.clickable &&
              t.on("click", "." + e.bulletClass, function (e) {
                e.preventDefault();
                var t = L(this).index() * a.params.slidesPerGroup;
                a.params.loop && (t += a.loopedSlides), a.slideTo(t);
              }),
            ee.extend(a.pagination, { $el: t, el: t[0] }));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off("click", "." + t.bulletClass);
        }
      },
    },
    G = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? 0 < (p = -p)
              ? ((d = s - p), (p = 0))
              : r < -p + s && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : r < p + s && (d = r - p),
            e.isHorizontal()
              ? (te.transforms3d
                  ? n.transform("translate3d(" + p + "px, 0, 0)")
                  : n.transform("translateX(" + p + "px)"),
                (n[0].style.width = d + "px"))
              : (te.transforms3d
                  ? n.transform("translate3d(0px, " + p + "px, 0)")
                  : n.transform("translateY(" + p + "px)"),
                (n[0].style.height = d + "px")),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + "px")
              : (a[0].style.height = s + "px"),
            (i[0].style.display = 1 <= n ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            ee.extend(t, {
              trackSize: r,
              divider: n,
              moveDivider: o,
              dragSize: s,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](e.params.scrollbar.lockClass);
        }
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;
        (t =
          ((a.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageX
              : e.pageX || e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].pageY
            : e.pageY || e.clientY) -
            r.offset()[a.isHorizontal() ? "left" : "top"] -
            n / 2) /
          (o - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(l),
          a.setTranslate(l),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css("opacity", 1),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          a.transition(0),
          i.transition(0),
          s.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = ee.nextTick(function () {
              i.css("opacity", 0), i.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          te.touch
            ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n),
              r.addEventListener(a.move, e.scrollbar.onDragMove, n),
              r.addEventListener(a.end, e.scrollbar.onDragEnd, o))
            : (r.addEventListener(i.start, e.scrollbar.onDragStart, n),
              f.addEventListener(i.move, e.scrollbar.onDragMove, n),
              f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          te.touch
            ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n),
              r.removeEventListener(a.move, e.scrollbar.onDragMove, n),
              r.removeEventListener(a.end, e.scrollbar.onDragEnd, o))
            : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n),
              f.removeEventListener(i.move, e.scrollbar.onDragMove, n),
              f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      init: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = L(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            1 < s.length &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = L(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(r)),
            ee.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    B = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = L(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y"),
          l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (
          (n || o
            ? ((n = n || "0"), (o = o || "0"))
            : this.isHorizontal()
            ? ((n = r), (o = "0"))
            : ((o = r), (n = "0")),
          (n =
            0 <= n.indexOf("%")
              ? parseInt(n, 10) * t * s + "%"
              : n * t * s + "px"),
          (o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px"),
          null != d)
        ) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
        else {
          var c = l - (l - 1) * (1 - Math.abs(t));
          i.transform(
            "translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")"
          );
        }
      },
      setTranslate: function () {
        var i = this,
          e = i.$el,
          t = i.slides,
          s = i.progress,
          r = i.snapGrid;
        e
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (e, t) {
            i.parallax.setTransform(t, s);
          }),
          t.each(function (e, t) {
            var a = t.progress;
            1 < i.params.slidesPerGroup &&
              "auto" !== i.params.slidesPerView &&
              (a += Math.ceil(e / 2) - s * (r.length - 1)),
              (a = Math.min(Math.max(a, -1), 1)),
              L(t)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function (e, t) {
                  i.parallax.setTransform(t, a);
                });
          });
      },
      setTransition: function (s) {
        void 0 === s && (s = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (e, t) {
            var a = L(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
            0 === s && (i = 0), a.transition(i);
          });
      },
    },
    X = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !te.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (s.scaleStart = X.getDistanceBetweenTouches(e));
        }
        (s.$slideEl && s.$slideEl.length) ||
        ((s.$slideEl = L(e.target).closest(".swiper-slide")),
        0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
        (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
        (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass)),
        (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
        0 !== s.$imageWrapEl.length)
          ? (s.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (s.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (a.fakeGestureMoved = !0),
            (i.scaleMove = X.getDistanceBetweenTouches(e));
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.scale = te.gestures
            ? e.scale * a.currentScale
            : (i.scaleMove / i.scaleStart) * a.currentScale),
          a.scale > i.maxRatio &&
            (a.scale =
              i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
          a.scale < t.minRatio &&
            (a.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
          i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !g.android)
          )
            return;
          (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio)),
          i.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
          (a.currentScale = a.scale),
          (a.isScaling = !1),
          1 === a.scale && (i.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (i.isTouched ||
            (g.android && e.preventDefault(),
            (i.isTouched = !0),
            (i.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (i.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = o), (a.currentY = d);
          var c = a.width * e.scale,
            u = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl ||
          ((y.$slideEl = g.clickedSlide
            ? L(g.clickedSlide)
            : g.slides.eq(g.activeIndex)),
          (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
          (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
        y.$imageEl && 0 !== y.$imageEl.length) &&
          (y.$slideEl.addClass("" + w.zoomedSlideClass),
          void 0 === x.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = x.touchesStart.x), (a = x.touchesStart.y)),
          (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          (b.currentScale =
            y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          e
            ? ((f = y.$slideEl[0].offsetWidth),
              (m = y.$slideEl[0].offsetHeight),
              (i = y.$slideEl.offset().left + f / 2 - t),
              (s = y.$slideEl.offset().top + m / 2 - a),
              (o = y.$imageEl[0].offsetWidth),
              (l = y.$imageEl[0].offsetHeight),
              (d = o * b.scale),
              (p = l * b.scale),
              (h = -(c = Math.min(f / 2 - d / 2, 0))),
              (v = -(u = Math.min(m / 2 - p / 2, 0))),
              (r = i * b.scale) < c && (r = c),
              h < r && (r = h),
              (n = s * b.scale) < u && (n = u),
              v < n && (n = v))
            : (n = r = 0),
          y.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          y.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl ||
          ((i.$slideEl = e.clickedSlide
            ? L(e.clickedSlide)
            : e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      enable: function () {
        var e = this,
          t = e.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var a = !(
            "touchstart" !== e.touchEvents.start ||
            !te.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          te.gestures
            ? (e.$wrapperEl.on(
                "gesturestart",
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                "gesturechange",
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.on(
                e.touchEvents.start,
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.move,
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.end,
                ".swiper-slide",
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          e.zoom.enabled = !1;
          var a = !(
            "touchstart" !== e.touchEvents.start ||
            !te.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          te.gestures
            ? (e.$wrapperEl.off(
                "gesturestart",
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                "gesturechange",
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                "gestureend",
                ".swiper-slide",
                t.onGestureEnd,
                a
              ))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(
                e.touchEvents.start,
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.move,
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.end,
                ".swiper-slide",
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
    },
    Y = {
      loadInSlide: function (e, l) {
        void 0 === l && (l = !0);
        var d = this,
          p = d.params.lazy;
        if (void 0 !== e && 0 !== d.slides.length) {
          var c =
              d.virtual && d.params.virtual.enabled
                ? d.$wrapperEl.children(
                    "." +
                      d.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : d.slides.eq(e),
            t = c.find(
              "." +
                p.elementClass +
                ":not(." +
                p.loadedClass +
                "):not(." +
                p.loadingClass +
                ")"
            );
          !c.hasClass(p.elementClass) ||
            c.hasClass(p.loadedClass) ||
            c.hasClass(p.loadingClass) ||
            (t = t.add(c[0])),
            0 !== t.length &&
              t.each(function (e, t) {
                var i = L(t);
                i.addClass(p.loadingClass);
                var s = i.attr("data-background"),
                  r = i.attr("data-src"),
                  n = i.attr("data-srcset"),
                  o = i.attr("data-sizes");
                d.loadImage(i[0], r || s, n, o, !1, function () {
                  if (null != d && d && (!d || d.params) && !d.destroyed) {
                    if (
                      (s
                        ? (i.css("background-image", 'url("' + s + '")'),
                          i.removeAttr("data-background"))
                        : (n &&
                            (i.attr("srcset", n), i.removeAttr("data-srcset")),
                          o && (i.attr("sizes", o), i.removeAttr("data-sizes")),
                          r && (i.attr("src", r), i.removeAttr("data-src"))),
                      i.addClass(p.loadedClass).removeClass(p.loadingClass),
                      c.find("." + p.preloaderClass).remove(),
                      d.params.loop && l)
                    ) {
                      var e = c.attr("data-swiper-slide-index");
                      if (c.hasClass(d.params.slideDuplicateClass)) {
                        var t = d.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            d.params.slideDuplicateClass +
                            ")"
                        );
                        d.lazy.loadInSlide(t.index(), !1);
                      } else {
                        var a = d.$wrapperEl.children(
                          "." +
                            d.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        d.lazy.loadInSlide(a.index(), !1);
                      }
                    }
                    d.emit("lazyImageReady", c[0], i[0]);
                  }
                }),
                  d.emit("lazyImageLoad", c[0], i[0]);
              });
        }
      },
      load: function () {
        var i = this,
          t = i.$wrapperEl,
          a = i.params,
          s = i.slides,
          e = i.activeIndex,
          r = i.virtual && a.virtual.enabled,
          n = a.lazy,
          o = a.slidesPerView;
        function l(e) {
          if (r) {
            if (
              t.children(
                "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
        }
        if (
          ("auto" === o && (o = 0),
          i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
          i.params.watchSlidesVisibility)
        )
          t.children("." + a.slideVisibleClass).each(function (e, t) {
            var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
            i.lazy.loadInSlide(a);
          });
        else if (1 < o)
          for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
        else i.lazy.loadInSlide(e);
        if (n.loadPrevNext)
          if (1 < o || (n.loadPrevNextAmount && 1 < n.loadPrevNextAmount)) {
            for (
              var c = n.loadPrevNextAmount,
                u = o,
                h = Math.min(e + u + Math.max(c, u), s.length),
                v = Math.max(e - Math.max(u, c), 0),
                f = e + o;
              f < h;
              f += 1
            )
              l(f) && i.lazy.loadInSlide(f);
            for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
          } else {
            var g = t.children("." + a.slideNextClass);
            0 < g.length && i.lazy.loadInSlide(d(g));
            var b = t.children("." + a.slidePrevClass);
            0 < b.length && i.lazy.loadInSlide(d(b));
          }
      },
    },
    V = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          o = function (e, t) {
            for (i = -1, a = e.length; 1 < a - i; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new V.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new V.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control;
        function n(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && "container" !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof T && n(r[o]);
        else r instanceof T && t !== r && n(r);
      },
      setTransition: function (t, e) {
        var a,
          i = this,
          s = i.controller.control;
        function r(e) {
          e.setTransition(t, i),
            0 !== t &&
              (e.transitionStart(),
              e.params.autoHeight &&
                ee.nextTick(function () {
                  e.updateAutoHeight();
                }),
              e.$wrapperEl.transitionEnd(function () {
                s &&
                  (e.params.loop &&
                    "slide" === i.params.controller.by &&
                    e.loopFix(),
                  e.transitionEnd());
              }));
        }
        if (Array.isArray(s))
          for (a = 0; a < s.length; a += 1)
            s[a] !== e && s[a] instanceof T && r(s[a]);
        else s instanceof T && e !== s && r(s);
      },
    },
    F = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this,
          a = t.params.a11y;
        if (13 === e.keyCode) {
          var i = L(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is("." + t.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            0 < i.length &&
            (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
            a &&
              0 < a.length &&
              (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
        }
      },
      updatePagination: function () {
        var i = this,
          s = i.params.a11y;
        i.pagination &&
          i.params.pagination.clickable &&
          i.pagination.bullets &&
          i.pagination.bullets.length &&
          i.pagination.bullets.each(function (e, t) {
            var a = L(t);
            i.a11y.makeElFocusable(a),
              i.a11y.addElRole(a, "button"),
              i.a11y.addElLabel(
                a,
                s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1)
              );
          });
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
          a,
          i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
          t &&
            (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
          a &&
            (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          0 < a.a11y.liveRegion.length &&
          a.a11y.liveRegion.remove(),
          a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
          a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
          e && e.off("keydown", a.a11y.onEnterKey),
          t && t.off("keydown", a.a11y.onEnterKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              "keydown",
              "." + a.params.pagination.bulletClass,
              a.a11y.onEnterKey
            );
      },
    },
    R = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!J.history || !J.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var t = e.history;
          (t.initialized = !0),
            (t.paths = R.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                J.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          J.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        (this.history.paths = R.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function () {
        var e = J.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory: function (e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(t),
            i = R.slugify(a.attr("data-history"));
          J.location.pathname.includes(e) || (i = e + "/" + i);
          var s = J.history.state;
          (s && s.value === i) ||
            (this.params.history.replaceState
              ? J.history.replaceState({ value: i }, null, i)
              : J.history.pushState({ value: i }, null, i));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              R.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var o = n.index();
              i.slideTo(o, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    q = {
      onHashCange: function () {
        var e = this,
          t = f.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var a = e.$wrapperEl
            .children("." + e.params.slideClass + '[data-hash="' + t + '"]')
            .index();
          if (void 0 === a) return;
          e.slideTo(a);
        }
      },
      setHash: function () {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            J.history &&
            J.history.replaceState
          )
            J.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            );
          else {
            var t = e.slides.eq(e.activeIndex),
              a = t.attr("data-hash") || t.attr("data-history");
            f.location.hash = a || "";
          }
      },
      init: function () {
        var e = this;
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var t = f.location.hash.replace("#", "");
          if (t)
            for (var a = 0, i = e.slides.length; a < i; a += 1) {
              var s = e.slides.eq(a);
              if (
                (s.attr("data-hash") || s.attr("data-history")) === t &&
                !s.hasClass(e.params.slideDuplicateClass)
              ) {
                var r = s.index();
                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            L(J).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          L(J).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    W = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          (e.autoplay.timeout = ee.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
    },
    j = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            "translate3d(" + s + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.$wrapperEl;
        if ((t.transition(e), a.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          t.transitionEnd(function () {
            if (!s && a && !a.destroyed) {
              (s = !0), (a.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                t < e.length;
                t += 1
              )
                i.trigger(e[t]);
            }
          });
        }
      },
    },
    U = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.params.cubeEffect,
          p = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          u = 0;
        d.shadow &&
          (p
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = L('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = L('<div class="swiper-cube-shadow"></div>')), a.append(e)));
        for (var h = 0; h < s.length; h += 1) {
          var v = s.eq(h),
            f = h;
          c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && ((m = -m), (g = Math.floor(-m / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0
            ? ((w = 4 * -g * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((w = 0), (x = 4 * -g * l))
            : (f - 2) % 4 == 0
            ? ((w = l + 4 * g * l), (x = l))
            : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
            o && (w = -w),
            p || ((y = w), (w = 0));
          var T =
            "rotateX(" +
            (p ? 0 : -m) +
            "deg) rotateY(" +
            (p ? m : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            x +
            "px)";
          if (
            (b <= 1 &&
              -1 < b &&
              ((u = 90 * f + 90 * b), o && (u = 90 * -f - 90 * b)),
            v.transform(T),
            d.slideShadows)
          ) {
            var E = p
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = p
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = L(
                '<div class="swiper-slide-shadow-' +
                  (p ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = L(
                  '<div class="swiper-slide-shadow-' +
                    (p ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (p)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + d.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              M =
                1.5 -
                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                  Math.cos((2 * C * Math.PI) / 360) / 2),
              z = d.shadowScale,
              P = d.shadowScale / M,
              k = d.shadowOffset;
            e.transform(
              "scale3d(" +
                z +
                ", 1, " +
                P +
                ") translate3d(0px, " +
                (n / 2 + k) +
                "px, " +
                -n / 2 / P +
                "px) rotateX(-90deg)"
            );
          }
        var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            $ +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : u) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -u : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    K = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (e.isHorizontal()
              ? a && (n = -n)
              : ((d = l), (o = -n), (n = l = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            var p = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              ((p = L(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(p)),
              0 === c.length &&
                ((c = L(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(c)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              c.length && (c[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              l +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              o +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;
        if (
          (t
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          a.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          t.eq(i).transitionEnd(function () {
            if (!r && a && !a.destroyed) {
              (r = !0), (a.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                t < e.length;
                t += 1
              )
                s.trigger(e[t]);
            }
          });
        }
      },
    },
    _ = {
      setTranslate: function () {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.$wrapperEl,
            r = e.slidesSizesGrid,
            n = e.params.coverflowEffect,
            o = e.isHorizontal(),
            l = e.translate,
            d = o ? t / 2 - l : a / 2 - l,
            p = o ? n.rotate : -n.rotate,
            c = n.depth,
            u = 0,
            h = i.length;
          u < h;
          u += 1
        ) {
          var v = i.eq(u),
            f = r[u],
            m = ((d - v[0].swiperSlideOffset - f / 2) / f) * n.modifier,
            g = o ? p * m : 0,
            b = o ? 0 : p * m,
            w = -c * Math.abs(m),
            y = o ? 0 : n.stretch * m,
            x = o ? n.stretch * m : 0;
          Math.abs(x) < 0.001 && (x = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0);
          var T =
            "translate3d(" +
            x +
            "px," +
            y +
            "px," +
            w +
            "px)  rotateX(" +
            b +
            "deg) rotateY(" +
            g +
            "deg)";
          if (
            (v.transform(T),
            (v[0].style.zIndex = 1 - Math.abs(Math.round(m))),
            n.slideShadows)
          ) {
            var E = o
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = o
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = L(
                '<div class="swiper-slide-shadow-' +
                  (o ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = L(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = 0 < m ? m : 0),
              S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
          }
        }
        (te.pointerEvents || te.prefixedPointerEvents) &&
          (s[0].style.perspectiveOrigin = d + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    Z = {
      init: function () {
        var e = this,
          t = e.params.thumbs,
          a = e.constructor;
        t.swiper instanceof a
          ? ((e.thumbs.swiper = t.swiper),
            ee.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            ee.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : ee.isObject(t.swiper) &&
            ((e.thumbs.swiper = new a(
              ee.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (
            !(
              (i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var s;
            if (
              ((s = t.params.loop
                ? parseInt(
                    L(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (r = e.activeIndex));
              var n = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                o = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i =
            "auto" === a.params.slidesPerView
              ? a.slidesPerViewDynamic()
              : a.params.slidesPerView;
          if (t.realIndex !== a.realIndex) {
            var s,
              r = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(r).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (r = a.activeIndex));
              var n = a.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index(),
                o = a.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                  .eq(0)
                  .index();
              s =
                void 0 === n
                  ? o
                  : void 0 === o
                  ? n
                  : o - r == r - n
                  ? r
                  : o - r < r - n
                  ? o
                  : n;
            } else s = t.realIndex;
            a.visibleSlidesIndexes.indexOf(s) < 0 &&
              (a.params.centeredSlides
                ? (s =
                    r < s
                      ? s - Math.floor(i / 2) + 1
                      : s + Math.floor(i / 2) - 1)
                : r < s && (s = s - i + 1),
              a.slideTo(s, e ? 0 : void 0));
          }
          var l = 1,
            d = t.params.thumbs.slideThumbActiveClass;
          if (
            (1 < t.params.slidesPerView &&
              !t.params.centeredSlides &&
              (l = t.params.slidesPerView),
            a.slides.removeClass(d),
            a.params.loop)
          )
            for (var p = 0; p < l; p += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + p) + '"]'
                )
                .addClass(d);
          else
            for (var c = 0; c < l; c += 1)
              a.slides.eq(t.realIndex + c).addClass(d);
        }
      },
    },
    Q = [
      E,
      S,
      C,
      M,
      P,
      $,
      O,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            mousewheel: {
              enabled: !1,
              enable: A.enable.bind(e),
              disable: A.disable.bind(e),
              handle: A.handle.bind(e),
              handleMouseEnter: A.handleMouseEnter.bind(e),
              handleMouseLeave: A.handleMouseLeave.bind(e),
              lastScrollTime: ee.now(),
            },
          });
        },
        on: {
          init: function () {
            this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function () {
            this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            navigation: {
              init: H.init.bind(e),
              update: H.update.bind(e),
              destroy: H.destroy.bind(e),
              onNextClick: H.onNextClick.bind(e),
              onPrevClick: H.onPrevClick.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (e) {
            var t,
              a = this,
              i = a.navigation,
              s = i.$nextEl,
              r = i.$prevEl;
            !a.params.navigation.hideOnClick ||
              L(e.target).is(r) ||
              L(e.target).is(s) ||
              (s
                ? (t = s.hasClass(a.params.navigation.hiddenClass))
                : r && (t = r.hasClass(a.params.navigation.hiddenClass)),
              !0 === t
                ? a.emit("navigationShow", a)
                : a.emit("navigationHide", a),
              s && s.toggleClass(a.params.navigation.hiddenClass),
              r && r.toggleClass(a.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            pagination: {
              init: N.init.bind(e),
              render: N.render.bind(e),
              update: N.update.bind(e),
              destroy: N.destroy.bind(e),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function () {
            this.params.loop
              ? this.pagination.update()
              : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (e) {
            var t = this;
            t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              0 < t.pagination.$el.length &&
              !L(e.target).hasClass(t.params.pagination.bulletClass) &&
              (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                ? t.emit("paginationShow", t)
                : t.emit("paginationHide", t),
              t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            scrollbar: {
              init: G.init.bind(e),
              destroy: G.destroy.bind(e),
              updateSize: G.updateSize.bind(e),
              setTranslate: G.setTranslate.bind(e),
              setTransition: G.setTransition.bind(e),
              enableDraggable: G.enableDraggable.bind(e),
              disableDraggable: G.disableDraggable.bind(e),
              setDragPosition: G.setDragPosition.bind(e),
              onDragStart: G.onDragStart.bind(e),
              onDragMove: G.onDragMove.bind(e),
              onDragEnd: G.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          ee.extend(this, {
            parallax: {
              setTransform: B.setTransform.bind(this),
              setTranslate: B.setTranslate.bind(this),
              setTransition: B.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax.enabled && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var i = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (e) {
              t[e] = X[e].bind(i);
            }),
            ee.extend(i, { zoom: t });
          var s = 1;
          Object.defineProperty(i.zoom, "scale", {
            get: function () {
              return s;
            },
            set: function (e) {
              if (s !== e) {
                var t = i.zoom.gesture.$imageEl
                    ? i.zoom.gesture.$imageEl[0]
                    : void 0,
                  a = i.zoom.gesture.$slideEl
                    ? i.zoom.gesture.$slideEl[0]
                    : void 0;
                i.emit("zoomChange", e, t, a);
              }
              s = e;
            },
          });
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          ee.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: Y.load.bind(this),
              loadInSlide: Y.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled &&
              this.params.preloadImages &&
              (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            var e = this;
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          var e = this;
          ee.extend(e, {
            controller: {
              control: e.params.controller.control,
              getInterpolateFunction: V.getInterpolateFunction.bind(e),
              setTranslate: V.setTranslate.bind(e),
              setTransition: V.setTransition.bind(e),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create: function () {
          var t = this;
          ee.extend(t, {
            a11y: {
              liveRegion: L(
                '<span class="' +
                  t.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            },
          }),
            Object.keys(F).forEach(function (e) {
              t.a11y[e] = F[e].bind(t);
            });
        },
        on: {
          init: function () {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          var e = this;
          ee.extend(e, {
            history: {
              init: R.init.bind(e),
              setHistory: R.setHistory.bind(e),
              setHistoryPopState: R.setHistoryPopState.bind(e),
              scrollToSlide: R.scrollToSlide.bind(e),
              destroy: R.destroy.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            hashNavigation: {
              initialized: !1,
              init: q.init.bind(e),
              destroy: q.destroy.bind(e),
              setHash: q.setHash.bind(e),
              onHashCange: q.onHashCange.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var t = this;
          ee.extend(t, {
            autoplay: {
              running: !1,
              paused: !1,
              run: W.run.bind(t),
              start: W.start.bind(t),
              stop: W.stop.bind(t),
              pause: W.pause.bind(t),
              onTransitionEnd: function (e) {
                t &&
                  !t.destroyed &&
                  t.$wrapperEl &&
                  e.target === this &&
                  (t.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ),
                  (t.autoplay.paused = !1),
                  t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
              },
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled && this.autoplay.start();
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(e)
                : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop();
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          ee.extend(this, {
            fadeEffect: {
              setTranslate: j.setTranslate.bind(this),
              setTransition: j.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              ee.extend(e.params, t), ee.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          ee.extend(this, {
            cubeEffect: {
              setTranslate: U.setTranslate.bind(this),
              setTransition: U.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              ee.extend(e.params, t), ee.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          ee.extend(this, {
            flipEffect: {
              setTranslate: K.setTranslate.bind(this),
              setTransition: K.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              ee.extend(e.params, t), ee.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          ee.extend(this, {
            coverflowEffect: {
              setTranslate: _.setTranslate.bind(this),
              setTransition: _.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            "coverflow" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "coverflow"),
              e.classNames.push(e.params.containerModifierClass + "3d"),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          ee.extend(this, {
            thumbs: {
              swiper: null,
              init: Z.init.bind(this),
              update: Z.update.bind(this),
              onThumbClick: Z.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this.params.thumbs;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          update: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition: function (e) {
            var t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy: function () {
            var e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
  return (
    void 0 === T.use &&
      ((T.use = T.Class.use), (T.installModule = T.Class.installModule)),
    T.use(Q),
    T
  );
});
var pageloader_in = $("#loader_in");
var pageloader_centered = $("#loader_centered");
var pageIsChanging = !1;
/*! Fades out the whole page when clicking links */
$(document).ready(function () {
  gsap.to(pageloader_centered, { duration: 1, scale: 0.0, ease: "power4" });
});
var pageloader_posX = 0,
  pageloader_posY = 0;
var pageloader_mouseX = 0,
  pageloader_mouseY = 0;
gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    pageloader_posX += (pageloader_mouseX - pageloader_posX) / 6;
    pageloader_posY += (pageloader_mouseY - pageloader_posY) / 6;
    gsap.set(pageloader_in, {
      css: { left: pageloader_posX, top: pageloader_posY },
    });
  },
});
if (!pageIsChanging) {
  $(document).on("mousemove", function (e) {
    pageloader_mouseX = e.clientX;
    pageloader_mouseY = e.clientY;
  });
}
$("a.local").click(function (e) {
  e.preventDefault();
  newLocation = this.href;
  pageIsChanging = !0;
  if (is_touch) {
    var tl = gsap.timeline({ onComplete: newpage() });
    tl.to(pageloader_centered, {
      duration: 2,
      scale: 1,
      autoAlpha: 1,
      ease: "power4",
    });
  } else {
    var tl = gsap.timeline({ onComplete: newpage() });
    tl.to(pageloader_in, {
      duration: 2,
      scale: 1,
      autoAlpha: 1,
      ease: "power4",
    });
  }
});
function newpage() {
  window.location = newLocation;
}
/*! Reloads page on every visit */
function Reload() {
  try {
    var headElement = document.getElementsByTagName("head")[0];
    if (headElement && headElement.innerHTML)
      headElement.innerHTML += '<meta http-equiv="refresh" content="1">';
  } catch (e) {}
}
/*! Reloads on every visit in mobile safari */
if (/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)) {
  window.onpageshow = function (evt) {
    if (evt.persisted) {
      document.body.style.display = "none";
      location.reload();
    }
  };
}
/*!
 * CSSRulePlugin 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function h() {
    return "undefined" != typeof window;
  }
  function i() {
    return t || (h() && (t = window.gsap) && t.registerPlugin && t);
  }
  function j() {
    return (
      n ||
        (s(),
        o ||
          console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),
      n
    );
  }
  var t,
    n,
    c,
    o,
    s = function _initCore(e) {
      (t = e || i()),
        h() && (c = document),
        t && (o = t.plugins.css) && (n = 1);
    },
    r = {
      version: "3.1.1",
      name: "cssRule",
      init: function init(e, t, n, i, s) {
        if (!j() || void 0 === e.cssText) return !1;
        var r = (e._gsProxy = e._gsProxy || c.createElement("div"));
        (this.ss = e),
          (this.style = r.style),
          (r.style.cssText = e.cssText),
          o.prototype.init.call(this, r, t, n, i, s);
      },
      render: function render(e, t) {
        for (var n, i = t._pt, s = t.style, r = t.ss; i; )
          i.r(e, i.d), (i = i._next);
        for (n = s.length; -1 < --n; ) r[s[n]] = s[s[n]];
      },
      getRule: function getRule(e) {
        j();
        var t,
          n,
          i,
          s,
          r = c.all ? "rules" : "cssRules",
          o = c.styleSheets,
          l = o.length,
          u = ":" === e.charAt(0);
        for (
          e = (u ? "" : ",") + e.split("::").join(":").toLowerCase() + ",",
            u && (s = []);
          l--;

        ) {
          try {
            if (!(n = o[l][r])) continue;
            t = n.length;
          } catch (e) {
            console.warn(e);
            continue;
          }
          for (; -1 < --t; )
            if (
              (i = n[t]).selectorText &&
              -1 !==
                (
                  "," +
                  i.selectorText.split("::").join(":").toLowerCase() +
                  ","
                ).indexOf(e)
            ) {
              if (!u) return i.style;
              s.push(i.style);
            }
        }
        return s;
      },
      register: s,
    };
  i() && t.registerPlugin(r), (e.CSSRulePlugin = r), (e.default = r);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
/*!
 * ScrollToPlugin 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  function k() {
    return "undefined" != typeof window;
  }
  function l() {
    return e || (k() && (e = window.gsap) && e.registerPlugin && e);
  }
  function m(t) {
    return "string" == typeof t;
  }
  function n(t, e) {
    var o = "x" === e ? "Width" : "Height",
      n = "scroll" + o,
      r = "client" + o;
    return t === x || t === s || t === f
      ? Math.max(s[n], f[n]) - (x["inner" + o] || s[r] || f[r])
      : t[n] - t["offset" + o];
  }
  function o(t, e) {
    var o = "scroll" + ("x" === e ? "Left" : "Top");
    return (
      t === x &&
        (null != t.pageXOffset
          ? (o = "page" + e.toUpperCase() + "Offset")
          : (t = null != s[o] ? s : f)),
      function () {
        return t[o];
      }
    );
  }
  function p(t, e) {
    var n = a(t)[0].getBoundingClientRect(),
      r = !e || e === x || e === f,
      i = r
        ? {
            top:
              s.clientTop - (x.pageYOffset || s.scrollTop || f.scrollTop || 0),
            left:
              s.clientLeft -
              (x.pageXOffset || s.scrollLeft || f.scrollLeft || 0),
          }
        : e.getBoundingClientRect(),
      l = { x: n.left - i.left, y: n.top - i.top };
    return !r && e && ((l.x += o(e, "x")()), (l.y += o(e, "y")())), l;
  }
  function q(t, e, o, r) {
    return isNaN(t)
      ? m(t) && "=" === t.charAt(1)
        ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r
        : "max" === t
        ? n(e, o)
        : Math.min(n(e, o), p(t, e)[o])
      : parseFloat(t);
  }
  function r() {
    (e = l()),
      k() &&
        e &&
        document.body &&
        ((x = window),
        (f = document.body),
        (s = document.documentElement),
        (a = e.utils.toArray),
        e.config({ autoKillThreshold: 7 }),
        (g = e.config()),
        (u = 1));
  }
  var e,
    u,
    x,
    s,
    f,
    a,
    g,
    i = {
      version: "3.1.1",
      name: "scrollTo",
      rawVars: 1,
      register: function register(t) {
        (e = t), r();
      },
      init: function init(t, e, n, i, l) {
        u || r();
        var s = this;
        (s.isWin = t === x),
          (s.target = t),
          (s.tween = n),
          "object" != typeof e
            ? m((e = { y: e }).y) &&
              "max" !== e.y &&
              "=" !== e.y.charAt(1) &&
              (e.x = e.y)
            : e.nodeType && (e = { y: e, x: e }),
          (s.vars = e),
          (s.autoKill = !!e.autoKill),
          (s.getX = o(t, "x")),
          (s.getY = o(t, "y")),
          (s.x = s.xPrev = s.getX()),
          (s.y = s.yPrev = s.getY()),
          null != e.x
            ? (s.add(
                s,
                "x",
                s.x,
                q(e.x, t, "x", s.x) - (e.offsetX || 0),
                i,
                l,
                Math.round
              ),
              s._props.push("scrollTo_x"))
            : (s.skipX = 1),
          null != e.y
            ? (s.add(
                s,
                "y",
                s.y,
                q(e.y, t, "y", s.y) - (e.offsetY || 0),
                i,
                l,
                Math.round
              ),
              s._props.push("scrollTo_y"))
            : (s.skipY = 1);
      },
      render: function render(t, e) {
        for (
          var o,
            r,
            i,
            l,
            s,
            u = e._pt,
            f = e.target,
            p = e.tween,
            a = e.autoKill,
            c = e.xPrev,
            y = e.yPrev,
            d = e.isWin;
          u;

        )
          u.r(t, u.d), (u = u._next);
        (o = d || !e.skipX ? e.getX() : c),
          (i = (r = d || !e.skipY ? e.getY() : y) - y),
          (l = o - c),
          (s = g.autoKillThreshold),
          e.x < 0 && (e.x = 0),
          e.y < 0 && (e.y = 0),
          a &&
            (!e.skipX && (s < l || l < -s) && o < n(f, "x") && (e.skipX = 1),
            !e.skipY && (s < i || i < -s) && r < n(f, "y") && (e.skipY = 1),
            e.skipX &&
              e.skipY &&
              (p.kill(),
              e.vars.onAutoKill &&
                e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))),
          d
            ? x.scrollTo(e.skipX ? o : e.x, e.skipY ? r : e.y)
            : (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)),
          (e.xPrev = e.x),
          (e.yPrev = e.y);
      },
      kill: function kill(t) {
        var e = "scrollTo" === t;
        (!e && "scrollTo_x" !== t) || (this.skipX = 1),
          (!e && "scrollTo_y" !== t) || (this.skipY = 1);
      },
    };
  (i.max = n),
    (i.getOffset = p),
    (i.buildGetter = o),
    l() && e.registerPlugin(i),
    (t.ScrollToPlugin = i),
    (t.default = i);
  if (typeof window === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
  } else {
    delete t.default;
  }
});
/*!
 * SplitText 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var b =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function k(D) {
    return e.getComputedStyle(D);
  }
  function n(D, u) {
    var e;
    return i(D)
      ? D
      : "string" == (e = typeof D) && !u && D
      ? E.call(Q.querySelectorAll(D), 0)
      : D && "object" == e && "length" in D
      ? E.call(D, 0)
      : D
      ? [D]
      : [];
  }
  function o(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }
  function p(D, u) {
    for (var e, F = u.length; -1 < --F; )
      if (((e = u[F]), D.substr(0, e.length) === e)) return e.length;
  }
  function r(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      F = 1;
    return (
      e && (D = D.split("++").join("")),
      function () {
        return (
          "<" +
          u +
          " style='position:relative;display:inline-block;'" +
          (D ? " class='" + D + (e ? F++ : "") + "'>" : ">")
        );
      }
    );
  }
  function s(D, u, e) {
    var F = D.nodeType;
    if (1 === F || 9 === F || 11 === F)
      for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
    else (3 !== F && 4 !== F) || (D.nodeValue = D.nodeValue.split(u).join(e));
  }
  function t(D, u) {
    for (var e = u.length; -1 < --e; ) D.push(u[e]);
  }
  function u(D, u, e) {
    for (var F; D && D !== u; ) {
      if ((F = D._next || D.nextSibling)) return F.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }
  function v(D) {
    var u,
      e,
      F = n(D.childNodes),
      t = F.length;
    for (u = 0; u < t; u++)
      (e = F[u])._isSplit
        ? v(e)
        : (u && 3 === e.previousSibling.nodeType
            ? (e.previousSibling.nodeValue +=
                3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue)
            : 3 !== e.nodeType && D.insertBefore(e.firstChild, e),
          D.removeChild(e));
  }
  function w(D, u) {
    return parseFloat(u[D]) || 0;
  }
  function x(D, e, F, C, i, n, E) {
    var r,
      l,
      a,
      p,
      d,
      h,
      B,
      f,
      A,
      c,
      g,
      x,
      y = k(D),
      b = w("paddingLeft", y),
      _ = -999,
      S = w("borderBottomWidth", y) + w("borderTopWidth", y),
      T = w("borderLeftWidth", y) + w("borderRightWidth", y),
      N = w("paddingTop", y) + w("paddingBottom", y),
      m = w("paddingLeft", y) + w("paddingRight", y),
      L = 0.2 * w("fontSize", y),
      W = y.textAlign,
      H = [],
      O = [],
      V = [],
      j = e.wordDelimiter || " ",
      M = e.tag ? e.tag : e.span ? "span" : "div",
      R = e.type || e.split || "chars,words,lines",
      z = i && ~R.indexOf("lines") ? [] : null,
      P = ~R.indexOf("words"),
      q = ~R.indexOf("chars"),
      G = o(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [];
    for (
      J && (I = I.split("++").join("")),
        a = (l = D.getElementsByTagName("*")).length,
        d = [],
        r = 0;
      r < a;
      r++
    )
      d[r] = l[r];
    if (z || G)
      for (r = 0; r < a; r++)
        ((h = (p = d[r]).parentNode === D) || G || (q && !P)) &&
          ((x = p.offsetTop),
          z &&
            h &&
            Math.abs(x - _) > L &&
            ("BR" !== p.nodeName || 0 === r) &&
            ((B = []), z.push(B), (_ = x)),
          G &&
            ((p._x = p.offsetLeft),
            (p._y = x),
            (p._w = p.offsetWidth),
            (p._h = p.offsetHeight)),
          z &&
            (((p._isSplit && h) ||
              (!q && h) ||
              (P && h) ||
              (!P &&
                p.parentNode.parentNode === D &&
                !p.parentNode._isSplit)) &&
              (B.push(p), (p._x -= b), u(p, D, j) && (p._wordEnd = !0)),
            "BR" === p.nodeName &&
              ((p.nextSibling && "BR" === p.nextSibling.nodeName) || 0 === r) &&
              z.push([])));
    for (r = 0; r < a; r++)
      (h = (p = d[r]).parentNode === D),
        "BR" !== p.nodeName
          ? (G &&
              ((A = p.style),
              P || h || ((p._x += p.parentNode._x), (p._y += p.parentNode._y)),
              (A.left = p._x + "px"),
              (A.top = p._y + "px"),
              (A.position = "absolute"),
              (A.display = "block"),
              (A.width = p._w + 1 + "px"),
              (A.height = p._h + "px")),
            !P && q
              ? p._isSplit
                ? ((p._next = p.nextSibling), p.parentNode.appendChild(p))
                : p.parentNode._isSplit
                ? ((p._parent = p.parentNode),
                  !p.previousSibling &&
                    p.firstChild &&
                    (p.firstChild._isFirst = !0),
                  p.nextSibling &&
                    " " === p.nextSibling.textContent &&
                    !p.nextSibling.nextSibling &&
                    K.push(p.nextSibling),
                  (p._next =
                    p.nextSibling && p.nextSibling._isFirst
                      ? null
                      : p.nextSibling),
                  p.parentNode.removeChild(p),
                  d.splice(r--, 1),
                  a--)
                : h ||
                  ((x = !p.nextSibling && u(p.parentNode, D, j)),
                  p.parentNode._parent && p.parentNode._parent.appendChild(p),
                  x && p.parentNode.appendChild(Q.createTextNode(" ")),
                  "span" === M && (p.style.display = "inline"),
                  H.push(p))
              : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML
              ? O.push(p)
              : q &&
                !p._isSplit &&
                ("span" === M && (p.style.display = "inline"), H.push(p)))
          : z || G
          ? (p.parentNode && p.parentNode.removeChild(p), d.splice(r--, 1), a--)
          : P || D.appendChild(p);
    for (r = K.length; -1 < --r; ) K[r].parentNode.removeChild(K[r]);
    if (z) {
      for (
        G &&
          ((c = Q.createElement(M)),
          D.appendChild(c),
          (g = c.offsetWidth + "px"),
          (x = c.offsetParent === D ? 0 : D.offsetLeft),
          D.removeChild(c)),
          A = D.style.cssText,
          D.style.cssText = "display:none;";
        D.firstChild;

      )
        D.removeChild(D.firstChild);
      for (f = " " === j && (!G || (!P && !q)), r = 0; r < z.length; r++) {
        for (
          B = z[r],
            (c = Q.createElement(M)).style.cssText =
              "display:block;text-align:" +
              W +
              ";position:" +
              (G ? "absolute;" : "relative;"),
            I && (c.className = I + (J ? r + 1 : "")),
            V.push(c),
            a = B.length,
            l = 0;
          l < a;
          l++
        )
          "BR" !== B[l].nodeName &&
            ((p = B[l]),
            c.appendChild(p),
            f && p._wordEnd && c.appendChild(Q.createTextNode(" ")),
            G &&
              (0 === l &&
                ((c.style.top = p._y + "px"), (c.style.left = b + x + "px")),
              (p.style.top = "0px"),
              x && (p.style.left = p._x - x + "px")));
        0 === a
          ? (c.innerHTML = "&nbsp;")
          : P || q || (v(c), s(c, String.fromCharCode(160), " ")),
          G && ((c.style.width = g), (c.style.height = p._h + "px")),
          D.appendChild(c);
      }
      D.style.cssText = A;
    }
    G &&
      (E > D.clientHeight &&
        ((D.style.height = E - N + "px"),
        D.clientHeight < E && (D.style.height = E + S + "px")),
      n > D.clientWidth &&
        ((D.style.width = n - m + "px"),
        D.clientWidth < n && (D.style.width = n + T + "px"))),
      t(F, H),
      P && t(C, O),
      t(i, V);
  }
  function y(D, u, e, F) {
    var t,
      C,
      i,
      n,
      E,
      r,
      l,
      a,
      d = u.tag ? u.tag : u.span ? "span" : "div",
      h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      B = o(u),
      f = u.wordDelimiter || " ",
      A = " " !== f ? "" : B ? "&#173; " : " ",
      c = "</" + d + ">",
      g = 1,
      x = u.specialChars
        ? "function" == typeof u.specialChars
          ? u.specialChars
          : p
        : null,
      y = Q.createElement("div"),
      v = D.parentNode;
    for (
      v.insertBefore(y, D),
        y.textContent = D.nodeValue,
        v.removeChild(D),
        l =
          -1 !==
          (t = (function getText(D) {
            var u = D.nodeType,
              e = "";
            if (1 === u || 9 === u || 11 === u) {
              if ("string" == typeof D.textContent) return D.textContent;
              for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
            } else if (3 === u || 4 === u) return D.nodeValue;
            return e;
          })((D = y))).indexOf("<"),
        !1 !== u.reduceWhiteSpace && (t = t.replace(S, " ").replace(_, "")),
        l && (t = t.split("<").join("{{LT}}")),
        E = t.length,
        C = (" " === t.charAt(0) ? A : "") + e(),
        i = 0;
      i < E;
      i++
    )
      if (((r = t.charAt(i)), x && (a = x(t.substr(i), u.specialChars))))
        (r = t.substr(i, a || 1)),
          (C += h && " " !== r ? F() + r + "</" + d + ">" : r),
          (i += a - 1);
      else if (r === f && t.charAt(i - 1) !== f && i) {
        for (C += g ? c : "", g = 0; t.charAt(i + 1) === f; ) (C += A), i++;
        i === E - 1
          ? (C += A)
          : ")" !== t.charAt(i + 1) && ((C += A + e()), (g = 1));
      } else
        "{" === r && "{{LT}}" === t.substr(i, 6)
          ? ((C += h ? F() + "{{LT}}</" + d + ">" : "{{LT}}"), (i += 5))
          : (55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319) ||
            (65024 <= t.charCodeAt(i + 1) && t.charCodeAt(i + 1) <= 65039)
          ? ((n = ((t.substr(i, 12).split(b) || [])[1] || "").length || 2),
            (C +=
              h && " " !== r
                ? F() + t.substr(i, n) + "</" + d + ">"
                : t.substr(i, n)),
            (i += n - 1))
          : (C += h && " " !== r ? F() + r + "</" + d + ">" : r);
    (D.outerHTML = C + (g ? c : "")), l && s(v, "{{LT}}", "<");
  }
  function z(D, u, e, F) {
    var t,
      C,
      i = n(D.childNodes),
      E = i.length,
      s = o(u);
    if (3 !== D.nodeType || 1 < E) {
      for (u.absolute = !1, t = 0; t < E; t++)
        (3 === (C = i[t]).nodeType && !/\S+/.test(C.nodeValue)) ||
          (s &&
            3 !== C.nodeType &&
            "inline" === k(C).display &&
            ((C.style.display = "inline-block"),
            (C.style.position = "relative")),
          (C._isSplit = !0),
          z(C, u, e, F));
      return (u.absolute = s), void (D._isSplit = !0);
    }
    y(D, u, e, F);
  }
  var Q,
    e,
    F,
    C,
    _ = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    i = Array.isArray,
    E = [].slice,
    l =
      (((C = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(),
          (this.vars = D = D || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var u,
            e,
            F,
            t = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = r(D.wordsClass, C),
            n = r(D.charsClass, C);
          -1 < --t;

        )
          (F = this.elements[t]),
            (this._originals[t] = F.innerHTML),
            (u = F.clientHeight),
            (e = F.clientWidth),
            z(F, D, i, n),
            x(F, D, this.chars, this.words, this.lines, e, u);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (C.revert = function revert() {
        var e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (D, u) {
            return (D.innerHTML = e[u]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (SplitText.create = function create(D, u) {
        return new SplitText(D, u);
      }),
      SplitText);
  function SplitText(D, u) {
    F ||
      (function _initCore() {
        (Q = document), (e = window), (F = 1);
      })(),
      (this.elements = n(D)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this._originals = []),
      (this.vars = u || {}),
      this.split(u);
  }
  (l.version = "3.1.1"), (D.SplitText = l), (D.default = l);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});
/*!
 * TextPlugin 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var B = /(^\s+|\s+$)/g,
    i =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function splitInnerHTML(D, u, F) {
    for (var C = D.firstChild, E = []; C; )
      3 === C.nodeType
        ? E.push.apply(
            E,
            emojiSafeSplit(
              (C.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "),
              u,
              F
            )
          )
        : "br" === (C.nodeName + "").toLowerCase()
        ? (E[E.length - 1] += "<br>")
        : E.push(C.outerHTML),
        (C = C.nextSibling);
    return E;
  }
  function emojiSafeSplit(D, u, F) {
    if ((F && (D = D.replace(B, "")), u && "" !== u))
      return D.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(u);
    for (var C, E, e = [], t = D.length, n = 0; n < t; n++)
      ((55296 <= (E = D.charAt(n)).charCodeAt(0) && E.charCodeAt(0) <= 56319) ||
        (65024 <= D.charCodeAt(n + 1) && D.charCodeAt(n + 1) <= 65039)) &&
        ((C = ((D.substr(n, 12).split(i) || [])[1] || "").length || 2),
        (E = D.substr(n, C)),
        (n += C - (e.emoji = 1))),
        e.push(">" === E ? "&gt;" : "<" === E ? "&lt;" : E);
    return e;
  }
  var u,
    l,
    F = {
      version: "3.1.1",
      name: "text",
      init: function init(D, u, F) {
        var C,
          E,
          e,
          t,
          n,
          B,
          i,
          A,
          r = D.nodeName.toUpperCase(),
          s = this;
        if (
          ((s.svg = D.getBBox && ("TEXT" === r || "TSPAN" === r)),
          !("innerHTML" in D || s.svg))
        )
          return !1;
        if (
          ((s.target = D),
          "object" != typeof u && (u = { value: u }),
          "value" in u)
        ) {
          for (
            s.delimiter = u.delimiter || "",
              e = splitInnerHTML(D, s.delimiter),
              (l = l || document.createElement("div")).innerHTML = u.value,
              E = splitInnerHTML(l, s.delimiter),
              s.from = F._from,
              s.from && ((r = e), (e = E), (E = r)),
              s.hasClass = !(!u.newClass && !u.oldClass),
              s.newClass = u.newClass,
              s.oldClass = u.oldClass,
              C = (r = e.length - E.length) < 0 ? e : E,
              s.fillChar = u.fillChar || (u.padSpace ? "&nbsp;" : ""),
              r < 0 && (r = -r);
            -1 < --r;

          )
            C.push(s.fillChar);
          if ("diff" === u.type) {
            for (n = [], B = [], i = "", r = t = 0; r < E.length; r++)
              (A = E[r]) === e[r]
                ? (i += A)
                : ((n[t] = i + A), (B[t++] = i + e[r]), (i = ""));
            (E = n), (e = B), i && (E.push(i), e.push(i));
          }
          u.speed &&
            F.duration(
              Math.min((0.05 / u.speed) * C.length, u.maxDuration || 9999)
            ),
            (this.original = e),
            (this.text = E),
            this._props.push("text");
        } else s.text = s.original = [""];
      },
      render: function render(D, u) {
        1 < D ? (D = 1) : D < 0 && (D = 0), u.from && (D = 1 - D);
        var F,
          C,
          E,
          e = u.text,
          t = u.hasClass,
          n = u.newClass,
          B = u.oldClass,
          i = u.delimiter,
          A = u.target,
          r = u.fillChar,
          s = u.original,
          l = e.length,
          o = (D * l + 0.5) | 0;
        (E = t
          ? ((C = B && o !== l),
            ((F = n && o) ? "<span class='" + n + "'>" : "") +
              e.slice(0, o).join(i) +
              (F ? "</span>" : "") +
              (C ? "<span class='" + B + "'>" : "") +
              i +
              s.slice(o).join(i) +
              (C ? "</span>" : ""))
          : e.slice(0, o).join(i) + i + s.slice(o).join(i)),
          u.svg
            ? (A.textContent = E)
            : (A.innerHTML =
                "&nbsp;" === r && ~E.indexOf("  ")
                  ? E.split("  ").join("&nbsp;&nbsp;")
                  : E);
      },
    };
  (F.splitInnerHTML = splitInnerHTML),
    (F.emojiSafeSplit = emojiSafeSplit),
    (F.getText = function getText(D) {
      var u = D.nodeType,
        F = "";
      if (1 === u || 9 === u || 11 === u) {
        if ("string" == typeof D.textContent) return D.textContent;
        for (D = D.firstChild; D; D = D.nextSibling) F += getText(D);
      } else if (3 === u || 4 === u) return D.nodeValue;
      return F;
    }),
    (function _getGSAP() {
      return (
        u ||
        ("undefined" != typeof window &&
          (u = window.gsap) &&
          u.registerPlugin &&
          u)
      );
    })() && u.registerPlugin(F),
    (D.TextPlugin = F),
    (D.default = F);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});
/*!
 * CustomEase 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function m(e) {
    return ~~(1e5 * e + (e < 0 ? -0.5 : 0.5)) / 1e5;
  }
  var b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
    w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
    Y = Math.PI / 180,
    k = Math.sin,
    B = Math.cos,
    F = Math.abs,
    J = Math.sqrt;
  function arcToSegment(e, t, n, s, a, r, i, o, h) {
    if (e !== o || t !== h) {
      (n = F(n)), (s = F(s));
      var u = (a % 360) * Y,
        f = B(u),
        c = k(u),
        l = Math.PI,
        g = 2 * l,
        m = (e - o) / 2,
        x = (t - h) / 2,
        d = f * m + c * x,
        p = -c * m + f * x,
        y = d * d,
        M = p * p,
        v = y / (n * n) + M / (s * s);
      1 < v && ((n = J(v) * n), (s = J(v) * s));
      var C = n * n,
        E = s * s,
        b = (C * E - C * M - E * y) / (C * M + E * y);
      b < 0 && (b = 0);
      var w = (r === i ? -1 : 1) * J(b),
        P = ((n * p) / s) * w,
        S = ((-s * d) / n) * w,
        N = f * P - c * S + (e + o) / 2,
        D = c * P + f * S + (t + h) / 2,
        T = (d - P) / n,
        V = (p - S) / s,
        _ = (-d - P) / n,
        q = (-p - S) / s,
        A = T * T + V * V,
        R = (V < 0 ? -1 : 1) * Math.acos(T / J(A)),
        G =
          (T * q - V * _ < 0 ? -1 : 1) *
          Math.acos((T * _ + V * q) / J(A * (_ * _ + q * q)));
      isNaN(G) && (G = l),
        !i && 0 < G ? (G -= g) : i && G < 0 && (G += g),
        (R %= g),
        (G %= g);
      var L,
        O = Math.ceil(F(G) / (g / 4)),
        j = [],
        z = G / O,
        I = ((4 / 3) * k(z / 2)) / (1 + B(z / 2)),
        H = f * n,
        Q = c * n,
        Z = c * -s,
        U = f * s;
      for (L = 0; L < O; L++)
        (d = B((a = R + L * z))),
          (p = k(a)),
          (T = B((a += z))),
          (V = k(a)),
          j.push(d - I * p, p + I * d, T + I * V, V - I * T, T, V);
      for (L = 0; L < j.length; L += 2)
        (d = j[L]),
          (p = j[L + 1]),
          (j[L] = d * H + p * Z + N),
          (j[L + 1] = d * Q + p * U + D);
      return (j[L - 2] = o), (j[L - 1] = h), j;
    }
  }
  function stringToRawPath(e) {
    function db(e, t, n, s) {
      (f = (n - e) / 3),
        (c = (s - t) / 3),
        o.push(e + f, t + c, n - f, s - c, n, s);
    }
    var t,
      n,
      s,
      a,
      r,
      i,
      o,
      h,
      u,
      f,
      c,
      l,
      g,
      m,
      x,
      d =
        (e + "")
          .replace(w, function (e) {
            var t = +e;
            return t < 1e-4 && -1e-4 < t ? 0 : t;
          })
          .match(b) || [],
      p = [],
      y = 0,
      M = 0,
      v = d.length,
      C = 0,
      E = "ERROR: malformed path: " + e;
    if (!e || !isNaN(d[0]) || isNaN(d[1])) return console.log(E), p;
    for (t = 0; t < v; t++)
      if (
        ((g = r),
        isNaN(d[t]) ? (i = (r = d[t].toUpperCase()) !== d[t]) : t--,
        (s = +d[t + 1]),
        (a = +d[t + 2]),
        i && ((s += y), (a += M)),
        t || ((h = s), (u = a)),
        "M" === r)
      )
        o && (o.length < 8 ? --p.length : (C += o.length)),
          (y = h = s),
          (M = u = a),
          (o = [s, a]),
          p.push(o),
          (t += 2),
          (r = "L");
      else if ("C" === r)
        i || (y = M = 0),
          (o = o || [0, 0]).push(
            s,
            a,
            y + 1 * d[t + 3],
            M + 1 * d[t + 4],
            (y += 1 * d[t + 5]),
            (M += 1 * d[t + 6])
          ),
          (t += 6);
      else if ("S" === r)
        (f = y),
          (c = M),
          ("C" !== g && "S" !== g) ||
            ((f += y - o[o.length - 4]), (c += M - o[o.length - 3])),
          i || (y = M = 0),
          o.push(f, c, s, a, (y += 1 * d[t + 3]), (M += 1 * d[t + 4])),
          (t += 4);
      else if ("Q" === r)
        (f = y + (2 / 3) * (s - y)),
          (c = M + (2 / 3) * (a - M)),
          i || (y = M = 0),
          (y += 1 * d[t + 3]),
          (M += 1 * d[t + 4]),
          o.push(f, c, y + (2 / 3) * (s - y), M + (2 / 3) * (a - M), y, M),
          (t += 4);
      else if ("T" === r)
        (f = y - o[o.length - 4]),
          (c = M - o[o.length - 3]),
          o.push(
            y + f,
            M + c,
            s + (2 / 3) * (y + 1.5 * f - s),
            a + (2 / 3) * (M + 1.5 * c - a),
            (y = s),
            (M = a)
          ),
          (t += 2);
      else if ("H" === r) db(y, M, (y = s), M), (t += 1);
      else if ("V" === r) db(y, M, y, (M = s + (i ? M - y : 0))), (t += 1);
      else if ("L" === r || "Z" === r)
        "Z" === r && ((s = h), (a = u), (o.closed = !0)),
          ("L" === r || 0.5 < F(y - s) || 0.5 < F(M - a)) &&
            (db(y, M, s, a), "L" === r && (t += 2)),
          (y = s),
          (M = a);
      else if ("A" === r) {
        if (
          ((m = d[t + 4]),
          (x = d[t + 5]),
          (f = d[t + 6]),
          (c = d[t + 7]),
          (n = 7),
          1 < m.length &&
            (m.length < 3
              ? ((c = f), (f = x), n--)
              : ((c = x), (f = m.substr(2)), (n -= 2)),
            (x = m.charAt(1)),
            (m = m.charAt(0))),
          (l = arcToSegment(
            y,
            M,
            +d[t + 1],
            +d[t + 2],
            +d[t + 3],
            +m,
            +x,
            (i ? y : 0) + 1 * f,
            (i ? M : 0) + 1 * c
          )),
          (t += n),
          l)
        )
          for (n = 0; n < l.length; n++) o.push(l[n]);
        (y = o[o.length - 2]), (M = o[o.length - 1]);
      } else console.log(E);
    return (
      (t = o.length) < 6
        ? (p.pop(), (t = 0))
        : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0),
      (p.totalPoints = C + t),
      p
    );
  }
  function p() {
    return (
      M ||
      ("undefined" != typeof window &&
        (M = window.gsap) &&
        M.registerPlugin &&
        M)
    );
  }
  function q() {
    (M = p())
      ? (M.registerEase("_CE", n.create), (a = 1))
      : console.warn("Please gsap.registerPlugin(CustomEase)");
  }
  function s(e) {
    return ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3;
  }
  function x(e, t, n, s, a, r, i, o, h, u, f) {
    var c,
      l = (e + n) / 2,
      g = (t + s) / 2,
      m = (n + a) / 2,
      d = (s + r) / 2,
      p = (a + i) / 2,
      y = (r + o) / 2,
      M = (l + m) / 2,
      v = (g + d) / 2,
      C = (m + p) / 2,
      E = (d + y) / 2,
      b = (M + C) / 2,
      w = (v + E) / 2,
      P = i - e,
      S = o - t,
      N = Math.abs((n - i) * S - (s - o) * P),
      D = Math.abs((a - i) * S - (r - o) * P);
    return (
      u ||
        ((u = [
          { x: e, y: t },
          { x: i, y: o },
        ]),
        (f = 1)),
      u.splice(f || u.length - 1, 0, { x: b, y: w }),
      h * (P * P + S * S) < (N + D) * (N + D) &&
        ((c = u.length),
        x(e, t, l, g, M, v, b, w, h, u, f),
        x(b, w, C, E, p, y, i, o, h, u, f + 1 + (u.length - c))),
      u
    );
  }
  var M,
    a,
    t,
    y = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    v = /[cLlsSaAhHvVtTqQ]/g,
    n =
      (((t = CustomEase.prototype).setData = function setData(e, t) {
        t = t || {};
        var n,
          s,
          a,
          r,
          i,
          o,
          h,
          u,
          f,
          c = (e = e || "0,0,1,1").match(y),
          l = 1,
          g = [],
          m = [],
          d = t.precision || 1,
          p = d <= 1;
        if (
          ((this.data = e),
          (v.test(e) || (~e.indexOf("M") && e.indexOf("C") < 0)) &&
            (c = stringToRawPath(e)[0]),
          4 === (n = c.length))
        )
          c.unshift(0, 0), c.push(1, 1), (n = 8);
        else if ((n - 2) % 6) throw "Invalid CustomEase";
        for (
          (0 == +c[0] && 1 == +c[n - 2]) ||
            (function _normalize(e, t, n) {
              n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
              var s,
                a = -1 * e[0],
                r = -n,
                i = e.length,
                o = 1 / (+e[i - 2] + a),
                h =
                  -t ||
                  (Math.abs(e[i - 1] - e[1]) < 0.01 * (e[i - 2] - e[0])
                    ? (function _findMinimum(e) {
                        var t,
                          n = e.length,
                          s = 1e20;
                        for (t = 1; t < n; t += 6) +e[t] < s && (s = +e[t]);
                        return s;
                      })(e) + r
                    : +e[i - 1] + r);
              for (h = h ? 1 / h : -o, s = 0; s < i; s += 2)
                (e[s] = (+e[s] + a) * o), (e[s + 1] = (+e[s + 1] + r) * h);
            })(c, t.height, t.originY),
            this.segment = c,
            r = 2;
          r < n;
          r += 6
        )
          (s = { x: +c[r - 2], y: +c[r - 1] }),
            (a = { x: +c[r + 4], y: +c[r + 5] }),
            g.push(s, a),
            x(
              s.x,
              s.y,
              +c[r],
              +c[r + 1],
              +c[r + 2],
              +c[r + 3],
              a.x,
              a.y,
              1 / (2e5 * d),
              g,
              g.length - 1
            );
        for (n = g.length, r = 0; r < n; r++)
          (h = g[r]),
            (u = g[r - 1] || h),
            h.x > u.x || (u.y !== h.y && u.x === h.x) || h === u
              ? ((u.cx = h.x - u.x),
                (u.cy = h.y - u.y),
                (u.n = h),
                (u.nx = h.x),
                p &&
                  1 < r &&
                  2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) &&
                  (p = 0),
                u.cx < l &&
                  (u.cx
                    ? (l = u.cx)
                    : ((u.cx = 0.001),
                      r === n - 1 &&
                        ((u.x -= 0.001), (l = Math.min(l, 0.001)), (p = 0)))))
              : (g.splice(r--, 1), n--);
        if (((i = 1 / (n = (1 / l + 1) | 0)), (h = g[(o = 0)]), p)) {
          for (r = 0; r < n; r++)
            (f = r * i),
              h.nx < f && (h = g[++o]),
              (s = h.y + ((f - h.x) / h.cx) * h.cy),
              (m[r] = { x: f, cx: i, y: s, cy: 0, nx: 9 }),
              r && (m[r - 1].cy = s - m[r - 1].y);
          m[n - 1].cy = g[g.length - 1].y - s;
        } else {
          for (r = 0; r < n; r++) h.nx < r * i && (h = g[++o]), (m[r] = h);
          o < g.length - 1 && (m[r - 1] = g[g.length - 2]);
        }
        return (
          (this.ease = function (e) {
            var t = m[(e * n) | 0] || m[n - 1];
            return t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy;
          }),
          (this.ease.custom = this).id && M.registerEase(this.id, this.ease),
          this
        );
      }),
      (t.getSVGData = function getSVGData(e) {
        return CustomEase.getSVGData(this, e);
      }),
      (CustomEase.create = function create(e, t, n) {
        return new CustomEase(e, t, n).ease;
      }),
      (CustomEase.register = function register(e) {
        (M = e), q();
      }),
      (CustomEase.get = function get(e) {
        return M.parseEase(e);
      }),
      (CustomEase.getSVGData = function getSVGData(e, t) {
        var n,
          a,
          r,
          i,
          o,
          h,
          u,
          f,
          c,
          l,
          g = (t = t || {}).width || 100,
          x = t.height || 100,
          d = t.x || 0,
          p = (t.y || 0) + x,
          y = M.utils.toArray(t.path)[0];
        if (
          (t.invert && ((x = -x), (p = 0)),
          "string" == typeof e && (e = M.parseEase(e)),
          e.custom && (e = e.custom),
          e instanceof CustomEase)
        )
          n = (function rawPathToString(e) {
            !(function _isNumber(e) {
              return "number" == typeof e;
            })(e[0]) || (e = [e]);
            var t,
              n,
              s,
              a,
              r = "",
              i = e.length;
            for (n = 0; n < i; n++) {
              for (
                a = e[n],
                  r += "M" + m(a[0]) + "," + m(a[1]) + " C",
                  t = a.length,
                  s = 2;
                s < t;
                s++
              )
                r +=
                  m(a[s++]) +
                  "," +
                  m(a[s++]) +
                  " " +
                  m(a[s++]) +
                  "," +
                  m(a[s++]) +
                  " " +
                  m(a[s++]) +
                  "," +
                  m(a[s]) +
                  " ";
              a.closed && (r += "z");
            }
            return r;
          })(
            (function transformRawPath(e, t, n, s, a, r, i) {
              for (var o, h, u, f, c, l = e.length; -1 < --l; )
                for (h = (o = e[l]).length, u = 0; u < h; u += 2)
                  (f = o[u]),
                    (c = o[u + 1]),
                    (o[u] = f * t + c * s + r),
                    (o[u + 1] = f * n + c * a + i);
              return (e._dirty = 1), e;
            })([e.segment], g, 0, 0, -x, d, p)
          );
        else {
          for (
            n = [d, p],
              i = 1 / (u = Math.max(5, 200 * (t.precision || 1))),
              f = 5 / (u += 2),
              c = s(d + i * g),
              a = ((l = s(p + e(i) * -x)) - p) / (c - d),
              r = 2;
            r < u;
            r++
          )
            (o = s(d + r * i * g)),
              (h = s(p + e(r * i) * -x)),
              (Math.abs((h - l) / (o - c) - a) > f || r === u - 1) &&
                (n.push(c, l), (a = (h - l) / (o - c))),
              (c = o),
              (l = h);
          n = "M" + n.join(",");
        }
        return y && y.setAttribute("d", n), n;
      }),
      CustomEase);
  function CustomEase(e, t, n) {
    a || q(), (this.id = e), this.setData(t, n);
  }
  p() && M.registerPlugin(n),
    (n.version = "3.1.1"),
    (e.CustomEase = n),
    (e.default = n);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
}); /*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.ScrollMagic = t());
})(this, function () {
  "use strict";
  var _ = function () {};
  (_.version = "2.0.7"), window.addEventListener("mousewheel", function () {});
  var P = "data-scrollmagic-pin-spacer";
  _.Controller = function (e) {
    var n,
      r,
      i = "REVERSE",
      t = "PAUSED",
      o = z.defaults,
      s = this,
      a = R.extend({}, o, e),
      l = [],
      c = !1,
      f = 0,
      u = t,
      d = !0,
      h = 0,
      p = !0,
      g = function () {
        0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval));
      },
      v = function () {
        return a.vertical
          ? R.get.scrollTop(a.container)
          : R.get.scrollLeft(a.container);
      },
      m = function () {
        return a.vertical
          ? R.get.height(a.container)
          : R.get.width(a.container);
      },
      w = (this._setScrollPos = function (e) {
        a.vertical
          ? d
            ? window.scrollTo(R.get.scrollLeft(), e)
            : (a.container.scrollTop = e)
          : d
          ? window.scrollTo(e, R.get.scrollTop())
          : (a.container.scrollLeft = e);
      }),
      y = function () {
        if (p && c) {
          var e = R.type.Array(c) ? c : l.slice(0);
          c = !1;
          var t = f,
            n = (f = s.scrollPos()) - t;
          0 !== n && (u = 0 < n ? "FORWARD" : i),
            u === i && e.reverse(),
            e.forEach(function (e, t) {
              e.update(!0);
            });
        }
      },
      S = function () {
        n = R.rAF(y);
      },
      b = function (e) {
        "resize" == e.type && ((h = m()), (u = t)), !0 !== c && ((c = !0), S());
      },
      E = function () {
        if (!d && h != m()) {
          var t;
          try {
            t = new Event("resize", { bubbles: !1, cancelable: !1 });
          } catch (e) {
            (t = document.createEvent("Event")).initEvent("resize", !1, !1);
          }
          a.container.dispatchEvent(t);
        }
        l.forEach(function (e, t) {
          e.refresh();
        }),
          g();
      };
    this._options = a;
    var x = function (e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return (
        t.sort(function (e, t) {
          return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
        }),
        t
      );
    };
    return (
      (this.addScene = function (e) {
        if (R.type.Array(e))
          e.forEach(function (e, t) {
            s.addScene(e);
          });
        else if (e instanceof _.Scene)
          if (e.controller() !== s) e.addTo(s);
          else if (l.indexOf(e) < 0)
            for (var t in (l.push(e),
            (l = x(l)),
            e.on("shift.controller_sort", function () {
              l = x(l);
            }),
            a.globalSceneOptions))
              e[t] && e[t].call(e, a.globalSceneOptions[t]);
        return s;
      }),
      (this.removeScene = function (e) {
        if (R.type.Array(e))
          e.forEach(function (e, t) {
            s.removeScene(e);
          });
        else {
          var t = l.indexOf(e);
          -1 < t &&
            (e.off("shift.controller_sort"), l.splice(t, 1), e.remove());
        }
        return s;
      }),
      (this.updateScene = function (e, n) {
        return (
          R.type.Array(e)
            ? e.forEach(function (e, t) {
                s.updateScene(e, n);
              })
            : n
            ? e.update(!0)
            : !0 !== c &&
              e instanceof _.Scene &&
              (-1 == (c = c || []).indexOf(e) && c.push(e), (c = x(c)), S()),
          s
        );
      }),
      (this.update = function (e) {
        return b({ type: "resize" }), e && y(), s;
      }),
      (this.scrollTo = function (e, t) {
        if (R.type.Number(e)) w.call(a.container, e, t);
        else if (e instanceof _.Scene)
          e.controller() === s && s.scrollTo(e.scrollOffset(), t);
        else if (R.type.Function(e)) w = e;
        else {
          var n = R.get.elements(e)[0];
          if (n) {
            for (; n.parentNode.hasAttribute(P); ) n = n.parentNode;
            var r = a.vertical ? "top" : "left",
              i = R.get.offset(a.container),
              o = R.get.offset(n);
            d || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t);
          }
        }
        return s;
      }),
      (this.scrollPos = function (e) {
        return arguments.length
          ? (R.type.Function(e) && (v = e), s)
          : v.call(s);
      }),
      (this.info = function (e) {
        var t = {
          size: h,
          vertical: a.vertical,
          scrollPos: f,
          scrollDirection: u,
          container: a.container,
          isDocument: d,
        };
        return arguments.length ? (void 0 !== t[e] ? t[e] : void 0) : t;
      }),
      (this.loglevel = function (e) {
        return s;
      }),
      (this.enabled = function (e) {
        return arguments.length
          ? (p != e && ((p = !!e), s.updateScene(l, !0)), s)
          : p;
      }),
      (this.destroy = function (e) {
        window.clearTimeout(r);
        for (var t = l.length; t--; ) l[t].destroy(e);
        return (
          a.container.removeEventListener("resize", b),
          a.container.removeEventListener("scroll", b),
          R.cAF(n),
          null
        );
      }),
      (function () {
        for (var e in a) o.hasOwnProperty(e) || delete a[e];
        if (((a.container = R.get.elements(a.container)[0]), !a.container))
          throw "ScrollMagic.Controller init failed.";
        (d =
          a.container === window ||
          a.container === document.body ||
          !document.body.contains(a.container)) && (a.container = window),
          (h = m()),
          a.container.addEventListener("resize", b),
          a.container.addEventListener("scroll", b);
        var t = parseInt(a.refreshInterval, 10);
        (a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval), g();
      })(),
      s
    );
  };
  var z = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100,
    },
  };
  (_.Controller.addOption = function (e, t) {
    z.defaults[e] = t;
  }),
    (_.Controller.extend = function (e) {
      var t = this;
      (_.Controller = function () {
        return (
          t.apply(this, arguments),
          (this.$super = R.extend({}, this)),
          e.apply(this, arguments) || this
        );
      }),
        R.extend(_.Controller, t),
        (_.Controller.prototype = t.prototype),
        (_.Controller.prototype.constructor = _.Controller);
    }),
    (_.Scene = function (e) {
      var n,
        l,
        c = "BEFORE",
        f = "DURING",
        u = "AFTER",
        r = D.defaults,
        d = this,
        h = R.extend({}, r, e),
        p = c,
        g = 0,
        a = { start: 0, end: 0 },
        v = 0,
        i = !0,
        s = {};
      (this.on = function (e, i) {
        return (
          R.type.Function(i) &&
            (e = e.trim().split(" ")).forEach(function (e) {
              var t = e.split("."),
                n = t[0],
                r = t[1];
              "*" != n &&
                (s[n] || (s[n] = []),
                s[n].push({ namespace: r || "", callback: i }));
            }),
          d
        );
      }),
        (this.off = function (e, o) {
          return (
            e &&
              (e = e.trim().split(" ")).forEach(function (e, t) {
                var n = e.split("."),
                  r = n[0],
                  i = n[1] || "";
                ("*" === r ? Object.keys(s) : [r]).forEach(function (e) {
                  for (var t = s[e] || [], n = t.length; n--; ) {
                    var r = t[n];
                    !r ||
                      (i !== r.namespace && "*" !== i) ||
                      (o && o != r.callback) ||
                      t.splice(n, 1);
                  }
                  t.length || delete s[e];
                });
              }),
            d
          );
        }),
        (this.trigger = function (e, n) {
          if (e) {
            var t = e.trim().split("."),
              r = t[0],
              i = t[1],
              o = s[r];
            o &&
              o.forEach(function (e, t) {
                (i && i !== e.namespace) ||
                  e.callback.call(d, new _.Event(r, e.namespace, d, n));
              });
          }
          return d;
        }),
        d
          .on("change.internal", function (e) {
            "loglevel" !== e.what &&
              "tweenChanges" !== e.what &&
              ("triggerElement" === e.what
                ? y()
                : "reverse" === e.what && d.update());
          })
          .on("shift.internal", function (e) {
            t(), d.update();
          }),
        (this.addTo = function (e) {
          return (
            e instanceof _.Controller &&
              l != e &&
              (l && l.removeScene(d),
              (l = e),
              E(),
              o(!0),
              y(!0),
              t(),
              l.info("container").addEventListener("resize", S),
              e.addScene(d),
              d.trigger("add", { controller: l }),
              d.update()),
            d
          );
        }),
        (this.enabled = function (e) {
          return arguments.length
            ? (i != e && ((i = !!e), d.update(!0)), d)
            : i;
        }),
        (this.remove = function () {
          if (l) {
            l.info("container").removeEventListener("resize", S);
            var e = l;
            (l = void 0), e.removeScene(d), d.trigger("remove");
          }
          return d;
        }),
        (this.destroy = function (e) {
          return (
            d.trigger("destroy", { reset: e }), d.remove(), d.off("*.*"), null
          );
        }),
        (this.update = function (e) {
          if (l)
            if (e)
              if (l.enabled() && i) {
                var t,
                  n = l.info("scrollPos");
                (t =
                  0 < h.duration
                    ? (n - a.start) / (a.end - a.start)
                    : n >= a.start
                    ? 1
                    : 0),
                  d.trigger("update", {
                    startPos: a.start,
                    endPos: a.end,
                    scrollPos: n,
                  }),
                  d.progress(t);
              } else m && p === f && C(!0);
            else l.updateScene(d, !1);
          return d;
        }),
        (this.refresh = function () {
          return o(), y(), d;
        }),
        (this.progress = function (e) {
          if (arguments.length) {
            var t = !1,
              n = p,
              r = l ? l.info("scrollDirection") : "PAUSED",
              i = h.reverse || g <= e;
            if (
              (0 === h.duration
                ? ((t = g != e), (p = 0 === (g = e < 1 && i ? 0 : 1) ? c : f))
                : e < 0 && p !== c && i
                ? ((p = c), (t = !(g = 0)))
                : 0 <= e && e < 1 && i
                ? ((g = e), (p = f), (t = !0))
                : 1 <= e && p !== u
                ? ((g = 1), (p = u), (t = !0))
                : p !== f || i || C(),
              t)
            ) {
              var o = { progress: g, state: p, scrollDirection: r },
                s = p != n,
                a = function (e) {
                  d.trigger(e, o);
                };
              s && n !== f && (a("enter"), a(n === c ? "start" : "end")),
                a("progress"),
                s && p !== f && (a(p === c ? "start" : "end"), a("leave"));
            }
            return d;
          }
          return g;
        });
      var m,
        w,
        t = function () {
          (a = { start: v + h.offset }),
            l &&
              h.triggerElement &&
              (a.start -= l.info("size") * h.triggerHook),
            (a.end = a.start + h.duration);
        },
        o = function (e) {
          if (n) {
            var t = "duration";
            x(t, n.call(d)) &&
              !e &&
              (d.trigger("change", { what: t, newval: h[t] }),
              d.trigger("shift", { reason: t }));
          }
        },
        y = function (e) {
          var t = 0,
            n = h.triggerElement;
          if (l && (n || 0 < v)) {
            if (n)
              if (n.parentNode) {
                for (
                  var r = l.info(),
                    i = R.get.offset(r.container),
                    o = r.vertical ? "top" : "left";
                  n.parentNode.hasAttribute(P);

                )
                  n = n.parentNode;
                var s = R.get.offset(n);
                r.isDocument || (i[o] -= l.scrollPos()), (t = s[o] - i[o]);
              } else d.triggerElement(void 0);
            var a = t != v;
            (v = t),
              a &&
                !e &&
                d.trigger("shift", { reason: "triggerElementPosition" });
          }
        },
        S = function (e) {
          0 < h.triggerHook &&
            d.trigger("shift", { reason: "containerResize" });
        },
        b = R.extend(D.validate, {
          duration: function (t) {
            if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
              var e = parseFloat(t) / 100;
              t = function () {
                return l ? l.info("size") * e : 0;
              };
            }
            if (R.type.Function(t)) {
              n = t;
              try {
                t = parseFloat(n.call(d));
              } catch (e) {
                t = -1;
              }
            }
            if (((t = parseFloat(t)), !R.type.Number(t) || t < 0))
              throw (n && (n = void 0), 0);
            return t;
          },
        }),
        E = function (e) {
          (e = arguments.length ? [e] : Object.keys(b)).forEach(function (
            t,
            e
          ) {
            var n;
            if (b[t])
              try {
                n = b[t](h[t]);
              } catch (e) {
                n = r[t];
              } finally {
                h[t] = n;
              }
          });
        },
        x = function (e, t) {
          var n = !1,
            r = h[e];
          return h[e] != t && ((h[e] = t), E(e), (n = r != h[e])), n;
        },
        z = function (t) {
          d[t] ||
            (d[t] = function (e) {
              return arguments.length
                ? ("duration" === t && (n = void 0),
                  x(t, e) &&
                    (d.trigger("change", { what: t, newval: h[t] }),
                    -1 < D.shifts.indexOf(t) &&
                      d.trigger("shift", { reason: t })),
                  d)
                : h[t];
            });
        };
      (this.controller = function () {
        return l;
      }),
        (this.state = function () {
          return p;
        }),
        (this.scrollOffset = function () {
          return a.start;
        }),
        (this.triggerPosition = function () {
          var e = h.offset;
          return (
            l &&
              (h.triggerElement
                ? (e += v)
                : (e += l.info("size") * d.triggerHook())),
            e
          );
        }),
        d
          .on("shift.internal", function (e) {
            var t = "duration" === e.reason;
            ((p === u && t) || (p === f && 0 === h.duration)) && C(), t && F();
          })
          .on("progress.internal", function (e) {
            C();
          })
          .on("add.internal", function (e) {
            F();
          })
          .on("destroy.internal", function (e) {
            d.removePin(e.reset);
          });
      var C = function (e) {
          if (m && l) {
            var t = l.info(),
              n = w.spacer.firstChild;
            if (e || p !== f) {
              var r = {
                  position: w.inFlow ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                },
                i = R.css(n, "position") != r.position;
              w.pushFollowers
                ? 0 < h.duration &&
                  (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top"))
                    ? (i = !0)
                    : p === c &&
                      0 === parseFloat(R.css(w.spacer, "padding-bottom")) &&
                      (i = !0))
                : (r[t.vertical ? "top" : "left"] = h.duration * g),
                R.css(n, r),
                i && F();
            } else {
              "fixed" != R.css(n, "position") &&
                (R.css(n, { position: "fixed" }), F());
              var o = R.get.offset(w.spacer, !0),
                s =
                  h.reverse || 0 === h.duration
                    ? t.scrollPos - a.start
                    : Math.round(g * h.duration * 10) / 10;
              (o[t.vertical ? "top" : "left"] += s),
                R.css(w.spacer.firstChild, { top: o.top, left: o.left });
            }
          }
        },
        F = function () {
          if (m && l && w.inFlow) {
            var e = p === f,
              t = l.info("vertical"),
              n = w.spacer.firstChild,
              r = R.isMarginCollapseType(R.css(w.spacer, "display")),
              i = {};
            w.relSize.width || w.relSize.autoFullWidth
              ? e
                ? R.css(m, { width: R.get.width(w.spacer) })
                : R.css(m, { width: "100%" })
              : ((i["min-width"] = R.get.width(t ? m : n, !0, !0)),
                (i.width = e ? i["min-width"] : "auto")),
              w.relSize.height
                ? e
                  ? R.css(m, {
                      height:
                        R.get.height(w.spacer) -
                        (w.pushFollowers ? h.duration : 0),
                    })
                  : R.css(m, { height: "100%" })
                : ((i["min-height"] = R.get.height(t ? n : m, !0, !r)),
                  (i.height = e ? i["min-height"] : "auto")),
              w.pushFollowers &&
                ((i["padding" + (t ? "Top" : "Left")] = h.duration * g),
                (i["padding" + (t ? "Bottom" : "Right")] =
                  h.duration * (1 - g))),
              R.css(w.spacer, i);
          }
        },
        L = function () {
          l && m && p === f && !l.info("isDocument") && C();
        },
        T = function () {
          l &&
            m &&
            p === f &&
            (((w.relSize.width || w.relSize.autoFullWidth) &&
              R.get.width(window) != R.get.width(w.spacer.parentNode)) ||
              (w.relSize.height &&
                R.get.height(window) != R.get.height(w.spacer.parentNode))) &&
            F();
        },
        A = function (e) {
          l &&
            m &&
            p === f &&
            !l.info("isDocument") &&
            (e.preventDefault(),
            l._setScrollPos(
              l.info("scrollPos") -
                ((e.wheelDelta ||
                  e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 ||
                  30 * -e.detail)
            ));
        };
      (this.setPin = function (e, t) {
        if (
          ((t = R.extend(
            {},
            { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" },
            t
          )),
          !(e = R.get.elements(e)[0]))
        )
          return d;
        if ("fixed" === R.css(e, "position")) return d;
        if (m) {
          if (m === e) return d;
          d.removePin();
        }
        var n = (m = e).parentNode.style.display,
          r = [
            "top",
            "left",
            "bottom",
            "right",
            "margin",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
          ];
        m.parentNode.style.display = "none";
        var i = "absolute" != R.css(m, "position"),
          o = R.css(m, r.concat(["display"])),
          s = R.css(m, ["width", "height"]);
        (m.parentNode.style.display = n),
          !i && t.pushFollowers && (t.pushFollowers = !1);
        var a = m.parentNode.insertBefore(document.createElement("div"), m),
          l = R.extend(o, {
            position: i ? "relative" : "absolute",
            boxSizing: "content-box",
            mozBoxSizing: "content-box",
            webkitBoxSizing: "content-box",
          });
        if (
          (i || R.extend(l, R.css(m, ["width", "height"])),
          R.css(a, l),
          a.setAttribute(P, ""),
          R.addClass(a, t.spacerClass),
          (w = {
            spacer: a,
            relSize: {
              width: "%" === s.width.slice(-1),
              height: "%" === s.height.slice(-1),
              autoFullWidth:
                "auto" === s.width && i && R.isMarginCollapseType(o.display),
            },
            pushFollowers: t.pushFollowers,
            inFlow: i,
          }),
          !m.___origStyle)
        ) {
          m.___origStyle = {};
          var c = m.style;
          r.concat([
            "width",
            "height",
            "position",
            "boxSizing",
            "mozBoxSizing",
            "webkitBoxSizing",
          ]).forEach(function (e) {
            m.___origStyle[e] = c[e] || "";
          });
        }
        return (
          w.relSize.width && R.css(a, { width: s.width }),
          w.relSize.height && R.css(a, { height: s.height }),
          a.appendChild(m),
          R.css(m, {
            position: i ? "relative" : "absolute",
            margin: "auto",
            top: "auto",
            left: "auto",
            bottom: "auto",
            right: "auto",
          }),
          (w.relSize.width || w.relSize.autoFullWidth) &&
            R.css(m, {
              boxSizing: "border-box",
              mozBoxSizing: "border-box",
              webkitBoxSizing: "border-box",
            }),
          window.addEventListener("scroll", L),
          window.addEventListener("resize", L),
          window.addEventListener("resize", T),
          m.addEventListener("mousewheel", A),
          m.addEventListener("DOMMouseScroll", A),
          C(),
          d
        );
      }),
        (this.removePin = function (e) {
          if (m) {
            if ((p === f && C(!0), e || !l)) {
              var t = w.spacer.firstChild;
              if (t.hasAttribute(P)) {
                var n = w.spacer.style,
                  r = {};
                [
                  "margin",
                  "marginLeft",
                  "marginRight",
                  "marginTop",
                  "marginBottom",
                ].forEach(function (e) {
                  r[e] = n[e] || "";
                }),
                  R.css(t, r);
              }
              w.spacer.parentNode.insertBefore(t, w.spacer),
                w.spacer.parentNode.removeChild(w.spacer),
                m.parentNode.hasAttribute(P) ||
                  (R.css(m, m.___origStyle), delete m.___origStyle);
            }
            window.removeEventListener("scroll", L),
              window.removeEventListener("resize", L),
              window.removeEventListener("resize", T),
              m.removeEventListener("mousewheel", A),
              m.removeEventListener("DOMMouseScroll", A),
              (m = void 0);
          }
          return d;
        });
      var N,
        O = [];
      return (
        d.on("destroy.internal", function (e) {
          d.removeClassToggle(e.reset);
        }),
        (this.setClassToggle = function (e, t) {
          var n = R.get.elements(e);
          return (
            0 !== n.length &&
              R.type.String(t) &&
              (0 < O.length && d.removeClassToggle(),
              (N = t),
              (O = n),
              d.on("enter.internal_class leave.internal_class", function (e) {
                var n = "enter" === e.type ? R.addClass : R.removeClass;
                O.forEach(function (e, t) {
                  n(e, N);
                });
              })),
            d
          );
        }),
        (this.removeClassToggle = function (e) {
          return (
            e &&
              O.forEach(function (e, t) {
                R.removeClass(e, N);
              }),
            d.off("start.internal_class end.internal_class"),
            (N = void 0),
            (O = []),
            d
          );
        }),
        (function () {
          for (var e in h) r.hasOwnProperty(e) || delete h[e];
          for (var t in r) z(t);
          E();
        })(),
        d
      );
    });
  var D = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: 0.5,
      reverse: !0,
      loglevel: 2,
    },
    validate: {
      offset: function (e) {
        if (((e = parseFloat(e)), !R.type.Number(e))) throw 0;
        return e;
      },
      triggerElement: function (e) {
        if ((e = e || void 0)) {
          var t = R.get.elements(e)[0];
          if (!t || !t.parentNode) throw 0;
          e = t;
        }
        return e;
      },
      triggerHook: function (e) {
        var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
        if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
        else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function (e) {
        return !!e;
      },
    },
    shifts: ["duration", "offset", "triggerHook"],
  };
  (_.Scene.addOption = function (e, t, n, r) {
    e in D.defaults ||
      ((D.defaults[e] = t), (D.validate[e] = n), r && D.shifts.push(e));
  }),
    (_.Scene.extend = function (e) {
      var t = this;
      (_.Scene = function () {
        return (
          t.apply(this, arguments),
          (this.$super = R.extend({}, this)),
          e.apply(this, arguments) || this
        );
      }),
        R.extend(_.Scene, t),
        (_.Scene.prototype = t.prototype),
        (_.Scene.prototype.constructor = _.Scene);
    }),
    (_.Event = function (e, t, n, r) {
      for (var i in (r = r || {})) this[i] = r[i];
      return (
        (this.type = e),
        (this.target = this.currentTarget = n),
        (this.namespace = t || ""),
        (this.timeStamp = this.timestamp = Date.now()),
        this
      );
    });
  var R = (_._util = (function (s) {
    var n,
      e = {},
      a = function (e) {
        return parseFloat(e) || 0;
      },
      l = function (e) {
        return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
      },
      r = function (e, t, n, r) {
        if ((t = t === document ? s : t) === s) r = !1;
        else if (!u.DomElement(t)) return 0;
        e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        var i =
          (n
            ? t["offset" + e] || t["outer" + e]
            : t["client" + e] || t["inner" + e]) || 0;
        if (n && r) {
          var o = l(t);
          i +=
            "Height" === e
              ? a(o.marginTop) + a(o.marginBottom)
              : a(o.marginLeft) + a(o.marginRight);
        }
        return i;
      },
      c = function (e) {
        return e
          .replace(/^[^a-z]+([a-z])/g, "$1")
          .replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          });
      };
    (e.extend = function (e) {
      for (e = e || {}, n = 1; n < arguments.length; n++)
        if (arguments[n])
          for (var t in arguments[n])
            arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
      return e;
    }),
      (e.isMarginCollapseType = function (e) {
        return (
          -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
        );
      });
    var i = 0,
      t = ["ms", "moz", "webkit", "o"],
      o = s.requestAnimationFrame,
      f = s.cancelAnimationFrame;
    for (n = 0; !o && n < 4; ++n)
      (o = s[t[n] + "RequestAnimationFrame"]),
        (f =
          s[t[n] + "CancelAnimationFrame"] ||
          s[t[n] + "CancelRequestAnimationFrame"]);
    o ||
      (o = function (e) {
        var t = new Date().getTime(),
          n = Math.max(0, 16 - (t - i)),
          r = s.setTimeout(function () {
            e(t + n);
          }, n);
        return (i = t + n), r;
      }),
      f ||
        (f = function (e) {
          s.clearTimeout(e);
        }),
      (e.rAF = o.bind(s)),
      (e.cAF = f.bind(s));
    var u = (e.type = function (e) {
      return Object.prototype.toString
        .call(e)
        .replace(/^\[object (.+)\]$/, "$1")
        .toLowerCase();
    });
    (u.String = function (e) {
      return "string" === u(e);
    }),
      (u.Function = function (e) {
        return "function" === u(e);
      }),
      (u.Array = function (e) {
        return Array.isArray(e);
      }),
      (u.Number = function (e) {
        return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
      }),
      (u.DomElement = function (e) {
        return "object" == typeof HTMLElement ||
          "function" == typeof HTMLElement
          ? e instanceof HTMLElement || e instanceof SVGElement
          : e &&
              "object" == typeof e &&
              null !== e &&
              1 === e.nodeType &&
              "string" == typeof e.nodeName;
      });
    var d = (e.get = {});
    return (
      (d.elements = function (e) {
        var t = [];
        if (u.String(e))
          try {
            e = document.querySelectorAll(e);
          } catch (e) {
            return t;
          }
        if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList)
          for (var n = 0, r = (t.length = e.length); n < r; n++) {
            var i = e[n];
            t[n] = u.DomElement(i) ? i : d.elements(i);
          }
        else (u.DomElement(e) || e === document || e === s) && (t = [e]);
        return t;
      }),
      (d.scrollTop = function (e) {
        return e && "number" == typeof e.scrollTop
          ? e.scrollTop
          : s.pageYOffset || 0;
      }),
      (d.scrollLeft = function (e) {
        return e && "number" == typeof e.scrollLeft
          ? e.scrollLeft
          : s.pageXOffset || 0;
      }),
      (d.width = function (e, t, n) {
        return r("width", e, t, n);
      }),
      (d.height = function (e, t, n) {
        return r("height", e, t, n);
      }),
      (d.offset = function (e, t) {
        var n = { top: 0, left: 0 };
        if (e && e.getBoundingClientRect) {
          var r = e.getBoundingClientRect();
          (n.top = r.top),
            (n.left = r.left),
            t || ((n.top += d.scrollTop()), (n.left += d.scrollLeft()));
        }
        return n;
      }),
      (e.addClass = function (e, t) {
        t && (e.classList ? e.classList.add(t) : (e.className += " " + t));
      }),
      (e.removeClass = function (e, t) {
        t &&
          (e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
              )));
      }),
      (e.css = function (e, t) {
        if (u.String(t)) return l(e)[c(t)];
        if (u.Array(t)) {
          var n = {},
            r = l(e);
          return (
            t.forEach(function (e, t) {
              n[e] = r[c(e)];
            }),
            n
          );
        }
        for (var i in t) {
          var o = t[i];
          o == parseFloat(o) && (o += "px"), (e.style[c(i)] = o);
        }
      }),
      e
    );
  })(window || {}));
  return _;
}); /*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, n) {
  "function" == typeof define && define.amd
    ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n)
    : "object" == typeof exports
    ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax))
    : n(
        e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic),
        e.TweenMax || e.TweenLite,
        e.TimelineMax || e.TimelineLite
      );
})(this, function (e, s, u) {
  "use strict";
  e.Scene.addOption("tweenChanges", !1, function (e) {
    return !!e;
  }),
    e.Scene.extend(function () {
      var i,
        o = this;
      o.on("progress.plugin_gsap", function () {
        a();
      }),
        o.on("destroy.plugin_gsap", function (e) {
          o.removeTween(e.reset);
        });
      var a = function () {
        if (i) {
          var e = o.progress(),
            n = o.state();
          i.repeat && -1 === i.repeat()
            ? "DURING" === n && i.paused()
              ? i.play()
              : "DURING" === n || i.paused() || i.pause()
            : e != i.progress() &&
              (0 === o.duration()
                ? 0 < e
                  ? i.play()
                  : i.reverse()
                : o.tweenChanges() && i.tweenTo
                ? i.tweenTo(e * i.duration())
                : i.progress(e).pause());
        }
      };
      (o.setTween = function (e, n, r) {
        var t;
        1 < arguments.length &&
          (arguments.length < 3 && ((r = n), (n = 1)), (e = s.to(e, n, r)));
        try {
          (t = u ? new u({ smoothChildTiming: !0 }).add(e) : e).pause();
        } catch (e) {
          return o;
        }
        return (
          i && o.removeTween(),
          (i = t),
          e.repeat && -1 === e.repeat() && (i.repeat(-1), i.yoyo(e.yoyo())),
          a(),
          o
        );
      }),
        (o.removeTween = function (e) {
          return i && (e && i.progress(0).pause(), i.kill(), (i = void 0)), o;
        });
    });
});
/*!
 * hoverIntent v1.10.0 // 2019.02.25 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2019 Brian Cherne
 */
(function (factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  "use strict";
  var _cfg = { interval: 100, sensitivity: 6, timeout: 0 };
  var INSTANCE_COUNT = 0;
  var cX, cY;
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };
  var compare = function (ev, $el, s, cfg) {
    if (
      Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) <
      cfg.sensitivity
    ) {
      $el.off(s.event, track);
      delete s.timeoutId;
      s.isActive = !0;
      ev.pageX = cX;
      ev.pageY = cY;
      delete s.pX;
      delete s.pY;
      return cfg.over.apply($el[0], [ev]);
    } else {
      s.pX = cX;
      s.pY = cY;
      s.timeoutId = setTimeout(function () {
        compare(ev, $el, s, cfg);
      }, cfg.interval);
    }
  };
  var delay = function (ev, $el, s, out) {
    var data = $el.data("hoverIntent");
    if (data) {
      delete data[s.id];
    }
    return out.apply($el[0], [ev]);
  };
  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    var instanceId = INSTANCE_COUNT++;
    var cfg = $.extend({}, _cfg);
    if ($.isPlainObject(handlerIn)) {
      cfg = $.extend(cfg, handlerIn);
      if (!$.isFunction(cfg.out)) {
        cfg.out = cfg.over;
      }
    } else if ($.isFunction(handlerOut)) {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerOut,
        selector: selector,
      });
    } else {
      cfg = $.extend(cfg, {
        over: handlerIn,
        out: handlerIn,
        selector: handlerOut,
      });
    }
    var handleHover = function (e) {
      var ev = $.extend({}, e);
      var $el = $(this);
      var hoverIntentData = $el.data("hoverIntent");
      if (!hoverIntentData) {
        $el.data("hoverIntent", (hoverIntentData = {}));
      }
      var state = hoverIntentData[instanceId];
      if (!state) {
        hoverIntentData[instanceId] = state = { id: instanceId };
      }
      if (state.timeoutId) {
        state.timeoutId = clearTimeout(state.timeoutId);
      }
      var mousemove = (state.event =
        "mousemove.hoverIntent.hoverIntent" + instanceId);
      if (e.type === "mouseenter") {
        if (state.isActive) {
          return;
        }
        state.pX = ev.pageX;
        state.pY = ev.pageY;
        $el.off(mousemove, track).on(mousemove, track);
        state.timeoutId = setTimeout(function () {
          compare(ev, $el, state, cfg);
        }, cfg.interval);
      } else {
        if (!state.isActive) {
          return;
        }
        $el.off(mousemove, track);
        state.timeoutId = setTimeout(function () {
          delay(ev, $el, state, cfg.out);
        }, cfg.timeout);
      }
    };
    return this.on(
      {
        "mouseenter.hoverIntent": handleHover,
        "mouseleave.hoverIntent": handleHover,
      },
      cfg.selector
    );
  };
});
var controller = new ScrollMagic.Controller();
$(function () {
  gsap.config({ autoSleep: 60, nullTargetWarn: !1 });
  jQuery(".fadein-content .button").wrap(
    "<div class='gsapfadeinbtn inline' />"
  );
  jQuery(".hero-section-text .button").wrap(
    "<div class='gsapfadeinbtn inline' />"
  );
  gsap.fromTo(
    "#avion",
    { autoAlpha: 1, x: "-50vw", y: 100 },
    {
      x: "150vw",
      y: 0,
      duration: 16,
      delay: 8,
      ease: "power4",
      repeat: -1,
      repeatDelay: 60,
    }
  );
  if ($("body").hasClass("home")) {
  } else {
    gsap.to(
      ".cta_button_bottom",
      { duration: 1, autoAlpha: 1, ease: "back" },
      2.5
    );
  }
  if ($("body").hasClass("single-trabajos")) {
  } else {
    $(".hero-section-container").each(function (i) {
      gsap.set(this, { autoAlpha: 1 });
      var title = $(this).find("h1,h2,h3,h4,h5");
      var subheader = $(this).find(".subheader");
      var paragraph = $(this).find("p:not(.subheader)");
      var button = $(this).find(".gsapfadeinbtn");
      var bg = $(this).find(".hero_bg");
      var tl = gsap.timeline();
      tl.from(subheader, { duration: 1, y: 20, opacity: 0, ease: "expo" }, 0.4);
      tl.from(title, { duration: 1, y: 20, opacity: 0, ease: "expo" }, 0.8);
      tl.from(
        paragraph,
        { duration: 2, opacity: 0, stagger: 0.2, ease: "expo", force3D: !0 },
        1.2
      );
      tl.from(
        button,
        { duration: 2, opacity: 0, stagger: 0.2, ease: "expo", force3D: !0 },
        2.5
      );
      new ScrollMagic.Scene({ triggerElement: this, offset: 50 })
        .setTween(tl)
        .addTo(controller);
    });
  }
  var tl = gsap.timeline({ repeat: 30, repeatDelay: 3 });
  var time = "0.1";
  tl.to(".emoji-ctr", { duration: time, rotation: 40, scale: 1, ease: "sine" });
  tl.to(".emoji-ctr", {
    duration: time,
    rotation: 20,
    scale: 1.5,
    ease: "sine",
  });
  tl.to(".emoji-ctr", { duration: time, rotation: 40, ease: "sine" });
  tl.to(".emoji-ctr", { duration: time, rotation: 40, ease: "sine" });
  tl.to(".emoji-ctr", { duration: time, rotation: 20, ease: "sine" });
  tl.to(".emoji-ctr", { duration: time, rotation: 0, scale: 1, ease: "sine" });
  $(function () {
    var $burger = $(".burger");
    var $bars = $(".burger-svg__bars");
    var $bar = $(".burger-svg__bar");
    var $bar1 = $(".burger-svg__bar-1");
    var $bar2 = $(".burger-svg__bar-2");
    var $bar3 = $(".burger-svg__bar-3");
    var isChangingState = !1;
    var isOpen = !1;
    var burgerTL = gsap.timeline();
    function burgerOver() {
      if (!isChangingState) {
        burgerTL.clear();
        if (!isOpen) {
          burgerTL
            .to($bar1, 0.5, { y: -2, ease: Elastic.easeOut })
            .to(
              $bar2,
              0.5,
              {
                scaleX: 0.6,
                ease: Elastic.easeOut,
                transformOrigin: "50% 50%",
              },
              "-=0.5"
            )
            .to($bar3, 0.5, { y: 2, ease: Elastic.easeOut }, "-=0.5");
        } else {
          burgerTL
            .to($bar1, 0.5, { scaleX: 1.2, ease: Elastic.easeOut })
            .to($bar3, 0.5, { scaleX: 1.2, ease: Elastic.easeOut }, "-=0.5");
        }
      }
    }
    function burgerOut() {
      if (!isChangingState) {
        burgerTL.clear();
        if (!isOpen) {
          burgerTL
            .to($bar1, 0.5, { y: 0, ease: Elastic.easeOut })
            .to(
              $bar2,
              0.5,
              { scaleX: 1, ease: Elastic.easeOut, transformOrigin: "50% 50%" },
              "-=0.5"
            )
            .to($bar3, 0.5, { y: 0, ease: Elastic.easeOut }, "-=0.5");
        } else {
          burgerTL
            .to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut })
            .to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.5");
        }
      }
    }
    function showCloseBurger() {
      burgerTL.clear();
      burgerTL
        .to($bar1, 0.3, { y: 6, ease: Power4.easeIn })
        .to($bar2, 0.3, { scaleX: 1, ease: Power4.easeIn }, "-=0.3")
        .to($bar3, 0.3, { y: -6, ease: Power4.easeIn }, "-=0.3")
        .to($bar1, 0.5, {
          rotation: 45,
          ease: Elastic.easeOut,
          transformOrigin: "50% 50%",
        })
        .set($bar2, { opacity: 0, immediateRender: !1 }, "-=0.5")
        .to(
          $bar3,
          0.5,
          {
            rotation: -45,
            ease: Elastic.easeOut,
            transformOrigin: "50% 50%",
            onComplete: function () {
              isChangingState = !1;
              isOpen = !0;
            },
          },
          "-=0.5"
        );
    }
    function showOpenBurger() {
      burgerTL.clear();
      burgerTL
        .to($bar1, 0.3, { scaleX: 0, ease: Back.easeIn })
        .to($bar3, 0.3, { scaleX: 0, ease: Back.easeIn }, "-=0.3")
        .set($bar1, { rotation: 0, y: 0 })
        .set($bar2, { scaleX: 0, opacity: 1 })
        .set($bar3, { rotation: 0, y: 0 })
        .to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut })
        .to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.4")
        .to(
          $bar3,
          0.5,
          {
            scaleX: 1,
            ease: Elastic.easeOut,
            onComplete: function () {
              isChangingState = !1;
              isOpen = !1;
            },
          },
          "-=0.5"
        );
    }
    $burger.on("click", function (e) {
      if (!isChangingState) {
        isChangingState = !0;
        if (!isOpen) {
          showCloseBurger();
          gsapNavShow();
        } else {
          showOpenBurger();
          gsapNavHide();
        }
      }
      if (Foundation.MediaQuery.is("small only")) {
        $(".header.contrast-on-scroll").removeClass("go_dark");
      }
    });
    $burger.hover(burgerOver, burgerOut);
    let menu = !1;
    gsapNavHide();
    function gsapNavHide() {
      gsap.to(".main-nav > li", {
        duration: 1,
        opacity: 0,
        y: -100,
        stagger: 0.05,
        ease: "expo",
        force3D: !0,
      });
      menu = !0;
    }
    function gsapNavShow() {
      $(".main-nav-container.hide-on-init").removeClass("hide-on-init");
      gsap.to(".main-nav > li", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "expo",
        force3D: !0,
      });
      menu = !1;
    }
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("header.header").outerHeight();
    $(window).scroll(function (event) {
      didScroll = !0;
    });
    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = !1;
      }
    }, 250);
    function hasScrolled() {
      if (Foundation.MediaQuery.is("medium")) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && st > navbarHeight) {
          if (isOpen) {
            gsapNavHide();
            showOpenBurger();
            isOpen = !1;
            isChangingState = !1;
          }
        } else {
          if (st + $(window).height() < $(document).height()) {
            if (!isChangingState) {
              isChangingState = !0;
              if (!isOpen) {
                gsapNavShow();
                showCloseBurger();
                isOpen = !0;
                isChangingState = !1;
              }
            }
          }
        }
        lastScrollTop = st;
      }
    }
  });
  $(".global-in").each(function (i) {
    var item = $(this);
    var tl = new gsap.timeline();
    tl.from(item, { duration: 1, scale: 0, autoAlpha: 0, ease: "back" });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      offset: -100,
      reverse: !1,
    })
      .setTween(tl)
      .addTo(controller);
  });
  $(".thisIn").each(function (i) {
    var item = $(this);
    var tl = new gsap.timeline();
    tl.from(item, { duration: 3, autoAlpha: 0, ease: "expo" });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      offset: 200,
      reverse: !1,
    })
      .setTween(tl)
      .addTo(controller);
  });
  $(".fadein-content").each(function (i) {
    var title = $(this).find("h1,h2,h3,h4,h5");
    var subheader = $(this).find(".subheader,.compact");
    var paragraph = $(this).find("p:not(.subheader,.compact)");
    var image = $(this).find("img");
    var button = $(this).find(".gsapfadeinbtn");
    var list_item = $(this).find("li");
    TitleCharsIn = new SplitText(title, { type: "words,chars" });
    TitleCharsIn_chars = TitleCharsIn.chars;
    paragraphCharsIn = new SplitText(paragraph, { type: "words,chars" });
    paragraphCharsIn_words = paragraphCharsIn.words;
    subheaderCharsIn = new SplitText(subheader, { type: "words,chars" });
    subheaderCharsIn_chars = subheaderCharsIn.chars;
    var tl = gsap.timeline();
    tl.from(subheaderCharsIn_chars, {
      duration: 0.5,
      autoAlpha: 0,
      scale: 2,
      x: 0,
      rotationX: 0,
      ease: "back",
      stagger: 0.015,
    });
    tl.from(
      TitleCharsIn_chars,
      {
        duration: 1,
        autoAlpha: 0,
        scale: 2,
        x: 0,
        rotationX: 0,
        ease: "back",
        stagger: 0.05,
      },
      "-=0.2"
    );
    tl.from(
      paragraphCharsIn_words,
      {
        duration: 0.5,
        autoAlpha: 0,
        scale: 1,
        y: 30,
        ease: "expo",
        stagger: 0.02,
      },
      "-=1"
    );
    tl.from(
      list_item,
      {
        duration: 1,
        y: -20,
        opacity: 0,
        stagger: 0.02,
        ease: "expo",
        force3D: !0,
      },
      "-=0.5"
    );
    tl.from(button, { duration: 1, y: -10, opacity: 0 }, "-=1");
    new ScrollMagic.Scene({ triggerElement: this, reverse: !1, offset: 0 })
      .setTween(tl)
      .addTo(controller);
  });
  $(".fadein-content-simple").each(function (i) {
    var title = $(this).find("h1,h2");
    var texts = $(this).find("p,li,h3,h4,h5");
    var button = $(this).find(".gsapfadeinbtn");
    var image = $(this).find("img,video");
    TitleCharsIn = new SplitText(title, { type: "words,chars" });
    TitleCharsIn_chars = TitleCharsIn.chars;
    var tl = gsap.timeline();
    tl.from(TitleCharsIn_chars, {
      duration: 1,
      autoAlpha: 0,
      scale: 2,
      x: 0,
      rotationX: 0,
      ease: "back",
      stagger: 0.05,
    });
    tl.from(
      texts,
      {
        duration: 1,
        y: 40,
        opacity: 0,
        stagger: 0.02,
        ease: "expo",
        force3D: !0,
      },
      "-=1"
    );
    tl.from(image, { duration: 0.5, y: 40, opacity: 0, ease: "back" });
    tl.from(button, {
      duration: 0.5,
      opacity: 0,
      y: 80,
      stagger: 0.2,
      ease: "expo",
      force3D: !0,
    });
    new ScrollMagic.Scene({ triggerElement: this, reverse: !1, offset: -200 })
      .setTween(tl)
      .addTo(controller);
  });
  $(".textInByChar").each(function (i) {
    var tl = gsap.timeline(),
      mySplitText = new SplitText(this, { type: "words,chars" }),
      chars = mySplitText.chars;
    tl.from(chars, {
      duration: 0.8,
      autoAlpha: 0,
      scale: 2,
      x: 0,
      rotationX: 0,
      ease: "back",
      stagger: 0.05,
    });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      offset: 200,
      reverse: !1,
    })
      .setTween(tl)
      .addTo(controller);
  });
  $(".textInByWord").each(function (i) {
    var tl = gsap.timeline(),
      mySplitText = new SplitText(this, { type: "words" }),
      words = mySplitText.words;
    tl.from(words, {
      duration: 1,
      autoAlpha: 0,
      scale: 1,
      y: 30,
      ease: "expo",
      stagger: 0.02,
    });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      offset: 0,
      reverse: !1,
    })
      .setTween(tl)
      .addTo(controller);
  });
  $(".button.btn_motion_line").hover(
    function () {
      var width = $(this).find(".button-text").width() + 10;
      gsap.to($(this).find(".button-line"), {
        duration: 0.3,
        width: 200,
        ease: "expo",
      });
      gsap.to($(this).find(".button-text"), {
        duration: 0.3,
        x: -76,
        delay: 0.25,
        ease: "expo",
      });
      gsap.to($(this).find(".button-line"), {
        duration: 0.3,
        width: 65,
        x: width,
        delay: 0.25,
        ease: "expo",
      });
      $(this).addClass("isHover");
    },
    function () {
      gsap.to($(this).find(".button-line"), {
        duration: 0.5,
        width: 65,
        x: 0,
        ease: "expo",
      });
      gsap.to($(this).find(".button-text"), {
        duration: 0.5,
        x: 0,
        ease: "expo",
      });
      $(this).removeClass("isHover");
    }
  );
  $(window).bind("scroll", function (e) {
    parallaxScroll();
  });
  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $(".parallax").css("top", 0 - scrolled * 0.1 + "px");
  }
  var scene = new ScrollMagic.Scene({ triggerElement: "#footer", offset: -200 })
    .setTween("#letstalk_btn", {
      duration: 0.5,
      scale: 0.8,
      autoAlpha: 0,
      ease: "power4",
    })
    .addTo(controller);
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (
      $("body").hasClass("page-flexible") ||
      $("body").hasClass("mantenimiento-contratar")
    ) {
      var heroHeight = $(".hero-section-container").outerHeight();
      new ScrollMagic.Scene({
        triggerElement: ".hero-section-container",
        triggerHook: "onLeave",
        offset: heroHeight,
      })
        .on("start", function () {
          $(".header.contrast-on-scroll").addClass("go_dark");
        })
        .addTo(controller);
      if ($(".flex-cta").length) {
        new ScrollMagic.Scene({ triggerElement: ".flex-cta", offset: 300 })
          .on("start", function () {
            $(".header.contrast-on-scroll").removeClass("go_dark");
          })
          .addTo(controller);
      }
      if (scroll >= 0) {
        $(".header.contrast-on-scroll").removeClass("go_dark");
      } else {
      }
    }
  });
});
var controller = new ScrollMagic.Controller();
$(function () {
  var gradientBG = $(".gradient-background");
  var spotBG = $(".bg_focus");
  var gradientBG_1 =
    "";
  var gradientBG_2 =
    "transparent";
  var gradientBG_3 =
    "transparent";
  var tl = gsap.timeline();
  tl.to(gradientBG, { duration: 2, backgroundImage: gradientBG_3 }, 0).to(
    spotBG,
    { duration: 2, autoAlpha: 0, ease: "expo" },
    0
  );
  new ScrollMagic.Scene({
    triggerElement: "#whychooseus",
    triggerHook: "onEnter",
    offset: 0,
  })
    .setTween(tl)
    .addTo(controller);
  var tl = gsap.timeline();
  tl.to(spotBG, { duration: 2, autoAlpha: 1, ease: "expo" });
  new ScrollMagic.Scene({
    triggerElement: "#homeletstalk",
    triggerHook: "onEnter",
    offset: 0,
  })
    .setTween(tl)
    .addTo(controller);
  var tl = gsap.timeline();
  tl.to(gradientBG, { duration: 2, backgroundImage: gradientBG_2 });
  new ScrollMagic.Scene({
    triggerElement: "#services",
    triggerHook: "onEnter",
    offset: 0,
  })
    .setTween(tl)
    .addTo(controller);
  window.onload = function () {
    gsap.set(".hide-on-init", { autoAlpha: 1 });
    heroTitle = new SplitText(".hero-section-text .HeroSplitText", {
      type: "words,chars",
    });
    heroTitle_chars = heroTitle.chars;
    heroSubHeader = new SplitText(
      ".hero-section-text .HerosubHeaderSplitText",
      { type: "words,chars" }
    );
    heroSubHeader_chars = heroSubHeader.chars;
    gsap.set(".hero-section-text .HeroSplitText", { perspective: 400 });
    gsap.set(".hero-logos-clients", { autoAlpha: 1 });
    var timeline = gsap.timeline();
    timeline.from(heroTitle_chars, {
      duration: 1,
      autoAlpha: 0,
      scale: 2,
      x: 0,
      rotationX: 0,
      ease: "back",
      stagger: 0.05,
    });
    timeline.from(
      ".HerosubHeaderSplitText",
      { duration: 0.5, autoAlpha: 0, ease: "back" },
      "-=1.5"
    );
    timeline.from(
      heroSubHeader_chars,
      {
        duration: 0.8,
        autoAlpha: 0,
        scale: 2,
        x: 0,
        ease: "back",
        stagger: 0.02,
      },
      "-=1"
    );
    timeline.from(
      ".hero-logos-clients div.title .word",
      {
        duration: 4,
        autoAlpha: 0,
        scale: 0,
        delay: 0,
        stagger: 0.5,
        ease: "elastic",
        force3D: !0,
      },
      "-=1"
    );
    timeline.from(
      ".hero-logos-clients div.logo",
      {
        duration: 1,
        autoAlpha: 0,
        scale: 0.5,
        stagger: 0.05,
        ease: "elastic",
        force3D: !0,
      },
      "-=3"
    );
    timeline.from(
      ".cta_button_bottom",
      { duration: 1, scale: 0, autoAlpha: 0, ease: "back" },
      "-=2.5"
    );
    timeline.from(
      ".hero-promo",
      { duration: 1, scale: 0.8, autoAlpha: 0, ease: "back" },
      "-=1.5"
    );
  };
  var heroOut = gsap.timeline();
  heroOut.from(".hero-section-text", { autoAlpha: 1, ease: "expo" });
  var hero_scene = new ScrollMagic.Scene({
    triggerElement: "#inner-content",
    offset: -150,
    duration: "60%",
  })
    .setTween(heroOut)
    .addTo(controller);
  $(".section-megatitle_x2.goaway").each(function () {
    var title1 = $(this).find(".title1");
    var title2 = $(this).find(".title2");
    var container = $(this);
    gsap.to(title1, 0, { xPercent: 100, yPercent: -30 });
    gsap.to(title2, 0, { xPercent: -100, yPercent: 30 });
    var tl = new gsap.timeline();
    tl.to(title1, { xPercent: -100, ease: "power4" }, 0).to(
      title2,
      { xPercent: 100, ease: "power4" },
      0
    );
    new ScrollMagic.Scene({
      triggerElement: this,
      offset: -100,
      duration: "200%",
    })
      .setTween(tl)
      .addTo(controller);
  });
  $("#homeletstalk").each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
      duration: "100%",
      offset: 50,
    })
      .setPin(this)
      .addTo(controller);
  });
  $("#homeletstalk").each(function () {
    var title1 = $(this).find(".section-megatitle_x2_cta .title1");
    var title2 = $(this).find(".section-megatitle_x2_cta .title2");
    var content = $(this).find(".section-content");
    var button = $(this).find(".button");
    var text = $(this).find("h3,h4,h5,p,span");
    TextCharsIn = new SplitText(text, { type: "words,chars" });
    TextCharsIn_chars = TextCharsIn.chars;
    var container = $(this);
    gsap.to(title1, 0, { xPercent: 200, y: 0 });
    gsap.to(title2, 0, { xPercent: -200, y: 100 });
    gsap.to(content, 0, { yPercent: -20 });
    var tl = new gsap.timeline();
    tl.to(container, { duration: 0.2, autoAlpha: 1, ease: "sine" }, 0)
      .to(title1, { duration: 1, xPercent: 0, ease: "back" }, 0)
      .to(title2, { duration: 1, xPercent: 0, ease: "back" }, 0)
      .to(
        title1,
        {
          duration: 1,
          yPercent: -15,
          autoAlpha: 0.2,
          scale: 1.4,
          ease: "back",
        },
        0.8
      )
      .to(
        title2,
        { duration: 1, yPercent: 15, autoAlpha: 0.2, scale: 1.4, ease: "back" },
        0.8
      )
      .from(
        button,
        { duration: 0.5, autoAlpha: 0, scale: 1.4, ease: "back" },
        1.2
      )
      .from(TextCharsIn_chars, {
        duration: 0.8,
        autoAlpha: 0,
        scale: 2,
        x: 0,
        rotationX: 0,
        ease: "expo",
        stagger: 0.02,
      });
    new ScrollMagic.Scene({ triggerElement: this, offset: 250 })
      .setTween(tl)
      .addTo(controller);
  });
  $(".featured-work").each(function (i) {
    var height = $(this).height();
    var header = $(this).find(".featured-work__header");
    var workTitle = $(this).find(".work-item-title a");
    var data = $(this).find(".work-tech-data");
    var imageBG = $(this).find(".featured-work_imgbg");
    var imageBG_mobile = $(this).find(".featured-work_imgbg.mobile");
    var imageBGCover = $(this).find(".featured-work_imgbg .gradientMask");
    gsap.set(imageBG, { scale: 1.05, autoAlpha: 0 });
    gsap.set(imageBG, { width: "0vw" });
    gsap.set(imageBGCover, {
      backgroundImage:
        "",
      ease: "sine",
    });
    function dataTextIn() {
      (mySplitText = new SplitText(data, { type: "words,chars" })),
        (words = mySplitText.words);
      var tl = gsap.timeline();
      tl.to(data, { duration: 1, autoAlpha: 1, ease: "sine" });
      tl.from(words, {
        duration: 1,
        autoAlpha: 0,
        scale: 1,
        y: 30,
        ease: "expo",
        stagger: 0.05,
      });
      return tl;
    }
    var tl = gsap.timeline();
    tl.set(imageBG, { scale: 1.05, autoAlpha: 0 });
    tl.to(imageBG, {
      duration: 10,
      scale: 1,
      width: "100vw",
      autoAlpha: 1,
      ease: "power4",
      force3D: !0,
    });
    tl.to(imageBG, {
      duration: 5,
      width: "50vw",
      left: "50vw",
      autoAlpha: 0.5,
      ease: "power4",
      force3D: !0,
    });
    tl.to(
      imageBG_mobile,
      { duration: 10, backgroundPosition: "50%", ease: "sine", force3D: !0 },
      "-=15"
    ).add(dataTextIn(), "-=3");
    tl.to(imageBG, { duration: 4, autoAlpha: 0, ease: "power4" });
    tl.to(imageBG, { visibility: "hidden" });
    tl.to(data, { duration: 1, autoAlpha: 0, ease: "sine" }, "-=3");
    tl.set(this, { autoAlpha: 0 });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: "onEnter",
      duration: height,
      offset: 300,
    })
      .setTween(tl)
      .addTo(controller);
    $(workTitle).hoverIntent(
      function () {
        var tl = gsap.timeline();
        tl.to(this, {
          duration: 0.1,
          backgroundColor: "#ffffff",
          textShadow: "rgba(255,255,255,.8) 0 0 10px",
          ease: "sine",
        });
        tl.to(imageBG, { duration: 0.1, scale: 1.05, ease: "sine" });
      },
      function () {
        var tl = gsap.timeline();
        tl.to(this, {
          duration: 0.2,
          backgroundColor: "transparent",
          textShadow: "rgba(255,255,255,.0) 0 0 10px",
          ease: "expo",
        });
        tl.to(imageBG, { duration: 0.2, scale: 1.0, ease: "sine" });
      }
    );
  });
  $(".services_nav").each(function () {
    var height = $("#services").height();
    new ScrollMagic.Scene({
      triggerElement: this,
      duration: height,
      offset: 100,
    })
      .setPin(this)
      .addTo(controller);
  });
  var item1 = $(".services_nav li:eq( 0 )");
  var item2 = $(".services_nav li:eq( 1 )");
  var item3 = $(".services_nav li:eq( 2 )");
  $(".services_nav").each(function () {
    var tl = gsap.timeline();
    tl.from(item1, { autoAlpha: 0, x: -30 });
    tl.from(item2, { autoAlpha: 0, x: -30 });
    tl.from(item3, { autoAlpha: 0, x: -30 });
    new ScrollMagic.Scene({ triggerElement: this, offset: 100 })
      .setTween(tl)
      .addTo(controller);
  });
  function serviceButtonIN(item) {
    var tl = gsap.timeline();
    tl.to(item, 1, { className: "+=active" });
    tl.to(item, 0.4, { className: "-=active" });
    return tl;
  }
  $(".service_content").each(function () {
    var height = $(this).height() + 200;
    var nav_item = this.getAttribute("data-nav");
    new ScrollMagic.Scene({
      triggerElement: this,
      duration: "100%",
      offset: -250,
    })
      .setClassToggle(nav_item, "active")
      .addTo(controller);
  });
  $("#services_nav_1").click(function () {
    gsap.to(window, 1, { scrollTo: { y: "#service_content_1", offsetY: 60 } });
  });
  $("#services_nav_2").click(function () {
    gsap.to(window, 1, { scrollTo: { y: "#service_content_2", offsetY: 60 } });
  });
  $("#services_nav_3").click(function () {
    gsap.to(window, 1, { scrollTo: { y: "#service_content_3", offsetY: 60 } });
  });
});
var cursor = $(".cursor"),
  follower = $(".cursor-follower"),
  cursorText = $(".cursor-text");
var posX = 0,
  posY = 0;
var mouseX = 0,
  mouseY = 0;
gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    gsap.set(follower, { css: { left: posX - 12, top: posY - 12 } });
    gsap.set(cursor, { css: { left: mouseX, top: mouseY } });
    gsap.set(cursorText, { css: { left: posX - 24, top: posY - 24 } });
  },
});
$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
var cursorChanging = !1;
var tl = gsap.timeline();
$(
  "a:not(.cursor-msg-view, .cursor-msg-back), button, input.button, .services_nav li"
).on("mouseenter", function () {
  tl.to(follower, { duration: 0.5, scale: 2.2, ease: "expo" });
  tl.to(cursor, { duration: 0.4, scale: 0.4, ease: "expo" }, "-=0.5");
});
$(
  "a:not(.cursor-msg-view, .cursor-msg-back), button, input.button, .services_nav li"
).on("mouseleave", function () {
  tl.to(follower, { duration: 0.5, scale: 1, ease: "expo" });
  tl.to(cursor, { duration: 0.5, scale: 1, ease: "expo" }, "-=0.5");
});
var tl = gsap.timeline();
function ShowCursorIcon(icon) {
  tl.set(cursorText, { text: `<emoji>${icon}</emoji>` });
  tl.to(follower, { duration: 0.9, scale: 2.2, ease: "elastic" });
  tl.to(cursorText, { duration: 0.9, scale: 1, ease: "elastic" }, "-=0.6");
  tl.to(cursorText, { delay: 1, duration: 0.6, scale: 0, ease: "elastic" });
  tl.to(follower, { duration: 0.6, scale: 1, ease: "elastic" }, "-=0.6");
  tl.set(cursorText, { text: "" });
}
function CursorMessageShow(content) {
  tl.set(cursorText, { text: content });
  tl.to(follower, { duration: 0.5, scale: 0, ease: "expo" });
  tl.to(cursorText, { duration: 0.5, scale: 1, ease: "expo" }, "-=0.5");
}
function CursorMessageHide(content) {
  tl.to(cursorText, { duration: 0.3, scale: 0, ease: "expo" });
  tl.to(follower, { duration: 0.3, scale: 1, ease: "expo" }, "-=0.3");
  tl.set(cursorText, { text: "" });
}
function CursorGoDark() {
  tl.to(cursor, { duration: 0.3, filter: "invert(1)", ease: "expo" });
  tl.to(
    follower,
    { duration: 0.3, filter: "invert(1)", ease: "expo" },
    "-=0.3"
  );
}
function CursorGoWhite() {
  tl.to(cursor, { duration: 0.3, filter: "invert(0)", ease: "expo" });
  tl.to(
    follower,
    { duration: 0.3, filter: "invert(0)", ease: "expo" },
    "-=0.3"
  );
}
function getLang() {
  if (window.location.href.indexOf("/es/") != -1) return "es";
  else if (window.location.href.indexOf("/en/") != -1) return "en";
  else if (window.location.href.indexOf("/ca/") != -1) return "ca";
  else return "es";
}
if (getLang() == "en") {
  var locale_View = "View";
  var locale_All = "All";
}
if (getLang() == "es") {
  var locale_View = "Ver";
  var locale_All = "Todos";
}
if (getLang() == "ca") {
  var locale_View = "Veure";
  var locale_All = "Tots";
}
$(".cursor-msg-view").hoverIntent(
  function () {
    CursorMessageShow(locale_View);
  },
  function () {
    CursorMessageHide();
  }
);
$(".cursor-msg-back").on("mouseenter", function () {
  CursorMessageShow(locale_All);
});
$(".cursor-msg-back").on("mouseleave", function () {
  CursorMessageHide();
});
$(".flex-wrapper.white, .white-bg").on("mouseenter", function () {
  CursorGoDark();
});
$(".flex-wrapper.white, .white-bg").on("mouseleave", function () {
  CursorGoWhite();
});
jQuery("input[name=price-range]").click(function () {
  price = $("input[name=price-range]:checked").val();
  if (price.match("1.000 â‚¬ - 1.500 â‚¬")) {
    ShowCursorIcon("ðŸ™„");
  } else if (price.match("1.500 â‚¬ - 3.000 â‚¬")) {
    ShowCursorIcon("ðŸ™‚");
  } else if (price.match("3.000 â‚¬ - 5.000 â‚¬")) {
    ShowCursorIcon("ðŸ˜‰");
  } else if (price.match("5.000 â‚¬ - 10.000 â‚¬")) {
    ShowCursorIcon("ðŸ˜");
  } else if (price.match("10.000 â‚¬ - 20.000 â‚¬")) {
    ShowCursorIcon("ðŸ¤‘");
  } else if (price.match("20.000 â‚¬ - 40.000 â‚¬")) {
    ShowCursorIcon("ðŸ¤¯");
  } else if (price.match("â‚¬1,000 - â‚¬1,500")) {
    ShowCursorIcon("ðŸ™„");
  } else if (price.match("â‚¬1,500 - â‚¬3,000")) {
    ShowCursorIcon("ðŸ™‚");
  } else if (price.match("â‚¬3,000 - â‚¬ 5,000")) {
    ShowCursorIcon("ðŸ˜‰");
  } else if (price.match("â‚¬5,000 - â‚¬10,000")) {
    ShowCursorIcon("ðŸ˜");
  } else if (price.match("â‚¬10,000 - â‚¬20,000")) {
    ShowCursorIcon("ðŸ¤‘");
  } else if (price.match("â‚¬20,000 - â‚¬40,000")) {
    ShowCursorIcon("ðŸ¤¯");
  } else {
  }
});
function lazyLoadThumb(e) {
  var t =
      '<img data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>',
    a = '<button class="play" aria-label="play Youtube video"></button>';
  return t.replace("ID", e) + a;
}
function lazyLoadYoutubeIframe() {
  var e = document.createElement("iframe"),
    t = "ID?autoplay=1";
  t +=
    0 === this.parentNode.dataset.query.length
      ? ""
      : "&" + this.parentNode.dataset.query;
  e.setAttribute("src", t.replace("ID", this.parentNode.dataset.src)),
    e.setAttribute("frameborder", "0"),
    e.setAttribute("allowfullscreen", "1"),
    e.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ),
    this.parentNode.parentNode.replaceChild(e, this.parentNode);
}
document.addEventListener("DOMContentLoaded", function () {
  var e,
    t,
    p,
    a = document.getElementsByClassName("rll-youtube-player");
  for (t = 0; t < a.length; t++)
    (e = document.createElement("div")),
      e.setAttribute("data-id", a[t].dataset.id),
      e.setAttribute("data-query", a[t].dataset.query),
      e.setAttribute("data-src", a[t].dataset.src),
      (e.innerHTML = lazyLoadThumb(a[t].dataset.id)),
      a[t].appendChild(e),
      (p = e.querySelector(".play")),
      (p.onclick = lazyLoadYoutubeIframe);
});
