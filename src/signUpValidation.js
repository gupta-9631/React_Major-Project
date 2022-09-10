

export default function signUpValidation(values) {

      let errors={};

      if(!values.firstname){
        errors.firstname = "First name is required";
      }
      if(!values.lastname){
        errors.lastname = "Last name is required";
      }
      if(!values.email){
        errors.email = "Email is required";
      }
      else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid";  
      }
      if(!values.password){
        errors.password = "Password is required";
      }
      else if(values.password.length<5){
        errors.password = "Password is must be at least 5 characters long";
      }
      if(!values.confirmpassword){
        errors.confirmpassword = "Confirm password is required";
      }
     else if(values.confirmpassword !==values.password){
        errors.confirmpassword = "Password is mismatched";
    }
  return  errors;

}


