"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{548:function(n,t,r){r.d(t,{Hx:function(){return h},Y5:function(){return p},bI:function(){return o},uV:function(){return f},wr:function(){return s}});var e=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=new URLSearchParams({api_key:"1c860efb7ea3ee5f6f74a151b9c6036d",language:"en-US"}),s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/week?".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,r){r.r(t),r.d(t,{Cast:function(){return g},default:function(){return Z}});var e,a,c=r(861),u=r(439),i=r(757),s=r.n(i),o=r(548),p=r(791),f=r(689),h=r(14),l=r(168),d=r(128),v=r(867),x=v.ZP.ul(e||(e=(0,l.Z)(["\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    flex-wrap: wrap;\n"]))),m=(0,v.ZP)(d.A2F)(a||(a=(0,l.Z)(["\n    width: 250px;\n    height: 375px;\n    fill: #fff;\n    background-color: lightblue;\n"]))),w=r(184),g=function(){var n=(0,p.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,f.UO)().movieId;return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.uV)(a);case 3:t=n.sent,r=t.cast,e(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h.ZP.error("Error while fetching movie cast");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Cast"}),0===r.length&&(0,w.jsx)("div",{children:"There is no cast list for this movie."}),(0,w.jsx)(x,{children:r.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,w.jsxs)("li",{children:[r?(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:e,width:250}):(0,w.jsx)(m,{size:250}),(0,w.jsx)("h3",{children:e}),(0,w.jsxs)("p",{children:["Character: ",a]})]},t)}))})]})},Z=g}}]);
//# sourceMappingURL=387.201140d4.chunk.js.map