const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      freezeTableName: true
    }
    )
  }

}

module.exports = User;