const { Role } = require('../src/db');
const bcrypt = require('bcrypt');

const rolesMockUp = async () => {
  try {
    await Role.create({
      title: 'root',
    });
    await Role.create({
      title: 'user',
    });

    await Role.create({
      title: 'client',
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = rolesMockUp;
