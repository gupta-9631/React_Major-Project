import styled from 'styled-components'
import React from "react";
import { CartState } from "../Context/Context";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  text-align: center;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background-color: #f5fbfd;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const CartInfo = styled.div``;
const Title = styled.h3``;
const Price = styled.h4`
  margin-bottom: 5px;
`;
const AddTocart = styled.button`
  padding: 5px;
  background-color: #4caf50;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

const Product = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { title, img, price } = item;
  return (
    <Container>
      <div />
      <Image src={img} alt="" />
      <CartInfo>
        <Title>{title}</Title>
        <Price>₹ {price}</Price>
        <AddTocart
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            });
          }}
        >
          Add to Cart
        </AddTocart>
      </CartInfo>
    </Container>
  );
};

export default Product;