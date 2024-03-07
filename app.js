const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const sequelize = require('./util/database');
// const User = require('./model/user');

const app = express();
app.use(cors());

const userRoutes = require('./routes/users');

app.use(bodyParser.json({extended: false}));

app.use('/user', userRoutes);

sequelize
.sync()
.then(result =>{
    //console.log(result);
    app.listen(3000)
})
.catch( err => console.log(err));
