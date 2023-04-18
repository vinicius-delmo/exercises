const startuprDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('.//routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

console.log(`Aplicstion Name: ${config.get('name')}`);
console.log(`Mail Server Name: ${config.get('mail.host')}`);

/* if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startuprDebugger('Morgan enabled...');
} */

//dbDebugger('Connected to DB')

app.use(logger);

app.use(function (req, res, next) {
  console.log('Authenticating...');
  next();
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));
