(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{514:function(e,o,t){e.exports=t.p+"img/1.5e64b09.png"},519:function(e,o,t){"use strict";t.r(o);var n={props:{isQrcode:{type:Boolean,required:!0},show:{type:Boolean,required:!0},noStreamApiSupport:{type:Boolean,required:!0},showLoading:{type:Boolean,required:!0}},data:function(){return{showQr:this.isQrcode}},watch:{isQrcode:function(e){this.showQr=e}},methods:{on_decode:function(e){this.$emit("on-decode",e)},on_drop_zone_init:function(e){this.$emit("drop-zone-init",e)},on_stream_init:function(e){this.$emit("stream-init",e)}}},r=t(30),d=t(34),c=t.n(d),l=t(463),h=t(200),v=t(129),m=t(38),f=t(5),_=t(6),w=Object(f.a)(v.a,m.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(_.c)("v-hover should only contain a single element",this),element)):(Object(_.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),y=t(149),x=t(178),S=t(459),component=Object(r.a)(n,(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("v-container",[e.showQr?n("v-row",[[n("qrcode-drop-zone",{on:{decode:e.on_decode,init:e.on_drop_zone_init}},[n("qrcode-stream",{on:{decode:e.on_decode,init:e.on_stream_init}})],1),e._v(" "),e.noStreamApiSupport?n("qrcode-capture",{on:{decode:e.on_decode}}):e._e()],e._v(" "),n("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}],attrs:{indeterminate:e.showLoading}})],2):n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(o){var r=o.hover;return[n("v-img",{staticClass:"mx-auto",attrs:{src:t(514),"lazy-src":t(514),"aspect-ratio":"16/9","max-width":"348",height:"348",ripple:""}},[n("v-expand-transition",[r?n("div",{staticClass:"d-flex text-h4 transition-ease-in-out primary darken-2 v-card--reveal",staticStyle:{height:"80%",color:"white"},on:{click:function(o){return o.preventDefault(),e.$emit("click-scan")}}},[e._v("\n          Click me to scan\n        ")]):e._e()])],1)]}}])})],1)}),[],!1,null,null,null);o.default=component.exports;c()(component,{VContainer:l.a,VExpandTransition:h.a,VHover:w,VImg:y.a,VProgressCircular:x.a,VRow:S.a})}}]);