import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite:data/db.sqlite");

export const Extinguisher = sequelize.define("Extinguisher", {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
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
  },
});

export const Inspector = sequelize.define("Inspector", {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
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
