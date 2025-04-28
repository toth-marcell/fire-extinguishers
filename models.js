import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite:data/db.sqlite");

export const Extinguisher = sequelize.define("Extinguisher", {
  uuid: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  materialType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  manufactured: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  inspected: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export const Inspector = sequelize.define("Inspector", {
  uuid: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualifiedFor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

await sequelize.sync();
