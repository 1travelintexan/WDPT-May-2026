import { useEffect, useState } from "react";

export const Cart = () => {
  const [cartState, setCartState] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getCart() {
      const cartArray = [];
      let cartTotal = 0;
      try {
        const res = await fetch("https://fakestoreapi.com/carts/3");
        const cart = await res.json();
        for (let i = 0; i < cart.products.length; i++) {
          const currProduct = cart.products[i];
          const currProductId = currProduct.productId;
          const responseFromDB = await fetch(
            `https://fakestoreapi.com/products/${currProductId}`,
          );
          const theActualOneProduct = await responseFromDB.json();
          theActualOneProduct.quantity = currProduct.quantity;
          console.log({ theActualOneProduct, currProduct });
          cartArray.push(theActualOneProduct);

          //set the total to add the product
          const subtotal =
            theActualOneProduct.quantity * theActualOneProduct.price;
          cartTotal += subtotal;
        }
        setTotal(cartTotal);
        console.log(cartArray);
        setCartState(cartArray);
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);
  return (
    <div>
      {cartState.map((oneProduct) => {
        return (
          <div key={oneProduct.id} className="product-card">
            <p>{oneProduct.title}</p>
            <p>Price:$ {oneProduct.price}</p>
            <p>Quantity: {oneProduct.quantity}</p>
          </div>
        );
      })}
      <h1>Total: {total.toFixed(2)}</h1>
    </div>
  );
};
