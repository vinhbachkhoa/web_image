
const express = require("express");

const app = express();

// const promise = require('bluebird'); // or any other Promise/A+ compatible library;

// const initOptions = {
//     promiseLib: promise // overriding the default (ES6 Promise);
// };

// const pgp = require('pg-promise')(initOptions);
// // See also: http://vitaly-t.github.io/pg-promise/module-pg-promise.html

// // Database connection details;
// const cn = {
//     host: 'ec2-54-235-146-51.compute-1.amazonaws.com', // 'localhost' is the default;
//     port: 5432, // 5432 is the default;
//     database: 'd165i60tp5ph6b',
//     user: 'fprwlcclapsznc',
//     password: 'aeb59ea51821f4f1fa8b3ddcdb00e88430c2ef131b789c625cd3d5b5e65de300'
// };
// var db = pgp(cn)

app.use(express.static(__dirname + '/dist'));



// db.any('SELECT * from blog')
//     .then(function (data) {
//         console.log('DATA:', data.value)
//     })
//     .catch(function (error) {
//         console.log('ERROR:', error)
//     })

// function select() {
//     return db.one('select title from blog');
// }

app.get('/', async (req, res) => {
    // let data = await select();
    res.send("demo");
});

app.listen(process.env.PORT || 8080);
console.log("Listen 8080");