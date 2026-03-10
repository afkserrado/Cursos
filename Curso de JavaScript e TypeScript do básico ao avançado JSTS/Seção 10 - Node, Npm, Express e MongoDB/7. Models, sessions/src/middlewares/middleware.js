exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVarLocal = 'Este é o valor da var local';
    next();
}