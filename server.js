const express = require('express');
const routes = require('./routes');

const sequelize = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
