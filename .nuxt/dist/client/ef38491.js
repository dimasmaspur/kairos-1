(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{464:function(t,e,o){"use strict";o.d(e,"a",(function(){return l})),o.d(e,"b",(function(){return c})),o.d(e,"c",(function(){return d})),o.d(e,"d",(function(){return v}));var n=o(466),r=o(1),l=Object(r.i)("v-card__actions"),c=Object(r.i)("v-card__subtitle"),d=Object(r.i)("v-card__text"),v=Object(r.i)("v-card__title");n.a},466:function(t,e,o){"use strict";o(194),o(195),o(19);var n=o(2),r=(o(467),o(193)),l=o(477),c=o(66),d=o(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=f({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),o=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(o,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},479:function(t,e,o){"use strict";var n=o(89),r=o(0);e.a=r.a.extend({name:"rippleable",directives:{ripple:n.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},484:function(t,e,o){"use strict";o.d(e,"b",(function(){return d}));o(50),o(14),o(73);var n=o(474),r=o(479),l=o(494),c=o(5);function d(t){t.preventDefault()}e.a=Object(c.a)(n.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(o){return t.valueComparator(o,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=n.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var o=input.length;(input=input.filter((function(o){return!t.valueComparator(o,e)}))).length===o&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},485:function(t,e,o){var content=o(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("2e2bc7da",content,!0,{sourceMap:!1})},492:function(t,e,o){var n=o(8)(!1);n.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=n},499:function(t,e,o){"use strict";o(50),o(82),o(29),o(151),o(46),o(49),o(33);var n=o(2),r=o(5),l=o(88),c=o(121);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},o={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(o.valid=e(input)))})):o.valid=e(input),o},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},505:function(t,e,o){var content=o(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("5e62c9d0",content,!0,{sourceMap:!1})},506:function(t,e,o){var n=o(8)(!1);n.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),t.exports=n},507:function(t,e,o){var content=o(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("999cb8a8",content,!0,{sourceMap:!1})},508:function(t,e,o){var n=o(8)(!1);n.push([t.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=n},532:function(t,e,o){"use strict";o(26);var n=o(2),r=(o(505),o(517)),l=o(87),c=o(474),d=o(88),v=o(27),f=o(122),h=o(479),m=o(16),_=o(484),x=o(1),y=o(5),O=o(52);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(y.a)(d.a,v.a,h.a,Object(f.a)("radioGroup"),m.a);e.a=j.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return k(k({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return _.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return c.a.options.computed.computedId.call(this)},hasLabel:c.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return _.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return _.a.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(r.a,{on:{click:_.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(x.s)(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(k({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object(O.c)({click:this.onChange},this.listeners$)},[this.genRadio(),this.genLabel()])}})},533:function(t,e,o){"use strict";o(19);var n=o(2),r=(o(485),o(507),o(474)),l=o(120),c=o(494),d=o(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(d.a)(c.a,l.a,r.a);e.a=h.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return f(f({},r.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},r.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=r.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:l.a.options.methods.onClick}})},571:function(t,e,o){var content=o(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("5f4a3e30",content,!0,{sourceMap:!1})},651:function(t,e,o){"use strict";o(571)},652:function(t,e,o){var n=o(8)(!1);n.push([t.i,".v-text-field__details[data-v-5cff297f]{display:none}",""]),t.exports=n},713:function(t,e,o){"use strict";o.r(e);o(26),o(49),o(58);var n=o(12),r={name:"create form",meta:{crumbs:[{text:"Job Order Consolidation",to:"/admin/joc",disabled:!1},{text:"Add Job Order Consol",to:"/admin/joc/create",disabled:!0}]},middleware:"adminscl",data:function(){return{qty:[20,40],ports:[],eta:!1,etd:!1,agents:[],form:{type:"",no_bl:"",no_mbl:"",vessel:"",carrier:"",no_container:"",type_container:"",agent:"",loading:"",discharge:"",etd:"",eta:"",qty_container:"0",quantity:"",weight:"",measurement:"",creator:this.$auth.user.name}}},methods:{create:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$toast.global.app_loading(),e.next=4,t.$axios.post("job-consol",t.form);case 4:200===(o=e.sent).status&&(t.$toast.clear(),data=o.data.data,console.log(data,"ini berhasil ngecreate bro"),t.$toast.global.app_success("Succesfully created jo console"),t.$router.push({path:"/admin/joc/data/"+data.id})),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data,r=n&&n.message&&" , ".concat(n.message),t.$toast.global.app_error("Failed to create jo console, ".concat(r));case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAgents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("data-partner");case 3:200===(o=e.sent).status&&((data=o.data.data).forEach((function(element){t.agents.push(element.company_name)})),console.log(data,"ini data-partner")),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response.data,r=n&&n.message&&" , ".concat(n.message),t.$toast.global.app_error("Failed to load all data partners ".concat(r));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPort:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("data-port");case 3:200===(o=e.sent).status&&(data=o.data.data,console.log(data,"ini data data port"),data.forEach((function(e){t.ports.push(e.port_name)}))),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response.data,r=n&&n.message&&" , ".concat(n.message),t.$toast.global.app_error("Failed to load ports, ".concat(r));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){this.getPort(),this.getAgents()}},l=(o(651),o(30)),c=o(34),d=o.n(c),v=o(440),f=o(466),h=o(464),m=o(457),_=o(694),x=o(445),y=o(499),O=o(112),w=o(24),k=o(446),j=o(532),C=o(533),S=o(459),$=o(590),V=o(493),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-10"},[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.create(e)}}},[o("v-row",[o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card",{staticClass:"mx-auto",attrs:{width:"90%",outlined:""}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-content",[o("div",{staticClass:"headline mb-3 mt-5",staticStyle:{color:"#3273dc","font-weight":"bold"}},[t._v("\n                Data JO Consolidation\n                "),o("v-divider",{staticClass:"mt-5"}),t._v(" "),o("p",{staticClass:"overline",staticStyle:{color:"black"}},[t._v("\n                  No. Consol: -\n                ")])],1),t._v(" "),o("v-row",[o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-row",[o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Type\n                      ")]),t._v(" "),o("v-radio-group",{staticClass:"mb-5",attrs:{row:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[o("v-radio",{attrs:{label:"Import",value:"import"}}),t._v(" "),o("v-radio",{attrs:{label:"export",value:"export"}})],1)],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        No. B/L\n                      ")]),t._v(" "),o("v-text-field",{staticClass:"mb-7",attrs:{rules:t.rules,"hide-details":"auto",outlined:""},model:{value:t.form.no_bl,callback:function(e){t.$set(t.form,"no_bl",e)},expression:"form.no_bl"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        No. MBL\n                      ")]),t._v(" "),o("v-text-field",{staticClass:"mb-7",attrs:{rules:t.rules,"hide-details":"auto",outlined:""},model:{value:t.form.no_mbl,callback:function(e){t.$set(t.form,"no_mbl",e)},expression:"form.no_mbl"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Vessel\n                      ")]),t._v(" "),o("v-text-field",{staticClass:"mb-5",attrs:{rules:t.rules,"hide-details":"auto",outlined:""},model:{value:t.form.vessel,callback:function(e){t.$set(t.form,"vessel",e)},expression:"form.vessel"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Carrier\n                      ")]),t._v(" "),o("v-text-field",{staticClass:"mb-5",attrs:{rules:t.rules,"hide-details":"auto",outlined:""},model:{value:t.form.carrier,callback:function(e){t.$set(t.form,"carrier",e)},expression:"form.carrier"}})],1),t._v(" "),o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        No. Container\n                      ")]),t._v(" "),o("v-text-field",{staticClass:"mb-10",attrs:{rules:t.rules,"hide-details":"auto",outlined:""},model:{value:t.form.no_container,callback:function(e){t.$set(t.form,"no_container",e)},expression:"form.no_container"}})],1),t._v(" "),o("v-col",{attrs:{sm:"10",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Type Container\n                      ")]),t._v(" "),o("v-text-field",{staticClass:"mb-5",attrs:{rules:t.rules,"hide-details":"auto",outlined:""},model:{value:t.form.type_container,callback:function(e){t.$set(t.form,"type_container",e)},expression:"form.type_container"}})],1),t._v(" "),o("v-col",{attrs:{sm:"2",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px",opacity:"0"}},[t._v("\n                        Divider\n                      ")]),t._v(" "),o("v-select",{attrs:{items:t.qty,outlined:""},model:{value:t.form.qty_container,callback:function(e){t.$set(t.form,"qty_container",e)},expression:"form.qty_container"}})],1)],1)],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-row",[o("v-col",{attrs:{sm:"12",cols:"1"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Agent\n                      ")]),t._v(" "),o("v-select",{attrs:{items:t.agents,outlined:""},model:{value:t.form.agent,callback:function(e){t.$set(t.form,"agent",e)},expression:"form.agent"}})],1),t._v(" "),o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Loading\n                      ")]),t._v(" "),o("v-select",{attrs:{items:t.ports,outlined:""},model:{value:t.form.loading,callback:function(e){t.$set(t.form,"loading",e)},expression:"form.loading"}})],1),t._v(" "),o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Discharge\n                      ")]),t._v(" "),o("v-select",{attrs:{items:t.ports,outlined:""},model:{value:t.form.discharge,callback:function(e){t.$set(t.form,"discharge",e)},expression:"form.discharge"}})],1),t._v(" "),o("v-col",{attrs:{sm:"4",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        ETD\n                      ")]),t._v(" "),o("v-menu",{ref:"etd",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{"prepend-icon":"mdi-calendar",readonly:"",label:"dd/mm/yy"},model:{value:t.form.etd,callback:function(e){t.$set(t.form,"etd",e)},expression:"form.etd"}},"v-text-field",r,!1),n))]}}]),model:{value:t.etd,callback:function(e){t.etd=e},expression:"etd"}},[t._v(" "),o("v-date-picker",{ref:"picker",attrs:{max:t.form.eta},on:{change:t.save},model:{value:t.form.etd,callback:function(e){t.$set(t.form,"etd",e)},expression:"form.etd"}})],1)],1),t._v(" "),o("v-col",{attrs:{sm:"4",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        ETA\n                      ")]),t._v(" "),o("v-menu",{ref:"eta",attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{"prepend-icon":"mdi-calendar",readonly:"",label:"dd/mm/yy"},model:{value:t.form.eta,callback:function(e){t.$set(t.form,"eta",e)},expression:"form.eta"}},"v-text-field",r,!1),n))]}}]),model:{value:t.eta,callback:function(e){t.eta=e},expression:"eta"}},[t._v(" "),o("v-date-picker",{ref:"picker",attrs:{min:t.form.etd},on:{change:t.save},model:{value:t.form.eta,callback:function(e){t.$set(t.form,"eta",e)},expression:"form.eta"}})],1)],1),t._v(" "),o("v-col",{attrs:{sm:"4",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Quantity\n                      ")]),t._v(" "),o("v-text-field",{attrs:{type:"number",outlined:""},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{sm:"3",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Weight\n                      ")]),t._v(" "),o("v-text-field",{attrs:{type:"number",outlined:""},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}})],1),t._v(" "),o("v-col",{attrs:{sm:"3",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"18px"}},[t._v("\n                        Measurement\n                      ")]),t._v(" "),o("v-text-field",{attrs:{type:"number",outlined:""},model:{value:t.form.measurement,callback:function(e){t.$set(t.form,"measurement",e)},expression:"form.measurement"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("v-card-actions")],1)],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card",{staticClass:"mx-auto",staticStyle:{"background-color":"#f5f5fb",border:"0"},attrs:{width:"90%",outlined:""}},[o("v-btn",{staticStyle:{color:"red","margin-left":"80%"}},[t._v("\n            Cancel\n          ")]),t._v(" "),o("v-btn",{staticClass:"ml-12",attrs:{type:"submit",color:"primary",dark:""}},[t._v("\n            Save\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"5cff297f",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VCol:m.a,VDatePicker:_.a,VDivider:x.a,VForm:y.a,VListItem:O.a,VListItemContent:w.a,VMenu:k.a,VRadio:j.a,VRadioGroup:C.a,VRow:S.a,VSelect:$.a,VTextField:V.a})}}]);