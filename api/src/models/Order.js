const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    orderNumber: {
      type: DataTypes.INTEGER,
    },

    orderDate: {
      type: DataTypes.INTEGER,
    },

    status:{
        type: DataTypes.STRING,
    },

    purchased: {
        type: DataTypes.BOOLEAN,
    },

    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,  
    }
  });
};
