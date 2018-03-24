
const express = require("express");

const app = express();

/* cau hinh corss */
/* const cors = require('cors')


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions)); */

// app.use((request, response, next) => {
//     response.setHeader('Content-Type', 'application/json');
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

/* end */


/* connect database */
const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

//Database connection details internet;
const cn = {
    host: 'ec2-54-235-146-51.compute-1.amazonaws.com', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'd165i60tp5ph6b',
    user: 'fprwlcclapsznc',
    password: 'aeb59ea51821f4f1fa8b3ddcdb00e88430c2ef131b789c625cd3d5b5e65de300'
};

// const cn = {
//     host: 'localhost', // 'localhost' is the default;
//     port: 5432, // 5432 is the default;
//     database: 'restore',
//     user: 'postgres',
//     password: '123'
// };

var db = pgp(cn)

db.any('SELECT * from blog')
    .then(function (data) {
        console.log('DATA:', data.value)
    })
    .catch(function (error) {
        console.log('ERROR:', error)
    })

function select() {
    return db.one('select title from blog');
}

/* -- end -- */

/* -- cau hinh client */
app.use(express.static(__dirname + '/dist'));


/* -- cau hinh router */
app.get('/', (req, res) => {
    res.send();
})
app.get('/title', async (req, res) => {
    let data = await select();
    res.send(data);
});

app.listen(process.env.PORT || 8080);
console.log("Listen 8080");