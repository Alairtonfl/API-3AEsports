const UserRepository = require('../repository/UserRepository');
const bcrypt = require('../validations/BcryptValidation');
const UserValidation = require('../validations/UserValidation');
module.exports = {
  async index(req, res) {
    const users = await UserRepository.selectUsers();
    return res.send(users);
  },

  async store(req, res){
    try{
      if(UserValidation.isEmpty(req.body))
        return res.status(400).send('Algum campo nao foi cadastrado')
      
      const password = await bcrypt.hashPassword(req.body.password)
      const { name, email, cpf} = req.body;
      const user = await UserRepository.insertUser(name,email,password,cpf);
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
        return res.status(400).send('Usuario inexistente')
      if(!await bcrypt.comparePassword(password, user.password))
        return res.status(400).send('Credenciais incorretas')
      user.password = undefined;
      res.send(user)
    } catch(e){
      return res.status(400).send(e);
    }
  },
}
