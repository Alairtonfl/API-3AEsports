const UserValidation = require('../Validation/UserValidations');
const UserRepository = require('../Repository/UserRepository');

module.exports = {
  async index(req, res) {
    const users = await UserRepository.selectUsers();
    return res.send(users);
  },

  async store(req, res){
    try{
      console.log(req.body)
      if(UserValidation.isEmpty(req.body))
        return res.status(400).send('Algum campo nao foi cadastrado')
      
      const password = await UserValidation.hashPassword(req.body.password);
      const { name, email, cpf } = req.body;
      const user = await UserRepository.insertUsers(name, email, password, cpf);
      return res.send(user)
    } catch(e){
      return res.status(400).send(e);
    }
  },

  async login(req, res){
    const { email, password } = req.body;
    const user = await UserRepository.findByEmail(email);
    try{
      if(!user)
        return res.status(200).send(false)
      if(!await UserValidation.comparePassword(password, user.password))
        return res.status(200).send(false)
      user.password = undefined;
      res.send(user)
    } catch(e){
      return res.status(400).send(e);
    }
  },
}
