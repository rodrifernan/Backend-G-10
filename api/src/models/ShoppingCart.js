const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("shoppingCart", {
    id            : { 
      type         : DataTypes.UUID,   // tipo de datos hastach
      defaultValue : DataTypes.UUIDV4, // genera automaticamente un UUIDV4
      primaryKey   : true,             // definir que va hacer mi clave primaria
      allowNull    : false,},

    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
        
    }
   
    


  });
};
