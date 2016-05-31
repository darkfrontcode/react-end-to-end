import angular from 'angular'
import router from 'angular-ui-router'
import routerConfig from './router/config'
import displayFriend from './directives/display_friend'
import friends from './services/friends'

angular.module('app', [router, friends, displayFriend]).config(routerConfig)
