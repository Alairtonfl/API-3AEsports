const bcrypt = require('bcrypt');

module.exports = {
  async hashPassword(password){
    const pass = await bcrypt.hash(password, 10);
    return pass;
  },

  async comparePassword(reqPassword, userPasswword){
    return bcrypt.compare(reqPassword, userPasswword);
  },

  isEmpty(req){
    if(req.name == '')
      return true;
    if(req.email == '')
      return true;
    if(req.password == '')
      return true;
    return false;
  }
  
}