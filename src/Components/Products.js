import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { CartState } from "../Context/Context";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Products = () => {
  const {
    state: { products },
    productState: { searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  return (
    <Container>
      {transformProducts().map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Products;
