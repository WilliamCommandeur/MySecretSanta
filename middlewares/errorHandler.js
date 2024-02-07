/**
 * une middleware qui détecte les erreurs dans les promesses, et qui lève un erreur si besoin.
 * cette erreur sera transmise au middleware de gestion d'erreur qui est le dernier de la chaînes
 * @param {function} fn
 */
const catchErrors = fn => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
        // return fn(req, res, next).catch(err => next(err));
    };
};

const notFound = (req, res, next) => {
    const error = new Error('Not Found');

    error.status = 404;

    // * quand on appelle next avec un argument, express lève une erreur : cette erreur on doit l'intercepter
    next(error);
};

const devErrorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;

    res.status(statusCode).render('error', {
        message: err.message,
        stack: err.stack,
        status: statusCode,
    });
};

const prodErrorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;

    res.status(statusCode).render('error', {
        message: err.message,
        stack: null,
        status: null,
    });
};

module.exports = { notFound, catchErrors, devErrorHandler, prodErrorHandler };