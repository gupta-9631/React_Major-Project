import styled from 'styled-components'
import React from "react";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";

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

const GotoCart = styled.button`
  padding: 5px;
  background-color: green;
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
      <Image src={img} alt="" />
      <CartInfo>
        <Title>{title}</Title>
        <Price>₹ {price}</Price>
        {cart.some((p) => p.id === item.id) ? (
          <Link to="/cart">
            <GotoCart>GO TO CART</GotoCart>
          </Link>
        ) : (
          <AddTocart
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              });
            }}
          >
            ADD TO CART
          </AddTocart>
        )}
      </CartInfo>
    </Container>
  );
};

export default Product;