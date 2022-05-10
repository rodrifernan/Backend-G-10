const { Role } = require('../src/db');
const bcrypt = require('bcrypt');

const rolesMockUp = async () => {
  try {
    await Role.create({
      id: 'ad114fef-1e85-4dd7-af41-a252935b4e41',
      title: 'root',
    });

    await Role.create({
      id: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
      title: 'user',
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = rolesMockUp;
