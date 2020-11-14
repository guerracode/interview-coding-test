const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe('Co Test', function () {
  it('should test Medium Coverage', function () {
    const coTest = new CarInsurance([new Product('Medium Coverage', 10, 20)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
    expect(products[0].price).equal(19);
    expect(products[0].sellIn).equal(9);
  });
  it('should test Low Coverage', function () {
    const coTest = new CarInsurance([new Product('Low Coverage', 5, 7)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Low Coverage');
    expect(products[0].price).equal(6);
    expect(products[0].sellIn).equal(4);
  });
  it('should test Full Coverage', function () {
    const coTest = new CarInsurance([new Product('Full Coverage', 2, 0)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Full Coverage');
    expect(products[0].price).equal(1);
    expect(products[0].sellIn).equal(1);
  });
  it('should test Special Full Coverage', function () {
    const coTest = new CarInsurance([
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Special Full Coverage', 0, 0),
    ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].price).equal(21);
    expect(products[0].sellIn).equal(14);
  });
  it('should test Mega Coverage', function () {
    const coTest = new CarInsurance([new Product('Mega Coverage', 0, 80)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Mega Coverage');
    expect(products[0].price).equal(80);
    expect(products[0].sellIn).equal(0);
  });
  it('should test Super Sale', function () {
    const coTest = new CarInsurance([new Product('Super Sale', 3, 6)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
    expect(products[0].price).equal(4);
    expect(products[0].sellIn).equal(2);
  });
  it('should test Price 0', function () {
    const coTest = new CarInsurance([new Product('Super Sale', 3, 0)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('Super Sale');
    expect(products[0].price).equal(0);
    expect(products[0].sellIn).equal(2);
  });
});
