require('dotenv').config();

exports.config = {
    password: {
        length: 8,
        saltRound: 12
    },
    session: {
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60, // 1H
        },
    },
};