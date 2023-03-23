const express = require('express');
const app = express();

const { Categris } = require('./data')

app.get('/',Categris);

app.listen(5000)