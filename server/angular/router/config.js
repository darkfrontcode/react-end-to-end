routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

import homeRoute from './routes/home'
import aboutRoute from './routes/about'

export default function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home', homeRoute)
        .state('about', aboutRoute)
}
