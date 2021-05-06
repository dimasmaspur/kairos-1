<template>
  <v-row class="ml-10 mr-10">
    <v-col
      sm="12"
      cols="3"
    >
      <v-form
        @submit.prevent="update"
      >
        <v-col
          sm="12"
          md='6'
        >   
        <v-card
          max-width="100%"
          outlined
          class="mx-auto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline" style="color:#3273dc;">
                DATA VENDOR
              </div>
              <hr class="mb-4">
              <v-list-item-title class="headline mb-1">
                <v-row>
                  <v-col
                    sm='12'
                    cols="2"
                  >
                    <v-card-text
                      style="padding:1px;font-size: 16px"
                    >
                      Agent Name
                    </v-card-text>
                    <v-select
                      :items="agents"
                      outlined
                      v-model="RE.agent_name"
                    >
                    </v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    sm="6"
                    cols="2"
                  >
                    <v-card-text
                      style="padding:1px;font-size: 16px"
                    >
                      No. Blanko
                    </v-card-text>
                    <v-text-field
                      outlined
                      v-model="RE.no_blanko"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    sm="6"
                    cols="2"
                  >
                    <v-card-text
                      style="padding:1px;font-size: 16px"
                    >
                      PPN (IDR) %
                    </v-card-text>
                    <v-text-field
                      outlined
                      type="number"
                      min='0'
                      max='100'
                      v-model="RE.ppn_idr"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    sm="6"
                    cols="2"
                  >
                    <v-card-text
                      style="padding:1px;font-size: 16px"
                    >
                      PPN (USD) %
                    </v-card-text>
                    <v-text-field
                      outlined
                      type="number"
                      min='0'
                      max='100'
                      v-model="RE.ppn_usd"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-list-item-title>
              <v-switch
                v-model="DN"
                label="View account in DN"
              ></v-switch>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              height="30"
              width="200"
            >
              JO Number: {{ RE.joc_number }}
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
          </v-card-actions>
        </v-card>
        </v-col>
        <v-row>
        <v-col
          sm="1"
          cols="2"
        >
          <v-dialog
            v-model="dialog"
            persistent
            max-width="1000px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Add Cost
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
                @submit="createREC"
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
                      <v-card-text
                        class="font-weight-bold"
                        style="padding: 2px; font-weight: bold; font-size: 16px"
                      >
                        Item Cost
                      </v-card-text>
                      <v-select
                        :items="data_costs"
                        outlined
                        v-model="cost.item_cost"
                      ></v-select>
                    </v-col>
                      <v-col
                        sm='6'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Unit
                        </v-card-text>
                        <v-select
                          :items="units"
                          outlined
                          v-model="cost.unit"
                        ></v-select>
                      </v-col>
                      <v-col
                        sm='6'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Quantity
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="cost.quantity"
                          type="number"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        sm='6'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                          class='mt-5'
                        >
                          Price
                        </v-card-text>
                        <v-text-field
                          outlined
                          type="number"
                          v-model="cost.price"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        sm='3'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:0;font-size:16px ;font-weight:500; opacity: 0;"
                          class='mt-5'
                        >
                          DIVIDER
                        </v-card-text>
                        <v-select
                          :items="currencies"
                          v-model="cost.currency"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col
                        sm='2'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:0;font-size:16px ;font-weight:500; opacity: 0;"
                          class='mt-5'
                        >
                          DIVIDER
                        </v-card-text>
                        <v-switch
                          v-model="cost.flag_ppn"
                          label="PPN"
                        ></v-switch>
                      </v-col>
                      <v-col
                        sm='12'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:0;font-size:16px ;font-weight:500;"
                          class='mt-5'
                        >
                          Note
                        </v-card-text>
                        <v-textarea
                          outlined
                          v-model="cost.note"
                        >
                        </v-textarea>
                      </v-col>
                  </v-row>
                </v-container>
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
                <v-btn
                  color="blue darken-1"
                  text
                  type="submit"
                >
                  Save
                </v-btn>
              </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col
          sm='2'
          cols='2'
          class="ml-5"
        >
          <v-btn
          @click="ppn_switch(true)"
          >
            Checklist All Item PPN <v-icon>mdi-checkbox-multiple-marked-circle</v-icon>
          </v-btn>
        </v-col>
        <v-col
          sm='1'
          cols='2'
          class="ml-3"
        >
          <v-btn
            style="background-color: #ffffff"
            @click="ppn_switch(false)"
          >
            Uncheck All Item PPN <v-icon>mdi-checkbox-multiple-blank-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          sm="12"
          cols="12"
        >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th rowspan="2" class="text-center">
                    No
                  </th>
                  <th rowspan="2" class="text-center">
                    Description
                  </th>
                  <th rowspan="2" class="text-center">
                    Note
                  </th>
                  <th rowspan="2" class="text-center">
                    Unit
                  </th>
                  <th rowspan="2" class="text-center">
                    Qty
                  </th>
                  <th rowspan="2" class="text-center">
                    Price
                  </th>
                  <th colspan="2" class="text-center">
                    Amount
                  </th>
                  <th rowspan="2" class="text-center">
                    PPN
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
                v-for="(req, i) in REC"
                :key="i"
              >
                <tr>
                  <td class="text-center">{{req.createdAt}}</td>
                  <td class="text-center">{{req.item_cost}}</td>
                  <td class="text-center">{{req.note.substr(0, 6)}}...</td>
                  <td class="text-center">{{req.unit}}</td>
                  <td class="text-center">{{req.quantity}}</td>
                  <td class="text-center"><money :v-bind="req.currency" v-model="req.price" style="text-align: center">{{req.price}}</money></td>
                  <td
                    class="text-center"
                    v-if='req.currency === "IDR"'
                  ><money v-bind="IDR" v-model="req.totPrice" style="text-align: center">{{req.totPrice}}</money></td>
                  <td
                    class="text-center"
                    v-else
                    style="width: 200px"
                  ><money v-bind="IDR" style="text-align: center">0</money></td>
                  <td
                    class="text-center"
                    v-if='req.currency === "USD"'
                    style="width: 200px"
                  ><money v-bind="USD" v-model="req.totPrice" style="text-align: center">{{req.totPrice}}</money></td>
                  <td
                    class="text-center"
                    v-else
                  ><money v-bind="USD" style="text-align: center">0</money></td>
                  <td class="text-center" v-if="req.currency === 'USD' && ppn === true">{{ RE.ppn_usd }}%</td>
                  <td class="text-center" v-else-if="req.currency === 'IDR' && ppn === true">{{ RE.ppn_idr }}%</td>
                  <td class="text-center" v-else>0</td>
                  <td class="text-center">
                    <v-dialog
                      v-model="dialog_see"
                      persistent
                      :retain-focus="false"
                      max-width="1000px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          @click="edit(req.id)"
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-eye
                        </v-icon> |
                      </template>
                        <!-- modal untuk update cost -->
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
                                <v-card-text
                                  class="font-weight-bold"
                                  style="padding: 2px; font-weight: bold; font-size: 16px"
                                >
                                  Item Cost
                                </v-card-text>
                                <v-select
                                  readonly
                                  :items="data_costs"
                                  outlined
                                  v-model="cost.item_cost"
                                ></v-select>
                              </v-col>
                                <v-col
                                  sm='6'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:2px;font-size:16px ;font-weight:bold"
                                  >
                                    Unit
                                  </v-card-text>
                                  <v-select
                                    readonly
                                    :items="units"
                                    outlined
                                    v-model="cost.unit"
                                  ></v-select>
                                </v-col>
                                <v-col
                                  sm='6'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:2px;font-size:16px ;font-weight:bold"
                                  >
                                    Quantity
                                  </v-card-text>
                                  <v-text-field
                                    readonly
                                    outlined
                                    v-model="cost.quantity"
                                    type="number"
                                  >
                                  </v-text-field>
                                </v-col>
                                <v-col
                                  sm='6'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:2px;font-size:16px ;font-weight:bold"
                                    class='mt-5'
                                  >
                                    Price
                                  </v-card-text>
                                  <v-text-field
                                    readonly
                                    outlined
                                    type="number"
                                    v-model="cost.price"
                                  >
                                  </v-text-field>
                                </v-col>
                                <v-col
                                  sm='3'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:0;font-size:16px ;font-weight:500; opacity: 0;"
                                    class='mt-5'
                                  >
                                    DIVIDER
                                  </v-card-text>
                                  <v-select
                                    readonly
                                    :items="currencies"
                                    v-model="cost.currency"
                                    outlined
                                  ></v-select>
                                </v-col>
                                <v-col
                                  sm='2'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:0;font-size:16px ;font-weight:500; opacity: 0;"
                                    class='mt-5'
                                  >
                                    DIVIDER
                                  </v-card-text>
                                  <v-switch
                                    readonly
                                    v-model="cost.flag_ppn"
                                    label="PPN"
                                  ></v-switch>
                                </v-col>
                                <v-col
                                  sm='12'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:0;font-size:16px ;font-weight:500;"
                                    class='mt-5'
                                  >
                                    Note
                                  </v-card-text>
                                  <v-textarea
                                    readonly
                                    outlined
                                    v-model="cost.note"
                                  >
                                  </v-textarea>
                                </v-col>
                            </v-row>
                          </v-container>
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
                            @click="stop"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-dialog
                      v-model="dialog_delete"
                      persistent
                      :retain-focus="false"
                      max-width="270px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          @click="destroy(req.id)"
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-delete
                        </v-icon> 
                      </template>
                        <!-- modal untuk update cost -->
                      <v-card
                        style='overflow:hidden;'
                      >
                        <v-form
                          @submit.prevent="deleteCost"
                        >
                        <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                          Are you sure to delete this item?
                        </v-card-title>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog_delete = false"
                          >
                            Close
                          </v-btn>
                          <v-btn
                            color="red darken-1"
                            text
                            type="submit"
                          >
                            Yes
                          </v-btn>
                        </v-card-actions>
                        </v-form>
                      </v-card>
                    </v-dialog>
                    |
                    <v-dialog
                      v-model="dialog_edit"
                      persistent
                      :retain-focus="false"
                      max-width="1000px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          @click="edit(req.id)"
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-file-edit-outline
                        </v-icon>
                      </template>
                        <!-- modal untuk update cost -->
                      <v-card
                        style='overflow:hidden;'
                      >
                        <v-form
                          @submit.prevent="updateCost"
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
                                <v-card-text
                                  class="font-weight-bold"
                                  style="padding: 2px; font-weight: bold; font-size: 16px"
                                >
                                  Item Cost
                                </v-card-text>
                                <v-select
                                  :items="data_costs"
                                  outlined
                                  v-model="cost.item_cost"
                                ></v-select>
                              </v-col>
                                <v-col
                                  sm='6'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:2px;font-size:16px ;font-weight:bold"
                                  >
                                    Unit
                                  </v-card-text>
                                  <v-select
                                    :items="units"
                                    outlined
                                    v-model="cost.unit"
                                  ></v-select>
                                </v-col>
                                <v-col
                                  sm='6'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:2px;font-size:16px ;font-weight:bold"
                                  >
                                    Quantity
                                  </v-card-text>
                                  <v-text-field
                                    outlined
                                    v-model="cost.quantity"
                                    type="number"
                                  >
                                  </v-text-field>
                                </v-col>
                                <v-col
                                  sm='6'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:2px;font-size:16px ;font-weight:bold"
                                    class='mt-5'
                                  >
                                    Price
                                  </v-card-text>
                                  <v-text-field
                                    outlined
                                    type="number"
                                    v-model="cost.price"
                                  >
                                  </v-text-field>
                                </v-col>
                                <v-col
                                  sm='3'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:0;font-size:16px ;font-weight:500; opacity: 0;"
                                    class='mt-5'
                                  >
                                    DIVIDER
                                  </v-card-text>
                                  <v-select
                                    :items="currencies"
                                    v-model="cost.currency"
                                    outlined
                                  ></v-select>
                                </v-col>
                                <v-col
                                  sm='2'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:0;font-size:16px ;font-weight:500; opacity: 0;"
                                    class='mt-5'
                                  >
                                    DIVIDER
                                  </v-card-text>
                                  <v-switch
                                    v-model="cost.flag_ppn"
                                    label="PPN"
                                  ></v-switch>
                                </v-col>
                                <v-col
                                  sm='12'
                                  cols="3"
                                >
                                  <v-card-text
                                    style="padding:0;font-size:16px ;font-weight:500;"
                                    class='mt-5'
                                  >
                                    Note
                                  </v-card-text>
                                  <v-textarea
                                    outlined
                                    v-model="cost.note"
                                  >
                                  </v-textarea>
                                </v-col>
                            </v-row>
                          </v-container>
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
                            @click="close"
                          >
                            Close
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            type="submit"
                          >
                            Save
                          </v-btn>
                        </v-card-actions>
                        </v-form>
                      </v-card>
                    </v-dialog>
                    <!-- <v-icon
                      @click="edit(req.id_payrequest_cost)"
                    >
                      mdi-file-edit-outline
                    </v-icon> -->
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          sm='12'
          cols='2'
        >
          <v-card
            class="mt-2"
            outlined
          >
            <v-row
              style="display: flex;"
              class="mb-3 mt-3"
            >
              <v-col
                sm='2'
                cols="2"
                style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
              >
                <v-card-title
                  style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                  class='ml-5'
                >
                Amount IDR
                </v-card-title>
                <money
                  style="font-weight:bold; font-size:18px; padding: 0"
                  class="ml-5 mt-3"
                  v-bind="IDR"
                  v-model="totAmIdr"
                >
                  {{ totAmIdr }}
                </money>
              </v-col>
              <v-col
                sm='2'
                cols="2"
                style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
              >
                <v-card-title
                  style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                  class='mr-3'
                >
                Amount USD
                </v-card-title>
                <money
                  style="font-weight:bold; font-size:18px; padding: 0"
                  class="mt-3"
                  v-bind="USD"
                  v-model="totAmUsd"
                >
                  {{ totAmUsd }}
                </money>
              </v-col>
              <v-col
                sm='2'
                cols="2"
                style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
              >
                <v-card-title
                  style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                  class='ml-5'
                >
                Total PPN IDR
                </v-card-title>
                <money
                  style="font-weight:bold; font-size:18px; padding: 0"
                  class="ml-5 mt-3"
                  v-model="totPPNIdr"
                  v-bind="IDR"
                >
                  {{ totPPNIdr }}
                </money>
              </v-col>
              <v-col
                sm='2'
                cols="2"
                style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
              >
                <v-card-title
                  style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                  class='mr-3'
                >
                Total PPN USD
                </v-card-title>
                <money
                  style="font-weight:bold; font-size:18px; padding: 0"
                  class="mt-3"
                  v-model="totPPNUsd"
                  v-bind="USD"
                >
                  {{ totPPNUsd }}
                </money>
              </v-col>
              <v-col
                sm='2'
                cols="2"
                style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
              >
                <v-card-title
                  style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                  class='ml-5'
                >
                Total Amount IDR
                </v-card-title>
                <money
                  style="font-weight:bold; font-size:18px; padding: 0"
                  class="ml-5 mt-3"
                  v-model="amIdr"
                  v-bind="IDR"
                >
                  {{ amIdr }}
                </money>
              </v-col>
              <v-col
                sm='2'
                cols="2"
              >
                <v-card-title
                  style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                  class='mr-3'
                >
                Total Amount USD
                </v-card-title>
                <money
                  style="font-weight:bold; font-size:18px; padding: 0"
                  class="mt-3"
                  v-model="amUsd"
                  v-bind="USD"
                >
                  {{ amUsd }}
                </money>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        class="ml-10 mr-10 mb-10"
      >
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          depressed
          color="error"
          style="margin-left:85%;"
          height='55px'
          class="mr-10"
          :to='`/admin/joc/data/${this.$route.query.id}`'
        >
          Back
        </v-btn>
        <v-btn
          type="submit"
          depressed
          color="primary"
          height='55px'
          style="float: right;"
          :to='`/admin/joc/data/${this.$route.query.id}`'
        >
          Save
        </v-btn>
      </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import {Money} from 'v-money'

export default {
  name: 'pay-request',
  components: {
    Money
  },
  middleware: 'adminscl',
  meta: {
    crumbs: [
      {
        text: 'Create Job Order',
        to: '/admin/jo/create',
        disabled: true
      },
      {
        text: 'Add Rebate Income',
        to: '/admin/jo/detail',
        disabled: true
      }
    ]
  },
  data () {
    return {
      agents: [],
      dialog: false,
      dialog_see: false,
      dialog_edit: false,
      dialog_delete: false,
      totPPNUsd: 0,
      id_cost: 0,
      totPPNIdr: 0,
      totAmIdr: 0,
      totAmUsd: 0,
      currencies: ['USD', 'IDR'],
      amIdr: 0,
      amUsd: 0,
      RE: {
        agent_name: '',
        ppn_idr: '',
        ppn_usd: '',
        no_blanko: '',
        note: '',
      },
      REC: [],
      cost: {},
      dialog_back: false,
      data_costs: [],
      units: ['Buruh', 'Coil', 'Colly', 'Container', 'Doc', 'Kg', 'M3', 'Trip', 'Unit']
    }
  },
  methods: {
    ppn_switch (payload) {
      this.ppn = payload
      if (this.ppn === false) {
        this.totPPNIdr = 0
        this.totPPNUsd = 0
        this.amIdr = this.totAmIdr
        this.amUsd = this.totAmUsd
      }
      else {
        this.get()
      }
      // console.log(this.ppn)
    },
    stop () {
      this.dialog_see = false
      this.cost = {}
    },
    async edit (id) {
      console.log('edit ditekan berjalan membawa', id)
      this.id_cost = id
      try {
        const response = await this.$axios.get('rebate-income-cost/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.cost = data.rebateIncomeCost
          console.log(this.cost, 'ini hasil get by id')
        }
      } catch {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load all data partners ${message}`)
      }
    },
    destroy (id) {
      console.log(id, 'ini id bawaan delete')
      this.id_cost = id
    },
    async deleteCost () {
      const id = this.id_cost
      try {
        const response = await this.$axios.delete('rebate-income-cost/' + id)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, '<---- respons berhasil delete')
          this.get()
        }
      } catch {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete pay request cost, ${message}`)
      }
      this.dialog_delete = false
    },
    async get () {
      this.totAmUsd = 0 
      this.totPPNIdr = 0
      this.amIdr = 0
      this.totAmIdr = 0
      this.totPPNUsd = 0
      this.amUsd = 0
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('joc-rebate-income/' + this.$route.params.id)
          if (response.status === 200) {
            this.$toast.clear()
            const { data } = response.data
            data.rebateIncomeCost.forEach((el) => {
              el.createdAt = el.createdAt.slice(0, 10)
              el.totPrice = el.price * el.quantity
              if (el.currency === 'USD') {
                this.totAmUsd += el.totPrice
                this.totPPNUsd += el.totPrice * data.ppn_usd / 100
                this.amUsd += el.totPrice + el.totPrice * data.ppn_usd / 100
              } else if (el.currency === 'IDR') {
                this.totAmIdr += el.totPrice
                this.totPPNIdr += el.totPrice * data.ppn_idr / 100
                this.amIdr += el.totPrice + el.totPrice * data.ppn_idr / 100
            }
          })
            this.RE = data
            this.REC = data.rebateIncomeCost
            console.log(data, 'hasil ngeget')
          }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to update rebate income ${message}`)
      }
    },
    async getDataCost () {
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
    async updateCost () {
      console.log(this.id_cost, 'ini id bawaan edit')
      const id = this.id_cost
      try {
        const response = await this.$axios.put('rebate-income-cost/' + id, this.cost)
        if (response.status === 200) {
          const { data } = response.data
          this.cost = {}
          console.log(data, '<---- respons berhasil update')
          this.get()
        }
      } catch {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to update pay request cost, ${message}`)
      }
      this.dialog_edit = false
    },
    async createREC (e) {
      e.preventDefault()
    //   console.log('ngebikin')
      if (this.cost.flag_ppn === true) {
        this.cost.flag_ppn = '1'
      } else {
        this.cost.flag_ppn = '0'
      }
      this.cost.id_rebate_income = this.$route.params.id
      console.log(this.cost, 'ini bawaan post')
      try {
        const response = await this.$axios.post('rebate-income-cost', this.cost)
        if (response.status === 200) {
          this.get()
          this.dialog = false
        //   this.$toast.global.app_success(`successfully created rebate income cost, ${message}`)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create rebate income cost, ${message}`)
      }
    },
    async update (e) {
      e.preventDefault()
      if (this.RE.ppn_idr > 100) {
        this.RE.ppn_idr = '100'
      }
      if (this.RE.ppn_usd > 100) {
        this.RE.ppn_usd = '100'
      }
      try {
        const response = await this.$axios.$put('joc-rebate-income/' + this.$route.params.id , this.RE)
        if (response.status = 200) {
        //   console.log(res, 'ini hasilnya bila berhasil broh untuk update rebate income')
          this.$toast.global.app_success('successfully updated this rebate income')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to update rebate income ${message}`)
      }
    },
    close () {
      this.dialog_edit = false
      this.cost = {}
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
    }
  },
  created () {
    this.getAgents()
    this.get()
    this.getDataCost()
    console.log(this.$route.query.joc_number, '<----- ini params')
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
