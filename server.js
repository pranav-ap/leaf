const express = require('express');
const path = require('path');
// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

// change https to http req.headers[] doesn't exist locally
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//Default 404 page
app.use((req, res) => {
    res.type('text/html');
    res.status(404);
    res.send('404 - Not Found');
});

// Default 500 Error page
app.use((err, req, res) => {
    console.error(err.stack);
    res.type('text/html');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(PORT, () => {
  console.log(`'Successfully Connected with express on ${PORT}`);
});
