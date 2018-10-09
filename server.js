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

/* -- cau hinh client */
app.use(express.static(__dirname + '/dist'));


/* -- cau hinh router */
app.get('/', (req, res) => {
    res.send();
})

app.listen(process.env.PORT || 8080);
console.log("Listen 8080");