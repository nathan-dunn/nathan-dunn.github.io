"use strict";(self.webpackChunkpersonal_website_v3=self.webpackChunkpersonal_website_v3||[]).push([[527],{226:function(e,t,a){a.r(t);var l=a(7294),r=a(5444),n=a(6125),i=a(5414),s=a(3494),c=a(537),o=a(355),d=a(4741),m=a(9700),h=a(3082),p=a(860);a(146);const g=s.default.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-171369a-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;&:hover{color:var(--green);}}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;}.icon{",";padding:10px;cursor:pointer;&:hover,&:focus{color:var(--green);}&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}}}}"],(e=>{let{theme:t}=e;return t.mixins.flexCenter}));t.default=e=>{let{location:t,data:a}=e;const s=a.allMarkdownRemark.edges,u=(0,l.useRef)(null),f=(0,l.useRef)(null),x=(0,l.useRef)([]),E=(0,h.Tb)(),{0:b,1:v}=(0,l.useState)(!1),{0:y,1:w}=(0,l.useState)([]);return(0,l.useEffect)((()=>{E||(o.Z.reveal(u.current,(0,c.srConfig)()),o.Z.reveal(f.current,(0,c.srConfig)(200,0)),x.current.forEach(((e,t)=>o.Z.reveal(e,(0,c.srConfig)(10*t)))))}),[]),l.createElement(d.Ar,{location:t},l.createElement(i.q,{title:"Archive"}),l.createElement("main",null,l.createElement("header",{ref:u},l.createElement("h1",{className:"big-heading"},"Archive"),l.createElement("p",{className:"subtitle"},"A short list of things I’ve worked on")),l.createElement(g,{ref:f},l.createElement(p.ZP,{open:b,close:()=>v(!1),slides:y,index:0,render:{slide:(e,t)=>{let{slide:a}=e;return l.createElement("div",{key:t,className:"image-wrapper",onClick:()=>v(!0)},l.createElement(n.G,{key:t,className:"img",image:(0,n.d)(a.childImageSharp.huge),alt:`Slide ${t+1}`,style:{maxHeight:"90vh"},objectFit:"contain"}))}}}),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Year"),l.createElement("th",null,"Title"),l.createElement("th",{className:"hide-on-mobile"},"Made at"),l.createElement("th",{className:"hide-on-mobile"},"Built with"),l.createElement("th",null,"Link"))),l.createElement("tbody",null,s.length>0&&s.map(((e,t)=>{let{node:a}=e;const{id:n,date:i,github:s,external:c,ios:o,android:d,title:h,tech:p,company:g,showInGallery:u,covers:f}=a.frontmatter;return l.createElement("tr",{key:t,ref:e=>x.current[t]=e},l.createElement("td",{className:"overline year"},`${new Date(i).getFullYear()}`),l.createElement(r.Link,{className:"title",to:0===t?"/gallery":`/gallery/#${n}`},l.createElement("td",{className:"title"},h)),l.createElement("td",{className:"company hide-on-mobile"},g?l.createElement("span",null,g):l.createElement("span",null,"—")),l.createElement("td",{className:"tech hide-on-mobile"},(null==p?void 0:p.length)>0&&p.map(((e,t)=>l.createElement("span",{key:t},e,"",t!==p.length-1&&l.createElement("span",{className:"separator"},"·"))))),l.createElement("td",{className:"links"},l.createElement("div",null,u&&l.createElement("span",{className:"icon",onClick:()=>{w(f),v(!0)}},l.createElement(m.JO,{name:"Gallery"})),s&&l.createElement("a",{href:s,"aria-label":"GitHub Link",className:"icon"},l.createElement(m.JO,{name:"GitHub"})),c&&l.createElement("a",{href:c,"aria-label":"External Link",className:"icon"},l.createElement(m.JO,{name:"External"})),o&&l.createElement("a",{href:o,"aria-label":"Apple App Store Link",className:"icon"},l.createElement(m.JO,{name:"AppStore"})),d&&l.createElement("a",{href:d,"aria-label":"Google Play Store Link",className:"icon"},l.createElement(m.JO,{name:"PlayStore"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-cf6ed1cf5283376bacdb.js.map