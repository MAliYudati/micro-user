'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
        name: "yudha",
        profession: "Admin Micro",
        role: "admin",
        email: "aliyudhati12@gmail.com",
        password: await bcrypt.hash('rahasiaku1234', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "ali",
        profession: "Front End Developer",
        role: "student",
        email: "aliyudhati66@gmail.com",
        password: await bcrypt.hash('rahasiamu1234', 13),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};