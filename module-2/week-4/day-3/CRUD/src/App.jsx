import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    async function getAllProducts() {
      try {
        const { data } = await axios("https://dummyjson.com/products");
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);
  async function handleDeleteProduct(id) {
    const { data } = await axios.delete(`https://dummyjson.com/products/${id}`);
    console.log({ id, data });
    //after the axios call.. set the state
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    nav("/");
  }

  async function handleUpdateProduct(e, updatedInfo, productId) {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `https://dummyjson.com/products/${productId}`,
        updatedInfo,
      );
      console.log(data);
      const newArray = products.map((oneProduct) => {
        if (oneProduct.id === productId) {
          return data;
        } else {
          return oneProduct;
        }
      });
      setProducts(newArray);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Navbar />
      <h1>CRUD</h1>
      <Routes>
        <Route path="/" element={<ProductListPage products={products} />} />
        <Route
          path="/product/detail/:productId"
          element={
            <ProductDetailPage handleDeleteProduct={handleDeleteProduct} />
          }
        />
        <Route path="/create-a-product" element={<CreateProductPage />} />
        <Route
          path="/update-a-product/:productId"
          element={
            <UpdateProductPage handleUpdateProduct={handleUpdateProduct} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
