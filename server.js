const { time, error } = require('console');
const express = require('express');
const createPath = require('./helpers/create-path');
const morgan = require('morgan');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const postRouter = require('./routes/post-routes');
const contactRouter = require('./routes/contact-routes');
const mainRouter = require('./routes/main-routes');
const restapiRouter = require('./routes/api-post-routes');
const noneRouter = require('./routes/none-routes');

// Server params
// const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.listen(process.env.SERVER_PORT, "localhost", (error) => {
    error ? console.log(error) : console.log(`Listening on ${process.env.SERVER_PORT}`);;
});

// DB params
const db_user = process.env.MONGO_DB_USER
const db_upass = process.env.MONGO_DB_PASSWORD
const db_name = process.env.MONGO_DB_DATABASE
const db_path = `mongodb+srv://${db_user}:${db_upass}@cluster0.q91et.mongodb.net/${db_name}?retryWrites=true&w=majority`
mongoose
    .connect(db_path, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))


// STATICs
app.use(express.static('styles'));
// EXTENDS
//SEND DATA BY - URLENCODED form
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// LOGGING
app.use(morgan(':method :url :status :res[Content-Length] - :response-time ms'));
app.use((req, res, next) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "." + today.getMilliseconds();
    var dateTime = date + ' ' + time;
    var data = dateTime + ' '
        + req.method + ' "'
        + req.url + '" '
        + res.statusCode
        + ' <' + req.headers['User-agent']
        + '>\n';
    fs.appendFileSync('./server.log', data, (error) => {
        error ? console.log(error) : null;
    });
    // console.log(data);
    next();
});

// ROUTES BIND
app.use('/blogjs', postRouter);
app.use('/blogjs',mainRouter);
app.use('/blogjs',contactRouter);
app.use('/blogjs',restapiRouter);
app.use((req, res)=>{
    const title = 'Error page*'
    res
    .status(404)
    .render(createPath('error'), { title});
})
app.use(noneRouter);