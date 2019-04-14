require("babel-polyfill");
const Koa = require('koa');
// const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const app = new Koa();
const router = require('./routes');
const config = require('./config')

// const path = process.env.NODE_ENV ? config.view_path : __dirname + '/views';
const path = __dirname + '/views';


app.use(
	views(path, {
		map: {
			html: 'lodash',
		},
	}),
)

app.use(router.routes(), router.allowedMethods())

app.listen(3000);
console.log("app started on port 3000...");

