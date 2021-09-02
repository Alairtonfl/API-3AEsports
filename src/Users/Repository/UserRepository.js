const User = require('../Entities/User');

module.exports = {
  async selectUsers(){
    const users = await User.findAll({
      attributes: { exclude: ['password']},
      order: [['updated_at', 'DESC']],
    });
    return users;
  },

  async insertUsers(name, email, password, cpf, admin){
    try{
      const user = await User.create({name, email, password, cpf, admin});
      return user;
    }catch(e){
      return e;
    }
  },
  
  async findByEmail(email){
    const user = await User.findOne({ where: { email } });
    if(user == null)
      return false;
    return user;
  },
}