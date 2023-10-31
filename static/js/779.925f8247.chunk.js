"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{9623:function(n,r,e){e.d(r,{Hx:function(){return l},Y5:function(){return f},bI:function(){return s},uV:function(){return p},wr:function(){return o}});var t=e(5861),a=e(7757),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({api_key:"1c860efb7ea3ee5f6f74a151b9c6036d",language:"en-US"}),o=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?".concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&query=").concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?").concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/credits?").concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/reviews?").concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},9098:function(n,r,e){e.d(r,{ds:function(){return s},oK:function(){return p},tl:function(){return f}});var t,a,c,u=e(168),i=e(9128),o=e(5867),s=o.ZP.ul(t||(t=(0,u.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    flex-wrap: wrap;\n    margin-top: 30px;\n"]))),f=(0,o.ZP)(i.A2F)(a||(a=(0,u.Z)(["\n    width: 250px;\n    height: 375px;\n    fill: #fff;\n    background-color: lightblue;\n    \n"]))),p=o.ZP.h2(c||(c=(0,u.Z)(["\n    color: #CB852B;    \n"])))},4139:function(n,r,e){e.d(r,{E3:function(){return l},QE:function(){return s},gn:function(){return f},mo:function(){return p}});var t,a,c,u,i=e(168),o=e(5867),s=o.ZP.h3(t||(t=(0,i.Z)(["\n    font-size: 400;\n    color: #4848a4;\n"]))),f=o.ZP.div(a||(a=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {     \n        flex-direction: row;\n        align-items: start;\n        gap: 10px;      \n    }\n"]))),p=o.ZP.div(c||(c=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 24px;\n"]))),l=o.ZP.div(u||(u=(0,i.Z)(["\n    width: 250px;\n    height: 375px;\n"])))},9779:function(n,r,e){e.r(r),e.d(r,{Reviews:function(){return m},default:function(){return w}});var t,a=e(5861),c=e(9439),u=e(7757),i=e.n(u),o=e(2791),s=e(7689),f=e(9014),p=e(9623),l=e(168),d=e(5867).ZP.ul(t||(t=(0,l.Z)(["\n\n    display: flex;    \n    align-items: center;\n    gap: 40px;\n    flex-wrap: wrap;\n\n"]))),h=e(4139),v=e(9098),x=e(184),m=function(){var n=(0,o.useState)([]),r=(0,c.Z)(n,2),e=r[0],t=r[1],u=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Hx)(u);case 3:r=n.sent,e=r.results,t(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f.ZP.error("Error while fetching movie revievs");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v.oK,{children:"Reviews "}),0===e.length&&(0,x.jsx)("div",{children:"There are no reviews for this movie."}),(0,x.jsx)(d,{children:e.map((function(n){var r=n.author,e=n.content,t=n.id;return(0,x.jsxs)("li",{children:[(0,x.jsxs)(h.QE,{children:["Author: ",r]}),(0,x.jsx)("p",{children:e})]},t)}))})]})},w=m}}]);
//# sourceMappingURL=779.925f8247.chunk.js.map