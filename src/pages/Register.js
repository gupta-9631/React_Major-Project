import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import signUpValidation from '../signUpValidation'
const Container= styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient( rgba(255,255,255,0.5),
 rgba(255,255,255,0.5) ), url("https://i.ibb.co/bQjYT9Y/blissful-woman-with-little-daughter-posing-after-shopping-smiling-mother-standing-near-store-cart.jpg") center;
 
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Wrapper= styled.div`
width:30%;
padding:20px;
background: rgba(0, 0, 0, 0.7);
`
const Form= styled.form`
display: flex;
flex-flow: column;
`
const Title= styled.h1`
font-size:24px;
font-weight:300;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Input= styled.input`
flex:1;
font-size:18px;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`
const Agreement= styled.span`
font-size: 12px;
font-weight: 300;
margin: 20px 0px;
color: white;
`
const Button= styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color:teal;
// background-color:gray;
color:white;
cursor:pointer;
`
const ButtonWrapper= styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const P= styled.p`
color: red;`



const Register = ({submitForm}) => {

  const [values, setValues]  = useState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: '',

          })

const[dataIsCorrect, setDataIsCorrect] = useState(false);

const handleChange = (event) => {
  setValues({
    ...values,
    [event.target.name]:event.target.value,
  })
}

const [errors, setErrors]= useState({});

const handleSubmit=(e)=>{
    e.preventDefault()
    setErrors(signUpValidation(values));
    setDataIsCorrect(true);
}


useEffect(()=>{
if(Object.keys(errors).length === 0 && dataIsCorrect){
submitForm(true);
}
},[errors]);


  return (
    <Container>
      <Wrapper>
         <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
        <Input placeholder="First Name" type="text" name='firstname' value={values.firstname} onChange={handleChange}/>
        {errors.firstname && <P>{errors.firstname}</P>}
        <Input placeholder="Last Name" type="text" name='lastname' value={values.lastname} onChange={handleChange}/>
        {errors.lastname && <P>{errors.lastname}</P>}
        <Input placeholder="Email" type="email" name='email' value={values.email} onChange={handleChange}/>
        {errors.email && <P>{errors.email}</P>}
       <Input placeholder="Password" type="password" name='password' value={values.password} onChange={handleChange}/>
       {errors.password && <P>{errors.password}</P>}
       <Input placeholder="Confirm Password" type="password" name='confirmpassword' value={values.confirmpassword} onChange={handleChange}/> 
       {errors.confirmpassword && <P>{errors.confirmpassword}</P>}  
       <Agreement>By creating an account , I consent to processing my personal
        data with the <b>PRIVACY POLICY</b> </Agreement>
        <ButtonWrapper>
        <Button>CREATE</Button>
        </ButtonWrapper>
       </Form>
        </Wrapper>  
    </Container>
  )
}

export default Register
