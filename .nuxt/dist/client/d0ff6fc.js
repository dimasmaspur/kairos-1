(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{537:function(t,e,l){t.exports=l.p+"img/logo.cf23092.png"},584:function(t,e,l){var content=l(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(9).default)("453871fc",content,!0,{sourceMap:!1})},679:function(t,e,l){"use strict";l(584)},680:function(t,e,l){var n=l(8)(!1);n.push([t.i,".text-black[data-v-0c2a2d6f]{color:#4f4f4f}.text-white[data-v-0c2a2d6f]{color:#fff}.text-border[data-v-0c2a2d6f]{color:#ccc}.text-blue[data-v-0c2a2d6f]{color:#3273dc}.text-purple[data-v-0c2a2d6f]{color:#9b51e0}.text-orange[data-v-0c2a2d6f]{color:#f2994a}.text-sky[data-v-0c2a2d6f]{color:#209cee}.text-gray[data-v-0c2a2d6f]{color:#ebebeb}.text-red[data-v-0c2a2d6f]{color:#ff3860}.text-yellow[data-v-0c2a2d6f]{color:#ffdd57}.text-dark-gray[data-v-0c2a2d6f]{color:#4f4f4f}.text-green[data-v-0c2a2d6f]{color:#27ae60}.bg-black[data-v-0c2a2d6f]{background:#4f4f4f}.bg-white[data-v-0c2a2d6f]{background:#fff}.bg-primar[data-v-0c2a2d6f]{background:#f5f5fb}.bg-border[data-v-0c2a2d6f]{background:#ccc}.bg-form[data-v-0c2a2d6f]{background:#fbfbfb}.bg-blue[data-v-0c2a2d6f]{background:#3273dc}.bg-purple[data-v-0c2a2d6f]{background:#9b51e0}.bg-orange[data-v-0c2a2d6f]{background:#f2994a}.bg-sky[data-v-0c2a2d6f]{background:#209cee}.bg-gray[data-v-0c2a2d6f]{background:#ebebeb}.bg-red[data-v-0c2a2d6f]{background:#ff3860}.bg-yellow[data-v-0c2a2d6f]{background:#ffdd57}.bg-dark-gray[data-v-0c2a2d6f]{background:#4f4f4f}.bg-green[data-v-0c2a2d6f]{background:#27ae60}.bg-success[data-v-0c2a2d6f]{background:rgba(39,174,96,.15)}.bg-error[data-v-0c2a2d6f]{background:rgba(255,56,96,.15)}a[data-v-0c2a2d6f]:focus,button[data-v-0c2a2d6f]:focus{outline:none}.label[data-v-0c2a2d6f]{color:#b5b5b5!important}.label-reject[data-v-0c2a2d6f]{color:#ff3860!important}",""]),t.exports=n},733:function(t,e,l){"use strict";l.r(e);l(58);var n=l(12),o=l(201),r=l(7),c=l.n(r),d=l(550),v=l.n(d),_={meta:{crumbs:[{to:"/dokumen",exact:!0,text:"Dashboard",replace:!0},{to:"/dokumen/e-do",text:"Detail e-DO",disabled:!0}]},middleware:"dokumenscl",fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$toast.global.app_loading(),e.prev=1,e.next=4,t.$axios.get("/api/e_do/search/e_do_number/".concat(t.$route.params.id));case 4:(l=e.sent)&&(data=l.data.data,t.edo=data[0]),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n=e.t0.response&&e.t0.response.data&&e.t0.response.data.message&&" ,".concat(e.t0.response.data.message),t.$toast.global.app_error("Failed to get e-DO".concat(n));case 12:return e.prev=12,t.$toast.clear(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))()},fetchOnServer:!1,data:function(){return{edo:{},dialog:!1,loadingDelete:!1,notif:{message:"",status:""},confirmDelete:"",modalDeleteDialog:!1}},computed:{isNotEmpty:function(){return!c.a.isEmpty(this.edo)},isCanSend:function(){return this.isNotEmpty&&Object(o.n)(this.edo.status)},isCanReject:function(){return this.isNotEmpty&&Object(o.m)(this.edo.status)},isCandDelete:function(){return this.isNotEmpty&&Object(o.i)(this.edo.status)},isCanEdit:function(){return this.isNotEmpty&&Object(o.j)(this.edo.status)},isCanPrint:function(){return this.isNotEmpty&&Object(o.k)(this.edo.status)},isShowNotes:function(){return this.isNotEmpty&&c.a.isEqual(this.edo.status,"REJECTED")||c.a.isEqual(this.edo.status,"HOLD ON")||c.a.isEqual(this.edo.status,"ON HOLD")},computeConfirmDelete:function(){return this.confirmDelete===this.edo.edo_number},created_at_formated:function(){var t=this.$moment(this.edo.created_at,"DD-MM-YYYY hh:mm:ss","id");return t.isValid()?t.format("DD/MM/YYYY - hh:mm:ss"):this.edo.created_at}},methods:{colors:function(t){return Object(o.f)(t)},handle_delete_edo:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$toast.global.app_loading(),e.loadingDelete=!0,t.prev=2,t.next=5,e.$axios.delete("/api/e_do/".concat(e.edo.edo_id));case 5:t.sent&&e.$toast.global.app_success("e-DO ".concat(e.edo.edo_number," successfully deleted.")),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),l=t.t0.response.message&&" ,".concat(t.t0.response.message)||"",e.$toast.global.app_error("e-DO ".concat(e.edo.edo_number," failed to delete"),l);case 13:return t.prev=13,e.loadingDelete=!1,e.modalDeleteDialog=!1,e.$router.back(),t.finish(13);case 18:case"end":return t.stop()}}),t,null,[[2,9,13,18]])})))()},to_data_url:function(t,e){var l=new XMLHttpRequest;l.onload=function(){var t=new FileReader;t.onloadend=function(){e(t.result)},t.readAsDataURL(l.response)},l.open("GET",t),l.responseType="blob",l.send()},crete_pdf:function(t){var e=this.edo,n=this.$moment().format("DD/MM/YYYY");this.to_data_url(l(537),(function(t){var l={content:[{table:{widths:["55%","*"],headerRows:2,body:[[{rowSpan:2,text:[{text:"Shipper\n",style:"label"},{text:e.shipper_name,style:"content"}]},{layout:"noBorders",table:{widths:["*","*"],body:[[[{text:"D/O No.",style:"label"},{text:e.edo_number,style:"content"}],[{text:"Print Date",style:"label"},{text:n,style:"content"}]]]}}],[{},{layout:"noBorders",table:{widths:["*","*"],body:[[[{text:"House B/L No.",style:"label"},{text:e.house_bl_number,style:"content"}],[{text:"MB/L No.",style:"label"},{text:e.mbl_number,style:"content"}]]]}}],[{text:[{text:"Consignee\n",style:"label"},{text:e.consignee_name,style:"content"}]},{rowSpan:2,layout:"noBorders",table:{widths:["*"],body:[[{image:t,width:150,margin:[0,20,0,20]}],[{qr:e.edo_number,fit:"70"}]]},alignment:"center"}],[{text:[{text:"Notify\n",style:"label"},{text:e.notify,style:"content"}]},{}]]}},{table:{widths:["*","*","*"],body:[[{text:[{text:"Pre-carriage by\n",style:"label"},{text:"-",style:"content"}]},{text:[{text:"Place Of Receipt\n",style:"label"},{text:e.place_of_receipt,style:"content"}]},{text:[{text:"Arrival Date\n",style:"label"},{text:e.arrival_date,style:"content"}]}],[{text:[{text:"Ocean Vessel\n",style:"label"},{text:e.ocean_vessel,style:"content"}]},{text:[{text:"Voyage No.\n",style:"label"},{text:e.voyage_number,style:"content"}]},{text:[{text:"Container/Seal no.\n",style:"label"},{text:e.container_seal_number,style:"content"}]}],[{text:[{text:"Port Of Lading\n",style:"label"},{text:e.port_of_loading,style:"content"}]},{text:[{text:"Port Of Discharges\n",style:"label"},{text:e.port_of_discharges,style:"content"}]},{text:[{text:"Final Destination\n",style:"label"},{text:e.final_destination,style:"content"}]}],[{colSpan:2,text:[{text:"Description Of Goods\n",style:"label"},{text:e.description_of_goods,style:"content"}]},{},{layout:"noBorders",table:{body:[[{text:[{text:"Gross Weight\n",style:"label"},{text:"".concat(e.gross_weight," KGM"),style:"content"}],margin:[0,0,0,10]}],[{text:[{text:"Measurement\n",style:"label"},{text:"".concat(e.measurment," M3"),style:"content"}],margin:[0,10,0,10]}],[{text:[{text:"Number Of Package\n",style:"label"},{text:e.number_of_package,style:"content"}],margin:[0,10,0,5]}]]}}],[{colSpan:3,text:[{text:"Marks & Numbers\n",style:"label"},{text:e.marks_and_number,style:"content"}]}]]}}],defaultStyle:{lineHeight:1.2},styles:{label:{fontSize:8},content:{bold:!0,fontSize:10}}};return v.a.fonts={Roboto:{normal:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",bold:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",italics:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",bolditalics:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf"}},v.a.createPdf(l).print()}))}},head:{title:"Detail - SCL e-DO"}},f=(l(679),l(30)),m=l(34),h=l.n(m),x=l(498),y=l(440),C=l(464),D=l(457),k=l(463),w=l(483),S=l(445),$=l(181),N=l(459),O=l(460),M=l(482),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pa-5"},[l("v-dialog",{attrs:{disabled:t.loadingDelete,"max-width":"600px",persistent:""},model:{value:t.modalDeleteDialog,callback:function(e){t.modalDeleteDialog=e},expression:"modalDeleteDialog"}},[l("v-alert",{staticClass:"ma-0 pt-7",attrs:{"colored-border":"",type:"warning",border:"top",icon:"mdi-alert-outline","close-icon":""}},[l("div",{staticClass:"text-h6"},[t._v("\n        Are you sure you want to delete this e-DO\n        "),l("span",{staticClass:"headline",staticStyle:{color:"#3273DC"}},[t._v(t._s(t.edo.edo_number))]),t._v(" ?\n      ")]),t._v(" "),l("v-divider",{staticClass:"mt-5"}),t._v(" "),l("v-card-actions",[l("v-btn",{attrs:{disabled:t.loadingDelete,loading:t.loadingDelete,text:"",color:"error"},on:{click:function(e){e.stopPropagation(),t.modalDeleteDialog=!1}}},[t._v("\n          Cancel\n        ")]),t._v(" "),l("v-spacer"),t._v(" "),l("v-btn",{attrs:{disabled:t.loadingDelete,loading:t.loadingDelete,dark:"",color:"error"},on:{click:t.handle_delete_edo}},[t._v("\n          Yes, Delete\n        ")])],1)],1)],1),t._v(" "),l("v-container",{staticClass:"mx-auto"},[l("v-row",{staticClass:"mt-8"},[l("v-col",{attrs:{cols:"12",sm:"6"}},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{staticClass:"mb-5",attrs:{cols:"12",sm:"auto"}},[l("v-btn",{staticClass:"mr-3",attrs:{disabled:!t.isCanPrint,loading:t.loadingDelete||t.$fetchState.pending},on:{click:function(e){return e.preventDefault(),t.crete_pdf(e)}}},[l("span",[t._v("Print")]),t._v(" "),l("v-icon",{staticClass:"ml-2"},[t._v("\n                mdi-printer\n              ")])],1)],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"auto"}},[l("v-btn",{attrs:{nuxt:"",to:"/dokumen/e-do/edit/"+t.edo.edo_number,dark:t.isCanEdit,color:"#00D1B2",disabled:!t.isCanEdit,loading:t.loadingDelete||t.$fetchState.pending}},[t._v("\n              Edit "),l("v-icon",{staticClass:"ml-2"},[t._v("\n                mdi-pencil-outline\n              ")])],1)],1)],1)],1),t._v(" "),l("v-col",{staticClass:"text-sm-right",attrs:{cols:"12",sm:"6"}},[l("v-btn",{attrs:{dark:t.isCandDelete,color:"#FF3860",disabled:!t.isCandDelete,loading:t.loadingDelete||t.$fetchState.pending},on:{click:function(e){e.stopPropagation(),t.modalDeleteDialog=!0}}},[t._v("\n          Delete "),l("v-icon",{staticClass:"ml-2"},[t._v("\n            mdi-trash-can-outline\n          ")])],1)],1)],1),t._v(" "),l("v-row",{attrs:{align:"center",justify:"center"}},[l("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"6"}},[l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:"auto"}},[l("div",{staticClass:"label"},[t._v("\n              Created At\n            ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{loading:"",type:"table-cell"}}):l("div",{staticClass:"font-weight-bold"},[t._v("\n              "+t._s(t.created_at_formated)+"\n            ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"auto"}},[l("div",{staticClass:"label"},[t._v("\n              Created By\n            ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{loading:"",type:"table-cell"}}):l("div",{staticClass:"font-weight-bold text-capitalize"},[t._v("\n              "+t._s(t.edo.created_by)+"\n            ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"auto"}},[l("div",{staticClass:"label"},[t._v("\n              Status\n            ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{loading:"",type:"table-cell"}}):l("div",{staticClass:"font-weight-bold",style:{color:t.colors(t.edo.status)}},[t._v("\n              "+t._s(t.edo.status)+"\n            ")])],1)],1)],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"6"}},[l("v-row",{attrs:{justify:"end"}},[l("v-col",{attrs:{cols:"12",sm:"auto"}},[t.$fetchState.pending?l("v-skeleton-loader",{attrs:{loading:"",type:"image",width:"80",height:"80"}}):l("qrcode",{attrs:{value:t.edo.edo_number,options:{width:80,height:80}}})],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"auto"}},[l("div",{staticClass:"ml-3 d-flex flex-column justify-center"},[l("div",{staticClass:"label"},[t._v("\n                e-DO Number\n              ")]),t._v(" "),t.$fetchState.pending?l("v-skeleton-loader",{attrs:{loading:"",type:"table-cell"}}):l("div",{staticClass:"font-weight-bold"},[t._v("\n                "+t._s(t.edo.edo_number)+"\n              ")])],1)])],1)],1)],1)],1),t._v(" "),l("v-divider",{staticClass:"my-8"}),t._v(" "),l("v-container",{staticClass:"mx-auto"},[l("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isShowNotes,expression:"isShowNotes"}],attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label-reject"},[t._v("\n          Notes\n        ")]),t._v(" "),l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.status_description||"-")+"\n        ")])])],1)],1),t._v(" "),l("v-divider",{directives:[{name:"show",rawName:"v-show",value:t.isShowNotes,expression:"isShowNotes"}],staticClass:"my-8"}),t._v(" "),l("v-container",{staticClass:"mx-auto"},[l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Shipper name\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.shipper_name)+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Consignee name\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.consignee_name)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Shipper e-mail\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.shipper_email||"-")+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Consignee e-mail\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.consignee_email)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Shipper address\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.shipper_address)+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Consignee address\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.consignee_address)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Notify\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.notify)+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          House BL Number\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.house_bl_number)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Notify Address\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.notify)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          MB/L Number\n        ")]),t._v(" "),l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.mbl_number)+"\n        ")])]),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          House BL Date\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.$moment(t.edo.house_bl_date).format("DD/MM/YYYY"))+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Arrival Date (ETA)\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.$moment(t.edo.arrival_date).format("DD/MM/YYYY"))+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Place of receipt\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.place_of_receipt)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Container/Seal number\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.container_seal_number)+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Ocean vessel\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.ocean_vessel)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Port of lading\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.port_of_loading)+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Voyage Number\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.voyage_number)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Final Destination\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.final_destination)+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Port of discharges\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.port_of_discharges)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Gross weight (Kg)\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.gross_weight)+" KGM\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Number of Package\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.number_of_package)+"\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Measurement (CBM)\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.measurment)+" M3\n        ")])],1)],1),t._v(" "),l("v-row",{attrs:{align:"center"}},[l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Description of goods\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.description_of_goods)+"\n        ")])],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:""}},[l("div",{staticClass:"label"},[t._v("\n          Marks and number\n        ")]),t._v(" "),t.loadingDelete||t.$fetchState.pending?l("v-skeleton-loader",{attrs:{type:"table-cell"}}):l("div",{staticClass:"text-h5"},[t._v("\n          "+t._s(t.edo.marks_and_number)+"\n        ")])],1)],1)],1),t._v(" "),l("v-divider",{staticClass:"my-7"}),t._v(" "),l("v-container",{staticClass:"mx-auto"},[l("v-row",{staticClass:"text-sm-right",attrs:{align:"center",justify:"end"}},[l("v-col",{attrs:{cols:"12"}},[l("v-btn",{attrs:{color:"primary"},on:{click:function(){return t.$router.back()}}},[t._v("\n          Back to dashboard\n        ")])],1)],1)],1)],1)}),[],!1,null,"0c2a2d6f",null);e.default=component.exports;h()(component,{VAlert:x.a,VBtn:y.a,VCardActions:C.a,VCol:D.a,VContainer:k.a,VDialog:w.a,VDivider:S.a,VIcon:$.a,VRow:N.a,VSkeletonLoader:O.a,VSpacer:M.a})}}]);