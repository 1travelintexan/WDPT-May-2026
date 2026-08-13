// import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import axios from "axios";

const CreateProductPage = () => {
  const [title, setTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();
  //getting data from the context
  const { petName } = useContext(ThemeContext);
  console.log("in the create product page, here is the name", petName);
  async function handleAddProduct(event) {
    //first stop the page from reloading...
    event.preventDefault();
    //creating a Form Data for the image
    const ourData = new FormData();
    ourData.append("file", image);
    ourData.append("upload_preset", "ironhack");
    ourData.append("cloud_name", "dnkyulofa");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dnkyulofa/image/upload",
      ourData,
    );
    console.log("res from cloudinary: ", response.data.secure_url);

    const newProduct = {
      title,
      price: productPrice,
      productImage: response.data.secure_url,
    };

    //creating a product with axios
    const { data } = await axios.post(
      "https://dummyjson.com/products/add",
      newProduct,
    );
    console.log("sent back from server: ", data);

    //creating a product with fetch
    // const res = await fetch("https://dummyjson.com/products/add", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newProduct),
    // });
    // const data = await res.json();
    // console.log(data);
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
      <label>
        Product Image:
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <button>Add Product</button>
    </form>
  );
};
export default CreateProductPage;
