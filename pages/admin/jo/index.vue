<template>
  <div>
    <v-row>
      <v-col
        class="display-flex"
        sm="12"
        md="6"
      >
      <!-- filter data (butuh api) -->
        <v-card
          class="mx-auto mb-5"
          max-width="80%"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                FILTER DATA
              </div>
              <v-list-item-title class="headline mb-1">
                Filter by
              </v-list-item-title>
              <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
              <!-- <v-col
                class="d-flex"
                cols="3"
                sm="6"
              > -->
              <v-row align="centre">
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4"> Branch Office </v-card-subtitle>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4"> ETD </v-card-subtitle>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4"> ETA </v-card-subtitle>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4" style="opacity: 0"> Type </v-card-subtitle>
                </v-col>
              </v-row>
              <v-row align="centre">
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-select
                    :items="items"
                    outlined
                  ></v-select>
                </v-col>
                <v-col
                class="d-flex"
                cols="3"
                sm="3"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="filterEtd"
                        label="dd/mm/yy"
                        clearable
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="filterEtd"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                  >
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="filterEta"
                        hide-details="true"
                        clearable
                        label="dd/mm/yy"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="filterEta"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu2 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu2.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-btn
                    depressed
                    color="primary"
                    class="mt-3"
                    @click.prevent="submit_filter"
                  >
                    Filter now
                  </v-btn>
                </v-col>
              </v-row>
            <!-- </v-col> -->
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex mx-auto"
        sm="12"
        cols="12"
      >
        <v-card
          class="mx-auto mb-5 flex-container"
          width="90%"
          outlined
          style="background-color:#f5f5fb; border:0px;"
        >
          <v-row>
            <v-col
              sm='3'
              md='3'
            >
              <v-card-text
                style="padding: 0px; margin-bottom: 16px;font-size: 18px; opacity: 0"
              >
                Show
              </v-card-text>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col
              sm='1'
            >
              <v-card-text
                style="padding: 0px; margin-bottom: 16px;font-size: 18px"
              >
                Show
              </v-card-text>
              <v-text-field
                type="number"
                outlined
                v-model="itemsPerPage"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col
              sm="4"
              md="4"
            >
            </v-col>
            <v-col
              sm="2"
              md='2'
              class="justify-center"
            >
              <p style="opacity: 0; width:100%"> DIVIDER </p>
              <p style="margin-right: 0 !important;text-align: right;"> Total Job Order <v-avatar
                color="indigo"
                size="36"
              >
                <span class="white--text headline">{{ info.length }}</span>
              </v-avatar> </p>
            </v-col>
            <v-col
              sm="2"
              md="2"
            >
              <v-card-text
                style="padding: 0px; margin-bottom: 16px;font-size: 18px; opacity: 0"
              >
                Row Page
              </v-card-text>
              <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Create Job Order
                    <plus-icon size="1.5x" class="custom-class ml-2"></plus-icon>
                  </v-btn>
                </template>
                <!-- modal untuk create form -->
                <v-card
                  style='overflow:hidden;'
                >
                  <v-form
                    ref="form"
                    v-model="valid"
                    @submit="formTest"
                    lazy-validation
                  >
                    <v-card-title>
                      <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Data Job order</span>
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
                              label="Customer Name"
                              :items="agents"
                              required
                              v-model="customerName"
                              :rules="nameRules"
                              style="margin-bottom:0;"
                            ></v-select>
                          </v-col>
                            <v-col
                              sm='12'
                              cols="3"
                            >
                              <v-card-text
                                style="padding:0;font-size:16px ;font-weight:bold"
                              >
                                Job Order Type
                              </v-card-text>
                              <v-radio-group
                                v-model="jobOrderType"
                                row
                                :rules="typeRules"
                              >
                                <v-radio
                                  label="Export"
                                  value="export"
                                ></v-radio>
                                <v-radio
                                  label="Import"
                                  value="import"
                                ></v-radio>
                              </v-radio-group>
                            </v-col>
                            <v-col
                              sm='12'
                              cols="3"
                            >
                              <v-card-text
                                style="padding:0;font-size:16px ;font-weight:bold"
                                class='mt-5'
                              >
                                Subject
                              </v-card-text>
                              <v-textarea
                                :rules="[v => !!v || 'Subject is required']"
                                v-model="subject"
                                outlined
                              >
                              </v-textarea>
                            </v-col>
                            <v-col
                              sm='6'
                              cols="3"
                            >
                              <v-card-text
                                style="padding:0;font-size:16px ;font-weight:500"
                                class='mt-5'
                              >
                                Terms of Payment (Days)
                              </v-card-text>
                              <v-select
                                :items="terms"
                                v-model="termsOfPayment"
                                outlined
                                :rules="[v => !!v || 'Terms of payment is required']"
                              ></v-select>
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
                      <!-- <NuxtLink to="/admin/jo/create"> -->
                      <v-btn
                        :disabled="!valid"
                        color="blue darken-1"
                        text
                        @click="validate"
                        type="submit"
                      >
                        Save
                      </v-btn>
                      <!-- </NuxtLink> -->
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="display-flex"
        sm="12"
        col='12'
      >
        <v-card
          class="mx-auto mb-5"
          max-width="90%"
          outlined
        >
          <v-card-title>
            Job order
            <v-spacer></v-spacer>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="filtered"
            :loading="items"
            :items-per-page="itemsPerPage"
            :search="search"
            style="width: 100%"
          >
            <template v-slot:[`item.actions`]>
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-printer
              </v-icon>
              <v-icon
                small
                @click="copyItem(item)"
              >
                mdi-file-document-multiple-outline
              </v-icon>
            </template>
            <template v-slot:[`item.detail`]="{ item: { id_jo }}">
              <v-btn
                text
                nuxt
                exact
                @click='goDetail(id_jo)'
                class="text-capitalize"
              >
                Detail
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <!-- <base-modal>
      <template slot="body">
        test
      </template>
      <template slot="footer">
        test
      </template>
    </base-modal> -->
  </div>
</template>
<script>
import { PlusIcon } from 'vue-feather-icons'

export default {
  meta: {
    crumbs: [
      {
        text: 'Dashboard',
        to: '/admin/e-do',
        disabled: false
      },
      {
        text: 'Job Order',
        to: '/admin/jo',
        disabled: true
      }
    ]
  },
  middleware: 'adminscl',
  components: {
    PlusIcon
  },
  data () {
    return {
      valid: true,
      nameRules: [
        v => !!v || 'Customer name is required'
      ],
      typeRules: [
        v => !!v || 'JO Type is required'
      ],
      itemsPerPage: 10,
      search: '',
      testModel: '',
      dialog: false,
      filterEta: '',
      filterEtd: '',
      headers: [
        {
          text: 'Date',
          align: 'start',
          sortable: true,
          value: 'createdAt'
        },
        { text: 'JO Number', value: 'jo_number' },
        { text: 'T', value: 'type' },
        { text: 'Customer Name', value: 'customer_name' },
        { text: 'ETA/ETD', value: 'ETA' },
        { text: 'BL Number', value: 'bl_number' },
        { text: 'Marketing', value: 'marketing' },
        { text: 'Created', value: 'creator' },
        { text: 'Action', value: 'actions' },
        { text: '', value: 'detail', sortable: false }
      ],
      row: null,
      customerName: '',
      jobOrderType: '',
      subject: '',
      termsOfPayment: '',
      menu: false,
      menu2: false,
      jo: [],
      info: [],
      all: [],
      filtered: [],
      jo_data: [],
      terms: ['7 Days', '14 Days', '30 Days', '60 Days', '90 Days', '0'],
      agents: []
    }
  },
  methods: {
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
    someMethod (e) {
      console.log('clicked', e.target.value)
    },
    actions (e) {
      console.log(e.target.value)
      console.log(e.target.id, 'ini id bawaan')
      // if (e.target.value === 'detail') {
      //   this.goDetail(id)
      // }
    },
    goDetail (id) {
      console.log(id, 'ini id hasil bawaan')
      this.$router.push({ path: '/admin/jo/detail/' + id })
    },
    async formTest (e) {
      e.preventDefault()
      const payload = {
        customer_name: this.customerName,
        type: this.jobOrderType,
        subject: this.subject,
        terms_payment: this.termsOfPayment
      }
      this.dialog = false
      try {
        const response = await this.$axios.post('job-order', payload)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil tembak job order post')
          const id = data.id
          this.$router.push({ path: '/admin/jo/' + id })
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create JO ${message}`)
      }
      // this.$store.dispatch('SetForm', payload)
      // this.$store.dispatch('CreateJO', payload)
      // console.log(payload, 'ini dari index.vue')
    },
    validate () {
      this.$refs.form.validate()
    },
    async get_all_jo () {
      try {
        const response = await this.$axios.get('jo-data')
        if (response.status === 200) {
          const { data } = response.data
          data.forEach((e) => {
            e.createdAt = e.createdAt.slice(0, 10)
            e.ETA = e.ETA.slice(0, 10)
          })
          // this.jo_data = data
          this.jo_data = data
          this.get_JO()
          // this.$toast.clear()
          // console.log(data, '<---- ini data dari api jo')
        }
        // const JO = await this.$axios.get('job-order')
        // if (JO.status === 200) {
        //   const { data } = JO.data
        //   this.info = data
        //   this.$toast.clear()
        //   console.log(data, '<---- ini data dari api job-order')
        // }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load all JO ${message}`)
      }
    },
    async get_JO () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('job-order')
        if (response.status === 200) {
          this.$toast.clear()
          const { data } = response.data
          data.forEach((e) => {
            e.createdAt = e.createdAt.slice(0, 10)
          })
          this.jo = data
          this.mergeAll()
          // this.info = data
          // this.$toast.clear()
          // console.log(data, '<---- ini data dari api jo')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load all JO ${message}`)
      }
    },
    mergeAll () {
      console.log('fungsi merge kepanggil')
      this.jo_data.map((el) => {
        const temp = this.jo.find(obj => (obj.jo_number === el.jo_number))
        if (temp) {
          el.id_jo = temp.id
          el.customer_name = temp.customer_name
          this.info.push(el)
        }
        console.log(el, 'ini data table')
        return el
      })
    },
    submit_filter () {
      console.log(this.filterEta, 'ini filter eta nya')
      console.log(this.filterEtd, 'ini filter etd nya')
      if (this.filterEta && !this.filterEtd ) {
        this.filtered = this.info.filter((el) => el.ETA === this.filterEta)
      } else if (this.filterEtd && !this.filterEta) {
        this.filtered = this.info.filter((el) => el.ETD === this.filterEtd)
      } else if (this.filterEtd && this.filterEta) {
        this.filtered = this.info.filter((el) => el.ETD === this.filterEtd && el.ETA === this.filterEta)
      } else {
        this.filtered = this.info
      }
    }
  },
  created () {
    this.get_all_jo()
    this.getAgents()
    this.submit_filter()
    console.log(this.info, 'ini data dari table')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,700;1,100&display=swap');
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
}

.title {
  font-family: 'Poppins';
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}

</style>
