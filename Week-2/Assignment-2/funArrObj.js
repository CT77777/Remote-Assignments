function avg(data) {
  // your code here
  const products = data.products;
  const productCount = products.length;
  let totalPrice = 0;

  products.forEach((product) => {
    totalPrice += product.price;
  });

  return totalPrice / productCount;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
