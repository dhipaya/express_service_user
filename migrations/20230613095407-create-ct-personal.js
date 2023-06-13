'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CT_Personals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PERSONALID: {
        type: Sequelize.INTEGER
      },
      TITLEID: {
        type: Sequelize.INTEGER
      },
      SPOUSEID: {
        type: Sequelize.INTEGER
      },
      NAME: {
        type: Sequelize.STRING
      },
      SURNAME: {
        type: Sequelize.STRING
      },
      GENDER: {
        type: Sequelize.STRING
      },
      DATEOFBIRTH: {
        type: Sequelize.DATE
      },
      WORKID: {
        type: Sequelize.INTEGER
      },
      CITIZENID: {
        type: Sequelize.INTEGER
      },
      CITIZENIDEXPIRE: {
        type: Sequelize.DATE
      },
      CITIZENIDAPPROVED: {
        type: Sequelize.STRING
      },
      PASSPORTID: {
        type: Sequelize.STRING
      },
      PASSPORTEXPIRE: {
        type: Sequelize.DATE
      },
      TAXID: {
        type: Sequelize.STRING
      },
      TAXIDAPPROVED: {
        type: Sequelize.STRING
      },
      NAMEENG: {
        type: Sequelize.STRING
      },
      SURNAMEENG: {
        type: Sequelize.STRING
      },
      RACE: {
        type: Sequelize.STRING
      },
      NATIONALITY: {
        type: Sequelize.STRING
      },
      RELIGION: {
        type: Sequelize.STRING
      },
      WEIGHT: {
        type: Sequelize.INTEGER
      },
      HEIGHT: {
        type: Sequelize.INTEGER
      },
      MARRIAGESTATUS: {
        type: Sequelize.STRING
      },
      FIELD: {
        type: Sequelize.STRING
      },
      GRADUATIONDATE: {
        type: Sequelize.DATE
      },
      INSTITUTION: {
        type: Sequelize.STRING
      },
      MAJORINCOME: {
        type: Sequelize.INTEGER
      },
      MINORINCOME: {
        type: Sequelize.INTEGER
      },
      BIRTHPROVINCE: {
        type: Sequelize.INTEGER
      },
      INSTITUTIONPROVINCE: {
        type: Sequelize.INTEGER
      },
      REFPERSONALID: {
        type: Sequelize.INTEGER
      },
      FLAGDELETE: {
        type: Sequelize.STRING
      },
      FLGUSE: {
        type: Sequelize.STRING
      },
      FOREIGNID: {
        type: Sequelize.STRING
      },
      SSN: {
        type: Sequelize.STRING
      },
      OTHERNUMBER: {
        type: Sequelize.STRING
      },
      OTHERTYPE: {
        type: Sequelize.STRING
      },
      REFCOMMENT: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CT_Personals');
  }
};