"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{9165:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a,i,r,c,o=t(2982),s=t(885),u=t(4635),l=t(2791),d=t(3504),m=t(6871),p=t(5705),f=t(168),h=t(6444),v=(0,h.ZP)(p.l0)(a||(a=(0,f.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),x=(0,h.ZP)(p.gN)(i||(i=(0,f.Z)(["\n  min-width: 300px;\n  padding: 5px;\n  margin-right: 20px;\n"]))),y=(0,h.ZP)(p.Bc)(r||(r=(0,f.Z)(["\n  color: red;\n  font-style: italic;\n"]))),g=h.ZP.button(c||(c=(0,f.Z)(["\n  margin-top: 20px;\n  padding: 5px;\n"]))),Z=t(4386),k=t(184),b=Z.Ry().shape({query:Z.Z_().required()}),j={query:""},_=function(){var e=(0,d.lr)(),n=(0,s.Z)(e,2),t=n[0],a=n[1];console.log(t);return(0,k.jsx)(p.J9,{initialValues:j,validationSchema:b,onSubmit:function(e,n){n.resetForm(),console.log(e),a({query:e.query})},children:(0,k.jsxs)(v,{children:[(0,k.jsxs)("label",{htmlFor:"query",children:[(0,k.jsx)(x,{type:"text",name:"query",placeholder:"Search movie"}),(0,k.jsx)(y,{name:"query",component:"span"})]}),(0,k.jsx)(g,{type:"submit",children:"Search movie"})]})})},q=t(9937);function w(){var e=(0,d.lr)(),n=(0,s.Z)(e,1)[0].get("query"),t=(0,m.TH)().pathname,a=(0,l.useState)(),i=(0,s.Z)(a,2),r=i[0],c=i[1];return(0,l.useEffect)((function(){n&&u.Z.api(t,n).then((function(e){c((0,o.Z)(e.data.results)),console.log(e)}))}),[n,t]),(0,k.jsxs)("div",{children:[(0,k.jsx)(_,{}),(0,k.jsx)(q.Z,{data:r})]})}},9937:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3504),i=t(6871),r=t(184);function c(e){var n=e.data,t=(0,i.TH)();return(0,r.jsx)("ul",{children:n&&n.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{movie_id:e.id,from:t},children:(0,r.jsx)("p",{children:e.title})})},e.id)}))})}},4635:function(e,n,t){var a=t(4569),i="f3d33ff00cd7667f5ad243a04605493c";a.defaults.baseURL="https://api.themoviedb.org/3/";var r={api:function(e,n){var t=!1;switch(e){case"/":t="trending/movie/day?api_key=".concat(i);break;case"/movies":t="search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=true");break;case"/movies/":t="movie/".concat(n,"?api_key=").concat(i);break;case"/movies/".concat(n,"/review"):t="movie/".concat(n,"/reviews?api_key=").concat(i);break;case"/movies/".concat(n,"/cast"):t="movie/".concat(n,"/credits?api_key=").concat(i);break;default:return void console.log("NOT")}if(t)return a.get("".concat(t)).then((function(e){return e}))}};n.Z=r}}]);
//# sourceMappingURL=165.5116ecc1.chunk.js.map