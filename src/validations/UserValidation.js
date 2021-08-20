module.exports = {
  isEmpty(req){
    if(req.name == '')
      return true;
    if(req.email == '')
      return true;
    if(req.cpf == '')
      return true;
    if(req.password == '')
      return true;
    return false;
  }
}