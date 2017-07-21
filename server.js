'use strict';

const express = require('express');
const fs = require('fs');
const pg = require('pg');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static('./public'));

app.get('/index', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

//middleware plugins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

app.listen(PORT, () => console.log(`Your server is now running on port ${PORT}`));
