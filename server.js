'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const superagent = require('superagent');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(express.static('./public'));
app.get('*', (req, res)=> {
  res.sendFile('index.html', {root: './public'});
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});