"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[686],{9623:function(n,e,t){t.d(e,{Hx:function(){return d},Y5:function(){return l},bI:function(){return s},uV:function(){return p},wr:function(){return u}});var r=t(5861),i=t(7757),a=t.n(i),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=new URLSearchParams({api_key:"1c860efb7ea3ee5f6f74a151b9c6036d",language:"en-US"}),u=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/week?".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(c,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9098:function(n,e,t){t.d(e,{ds:function(){return s},oK:function(){return p},tl:function(){return l}});var r,i,a,o=t(168),c=t(9128),u=t(5867),s=u.ZP.ul(r||(r=(0,o.Z)(["\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    flex-wrap: wrap;\n"]))),l=(0,u.ZP)(c.A2F)(i||(i=(0,o.Z)(["\n    width: 250px;\n    height: 375px;\n    fill: #fff;\n    background-color: lightblue;\n    \n"]))),p=u.ZP.h2(a||(a=(0,o.Z)(["\n    color: #CB852B;\n    \n"])))},9245:function(n,e,t){t.d(e,{a:function(){return u}});var r,i=t(168),a=t(5867).ZP.div(r||(r=(0,i.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 24px;\n    \n"]))),o=t(184),c=t(6153).RotatingLines,u=function(){return(0,o.jsx)(a,{children:(0,o.jsx)(c,{strokeColor:"#1a1a8d",strokeWidth:"5",animationDuration:"0.75",width:"56"})})}},4139:function(n,e,t){t.d(e,{QE:function(){return u},gn:function(){return s},mo:function(){return l}});var r,i,a,o=t(168),c=t(5867),u=c.ZP.h3(r||(r=(0,o.Z)(["\n    font-size: 400;\n    color: #4848a4\n"]))),s=c.ZP.div(i||(i=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {     \n        flex-direction: row;\n        align-items: start;\n        gap: 10px;      \n    }\n"]))),l=c.ZP.div(a||(a=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    padding: 24px;\n"])))},1077:function(n,e,t){t.d(e,{T:function(){return c},V:function(){return u}});var r,i,a=t(168),o=t(5867),c=o.ZP.div(r||(r=(0,a.Z)(["\n     padding: 18px 24px;\n"]))),u=o.ZP.h1(i||(i=(0,a.Z)(["\n   \n    text-align :center;\n    font-weight: 600;\n    color: #CB852B;\n\n    @media only screen and (min-width: 768px) {\n       font-size: 800;\n       text-align: start;\n    }\n"])))},2686:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,i,a,o,c=t(5861),u=t(9439),s=t(7757),l=t.n(s),p=t(7689),d=t(2791),f=t(9623),x=t(9014),v=t(1077),h=t(4139),m=t(9098),g=t(184),Z=function(n){var e=n.movie,t=e.title,r=e.poster_path,i=e.vote_average,a=e.overview,o=e.genres,c=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",u=(10*i).toFixed(0),s=o.map((function(n){return n.name})).join(", ");return(0,g.jsxs)(h.gn,{children:[r?(0,g.jsx)("img",{src:c,width:250,alt:"".concat(t," poster")}):(0,g.jsx)(m.tl,{size:500}),(0,g.jsxs)(h.mo,{children:[(0,g.jsx)(v.V,{children:t}),(0,g.jsxs)("p",{children:["User Score: ",u," %"]}),(0,g.jsx)(h.QE,{children:"Overview"}),(0,g.jsx)("p",{children:a}),(0,g.jsx)(h.QE,{children:"Genres"}),(0,g.jsx)("p",{children:s})]})]})},w=t(168),j=t(9128),b=t(1087),k=t(5867),y=(0,k.ZP)(b.rU)(r||(r=(0,w.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: #E87946;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    color: #1a1a8d;\n  }\n"]))),P=function(n){var e=n.to,t=n.children;return(0,g.jsxs)(y,{to:e,children:[(0,g.jsx)(j.jTe,{size:"24"}),t]})},E=t(9245),S=k.ZP.section(i||(i=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    padding: 24px;\n\n"]))),U=k.ZP.ul(a||(a=(0,w.Z)(["\n    display: flex;\n    gap: 10px;\n    margin-top: 24px;\n    \n"]))),_=(0,k.ZP)(b.rU)(o||(o=(0,w.Z)(["    \n    font-size: 18px;\n    font-weight: 500;\n    padding: 6px;\n    border-radius: 6px;\n    text-decoration: none;\n    color: #1a1a8d;\n    transition: color 250 ease-in-out;\n  \n    &:hover,\n    &:focus {\n        color: #fff;\n        background-color: #4848a4;\n  }\n"]))),C=function(){var n,e,t,r,i,a,o=(0,d.useState)(null),s=(0,u.Z)(o,2),v=s[0],h=s[1],m=(0,d.useState)(!1),w=(0,u.Z)(m,2),j=w[0],b=w[1],k=(0,p.UO)().movieId,y=(0,p.TH)();return(0,d.useEffect)((function(){var n=function(){var n=(0,c.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,f.Y5)(k);case 4:e=n.sent,h(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),x.ZP.error("Error while fetching movie details");case 11:return n.prev=11,b(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[k]),v?(0,g.jsxs)(S,{children:[j&&(0,g.jsx)(E.a,{}),(0,g.jsxs)("div",{children:[(0,g.jsx)(P,{to:null!==(n=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),(0,g.jsx)(Z,{movie:v}),(0,g.jsxs)(U,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(_,{to:"cast",state:{from:null!==(t=null===y||void 0===y||null===(r=y.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"CAST"})}),(0,g.jsx)("li",{children:(0,g.jsx)(_,{to:"reviews",state:{from:null!==(i=null===y||void 0===y||null===(a=y.state)||void 0===a?void 0:a.from)&&void 0!==i?i:"/"},children:"REVIEWS"})})]})]}),(0,g.jsx)(d.Suspense,{fallback:(0,g.jsx)(E.a,{}),children:(0,g.jsx)(p.j3,{})})]}):null}}}]);
//# sourceMappingURL=686.89b44569.chunk.js.map