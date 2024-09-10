function getTotalPrice(products) {
  if (!products) return 0;
  return products.reduce((total, product) => {
    console.log("p", typeof product.count);
    return total + product.cartQuantity * product.price;
  }, 0);
}

export default getTotalPrice;
