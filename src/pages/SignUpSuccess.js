import React from 'react'
import styled from 'styled-components'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Link } from 'react-router-dom';
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
 margin-bottom:60px;
 `

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border:1px solid white;
  border-radius:5px;
  background-color:white;
  height:400px
`

const Login= styled.button`
padding: 10px 20px 10px 20px;
background-color:#4CAF50;
color:white;
font-size:16px;
border:none;
border-radius:5px;
margin-bottom: 10px;
`


const SignUpSuccess = () => {
  return (
    <Container>
        <MessageWrapper>
        <Message>Successfully created your account <span><CheckCircleOutlineOutlinedIcon/></span></Message>
        <Login>Login</Login>
        <Link to="/"><h4>Back to Homepage</h4></Link>
       </MessageWrapper>
    </Container>
  )
} 

export default SignUpSuccess
