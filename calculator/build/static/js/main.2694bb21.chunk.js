(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),i=c.n(r),s=c(4),a=c.n(s),j=(c(10),c(2));c(11);var b=function(){var e=Object(r.useState)("0"),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(r.useState)(""),a=Object(j.a)(s,2),b=a[0],l=a[1],u=Object(r.useState)(""),O=Object(j.a)(u,2),o=O[0],d=O[1],h=Object(r.useState)(!0),x=Object(j.a)(h,2),m=x[0],f=x[1],S=Object(r.useState)(["7","8","9","4","5","6","1","2","3",".","0"]),N=Object(j.a)(S,1)[0],g=Object(r.useState)(["/","*","+","-"]),p=Object(j.a)(g,1)[0],v=function(e){if(f(!0),""!==b){var t;switch(o){case"+":t=Number(b)+Number(c);break;case"-":t=Number(b)-Number(c);break;case"*":t=Number(b)*Number(c);break;case"/":t=Number(b)/Number(c)}i(String(t)),l(String(t))}else l(String(c));"="!==e?d(e):(l(""),f(!0))};return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"calculator",children:[Object(n.jsx)("div",{className:"answer",children:Object(n.jsx)("span",{children:c})}),Object(n.jsx)("div",{className:"number",children:Object(n.jsxs)("ul",{children:[N.map((function(e,t){return Object(n.jsx)("li",{onClick:function(){var t;"."===(t=e)?m||-1!==c.indexOf(t)||(i(c+String(t)),f(!1)):(i(m||"0"===c?String(t):c+String(t)),f(!1))},children:Object(n.jsx)("span",{children:e})},t)})),Object(n.jsx)("li",{onClick:function(){return v("=")},children:Object(n.jsx)("span",{children:"="})})]})}),Object(n.jsx)("div",{className:"controller",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{onClick:function(){i("0"),l(""),d(""),f(!0)},children:Object(n.jsx)("span",{children:"AC"})}),p.map((function(e,t){return Object(n.jsx)("li",{onClick:function(){return v(e)},children:Object(n.jsx)("span",{children:e})},t)}))]})})]})})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),l()}},[[12,1,2]]]);
//# sourceMappingURL=main.2694bb21.chunk.js.map