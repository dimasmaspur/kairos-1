<template>
  <div>
  <v-container class="mx-auto px-md-5">
    <v-tabs
      v-model="tab"
      background-color="#f5f5fb"
    >
      <v-tab>Data Partner</v-tab>
      <v-tab>Data Cost</v-tab>
      <v-tab>Data Port</v-tab>
      <v-tab>Data Branch Office</v-tab>
      <v-tab>Data User</v-tab>
      <v-tab>Change Password</v-tab>
      <v-tab-item>
        <v-divider />
        <v-row
          style="background-color:#f5f5fb;padding-top:50px"
        >
          <v-col
            sm="1"
          >
            <p
              style="opacity:0;"
            >
              testing
            </p>
            <v-btn
              color="primary"
              @click="addDataPartner"
            >
              Add New <v-icon> mdi-plus-circle-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col
            sm="7"
          >
          </v-col>
          <v-col
            sm="3"
            cols="3"
          >
            <p
              style="opacity: 0"
            >
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
              :headers="data_partner"
              :items="body"
              :search="search"
              hide-default-footer
              :items-per-page="itemsPerPage"
              item-key="jo_number"
            ></v-data-table>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <v-divider />
        <v-card-text> Data Cost </v-card-text>
      </v-tab-item>
      <v-tab-item>
        <v-divider />
        <v-card-text> Data port </v-card-text>
      </v-tab-item>
      <v-tab-item>
        <v-divider />
        <v-card-text> Data Branch Office </v-card-text>
      </v-tab-item>
      <v-tab-item>
        <v-divider />
        <v-card-text> Data User </v-card-text>
      </v-tab-item>
      <v-tab-item
        style="background-color:#f5f5fb;"
      >
        <v-divider />
        <v-form style="background-color:#f5f5fb;padding-top:50px" ref="form" v-model="valid" lazy-validation>
          <v-row align="center" justify="space-between">
            <v-col cols="12" sm="6">
              <label for="email" class="text-body-1">Your e-mail</label>
              <v-text-field
                placeholder="E-mail"
                :value="$auth.user.email"
                disabled
                solo
              />
            </v-col>

            <v-col cols="12" sm="6">
              <label for="currentPassword" class="text-body-1">Your name</label>
              <v-text-field
                label="Name"
                :value="$auth.user.name"
                disabled
                solo
              />
            </v-col>
          </v-row>

          <v-divider class="my-10" />

          <v-row align="center" justify="space-between">
            <v-col cols="12">
              <div class="headline font-weight-bold">
                Change Password
              </div>
            </v-col>
          </v-row>

          <v-row align="center" justify="space-between">
            <v-col cols="12" sm="6" md="4">
              <label for="currentPassword" class="text-body-1">Current Password</label>
              <v-text-field
                id="currentPassword"
                v-model="currentPassword"
                class="mt-3"
                placeholder="Input your recent password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :rules="[rules.currentPasswordRules, passwordConfirm]"
                solo
                validate-on-blur
                required
                :loading="isSubmiting"
                :disabled="isSubmiting"
                @click:append="show1 = !show1"
              />
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <label for="password" class="text-body-1">New Password</label>
              <v-text-field
                id="password"
                v-model="password"
                class="mt-3"
                placeholder="Input new password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                :rules="rules.passwordRules"
                solo
                validate-on-blur
                required
                :loading="isSubmiting"
                :disabled="isSubmiting"
                @click:append="show2 = !show2"
              />
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <label for="rePassword" class="text-body-1">Re-type Password</label>
              <v-text-field
                id="rePassword"
                v-model="rePassword"
                class="mt-3"
                placeholder="Input password again"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                :rules="[rules.rePasswordRules, retypePassword]"
                solo
                validate-on-blur
                required
                :loading="isSubmiting"
                :disabled="isSubmiting"
                @click:append="show3 = !show3"
              />
            </v-col>
          </v-row>

          <v-row align="center" justify-sm="end" class="text-sm-right">
            <v-col cols="auto">
              <v-btn :disabled="isSubmiting" text color="red" @click="clear">
                Cancel
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn :loading="isSubmiting" :disabled="!valid" color="primary" @click="submit">
                Update
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-tab-item>
    </v-tabs>
      
  </v-container>
  </div>
</template>

<script>
import qs from 'querystring'

export default {
  meta: {
    crumbs: [{
      text: 'Setting',
      to: '/setting'
      // disabled: false
    }]
  },
  data () {
    return {
      valid: true,
      itemsPerPage: 10,
      isSubmiting: false,
      search: '',
      data_partner: [
        {
          text: 'No',
          align: 'start',
          filterable: false,
          value: 'no',
        },
        { text: 'Company Name', value: 'company_name' },
        { text: 'Type', value: 'type' },
        { text: 'Contact Person', value: 'contact_person' },
        { text: 'Phone', value: 'phone_number' },
        { text: 'Mobile', value: 'mobile_number' },
        { text: 'Email', value: 'email' },
        { text: 'Created', value: 'company_name' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'actions' },
      ],
      body: [],
      rules: {
        currentPasswordRules: v => !!v || 'Current password is required.',
        passwordRules: [v => !!v || 'Password is required.'],
        rePasswordRules: v => !!v || 'Re-type password is required.'
      },
      currentPassword: '',
      password: '',
      rePassword: '',

      show1: false,
      show2: false,
      show3: false
    }
  },

  computed: {
    retypePassword () {
      return () => (this.password === this.rePassword) || "Password doesn't match."
    },
    passwordConfirm () {
      return () => (this.currentPassword === this.$auth.user.currentPassword) || 'Incorrect password.'
    }
  },

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.isSubmiting = true
        this.$toast.global.app_loading()
        this.$axios.put(`/edit_password/${this.$auth.user.id}`, qs.stringify(this.password))
          .then((response) => {
            this.$auth.setUser({ ...this.$auth.user, currentPassword: this.password })
            this.$toast.global.app_success('Password successfully updated.')
          })
          .catch((err) => {
            err && this.$toast.global.app_error('Failed to change password')
          })
          .finally(() => {
            this.isSubmiting = false
            this.clear()
            this.$router.replace('/logout')
          })
      }
    },

    async getDataPartner () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('data-partner')
        if (response.status === 200) {
          this.$toast.clear()
          const { data } = response.data
          for (let i = 1; i < this.body.length; i++) {
            this.body.no = i
          }
          this.body = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data partner, ${message}`)
      }
    },

    clear () {
      this.$refs.form.reset()
    },

    cancel () {
      this.clear()
      this.$router.back()
    }
  },
  created () {
    this.getDataPartner()
  }
}
</script>
