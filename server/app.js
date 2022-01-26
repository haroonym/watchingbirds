const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(helmet());

app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

// app.get('/test', (req, res) => res.send('Yeah, you reached the test route!'));
app.use('/', routes);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
