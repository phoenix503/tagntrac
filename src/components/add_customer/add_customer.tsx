import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./add_customer.css";
import { AiOutlineArrowLeft } from "react-icons/ai";


 const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

 // Updating the value into the hooks and showing error can be done from AddCustomer()
export const AddCustomer = () => {
   const [{ mobile, password,username,email,address }, setCredentials] = useState({
     mobile: "",
     password: "",
     username:"",
     email:"",
     address:""
   });

   
   let navigate = useNavigate();

   let  handleChange = (event : any) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case 'username':
         setCredentials({
            username: value,
            mobile:mobile,
            password: password,
            email: email,
            address:address
         })
         break;
      case 'email':
         // errors.email = Regex.test(value)? '': 'Email is not valid!';
         setCredentials({
            username: username,
            mobile:mobile,
            password: password,
            email: value,
            address:address
         })
         break;
      case 'password':
         // errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
         setCredentials({
            username: username,
            mobile:mobile,
            password: value,
            email: email,
            address:address
         })
         break;
      case 'mobile':
            // errors.mobile = value.length < 10 ? 'Mobile must be ten characters long!': '';
            setCredentials({
               username: username,
               mobile:value,
               password: password,
               email: email,
               address:address
            })
            break;   
      case 'address':
            // errors.address = value.length < 10 ? 'Address must be valid!': '';
            setCredentials({
               username: username,
               mobile:mobile,
               password: password,
               email: email,
               address:value
            })
            break;         
      default:
        break;
    }
      //   this.setState(Object.assign(this.state, { errors,[name]: value }));
      //   console.log(this.state.errors);
   }
      

    // API Call to register the user can be done from this method
let handleSubmit = (event : any) => {

  
    event.preventDefault();
   console.log(username,mobile,email,password,address)

  }

   return(
      <div>
      <div className='wrapper'>
        <div className='form-wrapper'>

           <div className="header">
           <Link className="footer" to="/" style={{ textDecoration: 'none' }}>
           <AiOutlineArrowLeft color="black" size={18} /> 
             </Link> 
             <h2 className="center">Create Customer</h2>
           </div>
         
           <form  onSubmit={handleSubmit} noValidate>
              <div className='fullName'>
                 <label htmlFor="username">Full Name</label>
                 <input type='text' name='username' placeholder="Enter Name" onChange={handleChange}/>
                 {username && username.length < 5 &&  <span style={{color: "red"}}>Please enter valid name</span>}
</div>
              <div className='email'>
                 <label htmlFor="email">Email</label>
                 <input type='email' name='email' placeholder="Enter Email" onChange={handleChange}/>
                 {email && Regex.test(email) &&  <span style={{color: "red"}}>Please enter valid email</span>}

</div>

<div className='mobile'>
                 <label htmlFor="mobile">Mobile</label>
                 <input  maxLength={10}  type='text' placeholder="Enter Mobile Number" name='mobile' onChange={handleChange}/>
                 {mobile && mobile.length < 10 &&  <span style={{color: "red"}}>Mobile Should be of 10 digits</span>}
</div>


<div className='address'>
                 <label htmlFor="address">Address</label>
                 <input type='text' placeholder="Enter Address" name='address' onChange={handleChange}/>
                 {address && address.length < 5 &&  <span style={{color: "red"}}>Please enter valid address</span>}

</div>
              <div className='password'>
                 <label htmlFor="password">Password</label>
                 <input type='password' placeholder="Enter Password" name='password' onChange={handleChange}/>
                 {password &&  password.length < 5 &&  <span style={{color: "red"}}>Please enter valid name</span>}
                 
</div>              
              <div className='submit'>
                 <button>Create</button>
              </div>
         </form>
     
     </div>
  </div>
      </div>
   )
}