import React from 'react'
import {Route, Router, IndexRoute} from "react-router"

import Template from '../views/template'
import Home from '../views/home'
import About from '../views/about'
import NotFound from '../views/not_found'

export default(
	<Route path="/" component={Template}>
		<IndexRoute component={Home}/>
		<Route name="home" path="home" component={Home}/>
		<Route name="about" path="about" component={About}/>
		<Route path="*" component={NotFound} />
	</Route>
)
