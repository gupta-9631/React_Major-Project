import React, {useState} from 'react'
import Register from '../pages/Register'
import SignUpSuccess from '../pages/SignUpSuccess'

const Form = () => {
  const [formsIsSubmitted, setFormIsSubmitted] =    useState(false);
   
  const submitForm = () => {   
    setFormIsSubmitted(true);
  }
  return (
    <div>
      {!formsIsSubmitted? <Register submitForm={submitForm}/> : <SignUpSuccess />}
     
    </div>
  )
}

export default Form;
