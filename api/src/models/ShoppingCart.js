const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      
      unique: true,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        
        unique: true,
      },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
        
    }
   
    


  });
};
