"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[220],{854:function(n,e,r){r(2791);var t=r(3430),a=r(184);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(t.g4,{height:"80",width:"80",radius:"9",color:"#1f43a0",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},4722:function(n,e,r){r.d(e,{i:function(){return u}});var t=r(5861),a=r(9439),i=r(7757),s=r.n(i),c=r(2791),u=function(n,e){var r=(0,c.useState)([]),i=(0,a.Z)(r,2),u=i[0],o=i[1],p=(0,c.useState)(null),l=(0,a.Z)(p,2),d=l[0],f=l[1],h=(0,c.useState)(!1),v=(0,a.Z)(h,2),x=v[0],m=v[1];return(0,c.useEffect)((function(){var r=function(){var r=(0,t.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),r.next=4,n(e);case 4:t=r.sent,o(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),f(r.t0.message);case 11:return r.prev=11,m(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[n,e]),{data:u,setData:o,loading:x,error:d}}},3220:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,i,s,c,u,o,p,l,d,f=r(2791),h=r(7689),v=r(1087),x=r(2476),m=r(854),g=r(168),Z=r(5867),w=Z.ZP.div(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin: 20px;\n"]))),j=Z.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  margin-top: 20px;\n"]))),k=Z.ZP.div(i||(i=(0,g.Z)(["\n  margin-top: 20px;\n"]))),y=Z.ZP.img(s||(s=(0,g.Z)(["\n  max-width: 200px;\n  height: 100%;\n  margin-right: 20px;\n"]))),b=Z.ZP.h1(c||(c=(0,g.Z)(["\n  font-size: 24px;\n"]))),_=Z.ZP.p(u||(u=(0,g.Z)(["\n  margin-top: 10px;\n"]))),P=Z.ZP.ul(o||(o=(0,g.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),S=Z.ZP.li(p||(p=(0,g.Z)(["\n  margin: 5px 0;\n"]))),U=Z.ZP.div(l||(l=(0,g.Z)(["\n  margin-top: 20px;\n"]))),C=(0,Z.ZP)(v.rU)(d||(d=(0,g.Z)(["\n  display: block;\n  margin: 5px 0;\n  font-size: 18px;\n"]))),L=r(4722),R=r(184),z=function(){var n,e,r=(0,h.UO)().movieId,t=(0,h.TH)(),a=(0,f.useRef)((null===(n=t.state)||void 0===n?void 0:n.from)||"/"),i=(0,L.i)(x.Y5,r),s=i.data;if(i.loading)return(0,R.jsx)(m.Z,{});var c=s.title,u=s.release_date,o=s.popularity,p=s.overview,l=s.genres,d=s.poster_path;return(0,R.jsxs)(w,{children:[(0,R.jsx)(v.rU,{to:a.current,children:(0,R.jsx)("button",{type:"button",children:"Go back"})}),(0,R.jsxs)(j,{children:[(0,R.jsx)(y,{src:d?"https://image.tmdb.org/t/p/w500".concat(d):"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg",alt:c}),(0,R.jsxs)(k,{children:[(0,R.jsxs)(b,{children:[c,": (",null===u||void 0===u?void 0:u.slice(0,4),")"]}),(0,R.jsxs)("p",{children:["User score: ",null===(e=o/100)||void 0===e?void 0:e.toFixed(0),"%"]}),(0,R.jsx)("h2",{children:"Overview"}),(0,R.jsx)(_,{children:p}),(0,R.jsx)("h2",{children:"Genres"}),(0,R.jsx)(P,{children:null===l||void 0===l?void 0:l.map((function(n){return(0,R.jsx)(S,{children:n.name},n.id)}))})]})]}),(0,R.jsx)("hr",{}),(0,R.jsxs)(U,{children:[(0,R.jsx)("h3",{children:"Additional information"}),(0,R.jsxs)("ul",{children:[(0,R.jsx)(C,{to:"cast",children:"Cast"}),(0,R.jsx)(C,{to:"reviews",children:"Reviews"})]}),(0,R.jsx)("hr",{}),(0,R.jsx)(f.Suspense,{fallback:(0,R.jsx)(m.Z,{}),children:(0,R.jsx)(h.j3,{})})]})]})}},2476:function(n,e,r){r.d(e,{Bt:function(){return d},Tg:function(){return u},Y5:function(){return p},vw:function(){return o},wL:function(){return l}});var t=r(5861),a=r(7757),i=r.n(a),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="014d1e0498d531f96fe9aa54f119a1c9",u=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/all/day",{params:{api_key:"".concat(c)}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie",{params:{include_adult:!1,language:"en-US",page:1,api_key:"".concat(c),query:"".concat(e)}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e),{params:{api_key:"".concat(c),language:"en-US"}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits"),{params:{api_key:"".concat(c),language:"en-US"}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews"),{params:{language:"en-US",page:1,api_key:"".concat(c)}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=220.f77443dc.chunk.js.map