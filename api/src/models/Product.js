const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
          type: DataTypes.STRING(20),
          allowNull: true,},
    description: { 
          type: DataTypes.STRING(100),
          allowNull: true,},
//     category_id: { 
//           type: DataTypes.INTEGER,
//           allowNull: true,},
    price: {
          type: DataTypes.INTEGER,
          allowNull: true,},
    brand: { 
          type: DataTypes.STRING(20),
          allowNull: true,},
    color: { 
          type: DataTypes.STRING(10),
          allowNull: true,},
    warranty: {  // grantia
          type: DataTypes.INTEGER,
          allowNull: true,},
    image: { 
            type: DataTypes.STRING(100),
            allowNull: true,},
    discount: {  // descuento
            type: DataTypes.INTEGER,
            allowNull: true,},
    
  
  });
};