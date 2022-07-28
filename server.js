'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is a small app.\n It has been created as a docker container using Jenkins pipeline. Jenkins itself is running as a task in aws elastic container service ecs! ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);