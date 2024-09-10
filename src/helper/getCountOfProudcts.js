function getCountOfProudcts(products) {
  return products.reduce((total, product) => {
    return total + product.cartQuantity;
  }, 0);
}

export default getCountOfProudcts;
