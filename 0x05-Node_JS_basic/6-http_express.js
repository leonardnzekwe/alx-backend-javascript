/**
 * Express is a fast, unopinionated, minimalist web framework for Node.js.
 * It provides a robust set of features for web and mobile applications.
 * @type {import('express')}
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {});
module.exports = app;
