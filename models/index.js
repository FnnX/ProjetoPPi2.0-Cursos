const path = require("node:path");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "..", "database", "cursos.sqlite"),
  logging: false
});

const Curso = require("./curso")(sequelize, DataTypes);

module.exports = { sequelize, Curso };
