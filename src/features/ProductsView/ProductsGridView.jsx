import Pagination from "../../components/common/Pagination";
import ProductCard from "./ProductCard";

const ProductsGridView = ({ products, paginatedlProducts, setProducts }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-20">
        {paginatedlProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination items={products} setItems={setProducts} itemsPerPage={5} />
    </>
  );
};

export default ProductsGridView;
