(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{595:function(o,t,n){var content=n(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(9).default)("d7b33836",content,!0,{sourceMap:!1})},693:function(o,t,n){"use strict";n(595)},694:function(o,t,n){var e=n(8)(!1);e.push([o.i,".text-black[data-v-8a05a800]{color:#4f4f4f}.text-white[data-v-8a05a800]{color:#fff}.text-border[data-v-8a05a800]{color:#ccc}.text-blue[data-v-8a05a800]{color:#3273dc}.text-purple[data-v-8a05a800]{color:#9b51e0}.text-orange[data-v-8a05a800]{color:#f2994a}.text-sky[data-v-8a05a800]{color:#209cee}.text-gray[data-v-8a05a800]{color:#ebebeb}.text-red[data-v-8a05a800]{color:#ff3860}.text-yellow[data-v-8a05a800]{color:#ffdd57}.text-dark-gray[data-v-8a05a800]{color:#4f4f4f}.text-green[data-v-8a05a800]{color:#27ae60}.bg-black[data-v-8a05a800]{background:#4f4f4f}.bg-white[data-v-8a05a800]{background:#fff}.bg-primar[data-v-8a05a800]{background:#f5f5fb}.bg-border[data-v-8a05a800]{background:#ccc}.bg-form[data-v-8a05a800]{background:#fbfbfb}.bg-blue[data-v-8a05a800]{background:#3273dc}.bg-purple[data-v-8a05a800]{background:#9b51e0}.bg-orange[data-v-8a05a800]{background:#f2994a}.bg-sky[data-v-8a05a800]{background:#209cee}.bg-gray[data-v-8a05a800]{background:#ebebeb}.bg-red[data-v-8a05a800]{background:#ff3860}.bg-yellow[data-v-8a05a800]{background:#ffdd57}.bg-dark-gray[data-v-8a05a800]{background:#4f4f4f}.bg-green[data-v-8a05a800]{background:#27ae60}.bg-success[data-v-8a05a800]{background:rgba(39,174,96,.15)}.bg-error[data-v-8a05a800]{background:rgba(255,56,96,.15)}a[data-v-8a05a800]:focus,button[data-v-8a05a800]:focus{outline:none}.scl-button[data-v-8a05a800]{padding:8px 16px;display:inline-block;min-height:40px;text-decoration:none;border-radius:4px;font-family:Roboto;font-size:16px;font-style:normal;font-weight:400;line-height:24px;letter-spacing:0;text-align:center}.button-blue[data-v-8a05a800]{background-color:#3273dc;color:#fff}.button-blue[data-v-8a05a800]:hover{background-color:#205bbb}.button-white[data-v-8a05a800]{background-color:#fff;color:#ff3860}.button-white[data-v-8a05a800]:hover{background-color:#e6e6e6}.button-red[data-v-8a05a800]{background-color:#ff3860;color:#fff}.button-red[data-v-8a05a800]:hover{background-color:#ff0537}.button-grey[data-v-8a05a800]{background-color:#ebebeb;color:#4f4f4f}.button-grey[data-v-8a05a800]:hover{background-color:#d2d2d2}.button-sky[data-v-8a05a800]{background-color:#209cee;color:#fff}.button-sky[data-v-8a05a800]:hover{background-color:#1081cb}.button-light[data-v-8a05a800]{background-color:#fff;color:#4f4f4f}.button-light[data-v-8a05a800]:hover{background-color:#e6e6e6}.button-yellow[data-v-8a05a800]{background-color:#ffdd57;color:#4f4f4f}.button-yellow[data-v-8a05a800]:hover{background-color:#ffd324}i[data-v-8a05a800]{color:currentColor!important;margin-left:10px}i[data-v-8a05a800]:after,i[data-v-8a05a800]:before{color:currentColor}",""]),o.exports=e},745:function(o,t,n){"use strict";n.r(t);n(29);var e={props:{link:{type:String,default:"link"},target:{type:String,default:""},type:{type:String,default:"button",validator:function(o){return["button","link","a"].includes(o)},required:!0},color:{type:String,default:"blue",validator:function(o){return["blue","white","red","gray","sky","light","yellow"].includes(o)},required:!0},icon:{type:String,default:"",validator:function(o){return["add","edit","import","uncheck","check","print"].includes(o)},required:!0},actions:{type:Function,default:null}}},c=(n(693),n(30)),r=n(34),d=n.n(r),l=n(182),component=Object(c.a)(e,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",["link"===o.type?n("nuxt-link",{staticClass:"scl-button",class:"button-"+o.color,attrs:{to:o.link}},[o._t("default"),o._v(" "),"add"===o.icon?n("v-icon",[o._v("\n      mdi-plus-circle-outline\n    ")]):o._e(),o._v(" "),"edit"===o.icon?n("v-icon",[o._v("\n      mdi-pencil-outline\n    ")]):o._e(),o._v(" "),"import"===o.icon?n("v-icon",[o._v("\n      mdi-download-outline\n    ")]):o._e(),o._v(" "),"uncheck"===o.icon?n("v-icon",[o._v("\n      mdi-circle-outline\n    ")]):o._e(),o._v(" "),"check"===o.icon?n("v-icon",[o._v("\n      mdi-check-circle-outline\n    ")]):o._e(),o._v(" "),"print"===o.icon?n("v-icon",[o._v("\n      mdi-printer\n    ")]):o._e()],2):o._e(),o._v(" "),"button"===o.type?n("button",{staticClass:"scl-button",class:"button-"+o.color,on:{click:o.actions}},[o._t("default"),o._v(" "),"add"===o.icon?n("v-icon",[o._v("\n      mdi-plus-circle-outline\n    ")]):o._e(),o._v(" "),"edit"===o.icon?n("v-icon",[o._v("\n      mdi-pencil-outline\n    ")]):o._e(),o._v(" "),"import"===o.icon?n("v-icon",[o._v("\n      mdi-download-outline\n    ")]):o._e(),o._v(" "),"uncheck"===o.icon?n("v-icon",[o._v("\n      mdi-circle-outline\n    ")]):o._e(),o._v(" "),"check"===o.icon?n("v-icon",[o._v("\n      mdi-check-circle-outline\n    ")]):o._e(),o._v(" "),"print"===o.icon?n("v-icon",[o._v("\n      mdi-printer\n    ")]):o._e()],2):o._e(),o._v(" "),"a"===o.type?n("a",{staticClass:"scl-button",class:"button-"+o.color,attrs:{target:o.target,href:o.link}},[o._t("default"),o._v(" "),"add"===o.icon?n("v-icon",[o._v("\n      mdi-plus-circle-outline\n    ")]):o._e(),o._v(" "),"edit"===o.icon?n("v-icon",[o._v("\n      mdi-pencil-outline\n    ")]):o._e(),o._v(" "),"import"===o.icon?n("v-icon",[o._v("\n      mdi-download-outline\n    ")]):o._e(),o._v(" "),"uncheck"===o.icon?n("v-icon",[o._v("\n      mdi-circle-outline\n    ")]):o._e(),o._v(" "),"check"===o.icon?n("v-icon",[o._v("\n      mdi-check-circle-outline\n    ")]):o._e(),o._v(" "),"print"===o.icon?n("v-icon",[o._v("\n      mdi-printer\n    ")]):o._e()],2):o._e()],1)}),[],!1,null,"8a05a800",null);t.default=component.exports;d()(component,{VIcon:l.a})}}]);