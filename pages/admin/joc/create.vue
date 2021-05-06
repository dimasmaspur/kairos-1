<template>
  <div
    class="mb-10"
  >
    <v-form
      @submit.prevent="create"
    > 
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
                          v-model="form.type"
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
                          v-model="form.no_bl"
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
                          v-model="form.no_mbl"
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
                          v-model="form.vessel"
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
                          v-model="form.carrier"
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
                          v-model="form.no_container"
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
                          v-model="form.type_container"
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
                        <v-select v-model="form.qty_container" :items="qty" outlined></v-select>
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
                          v-model="form.agent"
                          :items="agents"
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
                          v-model="form.loading"
                          :items="ports"
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
                          Discharge
                        </v-card-text>
                        <v-select
                          v-model="form.discharge"
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
                          ETD
                        </v-card-text>
                        <v-menu
                          ref="etd"
                          v-model="etd"
                          :close-on-content-click="true"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="form.etd"
                              prepend-icon="mdi-calendar"
                              readonly
                              label="dd/mm/yy"
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            ref="picker"
                            v-model="form.etd"
                            :max="form.eta"
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
                          ETA
                        </v-card-text>
                        <v-menu
                          ref="eta"
                          v-model="eta"
                          :close-on-content-click="true"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="form.eta"
                              prepend-icon="mdi-calendar"
                              readonly
                              label="dd/mm/yy"
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            ref="picker"
                            v-model="form.eta"
                            :min="form.etd"
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
                        <v-text-field v-model="form.quantity" type="number" outlined></v-text-field>
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
                        <v-text-field v-model="form.weight" type="number" outlined></v-text-field>
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
                        <v-text-field v-model="form.measurement" type="number" outlined></v-text-field>
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
            style="background-color:#f5f5fb; border:0"
          >
            <v-btn
              style="color:red; margin-left: 80%"
            >
              Cancel
            </v-btn>
            <!-- <NuxtLink to='/admin/joc/data'> -->
            <v-btn
              type="submit"
              color="primary"
              dark
              class="ml-12"
            >
              Save
            </v-btn>
            <!-- </NuxtLink> -->
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'create form',
  meta: {
    crumbs: [
      {
        text: 'Job Order Consolidation',
        to: '/admin/joc',
        disabled: false
      },
      {
        text: 'Add Job Order Consol',
        to: '/admin/joc/create',
        disabled: true
      }
    ]
  },
  middleware: 'adminscl',
  data () {
    return {
      qty: [20, 40],
      ports: [],
      eta: false,
      etd: false,
      agents: [],
      form: {
        type: '',
        no_bl: '',
        no_mbl: '',
        vessel: '',
        carrier: '',
        no_container: '',
        type_container: '',
        agent: '',
        loading: '',
        discharge: '',
        etd: '',
        eta: '',
        qty_container: '0',
        quantity: '',
        weight: '',
        measurement:'',
        creator: this.$auth.user.name
      }
    }
  },
  methods: {
    async create () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.post('job-consol', this.form)
        if (response.status === 200) {
          this.$toast.clear()
          const { data } = response.data
          console.log(data, 'ini berhasil ngecreate bro')
          this.$toast.global.app_success('Succesfully created jo console')
          this.$router.push({ path: '/admin/joc/data/' + data.id })
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create jo console, ${message}`)
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
    }
  },
  created () {
    this.getPort()
    this.getAgents()
  }
}
</script>

<style scoped>

.v-text-field__details {
  display: none;
}

</style>
