const { User } = require('../src/db');
const bcrypt = require('bcrypt');

const usersMockUp = async () => {
  try {
    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45a',
      userName: 'Abdel',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Abdel',
      lastName: 'Arocha',
      phone: '+50 987654654',
      email: 'Abdel@gmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
      idPersonal: '87653288',
      banned: true,
    });

    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      userName: 'Leidy',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Leidy',
      lastName: 'Nuñes',
      phone: '+95 978654154',
      email: 'leidydi621@hotmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
      idPersonal: '87653221',
    });

    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      userName: 'Leo',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Leo',
      lastName: 'Merio',
      phone: '+51 87545423',
      email: 'Leo@gmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
      idPersonal: '87653299',
    });

    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45d',
      userName: 'Johannes',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Johannes',
      lastName: 'Gómez',
      phone: '+58 875454369',
      email: 'Johannes@gmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e41',
      idPersonal: '87653991',
    });

    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45e',
      userName: 'Joshelin',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Joshelin',
      lastName: 'Ramos',
      phone: '+51 987654654',
      email: 'joshelin@gmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
      idPersonal: '87653288',
      banned: true,
    });

    await User.create({
      id: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45f',
      userName: 'Rodrigo',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Rodrigo',
      lastName: 'Fernandez',
      phone: '+54 987666654',
      email: 'Fernandez@gmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
      idPersonal: '87653288',
      banned: true,
    });

    await User.create({
      id: 'afccb433-8388-4196-95de-37ef837c678e',
      userName: 'Adrian',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Adrian',
      lastName: 'Martinez',
      phone: '+5 987554336',
      email: 'Martinez@gmail.com',
      address: 'Calle luna',
      roleId: 'ad114fef-1e85-4dd7-af41-a252935b4e43',
      idPersonal: '87653277',
      banned: true,
    });

  } catch (err) {
    console.log(err.message);
  }
};
module.exports = usersMockUp;
