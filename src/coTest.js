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
          sellIn > 0 ? (price = price - 1) : (price = price - 2);
          break;
        case 'Full Coverage':
          if (price < 50) {
            sellIn > 0 ? (price = price + 1) : (price = price + 2);
          }
          break;
        case 'Special Full Coverage':
          if (price < 50 && sellIn > 0) {
            price = price + 1;
            if (sellIn <= 10) price = price + 1;
            if (sellIn <= 5) price = price + 1;
          }
          if (sellIn <= 0) price = 0;
          if (price > 50) price = 50;
          break;
        case 'Super Sale':
          sellIn > 0 ? (price = price - 2) : (price = price - 4);
          break;
      }

      if (price < 0) price = 0;
      this.products[i].price = price;
      if (name != 'Mega Coverage') this.products[i].sellIn = sellIn - 1;
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance,
};
