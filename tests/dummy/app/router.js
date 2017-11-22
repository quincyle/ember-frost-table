import Ember from 'ember'
const {Router} = Ember
import config from './config/environment'

const DemoRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

DemoRouter.map(function () {
  this.route('demo', {path: '/'}, function () {
    this.route('overview', {path: '/'})
    this.route('cell-renderers')
    this.route('frost-fixed-table')
    this.route('frost-table')
    this.route('frost-table-body')
    this.route('frost-table-header')
    this.route('frost-table-row')
    this.route('selection')
  })
})

export default DemoRouter
