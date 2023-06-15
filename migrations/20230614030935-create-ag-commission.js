'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AG_Commissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SUBCAMPAIGNID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      BRANCHCODE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      COMMRATE: {
        type: Sequelize.INTEGER
      },
      OV: {
        type: Sequelize.INTEGER
      },
      OE: {
        type: Sequelize.INTEGER
      },
      OE2: {
        type: Sequelize.INTEGER
      },
      TEMPRATE: {
        type: Sequelize.INTEGER
      },
      RPTRATE: {
        type: Sequelize.INTEGER
      },
      AGTGCODE: {
        type: Sequelize.INTEGER
      },
      CUSTOMERGCODE: {
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
    await queryInterface.dropTable('AG_Commissions',{
      schema: 'service_user',
  });
  }
};