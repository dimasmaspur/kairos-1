(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(t,e,r){"use strict";r.r(e);var n={computed:{getCrumbs:function(){return this.$store.state.breadcrumbs.data}}},o=r(30),c=r(34),d=r.n(c),l=r(470),f=r(182),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-breadcrumbs",{staticClass:"px-0",attrs:{items:t.getCrumbs,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBreadcrumbs:l.a,VIcon:f.a})},187:function(t,e,r){"use strict";r.r(e);r(33);var n={components:{Crumbs:r(149).default},data:function(){return{momentDate:this.$moment()}},computed:{time:function(){return this.momentDate.format("HH:mm:ss")},date:function(){return this.momentDate.format("DD MMM YYYY")}},created:function(){var t=this;this.$nextTick((function(){setInterval((function(){return t.updateCurrentTime()}),1e3)}))},methods:{updateCurrentTime:function(){this.momentDate=this.$moment()}}},o=r(30),c=r(34),d=r.n(c),l=r(448),f=r(465),v=r(471),m=r(182),_=r(183),h=r(113),x=r(184),k=r(24),O=r(454),y=r(467),D=r(468),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mx-auto mt-sm-10"},[r("v-row",{attrs:{align:"center",justify:"space-between"}},[r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[r("v-skeleton-loader",{attrs:{type:"chip",width:"200px"}},[r("crumbs")],1)],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"auto"}},[t._v("\n      "+t._s(t.date)+" [ "+t._s(t.time)+" ]\n    ")]),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"auto"}},[r("v-skeleton-loader",{attrs:{loading:!t.$auth.$state.loggedIn,type:"chip"}},[r("v-menu",{attrs:{transition:"slide-y-transition","offset-y":"","open-on-hover":"","close-on-content-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("div",{staticClass:"text-h6 text-capitalize"},[t._v("\n              Hi, "+t._s(t.$auth.user.role)+" "+t._s(t.$auth.user.name)+"\n\n              "),r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-chevron-down")])],1)],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",{attrs:{nuxt:"",to:"/logout",replace:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-logout")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n                  Logout\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:l.a,VCol:f.a,VContainer:v.a,VIcon:m.a,VList:_.a,VListItem:h.a,VListItemAction:x.a,VListItemContent:k.a,VListItemTitle:k.b,VMenu:O.a,VRow:y.a,VSkeletonLoader:D.a})},192:function(t,e,r){"use strict";r(26);var n=r(2),o=r(0),c=r(7),d=r.n(c),l=r(79),f=r(112);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(l.d)("eager"),Object(l.c)("required",m(m({},f.d),{},{message:"{_field_} is required."})),Object(l.c)("email",m(m({},f.b),{},{message:"{_field_} is not valid."})),Object(l.c)("numeric",m(m({},f.c),{},{message:"{_field_} must be valid numeric."})),Object(l.c)("confirmed",f.a);var _=[{name:"ValidationObserver",component:l.a},{name:"ValidationProvider",component:l.b}];d.a.each(_,(function(t){var e=t.name,component=t.component;o.a.component(e,component)}))},193:function(t,e,r){"use strict";r(26);var n=r(0),o=r(194),c=r.n(o);n.a.component(c.a.name,c.a)},195:function(t,e,r){"use strict";var n=r(0),o=r(296),c=r.n(o);n.a.use(c.a)},196:function(t,e,r){"use strict";var n=r(0),o=r(303);n.a.component("line-chart",{extends:o.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},206:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return _})),r.d(e,"e",(function(){return x})),r.d(e,"b",(function(){return m})),r.d(e,"f",(function(){return k})),r.d(e,"g",(function(){return O})),r.d(e,"o",(function(){return y})),r.d(e,"n",(function(){return D})),r.d(e,"l",(function(){return w})),r.d(e,"m",(function(){return j})),r.d(e,"k",(function(){return C})),r.d(e,"j",(function(){return E})),r.d(e,"i",(function(){return N})),r.d(e,"h",(function(){return A}));var n=r(7),o=r.n(n),c=r(56),d={supervisor:[{title:"Dashboard",to:"/supervisor/e-do",icon:c.g},{title:"Setting",to:"/setting",icon:c.c}],superadmin:[{title:"User management",to:"/superadmin/user-management",icon:c.a},{title:"Setting",to:"/setting",icon:c.c}],admin:[{title:"Dashboard",to:"/admin/e-do",icon:c.f},{title:"Job Order",to:"/admin/jo",icon:c.d},{title:"Job Console",to:"/admin/joc",icon:c.e},{title:"Setting",to:"/setting",icon:c.b}],dokumen:[{title:"Dashboard",to:"/dokumen",icon:c.g},{title:"Setting",to:"/setting",icon:c.c}]},l=(r(211),r(2));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var style=v(v({},{align:"center"}),{},{justify:"center"}),m=[v({text:"Release Date",value:"released_at"},style),{text:"House BL Number",value:"house_bl_number"},{text:"e-Do Number",value:"edo_number"},{text:"Consignee Name",value:"consignee_name"},v({text:"Created at",value:"created_at"},style),v({text:"Status",value:"status"},style),v({text:"",value:"detail",sortable:!1},style)],_=[v({text:"Release Date",value:"released_at"},style),{text:"House BL Number",value:"house_bl_number"},{text:"e-Do Number",value:"edo_number"},{text:"Consignee Name",value:"consignee_name"},v({text:"Created at",value:"created_at"},style),v({text:"Status",value:"status"},style),v({text:"Action",value:"actions",sortable:!1},style),v({text:"",value:"detail",sortable:!1},style)],h=[v({text:"Release Date",value:"released_at"},style),{text:"House BL Number",value:"house_bl_number"},{text:"e-Do Number",value:"edo_number"},{text:"Consignee Name",value:"consignee_name"},v({text:"Created at",value:"created_at"},style),v({text:"Status",value:"status",sortable:!1},style),v({text:"",value:"detail",sortable:!1},style)],x=[v({text:"E-mail",value:"email"},style),v({text:"Name",value:"name"},style),v({text:"Role",value:"role"},style),v({text:"Created At",value:"created_at"},style),v({text:"Action",value:"actions",sortable:!1},style),v({text:"",value:"detail",sortable:!1},style)],k=(v({text:"Actions",value:"actions",sortable:!1},style),v({text:"Actions",value:"actions",sortable:!1},style),v({text:"Actions",value:"actions",sortable:!1},style),v({text:"Actions",value:"actions",sortable:!1},style),function(t){switch(o.a.upperCase(t)){case"RELEASED":return"#BB6BD9";case"REJECTED":return"#FF3860";case"UNPAID":case"REISSUED":return"#3273DC";case"PAID":return"#00D1B2";case"HOLD ON":case"ON HOLD":return"#FFDD57"}}),O=["admin","dokumen","kasir","adminspl","superadmin","supervisor","marketing"],y=function(t){return"UNPAID"!==o.a.upperCase(t)},D=function(t){return"PAID"===o.a.upperCase(t)},w=function(t){return"UNPAID"===o.a.upperCase(t)||"HOLD ON"===o.a.upperCase(t)||"ON HOLD"===o.a.upperCase(t)},j=function(t){return"UNPAID"===o.a.upperCase(t)},C=function(t){switch(o.a.upperCase(t)){case"PAID":return!0;default:return!1}},E=function(t){return"REJECTED"===o.a.upperCase(t)},N=function(t){switch(o.a.upperCase(t)){case"REISSUED":case"RELEASED":return!1;default:return!0}},A={shipper_name:"",consignee_name:"",shipper_email:"",consignee_email:"",shipper_address:"",consignee_address:"",notify:"",house_bl_number:"",notify_address:"",mbl_number:"",house_bl_date:"",arrival_date:"",place_of_receipt:"",container_seal_number:"",ocean_vessel:"",port_of_loading:"",voyage_number:"",final_destination:"",port_of_discharges:"",gross_weight:"",number_of_package:"",measurment:"",description_of_goods:"",marks_and_number:""}},211:function(t,e,r){"use strict";r.r(e),r.d(e,"link",(function(){return link})),r.d(e,"primary",(function(){return n})),r.d(e,"danger",(function(){return o})),r.d(e,"purple",(function(){return c})),r.d(e,"warning",(function(){return d}));var link="#3273DC",n="#00D1B2",o="#FF3860",c="#BB6BD9",d="#FF8541"},265:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("59815d03",content,!0,{sourceMap:!1})},271:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("4b1b536c",content,!0,{sourceMap:!1})},273:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("929eb292",content,!0,{sourceMap:!1})},276:function(t,e,r){var content=r(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("409df0cd",content,!0,{sourceMap:!1})},277:function(t,e,r){var content=r(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("9606563a",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";var n={},o=(r(351),r(30)),c=r(34),d=r.n(c),l=r(461),f=r(462),v=r(463),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",{staticClass:"justify-center align-center",attrs:{id:"login"}},[r("nuxt")],1),t._v(" "),r("v-footer",{attrs:{absolute:"",app:""}},[r("span",[t._v("© "+t._s(t.$moment().format("YYYY")))])])],1)}),[],!1,null,"f2450498",null);e.a=component.exports;d()(component,{VApp:l.a,VFooter:f.a,VMain:v.a})},300:function(t,e,r){"use strict";r(33);var n=r(301),o=r(187),c={components:{DrawerDashboard:n.default,Appbar:o.default},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),1500)}))}},d=(r(410),r(30)),l=r(34),f=r.n(l),v=r(461),m=r(462),_=r(463),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("drawer-dashboard"),t._v(" "),r("v-main",{attrs:{id:"main"}},[r("appbar",{staticClass:"mb-5 px-md-5"}),t._v(" "),r("nuxt")],1),t._v(" "),r("v-footer",{attrs:{absolute:!1,app:""}},[r("span",[t._v("© "+t._s(t.$moment().format("YYYY")))])])],1)}),[],!1,null,"258fc6e2",null);e.a=component.exports;f()(component,{Appbar:r(187).default}),f()(component,{VApp:v.a,VFooter:m.a,VMain:_.a})},301:function(t,e,r){"use strict";r.r(e);var n=r(206),o={data:function(){return{mini:!1}},computed:{menus:function(){return n.a[this.$auth.user.role]}},methods:{onToggle:function(t){this.mini=!this.mini}}},c=(r(368),r(30)),d=r(34),l=r.n(d),f=r(182),v=r(183),m=r(113),_=r(184),h=r(24),x=r(464),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"pt-5",attrs:{dark:"",permanent:"",color:"#3273DC","mini-variant":t.mini,app:""}},[n("v-list",[n("v-list-item",{staticClass:"justify-start"},[n("img",{staticStyle:{"text-align":"center","margin-bottom":"40px"},attrs:{src:r(367),width:"70%"}})]),t._v(" "),t._l(t.menus,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,nuxt:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2)],1)}),[],!1,null,"73d5fea5",null);e.default=component.exports;l()(component,{VIcon:f.a,VList:v.a,VListItem:m.a,VListItemAction:_.a,VListItemContent:h.a,VListItemTitle:h.b,VNavigationDrawer:x.a})},302:function(t,e,r){"use strict";r(33);var n={components:{Breadcumbs:r(149).default},data:function(){return{clipped:!1,fixed:!1,miniVariant:!1,rightDrawer:!1,title:"SPL LOGO"}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),1500)}))}},o=(r(412),r(30)),c=r(34),d=r.n(c),l=r(461),f=r(469),v=r(448),m=r(465),_=r(471),h=r(453),x=r(462),k=r(182),O=r(183),y=r(113),D=r(184),w=r(24),j=r(463),C=r(464),E=r(467),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"px-md-6",attrs:{height:"80",dark:"",color:"primary","clipped-right":t.clipped,fixed:"",app:""}},[r("v-row",{staticClass:"container mx-auto",attrs:{"no-gutters":"",justify:"space-between",align:"center"}},[r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{text:"",large:"",nuxt:"",replace:"",to:"/"}},[t._v("\n          SPL LOGO\n        ")])],1),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-row",{attrs:{align:"center",justify:"end"}},[[r("v-col",{staticClass:"hidden-xs-only",attrs:{cols:"auto"}},[r("div",{staticClass:"text-button text-capitalize"},[t._v("\n                Hi, "+t._s(t.$auth.hasScope("adminspl")?"Admin":"Kasir")+" "+t._s(t.$auth.user.name)+"\n              ")])]),t._v(" "),r("v-col",{staticClass:"hidden-xs-only",attrs:{cols:"auto"}},[r("v-btn",{attrs:{text:"",nuxt:"",to:"/spl/setting"}},[t._v("\n                Setting "),r("v-icon",{staticClass:"ml-3"},[t._v("\n                  mdi-cog\n                ")])],1)],1),t._v(" "),r("v-col",{staticClass:"hidden-xs-only",attrs:{cols:"auto"}},[r("v-btn",{attrs:{light:"",color:"white",nuxt:"",to:"/logout",replace:""}},[t._v("\n                Logout "),r("v-icon",{staticClass:"ml-3"},[t._v("\n                  mdi-logout\n                ")])],1)],1)],t._v(" "),t.$vuetify.breakpoint.xs?[r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){e.preventDefault(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-menu")])],1)],1)]:t._e()],2)],1)],1)],1),t._v(" "),r("v-main",{attrs:{id:"main"}},[r("v-container",[r("breadcumbs"),t._v(" "),r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{"disable-resize-watcher":"",dark:"",color:"primary",right:"",fixed:"",app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer="string"==typeof e?e.trim():e},expression:"rightDrawer"}},[r("v-list-item",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title py-6"},[t._v("\n            Hi "+t._s(t.$auth.hasScope("adminspl")?"Admin":"Kasir")+" "+t._s(t.$auth.user.name)+"\n          ")])],1)],1)],1),t._v(" "),r("v-list",[r("v-list-item",{attrs:{nuxt:"",to:"/spl/setting"}},[r("v-list-item-action",[r("v-icon",[t._v("\n            mdi-cog\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Setting")])],1),t._v(" "),r("v-divider",{staticClass:"my-3"}),t._v(" "),r("v-list-item",{staticClass:"text-center justify-center"},[r("v-btn",{attrs:{light:"","min-width":"60",large:"",nuxt:"",to:"/logout",replace:""}},[r("v-icon",{staticClass:"mr-3"},[t._v("\n            mdi-logout\n          ")]),t._v(" Logout\n        ")],1)],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,"72e44eea",null);e.a=component.exports;d()(component,{VApp:l.a,VAppBar:f.a,VBtn:v.a,VCol:m.a,VContainer:_.a,VDivider:h.a,VFooter:x.a,VIcon:k.a,VList:O.a,VListItem:y.a,VListItemAction:D.a,VListItemContent:w.a,VListItemTitle:w.b,VMain:j.a,VNavigationDrawer:C.a,VRow:E.a})},313:function(t,e,r){r(314),t.exports=r(315)},329:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n);e.default=function(t){var e=t.redirect,r=t.store,n=o.a.upperCase(r.state.auth.user.role);if(!o.a.isEqual(n,"ADMIN"))switch(n){case"DOKUMEN":return e("/dokumen");case"SUPERADMIN":return e("/superadmin");case"MARKETING":return e("/marketing")}}},330:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.store,r=t.redirect;if(!e.state.auth.loggedIn)return r("/")}},331:function(t,e,r){"use strict";r.r(e);r(26),r(21),r(31);e.default=function(t){var e=t.route,r=t.store,n=[{to:e.path,disabled:!0,text:"index"===e.name?"Dashboard":e.name.replace(/-/g,"")}],o=e.meta.reduce((function(t,meta){return meta.crumbs||t}),n);r.commit("breadcrumbs/setBreadcrumbs",o)}},333:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n);e.default=function(t){var e=t.store,r=t.redirect,n=o.a.upperCase(e.state.auth.user.role);if(!o.a.isEqual(n,"DOKUMEN"))switch(n){case"ADMIN":return r("/admin");case"SUPERADMIN":return r("/superadmin");case"MARKETING":return r("/marketing")}}},334:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n);e.default=function(t){var e=t.store,r=t.redirect,n=o.a.upperCase(e.state.auth.user.role);if(!o.a.isEqual(n,"MARKETING"))switch(n){case"ADMIN":return r("/admin");case"SUPERADMIN":return r("/superadmin");case"DOKUMEN":return r("/dokumen")}}},335:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n);e.default=function(t){t.store;var e=t.redirect,r=t.$auth,n=(t.$router,t.route);switch(o.a.upperCase(r.user.role)){case"DOKUMEN":if(!o.a.isEqual(n.path,"/dokumen/e-do"))return e("/dokumen/e-do");break;case"ADMIN":if(!o.a.isEqual(n.path,"/admin/e-do"))return e("/admin/e-do");break;case"SUPERADMIN":if(!o.a.isEqual(n.path,"/superadmin/user-management"))return e("/superadmin/user-management");break;case"SUPERVISOR":if(!o.a.isEqual(n.path,"/supervisor/e-do"))return e("/supervisor/e-do");break;case"MARKETING":if(!o.a.isEqual(n.path,"/marketing/quotation"))return e("/marketing/quotation");break;case"ADMINSPL":if(!o.a.isEqual(n.path,"/spl/admin"))return e("/spl/admin");break;case"KASIR":if(!o.a.isEqual(n.path,"/spl/kasir"))return e("/spl/kasir");break;default:if(r.loggedIn)return e("/logout")}}},336:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n);e.default=function(t){var e=t.store,r=t.redirect,n=o.a.upperCase(e.state.auth.user.role);if(!o.a.isEqual(n,"SUPERADMIN"))switch(n){case"DOKUMEN":return r("/dokumen");case"ADMIN":return r("/admin");case"MARKETING":return r("/marketing")}}},341:function(t,e,r){"use strict";r(265)},342:function(t,e,r){var n=r(8)(!1);n.push([t.i,"h1[data-v-489a7c72]{font-size:20px}",""]),t.exports=n},351:function(t,e,r){"use strict";r(271)},352:function(t,e,r){var n=r(8)(!1);n.push([t.i,".text-black[data-v-f2450498]{color:#4f4f4f}.text-white[data-v-f2450498]{color:#fff}.text-border[data-v-f2450498]{color:#ccc}.text-blue[data-v-f2450498]{color:#3273dc}.text-purple[data-v-f2450498]{color:#9b51e0}.text-orange[data-v-f2450498]{color:#f2994a}.text-sky[data-v-f2450498]{color:#209cee}.text-gray[data-v-f2450498]{color:#ebebeb}.text-red[data-v-f2450498]{color:#ff3860}.text-yellow[data-v-f2450498]{color:#ffdd57}.text-dark-gray[data-v-f2450498]{color:#4f4f4f}.text-green[data-v-f2450498]{color:#27ae60}.bg-black[data-v-f2450498]{background:#4f4f4f}.bg-white[data-v-f2450498]{background:#fff}.bg-primar[data-v-f2450498]{background:#f5f5fb}.bg-border[data-v-f2450498]{background:#ccc}.bg-form[data-v-f2450498]{background:#fbfbfb}.bg-blue[data-v-f2450498]{background:#3273dc}.bg-purple[data-v-f2450498]{background:#9b51e0}.bg-orange[data-v-f2450498]{background:#f2994a}.bg-sky[data-v-f2450498]{background:#209cee}.bg-gray[data-v-f2450498]{background:#ebebeb}.bg-red[data-v-f2450498]{background:#ff3860}.bg-yellow[data-v-f2450498]{background:#ffdd57}.bg-dark-gray[data-v-f2450498]{background:#4f4f4f}.bg-green[data-v-f2450498]{background:#27ae60}.bg-success[data-v-f2450498]{background:rgba(39,174,96,.15)}.bg-error[data-v-f2450498]{background:rgba(255,56,96,.15)}a[data-v-f2450498]:focus,button[data-v-f2450498]:focus{outline:none}#login[data-v-f2450498]{background:#f5f5fb!important}",""]),t.exports=n},367:function(t,e,r){t.exports=r.p+"img/SCL-png.a4e3dc4.png"},368:function(t,e,r){"use strict";r(273)},369:function(t,e,r){var n=r(8)(!1);n.push([t.i,".v-list-group.JO-minibar.v-list-group--active.primary--text[data-v-73d5fea5]{color:#fff!important}",""]),t.exports=n},410:function(t,e,r){"use strict";r(276)},411:function(t,e,r){var n=r(8)(!1);n.push([t.i,".text-black[data-v-258fc6e2]{color:#4f4f4f}.text-white[data-v-258fc6e2]{color:#fff}.text-border[data-v-258fc6e2]{color:#ccc}.text-blue[data-v-258fc6e2]{color:#3273dc}.text-purple[data-v-258fc6e2]{color:#9b51e0}.text-orange[data-v-258fc6e2]{color:#f2994a}.text-sky[data-v-258fc6e2]{color:#209cee}.text-gray[data-v-258fc6e2]{color:#ebebeb}.text-red[data-v-258fc6e2]{color:#ff3860}.text-yellow[data-v-258fc6e2]{color:#ffdd57}.text-dark-gray[data-v-258fc6e2]{color:#4f4f4f}.text-green[data-v-258fc6e2]{color:#27ae60}.bg-black[data-v-258fc6e2]{background:#4f4f4f}.bg-white[data-v-258fc6e2]{background:#fff}.bg-primar[data-v-258fc6e2]{background:#f5f5fb}.bg-border[data-v-258fc6e2]{background:#ccc}.bg-form[data-v-258fc6e2]{background:#fbfbfb}.bg-blue[data-v-258fc6e2]{background:#3273dc}.bg-purple[data-v-258fc6e2]{background:#9b51e0}.bg-orange[data-v-258fc6e2]{background:#f2994a}.bg-sky[data-v-258fc6e2]{background:#209cee}.bg-gray[data-v-258fc6e2]{background:#ebebeb}.bg-red[data-v-258fc6e2]{background:#ff3860}.bg-yellow[data-v-258fc6e2]{background:#ffdd57}.bg-dark-gray[data-v-258fc6e2]{background:#4f4f4f}.bg-green[data-v-258fc6e2]{background:#27ae60}.bg-success[data-v-258fc6e2]{background:rgba(39,174,96,.15)}.bg-error[data-v-258fc6e2]{background:rgba(255,56,96,.15)}a[data-v-258fc6e2]:focus,button[data-v-258fc6e2]:focus{outline:none}#main[data-v-258fc6e2]{background-color:#f5f5fb!important;height:auto!important}",""]),t.exports=n},412:function(t,e,r){"use strict";r(277)},413:function(t,e,r){var n=r(8)(!1);n.push([t.i,".text-black[data-v-72e44eea]{color:#4f4f4f}.text-white[data-v-72e44eea]{color:#fff}.text-border[data-v-72e44eea]{color:#ccc}.text-blue[data-v-72e44eea]{color:#3273dc}.text-purple[data-v-72e44eea]{color:#9b51e0}.text-orange[data-v-72e44eea]{color:#f2994a}.text-sky[data-v-72e44eea]{color:#209cee}.text-gray[data-v-72e44eea]{color:#ebebeb}.text-red[data-v-72e44eea]{color:#ff3860}.text-yellow[data-v-72e44eea]{color:#ffdd57}.text-dark-gray[data-v-72e44eea]{color:#4f4f4f}.text-green[data-v-72e44eea]{color:#27ae60}.bg-black[data-v-72e44eea]{background:#4f4f4f}.bg-white[data-v-72e44eea]{background:#fff}.bg-primar[data-v-72e44eea]{background:#f5f5fb}.bg-border[data-v-72e44eea]{background:#ccc}.bg-form[data-v-72e44eea]{background:#fbfbfb}.bg-blue[data-v-72e44eea]{background:#3273dc}.bg-purple[data-v-72e44eea]{background:#9b51e0}.bg-orange[data-v-72e44eea]{background:#f2994a}.bg-sky[data-v-72e44eea]{background:#209cee}.bg-gray[data-v-72e44eea]{background:#ebebeb}.bg-red[data-v-72e44eea]{background:#ff3860}.bg-yellow[data-v-72e44eea]{background:#ffdd57}.bg-dark-gray[data-v-72e44eea]{background:#4f4f4f}.bg-green[data-v-72e44eea]{background:#27ae60}.bg-success[data-v-72e44eea]{background:rgba(39,174,96,.15)}.bg-error[data-v-72e44eea]{background:rgba(255,56,96,.15)}a[data-v-72e44eea]:focus,button[data-v-72e44eea]:focus{outline:none}#main[data-v-72e44eea]{background:#fff!important}",""]),t.exports=n},420:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return _})),r.d(e,"mutations",(function(){return h})),r.d(e,"actions",(function(){return x})),r.d(e,"plugins",(function(){return k}));r(14),r(58);var n=r(12),o=r(2),c=r(210),d=r.n(c),l=r(290),f=r(291);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=function(){return{pending:!1,JOForm:{customer_name:"",type:"",subject:"",terms_payment:""},JO_number:"",JO_date:"",form:{},payReqForm:{},debNoteForm:{},id_payrequest:0,id_debtnote:0}},h={setAuth:function(t,data){var e=Object(l.a)(data.token);this.$auth.setUser(m(m({},e),{},{scope:[e.role],currentPassword:data.password}))},pendingMutate:function(t,e){t.pending=e},setForm:function(t,e){t.JOForm=e,console.log(t.JOForm,"ini dari store")},setDebNoteForm:function(t,e){t.debNoteForm=e},setPayreqForm:function(t,e){t.payReqForm=e},setJo_number:function(t,e){t.JO_number=e},delJo_number:function(t,e){t.JO_number=""},setJO_date:function(t,e){console.log(e,"<--- ini JO_datenya"),t.JO_date=e},setJO_form:function(t,e){console.log(e.data.joData,"ini data ke form"),t.form=e.data.joData},setid_payreq:function(t,e){t.id_payrequest=e,console.log(e,"ini di store bro")},setid_debtnote:function(t,e){t.id_debtnote=e}},x={UserLogin:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,t.state,n("pendingMutate",!0),e.$toast.global.app_loading(),r.next=5,e.$auth.loginWith("local",{data:d.a.stringify(data)}).then((function(t){e.$toast.clear(),n("setAuth",{token:t.data.id_token,password:data.password})})).catch((function(t){if(e.$toast.clear(),t.response&&t.response.data){var r=t.response.data&&", "+t.response.data.message;e.$toast.global.app_error("Login failed"+r)}else console.log(JSON.stringify(t)),e.$toast.global.app_error("Login failed.")})).finally((function(){n("pendingMutate",!1)}));case 5:case"end":return r.stop()}}),r)})))()},SetForm:function(t,e){(0,t.commit)("setForm",e)},CreateJO_DATA:function(t,data){t.commit,t.state;return this.$axios.$post("jo-data",data)},CreateJO:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,t.state,n("delJo_number"),r.next=4,e.$axios.$post("job-order",data).then((function(t){var e=t.data.jo_number,r=t.data.created_at.substr(0,10);n("setJo_number",e),n("setJO_date",r),console.log("ini jo_numbernya",e),console.log(t,"<-- ini response dari api job order")})).catch((function(t){console.log(t)}));case 4:console.log(data,"ini ditembak ke job-order");case 5:case"end":return r.stop()}}),r)})))()},getData:function(t,data){t.commit,t.state;return this.$axios.get("jo-data/"+data)}},k=[Object(f.a)()]},423:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{data:[]}},o={setBreadcrumbs:function(t,e){t.data=e}}},444:function(t,e,r){var map={"./id":181,"./id.js":181};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=444},80:function(t,e,r){"use strict";var n={layout:"auth",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(341),r(30)),c=r(34),d=r.n(c),l=r(471),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"489a7c72",null);e.a=component.exports;d()(component,{VContainer:l.a})}},[[313,77,11,78]]]);