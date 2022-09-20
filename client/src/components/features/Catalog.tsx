import { Product } from "./../../product";
import ProductList from "../product/productList";
import React from "react";
interface Props {
  product: Product[];
}

const Catalog = ({ product }: Props) => {
  return (
    <>
      <ProductList product={product} />
    </>
  );
};

export default Catalog;
