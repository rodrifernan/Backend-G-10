const { Role } = require('../src/db');
const bcrypt = require('bcrypt');

const rolesMockUp = async () => {
  try {
    await Role.create({
      id: 'ad114fef-1e85-4dd7-af41-a252935b4e48',
      title: 'root',
    });
    await Role.create({
      id: '3ad49ae2-8867-4b42-8b58-ac35b61ca403',
      title: 'user',
    });

    await Role.create({
      id: '29755ab4-c30a-4606-931a-c7362d0fd7f8',
      title: 'client',
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = rolesMockUp;
