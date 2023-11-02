"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{854:function(n,t,e){e(2791);var r=e(3430),a=e(184);t.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#1f43a0",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},3174:function(n,t,e){e.d(t,{Z:function(){return v}});e(2791);var r,a,c,i,u,o=e(7689),s=e(168),p=e(5867),d=e(1087),f=p.ZP.div(r||(r=(0,s.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"]))),l=p.ZP.div(a||(a=(0,s.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  width: 250px;\n"]))),x=p.ZP.img(c||(c=(0,s.Z)(["\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n"]))),g=(0,p.ZP)(d.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: #333;\n  font-size: 18px;\n  display: block;\n  margin-top: 10px;\n  &:hover {\n    color: #0077cc;\n  }\n"]))),h=(p.ZP.img(u||(u=(0,s.Z)(["\n  width: 300px;\n  height: 300px;\n  margin: 0 auto;\n"]))),e(184)),v=function(n){var t=n.movies,e=(n.query,(0,o.TH)());return(0,h.jsx)(f,{children:t.map((function(n){return(0,h.jsx)(l,{children:(0,h.jsxs)(g,{to:"/movies/".concat(n.id.toString()),state:{from:e},children:[(0,h.jsx)(x,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg",alt:n.title}),n.title]})},n.id)}))})}},4722:function(n,t,e){e.d(t,{i:function(){return o}});var r=e(5861),a=e(9439),c=e(7757),i=e.n(c),u=e(2791),o=function(n,t){var e=(0,u.useState)([]),c=(0,a.Z)(e,2),o=c[0],s=c[1],p=(0,u.useState)(null),d=(0,a.Z)(p,2),f=d[0],l=d[1],x=(0,u.useState)(!1),g=(0,a.Z)(x,2),h=g[0],v=g[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,n(t);case 4:r=e.sent,s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,t]),{data:o,setData:s,loading:h,error:f}}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c=e(2476),i=e(854),u=e(3174),o=e(4722),s=(e(2791),e(168)),p=e(5867),d=p.ZP.div(r||(r=(0,s.Z)(["\n  padding: 20px;\n"]))),f=p.ZP.h1(a||(a=(0,s.Z)(["\n  text-align: center;\n  font-weight: bold;\n  color: #121212;\n  letter-spacing: 5px;\n  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),\n    0px -4px 10px rgba(255, 255, 255, 0.1);\n"]))),l=e(184),x=function(){var n=(0,o.i)(c.Tg),t=n.data,e=n.loading;return(0,l.jsxs)(d,{children:[(0,l.jsx)(f,{children:"Trending Today"}),e&&(0,l.jsx)(i.Z,{}),(0,l.jsx)(u.Z,{movies:t})]})}},2476:function(n,t,e){e.d(t,{Bt:function(){return f},Tg:function(){return o},Y5:function(){return p},vw:function(){return s},wL:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="014d1e0498d531f96fe9aa54f119a1c9",o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day",{params:{api_key:"".concat(u)}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{params:{include_adult:!1,language:"en-US",page:1,api_key:"".concat(u),query:"".concat(t)}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t),{params:{api_key:"".concat(u),language:"en-US"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits"),{params:{api_key:"".concat(u),language:"en-US"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews"),{params:{language:"en-US",page:1,api_key:"".concat(u)}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.bdf0d77c.chunk.js.map