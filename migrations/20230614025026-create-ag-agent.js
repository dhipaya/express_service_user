'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AG_Agents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AGENTCODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      BROKERCODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      AGENTGROUPCODE: {
        type: Sequelize.INTEGER
      },
      AGENTSUBGROUPCODE: {
        type: Sequelize.INTEGER
      },
      AGENTBELONGCODE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      LICENSE: {
        type: Sequelize.STRING
      },
      REGDATE: {
        type: Sequelize.DATE
      },
      ENDDATE: {
        type: Sequelize.DATE
      },
      LICENSEEXP: {
        type: Sequelize.DATE
      },
      STATUS: {
        allowNull: false,
        type: Sequelize.STRING
      },
      AGENTYPE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PERSONALID: {
        type: Sequelize.INTEGER
      },
      BRANCHCODE: {
        type: Sequelize.INTEGER
      },
      CREDIT: {
        type: Sequelize.INTEGER
      },
      CREDITLEFT: {
        type: Sequelize.INTEGER
      },
      CREDITMOTOR: {
        type: Sequelize.INTEGER
      },
      CREDITMOTORLEFT: {
        type: Sequelize.INTEGER
      },
      CREDITFIRE: {
        type: Sequelize.INTEGER
      },
      CREDITFIRELEFT: {
        type: Sequelize.INTEGER
      },
      CREDITMARINE: {
        type: Sequelize.INTEGER
      },
      CREDITMARINELEFT: {
        type: Sequelize.INTEGER
      },
      CREDITMISC: {
        type: Sequelize.INTEGER
      },
      CREDITMISCLEFT: {
        type: Sequelize.INTEGER
      },
      CREDITFLAG: {
        type: Sequelize.STRING
      },
      CREDITMOTORPERIOD: {
        type: Sequelize.INTEGER
      },
      CREDITFIREPERIOD: {
        type: Sequelize.INTEGER
      },
      CREDITMARINEPERIOD: {
        type: Sequelize.INTEGER
      },
      CREDITMISCPERIOD: {
        type: Sequelize.INTEGER
      },
      DELIVERFLAG: {
        type: Sequelize.STRING
      },
      DUEMOTORFLAG: {
        type: Sequelize.STRING
      },
      DUEFIREFLAG: {
        type: Sequelize.STRING
      },
      DUEMARINEFLAG: {
        type: Sequelize.STRING
      },
      DUEMISCFLAG: {
        type: Sequelize.STRING
      },
      HASMOUMOTOR: {
        type: Sequelize.STRING
      },
      HASMOUFIRE: {
        type: Sequelize.STRING
      },
      HASMOUMARINE: {
        type: Sequelize.STRING
      },
      HASMOUMISC: {
        type: Sequelize.STRING
      },
      PAYDEDUCTCOMMISSION: {
        type: Sequelize.STRING
      },
      LEFTOVERCOMMISSION: {
        type: Sequelize.STRING
      },
      COMMISSIONMOTORFLAG: {
        type: Sequelize.STRING
      },
      COMMISSIONFIREFLAG: {
        type: Sequelize.STRING
      },
      COMMISSIONMARINEFLAG: {
        type: Sequelize.STRING
      },
      COMMISSIONMISCFLAG: {
        type: Sequelize.STRING
      },
      FLAGDELETE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      APPLICATIONNO: {
        type: Sequelize.STRING
      },
      KPIBRANCHID: {
        type: Sequelize.INTEGER
      },
      AREACODE: {
        type: Sequelize.STRING
      },
      AGENTBELONGCODE2: {
        type: Sequelize.INTEGER
      },
      AGENTBELONGKTB: {
        type: Sequelize.INTEGER
      },
      AGENTBELONGFIN: {
        type: Sequelize.INTEGER
      },
      GROUPAGENTCODE: {
        type: Sequelize.INTEGER
      },
      SUBGROUPAGENTCODE: {
        type: Sequelize.INTEGER
      },
      FLAGNOPAYDEDUCT: {
        type: Sequelize.STRING
      },
      ENTITYID: {
        type: Sequelize.INTEGER
      },
      GROUPCODE: {
        type: Sequelize.INTEGER
      },
      LINECODE: {
        type: Sequelize.INTEGER
      },
      ACCOWNERID: {
        type: Sequelize.INTEGER
      },
      IIABRANCHCODE: {
        type: Sequelize.STRING
      },
      PROVINCENAMETH: {
        type: Sequelize.STRING
      },
      PROVINCENAMEENG: {
        type: Sequelize.STRING
      },
      DISTRICTNAMETH: {
        type: Sequelize.STRING
      },
      DISTRICTNAMEENG: {
        type: Sequelize.STRING
      },
      SUBDISTRICTNAMETH: {
        type: Sequelize.STRING
      },
      SUBDISTRICTNAMEENG: {
        type: Sequelize.STRING
      },
      CUSTOMER_GROUP_CODE: {
        type: Sequelize.STRING
      },
      ACCOUNT_OWNER_ENTIRYID: {
        type: Sequelize.STRING
      },
      SPECFLAG: {
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      schema: 'service_user',
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AG_Agents',{
      schema: 'service_user',
  });
  }
};