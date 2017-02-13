var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  const config = require('./config.json');

  let envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

// else if (env === 'production') {
//   process.env.MONGODB_URI = 'mongodb://hog:hog@ds139899.mlab.com:39899/groundhogdb';
// }
