const ActiveSession = require('../v0/models/activeSession')

const reqAuth = (req, res, next) => {
    const token = String(req.headers.authorization);
    ActiveSession.findAll({ token: token }, function (err, session) {
        if (session.length == 1) {
            return next();
        } else {
            return res.json({ success: false, msg: 'User is not logged in' });
        }
    });
};

module.exports = { reqAuth }