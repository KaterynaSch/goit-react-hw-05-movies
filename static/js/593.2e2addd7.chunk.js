"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{9623:function(n,e,r){r.d(e,{Hx:function(){return l},Y5:function(){return f},bI:function(){return s},uV:function(){return p},wr:function(){return i}});var t=r(5861),a=r(7757),u=r.n(a),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=new URLSearchParams({api_key:"1c860efb7ea3ee5f6f74a151b9c6036d",language:"en-US"}),i=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/week?".concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(c,"&query=").concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?").concat(c));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?").concat(c));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?").concat(c));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,r){r.d(e,{a:function(){return i}});var t,a=r(168),u=r(5867).ZP.div(t||(t=(0,a.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 24px;\n    \n"]))),o=r(184),c=r(6153).RotatingLines,i=function(){return(0,o.jsx)(u,{children:(0,o.jsx)(c,{strokeColor:"#1a1a8d",strokeWidth:"5",animationDuration:"0.75",width:"56"})})}},7047:function(n,e,r){r.d(e,{e:function(){return l}});var t,a,u=r(7689),o=r(1087),c=r(168),i=r(5867),s=i.ZP.li(t||(t=(0,c.Z)(["\n  padding: 8px;"]))),f=i.ZP.p(a||(a=(0,c.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: navy;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline\n  }\n"]))),p=r(184),l=function(n){var e=n.movies,r=(0,u.TH)();return(0,p.jsx)("ul",{children:e.map((function(n){var e;return(0,p.jsx)(s,{children:(0,p.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:r},children:(0,p.jsx)(f,{children:null!==(e=n.title)&&void 0!==e?e:n.original_name})})},n.id)}))})}},1077:function(n,e,r){r.d(e,{T:function(){return c},V:function(){return i}});var t,a,u=r(168),o=r(5867),c=o.ZP.div(t||(t=(0,u.Z)(["\n     padding: 18px 24px;\n"]))),i=o.ZP.h1(a||(a=(0,u.Z)(["\n   \n    text-align :center;\n    font-weight: 600;\n    color: #CB852B;\n\n    @media only screen and (min-width: 768px) {\n       font-size: 800;\n       text-align: start;\n    }\n"])))},8593:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,u,o=r(5861),c=r(9439),i=r(7757),s=r.n(i),f=r(2791),p=r(1087),l=r(9014),d=r(9623),h=r(7047),x=r(168),v=r(5867),m=v.ZP.form(t||(t=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  /* justify-content: center; */\n  margin: 20px;\n"]))),g=v.ZP.input(a||(a=(0,x.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n"]))),Z=v.ZP.button(u||(u=(0,x.Z)(["\n  background-color: lightblue;\n  border: 1px solid #0d57aa;\n  border-radius: 4px;\n  padding: 8px 18px;\n  font-size: 16px;\n  transition: background-color 250 ease-in-out, color 250 ease-in-out;\n  /* 250 ease-in-out */\n\n  &:hover,\n  &:focus {\n    background-color: #0d57aa;\n    color: #ffffff;\n  }\n"]))),b=r(184),w=function(){var n=(0,f.useState)(),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=(0,p.lr)(),u=(0,c.Z)(a,2)[1],o=(0,f.useRef)(null);return(0,b.jsxs)(m,{onSubmit:function(n){n.preventDefault(),u(""!==r?{query:r}:{}),o.current.reset()},children:[(0,b.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"query",onChange:function(n){t(n.target.value)}}),(0,b.jsx)(Z,{type:"submit",children:"Search"})]})},y=r(9245),k=r(1077),j=function(){var n=(0,f.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=(0,p.lr)(),u=(0,c.Z)(a,1)[0],i=(0,f.useState)(!1),x=(0,c.Z)(i,2),v=x[0],m=x[1];return(0,f.useEffect)((function(){var n,e=null!==(n=u.get("query"))&&void 0!==n?n:"";function r(){return(r=(0,o.Z)(s().mark((function n(){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,m(!0),n.next=6,(0,d.bI)(e);case 6:r=n.sent,0===(a=r.results).length?l.ZP.error("Sorry, there are no films matching your search query. Please try again."):t(a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),l.ZP.error("Error while fetching films. Please try again.");case 14:return n.prev=14,m(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[2,11,14,17]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[u]),(0,b.jsxs)(k.T,{children:[(0,b.jsx)(w,{}),v&&(0,b.jsx)(y.a,{}),(0,b.jsx)(h.e,{movies:r})]})}}}]);
//# sourceMappingURL=593.2e2addd7.chunk.js.map