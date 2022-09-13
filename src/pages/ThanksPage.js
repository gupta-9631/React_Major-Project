import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/GWCqZqf/shopping-bag-cart.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Message = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: teal;
`;

const ThanksPage = () => {
  return (
    <Container>
      <Message>Thank you for your Order!</Message>

      <Link to="/">
        <h3>Continue Shopping</h3>
      </Link>
    </Container>
  );
};

export default ThanksPage;
