const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "db_users",
  sync: true,
});

// const movies = require("./models/movie")(sequelize);
const users = require("./models/user")(db);

const init = async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log("db > init > ", error);
  }
};

module.exports = {
  init,
  users,
  //movies,
  sequelize,
};