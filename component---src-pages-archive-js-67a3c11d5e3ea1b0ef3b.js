"use strict";(self.webpackChunkpersonal_website_v3=self.webpackChunkpersonal_website_v3||[]).push([[527],{226:function(e,t,a){a.r(t);var l=a(7294),r=a(5444),n=a(5414),i=a(3494),d=a(537),o=a(355),s=a(4741),m=a(9700),c=a(3082);const h=i.default.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-171369a-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;&:hover{color:var(--green);}}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(e=>{let{theme:t}=e;return t.mixins.flexCenter}));t.default=e=>{let{location:t,data:a}=e;const i=a.allMarkdownRemark.edges,p=(0,l.useRef)(null),u=(0,l.useRef)(null),f=(0,l.useRef)([]),g=(0,c.Tb)();return(0,l.useEffect)((()=>{g||(o.Z.reveal(p.current,(0,d.srConfig)()),o.Z.reveal(u.current,(0,d.srConfig)(200,0)),f.current.forEach(((e,t)=>o.Z.reveal(e,(0,d.srConfig)(10*t)))))}),[]),l.createElement(s.Ar,{location:t},l.createElement(n.q,{title:"Archive"}),l.createElement("main",null,l.createElement("header",{ref:p},l.createElement("h1",{className:"big-heading"},"Archive"),l.createElement("p",{className:"subtitle"},"A short list of things I’ve worked on")),l.createElement(h,{ref:u},l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Year"),l.createElement("th",null,"Title"),l.createElement("th",{className:"hide-on-mobile"},"Made at"),l.createElement("th",{className:"hide-on-mobile"},"Built with"),l.createElement("th",null,"Link"))),l.createElement("tbody",null,i.length>0&&i.map(((e,t)=>{let{node:a}=e;const{id:n,date:i,github:d,external:o,ios:s,android:c,title:h,tech:p,company:u}=a.frontmatter;return l.createElement("tr",{key:t,ref:e=>f.current[t]=e},l.createElement("td",{className:"overline year"},`${new Date(i).getFullYear()}`),l.createElement(r.Link,{className:"title",to:0===t?"/gallery":`/gallery/#${n}`},l.createElement("td",{className:"title"},h)),l.createElement("td",{className:"company hide-on-mobile"},u?l.createElement("span",null,u):l.createElement("span",null,"—")),l.createElement("td",{className:"tech hide-on-mobile"},(null==p?void 0:p.length)>0&&p.map(((e,t)=>l.createElement("span",{key:t},e,"",t!==p.length-1&&l.createElement("span",{className:"separator"},"·"))))),l.createElement("td",{className:"links"},l.createElement("div",null,o&&l.createElement("a",{href:o,"aria-label":"External Link"},l.createElement(m.JO,{name:"External"})),d&&l.createElement("a",{href:d,"aria-label":"GitHub Link"},l.createElement(m.JO,{name:"GitHub"})),s&&l.createElement("a",{href:s,"aria-label":"Apple App Store Link"},l.createElement(m.JO,{name:"AppStore"})),c&&l.createElement("a",{href:c,"aria-label":"Google Play Store Link"},l.createElement(m.JO,{name:"PlayStore"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-67a3c11d5e3ea1b0ef3b.js.map