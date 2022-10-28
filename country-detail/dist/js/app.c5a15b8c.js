(function(){"use strict";var t={2998:function(t,n,e){var a=e(5102),l=e(9269);const o={class:"header"},u=(0,l._)("p",null," Where in the world?",-1);function r(t,n,e,a,r,c){const i=(0,l.up)("ThemeSwitchVue"),s=(0,l.up)("router-view"),d=(0,l.up)("q-page-container"),m=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(m,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l._)("div",o,[u,(0,l.Wm)(i)]),(0,l.Wm)(d,{class:""},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(s,{key:t.$route.path}))])),_:1})])),_:1})}function c(t,n,e,a,o,u){const r=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.j4)(r,{color:"white","text-color":"black",label:"Light Mode",flat:"","no-caps":"",onClick:a.toggleDarkMode},null,8,["onClick"])}var i=e(5999),s={setup(){const t=(0,i.Z)();return{toggleDarkMode(){t.dark.toggle()}}}},d=e(7617),m=e(7848),w=e(1410),f=e.n(w);const p=(0,d.Z)(s,[["render",c]]);var g=p;f()(s,"components",{QBtn:m.Z});var y={name:"LayoutDefault",components:{ThemeSwitchVue:g}},v=e(202),_=e(6974);const k=(0,d.Z)(y,[["render",r]]);var h=k;f()(y,"components",{QLayout:v.Z,QPageContainer:_.Z});var b=e(5605),C={config:{},plugins:{}},D=e(6957),L=e(5041);const j=(0,D.MT)({state:{countryList:[],countryDetails:[]},mutations:{SET_COUNTRY_LIST(t,n){t.countryList=n},SET_COUNTRY_DETAILS(t,n){t.countryDetails=n}},getters:{getCountryLists(t){return t.countryList},getCountryDetailByName(t){return t.countryDetails}},actions:{async getCountryList(t){const n=await L.ZP.get("https://restcountries.com/v2/all");t.commit("SET_COUNTRY_LIST",n.data)},async getCountryDetailByName(t,n){const e=await L.ZP.get(`https://restcountries.com/v2/name/${n.name}`);t.commit("SET_COUNTRY_DETAILS",e.data)}}});var U=j,W=e(2201),T=(e(1098),e(3201));const Z=t=>((0,l.dD)("data-v-4c0c191d"),t=t(),(0,l.Cn)(),t),O={key:0,class:"q-pa-md row wrap justify-center q-gutter-lg"},S=["src"],z={class:"text-h6"},N=Z((()=>(0,l._)("span",null,"Capital:",-1))),q=Z((()=>(0,l._)("span",null,"Population:",-1))),Q=Z((()=>(0,l._)("span",null,"Region:",-1))),I={key:1,class:"text-center"},R=Z((()=>(0,l._)("h6",null,"Searching......",-1))),x=[R];function P(t,n,e,a,o,u){const r=(0,l.up)("q-card-section"),c=(0,l.up)("q-card");return a.countryList.length?((0,l.wg)(),(0,l.iD)("div",O,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.countryList,(t=>((0,l.wg)(),(0,l.j4)(c,{class:"country-summary",key:t.name,onClick:n=>a.redirect(t.name)},{default:(0,l.w5)((()=>[(0,l._)("img",{class:"image",src:t.flags.svg,alt:"country flag"},null,8,S),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",z,(0,T.zw)(t.name),1),(0,l._)("div",null,[N,(0,l.Uk)(" "+(0,T.zw)(t.capital),1)]),(0,l._)("div",null,[q,(0,l.Uk)(" "+(0,T.zw)(new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}).format(t.population)),1)]),(0,l._)("div",null,[Q,(0,l.Uk)(" "+(0,T.zw)(t.region),1)])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])):((0,l.wg)(),(0,l.iD)("div",I,x))}e(4719);var B={setup(){const t=(0,D.oR)();(0,l.bv)((async()=>{await t.dispatch("getCountryList")}));const n=(0,l.Fl)((()=>t.getters["getCountryLists"]));function e(t){wt.push({name:"country-detail",params:{id:t}})}return{countryList:n,redirect:e}}},E=e(8055),F=e(9501);const Y=(0,d.Z)(B,[["render",P],["__scopeId","data-v-4c0c191d"]]);var M=Y;f()(B,"components",{QCard:E.Z,QCardSection:F.Z});const H={class:"q-pa-md"},K={class:"back-btn"},$={class:"row justify-center"},A={class:"col-12 col-md-4"},V=["src"],G={class:"col-12 col-md-auto"},J={class:"row"},X={class:"col-12 col-md-auto"},tt={class:"row"},nt={class:"col-8 col-sm-6"},et={class:"col-4 col-sm-6"};function at(t,n,e,a,o,u){const r=(0,l.up)("q-btn"),c=(0,l.up)("q-item-section"),i=(0,l.up)("q-item"),s=(0,l.up)("q-list"),d=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.iD)("div",H,[(0,l._)("div",K,[(0,l.Wm)(r,{label:"Back",onClick:n[0]||(n[0]=t=>this.$router.back()),"no-caps":""})]),(0,l._)("div",$,[(0,l._)("div",A,[(0,l._)("img",{class:"country-block-img",src:a.country?.flags?.svg,alt:"country flag"},null,8,V)]),(0,l._)("div",G,[(0,l._)("div",J,[(0,l._)("div",X,[(0,l._)("p",null,(0,T.zw)(a.country.name),1),(0,l._)("div",tt,[(0,l._)("div",nt,[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Native Name:")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(a.country.nativeName),1)])),_:1})])),_:1})),[[d]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Population:")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(a.country.population),1)])),_:1})])),_:1})),[[d]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Region:")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(a.country.region),1)])),_:1})])),_:1})),[[d]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Sub Region:")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(a.country.subregion),1)])),_:1})])),_:1})),[[d]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Capital:")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(a.country.capital),1)])),_:1})])),_:1})),[[d]])])),_:1})]),(0,l._)("div",et,[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.country.topLevelDomain,((t,n)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,{key:n},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Top Level Domain:")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(t),1)])),_:2},1024)])),_:2},1024)),[[d]]))),128)),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.country.currencies,((t,n)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,{key:n},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Currencies: ")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(t.name),1)])),_:2},1024)])),_:2},1024)),[[d]]))),128)),(0,l.wy)(((0,l.wg)(),(0,l.j4)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"title"},{default:(0,l.w5)((()=>[(0,l.Uk)("Languages:")])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,T.zw)(a.language),1)])),_:1})])),_:1})),[[d]])])),_:1})])])])])])])])}var lt={setup(){const t=(0,W.yj)();(0,l.bv)((()=>{const n=t.params.id;U.dispatch("getCountryDetailByName",{name:n})}));const n=(0,l.Fl)((()=>Object.assign({},...U.getters.getCountryDetailByName))),e=(0,l.Fl)((()=>n.value.topLevelDomain)),a=(0,l.Fl)((()=>n?.value?.languages?.map((({name:t})=>t)).join(",")));return{country:n,topLevelDomain:e,language:a}}},ot=e(2146),ut=e(5246),rt=e(2278),ct=e(8108);const it=(0,d.Z)(lt,[["render",at]]);var st=it;f()(lt,"components",{QBtn:m.Z,QList:ot.Z,QItem:ut.Z,QItemSection:rt.Z}),f()(lt,"directives",{Ripple:ct.Z});const dt=[{path:"/",name:"dashboard",component:M},{path:"/:id",name:"country-detail",component:st}],mt=(0,W.p7)({history:(0,W.PO)(),routes:dt});var wt=mt;(0,a.ri)(h).use(b.Z,C).use(U).use(wt).mount("#app")}},n={};function e(a){var l=n[a];if(void 0!==l)return l.exports;var o=n[a]={exports:{}};return t[a](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,a,l,o){if(!a){var u=1/0;for(s=0;s<t.length;s++){a=t[s][0],l=t[s][1],o=t[s][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||u>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[c])}))?a.splice(c--,1):(r=!1,o<u&&(u=o));if(r){t.splice(s--,1);var i=l();void 0!==i&&(n=i)}}return n}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[a,l,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var l,o,u=a[0],r=a[1],c=a[2],i=0;if(u.some((function(n){return 0!==t[n]}))){for(l in r)e.o(r,l)&&(e.m[l]=r[l]);if(c)var s=c(e)}for(n&&n(a);i<u.length;i++)o=u[i],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(s)},a=self["webpackChunkcountry_detail"]=self["webpackChunkcountry_detail"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(2998)}));a=e.O(a)})();
//# sourceMappingURL=app.c5a15b8c.js.map