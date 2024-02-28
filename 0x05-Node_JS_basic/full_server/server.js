const express = require('express');

const app = express();
/**
 * The routes module.
 * @type {object}
 */
const routes = require('./routes/index');

app.use('/', routes);

app.listen(1245, () => {});
module.exports = app;
