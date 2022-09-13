import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
  margin-right: 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 5px;

  ${mobile({
    flexDirection: "column",
    marginBottom: "5px",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  font-weight: 400;
`;
const ProductId = styled.div``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Removes = styled.div`
  width: 20px;
  height: 10px;
`;

const CartEmpty = styled.h1`
  border: 1px solid black;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  background-color: palegreen;
`;

const Empty = styled.div``;

const Continue = styled.p`
  text-align: center;
`;

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      {cart.length > 0 ? (
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <Link to="/">
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            <TopTexts>
              <TopText>Shopping Bag {cart.length}</TopText>
              <TopText>Your Wishlist</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.map((item) => (
                <Product>
                  <ProductDetail>
                    <Image src={item.img} alt="" />
                    <Details>
                      <ProductName>
                        <b>Product: </b>
                        {item.title}
                      </ProductName>
                      <ProductId>
                        <b>ID: </b>
                        {item.id}
                      </ProductId>
                      <ProductColor color="black" />
                      <ProductSize>
                        <b>Size: </b>42
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductAmount>
                        <select
                          onChange={(e) =>
                            dispatch({
                              type: "CHANGE_CART_QTY",
                              payload: {
                                id: item.id,
                                qty: e.target.value,
                              },
                            })
                          }
                        >
                          <option value="1" selected>
                            Qty 1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice> ₹ {item.price}</ProductPrice>
                  </PriceDetail>
                  <Removes
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Removes>
                </Product>
              ))}
            </Info>

            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice> ₹ {total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice> Free </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem></SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice> ₹ {total}</SummaryItemPrice>
              </SummaryItem>
              <Link to="/ThanksPage">
                <Button onClick={() => (cart.length = 0)}>CHECKOUT NOW</Button>
              </Link>
            </Summary>
          </Bottom>
        </Wrapper>
      ) : (
        <Empty>
          <CartEmpty>Your Cart is empty.</CartEmpty>
          <Link to="/">
            <Continue>Continue Shopping</Continue>
          </Link>
        </Empty>
      )}

      <Footer />
    </Container>
  );
};

export default Cart;
