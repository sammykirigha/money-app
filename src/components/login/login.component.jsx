import React from 'react';
import './login.styles.scss';
import FormInput from '../form-input/form.component';
import CustomButton from '../custom-button/custom-button.comp';
import { auth } from 'firebase';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
          await auth.CreateUserWithEmailAndPassword(email, password);
          this.setState({email:"", password:""});

        }catch(error){
           console.log(error)
        }

    }

    handleChange = event => {
        const {name, value} =event.target;

        this.setState({[name]: value})
    }

  render (){
      return(
         <div className="log-in">
             <h2 className="title">I have an account already</h2>
             <span>Log in with your email and password</span>

           <form onSubmit={this.handleSubmit}> 
               <FormInput
               name='email'
               type='email'
               handleChange={this.handleChange}
               value = {this.state.email}
               label='Email'
               required
               />

              <FormInput
               name='password'
               type='password'
               handleChange={this.handleChange}
               value = {this.state.password}
               label='Password'
               required
               />

               <div className="buttons">
                  <CustomButton type='submit'>Log in</CustomButton>
                  <CustomButton onClick= {signInWithGoogle}> google</CustomButton>
               </div>
           </form>
           

         </div>
      )
  }
}

export default Login