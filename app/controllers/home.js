
const config = require('../config');

const index = async (ctx) =>{
  await ctx.render('index',{
      jsVersion:config.jsVersion
  })
}

module.exports = {
  index
}