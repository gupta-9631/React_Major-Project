import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import styled from 'styled-components'

const Logo = styled.h1`

`

const Description = styled.p`
margin-top: 20px 0px;
`

const SocialContainer= styled.div`
display: flex;

`
const SocialIcon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props)=> props.color};
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-right: 20px;

`
const Container= styled.div`
  display: flex;
 
`
const Left= styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center= styled.div`
flex:1;
padding: 20px;`

const Right= styled.div`
 flex:1;
 margin-bottom:20px;
 `

 const Title= styled.h3`
 margin-bottom:30px;
 `
 const List= styled.ul`
 margin:0px;
 padding:0px;
 list-style: none;
 display: flex;
 flex-wrap: wrap;

 `
const ListItem= styled.li`
width:50%;
margin-bottom: 10px;
`
const ContactItem= styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;
`
const Payment= styled.img`
width: 50%;
`




const Footer = () => {
  return (

    <Container>
        <Left>
            <Logo>Krookly</Logo>
            <Description>
           Online shopping is a form of electronic
            commerce which allows consumers to
           directly buy goods or services from a
           seller over the Internet using
           a web browser or a mobile app. Consumers find 
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999" >
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon >
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
             <RoomIcon style={{marginRight: "10px"}}/>VKI Area Road number 17 Jaipur, India
            </ContactItem>
            <ContactItem>
            <PhoneIcon style={{marginRight: "10px"}}/>1800334455
            </ContactItem>
            <ContactItem>
            <MailOutlinedIcon style={{marginRight: "10px"}}/>contact@krookly.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>  
    </Container>
    
  )
}

export default Footer
