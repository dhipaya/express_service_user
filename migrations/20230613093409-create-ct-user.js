'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CT_Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USERID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      PERSONALID: {
        type: Sequelize.INTEGER
      },
      BRANCHCODE: {
        type: Sequelize.INTEGER
      },
      TYPE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FLAGDELETE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TYPEUSER: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DEPARTMENTCODE: {
        type: Sequelize.STRING
      },
      KPIBRANCHID: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('CT_Users',{
      schema: 'service_user',
  });
  }
};