'use strict';
(self.webpackChunkrc_input = self.webpackChunkrc_input || []).push([
  [65],
  {
    84023: function (c, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return s;
          },
        });
      var t = e(57199),
        a = e(67294),
        l = function () {
          var u = (0, t.YB)(),
            r = (0, t.bU)();
          return a.createElement(
            'div',
            { className: 'dumi-default-not-found' },
            a.createElement('h1', null, u.formatMessage({ id: '404.title' })),
            a.createElement(
              t.rU,
              { to: 'base' in r ? r.base : '/', replace: !0 },
              u.formatMessage({ id: '404.back' }),
              ' \u2192',
            ),
          );
        },
        s = l;
    },
  },
]);
