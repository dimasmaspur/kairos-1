<template>
  <div>
    <v-row>
      <v-col
        class="display-flex"
        sm="6"
        col='3'
      >
        <v-card
          max-width="80%"
          outlined
          class="mx-auto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4" style="color:#3273dc;">
                DATA JOB ORDER
                <hr>
              </div>
              <v-list-item-title class="headline mb-1">
                  <v-card-text
                    style="padding:1px;"
                  >
                    JO Date
                  </v-card-text>
                  <v-menu
                    ref="menu3"
                    v-model="menu3"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.created_at"
                        label="Picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="JO_date"
                      no-title
                      scrollable
                      disabled
                    >
                    </v-date-picker>
                  </v-menu>
                  <v-card-text
                    style="padding: 0px;"
                  >
                    Job Order Type
                  </v-card-text>
                  <v-radio-group
                    v-model="form.type"
                    row
                    readonly
                  >
                    <v-radio
                      label="Import"
                      value="import"
                    ></v-radio>
                    <v-radio
                      label="export"
                      value="export"
                    ></v-radio>
                  </v-radio-group>
              </v-list-item-title>
              <v-card-text
                style="padding: 0px;"
              >
                Agent
              </v-card-text>
              <v-select
                :items="agents"
                v-model="jo_data.agent"
                outlined
              ></v-select>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              height="30"
              width="200"
            >
              <!-- masih hardcode -->
              No: {{ form.jo_number }}
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        class="display-flex"
        sm="6"
        col='3'
      >
        <v-card
          class="mr-auto"
          max-width="80%"
          outlined
          height="388px"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4" style="color:#3273dc;">
                DATA QUOTATION
                <hr>
              </div>
              <v-card-text
                style="padding: 0px;"
              >
                Customer Name
              </v-card-text>
              <v-text-field
                class="mb-10"
                v-model="form.customer_name"
                :rules="rules"
                hide-details="auto"
                outlined
                readonly
              ></v-text-field>
              <v-list-item-title class="headline mb-1">
              </v-list-item-title>
              <v-text-field
                class="mb-10"
                label="Subject"
                v-model="form.subject"
                :rules="rules"
                hide-details="auto"
                outlined
                readonly
              ></v-text-field>
              <v-text-field
              label="Marketing"
              :rules="rules"
              hide-details="auto"
              outlined
              v-model="jo_data.marketing"
              ></v-text-field>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              height="30"
              width="200"
            >
              <!-- masih hardcode -->
              No: No Quote
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="display-flex"
        sm="12"
        col='3'
      >
        <v-card
          width="90%"
          class="mx-auto"
          outlined
          style="background-color:#f5f5fb; border:0px;"
        >
          <!-- <v-toolbar color="transparent" flat dense>
            <template v-slot:extension>
              <v-tabs
                v-model="currentItem"
                show-arrows
                :centered="$vuetify.breakpoint.mobile"
              >
                <v-tab
                  style="width: 181px"
                >
                  shish kabob
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar> -->
          <v-tabs
            v-model="tab"
            background-color="transparent"
            light
          >
            <v-tab
              class="mr-12"
            >
              Data
            </v-tab>
            <v-tab
              class="mr-12"
            >
              Invoice
            </v-tab>
            <v-tab
              class="mr-12"
            >
              Pay request
            </v-tab>
            <v-tab
              class="mr-12"
            >
              Debit noted
            </v-tab>
            <v-tab
              class="mr-12"
            >
              Credit noted
            </v-tab>
            <!-- data -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <v-form
                @submit.prevent='updateForm'
              >
                <hr
                  style="width:55%"
                >
                <v-row>
                  <v-col
                    sm="12"
                    md="6"
                  >
                    <v-card
                      class="mt-10"
                      width="80%"
                      outlined
                      style="background-color:#f5f5fb; border:0px;"
                    >
                      <v-btn
                        color="warning"
                        dark
                        v-if="disabled === 1"
                        @click="disabled = 0"
                      >
                        Edit This Job Order <v-icon> mdi-circle-edit-outline </v-icon>
                      </v-btn>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="3"
                    sm='6'
                  >
                    <v-card
                      class="mt-5 mb-5"
                      width="80%"
                      height='1638px'
                      outlined
                    >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <!-- <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
                          <v-row>
                            <v-col
                              cols="3"
                              sm='6'
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                B/L Number
                              </v-card-text>
                              <v-text-field
                                :disabled="disabled == 1"
                                v-model="jo_data.bl_number"
                                class="mb-5"
                                :rules="rules"
                                hide-details="auto"
                                outlined>
                              </v-text-field>
                            </v-col>
                            <v-col
                              cols="3"
                              sm='6'
                            >
                              <v-card-text
                                style="padding: 1px; opacity: 0;"
                              >
                                divider
                              </v-card-text>
                              <v-btn
                                depressed
                                color="primary"
                                class="ml-10 my-auto"
                                height='55px'
                                :disabled="disabled == 1"
                              >
                                Import from EDO
                                <v-icon
                                    right
                                    dark
                                  >
                                    mdi-import
                                  </v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            MBL Number
                          </v-card-text>
                          <v-text-field
                            class="mb-10"
                            :disabled="disabled == 1"
                            v-model="jo_data.mbl_number"
                            :rules="rules"
                            hide-details="auto"
                            outlined></v-text-field>
                          <v-card-text
                            style="padding: 0px;"
                          >
                            Freight type
                          </v-card-text>
                          <v-select
                            :disabled="disabled == 1"
                            :items="freight_type"
                            outlined
                            v-model="jo_data.freight_type"
                          ></v-select>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Shipment Number
                          </v-card-text>
                          <v-text-field class="mb-10" :disabled="disabled == 1" v-model="jo_data.shipment_number" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Freight note
                          </v-card-text>
                          <v-text-field :disabled="disabled == 1" class="mb-10" v-model="jo_data.freight_note" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Shipper
                          </v-card-text>
                          <v-textarea
                            solo
                            :disabled="disabled == 1"
                            outlined
                            name="shipper"
                            v-model="jo_data.shipper"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Consignee
                          </v-card-text>
                          <v-textarea
                            solo
                            :disabled="disabled == 1"
                            outlined
                            name="shipper"
                            v-model="jo_data.consignee"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Notify Party
                          </v-card-text>
                          <v-textarea
                            solo
                            :disabled="disabled == 1"
                            outlined
                            name="shipper"
                            v-model="jo_data.notify_party"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Agent
                          </v-card-text>
                          <v-textarea
                            solo
                            :disabled="disabled == 1"
                            outlined
                            name="shipper"
                            v-model="jo_data.agent"
                          ></v-textarea>
                          <v-row>
                            <v-col
                              cols="3"
                              sm='6'
                            >
                            <v-card-text
                              style="padding: 1px;"
                            >
                              Carriage
                            </v-card-text>
                            <v-text-field :disabled="disabled == 1" class="mb-10" v-model="jo_data.carriage" :rules="rules" hide-details="auto" outlined></v-text-field>
                            </v-col>
                            <v-col
                              cols="3"
                              sm='6'
                            >
                            <v-card-text
                              style="padding: 1px;"
                            >
                              Vessel
                            </v-card-text>
                            <v-text-field :disabled="disabled == 1" v-model="jo_data.vessel" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-card-actions>
                        <!-- <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn> -->
                      </v-card-actions>
                    </v-card>
                  </v-col>
                  <v-col
                    cols='3'
                    sm='6'
                  >
                    <v-card
                      class="mt-5 mb-5"
                      width="80%"
                      height='1638px'
                      outlined
                    >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <!-- <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
                          <v-row>
                            <v-col
                              cols="3"
                              sm='6'
                              class="mb-1"
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                ETD
                              </v-card-text>
                              <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    :disabled="disabled == 1"
                                    v-model="jo_data.ETD"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="jo_data.ETD" :max="jo_data.ETA" no-title scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                  <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col
                              cols="3"
                              sm='6'
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                ETA
                              </v-card-text>
                              <v-menu
                                ref="menu2"
                                v-model="menu2"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    :disabled="disabled == 1"
                                    v-model="jo_data.ETA"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="jo_data.ETA" :min="jo_data.ETD" no-title scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                                  <v-btn text color="primary" @click="$refs.menu2.save(date)">OK</v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-col>
                          </v-row>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Loading
                          </v-card-text>
                          <v-text-field :disabled="disabled == 1" v-model="jo_data.loading" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 0px;"
                          >
                            Receipt
                          </v-card-text>
                          <v-text-field :disabled="disabled == 1" v-model="jo_data.receipt" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Discharge
                          </v-card-text>
                          <v-text-field :disabled="disabled == 1" v-model="jo_data.discharge" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Delivery
                          </v-card-text>
                          <v-text-field :disabled="disabled == 1" v-model="jo_data.delivery" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Marks and number
                          </v-card-text>
                          <v-textarea
                            solo
                            :disabled="disabled == 1"
                            outlined
                            name="shipper"
                            v-model="jo_data.marks_and_number"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Description of goods
                          </v-card-text>
                          <v-textarea
                            solo
                            :disabled="disabled == 1"
                            outlined
                            name="shipper"
                            v-model="jo_data.description_of_goods"
                          ></v-textarea>
                          <v-row>
                            <v-col
                              sm='4'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                QTY
                              </v-card-text>
                              <v-text-field :disabled="disabled == 1" v-model="jo_data.quantity" :rules="rules" hide-details="auto" outlined></v-text-field>
                            </v-col>
                            <v-col
                              sm='5'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px; opacity: 0;"
                              >
                                DIVIDER
                              </v-card-text>
                              <v-select
                                :disabled="disabled == 1"
                                :items="desc"
                                outlined
                                label="package type"
                                v-model="jo_data.type_package"
                              ></v-select>
                            </v-col>
                            <v-col
                              sm='3'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px; opacity: 0;"
                              >
                                DIVIDER
                              </v-card-text>
                              <v-select
                                :disabled="disabled == 1"
                                :items="option_qty"
                                outlined
                                v-model="jo_data.option_qty"
                                label="qty option"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                              sm='8'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                No. Container
                              </v-card-text>
                              <v-text-field :disabled="disabled == 1" v-model="jo_data.no_container" :rules="rules" hide-details="auto" outlined></v-text-field>
                            </v-col>
                            <v-col
                              sm='4'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                QTY
                              </v-card-text>
                              <v-text-field :disabled="disabled == 1" type="number" v-model="jo_data.qty" :rules="rules" hide-details="auto" outlined></v-text-field>
                            </v-col>
                          </v-row>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Seal number
                          </v-card-text>
                          <v-text-field :disabled="disabled == 1" v-model="jo_data.seal_number" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Type
                          </v-card-text>
                          <v-select
                            :disabled="disabled == 1"
                            :items="type"
                            outlined
                            selected='20 GP'
                            v-model="jo_data.type"
                          ></v-select>
                          <v-row>
                            <v-col
                              sm='4'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                Measurement (M3)
                              </v-card-text>
                              <v-text-field :disabled="disabled == 1" v-model="jo_data.measurement" :rules="rules" hide-details="auto" outlined></v-text-field>
                            </v-col>
                            <v-col
                              sm='4'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                Net Weight (KGS)
                              </v-card-text>
                              <v-text-field
                                :disabled="disabled == 1"
                                type="number"
                                outlined
                                v-model="jo_data.net_weight"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              sm='4'
                              cols="3"
                            >
                              <v-card-text
                                style="padding: 1px;"
                              >
                                Gross Weight (KGS)
                              </v-card-text>
                              <v-text-field
                                :disabled="disabled == 1"
                                type="number"
                                outlined
                                v-model="jo_data.gross_weight"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-card-actions>
                        <!-- <v-btn text>Button</v-btn>
                        <v-btn text>Button</v-btn> -->
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-dialog
                    v-model="dialog_back"
                    width="280"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        depressed
                        color="error"
                        style="margin-left:70%"
                        height='55px'
                        class="mr-10"
                        to="/admin/jo"
                      >
                        Back
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                        Are you sure to leave this page?
                      </v-card-title>
                      <v-card-actions
                        class="mx-auto"
                      >
                        <v-btn
                          color="error"
                          class="mx-auto"
                          text
                          @click="dialog_back = false"
                        >
                          Cancel
                        </v-btn>
                        <NuxtLink to="/admin/jo">
                          <v-btn
                            class="error mx-auto"
                            text
                            @click="dialog_back = false"
                          >
                            Yes, leave
                          </v-btn>
                        </NuxtLink>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn
                    type="submit"
                    depressed
                    color="primary"
                    height='55px'
                    class="mb-10"
                  >
                    Save
                  </v-btn>
                </v-row>
              </v-form>
            </v-tab-item>
            <!-- invoice -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px; min-height: 150px; padding-bottom: 100px"
            >
              <hr
                style="width:55%"
              >
              <v-row>
                <v-col
                  cols="3"
                  sm='12'
                >
                  <v-card
                    class="mt-10 noshadow"
                    style="background-color:#f5f5fb; border:0px;"
                    outlined
                  >
                  </v-card>
                  <v-row>
                    <!-- invoice (masih di hardcode) -->
                    <Invoice
                      v-for="(req, i) in form.invoice"
                      :invoice="req"
                      ref="invoice"
                      :item = "item"
                      @getData = 'getData'
                      :data="form"
                      :key="i"
                      style="width:100%;"
                    />
                  </v-row>
                  <v-row>
                    <v-dialog
                      v-model="dialog"
                      persistent
                      max-width="1000px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          class="ml-3 mt-5"
                          v-bind="attrs"
                          v-on="on"
                        >
                          Add Item
                          <v-icon>
                            mdi-plus-circle
                          </v-icon>
                        </v-btn>
                      </template>
                        <!-- modal untuk create form -->
                      <v-card
                        style='overflow:hidden;'
                      >
                        <v-form
                          @submit.prevent="createInvoice"
                        >
                          <v-card-title>
                            <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Data Cost</span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col
                                  cols="12"
                                  sm="12"
                                >
                                  <v-select
                                    :items="data_costs"
                                    label="Item Cost"
                                    v-model="invoiceForm.item_cost"
                                    required
                                    style="margin-bottom:0;"
                                  ></v-select>
                                </v-col>
                                  <v-col
                                    sm='6'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:bold"
                                    >
                                      Unit
                                    </v-card-text>
                                    <v-select
                                      required
                                      :items="units"
                                      outlined
                                      style="margin-bottom:0;"
                                    ></v-select>
                                  </v-col>
                                  <v-col
                                    sm='6'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:bold"
                                    >
                                      Quantity
                                    </v-card-text>
                                    <v-text-field
                                      required
                                      outlined
                                      style="margin-bottom:0;"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col
                                    sm='6'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:bold"
                                    >
                                      Price
                                    </v-card-text>
                                    <v-text-field
                                      required
                                      outlined
                                      style="margin-bottom:0;"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col
                                    sm='6'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:bold; opacity:0;"
                                    >
                                      DIVIDER
                                    </v-card-text>
                                    <v-select
                                      required
                                      outlined
                                      label="currency"
                                      :items="currencies"
                                      style="margin-bottom:0;"
                                    ></v-select>
                                  </v-col>
                                  <!-- <v-col
                                    sm='2'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:bold; opacity:0;"
                                    >
                                      DIVIDER
                                    </v-card-text>
                                    <v-switch
                                      label="PPN"
                                    ></v-switch>
                                  </v-col> -->
                                  <v-col
                                    sm='12'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:500"
                                      class='mt-5'
                                    >
                                      Note
                                    </v-card-text>
                                    <v-textarea
                                      outlined
                                      v-model="invoiceForm.note"
                                    >
                                    </v-textarea>
                                  </v-col>
                                  <!-- <v-col
                                    sm='3'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:500"
                                      class='mt-5'
                                    >
                                      Kode
                                    </v-card-text>
                                    <v-select
                                      :items="Kode"
                                      label="Outlined style"
                                      outlined
                                    ></v-select>
                                  </v-col> -->
                              </v-row>
                            </v-container>
                            <!-- <small>*indicates required field</small> -->
                          </v-card-text>
                          <v-row>
                            <v-col
                              sm='12'
                              cols="2"
                            >
                              <hr
                                style="max-width:100%"
                              >
                            </v-col>
                          </v-row>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <!-- <NuxtLink to="/admin/jo/create"> -->
                              <v-btn
                                type="submit"
                                color="blue darken-1"
                                text
                              >
                                Save
                              </v-btn>
                            <!-- </NuxtLink> -->
                          </v-card-actions>
                        </v-form>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </v-col>
              </v-row>
            </v-tab-item>
            <!-- pay request -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <hr
                style="width:55%"
              >
              <v-row>
                <v-col>
                <v-btn
                  color="primary"
                  class="mt-5"
                  @click="create_payReq"
                >
                  Add pay request
                  <v-icon>
                    mdi-plus-circle-outline
                  </v-icon>
                </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  sm="12"
                  cols="3"
                >
                  <!-- tabel pay request -->
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th rowspan="2" class="text-center">
                            Date
                          </th>
                          <th rowspan="2" class="text-center">
                            PR Number
                          </th>
                          <th rowspan="2" class="text-center">
                            No.blanko
                          </th>
                          <th rowspan="2" class="text-center">
                            Customer Name
                          </th>
                          <th rowspan="2" class="text-center">
                            No. of Item
                          </th>
                          <th colspan="2" class="text-center">
                            Amount
                          </th>
                          <th rowspan="2" class="text-center">
                            Status
                          </th>
                          <th rowspan="2" class="text-center">
                            Action
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">IDR</th>
                          <th class="text-center">USD</th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="(req, i) in pay_request"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.createdAt }}</td>
                          <td class="text-center">{{ req.id_payrequest }}</td>
                          <td class="text-center">{{ req.no_blanko }}</td>
                          <td class="text-center">{{ req.vendor_name }}</td>
                          <td class="text-center">{{ req.CostPayRequests.length }}</td>
                          <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                          <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center">
                            <v-icon
                              @click="detailPayReq(req.id_payrequest)"
                            >
                              mdi-book-edit
                            </v-icon>
                            |
                            <v-icon
                              @click="printPayReq"
                            >
                              mdi-printer
                            </v-icon>
                            |
                            <v-dialog
                              v-model="dialog_delete"
                              width="290"
                              :retain-focus ="false"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  @click="destroy(req.id_payrequest)"
                                >
                                  mdi-delete
                                </v-icon>
                              </template>
                              <v-card>
                                <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                                  Are you sure to delete this item?
                                </v-card-title>
                                <v-card-actions
                                  class="mx-auto"
                                >
                                  <v-btn
                                    color="error"
                                    class="mx-auto"
                                    text
                                    @click="dialog_delete = false"
                                  >
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    class="error mx-auto"
                                    text
                                    @click="deletePayReq"
                                  >
                                    Yes, delete
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
                <v-card
                  class="mt-2"
                  width="50vh"
                  outlined
                >
                  <v-row
                    style="display: flex;"
                    class="mb-3 mt-3"
                  >
                    <v-col
                      sm='6'
                      cols="2"
                      style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
                    >
                      <v-card-title
                        style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                        class='ml-5'
                      >
                      Total Amount IDR
                      </v-card-title>
                      <v-card-text
                        style="font-weight:bold; font-size:18px; padding: 0"
                        class="ml-5 mt-3"
                      >
                        <money v-bind="IDR" v-model="totPayReqIDR"> {{ totPayReqIDR }} </money>
                      </v-card-text>
                    </v-col>
                    <v-col
                      sm='6'
                      cols="2"
                    >
                      <v-card-title
                        style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                        class='mr-3'
                      >
                      Total Amount USD
                      </v-card-title>
                      <v-card-text
                        style="font-weight:bold; font-size:18px; padding: 0"
                        class="mt-3"
                      >
                        <money v-bind="USD" v-model="totPayReqUSD"> {{ totPayReqUSD }} </money>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>
              <br>
              <v-row>
                <v-btn
                  depressed
                  color="error"
                  style="margin-left:80%"
                  height='55px'
                  class="mr-10 mt-10 mb-10"
                  to="/admin/jo"
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
            <!-- debit noted -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <hr
                style="width:55%"
              >
              <v-row>
                <v-col>
                  <v-btn
                    color="primary"
                    class="mt-5"
                    @click="some_method"
                  >
                    Add debit noted
                    <v-icon>
                      mdi-plus-circle-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  sm="12"
                  cols="3"
                >
                  <!-- tabel debit noted -->
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th rowspan="2" class="text-center">
                            Date
                          </th>
                          <th rowspan="2" class="text-center">
                            DN Number
                          </th>
                          <th rowspan="2" class="text-center">
                            No.blanko
                          </th>
                          <th rowspan="2" class="text-center">
                            Customer Name
                          </th>
                          <th rowspan="2" class="text-center">
                            Total Item
                          </th>
                          <th colspan="2" class="text-center">
                            Amount
                          </th>
                          <th rowspan="2" class="text-center">
                            Status
                          </th>
                          <th rowspan="2" class="text-center">
                            Action
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">IDR</th>
                          <th class="text-center">USD</th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="(req, i) in debit_noted"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.createdAt }}</td>
                          <td class="text-center">{{ req.id_debit_note }}</td>
                          <td class="text-center">{{ req.no_blanko }}</td>
                          <td class="text-center">{{ req.agent_name }}</td>
                          <td class="text-center">{{ req.DebitNoteCosts.length }}</td>
                          <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                          <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center">
                            <v-icon
                              @click="detailDebtNote(req.id_debit_note)"
                            >
                              mdi-book-edit
                            </v-icon>
                            |
                            <v-icon
                              @click="printPayReq"
                            >
                              mdi-printer
                            </v-icon>
                            |
                            <v-dialog
                              v-model="dialog_delete"
                              width="290"
                              :retain-focus ="false"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  @click="destroy(req.id_debit_note)"
                                >
                                  mdi-delete
                                </v-icon>
                              </template>
                              <v-card>
                                <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                                  Are you sure to delete this item?
                                </v-card-title>
                                <v-card-actions
                                  class="mx-auto"
                                >
                                  <v-btn
                                    color="error"
                                    class="mx-auto"
                                    text
                                    @click="dialog_delete = false"
                                  >
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    class="error mx-auto"
                                    text
                                    @click="deleteDebNot"
                                  >
                                    Yes, delete
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
                <v-card
                  class="mt-2"
                  width="50vh"
                  outlined
                >
                  <v-row
                    style="display: flex;"
                    class="mb-3 mt-3"
                  >
                    <v-col
                      sm='6'
                      cols="2"
                      style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
                    >
                      <v-card-title
                        style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                        class='ml-5'
                      >
                      Total Amount IDR
                      </v-card-title>
                      <v-card-text
                        style="font-weight:bold; font-size:18px; padding: 0"
                        class="ml-5 mt-3"
                      >
                        <money v-bind="IDR" v-model="totDebNotIDR">{{ totDebNotIDR }}</money>
                      </v-card-text>
                    </v-col>
                    <v-col
                      sm='6'
                      cols="2"
                    >
                      <v-card-title
                        style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                        class='mr-3'
                      >
                      Total Amount USD
                      </v-card-title>
                      <v-card-text
                        style="font-weight:bold; font-size:18px; padding: 0"
                        class="mt-3"
                      >
                        <money v-bind="USD" v-model="totDebNotUSD">{{ totDebNotUSD }}</money>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>
              <br>
              <v-row>
                <v-btn
                  depressed
                  color="error"
                  style="margin-left:80%"
                  height='55px'
                  class="mr-10 mt-10 mb-10"
                  to="/admin/jo"
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
            <!-- credit noted -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <hr
                style="width:55%"
              >
              <v-row>
                <v-col>
                <v-btn
                  color="primary"
                  class="mt-5"
                  @click="create_credNote"
                >
                  Add Credit Noted
                  <v-icon>
                    mdi-plus-circle-outline
                  </v-icon>
                </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  sm="12"
                  cols="3"
                >
                  <!-- tabel credit noted -->
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th rowspan="2" class="text-center">
                            Date
                          </th>
                          <th rowspan="2" class="text-center">
                            CN Number
                          </th>
                          <th rowspan="2" class="text-center">
                            No.blanko
                          </th>
                          <th rowspan="2" class="text-center">
                            Customer Name
                          </th>
                          <th rowspan="2" class="text-center">
                            Total Item
                          </th>
                          <th colspan="2" class="text-center">
                            Amount
                          </th>
                          <th rowspan="2" class="text-center">
                            Status
                          </th>
                          <th rowspan="2" class="text-center">
                            Action
                          </th>
                        </tr>
                        <tr>
                          <th class="text-center">IDR</th>
                          <th class="text-center">USD</th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="(req, i) in credit_noted"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.createdAt }}</td>
                          <td class="text-center">{{ req.id_credit_note }}</td>
                          <td class="text-center">{{ req.no_blanko }}</td>
                          <td class="text-center">{{ req.agent_name }}</td>
                          <td class="text-center">{{ req.CreditNoteCosts.length }}</td>
                          <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                          <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center"><v-icon
                              @click="detailDebtNote(req.id_credit_note)"
                            >
                              mdi-book-edit
                            </v-icon>
                            |
                            <v-icon
                              @click="printPayReq"
                            >
                              mdi-printer
                            </v-icon>
                            |
                            <v-dialog
                              v-model="dialog_delete"
                              width="290"
                              :retain-focus ="false"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  @click="destroy(req.id_credit_note)"
                                >
                                  mdi-delete
                                </v-icon>
                              </template>
                              <v-card>
                                <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                                  Are you sure to delete this item?
                                </v-card-title>
                                <v-card-actions
                                  class="mx-auto"
                                >
                                  <v-btn
                                    color="error"
                                    class="mx-auto"
                                    text
                                    @click="dialog_delete = false"
                                  >
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    class="error mx-auto"
                                    text
                                    @click="deleteCreNot"
                                  >
                                    Yes, delete
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
                <v-card
                  class="mt-2"
                  width="50vh"
                  outlined
                >
                  <v-row
                    style="display: flex;"
                    class="mb-3 mt-3"
                  >
                    <v-col
                      sm='6'
                      cols="2"
                      style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
                    >
                      <v-card-title
                        style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                        class='ml-5'
                      >
                        Total Amount IDR
                      </v-card-title>
                      <v-card-text
                        style="font-weight:bold; font-size:18px; padding: 0"
                        class="ml-5 mt-3"
                      >
                        <money v-bind="IDR" v-model="totCreNotIDR"> {{ totCreNotIDR }} </money>
                      </v-card-text>
                    </v-col>
                    <v-col
                      sm='6'
                      cols="2"
                    >
                      <v-card-title
                        style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                        class='mr-3'
                      >
                        Total Amount USD
                      </v-card-title>
                      <v-card-text
                        style="font-weight:bold; font-size:18px; padding: 0"
                        class="mt-3"
                      >
                        <money v-bind="IDR" v-model="totCreNotUSD"> {{ totCreNotUSD }} </money>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>
              <br>
              <v-row>
                <v-btn
                  depressed
                  color="error"
                  style="margin-left:80%"
                  height='55px'
                  class="mr-10 mt-10 mb-10"
                  to="/admin/jo"
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {Money} from 'v-money'
import Invoice from '~/components/Invoice'
export default {
  name: 'create form',
  meta: {
    crumbs: [
      {
        text: 'Job Order',
        to: '/admin/jo',
        disabled: false
      },
      {
        text: 'Detail Job Order',
        to: '/admin/jo/detail',
        disabled: true
      }
    ]
  },
  middleware: 'adminscl',
  components: {
    Invoice,
    Money
  },
  // data: () => ({
  //   date: null,
  //   menu: false,
  //   items: [
  //     '1', '2', '3', '4', '5', '6'
  //   ],
  //   benched: 4,
  //   payRequest: ['1', '2', '3'],
  //   creditNoted: ['1', '2', '3'],
  //   debitNoted: ['1', '2', '3']
  //   // customerName: this.$store.state.JOForm.name,
  //   // jobOrderType: this.$store.state.JOForm.JOType,
  //   // subject: this.$store.state.JOForm.subject,
  //   // termsOfPayment: this.$store.state.JOForm.terms
  // }),
  data () {
    return {
      disabled: 1,
      pay_request: [],
      menu: false,
      USD: {
        decimal: ',',
        thousands: '.',
        prefix: '$ ',
        precision: 2,
        masked: false
      },
      IDR: {
        decimal: ',',
        thousands: '.',
        prefix: 'Rp ',
        precision: 2,
        masked: false
      },
      totPayReqIDR: 0,
      totPayReqUSD: 0,
      totDebNotIDR: 0,
      totDebNotUSD: 0,
      totCreNotIDR: 0,
      totCreNotUSD: 0,
      dialog_delete: false,
      edit: false,
      freight_type: ['PREPAID', 'COLLECT'],
      benched: 4,
      type: ['20 FR', '20 GP', '20 OT', '20 RF', '20 STD', '40FR', '40 HC', '40 HQ', '40 OT', '40 RF', '40 STD', '40FR&20OT', 'LCL'],
      menu2: false,
      menu3: false,
      desc: [
        'Bag', 'Bale', 'BINS', 'Box', 'Bundle',
        'Cage', 'Carton', 'Carton Box', 'Carton Boxes', 'Case', 'Coil', 'Colly', 'Crate',
        'Drum',
        'Intermediate Bulk', 'Iron Box',
        'JERRICAN',
        'Liftvan',
        'Metal Case',
        'Package', 'Pallet', 'Plastic Pallet', 'Plywood Case',
        'Roll',
        'Set', 'Skid', 'Steel Box',
        'Unit',
        'Wooden', 'Wooden Box', 'Wooden Case', 'Wooden Crate', 'Wooden Pallet'
      ],
      option_qty: ['FCL', 'LCL'],
      dialog: false,
      dialog_back: false,
      agents: [],
      data_costs: [],
      Kode: ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015'],
      form: {},
      id_payReq: 0,
      invoiceForm: {},
      //   jo_number: this.form.jo_number,
      //   kode: jo_invoice.length + 1,
      //   invoice_to: ''
      //   // belum selesai list nya
      // },
      jo_data: {},
      jo_invoice: [],
      invoice: [],
      debit_noted: [],
      credit_noted: [],
      currencies: ['IDR', 'USD'],
      units: ['Buruh', 'Coil', 'Colly', 'Container', 'Doc', 'Kg', 'M3', 'Trip', 'Unit']
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    async createInvoice () {
      this.invoiceForm.kode = this.form.invoice.length + 1
      this.invoiceForm.kode = this.invoiceForm.kode.toString()
      this.invoiceForm.invoice_to = this.form.customer_name
      this.invoiceForm.jo_number = this.form.jo_number
      this.invoiceForm.no_blanko = 'no data'
      this.invoiceForm.ppn_idr = 0
      this.invoiceForm.ppn_usd = 0
      this.invoiceForm.biaya_materai = 0
      console.log(this.invoiceForm, 'ini yang dibawa bro untuk bikin invoice')
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.post('jo-invoice', this.invoiceForm)
        if (response.status === 200) {
          this.$toast.clear()
          this.dialog = false
          // this.getIC()
          // this.$refs.invoice[0].getIC()
          console.log(this.$refs.invoice, 'ini child component invoice')
          this.$toast.global.app_success('successfully created new invoice')
          this.getData()
        }
      } catch (error) {
        console.log(error, 'ini errornya data-cost')
        this.$toast.clear()
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create invoice, ${message}`)
      }
    },
    some_method () {
      console.log('<--------- testing')
      this.$router.push({ path: '/admin/jo/debit-noted/?jo_number=' + this.form.jo_number + '&id=' + this.$route.params.id })
    },
    create_payReq () {
      this.$router.push({ path: '/admin/jo/pay-request/?jo_number=' + this.form.jo_number + '&id=' + this.$route.params.id })
    },
    create_credNote () {
      this.$router.push({ path: '/admin/jo/credit-noted/?jo_number=' + this.form.jo_number + '&id=' + this.$route.params.id })
    },
    save (date) {
      this.$refs.menu.save(date)
    },
    async getCosts () {
      try {
        const response = await this.$axios.get('data-cost')
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil get data cost')
          data.forEach((el) => {
            this.data_costs.push(el.cost_name)
          })
        }
      } catch (error) {
        console.log(error, 'ini errornya data-cost')
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data costs ${message}`)
      }
    },
    async updateForm () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.put('jo-data/' + this.jo_data.id, this.jo_data)
        if (response.status === 200) {
          const { data } = response.data
          this.disabled = 1
          this.$toast.clear()
          this.$toast.global.app_success('successfully updated this job data')
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to update JO Data ${message}`)
      }
    },
    async getData () {
      this.totPayReqIDR = 0
      this.totPayReqUSD = 0
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('job-order/' + this.$route.params.id)
        if (response.status === 200) {
          this.$toast.clear()
          // this.getIC()
          const { data } = response.data
          data.joData[0].freight_type = data.joData[0].freight_type.toUpperCase()
          console.log(data, 'ini data hasil penembakkan awal')
          data.created_at = data.created_at.slice(0, 10)
          data.joData[0].ETA = data.joData[0].ETA.slice(0, 10)
          data.joData[0].ETD = data.joData[0].ETD.slice(0, 10)
          this.form = data
          this.jo_data = data.joData[0]
          data.joPayRequest.map((el) => {
            el.createdAt = el.createdAt.slice(0, 10)
            el.priceIDR = 0
            el.priceUSD = 0
            el.CostPayRequests.forEach((e) => {
              if (e.currency === 'IDR') {
                el.priceIDR += e.price * e.quantity
              } else {
                el.priceUSD += e.price * e.quantity
              }
            })
            el.CostPayRequests.forEach((e) => {
              if (e.currency === 'IDR') {
                this.totPayReqIDR += e.price * e.quantity
              } else {
                this.totPayReqUSD += e.price * e.quantity
              }
            })
          })
          data.joDebitNote.map((el) => {
            el.createdAt = el.createdAt.slice(0, 10)
            el.priceIDR = 0
            el.priceUSD = 0
            el.DebitNoteCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                el.priceIDR += e.price * e.quantity
              } else {
                el.priceUSD += e.price * e.quantity
              }
            })
            el.DebitNoteCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                this.totDebNotIDR += e.price * e.quantity
              } else {
                this.totDebNotUSD += e.price * e.quantity
              }
            })
          })
          data.joCreditNote.map((el) => {
            el.createdAt = el.createdAt.slice(0, 10)
            el.priceIDR = 0
            el.priceUSD = 0
            el.CreditNoteCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                el.priceIDR += e.price * e.quantity
              } else {
                el.priceUSD += e.price * e.quantity
              }
            })
            el.CreditNoteCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                this.totCreNotIDR += e.price * e.quantity
              } else {
                this.totCreNotUSD += e.price * e.quantity
              }
            })
          })
          this.pay_request = data.joPayRequest
          this.debit_noted = data.joDebitNote
          this.credit_noted = data.joCreditNote
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load JO Data ${message}`)
      }
    },
    async getAgents () {
      try {
        const response = await this.$axios.get('data-partner')
        if (response.status === 200) {
          const { data } = response.data
          data.forEach((element) => {
            this.agents.push(element.company_name)
          })
          console.log(data, 'ini data-partner')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load all data partners ${message}`)
      }
    },
    detailPayReq (id) {
      this.$router.push({ path: '/admin/jo/pay-request/' + id + '/?id=' + this.$route.params.id })
    },
    printPayReq () {
      console.log('dia ngeprint bro')
    },
    destroy (id) {
      this.id_payReq = id
      console.log(id, 'ini id nya bro')
    },
    async deletePayReq () {
      try {
        const response = await this.$axios.delete('jo-payrequest/' + this.id_payReq)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil delete data')
          this.dialog_delete = false
          this.getData()
        }
      } catch {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete pay request ${message}`)
      }
    },
    async deleteDebNot () {
      try {
        const response = await this.$axios.delete('jo-debitnote/' + this.id_payReq)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil delete data')
          this.dialog_delete = false
          this.getData()
        }
      } catch {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete debit note ${message}`)
      }
    },
    detailDebtNote (id) {
      this.$router.push({ path: '/admin/jo/debit-noted/' + id + '/?id=' + this.$route.params.id })
    },
    printDebtNote () {
      console.log('dia ngeprint bro')
    },
    detailCreNot (id) {
      this.$router.push({ path: '/admin/jo/credit-noted/' + id + '/?id=' + this.$route.params.id })
    },
    printCreNot () {
      console.log('dia ngeprint bro')
    },
    async deleteCreNot () {
      try {
        const response = await this.$axios.delete('jo-creditnote/' + this.id_payReq)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil delete data')
          this.dialog_delete = false
          this.getData()
        }
      } catch {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete debit note ${message}`)
      }
    }
  },
  created () {
    this.getData()
    this.getAgents()
    this.getCosts()
  }
}
</script>

<style lang='scss' scoped>
a.v-tab.v-tab--active {
  background-color: #FFFFFF !important;
}

</style>
