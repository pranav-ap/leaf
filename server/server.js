require('./config/config');

const _ = require('lodash');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// change https to http req.headers[] doesn't exist locally
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());

// add new todo
app.post('/api/todos', authenticate, (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    _creator: req.user._id
  });

  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, () => {
    res.status(400).send();
  });
});

// send all todos on start
app.get('/api/todos', authenticate, (req, res) => {
  Todo.find({
    _creator: req.user._id
  }).then((todos) => {
    res.status(200).send({ todos });
  }, () => {
    res.status(400).send();
  });
});

// send only the todo with id
app.get('/api/todos/:id', authenticate, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findOne({
    _id: id,
    _creator: req.user._id
  }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.status(200).send({ todo });
  }).catch(() => {
    res.status(400).send();
  });
});

// delete todo with id
app.delete('/api/todos/:id', authenticate, (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.status(200).send({ todo });
  }).catch(() => {
    res.status(400).send();
  });
});

// update a todo
app.patch('/api/todos/:id', authenticate, (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate({
    _id: id,
    _creator: req.user._id
  }, { $set: body }, { new: true }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.status(200).send({ todo });
  }).catch(() => {
    res.status(400).send();
  });
});

// Sign up
app.post('/api/users', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  const user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    // header(key, value) x- means custom header
    res.header('x-auth', token).status(200).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

// to authenticate user
app.get('/api/users/me', authenticate, (req, res) => {
  res.status(200).send(req.user);
});

// login
app.post('/api/users/login', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  console.log('server');
  console.log('password ', body.password);

  User.findByCredentials(body.email, body.password).then((user) => {
    console.log('1');
    return user.generateAuthToken().then((token) => {
      console.log('2');
      res.header('x-auth', token).send(user);
    });
  }).catch(() => {
    console.log('3');
    res.status(400).send();
  });
});

// logout
app.delete('/api/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }).catch(() => {
    res.status(400).send();
  });
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

//Default 404 page
app.use((req, res) => {
  console.log('404 - Not Found');
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

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };
