const ProductRepository = require('../Repository/ProductRepository');
const ProductValidation = require('../Validation/ProductValidation');

module.exports = {
  async index(req, res) {
    const products = await ProductRepository.selectProducts();
    return res.send(products);
  },

  async store(req, res){
    try{
     
      const { name, image, category, description, price } = req.body;
      const product = await ProductRepository.insertProduct(name, image, category, description, price);
      return res.send(product)
    } catch(e){
      return res.status(400).send(e);
    }
  },

  async selectById(req, res){
    const id = parseInt(req.params.id);
    const product = await ProductRepository.selectById(id);
    try{
      if(!product)
        return res.status(200).send(false)
      res.status(200).send(product)
    } catch(e){
      return res.status(400).send(e);
    }
  },
  async deleteById(req, res){
    const id = parseInt(req.params.id);
    try{
      await ProductRepository.deleteById(id);
      res.status(200).send(true)
    } catch(e){
      return res.status(400).send(e);
    }
  },

  async updateById(req, res){
    const id = parseInt(req.params.id);
    const { name, image, category, description, price } = req.body;
    console.log(id)
    try{
      await ProductRepository.updateById(id,name, image, category, description, price);
      res.status(200).send(true)
    } catch(e){
      return res.status(400).send(e);
    }
  }
}