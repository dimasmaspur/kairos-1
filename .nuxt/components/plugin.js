import Vue from 'vue'

const components = {
  Appbar: () => import('../..\\components\\Appbar.vue' /* webpackChunkName: "components/appbar" */).then(c => c.default || c),
  Breadcrumbs: () => import('../..\\components\\Breadcrumbs.vue' /* webpackChunkName: "components/breadcrumbs" */).then(c => c.default || c),
  CardListStatusEdo: () => import('../..\\components\\CardListStatusEdo.vue' /* webpackChunkName: "components/card-list-status-edo" */).then(c => c.default || c),
  CardSecondaryStatusEdo: () => import('../..\\components\\CardSecondaryStatusEdo.vue' /* webpackChunkName: "components/card-secondary-status-edo" */).then(c => c.default || c),
  CardStatusEdo: () => import('../..\\components\\CardStatusEdo.vue' /* webpackChunkName: "components/card-status-edo" */).then(c => c.default || c),
  DialogHouseBlNumber: () => import('../..\\components\\DialogHouseBlNumber.vue' /* webpackChunkName: "components/dialog-house-bl-number" */).then(c => c.default || c),
  DialogOnHold: () => import('../..\\components\\DialogOnHold.vue' /* webpackChunkName: "components/dialog-on-hold" */).then(c => c.default || c),
  DialogRejectionEdo: () => import('../..\\components\\DialogRejectionEdo.vue' /* webpackChunkName: "components/dialog-rejection-edo" */).then(c => c.default || c),
  DrawerDasboardScl: () => import('../..\\components\\DrawerDasboardScl.vue' /* webpackChunkName: "components/drawer-dasboard-scl" */).then(c => c.default || c),
  InputEdo: () => import('../..\\components\\InputEdo.vue' /* webpackChunkName: "components/input-edo" */).then(c => c.default || c),
  Invoice: () => import('../..\\components\\Invoice.vue' /* webpackChunkName: "components/invoice" */).then(c => c.default || c),
  ScanEdo: () => import('../..\\components\\ScanEdo.vue' /* webpackChunkName: "components/scan-edo" */).then(c => c.default || c),
  BaseAlert: () => import('../..\\components\\Base\\Alert.vue' /* webpackChunkName: "components/base-alert" */).then(c => c.default || c),
  BaseButton: () => import('../..\\components\\Base\\Button.vue' /* webpackChunkName: "components/base-button" */).then(c => c.default || c),
  BaseModal: () => import('../..\\components\\Base\\Modal.vue' /* webpackChunkName: "components/base-modal" */).then(c => c.default || c),
  ChartsChart: () => import('../..\\components\\charts\\chart.vue' /* webpackChunkName: "components/charts-chart" */).then(c => c.default || c),
  FormsCreateEdo: () => import('../..\\components\\forms\\CreateEdo.vue' /* webpackChunkName: "components/forms-create-edo" */).then(c => c.default || c),
  FormsEditEdo: () => import('../..\\components\\forms\\EditEdo.vue' /* webpackChunkName: "components/forms-edit-edo" */).then(c => c.default || c),
  FormsMasterConsignee: () => import('../..\\components\\forms\\master\\Consignee.vue' /* webpackChunkName: "components/forms-master-consignee" */).then(c => c.default || c),
  FormsMasterFinalDestination: () => import('../..\\components\\forms\\master\\FinalDestination.vue' /* webpackChunkName: "components/forms-master-final-destination" */).then(c => c.default || c),
  FormsMasterPortOfDischarge: () => import('../..\\components\\forms\\master\\PortOfDischarge.vue' /* webpackChunkName: "components/forms-master-port-of-discharge" */).then(c => c.default || c),
  FormsMasterPortOfLoading: () => import('../..\\components\\forms\\master\\PortOfLoading.vue' /* webpackChunkName: "components/forms-master-port-of-loading" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
