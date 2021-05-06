<template>
  <div>
    <v-row
      class="ml-10 mr-10"
    >
      <v-col
        sm="1"
        cols="3"
      >
        <p>
          testing
        </p>
        <v-btn
          class="ml-6"
          text
          style="background-color:#ffffff"
          color="error"
          @click="goBack"
        >
          Back
        </v-btn>
      </v-col>
      <v-col
        sm="1"
        cols="3"
      >
        <p>
          testing
        </p>
        <v-btn
          color="primary"
          @click="add"
        >
          Add JO
        </v-btn>
      </v-col>
      <v-col
        sm="2"
        cols="3"
        class="mr-n14"
      >
        <p>
          testing
        </p>
        <v-btn
          @click="singleSelect = true"
        >
          Checklist All <v-icon> mdi-check-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col
        sm="1"
        cols="3"
      >
        <p>
          testing
        </p>
        <v-btn
          style="background-color:#ffffff"
          @click="singleSelect = false"
        >
          Uncheck All <v-icon> mdi-check-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col
        sm="3"
        cols="3"
      >
      </v-col>
      <v-col
        sm="3"
        cols="3"
      >
        <p>
          testing
        </p>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        sm="1"
        cols="3"
      >
        <v-card-text
          style="padding: 0px; margin-bottom: 16px;font-size: 18px"
        >
          Row Page
        </v-card-text>
        <v-text-field
          type="number"
          outlined
          v-model="itemsPerPage"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      class="ml-10 mr-10"
    >
      <v-col
        sm="12"
        cols="3"
      >
        <v-data-table
          v-model="selected"
          :headers="headers"
          :single-select="singleSelect"
          :items="body"
          :search="search"
          hide-default-footer
          :items-per-page="itemsPerPage"
          item-key="jo_number"
          show-select
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'add jo',
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
      singleSelect: false,
      search: '',
      selected: [],
      itemsPerPage: 10,
      headers: [
        {
          text: 'JO Number',
          align: 'start',
          filterable: false,
          value: 'jo_number',
        },
        { text: 'Customer Name', value: 'customer_name' },
        { text: 'B/L', value: 'bl_number' },
        { text: 'MBL', value: 'mbl_number' },
        { text: 'No. Cont', value: 'no_container' },
        { text: 'Vessel', value: 'jo_number' },
        { text: 'Discharge', value: 'discharge' },
        { text: 'Status', value: 'status' }
      ],
      body: [],
      jo: '',
      jo_data: ''
    }
  },
  methods: {
    goBack () {
      this.$router.push({ path: '/admin/joc/data/' + this.$route.query.id })
    },
    async add () {
      this.selected.forEach(el => {
        el.no_quantity = el.no_container
        el.joc_number = this.$route.query.joc
      })
      await this.selected.forEach(el => {
        return this.$axios.post('joc-data', el)
      })
      if (this.selected.length) {
        this.$toast.global.app_success('successfully added jo')
      }
      // console.log(this.selected, 'ini yang kepilih')
      // this.selected.forEach(el => {
      //   el.no_quantity = el.no_container
      //   el.joc_number = this.$route.query.joc
      // this.$toast.global.app_loading()
      // this.selected.forEach(el => {
      //   el.no_quantity = el.no_container
      //   el.joc_number = this.$route.query.joc
      // })
      // try {
      //   await this.selected.forEach(el => {
      //     const response = this.$axios.post('joc-data', el)
      //     if (response.status === 200) {
      //       this.$toast.clear()
      //       const { data } = console.log(data, 'ini hasilnya bila berhasil add jo')
      //     }
      //   })
      // } catch (error) {
      //   const response = error.response.data
      //   const message =
      //     response && response.message && ` , ${response.message}`
      //   this.$toast.global.app_error(`Failed to add job orders, ${message}`)
      // }
    },
    async getAll () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('job-order')
        if (response.status === 200) {
          const { data } = response.data
          this.$toast.clear()
          console.log(data, 'ini hasil get all')
          this.jo = data
          this.getData()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load job orders, ${message}`)
      }
    },
    async getData () {
      try {
        const response = await this.$axios.get('jo-data')
        if (response.status === 200) {
          const { data } = response.data
          data.forEach((e) => {
            e.createdAt = e.createdAt.slice(0, 10)
            e.ETA = e.ETA.slice(0, 10)
          })
          this.jo_data = data
          this.mergeAll()
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
          this.$toast.clear()
          el.id_jo = temp.id
          el.customer_name = temp.customer_name
          this.body.push(el)
        }
        console.log(el, 'ini data table')
        return el
      })
    }
  },
  created () {
    this.getAll()
  }
}
</script>

<style>

p{
  opacity: 0;
}
</style>
