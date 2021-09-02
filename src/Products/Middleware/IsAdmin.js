const express = require('express');
module.exports = {
  isAdmin(req, res, next){
    if(req.body.admin == "true"){
      next()
    }else{
      res.send(false);
    }
  }
}