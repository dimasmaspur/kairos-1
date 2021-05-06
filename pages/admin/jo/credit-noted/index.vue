<template>
  <v-row class="ml-10 mr-10">
    <v-col
      sm="12"
      md="6"
    >
      <v-form
        @submit="createPayReq"
      >
        <v-card
          max-width="100%"
          outlined
          class="mx-auto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline" style="color:#3273dc; max-width: 20%; margin-right: 20%">
                DATA VENDOR
              </div>
              <hr class="mb-4">
              <v-list-item-title class="headline mb-1">
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
                      max='100'
                      v-model="ppn_usd"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-list-item-title>
              <v-card-text
                style="padding: 0px;"
              >
                Vendor name
              </v-card-text>
              <v-select
                :items="agents"
                outlined
                v-model="vendor_name"
              ></v-select>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              height="30"
              width="200"
            >
              <!-- masih hardcode -->
              JO Number: {{ jo_number }}
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
              <NuxtLink :to="`/admin/jo/detail/${id}`">
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
        to: '/admin/jo/detail',
        disabled: false
      },
      {
        text: 'Add Credit Noted',
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
      vendor_name: '',
      ppn_idr: 0,
      ppn_usd: 0,
      no_blanko: '',
      jo_number: this.$route.query.jo_number,
      id: this.$route.query.id
    }
  },
  methods: {
    createPayReq (e) {
      e.preventDefault()
      const payload = {
        jo_number: this.jo_number,
        agent_name: this.vendor_name,
        ppn_idr: this.ppn_idr,
        ppn_usd: this.ppn_usd,
        no_blanko: this.no_blanko
      }
      if (payload.ppn_idr > 100) {
        payload.ppn_idr = '100'
      }
      if (payload.ppn_usd > 100) {
        payload.ppn_usd = '100'
      }
      this.$axios.$post('jo-creditnote', payload)
        .then((res) => {
          // this.$store.commit('setPayreqForm', payload)
          console.log(res, 'ini hasilnya bila berhasil broh untuk create credit note')
          // console.log(res.data.id_payrequest, 'ini id payreq nya cuy')
          // this.$store.commit('setid_payreq', res.data.id_payrequest)
          this.$router.push({ path: '/admin/jo/credit-noted/' + res.data.id_credit_note + '/?id=' + this.id })
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(payload, 'ini adalah payload bawaan')
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
  // computed: {
  //   form () {
  //     return this.$store.state.form
  //   }
  // },
  created () {
    this.getAgents()
  }
}
</script>

<style scoped>
.v-text-field__details {
  display: none;
}
</style>
