const bcrypt = require('bcrypt')

module.exports = {
  async hashPassword(password){
    const pass = bcrypt.hashSync(password, 10);
    return pass;
  },
  comparePassword(reqPassword, userPassword){
    return bcrypt.compare(reqPassword, userPassword);
  }
}