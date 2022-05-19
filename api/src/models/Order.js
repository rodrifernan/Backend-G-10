const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('order', {
    id: {
      type: DataTypes.UUID, // tipo de datos hastach
      defaultValue: DataTypes.UUIDV4, // genera automaticamente un UUIDV4
      primaryKey: true, // definir que va hacer mi clave primaria
      allowNull: false,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },

    orderDate: {
      type: DataTypes.DATEONLY,
      defaultValue: Date.now,
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'Recepción',
    },

    purchased: {
      type: DataTypes.BOOLEAN,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allNull: false,
    },

    total: {
      type: DataTypes.FLOAT,
      allNull: false,
      set(value) {
        this.setDataValue('total', Number(value.toFixed(2)));
      },
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
