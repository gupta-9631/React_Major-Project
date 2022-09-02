import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom'

const Container= styled.div`

`
const Wrapper= styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`
const Title= styled.h1`
font-weight: 300;
text-align: center;
`
const Top= styled.div`
padding: 20px;
display:flex;
align-items: center;
justify-content: space-between;
`
const TopButton= styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${(props)=>props.type==="filled" && "none"};
background-color:${(props)=>props.type==="filled" ? "black":"transparent"};
color:${(props)=>props.type==="filled" && "white"}
`

const TopTexts= styled.div`
${mobile({ display: "none" })}
`
const TopText= styled.span`
text-decoration: underline;
cursor: pointer;
margin:0px 10px;
`

const Bottom= styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}

`
const Info= styled.div`
flex:3;`


const Product= styled.div`
display: flex;
justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
`
const ProductDetail= styled.div`
flex:2;
display: flex;
`
const Image= styled.img`
width:200px;
`
const Details= styled.div`
padding:20px;
display: flex;
flex-direction: column;
justify-content:space-around;
`
const ProductName= styled.span`
font-weight:400;
`
const ProductId= styled.div`
`
const ProductColor= styled.div`
width: 20px; height: 20px;
border-radius: 50%;
background-color:${props=>props.color};
`
const ProductSize= styled.span`
`
const PriceDetail= styled.div`
flex:1;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer= styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount= styled.div`
font-size: 24px;
margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`
const ProductPrice= styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`
const Hr= styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary= styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummaryTitle = styled.h1`
 font-weight: 200;`

const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type==="total" && "500"};
font-size: ${props=>props.type==="total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding:10px;
  background-color: black;
  color:white;
  font-weight:600;
  
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Link to="/product/list/:id"><TopButton>CONTINUE SHOPPING</TopButton></Link>
                <TopTexts>
                <TopText>Shopping Bag (4)</TopText>
                <TopText>Your Wishlist</TopText>
            </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                     <ProductDetail>
                        <Image src="https://i.ibb.co/HGLymKw/faith-yarn-Wr0-Tp-Kqf26s-unsplash.jpg" />
                        <Details>
                            <ProductName><b>Product: </b>Cotton Shirt</ProductName>
                            <ProductId><b>ID: </b>7332565810</ProductId>
                            <ProductColor color="black" />
                            <ProductSize><b>Size: </b>42</ProductSize>
                        </Details>
                     </ProductDetail>
                     <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>3</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice> ₹ 999</ProductPrice>
                     </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                     <ProductDetail>
                        <Image src="https://i.ibb.co/yVwcBq9/adrian-regeci-1-MNdt-CBub-w-unsplash.jpg" />
                        <Details>
                            <ProductName><b>Product: </b>Apple Watch</ProductName>
                            <ProductId><b>ID: </b>7332565855</ProductId>
                            <ProductColor color="black" />
                            <ProductSize><b>Size: </b>S</ProductSize>
                        </Details>
                     </ProductDetail>
                     <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>₹ 2000</ProductPrice>
                     </PriceDetail>
                    </Product>
                    </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                    <SummaryItemText>SubTotal</SummaryItemText>
                    <SummaryItemPrice> ₹ 2900</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice> ₹ 10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice> ₹  -10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice> ₹  2900</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
