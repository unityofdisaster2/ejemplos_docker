require('dotenv').config();


const express = require('express');


const { dbConnection } = require('./database/config');


var cors = require('cors');


// crear servidor

const app = express();

// middleware ejecuta la instruccion cada que alguien pase por este punto
app.use(cors());

// configurar cors 


// base de datos
dbConnection();


// lectura y parseo del body

app.use(express.json());

// raiz del endpoint de diagramas
app.use('/api/users', require('./routes/users'));

// app.use('/healthcheck', function (req, res) {
//     return res.json({
//         message: 'everything is fine',
//         code: 200
//     });
// });





app.listen(process.env.PORT, () => {
    console.log('server running');
})