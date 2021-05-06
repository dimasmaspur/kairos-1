import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-center","fullWidth":true,"iconPack":"mdi","containerClass":"px-5","action":{"text":"Close","onClick":(e, obj) => {
        obj.goAway(0);
      }}})

const globals = [{"name":"api_error","message":msg => !msg ? 'Oops...Something went wrong' : msg,"options":{"type":"error","theme":"outline","duration":9000}},{"name":"app_loading","message":"Please wait ..","options":{"type":"info","theme":"outline","duration":9000,"icon":"mdi-information-outline"}},{"name":"app_error","message":msg => msg,"options":{"type":"error","theme":"outline","duration":9000,"icon":"mdi-alert-circle-outline"}},{"name":"app_success","message":msg => msg,"options":{"type":"success","theme":"outline","duration":9000,"icon":"mdi-checkbox-marked-circle-outline"}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
