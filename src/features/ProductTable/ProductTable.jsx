import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableRow from "../../components/common/Table/elements/TableRow";
import { productsTableHeadRow } from "../../data/products";
import TableCell from "../../components/common/Table/elements/TableCell";
import clsx from "clsx";
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditProducttIcon from "./components/EditProducttIcon";
import { useState } from "react";

const LastProductTable = ({ products, users }) => {
  const [lastProducts, setLastProducts] = useState([...products]);
  const [lastUsers, setLastUsers] = useState([...users]);

  const Buttons = () => {
    return (
      <Link
        to={"/products"}
        className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
      >
        <span>صفحه محصولات</span>
        <MdOpenInNew />
      </Link>
    );
  };

  const removeProduct = (id) => {
    const newProducts = lastProducts.filter((product) => product._id !== id);
    setLastProducts(newProducts);
  };

  const changeProductVisibility = (id) => {
    const newProducts = lastProducts.map((product) => {
      return product._id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product };
    });

    setLastProducts(newProducts);
  };

  return (
    <div>
      <Table
        header={{ title: "لیست محصولات", Buttons: Buttons }}
        pagination={{
          items: products,
          setItems: setLastProducts,
          itemsPerPage: 4,
        }}
      >
        <TableHead>
          {productsTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {lastProducts.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product._id.slice(0, 10)}...</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <p
                  className={clsx(
                    product.isPublished ? "success-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </p>
              </TableCell>
              <TableCell>
                <span>{product.price.toLocaleString("fa-IR")}</span> تومان
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <RemoveProductIcon
                    product={product}
                    handler={removeProduct}
                  />
                  <ChangeVisibilityIcon
                    product={product}
                    handler={changeProductVisibility}
                  />
                  <EditProducttIcon product={product} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LastProductTable;
