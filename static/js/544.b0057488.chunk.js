"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{854:function(t,e,r){r(2791);var n=r(3430),a=r(184);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(n.g4,{height:"80",width:"80",radius:"9",color:"#1f43a0",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},6368:function(t,e,r){r(2791);var n=r(7689),a=r(1087),u=r(184);e.Z=function(t){var e=t.movies,r=(0,n.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id.toString()),state:{from:r},children:t.title})},t.id)}))})}},4722:function(t,e,r){r.d(e,{i:function(){return i}});var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(2791),i=function(t,e){var r=(0,s.useState)([]),u=(0,a.Z)(r,2),i=u[0],o=u[1],p=(0,s.useState)(null),f=(0,a.Z)(p,2),l=f[0],v=f[1],d=(0,s.useState)(!1),h=(0,a.Z)(d,2),g=h[0],m=h[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),r.next=4,t(e);case 4:n=r.sent,o(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),v(r.t0.message);case 11:return r.prev=11,m(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[t,e]),{data:i,setData:o,loading:g,error:l}}},9544:function(t,e,r){r.r(e);var n=r(2476),a=r(854),u=r(6368),c=r(4722),s=(r(2791),r(184));e.default=function(){var t=(0,c.i)(n.Tg),e=t.data,r=t.loading;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending Today"}),r&&(0,s.jsx)(a.Z,{}),(0,s.jsx)(u.Z,{movies:e})]})}},2476:function(t,e,r){r.d(e,{Bt:function(){return l},Tg:function(){return i},Y5:function(){return p},vw:function(){return o},wL:function(){return f}});var n=r(5861),a=r(7757),u=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="014d1e0498d531f96fe9aa54f119a1c9",i=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day",{params:{api_key:"".concat(s)}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie",{params:{include_adult:!1,language:"en-US",page:1,api_key:"".concat(s),query:"".concat(e)}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e),{params:{api_key:"".concat(s),language:"en-US"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:"".concat(s),language:"en-US"}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews"),{params:{language:"en-US",page:1,api_key:"".concat(s)}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.b0057488.chunk.js.map