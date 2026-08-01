import { Link } from "react-router-dom";

const ProductListPage = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h2>All Products:</h2>
      <div className="products-container">
        {products &&
          products.map((product) => {
            return (
              <Link key={product.id} to={`/product/detail/${product.id}`}>
                <div className="product-card">
                  <img src={product.thumbnail} alt="blah" />
                  <h6>Title: {product.title}</h6>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default ProductListPage;
