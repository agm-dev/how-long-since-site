(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(232),i=a(230),o=a(275);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Add"}),r.a.createElement(o.a,null))}},219:function(e,t,a){var n=a(249),r=n.green,l=n.deepOrange;e.exports={lightPrimary:r[500],lightSecondary:r[200],lightBackground:r[50],lightFont:"#222",darkPrimary:l[900],darkSecondary:l[600],darkBackground:l[400],darkFont:"#fff"}},221:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(71),i=a.n(l);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return l.navigate});a(223),a(11).default.enqueue;var o=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||l,staticQueryData:e})})}},223:function(e,t,a){var n;e.exports=(n=a(228))&&n.default||n},228:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(100);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},229:function(e){e.exports={data:{site:{siteMetadata:{title:"How long since...?"}}}}},230:function(e,t,a){"use strict";var n=a(231),r=a(0),l=a.n(r),i=a(246),o=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,m=t||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m},{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},231:function(e){e.exports={data:{site:{siteMetadata:{title:"How long since...?",description:"Track how long since the last time you did something that you want to track",author:"@g0ldstripes"}}}}},232:function(e,t,a){"use strict";var n=a(229),r=a(0),l=a.n(r),i=a(387),o=a(221),c=a(384),m=a(385),u=a(386),s=a(219),d=a(377),p=a(346),g=a(382),E=a(379),f=function(){var e=l.a.useState(null),t=e[0],a=e[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{edge:"start","aria-label":"home","aria-controls":"menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},l.a.createElement(E.a,{style:{color:s.darkFont}})),l.a.createElement(p.a,{id:"menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){a(null)}},l.a.createElement(o.a,{to:"/"},l.a.createElement(g.a,null,"Events")),l.a.createElement(o.a,{to:"/add"},l.a.createElement(g.a,null,"Add")),l.a.createElement(o.a,{to:"/data"},l.a.createElement(g.a,null,"Import / Export"))))},h=function(e){var t=e.siteTitle;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{position:"static",style:{position:"fixed",marginLeft:"-8px",marginTop:"-8px",backgroundColor:s.lightPrimary,color:s.darkFont}},l.a.createElement(m.a,{style:{minHeight:"70px"}},l.a.createElement(f,null),l.a.createElement(o.a,{to:"/"},l.a.createElement(u.a,{variant:"h6"},t)))),l.a.createElement("div",{style:{minHeight:"70px"}}))};h.defaultProps={siteTitle:""};var v=h;a(245),t.a=function(e){var t=e.children,a=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{siteTitle:a.site.siteMetadata.title}),l.a.createElement(i.a,{container:!0,spacing:3,className:"container",style:{backgroundColor:s.lightBackground,color:s.lightFont}},l.a.createElement(i.a,{item:!0,xs:12},t)))}},275:function(e,t,a){"use strict";a(23),a(142),a(102),a(21),a(28),a(12),a(145);var n=a(0),r=a.n(n),l=a(221),i=a(309),o=a(101),c=a(382),m=a(388),u=a(387),s=a(345),d=a(386),p=a(402),g=a(407),E=a(401),f=a(335),h=a(391),v=a(219),b=a(338),y=a(409),x=a(408),k=a(20),w=function(e){return Object.entries(e).map(function(e,t){var a=e[0],n=e[1];return r.a.createElement(c.a,{key:t,value:n.tag},a)})};t.a=function(e){var t=e.itemId,a=Object(n.useContext)(o.a),c=a.addItem,F=a.items,C=a.updateItem,j=new Date,O=t?F.find(function(e){return Number(e.id)===Number(t)}):null,T=Object(n.useState)(O?O.text:""),P=T[0],S=T[1],N=Object(n.useState)(O?new Date(O.time):j),D=N[0],M=N[1],I=Object(n.useState)(O?new Date(O.time):j),q=I[0],A=I[1],B=Object(n.useState)(O?O.format:k.b.days.tag),H=B[0],L=B[1],Q=Object(n.useState)(O?O.goal:null),J=Q[0],R=Q[1],W=function(e){return L(e.target.value)};return r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(m.a,{maxWidth:"md"},r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(s.a,{className:"main-content"},r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Introduce the text for describing your event. You can use the # symbol to mark the space where the time and format will be displayed."),r.a.createElement(d.a,{variant:"body2"},r.a.createElement("em",null,"Example: # from the last beer."))),r.a.createElement(p.a,{required:!0,id:"text",name:"text",label:"Event",value:P,onChange:function(e){return S(e.target.value)},margin:"normal",fullWidth:!0})),r.a.createElement(u.a,{item:!0,xs:4},r.a.createElement(g.a,{htmlFor:"date-helper"},"Date"),r.a.createElement(b.b,{utils:i.a},r.a.createElement(y.a,{value:D,onChange:function(e){return M(e)},emptyLabel:"date",id:"date-helper"}))),r.a.createElement(u.a,{item:!0,xs:4},r.a.createElement(g.a,{htmlFor:"time-helper"},"Time"),r.a.createElement(b.b,{utils:i.a},r.a.createElement(x.a,{value:q,onChange:function(e){return A(e)},ampm:!1,id:"time-helper"}))),r.a.createElement(u.a,{item:!0,xs:4},r.a.createElement(g.a,{htmlFor:"format-helper"},"Format"),r.a.createElement(E.a,{value:H,onChange:W,inputProps:{name:"format",id:"format-helper"}},w(k.b))),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(s.a,{style:{marginTop:"3vh"}},r.a.createElement(d.a,{variant:"body1",paragraph:!0},"You can set a goal. The task will be marked as completed as soon as you reach the time goal."))),r.a.createElement(u.a,{item:!0,xs:4},r.a.createElement(g.a,{htmlFor:"goal"},"Goal"),r.a.createElement(p.a,{type:"number",id:"goal",name:"goal",value:J||0,onChange:function(e){return R(Number(e.target.value)>=0?Number(e.target.value):0)},InputLabelProps:{shrink:!0},margin:"normal",style:{marginTop:0}})),r.a.createElement(u.a,{item:!0,xs:4},r.a.createElement(g.a,{htmlFor:"goal-format-helper"},"Format"),r.a.createElement(E.a,{value:H,onChange:W,inputProps:{name:"goal-format",id:"goal-format-helper"},disabled:!0},w(k.b))),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(s.a,{className:"buttons-container"},r.a.createElement(f.a,{variant:"contained",size:"medium",onClick:function(e){e.preventDefault();var a=Object(k.a)(D,q).getTime(),n={text:P,time:a,format:H,goal:J>0?J:null};t&&O&&O.id?C(Object.assign(O,n)):c(n),Object(l.c)("/")},style:{backgroundColor:v.lightPrimary,color:v.darkFont}},r.a.createElement(h.a,{className:"icon"}),"Add"))))))}}}]);
//# sourceMappingURL=component---src-pages-add-js-f042686849e393bc92d7.js.map