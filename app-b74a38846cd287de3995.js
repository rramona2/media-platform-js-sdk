webpackJsonp([0xd2a57dc1d883],{73:function(n,e,t){"use strict";function o(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var r=[{plugin:t(362),options:{plugins:[]}},{plugin:t(367),options:{plugins:[]}}]},212:function(n,e,t){"use strict";e.components={"component---src-templates-md-js":t(324),"component---src-pages-index-js":t(323),"component---src-pages-404-js":t(322)},e.json={"layout-index.json":t(325),"pages-page-fix.json":t(335),"archive-files.json":t(329),"api-reference.json":t(328),"file-management.json":t(330),"images.json":t(331),"partial-authentication.json":t(337),"partial-archive-manager.json":t(336),"partial-av-manager.json":t(338),"partial-configuration.json":t(339),"partial-create-archive-request.json":t(340),"partial-destination.json":t(341),"partial-download-url-request.json":t(342),"partial-extract-archive-request.json":t(343),"index.json":t(332),"partial-file-manager.json":t(344),"partial-import-file-request.json":t(345),"partial-job-manager.json":t(346),"partial-list-files-request.json":t(348),"partial-list-files-response.json":t(349),"partial-media-platform-public.json":t(351),"partial-media-platform.json":t(350),"partial-packaging-specification.json":t(352),"partial-search-jobs-request.json":t(353),"partial-search-jobs-response.json":t(354),"jobs.json":t(333),"partial-source.json":t(355),"partial-transcode-job-response.json":t(356),"partial-transcode-request.json":t(357),"metadata.json":t(334),"partial-upload-file-request.json":t(358),"partial-upload-url-request.json":t(359),"partial-upload-url-response.json":t(360),"partial-jobs-specifications.json":t(347),"404.json":t(326),"404-html.json":t(327)},e.layouts={"layout---index":t(321)}},213:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},l=t(1),s=o(l),c=t(3),p=o(c),f=t(152),d=o(f),m=t(54),h=o(m),y=t(73),g=t(449),j=o(g),v=function(n){var e=n.children;return s.default.createElement("div",null,e())},x=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,y.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,l.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,l.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(s.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=x,n.exports=e.default},54:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(417),r=o(a),u=(0,r.default)();n.exports=u},214:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(69),r=t(153),u=o(r),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),i[r])return i[r];var l=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return l=n,i[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return l=n,i[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return l=n,i[r]=n,!0}return!1}),l}}},215:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(181),r=o(a),u=t(73),i=(0,u.apiRunner)("replaceHistory"),l=i[0],s=l||(0,r.default)();n.exports=s},327:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(380)})})}},326:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(381)})})}},328:function(n,e,t){t(2),n.exports=function(n){return t.e(0x7202e5ab0a27,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(382)})})}},329:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa86c093eeff4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(383)})})}},330:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe24949714d2d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(384)})})}},331:function(n,e,t){t(2),n.exports=function(n){return t.e(0x8f622e016bef,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(385)})})}},332:function(n,e,t){t(2),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(386)})})}},333:function(n,e,t){t(2),n.exports=function(n){return t.e(20804641011518,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(387)})})}},325:function(n,e,t){t(2),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(123)})})}},334:function(n,e,t){t(2),n.exports=function(n){return t.e(0x6cf328cd1422,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(388)})})}},335:function(n,e,t){t(2),n.exports=function(n){return t.e(0xcb12d994b39a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(389)})})}},336:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa6713463ec09,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},337:function(n,e,t){t(2),n.exports=function(n){return t.e(58824103141150,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},338:function(n,e,t){t(2),n.exports=function(n){return t.e(49467461288096,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(392)})})}},339:function(n,e,t){t(2),n.exports=function(n){return t.e(0x91ab67fffb63,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(393)})})}},340:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe74811f4d0e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(394)})})}},341:function(n,e,t){t(2),n.exports=function(n){return t.e(93104425180632,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(395)})})}},342:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe05e98ded1ef,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},343:function(n,e,t){t(2),n.exports=function(n){return t.e(0xfcdf1cd64436,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},344:function(n,e,t){t(2),n.exports=function(n){return t.e(54559128000812,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},345:function(n,e,t){t(2),n.exports=function(n){return t.e(0xcf420c4eebbb,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},346:function(n,e,t){t(2),n.exports=function(n){return t.e(0xf4a2a589f409,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},347:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa510e2c78c2c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},348:function(n,e,t){t(2),n.exports=function(n){return t.e(0x7cdf2daef8ea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},349:function(n,e,t){t(2),n.exports=function(n){return t.e(0x99ab11b02a4f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},351:function(n,e,t){t(2),n.exports=function(n){return t.e(0x6eeb5b35f185,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},350:function(n,e,t){t(2),n.exports=function(n){return t.e(0x812a70a31aac,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},352:function(n,e,t){t(2),n.exports=function(n){return t.e(0xe5396d0ffe4a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},353:function(n,e,t){t(2),n.exports=function(n){return t.e(0xd964eec46183,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},354:function(n,e,t){t(2),n.exports=function(n){return t.e(0x68b0de95387f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},355:function(n,e,t){t(2),n.exports=function(n){return t.e(0xaa4c9a89343b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},356:function(n,e,t){t(2),n.exports=function(n){return t.e(0x600cf3f90175,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},357:function(n,e,t){t(2),n.exports=function(n){return t.e(0xb4c2c3668c23,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},358:function(n,e,t){t(2),n.exports=function(n){return t.e(0xea53735cda3,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},359:function(n,e,t){t(2),n.exports=function(n){return t.e(26401318948562,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},360:function(n,e,t){t(2),n.exports=function(n){return t.e(0xa32710b3bd26,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},321:function(n,e,t){t(2),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(216)})})}},152:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(1),r=(o(a),t(214)),u=o(r),i=t(54),l=o(i),s=t(153),c=o(s),p=void 0,f={},d={},m={},h={},y={},g=[],j=[],v={},x="",b=[],C={},N=function(n){return n&&n.default||n},w=void 0,k=!0,R=[],_={},P={},T=5;w=t(217)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),w.onResourcedFinished(n)})}}),l.default.on("onPreLoadPageResources",function(n){w.onPreLoadPageResources(n)}),l.default.on("onPostLoadPageResources",function(n){w.onPostLoadPageResources(n)});var E=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},O=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,R.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),R=R.slice(-T),t(n,o)})}},q=function(e,t){y[e]?n.nextTick(function(){t(null,y[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var a=N(o());y[e]=a,t(n,a)}})},S=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=R.find(function(n){return n.succeeded});return!!e},A=function(n,e){console.log(e),_[n]||(_[n]=e),S()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},D=1,M={empty:function(){j=[],v={},C={},b=[],g=[],x=""},addPagesArray:function(n){g=n,x="/media-platform-js-sdk",p=(0,u.default)(n,x)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,c.default)(n,x);if(!g.some(function(n){return n.path===e}))return!1;var t=1/D;D+=1,v[e]?v[e]+=1:v[e]=1,M.has(e)||j.unshift(e),j.sort(O);var o=p(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||h[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(E),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:v}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),k=!1;if(_[e])return A(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return A(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),l.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];l.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,i=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:o};var n={component:a,json:r,layout:u,page:o};t(n),l.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return q(o.componentChunkName,function(n,e){n&&A(o.path,"Loading the component for "+o.path+" failed"),a=e,i()}),q(o.jsonName,function(n,e){n&&A(o.path,"Loading the JSON for "+o.path+" failed"),r=e,i()}),void(o.layoutComponentChunkName&&q(o.layout,function(n,e){n&&A(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(70))},415:function(n,e){n.exports=[{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"pages-page-fix.json",path:"/pages/__page-fix/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"archive-files.json",path:"/archive-files/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"api-reference.json",path:"/api-reference/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"file-management.json",path:"/file-management/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"images.json",path:"/images/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-authentication.json",path:"/partial/authentication/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-archive-manager.json",path:"/partial/archive-manager/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-av-manager.json",path:"/partial/av-manager/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-configuration.json",path:"/partial/configuration/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-create-archive-request.json",path:"/partial/create-archive-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-destination.json",path:"/partial/destination/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-download-url-request.json",path:"/partial/download-url-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-extract-archive-request.json",path:"/partial/extract-archive-request/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-file-manager.json",path:"/partial/file-manager/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-import-file-request.json",path:"/partial/import-file-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-job-manager.json",path:"/partial/job-manager/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-list-files-request.json",path:"/partial/list-files-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-list-files-response.json",path:"/partial/list-files-response/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-media-platform-public.json",path:"/partial/media-platform-public/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-media-platform.json",path:"/partial/media-platform/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-packaging-specification.json",path:"/partial/packaging-specification/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-search-jobs-request.json",path:"/partial/search-jobs-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-search-jobs-response.json",path:"/partial/search-jobs-response/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"jobs.json",path:"/jobs/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-source.json",path:"/partial/source/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-transcode-job-response.json",path:"/partial/transcode-job-response/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-transcode-request.json",path:"/partial/transcode-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"metadata.json",path:"/metadata/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-upload-file-request.json",path:"/partial/upload-file-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-upload-url-request.json",path:"/partial/upload-url-request/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-upload-url-response.json",path:"/partial/upload-url-response/"},{componentChunkName:"component---src-templates-md-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"partial-jobs-specifications.json",path:"/partial/jobs-specifications/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},217:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(73),u=t(1),i=o(u),l=t(68),s=o(l),c=t(69),p=t(366),f=t(318),d=o(f),m=t(10),h=t(215),y=o(h),g=t(54),j=o(g),v=t(415),x=o(v),b=t(416),C=o(b),N=t(213),w=o(N),k=t(212),R=o(k),_=t(152),P=o(_);t(235),window.___history=y.default,window.___emitter=j.default,P.default.addPagesArray(x.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=c.matchPath;var T=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=T[n];return null!=e&&(y.default.replace(e.toPath),!0)};E(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&l!==!1||(window.___history=n,l=!0,n.listen(function(n,e){E(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(218);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,y.default.location),o=t.pathname,a=T[o];a&&(o=a.toPath);var r=window.location;if(r.pathname!==t.pathname||r.search!==t.search||r.hash!==t.hash){var u=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:y.default.location,action:y.default.action});var l=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:y.default})[0],h=function(n){var e=n.children;return i.default.createElement(c.Router,{history:y.default},e)},g=(0,c.withRouter)(w.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(g,{layout:!0,children:function(e){return(0,u.createElement)(c.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,a({page:!0},o)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0],l=(0,r.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return l(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},416:function(n,e){n.exports=[]},218:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(54),r=o(a),u="/";u="/media-platform-js-sdk/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},153:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},318:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},2:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var i=!1,l=!0,s=function(n){u&&(u(t,n),u=null)};return!r&&e&&e[o]?void s(!0):(a(o,function(){i||(i=!0,l?setTimeout(function(){s()}):s())}),void(i||(l=!1,n(function(){i||(i=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),s(!0))}))))}}o()},361:function(n,e,t){"use strict";var o=t(40);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,a=n.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){t=a;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,r.host!==u.host)return!0;var i=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!i.test(""+r.host+r.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},362:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(40),r=t(361),u=o(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},367:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},120:function(n,e){"use strict";function t(n,e,p){if("string"!=typeof e){if(c){var f=s(e);f&&f!==c&&t(n,f,p)}var d=u(e);i&&(d=d.concat(i(e)));for(var m=0;m<d.length;++m){var h=d[m];if(!(o[h]||a[h]||p&&p[h])){var y=l(e,h);try{r(n,h,y)}catch(n){}}}return n}return n}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);n.exports=t},417:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t);
},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},50:function(n,e){"use strict";function t(){if(!d){var n=s.expirationTime;m?w():m=!0,N(r,n)}}function o(){var n=s,e=s.next;if(s===e)s=null;else{var o=s.previous;s=o.next=e,e.previous=o}n.next=n.previous=null,o=n.callback,e=n.expirationTime,n=n.priorityLevel;var a=c,r=f;c=n,f=e;try{var u=o(y)}finally{c=a,f=r}if("function"==typeof u)if(u={callback:u,priorityLevel:n,expirationTime:e,next:null,previous:null},null===s)s=u.next=u.previous=u;else{o=null,n=s;do{if(n.expirationTime>=e){o=n;break}n=n.next}while(n!==s);null===o?o=s:o===s&&(s=u,t()),e=o.previous,e.next=o.previous=u,u.next=o,u.previous=e}}function a(){if(-1===p&&null!==s&&1===s.priorityLevel){d=!0,y.didTimeout=!0;try{do o();while(null!==s&&1===s.priorityLevel)}finally{d=!1,null!==s?t():m=!1}}}function r(n){d=!0,y.didTimeout=n;try{if(n)for(;null!==s;){var r=e.unstable_now();if(!(s.expirationTime<=r))break;do o();while(null!==s&&s.expirationTime<=r)}else if(null!==s)do o();while(null!==s&&0<k()-e.unstable_now())}finally{d=!1,null!==s?t():m=!1,a()}}function u(n){i=x(function(e){v(l),n(e)}),l=j(function(){b(i),n(e.unstable_now())},100)}Object.defineProperty(e,"__esModule",{value:!0});var i,l,s=null,c=3,p=-1,f=-1,d=!1,m=!1,h="object"==typeof performance&&"function"==typeof performance.now,y={timeRemaining:h?function(){if(null!==s&&s.expirationTime<f)return 0;var n=k()-performance.now();return 0<n?n:0}:function(){if(null!==s&&s.expirationTime<f)return 0;var n=k()-Date.now();return 0<n?n:0},didTimeout:!1},g=Date,j="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,x="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,b="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;if(h){var C=performance;e.unstable_now=function(){return C.now()}}else e.unstable_now=function(){return g.now()};var N,w,k;if("undefined"!=typeof window&&window._schedMock){var R=window._schedMock;N=R[0],w=R[1],k=R[2]}else if("undefined"==typeof window||"function"!=typeof window.addEventListener){var _=null,P=-1,T=function(n,e){if(null!==_){var t=_;_=null;try{P=e,t(n)}finally{P=-1}}};N=function(n,e){-1!==P?setTimeout(N,0,n,e):(_=n,setTimeout(T,e,!0,e),setTimeout(T,1073741823,!1,1073741823))},w=function(){_=null},k=function(){return 1/0},e.unstable_now=function(){return-1===P?0:P}}else{"undefined"!=typeof console&&("function"!=typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof b&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var E=null,O=!1,L=-1,q=!1,S=!1,A=0,D=33,M=33;k=function(){return A};var F="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(n){if(n.source===window&&n.data===F){O=!1,n=E;var t=L;E=null,L=-1;var o=e.unstable_now(),a=!1;if(0>=A-o){if(!(-1!==t&&t<=o))return q||(q=!0,u(U)),E=n,void(L=t);a=!0}if(null!==n){S=!0;try{n(a)}finally{S=!1}}}},!1);var U=function(n){if(null!==E){u(U);var e=n-A+M;e<M&&D<M?(8>e&&(e=8),M=e<D?D:e):D=e,A=n+M,O||(O=!0,window.postMessage(F,"*"))}else q=!1};N=function(n,e){E=n,L=e,S||0>e?window.postMessage(F,"*"):q||(q=!0,u(U))},w=function(){E=null,O=!1,L=-1}}e.unstable_ImmediatePriority=1,e.unstable_UserBlockingPriority=2,e.unstable_NormalPriority=3,e.unstable_IdlePriority=4,e.unstable_runWithPriority=function(n,t){switch(n){case 1:case 2:case 3:case 4:break;default:n=3}var o=c,r=p;c=n,p=e.unstable_now();try{return t()}finally{c=o,p=r,a()}},e.unstable_scheduleCallback=function(n,o){var a=-1!==p?p:e.unstable_now();if("object"==typeof o&&null!==o&&"number"==typeof o.timeout)o=a+o.timeout;else switch(c){case 1:o=a+-1;break;case 2:o=a+250;break;case 4:o=a+1073741823;break;default:o=a+5e3}if(n={callback:n,priorityLevel:c,expirationTime:o,next:null,previous:null},null===s)s=n.next=n.previous=n,t();else{a=null;var r=s;do{if(r.expirationTime>o){a=r;break}r=r.next}while(r!==s);null===a?a=s:a===s&&(s=n,t()),o=a.previous,o.next=a.previous=n,n.next=a,n.previous=o}return n},e.unstable_cancelCallback=function(n){var e=n.next;if(null!==e){if(e===n)s=null;else{n===s&&(s=e);var t=n.previous;t.next=e,e.previous=t}n.next=n.previous=null}},e.unstable_wrapCallback=function(n){var t=c;return function(){var o=c,r=p;c=t,p=e.unstable_now();try{return n.apply(this,arguments)}finally{c=o,p=r,a()}}},e.unstable_getCurrentPriorityLevel=function(){return c}},139:function(n,e,t){"use strict";n.exports=t(50)},449:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},70:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(c===setTimeout)return setTimeout(n,0);if((c===t||!c)&&setTimeout)return c=setTimeout,setTimeout(n,0);try{return c(n,0)}catch(e){try{return c.call(null,n,0)}catch(e){return c.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):y=-1,m.length&&i())}function i(){if(!h){var n=a(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++y<e;)d&&d[y].run();y=-1,e=m.length}d=null,h=!1,r(n)}}function l(n,e){this.fun=n,this.array=e}function s(){}var c,p,f=n.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:t}catch(n){c=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,y=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new l(n,e)),1!==m.length||h||a(i)},l.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},322:function(n,e,t){t(2),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(224)})})}},323:function(n,e,t){t(2),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(225)})})}},324:function(n,e,t){t(2),n.exports=function(n){return t.e(0xce3156526740,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(12)})})}}});
//# sourceMappingURL=app-b74a38846cd287de3995.js.map