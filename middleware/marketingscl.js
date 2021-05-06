import _ from 'lodash'

export default function ({ store, redirect }) {
  const role = _.upperCase(store.state.auth.user.role)
  if (!_.isEqual(role, 'MARKETING')) {
    switch (role) {
      case 'ADMIN':
        return redirect('/admin')
      case 'SUPERADMIN':
        return redirect('/superadmin')
      case 'DOKUMEN':
        return redirect('/dokumen')
    }
  }
}
