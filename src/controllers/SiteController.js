const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/models/db.json');
class SiteController {
    // [GET] / login
    index(req, res) {
        res.render('login');
    }
    auth(req, res) {
        // res.send('Incorrect');
        var username = req.body.username;
        var password = req.body.password;
        if (username == junnhn && password == 123) {
            req.session.loggedin = true;
            req.session.username = username;
            // res.redirect('/auth');
            res.redirect('auth');
        } else {
            res.send('Incorrect Username and/or Password!');
        }
    }
}

module.exports = new SiteController;