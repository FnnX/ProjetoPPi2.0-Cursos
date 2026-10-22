module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Curso",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      icone: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      status: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      titulo: {
        type: DataTypes.STRING(120),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 120]
        }
      },
      instrutor: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: "Instrutor"
      },
      cargaHoraria: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 20]
        }
      },
      vagas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1
        }
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      tableName: "cursos",
      timestamps: true
    }
  );
};
