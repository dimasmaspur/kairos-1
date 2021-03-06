const middleware = {}

middleware['adminscl'] = require('..\\middleware\\adminscl.js')
middleware['adminscl'] = middleware['adminscl'].default || middleware['adminscl']

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['breadcrumbs'] = require('..\\middleware\\breadcrumbs.js')
middleware['breadcrumbs'] = middleware['breadcrumbs'].default || middleware['breadcrumbs']

middleware['dokumenscl'] = require('..\\middleware\\dokumenscl.js')
middleware['dokumenscl'] = middleware['dokumenscl'].default || middleware['dokumenscl']

middleware['marketingscl'] = require('..\\middleware\\marketingscl.js')
middleware['marketingscl'] = middleware['marketingscl'].default || middleware['marketingscl']

middleware['role'] = require('..\\middleware\\role.js')
middleware['role'] = middleware['role'].default || middleware['role']

middleware['superadminscl'] = require('..\\middleware\\superadminscl.js')
middleware['superadminscl'] = middleware['superadminscl'].default || middleware['superadminscl']

export default middleware
