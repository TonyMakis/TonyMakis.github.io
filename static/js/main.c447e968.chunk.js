(this["webpackJsonpprojects-grid"]=this["webpackJsonpprojects-grid"]||[]).push([[0],{104:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(10),i=n.n(s),o=(n(104),n(16)),l=n.n(o),d=n(81),u=n(82),h=n(92),j=n(91),p=n(32),b=n(237),g=n(90),m=n.n(g),x=n(89),f=n.n(x),O=n(232),v=n(233),y=n(210),k=n(211),w=n(234),S=n(235),N=n(236),B=n(228),C=Object(B.a)({card:{flexGrow:1,backgroundColor:"#f7d2ff",borderRadius:12,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), \n                0 6px 20px 0 rgba(0, 0, 0, 0.4)"},paperBack:{background:"linear-gradient(45deg, #5edf4d96, #58ccdc)",borderRadius:16,padding:"0.8em",paddingBottom:"0.5em"},fancyTitle:{color:"#122715",fontFamily:"Segoe UI",fontSize:"1.4em",fontWeight:"bold"},coloredArrowEmoji:{color:"#3f51b5",fontSize:"0.8em"},flexing:{display:"flex"},heading:{fontSize:"0.8em",flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:"0.8em"}}),R=n(48),z=n(238),D=n(239),T=n(230),_=n(231),L=n(49),U=n.n(L),P=n(86),I=n.n(P),E=n(87),M=n.n(E),H=n(88),A=n.n(H),J=n(83),F=n(6),W=n.n(F);function G(e){var t,n=e.lang;return"C"===n?t=Object(a.jsx)("i",{style:{fontSize:"3.5em",paddingRight:"0.5em"},className:"devicon-c-plain"}):"C++"===n?t=Object(a.jsx)("i",{style:{fontSize:"3.5em",paddingRight:"0.5em"},className:"devicon-cplusplus-plain"}):"Java"===n?t=Object(a.jsx)("i",{style:{fontSize:"3.5em",paddingRight:"0.5em"},className:"devicon-java-plain-wordmark"}):"JavaScript"===n?t=Object(a.jsx)("i",{style:{fontSize:"3.5em",paddingRight:"0.5em"},className:"devicon-javascript-plain"}):"HTML"===n?t=Object(a.jsx)("i",{style:{fontSize:"3.5em",paddingRight:"0.5em"},className:"devicon-html5-plain-wordmark"}):"CSS"===n?t=Object(a.jsx)("i",{style:{fontSize:"3.5em",paddingRight:"0.5em"},className:"devicon-css3-plain-wordmark"}):"Empty"===n&&(t=Object(a.jsx)(y.a,{children:"Github doesn't have any recorded!"})),Object(a.jsx)(a.Fragment,{children:t})}G.propTypes={lang:W.a.string},G.defaultProps={lang:""};var Y=n(85),$=n.n(Y);function q(e){for(var t={labels:[],datasets:[{data:[],backgroundColor:[],hoverBackgroundColor:[]}]},n={},a="chappie",r=0;r<e.length;r+=1)n[e[r].user]=1+(n[e[r].user]||0);for(var c=0,s=Object.entries(n);c<s.length;c++){var i=Object(R.a)(s[c],2),o=i[0],l=i[1];a="".concat(a,"!");var d=$()({seed:a});t.labels.push(o),t.datasets[0].data.push(l),t.datasets[0].backgroundColor.push(d),t.datasets[0].hoverBackgroundColor.push(d)}return t}function K(e){for(var t=[],n=0,a=Object.keys(e[0]);n<a.length;n++){var r=a[n];t.push(r)}return Array.isArray(t)&&!t.length&&t.push("Empty"),t}var Q=Object(B.a)((function(e){return{root:{marginLeft:"auto",marginRight:"auto",marginBottom:"1em",width:"93%"},beautifyBackground:{color:"white",backgroundColor:"#3f51b5",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), \n                0 6px 20px 0 rgba(0, 0, 0, 0.4)"},langBadge:{marginTop:"0.5em",marginLeft:"0.5em",background:"linear-gradient(45deg, #69ff5596, #8af1ff)",borderRadius:4,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), \n    0 6px 20px 0 rgba(0, 0, 0, 0.4)"},heading:{textShadow:"1px 1px 0px rgba(0,0,0,0.2)",fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0,color:"white"},secondaryHeading:{textShadow:"1px 1px 0px rgba(0,0,0,0.2)",fontSize:e.typography.pxToRem(15),color:"white"}}}));function V(e){var t=e.contributors,n=e.commits,r=e.languagesUsed,s=Q(),i=c.a.useState(!1),o=Object(R.a)(i,2),l=o[0],d=o[1],u=function(e){return function(t,n){d(!!n&&e)}};return Object(a.jsxs)("div",{className:s.root,children:[Object(a.jsxs)(z.a,{className:s.beautifyBackground,expanded:"panel1"===l,onChange:u("panel1"),children:[Object(a.jsxs)(D.a,{expandIcon:Object(a.jsx)(U.a,{style:{color:"white"}}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(a.jsx)(y.a,{className:s.heading,children:Object(a.jsx)(I.a,{})}),Object(a.jsx)(y.a,{className:s.secondaryHeading,children:Object(a.jsx)("strong",{children:"Contributors"})})]}),Object(a.jsx)(T.a,{className:s.beautifyBackground,align:"left",children:Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(_.a,{href:"https://github.com/".concat(e.user),color:"inherit",target:"_blank",children:e.user})},e.id)}))||"No contributors found!"})})]}),Object(a.jsxs)(z.a,{className:s.beautifyBackground,expanded:"panel2"===l,onChange:u("panel2"),children:[Object(a.jsxs)(D.a,{expandIcon:Object(a.jsx)(U.a,{style:{color:"white"}}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[Object(a.jsx)(y.a,{className:s.heading,children:Object(a.jsx)(M.a,{})}),Object(a.jsx)(y.a,{className:s.secondaryHeading,children:Object(a.jsx)("strong",{children:"Commit Info"})})]}),Object(a.jsx)(T.a,{className:s.beautifyBackground,align:"center",children:Object(a.jsx)(J.Doughnut,{styles:{background:"#f7d2ff"},legend:{display:!1},options:{showLines:!1},data:q(n)})})]}),Object(a.jsxs)(z.a,{className:s.beautifyBackground,expanded:"panel3"===l,onChange:u("panel3"),children:[Object(a.jsxs)(D.a,{expandIcon:Object(a.jsx)(U.a,{style:{color:"white"}}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[Object(a.jsx)(y.a,{className:s.heading,children:Object(a.jsx)(A.a,{})}),Object(a.jsx)(y.a,{className:s.secondaryHeading,children:Object(a.jsx)("strong",{children:"Dev. Languages"})})]}),Object(a.jsx)(T.a,{className:s.beautifyBackground,align:"left",children:K(r).map((function(e){return Object(a.jsx)(G,{lang:e},e)}))})]})]})}function X(e){var t=e.title,n=e.description,r=e.projectUrl,c=e.languagesUsed,s=e.contributors,i=e.commits,o=e.created,l=C();return Object(a.jsxs)(O.a,{className:l.card,children:[Object(a.jsxs)(v.a,{children:[Object(a.jsx)(y.a,{className:l.fancyTitle,gutterBottom:!0,children:t||"Title TBA . . ."}),Object(a.jsxs)(k.a,{elevation:3,className:l.paperBack,children:[Object(a.jsx)(y.a,{children:n||"Description TBD . . ."}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{component:"h3",children:["\ud83d\udcc5 ",Object(a.jsx)("strong",{children:Object(a.jsx)("em",{children:"\n                  ".concat(o.toLocaleString("default",{month:"long"}),"\n                  ").concat(o.getDate(),",\n                  ").concat(o.getFullYear(),"\n                ")})})]}),Object(a.jsx)("br",{}),Object(a.jsx)(w.a,{className:l.flexing,children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)(N.a,{href:"".concat(r,"/tree/master"),target:"_blank",variant:"contained",color:"primary",className:l.button,startIcon:Object(a.jsx)(f.a,{}),children:"SOURCE"}),Object(a.jsx)(N.a,{href:"PrettyPlaylister"===t?"https://www.prettyplaylister.com":"https://TonyMakis.github.io/".concat(t),target:"_blank",variant:"contained",color:"primary",className:l.button,startIcon:Object(a.jsx)(m.a,{}),children:"DEMO"})]})})]})]}),Object(a.jsx)(V,{contributors:s,commits:i,languagesUsed:c})]})}function Z(e){return e?Promise.all(e.map((function(e){return fetch(e).then((function(e){return e.json()}))}))):[]}function ee(e){for(var t=[],n=0;n<e.length;n+=1)t.push({}),t[n].commits=e[n].commits,t[n].contribs=e[n].contribs,t[n].created_at=e[n].created_at,t[n].description=e[n].description,t[n].html_url=e[n].html_url,t[n].id=e[n].id,t[n].langs=e[n].langs,t[n].name=e[n].name;return t}function te(e,t){for(var n=[],a=0;a<t.length;a+=1){n=[];for(var r=0;r<t[a].length;r+=1)t[a][r]&&n.push({id:t[a][r].id,user:t[a][r].login});e[a].contribs=n}}function ne(e,t){for(var n=[],a=0;a<t.length;a+=1){n=[];for(var r=0;r<t[a].length;r+=1)t[a][r].committer&&n.push({id:t[a][r].sha,user:t[a][r].committer.login});e[a].commits=n}}function ae(e,t){for(var n=[],a=0;a<t.length;a+=1)(n=[]).push(t[a]),e[a].langs=n}function re(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(p.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],a=[],r=[],c=0,t){for(c=0;c<t.length;c+=1)n.push(t[c].contributors_url);for(c=0;c<t.length;c+=1)a.push(t[c].languages_url);for(c=0;c<t.length;c+=1)r.push(t[c].commits_url.slice(0,-6))}return e.next=7,Z(n).then((function(e){return te(t,e)}));case 7:return e.next=9,Z(a).then((function(e){return ae(t,e)}));case 9:return e.next=11,Z(r).then((function(e){return ne(t,e)}));case 11:return e.abrupt("return",ee(t));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}V.defaultProps={contributors:[],commits:[],languagesUsed:[]},X.defaultProps={title:"",description:"",projectUrl:"",languagesUsed:[],contributors:[],commits:[],created:new Date};var se=n(60),ie=n(61);function oe(){var e=Object(ie.b)({loading:!0,indicator:Object(a.jsx)(ie.a,{width:"155"})}),t=e.containerProps,n=e.indicatorEl;return Object(a.jsx)("section",Object(se.a)(Object(se.a)({id:"LoadSpinner"},t),{},{children:n}))}function le(e){return de.apply(this,arguments)}function de(){return(de=Object(p.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,re(a);case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={projectData:[],isLoading:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isLoading){e.next=6;break}return e.next=4,le("https://api.github.com/users/TonyMakis/repos");case 4:t=e.sent,this.setState({projectData:t,isLoading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state,n=t.isLoading,r=t.projectData;return e=n?Object(a.jsx)("div",{className:"center",children:Object(a.jsx)(oe,{})}):Object(a.jsxs)("div",{className:"projects",children:[Object(a.jsx)("h1",{children:"My Public Projects"}),Object(a.jsx)(b.a,{container:!0,style:{padding:"0.5em"},children:r.map((function(e){return Object(a.jsx)(b.a,{item:!0,style:{padding:"2em"},xs:12,sm:12,md:6,lg:4,xl:3,children:Object(a.jsx)(X,{title:e.name,description:e.description,projectUrl:e.html_url,languagesUsed:e.langs,contributors:e.contribs,commits:e.commits,created:new Date(e.created_at)},e.id)},e.id)}))})]}),Object(a.jsx)("div",{id:"app",children:e})}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[209,1,2]]]);
//# sourceMappingURL=main.c447e968.chunk.js.map