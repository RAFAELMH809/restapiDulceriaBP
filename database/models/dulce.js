'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dulce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dulce.init({
    nombreDulces: DataTypes.STRING,
    precio: DataTypes.DECIMAL(10,2),
    cantidad: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    color: DataTypes.STRING,
    sabor: DataTypes.STRING


    
  }, {
    sequelize,
    modelName: 'Dulce',
  });
  return Dulce;
};