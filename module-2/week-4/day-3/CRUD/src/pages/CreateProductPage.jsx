// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProductPage = () => {
  const [title, setTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const nav = useNavigate();
  async function handleAddProduct(event) {
    //first stop the page from reloading...
    event.preventDefault();
    const newProduct = {
      title,
      price: productPrice,
    };

    //creating a product with axios
    // const { data } = await axios.post(
    //   "https://dummyjson.com/products/add",
    //   newProduct,
    // );
    // console.log(data);

    //creating a product with fetch
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    console.log(data);
    nav("/");
  }

  return (
    <form onSubmit={handleAddProduct}>
      <label>
        Title:
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </label>
      <button>Add Product</button>
    </form>
  );
};
export default CreateProductPage;
