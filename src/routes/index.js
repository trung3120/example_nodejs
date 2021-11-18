const siteRouter = require('./site')

function route(app) {
    app.use('/api/v1', siteRouter);

    app.use('/', (req, res) => {
        res.render('login');
    });

}

module.exports = route;