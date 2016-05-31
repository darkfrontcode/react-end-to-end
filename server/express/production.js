import express from 'express'
import path from 'path'

const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const app = express()

app.set('views', path.join(__dirname, '../jade'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/:page', function(req, res) {
    if(req.params.page != 'pages'){
        res.render('index');
    }
});

app.get('/pages/:name', function (req, res) {
    res.render('pages/' + req.params.name);
});

app.listen(port, function(){
	console.log("Express server listening on port "+ port +" in "+ environment +" mode");
});
