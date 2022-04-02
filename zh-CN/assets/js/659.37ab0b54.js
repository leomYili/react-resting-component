"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[659],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,v=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97413:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(86010);var l=n(95999),o="copyButton_eDfN",i="copyButtonCopied_ljy5",c="copyButtonIcons_W9eQ",s="copyButtonIcon_XEyF",m="copyButtonSuccessIcon_i9w9";function d(e){var t=e.code,n=(0,a.useState)(!1),d=n[0],u=n[1],p=(0,a.useRef)(void 0),v=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(t),u(!0),p.current=window.setTimeout((function(){u(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(p.current)}}),[]),a.createElement("button",{type:"button","aria-label":d?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)(o,"clean-btn",d&&i),onClick:v},a.createElement("span",{className:c,"aria-hidden":"true"},a.createElement("svg",{className:s,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:m,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},54067:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(5979),l={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},o=n(86010),i=n(39960),c=n(44996);function s(e){var t=e.children,n=e.href,r="breadcrumbs__link";return n?a.createElement(i.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function m(e){var t=e.children,n=e.active,r=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function d(){var e=(0,c.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(i.Z,{className:(0,o.Z)("breadcrumbs__link",l.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,r.s1)(),t=(0,r.Ns)();return e?a.createElement("nav",{className:(0,o.Z)(r.kM.docs.docBreadcrumbs,l.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(d,null),e.map((function(t,n){return a.createElement(m,{key:n,active:n===e.length-1,index:n},a.createElement(s,{href:n<e.length-1?t.href:void 0},t.label))})))):null}},51219:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=n(67294),r=n(86010),l=n(95214),o=n(94474),i=n(27597),c=n(95999),s=n(5979);function m(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function d(e){var t=e.lastUpdatedBy;return a.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:s.kM.common.lastUpdated},a.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(m,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(d,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var p=n(87462),v=n(63366),f="iconEdit_dcUD",h=["className"];function g(e){var t=e.className,n=(0,v.Z)(e,h);return a.createElement("svg",(0,p.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(f,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function b(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},a.createElement(g,null),a.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=n(39960),E="tag_hD8n",k="tagRegular_D6E_",N="tagWithCount_i0QQ";function Z(e){var t=e.permalink,n=e.name,l=e.count;return a.createElement(y.Z,{href:t,className:(0,r.Z)(E,l?N:k)},n,l&&a.createElement("span",null,l))}var _="tags_XVD_",L="tag_JSN8";function T(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(_,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:L},a.createElement(Z,{name:t,permalink:n}))}))))}var C="lastUpdated_foO9";function w(e){return a.createElement("div",{className:(0,r.Z)(s.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(T,e)))}function O(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(s.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(b,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",C)},(n||l)&&a.createElement(u,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function x(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,m=c.length>0,d=!!(n||l||i);return m||d?a.createElement("footer",{className:(0,r.Z)(s.kM.docs.docFooter,"docusaurus-mt-lg")},m&&a.createElement(w,{tags:c}),d&&a.createElement(O,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var A=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function U(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(U,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function P(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,o=void 0===l?"table-of-contents__link":l,i=e.linkActiveClassName,c=void 0===i?void 0:i,m=e.minHeadingLevel,d=e.maxHeadingLevel,u=(0,v.Z)(e,A),f=(0,s.LU)(),h=null!=m?m:f.tableOfContents.minHeadingLevel,g=null!=d?d:f.tableOfContents.maxHeadingLevel,b=(0,s.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:g}),y=(0,a.useMemo)((function(){if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:g}}),[o,c,h,g]);return(0,s.Si)(y),a.createElement(U,(0,p.Z)({toc:b,className:r,linkClassName:o},u))}var M="tableOfContents_cNA8",j=["className"];function B(e){var t=e.className,n=(0,v.Z)(e,j);return a.createElement("div",{className:(0,r.Z)(M,"thin-scrollbar",t)},a.createElement(P,(0,p.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var D="tocCollapsible_jdIR",S="tocCollapsibleButton_Fzxq",H="tocCollapsibleContent_MpvI",I="tocCollapsibleExpanded_laf4";function V(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,o=e.maxHeadingLevel,i=(0,s.uR)({initialState:!0}),m=i.collapsed,d=i.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(D,!m&&I,n)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",S),onClick:d},a.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(s.zF,{lazy:!0,className:H,collapsed:m},a.createElement(P,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}var F=n(39649),R="docItemContainer_vinB",z="docItemCol_DM6M",W="tocMobile_TmEX",X=n(54067),Q=n(3905),q=n(35742),J=["mdxType","originalType"];var G=n(20819);var K="details_BAp3";function Y(e){var t=Object.assign({},e);return a.createElement(s.PO,(0,p.Z)({},t,{className:(0,r.Z)("alert alert--info",K,t.className)}))}function $(e){return a.createElement(F.Z,e)}var ee="img_E7b_";var te={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,v.Z)(r,J));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(q.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(G.Z,e)},a:function(e){return a.createElement(y.Z,e)},pre:function(e){var t;return a.createElement(G.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(Y,(0,p.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,p.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return a.createElement("img",(0,p.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,ee))}));var t},h1:function(e){return a.createElement($,(0,p.Z)({as:"h1"},e))},h2:function(e){return a.createElement($,(0,p.Z)({as:"h2"},e))},h3:function(e){return a.createElement($,(0,p.Z)({as:"h3"},e))},h4:function(e){return a.createElement($,(0,p.Z)({as:"h4"},e))},h5:function(e){return a.createElement($,(0,p.Z)({as:"h5"},e))},h6:function(e){return a.createElement($,(0,p.Z)({as:"h6"},e))}};function ne(e){var t=e.children;return a.createElement(Q.Zo,{components:te},t)}function ae(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,o=n.assets,i=l.keywords,c=r.description,m=r.title,d=null!=(t=o.image)?t:l.image;return a.createElement(s.d,{title:m,description:c,keywords:i,image:d})}function re(e){var t=e.content,n=t.metadata,c=t.frontMatter,m=c.hide_title,d=c.hide_table_of_contents,u=c.toc_min_heading_level,p=c.toc_max_heading_level,v=n.title,f=!m&&void 0===t.contentTitle,h=(0,s.iP)(),g=!d&&t.toc&&t.toc.length>0,b=g&&("desktop"===h||"ssr"===h);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!d&&z)},a.createElement(o.Z,null),a.createElement("div",{className:R},a.createElement("article",null,a.createElement(X.Z,null),a.createElement(i.Z,null),g&&a.createElement(V,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:p,className:(0,r.Z)(s.kM.docs.docTocMobile,W)}),a.createElement("div",{className:(0,r.Z)(s.kM.docs.docMarkdown,"markdown")},f&&a.createElement("header",null,a.createElement(F.Z,{as:"h1"},v)),a.createElement(ne,null,a.createElement(t,null))),a.createElement(x,e)),a.createElement(l.Z,{previous:n.previous,next:n.next}))),b&&a.createElement("div",{className:"col col--3"},a.createElement(B,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:p,className:s.kM.docs.docTocDesktop})))}function le(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(s.FG,{className:t},a.createElement(ae,e),a.createElement(re,e))}},95214:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),l=n(95999),o=n(39960);function i(e){var t=e.permalink,n=e.title,a=e.subLabel;return r.createElement(o.Z,{className:"pagination-nav__link",to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function c(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(i,(0,a.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(i,(0,a.Z)({},n,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},27597:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(95999),l=n(5979),o=n(86010);function i(e){var t=e.className,n=(0,l.E6)();return n.badge?a.createElement("span",{className:(0,o.Z)(t,l.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},94474:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),r=n(52263),l=n(39960),o=n(95999),i=n(65551),c=n(5979),s=n(86010);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function u(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,n=e.className,l=e.versionMetadata,o=(0,r.Z)().siteConfig.title,m=(0,i.gA)({failfast:!0}).pluginId,p=(0,c.J)(m).savePreferredVersionName,v=(0,i.Jo)(m),f=v.latestDocSuggestion,h=v.latestVersionSuggestion,g=null!=f?f:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,s.Z)(n,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(d,{siteTitle:o,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(u,{versionLabel:h.label,to:g.path,onClick:function(){return p(h.name)}})))}function v(e){var t=e.className,n=(0,c.E6)();return n.banner?a.createElement(p,{className:t,versionMetadata:n}):null}},39649:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(95999),c=n(5979),s="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"],u=["as"];function p(e){var t=e.as,n=e.id,u=(0,r.Z)(e,d),p=(0,c.LU)().navbar.hideOnScroll;return n?l.createElement(t,(0,a.Z)({},u,{className:(0,o.Z)("anchor",p?m:s),id:n}),u.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,u)}function v(e){var t=e.as,n=(0,r.Z)(e,u);return"h1"===t?l.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):l.createElement(p,(0,a.Z)({as:t},n))}},23746:function(e,t,n){n.d(t,{ZP:function(){return f},lG:function(){return o}});var a=n(87410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=n(67294),o={Prism:a.default,theme:r};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var s=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function p(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var v=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=c({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?c({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=c({},p(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?c({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=a[o]++)<r[o];){var u=void 0,p=t[o],v=n[o][l];if("string"==typeof v?(p=o>0?p:["plain"],u=v):(p=d(p,v.type),v.alias&&(p=d(p,v.alias)),u=v.content),"string"==typeof u){var f=u.split(s),h=f.length;i.push({types:p,content:f[0]});for(var g=1;g<h;g++)m(i),c.push(i=[]),i.push({types:p,content:f[g]})}else o++,t.push(p),n.push(u),a.push(0),r.push(u.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return m(i),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),f=v}}]);