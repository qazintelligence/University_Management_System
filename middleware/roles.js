module.exports = (...allowed) => (req, res, next) => {
    if (!req.user || !allowed.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden: insufficient rights' });
    next();
};
