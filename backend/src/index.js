const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

//translate json to a javascript object
app.use(express.json());

//To define the hostname for your application 
// app.use(cors({
//     origin: 'http://meuapp.com'
// }))

app.use(cors());

app.use(routes);

app.listen(3333);