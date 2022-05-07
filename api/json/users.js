const { User } = require('../src/db');
const bcrypt = require('bcrypt');

const usersMockUp = async () => {
  try {
    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45a',
      userName: 'Juanito2',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Junito',
      lastName: 'Alimaña Navaja',
      phone: '+51 987654654',
      email: 'junito@gmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e48',
      idPersonal: '87653221',
    });

    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      userName: 'Leidy',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Leidy',
      lastName: 'Nuñes',
      phone: '+51 978654154',
      email: 'leidy@gmail.com',
      address: 'Calle luna',
      roleId: '3ad49ae2-8867-4b42-8b58-ac35b61ca403',
      idPersonal: '87653221',
    });

    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      userName: 'Johannes',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Johannes',
      lastName: 'Gómez',
      phone: '+51 875454369',
      email: 'Johannes@gmail.com',
      address: 'Calle luna',
      roleId: '3ad49ae2-8867-4b42-8b58-ac35b61ca403',
      idPersonal: '87653221',
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = usersMockUp;
