'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CT_Userlogin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CT_Userlogin.init({
    USERID: DataTypes.INTEGER,
    USERNAME: DataTypes.STRING,
    PASSWORD: DataTypes.STRING,
    FLAGDELETE: DataTypes.STRING,
    LOGINFAIL_NO: DataTypes.INTEGER,
    GROUPID: DataTypes.INTEGER,
    DHIPID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    schema: 'service_user',
    tableName: 'CT_Userlogins'
  });
  return CT_Userlogin;
};