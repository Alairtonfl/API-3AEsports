module.exports = () =>{
  isadmin((req, res, next)=> {
    if(1 == 1){
      res.send('Admin')
      next()
    }
    res.send('erro')
  })
}