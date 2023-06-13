'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("service_user");
    await queryInterface.createTable('CT_Userlogins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USERID: {
        unique: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      USERNAME: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      PASSWORD: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FLAGDELETE: {
        allowNull: false,
        defaultValue: 'N',
        type: Sequelize.STRING
      },
      LOGINFAIL_NO: {

        type: Sequelize.INTEGER
      },
      GROUPID: {
        type: Sequelize.INTEGER
      },
      DHIPID: {
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
    await queryInterface.dropTable('CT_Userlogins',{
      schema: 'service_user',
  });
  }
};