const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    orderNumber: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.id;
      },
    },

    orderDate: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },

    status: {
      type: DataTypes.STRING,
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
    },
  });
};
