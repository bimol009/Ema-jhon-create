import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();
//   console.log(products);
 


const storedCart = getShoppingCart();
// console.log(storedCart);
const savedCart = [];

for (const id in storedCart) {
    console.log(id)
  const addedProducts = products.find((pd) => pd.id === id);
  if (addedProducts) {
    const quantity = storedCart[id];
    addedProducts.quantity = quantity;
    savedCart.push(addedProducts);
  }
//   return savedCart;
}

return savedCart;
};
export default cartProductsLoader;
