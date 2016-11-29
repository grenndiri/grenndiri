import angular from 'angular'

import {main} from './app/main'
import 'angular-ui-router'
import routesConfig from './routes'

//component graphic import
import {notificationsComponent} from './app/component-graphic/notifications'
import {mapDisplayComponent} from './app/component-graphic/map-display'

import './index.scss'

export const app = 'app'

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('notificationsTOTO', notificationsComponent)
  .component('mapDisplay', mapDisplayComponent);
