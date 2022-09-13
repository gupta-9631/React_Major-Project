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
  } = CartState();

  return (
    <Container>
      {products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Products;
