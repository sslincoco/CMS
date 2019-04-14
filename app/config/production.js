const port = Number.parseInt(process.env.PORT) || 6060;
const mongoUri = ''

module.exports = {
    port,
    mongoUri,
    mongoUriParam: 'authSource=admin',
    sessionURL:{
        url: mongoUri+'/fenxiao_user?authSource=admin&poolSize=5',
        collection: 'sessions',
    },
    cdnHostName: 'https://cdn.bootcss.com/',
    jsVersion:'1.0.0',
    view_path:'./'
};