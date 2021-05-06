<template>
<div>
  <v-card
    class="mx-auto ml-3 mt-5 mb-5"
    width="98%"
    height="50px"
    outlined
    rounded="5px"
  >
    <v-row
      style="display: flex;"
    >
      <!-- <v-list-item three-line> -->
        <!-- <v-list-item-content>
            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content> -->
        <v-col
          cols="3"
          sm="7"
        >
        <!-- nama perusahaan -->
          <v-card-title
            v-if="invoice.kode.length === 1"
          >
            00{{ invoice.kode }}. {{ invoice.invoice_to }} (No. Invoice) - {{ invoice.no_blanko }}
          </v-card-title>
          <v-card-title
            v-else-if="invoice.kode.length === 2"
          >
            0{{ invoice.kode }}. {{ invoice.invoice_to }} (No. Invoice) - {{ invoice.no_blanko }}
          </v-card-title>
          <v-card-title
            v-else
          >
            {{ invoice.kode }}. {{ invoice.invoice_to }} (No. Invoice) - {{ invoice.no_blanko }}
          </v-card-title>
        </v-col>
        <v-col
          cols="3"
          sm="1"
          style="display: flex;"
        >
        <!-- status -->
          <v-card-text
            style="color:red; font-size: 18px; font-weight:bold; border-right:1px solid #000;height:48px; border-color:#b8b8b8;"
          >
            UNPAID
          </v-card-text>
        </v-col>
        <v-col
          cols="3"
          sm="3"
          style="display: flex;"
          class="mt-1"
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
                Add cost
                <v-icon>
                  mdi-plus-circle
                </v-icon>
              </v-btn>
            </template>
            <v-card
              style='overflow:hidden;'
            >
              <v-form
                @submit.prevent="createCost(invoice.id)"
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
                          v-model="costForm.item_cost"
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
                            v-model="costForm.unit"
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
                            type="number"
                            v-model="costForm.quantity"
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
                            v-model="costForm.price"
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
                          <v-select
                            required
                            outlined
                            v-model="costForm.currency"
                            label="currency"
                            :items="currencies"
                            style="margin-bottom:0;"
                          ></v-select>
                        </v-col>
                        <v-col
                          sm="2"
                          cols='3'
                        >
                          <v-card-text
                            style="padding:0;font-size:16px ;font-weight:bold; opacity:0;"
                          >
                            DIVIDER
                          </v-card-text>
                          <v-checkbox
                            v-model="costForm.flag_ppn"
                            label="PPN"
                          ></v-checkbox>
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
                            v-model="costForm.note"
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
                      color="blue darken-1"
                      text
                      type="submit"
                    >
                      Save
                    </v-btn>
                  <!-- </NuxtLink> -->
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialog_editI"
            persistent
            max-width="1000px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="warning"
                dark
                v-bind="attrs"
                v-on="on"
                @click="getInvoice(invoice.id)"
                class="ml-2"
              >
                Edit
                <v-icon>
                  mdi-square-edit-outline
                </v-icon>
              </v-btn>
            </template>
            <v-card
              style='overflow:hidden;'
            >
              <v-form
                @submit.prevent="editInvoice(invoice.id)"
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
                          :items="agents"
                          label="Invoice To"
                          v-model="form.invoice_to"
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
                            No. Blanko
                          </v-card-text>
                          <v-text-field
                            required
                            v-model="form.no_blanko"
                            outlined
                            style="margin-bottom:0;"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          sm='6'
                          cols="3"
                        >
                          <!-- <v-card-text
                            style="padding:0;font-size:16px ;font-weight:bold"
                          >
                            Quantity
                          </v-card-text>
                          <v-text-field
                            required
                            outlined
                            style="margin-bottom:0;"
                          ></v-text-field> -->
                        </v-col>
                        <v-col
                          sm='3'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:0;font-size:16px ;font-weight:bold"
                          >
                            PPN IDR
                          </v-card-text>
                          <v-text-field
                            type="number"
                            required
                            outlined
                            v-model="form.ppn_idr"
                            style="margin-bottom:0;"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          sm='3'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:0;font-size:16px ;font-weight:bold"
                          >
                            PPN USD
                          </v-card-text>
                          <v-text-field
                            type="number"
                            required
                            outlined
                            v-model="form.ppn_usd"
                            style="margin-bottom:0;"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          sm='6'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:0;font-size:16px ;font-weight:bold;"
                          >
                            Biaya Materai
                          </v-card-text>
                          <v-text-field
                            type="number"
                            required
                            v-model="form.biaya_materai"
                            outlined
                            style="margin-bottom:0;"
                          ></v-text-field>
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
                            v-model="form.note"
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
                    @click="dialog_editI = false"
                  >
                    Close
                  </v-btn>
                  <!-- <NuxtLink to="/admin/jo/create"> -->
                    <v-btn
                      color="blue darken-1"
                      text
                      type="submit"
                    >
                      Save
                    </v-btn>
                  <!-- </NuxtLink> -->
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
          <v-btn
            color="success"
            dark
            class="ml-2"
          >
            Print
            <v-icon>
              mdi-printer
            </v-icon>
          </v-btn>
          <v-dialog
            v-model="dialog_delete"
            persistent
            :retain-focus="false"
            max-width="270px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="error"
                dark
                v-bind="attrs"
                v-on="on"
                class="ml-2"
              >
                Delete
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </template>
              <!-- modal untuk update cost -->
            <v-card
              style='overflow:hidden;'
            >
              <v-form
                @submit.prevent="destroy(invoice.id)"
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
        </v-col>
    </v-row>
  </v-card>
  <v-card>
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
          v-for="(req, i) in invoice.InvoiceCosts"
          :key="i"
        >
          <tr>
            <td class="text-center">{{ i+1 }}</td>
            <td class="text-center">{{ req.item_cost }}</td>
            <td class="text-center">{{ req.note.substr(0, 6) }}...</td>
            <td class="text-center">{{ req.unit }}</td>
            <td class="text-center">{{ req.quantity }}</td>
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
            <td class="text-center" v-if="req.flag_ppn === 1"><v-icon>mdi-check-circle-outline</v-icon></td>
            <td class="text-center" v-else><v-icon>mdi-checkbox-blank-circle-outline</v-icon></td>
            <td class="text-center">
              <v-dialog
                v-model="dialog_see"
                persistent
                :retain-focus="false"
                max-width="1000px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    @click="getById(req.id)"
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
                            <v-checkbox
                              readonly
                              v-model="cost.flag_ppn"
                              label="PPN"
                            ></v-checkbox>
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
                      @click="dialog_see = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="dialog_deleteC"
                persistent
                :retain-focus="false"
                max-width="270px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    @click="getById(req.id)"
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
                    @click="getById(req.id)"
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
                            <v-checkbox
                              v-model="cost.flag_ppn"
                              label="PPN"
                            ></v-checkbox>
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
                      @click="dialog_edit = false"
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
  </v-card>
  <v-card
    class="mx-auto mt-2"
    width="100%"
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
          style="border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
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
          style="border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
          class='ml-5'
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
          style="border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
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
          style="border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
          class='ml-5'
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
        style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
      >
        <v-card-title
          style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
          class='ml-5'
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
  <hr
    class="mt-5"
  >
</div>
</template>

<script>
import {Money} from 'v-money'

export default {
  name: 'invoice',
  components: {
    Money
  },
  props: ['invoice', 'data', 'bus', 'item'],
  data () {
    return {
      dialog_delete: false,
      dialog_see: false,
      dialog_deleteC: false,
      dialog_edit: false,
      totPPNUsd: 0,
      totAmUsd: 0,
      totAmIdr: 0,
      dialog_editI: false,
      totPPNIdr: 0,
      id: 0,
      amUsd: 0,
      amIdr: 0,
      units: ['Buruh', 'Coil', 'Colly', 'Container', 'Doc', 'Kg', 'M3', 'Trip', 'Unit'],
      costForm: {},
      currencies: ['IDR', 'USD'],
      dialog: false,
      dialog_edit: false,
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
      form: {},
      data_costs: [],
      agents: [],
      cost: {}
    }
  },
  methods: {
    // count () {
    //   console.log(this.invoice, 'ini invoicenya bro')
    //   this.invoice.InvoiceCosts.forEach((el) => {
    //     el.totPrice = el.price * el.quantity
    //     if (el.currency === 'USD') {
    //       this.totAmUsd += el.totPrice
    //       this.totPPNUsd += el.totPrice * this.invoice.ppn_usd / 100
    //       this.amUsd += el.totPrice + el.totPrice * this.invoice.ppn_usd / 100
    //     } else if (el.currency === 'IDR') {
    //       this.totAmIdr += el.totPrice
    //       this.totPPNIdr += el.totPrice * this.invoice.ppn_idr / 100
    //       this.amIdr += el.totPrice + el.totPrice * this.invoice.ppn_idr / 100
    //     }
    //   });
    // },
    async getInvoice (id) {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('jo-invoice/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.$toast.clear()
          console.log(data, 'ini datanya bro dari get by id')
          this.$toast.global.app_success('successfully loaded data')
          this.form = data
        }
      } catch (error) {
        console.log(error, 'ini errornya data-cost')
        this.$toast.clear()
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data, ${message}`)
      }
    },
    async editInvoice (id) {
      try {
        this.form.item_cost = '-'
        this.$toast.global.app_loading()
        const response = await this.$axios.put('jo-invoice/' + id, this.form)
        if (response.status === 200) {
          this.$toast.clear()
          this.$emit('getData')
          this.dialog_editI = false
          this.getIC()
          this.$toast.global.app_success('successfully updated invoice')
        }
      } catch (error) {
        console.log(error, 'ini errornya data-cost')
        this.$toast.clear()
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data, ${message}`)
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
    async createCost (id) {
      try {
        if (this.costForm.flag_ppn === true) {
          this.costForm.flag_ppn = 1
        } else {
          this.costForm.flag_ppn = 0
        }
        console.log(this.costForm, 'INI YANG DIKIRIM')
        this.costForm.id_invoice = id
        this.costForm.jo_number = this.invoice.jo_number
        this.costForm.kode = this.invoice.kode
        const response = await this.$axios.post('invoice-cost/', this.costForm)
        if (response.status === 200) {
          this.dialog = false
          this.getIC()
          this.$toast.global.app_success('successfully created cost')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create cost ${message}`)
      }
    },
    async destroy (id) {
      try {
        const response = await this.$axios.delete('jo-invoice/' + id)
        if (response.status === 200) {
          this.$emit('getData')
          this.getIC()
          this.dialog_delete = false
          this.$toast.global.app_success('successfully deleted invoice')
        }
      } catch (error) {
        console.log(error, 'ini errornya delete invoice')
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete, ${message}`)
      }
    },
    async getCost () {
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
    async getIC () {
      this.totAmUsd = 0 
      this.totPPNIdr = 0
      this.amIdr = 0
      this.totAmIdr = 0
      this.totPPNUsd = 0
      this.amUsd = 0
      try {
        const response = await this.$axios.get('jo-invoice/' + this.invoice.id)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, '<----- keambil invoice costnya')
          data.invoiceCost.forEach((el) => {
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
          this.invoice.InvoiceCosts = data.invoiceCost
        }
      } catch (error) {
        console.log(error, 'ini errornya delete invoice')
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load invoice cost, ${message}`)
      }
    },
    async getById (id) {
      this.id = id
      try {
        const response = await this.$axios.get('invoice-cost/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.cost = data.invoiceCost
        }
      } catch (error) {
        console.log(error, 'ini errornya delete invoice')
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load invoice cost, ${message}`)
      }
    },
    async deleteCost () {
      try {
        const response = await this.$axios.delete('invoice-cost/' + this.id)
        if (response.status === 200) {
          const { data } = response.data
          this.getIC()
          this.dialog_deleteC = false
          this.$toast.global.app_success('successfuly deleted invoice cost')
        }
      } catch (error) {
        console.log(error, 'ini errornya delete invoice')
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete invoice cost, ${message}`)
      }
    },
    async updateCost () {
      try {
        const response = await this.$axios.put('invoice-cost/' + this.id, this.cost)
        if (response.status === 200) {
          const { data } = response.data
          this.getIC()
          this.dialog_edit = false
          this.$toast.global.app_success('successfuly updated invoice cost')
        }
      } catch (error) {
        console.log(error, 'ini errornya delete invoice')
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to update invoice cost, ${message}`)
      }
    }
  },
  created () {
    this.getAgents()
    this.getCost()
    this.getIC()
  }
}
</script>

<style lang="scss" scoped>

.vl {
  border-right: 6px solid green;
  height: 20px;
}
</style>
