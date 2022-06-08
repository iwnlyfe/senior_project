// const mongoConnect = require('./util/database').mongoConnect;

// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');

// const app = express();

// // app.use(multer);
// // app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// app.use(bodyParser.json()); // application/json

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// mongoConnect(() => {
//     app.listen(3001);
// });

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config();
const { readdirSync } = require('fs')
// const mongoConnect = require('./util/database').mongoConnect
const connectDB = require('./util/db')

const app = express();



// MiddleWare
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '20mb'})) // application/json
app.use(cors()) 

// Route with ReadDIR
readdirSync('./routes').map((read) => app.use('/api', require('./routes/' +read),
))

// Route
// const api = require('./routes/api')
// app.use('/api', api)

// ConnectDB
connectDB()

const port = process.env.PORT
app.listen(port, () => {
    console.log('Server is running on port ' +port)
});


// mongoConnect(() => {
//     app.listen(process.env.PORT)
// })