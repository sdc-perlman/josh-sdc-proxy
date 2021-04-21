(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("path");var n=e.n(t);const r=require("express");var a=e.n(r);const i=require("request");var o=e.n(i);const s=require("@babel/runtime/helpers/asyncToGenerator");var c=e.n(s);const l=require("@babel/runtime/regenerator");var p=e.n(l);const d=require("dotenv");var u=e.n(d);u().config({path:n().join(__dirname,"../",".env")});var m=function(e){return function(){var t=c()(p().mark((function t(n,r){var a,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"/"!==e.slice(-1)&&(e+="/"),a=n.params.id,i={method:"GET",uri:"".concat(e).concat(a)},o()(i,(function(e,t,n){if(e)return console.log(e),r.sendStatus(500),e;r.json(JSON.parse(n))}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},v=m(process.env.WORKSPACE),g=m(process.env.AMENITIES),f=m(process.env.TRANSIT),y=m(process.env.ADDRESS),h=m(process.env.NEARBY_BUILDINGS),w=m(process.env.REVIEWS),b=m(process.env.REVIEW_INFO),S=m(process.env.DESCRIPTION),E=m(process.env.PHOTOS),k=m(process.env.PHOTOS_BY_WORKSPACE);const T={address:y,amenities:g,availability:function(){var e=c()(p().mark((function e(t,n){var r,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.query.id,a={method:"GET",uri:"".concat(process.env.AVAILABILITY,"/?id=").concat(r)},o()(a,(function(e,t,r){if(e)return console.log(e),n.sendStatus(500),e;n.json(JSON.parse(r))}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),description:S,nearbyBuildings:h,photos:E,photosByWorkspace:k,reviews:w,reviewInfo:b,transit:f,workspace:v},N=require("fs");var x=e.n(N);const A=require("node-fetch");var I=e.n(A);const _=require("react");var O=e.n(_);const q=require("react-dom/server");var C=e.n(q);const L=require("styled-components");var B=e.n(L);const P=require("@babel/runtime/helpers/slicedToArray");var R=e.n(P);const W=require("mapbox-gl");var j=e.n(W),z=B().div.withConfig({displayName:"styles__Wrapper",componentId:"c0pkp9-0"})(["#map{height:320px;width:100%;margin:2rem 0;}.marker{width:10px;height:10px;background-color:#000;border:#000 4px solid;border-radius:50%;opacity:0.99;}.marker.nearby{background-color:transparent;border:blue 4px solid;}.building-link{line-height:20px;height:100%;width:137.8px;color:blue;font-size:16px;text-align:center;text-decoration:none;appearance:none;background:none;border:0;padding:0;outline:none;}.building-link:hover{text-decoration:underline}"]);const D=function(e){var t=e.locationData,n=t.origin,r=t.nearbyWorkspaces,a=n.geometry.coordinates;return(0,_.useEffect)((function(){j().accessToken=process.env.KEY;var e=new(j().Map)({container:"map",style:"mapbox://styles/christulin/ckkvmm2w448sw17nv9a3cwuqm",center:a,zoom:11}),t=document.createElement("div");t.className="marker",new(j().Marker)(t).setLngLat(a).addTo(e).setLngLat(a).setPopup(new(j().Popup)({offset:25,closeButton:!1}).setHTML("<h3>"+n.streetNumber+" "+n.streetName+"</h3>")).addTo(e),r&&r.forEach((function(t){var n=document.createElement("div");n.className="marker nearby",new(j().Marker)(n).setLngLat(t.geometry.coordinates).addTo(e).setLngLat(t.geometry.coordinates).setPopup(new(j().Popup)({offset:25,closeButton:!1}).setHTML('<a class="building-link" href=/buildings/'.concat(t.workspaceId,">")+t.streetNumber+" "+t.streetName+"</a>")).addTo(e)}));var i=new(j().NavigationControl)({showCompass:!1});e.addControl(i,"top-left")})),O().createElement(z,null,O().createElement("div",{id:"map"}))},M=require("@fortawesome/react-fontawesome");var H=B().li.withConfig({displayName:"styles__Item",componentId:"sc-1w6dtv-0"})(["margin-bottom:1rem;font-size:16px;display:flex;align-items:flex-start;"]),U=B().div.withConfig({displayName:"styles__Image",componentId:"sc-1w6dtv-1"})(["width:36px;height:36px;"]),Y=B().div.withConfig({displayName:"styles__Description",componentId:"sc-1w6dtv-2"})(["margin-left:1.25rem;"]);const F=function(e){var t=e.option,n=e.type;return O().createElement(H,null,O().createElement(U,null,O().createElement(M.FontAwesomeIcon,{icon:n,size:"lg"})),O().createElement(Y,null,t.name," ",t.type))},G=require("@fortawesome/free-solid-svg-icons");var J=B().ul.withConfig({displayName:"styles__List",componentId:"sc-1828qsm-0"})(["list-style-type:none;margin:0;padding:0;"]),K=B().div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1828qsm-1"})([".transit-title{text-transform:uppercase;margin-bottom:1.5rem;font-size:16px;}"]);const V=function(e){var t=e.nearbyTransits,n={metro:G.faTrain,bus:G.faBus,"bike path":G.faBicycle,freeway:G.faRoad};return O().createElement(O().Fragment,null,O().createElement(K,null,O().createElement("p",{className:"transit-title"},"NEARBY TRANSIT")),O().createElement(J,null,t.map((function(e,t){return O().createElement(F,{key:t,option:e,type:n[e.type]})}))))},Q=function(e){var t=e.initialTransitOptions,n=void 0===t?window.initialTransitOptions||[]:t,r=(0,_.useState)({origin:{rawAddress:"4011 S Central Ave, Los Angeles, CA 90011, USA",coordinates:[34.0105442,-118.2569161],formattedAddress:"4011 S Central Ave, Los Angeles, CA 90011, USA",streetName:"South Central Avenue",streetNumber:"4011",neighborhood:"South Los Angeles",city:"Los Angeles",state:"CA",country:"United States",countryCode:"US",zipcode:"90011",_id:"604997d783f12ac5bbc6a059",geometry:{type:"Point",coordinates:[-118.2569161,34.0105442],_id:"604997d783f12ac5bbc6a05a"},workspaceId:1,workspaceSlug:"waistcoat-shabby",workspace:"6016623df463365dd660f3bb",__v:0}}),a=R()(r,2),i=a[0],o=(a[1],(0,_.useState)(n)),s=R()(o,2),c=s[0],l=s[1],p=i.origin,d=p.streetName,u=p.streetNumber,m=p.city,v=p.state,g=p.zip;return(0,_.useEffect)((function(){var e=window.location.pathname.split("/").filter((function(e){return e})),t=e[e.length-1];0===n.length&&fetch("/api/getNearbyTransitOptions/".concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.nearbyTransitOptions;l(t)}))}),[]),O().createElement("div",{className:"map-wrapper"},O().createElement("h2",{style:{fontSize:"2rem",fontWeight:"600",lineHeight:"2.75rem",marginBottom:"1rem"}},"Location"),O().createElement("address",{style:{whiteSpace:"pre-line",marginBottom:"2rem",fontSize:"16px",fontStyle:"normal",lineHeight:"1.5rem"}},u," ",d,O().createElement("br",null),m,", ",v," ",g),O().createElement(D,{locationData:i}),O().createElement(V,{nearbyTransits:c}))};u().config({path:n().join(__dirname,"../",".env")});const X=function(){var e=c()(p().mark((function e(t,r){var a,i,o,s,c,l,d,u;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.params.id,i=new L.ServerStyleSheet,e.next=5,I()("".concat(process.env.TRANSIT,"/").concat(a));case 5:return o=e.sent,e.next=8,o.json();case 8:s=e.sent,c=s.nearbyTransitOptions,l=C().renderToString(i.collectStyles(O().createElement(Q,{initialTransitOptions:c}))),d=i.getStyleTags(),u=n().resolve("./public/index.html"),x().readFile(u,"utf8",(function(e,t){return e?(console.error("Something went wrong:",e),r.status(500).send("Something went wrong")):(t=(t=(t=t.replace('<div id="location-service"></div>','<div id="location-service">'.concat(l,"</div>"))).replace('<script id="location-service-initial-data"><\/script>',"<script>window.initialTransitOptions = ".concat(JSON.stringify(c),"<\/script>"))).replace('<style id="location-service-style"></style>',d),r.send(t))})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}();var Z=a()();Z.use(a().static(n().join(__dirname,"../public"))),Z.get("/buildings/:id",X),Z.get("/workspace-api/workspace/:id",T.workspace),Z.get("/amenities-api/amenity/:id",T.amenities),Z.get("/api/workspace-description/:id",T.description),Z.get("/api/photos/:id",T.photos),Z.get("/api/photos/workspace/:id",T.photosByWorkspace),Z.get("/api/availability",T.availability),Z.get("/api/getNearbyTransitOptions/:id",T.transit),Z.get("/api/nearbyworkspaces/buildings/:id",T.nearbyBuildings),Z.get("/api/nearbyworkspaces/address/:id",T.address),Z.get("/api/reviews/all/:id",T.reviews),Z.get("/api/reviews/info/:id",T.reviewInfo);var $=process.env.PORT?process.env.PORT:6002;Z.listen($,(function(){console.log("listening on port ".concat($))}))})();