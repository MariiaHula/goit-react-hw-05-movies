"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{854:function(e,r,t){t(2791);var n=t(3430),a=t(184);r.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(n.g4,{height:"80",width:"80",radius:"9",color:"#1f43a0",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},4722:function(e,r,t){t.d(r,{i:function(){return i}});var n=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),i=function(e,r){var t=(0,s.useState)([]),u=(0,a.Z)(t,2),i=u[0],o=u[1],p=(0,s.useState)(null),f=(0,a.Z)(p,2),l=f[0],d=f[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),g=h[0],m=h[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,e(r);case 4:n=t.sent,o(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),d(t.t0.message);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e,r]),{data:i,setData:o,loading:g,error:l}}},8871:function(e,r,t){t.r(r);t(2791);var n=t(7689),a=t(2476),u=t(854),c=t(4722),s=t(184);r.default=function(){var e=(0,n.UO)().movieId,r=(0,c.i)(a.Bt,e),t=r.data,i=r.loading;return(0,s.jsxs)("div",{children:[i&&(0,s.jsx)(u.Z,{}),(0,s.jsx)("ul",{children:t.length?t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("p",{children:"There are no reviews for this movie yet"})})]})}},2476:function(e,r,t){t.d(r,{Bt:function(){return l},Tg:function(){return i},Y5:function(){return p},vw:function(){return o},wL:function(){return f}});var n=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="014d1e0498d531f96fe9aa54f119a1c9",i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day",{params:{api_key:"".concat(s)}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{params:{include_adult:!1,language:"en-US",page:1,api_key:"".concat(s),query:"".concat(r)}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r),{params:{api_key:"".concat(s),language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits"),{params:{api_key:"".concat(s),language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews"),{params:{language:"en-US",page:1,api_key:"".concat(s)}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=871.cc5ffdca.chunk.js.map