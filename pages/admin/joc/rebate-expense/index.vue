<template>
  <v-row class="ml-10 mr-10">
    <v-col
      sm="12"
      md="6"
    >
      <v-form
        @submit.prevent="create"
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
                      v-model="agent_name"
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
                      v-model="no_blanko"
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
                      v-model="ppn_idr"
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
                      v-model="ppn_usd"
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
              <!-- masih hardcode -->
              JO Number: {{ joc_number }}
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
          </v-card-actions>
        </v-card>
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
              style="margin-left:75%"
              height='55px'
              class="mt-10 mb-10"
            >
              Cancel
            </v-btn>
          </template>
          <v-card>
            <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
              Cancel this process?
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
              <NuxtLink :to="`/admin/joc/data/${id}`">
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
          class="mb-10 mt-10"
          style="float: right;"
        >
          Save
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'pay-request',
  meta: {
    crumbs: [
      {
        text: 'Create Job Order',
        to: '/admin/jo/create',
        disabled: true
      },
      {
        text: 'Add Rebate Expense',
        to: '/admin/jo/detail',
        disabled: true
      }
    ]
  },
  middleware: 'adminscl',
  data () {
    return {
      agents: [],
      dialog_back: false,
      agent_name: '',
      ppn_idr: '',
      ppn_usd: '',
      no_blanko: '',
      note: '',
      joc_number: this.$route.query.joc_number,
      id: this.$route.query.id
    }
  },
  methods: {
    create (e) {
      e.preventDefault()
      const payload = {
        joc_number: this.joc_number,
        agent_name: this.agent_name,
        ppn_idr: this.ppn_idr,
        ppn_usd: this.ppn_usd,
        no_blanko: this.no_blanko,
      }
      if (payload.ppn_idr > 100) {
        payload.ppn_idr = '100'
      }
      if (payload.ppn_usd > 100) {
        payload.ppn_usd = '100'
      }
      this.$axios.$post('joc-rebate-expense', payload)
        .then((res) => {
          console.log(res, 'ini hasilnya bila berhasil broh untuk create rebate income')
          // console.log(res.data.id_payrequest, 'ini id payreq nya cuy')
          // this.$store.commit('setid_debtnote', res.data.id_debit_note)
          this.$router.push({ path: '/admin/joc/rebate-expense/' + res.data.id_rebate_expense + '/?id=' + this.id })
        })
        .catch((err) => {
          console.log(err)
        })
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
    console.log(this.$route.query.joc_number, '<----- ini params')
  }
}
</script>

<style>
.v-text-field__details {
  display: none;
}
</style>
