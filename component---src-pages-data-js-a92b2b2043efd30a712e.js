(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(234),i=a(232),c=(a(23),a(221)),l=a(102),s=a(385),d=a(384),m=a(341),u=a(383),p=a(402),g=a(398),h=a(331),f=a(404),E=a(237),v=Object(E.a)(r.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy"),b=Object(E.a)(r.a.createElement("path",{d:"M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}),"ImportExport"),y=a(219),w=function(){var e=Object(n.useContext)(l.a),t=e.items,a=e.importData,o=function(e){var t=JSON.stringify(e),a=encodeURI(t);return"undefined"!=typeof btoa?btoa(a):a}(t),i=Object(n.useState)(o),E=i[0],w=i[1],k=Object(n.useState)(null),x=k[0],C=k[1],O=Boolean(x),F=O?"simple-popover":void 0,T={backgroundColor:y.lightPrimary,color:y.darkFont};return r.a.createElement(s.a,{maxWidth:"md"},r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(m.a,{className:"main-content"},r.a.createElement(u.a,{variant:"body1",paragraph:!0},"The code below contains your data, and you can copy and save it to import the data in other device."),r.a.createElement(u.a,{variant:"body1",paragraph:!0},"You can also remove the code, paste a different code instead, and import the data."))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(p.a,{htmlFor:"data"},"Code"),r.a.createElement(g.a,{required:!0,id:"data",name:"data",multiline:!0,rowsMax:"13",value:E,onChange:function(e){return w(e.target.value)},margin:"normal",fullWidth:!0})),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(m.a,{className:"buttons-container"},r.a.createElement(h.a,{"aria-describedby":F,variant:"contained",size:"medium",onClick:function(e){e.preventDefault(),C(e.currentTarget),navigator.permissions.query({name:"clipboard-write"}).then(function(e){"granted"!==e.state&&"prompt"!==e.state||navigator.clipboard.writeText(E).then(function(){return console.log("code copied to clipboard")},function(){return console.warn("failed to copy code into clipboard")})})},style:T},r.a.createElement(v,{className:"icon"}),"Copy"),r.a.createElement(f.a,{id:F,open:O,anchorEl:x,onClose:function(){return C(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(u.a,{variant:"body1",style:{padding:"5px"}},"The code has been copied to your clipboard.")),r.a.createElement(h.a,{variant:"contained",size:"medium",onClick:function(e){if(e.preventDefault(),E!==o){try{a(E)}catch(e){console.log("error on importing data",e.message)}console.log("data has been imported"),Object(c.b)("/")}},disabled:E===o,style:Object.assign({marginLeft:"25px"},E===o?{}:T)},r.a.createElement(b,{className:"icon"}),"Import")))))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Add"}),r.a.createElement(w,null))}},219:function(e,t,a){var n=a(259),r=n.green,o=n.deepOrange;e.exports={lightPrimary:r[500],lightSecondary:r[200],lightBackground:r[50],lightFont:"#222",darkPrimary:o[900],darkSecondary:o[600],darkBackground:o[400],darkFont:"#fff"}},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(71),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"b",function(){return o.navigate});a(226),a(11).default.enqueue,r.a.createContext({})},226:function(e,t,a){var n;e.exports=(n=a(229))&&n.default||n},229:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(101);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},230:function(e){e.exports={data:{site:{siteMetadata:{title:"How long since...?"}}}}},232:function(e,t,a){"use strict";var n=a(233),r=a(0),o=a.n(r),i=a(253),c=a.n(i);function l(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,s=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s},{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},233:function(e){e.exports={data:{site:{siteMetadata:{title:"How long since...?",description:"Track how long since the last time you did something that you want to track",author:"@g0ldstripes"}}}}},234:function(e,t,a){"use strict";var n=a(230),r=a(0),o=a.n(r),i=a(384),c=a(221),l=a(381),s=a(382),d=a(383),m=a(219),u=a(374),p=a(342),g=a(379),h=a(376),f=function(){var e=o.a.useState(null),t=e[0],a=e[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{edge:"start","aria-label":"home","aria-controls":"menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)}},o.a.createElement(h.a,{style:{color:m.darkFont}})),o.a.createElement(p.a,{id:"menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){a(null)}},o.a.createElement(c.a,{to:"/"},o.a.createElement(g.a,null,"Events")),o.a.createElement(c.a,{to:"/add"},o.a.createElement(g.a,null,"Add")),o.a.createElement(c.a,{to:"/data"},o.a.createElement(g.a,null,"Import / Export"))))},E=function(e){var t=e.siteTitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{position:"static",style:{position:"fixed",marginLeft:"-8px",marginTop:"-8px",backgroundColor:m.lightPrimary,color:m.darkFont}},o.a.createElement(s.a,{style:{minHeight:"70px"}},o.a.createElement(f,null),o.a.createElement(c.a,{to:"/"},o.a.createElement(d.a,{variant:"h6"},t)))),o.a.createElement("div",{style:{minHeight:"70px"}}))};E.defaultProps={siteTitle:""};var v=E;a(252),t.a=function(e){var t=e.children,a=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{siteTitle:a.site.siteMetadata.title}),o.a.createElement(i.a,{container:!0,spacing:3,className:"container",style:{backgroundColor:m.lightBackground,color:m.lightFont}},o.a.createElement(i.a,{item:!0,xs:12},t)))}}}]);
//# sourceMappingURL=component---src-pages-data-js-a92b2b2043efd30a712e.js.map