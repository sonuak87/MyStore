import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
} from "@mui/material";
import { Product } from "../../product";
import ProductCard from "./ProductCard";
import React from "react";
interface Prodps {
  product: Product[];
}
export default function ProductList({ product }: Prodps) {
  return (
    <>
      <Grid container spacing={4}>
        {product.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
