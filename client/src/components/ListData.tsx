import React from "react";
import { useState, useEffect } from "react";
import agent from "../api/agent";
import { Product } from "../product";
import Catalog from "./features/Catalog";

const ListData = () => {
  const [product, setState] = useState<Product[]>([]);
  useEffect(() => {
    agent.Catalog.list().then((response) => setState(response));
  }, []);

  const addItem = () => {
    setState((prevState) => [
      ...prevState,
      {
        id: prevState.length + 100,
        name: "Product " + (prevState.length + 1),
      },
    ]);
  };
  const ObjProp = {
    name: "Add Item",
    methodName: addItem,
  };

  return (
    <>
      <Catalog product={product} />
    </>
  );
};
export default ListData;
