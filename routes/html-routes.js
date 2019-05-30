//module exports exports this function so it can be required by another file (in this case : server.js)
//Must pass in app because it contains express application
const path = require('path');
const mysql = require('mysql');

module.exports = function (app, connection) {
    // if no matching route is found default to index.html
    app.get('/', function (req, res) {
        // res.send('hello i am coco !');
        connection.query('SELECT * FROM `tuto_bdd`.users', function (err, data) {
            (err) ? res.send(err) : res.json({ users: data });
        });
    });
}