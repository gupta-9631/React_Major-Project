import styled from 'styled-components'
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import "./Product.css";

// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;

//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;

// `;

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

const InfoWrapper = styled.div``;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  // width: 40px;
  // height: 40px;
  // border-radius: 50%;
  // background-color: white;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // margin: 10px;
  // transition: all 0.5s ease;
  // &:hover {
  //   background-color: #e9f5f5;
  //   transform: scale(1.1);
  // }
`;

const CartInfo = styled.div``;
const Title = styled.h3`
  // margin-bottom:5px;
`;
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

const Product = ({ item, handleClick }) => {
  const { title, img, price } = item;
  return (
    <Container>
      <div />
      <Image src={img} alt="" />
      {/* <Info>
    <Icon><ShoppingCartOutlinedIcon/></Icon>
    <Icon><SearchOutlinedIcon/></Icon>
    <Icon><FavoriteBorderOutlinedIcon/></Icon>
    </Info> */}
      <CartInfo>
        <Title>{title}</Title>
        <Price>₹ {price}</Price>
        <AddTocart onClick={() => handleClick(item)}>Add to Cart</AddTocart>
      </CartInfo>
    </Container>
  );
};

export default Product;