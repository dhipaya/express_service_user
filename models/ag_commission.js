'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AG_Commission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AG_Commission.init({
    SUBCAMPAIGNID: DataTypes.INTEGER,
    BRANCHCODE: DataTypes.INTEGER,
    COMMRATE: DataTypes.INTEGER,
    OV: DataTypes.INTEGER,
    OE: DataTypes.INTEGER,
    OE2: DataTypes.INTEGER,
    TEMPRATE: DataTypes.INTEGER,
    RPTRATE: DataTypes.INTEGER,
    AGTGCODE: DataTypes.INTEGER,
    CUSTOMERGCODE: DataTypes.INTEGER
  }, {
    sequelize,
    schema: 'service_user',
    modelName: 'AG_Commission',
  });
  return AG_Commission;
};