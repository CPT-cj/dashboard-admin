import SectionTitle from "./../../components/common/sectionTitle";
import { useContext, useEffect, useState } from "react";
import { products } from "./../../data/products";
import ProductTableView from "./../../features/ProductsView/ProductsTableView";
import ProductsGridView from "./../../features/ProductsView/ProductsGridView";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import Modal from "../../components/common/Modal";
import AddProductFields from "../../features/ProductTable/components/AddProductFields";
import useLocalStorage from "../../hooks/useLocalStorage";
import useTitle from "../../hooks/useTitle";
import AuthContext from "../../context/auth";

const Products = () => {
  const { user, logout, login } = useContext(AuthContext);
  const [layoutType, setLayoutType] = useLocalStorage("layout", "Table"); // or GRID
  const [allProducts, setAllProducts] = useState([]);
  const [paginatedlProducts, setPaginatedProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    img: "/images/product-img.png",
    isPublished: false,
    entity: "",
  });

  useTitle("محصولات");
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch(
    //     "https://react-js-cms.iran.liara.run/api/products",
    //   );

    //   if (res.status === 200) {
    //     const data = await res.json();
    //     setAllProducts(data);
    //   } else {
    //     // setError => Show Error In Dom ...
    //   }
    // };

    // fetchProducts();

    fetch("https://react-js-cms.iran.liara.run/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const toggleLayout = () => {
    const layout = layoutType === "TABLE" ? "GRID" : "TABLE";
    setLayoutType(layout);
  };

  const createNewProduct = () => {
    products.push(newProduct);
    setAllProducts([...allProducts, newProduct]);

    setNewProduct({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      price: "",
      img: "/images/product-img.png",
      isPublished: false,
      entity: "",
    });
  };

  const Buttons = (
    <>
      <button
        onClick={toggleLayout}
        className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all primary-border-color border cursor-pointer shadow"
      >
        {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
      </button>

      <Modal
        title="ایجاد محصول جدید"
        Trigger={
          <button className="primary-bg px-3 py-1.5">ایجاد محصول</button>
        }
        onSubmit={createNewProduct}
      >
        <AddProductFields newProduct={newProduct} onChange={setNewProduct} />
      </Modal>
    </>
  );

  return (
    <>
      <SectionTitle title="لیست محصولات" buttons={Buttons} />
      <button
        onClick={() => {
          logout();
        }}
      >
        Log Out
      </button>

      <section className="mt-10 w-full! min-w-full!">
        {layoutType === "TABLE" ? (
          <ProductTableView
            products={allProducts}
            paginatedlProducts={paginatedlProducts}
            setProducts={setPaginatedProducts}
          />
        ) : (
          <ProductsGridView
            products={allProducts}
            paginatedlProducts={paginatedlProducts}
            setProducts={setPaginatedProducts}
          />
        )}
      </section>
    </>
  );
};

export default Products;
