const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./Develop/config/connection');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
