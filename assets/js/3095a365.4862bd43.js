(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),l=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),o=function(e){var a=l.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=o(e.components);return l.a.createElement(b.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},d=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=o(t),d=n,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||c;return t?l.a.createElement(m,i(i({ref:a},b),{},{components:t})):l.a.createElement(m,i({ref:a},b))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,r=new Array(c);r[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var b=2;b<c;b++)r[b]=t[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},116:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}a.a=function(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}},118:function(e,a,t){"use strict";var n=t(0),l=t(119);a.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,a,t){"use strict";var n=t(0),l=Object(n.createContext)(void 0);a.a=l},120:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(118),r=t(116),i=t(54),s=t.n(i);var b=37,o=39;a.a=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(c.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,j=Object(n.useState)(i),g=j[0],O=j[1],f=n.Children.toArray(e.children),y=[];if(null!=u){var N=v[u];null!=N&&N!==g&&p.some((function(e){return e.value===N}))&&O(N)}var I=function(e){var a=e.target,t=y.indexOf(a),n=f[t].props.value;O(n),null!=u&&(h(u,n),setTimeout((function(){var e,t,n,l,c,r,i,b;(e=a.getBoundingClientRect(),t=e.top,n=e.left,l=e.bottom,c=e.right,r=window,i=r.innerHeight,b=r.innerWidth,t>=0&&c<=b&&l<=i&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s.a.tabItemActive),setTimeout((function(){return a.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var a,t;switch(e.keyCode){case o:var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case b:var l=y.indexOf(e.target)-1;t=y[l]||y[y.length-1]}null===(a=t)||void 0===a||a.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var a=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:g===a?0:-1,"aria-selected":g===a,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:I,onClick:I},t)}))),a?Object(n.cloneElement)(f.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==g})}))))}},121:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},83:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return p}));var n=t(3),l=(t(0),t(115)),c=t(120),r=t(121);const i={id:"inspection",title:"Index inspection functions",sidebar_label:"Inspection",slug:"/api/inspection"},s={unversionedId:"api/inspection",id:"api/inspection",isDocsHomePage:!1,title:"Index inspection functions",description:"These functions provide metadata about an H3 index, such as its resolution or base cell, and provide utilities for converting into and out of the 64-bit representation of an H3 index.",source:"@site/docs/api/inspection.mdx",slug:"/api/inspection",permalink:"/docs/api/inspection",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/inspection.mdx",version:"current",sidebar_label:"Inspection",sidebar:"someSidebar",previous:{title:"Indexing functions",permalink:"/docs/api/indexing"},next:{title:"Grid traversal functions",permalink:"/docs/api/traversal"}},b=[{value:"h3GetResolution",id:"h3getresolution",children:[]},{value:"h3GetBaseCell",id:"h3getbasecell",children:[]},{value:"stringToH3",id:"stringtoh3",children:[]},{value:"h3ToString",id:"h3tostring",children:[]},{value:"h3IsValid",id:"h3isvalid",children:[]},{value:"h3IsResClassIII",id:"h3isresclassiii",children:[]},{value:"h3IsPentagon",id:"h3ispentagon",children:[]},{value:"h3GetFaces",id:"h3getfaces",children:[]},{value:"maxFaceCount",id:"maxfacecount",children:[]}],o={toc:b};function p({components:e,...a}){return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"These functions provide metadata about an H3 index, such as its resolution or base cell, and provide utilities for converting into and out of the 64-bit representation of an H3 index."),Object(l.b)("h2",{id:"h3getresolution"},"h3GetResolution"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"int h3GetResolution(H3Index h);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_get_resolution(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"int h3GetResolution(long h3);\nint h3GetResolution(String h3Address);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"h3.h3GetResolution(h)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.h3GetResolution(h);\n}\n")))),Object(l.b)("p",null,"Returns the resolution of the index."),Object(l.b)("h2",{id:"h3getbasecell"},"h3GetBaseCell"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"int h3GetBaseCell(H3Index h);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_get_base_cell(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"int h3GetBaseCell(long h3);\nint h3GetBaseCell(String h3Address);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"h3.h3GetBaseCell(h)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.h3GetBaseCell(h);\n}\n")))),Object(l.b)("p",null,"Returns the base cell number of the index."),Object(l.b)("h2",{id:"stringtoh3"},"stringToH3"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"H3Index stringToH3(const char *str);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.string_to_h3(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"long stringToH3(String h3Address);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("p",null,"The H3 JavaScript binding supports only the string representation of an H3 index."))),Object(l.b)("p",null,"Converts the string representation to ",Object(l.b)("inlineCode",{parentName:"p"},"H3Index")," (",Object(l.b)("inlineCode",{parentName:"p"},"uint64_t"),") representation."),Object(l.b)("p",null,"Returns 0 on error."),Object(l.b)("h2",{id:"h3tostring"},"h3ToString"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"void h3ToString(H3Index h, char *str, size_t sz);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_to_string(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"String h3ToString(long h3);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("p",null,"The H3 JavaScript binding supports only the string representation of an H3 index."))),Object(l.b)("p",null,"Converts the ",Object(l.b)("inlineCode",{parentName:"p"},"H3Index")," representation of the index to the string representation. ",Object(l.b)("inlineCode",{parentName:"p"},"str")," must be at least of length 17."),Object(l.b)("h2",{id:"h3isvalid"},"h3IsValid"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"int h3IsValid(H3Index h);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_is_valid(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"boolean h3IsValid(long h3);\nboolean h3IsValid(String h3Address);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"h3.h3IsValid(h)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.h3IsValid(h);\n}\n")))),Object(l.b)("p",null,"Returns non-zero if this is a valid H3 index."),Object(l.b)("h2",{id:"h3isresclassiii"},"h3IsResClassIII"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"int h3IsResClassIII(H3Index h);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_is_res_class_III(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"boolean h3IsResClassIII(long h3);\nboolean h3IsResClassIII(String h3Address);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"h3.h3IsResClassIII(h)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.h3IsResClassIII(h);\n}\n")))),Object(l.b)("p",null,"Returns non-zero if this index has a resolution with Class III orientation."),Object(l.b)("h2",{id:"h3ispentagon"},"h3IsPentagon"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"int h3IsPentagon(H3Index h);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_is_pentagon(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"boolean h3IsPentagon(long h3);\nboolean h3IsPentagon(String h3Address);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"h3.h3IsPentagon(h)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.h3IsPentagon(h);\n}\n")))),Object(l.b)("p",null,"Returns non-zero if this index represents a pentagonal cell."),Object(l.b)("h2",{id:"h3getfaces"},"h3GetFaces"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"void h3GetFaces(H3Index h, int* out);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_get_faces(h)\n"))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Collection<Integer> h3GetFaces(long h3);\nCollection<Integer> h3GetFaces(String h3Address);\n"))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"h3.h3GetFaces(h)\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.h3GetFaces(h);\n}\n")))),Object(l.b)("p",null,"Find all icosahedron faces intersected by a given H3 index and places them in the array ",Object(l.b)("inlineCode",{parentName:"p"},"out"),". ",Object(l.b)("inlineCode",{parentName:"p"},"out")," must be at least of length ",Object(l.b)("inlineCode",{parentName:"p"},"maxFaceCount(h)"),"."),Object(l.b)("p",null,"Faces are represented as integers from 0-19, inclusive. The array is sparse, and empty (no intersection) array values are represented by -1."),Object(l.b)("h2",{id:"maxfacecount"},"maxFaceCount"),Object(l.b)(c.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"c",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"int maxFaceCount(H3Index h3);\n"))),Object(l.b)(r.a,{value:"python",mdxType:"TabItem"},Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(l.b)(r.a,{value:"java",mdxType:"TabItem"},Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),Object(l.b)(r.a,{value:"javascript",mdxType:"TabItem"},Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This function exists for memory management and is not exposed."))))),Object(l.b)("p",null,"Returns the maximum number of icosahedron faces the given H3 index may intersect."))}p.isMDXComponent=!0}}]);