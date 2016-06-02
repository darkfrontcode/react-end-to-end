import express from 'express'
import path from 'path'
import React                     		from 'react'
import { renderToString }        		from 'react-dom/server'
import { RouterContext, match, router } from 'react-router'
import createLocation 					from 'history/lib/createLocation'
import routes                    		from '../react/routes/routes'
import webpack 							from 'webpack'
import webpack_config 					from '../webpack/development'
import webpack_dev_middleware 			from 'webpack-dev-middleware'
import webpack_hot_middleware 			from 'webpack-hot-middleware'
import Provider 						from '../react/provider/provider'
import friends							from '../resources/friends'

const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const app = express()

app.set('views', path.join(__dirname, '../jade'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, '../../public')));

app.use((req, res) => {

	const location = createLocation(req.url)

	match({ routes, location }, (err, redirectLocation, renderProps) => {

		if(err){
			console.error(err);
			return res.status(500).end('Internal server error')
		}
		if (!renderProps) return res.status(404).end('Not found.')

		const component = (
			<Provider friends={friends}>
				<RouterContext {...renderProps} />
			</Provider>
		)

		const content = renderToString(component)

		res.render('template', {
			content: content,
			props: JSON.stringify(friends)
		})
	})
})

app.listen(port, function(){
	console.log("Express server listening on port "+ port +" in "+ environment +" mode");
});
