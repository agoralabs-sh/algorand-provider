"use strict";(self.webpackChunk_agoralabs_sh_algorand_provider=self.webpackChunk_agoralabs_sh_algorand_provider||[]).push([[592],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,v=f["".concat(o,".").concat(m)]||f[m]||d[m]||l;return t?r.createElement(v,u(u({ref:n},s),{},{components:t})):r.createElement(v,u({ref:n},s))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[f]="string"==typeof e?e:a,u[1]=i;for(var c=2;c<l;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7294),a=t(3743);const l={tableOfContentsInline:"tableOfContentsInline_prmo"};function u(e){var n=e.toc,t=e.minHeadingLevel,u=e.maxHeadingLevel;return r.createElement("div",{className:l.tableOfContentsInline},r.createElement(a.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:u,className:"table-of-contents",linkClassName:null}))}},3743:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(7462),a=t(3366),l=t(7294),u=t(6668),i=["parentIndex"];function o(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,a.Z)(e,i);t>=0?n[t].children.push(l):r.push(l)})),r}function c(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function f(e,n){var t,r,a=n.anchorTopOffset,l=e.find((function(e){return s(e).top>=a}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,l.useRef)(0),n=(0,u.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,l.useRef)(void 0),t=d();(0,l.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,l=e.minHeadingLevel,u=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:u}),o=f(i,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function v(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?l.createElement("ul",{className:a?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}const p=l.memo(v);var b=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,f=void 0===s?"table-of-contents__link":s,d=e.linkActiveClassName,v=void 0===d?void 0:d,g=e.minHeadingLevel,h=e.maxHeadingLevel,y=(0,a.Z)(e,b),E=(0,u.L)(),L=null!=g?g:E.tableOfContents.minHeadingLevel,O=null!=h?h:E.tableOfContents.maxHeadingLevel,N=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:o(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:L,maxHeadingLevel:O});return m((0,l.useMemo)((function(){if(f&&v)return{linkClassName:f,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:O}}),[f,v,L,O])),l.createElement(p,(0,r.Z)({toc:N,className:i,linkClassName:f},y))}},5162:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7294),a=t(6010);const l={tabItem:"tabItem_Ymn6"};function u(e){var n=e.children,t=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,u),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>L});var r=t(7462),a=t(7294),l=t(6010),u=t(2466),i=t(6550),o=t(1980),c=t(7392),s=t(12);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:f(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,i.k6)(),u=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,o._X)(u),(0,a.useCallback)((function(e){if(u){var n=new URLSearchParams(l.location.search);n.set(u,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[u,l])]}function p(e){var n,t,r,l,u=e.defaultValue,i=e.queryString,o=void 0!==i&&i,c=e.groupId,f=d(e),p=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:f})})),b=p[0],g=p[1],h=v({queryString:o,groupId:c}),y=h[0],E=h[1],L=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),O=L[0],N=L[1],w=function(){var e=null!=y?y:O;return m({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){w&&g(w)}),[w]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),E(e),N(e)}),[E,N,f]),tabValues:f}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var n=e.className,t=e.block,i=e.selectedValue,o=e.selectValue,c=e.tabValues,s=[],f=(0,u.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==i&&(f(n),o(r))},m=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,u=s.indexOf(e.currentTarget)-1;t=null!=(l=s[u])?l:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return s.push(e)},onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",g.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function y(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var l=t.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function E(e){var n=p(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(y,(0,r.Z)({},e,n)))}function L(e){var n=(0,b.Z)();return a.createElement(E,(0,r.Z)({key:String(n)},e))}}}]);