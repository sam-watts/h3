(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{115:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return u}));var t=n(0),i=n.n(t);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var a=i.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=b(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(n),m=t,u=d["".concat(r,".").concat(m)]||d[m]||p[m]||c;return n?i.a.createElement(u,l(l({ref:a},s),{},{components:n})):i.a.createElement(u,l({ref:a},s))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,r=new Array(c);r[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,r[1]=l;for(var s=2;s<c;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},116:function(e,a,n){"use strict";function t(e){var a,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(i&&(i+=" "),i+=n);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}a.a=function(){for(var e,a,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(i&&(i+=" "),i+=a);return i}},118:function(e,a,n){"use strict";var t=n(0),i=n(119);a.a=function(){var e=Object(t.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,a,n){"use strict";var t=n(0),i=Object(t.createContext)(void 0);a.a=i},120:function(e,a,n){"use strict";var t=n(0),i=n.n(t),c=n(118),r=n(116),l=n(54),o=n.n(l);var s=37,b=39;a.a=function(e){var a=e.lazy,n=e.block,l=e.defaultValue,d=e.values,p=e.groupId,m=e.className,u=Object(c.a)(),v=u.tabGroupChoices,g=u.setTabGroupChoices,h=Object(t.useState)(l),j=h[0],O=h[1],f=t.Children.toArray(e.children),x=[];if(null!=p){var N=v[p];null!=N&&N!==j&&d.some((function(e){return e.value===N}))&&O(N)}var y=function(e){var a=e.target,n=x.indexOf(a),t=f[n].props.value;O(t),null!=p&&(g(p,t),setTimeout((function(){var e,n,t,i,c,r,l,s;(e=a.getBoundingClientRect(),n=e.top,t=e.left,i=e.bottom,c=e.right,r=window,l=r.innerHeight,s=r.innerWidth,n>=0&&c<=s&&i<=l&&t>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(o.a.tabItemActive),setTimeout((function(){return a.classList.remove(o.a.tabItemActive)}),2e3))}),150))},T=function(e){var a,n;switch(e.keyCode){case b:var t=x.indexOf(e.target)+1;n=x[t]||x[0];break;case s:var i=x.indexOf(e.target)-1;n=x[i]||x[x.length-1]}null===(a=n)||void 0===a||a.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var a=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:j===a?0:-1,"aria-selected":j===a,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===a}),key:a,ref:function(e){return x.push(e)},onKeyDown:T,onFocus:y,onClick:y},n)}))),a?Object(t.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return Object(t.cloneElement)(e,{key:a,hidden:e.props.value!==j})}))))}},121:function(e,a,n){"use strict";var t=n(0),i=n.n(t);a.a=function(e){var a=e.children,n=e.hidden,t=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:t},a)}},87:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return o})),n.d(a,"toc",(function(){return s})),n.d(a,"default",(function(){return d}));var t=n(3),i=(n(0),n(115)),c=n(120),r=n(121);const l={id:"traversal",title:"Grid traversal functions",sidebar_label:"Traversal",slug:"/api/traversal"},o={unversionedId:"api/traversal",id:"api/traversal",isDocsHomePage:!1,title:"Grid traversal functions",description:"Grid traversal allows finding cells in the vicinity of an origin cell, and determining how to traverse the grid from one cell to another.",source:"@site/docs/api/traversal.mdx",slug:"/api/traversal",permalink:"/docs/api/traversal",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/traversal.mdx",version:"current",sidebar_label:"Traversal",sidebar:"someSidebar",previous:{title:"Index inspection functions",permalink:"/docs/api/inspection"},next:{title:"Hierarchical grid functions",permalink:"/docs/api/hierarchy"}},s=[{value:"kRing",id:"kring",children:[]},{value:"maxKringSize",id:"maxkringsize",children:[]},{value:"kRingDistances",id:"kringdistances",children:[]},{value:"hexRange",id:"hexrange",children:[]},{value:"hexRangeDistances",id:"hexrangedistances",children:[]},{value:"hexRanges",id:"hexranges",children:[]},{value:"hexRing",id:"hexring",children:[]},{value:"h3Line",id:"h3line",children:[]},{value:"h3LineSize",id:"h3linesize",children:[]},{value:"h3Distance",id:"h3distance",children:[]},{value:"experimentalH3ToLocalIj",id:"experimentalh3tolocalij",children:[]},{value:"experimentalLocalIjToH3",id:"experimentallocalijtoh3",children:[]}],b={toc:s};function d({components:e,...a}){return Object(i.b)("wrapper",Object(t.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Grid traversal allows finding cells in the vicinity of an origin cell, and determining how to traverse the grid from one cell to another."),Object(i.b)("h2",{id:"kring"},"kRing"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void kRing(H3Index origin, int k, H3Index* out);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.k_ring(origin, k)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<Long> kRing(long origin, int k);\nList<String> kRing(String origin, int k);\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.kRing(origin, k)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const k = 5;\n  return h3.kRing(h, k);\n}\n")))),Object(i.b)("p",null,"k-rings produces indices within k distance of the origin index."),Object(i.b)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indices, and so on."),Object(i.b)("p",null,"Output is placed in the provided array in no particular order. Elements of\nthe output array may be left zero, as can happen when crossing a pentagon."),Object(i.b)("h2",{id:"maxkringsize"},"maxKringSize"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int maxKringSize(int k);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed."))))),Object(i.b)("p",null,"Maximum number of indices that result from the kRing algorithm with the given k."),Object(i.b)("h2",{id:"kringdistances"},"kRingDistances"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void kRingDistances(H3Index origin, int k, H3Index* out, int* distances);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.k_ring_distances(origin, k)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<List<Long>> kRingDistances(long origin, int k);\nList<List<String>> kRingDistances(String origin, int k);\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.kRingDistances(origin, k)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const k = 5;\n  return h3.kRingDistances(h, k);\n}\n")))),Object(i.b)("p",null,"k-rings produces indices within k distance of the origin index."),Object(i.b)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indices, and so on."),Object(i.b)("p",null,"Output is placed in the provided array in no particular order. Elements of\nthe output array may be left zero, as can happen when crossing a pentagon."),Object(i.b)("h2",{id:"hexrange"},"hexRange"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int hexRange(H3Index origin, int k, H3Index* out);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.hex_range(h, k)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<List<Long>> hexRange(Long h3, int k) throws PentagonEncounteredException;\nList<List<String>> hexRange(String h3Address, int k) throws PentagonEncounteredException;\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function is not exposed."))))),Object(i.b)("p",null,"hexRange produces indexes within k distance of the origin index.\nOutput behavior is undefined when one of the indexes returned by this\nfunction is a pentagon or is in the pentagon distortion area."),Object(i.b)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indexes, and so on."),Object(i.b)("p",null,"Output is placed in the provided array in order of increasing distance from\nthe origin."),Object(i.b)("p",null,"Returns 0 if no pentagonal distortion is encountered."),Object(i.b)("h2",{id:"hexrangedistances"},"hexRangeDistances"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int hexRangeDistances(H3Index origin, int k, H3Index* out, int* distances);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.hex_range_distances(h, k)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function is not exposed because the same functionality is exposed by ",Object(i.b)("inlineCode",{parentName:"p"},"hexRange"))))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function is not exposed."))))),Object(i.b)("p",null,"hexRange produces indexes within k distance of the origin index.\nOutput behavior is undefined when one of the indexes returned by this\nfunction is a pentagon or is in the pentagon distortion area."),Object(i.b)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indexes, and so on."),Object(i.b)("p",null,"Output is placed in the provided array in order of increasing distance from\nthe origin. The distances in hexagons is placed in the distances array at\nthe same offset."),Object(i.b)("p",null,"Returns 0 if no pentagonal distortion is encountered."),Object(i.b)("h2",{id:"hexranges"},"hexRanges"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int hexRanges(H3Index* h3Set, int length, int k, H3Index* out);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.hex_ranges(h, k)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function is not exposed because the same functionality is exposed by ",Object(i.b)("inlineCode",{parentName:"p"},"hexRange"))))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function is not exposed."))))),Object(i.b)("p",null,"hexRanges takes an array of input hex IDs and a max k-ring and returns an\narray of hexagon IDs sorted first by the original hex IDs and then by the\nk-ring (0 to max), with no guaranteed sorting within each k-ring group."),Object(i.b)("p",null,"Returns 0 if no pentagonal distortion was encountered. Otherwise, output\nis undefined"),Object(i.b)("h2",{id:"hexring"},"hexRing"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int hexRing(H3Index origin, int k, H3Index* out);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.hex_ring(h, k)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<Long> hexRing(long h3, int k) throws PentagonEncounteredException;\nList<String> hexRing(String h3Address, int k) throws PentagonEncounteredException;\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.hexRing(h3Index, k)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const k = 1;\n  return h3.hexRing(h, k);\n}\n")))),Object(i.b)("p",null,"Produces the hollow hexagonal ring centered at origin with sides of length k."),Object(i.b)("p",null,"Returns 0 if no pentagonal distortion was encountered."),Object(i.b)("h2",{id:"h3line"},"h3Line"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int h3Line(H3Index start, H3Index end, H3Index* out);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_line(start, end)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<Long> h3Line(long start, long end) throws LineUndefinedException\nList<String> h3Line(String startAddress, String endAddress) throws LineUndefinedException\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.h3Line(start, end)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const start = '85283473fffffff';\n  const end = '8528342bfffffff';\n  return h3.h3Line(start, end);\n}\n")))),Object(i.b)("p",null,"Given two H3 indexes, return the line of indexes between them (inclusive)."),Object(i.b)("p",null,"This function may fail to find the line between two indexes, for\nexample if they are very far apart. It may also fail when finding\ndistances for indexes on opposite sides of a pentagon."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Notes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The specific output of this function should not be considered stable\nacross library versions. The only guarantees the library provides are\nthat the line length will be ",Object(i.b)("inlineCode",{parentName:"p"},"h3Distance(start, end) + 1")," and that\nevery index in the line will be a neighbor of the preceding index.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Lines are drawn in grid space, and may not correspond exactly to either\nCartesian lines or great arcs."))),Object(i.b)("h2",{id:"h3linesize"},"h3LineSize"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int h3LineSize(H3Index start, H3Index end);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed."))))),Object(i.b)("p",null,"Number of indexes in a line from the start index to the end index,\nto be used for allocating memory. Returns a negative number if the\nline cannot be computed."),Object(i.b)("h2",{id:"h3distance"},"h3Distance"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int h3Distance(H3Index origin, H3Index h3);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_distance(h1, h2)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"int h3Distance(long a, long b) throws DistanceUndefinedException;\nint h3Distance(String a, String b) throws DistanceUndefinedException;\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.h3Distance(a, b)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const start = '85283473fffffff';\n  const end = '8528342bfffffff';\n  return h3.h3Distance(start, end);\n}\n")))),Object(i.b)("p",null,"Returns the distance in grid cells between the two indexes."),Object(i.b)("p",null,"Returns a negative number if finding the distance failed. Finding the distance can fail because the two\nindexes are not comparable (different resolutions), too far apart, or are separated by pentagonal\ndistortion. This is the same set of limitations as the local IJ coordinate space functions."),Object(i.b)("h2",{id:"experimentalh3tolocalij"},"experimentalH3ToLocalIj"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int experimentalH3ToLocalIj(H3Index origin, H3Index h3, CoordIJ *out);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.experimental_h3_to_local_ij(origin, h)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"CoordIJ experimentalH3ToLocalIj(long origin, long h3) throws PentagonEncounteredException, LocalIjUndefinedException;\nCoordIJ experimentalH3ToLocalIj(String originAddress, String h3Address) throws PentagonEncounteredException, LocalIjUndefinedException;\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.experimentalH3ToLocalIj(origin, h3)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const origin = '85283473fffffff';\n  const h = '8528342bfffffff';\n  const {i, j} = h3.experimentalH3ToLocalIj(origin, h);\n  return [i, j];\n}\n")))),Object(i.b)("p",null,"Produces local IJ coordinates for an H3 index anchored by an origin."),Object(i.b)("p",null,"This function is experimental, and its output is not guaranteed\nto be compatible across different versions of H3."),Object(i.b)("h2",{id:"experimentallocalijtoh3"},"experimentalLocalIjToH3"),Object(i.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int experimentalLocalIjToH3(H3Index origin, const CoordIJ *ij, H3Index *out);\n"))),Object(i.b)(r.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.experimental_local_ij_to_h3(origin, i, j)\n"))),Object(i.b)(r.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"long experimentalLocalIjToH3(long origin, CoordIJ ij) throws LocalIjUndefinedException;\nString experimentalLocalIjToH3(String originAddress, CoordIJ ij) throws LocalIjUndefinedException;\n"))),Object(i.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.experimentalLocalIjToH3(origin, coords)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const coords = {i: 0, j: 0};\n  return h3.experimentalLocalIjToH3(h, coords);\n}\n")))),Object(i.b)("p",null,"Produces an H3 index from local IJ coordinates anchored by an origin."),Object(i.b)("p",null,"This function is experimental, and its output is not guaranteed\nto be compatible across different versions of H3."))}d.isMDXComponent=!0}}]);