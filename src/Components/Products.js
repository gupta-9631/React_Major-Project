import React, { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Products = ({ handleClick }) => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product key={item.id} item={item} handleClick={handleClick} />;
      })}
    </Container>
  );
};

export default Products;
