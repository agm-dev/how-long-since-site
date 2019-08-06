(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(232),l=a(230),i=(a(75),a(108),a(44),a(12),a(46),a(39),a(21),a(342)),c=a(221),u=a(27),m=a(381),s=(a(15),a(28),a(145),a(102),a(392)),d=a(383),g=a(393),p=a(394),f=a(396),E=a(397),h=a(377),v=a(395),y=a(398),b=a(219),k=a(101),w=a(20),x=function(e){var t=e.item,a=Object(n.useContext)(k.a),o=a.removeItem,l=a.resetItem,i=Object.entries(w.b).find(function(e){e[0];return e[1].tag===t.format}).shift(),c=w.b[i].value,u=function(){return t.text.replace("#",t.howLong+" "+i)},m=Object(n.useState)(u()),x=m[0],C=m[1];Object(w.c)(function(){C(u())},c);var F=t.goal?"Goal: "+t.goal+" "+i:"",j=t.record?"Record: "+t.howLongRecord+" "+i:"",T=F+(F.length?". ":"")+j;return r.a.createElement(s.a,{key:t.id,style:{marginBottom:"2vh",paddingTop:"1vh",paddingBottom:"1vh",backgroundColor:b.lightSecondary,color:b.lightFont}},r.a.createElement(d.a,null,r.a.createElement(g.a,null,r.a.createElement(p.a,{"aria-label":x,style:{backgroundColor:b.lightPrimary},onClick:function(e){e.preventDefault(),l(t),C(u())}},r.a.createElement(v.a,null))),r.a.createElement(f.a,{primary:r.a.createElement("span",{className:t.isCompleted?"completed":""},x),secondary:T}),r.a.createElement(E.a,null,r.a.createElement(h.a,{edge:"end","aria-label":"delete",onClick:function(e){e.preventDefault(),o(t)}},r.a.createElement(y.a,null)))))};function C(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var F=function(e){var t=e.items.reduce(function(e,t){var a=e[0],n=e[1];return t.isCompleted?[[t].concat(C(a)),n]:[a,[].concat(C(n),[t])]},[[],[]]),a=t[0],n=t[1],o=[].concat(C(n),C(a));return r.a.createElement(c.b,{query:"3943538951",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,o.map(function(t){return r.a.createElement(u.Link,{to:e.site.pathPrefix+"/update/"+t.id,key:t.id,className:"pointer"},r.a.createElement(x,{item:t}))})),r.a.createElement("div",{className:"breakline"}))},data:i})},j=a(399),T=a(343),O=a.n(T),P=function(e){var t=e.to;return r.a.createElement(c.a,{to:t,style:{position:"fixed",bottom:"2vh",right:"2vh"}},r.a.createElement(j.a,{"aria-label":"add",variant:"round",style:{backgroundColor:b.lightPrimary,color:b.darkFont}},r.a.createElement(O.a,null)))},S=a(345),A=a(386);t.default=function(){var e=Object(n.useContext)(k.a).items;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement(S.a,{className:"main-content"},e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{variant:"subtitle1"},"You are tracking ",e.length," events:"),r.a.createElement(F,{items:e})):r.a.createElement(A.a,null,"Try to add some events!")),r.a.createElement(P,{to:"/add"}))}},219:function(e,t,a){var n=a(249),r=n.green,o=n.deepOrange;e.exports={lightPrimary:r[500],lightSecondary:r[200],lightBackground:r[50],lightFont:"#222",darkPrimary:o[900],darkSecondary:o[600],darkBackground:o[400],darkFont:"#fff"}},221:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(71),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.navigate});a(223),a(11).default.enqueue;var i=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&o(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||o,staticQueryData:e})})}},223:function(e,t,a){var n;e.exports=(n=a(228))&&n.default||n},228:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(100);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},229:function(e){e.exports={data:{site:{siteMetadata:{title:"How long since...?"}}}}},230:function(e,t,a){"use strict";var n=a(231),r=a(0),o=a.n(r),l=a(246),i=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u},{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},231:function(e){e.exports={data:{site:{siteMetadata:{title:"How long since...?",description:"Track how long since the last time you did something that you want to track",author:"@g0ldstripes"}}}}},232:function(e,t,a){"use strict";var n=a(229),r=a(0),o=a.n(r),l=a(387),i=a(221),c=a(384),u=a(385),m=a(386),s=a(219),d=a(377),g=a(346),p=a(382),f=a(379),E=function(){var e=o.a.useState(null),t=e[0],a=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{edge:"start","aria-label":"home","aria-controls":"menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},o.a.createElement(f.a,{style:{color:s.darkFont}})),o.a.createElement(g.a,{id:"menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){a(null)}},o.a.createElement(i.a,{to:"/"},o.a.createElement(p.a,null,"Events")),o.a.createElement(i.a,{to:"/add"},o.a.createElement(p.a,null,"Add")),o.a.createElement(i.a,{to:"/data"},o.a.createElement(p.a,null,"Import / Export"))))},h=function(e){var t=e.siteTitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{position:"static",style:{position:"fixed",marginLeft:"-8px",marginTop:"-8px",backgroundColor:s.lightPrimary,color:s.darkFont}},o.a.createElement(u.a,{style:{minHeight:"70px"}},o.a.createElement(E,null),o.a.createElement(i.a,{to:"/"},o.a.createElement(m.a,{variant:"h6"},t)))),o.a.createElement("div",{style:{minHeight:"70px"}}))};h.defaultProps={siteTitle:""};var v=h;a(245),t.a=function(e){var t=e.children,a=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{siteTitle:a.site.siteMetadata.title}),o.a.createElement(l.a,{container:!0,spacing:3,className:"container",style:{backgroundColor:s.lightBackground,color:s.lightFont}},o.a.createElement(l.a,{item:!0,xs:12},t)))}},342:function(e){e.exports={data:{site:{pathPrefix:"/how-long-since-site"}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9f1cc3502b62fdfdd74e.js.map