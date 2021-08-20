const User = require('../models/User')

module.exports = {
  async selectUsers(){
    const users = await User.findAll();
    return users;
  },

  async insertUser(name, email, password, cpf){
    try{
      const user = await User.create({name, email, password, cpf})
      return user;
    }catch(e){
      return e;
    }
  },

  async findByEmail(email){
    const user = await User.findOne({ where: {email} });
    return user;
  }
}