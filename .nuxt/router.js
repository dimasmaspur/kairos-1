import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _459cc193 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _bfadfdbe = () => interopDefault(import('..\\pages\\dokumen\\index.vue' /* webpackChunkName: "pages/dokumen/index" */))
const _242d0329 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _a2f72b0c = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _4bcab25c = () => interopDefault(import('..\\pages\\marketing\\index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _9374e6e0 = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _6c477d9a = () => interopDefault(import('..\\pages\\spl\\index.vue' /* webpackChunkName: "pages/spl/index" */))
const _2aeb7144 = () => interopDefault(import('..\\pages\\superadmin\\index.vue' /* webpackChunkName: "pages/superadmin/index" */))
const _2dd6042a = () => interopDefault(import('..\\pages\\supervisor\\index.vue' /* webpackChunkName: "pages/supervisor/index" */))
const _493f0300 = () => interopDefault(import('..\\pages\\admin\\e-do\\index.vue' /* webpackChunkName: "pages/admin/e-do/index" */))
const _245961a4 = () => interopDefault(import('..\\pages\\admin\\jo\\index.vue' /* webpackChunkName: "pages/admin/jo/index" */))
const _72ccbae3 = () => interopDefault(import('..\\pages\\admin\\joc\\index.vue' /* webpackChunkName: "pages/admin/joc/index" */))
const _1d365b8e = () => interopDefault(import('..\\pages\\dokumen\\e-do\\index.vue' /* webpackChunkName: "pages/dokumen/e-do/index" */))
const _43e926ac = () => interopDefault(import('..\\pages\\marketing\\quotation\\index.vue' /* webpackChunkName: "pages/marketing/quotation/index" */))
const _55fd8952 = () => interopDefault(import('..\\pages\\spl\\admin\\index.vue' /* webpackChunkName: "pages/spl/admin/index" */))
const _fbd1770a = () => interopDefault(import('..\\pages\\spl\\kasir\\index.vue' /* webpackChunkName: "pages/spl/kasir/index" */))
const _a92ead1e = () => interopDefault(import('..\\pages\\spl\\setting.vue' /* webpackChunkName: "pages/spl/setting" */))
const _2ee4b7d1 = () => interopDefault(import('..\\pages\\superadmin\\user-management\\index.vue' /* webpackChunkName: "pages/superadmin/user-management/index" */))
const _f8259852 = () => interopDefault(import('..\\pages\\supervisor\\e-do\\index.vue' /* webpackChunkName: "pages/supervisor/e-do/index" */))
const _9099f1e0 = () => interopDefault(import('..\\pages\\admin\\jo\\credit-noted\\index.vue' /* webpackChunkName: "pages/admin/jo/credit-noted/index" */))
const _b34be516 = () => interopDefault(import('..\\pages\\admin\\jo\\debit-noted\\index.vue' /* webpackChunkName: "pages/admin/jo/debit-noted/index" */))
const _f809d808 = () => interopDefault(import('..\\pages\\admin\\jo\\pay-request\\index.vue' /* webpackChunkName: "pages/admin/jo/pay-request/index" */))
const _cc19905c = () => interopDefault(import('..\\pages\\admin\\joc\\add-jo\\index.vue' /* webpackChunkName: "pages/admin/joc/add-jo/index" */))
const _0e7eec3b = () => interopDefault(import('..\\pages\\admin\\joc\\create.vue' /* webpackChunkName: "pages/admin/joc/create" */))
const _00b71667 = () => interopDefault(import('..\\pages\\admin\\joc\\pay-request\\index.vue' /* webpackChunkName: "pages/admin/joc/pay-request/index" */))
const _fba2af16 = () => interopDefault(import('..\\pages\\admin\\joc\\rebate-expense\\index.vue' /* webpackChunkName: "pages/admin/joc/rebate-expense/index" */))
const _280b385e = () => interopDefault(import('..\\pages\\admin\\joc\\rebate-income\\index.vue' /* webpackChunkName: "pages/admin/joc/rebate-income/index" */))
const _9d6d3e20 = () => interopDefault(import('..\\pages\\dokumen\\e-do\\create.vue' /* webpackChunkName: "pages/dokumen/e-do/create" */))
const _d8d38a02 = () => interopDefault(import('..\\pages\\spl\\admin\\e-do\\index.vue' /* webpackChunkName: "pages/spl/admin/e-do/index" */))
const _2f173368 = () => interopDefault(import('..\\pages\\spl\\kasir\\e-do\\index.vue' /* webpackChunkName: "pages/spl/kasir/e-do/index" */))
const _5532e5e6 = () => interopDefault(import('..\\pages\\superadmin\\user-management\\create.vue' /* webpackChunkName: "pages/superadmin/user-management/create" */))
const _9603f914 = () => interopDefault(import('..\\pages\\spl\\admin\\e-do\\detail\\_id.vue' /* webpackChunkName: "pages/spl/admin/e-do/detail/_id" */))
const _6c53491f = () => interopDefault(import('..\\pages\\spl\\kasir\\e-do\\detail\\_id.vue' /* webpackChunkName: "pages/spl/kasir/e-do/detail/_id" */))
const _66cde237 = () => interopDefault(import('..\\pages\\admin\\e-do\\detail\\_id.vue' /* webpackChunkName: "pages/admin/e-do/detail/_id" */))
const _090bc8b1 = () => interopDefault(import('..\\pages\\admin\\jo\\credit-noted\\_id_credit_note.vue' /* webpackChunkName: "pages/admin/jo/credit-noted/_id_credit_note" */))
const _c9b43c12 = () => interopDefault(import('..\\pages\\admin\\jo\\debit-noted\\_id_debit_note.vue' /* webpackChunkName: "pages/admin/jo/debit-noted/_id_debit_note" */))
const _6060f865 = () => interopDefault(import('..\\pages\\admin\\jo\\detail\\_id.vue' /* webpackChunkName: "pages/admin/jo/detail/_id" */))
const _8dab405c = () => interopDefault(import('..\\pages\\admin\\jo\\pay-request\\_id_payrequest.vue' /* webpackChunkName: "pages/admin/jo/pay-request/_id_payrequest" */))
const _f66f013e = () => interopDefault(import('..\\pages\\admin\\joc\\data\\_id.vue' /* webpackChunkName: "pages/admin/joc/data/_id" */))
const _46002d01 = () => interopDefault(import('..\\pages\\admin\\joc\\edit\\_id.vue' /* webpackChunkName: "pages/admin/joc/edit/_id" */))
const _ffd4f2e2 = () => interopDefault(import('..\\pages\\admin\\joc\\pay-request\\_id.vue' /* webpackChunkName: "pages/admin/joc/pay-request/_id" */))
const _2a7377c6 = () => interopDefault(import('..\\pages\\admin\\joc\\rebate-expense\\_id.vue' /* webpackChunkName: "pages/admin/joc/rebate-expense/_id" */))
const _2327ba46 = () => interopDefault(import('..\\pages\\admin\\joc\\rebate-income\\_id.vue' /* webpackChunkName: "pages/admin/joc/rebate-income/_id" */))
const _4abd8676 = () => interopDefault(import('..\\pages\\dokumen\\e-do\\detail\\_id.vue' /* webpackChunkName: "pages/dokumen/e-do/detail/_id" */))
const _6c03802c = () => interopDefault(import('..\\pages\\dokumen\\e-do\\edit\\_id.vue' /* webpackChunkName: "pages/dokumen/e-do/edit/_id" */))
const _387cfa4e = () => interopDefault(import('..\\pages\\supervisor\\e-do\\detail\\_id.vue' /* webpackChunkName: "pages/supervisor/e-do/detail/_id" */))
const _6ab175d4 = () => interopDefault(import('..\\pages\\admin\\jo\\_id.vue' /* webpackChunkName: "pages/admin/jo/_id" */))
const _5a856012 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _459cc193,
    name: "admin"
  }, {
    path: "/dokumen",
    component: _bfadfdbe,
    name: "dokumen"
  }, {
    path: "/login",
    component: _242d0329,
    name: "login"
  }, {
    path: "/logout",
    component: _a2f72b0c,
    name: "logout"
  }, {
    path: "/marketing",
    component: _4bcab25c,
    name: "marketing"
  }, {
    path: "/setting",
    component: _9374e6e0,
    name: "setting"
  }, {
    path: "/spl",
    component: _6c477d9a,
    name: "spl"
  }, {
    path: "/superadmin",
    component: _2aeb7144,
    name: "superadmin"
  }, {
    path: "/supervisor",
    component: _2dd6042a,
    name: "supervisor"
  }, {
    path: "/admin/e-do",
    component: _493f0300,
    name: "admin-e-do"
  }, {
    path: "/admin/jo",
    component: _245961a4,
    name: "admin-jo"
  }, {
    path: "/admin/joc",
    component: _72ccbae3,
    name: "admin-joc"
  }, {
    path: "/dokumen/e-do",
    component: _1d365b8e,
    name: "dokumen-e-do"
  }, {
    path: "/marketing/quotation",
    component: _43e926ac,
    name: "marketing-quotation"
  }, {
    path: "/spl/admin",
    component: _55fd8952,
    name: "spl-admin"
  }, {
    path: "/spl/kasir",
    component: _fbd1770a,
    name: "spl-kasir"
  }, {
    path: "/spl/setting",
    component: _a92ead1e,
    name: "spl-setting"
  }, {
    path: "/superadmin/user-management",
    component: _2ee4b7d1,
    name: "superadmin-user-management"
  }, {
    path: "/supervisor/e-do",
    component: _f8259852,
    name: "supervisor-e-do"
  }, {
    path: "/admin/jo/credit-noted",
    component: _9099f1e0,
    name: "admin-jo-credit-noted"
  }, {
    path: "/admin/jo/debit-noted",
    component: _b34be516,
    name: "admin-jo-debit-noted"
  }, {
    path: "/admin/jo/pay-request",
    component: _f809d808,
    name: "admin-jo-pay-request"
  }, {
    path: "/admin/joc/add-jo",
    component: _cc19905c,
    name: "admin-joc-add-jo"
  }, {
    path: "/admin/joc/create",
    component: _0e7eec3b,
    name: "admin-joc-create"
  }, {
    path: "/admin/joc/pay-request",
    component: _00b71667,
    name: "admin-joc-pay-request"
  }, {
    path: "/admin/joc/rebate-expense",
    component: _fba2af16,
    name: "admin-joc-rebate-expense"
  }, {
    path: "/admin/joc/rebate-income",
    component: _280b385e,
    name: "admin-joc-rebate-income"
  }, {
    path: "/dokumen/e-do/create",
    component: _9d6d3e20,
    name: "dokumen-e-do-create"
  }, {
    path: "/spl/admin/e-do",
    component: _d8d38a02,
    name: "spl-admin-e-do"
  }, {
    path: "/spl/kasir/e-do",
    component: _2f173368,
    name: "spl-kasir-e-do"
  }, {
    path: "/superadmin/user-management/create",
    component: _5532e5e6,
    name: "superadmin-user-management-create"
  }, {
    path: "/spl/admin/e-do/detail/:id",
    component: _9603f914,
    name: "spl-admin-e-do-detail-id"
  }, {
    path: "/spl/kasir/e-do/detail/:id",
    component: _6c53491f,
    name: "spl-kasir-e-do-detail-id"
  }, {
    path: "/admin/e-do/detail/:id",
    component: _66cde237,
    name: "admin-e-do-detail-id"
  }, {
    path: "/admin/jo/credit-noted/:id_credit_note?",
    component: _090bc8b1,
    name: "admin-jo-credit-noted-id_credit_note"
  }, {
    path: "/admin/jo/debit-noted/:id_debit_note?",
    component: _c9b43c12,
    name: "admin-jo-debit-noted-id_debit_note"
  }, {
    path: "/admin/jo/detail/:id?",
    component: _6060f865,
    name: "admin-jo-detail-id"
  }, {
    path: "/admin/jo/pay-request/:id_payrequest?",
    component: _8dab405c,
    name: "admin-jo-pay-request-id_payrequest"
  }, {
    path: "/admin/joc/data/:id?",
    component: _f66f013e,
    name: "admin-joc-data-id"
  }, {
    path: "/admin/joc/edit/:id?",
    component: _46002d01,
    name: "admin-joc-edit-id"
  }, {
    path: "/admin/joc/pay-request/:id?",
    component: _ffd4f2e2,
    name: "admin-joc-pay-request-id"
  }, {
    path: "/admin/joc/rebate-expense/:id?",
    component: _2a7377c6,
    name: "admin-joc-rebate-expense-id"
  }, {
    path: "/admin/joc/rebate-income/:id?",
    component: _2327ba46,
    name: "admin-joc-rebate-income-id"
  }, {
    path: "/dokumen/e-do/detail/:id",
    component: _4abd8676,
    name: "dokumen-e-do-detail-id"
  }, {
    path: "/dokumen/e-do/edit/:id",
    component: _6c03802c,
    name: "dokumen-e-do-edit-id"
  }, {
    path: "/supervisor/e-do/detail/:id",
    component: _387cfa4e,
    name: "supervisor-e-do-detail-id"
  }, {
    path: "/admin/jo/:id",
    component: _6ab175d4,
    name: "admin-jo-id"
  }, {
    path: "/",
    component: _5a856012,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
