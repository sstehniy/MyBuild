const mongoose = require('mongoose');
const chalk = require('chalk');
const jsonServer = require('json-server');

require('dotenv').config();

const uri = process.env.MONGODB_URI;

const connectToDb = async () => {
  if (uri) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log(chalk.green('successfully connected to db'));
    } catch (error) {
      console.log(error);
      console.log(chalk.bold.red('failed to connect to db'));
    }
  } else {
    const server = jsonServer.create();
    const router = jsonServer.router('db.json');
    const middleware = jsonServer.defaults();
    const dbPort = 5001;
    server.use(router);
    server.use(middleware);
    server.listen(dbPort, () =>
      console.log(chalk.yellow(`connected to local json-db on port ${dbPort}`))
    );
  }
};

module.exports = { connectToDb };
