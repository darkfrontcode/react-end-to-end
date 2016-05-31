import React from 'react'
import {Route, Router, IndexRoute} from "react-router"

import Template from '../views/template'
import Home from '../views/home'
import NotFound from '../views/not_found'

export default(
	<Route path="/" component={Template}>
		<IndexRoute component={Home}/>
		<Route name="home" path="home" component={Home}/>
		<Route path="*" component={NotFound} />
	</Route>
)
