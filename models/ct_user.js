'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CT_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CT_User.init({
    USERID: DataTypes.INTEGER,
    PERSONALID: DataTypes.INTEGER,
    BRANCHCODE: DataTypes.INTEGER,
    TYPE: DataTypes.STRING,
    FLAGDELETE: DataTypes.STRING,
    TYPEUSER: DataTypes.STRING,
    DEPARTMENTCODE: DataTypes.STRING,
    KPIBRANCHID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CT_User',
  });
  return CT_User;
};