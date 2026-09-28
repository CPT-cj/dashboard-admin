import { useEffect, useState } from "react";
import SectionTitle from "../../components/common/sectionTitle";
import { useNavigate } from "react-router";
import Summaries from "../../features/summaries/summaries";
import DetailsCharts from "../../features/detailsCharts/detailsCharts";
import ProductsTable from "../../features/ProductTable/ProductTable";
import QuickOverview from "../../features/QuickOverview/QuickOverview";
import useToggle from "../../hooks/useToggle";
import useTitle from "../../hooks/useTitle";

const home = () => {
  const [isRedirecting, toggle] = useToggle(false);
  const [allProducts, setAllProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://react-js-cms.iran.liara.run/api/products",
      );
      if (res.status === 200) {
        const data = await res.json();
        setAllProducts(data);
      } else {
        console.error("error in api");
      }
    };
    fetchProducts();

    const fetchUsers = async () => {
      const res = await fetch("https://react-js-cms.iran.liara.run/api/users");
      if (res.status === 200) {
        const data = await res.json();
        setAllUsers(data);
      } else {
        console.error("error in api");
      }
    };
    fetchUsers();
  }, []);

  useTitle("صفحه اصلی");
  const navigate = useNavigate();

  const CTAButton = () => {
    const clickHandler = () => {
      toggle();
      setTimeout(() => {
        navigate("/products");
      }, 1000);
    };

    return (
      <button
        onClick={clickHandler}
        className="primary-bg px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
      >
        {isRedirecting ? "در حال انتقال" : "ایجاد محصول"}
      </button>
    );
  };

  return (
    <>
      <SectionTitle title="داشبورد" buttons={<CTAButton />} />
      <Summaries
        productsLength={allProducts.length}
        usersLength={allUsers.length}
      />
      <div className="mt-20 pb-10 space-y-10">
        <DetailsCharts
          productsLength={allProducts.length}
          usersLength={allUsers.length}
        />
        <ProductsTable products={allProducts} users={allUsers} />
        <QuickOverview />
      </div>
    </>
  );
};
export default home;
