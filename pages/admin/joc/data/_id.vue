<template>
  <div>
    <v-row>
      <v-col
        sm='12'
        cols='3'
      >
        <v-card
          class="mx-auto"
          width="90%"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div
                class="headline mb-3 mt-5"
                style="color: #3273dc; font-weight: bold;"
              >
                Data JO Consolidation
                <v-divider class="mt-5"></v-divider>
                <p
                  class="overline"
                  style="color: black;"
                >
                  No. Consol: -
                </p>
              </div>
              <v-row>
                <v-col
                  sm='6'
                  cols='3'
                >
                  <v-row>
                    <v-col
                      sm='12'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px"
                      >
                        Type
                      </v-card-text>
                      <v-radio-group
                        v-model="data.type"
                        row
                        class="mb-5"
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
                    </v-col>
                    <v-col
                      sm='6'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px"
                      >
                        No. B/L
                      </v-card-text>
                      <v-text-field
                        class="mb-7"
                        v-model="data.no_bl"
                        :rules="rules"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col
                      sm='6'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px"
                      >
                        No. MBL
                      </v-card-text>
                      <v-text-field
                        class="mb-7"
                        v-model="data.no_mbl"
                        :rules="rules"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col
                      sm='6'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px"
                      >
                        Vessel
                      </v-card-text>
                      <v-text-field
                        class="mb-5"
                        v-model="data.vessel"
                        :rules="rules"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col
                      sm='6'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px"
                      >
                        Carrier
                      </v-card-text>
                      <v-text-field
                        class="mb-5"
                        v-model="data.carrier"
                        :rules="rules"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col
                      sm='12'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px"
                      >
                        No. Container
                      </v-card-text>
                      <v-text-field
                        class="mb-10"
                        v-model="data.no_container"
                        :rules="rules"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col
                      sm='10'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px"
                      >
                        Type Container
                      </v-card-text>
                      <v-text-field
                        class="mb-5"
                        v-model="data.type_container"
                        :rules="rules"
                        hide-details="auto"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col
                      sm='2'
                      cols='3'
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px; opacity: 0"
                      >
                        Divider
                      </v-card-text>
                      <v-text-field v-model="data.qty_container" type="number" outlined></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  sm='6'
                  cols="3"
                >
                  <v-row>
                    <v-col
                      sm='12'
                      cols="1"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Agent
                      </v-card-text>
                      <v-select
                        :items="agents"
                        v-model="data.agent"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col
                      sm='12'
                      cols="3"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Loading
                      </v-card-text>
                      <v-select
                        :items="ports"
                        outlined
                        v-model="data.loading"
                      ></v-select>
                    </v-col>
                    <v-col
                      sm='12'
                      cols="3"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Discharge
                      </v-card-text>
                      <v-select
                        v-model="data.discharge"
                        :items="ports"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col
                      sm="4"
                      cols="3"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        ETA
                      </v-card-text>
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="data.ETA"
                            prepend-icon="mdi-calendar"
                            readonly
                            label="dd/mm/yy"
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          ref="picker"
                          v-model="data.ETA"
                          :max="new Date().toISOString().substr(0, 10)"
                          min="1950-01-01"
                          @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col
                      sm="4"
                      cols="3"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        ETD
                      </v-card-text>
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="data.ETD"
                            prepend-icon="mdi-calendar"
                            readonly
                            label="dd/mm/yy"
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          ref="picker"
                          v-model="data.ETD"
                          :max="new Date().toISOString().substr(0, 10)"
                          min="1950-01-01"
                          @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col
                      sm="4"
                      cols="3"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Quantity
                      </v-card-text>
                      <v-text-field v-model="data.quantity" type="number" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      sm="3"
                      cols="3"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Weight
                      </v-card-text>
                      <v-text-field v-model="data.weight" type="number" outlined></v-text-field>
                    </v-col>
                    <v-col
                      sm="3"
                      cols="3"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Measurement
                      </v-card-text>
                      <v-text-field v-model="data.measurement" type="number" outlined></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <!-- <v-btn
              outlined
              rounded
              text
            >
              Button
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        sm='12'
        cols="3"
      >
        <v-card
          width="90%"
          class="mx-auto"
          outlined
          style="background-color:#f5f5fb; border:0px;"
        >
          <v-tabs
            v-model="tab"
            background-color="transparent"
            light
            class="mb-10"
          >
            <v-tab
              class="mr-12"
            >
              Data JO
            </v-tab>
            <v-tab
              class="mr-12"
            >
              Rebate Income
            </v-tab>
            <v-tab
              class="mr-12"
            >
              Rebate Expense
            </v-tab>
            <v-tab
              class="mr-12"
            >
              Pay Request
            </v-tab>
            <!-- DATA JO TAB -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <v-divider
                style="width:50%"
              />
              <v-row>
                <v-col
                  sm='6'
                  cols="3"
                >
                  <v-card-text
                    style="padding: 1px; font-size: 16px; opacity:0"
                  >
                    divider
                  </v-card-text>
                  <v-btn
                    color="primary"
                    class="mt-5"
                    @click="addJo"
                  >
                    Add Job Order
                    <v-icon>
                      mdi-plus-circle-outline
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col
                  sm='5'
                  cols="12"
                >
                  <v-card-text
                    style="padding: 1px; font-size: 16px; opacity:0"
                  >
                    divider
                  </v-card-text>
                  <v-text-field
                    solo
                    label="Search"
                    class="mt-5"
                    style="width:80%; margin-left:20%"
                    prepend-inner-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
                <v-col
                  sm='1'
                  cols="12"
                >
                  <v-card-text
                    style="padding: 1px; font-size: 16px;"
                  >
                    Row Page
                  </v-card-text>
                  <v-text-field solo class="mt-5" v-model="foo" type="number" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  sm="12"
                  cols="3"
                >
                  <!-- tabel data jo -->
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th rowspan="2" class="text-center">
                            No
                          </th>
                          <th rowspan="2" class="text-center">
                            JO. Number
                          </th>
                          <th rowspan="2" class="text-center">
                            Customer Name
                          </th>
                          <th rowspan="2" class="text-center">
                            Destination
                          </th>
                          <th rowspan="2" class="text-center">
                            Meas no
                          </th>
                          <th colspan="2" class="text-center">
                            Gross Profit
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
                        v-for="(req, i) in data.jocData"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.id }}</td>
                          <td class="text-center">-</td>
                          <td class="text-center">{{ req.agent }}</td>
                          <td class="text-center">{{ req.discharge }}</td>
                          <td class="text-center">{{ req.measurement }}</td>
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
                      Gross Profit IDR
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
                      Gross Profit USD
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
                  to="/admin/joc"
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
            <!-- REBATE INCOME TAB -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <v-divider
                style="width:50%"
              />
              <v-row>
                <v-col
                  sm='12'
                  cols="3"
                >
                  <v-card-text
                    style="padding: 1px; font-size: 16px; opacity:0"
                  >
                    divider
                  </v-card-text>
                  <v-btn
                    color="primary"
                    class="mt-5"
                    @click="createRE"
                  >
                    Add New
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
                  <!-- tabel rebate income -->
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
                        v-for="(req, i) in data.jocRebateIncome"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.createdAt.slice(0, 10) }}</td>
                          <td class="text-center">{{ req.id_rebate_income }}</td>
                          <td class="text-center">{{ req.no_blanko }}</td>
                          <td class="text-center">{{ req.agent_name }}</td>
                          <td class="text-center">{{ req.RebateIncomeCosts.length }}</td>
                          <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                          <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center"><v-icon @click="detail(req.id_rebate_income)">mdi-pencil-outline</v-icon><v-icon>mdi-printer</v-icon><v-icon>mdi-delete</v-icon></td>
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
                        <money v-bind="IDR" v-model="totRIIDR"> {{ totRIIDR }} </money>
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
                        <money v-bind="USD" v-model="totRIUSD"> {{ totRIUSD }} </money>
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
                  to="/admin/joc"
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
            <!-- REBATE EXPENSE TAB -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <v-divider
                style="width:50%"
              />
              <v-row>
                <v-col
                  sm='12'
                  cols="3"
                >
                  <v-card-text
                    style="padding: 1px; font-size: 16px; opacity:0"
                  >
                    divider
                  </v-card-text>
                  <v-btn
                    color="primary"
                    class="mt-5"
                    @click="createREX"
                  >
                    Add New
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
                  <!-- tabel rebate expense -->
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
                        v-for="(req, i) in data.jocRebateExpense"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.createdAt.slice(0, 10) }}</td>
                          <td class="text-center">{{ req.id_rebate_expense }}</td>
                          <td class="text-center">{{ req.no_blanko }}</td>
                          <td class="text-center">{{ req.agent_name }}</td>
                          <td class="text-center">{{ req.RebateExpenseCosts.length }}</td>
                          <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                          <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center"><v-icon @click="detailREX(req.id_rebate_expense)">mdi-pencil-outline</v-icon><v-icon>mdi-printer</v-icon><v-icon>mdi-delete</v-icon></td>
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
                        <money v-bind="IDR" v-model="totREIDR"> {{ totREIDR }} </money>
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
                        <money v-bind="IDR" v-model="totREUSD"> {{ totREUSD }} </money>
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
                  to="/admin/joc"
                >
                  Back
                </v-btn>
              </v-row>
            </v-tab-item>
            <!-- PAY REQUEST TAB -->
            <v-tab-item
              style="background-color:#f5f5fb; border:0px;"
            >
              <v-divider
                style="width:50%"
              />
              <v-row>
                <v-col
                  sm='12'
                  cols="3"
                >
                  <v-card-text
                    style="padding: 1px; font-size: 16px; opacity:0"
                  >
                    divider
                  </v-card-text>
                  <v-btn
                    color="primary"
                    class="mt-5"
                    @click="createPR"
                  >
                    Add New
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
                        v-for="(req, i) in data.jocPayRequest"
                        :key="i"
                      >
                        <tr>
                          <td class="text-center">{{ req.createdAt.slice(0, 10) }}</td>
                          <td class="text-center">{{ req.id_payrequest }}</td>
                          <td class="text-center">{{ req.no_blanko }}</td>
                          <td class="text-center">{{ req.vendor_name }}</td>
                          <td class="text-center">{{ req.JocPayRequestCosts.length }}</td>
                          <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                          <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                          <td class="text-center">UNPAID</td>
                          <td class="text-center"><v-icon @click="detailPR(req.id_payrequest)">mdi-pencil-outline</v-icon><v-icon>mdi-printer</v-icon><v-icon>mdi-delete</v-icon></td>
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
                        <money v-bind="IDR" v-model="totPRIDR"> {{ totPRIDR }} </money>
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
                        <money v-bind="IDR" v-model="totPRUSD"> {{ totPRUSD }} </money>
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
                  to="/admin/joc"
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

export default {
  name: 'JOC data',
  components: {
    Money
  },
  meta: {
    crumbs: [
      {
        text: 'Job Order Consolidation',
        to: '/admin/joc',
        disabled: false
      },
      {
        text: 'Add Job Order Consol',
        to: '/admin/joc/data',
        disabled: true
      }
    ]
  },
  middleware: 'adminscl',
  data () {
    return {
      data: {},
      agents: [],
      ports: [],
      totRIIDR: 0,
      totRIUSD: 0,
      totREIDR: 0,
      totREUSD: 0,
      totPRIDR: 0,
      totPRUSD: 0,
    }
  },
  methods: {
    addJo () {
      this.$router.push({ path: '/admin/joc/add-jo/?id=' + this.$route.params.id + '&joc=' + this.data.joc_number })
    },
    detail (id) {
      this.$router.push({ path: '/admin/joc/rebate-income/' + id + '/?id=' + this.$route.params.id })
    },
    detailREX (id) {
      this.$router.push({ path: '/admin/joc/rebate-expense/' + id + '/?id=' + this.$route.params.id })
    },
    detailPR (id) {
      this.$router.push({ path: '/admin/joc/pay-request/' + id + '/?id=' + this.$route.params.id })
    },
    async getData () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('job-consol/' + this.$route.params.id)
        if (response.status === 200) {
          this.$toast.clear()
          const { data } = response.data
          data.ETA = data.ETA.slice(0, 10)
          data.ETD = data.ETD.slice(0, 10)
          this.data = data
          console.log(data, 'ini hasil bawaan awal')
          data.jocRebateIncome.map((el) => {
            el.createdAt = el.createdAt.slice(0, 10)
            el.priceIDR = 0
            el.priceUSD = 0
            el.RebateIncomeCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                el.priceIDR += e.price * e.quantity
              } else {
                el.priceUSD += e.price * e.quantity
              }
            })
            el.RebateIncomeCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                this.totRIIDR += e.price * e.quantity
              } else {
                this.totRIUSD += e.price * e.quantity
              }
            })
          })
          data.jocRebateExpense.map((el) => {
            el.createdAt = el.createdAt.slice(0, 10)
            el.priceIDR = 0
            el.priceUSD = 0
            el.RebateExpenseCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                el.priceIDR += e.price * e.quantity
              } else {
                el.priceUSD += e.price * e.quantity
              }
            })
            el.RebateExpenseCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                this.totREIDR += e.price * e.quantity
              } else {
                this.totREUSD += e.price * e.quantity
              }
            })
          })
          data.JocPayRequestCosts.map((el) => {
            el.createdAt = el.createdAt.slice(0, 10)
            el.priceIDR = 0
            el.priceUSD = 0
            el.RebateIncomeCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                el.priceIDR += e.price * e.quantity
              } else {
                el.priceUSD += e.price * e.quantity
              }
            })
            el.RebateIncomeCosts.forEach((e) => {
              if (e.currency === 'IDR') {
                this.totPRIDR += e.price * e.quantity
              } else {
                this.totPRUSD += e.price * e.quantity
              }
            })
          })
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load JOC ${message}`)
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
    createREX () {
      this.$router.push({ path: '/admin/joc/rebate-expense/?id=' + this.$route.params.id + '&joc_number=' + this.data.joc_number })
    },
    async getPort () {
      try {
        const response = await this.$axios.get('data-port')
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini data data port')
          data.forEach(el => {
            this.ports.push(el.port_name)
          });
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load ports, ${message}`)
      }
    },
    createRE () {
      this.$router.push({ path: '/admin/joc/rebate-income/?id=' + this.$route.params.id + '&joc_number=' + this.data.joc_number })
    },
    createPR () {
      this.$router.push({ path: '/admin/joc/pay-request/?id=' + this.$route.params.id + '&joc_number=' + this.data.joc_number })

    }
  },
  created () {
    this.getData()
    this.getAgents()
    this.getPort()
  }
}
</script>

<style>

</style>
