const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      category: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.NUMERIC(5,2)
    }, {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      freezeTableName: true
    }
    )
  }

}

module.exports = Product;