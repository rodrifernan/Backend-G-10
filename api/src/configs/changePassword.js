const { User } = require('../db'); // traer mi modelo
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./auth');

const changePassword = async (req, res, next) => {
    const { oldPassword, newPassword } = req.body;

    try {
        if (oldPassword, newPassword) {
            let user = await User.findById(req.params.id);

            if (user) {
                if (bcrypt.compareSync(currentPassword, user.password)) {
                    let password = bcrypt.hashSync(newPassword, Number(auth.rounds));
                    await User.findByIdAndUpdate({id:user.id}, { password: password }, {new: true})
                        .then(user => {
                            user? res.json({ msg: 'Password cambiado correctamente.' }) : res.status(500).json({ msg: 'No se pudo cambiar el password.' });
                        }, error => {
                            next(error);
                        })
                        .catch(error => {
                            console.log(error)
                        })  
                } else {
                    return res.status(404).json({ msg: 'El password actual no es correcto.' });
                }
            } else {
                return res.status(404).json({ msg: 'No se encontro el usuario.' });
            }
        } else {
            return res.status(404).json({ msg: 'No se pudo cambiar el password.' });
        }
    } catch (error) {
        return res.status(500).json({ msg: 'Error de servidor' })
    }
}

module.exports = changePassword;