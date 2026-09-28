import Table from "../../components/common/Table/Table";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableCell from "../../components/common/Table/elements/TableCell";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableBody from "../../components/common/Table/elements/TableBody";
import { productsAllTableHeadRow } from "../../data/products";
import clsx from "clsx";
import RemoveProductIcon from "../ProductTable/components/RemoveProductIcon";
import ChangeVisibilityIcon from "../ProductTable/components/ChangeVisibilityIcon";
import EditProducttIcon from "../ProductTable/components/EditProducttIcon";

const ProductsTableView = ({ products, setProducts, paginatedlProducts }) => {
  const removeProduct = async (id) => {
    try {
      await fetch(`https://react-js-cms.iran.liara.run/api/products/${id}`, {
        method: "DELETE",
      });

      const res = await fetch(
        "https://react-js-cms.iran.liara.run/api/products",
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeProductVisibility = async (id) => {
    let product = products.find((p) => p._id === id);

    try {
      const res = await fetch(
        `https://react-js-cms.iran.liara.run/api/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...product,
            isPublished: !product.isPublished,
          }),
        },   
      );

      // باید پروداکت رو پاس بدی به فانکشن چنج ویزیبیلیتی
      // const updatedProduct = await res.json();
      // setProducts((prev) =>
      //   prev.map((p) => (p._id === updatedProduct._id ? updatedProduct : p)),
      // );

      const response = await fetch(
        "https://react-js-cms.iran.liara.run/api/products",
      );
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Table
      header={{ title: "فهرست محصولات" }}
      pagination={{
        itemsPerPage: 7,
        items: products,
        setItems: setProducts,
      }}
    >
      <TableHead>
        {productsAllTableHeadRow.map((cell) => (
          <TableHeadCell key={cell}>{cell}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
        {paginatedlProducts.map((product) => (
          <TableRow key={product._id}>
            <TableCell>{product._id.slice(0, 9)}...</TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>
              <img
                src={product.img}
                alt={product.title}
                className="w-25 rounded-md border primary-border-color"
              />
            </TableCell>
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
            <TableCell>{product.price.toLocaleString("fa-IR")} تومان</TableCell>
            <TableCell className={"mr-4"}>
              {product.entity.toLocaleString("fa-IR")}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <RemoveProductIcon product={product} handler={removeProduct} />
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
  );
};

export default ProductsTableView;
