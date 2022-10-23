const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const express = require('express');
const courses = require('./routes/courses');
const home = require('./routes/home');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // default

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

// Configuration
console.log('ASL Learning: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}

app.use(logger);

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));