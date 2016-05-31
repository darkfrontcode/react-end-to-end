import React from 'react'
import { render } from 'react-dom'
import { Router, useRouterHistory, match } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes/routes'
import Provider from './provider/provider'
import style from '../stylus/main'

const create_history = useRouterHistory(createBrowserHistory)
const history = create_history()

let props = window.__INITIAL_STATE__

match({ history, routes }, (error, redirectLocation, renderProps) => {
	render(
		<Provider friends={props}>
			<Router {...renderProps} />
		</Provider>,
		document.getElementById('app')
	)
})
