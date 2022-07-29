import React from "react";
import { Link } from "react-router-dom";
import "./add_delivery_partner.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface SignUpProps {
    name?: any;
    value?: any;
 }
 interface SignUpState {
    username : string,
    email : string,
    password : string,
    errors : {
       username :  string,
       email : string,
       password : string,
       mobile: string,
       company: string,
    }
 }

 const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
 export class AddDeliveryPartner extends React.Component<SignUpProps, SignUpState>
 {
     
   constructor(props: SignUpProps) {
      super(props);
      const initialState = {
         username : '',
         email : '',
         password : '',
         mobile: '',
         company: '',
         errors : {
           username : '',
           email : '',
           password : '',
           mobile: '',
           company: ''
         } 
       }
       this.state = initialState;
       this.handleChange = this.handleChange.bind(this);
 }

 // Updating the values to the state variables is done in this method
 handleChange = (event : any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
         errors.username = value.length < 5 ? 'Username must be 5 characters long!': '';
         break;
      case 'email':
         errors.email = Regex.test(value)? '': 'Email is not valid!';
         break;
      case 'password':
         errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
         break;
      case 'mobile':
            errors.mobile = value.length < 10 ? 'Mobile must be ten characters long!': '';
            break;   
      case 'company':
            errors.company = value.length < 10 ? 'company must be valid!': '';
            break;         
      default:
        break;
    }
        this.setState(Object.assign(this.state, { errors,[name]: value }));
        console.log(this.state.errors);
  }
      

  // API call to register the delivery partner and showing error on page can be done here
handleSubmit = (event : any) => {
    event.preventDefault();
    let validity = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if(validity === true){
       console.log("Registering can be done");
    }else{
       console.log("You cannot be registered!!!")
    }
  }

  render() {
    const {errors} = this.state   
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>

           <div className="header">
           <Link className="footer" to="/" style={{ textDecoration: 'none' }}>
           <AiOutlineArrowLeft color="black" size={18} /> 
             </Link> 
             <h2 className="center">Add Delivery Partner</h2>
           </div>
         
           <form onSubmit={this.handleSubmit} noValidate >
              <div className='fullName'>
                 <label htmlFor="fullName">Full Name</label>
                 <input type='text' name='fullName' placeholder="Enter Name" onChange={this.handleChange}/>
                  {errors.username.length > 0 &&  <span style={{color: "red"}}>{errors.username}</span>}
</div>
              <div className='email'>
                 <label htmlFor="email">Email</label>
                 <input type='email' name='email' placeholder="Enter Email" onChange={this.handleChange}/>
{errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
</div>

<div className='mobile'>
                 <label htmlFor="mobile">Mobile</label>
                 <input  maxLength={10}  type='text' placeholder="Enter Mobile Number" name='mobile' onChange={this.handleChange}/>
{errors.mobile.length > 0 &&  <span style={{color: "red"}}>{errors.mobile}</span>}
</div>


<div className='company'>
                 <label htmlFor="company">company</label>
                 <input type='text' placeholder="Enter Company" name='company' onChange={this.handleChange}/>
{errors.company.length > 0 &&  <span style={{color: "red"}}>{errors.company}</span>}
</div>
              <div className='password'>
                 <label htmlFor="password">Password</label>
                 <input type='password' placeholder="Enter Password" name='password' onChange={this.handleChange}/>
                 {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
</div>              
              <div className='submit'>
                 <button>Create</button>
              </div>
         </form>
     
     </div>
  </div>
 );
}
}