'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CT_Personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CT_Personal.init({
    PERSONALID: DataTypes.INTEGER,
    TITLEID: DataTypes.INTEGER,
    SPOUSEID: DataTypes.INTEGER,
    NAME: DataTypes.STRING,
    SURNAME: DataTypes.STRING,
    GENDER: DataTypes.STRING,
    DATEOFBIRTH: DataTypes.DATE,
    WORKID: DataTypes.INTEGER,
    CITIZENID: DataTypes.INTEGER,
    CITIZENIDEXPIRE: DataTypes.DATE,
    CITIZENIDAPPROVED: DataTypes.STRING,
    PASSPORTID: DataTypes.STRING,
    PASSPORTEXPIRE: DataTypes.DATE,
    TAXID: DataTypes.STRING,
    TAXIDAPPROVED: DataTypes.STRING,
    NAMEENG: DataTypes.STRING,
    SURNAMEENG: DataTypes.STRING,
    RACE: DataTypes.STRING,
    NATIONALITY: DataTypes.STRING,
    RELIGION: DataTypes.STRING,
    WEIGHT: DataTypes.INTEGER,
    HEIGHT: DataTypes.INTEGER,
    MARRIAGESTATUS: DataTypes.STRING,
    FIELD: DataTypes.STRING,
    GRADUATIONDATE: DataTypes.DATE,
    INSTITUTION: DataTypes.STRING,
    MAJORINCOME: DataTypes.INTEGER,
    MINORINCOME: DataTypes.INTEGER,
    BIRTHPROVINCE: DataTypes.INTEGER,
    INSTITUTIONPROVINCE: DataTypes.INTEGER,
    REFPERSONALID: DataTypes.INTEGER,
    FLAGDELETE: DataTypes.STRING,
    FLGUSE: DataTypes.STRING,
    FOREIGNID: DataTypes.STRING,
    SSN: DataTypes.STRING,
    OTHERNUMBER: DataTypes.STRING,
    OTHERTYPE: DataTypes.STRING,
    REFCOMMENT: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CT_Personal',
  });
  return CT_Personal;
};