const express = require('express');
const routeTask = require('./routes');

const app = express();

app.use(express.json());
app.use('/tasks', routeTask);

module.exports = app;
