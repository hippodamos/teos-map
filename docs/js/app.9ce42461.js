(function(e){function t(t){for(var a,i,u=t[0],p=t[1],s=t[2],c=0,l=[];c<u.length;c++)i=u[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var p=n[i];0!==r[p]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1444fbd0"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=i(e);var s=new Error;o=function(t){p.onerror=p.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:p})}),12e4);p.onerror=p.onload=o,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=t,p=p.slice();for(var c=0;c<p.length;c++)t(p[c]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"8d91":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i=a["a"].extend({name:"App",data:function(){return{drawer:null}}}),u=i,p=n("2877"),s=n("6544"),c=n.n(s),d=n("7496"),l=n("f6c4"),f=Object(p["a"])(u,r,o,!1,null,null,null),m=f.exports;c()(f,{VApp:d["a"],VMain:l["a"]});n("d3b7"),n("3ca3"),n("ddb0");var h=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0",attrs:{fluid:"","fill-height":""}},[n("mapbox",{staticClass:"map",attrs:{mapId:"main",mapboxOptions:{style:"mapbox://styles/hippodamos/ckozj7bp11o7f18mpta2is5rv",attributionControl:!0,customAttribution:["hippodamos"]}},on:{mapcreated:e.onMapCreated,maploaded:e.onMapLoaded}})],1)},v=[],y=(n("d81d"),n("e192")),g=n.n(y),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"mapDiv",attrs:{id:"map"+e.mapDivId}})},O=[],x=a["a"].extend({name:"MapboxMap",props:{mapId:{required:!0,validator:function(e){return"string"===typeof e||"number"===typeof e}},mapboxOptions:{required:!1,type:Object}},data:function(){return{id:this.$props.mapId}},computed:{mapDivId:function(){return"map_"+this.$props.mapId}},mounted:function(){var e=Object.assign(this.$props.mapboxOptions,{container:this.$refs["mapDiv"]}),t=this.$mapbox.createOrGetMap(this.id,e);void 0!==t?(this.$emit("mapcreated",this.id,t),t.on("load",this.$emit.bind(this,"maploaded",this.id,t))):console.error("map is undefined")}}),j=x,M=Object(p["a"])(j,w,O,!1,null,null,null),k=M.exports,C=a["a"].extend({name:"Home",components:{mapbox:k},methods:{onMapCreated:function(e,t){window.map=t,t.addControl(new g.a.NavigationControl),t.addControl(new g.a.GeolocateControl),t.addControl(new g.a.ScaleControl)},onMapLoaded:function(e,t){}}}),_=C,T=(n("de16"),n("a523")),$=Object(p["a"])(_,b,v,!1,null,null,null),I=$.exports;c()($,{VContainer:T["a"]}),a["a"].use(h["a"]);var P=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new h["a"]({routes:P}),E=D,G=n("f309");a["a"].use(G["a"]);var A=new G["a"]({}),S=n("d4ec"),J=n("bee2"),L=(n("4ec9"),n("ac6d"),n("d1a8"),function(){function e(t){Object(S["a"])(this,e),this.maps=new Map,this.accessToken=t}return Object(J["a"])(e,[{key:"install",value:function(e,t){var n=this;e.prototype.$mapbox={get Token(){return n.accessToken},get Maps(){return n.maps},getMap:function(e){return n.maps.get(e)},createMap:function(e,t){if(!n.maps.has(e)){var a=Object.assign(t,{accessToken:n.accessToken}),r=new g.a.Map(a);return n.maps.set(e,r),r}},createOrGetMap:function(e,t){return n.maps.has(e)?n.maps.get(e):this.createMap(e,t)}}}}]),e}());a["a"].config.productionTip=!1,a["a"].use(new L("pk.eyJ1IjoiaGlwcG9kYW1vcyIsImEiOiJja296aW5weGUxMDNoMm9xZzhrbms1dTU1In0.JVmD1zT_nHG6evPWD45phA")),new a["a"]({router:E,vuetify:A,render:function(e){return e(m)}}).$mount("#app")},de16:function(e,t,n){"use strict";n("8d91")}});
//# sourceMappingURL=app.9ce42461.js.map