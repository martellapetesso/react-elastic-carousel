(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/docs/components/mdx/onUserNext.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/react/index.js"),s=o.n(t),r=o("./node_modules/@mdx-js/tag/dist/index.js"),c=o("./node_modules/docz/dist/index.m.js"),a=o("./src/react-elastic-carousel/index.js"),i=o("./src/docs/components/ItemContainer.js"),l=o("./src/docs/components/itemsCollection.js");function m(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}n.default=function(e){var n=e.components,o=m(e,["components"]);return s.a.createElement(r.MDXTag,{name:"wrapper",components:n},s.a.createElement(c.Playground,{__position:0,__code:"<Carousel\n  transitionMs={2500}\n  itemsToShow={2}\n  onUserNext={d => console.log('onUserNext', d)}\n  onNext={d => console.log('onNext', d)}\n>\n  {items(12).map(item => (\n    <Item key={item.id} {...item} />\n  ))}\n</Carousel>",__scope:{props:o,Carousel:a.a,Item:i.a,items:l.a}},s.a.createElement(a.a,{transitionMs:2500,itemsToShow:2,onUserNext:function(e){return console.log("onUserNext",e)},onNext:function(e){return console.log("onNext",e)}},Object(l.a)(12).map(function(e){return s.a.createElement(i.a,Object.assign({key:e.id},e))}))))}}}]);