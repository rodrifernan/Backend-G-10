const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("product", {
    id            : { 
      type         : DataTypes.UUID,   // tipo de datos hastach
      defaultValue : DataTypes.UUIDV4, // genera automaticamente un UUIDV4
      primaryKey   : true,             // definir que va hacer mi clave primaria
      allowNull    : false,},

    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    brand: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    warranty: {
      // grantia
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      // type: DataTypes.STRING(100),
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    discount: {
      // descuento
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,      
    },
  });
};
