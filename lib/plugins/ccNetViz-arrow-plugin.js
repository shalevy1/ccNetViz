!(function(t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            i,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 11));
})([
  function(t, e) {
    t.exports = function(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    };
  },
  function(t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    t.exports = function(t, e, i) {
      return e && n(t.prototype, e), i && n(t, i), t;
    };
  },
  function(t, e, n) {
    t.exports = n(10);
  },
  function(t, e) {
    function n(t, e, n, i, o, r, a) {
      try {
        var s = t[r](a),
          c = s.value;
      } catch (t) {
        return void n(t);
      }
      s.done ? e(c) : Promise.resolve(c).then(i, o);
    }
    t.exports = function(t) {
      return function() {
        var e = this,
          i = arguments;
        return new Promise(function(o, r) {
          var a = t.apply(e, i);
          function s(t) {
            n(a, o, r, s, c, 'next', t);
          }
          function c(t) {
            n(a, o, r, s, c, 'throw', t);
          }
          s(void 0);
        });
      };
    };
  },
  function(t, e, n) {
    var i = n(7),
      o = n(8);
    t.exports = function(t, e) {
      return !e || ('object' !== i(e) && 'function' != typeof e) ? o(t) : e;
    };
  },
  function(t, e) {
    function n(e) {
      return (
        (t.exports = n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        n(e)
      );
    }
    t.exports = n;
  },
  function(t, e, n) {
    var i = n(9);
    t.exports = function(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        e && i(t, e);
    };
  },
  function(t, e) {
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function i(e) {
      return (
        'function' == typeof Symbol && 'symbol' === n(Symbol.iterator)
          ? (t.exports = i = function(t) {
              return n(t);
            })
          : (t.exports = i = function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : n(t);
            }),
        i(e)
      );
    }
    t.exports = i;
  },
  function(t, e) {
    t.exports = function(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    };
  },
  function(t, e) {
    function n(e, i) {
      return (
        (t.exports = n =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          }),
        n(e, i)
      );
    }
    t.exports = n;
  },
  function(t, e, n) {
    var i = (function(t) {
      'use strict';
      var e,
        n = Object.prototype,
        i = n.hasOwnProperty,
        o = 'function' == typeof Symbol ? Symbol : {},
        r = o.iterator || '@@iterator',
        a = o.asyncIterator || '@@asyncIterator',
        s = o.toStringTag || '@@toStringTag';
      function c(t, e, n, i) {
        var o = e && e.prototype instanceof p ? e : p,
          r = Object.create(o.prototype),
          a = new L(i || []);
        return (
          (r._invoke = (function(t, e, n) {
            var i = u;
            return function(o, r) {
              if (i === l) throw new Error('Generator is already running');
              if (i === g) {
                if ('throw' === o) throw r;
                return j();
              }
              for (n.method = o, n.arg = r; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = O(a, n);
                  if (s) {
                    if (s === y) continue;
                    return s;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (i === u) throw ((i = g), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                i = l;
                var c = f(t, e, n);
                if ('normal' === c.type) {
                  if (((i = n.done ? g : h), c.arg === y)) continue;
                  return { value: c.arg, done: n.done };
                }
                'throw' === c.type &&
                  ((i = g), (n.method = 'throw'), (n.arg = c.arg));
              }
            };
          })(t, n, a)),
          r
        );
      }
      function f(t, e, n) {
        try {
          return { type: 'normal', arg: t.call(e, n) };
        } catch (t) {
          return { type: 'throw', arg: t };
        }
      }
      t.wrap = c;
      var u = 'suspendedStart',
        h = 'suspendedYield',
        l = 'executing',
        g = 'completed',
        y = {};
      function p() {}
      function d() {}
      function v() {}
      var m = {};
      m[r] = function() {
        return this;
      };
      var x = Object.getPrototypeOf,
        w = x && x(x(P([])));
      w && w !== n && i.call(w, r) && (m = w);
      var b = (v.prototype = p.prototype = Object.create(m));
      function k(t) {
        ['next', 'throw', 'return'].forEach(function(e) {
          t[e] = function(t) {
            return this._invoke(e, t);
          };
        });
      }
      function _(t) {
        var e;
        this._invoke = function(n, o) {
          function r() {
            return new Promise(function(e, r) {
              !(function e(n, o, r, a) {
                var s = f(t[n], t, o);
                if ('throw' !== s.type) {
                  var c = s.arg,
                    u = c.value;
                  return u && 'object' == typeof u && i.call(u, '__await')
                    ? Promise.resolve(u.__await).then(
                        function(t) {
                          e('next', t, r, a);
                        },
                        function(t) {
                          e('throw', t, r, a);
                        }
                      )
                    : Promise.resolve(u).then(
                        function(t) {
                          (c.value = t), r(c);
                        },
                        function(t) {
                          return e('throw', t, r, a);
                        }
                      );
                }
                a(s.arg);
              })(n, o, e, r);
            });
          }
          return (e = e ? e.then(r, r) : r());
        };
      }
      function O(t, n) {
        var i = t.iterator[n.method];
        if (i === e) {
          if (((n.delegate = null), 'throw' === n.method)) {
            if (
              t.iterator.return &&
              ((n.method = 'return'),
              (n.arg = e),
              O(t, n),
              'throw' === n.method)
            )
              return y;
            (n.method = 'throw'),
              (n.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return y;
        }
        var o = f(i, t.iterator, n.arg);
        if ('throw' === o.type)
          return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), y;
        var r = o.arg;
        return r
          ? r.done
            ? ((n[t.resultName] = r.value),
              (n.next = t.nextLoc),
              'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
              (n.delegate = null),
              y)
            : r
          : ((n.method = 'throw'),
            (n.arg = new TypeError('iterator result is not an object')),
            (n.delegate = null),
            y);
      }
      function S(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function z(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function L(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(S, this),
          this.reset(!0);
      }
      function P(t) {
        if (t) {
          var n = t[r];
          if (n) return n.call(t);
          if ('function' == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              a = function n() {
                for (; ++o < t.length; )
                  if (i.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                return (n.value = e), (n.done = !0), n;
              };
            return (a.next = a);
          }
        }
        return { next: j };
      }
      function j() {
        return { value: e, done: !0 };
      }
      return (
        (d.prototype = b.constructor = v),
        (v.constructor = d),
        (v[s] = d.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function(t) {
          var e = 'function' == typeof t && t.constructor;
          return (
            !!e &&
            (e === d || 'GeneratorFunction' === (e.displayName || e.name))
          );
        }),
        (t.mark = function(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), s in t || (t[s] = 'GeneratorFunction')),
            (t.prototype = Object.create(b)),
            t
          );
        }),
        (t.awrap = function(t) {
          return { __await: t };
        }),
        k(_.prototype),
        (_.prototype[a] = function() {
          return this;
        }),
        (t.AsyncIterator = _),
        (t.async = function(e, n, i, o) {
          var r = new _(c(e, n, i, o));
          return t.isGeneratorFunction(n)
            ? r
            : r.next().then(function(t) {
                return t.done ? t.value : r.next();
              });
        }),
        k(b),
        (b[s] = 'Generator'),
        (b[r] = function() {
          return this;
        }),
        (b.toString = function() {
          return '[object Generator]';
        }),
        (t.keys = function(t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var i = e.pop();
                if (i in t) return (n.value = i), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = P),
        (L.prototype = {
          constructor: L,
          reset: function(t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = e),
              this.tryEntries.forEach(z),
              !t)
            )
              for (var n in this)
                't' === n.charAt(0) &&
                  i.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = e);
          },
          stop: function() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function(t) {
            if (this.done) throw t;
            var n = this;
            function o(i, o) {
              return (
                (s.type = 'throw'),
                (s.arg = t),
                (n.next = i),
                o && ((n.method = 'next'), (n.arg = e)),
                !!o
              );
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var a = this.tryEntries[r],
                s = a.completion;
              if ('root' === a.tryLoc) return o('end');
              if (a.tryLoc <= this.prev) {
                var c = i.call(a, 'catchLoc'),
                  f = i.call(a, 'finallyLoc');
                if (c && f) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (c) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!f)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function(t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                i.call(o, 'finallyLoc') &&
                this.prev < o.finallyLoc
              ) {
                var r = o;
                break;
              }
            }
            r &&
              ('break' === t || 'continue' === t) &&
              r.tryLoc <= e &&
              e <= r.finallyLoc &&
              (r = null);
            var a = r ? r.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              r
                ? ((this.method = 'next'), (this.next = r.finallyLoc), y)
                : this.complete(a)
            );
          },
          complete: function(t, e) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              y
            );
          },
          finish: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), z(n), y;
            }
          },
          catch: function(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var i = n.completion;
                if ('throw' === i.type) {
                  var o = i.arg;
                  z(n);
                }
                return o;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function(t, n, i) {
            return (
              (this.delegate = { iterator: P(t), resultName: n, nextLoc: i }),
              'next' === this.method && (this.arg = e),
              y
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = i;
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(i);
    }
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    var i = n(0),
      o = n.n(i),
      r = n(1),
      a = n.n(r),
      s = n(4),
      c = n.n(s),
      f = n(5),
      u = n.n(f),
      h = n(6),
      l = n.n(h),
      g = n(2),
      y = n.n(g),
      p = n(3),
      d = n.n(p),
      v = new ((function() {
        function t() {
          o()(this, t),
            (this.config = {
              fps: 10,
              duration: 2e3,
              frame: 0,
              frameCount: 0,
              scene: 0,
            }),
            (this.listener = {}),
            (this.status = !0),
            (this.frameBatch = []),
            (this.config.frameCount =
              this.config.fps * (this.config.duration / 1e3));
        }
        return (
          a()(t, [
            {
              key: 'addListener',
              value: function(t) {
                this.listener[t] = !0;
              },
            },
            {
              key: 'draw',
              value: (function() {
                var t = d()(
                  y.a.mark(function t(e, n) {
                    return y.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (this.frameBatch.push(n),
                                void 0 === this.instance && (this.instance = e),
                                !(
                                  this.frameBatch.length >=
                                  Object.keys(this.listener).length
                                ))
                              ) {
                                t.next = 6;
                                break;
                              }
                              return (t.next = 5), this.fps();
                            case 5:
                              this.frameBatch.length &&
                                ('undefined' != typeof ccNetVizPlugins &&
                                  (void 0 ===
                                    ccNetVizPlugins.animationHandler &&
                                    (ccNetVizPlugins.animationHandler =
                                      'arrow'),
                                  'arrow' ===
                                    ccNetVizPlugins.animationHandler &&
                                    this.instance.reflow()),
                                n > this.config.frameCount &&
                                  (this.status = !1),
                                (this.config.scene =
                                  n % this.config.frameCount),
                                (this.frameBatch.length = 0));
                            case 6:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function(e, n) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'fps',
              value: function() {
                var t = this;
                return new Promise(function(e) {
                  return setTimeout(e, 1e3 / t.config.fps);
                });
              },
            },
          ]),
          t
        );
      })())(),
      m = (function() {
        function t(e, n, i) {
          o()(this, t),
            (this.config = e),
            (this.textureReady = i),
            void 0 === this.textureReady && this._preConf(),
            this._preAnimation(),
            this._setAnimation(n),
            void 0 === this.textureReady &&
              ((this.canvas = document.createElement('canvas')),
              (this.canvas.width = 0),
              (this.canvas.height = 0),
              (this.ready = !1),
              this._setCanvas(),
              this._setGradient(),
              this._preDraw(),
              this._draw());
        }
        return (
          a()(t, [
            {
              key: '_preConf',
              value: function() {
                (this.default = {
                  stroke: { color: '#ffffff', size: 1e-8, round: !1 },
                  textureColor: '#dddddd',
                  thickness: 20,
                  height: 24,
                  minSize: 6,
                  maxSize: 12,
                  aspect: 1,
                }),
                  void 0 !== this.config
                    ? (void 0 !== this.config.stroke
                        ? ((this.config.stroke.size =
                            this.config.stroke.size ||
                            this.default.stroke.size),
                          (this.config.stroke.color =
                            this.config.stroke.color ||
                            this.default.stroke.color),
                          (this.config.stroke.round =
                            this.config.stroke.round ||
                            this.default.stroke.round))
                        : (this.config.stroke = this.default.stroke),
                      (this.config.thickness =
                        this.config.thickness || this.default.thickness),
                      (this.config.height =
                        this.config.height || this.default.height),
                      (this.config.aspect =
                        this.config.aspect || this.default.aspect),
                      (this.config.minSize =
                        this.config.minSize || this.default.maxSize),
                      (this.config.maxSize =
                        this.config.maxSize || this.default.maxSize),
                      (this.config.textureColor =
                        this.config.textureColor || this.default.textureColor))
                    : (this.config = this.default);
              },
            },
            {
              key: '_preAnimation',
              value: function() {
                if (void 0 !== this.config.animation) {
                  var t = function(t) {
                      if (!t) return [0, 0, 0];
                      if (t.indexOf('rgb') >= 0)
                        return t
                          .replace(/([A-z]|[().])+/g, '')
                          .split(',')
                          .map(function(t) {
                            return parseInt(t);
                          });
                      if (t.indexOf('#') >= 0) {
                        t = t.replace(
                          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                          function(t, e, n, i) {
                            return e + e + n + n + i + i;
                          }
                        );
                        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                          t
                        );
                        return e
                          ? [
                              parseInt(e[1], 16),
                              parseInt(e[2], 16),
                              parseInt(e[3], 16),
                            ]
                          : [0, 0, 0];
                      }
                      return [0, 0, 0];
                    },
                    e = function(t, e, n) {
                      for (
                        var i = t, o = e, r = 0, a = [], s = n, c = 0;
                        c < s + 1;
                        c++
                      ) {
                        var f = [];
                        (r += 1 / s),
                          (f[0] = i[0] * r + (1 - r) * o[0]),
                          (f[1] = i[1] * r + (1 - r) * o[1]),
                          (f[2] = i[2] * r + (1 - r) * o[2]),
                          (a[c] = 'rgb('
                            .concat(Math.abs(Math.floor(f[0])), ',')
                            .concat(Math.abs(Math.floor(f[1])), ',')
                            .concat(Math.abs(Math.floor(f[2])), ')'));
                      }
                      return a;
                    };
                  if ('color' === this.config.animation.type) {
                    if (void 0 === this.config.animation.colors) {
                      var n = e(
                        t(this.config.animation.color),
                        t(this.config.textureColor),
                        v.config.frameCount / 2 || 0
                      );
                      this.config.animation.colors = n.concat(
                        n.slice().reverse()
                      );
                    }
                    (this.config.animation.scene = v.config.scene),
                      void 0 !== this.config.animation.colors &&
                        (this.config.textureColor = ''.concat(
                          this.config.animation.colors[
                            this.config.animation.frame
                          ] || this.config.textureColor
                        ));
                  } else if ('stroke' === this.config.animation.type) {
                    if (
                      ((this.config.stroke.color =
                        this.config.animation.color || '#000'),
                      (this.config.animation.scene = v.config.scene),
                      void 0 === this.config.animation.colors)
                    ) {
                      var i = e(
                        t(this.config.animation.color),
                        t(this.config.textureColor),
                        v.config.frameCount / 2 || 0
                      );
                      this.config.animation.colors = i.concat(
                        i.slice().reverse()
                      );
                    }
                    this.config.animation.scene + 1 <= v.config.frameCount / 2
                      ? (this.config.stroke.size =
                          this.config.stroke.size + 0.5)
                      : (this.config.stroke.size =
                          this.config.stroke.size - 0.5),
                      void 0 !== this.config.animation.colors &&
                        (this.config.stroke.color = ''.concat(
                          this.config.animation.colors[
                            this.config.animation.frame
                          ] || this.config.textureColor
                        ));
                  } else
                    this.config.animation.scene + 1 <= v.config.frameCount / 2
                      ? (this.config.size = this.config.size + 0.5)
                      : (this.config.size = this.config.size - 0.5),
                      (this.config.animation.scene = v.config.scene);
                } else this.config.temp = this.config.texture;
              },
            },
            {
              key: '_setAnimation',
              value: (function() {
                var t = d()(
                  y.a.mark(function t(e) {
                    return y.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                void 0 === e ||
                                void 0 === this.config.animation
                              ) {
                                t.next = 10;
                                break;
                              }
                              if (
                                !this.ready ||
                                !e.findArea(0, 0, 1, 1, 0, 1).edges.length
                              ) {
                                t.next = 7;
                                break;
                              }
                              (this.config.animation.status = v.status),
                                void 0 === this.config.animation.frame &&
                                  (void 0 !== this.config.type &&
                                    v.addListener(this.config.type),
                                  (this.config.animation.frame = 0)),
                                v.draw(e, this.config.animation.frame++),
                                (t.next = 10);
                              break;
                            case 7:
                              return (
                                (t.next = 9),
                                new Promise(function(t) {
                                  return setTimeout(t, 50);
                                })
                              );
                            case 9:
                              this._setAnimation(e);
                            case 10:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function(e) {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: '_setCanvas',
              value: function() {
                this.offset = {
                  x:
                    this.config.thickness < this.config.height
                      ? (this.config.height - this.config.thickness) / 2
                      : 0,
                  y:
                    this.config.height < this.config.thickness
                      ? (this.config.thickness - this.config.height) / 2
                      : 0,
                };
                var t = {
                  x0: this.canvas.width,
                  y0: this.canvas.height,
                  x1:
                    this.canvas.width +
                    (2 * this.config.stroke.size + this.config.thickness),
                  y1:
                    this.canvas.height +
                    (2 * this.config.stroke.size + this.config.height),
                };
                (this.canvas.width = t.x1 < t.y1 ? t.y1 : t.x1),
                  (this.canvas.height = t.y1),
                  (this.context = this.canvas.getContext('2d')),
                  (this.context.fillStyle = this.config.textureColor),
                  (this.context.strokeStyle = this.config.stroke.color),
                  (this.context.lineWidth = this.config.stroke.size),
                  this.config.stroke.round && (this.context.lineJoin = 'round');
              },
            },
            {
              key: '_setGradient',
              value: function() {
                var t = this;
                if (void 0 !== this.config.textureGradient) {
                  var e = this.context.createLinearGradient(
                    0,
                    0,
                    void 0 !== this.config.textureGradient[0].x
                      ? this.canvas.width
                      : 0,
                    void 0 !== this.config.textureGradient[0].y
                      ? this.canvas.height
                      : 0
                  );
                  this.config.textureGradient.map(function(n) {
                    e.addColorStop(
                      n.x || n.y || 0,
                      n.color || t.config.textureColor
                    );
                  }),
                    (this.context.fillStyle = e);
                }
              },
            },
            { key: '_preDraw', value: function() {} },
            { key: '_draw', value: function() {} },
            {
              key: 'x',
              value: function(t) {
                return (
                  this.offset.x +
                  this.config.stroke.size +
                  this.config.thickness * t
                );
              },
            },
            {
              key: 'y',
              value: function(t) {
                return (
                  this.offset.y +
                  this.config.stroke.size +
                  this.config.height * t
                );
              },
            },
            {
              key: 'toConfig',
              value: function() {
                var t = this;
                return new Promise(function(e, n) {
                  (t.ready = !0),
                    t.canvas.toBlob(function(n) {
                      e(
                        Object.assign(
                          { texture: URL.createObjectURL(n) },
                          t.config
                        )
                      );
                    }, 'image/png');
                });
              },
            },
            {
              key: 'toTexture',
              value: function() {
                var t = this;
                return new Promise(function(e, n) {
                  e(t.config), (t.ready = !0);
                });
              },
            },
          ]),
          t
        );
      })(),
      x = function(t, e, n) {
        var i = (function(t) {
          function e(t, n, i) {
            var r;
            return (
              o()(this, e),
              ((r = c()(this, u()(e).call(this, t, n, i))).type = 'Arrow'),
              r
            );
          }
          return (
            l()(e, t),
            a()(e, [
              {
                key: '_preDraw',
                value: function() {
                  if (void 0 === this.config.lines)
                    switch (this.config.type) {
                      case 'delta':
                      case 'arrow':
                        this.config.lines = [
                          { y: 1, x: 0.5 },
                          { x: 1, y: 0 },
                          { x: 0, y: 0 },
                          { y: 1, x: 0.5 },
                        ];
                        break;
                      case 'delta short':
                      case 'arrow short':
                        this.config.lines = [
                          { y: 0.7, x: 0.5 },
                          { x: 1, y: 0 },
                          { x: 0, y: 0 },
                          { y: 0.7, x: 0.5 },
                        ];
                        break;
                      case 'diamond':
                        this.config.lines = [
                          { x: 0.5, y: 0 },
                          { x: 1, y: 0.5 },
                          { x: 0.5, y: 1 },
                          { x: 0, y: 0.5 },
                          { x: 0.5 },
                        ];
                        break;
                      case 'diamond short':
                        this.config.lines = [
                          { x: 0.5, y: 0.2 },
                          { x: 1, y: 0.5 },
                          { x: 0.5, y: 0.8 },
                          { x: 0, y: 0.5 },
                          { x: 0.5, y: 0.2 },
                        ];
                        break;
                      case 'T':
                        this.config.lines = [
                          { x: 0, y: 0.9 },
                          { x: 1, y: 0.9 },
                          { x: 1, y: 1 },
                          { x: 0, y: 1 },
                          { x: 0, y: 0.9 },
                        ];
                        break;
                      case 'harpoon up':
                        this.config.lines = [
                          { x: 0.5 },
                          { x: 1, y: 0 },
                          { x: 0.5, y: 1 },
                          { x: 0.5, y: 0 },
                        ];
                        break;
                      case 'harpoon down':
                        this.config.lines = [
                          {},
                          { x: 0.5, y: 1 },
                          { x: 0.5, y: 0 },
                          {},
                        ];
                        break;
                      case 'thin arrow':
                        this.config.lines = [
                          {},
                          { x: 0.5, y: 1 },
                          { x: 1, y: 0 },
                          { x: 0.9, y: 0 },
                          { x: 0.5, y: 0.9 },
                          { x: 0.1, y: 0 },
                          {},
                        ];
                        break;
                      default:
                        this.config.lines = [];
                    }
                },
              },
              {
                key: '_draw',
                value: function() {
                  var t = this;
                  this.context.beginPath(),
                    this.config.lines.map(function(e) {
                      t.context.lineTo(t.x(e.x || 0), t.y(e.y || 0));
                    }),
                    this.context.closePath(),
                    this.context.stroke(),
                    this.context.fill();
                },
              },
            ]),
            e
          );
        })(m);
        return new i(t, e, n);
      },
      w = function(t, e) {
        var n = [],
          i = t,
          o = e;
        if (void 0 === i) return { shapes: n, options: i };
        if (void 0 === i.styles) return { shapes: n, options: i };
        for (
          var r = [
              'arrow',
              'arrow short',
              'delta',
              'delta short',
              'diamond',
              'diamond short',
              'T',
              'harpoon up',
              'harpoon down',
              'thin arrow',
            ],
            a = 0;
          a < r.length;
          a++
        ) {
          var s = r[a];
          void 0 === i.styles[s]
            ? (i.styles[s] = { arrow: { type: s } })
            : (i.styles[s].arrow = Object.assign(
                { type: s },
                i.styles[s].arrow
              ));
        }
        for (var c in i.styles)
          if (
            void 0 !== i.styles[c].arrow &&
            void 0 !== i.styles[c].arrow.type
          ) {
            var f = i.styles[c].arrow;
            if (void 0 !== f.animation) {
              if (!1 === f.animation.status) {
                f.texture = f.animation.textureFrame[f.animation.scene + 1];
                var u = new x(
                  Object.assign(f, { plugin: 'arrow', key: c }),
                  o,
                  !0
                );
                n.push({ config: u.toTexture(), name: c, plugin: 'arrow' });
                continue;
              }
              void 0 === f.animation.textureFrame &&
                (f.animation.textureFrame = []),
                f.animation.textureFrame.push(f.texture),
                delete f.texture;
            } else if (void 0 !== f.temp) continue;
            var h = new x(Object.assign(f, { plugin: 'arrow', key: c }), o);
            n.push({ config: h.toConfig(), name: c, plugin: 'arrow' });
          }
        return { options: i, shapes: n };
      };
    'undefined' == typeof ccNetVizPlugins && (window.ccNetVizPlugins = {}),
      (ccNetVizPlugins.arrow = { Arrow: x, Integration: w });
    e.default = { Arrow: x, Integration: w };
  },
]);
