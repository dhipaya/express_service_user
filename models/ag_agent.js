'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AG_Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AG_Agent.init({
    AGENTCODE: DataTypes.STRING,
    BROKERCODE: DataTypes.STRING,
    AGENTGROUPCODE: DataTypes.INTEGER,
    AGENTSUBGROUPCODE: DataTypes.INTEGER,
    AGENTBELONGCODE: DataTypes.INTEGER,
    LICENSE: DataTypes.STRING,
    REGDATE: DataTypes.DATE,
    ENDDATE: DataTypes.DATE,
    LICENSEEXP: DataTypes.DATE,
    STATUS: DataTypes.STRING,
    AGENTYPE: DataTypes.STRING,
    PERSONALID: DataTypes.INTEGER,
    BRANCHCODE: DataTypes.INTEGER,
    CREDIT: DataTypes.INTEGER,
    CREDITLEFT: DataTypes.INTEGER,
    CREDITMOTOR: DataTypes.INTEGER,
    CREDITMOTORLEFT: DataTypes.INTEGER,
    CREDITFIRE: DataTypes.INTEGER,
    CREDITFIRELEFT: DataTypes.INTEGER,
    CREDITMARINE: DataTypes.INTEGER,
    CREDITMARINELEFT: DataTypes.INTEGER,
    CREDITMISC: DataTypes.INTEGER,
    CREDITMISCLEFT: DataTypes.INTEGER,
    CREDITFLAG: DataTypes.STRING,
    CREDITMOTORPERIOD: DataTypes.INTEGER,
    CREDITFIREPERIOD: DataTypes.INTEGER,
    CREDITMARINEPERIOD: DataTypes.INTEGER,
    CREDITMISCPERIOD: DataTypes.INTEGER,
    DELIVERFLAG: DataTypes.STRING,
    DUEMOTORFLAG: DataTypes.STRING,
    DUEFIREFLAG: DataTypes.STRING,
    DUEMARINEFLAG: DataTypes.STRING,
    DUEMISCFLAG: DataTypes.STRING,
    HASMOUMOTOR: DataTypes.STRING,
    HASMOUFIRE: DataTypes.STRING,
    HASMOUMARINE: DataTypes.STRING,
    HASMOUMISC: DataTypes.STRING,
    PAYDEDUCTCOMMISSION: DataTypes.STRING,
    LEFTOVERCOMMISSION: DataTypes.STRING,
    COMMISSIONMOTORFLAG: DataTypes.STRING,
    COMMISSIONFIREFLAG: DataTypes.STRING,
    COMMISSIONMARINEFLAG: DataTypes.STRING,
    COMMISSIONMISCFLAG: DataTypes.STRING,
    FLAGDELETE: DataTypes.STRING,
    APPLICATIONNO: DataTypes.STRING,
    KPIBRANCHID: DataTypes.INTEGER,
    AREACODE: DataTypes.STRING,
    AGENTBELONGCODE2: DataTypes.INTEGER,
    AGENTBELONGKTB: DataTypes.INTEGER,
    AGENTBELONGFIN: DataTypes.INTEGER,
    GROUPAGENTCODE: DataTypes.INTEGER,
    SUBGROUPAGENTCODE: DataTypes.INTEGER,
    FLAGNOPAYDEDUCT: DataTypes.STRING,
    ENTITYID: DataTypes.INTEGER,
    GROUPCODE: DataTypes.INTEGER,
    LINECODE: DataTypes.INTEGER,
    ACCOWNERID: DataTypes.INTEGER,
    IIABRANCHCODE: DataTypes.STRING,
    PROVINCENAMETH: DataTypes.STRING,
    PROVINCENAMEENG: DataTypes.STRING,
    DISTRICTNAMETH: DataTypes.STRING,
    DISTRICTNAMEENG: DataTypes.STRING,
    SUBDISTRICTNAMETH: DataTypes.STRING,
    SUBDISTRICTNAMEENG: DataTypes.STRING,
    CUSTOMER_GROUP_CODE: DataTypes.STRING,
    ACCOUNT_OWNER_ENTIRYID: DataTypes.STRING,
    SPECFLAG: DataTypes.STRING
  }, {
    sequelize,
    schema: 'service_user',
    modelName: 'AG_Agent',
  });
  return AG_Agent;
};