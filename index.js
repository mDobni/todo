const config = require('./config')();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data')(config);


const app = express();
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use('/', (req, res) => res.json('Hello World!'));
app.use(router);

const globals = {
  config,
  router,
  db,
};
globals.repositories = require('./repositories')(globals);
globals.services = require('./services')(globals);
require('./controllers/rest/router')(globals);

console.log(`Server listening on port ${process.env.NODE_ENV} with config\n${JSON.stringify(config, 0, 2)}`);

app.listen(config.infrastructure.port);
