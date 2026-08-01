import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProductPage = ({ handleUpdateProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const { productId } = useParams();
  useEffect(() => {
    async function getOneProduct() {
      try {
        const { data } = await axios(
          `https://dummyjson.com/products/${productId}`,
        );

        setPrice(data.price);
        setTitle(data.title);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);

  return (
    <form
      onSubmit={(event) => {
        handleUpdateProduct(event, { title, price }, productId);
      }}
    >
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
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button>Update Product</button>
    </form>
  );
};
export default UpdateProductPage;
