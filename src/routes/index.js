const siteRouter = require('./site')

function route(app) {
    app.use('/api/v1', siteRouter);

    app.use('/', (req, res) => {
        res.render('login');
    });

    app.post('/users', (req, res) => {
        // Read username and password from request body
        const { username, password } = req.body;
    
        // Filter user from the users array by username and password
        const user = users.find(u => { return u.username === username && u.password === password });
    
        if (user) {
            // Generate an access token
            const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);
    
            res.json({
                accessToken
            });
        } else {
            res.send('Username or password incorrect');
        }
    });
}

module.exports = route;