const Product = require('../Entities/Product');

module.exports = {
  async selectProducts() {
    const products = await Product.findAll({
      order: [['updated_at', 'DESC']],
    });
    return products;
  },

  async insertProduct(name, image, category, description, price) {
    try {
      const product = await Product.create({ name, image, category, description, price });
      return product;
    } catch (e) {
      return e;
    }
  },

  async selectById(id) {
    try {
      const product = await Product.findOne({ where: { id } });
      if (product == null)
        return false;
      return product;
    } catch (e) {
      return e;
    }
  },

  async deleteById(id) {
    try {
      await Product.destroy({ where: { id } });
      return true;
    } catch (e) {
      return e;
    }
  },

  async updateById(id, name, image, category, description, price) {
    try {
      console.log(image)
      await Product.update({
        name: name,
        image: image,
        category: category,
        description: description,
        price: price
      }, {
        where: {
          id: id
        }
      })
      return true;
    } catch (e) {
      return e;
    }
  },
}