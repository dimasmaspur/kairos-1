(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{472:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return v}));var r=n(474),o=n(1),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");r.a},473:function(t,e,n){var r=n(8)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},474:function(t,e,n){"use strict";n(199),n(200),n(19);var r=n(2),o=(n(475),n(198)),c=n(485),l=n(66),d=n(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},475:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("e23b7040",content,!0,{sourceMap:!1})},476:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("2065bca8",content,!0,{sourceMap:!1})},477:function(t,e,n){var r=n(8)(!1);r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=r},491:function(t,e,n){"use strict";n(83),n(29),n(19),n(46),n(59),n(33);var r=n(65),o=n(2),c=(n(476),n(466)),l=n(101),d=n(119),v=n(201),h=n(204),f=n(203),m=n(202),_=n(38),x=n(120),y=n(5),w=n(6),O=n(1);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(y.a)(l.a,d.a,v.a,h.a,f.a,m.a,_.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===O.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:j({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(O.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(O.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},507:function(t,e,n){"use strict";n(50),n(83),n(29),n(152),n(46),n(49),n(33);var r=n(2),o=n(5),c=n(89),l=n(122);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},576:function(t,e,n){var content=n(654);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("613f09d0",content,!0,{sourceMap:!1})},653:function(t,e,n){"use strict";n(576)},654:function(t,e,n){var r=n(8)(!1);r.push([t.i,".v-text-field__details[data-v-5fd24bcc]{display:none}",""]),t.exports=r},717:function(t,e,n){"use strict";n.r(e);n(49),n(58);var r=n(12),o={name:"pay-request",meta:{crumbs:[{text:"Create Job Order",to:"/admin/jo/detail",disabled:!1},{text:"Add Credit Noted",to:"/admin/jo/detail",disabled:!0}]},middleware:"adminscl",data:function(){return{agents:[],dialog_back:!1,vendor_name:"",ppn_idr:0,ppn_usd:0,no_blanko:"",jo_number:this.$route.query.jo_number,id:this.$route.query.id}},methods:{createPayReq:function(t){var e=this;t.preventDefault();var n={jo_number:this.jo_number,agent_name:this.vendor_name,ppn_idr:this.ppn_idr,ppn_usd:this.ppn_usd,no_blanko:this.no_blanko};n.ppn_idr>100&&(n.ppn_idr="100"),n.ppn_usd>100&&(n.ppn_usd="100"),this.$axios.$post("jo-creditnote",n).then((function(t){console.log(t,"ini hasilnya bila berhasil broh untuk create credit note"),e.$router.push({path:"/admin/jo/credit-noted/"+t.data.id_credit_note+"/?id="+e.id})})).catch((function(t){console.log(t)})),console.log(n,"ini adalah payload bawaan")},getAgents:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("data-partner");case 3:200===(n=e.sent).status&&((data=n.data.data).forEach((function(element){t.agents.push(element.company_name)})),console.log(data,"ini data-partner")),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response.data,o=r&&r.message&&" , ".concat(r.message),t.$toast.global.app_error("Failed to load all data partners ".concat(o));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){this.getAgents()}},c=(n(653),n(30)),l=n(34),d=n.n(l),v=n(448),h=n(474),f=n(472),m=n(465),_=n(491),x=n(507),y=n(113),w=n(185),O=n(24),k=n(467),j=n(598),C=n(501),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"ml-10 mr-10"},[n("v-col",{attrs:{sm:"12",md:"6"}},[n("v-form",{on:{submit:t.createPayReq}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"100%",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline",staticStyle:{color:"#3273dc","max-width":"20%","margin-right":"20%"}},[t._v("\n              DATA VENDOR\n            ")]),t._v(" "),n("hr",{staticClass:"mb-4"}),t._v(" "),n("v-list-item-title",{staticClass:"headline mb-1"},[n("v-row",[n("v-col",{attrs:{sm:"6",cols:"2"}},[n("v-card-text",{staticStyle:{padding:"1px","font-size":"16px"}},[t._v("\n                    No. Blanko\n                  ")]),t._v(" "),n("v-text-field",{attrs:{outlined:""},model:{value:t.no_blanko,callback:function(e){t.no_blanko=e},expression:"no_blanko"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{sm:"6",cols:"2"}},[n("v-card-text",{staticStyle:{padding:"1px","font-size":"16px"}},[t._v("\n                    PPN (IDR) %\n                  ")]),t._v(" "),n("v-text-field",{attrs:{outlined:"",type:"number",max:"100"},model:{value:t.ppn_idr,callback:function(e){t.ppn_idr=e},expression:"ppn_idr"}})],1),t._v(" "),n("v-col",{attrs:{sm:"6",cols:"2"}},[n("v-card-text",{staticStyle:{padding:"1px","font-size":"16px"}},[t._v("\n                    PPN (USD) %\n                  ")]),t._v(" "),n("v-text-field",{attrs:{outlined:"",type:"number",max:"100"},model:{value:t.ppn_usd,callback:function(e){t.ppn_usd=e},expression:"ppn_usd"}})],1)],1)],1),t._v(" "),n("v-card-text",{staticStyle:{padding:"0px"}},[t._v("\n              Vendor name\n            ")]),t._v(" "),n("v-select",{attrs:{items:t.agents,outlined:""},model:{value:t.vendor_name,callback:function(e){t.vendor_name=e},expression:"vendor_name"}})],1),t._v(" "),n("v-list-item-avatar",{attrs:{tile:"",height:"30",width:"200"}},[t._v("\n            JO Number: "+t._s(t.jo_number)+"\n          ")])],1),t._v(" "),n("v-card-actions")],1),t._v(" "),n("v-dialog",{attrs:{width:"280"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mt-10 mb-10",staticStyle:{"margin-left":"75%"},attrs:{dark:"",depressed:"",color:"error",height:"55px"}},"v-btn",o,!1),r),[t._v("\n            Cancel\n          ")])]}}]),model:{value:t.dialog_back,callback:function(e){t.dialog_back=e},expression:"dialog_back"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline",staticStyle:{"text-align-last":"center","text-align":"justify"}},[t._v("\n            Cancel this process?\n          ")]),t._v(" "),n("v-card-actions",{staticClass:"mx-auto"},[n("v-btn",{staticClass:"mx-auto",attrs:{color:"error",text:""},on:{click:function(e){t.dialog_back=!1}}},[t._v("\n              Cancel\n            ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/admin/jo/detail/"+t.id}},[n("v-btn",{staticClass:"error mx-auto",attrs:{text:""},on:{click:function(e){t.dialog_back=!1}}},[t._v("\n                Yes, leave\n              ")])],1)],1)],1)],1),t._v(" "),n("v-btn",{staticClass:"mb-10 mt-10",staticStyle:{float:"right"},attrs:{type:"submit",depressed:"",color:"primary",height:"55px"}},[t._v("\n        Save\n      ")])],1)],1)],1)}),[],!1,null,"5fd24bcc",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:m.a,VDialog:_.a,VForm:x.a,VListItem:y.a,VListItemAvatar:w.a,VListItemContent:O.a,VListItemTitle:O.b,VRow:k.a,VSelect:j.a,VTextField:C.a})}}]);