import qs from 'querystring'
import jwtDecode from 'jwt-decode'
import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
  pending: false,
  JOForm: {
    customer_name: '',
    type: '',
    subject: '',
    terms_payment: ''
  },
  JO_number: '',
  JO_date: '',
  form: {},
  payReqForm: {},
  debNoteForm: {},
  id_payrequest: 0,
  id_debtnote: 0
})

export const mutations = {
  setAuth (state, data) {
    const decode = jwtDecode(data.token)
    this.$auth.setUser({ ...decode, scope: [decode.role], currentPassword: data.password })
  },
  pendingMutate (state, payload) {
    state.pending = payload
  },
  setForm (state, payload) {
    state.JOForm = payload
    console.log(state.JOForm, 'ini dari store')
  },
  setDebNoteForm (state, payload) {
    state.debNoteForm = payload
  },
  setPayreqForm (state, payload) {
    state.payReqForm = payload
  },
  setJo_number (state, payload) {
    state.JO_number = payload
  },
  delJo_number (state, payload) {
    state.JO_number = ''
  },
  setJO_date (state, payload) {
    console.log(payload, '<--- ini JO_datenya')
    state.JO_date = payload
  },
  setJO_form (state, payload) {
    console.log(payload.data.joData, 'ini data ke form')
    state.form = payload.data.joData
  },
  setid_payreq (state, payload) {
    state.id_payrequest = payload
    console.log(payload, 'ini di store bro')
  },
  setid_debtnote (state, payload) {
    state.id_debtnote = payload
  }
}

export const actions = {
  async UserLogin ({ commit, state }, data) {
    commit('pendingMutate', true)
    this.$toast.global.app_loading()
    await this.$auth.loginWith('local', { data: qs.stringify(data) })
      .then((response) => {
        this.$toast.clear()
        commit('setAuth', { token: response.data.id_token, password: data.password })
      })
      .catch((error) => {
        this.$toast.clear()
        if (error.response && error.response.data) {
          const msg = error.response.data && ', ' + error.response.data.message
          this.$toast.global.app_error('Login failed' + msg)
        } else {
          console.log(JSON.stringify(error))
          this.$toast.global.app_error('Login failed.')
        }
      })
      .finally(() => {
        commit('pendingMutate', false)
      })
  },
  SetForm ({ commit }, payload) {
    commit('setForm', payload)
    // console.log(payload, '<------ ini dari store bro')
  },
  CreateJO_DATA ({ commit, state }, data) {
    return this.$axios.$post('jo-data', data)
    //   .then(function (response) {
    //     console.log(response, 'INI HASIL PEMBUATAN JO-DATA')
    //   })
    //   .catch(function (error) {
    //     console.log(error, 'ini errornya')
    //   })
    // console.log(data, 'bro ini axios udah jalan bro')
  },
  async CreateJO ({ commit, state }, data) {
    commit('delJo_number')
    await this.$axios.$post('job-order', data)
      .then(function (response) {
        const payload = response.data.jo_number
        const date = response.data.created_at.substr(0, 10)
        commit('setJo_number', payload)
        commit('setJO_date', date)
        console.log('ini jo_numbernya', payload)
        console.log(response, '<-- ini response dari api job order')
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(data, 'ini ditembak ke job-order')
  },
  getData ({ commit, state }, data) {
    return this.$axios.get('jo-data/' + data)
  }
}

export const plugins = [
  createPersistedState()
]
