import moment from 'moment'

import 'moment/locale/id'

import 'moment-timezone'

moment.locale('id')

moment.tz.setDefault('Asia/Jakarta')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
