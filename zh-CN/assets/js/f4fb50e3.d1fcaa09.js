"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[948],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),a=t(67294),l=t(72389),o=t(5979),i=t(86010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,x=y.setTabGroupChoices,N=(0,a.useState)(g),w=N[0],O=N[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=k[d];null!=C&&C!==w&&b.some((function(e){return e.value===C}))&&O(C)}var j=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==w&&(E(n),O(r),null!=d&&x(d,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},10522:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=t(9877),i=t(58215),u=["components"],s={sidebar_position:2,title:"v3"},c=void 0,p={unversionedId:"examples/umi/v3",id:"examples/umi/v3",title:"v3",description:"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5728umi3.x\u4e2d\u5982\u4f55\u5e94\u7528 stillness-component, \u901a\u8fc7\u91cd\u5199\u5e95\u5c42\u6e32\u67d3\u63d2\u4ef6, \u6765\u6539\u9020 switch \u4ece\u800c\u8fbe\u5230\u4e00\u81f4\u7684\u6548\u679c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/examples/umi/v3.md",sourceDirName:"examples/umi",slug:"/examples/umi/v3",permalink:"/react-stillness-component/zh-CN/docs/examples/umi/v3",editUrl:"https://github.com/leomYili/react-stillness-component/tree/main/docs/docs/examples/umi/v3.md",tags:[],version:"current",lastUpdatedBy:"leomYili",lastUpdatedAt:1651820678,formattedLastUpdatedAt:"2022/5/6",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"v3"},sidebar:"examples",previous:{title:"v6",permalink:"/react-stillness-component/zh-CN/docs/examples/react-router/v6"}},m={},d=[],f={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5728umi3.x\u4e2d\u5982\u4f55\u5e94\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"stillness-component"),", \u901a\u8fc7\u91cd\u5199\u5e95\u5c42\u6e32\u67d3\u63d2\u4ef6, \u6765\u6539\u9020 ",(0,l.kt)("inlineCode",{parentName:"p"},"switch")," \u4ece\u800c\u8fbe\u5230\u4e00\u81f4\u7684\u6548\u679c"),(0,l.kt)("p",null,"\u73b0\u5728\u8fd9\u5df2\u7ecf\u662f\u4e00\u4e2a\u516c\u5f00\u7684\u5305\u4e86,\u53ea\u9700\u8981:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add umi-plugin-stillness\n"))),(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install umi-plugin-stillness\n"))),(0,l.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add umi-plugin-stillness\n")))),(0,l.kt)("p",null,"\u5176\u4e2d, \u56e0\u4e3a\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"IRoute"),"\u505a\u4e86\u4e00\u5b9a\u7684\u6539\u9020,\u5f53 ",(0,l.kt)("strong",{parentName:"p"},"routes")," \u4e2d\u5e26\u4e0a\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"stillness")," \u65f6,\u624d\u4f1a\u53d8\u4e3a\u7f13\u5b58\u7684\u9875\u9762"),(0,l.kt)("p",null,"\u4f7f\u7528\u8bf4\u660e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".umirc.ts"',title:'".umirc.ts"'},"import { defineConfig } from 'umi';\n\nexport default defineConfig({\n  nodeModulesTransform: {\n    type: 'none',\n  },\n  routes: [\n    {\n      exact: false,\n      path: '/',\n      component: '@/layouts/index',\n      routes: [\n        {\n          exact: false,\n          path: '/home',\n          component: '@/pages/home',\n          // highlight-next-line\n          stillness: true,\n          routes: [\n            {\n              path: '/home/a',\n              component: '@/pages/a',\n              // highlight-next-line\n              stillness: true,\n            },\n          ],\n        },\n        // highlight-next-line\n        { path: '/about', component: '@/pages/about', stillness: true },\n        { path: '/list', component: '@/pages/list' },\n      ],\n    },\n  ],\n  // highlight-next-line\n  stillness: {},\n});\n")),(0,l.kt)("p",null,"\u540c\u65f6, ",(0,l.kt)("inlineCode",{parentName:"p"},"stillness-component")," \u5e38\u7528api\u5df2\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"umi")," \u76f4\u63a5 import:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Offscreen,StillnessIRoute } from 'umi';\n")))}v.isMDXComponent=!0}}]);