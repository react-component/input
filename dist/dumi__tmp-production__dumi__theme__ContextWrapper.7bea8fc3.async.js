'use strict';
(self.webpackChunkrc_input = self.webpackChunkrc_input || []).push([
  [923],
  {
    34576: function (v, o, t) {
      t.r(o),
        t.d(o, {
          default: function () {
            return p;
          },
        });
      var i = t(27424),
        l = t.n(i),
        e = t(67294),
        n = t(57199),
        c = t(64236),
        r = t(18325),
        m = t(90482),
        d = t(85893),
        E = {};
      function p() {
        var f = (0, n.pC)(),
          h = (0, e.useState)(!0),
          _ = l()(h, 2),
          D = _[0],
          s = _[1],
          a = (0, e.useRef)(n.m8.location.pathname);
        return (
          (0, e.useEffect)(function () {
            return n.m8.listen(function (u) {
              u.location.pathname !== a.current &&
                ((a.current = u.location.pathname),
                s(!0),
                document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, d.jsx)(c.D.Provider, {
            value: {
              pkg: {
                name: 'rc-input',
                description: 'React input component',
                version: '1.0.0',
                license: 'MIT',
                repository: {
                  type: 'git',
                  url: 'git@github.com:react-component/input.git',
                },
              },
              entryExports: E,
              demos: r.DE,
              components: r.wx,
              locales: m.k,
              loading: D,
              setLoading: s,
              themeConfig: {
                footer:
                  'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
                prefersColor: { default: 'light', switch: !0 },
                name: 'Input',
                logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
              },
            },
            children: f,
          })
        );
      }
    },
  },
]);
