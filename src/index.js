const express = require('express');
const cors = require('cors');
const routeTask = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', routeTask);

module.exports = app;
