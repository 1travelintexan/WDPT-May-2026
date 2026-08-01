import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = ({ handleDeleteProduct }) => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    async function getOneProduct() {
      try {
        const { data } = await axios(
          `https://dummyjson.com/products/${productId}`,
        );
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);

  return (
    <div>
      <h2>{product.title}'s Page</h2>
      <img src={product.thumbnail} alt={product.title} />
      <h4>Price: {product.price}</h4>
      <Link to={`/update-a-product/${product.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
    </div>
  );
};
export default ProductDetailPage;
