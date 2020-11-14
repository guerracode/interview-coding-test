class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      let name = this.products[i].name;
      let price = this.products[i].price;
      let sellIn = this.products[i].sellIn;

      switch (name) {
        case 'Medium Coverage':
        case 'Low Coverage':
          sellIn >= 0 ? (price = price - 1) : (price = price - 2);
          break;
        case 'Full Coverage':
          break;
        case 'Special Full Coverage':
          break;
        case 'Mega Coverage':
          break;
        case 'Super Sale':
          break;

        default:
          break;
      }

      if (price < 0) price = 0;
      this.products[i].price = price;
      this.products[i].sellIn = sellIn - 1;
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance,
};
