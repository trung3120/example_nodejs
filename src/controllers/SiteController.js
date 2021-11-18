
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const accessTokenSecret = 'youraccesstokensecret';

const users = [
    {
        username: 'junnhn',
        password: '123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: '123member',
        role: 'member'
    }
];

class SiteController {
    // [GET] / login
    index(req, res) {
        res.render('login');
    }
    
    auth(req, res) {
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
    };
}

module.exports = new SiteController;