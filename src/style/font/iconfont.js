!(function (e) {
  var t
  var n
  var o
  var i
  var c
  var d =
      '<svg><symbol id="icon-fenxiang" viewBox="0 0 1024 1024"><path d="M789.804097 737.772047 742.865042 784.699846 898.765741 940.600545 945.704796 893.672746Z"  ></path><path d="M456.92259 82.893942c-209.311143 0-379.582131 170.282245-379.582131 379.582131s170.270988 379.570875 379.582131 379.570875c209.287607 0 379.558595-170.270988 379.558595-379.570875S666.210197 82.893942 456.92259 82.893942zM770.128989 462.477097c0 172.721807-140.508127 313.229934-313.206398 313.229934-172.720783 0-313.229934-140.508127-313.229934-313.229934s140.508127-313.229934 313.229934-313.229934C629.620861 149.247162 770.128989 289.75529 770.128989 462.477097z"  ></path></symbol></svg>'
  var a = (a = document.getElementsByTagName('script'))[
    a.length - 1
  ].getAttribute('data-injectcss')
  var s = function (e, t) {
    t.parentNode.insertBefore(e, t)
  }
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function l () {
    c || ((c = !0), o())
  }
  function r () {
    try {
      i.documentElement.doScroll('left')
    } catch (e) {
      return void setTimeout(r, 50)
    }
    l()
  }
  (t = function () {
    var e, t;
    ((t = document.createElement('div')).innerHTML = d),
    (d = null),
    (e = t.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (t = e),
        (e = document.body).firstChild ? s(t, e.firstChild) : e.appendChild(t))
  }),
  document.addEventListener
    ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
      ? setTimeout(t, 0)
      : ((n = function () {
        document.removeEventListener('DOMContentLoaded', n, !1), t()
      }),
      document.addEventListener('DOMContentLoaded', n, !1))
    : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        r(),
        (i.onreadystatechange = function () {
          i.readyState == 'complete' && ((i.onreadystatechange = null), l())
        }))
})(window)
