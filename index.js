require('dotenv').config();
const path = require('node:path');
const express = require('express');
const expressSession = require('express-session');
const app = express();
const router = require('./app/router');
const userMiddleware = require('./middlewares/user');
const { 
    notFound,
    devErrorHandler,
    prodErrorHandler
 } = require('./middlewares/errorHandler');


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));

const viewsDirectory = path.join(__dirname, '/app/views');
app.set('views', viewsDirectory);

app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60, // 1H
        },
}

app.use(expressSession(sessionConfig));

app.use(userMiddleware);

app.use(router);


app.use(notFound);

app.use(devErrorHandler);

app.set('port', process.env.PORT || 5000);
app.set('base_url', process.env.BASE_URL || 'http://localhost');

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('base_url')}:${app.get('port')}`);
});
