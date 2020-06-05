const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { logger } = require('./config/logger');
const { connectToDb } = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
logger(app);

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/api', (_req, res, _next) => {
  res.status(200).send(`Success! <br /> Date: ${new Date().toISOString()}`);
});

app.get('/*', (req, res, _next) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

const startServer = async () => {
  await new Promise((resolve, _) => {
    app.listen(port, () => console.log(`server running on port ${port}`));
    resolve();
  });
  connectToDb();
};

startServer();
