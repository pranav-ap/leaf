const { User } = require('./../models/user');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findbyToken(token).then((user) => {
    console.log('authenticate js');
    console.log('user -> ', user);
    if (!user) {
      console.log('not user ', user);
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    console.log('authenticate js -> error');
    console.log(e);
    res.status(401).send(e);
  });
};

module.exports = { authenticate };
