/**
 * Express is a minimal and flexible Node.js web application
 * framework that provides a robust set of features for web and mobile applications.
 * @typedef {import('express')} express
 */
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
  });

app.get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params.id}`);
  });

app.listen(7865, () => {console.log('API available on localhost port 7865')});
module.exports = app;
