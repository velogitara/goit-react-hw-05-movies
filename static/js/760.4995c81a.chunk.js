"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[760],{6760:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var a,i,r=t(885),o=t(168),c=t(6444),s=t(3504),l=c.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  min-height: 80px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  padding-left: 15px;\n  border-top: 1px solid #2a363b;\n\n  border-bottom: 1px solid #2a363b;\n"]))),d=(0,c.ZP)(s.rU)(i||(i=(0,o.Z)(["\n  margin-left: 5px;\n"]))),p=t(184),u=[{href:"cast",text:"Cast"},{href:"review",text:"Review"}];function f(){return(0,p.jsx)(l,{children:u.map((function(e){var n=e.href,t=e.text;return(0,p.jsx)(d,{to:n,children:t},n)}))})}var h,v,m,x,Z,b,g,j,k,_=t(2791),w=t(6871),y=t(4635),P=(0,c.ZP)(s.OL)(h||(h=(0,o.Z)([""]))),U=c.ZP.div(v||(v=(0,o.Z)(["\n  display: flex;\n"]))),O=c.ZP.img(m||(m=(0,o.Z)(["\n  display: block;\n"]))),S=c.ZP.div(x||(x=(0,o.Z)(["\n  padding: 20px;\n  font-size: 18px;\n"]))),z=c.ZP.h3(Z||(Z=(0,o.Z)(["\n  color: #000f58;\n  font-size: 30px;\n"]))),C=c.ZP.p(b||(b=(0,o.Z)(["\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 5px;\n"]))),L=c.ZP.p(g||(g=(0,o.Z)(["\n  font-style: italic;\n"]))),I=c.ZP.p(j||(j=(0,o.Z)(["\n  color: #4b4453;\n"]))),N=c.ZP.p(k||(k=(0,o.Z)(["\n  font-style: italic;\n"])));function R(){var e,n,t=(0,w.TH)(),a=null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",i=t.pathname,o=(0,w.UO)().movieId,c=(0,_.useState)({}),s=(0,r.Z)(c,2),l=s[0],d=s[1],u=(0,_.useState)(""),h=(0,r.Z)(u,2),v=h[0],m=h[1];return(0,_.useEffect)((function(){y.Z.api("/movies/",o).then((function(e){return e.data})).then((function(e){var n=e.genres.map((function(e){return e.name})).join(", ");return m(n),d(e)}))}),[o,i]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(P,{to:a,children:"go back"}),(0,p.jsxs)(U,{children:[0!==l.length&&(0,p.jsx)(O,{src:l.poster_path?"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"+l.poster_path:"https://bimmridder.com/wp-content/uploads/2016/09/placeholder-300x400.png",alt:l.title}),(0,p.jsxs)(S,{children:[(0,p.jsxs)(z,{children:[l.title,l.release_date&&(0,p.jsx)("span",{children:" ("+l.release_date.slice(0,4)+")"})]}),(0,p.jsxs)(L,{children:["User score: ",Number.parseInt(10*l.vote_average),"%"]}),(0,p.jsx)(C,{children:"Overview"}),(0,p.jsx)(I,{children:l.overview}),(0,p.jsx)(C,{children:"Genres"}),(0,p.jsx)(N,{children:v})]})]}),(0,p.jsx)(f,{}),(0,p.jsx)(_.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(w.j3,{})})]})}},4635:function(e,n,t){var a=t(4569),i="f3d33ff00cd7667f5ad243a04605493c";a.defaults.baseURL="https://api.themoviedb.org/3/";var r={api:function(e,n){var t=!1;switch(e){case"/":t="trending/movie/day?api_key=".concat(i);break;case"/movies":t="search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=true");break;case"/movies/":t="movie/".concat(n,"?api_key=").concat(i);break;case"/movies/".concat(n,"/review"):t="movie/".concat(n,"/reviews?api_key=").concat(i);break;case"/movies/".concat(n,"/cast"):t="movie/".concat(n,"/credits?api_key=").concat(i);break;default:return void console.log("NOT")}if(t)return a.get("".concat(t)).then((function(e){return e}))}};n.Z=r}}]);
//# sourceMappingURL=760.4995c81a.chunk.js.map