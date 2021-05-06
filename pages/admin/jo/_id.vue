<template>
  <div>
    <v-row>
      <v-col
        sm='11'
        class="mx-auto"
        col='3'
      >
        <base-alert
          v-if="created === true"
          :status="true"
        >
          Data Saved
        </base-alert>
      </v-col>
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
                <!-- <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="JO Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu> -->
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
                        v-model="job_order.created_at"
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
                    v-model="job_order.type"
                    row
                    readonly
                  >
                    <v-radio
                      label="export"
                      value="export"
                    ></v-radio>
                    <v-radio
                      label="Import"
                      value="import"
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
                outlined
              ></v-select>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              height="30"
              width="200"
            >
              <!-- masih hardcode -->
              No: {{ job_order.jo_number }}
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
          height="364px"
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
                v-model="job_order.customer_name"
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
                v-model="job_order.subject"
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
              v-model="form.marketing"
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
            grow='true'
          >
            <v-tab>
              Data
            </v-tab>
            <v-tab>
              Invoice
            </v-tab>
            <v-tab>
              Pay request
            </v-tab>
            <v-tab>
              Debit noted
            </v-tab>
            <v-tab>
              Credit noted
            </v-tab>
            <!-- data -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <v-form
                @submit.prevent='createForm'
              >
                <hr>
                <v-row>
                  <v-col
                    cols="3"
                    sm='6'
                  >
                    <v-card
                      class="mx-auto mt-10 mb-5"
                      width="80%"
                      height='1667px'
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
                                v-model="form.bl_number"
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
                          <v-text-field class="mb-10" v-model="form.mbl_number" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 0px;"
                          >
                            Freight type
                          </v-card-text>
                          <v-select
                            :items="freight_type"
                            outlined
                            v-model="form.freight_type"
                          ></v-select>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Shipment Number
                          </v-card-text>
                          <v-text-field class="mb-10" v-model="form.shipment_number" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Freight note
                          </v-card-text>
                          <v-text-field class="mb-10" v-model="form.freight_note" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Shipper
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
                            v-model="form.shipper"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Consignee
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
                            v-model="form.consignee"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Notify Party
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
                            v-model="form.notify_party"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Agent
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
                            v-model="form.agent"
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
                            <v-text-field class="mb-10" v-model="form.carriage" :rules="rules" hide-details="auto" outlined></v-text-field>
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
                            <v-text-field v-model="form.vessel" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
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
                      class="mr-auto mt-10 mb-5"
                      width="80%"
                      height="1667px"
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
                                    v-model="form.ETD"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="form.ETD" :max="form.ETA" no-title scrollable>
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
                                    v-model="form.ETA"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="form.ETA" :min="form.ETD" no-title scrollable>
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
                          <v-text-field v-model="form.loading" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 0px;"
                          >
                            Receipt
                          </v-card-text>
                          <v-text-field v-model="form.receipt" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Discharge
                          </v-card-text>
                          <v-text-field v-model="form.discharge" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Delivery
                          </v-card-text>
                          <v-text-field v-model="form.delivery" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Marks and number
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
                            v-model="form.marks_and_number"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Description of goods
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
                            v-model="form.description_of_goods"
                          ></v-textarea>
                          <!-- <v-card-text
                            style="padding: 1px;"
                          >
                            Notify Party
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
                          ></v-textarea>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Agent
                          </v-card-text>
                          <v-textarea
                            solo
                            outlined
                            name="shipper"
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
                            <v-text-field class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
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
                            <v-text-field class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field> -->
                            <!-- </v-col>
                          </v-row> -->
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
                              <v-text-field v-model="form.quantity" :rules="rules" hide-details="auto" outlined></v-text-field>
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
                                :items="desc"
                                outlined
                                label="package type"
                                v-model="form.type_package"
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
                                :items="option_qty"
                                outlined
                                v-model="form.option_qty"
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
                              <v-text-field v-model="form.no_container" :rules="rules" hide-details="auto" outlined></v-text-field>
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
                              <v-text-field type="number" v-model="form.qty" :rules="rules" hide-details="auto" outlined></v-text-field>
                            </v-col>
                          </v-row>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Seal number
                          </v-card-text>
                          <v-text-field v-model="form.seal_number" class="mb-10" :rules="rules" hide-details="auto" outlined></v-text-field>
                          <v-card-text
                            style="padding: 1px;"
                          >
                            Type
                          </v-card-text>
                          <v-select
                            :items="type"
                            outlined
                            selected='20 GP'
                            v-model="form.type"
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
                              <v-text-field v-model="form.measurement" :rules="rules" hide-details="auto" outlined></v-text-field>
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
                                v-model="form.net_weight"
                                :rules="rules"
                                type="number"
                                hide-details="auto"
                                outlined></v-text-field>
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
                                v-model="form.gross_weight"
                                :rules="rules"
                                type="number"
                                hide-details="auto"
                                outlined></v-text-field>
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
              style="background-color:#f5f5fb; border:0px;"
            >
              <hr>
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
                            class="ml-3"
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
                                  <v-text-field
                                    label="Item Cost"
                                    required
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
                                      Unit
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
                                    sm='4'
                                    cols="3"
                                  >
                                    <v-card-text
                                      style="padding:0;font-size:16px ;font-weight:bold; opacity:0;"
                                    >
                                      DIVIDER
                                    </v-card-text>
                                    <v-text-field
                                      required
                                      outlined
                                      label="currency"
                                      style="margin-bottom:0;"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col
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
                                  </v-col>
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
                                    >
                                    </v-textarea>
                                  </v-col>
                                  <v-col
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
                                  </v-col>
                                <!-- <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    label="Legal middle name"
                                    hint="example of helper text only on focus"
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                                >
                                  <v-text-field
                                    label="Legal last name*"
                                    hint="example of persistent helper text"
                                    persistent-hint
                                    required
                                  ></v-text-field>
                                </v-col> -->
                                <!-- <v-col cols="12">
                                  <v-text-field
                                    label="Email*"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Password*"
                                    type="password"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="6"
                                >
                                  <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Age*"
                                    required
                                  ></v-select>
                                </v-col>
                                <v-col
                                  cols="12"
                                  sm="6"
                                >
                                  <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests"
                                    multiple
                                  ></v-autocomplete>
                                </v-col> -->
                                <v-divider />
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
                                color="blue darken-1"
                                text
                                @click="formTest"
                              >
                                Save
                              </v-btn>
                            <!-- </NuxtLink> -->
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <!-- <NuxtLink to="/admin/jo/create"> -->
                        <!-- <CreateForm /> -->
                        <!-- <base-button type="button" style="display:flex; margin-right:auto;" color="blue" icon="add" :actions="someMethod">
                          Create Job Order
                        </base-button>
                      </NuxtLink> -->
                      <!-- <v-text-field
                        v-model="search"
                        style="max-width: 200px; margin-left:auto;"
                        prepend-inner-icon="mdi-magnify"
                        label="Search here..."
                        solo
                        clearable
                        hide-details
                      />
                      <v-select
                          v-model="value"
                          style="max-width: 150px; padding: 0px; margin: 0px; margin-left: 50px; max-height: 50px"
                          chips
                          solo
                          label="Row page"
                        ></v-select> -->
                      <v-btn
                        color="warning"
                        dark
                        class="ml-5"
                      >
                        New Revised
                        <v-icon>
                          mdi-refresh
                        </v-icon>
                      </v-btn>
                      <v-btn
                        class="ml-5"
                      >
                        Checklist All item PPN
                        <v-icon>
                          mdi-check-circle-outline
                        </v-icon>
                      </v-btn>
                      <v-btn
                        class="ml-5"
                        style="background-color:#ffffff;"
                      >
                        Uncheck All item PPN
                        <v-icon>
                          mdi-checkbox-blank-circle-outline
                        </v-icon>
                      </v-btn>
                    </v-row>
                  </v-card>
                  <v-row>
                    <!-- invoice (masih di hardcode) -->
                    <Invoice
                      v-for="(item, i) in items"
                      :key="i"
                      style="width:100%;"
                    />
                  </v-row>
                </v-col>
              </v-row>
            </v-tab-item>
            <!-- pay request -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <hr/>
              <v-row>
                <v-col>
                <v-btn
                  color="primary"
                  class="mt-5"
                  to="/admin/jo/pay-request"
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
                        v-for="(req, i) in payRequest"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">28-12-2020</td>
                          <td class="text-center">-</td>
                          <td class="text-center">001</td>
                          <td class="text-center">PT.CLEVARA INOVASI DIGITAL</td>
                          <td class="text-center">2</td>
                          <td class="text-center">100.00</td>
                          <td class="text-center">0</td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center"><v-icon>mdi-note-edit-outline</v-icon><v-icon>mdi-printer</v-icon><v-icon>mdi-delete</v-icon></td>
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
                        0
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
                        0
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
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
            <!-- debit noted -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <hr/>
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
                        v-for="(req, i) in debitNoted"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">28-12-2020</td>
                          <td class="text-center">-</td>
                          <td class="text-center">001</td>
                          <td class="text-center">PT.CLEVARA INOVASI DIGITAL</td>
                          <td class="text-center">2</td>
                          <td class="text-center">100.00</td>
                          <td class="text-center">0</td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center"><v-icon>mdi-note-edit-outline</v-icon><v-icon>mdi-printer</v-icon><v-icon>mdi-delete</v-icon></td>
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
                        0
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
                        0
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
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
            <!-- credit noted -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <hr/>
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
                        v-for="(req, i) in creditNoted"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.createdAt }}</td>
                          <td class="text-center">{{ req.id_credit_note }}</td>
                          <td class="text-center">{{ req.no_blanko }}</td>
                          <td class="text-center">{{ req.agent_name }}</td>
                          <td class="text-center">2</td>
                          <td class="text-center">{{ req.ppn_idr }}</td>
                          <td class="text-center">{{ req.ppn_usd }}</td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center"><v-icon>mdi-note-edit-outline</v-icon><v-icon>mdi-printer</v-icon><v-icon>mdi-delete</v-icon></td>
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
                        0
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
                        0
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
import Invoice from '~/components/Invoice'
import baseAlert from '~/components/Base/Alert'

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
        text: 'Create form',
        to: '/admin/jo/create',
        disabled: true
      }
    ]
  },
  middleware: 'adminscl',
  components: {
    Invoice,
    baseAlert
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
      menu: false,
      items: [
        '1', '2', '3', '4', '5', '6'
      ],
      freight_type: ['PREPAID', 'COLLECT'],
      benched: 4,
      type: ['20 FR', '20 GP', '20 OT', '20 RF', '20 STD', '40FR', '40 HC', '40 HQ', '40 OT', '40 RF', '40 STD', '40FR&20OT', 'LCL'],
      menu2: false,
      payRequest: ['1', '2', '3'],
      creditNoted: ['1', '2', '3'],
      debitNoted: ['1', '2', '3'],
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
      Kode: ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015'],
      job_order: {},
      form: {
        bl_number: '',
        mbl_number: '',
        freight_type: '',
        shipment_number: '',
        consignee: '',
        notify_party: '',
        agent: '',
        carriage: '',
        vessel: '',
        ETD: '',
        ETA: '',
        loading: '',
        receipt: '',
        discharge: '',
        delivery: '',
        marks_and_number: '',
        description_of_goods: '',
        quantity: '',
        type_package: '',
        option_qty: '',
        no_container: '',
        freight_note: '',
        shipper: '',
        qty: '',
        seal_number: '',
        type: '',
        measurement: '',
        net_weight: '',
        gross_weight: '',
        marketing: '',
        creator: this.$auth.user.name
      },
      agents: []
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  created () {
    this.getAgents()
    this.getData()
  },
  methods: {
    some_method () {
      this.$router.push({ path: '/admin/jo/debit-noted/?jo_number=' + this.form.jo_number })
    },
    create_payReq () {
      this.$router.push({ path: '/admin/jo/pay-request/?jo_number=' + this.form.jo_number })
    },
    create_credNote () {
      this.$router.push({ path: '/admin/jo/credit-noted/?jo_number=' + this.form.jo_number })
    },
    save (date) {
      this.$refs.menu.save(date)
    },
    async createForm (e) {
      e.preventDefault()
      try {
        this.form.jo_number = this.job_order.jo_number
        const response = await this.$axios.post('jo-data', this.form)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data)
          this.$router.push({ path: '/admin/jo/detail/' + this.$route.params.id })
          this.$toast.global.app_success('JO Data succesfully created.')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create JO Data ${message}`)
      }
      // this.form.jo_number = this.job_order.jo_number
      // console.log(this.form, 'ini data form bro')
      // this.$store.dispatch('CreateJO_DATA', this.form)
      //   .then(function (response) {
      //     this.created = true
      //     console.log(response, 'INI HASIL PEMBUATAN JO-DATA')
      //     this.$router.push({ path: '/admin/jo/detail/' + this.$route.params.id })
      //   })
      //   .catch(function (error) {
      //     console.log(error, 'ini errornya')
      //     const response = error.response.data
      //     const message =
      //       response && response.message && ` , ${response.message}`
      //     this.$toast.global.app_error(`Failed to create JO Data, ${message}`)
      //   })
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
    async getData () {
      try {
        const response = await this.$axios.get('job-order/' + this.$route.params.id)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil nembak job order')
          data.created_at = data.created_at.slice(0, 10)
          this.job_order = data
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data ${message}`)
      }
    }
  },
  computed: {
    JO_NUMBER () {
      return this.$store.state.JO_number
    },
    JO_date () {
      return this.$store.state.JO_date
    },
    created () {
      return false
    }
  }
}
</script>

<style lang='scss' scoped>
a.v-tab.v-tab--active {
  background-color: #FFFFFF !important;
}

</style>
