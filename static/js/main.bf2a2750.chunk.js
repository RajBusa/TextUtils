(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("div",{className:"form-check form-switch mx-6",children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:e.modeText})]})]})]})})}function d(e){var t=Object(c.useState)("Enter text here "),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"gray",color:"light"===e.mode?"Black":"White "}})}),Object(o.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Connvert to Uppercase","success")},children:"Convert to  Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Connvert to Lowercase","success")},children:"Convert to Lowercase"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," Words and ",n.length," Characters"]}),Object(o.jsxs)("p",{children:[0===n.length?0:n.split(" ").length-1," Words and ",n.length," Characters"]}),Object(o.jsxs)("p",{children:[.08*n.split(" ").length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something is the textbox above to preview it here"})]})]})}i.defaultProps={title:"set title here",aboutText:"About text here"};var b=function(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Enable Dark Mode"),r=Object(l.a)(s,2),h=r[0],j=r[1],u=Object(c.useState)(null),m=Object(l.a)(u,2),x=m[0],g=m[1],v=function(e,t){g({msg:e,type:t}),setTimeout((function(){g(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtil",aboutText:"AboutTextutils",mode:a,toggleMode:function(){"light"===a?(n("dark"),j("Enable Light Mode"),document.body.style.backgroundColor="rgb(0 49 98)",document.body.style.color="white",v("Dark mode is enabled","success"),document.title="TextUtil - DarkMode"):(n("light"),j("Enable Dark Mode"),document.body.style.backgroundColor="white",document.body.style.color="black",v("Light mode is enabled","success"),document.title="TextUtil - LightMode")},modeText:h}),Object(o.jsx)(b,{alert:x}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{heading:"Enter the Text to analyze below",mode:a,showAlert:v})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.bf2a2750.chunk.js.map