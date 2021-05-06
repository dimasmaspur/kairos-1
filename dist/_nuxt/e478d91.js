(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{735:function(t,e,o){"use strict";o.r(e);o(84),o(49),o(58);var n=o(12),c={name:"pay-request",components:{Money:o(498).Money},meta:{crumbs:[{text:"Create Job Order",to:"/admin/jo/create",disabled:!1},{text:"Add Pay Request",to:"/admin/jo/detail",disabled:!0}]},middleware:"adminscl",data:function(){return{amIdr:0,USD:{decimal:",",thousands:".",prefix:"R$ ",precision:2,masked:!1},IDR:{decimal:",",thousands:".",prefix:"Rp ",precision:2,masked:!1},amUsd:0,agents:[],id_cost:0,dialog:!1,dialog_see:!1,dialog_edit:!1,dialog_delete:!1,ppn:!0,cost:{id_payrequest:this.$route.params.id_payrequest,item_cost:"",unit:"",quantity:"",price:"",currency:"",note:""},flag_ppn:!1,currencies:["IDR","USD"],switch1:!1,payRequest:[],payReq:{},data_costs:[],totAmIdr:0,totAmUsd:0,totPPNIdr:0,totPPNUsd:0,units:["Buruh","Coil","Colly","Container","Doc","Kg","M3","Trip","Unit"]}},methods:{ppn_switch:function(t){this.ppn=t,!1===this.ppn?(this.totPPNIdr=0,this.totPPNUsd=0,this.amIdr=this.totAmIdr,this.amUsd=this.totAmUsd):this.getPayreq()},updatePayreq:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.put("jo-payrequest/"+t.$route.params.id_payrequest,t.payReq);case 3:200===(o=e.sent).status&&(console.log(o,"ini hasil ngeupdate pay req"),t.$toast.global.app_success("successfully updated this pay request"),t.getPayreq()),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response.data,c=n&&n.message&&" , ".concat(n.message),t.$toast.global.app_error("Failed to update pay request ".concat(c));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},updateCost:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,data,c,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.id_cost,"ini id bawaan edit"),o=t.id_cost,e.prev=2,e.next=5,t.$axios.put("payrequest-cost/"+o,t.cost);case 5:200===(n=e.sent).status&&(data=n.data.data,console.log(data,"<---- respons berhasil update"),t.getPayreq()),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),c=error.response.data,r=c&&c.message&&" , ".concat(c.message),t.$toast.global.app_error("Failed to update pay request cost, ".concat(r));case 14:t.dialog_edit=!1;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))()},destroy:function(t){console.log(t,"ini id bawaan delete"),this.id_cost=t},deleteCost:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,data,c,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.id_cost,e.prev=1,e.next=4,t.$axios.delete("payrequest-cost/"+o);case 4:200===(n=e.sent).status&&(data=n.data.data,console.log(data,"<---- respons berhasil update"),t.getPayreq()),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),c=error.response.data,r=c&&c.message&&" , ".concat(c.message),t.$toast.global.app_error("Failed to delete pay request cost, ".concat(r));case 13:t.dialog_delete=!1;case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))()},close:function(){this.dialog_edit=!1,this.cost={id_payrequest:this.$route.params.id_payrequest,item_cost:"",unit:"",quantity:"",price:"",currency:"",note:"",flag_ppn:!0}},stop:function(){this.dialog_see=!1,this.cost={id_payrequest:this.$route.params.id_payrequest,item_cost:"",unit:"",quantity:"",price:"",currency:"",note:"",flag_ppn:0}},getAgents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("data-partner");case 3:200===(o=e.sent).status&&((data=o.data.data).forEach((function(element){t.agents.push(element.company_name)})),console.log(data,"ini data-partner")),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response.data,c=n&&n.message&&" , ".concat(n.message),t.$toast.global.app_error("Failed to load all data partners ".concat(c));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},edit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,data,c,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("edit ditekan berjalan membawa",t),e.id_cost=t,o.prev=2,o.next=5,e.$axios.get("payrequest-cost/"+t);case 5:200===(n=o.sent).status&&(data=n.data.data,e.cost=data.costPayRequest,console.log(e.cost,"ini hasil get by id")),o.next=14;break;case 9:o.prev=9,o.t0=o.catch(2),c=error.response.data,r=c&&c.message&&" , ".concat(c.message),e.$toast.global.app_error("Failed to load all data partners ".concat(r));case 14:case"end":return o.stop()}}),o,null,[[2,9]])})))()},getPayreq:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.totAmUsd=0,t.totPPNIdr=0,t.amIdr=0,t.totAmIdr=0,t.totPPNUsd=0,t.amUsd=0,e.prev=6,t.$toast.global.app_loading(),e.next=10,t.$axios.get("jo-payrequest/"+t.$route.params.id_payrequest);case 10:200===(o=e.sent).status&&(data=o.data.data,t.$toast.clear(),data.payRequestCost.forEach((function(e){e.createdAt=e.createdAt.slice(0,10),e.totPrice=e.price*e.quantity,"USD"===e.currency?(t.totAmUsd+=e.totPrice,t.totPPNUsd+=e.totPrice*data.ppn_usd/100,t.amUsd+=e.totPrice+e.totPrice*data.ppn_usd/100):"IDR"===e.currency&&(t.totAmIdr+=e.totPrice,t.totPPNIdr+=e.totPrice*data.ppn_idr/100,t.amIdr+=e.totPrice+e.totPrice*data.ppn_idr/100)})),t.payReq=data,t.payRequest=data.payRequestCost,console.log(data,"<------ ini responsenya bila berhasil dari mendapatkan payreq")),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0,"ini errornya"),n=e.t0.response.data,c=n&&n.message&&" , ".concat(n.message),t.$toast.global.app_error("Failed to load pay request ".concat(c));case 20:case"end":return e.stop()}}),e,null,[[6,14]])})))()},getDataCost:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("data-cost");case 3:200===(o=e.sent).status&&(data=o.data.data,console.log(data,"ini hasil get data cost"),data.forEach((function(e){t.data_costs.push(e.cost_name)}))),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"ini errornya data-cost"),n=e.t0.response.data,c=n&&n.message&&" , ".concat(n.message),t.$toast.global.app_error("Failed to load data costs ".concat(c));case 13:case"end":return e.stop()}}),e,null,[[0,7]])})))()},createPayreq:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,data,c,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.preventDefault(),!0===e.flag_ppn?e.cost.flag_ppn=1:e.cost.flag_ppn=0,console.log(e.cost,"testing create pay req form"),o.prev=3,o.next=6,e.$axios.post("payrequest-cost",e.cost);case 6:200===(n=o.sent).status&&(data=n.data.data,console.log(data,"ini berhasil create payreqcost"),e.getPayreq(),e.cost={id_payrequest:e.$route.params.id_payrequest,item_cost:"",unit:"",quantity:"",price:"",currency:"",note:"",flag_ppn:""}),o.next=16;break;case 10:o.prev=10,o.t0=o.catch(3),console.log(o.t0,"ini error create payreqcost"),c=o.t0.response.data,r=c&&c.message&&" , ".concat(c.message),e.$toast.global.app_error("Failed to load create pay req cost ".concat(r));case 16:e.dialog=!1;case 17:case"end":return o.stop()}}),o,null,[[3,10]])})))()}},created:function(){this.getAgents(),this.getPayreq(),this.getDataCost()}},r=o(30),l=o(34),d=o.n(l),v=o(448),_=o(474),m=o(472),x=o(546),y=o(465),f=o(471),h=o(491),w=o(507),C=o(182),k=o(113),S=o(185),P=o(24),R=o(467),I=o(598),D=o(512),$=o(490),U=o(501),z=o(503),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.updatePayreq(e)}}},[o("v-row",{staticClass:"ml-10 mr-10"},[o("v-col",{attrs:{sm:"12",md:"6"}},[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"100%",outlined:""}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-content",[o("div",{staticClass:"overline",staticStyle:{color:"#3273dc","max-width":"50%"}},[t._v("\n                DATA VENDOR\n              ")]),t._v(" "),o("hr",{staticClass:"mb-4"}),t._v(" "),o("v-list-item-title",{staticClass:"headline mb-1"},[o("v-row",[o("v-col",{attrs:{sm:"6",cols:"2"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"16px"}},[t._v("\n                      No. Blanko\n                    ")]),t._v(" "),o("v-text-field",{attrs:{outlined:""},model:{value:t.payReq.no_blanko,callback:function(e){t.$set(t.payReq,"no_blanko",e)},expression:"payReq.no_blanko"}})],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{sm:"6",cols:"2"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"16px"}},[t._v("\n                      PPN (IDR) %\n                    ")]),t._v(" "),o("v-text-field",{attrs:{outlined:""},model:{value:t.payReq.ppn_idr,callback:function(e){t.$set(t.payReq,"ppn_idr",e)},expression:"payReq.ppn_idr"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"2"}},[o("v-card-text",{staticStyle:{padding:"1px","font-size":"16px"}},[t._v("\n                      PPN (USD) %\n                    ")]),t._v(" "),o("v-text-field",{attrs:{outlined:""},model:{value:t.payReq.ppn_usd,callback:function(e){t.$set(t.payReq,"ppn_usd",e)},expression:"payReq.ppn_usd"}})],1)],1)],1),t._v(" "),o("v-card-text",{staticStyle:{padding:"0px"}},[t._v("\n                  Vendor name\n                ")]),t._v(" "),o("v-select",{attrs:{items:t.agents,outlined:""},model:{value:t.payReq.vendor_name,callback:function(e){t.$set(t.payReq,"vendor_name",e)},expression:"payReq.vendor_name"}})],1),t._v(" "),o("v-list-item-avatar",{attrs:{tile:"",height:"30",width:"200"}},[t._v("\n                JO Number: "+t._s(t.payReq.jo_number)+"\n              ")])],1)],1)],1)],1),t._v(" "),o("v-row",{staticClass:"ml-10 mr-10"},[o("v-col",{attrs:{sm:"1",cols:"2"}},[o("v-dialog",{attrs:{persistent:"","max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,c=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",c,!1),n),[t._v("\n              Add Cost\n              "),o("v-icon",[t._v("\n                mdi-plus-circle\n              ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",{staticStyle:{overflow:"hidden"}},[o("v-form",{on:{submit:t.createPayreq}},[o("v-card-title",[o("v-icon",{staticStyle:{color:"#3273dc"}},[t._v("mdi-file-document")]),o("span",{staticClass:"headline",staticStyle:{color:"#3273dc"}},[t._v("Data Cost")])],1),t._v(" "),o("hr"),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12"}},[o("v-card-text",{staticClass:"font-weight-bold",staticStyle:{padding:"2px","font-weight":"bold","font-size":"16px"}},[t._v("\n                      Item Cost\n                    ")]),t._v(" "),o("v-select",{attrs:{items:t.data_costs,outlined:""},model:{value:t.cost.item_cost,callback:function(e){t.$set(t.cost,"item_cost",e)},expression:"cost.item_cost"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                        Unit\n                      ")]),t._v(" "),o("v-select",{attrs:{items:t.units,outlined:""},model:{value:t.cost.unit,callback:function(e){t.$set(t.cost,"unit",e)},expression:"cost.unit"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                        Quantity\n                      ")]),t._v(" "),o("v-text-field",{attrs:{outlined:"",type:"number"},model:{value:t.cost.quantity,callback:function(e){t.$set(t.cost,"quantity",e)},expression:"cost.quantity"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                        Price\n                      ")]),t._v(" "),o("v-text-field",{attrs:{outlined:"",type:"number"},model:{value:t.cost.price,callback:function(e){t.$set(t.cost,"price",e)},expression:"cost.price"}})],1),t._v(" "),o("v-col",{attrs:{sm:"3",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500",opacity:"0"}},[t._v("\n                        DIVIDER\n                      ")]),t._v(" "),o("v-select",{attrs:{items:t.currencies,outlined:""},model:{value:t.cost.currency,callback:function(e){t.$set(t.cost,"currency",e)},expression:"cost.currency"}})],1),t._v(" "),o("v-col",{attrs:{sm:"2",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500",opacity:"0"}},[t._v("\n                        DIVIDER\n                      ")]),t._v(" "),o("v-checkbox",{attrs:{label:"PPN"},model:{value:t.flag_ppn,callback:function(e){t.flag_ppn=e},expression:"flag_ppn"}})],1),t._v(" "),o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500"}},[t._v("\n                        Note\n                      ")]),t._v(" "),o("v-textarea",{attrs:{outlined:""},model:{value:t.cost.note,callback:function(e){t.$set(t.cost,"note",e)},expression:"cost.note"}})],1)],1)],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{sm:"12",cols:"2"}},[o("hr",{staticStyle:{"max-width":"100%"}})])],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                Close\n              ")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v("\n                Save\n              ")])],1)],1)],1)],1)],1),t._v(" "),o("v-col",{staticClass:"ml-5",attrs:{sm:"2",cols:"2"}},[o("v-btn",{on:{click:function(e){return t.ppn_switch(!0)}}},[t._v("\n          Checklist All Item PPN "),o("v-icon",[t._v("mdi-checkbox-multiple-marked-circle")])],1)],1),t._v(" "),o("v-col",{staticClass:"ml-3",attrs:{sm:"1",cols:"2"}},[o("v-btn",{staticStyle:{"background-color":"#ffffff"},on:{click:function(e){return t.ppn_switch(!1)}}},[t._v("\n          Uncheck All Item PPN "),o("v-icon",[t._v("mdi-checkbox-multiple-blank-circle-outline")])],1)],1)],1),t._v(" "),o("v-row",{staticClass:"ml-10 mr-10"},[o("v-col",{attrs:{sm:"12",cols:"12"}},[o("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  No\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  Description\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  Note\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  Unit\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  Qty\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  Price\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("\n                  Amount\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  PPN\n                ")]),t._v(" "),o("th",{staticClass:"text-center",attrs:{rowspan:"2"}},[t._v("\n                  Action\n                ")])]),t._v(" "),o("tr",[o("th",{staticClass:"text-center"},[t._v("IDR")]),t._v(" "),o("th",{staticClass:"text-center"},[t._v("USD")])])]),t._v(" "),t._l(t.payRequest,(function(e,i){return o("tbody",{key:i},[o("tr",[o("td",{staticClass:"text-center"},[t._v(t._s(e.createdAt))]),t._v(" "),o("td",{staticClass:"text-center"},[t._v(t._s(e.item_cost))]),t._v(" "),o("td",{staticClass:"text-center"},[t._v(t._s(e.note.substr(0,6))+"...")]),t._v(" "),o("td",{staticClass:"text-center"},[t._v(t._s(e.unit))]),t._v(" "),o("td",{staticClass:"text-center"},[t._v(t._s(e.quantity))]),t._v(" "),o("td",{staticClass:"text-center"},[o("money",{staticStyle:{"text-align":"center"},attrs:{"v-bind":e.currency},model:{value:e.price,callback:function(o){t.$set(e,"price",o)},expression:"req.price"}},[t._v(t._s(e.price))])],1),t._v(" "),"IDR"===e.currency?o("td",{staticClass:"text-center"},[o("money",t._b({staticStyle:{"text-align":"center"},model:{value:e.totPrice,callback:function(o){t.$set(e,"totPrice",o)},expression:"req.totPrice"}},"money",t.IDR,!1),[t._v(t._s(e.totPrice))])],1):o("td",{staticClass:"text-center",staticStyle:{width:"200px"}},[o("money",t._b({staticStyle:{"text-align":"center"}},"money",t.IDR,!1),[t._v("0")])],1),t._v(" "),"USD"===e.currency?o("td",{staticClass:"text-center",staticStyle:{width:"200px"}},[o("money",t._b({staticStyle:{"text-align":"center"},model:{value:e.totPrice,callback:function(o){t.$set(e,"totPrice",o)},expression:"req.totPrice"}},"money",t.USD,!1),[t._v(t._s(e.totPrice))])],1):o("td",{staticClass:"text-center"},[o("money",t._b({staticStyle:{"text-align":"center"}},"money",t.USD,!1),[t._v("0")])],1),t._v(" "),"USD"===e.currency&&!0===t.ppn?o("td",{staticClass:"text-center"},[t._v(t._s(t.payReq.ppn_usd)+"%")]):"IDR"===e.currency&&!0===t.ppn?o("td",{staticClass:"text-center"},[t._v(t._s(t.payReq.ppn_idr)+"%")]):o("td",{staticClass:"text-center"},[t._v("0")]),t._v(" "),o("td",{staticClass:"text-center"},[o("v-dialog",{attrs:{persistent:"","retain-focus":!1,"max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,r=n.attrs;return[o("v-icon",t._g(t._b({on:{click:function(o){return t.edit(e.id_payrequest_cost)}}},"v-icon",r,!1),c),[t._v("\n                        mdi-eye\n                      ")]),t._v(" |\n                    ")]}}],null,!0),model:{value:t.dialog_see,callback:function(e){t.dialog_see=e},expression:"dialog_see"}},[t._v(" "),o("v-card",{staticStyle:{overflow:"hidden"}},[o("v-card-title",[o("v-icon",{staticStyle:{color:"#3273dc"}},[t._v("mdi-file-document")]),o("span",{staticClass:"headline",staticStyle:{color:"#3273dc"}},[t._v("Data Cost")])],1),t._v(" "),o("hr"),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12"}},[o("v-card-text",{staticClass:"font-weight-bold",staticStyle:{padding:"2px","font-weight":"bold","font-size":"16px"}},[t._v("\n                                Item Cost\n                              ")]),t._v(" "),o("v-select",{attrs:{readonly:"",items:t.data_costs,outlined:""},model:{value:t.cost.item_cost,callback:function(e){t.$set(t.cost,"item_cost",e)},expression:"cost.item_cost"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                                  Unit\n                                ")]),t._v(" "),o("v-select",{attrs:{readonly:"",items:t.units,outlined:""},model:{value:t.cost.unit,callback:function(e){t.$set(t.cost,"unit",e)},expression:"cost.unit"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                                  Quantity\n                                ")]),t._v(" "),o("v-text-field",{attrs:{readonly:"",outlined:"",type:"number"},model:{value:t.cost.quantity,callback:function(e){t.$set(t.cost,"quantity",e)},expression:"cost.quantity"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                                  Price\n                                ")]),t._v(" "),o("v-text-field",{attrs:{readonly:"",outlined:"",type:"number"},model:{value:t.cost.price,callback:function(e){t.$set(t.cost,"price",e)},expression:"cost.price"}})],1),t._v(" "),o("v-col",{attrs:{sm:"3",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500",opacity:"0"}},[t._v("\n                                  DIVIDER\n                                ")]),t._v(" "),o("v-select",{attrs:{readonly:"",items:t.currencies,outlined:""},model:{value:t.cost.currency,callback:function(e){t.$set(t.cost,"currency",e)},expression:"cost.currency"}})],1),t._v(" "),o("v-col",{attrs:{sm:"2",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500",opacity:"0"}},[t._v("\n                                  DIVIDER\n                                ")]),t._v(" "),o("v-checkbox",{attrs:{readonly:"",label:"PPN"},model:{value:t.cost.flag_ppn,callback:function(e){t.$set(t.cost,"flag_ppn",e)},expression:"cost.flag_ppn"}})],1),t._v(" "),o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500"}},[t._v("\n                                  Note\n                                ")]),t._v(" "),o("v-textarea",{attrs:{readonly:"",outlined:""},model:{value:t.cost.note,callback:function(e){t.$set(t.cost,"note",e)},expression:"cost.note"}})],1)],1)],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{sm:"12",cols:"2"}},[o("hr",{staticStyle:{"max-width":"100%"}})])],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.stop}},[t._v("\n                          Close\n                        ")])],1)],1)],1),t._v(" "),o("v-dialog",{attrs:{persistent:"","retain-focus":!1,"max-width":"270px"},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,r=n.attrs;return[o("v-icon",t._g(t._b({on:{click:function(o){return t.destroy(e.id_payrequest_cost)}}},"v-icon",r,!1),c),[t._v("\n                        mdi-delete\n                      ")])]}}],null,!0),model:{value:t.dialog_delete,callback:function(e){t.dialog_delete=e},expression:"dialog_delete"}},[t._v(" "),o("v-card",{staticStyle:{overflow:"hidden"}},[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.deleteCost(e)}}},[o("v-card-title",{staticClass:"headline",staticStyle:{"text-align-last":"center","text-align":"justify"}},[t._v("\n                        Are you sure to delete this item?\n                      ")]),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog_delete=!1}}},[t._v("\n                          Close\n                        ")]),t._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:"",type:"submit"}},[t._v("\n                          Yes\n                        ")])],1)],1)],1)],1),t._v("\n                  |\n                  "),o("v-dialog",{attrs:{persistent:"","retain-focus":!1,"max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,r=n.attrs;return[o("v-icon",t._g(t._b({on:{click:function(o){return t.edit(e.id_payrequest_cost)}}},"v-icon",r,!1),c),[t._v("\n                        mdi-file-edit-outline\n                      ")])]}}],null,!0),model:{value:t.dialog_edit,callback:function(e){t.dialog_edit=e},expression:"dialog_edit"}},[t._v(" "),o("v-card",{staticStyle:{overflow:"hidden"}},[o("v-form",{on:{submit:function(o){return o.preventDefault(),t.updateCost(e.id_payrequest_cost)}}},[o("v-card-title",[o("v-icon",{staticStyle:{color:"#3273dc"}},[t._v("mdi-file-document")]),o("span",{staticClass:"headline",staticStyle:{color:"#3273dc"}},[t._v("Data Cost")])],1),t._v(" "),o("hr"),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"12"}},[o("v-card-text",{staticClass:"font-weight-bold",staticStyle:{padding:"2px","font-weight":"bold","font-size":"16px"}},[t._v("\n                                Item Cost\n                              ")]),t._v(" "),o("v-select",{attrs:{items:t.data_costs,outlined:""},model:{value:t.cost.item_cost,callback:function(e){t.$set(t.cost,"item_cost",e)},expression:"cost.item_cost"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                                  Unit\n                                ")]),t._v(" "),o("v-select",{attrs:{items:t.units,outlined:""},model:{value:t.cost.unit,callback:function(e){t.$set(t.cost,"unit",e)},expression:"cost.unit"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                                  Quantity\n                                ")]),t._v(" "),o("v-text-field",{attrs:{outlined:"",type:"number"},model:{value:t.cost.quantity,callback:function(e){t.$set(t.cost,"quantity",e)},expression:"cost.quantity"}})],1),t._v(" "),o("v-col",{attrs:{sm:"6",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"2px","font-size":"16px","font-weight":"bold"}},[t._v("\n                                  Price\n                                ")]),t._v(" "),o("v-text-field",{attrs:{outlined:"",type:"number"},model:{value:t.cost.price,callback:function(e){t.$set(t.cost,"price",e)},expression:"cost.price"}})],1),t._v(" "),o("v-col",{attrs:{sm:"3",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500",opacity:"0"}},[t._v("\n                                  DIVIDER\n                                ")]),t._v(" "),o("v-select",{attrs:{items:t.currencies,outlined:""},model:{value:t.cost.currency,callback:function(e){t.$set(t.cost,"currency",e)},expression:"cost.currency"}})],1),t._v(" "),o("v-col",{attrs:{sm:"2",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500",opacity:"0"}},[t._v("\n                                  DIVIDER\n                                ")]),t._v(" "),o("v-checkbox",{attrs:{label:"PPN"},model:{value:t.cost.flag_ppn,callback:function(e){t.$set(t.cost,"flag_ppn",e)},expression:"cost.flag_ppn"}})],1),t._v(" "),o("v-col",{attrs:{sm:"12",cols:"3"}},[o("v-card-text",{staticClass:"mt-5",staticStyle:{padding:"0","font-size":"16px","font-weight":"500"}},[t._v("\n                                  Note\n                                ")]),t._v(" "),o("v-textarea",{attrs:{outlined:""},model:{value:t.cost.note,callback:function(e){t.$set(t.cost,"note",e)},expression:"cost.note"}})],1)],1)],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{sm:"12",cols:"2"}},[o("hr",{staticStyle:{"max-width":"100%"}})])],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("\n                          Close\n                        ")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v("\n                          Save\n                        ")])],1)],1)],1)],1)],1)])])}))]},proxy:!0}])})],1)],1),t._v(" "),o("v-row",{staticClass:"ml-10 mr-10"},[o("v-col",{attrs:{sm:"12",cols:"2"}},[o("v-card",{staticClass:"mt-2",attrs:{outlined:""}},[o("v-row",{staticClass:"mb-3 mt-3",staticStyle:{display:"flex"}},[o("v-col",{staticStyle:{"border-width":"0 1px 0 0","border-style":"solid","border-color":"#b8b8b8"},attrs:{sm:"2",cols:"2"}},[o("v-card-title",{staticClass:"ml-5",staticStyle:{"font-size":"16px","border-width":"0 0 2px 0","border-style":"solid","border-color":"green",padding:"0","max-width":"150px"}},[t._v("\n              Amount IDR\n              ")]),t._v(" "),o("money",t._b({staticClass:"ml-5 mt-3",staticStyle:{"font-weight":"bold","font-size":"18px",padding:"0"},model:{value:t.totAmIdr,callback:function(e){t.totAmIdr=e},expression:"totAmIdr"}},"money",t.IDR,!1),[t._v("\n                "+t._s(t.totAmIdr)+"\n              ")])],1),t._v(" "),o("v-col",{staticStyle:{"border-width":"0 1px 0 0","border-style":"solid","border-color":"#b8b8b8"},attrs:{sm:"2",cols:"2"}},[o("v-card-title",{staticClass:"mr-3",staticStyle:{"font-size":"16px","border-width":"0 0 2px 0","border-style":"solid","border-color":"orange",padding:"0","max-width":"150px"}},[t._v("\n              Amount USD\n              ")]),t._v(" "),o("money",t._b({staticClass:"mt-3",staticStyle:{"font-weight":"bold","font-size":"18px",padding:"0"},model:{value:t.totAmUsd,callback:function(e){t.totAmUsd=e},expression:"totAmUsd"}},"money",t.USD,!1),[t._v("\n                "+t._s(t.totAmUsd)+"\n              ")])],1),t._v(" "),o("v-col",{staticStyle:{"border-width":"0 1px 0 0","border-style":"solid","border-color":"#b8b8b8"},attrs:{sm:"2",cols:"2"}},[o("v-card-title",{staticClass:"ml-5",staticStyle:{"font-size":"16px","border-width":"0 0 2px 0","border-style":"solid","border-color":"green",padding:"0","max-width":"150px"}},[t._v("\n              Total PPN IDR\n              ")]),t._v(" "),o("money",t._b({staticClass:"ml-5 mt-3",staticStyle:{"font-weight":"bold","font-size":"18px",padding:"0"},model:{value:t.totPPNIdr,callback:function(e){t.totPPNIdr=e},expression:"totPPNIdr"}},"money",t.IDR,!1),[t._v("\n                "+t._s(t.totPPNIdr)+"\n              ")])],1),t._v(" "),o("v-col",{staticStyle:{"border-width":"0 1px 0 0","border-style":"solid","border-color":"#b8b8b8"},attrs:{sm:"2",cols:"2"}},[o("v-card-title",{staticClass:"mr-3",staticStyle:{"font-size":"16px","border-width":"0 0 2px 0","border-style":"solid","border-color":"orange",padding:"0","max-width":"150px"}},[t._v("\n              Total PPN USD\n              ")]),t._v(" "),o("money",t._b({staticClass:"mt-3",staticStyle:{"font-weight":"bold","font-size":"18px",padding:"0"},model:{value:t.totPPNUsd,callback:function(e){t.totPPNUsd=e},expression:"totPPNUsd"}},"money",t.USD,!1),[t._v("\n                "+t._s(t.totPPNUsd)+"\n              ")])],1),t._v(" "),o("v-col",{staticStyle:{"border-width":"0 1px 0 0","border-style":"solid","border-color":"#b8b8b8"},attrs:{sm:"2",cols:"2"}},[o("v-card-title",{staticClass:"ml-5",staticStyle:{"font-size":"16px","border-width":"0 0 2px 0","border-style":"solid","border-color":"green",padding:"0","max-width":"150px"}},[t._v("\n              Total Amount IDR\n              ")]),t._v(" "),o("money",t._b({staticClass:"ml-5 mt-3",staticStyle:{"font-weight":"bold","font-size":"18px",padding:"0"},model:{value:t.amIdr,callback:function(e){t.amIdr=e},expression:"amIdr"}},"money",t.IDR,!1),[t._v("\n                "+t._s(t.amIdr)+"\n              ")])],1),t._v(" "),o("v-col",{attrs:{sm:"2",cols:"2"}},[o("v-card-title",{staticClass:"mr-3",staticStyle:{"font-size":"16px","border-width":"0 0 2px 0","border-style":"solid","border-color":"orange",padding:"0","max-width":"150px"}},[t._v("\n              Total Amount USD\n              ")]),t._v(" "),o("money",t._b({staticClass:"mt-3",staticStyle:{"font-weight":"bold","font-size":"18px",padding:"0"},model:{value:t.amUsd,callback:function(e){t.amUsd=e},expression:"amUsd"}},"money",t.USD,!1),[t._v("\n                "+t._s(t.amUsd)+"\n              ")])],1)],1)],1)],1)],1),t._v(" "),o("v-row",{staticClass:"ml-10 mr-10 mb-10"},[o("v-btn",t._g(t._b({staticClass:"mr-10",staticStyle:{"margin-left":"85%"},attrs:{dark:"",depressed:"",color:"error",height:"55px",to:"/admin/jo/detail/"+this.$route.query.id}},"v-btn",t.attrs,!1),t.on),[t._v("\n        Back\n      ")]),t._v(" "),o("v-btn",{staticStyle:{float:"right"},attrs:{type:"submit",depressed:"",color:"primary",height:"55px"}},[t._v("\n        Save\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:_.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCheckbox:x.a,VCol:y.a,VContainer:f.a,VDialog:h.a,VForm:w.a,VIcon:C.a,VListItem:k.a,VListItemAvatar:S.a,VListItemContent:P.a,VListItemTitle:P.b,VRow:R.a,VSelect:I.a,VSimpleTable:D.a,VSpacer:$.a,VTextField:U.a,VTextarea:z.a})}}]);