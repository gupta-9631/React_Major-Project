import React from 'react'
import styled from 'styled-components'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';



const Container= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: green;
 background-color:pink;
`
const Message= styled.h1`
 margin-right:10px;
 `

const Logo = styled.div`
fontSize:25px;`

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid white;
  border-radius:5px;
  background-color:white;
  height:200px
  
`


const SignUpSuccess = () => {
  return (
    <Container>
        <MessageWrapper>
        <Message>Successfully created your account </Message>
        
       <Logo><CheckCircleOutlineOutlinedIcon/></Logo> 
       </MessageWrapper>
    </Container>
  )
}

export default SignUpSuccess
