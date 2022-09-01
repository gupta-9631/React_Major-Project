import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer'
import { Remove } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';


const Container =styled.div`
`
const Wrapper =styled.div`
padding:50px;
display:flex;

`
const ImageContainer =styled.div`
flex: 1;
`
const Image  =styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const InfoContainer =styled.div`
flex: 1;
padding:0px 50px;
`
const Title =styled.h1`
font-weight: 200;
`
const Desc =styled.div`
margin:20px 0px;
`
const Price =styled.div`
font-weight: 100;
font-size:40px 
`

const FilterContainer =styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
`
const Filter =styled.div`
display: flex;
align-items:center;
`
const FilterTitle =styled.span`
font-size:20px;
font-weight:300;
`
const FilterColor =styled.div`
width:20px;
height:20px;
border-radius:50%;
margin:0px 5px;
cursor: pointer;
background-color:${props=> props.color}

`
const FilterSize =styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
width:50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight:700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border:1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 5px;


}
`
const Button = styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor: pointer;
font-weight:700;
&:hover{
  background-color: #f8f4f4;
`





const Product = () => {
  return (
   <Container>
   <Navbar/>
   <Announcement/>
   <Wrapper>
    <ImageContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
    </ImageContainer>
    <InfoContainer>
        <Title>Women Floral Print Viscose Rayon Anarkali Kurta  (Pink)</Title>
        <Desc>Designer Traditional Stylish Gold Plated Polki Dangle Earrings
             for Women and Girls Jhumki Earring Alloy Drops & Danglers,
              Earring Set, Oxidised earrings Chandbali Earring, 
              Jhumki Earring Most Popular Party Wear Floral Design Long
               Hanging Jhalar Earrings German Silver Drops & Danglers 
               silver Alloy Drops & Danglers, Black Metal Oxidised Silver 
               Jhumka Chandbali Earring, Jhumki Earring German Silver Chandbali 
               Earring, Drops & Danglers, Clip-on Earring German Silver Chandbali Earring,
                Clip-on Earring, Drops & Danglers, Jhumki Earring
                </Desc>
        <Price>$ 999 </Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
             <FilterColor color="black"/>
              <FilterColor color="green"/>
               <FilterColor color="SkyBlue"/>
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
             <FilterSizeOption>XS</FilterSizeOption>
             <FilterSizeOption>S</FilterSizeOption>
             <FilterSizeOption>M</FilterSizeOption>
             <FilterSizeOption>L</FilterSizeOption>
             <FilterSizeOption>XL</FilterSizeOption>
             <FilterSizeOption>XXL</FilterSizeOption>
             </FilterSize> 
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove/>
            <Amount>1</Amount>
            <AddIcon/>
          </AmountContainer>
          <Button>ADD TO CART</Button>
        </AddContainer>
    </InfoContainer>
   </Wrapper>
   <Newsletter/>
   <Footer/>
   </Container>
  )
}

export default Product
