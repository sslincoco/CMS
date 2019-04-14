const Router = require("koa-router");
const router = new Router();
const home = require('../controllers/home')

router.get('/**', home.index)

module.exports =  router;