(this["webpackJsonpprojects-grid"]=this["webpackJsonpprojects-grid"]||[]).push([[0],{195:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),l=(t(93),t(22)),i=t.n(l),s=t(37),u=t(16),m=t(225),d=t(80),g=t.n(d),p=t(79),f=t.n(p),h=t(220),b=t(221),E=t(198),x=t(197),y=t(222),v=t(223),k=t(224),w=t(216),j=Object(w.a)({card:{flexGrow:1,backgroundColor:"#f7d2ff",borderRadius:12,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), \n                0 6px 20px 0 rgba(0, 0, 0, 0.4)"},paperBack:{background:"linear-gradient(45deg, #5edf4d96, #58ccdc)",borderRadius:16,padding:"0.8em",paddingBottom:"0.5em"},fancyTitle:{color:"#122715",fontFamily:"Segoe UI",fontSize:"1.4em",fontWeight:"bold"},coloredArrowEmoji:{color:"#3f51b5",fontSize:"0.8em"},flexing:{display:"flex"},heading:{fontSize:"0.8em",flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:"0.8em"}}),N=t(226),B=t(227),S=t(218),O=t(219),C=t(44),_=t.n(C),U=t(76),T=t.n(U),D=t(77),I=t.n(D),L=t(78),R=t.n(L),z=t(73),P=t(74),H=t.n(P);function M(e){for(var a={labels:[],datasets:[{data:[],backgroundColor:[],hoverBackgroundColor:[]}]},t={},n="chappie",r=0;r<e.length;r+=1)t[e[r].user]=1+(t[e[r].user]||0);for(var o=0,c=Object.entries(t);o<c.length;o++){var l=Object(u.a)(c[o],2),i=l[0],s=l[1];n="".concat(n,"!");var m=H()({seed:n});a.labels.push(i),a.datasets[0].data.push(s),a.datasets[0].backgroundColor.push(m),a.datasets[0].hoverBackgroundColor.push(m)}return a}var W=Object(w.a)((function(e){return{root:{marginLeft:"auto",marginRight:"auto",marginBottom:"1em",width:"93%"},beautifyBackground:{color:"white",backgroundColor:"#3f51b5",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), \n                0 6px 20px 0 rgba(0, 0, 0, 0.4)"},langBadge:{marginTop:"0.5em",marginLeft:"0.5em",background:"linear-gradient(45deg, #69ff5596, #8af1ff)",borderRadius:4,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), \n    0 6px 20px 0 rgba(0, 0, 0, 0.4)"},heading:{textShadow:"1px 1px 0px rgba(0,0,0,0.2)",fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0,color:"white"},secondaryHeading:{textShadow:"1px 1px 0px rgba(0,0,0,0.2)",fontSize:e.typography.pxToRem(15),color:"white"}}}));function F(e){var a=e.contributors,t=e.commits,n=e.languagesUsed,o=W(),c=r.a.useState(!1),l=Object(u.a)(c,2),i=l[0],s=l[1],m=function(e){return function(a,t){s(!!t&&e)}};return r.a.createElement("div",{className:o.root},r.a.createElement(N.a,{className:o.beautifyBackground,expanded:"panel1"===i,onChange:m("panel1")},r.a.createElement(B.a,{expandIcon:r.a.createElement(_.a,{style:{color:"white"}}),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(E.a,{className:o.heading},r.a.createElement(T.a,null)),r.a.createElement(E.a,{className:o.secondaryHeading},r.a.createElement("strong",null,"Contributors"))),r.a.createElement(S.a,{className:o.beautifyBackground,align:"left"},r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(O.a,{href:"https://github.com/".concat(e.user),color:"inherit",target:"_blank"},e.user))}))||"No contributors found!"))),r.a.createElement(N.a,{className:o.beautifyBackground,expanded:"panel2"===i,onChange:m("panel2")},r.a.createElement(B.a,{expandIcon:r.a.createElement(_.a,{style:{color:"white"}}),"aria-controls":"panel2bh-content",id:"panel2bh-header"},r.a.createElement(E.a,{className:o.heading},r.a.createElement(I.a,null)),r.a.createElement(E.a,{className:o.secondaryHeading},r.a.createElement("strong",null,"Commit Info"))),r.a.createElement(S.a,{className:o.beautifyBackground,align:"center"},r.a.createElement(z.Doughnut,{styles:{background:"#f7d2ff"},legend:{display:!1},options:{showLines:!1},data:M(t)}))),r.a.createElement(N.a,{className:o.beautifyBackground,expanded:"panel3"===i,onChange:m("panel3")},r.a.createElement(B.a,{expandIcon:r.a.createElement(_.a,{style:{color:"white"}}),"aria-controls":"panel3bh-content",id:"panel3bh-header"},r.a.createElement(E.a,{className:o.heading},r.a.createElement(R.a,null)),r.a.createElement(E.a,{className:o.secondaryHeading},r.a.createElement("strong",null,"Dev. Languages"))),r.a.createElement(S.a,{className:o.beautifyBackground,align:"left"},r.a.createElement(E.a,null,function(e){for(var a=[],t=0,n=Object.keys(e[0]);t<n.length;t++){var r=n[t];a.push("https://img.icons8.com/".concat(r.toLowerCase()))}return a}(n).map((function(e){return r.a.createElement("img",{className:o.langBadge,alt:e,src:e})}))))))}function J(e){var a=e.title,t=e.description,n=e.projectUrl,o=e.languagesUsed,c=e.contributors,l=e.commits,i=e.created,s=j();return r.a.createElement(h.a,{className:s.card},r.a.createElement(b.a,null,r.a.createElement(E.a,{className:s.fancyTitle,gutterBottom:!0},a||"Title TBD . . ."),r.a.createElement(x.a,{elevation:3,className:s.paperBack},r.a.createElement(E.a,null,t||"Description TBD . . ."),r.a.createElement("br",null),r.a.createElement(E.a,{component:"h3"},"\ud83d\udcc5 ",r.a.createElement("strong",null,r.a.createElement("em",null,"\n                  ".concat(i.toLocaleString("default",{month:"long"}),"\n                  ").concat(i.getDate(),",\n                  ").concat(i.getFullYear(),"\n                ")))),r.a.createElement("br",null),r.a.createElement(y.a,{className:s.flexing},r.a.createElement(v.a,null,r.a.createElement(k.a,{href:"".concat(n,"/tree/master"),target:"_blank",variant:"contained",color:"primary",className:s.button,startIcon:r.a.createElement(f.a,null)},"SOURCE"),r.a.createElement(k.a,{href:"https://TonyMakis.github.io/".concat(a),target:"_blank",variant:"contained",color:"primary",className:s.button,startIcon:r.a.createElement(g.a,null)},"DEMO"))))),r.a.createElement(F,{contributors:c,commits:l,languagesUsed:o}))}function A(e){return e?Promise.all(e.map((function(e){return fetch(e).then((function(e){return e.json()}))}))):[]}function G(e){for(var a=[],t=0;t<e.length;t+=1)a.push({}),a[t].commits=e[t].commits,a[t].contribs=e[t].contribs,a[t].created_at=e[t].created_at,a[t].description=e[t].description,a[t].html_url=e[t].html_url,a[t].id=e[t].id,a[t].langs=e[t].langs,a[t].name=e[t].name;return a}function Y(e,a){for(var t=[],n=0;n<a.length;n+=1){t=[];for(var r=0;r<a[n].length;r+=1)a[n][r]&&t.push({id:a[n][r].id,user:a[n][r].login});e[n].contribs=t}}function $(e,a){for(var t=[],n=0;n<a.length;n+=1){t=[];for(var r=0;r<a[n].length;r+=1)a[n][r].committer&&t.push({id:a[n][r].sha,user:a[n][r].committer.login});e[n].commits=t}}function q(e,a){for(var t=[],n=0;n<a.length;n+=1)(t=[]).push(a[n]),e[n].langs=t}function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(s.a)(i.a.mark((function e(a){var t,n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],n=[],r=[],o=0,a){for(o=0;o<a.length;o+=1)t.push(a[o].contributors_url);for(o=0;o<a.length;o+=1)n.push(a[o].languages_url);for(o=0;o<a.length;o+=1)r.push(a[o].commits_url.slice(0,-6))}return e.next=7,A(t).then((function(e){return Y(a,e)}));case 7:return e.next=9,A(n).then((function(e){return q(a,e)}));case 9:return e.next=11,A(r).then((function(e){return $(a,e)}));case 11:return e.abrupt("return",G(a));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}F.defaultProps={contributors:[],commits:[],languagesUsed:[]},J.defaultProps={title:"",description:"",projectUrl:"",languagesUsed:[],contributors:[],commits:[],created:new Date};var V=t(54);function X(){var e=Object(V.b)({loading:!0,indicator:r.a.createElement(V.a,{width:"155"})}),a=e.containerProps,t=e.indicatorEl;return r.a.createElement("section",Object.assign({id:"authLoadSpinner"},a),t)}function Z(){var e,a=Object(n.useState)([]),t=Object(u.a)(a,2),o=t[0],c=t[1],l=Object(n.useState)(!0),d=Object(u.a)(l,2),g=d[0],p=d[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(a).then((function(e){return e.json()})).then((function(e){return K(e).then((function(e){return c(e)}))})).then(p(!1)));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}})()("https://api.github.com/users/TonyMakis/repos")}),[]),e=g?r.a.createElement("div",{className:"center"},r.a.createElement(X,null)):r.a.createElement("div",{className:"projects"},r.a.createElement("h1",null,"My Public Projects"),r.a.createElement(m.a,{container:!0,style:{padding:"0.5em"}},o.map((function(e){return r.a.createElement(m.a,{item:!0,style:{padding:"2em"},xs:12,sm:12,md:6,lg:4,xl:3,key:e.id},r.a.createElement(J,{title:e.name,description:e.description,projectUrl:e.html_url,languagesUsed:e.langs,contributors:e.contribs,commits:e.commits,created:new Date(e.created_at),key:e.id}))})))),r.a.createElement("div",{id:"app"},e)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,a,t){e.exports=t(195)},93:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.0efe6a23.chunk.js.map